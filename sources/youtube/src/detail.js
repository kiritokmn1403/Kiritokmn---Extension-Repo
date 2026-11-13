load('config.js');
load('yt.js');
function execute(url) {
  var id = YT.id(url), p = YT.player(id), v = p.videoDetails || {};
  var thumbs = (v.thumbnail && v.thumbnail.thumbnails) || [];
  var len = parseInt(v.lengthSeconds || '0', 10);
  return Response.success({ name: v.title || id, cover: thumbs.length ? thumbs[thumbs.length - 1].url : 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg', author: v.author || '', description: v.shortDescription || '', detail: (len ? Math.floor(len / 60) + ':' + ('0' + (len % 60)).slice(-2) + ' · ' : '') + (v.viewCount ? v.viewCount + ' lượt xem' : ''), ongoing: !!v.isLive, genres: (v.keywords || []).slice(0, 8).map(function (k) { return { title: k, input: 'video:' + k, script: 'genre.js' }; }), host: BASE_URL });
}
