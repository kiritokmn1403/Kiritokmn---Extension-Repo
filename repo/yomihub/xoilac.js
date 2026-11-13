const mangayomiSources = [{"name":"Xôi Lạc TV","lang":"vi","id":920260025,"baseUrl":"https://xoilacxxi.cc","apiUrl":"","iconUrl":"https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/icons/xoilac.png","typeSource":"single","itemType":1,"isNsfw":false,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/xoilac.js"}];
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

// Xôi Lạc TV – trực tiếp bóng đá, thể thao, xem lại trận đấu. Bundled with YomiHub.
// 0.3.6: rewritten for the current site (xoilacxxi.cc now redirects to
// xoilacvbt.tv). Live matches come from the home page grid; each match has
// several channels ("list_stream") played through the site's player –
// YomiHub sniffs the real HLS stream from it, or opens it in the web player.
const XL_MIRRORS = ["https://xoilacvbt.tv", "https://xoilacxxi.cc", "https://xoilacvb.cc", "https://xoilac32.org"];

class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  getHeaders(url) { return { "User-Agent": YH_UA, "Referer": this.base() + "/" }; }
  async get(path) {
    const first = this.base();
    let err = null;
    for (const h of [first].concat(XL_MIRRORS.filter((m) => m !== first))) {
      try {
        const r = await this.client.get(h + path, this.getHeaders(h + path));
        if (r.statusCode < 400 && r.body) return r.body;
        err = new Error("HTTP " + r.statusCode);
      } catch (e) { err = e; }
    }
    throw new Error("Xôi Lạc: không tải được trang (" + (err && err.message || err) + ") – thử bật DNS/VPN hoặc đổi tên miền.");
  }
  pathOf(u) { return ("" + u).replace(/^https?:\/\/[^/]+/, ""); }
  matches(html) {
    const doc = new Document(html);
    const list = [];
    const seen = {};
    for (const it of doc.select(".grid-matches__item[data-fid]")) {
      const a = it.selectFirst('a[href*="/truc-tiep/"]') || (/\/truc-tiep\//.test(it.attr("href") || "") ? it : null);
      const href = a ? (a.getHref || a.attr("href")) : "";
      if (!href || seen[href]) continue;
      seen[href] = 1;
      const teams = it.select(".team-name-group p, .h-team .team-name, .h-team span").map((e) => yhText(e.text)).filter(Boolean);
      const league = it.attr("data-league") || yhText((it.selectFirst(".gmd-match-league span") || { text: "" }).text);
      const time = yhText((it.selectFirst(".grid-match__date, .h-time") || { text: "" }).text);
      const live = /Đang đá|is-live/.test(it.outerHtml) ? "🔴 " : "";
      const name = live + (teams.length >= 2 ? teams[0] + " vs " + teams[1] : yhText(it.text).slice(0, 80)) + (time ? " · " + time : "") + (league ? " · " + league : "");
      const img = it.selectFirst("img.team-logo-0, .team-logo-group img, img");
      list.push({ name, link: this.pathOf(href), imageUrl: img ? (img.attr("data-src") || img.attr("src")) : "" });
    }
    return list;
  }
  replays(html) {
    const doc = new Document(html);
    const list = [];
    const seen = {};
    for (const it of doc.select(".post-item")) {
      const a = it.selectFirst(".title_name a, a");
      if (!a) continue;
      const href = a.getHref;
      if (!href || seen[href]) continue;
      seen[href] = 1;
      const img = it.selectFirst("img");
      list.push({ name: yhText((it.selectFirst(".title_name") || a).text), link: this.pathOf(href), imageUrl: img ? (img.attr("data-src") || img.attr("src")) : "" });
    }
    return list;
  }
  async getPopular(page) {
    if (page > 1) return { list: [], hasNextPage: false };
    return { list: this.matches(await this.get("/")), hasNextPage: false };
  }
  async getLatestUpdates(page) {
    const html = await this.get(`/xem-lai-bong-da/${page > 1 ? "page/" + page + "/" : ""}`);
    const list = this.replays(html);
    return { list, hasNextPage: new RegExp("/page/" + (page + 1) + "/").test(html) };
  }
  async search(query, page, filters) {
    const q = (query || "").trim().toLowerCase();
    if (page > 1) return { list: [], hasNextPage: false };
    const all = this.matches(await this.get("/"));
    try { for (const x of this.replays(await this.get("/xem-lai-bong-da/"))) all.push(x); } catch (e) {}
    const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");
    return { list: q ? all.filter((m) => norm(m.name).includes(norm(q))) : all, hasNextPage: false };
  }
  async getDetail(url) {
    const html = await this.get(url);
    const doc = new Document(html);
    const meta = (p) => { const e = doc.selectFirst(`meta[property="${p}"], meta[name="${p}"]`); return e ? e.attr("content") : ""; };
    const h1 = doc.selectFirst("h1");
    const live = /\/truc-tiep\//.test(url);
    return {
      name: h1 ? yhText(h1.text) : meta("og:title"),
      imageUrl: meta("og:image"),
      description: yhText(meta("description") || meta("og:description")),
      status: live ? 0 : 1,
      link: this.base() + url,
      episodes: [{ name: live ? "Trực tiếp" : "Xem lại", url }],
    };
  }
  async getVideoList(url) {
    const html = await this.get(url);
    const embeds = [];
    const ls = html.match(/var\s+list_stream\s*=\s*(\[[\s\S]*?\]);/);
    if (ls) { try { for (const g of JSON.parse(ls[1])) for (const u of [].concat(g)) if (u) embeds.push(u); } catch (e) {} }
    const ifr = html.match(/<iframe[^>]+src=["'](https?:[^"']+)["']/g) || [];
    for (const f of ifr) { const u = (f.match(/src=["']([^"']+)/) || [])[1]; if (u && !embeds.includes(u) && !/facebook|google|ads/i.test(u)) embeds.push(u); }
    for (const m of html.match(/https?:\/\/[^"'\s<>]+\.m3u8[^"'\s<>]*/g) || []) if (!embeds.includes(m)) embeds.unshift(m);
    const videos = [];
    const hdr = { "User-Agent": YH_UA, "Referer": this.base() + "/" };
    let sniffed = 0;
    for (let i = 0; i < embeds.length; i++) {
      const e = embeds[i].replace(/\\\//g, "/");
      const label = "Kênh " + (i + 1);
      if (/\.m3u8/i.test(e)) { videos.push({ url: e, originalUrl: e, quality: label, headers: hdr }); continue; }
      if (sniffed < 2) {
        sniffed++;
        try {
          const out = await evaluateJavascriptViaWebview(e, hdr, ["__yh_sniff__", ""]);
          const s = JSON.parse(out || "{}");
          for (const it of (s.all || []).slice(0, 2)) videos.push({ url: it.url, originalUrl: it.url, quality: label + " HLS", headers: Object.assign({ "User-Agent": YH_UA }, it.headers || {}) });
        } catch (_) {}
      }
      videos.push({ url: "yhweb:" + e, originalUrl: e, quality: label + " (web)", headers: hdr });
    }
    if (!videos.length) throw new Error("Xôi Lạc: trận này chưa có link phát (chưa tới giờ hoặc đã kết thúc).");
    return videos;
  }
  getFilterList() { return [yhHeader("Phổ biến = trận đang/sắp đá; Mới nhất = xem lại trận đấu")]; }
  getSourcePreferences() { return [yhDomainPref("https://xoilacvbt.tv", "địa chỉ trong danh sách: xoilacxxi.cc (chuyển hướng tới đây), xoilacvb.cc, xoilac32.org")]; }
}

