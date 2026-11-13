var BASE_URL = "https://m.bqgsn.cc";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/"
 },
 "search": "/s?q={q}",
 "ch_list": "div.book_last a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "item": "ul.lis > li",
 "link": "span.s2 a@href",
 "title": "span.s2 a",
 "desc": "span.s3"
};
