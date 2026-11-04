var BASE_URL = "https://uukanshu.cc";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "首頁": "/"
 },
 "search": "/search?searchtype=all&searchkey={q}",
 "ch_list": "#list-chapterAll dd a, .chapterlist a",
 "item": "div.item",
 "title": "dt a",
 "link": "dt a@href",
 "cover": "img@img",
 "desc": "dd",
 "pageSize": 999,
 "d_title": "h1",
 "d_cover": "meta[property=og:image]@content",
 "d_author": "meta[property=og:novel:author]@content",
 "d_desc": "meta[property=og:description]@content",
 "content": ".readcotent",
 "c_title": "h1"
};
