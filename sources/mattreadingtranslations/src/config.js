var BASE_URL = "https://mattreadingtranslations.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Novels": "/novels/"
 },
 "search": "/novels/",
 "ch_list": "#toc-container td a, .chapter-table td a",
 "item": ".entry-content a[href]",
 "title": ":self",
 "link": ":self@href",
 "cover": "img@img",
 "pageSize": 999,
 "d_title": "h1",
 "d_cover": ".entry-content img@img || meta[property=og:image]@content",
 "d_desc": ".entry-content p || meta[name=description]@content",
 "ch_next": ".pagination a.current + a",
 "ch_maxPages": 80,
 "content": ".entry-content",
 "c_title": "h1",
 "ch_delay": 500
};
