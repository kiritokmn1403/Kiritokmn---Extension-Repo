var BASE_URL = "https://truyenc.net";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "a[href*=\"/chuong-\"]",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "item": "div.min-w-0 > a.text-sm.font-semibold",
 "link": ":self@href",
 "title": ":self@title",
 "content": "article.reader-content.prose",
 "ch_reverse": true
};
