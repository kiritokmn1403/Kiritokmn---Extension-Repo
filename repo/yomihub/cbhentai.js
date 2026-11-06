const mangayomiSources = [{"name":"CBHentai (18+)","lang":"vi","id":920260022,"baseUrl":"https://hentaicube.xyz","apiUrl":"","iconUrl":"https://hentaicube.xyz/favicon.ico","typeSource":"single","itemType":0,"isNsfw":true,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/cbhentai.js"}];
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

// CBHentai (HentaiCube) – manga 18+ Vietsub. Bundled with YomiHub.
// 0.3.6: rewritten as a proper WordPress "Madara" source (the theme the site
// uses): paged lists /manga/page/N/?m_orderby=…, chapter list through
// /manga/<slug>/ajax/chapters/, images .page-break img. Both addresses from
// the "Website Extension" sheet (hentaicube.xyz, 2tencb.pro) are behind a
// Cloudflare check: solve it once in the extension's WebView.
const CB_MIRRORS = ["https://hentaicube.xyz", "https://2tencb.pro"];
const CB_SORT = [["Mới cập nhật", "latest"], ["Xem nhiều", "views"], ["Thịnh hành", "trending"], ["Đánh giá", "rating"], ["Mới", "new-manga"], ["A-Z", "alphabet"]];
const CB_GENRES = [
  ["Tất cả", ""], ["Manhwa", "manhwa"], ["Manga", "manga"], ["Full color", "full-color"], ["NTR", "ntr"], ["Học đường", "school-uniform"],
  ["Milf", "milf"], ["Harem", "harem"], ["Ngực lớn", "big-boobs"], ["Không che", "uncensored"], ["Romance", "romance"], ["Vanilla", "vanilla"],
];

class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  getHeaders(url) { return { "User-Agent": YH_UA, "Referer": this.base() + "/", "Accept": "text/html,application/xhtml+xml,*/*;q=0.8" }; }
  async get(url) {
    let err = null;
    const path = url.replace(/^https?:\/\/[^/]+/, "");
    const first = url.replace(path, "");
    for (const h of [first].concat(CB_MIRRORS.filter((m) => m !== first))) {
      try {
        const r = await this.client.get(h + path, this.getHeaders(h + path));
        if (r.statusCode < 400 && r.body && !/<title>Just a moment/i.test(r.body)) return r.body;
        err = new Error("HTTP " + r.statusCode);
      } catch (e) { err = e; }
    }
    throw new Error("CBHentai: không tải được trang (" + (err && err.message || err) + "). Trang dùng Cloudflare: mở WebView của tiện ích, xác minh rồi thử lại.");
  }
  parse(html) {
    const doc = new Document(html);
    const list = [];
    const seen = {};
    for (const it of doc.select(".page-item-detail, .c-tabs-item__content, .manga-item")) {
      const a = it.selectFirst(".post-title a, h3 a, h4 a, .item-thumb a, a[href*='/manga/'], a[href*='/read/']");
      if (!a) continue;
      const link = a.getHref;
      if (!link || seen[link] || (!/\/manga\//.test(link) && !/\/read\//.test(link))) continue;
      seen[link] = 1;
      const img = it.selectFirst("img");
      const ch = it.selectFirst(".chapter a, .chapter-item a");
      const name = yhText(a.text || a.attr("title") || (img ? img.attr("alt") : ""));
      if (!name) continue;
      const src = img ? (img.attr("data-src") || img.attr("data-lazy-src") || img.attr("srcset").split(" ")[0] || img.attr("src")) : "";
      list.push({ name: name + (ch ? " (" + yhText(ch.text) + ")" : ""), link: link.replace(/^https?:\/\/[^/]+/, ""), imageUrl: (src || "").trim() });
    }
    const hasNextPage = doc.selectFirst(".nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next, .pagination .next") != null;
    return { list, hasNextPage };
  }
  async listing(sort, page, genre) {
    const p = genre ? `/manga-genre/${genre}/` : "/manga/";
    return this.parse(await this.get(`${this.base()}${p}${page > 1 ? "page/" + page + "/" : ""}?m_orderby=${sort}`));
  }
  async getPopular(page) { return this.listing("views", page); }
  async getLatestUpdates(page) { return this.listing("latest", page); }
  async search(query, page, filters) {
    const q = (query || "").trim();
    if (q) return this.parse(await this.get(`${this.base()}/${page > 1 ? "page/" + page + "/" : ""}?s=${encodeURIComponent(q)}&post_type=wp-manga`));
    return this.listing(yhF(filters, "sort") || "latest", page, yhF(filters, "genre") || "");
  }
  async getDetail(url) {
    const path = ("" + url).replace(/^https?:\/\/[^/]+/, "");
    const html = await this.get(this.base() + path);
    const doc = new Document(html);
    const title = yhText((doc.selectFirst(".post-title h1, h1") || { text: "" }).text);
    const desc = yhText((doc.selectFirst(".description-summary, .summary__content, .manga-excerpt") || { text: "" }).text);
    const img = doc.selectFirst(".summary_image img, .tab-summary img");
    const cover = img ? (img.attr("data-src") || img.attr("data-lazy-src") || img.attr("src") || "").trim() : "";
    const genre = doc.select(".genres-content a").map((a) => yhText(a.text)).filter(Boolean);
    const author = doc.select(".author-content a").map((a) => yhText(a.text)).join(", ");
    const statusEl = doc.select(".post-status .summary-content, .post-content_item").map((e) => yhText(e.text)).join(" ");
    const collect = (d) => d.select("li.wp-manga-chapter a, .wp-manga-chapter > a, ul.main.version-chap li a, .chapter-list a, .listing-chapters_wrap a").map((a) => ({ name: yhText(a.text), url: (a.getHref || "").replace(/^https?:\/\/[^/]+/, "") })).filter((c) => c.url && c.name);
    let chapters = collect(doc);
    if (!chapters.length) {
      // Madara: chapters come from an AJAX endpoint
      try {
        const slugUrl = this.base() + path.replace(/\/?$/, "/");
        const r = await this.client.post(slugUrl + "ajax/chapters/", Object.assign({ "X-Requested-With": "XMLHttpRequest", "Content-Type": "application/x-www-form-urlencoded" }, this.getHeaders()), "");
        chapters = collect(new Document(r.body || ""));
      } catch (e) {}
      if (!chapters.length) {
        const id = (html.match(/data-id="(\d+)"/) || html.match(/"manga_id"\s*:\s*"?(\d+)/) || html.match(/data-post="(\d+)"/) || html.match(/data-post-id="(\d+)"/) || html.match(/post_id\s*=\s*"?(\d+)"?/) || html.match(/class="[^"]*rating-post-id[^"]*"[^>]*value="(\d+)"/) || html.match(/id="manga-chapters-holder"[^>]*data-id="(\d+)"/) || html.match(/input[A-Za-z0-9_\-\s]+value="(\d+)"[^>]*name="manga_id"/) || html.match(/postid-(\d+)/) || html.match(/id="post-(\d+)"/) || [])[1];
        if (id) {
          try {
            const r = await this.client.post(this.base() + "/wp-admin/admin-ajax.php", Object.assign({ "X-Requested-With": "XMLHttpRequest", "Content-Type": "application/x-www-form-urlencoded" }, this.getHeaders()), "action=manga_get_chapters&manga=" + id);
            chapters = collect(new Document(r.body || ""));
          } catch (e) {}
        }
      }
    }
    return { name: title || "CBHentai", description: desc, imageUrl: cover, genre, author, status: yhStatus(statusEl), chapters };
  }
  async getPageList(url) {
    const path = ("" + url).replace(/^https?:\/\/[^/]+/, "");
    const html = await this.get(this.base() + path);
    const doc = new Document(html);
    const pages = [];
    for (const img of doc.select(".reading-content img, .page-break img, img.wp-manga-chapter-img")) {
      const src = (img.attr("data-src") || img.attr("data-lazy-src") || img.attr("src") || "").trim();
      if (src && !/^data:/.test(src) && !pages.includes(src)) pages.push(src);
    }
    if (!pages.length) throw new Error("CBHentai: không tìm thấy ảnh của chương.");
    return pages.map((u) => ({ url: u, headers: { "Referer": this.base() + "/" } }));
  }
  getFilterList() {
    return [yhHeader("Bộ lọc dùng khi ô tìm kiếm trống"), yhSelect("sort", "Sắp xếp", CB_SORT), yhSelect("genre", "Thể loại", CB_GENRES)];
  }
  getSourcePreferences() { return [yhDomainPref("https://hentaicube.xyz", "phụ: 2tencb.pro")]; }
}

