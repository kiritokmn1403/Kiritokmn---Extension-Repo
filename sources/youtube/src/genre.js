load('config.js');
load('yt.js');
function execute(input, page) { var i = String(input || 'video:'), k = i.indexOf(':'); return YT.search(i.slice(k + 1), page, i.slice(0, k)); }
