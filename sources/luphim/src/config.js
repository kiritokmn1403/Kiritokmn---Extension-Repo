var BASE_URL = "https://luphim.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/search?k={q}[&page={p}]",
 "item": ".swiper-slide",
 "title": "[class*=title] a || a@title || img@alt",
 "link": "a@href",
 "ch_list": "#tabpane-suggestion a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content"
};
