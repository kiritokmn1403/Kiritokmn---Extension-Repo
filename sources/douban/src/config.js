var BASE_URL = "https://read.douban.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/"
 },
 "search": "/search?q={q}",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]",
 "item": "li.works",
 "link": "a.read-btn@href",
 "title": "h2.title",
 "desc": ".abstract"
};
