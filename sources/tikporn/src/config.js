var BASE_URL = "https://tik.porn";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Amateur": "/?s=amateur[&page={p}]",
  "Asian": "/?s=asian[&page={p}]",
  "MILF": "/?s=milf[&page={p}]",
  "Teen 18+": "/?s=teen[&page={p}]",
  "Trang chủ": "/"
 },
 "search": "/?s={q}[&page={p}]",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]",
 "item": "a[href*='/video/'][title]",
 "title": ":self@title || img@alt",
 "link": ":self@href",
 "cover": "img@img",
 "pageSize": 20,
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content",
 "d_desc": "meta[property=og:description]@content",
 "single": "Xem video",
 "video": "video source@src || video@src"
};
