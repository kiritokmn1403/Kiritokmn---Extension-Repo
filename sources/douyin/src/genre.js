load('config.js');
load('lib_shortvideo.js');
// Boards are topics; a topic's "episodes" are its videos (hashtag boards) or the topic page itself.
// input: board name | "user:<sec_uid or profile url>" | "tag:<hashtag_id>"
function execute(input, page) {
  input = String(input || 'hot');
  if (input.indexOf('user:') === 0) {
    var j = SV.dtk('douyin/user/posts', { url: input.slice(5).indexOf('http') === 0 ? input.slice(5) : 'https://www.douyin.com/user/' + input.slice(5), cursor: page && page !== '1' ? page : '', count: 20 });
    return Response.success(SV.dtkItems(j).map(SV.dtkItem), SV.dtkNext(j));
  }
  if (page && page !== '1') return Response.success([], '');
  var words = [];
  if (SV.server()) {
    var d = SV.dtk('douyin/trending', { board: input }).data;
    (d && d.items ? d.items : d || []).forEach(function (w) {
      var name = w.word || w.name || w.title || w.keyword || '';
      if (!name) return;
      var id = w.hashtag_id || w.challenge_id || w.id || '';
      words.push({ name: name, link: input === 'challenge' && id ? BASE_URL + '/hashtag/' + id : BASE_URL + '/hot/' + encodeURIComponent(name), cover: w.cover && w.cover.url ? w.cover.url : '', description: w.hot_value ? '🔥 ' + w.hot_value : '', host: BASE_URL });
    });
  } else {
    var r = fetch('https://www.iesdouyin.com/web/api/v2/hotsearch/billboard/word/', { headers: { 'Accept': 'application/json', 'Referer': 'https://www.douyin.com/' } });
    var o = r.json();
    (o.word_list || []).forEach(function (w) { words.push({ name: w.word, link: BASE_URL + '/hot/' + encodeURIComponent(w.word), cover: '', description: '🔥 ' + (w.hot_value || ''), host: BASE_URL }); });
  }
  return Response.success(words, '');
}
