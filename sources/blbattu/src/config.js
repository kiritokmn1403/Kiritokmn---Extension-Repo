var BASE_URL = "https://blbattu.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/truyen/[page/{p}/]"
 },
 "search": "/?s={q}&post_type=manga",
 "item": "div.manga-item-grid",
 "title": "a.uk-link-heading || img@alt",
 "link": "a.uk-link-heading@href || a@href",
 "ch_list": "div.chapter-item a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "cover": "img@img",
 "s_item": "article.uk-grid-small",
 "s_title": "a.uk-link-heading",
 "s_link": "a.uk-link-heading@href",
 "s_cover": "img@img",
 "ch_name": "h3",
 "ch_next": "#chapter-list ul.uk-pagination a[aria-label='Trang sau']",
 "ch_reverse": true,
 "initmanga": true,
 "pages": "#chapter-content img"
};
