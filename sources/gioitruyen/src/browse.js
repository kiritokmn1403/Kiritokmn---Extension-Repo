load('config.js');
function execute(input, page) {
  var p = parseInt(page || "1", 10) || 1;
  var j = api("/stories/browse?page=" + p + "&size=20&sort=" + (input || "latest"));
  var list = (j.items || []).map(story);
  return Response.success(list, p < (j.totalPages || 0) ? String(p + 1) : null);
}
