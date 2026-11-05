load('config.js');
function execute(url) {
  var id = storyId(url), base = String(url).replace(/[?#].*$/, "").replace(/\/chuong\/\d+$/, "").replace(/\/+$/, "");
  var list = [], p = 0, pages = 1;
  do {
    var j = api("/story/" + id + "/chapter?size=500&page=" + p);
    pages = (j.metaData && j.metaData.totalPage) || 1;
    (j.data || []).forEach(function (c) {
      var locked = c.lock || (c.price && c.price > 0);
      list.push({ n: c.chapter, name: "Chương " + c.chapter + (c.chapterTitle ? ": " + c.chapterTitle : "") + (locked ? " 🔒" : ""), url: base + "/chuong/" + c.chapter, host: BASE_URL });
    });
    p++;
  } while (p < pages && p < 40);
  list.sort(function (a, b) { return a.n - b.n; });
  return Response.success(list.map(function (c) { return { name: c.name, url: c.url, host: c.host }; }));
}
