load('config.js');
function execute(key) {
  var j = api("/api/search?q=" + encodeURIComponent(key || ""));
  return Response.success((j.data || []).map(book), null);
}
