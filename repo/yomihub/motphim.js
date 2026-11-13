const mangayomiSources = [{"name":"MotPhim (Ngừng hoạt động)","lang":"vi","id":920260027,"baseUrl":"https://motphimc.my","apiUrl":"","iconUrl":"https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/icons/motphim.png","typeSource":"single","itemType":1,"isNsfw":false,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/motphim.js"}];
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

// MotPhim / MotChill – phim bộ, phim lẻ Vietsub. Bundled with YomiHub.
// 0.3.6: rewritten. The "Website Extension" sheet lists three addresses that
// run two different sites:
//   * motchill10.io  – Next.js (episodes + signed player links in page data)
//   * motphim.website, motphimc.my – WordPress "apiphim" theme
// Both are built on the KKPhim catalogue (same slugs), which also serves as
// search backend for MotChill and as direct HLS server.
const MP_MIRRORS = ["https://motchill10.io", "https://motphim.website", "https://motphimc.my"];
const MP_LISTS = [["Phim bộ", "bo"], ["Phim lẻ", "le"], ["Phim chiếu rạp", "rap"], ["Mới cập nhật", "moi"], ["Phim Việt Nam", "vn"]];
const MP_PATHS = {
  motchill: { bo: "phim-bo", le: "phim-le", rap: "phim-chieu-rap", moi: "danh-sach/moi-cap-nhat", vn: "quoc-gia/viet-nam" },
  wp: { bo: "list/phim-bo", le: "list/phim-le", rap: "list/phim-le", moi: "update", vn: "list/phim-bo" },
};

class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  isNext(b) { return /motchill/i.test(b || this.base()); }
  getHeaders(url) { return { "User-Agent": YH_UA, "Referer": this.base() + "/" }; }
  // GET with automatic switch to the other addresses of the same engine
  async get(path, sameEngine) {
    const first = this.base();
    const hosts = [first].concat(MP_MIRRORS.filter((m) => m !== first && (!sameEngine || this.isNext(m) === this.isNext(first))));
    let err = null;
    for (const h of hosts) {
      try {
        const r = await this.client.get(h + path, this.getHeaders(h + path));
        if (r.statusCode < 400 && r.body) return { host: h, html: r.body };
        err = new Error("HTTP " + r.statusCode);
      } catch (e) { err = e; }
    }
    throw new Error("MotPhim: không tải được " + path + " (" + (err && err.message || err) + ")");
  }
  parse(html, host) {
    const doc = new Document(html);
    const list = [];
    const seen = {};
    for (const a of doc.select('a[href*="/phim/"], a[href*="/intro/"]')) {
      const href = a.getHref || "";
      const slug = (href.match(/\/(?:phim|intro)\/([^/?#]+)/) || [])[1];
      const img = a.selectFirst("img");
      if (!slug || !img || seen[slug]) continue;
      seen[slug] = 1;
      const name = yhText(img.attr("alt") || a.attr("title") || "").replace(/^Poster phim\s+/i, "");
      if (!name) continue;
      list.push({ name, link: slug, imageUrl: img.attr("data-src") || img.attr("src") || "" });
    }
    const next = /[?&]page=\d+|\/page\/\d+\//.test(html) && list.length >= 12;
    return { list, hasNextPage: next };
  }
  // KKPhim lists (MotChill renders page 2+ in the browser only)
  async kkList(kind, page) {
    const map = { bo: "v1/api/danh-sach/phim-bo", le: "v1/api/danh-sach/phim-le", rap: "v1/api/danh-sach/phim-chieu-rap", moi: "v1/api/danh-sach/phim-moi-cap-nhat", vn: "v1/api/quoc-gia/viet-nam" };
    const r = await this.client.get(`https://phimapi.com/${map[kind] || map.bo}?page=${page}&limit=24`, { "User-Agent": YH_UA });
    const j = JSON.parse(r.body || "{}");
    const d = j.data || j;
    const pg = ((d.params || {}).pagination) || j.pagination || {};
    const cdn = d.APP_DOMAIN_CDN_IMAGE || "https://phimimg.com";
    const img = (u) => !u ? "" : /^https?:/.test(u) ? u : cdn + "/" + u.replace(/^\/+/, "");
    return {
      list: (d.items || []).map((m) => ({ name: m.name + (m.episode_current ? " (" + m.episode_current + ")" : ""), link: m.slug, imageUrl: img(m.poster_url || m.thumb_url) })),
      hasNextPage: (pg.currentPage || page) < (pg.totalPages || Math.ceil((pg.totalItems || 0) / (pg.totalItemsPerPage || 24))),
    };
  }
  async listing(kind, page) {
    if (this.isNext()) {
      if (page > 1) return this.kkList(kind, page);
      try { const r0 = await this.get(`/${MP_PATHS.motchill[kind] || "phim-bo"}`, true); const res = this.parse(r0.html, r0.host); if (res.list.length >= 12) { res.hasNextPage = true; return res; } } catch (e) {}
      return this.kkList(kind, page);
    }
    const engine = this.isNext() ? "motchill" : "wp";
    const p = MP_PATHS[engine][kind] || MP_PATHS[engine].bo;
    const path = engine === "motchill" ? `/${p}?page=${page}` : `/${p}/${page > 1 ? "page/" + page + "/" : ""}`;
    const r = await this.get(path, true);
    return this.parse(r.html, r.host);
  }
  async getPopular(page) { return this.listing("bo", page); }
  async getLatestUpdates(page) { return this.listing("moi", page); }
  async kkSearch(q, page) {
    const r = await this.client.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(q)}&page=${page}&limit=24`, { "User-Agent": YH_UA });
    const d = JSON.parse(r.body || "{}").data || {};
    const pg = ((d.params || {}).pagination) || {};
    const cdn = d.APP_DOMAIN_CDN_IMAGE || "https://phimimg.com";
    return {
      list: (d.items || []).map((m) => ({ name: m.name + (m.episode_current ? " (" + m.episode_current + ")" : ""), link: m.slug, imageUrl: /^https?:/.test(m.poster_url) ? m.poster_url : cdn + "/" + (m.poster_url || "").replace(/^\/+/, "") })),
      hasNextPage: (pg.currentPage || page) < Math.ceil((pg.totalItems || 0) / (pg.totalItemsPerPage || 24)),
    };
  }
  async search(query, page, filters) {
    query = (query || "").trim();
    if (!query) return this.listing(yhF(filters, "list") || "bo", page);
    if (!this.isNext()) {
      try {
        const r = await this.get(`/${page > 1 ? "page/" + page + "/" : ""}?s=${encodeURIComponent(query)}`, true);
        const res = this.parse(r.html, r.host);
        if (res.list.length) return res;
      } catch (e) {}
    }
    // MotChill searches client-side through the KKPhim catalogue
    return this.kkSearch(query, page);
  }
  async getDetail(url) {
    const slug = ("" + url).replace(/^.*\/(?:phim|intro)\//, "").replace(/[/?#].*$/, "");
    let name = "", img = "", desc = "", genre = [], status = 5;
    let episodes = [];
    if (this.isNext()) {
      try {
        const r = await this.get(`/xem-phim/${slug}`, true);
        const f = yhFlight(r.html);
        const eps = yhJsonAt(f, "episodes", (v) => Array.isArray(v) && (!v.length || v[0].label !== undefined)) || [];
        name = (f.match(/"movieTitle":"([^"]+)"/) || [])[1] || "";
        img = (f.match(/"posterSrc":"([^"]+)"/) || [])[1] || "";
        const byLabel = {};
        const order = [];
        for (const e of eps) {
          if (!byLabel[e.label]) { byLabel[e.label] = []; order.push(e.label); }
          byLabel[e.label].push(e.server || e.lane || "");
        }
        episodes = order.map((l) => ({ name: l, url: slug + "|" + l + "|" + r.host }));
        const d = await this.get(`/phim/${slug}`, true);
        const doc = new Document(d.html);
        const dm = doc.selectFirst('meta[name="description"]');
        desc = dm ? dm.attr("content") : "";
        const h1 = doc.selectFirst("h1");
        if (h1 && !name) name = yhText(h1.text);
        genre = doc.select('a[href^="/the-loai/"]').map((a) => yhText(a.text)).filter(Boolean);
      } catch (e) {}
    }
    // KKPhim: same catalogue/slug – info and episodes when the site has none
    if (!episodes.length || !name) {
      try {
        const r = await this.client.get("https://phimapi.com/phim/" + slug, { "User-Agent": YH_UA });
        const d = JSON.parse(r.body || "{}");
        const m = d.movie || {};
        name = name || m.name || slug;
        img = img || m.poster_url || m.thumb_url || "";
        desc = desc || yhText((m.content || "").replace(/<[^>]+>/g, " "));
        genre = genre.length ? genre : (m.category || []).map((c) => c.name);
        status = yhStatus(m.episode_current || m.status || "");
        if (!episodes.length) {
          const first = (d.episodes || [])[0];
          episodes = ((first && first.server_data) || []).map((e) => ({ name: /^\d/.test(e.name) ? "Tập " + e.name : e.name, url: slug + "|" + e.name + "|kk" }));
        }
      } catch (e) {}
    }
    if (!name) throw new Error("MotPhim: không đọc được thông tin phim " + slug);
    episodes.sort((a, b) => yhEpNo(b.name) - yhEpNo(a.name));
    return { name, imageUrl: img, description: yhText(desc), genre: [...new Set(genre)], status, link: this.base() + (this.isNext() ? "/phim/" : "/intro/") + slug + (this.isNext() ? "" : "/"), episodes };
  }
  async getVideoList(url) {
    const [slug, label, host] = ("" + url).split("|");
    const videos = [];
    try { for (const v of await yhKKVideos(this.client, slug, label, (host && host !== "kk" ? host : this.base()) + "/")) videos.push(v); } catch (e) {}
    if (host && host !== "kk" && this.isNext(host)) {
      // fresh signed player links (they expire) from the watch page
      try {
        const r = await this.client.get(`${host}/xem-phim/${slug}`, this.getHeaders());
        const eps = yhJsonAt(yhFlight(r.body), "episodes", (v) => Array.isArray(v) && (!v.length || v[0].label !== undefined)) || [];
        for (const e of eps.filter((x) => x.label === label && x.link)) {
          const hdr = { "User-Agent": YH_UA, "Referer": host + "/" };
          if (!videos.length) {
            try {
              const out = await evaluateJavascriptViaWebview(e.link, hdr, ["__yh_sniff__", ""]);
              const s = JSON.parse(out || "{}");
              for (const it of (s.all || []).slice(0, 2)) videos.push({ url: it.url, originalUrl: it.url, quality: "MotChill · " + (e.server || "Server"), headers: Object.assign({ "User-Agent": YH_UA }, it.headers || {}) });
            } catch (_) {}
          }
          videos.push({ url: "yhweb:" + e.link, originalUrl: e.link, quality: "MotChill · " + (e.server || "Server") + " (web)", headers: hdr });
        }
      } catch (e) {}
    }
    if (!videos.length) throw new Error("MotPhim: tập này chưa có link phát.");
    return videos;
  }
  getFilterList() {
    return [yhHeader("Bộ lọc dùng khi ô tìm kiếm trống"), yhSelect("list", "Danh sách", MP_LISTS)];
  }
  getSourcePreferences() { return [yhDomainPref("https://motchill10.io", "hoặc motphim.website, motphimc.my")]; }
}

