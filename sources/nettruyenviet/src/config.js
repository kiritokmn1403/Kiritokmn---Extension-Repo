var BASE_URL = "https://nettruyenviet10.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/tim-truyen?page={p}",
  "Top ngày": "/tim-truyen?status=-1&sort=13&page={p}",
  "Truyện mới": "/tim-truyen?status=-1&sort=15&page={p}",
  "Hoàn thành": "/tim-truyen?status=2&page={p}"
 },
 "search": "/tim-truyen?keyword={q}",
 "item": "div.items div.item",
 "link": "figcaption h3 a@href || a@href",
 "title": "figcaption h3 a || h3",
 "cover": "img@img",
 "desc": "li.chapter a",
 "next": ".pagination a[rel=next], .pagination li.active + li a, a.next-page",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_author": "li.author .col-xs-8 || li.author p:last-child",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "d_genres": "li.kind a, .kind a",
 "d_status": "li.status .col-xs-8 || li.status p:last-child",
 "ch_list": "#chapter_list a",
 "ch_reverse": true,
 "pages": "div.page-chapter img",
 "genre": ".dropdown-menu .megamenu a, ul.nav li.dropdown .megamenu a",
 "s_item": "div.item > figure > div.image",
 "s_title": "a@title",
 "s_link": "a@href",
 "s_cover": "img@img"
};
