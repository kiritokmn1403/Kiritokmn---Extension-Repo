const mangayomiSources = [{"name":"xFree (18+)","lang":"all","id":920260015,"baseUrl":"https://www.xfree.com","apiUrl":"","iconUrl":"https://static.xfree.com/icons/icon_64x64.757e1c.png","typeSource":"single","itemType":1,"isNsfw":true,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/xfree.js"}];
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

// xFree (18+) – "porn reels" dọc. YomiHub 0.2.0, có Short Video.
// Đọc dữ liệu trang dựng sẵn (window.__NUXT__): trang chủ, /tag/<thẻ>,
// /search?q=, /video?id=. Video ở cdn.xfree.com/xfree-prod/<a>/<b>/<c>/<media>/full.mp4.
const XF_LGBT = [["Nữ (straight)", "1"], ["Gay", "2"], ["Trans", "3"]];
class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  cdn() { return yhPref("yh_cdn", "https://cdn.xfree.com/xfree-prod/").replace(/\/?$/, "/"); }
  getHeaders(url) { return { "User-Agent": YH_UA, "Referer": this.base() + "/", "Accept": "application/json, text/plain, */*" }; }
  media(m, file) { const n = (m && m.name) || ""; return n.length > 3 ? `${this.cdn()}${n[0]}/${n[1]}/${n[2]}/${n}/${file}` : ""; }
  thumb(m) { const n = (m && m.name) || ""; return n ? `https://thumbs.xfree.com/listing/small/${n}_${m.listingSuffix || 0}.webp` : ""; }
  item(p) {
    if (!p || !p.id || !p.media) return null;
    if (!/^video\//.test(p.media.mimeType || "video/")) return null;
    const u = p.user || {};
    return {
      name: yhText(p.title || ((u.displayName || u.username || "xFree") + " #" + p.id)),
      link: "/video?id=" + p.id,
      imageUrl: this.thumb(p.media),
    };
  }
  // The JSON API refuses non-browser clients, so everything is read from
  // the server-rendered pages (window.__NUXT__ state).
  async nuxt(url) {
    const res = await this.client.get(url, this.getHeaders(url));
    const html = res.body || "";
    const m = html.match(/<script>(window\.__NUXT__=[\s\S]*?)<\/script>/);
    if (!m) throw new Error("xFree: HTTP " + res.statusCode + " – không đọc được trang (bị chặn? bật DoH hoặc VPN)");
    try { const w = {}; new Function("window", m[1])(w); return w.__NUXT__ || {}; }
    catch (e) { throw new Error("xFree: lỗi đọc dữ liệu trang – " + e); }
  }
  collect(n) {
    const out = [], seen = {};
    const visit = (o, d) => {
      if (!o || typeof o !== "object" || d > 7) return;
      if (Array.isArray(o)) { for (const x of o) visit(x, d + 1); return; }
      if (o.id && o.media && o.media.name && /^video\//.test(o.media.mimeType || "")) {
        if (!seen[o.id]) { seen[o.id] = 1; out.push(o); }
        return;
      }
      for (const k in o) if (k !== "user" && k !== "playlists") visit(o[k], d + 1);
    };
    visit((n.state || {}).post, 0);
    visit((n.state || {}).search, 0);
    visit(n.data, 0);
    return out;
  }
  async listFrom(url) {
    const n = await this.nuxt(url);
    const list = this.collect(n).map((p) => this.item(p)).filter((x) => x);
    return { list, hasNextPage: list.length > 0 };
  }
  async feed(page, lgbt) {
    // page 1 = home feed; next pages = popular tags in turn (the home feed
    // itself is not paged without the API)
    const tags = ["amateur", "blonde", "brunette", "asian", "latina", "teen", "milf", "cosplay", "hentai", "bigtits", "ass", "solo", "couple", "lesbian", "redhead", "petite", "ebony", "pov", "outdoor", "dance"];
    const pfx = lgbt === "2" ? "-gay" : lgbt === "3" ? "-trans" : "";
    const url = page <= 1 ? this.base() + (pfx ? "/" + pfx.slice(1) : "/") : `${this.base()}/tag${pfx}/${tags[(page - 2) % tags.length]}`;
    const r = await this.listFrom(url);
    r.hasNextPage = page < tags.length + 1;
    return r;
  }
  async getPopular(page) { return await this.feed(page, "1"); }
  async getLatestUpdates(page) { return await this.feed(page, "1"); }
  async search(query, page, filters) {
    const lgbt = yhF(filters, "lgbt") || "1";
    if (!(query && query.trim())) return await this.feed(page, lgbt);
    if (page > 1) return { list: [], hasNextPage: false };
    const q = query.trim();
    const r = await this.listFrom(`${this.base()}/search${lgbt === "2" ? "-gay" : ""}?q=${encodeURIComponent(q)}`);
    if (!r.list.length) return await this.listFrom(`${this.base()}/tag/${encodeURIComponent(q.toLowerCase().replace(/\s+/g, ""))}`);
    r.hasNextPage = false;
    return r;
  }
  async post(url) {
    const id = (("" + url).match(/id=(\d+)/) || ("" + url).match(/(\d+)\/?$/) || [])[1];
    const n = await this.nuxt(`${this.base()}/video?id=${id}`);
    const pd = ((n.state || {}).post || {}).postDetail || {};
    const p = pd[id] || this.collect(n).find((x) => "" + x.id === "" + id);
    if (!p) throw new Error("xFree: không đọc được bài đăng " + id);
    return p;
  }
  async getDetail(url) {
    const p = await this.post(url);
    const it = this.item(p) || { name: "xFree " + p.id, imageUrl: "" };
    const u = p.user || {};
    return {
      name: it.name, imageUrl: it.imageUrl, author: u.displayName || u.username || "",
      description: [p.title || "", p.viewCount ? "👁 " + p.viewCount : "", p.likesCount ? "❤ " + p.likesCount : ""].filter((x) => x).join("\n"),
      genre: (p.tags || []).map((t) => t.tag).filter((x) => x).slice(0, 25),
      status: 1, link: this.base() + "/video?id=" + p.id,
      episodes: [{ name: "Xem video", url: "/video?id=" + p.id }],
    };
  }
  async getVideoList(url) {
    const p = await this.post(url);
    const headers = { "User-Agent": YH_UA, "Referer": this.base() + "/" };
    const out = [];
    const full = this.media(p.media, "full.mp4");
    if (full) out.push({ url: full, originalUrl: full, quality: (p.media.height ? p.media.height + "p " : "") + "MP4", headers });
    const lst = this.media(p.media, "listing7.mp4");
    if (lst) out.push({ url: lst, originalUrl: lst, quality: "MP4 nhẹ (dự phòng)", headers });
    return out;
  }
  getFilterList() {
    return [
      yhSelect("feed", "Nguồn video", [["Bảng tin (video dọc)", "shorts"]]),
      yhSelect("lgbt", "Nội dung", XF_LGBT),
    ];
  }
  getSourcePreferences() { return [yhDomainPref("https://www.xfree.com")]; }
}

