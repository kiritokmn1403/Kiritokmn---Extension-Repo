const mangayomiSources = [{"name":"Pornhub (18+)","lang":"all","id":920260007,"baseUrl":"https://www.pornhub.com","apiUrl":"","iconUrl":"https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/icons/pornhub.png","typeSource":"single","itemType":1,"isNsfw":true,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/pornhub.js"}];
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

// Pornhub (18+). Bundled with YomiHub, đánh dấu NSFW.
// 0.2.0: "Shorties" (video dọc, https://www.pornhub.com/shorties) cho Video
// Short Scroll – bộ lọc "Nguồn video" = Shorties.
// Lưu ý: nhà mạng Việt Nam chặn tên miền này – bật DNS-over-HTTPS (Cài đặt > Chung)
// hoặc mục VPN (Tor/WARP) để truy cập.
const PH_ORDER = [["Mới nhất","cm"],["Xem nhiều","mv"],["Đánh giá cao","tr"],["Dài nhất","lg"],["Nổi bật","ht"]];
const PH_SORT_SEARCH = [["Liên quan nhất",""],["Mới nhất","mr"],["Xem nhiều","mv"],["Đánh giá cao","tr"],["Dài nhất","lg"]];
const PH_PERIOD = [["Mọi lúc",""],["Hôm nay","t"],["Tuần này","w"],["Tháng này","m"],["Năm nay","y"]];
const PH_DUR = [["Bất kỳ",""],["0–10 phút","0-10"],["10–20 phút","10-20"],["20–30 phút","20-30"],["Trên 30 phút","30-"]];
const PH_CATS = [["Tất cả",""],["Amateur","3"],["Anal","35"],["Asian","1"],["Babe","5"],["Big Ass","4"],["Big Tits","8"],["Blonde","9"],["Brunette","11"],["Compilation","57"],["Cosplay","241"],["Creampie","15"],["Ebony","17"],["Hardcore","21"],["Hentai","36"],["Japanese","111"],["Latina","26"],["Lesbian","27"],["MILF","29"],["POV","41"],["Public","24"],["Teen (18+)","37"],["Threesome","65"],["Vietnamese","105"],["Webcam","61"]];

class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  getHeaders(url) {
    return { "User-Agent": YH_UA, "Referer": this.base() + "/", "Cookie": "accessAgeDisclaimerPH=1; accessAgeDisclaimerUK=1; platform=pc; age_verified=1" };
  }
  async doc(url) {
    const res = await this.client.get(url, this.getHeaders(url));
    return new Document(res.body);
  }
  parse(doc) {
    const list = [];
    const seen = {};
    for (const li of doc.select("li.pcVideoListItem, li.videoBox")) {
      const key = li.attr("data-video-vkey");
      const a = li.selectFirst("a.linkVideoThumb, a[href*='viewkey=']");
      if (!key || !a || seen[key]) continue;
      seen[key] = 1;
      const img = li.selectFirst("img");
      const dur = yhText((li.selectFirst(".duration") || {}).text);
      list.push({
        name: yhText(a.attr("title") || (img ? img.attr("alt") : "")) + (dur ? ` [${dur}]` : ""),
        link: "/view_video.php?viewkey=" + key,
        imageUrl: img ? (img.attr("data-image") || img.attr("data-mediumthumb") || img.attr("src")) : "",
      });
    }
    return { list, hasNextPage: doc.selectFirst("li.page_next a") != null };
  }
  async getPopular(page) { return this.parse(await this.doc(`${this.base()}/video?o=mv&t=w&page=${page}`)); }
  async getLatestUpdates(page) { return this.parse(await this.doc(`${this.base()}/video?o=cm&page=${page}`)); }
  // ---- Shorties feed (0.2.0) ----
  // Page 1 = /shorties (token + seed + first clips), later pages =
  // /shorties/get?token&offset&seed with the page's session cookies.
  shortItem(v) {
    const key = v.vkey || ((v.linkUrl || "").match(/viewkey=([a-z0-9]+)/i) || [])[1];
    if (!key) return null;
    return {
      name: yhText(v.videoTitle || v.metaTitle || v.name || key),
      link: "/view_video.php?viewkey=" + key,
      imageUrl: v.imageUrl || (v.thumbs && v.thumbs[0]) || "",
    };
  }
  async shorties(page) {
    const base = this.base();
    const ck = "accessAgeDisclaimerPH=1; accessAgeDisclaimerUK=1; age_verified=1";
    let st = {};
    try { st = JSON.parse(yhJarGet("yh_ph_short_state") || "{}"); } catch (e) {}
    // 0.4.5: the page token expires (it starts with a unix time). Short Video
    // opens the feed on a random page 1–3, so a token saved yesterday was
    // reused: /shorties/get answered 403 "Down for Maintenance" (HTML) and the
    // feed failed with "Pornhub Shorties: HTTP 403". A token older than 15
    // minutes, or one the API rejects, is now fetched again.
    const stale = !st.ts || (Date.now() - st.ts) > 15 * 60 * 1000;
    if (page <= 1 || !st.token || stale) {
      const res = await this.client.get(base + "/shorties", { "User-Agent": YH_UA, "Cookie": ck, "Referer": base + "/" });
      const html = res.body || "";
      const jar = yhJarMerge("yh_ph_short_jar", res, ck);
      st = {
        token: (html.match(/var token = "([^"]+)"/) || [])[1] || "",
        seed: (html.match(/ddSeed = (\d+)/) || [])[1] || "",
        next: +((html.match(/ddOffset = (\d+)/) || [])[1] || 10),
        ts: Date.now(),
      };
      new SharedPreferences().setString("yh_ph_short_state", JSON.stringify(st));
      const list = [];
      const seen = {};
      const parts = html.split(/"vkey":"/).slice(1);
      for (const part of parts) {
        const key = (part.match(/^([a-z0-9]+)"/) || [])[1];
        if (!key || seen[key]) continue;
        const seg = part.slice(0, 6000);
        const t = (seg.match(/"videoTitle":"((?:[^"\\]|\\.)*)"/) || [])[1];
        if (!t) continue;
        seen[key] = 1;
        const img = (seg.match(/"imageUrl":"((?:[^"\\]|\\.)*)"/) || [])[1] || "";
        list.push({ name: yhText(yhJsonStr(t)), link: "/view_video.php?viewkey=" + key, imageUrl: yhJsonStr(img) });
      }
      // first page: also pull one API page so the feed starts with enough clips
      if (st.token && page <= 1) {
        try { for (const it of (await this.shortiesApi(st, jar)).list) { const k = it.link.split('=').pop(); if (!seen[k]) { seen[k] = 1; list.push(it); } } } catch (e) {}
      }
      if (!list.length) throw new Error("Pornhub Shorties không trả về video (trang bị chặn? bật DoH hoặc VPN).");
      return { list, hasNextPage: !!st.token };
    }
    try {
      return await this.shortiesApi(st, yhJarGet("yh_ph_short_jar"));
    } catch (e) {
      // token rejected → start a new session once
      if (!/HTTP 40[13]|HTML/.test("" + e)) throw e;
      st.ts = 0;
      new SharedPreferences().setString("yh_ph_short_state", JSON.stringify(st));
      return await this.shorties(1);
    }
  }
  async shortiesApi(st, jar) {
    const base = this.base();
    const u = `${base}/shorties/get?token=${encodeURIComponent(st.token)}&offset=${st.next}&orientation=straight` + (st.seed ? `&seed=${st.seed}` : "");
    const res = await this.client.get(u, {
      "User-Agent": YH_UA, "Cookie": jar, "Referer": base + "/shorties",
      "X-Requested-With": "XMLHttpRequest", "Accept": "application/json",
    });
    let j = {};
    const body = (res.body || "").trim();
    if (res.statusCode >= 400 || body.startsWith("<")) throw new Error("Pornhub Shorties: HTTP " + res.statusCode + (body.startsWith("<") ? " (HTML)" : ""));
    try { j = JSON.parse(body); } catch (e) { throw new Error("Pornhub Shorties: HTTP " + res.statusCode); }
    const vids = j.videos || [];
    st.next = (+j.offset || st.next) + Math.max(vids.length, 5);
    new SharedPreferences().setString("yh_ph_short_state", JSON.stringify(st));
    yhJarMerge("yh_ph_short_jar", res, jar);
    return { list: vids.map((v) => this.shortItem(v)).filter((x) => x), hasNextPage: vids.length > 0 && !j.isEmpty };
  }
  async search(query, page, filters) {
    if ((yhF(filters, "feed") || "") === "shorts" && !(query && query.trim())) return await this.shorties(page);
    const p = [];
    const dur = yhF(filters, "dur") || "";
    if (dur) { const [mi, ma] = dur.split("-"); if (mi) p.push("min_duration=" + mi); if (ma) p.push("max_duration=" + ma); }
    if ((yhF(filters, "hd") || []).length) p.push("hd=1");
    const period = yhF(filters, "t") || "";
    if (query && query.trim()) {
      const o = yhF(filters, "sorts") || "";
      if (o) p.push("o=" + o);
      if (period && o) p.push("t=" + period);
      return this.parse(await this.doc(`${this.base()}/video/search?search=${encodeURIComponent(query.trim())}&page=${page}${p.length ? "&" + p.join("&") : ""}`));
    }
    const o = yhF(filters, "order") || "cm";
    p.push("o=" + o);
    if (period && o !== "cm") p.push("t=" + period);
    const c = yhF(filters, "cat") || "";
    if (c) p.push("c=" + c);
    return this.parse(await this.doc(`${this.base()}/video?${p.join("&")}&page=${page}`));
  }
  async getDetail(url) {
    const full = yhAbs(this.base(), url);
    const res = await this.client.get(full, this.getHeaders(full));
    const html = res.body;
    const doc = new Document(html);
    const meta = (p) => { const e = doc.selectFirst(`meta[property="${p}"]`) || doc.selectFirst(`meta[name="${p}"]`); return e ? e.attr("content") : ""; };
    const title = yhText(meta("og:title") || (doc.selectFirst("h1.title") || {}).text);
    const tags = doc.select(".categoriesWrapper a, .tagsWrapper a, .video-info-row a[href*='/categories/']").map((e) => yhText(e.text)).filter((t) => t && t !== "Suggest").slice(0, 20);
    const uploader = yhText((doc.selectFirst(".usernameBadgesWrapper a, .video-detailed-info .usernameWrap a") || {}).text);
    const views = yhText((doc.selectFirst(".count") || {}).text);
    return {
      name: title,
      imageUrl: meta("og:image"),
      author: uploader,
      description: `${title}\n${views ? "👁 " + views + " lượt xem" : ""}`,
      genre: tags,
      status: 1,
      link: full,
      episodes: [{ name: "Xem video", url: full }],
    };
  }
  async getVideoList(url) {
    const full = yhAbs(this.base(), url);
    const res = await this.client.get(full, this.getHeaders(full));
    const html = res.body;
    const m = html.match(/var\s+flashvars_\d+\s*=\s*(\{[\s\S]*?\});\s*\n/) || html.match(/flashvars_\d+\s*=\s*(\{[\s\S]*?\});/);
    if (!m) throw new Error("Không tìm thấy luồng video (có thể trang bị chặn – hãy bật DoH hoặc VPN).");
    const fv = JSON.parse(m[1]);
    const headers = { "User-Agent": YH_UA, "Referer": this.base() + "/" };
    const videos = [];
    for (const d of fv.mediaDefinitions || []) {
      if (d.format === "hls" && d.videoUrl) videos.push({ url: d.videoUrl, originalUrl: d.videoUrl, quality: (d.quality || d.height) + "p HLS", headers, _q: +d.height || 0 });
    }
    for (const d of fv.mediaDefinitions || []) {
      if (d.format === "mp4" && d.videoUrl && d.remote) {
        try {
          const r = await this.client.get(d.videoUrl, headers);
          for (const x of JSON.parse(r.body)) {
            if (x.videoUrl) videos.push({ url: x.videoUrl, originalUrl: x.videoUrl, quality: x.quality + "p MP4 (tải xuống)", headers, _q: +x.quality || 0 });
          }
        } catch (e) {}
      }
    }
    videos.sort((a, b) => b._q - a._q);
    return videos.map((v) => { delete v._q; return v; });
  }
  getFilterList() {
    return [
      yhSelect("feed", "Nguồn video", [["Video thường", ""], ["Shorties (video dọc – Short Video)", "shorts"]]),
      yhHeader("Khi tìm kiếm: dùng Sắp xếp kết quả. Khi duyệt: dùng Thứ tự và Danh mục"),
      yhSelect("sorts", "Sắp xếp kết quả", PH_SORT_SEARCH),
      yhSelect("order", "Thứ tự (duyệt)", PH_ORDER),
      yhSelect("cat", "Danh mục (duyệt)", PH_CATS),
      yhSelect("t", "Khoảng thời gian", PH_PERIOD),
      yhSelect("dur", "Thời lượng", PH_DUR),
      yhGroup("hd", "Chất lượng", [["Chỉ HD", "1"]]),
    ];
  }
  getSourcePreferences() { return [yhDomainPref("https://www.pornhub.com")]; }
}

