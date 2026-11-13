package kiritokmn.vbook.anime

import android.content.SharedPreferences
import androidx.preference.EditTextPreference
import androidx.preference.PreferenceScreen
import eu.kanade.tachiyomi.animesource.AnimeSource
import eu.kanade.tachiyomi.animesource.AnimeSourceFactory
import eu.kanade.tachiyomi.animesource.ConfigurableAnimeSource
import eu.kanade.tachiyomi.animesource.model.AnimeFilterList
import eu.kanade.tachiyomi.animesource.model.AnimesPage
import eu.kanade.tachiyomi.animesource.model.SAnime
import eu.kanade.tachiyomi.animesource.model.SEpisode
import eu.kanade.tachiyomi.animesource.model.Track
import eu.kanade.tachiyomi.animesource.model.Video
import eu.kanade.tachiyomi.animesource.online.AnimeHttpSource
import kiritokmn.vbook.Http2Bridge
import kiritokmn.vbook.SourceDef
import kiritokmn.vbook.VBookRuntime
import kiritokmn.vbook.loadSourceDefs
import okhttp3.Headers
import okhttp3.Headers.Companion.toHeaders
import okhttp3.Request
import okhttp3.Response
import org.json.JSONObject
import rx.Observable

private object Assets {
    fun read(path: String): String =
        VBookAnimeFactory::class.java.classLoader!!.getResourceAsStream("assets/$path")!!.bufferedReader().use { it.readText() }
}

class VBookAnimeFactory : AnimeSourceFactory {
    override fun createSources(): List<AnimeSource> =
        loadSourceDefs(Assets.read("vb/sources.json")).filter { it.type == "video" }.map { VBookAnimeSource(it) }
}

class VBookAnimeSource(private val def: SourceDef) : AnimeHttpSource(), ConfigurableAnimeSource {
    override val name = def.name
    override val lang = def.lang
    override val supportsLatest = true
    override val id: Long = def.sourceId

    private val preferences: SharedPreferences by lazy {
        kiritokmn.vbook.appContext().getSharedPreferences("source_$id", 0x0000)
    }
    override val baseUrl: String get() = preferences.getString("DOMAIN", null)?.takeIf { it.isNotBlank() }?.trimEnd('/') ?: def.baseUrl

    private val rt by lazy { VBookRuntime(Assets::read, def, client, preferences) }

    override fun headersBuilder(): Headers.Builder = super.headersBuilder().add("Referer", "$baseUrl/")

    private fun page(o: JSONObject): AnimesPage {
        val items = o.getJSONObject("result").getJSONArray("items")
        val list = (0 until items.length()).map { i ->
            val it = items.getJSONObject(i)
            SAnime.create().apply { url = it.getString("link"); title = it.getString("name"); thumbnail_url = it.optString("cover").ifBlank { null } }
        }
        return AnimesPage(list, o.getJSONObject("result").optBoolean("hasNext"))
    }

    override fun fetchPopularAnime(page: Int): Observable<AnimesPage> = Observable.fromCallable { page(rt.callObject("popular", page)) }
    override fun fetchLatestUpdates(page: Int): Observable<AnimesPage> = Observable.fromCallable { page(rt.callObject("latest", page)) }
    override fun fetchSearchAnime(page: Int, query: String, filters: AnimeFilterList): Observable<AnimesPage> =
        Observable.fromCallable { page(rt.callObject("search", query, page)) }

    override fun fetchAnimeDetails(anime: SAnime): Observable<SAnime> = Observable.fromCallable {
        val d = rt.callObject("detail", anime.url).getJSONObject("result")
        SAnime.create().apply {
            url = anime.url
            title = d.optString("name").ifBlank { anime.title }
            thumbnail_url = d.optString("cover").ifBlank { anime.thumbnail_url }
            author = d.optString("author").ifBlank { null }
            description = listOf(d.optString("description"), d.optString("detail")).filter { it.isNotBlank() }.joinToString("\n\n")
            val g = d.optJSONArray("genres")
            genre = if (g == null) null else (0 until g.length()).joinToString(", ") { g.getString(it) }
            status = if (d.optBoolean("ongoing", true)) SAnime.ONGOING else SAnime.COMPLETED
            initialized = true
        }
    }

    override fun fetchEpisodeList(anime: SAnime): Observable<List<SEpisode>> = Observable.fromCallable {
        val arr = rt.callObject("chapters", anime.url).getJSONArray("result")
        (0 until arr.length()).map { i ->
            val c = arr.getJSONObject(i)
            SEpisode.create().apply { url = c.getString("url"); name = c.getString("name"); episode_number = (i + 1).toFloat() }
        }.reversed()
    }

    override fun fetchVideoList(episode: SEpisode): Observable<List<Video>> = Observable.fromCallable {
        val arr = rt.callObject("videos", episode.url).getJSONArray("result")
        (0 until arr.length()).map { i ->
            val v = arr.getJSONObject(i)
            val hj = v.optJSONObject("headers")
            val headers = if (hj == null) headers else hj.keys().asSequence().associateWith { hj.getString(it) }.toHeaders()
            val subs = v.optJSONArray("subtitles")
            val tracks = if (subs == null) emptyList() else (0 until subs.length()).map { s -> subs.getJSONObject(s).let { Track(it.getString("file"), it.optString("label", "Sub")) } }
            // 0.0.5: streams whose CDN refuses HTTP/1.1 (flag `http2`, e.g. NguonC) are played through the loopback
            // HTTP/2 bridge, because the mpv/ffmpeg player of Aniyomi cannot speak HTTP/2.
            val url = if (v.optBoolean("http2")) bridged(v.getString("url"), headers) else v.getString("url")
            val auds = v.optJSONArray("audios")
            val audioTracks = if (auds == null) emptyList() else (0 until auds.length()).map { a -> auds.getJSONObject(a).let { Track(it.getString("file"), it.optString("label", "Audio")) } }
            Video(url, v.optString("quality", "Default"), url, headers, tracks, audioTracks)
        }
    }

    private fun bridged(url: String, h: Headers): String = try {
        Http2Bridge.register(url, h.names().associateWith { h[it] ?: "" }) { u, hs ->
            val r = client.newCall(Request.Builder().url(u).headers(hs.toHeaders()).build()).execute()
            Http2Bridge.Upstream(r.code, r.headers.names().associateWith { r.header(it) ?: "" }, r.body?.byteStream()) { r.close() }
        }
    } catch (e: Exception) { url }

    override fun getAnimeUrl(anime: SAnime): String = anime.url
    override fun getEpisodeUrl(episode: SEpisode): String = episode.url

    override fun setupPreferenceScreen(screen: PreferenceScreen) {
        EditTextPreference(screen.context).apply {
            key = "DOMAIN"
            title = "Tên miền / Domain"
            summary = baseUrl
            dialogTitle = "Domain"
            dialogMessage = "Mặc định: ${def.baseUrl}" + if (def.domains.size > 1) "\nKhác: " + def.domains.joinToString(", ") else ""
            setDefaultValue(def.baseUrl)
        }.also(screen::addPreference)
        def.prefs.forEach { p ->
            EditTextPreference(screen.context).apply {
                key = p[0]; title = p[1]; summary = p[2].ifBlank { null }; dialogTitle = p[1]; dialogMessage = p[2]; setDefaultValue(p[3])
            }.also(screen::addPreference)
        }
    }

    // The request/parse pairs are unused: every fetch* above is overridden and delegates to the vBook runtime.
    override fun popularAnimeRequest(page: Int): Request = throw UnsupportedOperationException()
    override fun popularAnimeParse(response: Response): AnimesPage = throw UnsupportedOperationException()
    override fun latestUpdatesRequest(page: Int): Request = throw UnsupportedOperationException()
    override fun latestUpdatesParse(response: Response): AnimesPage = throw UnsupportedOperationException()
    override fun searchAnimeRequest(page: Int, query: String, filters: AnimeFilterList): Request = throw UnsupportedOperationException()
    override fun searchAnimeParse(response: Response): AnimesPage = throw UnsupportedOperationException()
    override fun animeDetailsParse(response: Response): SAnime = throw UnsupportedOperationException()
    override fun episodeListParse(response: Response): List<SEpisode> = throw UnsupportedOperationException()
}
