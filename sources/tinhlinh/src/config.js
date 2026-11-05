var BASE_URL = "https://tinhlinh.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "item": "div.media.m-b-30 > div.media-left.m-r-15",
 "title": "a@title",
 "link": "a@href",
 "ch_list": "div.chapters a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "cover": "img@img",
 "content": "article"
};
