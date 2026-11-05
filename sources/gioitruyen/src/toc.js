load('config.js');
function execute(url) {
  var slug = slugOf(url), list = [], p = 1, pages = 1;
  do {
    var j = api("/stories/" + slug + "/chapters?page=" + p + "&size=100");
    pages = j.totalPages || 1;
    (j.items || []).forEach(function (c) {
      var locked = c.accessType && c.accessType !== "FREE" && !c.unlocked;
      list.push({ name: (c.title || ("Chương " + c.number)) + (locked ? " 🔒" : ""), url: BASE_URL + "/truyen/" + slug + "/chuong-" + c.number, host: BASE_URL });
    });
    p++;
  } while (p <= pages && p <= 100);
  return Response.success(list);
}
