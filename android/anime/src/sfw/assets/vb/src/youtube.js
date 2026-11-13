__register({ META: {"id":"youtube","name":"YouTube","source":"https://www.youtube.com","type":"video","locale":"global","nsfw":false,"version":2,"config":{"DOMAIN":{"title":"Tên miền","subtitle":"Đổi khi trang đổi tên miền","default":"https://www.youtube.com","values":["https://www.youtube.com","https://m.youtube.com"],"mode":"select","format":"single"},"REGION":{"title":"Khu vực (mã quốc gia)","subtitle":"VN, US, JP…","default":"VN","mode":"input","format":"text"}},"configDefaults":{"DOMAIN":"https://www.youtube.com","REGION":"VN"}}, SCRIPTS: {
"home": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN"); var REGION = __cfg("REGION");
return (function () {

var BASE_URL = "https://www.youtube.com";


function execute() {
  var t = [['Shorts', 'shorts:#shorts'], ['Âm nhạc', 'video:nhạc mới nhất'], ['Tin tức', 'video:tin tức hôm nay'], ['Phim hoạt hình', 'video:phim hoạt hình'], ['Game', 'video:gaming'], ['Shorts hài', 'shorts:hài hước']];
  return Response.success(t.map(function (x) { return { title: x[0], input: x[1], script: 'genre.js' }; }));
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"genre": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN"); var REGION = __cfg("REGION");
return (function () {

var BASE_URL = "https://www.youtube.com";



// 0.0.4 YouTube via InnerTube (the API the YouTube apps use). WEB client for search/browse, IOS client for
// playable stream URLs (no signature deciphering needed). Links are canonical watch URLs (stable for resume).
var YT = {
  API: 'https://www.youtube.com/youtubei/v1/',
  gl: function () { var g = ''; try { g = String(REGION || ''); } catch (e) { } return (g.trim() || 'VN').toUpperCase(); },
  post: function (ep, body, client) {
    var ctx = client === 'IOS'
      ? { clientName: 'IOS', clientVersion: '20.10.4', deviceMake: 'Apple', deviceModel: 'iPhone16,2', osName: 'iPhone', osVersion: '18.3.2.22D82', hl: 'vi', gl: YT.gl() }
      : { clientName: 'WEB', clientVersion: '2.20261101.00.00', hl: 'vi', gl: YT.gl() };
    body.context = { client: ctx };
    var h = { 'Content-Type': 'application/json', 'Origin': 'https://www.youtube.com' };
    h['User-Agent'] = client === 'IOS' ? 'com.google.ios.youtube/20.10.4 (iPhone16,2; U; CPU iOS 18_3_2 like Mac OS X;)' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
    var r = fetch(YT.API + ep + '?prettyPrint=false', { method: 'POST', headers: h, body: JSON.stringify(body) });
    if (!r.ok) throw new Error('YouTube API HTTP ' + r.status + ' (' + ep + ')');
    return r.json();
  },
  txt: function (o) { if (!o) return ''; if (o.simpleText) return o.simpleText; if (o.runs) return o.runs.map(function (x) { return x.text; }).join(''); if (o.content) return o.content; return ''; },
  // walk the response tree and collect videos (videoRenderer / reelItemRenderer / shortsLockupViewModel) + continuation token
  collect: function (root) {
    var out = [], seen = {}, cont = '';
    var add = function (id, title, thumb, sub) { if (!id || seen[id]) return; seen[id] = 1; out.push({ name: title || ('Video ' + id), link: 'https://www.youtube.com/watch?v=' + id, cover: thumb || 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg', description: sub || '', host: BASE_URL }); };
    var walk = function (o, d) {
      if (!o || typeof o !== 'object' || d > 40) return;
      if (o.videoRenderer && o.videoRenderer.videoId) { var v = o.videoRenderer; add(v.videoId, YT.txt(v.title), '', [YT.txt(v.ownerText), YT.txt(v.lengthText), YT.txt(v.viewCountText)].filter(function (x) { return x; }).join(' · ')); return; }
      if (o.reelItemRenderer && o.reelItemRenderer.videoId) { var s = o.reelItemRenderer; add(s.videoId, YT.txt(s.headline), '', 'Shorts · ' + YT.txt(s.viewCountText)); return; }
      if (o.shortsLockupViewModel) { var m = o.shortsLockupViewModel, id = ''; try { id = m.onTap.innertubeCommand.reelWatchEndpoint.videoId; } catch (e) { } add(id, m.overlayMetadata && m.overlayMetadata.primaryText ? m.overlayMetadata.primaryText.content : '', '', 'Shorts'); return; }
      if (o.continuationCommand && o.continuationCommand.token && !cont) cont = o.continuationCommand.token;
      if (o.length !== undefined) { for (var i = 0; i < o.length; i++) walk(o[i], d + 1); return; }
      for (var k in o) if (o.hasOwnProperty(k)) walk(o[k], d + 1);
    };
    walk(root, 0);
    return { items: out, next: cont };
  },
  // search; filter "video" | "shorts"; page = 1 or a continuation token
  search: function (q, page, filter) {
    var params = filter === 'shorts' ? 'EgIQCQ%3D%3D' : 'EgIQAQ%3D%3D';
    var body = page && page !== '1' ? { continuation: page } : { query: q, params: decodeURIComponent(params) };
    var res = YT.collect(YT.post('search', body));
    return Response.success(res.items, res.next);
  },
  id: function (url) { var m = /[?&]v=([\w-]{11})/.exec(url) || /(?:shorts|embed|live|youtu\.be)\/([\w-]{11})/.exec(url); return m ? m[1] : ''; },
  player: function (id) {
    var p = YT.post('player', { videoId: id, contentCheckOk: true, racyCheckOk: true }, 'IOS');
    var st = p.playabilityStatus || {};
    if (st.status && st.status !== 'OK') throw new Error('YouTube: ' + (st.reason || st.status));
    return p;
  }
};


function execute(input, page) { var i = String(input || 'video:'), k = i.indexOf(':'); return YT.search(i.slice(k + 1), page, i.slice(0, k)); }

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"search": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN"); var REGION = __cfg("REGION");
return (function () {

var BASE_URL = "https://www.youtube.com";



// 0.0.4 YouTube via InnerTube (the API the YouTube apps use). WEB client for search/browse, IOS client for
// playable stream URLs (no signature deciphering needed). Links are canonical watch URLs (stable for resume).
var YT = {
  API: 'https://www.youtube.com/youtubei/v1/',
  gl: function () { var g = ''; try { g = String(REGION || ''); } catch (e) { } return (g.trim() || 'VN').toUpperCase(); },
  post: function (ep, body, client) {
    var ctx = client === 'IOS'
      ? { clientName: 'IOS', clientVersion: '20.10.4', deviceMake: 'Apple', deviceModel: 'iPhone16,2', osName: 'iPhone', osVersion: '18.3.2.22D82', hl: 'vi', gl: YT.gl() }
      : { clientName: 'WEB', clientVersion: '2.20261101.00.00', hl: 'vi', gl: YT.gl() };
    body.context = { client: ctx };
    var h = { 'Content-Type': 'application/json', 'Origin': 'https://www.youtube.com' };
    h['User-Agent'] = client === 'IOS' ? 'com.google.ios.youtube/20.10.4 (iPhone16,2; U; CPU iOS 18_3_2 like Mac OS X;)' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
    var r = fetch(YT.API + ep + '?prettyPrint=false', { method: 'POST', headers: h, body: JSON.stringify(body) });
    if (!r.ok) throw new Error('YouTube API HTTP ' + r.status + ' (' + ep + ')');
    return r.json();
  },
  txt: function (o) { if (!o) return ''; if (o.simpleText) return o.simpleText; if (o.runs) return o.runs.map(function (x) { return x.text; }).join(''); if (o.content) return o.content; return ''; },
  // walk the response tree and collect videos (videoRenderer / reelItemRenderer / shortsLockupViewModel) + continuation token
  collect: function (root) {
    var out = [], seen = {}, cont = '';
    var add = function (id, title, thumb, sub) { if (!id || seen[id]) return; seen[id] = 1; out.push({ name: title || ('Video ' + id), link: 'https://www.youtube.com/watch?v=' + id, cover: thumb || 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg', description: sub || '', host: BASE_URL }); };
    var walk = function (o, d) {
      if (!o || typeof o !== 'object' || d > 40) return;
      if (o.videoRenderer && o.videoRenderer.videoId) { var v = o.videoRenderer; add(v.videoId, YT.txt(v.title), '', [YT.txt(v.ownerText), YT.txt(v.lengthText), YT.txt(v.viewCountText)].filter(function (x) { return x; }).join(' · ')); return; }
      if (o.reelItemRenderer && o.reelItemRenderer.videoId) { var s = o.reelItemRenderer; add(s.videoId, YT.txt(s.headline), '', 'Shorts · ' + YT.txt(s.viewCountText)); return; }
      if (o.shortsLockupViewModel) { var m = o.shortsLockupViewModel, id = ''; try { id = m.onTap.innertubeCommand.reelWatchEndpoint.videoId; } catch (e) { } add(id, m.overlayMetadata && m.overlayMetadata.primaryText ? m.overlayMetadata.primaryText.content : '', '', 'Shorts'); return; }
      if (o.continuationCommand && o.continuationCommand.token && !cont) cont = o.continuationCommand.token;
      if (o.length !== undefined) { for (var i = 0; i < o.length; i++) walk(o[i], d + 1); return; }
      for (var k in o) if (o.hasOwnProperty(k)) walk(o[k], d + 1);
    };
    walk(root, 0);
    return { items: out, next: cont };
  },
  // search; filter "video" | "shorts"; page = 1 or a continuation token
  search: function (q, page, filter) {
    var params = filter === 'shorts' ? 'EgIQCQ%3D%3D' : 'EgIQAQ%3D%3D';
    var body = page && page !== '1' ? { continuation: page } : { query: q, params: decodeURIComponent(params) };
    var res = YT.collect(YT.post('search', body));
    return Response.success(res.items, res.next);
  },
  id: function (url) { var m = /[?&]v=([\w-]{11})/.exec(url) || /(?:shorts|embed|live|youtu\.be)\/([\w-]{11})/.exec(url); return m ? m[1] : ''; },
  player: function (id) {
    var p = YT.post('player', { videoId: id, contentCheckOk: true, racyCheckOk: true }, 'IOS');
    var st = p.playabilityStatus || {};
    if (st.status && st.status !== 'OK') throw new Error('YouTube: ' + (st.reason || st.status));
    return p;
  }
};


function execute(key, page) {
  var id = YT.id(String(key || ''));
  if (id) return Response.success([{ name: 'YouTube ' + id, link: 'https://www.youtube.com/watch?v=' + id, cover: 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg', description: '', host: BASE_URL }], '');
  return YT.search(key, page, /#shorts/i.test(key) ? 'shorts' : 'video');
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"detail": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN"); var REGION = __cfg("REGION");
return (function () {

var BASE_URL = "https://www.youtube.com";



// 0.0.4 YouTube via InnerTube (the API the YouTube apps use). WEB client for search/browse, IOS client for
// playable stream URLs (no signature deciphering needed). Links are canonical watch URLs (stable for resume).
var YT = {
  API: 'https://www.youtube.com/youtubei/v1/',
  gl: function () { var g = ''; try { g = String(REGION || ''); } catch (e) { } return (g.trim() || 'VN').toUpperCase(); },
  post: function (ep, body, client) {
    var ctx = client === 'IOS'
      ? { clientName: 'IOS', clientVersion: '20.10.4', deviceMake: 'Apple', deviceModel: 'iPhone16,2', osName: 'iPhone', osVersion: '18.3.2.22D82', hl: 'vi', gl: YT.gl() }
      : { clientName: 'WEB', clientVersion: '2.20261101.00.00', hl: 'vi', gl: YT.gl() };
    body.context = { client: ctx };
    var h = { 'Content-Type': 'application/json', 'Origin': 'https://www.youtube.com' };
    h['User-Agent'] = client === 'IOS' ? 'com.google.ios.youtube/20.10.4 (iPhone16,2; U; CPU iOS 18_3_2 like Mac OS X;)' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
    var r = fetch(YT.API + ep + '?prettyPrint=false', { method: 'POST', headers: h, body: JSON.stringify(body) });
    if (!r.ok) throw new Error('YouTube API HTTP ' + r.status + ' (' + ep + ')');
    return r.json();
  },
  txt: function (o) { if (!o) return ''; if (o.simpleText) return o.simpleText; if (o.runs) return o.runs.map(function (x) { return x.text; }).join(''); if (o.content) return o.content; return ''; },
  // walk the response tree and collect videos (videoRenderer / reelItemRenderer / shortsLockupViewModel) + continuation token
  collect: function (root) {
    var out = [], seen = {}, cont = '';
    var add = function (id, title, thumb, sub) { if (!id || seen[id]) return; seen[id] = 1; out.push({ name: title || ('Video ' + id), link: 'https://www.youtube.com/watch?v=' + id, cover: thumb || 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg', description: sub || '', host: BASE_URL }); };
    var walk = function (o, d) {
      if (!o || typeof o !== 'object' || d > 40) return;
      if (o.videoRenderer && o.videoRenderer.videoId) { var v = o.videoRenderer; add(v.videoId, YT.txt(v.title), '', [YT.txt(v.ownerText), YT.txt(v.lengthText), YT.txt(v.viewCountText)].filter(function (x) { return x; }).join(' · ')); return; }
      if (o.reelItemRenderer && o.reelItemRenderer.videoId) { var s = o.reelItemRenderer; add(s.videoId, YT.txt(s.headline), '', 'Shorts · ' + YT.txt(s.viewCountText)); return; }
      if (o.shortsLockupViewModel) { var m = o.shortsLockupViewModel, id = ''; try { id = m.onTap.innertubeCommand.reelWatchEndpoint.videoId; } catch (e) { } add(id, m.overlayMetadata && m.overlayMetadata.primaryText ? m.overlayMetadata.primaryText.content : '', '', 'Shorts'); return; }
      if (o.continuationCommand && o.continuationCommand.token && !cont) cont = o.continuationCommand.token;
      if (o.length !== undefined) { for (var i = 0; i < o.length; i++) walk(o[i], d + 1); return; }
      for (var k in o) if (o.hasOwnProperty(k)) walk(o[k], d + 1);
    };
    walk(root, 0);
    return { items: out, next: cont };
  },
  // search; filter "video" | "shorts"; page = 1 or a continuation token
  search: function (q, page, filter) {
    var params = filter === 'shorts' ? 'EgIQCQ%3D%3D' : 'EgIQAQ%3D%3D';
    var body = page && page !== '1' ? { continuation: page } : { query: q, params: decodeURIComponent(params) };
    var res = YT.collect(YT.post('search', body));
    return Response.success(res.items, res.next);
  },
  id: function (url) { var m = /[?&]v=([\w-]{11})/.exec(url) || /(?:shorts|embed|live|youtu\.be)\/([\w-]{11})/.exec(url); return m ? m[1] : ''; },
  player: function (id) {
    var p = YT.post('player', { videoId: id, contentCheckOk: true, racyCheckOk: true }, 'IOS');
    var st = p.playabilityStatus || {};
    if (st.status && st.status !== 'OK') throw new Error('YouTube: ' + (st.reason || st.status));
    return p;
  }
};


function execute(url) {
  var id = YT.id(url), p = YT.player(id), v = p.videoDetails || {};
  var thumbs = (v.thumbnail && v.thumbnail.thumbnails) || [];
  var len = parseInt(v.lengthSeconds || '0', 10);
  return Response.success({ name: v.title || id, cover: thumbs.length ? thumbs[thumbs.length - 1].url : 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg', author: v.author || '', description: v.shortDescription || '', detail: (len ? Math.floor(len / 60) + ':' + ('0' + (len % 60)).slice(-2) + ' · ' : '') + (v.viewCount ? v.viewCount + ' lượt xem' : ''), ongoing: !!v.isLive, genres: (v.keywords || []).slice(0, 8).map(function (k) { return { title: k, input: 'video:' + k, script: 'genre.js' }; }), host: BASE_URL });
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"toc": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN"); var REGION = __cfg("REGION");
return (function () {

var BASE_URL = "https://www.youtube.com";


function execute(url) { return Response.success([{ name: 'Xem video', url: url, host: BASE_URL }]); }

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"chap": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN"); var REGION = __cfg("REGION");
return (function () {

var BASE_URL = "https://www.youtube.com";



// 0.0.4 YouTube via InnerTube (the API the YouTube apps use). WEB client for search/browse, IOS client for
// playable stream URLs (no signature deciphering needed). Links are canonical watch URLs (stable for resume).
var YT = {
  API: 'https://www.youtube.com/youtubei/v1/',
  gl: function () { var g = ''; try { g = String(REGION || ''); } catch (e) { } return (g.trim() || 'VN').toUpperCase(); },
  post: function (ep, body, client) {
    var ctx = client === 'IOS'
      ? { clientName: 'IOS', clientVersion: '20.10.4', deviceMake: 'Apple', deviceModel: 'iPhone16,2', osName: 'iPhone', osVersion: '18.3.2.22D82', hl: 'vi', gl: YT.gl() }
      : { clientName: 'WEB', clientVersion: '2.20261101.00.00', hl: 'vi', gl: YT.gl() };
    body.context = { client: ctx };
    var h = { 'Content-Type': 'application/json', 'Origin': 'https://www.youtube.com' };
    h['User-Agent'] = client === 'IOS' ? 'com.google.ios.youtube/20.10.4 (iPhone16,2; U; CPU iOS 18_3_2 like Mac OS X;)' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
    var r = fetch(YT.API + ep + '?prettyPrint=false', { method: 'POST', headers: h, body: JSON.stringify(body) });
    if (!r.ok) throw new Error('YouTube API HTTP ' + r.status + ' (' + ep + ')');
    return r.json();
  },
  txt: function (o) { if (!o) return ''; if (o.simpleText) return o.simpleText; if (o.runs) return o.runs.map(function (x) { return x.text; }).join(''); if (o.content) return o.content; return ''; },
  // walk the response tree and collect videos (videoRenderer / reelItemRenderer / shortsLockupViewModel) + continuation token
  collect: function (root) {
    var out = [], seen = {}, cont = '';
    var add = function (id, title, thumb, sub) { if (!id || seen[id]) return; seen[id] = 1; out.push({ name: title || ('Video ' + id), link: 'https://www.youtube.com/watch?v=' + id, cover: thumb || 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg', description: sub || '', host: BASE_URL }); };
    var walk = function (o, d) {
      if (!o || typeof o !== 'object' || d > 40) return;
      if (o.videoRenderer && o.videoRenderer.videoId) { var v = o.videoRenderer; add(v.videoId, YT.txt(v.title), '', [YT.txt(v.ownerText), YT.txt(v.lengthText), YT.txt(v.viewCountText)].filter(function (x) { return x; }).join(' · ')); return; }
      if (o.reelItemRenderer && o.reelItemRenderer.videoId) { var s = o.reelItemRenderer; add(s.videoId, YT.txt(s.headline), '', 'Shorts · ' + YT.txt(s.viewCountText)); return; }
      if (o.shortsLockupViewModel) { var m = o.shortsLockupViewModel, id = ''; try { id = m.onTap.innertubeCommand.reelWatchEndpoint.videoId; } catch (e) { } add(id, m.overlayMetadata && m.overlayMetadata.primaryText ? m.overlayMetadata.primaryText.content : '', '', 'Shorts'); return; }
      if (o.continuationCommand && o.continuationCommand.token && !cont) cont = o.continuationCommand.token;
      if (o.length !== undefined) { for (var i = 0; i < o.length; i++) walk(o[i], d + 1); return; }
      for (var k in o) if (o.hasOwnProperty(k)) walk(o[k], d + 1);
    };
    walk(root, 0);
    return { items: out, next: cont };
  },
  // search; filter "video" | "shorts"; page = 1 or a continuation token
  search: function (q, page, filter) {
    var params = filter === 'shorts' ? 'EgIQCQ%3D%3D' : 'EgIQAQ%3D%3D';
    var body = page && page !== '1' ? { continuation: page } : { query: q, params: decodeURIComponent(params) };
    var res = YT.collect(YT.post('search', body));
    return Response.success(res.items, res.next);
  },
  id: function (url) { var m = /[?&]v=([\w-]{11})/.exec(url) || /(?:shorts|embed|live|youtu\.be)\/([\w-]{11})/.exec(url); return m ? m[1] : ''; },
  player: function (id) {
    var p = YT.post('player', { videoId: id, contentCheckOk: true, racyCheckOk: true }, 'IOS');
    var st = p.playabilityStatus || {};
    if (st.status && st.status !== 'OK') throw new Error('YouTube: ' + (st.reason || st.status));
    return p;
  }
};


function execute(url) {
  var p = YT.player(YT.id(url)), sd = p.streamingData || {}, out = [];
  if (sd.hlsManifestUrl) out.push({ title: 'Tự động (HLS)', data: sd.hlsManifestUrl });
  (sd.formats || []).filter(function (f) { return f.url; }).sort(function (a, b) { return (b.height || 0) - (a.height || 0); })
    .forEach(function (f) { out.push({ title: (f.qualityLabel || f.quality || 'MP4') + ' (có tiếng)', data: f.url }); });
  if (!out.length) (sd.adaptiveFormats || []).filter(function (f) { return f.url && /video\/mp4/.test(f.mimeType); }).slice(0, 2).forEach(function (f) { out.push({ title: (f.qualityLabel || 'MP4') + ' (không tiếng)', data: f.url }); });
  if (!out.length) throw new Error('YouTube không trả về luồng phát cho video này');
  return Response.success(out);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"track": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN"); var REGION = __cfg("REGION");
return (function () {

var BASE_URL = "https://www.youtube.com";


function execute(data) {
  return Response.success({ type: 'native', data: data, headers: { 'User-Agent': 'com.google.ios.youtube/20.10.4 (iPhone16,2; U; CPU iOS 18_3_2 like Mac OS X;)' } });
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
}
} });
