var BASE_URL = "https://www.fanmtl.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "item": ".novel-item",
 "title": "h4 || a@title || img@alt",
 "link": "a@href",
 "ch_list": "#chpagedlist a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "ch_reverse": true,
 "content": ".chapter-content, #chapter-content, .content"
};
