var BASE_URL = "https://novelfull.net";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Latest": "/latest-release-novel[?page={p}]",
  "Hot": "/hot-novel[?page={p}]",
  "Popular": "/most-popular[?page={p}]",
  "Completed": "/completed-novel[?page={p}]"
 },
 "search": "/search?keyword={q}[&page={p}]",
 "item": ".con",
 "title": "h3.tit a",
 "link": "h3.tit a@href",
 "cover": ".pic img@img",
 "next": "a[rel=next]",
 "genre": "a[href*='/genre/']",
 "d_title": "h1.tit || h1",
 "d_cover": "meta[property=og:image]@content",
 "d_author": "a[href*='/author/']",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "d_genres": ".info a[href*='/genre/']",
 "ch_list": "#idData li a",
 "ch_next": "a#nextBtn[rel=next]",
 "ch_maxPages": 150,
 "content": "#chapter-content",
 "c_title": ".chapter-title || h1"
};
