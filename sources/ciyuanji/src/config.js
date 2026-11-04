var BASE_URL = "https://www.ciyuanji.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "书库": "/l_c_0_0_0_0_{p}.html",
  "轻小说": "/l_c_101_0_0_0_{p}.html",
  "同人": "/l_c_115_0_0_0_{p}.html",
  "玄幻": "/l_c_102_0_0_0_{p}.html",
  "都市": "/l_c_106_0_0_0_{p}.html",
  "仙侠": "/l_c_105_0_0_0_{p}.html"
 },
 "search": "/search/{q}_{p}.html",
 "ch_list": "a[class*=book_detail_item]",
 "item": "section[class*=book_card]",
 "title": "img@alt",
 "link": "a@href",
 "cover": "img@img",
 "pageSize": 10,
 "d_title": "[class*=book_detail_title] || [class*=book_detail] img@alt",
 "d_cover": "[class*=book_detail] img@img",
 "d_desc": "meta[name=description]@content",
 "content": "[class*=chapter_article]",
 "c_title": "h1"
};
