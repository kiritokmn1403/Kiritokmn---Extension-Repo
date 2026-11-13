package kiritokmn.vbook

import android.content.SharedPreferences
import okhttp3.Headers.Companion.toHeaders
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject
import org.jsoup.Jsoup
import org.jsoup.nodes.Document
import org.mozilla.javascript.Context
import org.mozilla.javascript.Function
import org.mozilla.javascript.ScriptableObject
import java.net.URI
import java.nio.charset.Charset
import java.util.concurrent.TimeUnit

/** Host application context without depending on the app's DI library (Injekt). */
fun appContext(): android.app.Application =
    Class.forName("android.app.ActivityThread").getMethod("currentApplication").invoke(null) as android.app.Application

/** One source definition read from assets/vb/sources.json. */
data class SourceDef(
    val id: String,
    val name: String,
    val lang: String,
    val baseUrl: String,
    val type: String,
    val nsfw: Boolean,
    val sourceId: Long,
    val domains: List<String>,
    /** 0.0.4: extra settings from plugin.json "config" (key, title, summary, default), e.g. TikTok/Douyin API server. */
    val prefs: List<Array<String>> = emptyList(),
)

fun loadSourceDefs(json: String): List<SourceDef> {
    val arr = JSONArray(json)
    return (0 until arr.length()).map { i ->
        val o = arr.getJSONObject(i)
        val doms = o.optJSONArray("domains")
        SourceDef(
            id = o.getString("id"),
            name = o.getString("name"),
            lang = o.optString("lang", "all"),
            baseUrl = o.getString("baseUrl").trimEnd('/'),
            type = o.getString("type"),
            nsfw = o.optBoolean("nsfw"),
            sourceId = o.getLong("sourceId"),
            domains = if (doms == null) emptyList() else (0 until doms.length()).map { doms.getString(it) },
            prefs = o.optJSONArray("prefs")?.let { a -> (0 until a.length()).map { j -> a.getJSONObject(j).let { p -> arrayOf(p.getString("key"), p.optString("title", p.getString("key")), p.optString("summary"), p.optString("default")) } } } ?: emptyList(),
        )
    }
}

/** Object exposed to JavaScript as `__host`. Public methods are callable from scripts through Rhino's Java bridge. */
class VBookHost(
    private val client: OkHttpClient,
    private val prefs: SharedPreferences,
    private val def: SourceDef,
) {
    class HostResponse(
        @JvmField val status: Int,
        @JvmField val url: String,
        @JvmField val headers: String,
        private val bytes: ByteArray,
        private val charset: Charset?,
    ) {
        fun text(cs: String?): String {
            val c = try {
                if (!cs.isNullOrBlank()) Charset.forName(cs) else null
            } catch (e: Exception) { null } ?: charset ?: sniff()
            return String(bytes, c)
        }
        private fun sniff(): Charset {
            val head = String(bytes, 0, minOf(bytes.size, 4096), Charsets.ISO_8859_1)
            val m = Regex("<meta[^>]+charset=[\"']?([\\w-]+)", RegexOption.IGNORE_CASE).find(head)
            return try { if (m != null) Charset.forName(m.groupValues[1]) else Charsets.UTF_8 } catch (e: Exception) { Charsets.UTF_8 }
        }
        fun base64(): String = android.util.Base64.encodeToString(bytes, android.util.Base64.NO_WRAP)
        fun size(): Int = bytes.size
    }

    private val shortClient by lazy {
        client.newBuilder().connectTimeout(20, TimeUnit.SECONDS).readTimeout(40, TimeUnit.SECONDS).build()
    }

    fun request(url: String, method: String, headersJson: String, body: String?): HostResponse {
        val h = JSONObject(headersJson)
        val map = mutableMapOf<String, String>()
        h.keys().forEach { k -> map[k] = h.optString(k) }
        val m = method.uppercase()
        val reqBody = if (m == "GET" || m == "HEAD") {
            null
        } else {
            val ct = map.entries.firstOrNull { it.key.equals("content-type", true) }?.value ?: "application/x-www-form-urlencoded"
            (body ?: "").toRequestBody(ct.toMediaTypeOrNull())
        }
        val req = Request.Builder().url(url).headers(map.toHeaders()).method(m, reqBody).build()
        return try {
            shortClient.newCall(req).execute().use { res ->
                val bytes = res.body?.bytes() ?: ByteArray(0)
                val hj = JSONObject()
                res.headers.names().forEach { n -> hj.put(n, res.header(n)) }
                HostResponse(res.code, res.request.url.toString(), hj.toString(), bytes, res.body?.contentType()?.charset())
            }
        } catch (e: Exception) {
            HostResponse(0, url, "{}", ByteArray(0), null)
        }
    }

    fun parse(html: String, base: String): Document = Jsoup.parse(html, base)
    fun resolve(base: String, rel: String): String = try { URI(base).resolve(rel.trim().replace(" ", "%20")).toString() } catch (e: Exception) { rel }
    fun storageGet(k: String): String? = prefs.getString("vb_$k", null)
    fun storageSet(k: String, v: String?) { prefs.edit().apply { if (v == null) remove("vb_$k") else putString("vb_$k", v) }.apply() }
    fun config(k: String): String? = prefs.getString(k, null)?.takeIf { it.isNotBlank() }
    fun log(m: String) { android.util.Log.d("VBook/${def.id}", m) }
    fun sleep(ms: Int) { Thread.sleep(ms.coerceIn(0, 10000).toLong()) }
}

/**
 * Runs vBook scripts with Mozilla Rhino (the engine vBook itself uses), so the scripts need no conversion.
 * `prelude.js` provides fetch/Html/Response/... and the sync engine (popular, search, detail, ...).
 */
class VBookRuntime(
    private val assets: (String) -> String,
    private val def: SourceDef,
    client: OkHttpClient,
    prefs: SharedPreferences,
) {
    private val host = VBookHost(client, prefs, def)
    private var scope: ScriptableObject? = null
    private val lock = Any()

    private fun <T> withContext(block: (Context) -> T): T {
        val cx = Context.enter()
        try {
            cx.optimizationLevel = -1 // interpreted mode: required on Android (no bytecode generation)
            cx.languageVersion = Context.VERSION_ES6
            return block(cx)
        } finally {
            Context.exit()
        }
    }

    private fun ensureScope(cx: Context): ScriptableObject {
        scope?.let { return it }
        val s = cx.initStandardObjects()
        ScriptableObject.putProperty(s, "__host", Context.javaToJS(host, s))
        cx.evaluateString(s, assets("vb/prelude.js"), "prelude.js", 1, null)
        cx.evaluateString(s, assets("vb/src/${def.id}.js"), "${def.id}.js", 1, null)
        scope = s
        return s
    }

    /** Calls `__engine[method](args...)` and returns the JSON text produced by the script side. */
    fun call(method: String, vararg args: Any?): String = synchronized(lock) {
        withContext { cx ->
            val s = ensureScope(cx)
            val fn = s.get("__call", s) as Function
            val res = fn.call(cx, s, s, arrayOf(method, *args.map { it ?: "" }.toTypedArray()))
            Context.toString(res)
        }
    }

    fun callObject(method: String, vararg args: Any?): JSONObject {
        val o = JSONObject(call(method, *args))
        if (o.optBoolean("error")) throw Exception(o.optString("message", "script error"))
        return o
    }
}
