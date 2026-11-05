var BASE_URL = "https://m.ciyuanji.com";
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
 "ch_list": "div.bookDetails_btns__3z8Fx a",
 "item": "li.index_block__1xPQX > a.MuiTypography-root.MuiLink-root",
 "title": "h3",
 "link": ":self@href",
 "cover": "img@img",
 "pageSize": 10,
 "d_title": "meta[property=og:title]@content || title",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "content": "article.chapter_article__avlFR",
 "c_title": "h1"
};
