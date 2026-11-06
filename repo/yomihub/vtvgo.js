const mangayomiSources = [{"name":"VTVgo – Truyền hình","lang":"vi","id":920260005,"baseUrl":"https://vtvgo.vn","apiUrl":"","iconUrl":"https://vtvgo.vn/favicon.ico","typeSource":"single","itemType":1,"isNsfw":false,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/vtvgo.js"}];
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

// VTVgo (vtvgo.vn) – truyền hình trực tiếp miễn phí của Đài THVN. Bundled with YomiHub.
// Chỉ phát các kênh miễn phí không có DRM; kênh trả phí/có DRM sẽ báo không hỗ trợ.
class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return false; }
  api() { return ("" + yhPref("yh_api", "https://api.vtvdigital.org")).replace(/\/+$/, ""); }
  getHeaders(url) {
    return { "User-Agent": YH_UA, "Origin": yhBase(this), "Referer": yhBase(this) + "/", "Content-Type": "application/json", "accept-language": "vi-VN,vi" };
  }
  async catalogs() {
    const res = await this.client.get(`${this.api()}/display/v21.0/catalogs/with-channels?platform=web`, this.getHeaders());
    const d = JSON.parse(res.body);
    return d.data || d.result || [];
  }
  channelItem(c, catName) {
    return {
      name: c.name + (catName ? "" : ""),
      imageUrl: c.thumbnail || c.logo || "",
      link: "channel:" + c.id,
    };
  }
  async all(filterCat) {
    const cats = await this.catalogs();
    const list = [];
    const seen = {};
    for (const cat of cats) {
      if (filterCat && cat.id !== filterCat) continue;
      for (const c of cat.channels || []) {
        if (!c.enabled || seen[c.id]) continue;
        seen[c.id] = 1;
        list.push(this.channelItem(c, cat.name));
      }
    }
    return list;
  }
  async getPopular(page) {
    if (page > 1) return { list: [], hasNextPage: false };
    return { list: await this.all(), hasNextPage: false };
  }
  async getLatestUpdates(page) { return this.getPopular(page); }
  async search(query, page, filters) {
    if (page > 1) return { list: [], hasNextPage: false };
    const cat = yhF(filters, "catalog") || "";
    let list = await this.all(cat);
    if (query && query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((i) => i.name.toLowerCase().includes(q));
    }
    return { list, hasNextPage: false };
  }
  async getDetail(url) {
    const id = url.replace("channel:", "");
    let ch = null, catName = "";
    for (const cat of await this.catalogs()) {
      for (const c of cat.channels || []) if (("" + c.id) === id) { ch = c; catName = cat.name; }
    }
    ch = ch || { id, name: "Kênh " + id };
    return {
      name: ch.name,
      imageUrl: ch.thumbnail || ch.logo || "",
      description: `Truyền hình trực tiếp ${ch.name}${catName ? " – " + catName : ""} trên VTVgo.` +
        (ch.mustLogin ? "\nKênh này yêu cầu đăng nhập VTVgo." : ""),
      genre: [catName || "Truyền hình"],
      status: 0,
      link: `${yhBase(this)}/channel/${id}`,
      episodes: [{ name: "Trực tiếp", url: "live:" + id }],
    };
  }
  async getVideoList(url) {
    const id = url.replace("live:", "");
    const res = await this.client.post(`${this.api()}/live-channel/v21.0/playback/source`, this.getHeaders(), { channelId: id, platform: "web" });
    const d = JSON.parse(res.body);
    const data = d.data || d.result || {};
    const videos = [];
    for (const mode of data.sourceModes || []) {
      if (mode.isVip) continue;
      for (const ms of mode.multiSource || []) {
        const drm = ((ms.drmInfo || {}).drmType || ms.drmTypeID || "none").toLowerCase();
        if (drm !== "none") continue;
        (ms.sources || []).forEach((s, i) => {
          if (s.url) videos.push({ url: s.url, originalUrl: s.url, quality: `${data.channelName || "VTVgo"} – nguồn ${videos.length + 1}`, headers: { "User-Agent": YH_UA, "Referer": yhBase(this) + "/", "Origin": yhBase(this) } });
        });
      }
    }
    if (!videos.length) throw new Error(d.message || "Kênh này cần tài khoản trả phí hoặc có DRM nên YomiHub không phát được.");
    return videos;
  }
  getFilterList() {
    return [yhSelect("catalog", "Nhóm kênh", [["Tất cả", ""], ["Kênh VTV", "6a95b9e9cc5bb9fa8eeac4db"], ["Kênh thiết yếu và địa phương", "6a95b9e9cc5bb9fa8eeac4da"], ["Gói kênh VTVcab", "6a95b9e9cc5bb9fa8eeac4d9"], ["Kênh SCTV", "6a95b9e9cc5bb9fa8eeac4e1"], ["ONE VTV Sport", "6a95b9e9cc5bb9fa8eeac4e4"], ["Kênh Msky", "6a97d6c0eeb3bc80433dea5f"], ["Phim, giải trí", "6aa12ca6505b0f966e27c5ea"], ["Tin tức, thiếu nhi, khoa giáo", "6aa13a6d1dc7eae6da6d2210"]])];
  }
  getSourcePreferences() {
    return [
      yhDomainPref("https://vtvgo.vn"),
      { key: "yh_api", editTextPreference: { title: "Địa chỉ API", summary: "Mặc định https://api.vtvdigital.org", value: "https://api.vtvdigital.org", dialogTitle: "API", dialogMessage: "", text: "https://api.vtvdigital.org" } },
    ];
  }
}

