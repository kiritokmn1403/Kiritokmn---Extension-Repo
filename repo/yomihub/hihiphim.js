const mangayomiSources = [{"name":"HiHiPhim","lang":"vi","id":920260028,"baseUrl":"https://hihiphim.com","apiUrl":"","iconUrl":"https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/icons/hihiphim.png","typeSource":"single","itemType":1,"isNsfw":false,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/hihiphim.js"}];
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

// HiHiPhim (hihiphim.com) – phim bộ, phim lẻ, anime Vietsub. Bundled with YomiHub.
// 0.3.6: rewritten for the current site (Next.js + /baseapi JSON API).
// Video: the site's own player (api.hihiphim.com/embed/<id>, link encrypted
// with a fixed XOR key) plus the KKPhim catalogue as a second direct server.
const HH_LISTS = [
  ["Phim bộ", "phim-bo"], ["Phim lẻ", "phim-le"], ["Chiếu rạp", "the-loai/chieu-rap"], ["Hoạt hình", "the-loai/hoat-hinh"],
];
const HH_GENRES = [
  ["Tất cả", ""], ["Hành động", "the-loai/hanh-djong"], ["Cổ trang", "the-loai/co-trang"], ["Tình cảm", "the-loai/tinh-cam"],
  ["Tâm lý", "the-loai/tam-ly"], ["Hài hước", "the-loai/hai-huoc"], ["Kinh dị", "the-loai/kinh-di"], ["Viễn tưởng", "the-loai/vien-tuong"],
  ["Võ thuật", "the-loai/vo-thuat"], ["Hình sự", "the-loai/hinh-su"], ["Phiêu lưu", "the-loai/phieu-luu"], ["Bí ẩn", "the-loai/bi-an"],
  ["Gia đình", "the-loai/gia-djinh"], ["Học đường", "the-loai/hoc-djuong"], ["Chiến tranh", "the-loai/chien-tranh"], ["Thần thoại", "the-loai/than-thoai"],
  ["Tài liệu", "the-loai/tai-lieu"], ["Hoạt hình", "the-loai/hoat-hinh"], ["Chiếu rạp", "the-loai/chieu-rap"],
];
const HH_COUNTRIES = [
  ["Tất cả", ""], ["Hàn Quốc", "quoc-gia/han-quoc"], ["Trung Quốc", "quoc-gia/trung-quoc"], ["Nhật Bản", "quoc-gia/nhat-ban"],
  ["Âu Mỹ", "quoc-gia/au-my"], ["Thái Lan", "quoc-gia/thai-lan"], ["Hồng Kông", "quoc-gia/hong-kong"],
];
const HH_KEYS = ["mySecretKey2024", "mySecretKey2025", "mySecretKey2026", "mySecretKey"];

class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  getHeaders(url) { return { "User-Agent": YH_UA, "Referer": this.base() + "/" }; }
  async api(path) {
    const r = await this.client.get(this.base() + "/baseapi/api/v1/" + path, { "User-Agent": YH_UA, "Referer": this.base() + "/", "Accept": "application/json" });
    const b = (r.body || "").trim();
    if (!b.startsWith("{") && !b.startsWith("[")) throw new Error("HiHiPhim: máy chủ không trả dữ liệu (HTTP " + r.statusCode + ")");
    return JSON.parse(b);
  }
  item(m) {
    return { name: m.name + (m.episode_current ? " (" + m.episode_current + ")" : ""), link: m.slug, imageUrl: m.thumbnail || m.poster || "" };
  }
  async page(path, page) {
    const r = await this.client.get(this.base() + "/" + path + (path.includes("?") ? "&" : "?") + "page=" + page, this.getHeaders());
    if (r.statusCode >= 400) throw new Error("HiHiPhim: HTTP " + r.statusCode);
    const f = yhFlight(r.body);
    const mv = yhJsonAt(f, "movies", (v) => v && Array.isArray(v.result));
    if (mv) {
      const meta = mv.meta || mv;
      return { list: mv.result.map((m) => this.item(m)), hasNextPage: (meta.totalPages || 1) > page };
    }
    // category pages: one {"item":{…movie…}} per card + {"totalPages":N}
    const list = [];
    const seen = {};
    const re = /"item":\{"id":/g;
    let m;
    while ((m = re.exec(f)) !== null) {
      const it = yhJsonAt(f.slice(m.index), "item", (v) => v && v.slug && v.name);
      if (it && !seen[it.slug]) { seen[it.slug] = 1; list.push(this.item(it)); }
    }
    const tp = parseInt((f.match(/"totalPages":(\d+)/) || [])[1] || "1");
    return { list, hasNextPage: tp > page };
  }
  async getPopular(page) { return this.page("phim-bo", page); }
  async getLatestUpdates(page) {
    const d = await this.api("lists/homepageLists?page=" + page);
    const res = d.result || {};
    const list = [];
    const seen = {};
    for (const c of res.collections || []) for (const m of c.movies || []) if (!seen[m.slug]) { seen[m.slug] = 1; list.push(this.item(m)); }
    return { list, hasNextPage: (parseInt(res.totalPages) || 1) > page };
  }
  async search(query, page, filters) {
    query = (query || "").trim();
    if (query) {
      const d = await this.api("movies/search?keyword=" + encodeURIComponent(query) + "&page=" + page + "&limit=30");
      const meta = d.meta || {};
      return { list: (d.result || []).map((m) => this.item(m)), hasNextPage: (meta.totalPages || 1) > page };
    }
    const path = yhF(filters, "genre") || yhF(filters, "country") || yhF(filters, "list") || "phim-bo";
    return this.page(path, page);
  }
  async movieOf(slug) {
    const r = await this.client.get(this.base() + "/phim/" + slug, this.getHeaders());
    const f = yhFlight(r.body);
    return yhJsonAt(f, "movie", (v) => v && v.id && v.slug === slug) || yhJsonAt(f, "movie", (v) => v && v.id) || null;
  }
  async getDetail(url) {
    const slug = ("" + url).replace(/^.*\/phim\//, "").replace(/[/?#].*$/, "");
    const m = await this.movieOf(slug);
    if (!m) throw new Error("HiHiPhim: không đọc được thông tin phim");
    let eps = [];
    try { eps = await this.api("episodes/by-idMovie/" + m.id); } catch (e) {}
    const seasons = {};
    for (const e of eps) seasons[e.season_number || 1] = 1;
    const multiSeason = Object.keys(seasons).length > 1;
    const episodes = eps.map((e) => ({
      name: (multiSeason ? "Phần " + (e.season_number || 1) + " – " : "") + (/^\d+$/.test("" + e.name) ? "Tập " + e.name : e.name) + (e.server ? " · " + e.server : ""),
      url: [m.id, e.id, e.name, slug].join("|"),
      scanlator: e.server || "",
    })).reverse();
    const names = (a) => (a || []).map((x) => x.name).filter(Boolean);
    return {
      name: m.name,
      imageUrl: m.thumbnail || m.poster || "",
      description: yhText((m.description || "").replace(/<[^>]+>/g, " ")) + (m.origin_name ? "\n\nTên gốc: " + m.origin_name : ""),
      genre: names(m.categories).concat(names(m.regions)),
      author: names(m.directors).join(", "),
      status: yhStatus(m.episode_current || ""),
      link: this.base() + "/phim/" + slug,
      episodes,
    };
  }
  decrypt(hex) {
    if (!hex || !/^[0-9a-f]+$/i.test(hex)) return "";
    const bytes = [];
    for (let i = 0; i + 1 < hex.length; i += 2) bytes.push(parseInt(hex.substr(i, 2), 16));
    for (const key of HH_KEYS) {
      let s = "";
      for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i] ^ key.charCodeAt(i % key.length));
      if (/^https?:\/\/[\x21-\x7e]+$/.test(s)) return s;
    }
    return "";
  }
  async getVideoList(url) {
    const [movieId, epId, epName, slug] = ("" + url).split("|");
    const videos = [];
    const ref = { "User-Agent": YH_UA, "Referer": "https://api.hihiphim.com/" };
    let embed = "https://api.hihiphim.com/embed/" + epId;
    try {
      const r = await this.client.get(embed, { "User-Agent": YH_UA, "Referer": this.base() + "/" });
      const body = r.body || "";
      const ep = body.match(/var\s+episode\s*=\s*(\{.*?\});\s*\n/);
      let e = null;
      if (ep) { try { e = JSON.parse(ep[1]); } catch (_) {} }
      const enc = e ? e.encrypted_url : (body.match(/"encrypted_url"\s*:\s*"([0-9a-f]+)"/i) || [])[1];
      const link = this.decrypt(enc);
      if (link) videos.push({ url: link, originalUrl: link, quality: "HiHiPhim · " + ((e && e.server) || "Phụ đề"), headers: ref });
      else if (e && e.link && /^https?:/.test(e.link)) videos.push({ url: e.link, originalUrl: e.link, quality: "HiHiPhim · " + (e.server || "Server"), headers: ref });
      const other = body.match(/var\s+otherServer\s*=\s*(\{.*?\});/);
      if (other) {
        try {
          const o = JSON.parse(other[1]);
          const l2 = this.decrypt(o.encrypted_url) || o.link || "";
          if (l2) videos.push({ url: l2, originalUrl: l2, quality: "HiHiPhim · " + (o.server || "Server 2"), headers: ref });
        } catch (_) {}
      }
    } catch (err) {}
    try { for (const v of await yhKKVideos(this.client, slug, epName, this.base() + "/")) videos.push(v); } catch (e) {}
    videos.push({ url: "yhweb:" + embed, originalUrl: embed, quality: "Trình phát HiHiPhim (web)", headers: { "User-Agent": YH_UA, "Referer": this.base() + "/" } });
    return videos;
  }
  getFilterList() {
    return [
      yhHeader("Bộ lọc dùng khi ô tìm kiếm trống (Quốc gia > Thể loại > Danh sách)"),
      yhSelect("list", "Danh sách", HH_LISTS),
      yhSelect("genre", "Thể loại", HH_GENRES),
      yhSelect("country", "Quốc gia", HH_COUNTRIES),
    ];
  }
  getSourcePreferences() { return [yhDomainPref("https://hihiphim.com")]; }
}

