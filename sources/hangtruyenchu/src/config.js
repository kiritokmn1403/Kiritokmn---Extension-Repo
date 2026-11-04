var BASE_URL = "https://hangtruyenchu.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/danh-sach?keyword={q}[&page={p}]",
 "item": ".col-lg-4",
 "title": "[class*=title] a || a@title || img@alt",
 "link": "a@href",
 "ch_list": "div.container a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content"
};
