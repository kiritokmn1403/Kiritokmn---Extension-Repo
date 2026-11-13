load('config.js');
load('lib_shortvideo.js');
function execute(url) {
  if (SV.videoId(url) || /v\.douyin\.com\//.test(url)) {
    if (!SV.server()) return Response.success({ name: 'Video Douyin ' + SV.videoId(url), cover: '', author: '', description: 'Cần đặt máy chủ Douyin_TikTok_Download_API trong cài đặt nguồn để xem trong ứng dụng; không có máy chủ thì video mở bằng WebView.', detail: '', ongoing: false, genres: [], host: BASE_URL });
    var c = SV.dtk('douyin/video', { url: url }).data;
    return Response.success({ name: SV.title(c.title || c.description, c.content_id), cover: SV.dtkCover(c), author: c.author ? c.author.nickname : '', description: c.description || '', detail: c.stats ? '▶ ' + (c.stats.play_count || 0) + ' · ♥ ' + (c.stats.digg_count || 0) : '', ongoing: false, genres: c.author && c.author.sec_uid ? [{ title: '@' + c.author.nickname, input: 'user:' + c.author.sec_uid, script: 'genre.js' }] : [], host: BASE_URL });
  }
  var word = decodeURIComponent((/\/(?:hot|search|hashtag)\/([^/?#]+)/.exec(url) || [, ''])[1]);
  return Response.success({ name: word || 'Douyin', cover: '', author: '抖音', description: /\/hashtag\//.test(url) ? 'Video theo hashtag' : 'Chủ đề đang tìm kiếm nhiều trên Douyin', detail: '', ongoing: true, genres: [], host: BASE_URL });
}
