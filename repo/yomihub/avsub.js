const mangayomiSources = [{"name":"AVSub – AnimeVietsub (Ngừng hoạt động)","lang":"vi","id":920260010,"baseUrl":"https://animevietsub.news","apiUrl":"","iconUrl":"https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/icons/avsubanimevietsub.png","typeSource":"single","itemType":1,"isNsfw":false,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/avsub.js"}];
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

// AVSub – AnimeVietsub (animevietsub.news; animevietsub.nl trong sheet và .sale đều chuyển hướng 301 về .news, kiểm tra 28/10/2026). Bundled with YomiHub 0.1.4, updated 0.2.0, 0.4.3.
const AVS_GENRES = [["Tất cả",""],["Hành động","hanh-dong"],["Phiêu lưu","phieu-luu"],["Hài hước","hai-huoc"],["Tình cảm","tinh-cam"],["Học đường","truong-hoc"],["Siêu nhiên","sieu-nhien"],["Phép thuật","phep-thuat"],["Ma thuật","ma-thuat"],["Kinh dị","kinh-di"],["Bí ẩn","mystery"],["Tâm lý","psychological"],["Drama","drama"],["Đời thường","doi-thuong"],["Thể thao","the-thao"],["Âm nhạc","am-nhac"],["Mecha","mecha"],["Sci-Fi","sci-fi"],["Shounen","shounen"],["Seinen","seinen"],["Shoujo","shoujo"],["Josei","josei"],["Harem","harem"],["Ecchi","ecchi"],["Isekai / Trò chơi","tro-choi"],["Lịch sử","lich-su"],["Quân đội","quan-doi"],["Samurai","samurai"],["Võ thuật","martial-arts"],["Vampire","vampire"],["Demons","demons"],["Siêu năng lực","super-power"],["Không gian","space"],["Thriller","thriller"],["Hồi hộp","hoi-hop"],["Cartoon","cartoon"],["Trẻ em","tre-em"],["Live Action","live-action"],["Tokusatsu","tokusatsu"]];
const AVS_LISTS = [["Anime mới cập nhật","/anime-moi/"],["Đang chiếu","/danh-sach/list-dang-chieu/"],["Trọn bộ","/danh-sach/list-tron-bo/"],["Anime bộ","/anime-bo/"],["Anime lẻ (movie)","/anime-le/"],["Sắp chiếu","/anime-sap-chieu/"],["Hoạt hình Trung Quốc","/hoat-hinh-trung-quoc/"],["Xếp hạng ngày","/bang-xep-hang/day.html"],["Xếp hạng tháng","/bang-xep-hang/month.html"],["Xếp hạng mùa","/bang-xep-hang/season.html"],["Xếp hạng năm","/bang-xep-hang/year.html"],["Được bình chọn","/bang-xep-hang/voted.html"]];
const AVS_SEASONS = [["Không chọn",""],["Xuân","spring"],["Hạ","summer"],["Thu","autumn"],["Đông","winter"]];

class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  cookie() {
    try { return new SharedPreferences().getString("yh_avs_cookie", ""); } catch (e) { return ""; }
  }
  saveCookie(c) {
    try { new SharedPreferences().setString("yh_avs_cookie", c); } catch (e) {}
  }
  getHeaders(url) {
    const h = { "User-Agent": YH_UA, "Referer": this.base() + "/", "Accept-Language": "vi-VN,vi;q=0.9" };
    const c = this.cookie();
    if (c) h["Cookie"] = c;
    return h;
  }
  // The site answers the first visit with 403 + a cookie, then serves pages
  // to clients that send that cookie back.
  mergeCookies(res) {
    const raw = (res.headers && (res.headers["set-cookie"] || res.headers["Set-Cookie"])) || "";
    if (!raw) return false;
    const jar = {};
    for (const part of this.cookie().split(";")) {
      const i = part.indexOf("=");
      if (i > 0) jar[part.slice(0, i).trim()] = part.slice(i + 1).trim();
    }
    const re = /(?:^|,\s*)([A-Za-z0-9_\-]+)=([^;,]*)/g;
    let m, changed = false;
    while ((m = re.exec(raw)) !== null) {
      if (/^(expires|path|domain|max-age)$/i.test(m[1])) continue;
      if (jar[m[1]] !== m[2]) { jar[m[1]] = m[2]; changed = true; }
    }
    if (changed) this.saveCookie(Object.keys(jar).map((k) => k + "=" + jar[k]).join("; "));
    return changed;
  }
  async get(url) {
    this._dbg = [];
    let res = await this.client.get(url, this.getHeaders(url));
    this._dbg.push(res.statusCode + ":" + Object.keys((res.headers || {})).filter((k) => /cookie/i.test(k)).map((k) => ("" + res.headers[k]).split(/,\s*(?=[A-Za-z0-9_\-]+=)/).map((c) => c.split("=")[0]).join("+")).join("|"));
    if (res.statusCode === 403 && this.mergeCookies(res)) res = await this.client.get(url, this.getHeaders(url));
    else if (res.statusCode === 403 && this.cookie()) {
      // 0.2.0: stale session cookie that the site no longer refreshes –
      // start a fresh session instead of failing.
      this.saveCookie("");
      res = await this.client.get(url, this.getHeaders(url));
      if (res.statusCode === 403 && this.mergeCookies(res)) res = await this.client.get(url, this.getHeaders(url));
    } else this.mergeCookies(res);
    // 0.2.0: some sessions need a second round (cookie set on the retry)
    if (res.statusCode === 403 && this.mergeCookies(res)) res = await this.client.get(url, this.getHeaders(url));
    this._dbg.push(res.statusCode + " c=" + this.cookie().split(";").map((c) => c.split("=")[0].trim()).join("+"));
    // Cloudflare challenge (e.g. through Tor/VPN): let a WebView pass it and
    // hand back the rendered page.
    const b = res.body || "";
    if (/<title>\s*Just a moment|challenge-platform/i.test(b) || (res.statusCode >= 400 && b.length < 5000)) {
      const script = `(function(){var n=0;var t=setInterval(function(){n++;
        var ok=!/Just a moment/i.test(document.title)&&document.querySelector('body')&&document.body.innerHTML.length>2000&&/animevietsub|animevsub/i.test(location.host+document.title+(document.querySelector('meta[property="og:site_name"]')||{}).content);
        if(ok||n>120){clearInterval(t);window.flutter_inappwebview.callHandler('setResponse',ok?document.documentElement.outerHTML:'');}},250);})();`;
      try {
        const h = this.getHeaders(url);
        delete h["Cookie"];
        const html = await evaluateJavascriptViaWebview(url, h, [script]);
        this._dbg.push("wv=" + (html || "").length);
        if (html) return { statusCode: 200, body: html, headers: {} };
      } catch (e) { this._dbg.push("wv!" + e); }
    }
    return res;
  }
  async post(url, body) {
    const h = this.getHeaders(url);
    h["X-Requested-With"] = "XMLHttpRequest";
    h["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
    let res = await this.client.post(url, h, body);
    if (res.statusCode === 403 && this.mergeCookies(res)) res = await this.client.post(url, this.getHeaders(url), body);
    return res;
  }
  async doc(url) {
    const res = await this.get(url);
    this._last = `HTTP ${res.statusCode}, ${(res.body || "").length} byte` + (res.statusCode >= 400 ? "; " + (this._dbg || []).join(" ; ") : "");
    return new Document(res.body);
  }
  // An empty first page means the site did not serve the list (blocked, new
  // domain…): report what came back instead of a silent "no results".
  checked(r, page) {
    if (!r.list.length && (page || 1) === 1) throw new Error("AVSub không trả về danh sách (" + this._last + "). Thử mở WebView của tiện ích, hoặc đổi Tên miền trong cài đặt.");
    return r;
  }
  listUrl(path, page, sort) {
    let p = path;
    if (p.endsWith(".html")) return this.base() + p; // rankings have one page
    p = p.replace(/\/?$/, "/");
    return this.base() + p + (page > 1 ? `trang-${page}.html` : "") + (sort ? `?sort=${sort}` : "");
  }
  parse(doc, page) {
    const list = [];
    const seen = {};
    for (const it of doc.select("article.TPost.C, li.TPostMv .TPost")) {
      const a = it.selectFirst("a");
      if (!a) continue;
      const link = a.getHref;
      if (!link || seen[link] || link.indexOf("/phim/") < 0) continue;
      seen[link] = 1;
      const img = it.selectFirst("img");
      const t = it.selectFirst(".Title");
      list.push({
        name: yhText(t ? t.text : (img ? img.attr("title") || img.attr("alt") : "")),
        link: link.replace(/^https?:\/\/[^/]+/, ""),
        imageUrl: img ? (img.attr("data-src") || img.attr("src") || "") : "",
      });
    }
    // ranking pages (bang-xep-hang) use a different card
    if (!list.length) {
      for (const it of doc.select(".e-item")) {
        const a = it.selectFirst("a[href*='/phim/']");
        if (!a) continue;
        const link = a.getHref;
        if (!link || seen[link]) continue;
        seen[link] = 1;
        const img = it.selectFirst("img");
        const t = it.selectFirst(".title-item");
        list.push({
          name: yhText(t ? t.text : (a.attr("title") || "").replace(/^Phim\s+/, "").split(" - ")[0]),
          link: link.replace(/^https?:\/\/[^/]+/, ""),
          imageUrl: img ? (img.attr("data-src") || img.attr("src") || "") : "",
        });
      }
    }
    // 0.2.0: last resort when the theme changes again – any poster link to
    // /phim/…-aNNN/ with an image (logs.txt 07/10: HTTP 200, 896 KB, 0 items).
    if (!list.length) {
      for (const a of doc.select("a[href*='/phim/']")) {
        const link = a.getHref;
        if (!link || seen[link] || !/-a\d+\/?$/.test(link)) continue;
        const img = a.selectFirst("img");
        if (!img) continue;
        seen[link] = 1;
        list.push({
          name: yhText(a.attr("title") || img.attr("alt") || img.attr("title") || ""),
          link: link.replace(/^https?:\/\/[^/]+/, ""),
          imageUrl: img.attr("data-src") || img.attr("src") || "",
        });
      }
    }
    const pages = doc.select(".wp-pagenavi a, .pagination a").map((a) => a.getHref).join(" ");
    const hasNextPage = list.length > 0 && pages.indexOf(`trang-${(page || 1) + 1}.html`) >= 0;
    return { list, hasNextPage };
  }
  async getPopular(page) { return this.checked(this.parse(await this.doc(this.listUrl("/anime-moi/", page, "view")), page), page); }
  async getLatestUpdates(page) { return this.checked(this.parse(await this.doc(this.listUrl("/anime-moi/", page)), page), page); }
  async search(query, page, filters) {
    if (query && query.trim()) {
      const q = encodeURIComponent(query.trim().replace(/\s+/g, "+")).replace(/%2B/g, "+");
      return this.parse(await this.doc(this.base() + `/tim-kiem/${q}/` + (page > 1 ? `trang-${page}.html` : "")), page);
    }
    const g = yhF(filters, "genre") || "";
    const season = yhF(filters, "season") || "";
    const year = (yhF(filters, "year") || "").trim();
    const sort = yhF(filters, "sort") || "";
    if (season && /^\d{4}$/.test(year)) return this.parse(await this.doc(this.listUrl(`/season/${season}/${year}/`, page, sort)), page);
    if (g) return this.parse(await this.doc(this.listUrl(`/the-loai/${g}/`, page, sort)), page);
    const l = yhF(filters, "list") || "/anime-moi/";
    return this.parse(await this.doc(this.listUrl(l, page, yhF(filters, "sort") || "")), page);
  }
  async getDetail(url) {
    const full = yhAbs(this.base(), url).replace(/xem-phim\.html$|tap-[^/]+\.html$/, "");
    const doc = await this.doc(full);
    const meta = (p) => { const e = doc.selectFirst(`meta[property="${p}"]`); return e ? e.attr("content") : ""; };
    const name = yhText((doc.selectFirst("h1.Title") || {}).text) || meta("og:title");
    const sub = yhText((doc.selectFirst("h2.SubTitle") || {}).text);
    const info = doc.select(".InfoList li").map((l) => yhText(l.text)).filter((t) => t && !/^Tập mới/.test(t));
    let status = 5, author = "";
    for (const t of info) {
      if (/^Trạng thái/i.test(t)) status = /hoàn|full|trọn/i.test(t) ? 1 : (/đang|cập nhật/i.test(t) ? 0 : 5);
      if (/^Đạo diễn|^Studio/i.test(t) && !author) author = t.replace(/^[^:]*:\s*/, "");
    }
    const genre = doc.select(".InfoList a[href*='/the-loai/']").map((a) => yhText(a.text)).filter((v, i, a) => v && a.indexOf(v) === i);
    const img = doc.selectFirst(".Image img.wp-post-image, .TPost .Image img");
    const description = yhText((doc.selectFirst(".Description") || {}).text) +
      (sub ? "\n\nTên khác: " + sub : "") + (info.length ? "\n\n" + info.join("\n") : "");
    // the episode list lives on the watch page
    const watch = await this.doc(full.replace(/\/?$/, "/") + "xem-phim.html");
    const eps = [];
    const seen = {};
    const groups = watch.select(".server.server-group");
    const multi = groups.length > 1;
    for (const g of groups.length ? groups : [watch]) {
      const label = multi ? yhText((g.selectFirst(".server-name") || {}).text) : "";
      for (const a of g.select("a.episode-link")) {
        const href = a.getHref;
        if (!href || seen[href]) continue;
        seen[href] = 1;
        const t = yhText(a.attr("title") || a.text);
        eps.push({ name: (label ? `[${label}] ` : "") + (/^\d/.test(t) ? "Tập " + t : t), url: href.replace(/^https?:\/\/[^/]+/, "") });
      }
    }
    eps.reverse();
    return {
      name, imageUrl: (img && !/logo/.test(img.attr("src") || "")) ? img.attr("src") : meta("og:image"),
      description, author, genre, status, link: full.replace(this.base(), ""), episodes: eps,
    };
  }
  // Every server becomes one entry; servers that only exist as the site's
  // own web player are flagged "yhweb:" so YomiHub opens them in its web
  // player and the automatic server switch can fall back to them.
  addResult(out, f, label) {
    if (!f || f.success != 1) return;
    const ref = { "Referer": this.base() + "/", "User-Agent": YH_UA };
    if ((f.playTech === "api" || f.playTech === "all") && Array.isArray(f.link)) {
      for (const x of f.link) {
        const file = ("" + (x.file || "")).replace("&http", "http");
        if (!file) continue;
        out.push({ url: file, originalUrl: file, quality: `${label} ${x.label || ""}`.trim(), headers: ref });
      }
    } else if (typeof f.link === "string" && /^https?:/.test(f.link)) {
      if (/\.(m3u8|mp4)(\?|$)/.test(f.link)) out.push({ url: f.link, originalUrl: f.link, quality: label, headers: ref });
      else out.push({ url: "yhweb:" + f.link, originalUrl: f.link, quality: label + " (web)", headers: ref });
    }
  }
  async getVideoList(url) {
    const full = yhAbs(this.base(), url);
    const res = await this.get(full);
    const html = res.body;
    const doc = new Document(html);
    const out = [];
    const film = (full.match(/-a(\d+)\//) || [])[1] || "";
    const active = doc.selectFirst("a.episode-link.active") || doc.selectFirst(`a.episode-link[href="${full}"]`);
    const epId = active ? active.attr("data-id") : ((html.match(/"episode_id"\s*:\s*"(\d+)"/) || [])[1] || "");
    // 1) the default server
    try {
      const m = html.match(/window\.PLAYER_DATA\s*=\s*(\{[\s\S]*?\});/);
      if (m) this.addResult(out, JSON.parse(m[1]), "DU");
      else if (active) {
        const r = await this.post(this.base() + "/ajax/player", `link=${encodeURIComponent(active.attr("data-hash"))}&id=${film}`);
        this.addResult(out, JSON.parse(r.body), "DU");
      }
    } catch (e) {}
    // 2) backup servers
    try {
      if (epId) {
        const r = await this.post(this.base() + "/ajax/player", `episodeId=${epId}&backup=1`);
        const j = JSON.parse(r.body);
        const sv = new Document("<div>" + (j.html || "") + "</div>");
        for (const a of sv.select("a.btn3dsv")) {
          const label = yhText(a.text);
          if (label === "DU" && out.length) continue;
          try {
            const rr = await this.post(this.base() + "/ajax/player",
              `link=${encodeURIComponent(a.attr("data-href"))}&play=${a.attr("data-play")}&id=${a.attr("data-id")}&backuplinks=1`);
            this.addResult(out, JSON.parse(rr.body), label);
          } catch (e) {}
        }
      }
    } catch (e) {}
    // direct streams first, web players last
    out.sort((a, b) => (a.url.startsWith("yhweb:") ? 1 : 0) - (b.url.startsWith("yhweb:") ? 1 : 0));
    return out;
  }
  getFilterList() {
    return [
      yhHeader("Bộ lọc dùng khi ô tìm kiếm trống"),
      yhSelect("list", "Danh sách", AVS_LISTS.map((x) => [x[0], x[1]])),
      yhSelect("sort", "Sắp xếp", [["Mặc định", ""], ["Mới cập nhật", "latest"], ["Xem nhiều", "view"], ["Đánh giá", "rating"], ["Tên A-Z", "nameaz"], ["Tên Z-A", "nameza"]]),
      yhSelect("genre", "Thể loại", AVS_GENRES),
      yhSelect("season", "Mùa", AVS_SEASONS),
      yhText_("year", "Năm (dùng cùng Mùa, vd. 2026)"),
    ];
  }
  getSourcePreferences() { return [yhDomainPref("https://animevietsub.news", "AnimeVietsub hay đổi tên miền – animevietsub.nl (sheet Website Extension) và .sale hiện chuyển về animevietsub.news (kiểm tra 28/10/2026)")]; }
}

