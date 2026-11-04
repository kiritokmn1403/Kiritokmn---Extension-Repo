var BASE_URL = "https://www.101minc.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/modules/article/search.php?searchkey={q}[&page={p}]",
 "item": ".rank_right",
 "title": "a@title || img@alt || a@title || img@alt",
 "link": "a@href",
 "ch_list": "div.newbox a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content"
};
