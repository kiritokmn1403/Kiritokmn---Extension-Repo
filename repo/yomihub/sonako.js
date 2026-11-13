const mangayomiSources = [{"name":"Sonako (Light Novel)","lang":"vi","id":920260012,"baseUrl":"https://sonako.fandom.com","apiUrl":"","iconUrl":"https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/icons/sonako.png","typeSource":"single","itemType":2,"isNsfw":false,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/sonako.js"}];
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

// Sonako – Light Novel tiếng Việt (sonako.fandom.com/vi). Bundled with YomiHub 0.1.5.
// Uses the wiki's MediaWiki API (parse / search / recentchanges). Fandom sits
// behind Cloudflare: the app's Cloudflare solver (WebView / CloudScraper)
// clears the challenge once, then the API answers normally. If the API is
// still blocked, chapters fall back to a hidden WebView render.
const SONAKO_SKIP = /^(Trang_Chính|Sonako_Light_Novel|Đặc_biệt|Thể_loại|Category|Tập_tin|File|Bản_mẫu|Template|Thảo_luận|Talk|Thành_viên|User|Sonako:|Trợ_giúp|Help|MediaWiki|Blog|Diễn_đàn|Forum|Message_Wall|Bức_tường)/i;

class DefaultExtension extends MProvider {
  constructor() {
    super();
    this.client = new Client();
  }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  wiki() { return this.base() + "/vi"; }
  // No User-Agent here: the Cloudflare solver stores its own UA with the
  // cf_clearance cookie and the app adds both to every request.
  getHeaders(url) { return { "Referer": this.wiki() + "/" }; }

  async api(params) {
    const q = Object.keys(params).map((k) => k + "=" + encodeURIComponent(params[k])).join("&");
    const url = `${this.wiki()}/api.php?${q}&format=json&formatversion=2&origin=*`;
    let body = "";
    try { body = (await this.client.get(url, this.getHeaders(""))).body || ""; } catch (e) {}
    if (!body.trim().startsWith("{")) {
      // Cloudflare challenge: let a real (hidden) WebView pass it and read the JSON.
      const script = `(function(){var n=0;var t=setInterval(function(){n++;var b=(document.body&&document.body.innerText)||'';
        if(b.trim().charAt(0)==='{'||n>80){clearInterval(t);window.flutter_inappwebview.callHandler('setResponse', b);}},250);})();`;
      try { body = await evaluateJavascriptViaWebview(url, this.getHeaders(url), [script]); } catch (e) {}
    }
    if (!body || !body.trim().startsWith("{")) throw new Error("Fandom đang chặn (Cloudflare) – mở WebView của tiện ích để xác minh rồi thử lại");
    return JSON.parse(body);
  }
  titleOf(link) {
    let t = ("" + link).replace(/^https?:\/\/[^/]+/i, "").replace(/^\/vi\/wiki\//, "").replace(/^\/wiki\//, "");
    try { t = decodeURIComponent(t); } catch (e) {}
    return t.replace(/ /g, "_").split("#")[0];
  }
  pageUrl(title) { return `${this.wiki()}/wiki/${encodeURIComponent(title.replace(/ /g, "_")).replace(/%2F/g, "/").replace(/%3A/g, ":")}`; }
  series(title) { return title.replace(/ /g, "_").split(/[:/]/)[0]; }

  async covers(titles) {
    const out = {};
    for (let i = 0; i < titles.length; i += 40) {
      try {
        const r = await this.api({ action: "query", prop: "pageimages", piprop: "thumbnail", pithumbsize: "320", titles: titles.slice(i, i + 40).join("|") });
        for (const p of (r.query && r.query.pages) || []) {
          if (p.thumbnail) out[p.title.replace(/ /g, "_")] = p.thumbnail.source;
        }
      } catch (e) {}
    }
    return out;
  }
  async toList(titles, hasNextPage) {
    const uniq = [...new Set(titles.map((t) => t.replace(/ /g, "_")))].filter((t) => t && !SONAKO_SKIP.test(t));
    const cov = await this.covers(uniq);
    return {
      list: uniq.map((t) => ({ name: t.replace(/_/g, " "), link: this.pageUrl(t), imageUrl: cov[t] || "" })),
      hasNextPage,
    };
  }

  async getPopular(page) {
    // Series listed on the main "Sonako Light Novel" page, 40 per page.
    if (!this._all) {
      const r = await this.api({ action: "parse", page: "Sonako_Light_Novel", prop: "links" });
      this._all = ((r.parse && r.parse.links) || [])
        .filter((l) => l.ns === 0 && l.exists !== false)
        .map((l) => l.title.replace(/ /g, "_"))
        .filter((t) => !SONAKO_SKIP.test(t) && !/[:/]/.test(t));
    }
    const start = (page - 1) * 40;
    return this.toList(this._all.slice(start, start + 40), start + 40 < this._all.length);
  }
  async getLatestUpdates(page) {
    const r = await this.api({ action: "query", list: "recentchanges", rcnamespace: "0", rclimit: "200", rctype: "edit|new", rcprop: "title" });
    const ser = [];
    for (const c of (r.query && r.query.recentchanges) || []) {
      const s = this.series(c.title);
      if (!ser.includes(s)) ser.push(s);
    }
    const start = (page - 1) * 30;
    return this.toList(ser.slice(start, start + 30), start + 30 < ser.length);
  }
  async search(query, page, filters) {
    if (!query || !query.trim()) return this.getPopular(page);
    const r = await this.api({ action: "query", list: "search", srsearch: query.trim(), srnamespace: "0", srlimit: "30", sroffset: "" + (page - 1) * 30 });
    const ser = [];
    for (const s of (r.query && r.query.search) || []) {
      const t = this.series(s.title);
      if (!ser.includes(t)) ser.push(t);
    }
    return this.toList(ser, !!(r.continue));
  }

  async getDetail(url) {
    const title = this.titleOf(url);
    const r = await this.api({ action: "parse", page: title, prop: "text|displaytitle", redirects: "1" });
    const html = (r.parse && r.parse.text) || "";
    const doc = new Document(html);
    const name = yhText((r.parse && r.parse.displaytitle || title).replace(/<[^>]+>/g, "").replace(/_/g, " "));
    const img = doc.selectFirst("img[data-src], img[src]");
    let imageUrl = img ? (img.attr("data-src") || img.attr("src") || "") : "";
    if (imageUrl.startsWith("data:")) imageUrl = "";
    const description = doc.select("p").slice(0, 4).map((p) => yhText(p.text)).filter(Boolean).join("\n");
    const chapters = [];
    const seen = {};
    let vol = "";
    for (const el of doc.select("h2, h3, h4, a[href]")) {
      const tag = (el.tagName || el.localName || "").toLowerCase();
      if (/^h[2-4]$/.test(tag)) { vol = yhText(el.text).replace(/\[.*?\]/g, "").trim(); continue; }
      const href = el.attr("href") || "";
      if (!/^\/(vi\/)?wiki\//.test(href) || /action=|redlink=1/.test(href)) continue;
      const t = this.titleOf(href);
      if (SONAKO_SKIP.test(t) || t === title.replace(/ /g, "_") || seen[t]) continue;
      // chapter pages are sub-pages of the series or name a chapter/volume
      const own = t.startsWith(title.replace(/ /g, "_") + ":") || t.startsWith(title.replace(/ /g, "_") + "/");
      if (!own && !/(Chương|Chapter|Tập|Volume|Vol|Phần|Mở_đầu|Kết|Lời_bạt|Ngoại_truyện|Prologue|Epilogue|Minh_họa)/i.test(t)) continue;
      seen[t] = 1;
      const label = yhText(el.text) || t.replace(/_/g, " ");
      chapters.push({ name: vol ? `${vol} – ${label}` : label, url: this.pageUrl(t), scanlator: vol });
    }
    chapters.reverse();
    return { name, imageUrl, description, genre: [], status: 5, link: this.pageUrl(title), chapters };
  }

  async getHtmlContent(name, url) {
    const title = this.titleOf(url);
    try {
      const r = await this.api({ action: "parse", page: title, prop: "text", redirects: "1", disableeditsection: "1" });
      let html = (r.parse && r.parse.text) || "";
      html = html
        .replace(/<table[^>]*class="[^"]*(navbox|wikitable)[^"]*"[\s\S]*?<\/table>/gi, "")
        .replace(/<div[^>]*class="[^"]*(toc|navbox|printfooter)[^"]*"[\s\S]*?<\/div>/gi, "")
        .replace(/<span class="mw-editsection">[\s\S]*?<\/span>/gi, "")
        .replace(/<img([^>]*?)data-src="([^"]+)"/gi, '<img$1src="$2"');
      if (html.replace(/<[^>]+>/g, "").trim().length > 30) return html;
    } catch (e) {}
    const full = this.pageUrl(title);
    const script = `(function(){var n=0;var t=setInterval(function(){n++;var el=document.querySelector('.mw-parser-output');
      if(el||n>60){clearInterval(t);var c=el?el.cloneNode(true):null;
      if(c){c.querySelectorAll('script,style,noscript,.navbox,.toc,.mw-editsection').forEach(function(e){e.remove();});}
      window.flutter_inappwebview.callHandler('setResponse', c?c.innerHTML:'');}},250);})();`;
    try {
      const w = await evaluateJavascriptViaWebview(full, this.getHeaders(full), [script]);
      if (w && w.replace(/<[^>]+>/g, "").trim().length > 30) return w;
    } catch (e) {}
    return `<p>Không đọc được chương này (Fandom có thể đang yêu cầu xác minh Cloudflare – mở WebView của tiện ích rồi thử lại).</p><p><small>${full}</small></p>`;
  }
  async cleanHtmlContent(html) { return html; }
  getFilterList() { return [yhHeader("Sonako: tìm theo tên truyện")]; }
  getSourcePreferences() { return [yhDomainPref("https://sonako.fandom.com")]; }
}

