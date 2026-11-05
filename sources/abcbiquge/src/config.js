var BASE_URL = "https://m.bqg6.xyz";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/?searchkey={q}",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]",
 "item": "ul > li > a.blue",
 "link": ":self@href",
 "title": ":self",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content"
};
