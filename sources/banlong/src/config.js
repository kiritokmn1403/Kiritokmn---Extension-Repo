let BASE_URL = "https://blhvip.vn";
try {
    if (DOMAIN) {
        BASE_URL = String(DOMAIN).replace(/\/+$/, "");
    }
} catch (error) {
}

let API_URL = BASE_URL.replace(/^(https?:\/\/)(?:www\.)?/, "$1api.");

function normalizeUrl(url) {
    return url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
}

function absUrl(href) {
    href = String(href || "").trim();
    if (!href) return "";
    if (href.indexOf("//") === 0) return "https:" + href;
    if (/^https?:\/\//i.test(href)) return href;
    if (href.charAt(0) !== "/") href = "/" + href;
    return BASE_URL + href;
}

function storySlug(url) {
    let match = /\/truyen\/([^\/?#]+)/.exec(url);
    return match ? match[1] : "";
}

function nextPageToken(doc) {
    let match = /[?&]page=(\d+)/.exec(doc.select("a.next-page").attr("href"));
    return match ? match[1] : "";
}
