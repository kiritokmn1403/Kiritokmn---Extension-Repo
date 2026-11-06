const mangayomiSources = [{"name":"HayChill","lang":"vi","id":920260018,"baseUrl":"https://phimhaychill.org","apiUrl":"","iconUrl":"https://haychill.tv/favicon.ico","typeSource":"single","itemType":1,"isNsfw":false,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/haychill.js"}];
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

// HayChill (phimhaychill.org → phimhaychill.top) – phim bộ, phim lẻ Vietsub / thuyết minh. Bundled with YomiHub.
// 0.3.6: rewritten for the current site (WordPress VidoRev theme). Episodes
// are "?video_index=N" links; the HLS link of each one is in the page
// ("single_video_url" / "contentUrl").
const HC_MIRRORS = ["https://phimhaychill.top", "https://phimhaychill.org"];
const HC_LISTS = [
  ["Phim bộ hay", "phim-bo-hay"], ["Phim lẻ hay", "phim-le-hay"], ["Phim chiếu rạp", "phim-chieu-rap-hay"], ["Hoạt hình", "phim-hoat-hinh-hay"],
  ["Netflix", "phim-netflix"], ["TV Shows", "tv-shows"],
];
const HC_GENRES = [
  ["Tất cả", ""], ["Hành động", "phim-hanh-dong"], ["Cổ trang", "phim-co-trang"], ["Tình cảm", "phim-tinh-cam"], ["Hài", "phim-hai"],
  ["Kinh dị", "phim-kinh-di"], ["Viễn tưởng", "phim-vien-tuong"], ["Võ thuật", "phim-vo-thuat"], ["Hình sự", "phim-hinh-su"],
  ["Phiêu lưu", "phim-phieu-luu"], ["Tâm lý", "phim-tam-ly"], ["Thần thoại", "phim-than-thoai"],
];
const HC_COUNTRIES = [
  ["Tất cả", ""], ["Hàn Quốc", "phim-han-quoc"], ["Trung Quốc", "phim-trung-quoc"], ["Âu Mỹ", "phim-au-my"], ["Nhật Bản", "phim-nhat-ban"],
  ["Thái Lan", "phim-thai-lan"], ["Hồng Kông", "phim-hong-kong"], ["Đài Loan", "phim-dai-loan"], ["Việt Nam", "phim-viet-nam"],
];

class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  getHeaders(url) { return { "User-Agent": YH_UA, "Referer": this.base() + "/" }; }
  async get(url) {
    let err = null;
    const path = url.replace(/^https?:\/\/[^/]+/, "");
    const hosts = [url.replace(path, "")].concat(HC_MIRRORS.filter((m) => !url.startsWith(m)));
    for (const h of hosts) {
      try {
        const r = await this.client.get(h + path, this.getHeaders(h + path));
        if (r.statusCode < 400 && r.body) return r.body;
        err = new Error("HTTP " + r.statusCode);
      } catch (e) { err = e; }
    }
    throw new Error("HayChill: không tải được " + url + " (" + (err && err.message || err) + ")");
  }
  pathOf(u) { return ("" + u).replace(/^https?:\/\/[^/]+/, "").replace(/\?.*$/, ""); }
  parse(html) {
    const doc = new Document(html);
    let items = doc.select(".main-content .blog-items-control article, main .blog-items-control article");
    if (!items.length) items = doc.select(".blog-items-control article");
    const list = [];
    const seen = {};
    for (const it of items) {
      const a = it.selectFirst(".entry-title a, a.blog-img");
      if (!a) continue;
      const href = a.getHref;
      if (!href || seen[href]) continue;
      seen[href] = 1;
      const img = it.selectFirst("img");
      const ep = it.selectFirst(".duration-text");
      const name = yhText(a.text || a.attr("title")).replace(/\s+(Vietsub|Thuyết Minh|Lồng Tiếng)(\s.*)?$/i, "");
      list.push({ name: name + (ep && yhText(ep.text) ? " (" + yhText(ep.text) + ")" : ""), link: this.pathOf(href), imageUrl: img ? (img.attr("data-src") || img.attr("src")) : "" });
    }
    return { list, hasNextPage: /\/page\/\d+\//.test(html) && list.length >= 8 };
  }
  async listing(path, page) { return this.parse(await this.get(`${this.base()}/${path}/${page > 1 ? "page/" + page + "/" : ""}`)); }
  async getPopular(page) { return this.listing("phim-bo-hay", page); }
  async getLatestUpdates(page) { return this.listing("phim-le-hay", page); }
  async search(query, page, filters) {
    query = (query || "").trim();
    if (query) return this.parse(await this.get(`${this.base()}/${page > 1 ? "page/" + page + "/" : ""}?s=${encodeURIComponent(query)}`));
    return this.listing(yhF(filters, "country") || yhF(filters, "genre") || yhF(filters, "list") || "phim-bo-hay", page);
  }
  async getDetail(url) {
    const path = this.pathOf(url);
    const html = await this.get(this.base() + path);
    const doc = new Document(html);
    const meta = (p) => { const e = doc.selectFirst(`meta[property="${p}"], meta[name="${p}"]`); return e ? e.attr("content") : ""; };
    const h1 = doc.selectFirst("h1.entry-title, h1");
    const eps = [];
    const seen = {};
    for (const a of doc.select("a.series-item")) {
      const href = a.getHref;
      if (!href || seen[href]) continue;
      seen[href] = 1;
      const label = yhText(a.text);
      eps.push({ name: /^\d+$/.test(label) ? "Tập " + label : (label || "Tập " + (eps.length + 1)), url: this.pathOf(href) + (href.includes("?") ? "?" + href.split("?")[1] : "") });
    }
    eps.sort((x, y) => yhEpNo(y.name) - yhEpNo(x.name));
    const cats = doc.select('a[rel="category tag"], .categories-wrap a').map((a) => yhText(a.text)).filter(Boolean);
    return {
      name: h1 ? yhText(h1.text).replace(/\s+(Vietsub|Thuyết Minh|Lồng Tiếng)(\s.*)?$/i, "") : meta("og:title"),
      imageUrl: meta("og:image"),
      description: yhText(meta("description") || meta("og:description")),
      genre: [...new Set(cats)],
      status: eps.length > 1 ? 0 : 1,
      link: this.base() + path,
      episodes: eps.length ? eps : [{ name: "Full", url: path }],
    };
  }
  async getVideoList(url) {
    const html = await this.get(this.base() + url);
    const hdr = { "User-Agent": YH_UA, "Referer": this.base() + "/" };
    const found = [];
    for (const re of [/"single_video_url":"([^"]+)"/g, /"contentUrl":"([^"]+)"/g, /<source[^>]+src="([^"]+\.m3u8[^"]*)"/g]) {
      let m;
      while ((m = re.exec(html)) !== null) {
        const u = yhJsonStr(m[1]);
        if (/^https?:/.test(u) && !found.includes(u)) found.push(u);
      }
    }
    const videos = [];
    found.forEach((u, i) => {
      if (/\.m3u8|\.mp4/i.test(u)) videos.push({ url: u, originalUrl: u, quality: "HayChill " + (i + 1), headers: hdr });
      else if (/youtube\.com|youtu\.be/.test(u)) return;
      else videos.push({ url: "yhweb:" + u, originalUrl: u, quality: "HayChill " + (i + 1) + " (web)", headers: hdr });
    });
    if (!videos.length) throw new Error("HayChill: tập này chưa có link phát.");
    return videos;
  }
  getFilterList() {
    return [
      yhHeader("Bộ lọc dùng khi ô tìm kiếm trống (Quốc gia > Thể loại > Danh sách)"),
      yhSelect("list", "Danh sách", HC_LISTS),
      yhSelect("genre", "Thể loại", HC_GENRES),
      yhSelect("country", "Quốc gia", HC_COUNTRIES),
    ];
  }
  getSourcePreferences() { return [yhDomainPref("https://phimhaychill.top", "địa chỉ cũ: phimhaychill.org")]; }
}

