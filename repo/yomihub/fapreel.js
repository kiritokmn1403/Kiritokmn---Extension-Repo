const mangayomiSources = [{"name":"FapReel (18+)","lang":"all","id":920260016,"baseUrl":"https://fapreel.com","apiUrl":"","iconUrl":"https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/icons/fapreel.png","typeSource":"single","itemType":1,"isNsfw":true,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/fapreel.js"}];
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

// FapReel (18+) – "porn reels" dọc. YomiHub 0.2.0, có Short Video.
// Trang dựng sẵn: /?page=N, /reels/<chủ đề>?page=N, /shorts. Mỗi reel không
// có trang riêng nên dữ liệu reel (id, mp4, ảnh, tên) nằm trong link.
const FR_TOPICS = [["Trang chủ", ""], ["Shorts", "shorts"], ["Amateur", "amateur"], ["Anal", "anal"], ["Babe", "babe"], ["Big Ass", "big-ass"], ["Big Boobs", "big-boobs"], ["Blonde", "blonde"], ["Blowjob", "blowjob"], ["Brunette", "brunette"], ["Hardcore", "hardcore"], ["Lesbian", "lesbian"], ["Masturbation", "masturbation"], ["MILF", "milf"], ["Natural Tits", "natural-tits"], ["OnlyFans", "onlyfans"], ["Petite", "petite"], ["Small Boobs", "small-boobs"], ["Solo", "solo-action"], ["Teen 18+", "teen-18"]];
class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  base() { return yhBase(this); }
  getHeaders(url) { return { "User-Agent": YH_UA, "Referer": this.base() + "/", "Cookie": "fr_age_ok=1" }; }
  async page(url) {
    const res = await this.client.get(url, this.getHeaders(url));
    if (res.statusCode >= 400) throw new Error("FapReel: HTTP " + res.statusCode + " (trang bị chặn? bật DoH hoặc VPN)");
    const html = res.body || "";
    // names from the schema.org VideoObject blocks, keyed by video file
    const names = {};
    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        const j = JSON.parse(m[1]);
        for (const o of Array.isArray(j) ? j : [j]) if (o && o["@type"] === "VideoObject" && o.contentUrl) names[o.contentUrl.replace(/^https?:\/\/[^/]+/, "").split("?")[0]] = o.name;
      } catch (e) {}
    }
    const doc = new Document(html);
    const list = [];
    const seen = {};
    for (const r of doc.select("article.reel")) {
      const id = (r.attr("id") || "").replace("reel-", "");
      const src = r.attr("data-src");
      if (!id || !src || seen[id]) continue;
      seen[id] = 1;
      const img = r.selectFirst("img.reel-poster");
      const who = yhText((r.selectFirst(".reel-name") || r.selectFirst(".reel-studio span") || {}).text);
      const tags = r.select(".reel-topniche").map((a) => yhText(a.text)).filter((x) => x);
      const v = yhAbs(this.base(), src);
      const name = names[src.split("?")[0]] || (who ? who + (tags.length ? " – " + tags.slice(0, 2).join(", ") : "") : "Reel " + id);
      const i = img ? yhAbs(this.base(), img.attr("src")) : "";
      list.push({
        name: yhText(name),
        imageUrl: i,
        link: JSON.stringify({ id: id, v: v, i: i, n: yhText(name), w: who, t: tags, url: this.base() + "/#reel-" + id }),
      });
    }
    return list;
  }
  listUrl(topic, page) {
    const p = page > 1 ? `?page=${page}` : "";
    if (!topic) return this.base() + "/" + p;
    if (topic === "shorts") return this.base() + "/shorts" + p;
    return `${this.base()}/reels/${topic}${p}`;
  }
  async getPopular(page) { const list = await this.page(this.listUrl("", page)); return { list, hasNextPage: list.length > 0 }; }
  async getLatestUpdates(page) { return await this.getPopular(page); }
  async search(query, page, filters) {
    if (query && query.trim()) {
      const slug = query.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      let list = [];
      try { list = await this.page(`${this.base()}/reels/${slug}` + (page > 1 ? `?page=${page}` : "")); } catch (e) {}
      if (!list.length) try { list = await this.page(`${this.base()}/reels/creator/${slug}` + (page > 1 ? `?page=${page}` : "")); } catch (e) {}
      return { list, hasNextPage: list.length > 0 };
    }
    const list = await this.page(this.listUrl(yhF(filters, "topic") || "", page));
    return { list, hasNextPage: list.length > 0 };
  }
  data(url) { try { return JSON.parse(url); } catch (e) { return { v: url }; } }
  async getDetail(url) {
    const d = this.data(url);
    return {
      name: d.n || "FapReel", imageUrl: d.i || "", author: d.w || "",
      description: (d.n || "") + (d.t && d.t.length ? "\n" + d.t.join(" · ") : ""),
      genre: d.t || [], status: 1, link: d.url || this.base(),
      episodes: [{ name: "Xem reel", url: url }],
    };
  }
  async getVideoList(url) {
    const d = this.data(url);
    const v = d.v || "";
    if (!v) return [];
    return [{ url: v, originalUrl: v, quality: "MP4", headers: { "User-Agent": YH_UA, "Referer": this.base() + "/" } }];
  }
  getFilterList() {
    return [
      yhSelect("feed", "Nguồn video", [["Reels (video dọc)", "shorts"]]),
      yhSelect("topic", "Chủ đề (khi không tìm kiếm)", FR_TOPICS),
    ];
  }
  getSourcePreferences() { return [yhDomainPref("https://fapreel.com")]; }
}

