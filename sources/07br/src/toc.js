load('config.js');
function execute(url) {
  var id = bookId(url), j = api("/api/booklist?id=" + id);
  return Response.success((j.list || []).map(function (name, i) {
    return { name: name, url: BASE_URL + "/#/book/" + id + "/" + (i + 1) + ".html", host: BASE_URL };
  }));
}
