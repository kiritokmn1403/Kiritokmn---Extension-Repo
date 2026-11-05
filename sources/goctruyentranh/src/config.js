var BASE_URL = "https://goctruyentranhvui41.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "item": "div.card.ele-2 > a.card-block.card-flat",
 "title": "img@alt",
 "link": ":self@href",
 "d_title": "meta[property=og:title]@content || title",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "ch_list": "div.col-md-6.col-lg-4 a",
 "cover": "img@img",
 "pages": "a.logo img"
};
