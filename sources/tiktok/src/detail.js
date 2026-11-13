load('config.js');
load('lib_shortvideo.js');
function execute(url) {
  var v, c;
  if (SV.server()) {
    c = SV.dtk('tiktok/video', { url: url }).data;
    return Response.success({ name: SV.title(c.title || c.description, c.content_id), cover: SV.dtkCover(c), author: c.author ? c.author.nickname : '', description: c.description || '', detail: c.stats ? '▶ ' + (c.stats.play_count || 0) + ' · ♥ ' + (c.stats.digg_count || 0) : '', ongoing: false, genres: (c.tags || []).map(function (t) { return { title: '#' + t, input: 'tag:' + t, script: 'genre.js' }; }), host: BASE_URL });
  }
  v = SV.tw('/api/', { url: url, hd: 1 });
  var a = v.author || {};
  return Response.success({ name: SV.title(v.title, v.id), cover: SV.twAbs(v.cover || v.origin_cover), author: a.nickname || a.unique_id || '', description: v.title || '', detail: '▶ ' + (v.play_count || 0) + ' · ♥ ' + (v.digg_count || 0) + (v.duration ? ' · ' + v.duration + 's' : ''), ongoing: false, genres: a.unique_id ? [{ title: '@' + a.unique_id, input: 'user:' + a.unique_id, script: 'genre.js' }] : [], host: BASE_URL });
}
