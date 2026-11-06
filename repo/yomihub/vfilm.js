const mangayomiSources = [{"name":"Vfilm","lang":"vi","id":920260021,"baseUrl":"http://vfilm.vn","apiUrl":"","iconUrl":"https://vfilm.tv/favicon.ico","typeSource":"single","itemType":1,"isNsfw":false,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/vfilm.js"}];
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

// vFilm (vfilm.vn) – phim lẻ, phim bộ, phim Việt. Bundled with YomiHub.
// 0.3.6: rewritten for vfilm.vn (the address in the "Website Extension"
// sheet; vfilm.tv no longer exists). Full episodes on vFilm need a vFilm /
// VinaPhone account: log in once in the extension's WebView, the session
// cookie is then used here. Trailers play without an account.
const VF_LISTS = [
  ["Phim lẻ", "phim-le.html"], ["Phim bộ", "phim-bo.html"], ["Phim chiếu rạp", "phim-le/phim-chieu-rap.htm"], ["Hành động", "phim-le/phim-hanh-dong.htm"],
  ["Hài", "phim-le/phim-hai.htm"], ["Hoạt hình", "phim-le/phim-hoat-hinh.htm"], ["Kinh dị", "phim-le/phim-kinh-di.htm"], ["Tâm lý", "phim-le/phim-tam-ly.htm"],
  ["Viễn tưởng", "phim-le/phim-vien-tuong.htm"], ["Võ thuật", "phim-le/phim-vo-thuat.htm"], ["Kiếm hiệp", "phim-le/phim-kiem-hiep.htm"], ["Cách mạng", "phim-le/phim-cach-mang.htm"],
];

class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  getHeaders(url) { return { "User-Agent": YH_UA, "Referer": this.base() + "/" }; }
  async get(url) {
    const r = await this.client.get(url, this.getHeaders(url));
    if (r.statusCode >= 400) throw new Error("vFilm: HTTP " + r.statusCode + " – " + url);
    return r.body || "";
  }
  parse(html) {
    const doc = new Document(html);
    const list = [];
    const seen = {};
    for (const it of doc.select(".content-film-item, .item-film, .film-item")) {
      const a = it.selectFirst("h3 a, a");
      if (!a) continue;
      const href = a.getHref;
      if (!href || seen[href] || !/\.html$/.test(href) || /\/(phim-le|phim-bo)\.html$/.test(href)) continue;
      seen[href] = 1;
      const img = it.selectFirst("img");
      const name = yhText((img && img.attr("alt")) || a.text);
      list.push({ name, link: href.replace(/^https?:\/\/[^/]+/, ""), imageUrl: img ? (img.attr("data-src") || img.attr("src")) : "" });
    }
    return { list, hasNextPage: false };
  }
  async getPopular(page) { return page > 1 ? { list: [], hasNextPage: false } : this.parse(await this.get(this.base() + "/phim-le.html")); }
  async getLatestUpdates(page) { return page > 1 ? { list: [], hasNextPage: false } : this.parse(await this.get(this.base() + "/phim-bo.html")); }
  async search(query, page, filters) {
    if (page > 1) return { list: [], hasNextPage: false };
    query = (query || "").trim();
    if (query) return this.parse(await this.get(`${this.base()}/Home/filter?keyword=${encodeURIComponent(query)}`));
    return this.parse(await this.get(`${this.base()}/${yhF(filters, "list") || "phim-le.html"}`));
  }
  async getDetail(url) {
    const html = await this.get(this.base() + url);
    const doc = new Document(html);
    const meta = (p) => { const e = doc.selectFirst(`meta[property="${p}"], meta[name="${p}"]`); return e ? e.attr("content") : ""; };
    const h1 = doc.selectFirst("h1.title-film, h1");
    const episodes = [];
    const seen = {};
    for (const a of doc.select("a.play-video")) {
      const key = a.attr("data-key"), item = a.attr("data-item");
      if (!key || seen[key + item]) continue;
      seen[key + item] = 1;
      const lb = yhText(a.text);
      episodes.push({ name: /^\d+$/.test(lb) ? "Tập " + lb : (lb || "Tập " + (parseInt(item) + 1)), url: url + "|" + key + "|" + item });
    }
    if (!episodes.length) episodes.push({ name: "Phim", url: url + "||" });
    episodes.reverse();
    const genres = doc.select('a[href$=".htm"]').map((a) => yhText(a.text)).filter((x) => /^Phim/i.test(x)).slice(0, 5);
    let name = h1 ? yhText(h1.text) : meta("og:title");
    return {
      name,
      imageUrl: meta("og:image"),
      description: yhText(meta("og:description")),
      genre: [...new Set(genres)],
      status: 1,
      link: this.base() + url,
      episodes,
    };
  }
  async getVideoList(url) {
    const [path, key, item] = ("" + url).split("|");
    const videos = [];
    const hdr = { "User-Agent": YH_UA, "Referer": this.base() + path };
    if (key) {
      try {
        const r = await this.client.post(this.base() + "/Films/ajaxChooseFilm", Object.assign({ "X-Requested-With": "XMLHttpRequest", "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" }, hdr), "key=" + encodeURIComponent(key) + "&item=" + encodeURIComponent(item));
        const d = JSON.parse(r.body || "{}");
        const ls = d.linkStreaming && typeof d.linkStreaming === "object" ? Object.values(d.linkStreaming) : [];
        for (const s of ls) if (s && s.file) videos.push({ url: s.file, originalUrl: s.file, quality: "vFilm " + (s.label || ""), headers: hdr });
      } catch (e) {}
    }
    const html = await this.get(this.base() + path);
    const tr = html.match(/var\s+b\s*=\s*'(\{[\s\S]*?\})';/);
    if (tr) {
      try {
        const b = JSON.parse(tr[1]);
        for (const k of Object.keys(b)) if (b[k].file) videos.push({ url: b[k].file, originalUrl: b[k].file, quality: "Trailer " + (b[k].label || ""), headers: hdr });
      } catch (e) {}
    }
    if (!videos.some((v) => !/^Trailer/.test(v.quality))) {
      videos.push({ url: "yhweb:" + this.base() + path, originalUrl: this.base() + path, quality: "Trang vFilm (cần đăng nhập để xem trọn bộ)", headers: hdr });
    }
    return videos;
  }
  getFilterList() { return [yhHeader("Bộ lọc dùng khi ô tìm kiếm trống"), yhSelect("list", "Danh sách", VF_LISTS)]; }
  getSourcePreferences() { return [yhDomainPref("http://vfilm.vn")]; }
}

