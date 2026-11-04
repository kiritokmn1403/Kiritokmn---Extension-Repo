var BASE_URL = "https://uukanshu.cc";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "排行": "/top/allvisit_{p}.html",
  "玄幻": "/class_1_{p}.html",
  "修真": "/class_2_{p}.html",
  "都市": "/class_3_{p}.html",
  "全本": "/quanben/",
  "首頁": "/"
 },
 "search": "/search/{q}/{p}.html",
 "ch_list": "#list-chapterAll dd a, .chapterlist a",
 "item": "div.item, div.bookinfo",
 "title": "dt a || .bookname a",
 "link": "dt a@href || .bookname a@href",
 "cover": "img@img",
 "desc": "dd || .update",
 "pageSize": 10,
 "d_title": "h1",
 "d_cover": "meta[property=og:image]@content",
 "d_author": "meta[property=og:novel:author]@content",
 "d_desc": "meta[property=og:description]@content",
 "content": ".readcotent",
 "c_title": "h1"
};
