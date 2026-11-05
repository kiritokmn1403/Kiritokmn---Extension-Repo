var BASE_URL = "https://navyteams.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "item": ".comic-item",
 "title": "h3 || a@title || img@alt",
 "link": "a@href",
 "ch_list": "div.bodyL a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "content": ".content-type-novel, .chapter-content, #chapter-content",
 "search_json": {
  "url": "/api/search-story?keyword={q}",
  "title": "title",
  "link": "/truyen/{slug}",
  "cover": "cover"
 }
};
