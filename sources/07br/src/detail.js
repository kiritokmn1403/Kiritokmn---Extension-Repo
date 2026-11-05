load('config.js');
function execute(url) {
  var id = bookId(url), b = api("/api/book?id=" + id);
  var done = /完/.test(b.full || "");
  return Response.success({
    name: b.title, cover: cover(id), author: String(b.author || "").trim(),
    description: String(b.intro || "").trim().replace(/\n/g, "<br>"),
    detail: (b.sortname ? "分类: " + b.sortname + "<br>" : "") + "状态: " + (b.full || "") + (b.lastchapter ? "<br>最新: " + b.lastchapter : ""),
    ongoing: !done, genres: [], host: BASE_URL
  });
}
