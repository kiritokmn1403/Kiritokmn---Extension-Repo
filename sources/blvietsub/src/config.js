var BASE_URL = "https://www.blvietsub.vip";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/search?q={q}",
 "ch_list": "ul.sub-menu a",
 "item": "div.row-flex > article.phimitem",
 "link": "a@href",
 "title": "h3",
 "cover": "img@img",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content"
};
