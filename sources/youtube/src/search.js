load('config.js');
load('yt.js');
function execute(key, page) {
  var id = YT.id(String(key || ''));
  if (id) return Response.success([{ name: 'YouTube ' + id, link: 'https://www.youtube.com/watch?v=' + id, cover: 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg', description: '', host: BASE_URL }], '');
  return YT.search(key, page, /#shorts/i.test(key) ? 'shorts' : 'video');
}
