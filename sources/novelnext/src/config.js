var BASE_URL = "https://novelnext.me";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/search?keyword={q}[&page={p}]",
 "item": ".item",
 "title": "h3 || a@title || img@alt",
 "link": "a@href",
 "ch_list": "ul.list-chapter li a, .list-chapter a",
 "d_title": "h3.title || h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "ch_from": {
  "re": "data-novel-id=\"([^\"]+)\"",
  "url": "/ajax/chapter-archive?novelId=$1"
 },
 "content": "#chr-content, #chapter-content"
};
