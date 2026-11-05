load('config.js');
function execute(input) {
  var sort = input || "index", j;
  if (sort === "index") {
    j = api("/api/index?sort=index");
    var seen = {}, list = [];
    Object.keys(j).forEach(function (k) {
      (Array.isArray(j[k]) ? j[k] : []).forEach(function (b) { if (b && b.id && !seen[b.id]) { seen[b.id] = 1; list.push(book(b)); } });
    });
    return Response.success(list, null);
  }
  j = api("/api/sort?sort=" + encodeURIComponent(sort));
  return Response.success((j.data || []).map(book), null);
}
