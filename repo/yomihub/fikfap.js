const mangayomiSources = [{"name":"FikFap (18+)","lang":"all","id":920260008,"baseUrl":"https://fikfap.com","apiUrl":"","iconUrl":"","typeSource":"single","itemType":1,"isNsfw":true,"version":"0.5.3","dateFormat":"","dateFormatLocale":"","pkgPath":"repo/yomihub/fikfap.js"}];
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

// FikFap (18+). Bundled with YomiHub, đánh dấu NSFW.
// Lưu ý: nhà mạng Việt Nam chặn tên miền này – bật DNS-over-HTTPS hoặc mục VPN.
const FF_ORIENT = [["Tất cả",""],["Straight","STRAIGHT"],["Gay","GAY"],["Lesbian","LESBIAN"],["Trans","TRANS"]];

class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); }
  get supportsLatest() { return true; }
  api() { return ("" + yhPref("yh_api", "https://api.fikfap.com")).replace(/\/+$/, ""); }
  anon() {
    const sp = new SharedPreferences();
    let id = sp.getString("ff_anon", "");
    if (!id) {
      id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => { const r = (Math.random() * 16) | 0; return (c === "x" ? r : (r & 0x3) | 0x8).toString(16); });
      sp.setString("ff_anon", id);
    }
    return id;
  }
  getHeaders(url) {
    return { "User-Agent": YH_UA, "Origin": yhBase(this), "Referer": yhBase(this) + "/", "Authorization-Anonymous": this.anon(), "isLoggedIn": "false", "isPWA": "false" };
  }
  async posts(path, page, key) {
    const sp = new SharedPreferences();
    let pq = `${path}${path.includes("?") ? "&" : "?"}amount=24`;
    if (page > 1) {
      const after = sp.getString(`ff_after_${key}_${page}`, "");
      if (!after) return { list: [], hasNextPage: false };
      pq += "&afterId=" + after;
    }
    let arr = await this.getJsonAny(pq);
    if (!Array.isArray(arr)) arr = arr.posts || arr.data || [];
    return this.mapPosts(arr, key, page, arr.length > 0);
  }
  mapPosts(arr, key, page, hasNext) {
    const sp = new SharedPreferences();
    if (arr.length) sp.setString(`ff_after_${key}_${page + 1}`, "" + arr[arr.length - 1].postId);
    const orient = yhPref("ff_orient", "");
    if (orient) arr = arr.filter((p) => !p.sexualOrientation || p.sexualOrientation === orient);
    const list = arr.map((p) => ({
      name: yhText(p.label || "Video") + (p.author && p.author.username ? " · @" + p.author.username : ""),
      imageUrl: p.thumbnailStreamUrl || "",
      link: JSON.stringify({ id: p.postId, u: p.author ? p.author.username : "" }),
    }));
    return { list, hasNextPage: hasNext };
  }
  async getPopular(page) { return this.posts("/posts?sort=trending", page, "pop"); }
  async getLatestUpdates(page) { return this.posts("/posts", page, "new"); }
  // 0.4.3: tries the configured API host, then the official one; an HTML
  // answer (block page / Cloudflare) is reported instead of a JSON SyntaxError.
  async getJsonAny(pq) {
    const hosts = [...new Set([this.api(), "https://api.fikfap.com"])];
    let last = null;
    for (const h of hosts) {
      const url = h + pq;
      try {
        const res = await this.client.get(url, this.getHeaders(url));
        const b = ("" + (res.body || "")).trimStart();
        if (res.statusCode < 400 && (b.startsWith("[") || b.startsWith("{"))) return JSON.parse(b);
        last = new Error("FikFap: " + (b.startsWith("<") ? "máy chủ trả về trang HTML (bị chặn hoặc Cloudflare)" : "HTTP " + res.statusCode) + " – " + h);
      } catch (e) { last = e; }
    }
    throw last || new Error("FikFap: không tải được dữ liệu");
  }
  async apiJson(path) {
    const url = this.api() + path;
    const res = await this.client.get(url, this.getHeaders(url));
    if (res.statusCode >= 400) return null;
    try { return JSON.parse(res.body); } catch (e) { return null; }
  }
  async search(query, page, filters) {
    const q = (query || "").trim().replace(/^#/, "");
    const mode = yhF(filters, "mode") || "tag";
    const sort = yhF(filters, "sort") || "";
    if (!q) return sort ? this.posts(`/posts?sort=${sort}`, page, "s_" + sort) : this.getLatestUpdates(page);
    const sp = new SharedPreferences();
    if (mode === "user" || q.startsWith("@")) {
      let u = q.replace(/^@/, "");
      const ck = "ff_user_" + u.toLowerCase();
      if (page === 1) {
        const r = await this.apiJson(`/profile/username/${encodeURIComponent(u)}/posts?amount=1`);
        if (!r) {
          const f = await this.apiJson(`/search/profiles?q=${encodeURIComponent(u)}`);
          const list = (f && (f.users || f.profiles || (Array.isArray(f) ? f : []))) || [];
          if (list.length && list[0].username) u = list[0].username;
        }
        sp.setString(ck, u);
      } else u = sp.getString(ck, u);
      return this.posts(`/profile/username/${encodeURIComponent(u)}/posts`, page, "u_" + u);
    }
    if (mode === "text") {
      if (page > 1) return { list: [], hasNextPage: false };
      const r = await this.apiJson(`/search/posts?q=${encodeURIComponent(q)}`);
      return this.mapPosts((r && r.posts) || [], "x", 1, false);
    }
    // hashtag: resolve to an existing label first (labels are case-sensitive)
    const ck = "ff_tag_" + q.toLowerCase();
    let tag = page === 1 ? "" : sp.getString(ck, "");
    if (!tag) {
      const h = await this.apiJson(`/hashtags/label/${encodeURIComponent(q)}`);
      if (h && h.label) tag = h.label;
      else {
        const f = await this.apiJson(`/search/hashtags?q=${encodeURIComponent(q)}`);
        const hs = (f && f.hashtags) || [];
        const exact = hs.find((x) => (x.labelLower || "").toLowerCase() === q.toLowerCase());
        if (exact || hs.length) tag = (exact || hs[0]).label;
      }
      if (!tag) {
        // no such hashtag: fall back to a plain text search
        const r = await this.apiJson(`/search/posts?q=${encodeURIComponent(q)}`);
        return this.mapPosts((r && r.posts) || [], "x", 1, false);
      }
      sp.setString(ck, tag);
    }
    return this.posts(`/hashtags/label/${encodeURIComponent(tag)}/posts${sort ? "?sort=" + sort : ""}`, page, "t_" + tag + sort);
  }
  // 0.5.2: the app stores the detail `link` (https://fikfap.com/post/<id>) as
  // the entry's URL, so the next library update called JSON.parse on a URL:
  // "SyntaxError: unexpected token: 'https'" (logs 2, 04/11 09:48:58).
  // Accept the JSON link, a /post/<id> URL or a bare id.
  postId(url) {
    const s = ("" + (url || "")).trim();
    if (s.startsWith("{")) { try { return "" + JSON.parse(s).id; } catch (e) { } }
    const m = s.match(/\/post\/(\d+)/) || s.match(/^(\d+)$/);
    if (m) return m[1];
    throw new Error("FikFap: không nhận ra mã video trong \"" + s + "\"");
  }
  async getDetail(url) {
    const o = { id: this.postId(url) };
    const p = await this.getJsonAny(`/posts/${o.id}`);
    const a = p.author || {};
    return {
      name: yhText(p.label || "FikFap video"),
      imageUrl: p.thumbnailStreamUrl || "",
      author: a.username ? "@" + a.username : "",
      description: [p.label, a.description, (p.hashtags || []).map((h) => "#" + (h.label || h)).join(" ")].filter(Boolean).join("\n\n"),
      genre: (p.hashtags || []).map((h) => h.label || h).slice(0, 20),
      status: 1,
      link: `${yhBase(this)}/post/${o.id}`,
      episodes: [{ name: "Xem video", url: "" + o.id }],
    };
  }
  async getVideoList(url) {
    // 0.1.8: a list item link ({"id":…}) works too (Short Video feed)
    url = this.postId(url);
    const p = await this.getJsonAny(`/posts/${url}`);
    const v = p.videoStreamUrl;
    if (!v) throw new Error("Video chưa sẵn sàng.");
    return [{ url: v, originalUrl: v, quality: "FikFap HLS", headers: { "User-Agent": YH_UA, "Referer": yhBase(this) + "/" } }];
  }
  getFilterList() {
    return [
      yhSelect("mode", "Tìm theo", [["Hashtag", "tag"], ["Tên người dùng", "user"], ["Nội dung (1 trang)", "text"]]),
      yhSelect("sort", "Sắp xếp", [["Mặc định", ""], ["Mới nhất", "new"], ["Thịnh hành", "trending"], ["Hàng đầu", "top"], ["Ngẫu nhiên", "random"]]),
    ];
  }
  getSourcePreferences() {
    return [
      yhDomainPref("https://fikfap.com"),
      { key: "yh_api", editTextPreference: { title: "Địa chỉ API", summary: "Mặc định https://api.fikfap.com", value: "https://api.fikfap.com", dialogTitle: "API", dialogMessage: "", text: "https://api.fikfap.com" } },
      { key: "ff_orient", listPreference: { title: "Xu hướng nội dung", summary: "", valueIndex: 0, entries: FF_ORIENT.map((o) => o[0]), entryValues: FF_ORIENT.map((o) => o[1]) } },
    ];
  }
}

