load('config.js');
function execute(key, page) {
  var j = api("/search?q=" + encodeURIComponent(key || ""));
  var list = (j.items || []).map(function (x) { return story(x.story || x); });
  return Response.success(list, null);
}
