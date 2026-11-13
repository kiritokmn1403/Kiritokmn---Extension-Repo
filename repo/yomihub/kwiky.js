const mangayomiSources = [{"name":"Kwiky (18+)","lang":"all","id":920260014,"baseUrl":"https://kwiky.com","apiUrl":"","iconUrl":"https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/icons/kwiky.png","typeSource":"single","itemType":1,"isNsfw":true,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/kwiky.js"}];
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

// Kwiky (18+) – clip ngắn dọc của các cam model. YomiHub 0.2.0, có Short Video.
// API của trang qua cổng /api/v1/gateway (cần mã _xsrf của phiên + header
// x-gateway): getKwikiesFromOnlinePerformers (bảng tin), keywordSearch (tìm),
// quickies/metadata (ảnh, mp4).
const KW_GATEWAY = "76d59e04-97fa-4ced-aa99-b86ffaf756a2";
const KW_GENDER = [["Nữ", "f"], ["Nam", "m"], ["Cặp đôi", "c"], ["Trans", "t"]];
class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  afno() { return ("" + yhPref("yh_afno", "2-162764.38182")).trim(); }
  getHeaders(url) { return { "User-Agent": YH_UA, "Referer": this.base() + "/" }; }
  async session(force) {
    let s = {};
    try { s = JSON.parse(yhJarGet("yh_kw_sess") || "{}"); } catch (e) {}
    if (!force && s.x && s.t && Date.now() - s.t < 30 * 60 * 1000) return s;
    const res = await this.client.get(this.base() + "/api/state/v1/preload" + (this.afno() ? "?AFNO=" + encodeURIComponent(this.afno()) : ""), this.getHeaders());
    const x = ((res.body || "").match(/meta\.content = '([^']+)'/) || [])[1] || "";
    if (!x) throw new Error("Kwiky: không lấy được phiên (HTTP " + res.statusCode + ") – trang bị chặn? bật DoH hoặc VPN");
    s = { x: x, c: yhJarMerge("yh_kw_jar", res, ""), t: Date.now() };
    try { new SharedPreferences().setString("yh_kw_sess", JSON.stringify(s)); } catch (e) {}
    return s;
  }
  async api(path, retry) {
    const s = await this.session(!!retry);
    const h = this.getHeaders();
    h["Accept"] = "application/json";
    h["x-xsrf-token"] = s.x;
    h["x-gateway"] = KW_GATEWAY;
    if (s.c) h["Cookie"] = s.c;
    const res = await this.client.get(this.base() + "/api/v1/gateway" + path, h);
    if ((res.statusCode === 401 || res.statusCode === 403 || res.statusCode === 400) && !retry) return await this.api(path, true);
    let j;
    try { j = JSON.parse(res.body); } catch (e) { throw new Error("Kwiky: HTTP " + res.statusCode + " " + ("" + res.body).slice(0, 120)); }
    if (j && !Array.isArray(j) && j.errors) throw new Error("Kwiky: " + JSON.stringify(j.errors).slice(0, 160) + " (HTTP " + res.statusCode + ")");
    return j;
  }
  async meta(ids) {
    if (!ids.length) return [];
    const j = await this.api("/v1/quickies/metadata?quickieIds=" + encodeURIComponent(ids.join(",")) + "&pagetype=feed&init=true");
    const out = [];
    for (const id of ids) {
      const q = j[id];
      if (!q || !q.media || !q.media.url) continue;
      out.push(q);
    }
    return out;
  }
  item(q) {
    const m = q.media, c = q.creator || {};
    return {
      name: yhText((c.name || "Kwiky") + (yhText(m.description) ? " – " + yhText(m.description) : "")),
      imageUrl: m.thumbUrl || "",
      link: "/videos?kwikyId=" + m.quickieId + (this.afno() ? "&AFNO=" + this.afno() : ""),
    };
  }
  async feed(page, gender) {
    const ids = await this.api(`/v1/quickies/getKwikiesFromOnlinePerformers?page=${page}&size=20&gender=${gender}`);
    if (!Array.isArray(ids)) throw new Error("Kwiky: phản hồi lạ – " + JSON.stringify(ids).slice(0, 160));
    const list = (await this.meta(ids)).map((q) => this.item(q));
    if (!list.length && ids.length && page === 1) throw new Error("Kwiky: có " + ids.length + " clip nhưng không đọc được thông tin (metadata)");
    return { list, hasNextPage: Array.isArray(ids) && ids.length > 0 && page < 50 };
  }
  async getPopular(page) { return await this.feed(page, "f"); }
  async getLatestUpdates(page) { return await this.feed(page, "f"); }
  async search(query, page, filters) {
    const g = yhF(filters, "gender") || "f";
    const tag = yhF(filters, "tag") || "";
    const q = (query && query.trim()) || tag;
    if (!q) return await this.feed(page, g);
    if (page > 1) return { list: [], hasNextPage: false };
    const j = await this.api(`/v1/quickies/keywordSearch?keyword=${encodeURIComponent(q)}&gender=${g}`);
    const ids = ((j && j.recommended) || []).map((x) => x.id).filter((x) => x).slice(0, 60);
    const list = [];
    for (let i = 0; i < ids.length; i += 20) for (const m of await this.meta(ids.slice(i, i + 20))) list.push(this.item(m));
    return { list, hasNextPage: false };
  }
  idOf(url) { return (("" + url).match(/kwikyId=([0-9a-f-]+)/i) || ("" + url).match(/([0-9a-f]{8}-[0-9a-f-]{27})/i) || [])[1]; }
  async getDetail(url) {
    const id = this.idOf(url);
    const q = (await this.meta([id]))[0];
    if (!q) throw new Error("Kwiky: clip không còn tồn tại");
    const it = this.item(q), c = q.creator || {};
    return {
      name: it.name, imageUrl: it.imageUrl, author: c.name || "",
      description: [q.media.description || "", c.name ? "Cam model: " + c.name : "", q.media.duration ? q.media.duration + " giây" : ""].filter((x) => x).join("\n"),
      genre: (q.media.tags || []).slice(0, 20), status: 1,
      link: this.base() + it.link,
      episodes: [{ name: "Xem clip", url: it.link }],
    };
  }
  async getVideoList(url) {
    const q = (await this.meta([this.idOf(url)]))[0];
    if (!q) return [];
    const headers = { "User-Agent": YH_UA, "Referer": this.base() + "/" };
    const out = [{ url: q.media.url, originalUrl: q.media.url, quality: (q.media.height ? Math.min(q.media.width || 0, q.media.height) + "p " : "") + "MP4", headers }];
    if (q.media.previewUrl) out.push({ url: q.media.previewUrl, originalUrl: q.media.previewUrl, quality: "MP4 nhẹ (xem trước)", headers });
    return out;
  }
  getFilterList() {
    return [
      yhSelect("feed", "Nguồn video", [["Clip dọc (Short Video)", "shorts"]]),
      yhSelect("gender", "Giới tính", KW_GENDER),
      yhSelect("tag", "Thẻ (khi không tìm kiếm)", [["Tất cả", ""], ["latina", "latina"], ["sexy", "sexy"], ["milf", "milf"], ["tease", "tease"], ["brunette", "brunette"], ["blonde", "blonde"], ["petite", "petite"], ["curvy", "curvy"], ["dance", "dance"], ["asian", "asian"], ["ebony", "ebony"], ["pov", "pov"]]),
    ];
  }
  getSourcePreferences() {
    return [
      yhDomainPref("https://kwiky.com"),
      { key: "yh_afno", editTextPreference: { title: "Mã giới thiệu (AFNO)", summary: "Gắn vào link chia sẻ", value: "2-162764.38182", dialogTitle: "AFNO", dialogMessage: "", text: "2-162764.38182" } },
    ];
  }
}

