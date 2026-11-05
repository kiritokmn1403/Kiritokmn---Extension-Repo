var BASE_URL = "https://luphim.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/search?k={q}",
 "item": "div.sw-item > a.v-thumbnail",
 "title": "img@alt",
 "link": ":self@href",
 "ch_list": "div.de-eps a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "cover": "img@img",
 "ch_url": "a[href*=\"/xem-phim/\"]@href"
};
