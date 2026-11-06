const mangayomiSources = [{"name":"AnimeVN","lang":"vi","id":920260009,"baseUrl":"https://animevn.net","apiUrl":"","iconUrl":"https://animevn.net/favicon.ico","typeSource":"single","itemType":1,"isNsfw":false,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/animevn.js"}];
// ---- YomiHub shared helpers (prepended to every bundled extension) ----
const YH_UA = "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36";
function yhPref(key, def) {
  try {
    const v = new SharedPreferences().get(key);
    return (v === undefined || v === null || v === "") ? def : v;
  } catch (e) { return def; }
}
// Every bundled extension exposes its domain in its own settings ("Tên miền").
function yhBase(ext) {
  let d = yhPref("yh_domain", ext.source.baseUrl);
  d = ("" + d).trim();
  if (!/^https?:\/\//i.test(d)) d = "https://" + d;
  return d.replace(/\/+$/, "");
}
function yhAbs(base, u) {
  if (!u) return "";
  u = ("" + u).trim();
  if (u.startsWith("//")) return "https:" + u;
  if (/^https?:\/\//i.test(u)) return u;
  return base.replace(/\/+$/, "") + (u.startsWith("/") ? "" : "/") + u;
}
function yhText(s) { return (s || "").replace(/\s+/g, " ").trim(); }
function yhDomainPref(def, extra) {
  return {
    key: "yh_domain",
    editTextPreference: {
      title: "Tên miền",
      summary: "Đổi khi trang web chuyển sang địa chỉ mới" + (extra ? " – " + extra : ""),
      value: def,
      dialogTitle: "Tên miền",
      dialogMessage: "Ví dụ: " + def,
      text: def,
    },
  };
}
function yhSelect(key, label, opts) {
  return {
    type_name: "SelectFilter", type: key, name: label, state: 0,
    values: opts.map((o) => ({ type_name: "SelectOption", name: o[0], value: o[1] })),
  };
}
function yhGroup(key, label, opts, checkedValues) {
  checkedValues = checkedValues || [];
  return {
    type_name: "GroupFilter", type: key, name: label,
    state: opts.map((o) => ({ type_name: "CheckBox", type: key, name: o[0], value: o[1], state: checkedValues.includes(o[1]) })),
  };
}
function yhHeader(label) { return { type_name: "HeaderFilter", name: label }; }
function yhText_(key, label) { return { type_name: "TextFilter", type: key, name: label, state: "" }; }
// Reads the value of a filter by its key from the list the app passes to search().
function yhF(filters, key) {
  if (!filters) return null;
  for (const f of filters) {
    if (f.type !== key) continue;
    if (f.type_name === "SelectFilter") return f.values[f.state] ? f.values[f.state].value : "";
    if (f.type_name === "TextFilter") return f.state || "";
    if (f.type_name === "GroupFilter") return f.state.filter((c) => c.state === true).map((c) => c.value);
  }
  return null;
}
function yhStatus(t) {
  try {
    if (t === null || t === undefined) return 5;
    if (typeof t === "number") {
      if (t >= 0 && t <= 5) return Math.floor(t);
      t = String(t);
    } else if (typeof t === "object") {
      t = String(t.name || t.status || t.title || t.label || "");
    } else {
      t = String(t);
    }
    t = (t || "").toLowerCase();
    if (/hoàn|complete|full|finished|đã kết thúc/.test(t)) return 1;
    if (/tạm ngưng|hiatus|drop/.test(t)) return 2;
    if (/đang|ongoing|airing|updating|cập nhật/.test(t)) return 0;
    return 5;
  } catch (e) {
    return 5;
  }
}
// 0.2.0: tiny per-extension cookie jar (sites whose AJAX API needs the
// session cookies of the page that issued the token).
function yhJarGet(key) {
  try { return new SharedPreferences().getString(key, "") || ""; } catch (e) { return ""; }
}
function yhJarMerge(key, res, base) {
  let raw = (res && res.headers && (res.headers["set-cookie"] || res.headers["Set-Cookie"])) || "";
  if (Array.isArray(raw)) raw = raw.join(", ");
  const jar = {};
  for (const part of (base !== undefined ? base : yhJarGet(key)).split(";")) {
    const i = part.indexOf("=");
    if (i > 0) jar[part.slice(0, i).trim()] = part.slice(i + 1).trim();
  }
  const re = /(?:^|,\s*)([A-Za-z0-9_\-]+)=([^;,]*)/g;
  let m;
  while ((m = re.exec(raw)) !== null) {
    if (/^(expires|path|domain|max-age|samesite|secure|httponly)$/i.test(m[1])) continue;
    jar[m[1]] = m[2];
  }
  const out = Object.keys(jar).map((k) => k + "=" + jar[k]).join("; ");
  try { new SharedPreferences().setString(key, out); } catch (e) {}
  return out;
}
// Unescape a JSON-ish string fragment taken out of HTML ("\/", "\u00a0").
function yhJsonStr(s) {
  try { return JSON.parse('"' + s + '"'); } catch (e) { return (s || "").replace(/\\\//g, "/"); }
}
// ---- YomiHub 0.3.6 helpers ----
// Next.js App Router pages carry their data as "flight" chunks:
// self.__next_f.push([1,"…"]). Returns them joined as one plain string.
function yhFlight(html) {
  let out = "";
  const re = /self\.__next_f\.push\(\[1,"((?:[^"\\]|\\.)*)"\]\)/g;
  let m;
  while ((m = re.exec(html || "")) !== null) {
    try { out += JSON.parse('"' + m[1] + '"'); } catch (e) {}
  }
  return out;
}
// Parses the JSON object/array that follows `"key":` in [text] (first match
// whose value parses, optionally the first one accepted by [accept]).
function yhJsonAt(text, key, accept) {
  const k = '"' + key + '":';
  let i = (text || "").indexOf(k);
  while (i >= 0) {
    const j = i + k.length;
    const open = text[j];
    if (open === "{" || open === "[") {
      let depth = 0, inStr = false, esc = false;
      for (let p = j; p < text.length; p++) {
        const c = text[p];
        if (inStr) { if (esc) esc = false; else if (c === "\\") esc = true; else if (c === '"') inStr = false; continue; }
        if (c === '"') inStr = true;
        else if (c === "{" || c === "[") depth++;
        else if (c === "}" || c === "]") {
          depth--;
          if (depth === 0) {
            try { const v = JSON.parse(text.slice(j, p + 1)); if (!accept || accept(v)) return v; } catch (e) {}
            break;
          }
        }
      }
    }
    i = text.indexOf(k, i + 1);
  }
  return null;
}
// Episode number of a label ("Tập 01", "tap-1", "01", "Full" → 0).
function yhEpNo(s) {
  s = ("" + (s || "")).toLowerCase();
  if (/full|trọn bộ|tron-bo/.test(s)) return 0;
  const m = s.match(/(\d+(?:\.\d+)?)/);
  return m ? parseFloat(m[1]) : -1;
}
// KKPhim / OPhim (phimapi.com, ophim1.com): the catalogue most Vietnamese
// film sites are built on. Used as a direct-HLS source next to the site's
// own player. Returns [{server, items:[{name, slug, m3u8, embed}]}] or [].
async function yhKK(client, slug) {
  if (!slug) return [];
  for (const api of ["https://phimapi.com/phim/", "https://ophim1.com/phim/"]) {
    try {
      const r = await client.get(api + slug, { "User-Agent": YH_UA, "Accept": "application/json" });
      const b = (r.body || "").trim();
      if (!b.startsWith("{")) continue;
      const d = JSON.parse(b);
      const eps = d.episodes || (d.data && d.data.item && d.data.item.episodes) || [];
      if (!eps.length) continue;
      return eps.map((g) => ({
        server: g.server_name || "Server",
        items: (g.server_data || []).map((e) => ({ name: e.name || "", slug: e.slug || "", m3u8: e.link_m3u8 || "", embed: e.link_embed || "" })),
      }));
    } catch (e) {}
  }
  return [];
}
// Direct HLS videos for episode [epLabel] of KKPhim film [slug].
async function yhKKVideos(client, slug, epLabel, referer) {
  const out = [];
  const want = yhEpNo(epLabel);
  for (const g of await yhKK(client, slug)) {
    let it = g.items.find((e) => yhEpNo(e.name) === want || yhEpNo(e.slug) === want);
    if (!it && g.items.length === 1) it = g.items[0];
    if (it && it.m3u8) out.push({ url: it.m3u8, originalUrl: it.m3u8, quality: "KKPhim · " + g.server, headers: { "User-Agent": YH_UA, "Referer": referer || "https://phimapi.com/" } });
  }
  return out;
}
// The m3u8 inside "https://player.phimapi.com/player/?url=…"-style links.
function yhInnerM3u8(u) {
  const m = ("" + (u || "")).match(/[?&](?:url|link|src|file)=([^&]+\.m3u8[^&]*)/i);
  if (!m) return "";
  try { return decodeURIComponent(m[1]); } catch (e) { return m[1]; }
}
// ---- end helpers ----

// AnimeVN (animevn.net) – anime / hoạt hình 3D Vietsub. Bundled with YomiHub.
const AVN_GENRES = [["Tất cả",""],["Anime","anime"],["CN Animation (Hoạt hình TQ)","cn-animation"],["Hành động","hanh-dong"],["Huyền ảo","huyen-ao"],["Tiên hiệp","tien-hiep"],["Kiếm hiệp","kiem-hiep"],["Võ hiệp","vo-hiep"],["Võ thuật","vo-thuat"],["Xuyên không","xuyen-khong"],["Trùng sinh","trung-sinh"],["Dị giới","di-gioi"],["Hài hước","hai-huoc"],["[CNA] Hài hước","cna-hai-huoc"],["[CNA] Ngôn tình","cna-ngon-tinh"],["Tình cảm","tinh-cam"],["Học đường","hoc-duong"],["Đời thường","doi-thuong"],["Phiêu lưu","phieu-luu"],["Giả tưởng","gia-tuong"],["Khoa huyễn","khoa-huyen"],["Viễn tưởng","vien-tuong"],["Siêu nhiên","sieu-nhien"],["Siêu năng lực","sieu-nang-luc"],["Bí ẩn","bi-an"],["Thám tử","tham-tu"],["Kinh dị","kinh-di"],["Thriller","thriller"],["Psychological","psychological"],["Drama","drama"],["Bi kịch","bi-kich"],["Lịch sử","lich-su"],["Quân đội","quan-doi"],["Samurai","samurai"],["Mecha","mecha"],["Thể thao","the-thao"],["Trò chơi","tro-choi"],["Âm nhạc","am-nhac"],["Demon","demon"],["Ma cà rồng","ma-ca-rong"],["Harem","harem"],["Ecchi","ecchi"],["Shounen","shounen"],["Shoujo","shoujo"],["Seinen","seinen"],["Shounen AI","shounen-ai"],["Shoujo AI","shoujo-ai"],["Đam mỹ","dam-my"],["Tokusatsu","tokusatsu"],["Live Action","live-action"],["Manga","manga"],["Manhwa","manhwa"]];
const AVN_LISTS = [["Mới cập nhật",""],["Top Anime","top-anime"],["Đang chiếu","phim-dang-chieu"],["Hoàn thành","phim-hoan-thanh"],["Sắp chiếu","phim-sap-chieu"]];

class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  getHeaders(url) { return { "User-Agent": YH_UA, "Referer": this.base() + "/" }; }
  async doc(url) {
    const res = await this.client.get(url, this.getHeaders(url));
    return new Document(res.body);
  }
  listUrl(path, page) {
    const u = this.base() + "/" + (path || "").replace(/^\/+/, "");
    return page > 1 ? `${u}${u.indexOf("?") >= 0 ? "&" : "?"}page=${page}` : u;
  }
  parse(doc) {
    const list = [];
    const seen = {};
    for (const li of doc.select(".list_wrap li")) {
      const a = li.selectFirst(".main_text .title a") || li.selectFirst(".anime-cover a");
      if (!a) continue;
      const link = (a.attr("href") || "").replace(/^https?:\/\/[^/]+/, "");
      if (!/^\/anime\/[^/]+\/?$/.test(link) || seen[link]) continue;
      seen[link] = 1;
      const img = li.selectFirst("img");
      list.push({
        name: yhText(a.attr("title") || a.text || (img ? img.attr("alt") : "")),
        link,
        imageUrl: img ? (img.attr("data-original") || img.attr("src") || "") : "",
      });
    }
    const hasNextPage = doc.select('.pagination a[aria-label="Next"]').length > 0;
    return { list, hasNextPage };
  }
  async getPopular(page) { return this.parse(await this.doc(this.listUrl("top-anime", page))); }
  async getLatestUpdates(page) { return this.parse(await this.doc(this.listUrl("", page))); }
  async search(query, page, filters) {
    query = (query || "").trim();
    if (query) {
      if (page > 1) return { list: [], hasNextPage: false };
      const res = await this.client.post(`${this.base()}/search/html/1`,
        { "User-Agent": YH_UA, "Referer": this.base() + "/", "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
        "keyword=" + encodeURIComponent(query.toLowerCase()));
      const doc = new Document(res.body || "");
      const list = [];
      for (const a of doc.select("a.item")) {
        const img = a.selectFirst("img");
        const name = img ? img.attr("alt") : yhText(a.text);
        list.push({ name: yhText(name), link: (a.attr("href") || "").replace(/^https?:\/\/[^/]+/, ""), imageUrl: img ? img.attr("src") : "" });
      }
      return { list, hasNextPage: false };
    }
    const genre = yhF(filters, "genre") || "";
    const listPath = yhF(filters, "list") || "";
    if (genre) return this.parse(await this.doc(this.listUrl(`the-loai/${genre}`, page)));
    return this.parse(await this.doc(this.listUrl(listPath, page)));
  }
  async getDetail(url) {
    const full = yhAbs(this.base(), url);
    const doc = await this.doc(full);
    const name = yhText((doc.selectFirst(".main-head h1") || doc.selectFirst("h1") || {}).text);
    const cover = doc.selectFirst(".comic-thumb-detail img") || doc.selectFirst(".anime-cover img");
    let imageUrl = cover ? (cover.attr("data-original") || cover.attr("src") || "") : "";
    const og = doc.selectFirst('meta[property="og:image"]');
    if (!imageUrl && og) imageUrl = og.attr("content");
    const genre = doc.select(".anime-info a.item-tag:not(.itm-eps)").map((e) => yhText(e.text));
    let statusText = "", year = "", length = "";
    for (const l of doc.select(".anime-info .line")) {
      const k = yhText((l.selectFirst(".line-text") || {}).text);
      const v = yhText((l.selectFirst(".line-content") || {}).text);
      if (/Trạng thái/i.test(k)) statusText = v;
      else if (/Phát hành/i.test(k)) year = v;
      else if (/Thời lượng/i.test(k)) length = v;
    }
    const alt = yhText((doc.selectFirst(".alternative") || {}).text).replace(/^Tên khác:\s*/i, "");
    const descEl = doc.selectFirst(".desc");
    let description = descEl ? yhText(descEl.text) : "";
    const extra = [alt ? "Tên khác: " + alt : "", year ? "Phát hành: " + year : "", length ? "Thời lượng: " + length : ""].filter(Boolean).join("\n");
    if (extra) description = extra + "\n\n" + description;
    const chapters = [];
    const seen = {};
    for (const a of doc.select("#chapter-list li a, ul.chapter-list li a")) {
      const href = (a.attr("href") || "").replace(/^https?:\/\/[^/]+/, "");
      if (!href || seen[href]) continue;
      seen[href] = 1;
      const n = yhText(a.text);
      chapters.push({ name: /^\d/.test(n) ? `Tập ${n}` : n, url: href });
    }
    // The site lists the newest episode first, which is what the app expects.
    return { name, imageUrl, genre, description, status: yhStatus(statusText), link: full, episodes: chapters };
  }
  async getVideoList(url) {
    const full = yhAbs(this.base(), url);
    const res = await this.client.get(full, this.getHeaders(full));
    const html = res.body || "";
    const servers = {};
    const re = /case\s*'(\w+)'\s*:\s*_video_player\.innerHTML\s*=\s*'<iframe[^>]*?src="([^"]*)"/g;
    let m;
    while ((m = re.exec(html)) !== null) servers[m[1]] = m[2];
    const listed = [];
    const re2 = /id="sv_(\w+)"/g;
    while ((m = re2.exec(html)) !== null) listed.push(m[1]);
    const videos = [];
    // 1) Site's own HLS player (AHS) – only usable when it carries a stream key.
    const ahs = servers["AHS"] || "";
    if (/[?&]s=[^&"]+/.test(ahs) || /\/player\/v\/u=[^&]+&s=[A-Za-z0-9]/.test(ahs)) {
      try {
        const p = await this.client.get(ahs, { "User-Agent": YH_UA, "Referer": full });
        const sm = (p.body || "").match(/<source[^>]+src="([^"]+)"/) || (p.body || "").match(/file\s*:\s*["']([^"']+\.m3u8[^"']*)/);
        if (sm && sm[1]) videos.push({ url: sm[1], originalUrl: sm[1], quality: "AnimeVN HLS", headers: { "User-Agent": YH_UA, "Referer": this.base() + "/" } });
      } catch (e) {}
    }
    // 2) Embedded players (Hydrax/Abyss, hh3d…): let a hidden WebView play
    //    the episode page and pick up the real stream.
    const usable = listed.filter((k) => servers[k] && !/[?=\/]$/.test(servers[k]));
    if (!videos.length && usable.length) {
      try {
        // Hydrax/Abyss serves a plain <video> (no Service Worker) to UC Browser.
        const out = await evaluateJavascriptViaWebview(full, { "User-Agent": YH_UA, "Referer": this.base() + "/" },
          ["__yh_sniff__", "", "UCBrowser/13.4.0.1306"]);
        const r = JSON.parse(out || "{}");
        for (const it of (r.all || []).slice(0, 4)) {
          const h = Object.assign({ "User-Agent": YH_UA }, it.headers || {});
          const isPl = /\.m3u8|\.mpd/i.test(it.url);
          videos.push({ url: it.url, originalUrl: it.url, quality: `${usable.join("/")} ${isPl ? "HLS" : "MP4"}`, headers: h });
        }
      } catch (e) {}
    }
    // 3) Every embed server as the site's own web player: YomiHub opens these
    //    in its web player, and the automatic server switch falls back to them.
    const ref = { "User-Agent": YH_UA, "Referer": this.base() + "/" };
    for (const k of usable) {
      const e = yhAbs(this.base(), servers[k]);
      videos.push({ url: "yhweb:" + e, originalUrl: e, quality: k + " (web)", headers: ref });
    }
    if (usable.length) videos.push({ url: "yhweb:" + full, originalUrl: full, quality: "Trang AnimeVN (web)", headers: ref });
    if (!videos.length) throw new Error("Tập này chưa có link phát trên AnimeVN.");
    return videos;
  }
  getFilterList() {
    return [
      yhHeader("Bộ lọc chỉ dùng khi ô tìm kiếm để trống"),
      yhSelect("list", "Danh sách", AVN_LISTS),
      yhSelect("genre", "Thể loại (ưu tiên hơn Danh sách)", AVN_GENRES),
    ];
  }
  getSourcePreferences() { return [yhDomainPref("https://animevn.net")]; }
}

