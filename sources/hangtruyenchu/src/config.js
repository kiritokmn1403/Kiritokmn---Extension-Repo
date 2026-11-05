var BASE_URL = "https://hangtruyenchu.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/danh-sach[?page={p}]"
 },
 "search": "/danh-sach?keyword={q}[&page={p}]",
 "item": "div.story-item",
 "title": "img@alt || a.story-title",
 "link": "a@href",
 "ch_list": "a.chapter-item-link",
 "d_title": "meta[property=og:title]@content || title",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "cover": "img@img",
 "content": "div.chapter-content"
};
