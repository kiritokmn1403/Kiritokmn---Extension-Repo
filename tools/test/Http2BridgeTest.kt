// 0.0.5: plain-JVM test of android/shared/kotlin/kiritokmn/vbook/Http2Bridge.kt (no Android, no OkHttp, no network).
// A fake "CDN" Fetcher serves playlists / segments (labelled image/png like NguonC); HttpURLConnection plays the
// HTTP/1.1 player (mpv/ffmpeg). Covers data: playlists (also a full film, 1500 segments), master/variant/key/rendition
// rewriting, Range, HEAD, 403 passthrough, unknown token.
// Run (Kotlin compiler 2.x, JDK 17+), from the repo root:
//   kotlinc android/shared/kotlin/kiritokmn/vbook/Http2Bridge.kt -jvm-target 1.8 -d .build/h2/main
//   kotlinc tools/test/Http2BridgeTest.kt -cp .build/h2/main -d .build/h2/test -nowarn
//   kotlin -cp .build/h2/main:.build/h2/test Http2BridgeTestKt        (Windows: ';' instead of ':')
import kiritokmn.vbook.Http2Bridge
import java.io.ByteArrayInputStream
import java.net.HttpURLConnection
import java.net.URL
import java.util.Base64

var failures = 0
fun check(name: String, cond: Boolean, info: String = "") { println((if (cond) "PASS " else "FAIL ") + name + (if (info.isNotEmpty()) "  [$info]" else "")); if (!cond) failures++ }

class Resp(val code: Int, val body: ByteArray, val headers: Map<String, List<String>>)
fun get(url: String, method: String = "GET", range: String? = null): Resp {
    val c = URL(url).openConnection(java.net.Proxy.NO_PROXY) as HttpURLConnection
    c.requestMethod = method; if (range != null) c.setRequestProperty("Range", range)
    c.connectTimeout = 5000; c.readTimeout = 10000
    return try {
        val code = c.responseCode
        val s = if (code >= 400) c.errorStream else c.inputStream
        Resp(code, s?.readBytes() ?: ByteArray(0), c.headerFields.filterKeys { it != null })
    } catch (e: Exception) { Resp(-1, (e.javaClass.simpleName + ": " + e.message).toByteArray(), emptyMap()) }
}

// fake CDN: segment bytes = "SEG:" + url, labelled image/png like NguonC; honours Range; records request headers
val seen = mutableListOf<Pair<String, Map<String, String>>>()
val cdn = Http2Bridge.Fetcher { url, h ->
    synchronized(seen) { seen.add(url to h) }
    when {
        url.endsWith("master.m3u8") -> Http2Bridge.Upstream(200, mapOf("Content-Type" to "application/vnd.apple.mpegurl"),
            ByteArrayInputStream("#EXTM3U\n#EXT-X-STREAM-INF:BANDWIDTH=800000\nhd/index.m3u8\n#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID=\"a\",URI=\"audio/a.m3u8\"\n".toByteArray())) {}
        url.endsWith("hd/index.m3u8") -> Http2Bridge.Upstream(200, emptyMap(),
            ByteArrayInputStream("#EXTM3U\r\n#EXT-X-KEY:METHOD=AES-128,URI=\"../key.bin\"\r\n#EXTINF:4,\r\nseg0.png\r\n#EXTINF:4,\r\n/abs/seg1.png?t=1\r\n#EXT-X-ENDLIST\r\n".toByteArray())) {}
        url.contains("forbidden") -> Http2Bridge.Upstream(403, emptyMap(), ByteArrayInputStream("blocked".toByteArray())) {}
        else -> {
            val full = ("SEG:" + url).toByteArray()
            val r = h["Range"]
            if (r != null) {
                val (a, b) = r.removePrefix("bytes=").split("-").map { it.toInt() }
                val part = full.copyOfRange(a, minOf(b + 1, full.size))
                Http2Bridge.Upstream(206, mapOf("Content-Type" to "image/png", "Content-Range" to "bytes $a-${a + part.size - 1}/${full.size}", "Content-Length" to "${part.size}"), ByteArrayInputStream(part)) {}
            } else Http2Bridge.Upstream(200, mapOf("Content-Type" to "image/png", "Content-Length" to "${full.size}"), ByteArrayInputStream(full)) {}
        }
    }
}
val H = mapOf("User-Agent" to "UA-test", "Referer" to "https://embed.example/")

fun dataPlaylist(n: Int): String {
    val sb = StringBuilder("#EXTM3U\n#EXT-X-TARGETDURATION:4\n")
    for (i in 0 until n) sb.append("#EXTINF:4.0,\nhttps://s1.cdn.example/stream/v/aaaaaaaabbbbbbbbccccccccdddddddd/streamaaa${"%04d".format(i)}.png?sig=0123456789abcdef0123456789abcdef&exp=1763000000\n")
    sb.append("#EXT-X-ENDLIST\n")
    return "data:application/x-mpegURL;base64," + Base64.getEncoder().encodeToString(sb.toString().toByteArray())
}
fun segLines(pl: String) = pl.lines().filter { it.isNotBlank() && !it.startsWith("#") }

fun main() {
    // 1. small data: playlist (what NguonC returns), then fetch a segment through the bridge
    val u1 = Http2Bridge.register(dataPlaylist(3), H, cdn)
    val r1 = get(u1)
    check("data: playlist (3 segments) served", r1.code == 200, "HTTP ${r1.code}, url ${u1.length} chars")
    val segs = segLines(String(r1.body))
    check("all segment URIs rewritten to the bridge", segs.size == 3 && segs.all { it.startsWith("http://127.0.0.1:") && it.endsWith(".ts") }, segs.firstOrNull() ?: "")
    if (segs.isNotEmpty()) {
        val s = get(segs[0])
        check("segment proxied, bytes intact", s.code == 200 && String(s.body).startsWith("SEG:https://s1.cdn.example/"), "HTTP ${s.code}")
        check("image/png relabelled", s.headers["Content-Type"]?.firstOrNull() == "application/octet-stream", s.headers["Content-Type"].toString())
        check("source headers forwarded upstream", seen.last().second == H, seen.last().second.toString())
        val rr = get(segs[1], range = "bytes=0-3")
        check("Range forwarded, 206 + 4 bytes", rr.code == 206 && String(rr.body) == "SEG:", "HTTP ${rr.code} '${String(rr.body)}'")
        val hd = get(segs[2], method = "HEAD")
        check("HEAD answered", hd.code == 200, "HTTP ${hd.code}")
    }

    // 2. remote master playlist with relative variant / key / rendition URIs
    val u2 = Http2Bridge.register("https://cdn.example/v/master.m3u8", H, cdn)
    val m = get(u2); val mt = String(m.body)
    val variant = segLines(mt).firstOrNull() ?: ""
    check("master playlist: variant -> bridge playlist", m.code == 200 && variant.contains("/p/") && variant.endsWith(".m3u8"), variant.take(60))
    check("master playlist: EXT-X-MEDIA URI -> bridge playlist", Regex("URI=\"http://127\\.0\\.0\\.1:\\d+/[0-9a-f]+/p/[0-9a-f]+\\.m3u8\"").containsMatchIn(mt))
    val v = get(variant); val vt = String(v.body)
    check("variant served", v.code == 200, "HTTP ${v.code}")
    check("key URI -> .key on bridge", Regex("URI=\"http://127\\.0\\.0\\.1:\\d+/[0-9a-f]+/s/[0-9a-f]+\\.key\"").containsMatchIn(vt))
    val vs = segLines(vt)
    if (vs.size == 2) {
        val a = String(get(vs[0]).body); val b = String(get(vs[1]).body)
        check("relative segment resolved", a == "SEG:https://cdn.example/v/hd/seg0.png", a)
        check("root-relative segment resolved", b == "SEG:https://cdn.example/abs/seg1.png?t=1", b)
    } else check("variant has 2 segments", false, vs.toString())

    // 3. errors
    check("unknown token -> 404", get(u1.replace(Regex("/[0-9a-f]{24}/"), "/000000000000000000000000/")).code == 404)
    val u3 = Http2Bridge.register("https://cdn.example/forbidden/x.m3u8", H, cdn)
    check("upstream 403 passed through", get(u3).code == 403)

    // 4. full-length film: NguonC hands the whole playlist as a data: URI (~1500 segments for 100 min)
    val u4 = Http2Bridge.register(dataPlaylist(1500), H, cdn)
    val r4 = get(u4)
    check("data: playlist of a full film (1500 segments) served", r4.code == 200 && segLines(String(r4.body)).size == 1500, "HTTP ${r4.code}, player URL ${u4.length} chars")
    if (r4.code == 200) { val s = get(segLines(String(r4.body)).last()); check("last segment of the film proxied", s.code == 200 && String(s.body).contains("streamaaa1499.png"), "HTTP ${s.code}") }

    // 5. a direct file stream (not HLS)
    val u5 = Http2Bridge.register("https://cdn.example/movie.mp4?x=1", H, cdn)
    val r5 = get(u5, range = "bytes=0-3")
    check("direct mp4 stream: short URL, Range works", u5.endsWith("/s/0.mp4") && r5.code == 206 && String(r5.body) == "SEG:", "$u5 HTTP ${r5.code}")

    println(if (failures == 0) "ALL PASSED" else "$failures FAILED")
    System.exit(if (failures == 0) 0 else 1)
}
