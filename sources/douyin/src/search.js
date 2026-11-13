load('config.js');
load('lib_shortvideo.js');
// Douyin refuses keyword search to guests (status 2483), so search accepts links:
// a video link -> that video; a profile link -> the author's videos; text -> the topic page.
function execute(key, page) {
  key = String(key || '').trim();
  var m = /douyin\.com\/user\/([\w-]+)/.exec(key);
  if (m && SV.server()) { var j = SV.dtk('douyin/user/posts', { url: 'https://www.douyin.com/user/' + m[1], cursor: page && page !== '1' ? page : '', count: 20 }); return Response.success(SV.dtkItems(j).map(SV.dtkItem), SV.dtkNext(j)); }
  if (SV.videoId(key) || /v\.douyin\.com\//.test(key)) return Response.success([{ name: 'Video Douyin', link: SV.videoId(key) ? BASE_URL + '/video/' + SV.videoId(key) : key, cover: '', description: key, host: BASE_URL }], '');
  if (page && page !== '1') return Response.success([], '');
  return Response.success([{ name: key, link: BASE_URL + '/hot/' + encodeURIComponent(key), cover: '', description: 'Mở chủ đề trên Douyin', host: BASE_URL }], '');
}
