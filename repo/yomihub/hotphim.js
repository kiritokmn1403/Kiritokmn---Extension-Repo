const mangayomiSources = [{"name":"HotPhim","lang":"vi","id":920260003,"baseUrl":"https://hotphim.org","apiUrl":"","iconUrl":"https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/icons/hotphim.png","typeSource":"single","itemType":1,"isNsfw":false,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/hotphim.js"}];
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

// HotPhim (hotphim.org). Bundled with YomiHub.
const HP_GENRES = [["Tất cả",""],["Phim bộ","phim-bo"],["Phim lẻ","phim-le"],["Phim chiếu rạp","phim-chieu-rap"],["Phim đang chiếu","phim-dang-chieu"],["Phim sắp chiếu","phim-sap-chieu"],["TV Show","tv-show"],["Anime","anime"],["Hoạt hình","hoat-hinh"],["Hành động","hanh-dong"],["Chính kịch","chinh-kich"],["Cổ trang","co-trang"],["Gia đình","gia-dinh"],["Hài hước","hai-huoc"],["Hình sự","hinh-su"],["Khoa học","khoa-hoc"],["Kinh dị","kinh-di"],["Phiêu lưu","phieu-luu"],["Tâm lý","tam-ly"],["Thần thoại","than-thoai"],["Tình cảm","tinh-cam"],["Viễn tưởng","vien-tuong"],["Võ thuật","vo-thuat"]];
const HP_COUNTRIES = [["Tất cả",""],["Việt Nam","viet-nam"],["Trung Quốc","trung-quoc"],["Hàn Quốc","han-quoc"],["Nhật Bản","nhat-ban"],["Thái Lan","thai-lan"],["Âu Mỹ","au-my"],["Anh","anh"],["Đài Loan","dai-loan"],["Hồng Kông","hong-kong"],["Singapore","singapore"],["Indonesia","indonesia"],["Canada","canada"],["Brazil","brazil"],["Mexico","mexico"],["Iran","iran"]];

class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  getHeaders(url) { return { "User-Agent": YH_UA, "Referer": this.base() + "/" }; }
  async doc(url) {
    const res = await this.client.get(url, this.getHeaders(url));
    return new Document(res.body);
  }
  pageUrl(path, page, query) {
    let u = this.base() + path.replace(/\/?$/, "/");
    if (page > 1) u += `page/${page}/`;
    if (query) u += `?s=${encodeURIComponent(query)}`;
    return u;
  }
  parse(doc) {
    const list = [];
    const seen = {};
    for (const it of doc.select(".sw-item, .item")) {
      const a = it.selectFirst(".item-title a") || it.selectFirst("a.v-thumbnail");
      if (!a) continue;
      const link = a.getHref;
      if (!link || seen[link] || !/hotphim|^\//.test(link)) continue;
      seen[link] = 1;
      const img = it.selectFirst("img");
      list.push({
        name: yhText(a.attr("title") || a.text || (img ? img.attr("alt") : "")),
        link,
        imageUrl: img ? (img.attr("data-src") || img.attr("src") || "") : "",
      });
    }
    const hasNextPage = doc.select("a.next, a.next.page-numbers, .pagination a[rel=next]").length > 0 ||
      doc.outerHtml.indexOf("/page/") >= 0 && list.length >= 20;
    return { list, hasNextPage };
  }
  async getPopular(page) { return this.parse(await this.doc(this.pageUrl("/the-loai/phim-chieu-rap", page))); }
  async getLatestUpdates(page) { return this.parse(await this.doc(this.pageUrl("/the-loai/phim-dang-chieu", page))); }
  async search(query, page, filters) {
    if (query && query.trim()) return this.parse(await this.doc(this.pageUrl("", page, query.trim())));
    const g = yhF(filters, "genre") || "";
    const c = yhF(filters, "country") || "";
    if (g) return this.parse(await this.doc(this.pageUrl(`/the-loai/${g}`, page)));
    if (c) return this.parse(await this.doc(this.pageUrl(`/quoc-gia/${c}`, page)));
    return this.getLatestUpdates(page);
  }
  async getDetail(url) {
    const full = yhAbs(this.base(), url);
    const doc = await this.doc(full);
    const meta = (p) => { const e = doc.selectFirst(`meta[property="${p}"]`) || doc.selectFirst(`meta[name="${p}"]`); return e ? e.attr("content") : ""; };
    const name = yhText((meta("og:title") || "").replace(/\s*[-|]\s*Hot\s*Phim.*$/i, "").replace(/^Xem\s+Phim\s+/i, ""));
    const lines = [];
    let author = "";
    for (const l of doc.select(".detail-line")) {
      const k = yhText((l.selectFirst(".de-title") || {}).text);
      const v = yhText((l.selectFirst(".de-value") || {}).text);
      if (!k) continue;
      if (/Đạo diễn/i.test(k)) author = v;
      lines.push(k + " " + v);
    }
    const genre = doc.select(".hl-tags a.tag-topic, a[href*='/the-loai/']").map((e) => yhText(e.text)).filter((v, i, a) => v && a.indexOf(v) === i).slice(0, 15);
    const descEl = doc.selectFirst(".description") || doc.selectFirst(".de-description");
    const description = yhText(descEl ? descEl.text : meta("description")) + (lines.length ? "\n\n" + lines.join("\n") : "");
    const eps = [];
    const seen = {};
    for (const a of doc.select(".de-eps a.item, .de-eps a, a[href*='/tap-']")) {
      const href = a.getHref;
      if (!href || seen[href]) continue;
      seen[href] = 1;
      const num = (href.match(/\/(\d+)\/?$/) || [])[1];
      eps.push({ name: yhText(a.text) || (num ? "Tập " + num : "Xem"), url: href });
    }
    if (!eps.length) eps.push({ name: "Xem phim", url: full.replace(/\/?$/, "/") + "1/" });
    eps.reverse();
    return { name, imageUrl: meta("og:image"), description, author, genre, status: 5, link: full, episodes: eps };
  }
  async getVideoList(url) {
    const full = yhAbs(this.base(), url);
    const res = await this.client.get(full, this.getHeaders(full));
    const html = res.body;
    const out = [];
    const re = /(?:videoSource|source|file)\s*[:=]\s*['"]([^'"]+\.m3u8[^'"]*)['"]/g;
    let m;
    while ((m = re.exec(html)) !== null) {
      if (!out.some((v) => v.url === m[1])) out.push({ url: m[1], originalUrl: m[1], quality: "HotPhim HLS", headers: this.getHeaders(m[1]) });
    }
    return out;
  }
  getFilterList() {
    return [
      yhHeader("Bộ lọc dùng khi ô tìm kiếm trống"),
      yhSelect("genre", "Thể loại / danh sách", HP_GENRES),
      yhSelect("country", "Quốc gia", HP_COUNTRIES),
    ];
  }
  getSourcePreferences() { return [yhDomainPref("https://hotphim.org")]; }
}

