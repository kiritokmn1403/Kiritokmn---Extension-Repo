load('config.js');
load('lib_shortvideo.js');
function execute(key, page) {
  key = String(key || '').trim();
  var m = /tiktok\.com\/@([\w.-]+)\/?(?:\?|$)/.exec(key) || /^@([\w.-]+)$/.exec(key);
  if (m) return SV.ttList('user:' + m[1], page);
  if (SV.videoId(key) || /vm\.tiktok\.com|vt\.tiktok\.com/.test(key)) return Response.success([{ name: 'Video TikTok', link: key, cover: '', description: key, host: BASE_URL }], '');
  var n = SV.page(page);
  if (SV.server()) {
    var j = SV.dtk('tiktok/search/posts', { keyword: key, cursor: n > 1 ? page : '', count: 20 });
    return Response.success(SV.dtkItems(j).map(SV.dtkItem), SV.dtkNext(j));
  }
  var d = SV.tw('/api/feed/search', { keywords: key, count: 20, cursor: (n - 1) * 20, HD: 1 }, true);
  return Response.success((d.videos || []).map(SV.twItem), d.hasMore ? String(n + 1) : '');
}
