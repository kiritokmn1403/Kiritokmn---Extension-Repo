var BASE_URL = "https://hihiphim.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?q={q}",
 "item": "div.grid-3x2 > div.h-item",
 "title": "h4 a",
 "link": "[class*=title] a@href",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "ch_list": "div.hl-tags a",
 "cover": "img@img"
};
