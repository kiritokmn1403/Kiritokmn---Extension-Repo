var BASE_URL = "https://hhpanda.st";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Phim mới": "/[page/{p}/]",
  "Phim bộ": "/phim-bo/[page/{p}/]",
  "Phim lẻ": "/phim-le/[page/{p}/]"
 },
 "search": "/[page/{p}/]?s={q}",
 "item": "div.halim-item",
 "link": "a@href",
 "title": "h2.entry-title || .entry-title || a@title",
 "cover": "img@img",
 "desc": ".episode || .status",
 "next": ".pagination a.next, a.next.page-numbers, .page-numbers.next",
 "d_title": "h1.entry-title || .movie-title || h1",
 "d_cover": ".movie-thumb img@img || meta[property=og:image]@content",
 "d_desc": ".entry-content@html || .film-content@html || meta[name=description]@content",
 "d_genres": ".post-category a, .halim-movie-genres a",
 "d_status": ".halim-movie-status || .status",
 "ch_list": ".halim-list-eps a, ul.halim-list-eps li a, .list-episode a, .halim-server a",
 "ch_url": "a.watch-movie@href || a.btn-see@href || a[href*=xem-phim]@href",
 "genre": ".dropdown-menu a[href*=the-loai]"
};
