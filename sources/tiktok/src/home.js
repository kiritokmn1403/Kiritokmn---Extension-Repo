load('config.js');
load('lib_shortvideo.js');
function execute() {
  var tabs = [{ title: 'Đề xuất (' + SV.region() + ')', input: 'feed', script: 'genre.js' }];
  ['xuhuong', 'funny', 'cat', 'music', 'dance', 'food'].forEach(function (t) { tabs.push({ title: '#' + t, input: 'tag:' + t, script: 'genre.js' }); });
  return Response.success(tabs);
}
