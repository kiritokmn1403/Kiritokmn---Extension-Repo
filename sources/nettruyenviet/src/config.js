var BASE_URL = "https://nettruyenviet10.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/?page={p}",
  "Top ngày": "/tim-truyen?status=-1&sort=13&page={p}",
  "Truyện mới": "/tim-truyen?status=-1&sort=15&page={p}",
  "Hoàn thành": "/tim-truyen?status=2&page={p}"
 },
 "search": "/tim-truyen?keyword={q}&page={p}",
 "item": ".items .item, .ModuleContent .items .item",
 "link": "figcaption h3 a@href || .image a@href || a@href",
 "title": "figcaption h3 a || h3 a || a@title",
 "cover": "img@img",
 "desc": ".comic-item li.chapter a || .chapter a",
 "next": ".pagination a[rel=next], .pagination li.active + li a, a.next-page",
 "d_title": "h1.title-detail || h1",
 "d_cover": ".col-image img@img || meta[property=og:image]@content",
 "d_author": "li.author .col-xs-8 || li.author p:last-child",
 "d_desc": ".detail-content p@html || .detail-content@html || meta[name=description]@content",
 "d_genres": "li.kind a, .kind a",
 "d_status": "li.status .col-xs-8 || li.status p:last-child",
 "ch_list": "#nt_listchapter li .chapter a, .list-chapter li .chapter a, .list-chapter li a",
 "ch_reverse": true,
 "pages": ".page-chapter img, .reading-detail img",
 "genre": ".dropdown-menu .megamenu a, ul.nav li.dropdown .megamenu a"
};
