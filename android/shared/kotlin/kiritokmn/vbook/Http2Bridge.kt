package kiritokmn.vbook

import java.io.ByteArrayOutputStream
import java.io.InputStream
import java.io.OutputStream
import java.net.InetAddress
import java.net.ServerSocket
import java.net.Socket
import java.net.URI
import java.security.SecureRandom
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.Executors

/**
 * 0.0.5 — loopback HTTP/1.1 -> HTTP/2 bridge for streams whose CDN refuses HTTP/1.1 (NguonC: every segment answers
 * 403 "you have been blocked" to HTTP/1.1, 200 to HTTP/2 with the same headers). The players of Aniyomi / Nekoyomi
 * (mpv + ffmpeg) only speak HTTP/1.1, so a stream flagged `http2` by its source is played through
 * http://127.0.0.1:<port>/<token>/... and fetched upstream with the app's OkHttp client (HTTP/2 via ALPN).
 *
 * It is not an anti-bot bypass: the upstream request carries exactly the headers the source returned.
 * The server only listens on the loopback interface and only serves URLs reachable from a registered stream token.
 * This file has no Android / OkHttp dependency (the caller supplies [Fetcher]) so it can be tested on a plain JVM.
 */
object Http2Bridge {
    class Upstream(val code: Int, val headers: Map<String, String>, val body: InputStream?, val close: () -> Unit)
    fun interface Fetcher { fun open(url: String, headers: Map<String, String>): Upstream }

    private class Entry(val url: String, val headers: Map<String, String>, val fetcher: Fetcher)

    private val entries = ConcurrentHashMap<String, Entry>()
    private val order = ArrayList<String>()
    private val pool = Executors.newCachedThreadPool { r -> Thread(r, "kmn-h2-bridge").apply { isDaemon = true } }
    private val random = SecureRandom()
    @Volatile private var server: ServerSocket? = null

    /** Registers a stream and returns the loopback URL to hand to the player. */
    @Synchronized
    fun register(url: String, headers: Map<String, String>, fetcher: Fetcher): String {
        val s = server?.takeIf { !it.isClosed } ?: ServerSocket(0, 50, InetAddress.getByName("127.0.0.1")).also { ss ->
            server = ss
            Thread({ acceptLoop(ss) }, "kmn-h2-bridge-accept").apply { isDaemon = true }.start()
        }
        val token = ByteArray(12).also { random.nextBytes(it) }.joinToString("") { "%02x".format(it) }
        entries[token] = Entry(url, headers, fetcher)
        order.add(token)
        while (order.size > 64) entries.remove(order.removeAt(0))
        val playlist = url.startsWith("data:") || isPlaylistUrl(url)
        // The registered URL itself is addressed as ROOT ("0", never a valid hex string), not hex-encoded into the path:
        // NguonC hands the whole playlist of a film as a data: URI (~1500 segments, ~300 KB), which as hex would make a
        // ~600 KB request line that no player sends and readHead() refuses.
        return "http://127.0.0.1:${s.localPort}/$token/" + (if (playlist) "p/$ROOT.m3u8" else "s/$ROOT" + extOf(url))
    }

    private const val ROOT = "0"

    private fun acceptLoop(ss: ServerSocket) {
        while (!ss.isClosed) {
            val c = try { ss.accept() } catch (e: Exception) { break }
            pool.execute { try { c.use { handle(it) } } catch (e: Exception) { /* player closed the connection */ } }
        }
    }

    private fun handle(sock: Socket) {
        sock.soTimeout = 30000
        val inp = sock.getInputStream()
        val out = sock.getOutputStream()
        val head = readHead(inp) ?: return
        val lines = head.split("\r\n")
        val rl = lines[0].split(" ")
        if (rl.size < 2 || (rl[0] != "GET" && rl[0] != "HEAD")) return simple(out, 405, "Method Not Allowed")
        var range: String? = null
        for (l in lines.drop(1)) { val i = l.indexOf(':'); if (i > 0 && l.substring(0, i).equals("Range", true)) range = l.substring(i + 1).trim() }
        // path = /<token>/<p|s>/<hex(url) | ROOT>.<ext>
        val parts = rl[1].substringBefore('?').trim('/').split("/")
        val e = if (parts.size == 3) entries[parts[0]] else null
        val key = parts.getOrNull(2)?.substringBefore('.')
        val target = if (e == null || key == null) null else if (key == ROOT) e.url else unhex(key)
        if (e == null || target == null) return simple(out, 404, "Not Found")
        val self = "http://127.0.0.1:${sock.localPort}/${parts[0]}/"
        try {
            if (parts[1] == "p") servePlaylist(out, e, target, self, rl[0] == "HEAD") else serveMedia(out, e, target, range, rl[0] == "HEAD")
        } catch (ex: java.net.SocketException) {
            throw ex
        } catch (ex: Exception) {
            simple(out, 502, "Bad Gateway: " + (ex.message ?: ex.javaClass.simpleName))
        }
    }

    private fun servePlaylist(out: OutputStream, e: Entry, target: String, self: String, headOnly: Boolean) {
        val text: String
        val base: String?
        if (target.startsWith("data:")) {
            val comma = target.indexOf(',')
            val payload = target.substring(comma + 1)
            text = if (target.substring(0, comma).contains(";base64", true)) String(unbase64(payload), Charsets.UTF_8) else java.net.URLDecoder.decode(payload, "UTF-8")
            base = null
        } else {
            val up = e.fetcher.open(target, e.headers)
            try {
                if (up.code != 200 && up.code != 206) return simple(out, up.code, "Upstream")
                text = String(up.body?.readBytes() ?: ByteArray(0), Charsets.UTF_8)
            } finally { up.close() }
            base = target
        }
        val body = rewritePlaylist(text, base, self).toByteArray(Charsets.UTF_8)
        out.write(("HTTP/1.1 200 OK\r\nContent-Type: application/vnd.apple.mpegurl\r\nContent-Length: ${body.size}\r\nCache-Control: no-store\r\nConnection: close\r\n\r\n").toByteArray(Charsets.ISO_8859_1))
        if (!headOnly) out.write(body)
        out.flush()
    }

    /** Points every URI of an HLS playlist (variants, segments, keys, init sections, renditions) back at the bridge. */
    internal fun rewritePlaylist(text: String, base: String?, self: String): String {
        val attr = Regex("URI=\"([^\"]+)\"")
        val master = text.contains("#EXT-X-STREAM-INF")
        return text.split("\n").joinToString("\n") { raw ->
            val line = raw.trimEnd('\r')
            when {
                line.isBlank() -> line
                line.startsWith("#") -> attr.replace(line) { m ->
                    val abs = resolve(base, m.groupValues[1])
                    val pl = line.startsWith("#EXT-X-MEDIA") || line.startsWith("#EXT-X-I-FRAME-STREAM-INF")
                    if (abs == null) m.value else "URI=\"" + local(self, abs, pl, if (line.startsWith("#EXT-X-KEY") || line.startsWith("#EXT-X-SESSION-KEY")) ".key" else null) + "\""
                }
                else -> resolve(base, line.trim())?.let { local(self, it, master || isPlaylistUrl(it), null) } ?: line
            }
        }
    }

    private fun local(self: String, abs: String, playlist: Boolean, ext: String?): String =
        self + (if (playlist) "p/" else "s/") + hex(abs) + (if (playlist) ".m3u8" else ext ?: extOf(abs))

    private fun serveMedia(out: OutputStream, e: Entry, target: String, range: String?, headOnly: Boolean) {
        val up = e.fetcher.open(target, if (range == null) e.headers else e.headers + ("Range" to range))
        try {
            val sb = StringBuilder("HTTP/1.1 ").append(up.code).append(if (up.code == 206) " Partial Content" else if (up.code == 200) " OK" else " Upstream").append("\r\n")
            // The CDN labels MPEG-TS segments as image/png; ffmpeg does not care, but never forward a wrong length/encoding.
            for ((k, v) in up.headers) {
                val n = k.lowercase()
                if (n == "content-length" || n == "content-range" || n == "accept-ranges" || n == "last-modified" || n == "etag") sb.append(k).append(": ").append(v).append("\r\n")
                if (n == "content-type") sb.append("Content-Type: ").append(if (v.startsWith("image/") || v.startsWith("text/")) "application/octet-stream" else v).append("\r\n")
            }
            sb.append("Connection: close\r\n\r\n")
            out.write(sb.toString().toByteArray(Charsets.ISO_8859_1))
            val body = up.body
            if (!headOnly && body != null) {
                val buf = ByteArray(64 * 1024)
                while (true) { val n = body.read(buf); if (n < 0) break; out.write(buf, 0, n) }
            }
            out.flush()
        } finally { up.close() }
    }

    private fun readHead(inp: InputStream): String? {
        val bo = ByteArrayOutputStream()
        var st = 0
        while (bo.size() < 16384) {
            val b = inp.read()
            if (b < 0) return null
            bo.write(b)
            st = when { b == '\r'.code && (st == 0 || st == 2) -> st + 1; b == '\n'.code && (st == 1 || st == 3) -> st + 1; else -> 0 }
            if (st == 4) return String(bo.toByteArray(), Charsets.ISO_8859_1).trimEnd()
        }
        return null
    }

    private fun simple(out: OutputStream, code: Int, msg: String) {
        val b = msg.toByteArray(Charsets.UTF_8)
        out.write("HTTP/1.1 $code ${msg.take(40).replace(Regex("[^ -~]"), "?")}\r\nContent-Type: text/plain; charset=utf-8\r\nContent-Length: ${b.size}\r\nConnection: close\r\n\r\n".toByteArray(Charsets.ISO_8859_1))
        out.write(b); out.flush()
    }

    private fun resolve(base: String?, ref: String): String? = try {
        if (ref.startsWith("http://") || ref.startsWith("https://")) ref
        else if (base == null || ref.startsWith("data:")) null
        else URI(base).resolve(ref).toString()
    } catch (e: Exception) { null }

    private fun pathOf(url: String) = url.substringBefore('?').substringBefore('#')
    private fun isPlaylistUrl(url: String) = pathOf(url).endsWith(".m3u8", true) || pathOf(url).endsWith(".m3u", true)
    // ffmpeg >= 7.1 only accepts HLS segments with a known media extension, and these CDNs disguise MPEG-TS as ".png".
    private val mediaExt = setOf("ts", "m4s", "mp4", "m4v", "m4a", "aac", "mp3", "ac3", "eac3", "vtt", "webvtt", "cmfv", "cmfa", "mkv", "webm", "flv", "mov")
    private fun extOf(url: String): String { val x = pathOf(url).substringAfterLast('/', "").substringAfterLast('.', "").lowercase(); return if (x in mediaExt) ".$x" else ".ts" }

    private fun hex(s: String) = s.toByteArray(Charsets.UTF_8).joinToString("") { "%02x".format(it) }
    private fun unhex(h: String): String? = try {
        if (h.isEmpty() || h.length % 2 != 0) null else String(ByteArray(h.length / 2) { i -> h.substring(2 * i, 2 * i + 2).toInt(16).toByte() }, Charsets.UTF_8)
    } catch (e: Exception) { null }

    // java.util.Base64 needs API 26 and android.util.Base64 is not available on a plain JVM
    private fun unbase64(s: String): ByteArray {
        val abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
        val out = ByteArrayOutputStream()
        var acc = 0; var bits = 0
        for (ch in s) {
            val v = when (ch) { '-' -> 62; '_' -> 63; else -> abc.indexOf(ch) }
            if (v < 0) continue
            acc = (acc shl 6) or v; bits += 6
            if (bits >= 8) { bits -= 8; out.write((acc shr bits) and 0xff) }
        }
        return out.toByteArray()
    }
}
