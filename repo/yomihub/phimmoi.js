const mangayomiSources = [{"name":"Phimmoi (Ngừng hoạt động)","lang":"vi","id":920260026,"baseUrl":"https://phimmoii.mom","apiUrl":"","iconUrl":"https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/icons/phimmoi.png","typeSource":"single","itemType":1,"isNsfw":false,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/phimmoi.js"}];
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

// Phimmoi (phimmoii.mom) – phim bộ, phim lẻ, chiếu rạp Vietsub. Bundled with YomiHub.
// 0.3.6: rewritten for the current site (WordPress + OPhim). Mirrors from the
// "Website Extension" sheet: phimmoii.mom, messiahelartista.com, phimmois.sh.
const PM_LISTS = [["Phim bộ", "categories/phim-bo"], ["Phim lẻ", "categories/phim-le"], ["Phim chiếu rạp", "categories/phim-chieu-rap"], ["Mới cập nhật", "movie"]];
const PM_GENRES = [
  ["Tất cả", ""], ["Hành động", "genres/hanh-dong"], ["Cổ trang", "genres/co-trang"], ["Tình cảm", "genres/tinh-cam"], ["Hài hước", "genres/hai-huoc"],
  ["Kinh dị", "genres/kinh-di"], ["Viễn tưởng", "genres/vien-tuong"], ["Tâm lý", "genres/tam-ly"], ["Võ thuật", "genres/vo-thuat"],
  ["Hình sự", "genres/hinh-su"], ["Phiêu lưu", "genres/phieu-luu"], ["Hoạt hình", "genres/hoat-hinh"], ["Chính kịch", "genres/chinh-kich"],
];
const PM_MIRRORS = ["https://phimmoii.mom", "https://messiahelartista.com", "https://phimmois.sh"];

class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  getHeaders(url) { return { "User-Agent": YH_UA, "Referer": this.base() + "/" }; }
  async get(url) {
    let lastErr = null;
    const tried = [url];
    try {
      const r = await this.client.get(url, this.getHeaders(url));
      if (r.statusCode < 400 && r.body) return r.body;
      lastErr = new Error("HTTP " + r.statusCode);
    } catch (e) { lastErr = e; }
    // the site moves often: try the other known addresses with the same path
    const path = url.replace(/^https?:\/\/[^/]+/, "");
    for (const m of PM_MIRRORS) {
      const alt = m + path;
      if (tried.includes(alt)) continue;
      tried.push(alt);
      try { const r = await this.client.get(alt, this.getHeaders(alt)); if (r.statusCode < 400 && r.body) return r.body; } catch (e) {}
    }
    throw new Error("Phimmoi: không tải được " + url + " (" + (lastErr && lastErr.message || lastErr) + ")");
  }
  slugOf(u) { return ("" + u).replace(/\/+$/, "").split("/").pop(); }
  parse(html) {
    const doc = new Document(html);
    const list = [];
    const seen = {};
    for (const it of doc.select(".flw-item")) {
      const a = it.selectFirst("a.film-poster-ahref, .film-name a, a");
      if (!a) continue;
      const link = a.getHref;
      if (!link || seen[link] || !/\/movie\//.test(link)) continue;
      seen[link] = 1;
      const img = it.selectFirst("img");
      const name = yhText(a.attr("title") || (it.selectFirst(".film-name, h4") || a).text || (img ? img.attr("alt") : ""));
      const badge = it.selectFirst(".tick-rate, .fn-badge");
      list.push({ name: name + (badge && yhText(badge.text) ? " (" + yhText(badge.text) + ")" : ""), link: this.slugOf(link), imageUrl: img ? (img.attr("data-src") || img.attr("src") || img.attr("data-fallback")) : "" });
    }
    const hasNextPage = /class="[^"]*next[^"]*"|\/page\/\d+\//.test(html) && list.length >= 10;
    return { list, hasNextPage };
  }
  async listing(path, page) {
    return this.parse(await this.get(`${this.base()}/${path}/${page > 1 ? "page/" + page + "/" : ""}`));
  }
  async getPopular(page) { return this.listing("categories/phim-bo", page); }
  async getLatestUpdates(page) { return this.listing("movie", page); }
  async search(query, page, filters) {
    query = (query || "").trim();
    if (query) return this.parse(await this.get(`${this.base()}/${page > 1 ? "page/" + page + "/" : ""}?s=${encodeURIComponent(query)}`));
    return this.listing(yhF(filters, "genre") || yhF(filters, "list") || "categories/phim-bo", page);
  }
  // all episodes of every server: { "sv-0": [[label, url]…], … }
  async episodesOf(slug, detailHtml) {
    const links = [...new Set((detailHtml.match(/https?:\/\/[^"'\s]+\/xem-phim\/[^"'\s]+?-sv-\d+\/?/g) || []))];
    const servers = {};
    for (const l of links) { const sv = (l.match(/-sv-(\d+)/) || [])[1]; if (sv !== undefined && !servers[sv]) servers[sv] = l; }
    // the detail page does not always link every server: probe sv-0 / sv-1 too
    const any = Object.values(servers)[0];
    if (any) for (const sv of ["0", "1"]) if (!servers[sv]) servers[sv] = any.replace(/-sv-\d+/, "-sv-" + sv);
    const out = {};
    for (const sv of Object.keys(servers).sort()) {
      try {
        const html = await this.get(servers[sv]);
        const doc = new Document(html);
        const eps = [];
        const seen = {};
        for (const a of doc.select('a[href*="/xem-phim/"]')) {
          const href = a.getHref;
          if (!new RegExp("-sv-" + sv + "/?$").test(href) || seen[href]) continue;
          const label = yhText(a.text);
          if (!label || /tiếp|trước|next|prev/i.test(label)) continue;
          seen[href] = 1;
          const fromUrl = (href.match(/\/tap-(?:tap-)?([^/]+?)-sv-\d+/) || [])[1];
          eps.push([fromUrl ? fromUrl.replace(/^0+(?=\d)/, "").replace(/-/g, " ") : label, href]);
        }
        out[sv] = { name: (html.match(/data-sv(?:name)?="([^"]+)"/) || [])[1] || (sv === "0" ? "Vietsub" : "Server " + (parseInt(sv) + 1)), eps };
      } catch (e) {}
    }
    return out;
  }
  async getDetail(url) {
    const slug = this.slugOf(url);
    const html = await this.get(`${this.base()}/movie/${slug}/`);
    const doc = new Document(html);
    const meta = (p) => { const e = doc.selectFirst(`meta[property="${p}"], meta[name="${p}"]`); return e ? e.attr("content") : ""; };
    const h1 = doc.selectFirst("h1.film-name, h1");
    const servers = await this.episodesOf(slug, html);
    // one entry per episode number; other servers are offered in the player
    const byNo = {};
    const order = [];
    for (const sv of Object.keys(servers)) {
      for (const [label, href] of servers[sv].eps) {
        const no = yhEpNo(label);
        const key = no >= 0 ? "n" + no : label;
        if (!byNo[key]) { byNo[key] = { label, urls: [] }; order.push(key); }
        byNo[key].urls.push(href);
      }
    }
    const episodes = order.map((k) => ({
      name: (/^\d+$/.test(byNo[k].label) ? "Tập " + byNo[k].label : byNo[k].label),
      url: slug + "|" + byNo[k].label + "|" + byNo[k].urls.join(","),
    }));
    episodes.sort((a, b) => yhEpNo(b.name) - yhEpNo(a.name));
    const genres = doc.select('a[href*="/genres/"]').map((a) => yhText(a.text).replace(/^Phim\s+/, "")).filter(Boolean);
    return {
      name: h1 ? yhText(h1.text) : meta("og:title"),
      imageUrl: meta("og:image"),
      description: yhText(meta("description")),
      genre: [...new Set(genres)].slice(0, 8),
      status: yhStatus((html.match(/Trạng thái[^<]*<[^>]*>([^<]+)/) || [])[1] || ""),
      link: `${this.base()}/movie/${slug}/`,
      episodes,
    };
  }
  async getVideoList(url) {
    const [slug, label, list] = ("" + url).split("|");
    const videos = [];
    const web = [];
    const hdr = { "User-Agent": YH_UA, "Referer": this.base() + "/" };
    for (const watch of (list || "").split(",").filter(Boolean)) {
      try {
        const html = await this.get(watch);
        const sv = (watch.match(/-sv-(\d+)/) || [])[1] || "0";
        const doc = new Document(html);
        for (const b of doc.select("[data-link]")) {
          const link = b.attr("data-link");
          const type = (b.attr("data-type") || "").toLowerCase();
          const name = (sv === "0" ? "Vietsub" : sv === "1" ? "Thuyết minh" : "Server " + (parseInt(sv) + 1)) + " · " + (yhText(b.text) || type.toUpperCase());
          const m3u8 = /\.m3u8|\.mp4/i.test(link) && type !== "embed" ? link : yhInnerM3u8(link);
          if (m3u8) { if (!videos.some((v) => v.url === m3u8)) videos.push({ url: m3u8, originalUrl: m3u8, quality: name, headers: hdr }); }
          else if (/^https?:/.test(link)) web.push({ url: "yhweb:" + link, originalUrl: link, quality: name + " (web)", headers: hdr });
        }
      } catch (e) {}
    }
    if (!videos.length) { try { for (const v of await yhKKVideos(this.client, slug, label, this.base() + "/")) videos.push(v); } catch (e) {} }
    const all = videos.concat(web);
    if (!all.length) throw new Error("Phimmoi: tập này chưa có link phát.");
    return all;
  }
  getFilterList() {
    return [
      yhHeader("Bộ lọc dùng khi ô tìm kiếm trống (Thể loại > Danh sách)"),
      yhSelect("list", "Danh sách", PM_LISTS),
      yhSelect("genre", "Thể loại", PM_GENRES),
    ];
  }
  getSourcePreferences() { return [yhDomainPref("https://phimmoii.mom", "dự phòng: messiahelartista.com, phimmois.sh")]; }
}

