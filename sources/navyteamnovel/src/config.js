var BASE_URL = "https://navyteams.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Tiểu thuyết": "/danh-sach-truyen/tieu-thuyet[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "item": "div.comic-item",
 "title": "h3 || .comic-title || img@alt",
 "link": "a@href",
 "ch_list": "div.bodyL a",
 "d_title": "h2",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "content": ".reader-content",
 "search_json": {
  "url": "/api/search-story?keyword={q}",
  "title": "title",
  "link": "/truyen/{slug}",
  "cover": "cover"
 }
};
