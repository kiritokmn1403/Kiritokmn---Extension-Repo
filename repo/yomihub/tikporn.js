const mangayomiSources = [{"name":"Tik.Porn (18+)","lang":"all","id":920260013,"baseUrl":"https://tik.porn","apiUrl":"","iconUrl":"https://tik.porn/favicon.ico","typeSource":"single","itemType":1,"isNsfw":true,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/tikporn.js"}];
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

// Tik.Porn (18+) – video dọc kiểu TikTok. YomiHub 0.2.0, có Short Video.
// Nguồn: API công khai của trang (apiv2.tik.porn/getnextvideos) + trang
// /video/<id> (dữ liệu Next.js) cho chi tiết và luồng phát.
class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  api() { return yhPref("yh_api", "https://apiv2.tik.porn").replace(/\/+$/, ""); }
  getHeaders(url) { return { "User-Agent": YH_UA, "Referer": this.base() + "/", "Origin": this.base() }; }
  // two shapes: page data (id, texts, thumbnails) and the feed API
  // (video_id, video_text, medium_thumb)
  item(v) {
    const id = v && (v.id || v.video_id);
    if (!id) return null;
    const vt = v.video_text || {};
    const t = (v.texts && v.texts.video && (v.texts.video.parsed_text || v.texts.video.text)) ||
      (vt.description && vt.description.default && vt.description.default.text) ||
      (vt.meta_title && vt.meta_title.default && vt.meta_title.default.text) ||
      (v.metadata && v.metadata.title) ||
      [v.user_name, v.action_name].filter((x) => x).join(" – ") || ("Video " + id);
    const th = v.thumbnails || {};
    return {
      name: yhText(("" + t).replace(/\s*\|\s*Tik\.Porn\s*$/i, "")),
      link: "/video/" + id,
      imageUrl: th.md || th.sm || v.medium_thumb || v.small_thumb || (v.metadata && v.metadata.thumbnail) || v.poster_url || "",
    };
  }
  async feed(page, rand) {
    let seen = [];
    try { seen = JSON.parse(yhJarGet("yh_tp_seen") || "[]"); } catch (e) {}
    if (page <= 1) seen = [];
    const body = { amount: 20, filter: seen.slice(-300), sfw_mode: false, forcerand: !!rand, first_chunk: page <= 1, recomm_id: null };
    const h = this.getHeaders(); h["Content-Type"] = "application/json"; h["Accept"] = "application/json";
    const res = await this.client.post(this.api() + "/getnextvideos", h, body);
    let j = {};
    try { j = JSON.parse(res.body); } catch (e) { throw new Error("Tik.Porn: HTTP " + res.statusCode + " (trang bị chặn? bật DoH hoặc VPN)"); }
    const list = (j.data || []).map((v) => this.item(v)).filter((x) => x);
    for (const it of list) seen.push(+it.link.split("/").pop());
    try { new SharedPreferences().setString("yh_tp_seen", JSON.stringify(seen.slice(-300))); } catch (e) {}
    return { list, hasNextPage: list.length > 0 };
  }
  nextData(html) {
    const m = (html || "").match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
    if (!m) return {};
    try { return JSON.parse(m[1]).props.pageProps || {}; } catch (e) { return {}; }
  }
  async getPopular(page) { return await this.feed(page, false); }
  async getLatestUpdates(page) { return await this.feed(page, true); }
  async search(query, page, filters) {
    const tag = yhF(filters, "tag") || "";
    if (!(query && query.trim()) && !tag) return await this.feed(page, (yhF(filters, "order") || "") === "rand");
    const q = (query && query.trim()) || tag;
    const url = `${this.base()}/?s=${encodeURIComponent(q)}` + (page > 1 ? `&page=${page}` : "");
    const res = await this.client.get(url, this.getHeaders(url));
    const pp = this.nextData(res.body);
    const box = pp.videos || pp.searchVideos || pp.initialVideos || {};
    let arr = box.data || [];
    if (!arr.length) for (const k in pp) if (pp[k] && Array.isArray(pp[k].data) && pp[k].data.length && pp[k].data[0].sources) { arr = pp[k].data; break; }
    const list = arr.map((v) => this.item(v)).filter((x) => x);
    const pg = box.pagination || {};
    return { list, hasNextPage: !!pg.hasMore || (list.length >= 10 && pg.hasMore !== false) };
  }
  async video(url) {
    const full = yhAbs(this.base(), url);
    const res = await this.client.get(full, this.getHeaders(full));
    const pp = this.nextData(res.body);
    const vs = pp.videos;
    const v = pp.firstVideo || (vs && Array.isArray(vs.data) ? vs.data[0] : (Array.isArray(vs) ? vs[0] : null));
    if (!v) throw new Error("Tik.Porn: không đọc được video (HTTP " + res.statusCode + ")");
    return { v, full };
  }
  async getDetail(url) {
    const { v, full } = await this.video(url);
    const it = this.item(v);
    const tags = (v.tags || []).map((t) => yhText(t.name || t.title || "")).filter((x) => x);
    if (v.action && v.action.name) tags.unshift(v.action.name);
    const stars = (v.pornstars || []).map((p) => p.name).filter((x) => x).join(", ");
    return {
      name: it.name, imageUrl: it.imageUrl, author: stars || ((v.user || {}).username || ""),
      description: [(v.metadata || {}).description || "", v.views ? "👁 " + v.views : ""].filter((x) => x).join("\n"),
      genre: tags, status: 1, link: full,
      episodes: [{ name: "Xem video", url: full }],
    };
  }
  async getVideoList(url) {
    const { v } = await this.video(url);
    const headers = { "User-Agent": YH_UA, "Referer": this.base() + "/" };
    const out = [];
    for (const s of v.sources || []) {
      if (!s.src) continue;
      if (/mpegurl/i.test(s.type || "") || /\.m3u8/.test(s.src)) out.unshift({ url: s.src, originalUrl: s.src, quality: "HLS (tự chọn)", headers });
      else if (/mp4/i.test(s.type || "") || /\.mp4/.test(s.src)) out.push({ url: s.src, originalUrl: s.src, quality: "MP4 " + ((s.src.match(/_(\d{3,4})\.mp4/) || [])[1] || "") + "p (tải xuống)", headers });
    }
    if (!out.length && v.source && v.source.src) out.push({ url: v.source.src, originalUrl: v.source.src, quality: "MP4", headers });
    return out;
  }
  getFilterList() {
    return [
      yhSelect("feed", "Nguồn video", [["Bảng tin (video dọc)", "shorts"]]),
      yhSelect("order", "Thứ tự bảng tin", [["Đề xuất", ""], ["Ngẫu nhiên", "rand"]]),
      yhSelect("tag", "Thẻ (khi không tìm kiếm)", [["Tất cả", ""], ["Amateur", "amateur"], ["Asian", "asian"], ["Big Ass", "big-ass"], ["Big Boobs", "big-boobs"], ["Blowjob", "blowjob"], ["Cosplay", "cosplay"], ["Hentai", "hentai"], ["Latina", "latina"], ["Lesbian", "lesbian"], ["MILF", "milf"], ["Redhead", "redhead"], ["Solo", "solo"], ["Teen (18+)", "teen"]]),
    ];
  }
  getSourcePreferences() { return [yhDomainPref("https://tik.porn")]; }
}

