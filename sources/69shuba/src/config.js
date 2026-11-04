const BASE_URL = 'https://www.69shuba.com';
let SESSION_COOKIE = '';
try { if (CONFIG_COOKIE) SESSION_COOKIE = CONFIG_COOKIE; } catch(e) {}

var HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": BASE_URL + "/",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
};
if (SESSION_COOKIE) {
    HEADERS["Cookie"] = SESSION_COOKIE;
}

function fetchDoc(url) {
    let response = fetch(url, { headers: HEADERS });
    if (response && response.ok) {
        return response.html('gbk');
    }
    return null;
}

function tidy(s) {
    return (s || '').replace(/\s+/g, ' ').trim();
}

function fullUrl(path) {
    if (!path) return '';
    if (path.indexOf('http') === 0) return path;
    if (path.indexOf('//') === 0) return 'https:' + path;
    return BASE_URL + (path.charAt(0) === '/' ? '' : '/') + path;
}

// aliases for backward compat with other scripts
var cleanText = tidy;
var absoluteUrl = fullUrl;