var BASE_URL = "https://phimnhua.online";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[page/{p}/]"
 },
 "search": "/?s={q}[&page={p}]",
 "item": "div.row--grid > div.col-6.col-sm-4",
 "title": "h3 a",
 "link": "h3 a@href",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "ch_list": "button[data-url]",
 "cover": "img@img",
 "ch_attr": "data-url",
 "ch_fallback_single": true
};
