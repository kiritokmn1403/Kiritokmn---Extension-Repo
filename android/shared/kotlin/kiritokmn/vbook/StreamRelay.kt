package kiritokmn.vbook

import android.util.Base64
import okhttp3.OkHttpClient
import okhttp3.Request
import java.io.BufferedInputStream
import java.io.InputStream
import java.io.OutputStream
import java.net.InetAddress
import java.net.ServerSocket
import java.net.Socket
import java.net.URI
import java.net.URLDecoder
import java.security.SecureRandom
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit

/**
 * 0.0.5: loopback stream relay for hosts that only answer HTTP/2 (NguonC / streamc.xyz segment CDNs return 403 to
 * every HTTP/1.1 request). The players of Aniyomi (mpv / ffmpeg) speak HTTP/1.1 only, so a source whose track.js
 * returns `relay: true` gets its stream URL replaced by http://127.0.0.1:<port>/<session>/...; this relay fetches
 * the real URL with the app's OkHttp client (HTTP/2 + the headers returned by the source) and pipes the bytes back.
 * HLS playlists are rewritten so that segments, keys and nested playlists also go through the relay.
 * Only reachable from the device itself (bound to 127.0.0.1) and only with an unguessable session id.
 */
object StreamRelay {
    private class Session(val headers: Map<String, String>, val playlist: String?)

    private const val MAX_SESSIONS = 48
    private val sessions = object : LinkedHashMap<String, Session>(64, 0.75f, true) {
        override fun removeEldestEntry(eldest: MutableMap.MutableEntry<String, Session>?): Boolean = size > MAX_SESSIONS
    }
    private val pool = Executors.newCachedThreadPool { r -> Thread(r, "vb-relay").apply { isDaemon = true } }
    private val random = SecureRandom()
    @Volatile private var server: ServerSocket? = null
    @Volatile private var http: OkHttpClient? = null
    private val B64 = Base64.URL_SAFE or Base64.NO_WRAP or Base64.NO_PADDING
    private val scheme = Regex("^[a-zA-Z][a-zA-Z0-9+.-]*:.*")
    private val uriAttr = Regex("URI=\"([^\"]+)\"")

    private fun enc(s: String): String = Base64.encodeToString(s.toByteArray(Charsets.UTF_8), B64)
    private fun dec(s: String): String = String(Base64.decode(s, B64), Charsets.UTF_8)

    @Synchronized
    private fun ensureServer(client: OkHttpClient): Int {
        server?.let { if (!it.isClosed) return it.localPort }
        http = client.newBuilder().connectTimeout(20, TimeUnit.SECONDS).readTimeout(60, TimeUnit.SECONDS).build()
        val s = ServerSocket(0, 50, InetAddress.getByName("127.0.0.1"))
        server = s
        val t = Thread({
            while (!s.isClosed) {
                try {
                    val c = s.accept()
                    pool.execute {
                        try { handle(c) } catch (e: Throwable) { } finally { try { c.close() } catch (e: Throwable) { } }
                    }
                } catch (e: Throwable) {
                    if (s.isClosed) break
                }
            }
        }, "vb-relay-accept")
        t.isDaemon = true
        t.start()
        return s.localPort
    }

    /** Returns a loopback URL that serves [url] (a stream, an HLS playlist or a data: URI holding a playlist). */
    fun register(client: OkHttpClient, url: String, headers: Map<String, String>): String {
        val port = ensureServer(client)
        val sid = ByteArray(12).also { random.nextBytes(it) }.joinToString("") { String.format("%02x", it) }
        val base = "http://127.0.0.1:$port/$sid"
        var playlist: String? = null
        if (url.startsWith("data:")) {
            val comma = url.indexOf(',')
            if (comma < 0) return url
            val raw = url.substring(comma + 1)
            val text = if (url.substring(0, comma).contains(";base64")) String(Base64.decode(raw, Base64.DEFAULT), Charsets.UTF_8) else URLDecoder.decode(raw, "UTF-8")
            if (!text.trimStart().startsWith("#EXTM3U")) return url
            playlist = rewritePlaylist(text, null, base)
        }
        synchronized(sessions) { sessions[sid] = Session(headers, playlist) }
        if (playlist != null) return "$base/index.m3u8"
        val lower = url.substringBefore('?').lowercase()
        return "$base/u/${enc(url)}/" + (if (lower.endsWith(".m3u8")) "index.m3u8" else "video.mp4")
    }

    private fun relayUrl(relayBase: String, target: String, playlistUrl: String?, name: String): String {
        val t = target.trim()
        val absolute = if (playlistUrl != null && !scheme.matches(t)) {
            try { URI(playlistUrl).resolve(t.replace(" ", "%20")).toString() } catch (e: Exception) { t }
        } else t
        if (!absolute.startsWith("http://") && !absolute.startsWith("https://")) return target
        return "$relayBase/u/${enc(absolute)}/$name"
    }

    private fun rewritePlaylist(text: String, playlistUrl: String?, relayBase: String): String =
        text.split('\n').joinToString("\n") { raw ->
            val line = raw.trimEnd('\r')
            when {
                line.isBlank() -> line
                line.startsWith("#") -> uriAttr.replace(line) { m ->
                    val name = when {
                        line.startsWith("#EXT-X-KEY") || line.startsWith("#EXT-X-SESSION-KEY") -> "key.bin"
                        line.startsWith("#EXT-X-MAP") -> "init.mp4"
                        else -> "index.m3u8"
                    }
                    "URI=\"" + relayUrl(relayBase, m.groupValues[1], playlistUrl, name) + "\""
                }
                else -> {
                    val lower = line.substringBefore('?').lowercase()
                    val name = if (lower.endsWith(".m3u8")) "index.m3u8" else if (lower.endsWith(".m4s") || lower.endsWith(".mp4")) "seg.m4s" else "seg.ts"
                    relayUrl(relayBase, line, playlistUrl, name)
                }
            }
        }

    private fun readLine(inp: InputStream): String? {
        val sb = StringBuilder()
        while (sb.length < 16384) {
            val b = inp.read()
            if (b < 0) return if (sb.isEmpty()) null else sb.toString()
            if (b == '\n'.code) return sb.toString().trimEnd('\r')
            sb.append(b.toChar())
        }
        return sb.toString()
    }

    private fun respond(out: OutputStream, code: Int, msg: String, type: String, body: ByteArray, head: Boolean = false) {
        out.write("HTTP/1.1 $code $msg\r\nContent-Type: $type\r\nContent-Length: ${body.size}\r\nCache-Control: no-store\r\nConnection: close\r\n\r\n".toByteArray(Charsets.ISO_8859_1))
        if (!head) out.write(body)
        out.flush()
    }

    private fun handle(sock: Socket) {
        sock.soTimeout = 30000
        val inp = BufferedInputStream(sock.getInputStream())
        val out = sock.getOutputStream()
        val parts = (readLine(inp) ?: return).split(' ')
        if (parts.size < 2) return
        val method = parts[0]
        var range: String? = null
        while (true) {
            val l = readLine(inp) ?: break
            if (l.isEmpty()) break
            val i = l.indexOf(':')
            if (i > 0 && l.substring(0, i).equals("Range", true)) range = l.substring(i + 1).trim()
        }
        val seg = parts[1].substringBefore('?').trim('/').split('/')
        val session = synchronized(sessions) { sessions[seg[0]] }
        val head = method == "HEAD"
        if (session == null || (method != "GET" && !head)) { respond(out, 404, "Not Found", "text/plain", "not found".toByteArray()); return }
        val relayBase = "http://127.0.0.1:${sock.localPort}/${seg[0]}"
        if (seg.size == 2 && seg[1] == "index.m3u8" && session.playlist != null) {
            respond(out, 200, "OK", "application/vnd.apple.mpegurl", session.playlist.toByteArray(Charsets.UTF_8), head)
            return
        }
        val client = http
        if (client == null || seg.size < 3 || seg[1] != "u") { respond(out, 404, "Not Found", "text/plain", "not found".toByteArray()); return }
        val target = try { dec(seg[2]) } catch (e: Exception) { respond(out, 400, "Bad Request", "text/plain", "bad url".toByteArray()); return }
        val rb = Request.Builder().url(target)
        session.headers.forEach { (k, v) ->
            if (!k.equals("Range", true) && !k.equals("Host", true) && !k.equals("Accept-Encoding", true)) try { rb.header(k, v) } catch (e: Exception) { }
        }
        if (range != null) rb.header("Range", range)
        var started = false
        try {
            client.newCall(rb.build()).execute().use { res ->
                val body = res.body
                val ct = body?.contentType()?.toString() ?: ""
                val isList = body != null && res.isSuccessful && (ct.contains("mpegurl", true) || try { res.peekBody(7).string().startsWith("#EXTM3U") } catch (e: Exception) { false })
                if (isList) {
                    val text = rewritePlaylist(body!!.string(), res.request.url.toString(), relayBase)
                    started = true
                    respond(out, 200, "OK", "application/vnd.apple.mpegurl", text.toByteArray(Charsets.UTF_8), head)
                    return
                }
                val name = seg.last()
                val type = if (ct.isBlank() || ct.startsWith("image/", true) || ct.startsWith("text/", true) && res.isSuccessful) (if (name.endsWith(".ts")) "video/mp2t" else if (name.endsWith(".mp4") || name.endsWith(".m4s")) "video/mp4" else "application/octet-stream") else ct
                val sb = StringBuilder("HTTP/1.1 ${res.code} ${res.message.ifBlank { if (res.code == 206) "Partial Content" else "OK" }}\r\n")
                sb.append("Content-Type: $type\r\n")
                val len = body?.contentLength() ?: 0L
                if (len >= 0) sb.append("Content-Length: $len\r\n")
                res.header("Content-Range")?.let { sb.append("Content-Range: $it\r\n") }
                if (res.code == 206 || res.header("Accept-Ranges") != null) sb.append("Accept-Ranges: bytes\r\n")
                sb.append("Connection: close\r\n\r\n")
                started = true
                out.write(sb.toString().toByteArray(Charsets.ISO_8859_1))
                if (!head && body != null) body.byteStream().use { it.copyTo(out, 64 * 1024) }
                out.flush()
            }
        } catch (e: Exception) {
            if (!started) try { respond(out, 502, "Bad Gateway", "text/plain", (e.message ?: "relay error").toByteArray()) } catch (e2: Exception) { }
        }
    }
}
