// 0.0.4 — TikTok & Douyin short-video sources (ES5: runs in Rhino, QuickJS, JavaScriptCore and Node).
//
// Two back ends, picked by the source settings:
//  1. DTK_SERVER set  -> the user's own instance of Evil0ctal/Douyin_TikTok_Download_API (REST v1, envelope
//     {success, data, error, meta}). The instance signs requests itself (X-Bogus / a_bogus / msToken) with its
//     identity pool, so this source never has to carry those signing algorithms. Optional key: DTK_KEY (X-API-Key).
//  2. no server       -> public endpoints that need no signature:
//       TikTok: tikwm.com (region feed, keyword search, video by URL)
//       Douyin: iesdouyin.com hot-search board (topics); playback needs the DTK server, otherwise the topic
//               opens on douyin.com in the app's WebView.
// Item links are always the platform's own canonical URL (https://www.tiktok.com/@user/video/<id>,
// https://www.douyin.com/video/<id>) so the apps keep watch history / "resume" per clip.
var SV = {
  // config globals are declared by the build (var DTK_SERVER = __cfg('DTK_SERVER')); referenced directly, no eval
  cfg: function (name, def) {
    var v = '';
    try { if (name === 'DTK_SERVER') v = DTK_SERVER; else if (name === 'DTK_KEY') v = DTK_KEY; else if (name === 'REGION') v = REGION; } catch (e) { }
    v = String(v == null ? '' : v).trim(); return v || def || '';
  },
  server: function () { return SV.cfg('DTK_SERVER').replace(/\/+$/, ''); },
  region: function () { return SV.cfg('REGION', 'VN').toUpperCase(); },
  qs: function (q) { var a = []; for (var k in q) if (q[k] !== null && q[k] !== undefined && q[k] !== '') a.push(k + '=' + encodeURIComponent(q[k])); return a.join('&'); },
  // ---- back end 1: Douyin_TikTok_Download_API (self-hosted)
  dtk: function (path, q) {
    q = q || {}; q.wait = q.wait || 25;
    var h = { 'Accept': 'application/json' }, key = SV.cfg('DTK_KEY');
    if (key) h['X-API-Key'] = key;
    var u = SV.server() + '/api/v1/' + path + '?' + SV.qs(q);
    var r = fetch(u, { headers: h });
    var j = null; try { j = r.json(); } catch (e) { }
    if (!r.ok || !j || j.success === false) {
      var msg = j && j.error ? (j.error.message || j.error.code) : ('HTTP ' + r.status);
      throw new Error('Máy chủ Douyin_TikTok_Download_API (' + path + '): ' + msg);
    }
    return j;
  },
  // hashtag posts are keyed by the numeric id: look the name up once and keep it
  dtkTag: function (platform, name) {
    var k = 'dtk_tag_' + platform + '_' + name, id = '';
    try { id = localStorage.getItem(k) || ''; } catch (e) { }
    if (!id) { id = String((SV.dtk(platform + '/hashtag', { name: name }).data || {}).hashtag_id || ''); try { if (id) localStorage.setItem(k, id); } catch (e) { } }
    if (!id) throw new Error('Không tìm thấy hashtag #' + name);
    return id;
  },
  dtkItems: function (j) { var d = j.data; if (d && d.items) d = d.items; return d && d.length !== undefined ? d : []; },
  dtkNext: function (j) { var c = j.data && j.data.cursor, more = j.data && j.data.has_more; if (!c && j.meta && j.meta.cursor) { c = j.meta.cursor.next; more = j.meta.cursor.has_more; } return more && c ? String(c) : ''; },
  dtkCover: function (c) { var m = c.media || {}; return m.covers && m.covers.length ? m.covers[0].url : (m.images && m.images.length ? m.images[0].url : ''); },
  dtkItem: function (c) {
    var who = c.author ? (c.author.nickname || c.author.unique_id || '') : '';
    return { name: SV.title(c.title || c.description, c.content_id), link: c.web_url, cover: SV.dtkCover(c), description: who, host: BASE_URL };
  },
  dtkStreams: function (c) {
    var m = c.media || {}, out = [], seen = {};
    var add = function (t, s) { if (s && s.url && !seen[s.url]) { seen[s.url] = 1; out.push({ title: t, data: s.url }); } };
    add('Không logo', m.video);
    (m.streams || []).forEach(function (s, i) { add((s.height ? s.height + 'p' : 'Luồng ' + (i + 2)) + (s.watermark ? ' (logo)' : ''), s); });
    (m.images || []).forEach(function (im, i) { if (im.video) add('Ảnh động ' + (i + 1), im.video); });
    return out;
  },
  title: function (t, id) { t = String(t || '').replace(/\s+/g, ' ').trim(); return t ? (t.length > 110 ? t.slice(0, 108) + '…' : t) : ('Video ' + (id || '')); },
  // ---- back end 2a: tikwm (TikTok, no signature)
  TW: 'https://www.tikwm.com',
  tw: function (path, q, post) {
    var u = SV.TW + path, opt = { headers: { 'Accept': 'application/json', 'Referer': SV.TW + '/' } };
    if (post) { opt.method = 'POST'; opt.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'; opt.body = SV.qs(q); } else u += '?' + SV.qs(q);
    var r = fetch(u, opt), j = null;
    try { j = r.json(); } catch (e) { }
    if (!r.ok || !j || j.code !== 0) throw new Error('tikwm.com: ' + (j && j.msg ? j.msg : 'HTTP ' + r.status) + ' — có thể đặt máy chủ Douyin_TikTok_Download_API trong cài đặt nguồn');
    return j.data;
  },
  twUrl: function (v) { var u = v.author && v.author.unique_id ? v.author.unique_id : 'user'; return 'https://www.tiktok.com/@' + u + '/video/' + (v.video_id || v.id); },
  twAbs: function (u) { return !u ? '' : /^https?:/.test(u) ? u : SV.TW + (u.charAt(0) === '/' ? '' : '/') + u; },
  twItem: function (v) { return { name: SV.title(v.title, v.video_id), link: SV.twUrl(v), cover: SV.twAbs(v.cover || v.origin_cover), description: v.author ? (v.author.nickname || v.author.unique_id) : '', host: BASE_URL }; },
  twStreams: function (v) {
    var out = [];
    if (v.hdplay) out.push({ title: 'HD không logo', data: SV.twAbs(v.hdplay) });
    if (v.play) out.push({ title: 'SD không logo', data: SV.twAbs(v.play) });
    if (v.wmplay) out.push({ title: 'Có logo', data: SV.twAbs(v.wmplay) });
    return out;
  },
  // ---- shared helpers
  videoId: function (url) { var m = /\/(?:video|note|photo)\/(\d{8,})/.exec(url) || /[?&](?:aweme_id|item_id|modal_id)=(\d{8,})/.exec(url); return m ? m[1] : ''; },
  page: function (p) { var n = parseInt(p || '1', 10); return isNaN(n) || n < 1 ? 1 : n; },
  webview: function (url) { return Response.success({ type: 'webview', data: url }); },
  // TikTok list: "feed" (region feed) | "tag:<hashtag>" | "user:<unique_id>"
  ttList: function (input, page) {
    input = String(input || 'feed');
    if (SV.server()) {
      var j;
      var cur = page && page !== '1' ? page : '';
      if (input.indexOf('user:') === 0) j = SV.dtk('tiktok/user/posts', { url: 'https://www.tiktok.com/@' + input.slice(5), cursor: cur, count: 20 });
      else j = SV.dtk('tiktok/hashtag/posts', { hashtag_id: SV.dtkTag('tiktok', input.indexOf('tag:') === 0 ? input.slice(4) : 'fyp'), cursor: cur, count: 20 });
      return Response.success(SV.dtkItems(j).map(SV.dtkItem), SV.dtkNext(j));
    }
    var n = SV.page(page), d;
    if (input.indexOf('user:') === 0) {
      d = SV.tw('/api/user/posts', { unique_id: input.slice(5), count: 20, cursor: page && page !== '1' ? page : 0 });
      return Response.success((d.videos || []).map(SV.twItem), d.hasMore ? String(d.cursor) : '');
    }
    if (input.indexOf('tag:') === 0) {
      d = SV.tw('/api/feed/search', { keywords: '#' + input.slice(4), count: 20, cursor: (n - 1) * 20, HD: 1 }, true);
      return Response.success((d.videos || []).map(SV.twItem), d.hasMore ? String(n + 1) : '');
    }
    d = SV.tw('/api/feed/list', { region: SV.region(), count: 20 });
    // the region feed is a fresh random batch on every call: "next page" just asks again (endless Shorts scroll)
    return Response.success((d || []).map(SV.twItem), n < 30 ? String(n + 1) : '');
  }
};
