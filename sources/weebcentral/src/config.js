var BASE_URL = "https://weebcentral.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/"
 },
 "search": "/search/data?text={q}&sort=Best+Match&order=Descending&official=Any&anime=Any&adult=Any&display_mode=Full+Display",
 "item": "article[data-tip]",
 "title": ":self@data-tip",
 "link": "a[href*='/series/']@href",
 "d_title": "h1",
 "d_cover": "meta[property=og:image]@content",
 "d_desc": "meta[name=description]@content",
 "ch_list": "a[href*='/chapters/']",
 "cover": "img@img",
 "next": "a.__none__",
 "s_item": "article.bg-base-300.flex",
 "s_link": "a[href*='/series/']@href",
 "s_title": "div.truncate.text-white",
 "s_cover": "img@img",
 "d_author": "li:has(strong:contains(Author)) a",
 "d_genres": "li:has(strong:contains(Tags)) a",
 "ch_rewrite": [
  "(/series/[^/?#]+).*$",
  "$1/full-chapter-list"
 ],
 "ch_reverse": true,
 "pages_suffix": "/images?is_prev=False&current_page=1&reading_style=long_strip",
 "pages": "#chapter-images img[src^=http]",
 "ch_name": "span.grow > span:first-child"
};
