load('config.js');
load('lib_common.js');
load('lib_generic.js');
// 0.0.4: HalimMovies "dox_ajax_player" — the episode page loads its player from /player/player.php by AJAX
function execute(url) {
  var doc = C.html(url);
  var a = doc.select('.halim-episode.active a[data-post-id]').first() || doc.select('a[data-post-id][data-ep]').first();
  if (!a) return X.servers(url);
  var q = function (type) { return BASE_URL + '/player/player.php?action=dox_ajax_player&post_id=' + a.attr('data-post-id') + '&chapter_st=' + a.attr('data-ep') + '&type=' + (type || '') + '&sv=' + (a.attr('data-sv') || '1'); };
  var types = doc.select('#halim-ajax-list-server .get-eps[data-type]'), out = [];
  for (var i = 0; i < types.size(); i++) out.push({ title: types.get(i).text() || ('Server ' + (i + 1)), data: q(types.get(i).attr('data-type')) });
  if (!out.length) out.push({ title: 'Server', data: q('') });
  return Response.success(out);
}
