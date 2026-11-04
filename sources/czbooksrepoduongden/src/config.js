var BASE_URL = "https://czbooks.net";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "玄幻": "/c/xuanhuan[/{p}]",
  "言情": "/c/yanqing[/{p}]",
  "仙俠": "/c/xianxia[/{p}]",
  "歷史": "/c/lishi[/{p}]",
  "科幻": "/c/wangyou[/{p}]",
  "靈異": "/c/lingyi[/{p}]"
 },
 "search": "/s/{q}[/{p}]",
 "ch_list": "ul.chapter-list li a",
 "item": ".novel-item",
 "title": ".novel-item-title",
 "link": "a[href*='/n/']@href",
 "cover": "img@img",
 "desc": ".novel-item-author",
 "pageSize": 20,
 "d_title": "h1.title",
 "d_cover": ".novel-detail .thumbnail img@img",
 "d_author": ".novel-detail .author a",
 "d_desc": ".description",
 "d_status": ".thumbnail-state",
 "content": ".content",
 "c_title": "h1.name || h1"
};
