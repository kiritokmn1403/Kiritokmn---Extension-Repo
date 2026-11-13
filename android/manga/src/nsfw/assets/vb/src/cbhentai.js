__register({ META: {"id":"cbhentai","name":"HentaiCube -18+ (iOS)","source":"https://hentaicube.xyz","type":"comic","locale":"vi","nsfw":true,"version":16,"config":{},"configDefaults":{}}, SCRIPTS: {
"home": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://hentaicube.xyz";
var HOST = "https://hentaicube.xyz";

var FETCH_HEADERS = {
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

var GENRE_SLUG_RE = /\/theloai\/([^\/?#]+)/;
var SIZE_SUFFIX_RE = /-\d+x\d+(\.[^./?]+)$/;

function selFirst(el, css) {
    var r = el.select(css);
    return r.size() > 0 ? r.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}
// Lấy ảnh chất lượng đầy đủ bằng cách bỏ hậu tố kích thước -NxN
function stripSizeSuffix(src) {
    if (!src) return "";
    return src.replace(SIZE_SUFFIX_RE, "$1");
}

// Parse danh sách truyện từ trang list/genre
// Trả về description là chương mới nhất
function parseListItems(doc) {
    var result = [];
    var seen = {};
    var cards = doc.select("div.page-item-detail");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleA = selFirst(card, ".post-title h3 a, h3.h5 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var link = titleA.attr("href") || "";
        if (!link || seen[link]) continue;
        seen[link] = true;

        var imgEl = selFirst(card, ".item-thumb img");
        var cover = imgEl ? stripSizeSuffix(imgEl.attr("src") || "") : "";

        // Chương mới nhất hiển thị dưới mỗi truyện
        var chapA = selFirst(card, ".list-chapter .chapter-item .chapter a");
        var description = chapA ? chapA.text().replace(/\s+/g, " ").trim() : "";

        result.push({ name: name, link: link, host: HOST, cover: cover, description: description });
    }
    return result;
}



function execute() {
    return Response.success([
        { title: "Mới cập nhật", input: "read", script: "homecontent.js" }
    ]);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"homecontent": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://hentaicube.xyz";
var HOST = "https://hentaicube.xyz";

var FETCH_HEADERS = {
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

var GENRE_SLUG_RE = /\/theloai\/([^\/?#]+)/;
var SIZE_SUFFIX_RE = /-\d+x\d+(\.[^./?]+)$/;

function selFirst(el, css) {
    var r = el.select(css);
    return r.size() > 0 ? r.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}
// Lấy ảnh chất lượng đầy đủ bằng cách bỏ hậu tố kích thước -NxN
function stripSizeSuffix(src) {
    if (!src) return "";
    return src.replace(SIZE_SUFFIX_RE, "$1");
}

// Parse danh sách truyện từ trang list/genre
// Trả về description là chương mới nhất
function parseListItems(doc) {
    var result = [];
    var seen = {};
    var cards = doc.select("div.page-item-detail");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleA = selFirst(card, ".post-title h3 a, h3.h5 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var link = titleA.attr("href") || "";
        if (!link || seen[link]) continue;
        seen[link] = true;

        var imgEl = selFirst(card, ".item-thumb img");
        var cover = imgEl ? stripSizeSuffix(imgEl.attr("src") || "") : "";

        // Chương mới nhất hiển thị dưới mỗi truyện
        var chapA = selFirst(card, ".list-chapter .chapter-item .chapter a");
        var description = chapA ? chapA.text().replace(/\s+/g, " ").trim() : "";

        result.push({ name: name, link: link, host: HOST, cover: cover, description: description });
    }
    return result;
}



function execute(url, page) {
    var p = page ? parseInt(page) : 1;
    var fetchUrl = BASE_URL + "/" + url + "/page/" + p + "/";
    var res = fetch(fetchUrl, FETCH_OPTIONS);
    if (!res || !res.ok) return Response.success([], null);
    var doc = res.html();
    if (!doc) return Response.success([], null);

    var items = parseListItems(doc);

    var next = items.length > 0 ? String(p + 1) : null;
    return Response.success(items, next);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"genre": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://hentaicube.xyz";
var HOST = "https://hentaicube.xyz";

var FETCH_HEADERS = {
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

var GENRE_SLUG_RE = /\/theloai\/([^\/?#]+)/;
var SIZE_SUFFIX_RE = /-\d+x\d+(\.[^./?]+)$/;

function selFirst(el, css) {
    var r = el.select(css);
    return r.size() > 0 ? r.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}
// Lấy ảnh chất lượng đầy đủ bằng cách bỏ hậu tố kích thước -NxN
function stripSizeSuffix(src) {
    if (!src) return "";
    return src.replace(SIZE_SUFFIX_RE, "$1");
}

// Parse danh sách truyện từ trang list/genre
// Trả về description là chương mới nhất
function parseListItems(doc) {
    var result = [];
    var seen = {};
    var cards = doc.select("div.page-item-detail");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleA = selFirst(card, ".post-title h3 a, h3.h5 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var link = titleA.attr("href") || "";
        if (!link || seen[link]) continue;
        seen[link] = true;

        var imgEl = selFirst(card, ".item-thumb img");
        var cover = imgEl ? stripSizeSuffix(imgEl.attr("src") || "") : "";

        // Chương mới nhất hiển thị dưới mỗi truyện
        var chapA = selFirst(card, ".list-chapter .chapter-item .chapter a");
        var description = chapA ? chapA.text().replace(/\s+/g, " ").trim() : "";

        result.push({ name: name, link: link, host: HOST, cover: cover, description: description });
    }
    return result;
}



function execute() {
    var res = fetch(BASE_URL + "/the-loai-genres/", FETCH_OPTIONS);
    if (!res || !res.ok) return Response.success([]);
    var doc = res.html();
    if (!doc) return Response.success([]);

    var genres = [];
    var seen = {};
    var links = doc.select("a[href*='/theloai/']");
    for (var i = 0; i < links.size(); i++) {
        var a = links.get(i);
        var href = a.attr("href") || "";
        var m = GENRE_SLUG_RE.exec(href);
        if (!m) continue;
        var slug = m[1];
        if (seen[slug]) continue;
        seen[slug] = true;
        var name = a.text().replace(/\s+/g, " ").trim();
        if (!name) continue;
        genres.push({ title: name, input: slug, script: "genrecontent.js" });
    }

    return Response.success(genres);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"genrecontent": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://hentaicube.xyz";
var HOST = "https://hentaicube.xyz";

var FETCH_HEADERS = {
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

var GENRE_SLUG_RE = /\/theloai\/([^\/?#]+)/;
var SIZE_SUFFIX_RE = /-\d+x\d+(\.[^./?]+)$/;

function selFirst(el, css) {
    var r = el.select(css);
    return r.size() > 0 ? r.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}
// Lấy ảnh chất lượng đầy đủ bằng cách bỏ hậu tố kích thước -NxN
function stripSizeSuffix(src) {
    if (!src) return "";
    return src.replace(SIZE_SUFFIX_RE, "$1");
}

// Parse danh sách truyện từ trang list/genre
// Trả về description là chương mới nhất
function parseListItems(doc) {
    var result = [];
    var seen = {};
    var cards = doc.select("div.page-item-detail");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleA = selFirst(card, ".post-title h3 a, h3.h5 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var link = titleA.attr("href") || "";
        if (!link || seen[link]) continue;
        seen[link] = true;

        var imgEl = selFirst(card, ".item-thumb img");
        var cover = imgEl ? stripSizeSuffix(imgEl.attr("src") || "") : "";

        // Chương mới nhất hiển thị dưới mỗi truyện
        var chapA = selFirst(card, ".list-chapter .chapter-item .chapter a");
        var description = chapA ? chapA.text().replace(/\s+/g, " ").trim() : "";

        result.push({ name: name, link: link, host: HOST, cover: cover, description: description });
    }
    return result;
}



function execute(url, page) {
    var p = page ? parseInt(page) : 1;
    var fetchUrl = BASE_URL + "/theloai/" + url + "/page/" + p + "/";

    var res = fetch(fetchUrl, FETCH_OPTIONS);
    if (!res || !res.ok) return Response.success([], null);
    var doc = res.html();
    if (!doc) return Response.success([], null);

    var items = parseListItems(doc);

    var next = items.length > 0 ? String(p + 1) : null;
    return Response.success(items, next);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"detail": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://hentaicube.xyz";
var HOST = "https://hentaicube.xyz";

var FETCH_HEADERS = {
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

var GENRE_SLUG_RE = /\/theloai\/([^\/?#]+)/;
var SIZE_SUFFIX_RE = /-\d+x\d+(\.[^./?]+)$/;

function selFirst(el, css) {
    var r = el.select(css);
    return r.size() > 0 ? r.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}
// Lấy ảnh chất lượng đầy đủ bằng cách bỏ hậu tố kích thước -NxN
function stripSizeSuffix(src) {
    if (!src) return "";
    return src.replace(SIZE_SUFFIX_RE, "$1");
}

// Parse danh sách truyện từ trang list/genre
// Trả về description là chương mới nhất
function parseListItems(doc) {
    var result = [];
    var seen = {};
    var cards = doc.select("div.page-item-detail");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleA = selFirst(card, ".post-title h3 a, h3.h5 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var link = titleA.attr("href") || "";
        if (!link || seen[link]) continue;
        seen[link] = true;

        var imgEl = selFirst(card, ".item-thumb img");
        var cover = imgEl ? stripSizeSuffix(imgEl.attr("src") || "") : "";

        // Chương mới nhất hiển thị dưới mỗi truyện
        var chapA = selFirst(card, ".list-chapter .chapter-item .chapter a");
        var description = chapA ? chapA.text().replace(/\s+/g, " ").trim() : "";

        result.push({ name: name, link: link, host: HOST, cover: cover, description: description });
    }
    return result;
}



function execute(url) {
    var storyUrl = resolveUrl(url);
    var res = fetch(storyUrl, FETCH_OPTIONS);
    if (!res || !res.ok) return Response.error("Mở browser lên mà verify Cloudflare đi bạn ơi");
    var doc = res.html();
    if (!doc) return Response.error("Không đọc được nội dung trang");

    // Cover - dùng srcset để lấy ảnh gốc (entry cuối cùng)
    var cover = "";
    var imgEl = selFirst(doc, ".summary-image img, .summary_image img");
    if (imgEl) {
        var srcset = imgEl.attr("srcset") || "";
        if (srcset) {
            // srcset: "url1 175w, url2 193w, url3.webp 351w" → lấy entry cuối
            var entries = srcset.split(",");
            var lastEntry = entries[entries.length - 1].replace(/^\s+/, "").split(/\s+/)[0];
            cover = lastEntry || stripSizeSuffix(imgEl.attr("src") || "");
        } else {
            cover = stripSizeSuffix(imgEl.attr("src") || "");
        }
    }

    // Tiêu đề - dùng .ownText() không được trên vBook, dùng cách xóa badge span
    var name = "";
    var h1 = selFirst(doc, "h1.post-title, h1");
    if (h1) {
        var badges = h1.select("span.manga-title-badges");
        for (var bi = 0; bi < badges.size(); bi++) {
            badges.get(bi).remove();
        }
        name = h1.text().replace(/\s+/g, " ").trim();
    }
    if (!name) name = "HentaiCube";

    // Mô tả
    var description = "";
    var descEl = selFirst(doc, ".summary__content p, .description-summary p, .manga-excerpt");
    if (descEl) {
        description = descEl.text().trim();
    }

    // Tình trạng
    var status = "";
    var statusEl = selFirst(doc, ".post-status .summary-content");
    if (statusEl) {
        status = statusEl.text().trim();
    }

    // Tác giả
    var author = "HentaiCube";
    var authorHref = "";
    var authorEl = selFirst(doc, ".author-content a[href*='/tacgia/']");
    if (authorEl) {
        var authorText = authorEl.text().replace(/\s+/g, " ").trim();
        if (authorText) author = authorText;
        authorHref = authorEl.attr("href") || "";
    }

    // Thể loại
    var genres = [];
    var seen = {};
    var genreLinks = doc.select("a[href*='/theloai/']");
    for (var gi = 0; gi < genreLinks.size(); gi++) {
        var ga = genreLinks.get(gi);
        var gh = ga.attr("href") || "";
        var gm = GENRE_SLUG_RE.exec(gh);
        if (!gm) continue;
        var slug = gm[1];
        if (seen[slug]) continue;
        seen[slug] = true;
        var gname = ga.text().trim();
        if (!gname) continue;
        genres.push({ title: gname, input: slug, script: "genrecontent.js" });
    }

    var suggests = [];
    if (authorHref && author !== "HentaiCube") {
        suggests.push({ title: "Cùng tác giả: " + author, input: authorHref, script: "authorcontent.js" });
    }

    var detail = "Tên truyện: " + name + "<br>Tác giả: " + (author !== "HentaiCube" ? author : "Không rõ");
    if (description) detail += "<br>" + description;
    if (status) detail += "<br>Tình trạng: " + status;

    return Response.success({
        name: name,
        cover: cover,
        host: HOST,
        author: author,
        detail: detail,
        description: description,
        ongoing: false,
        genres: genres,
        suggests: suggests.length > 0 ? suggests : undefined
    });
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"search": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://hentaicube.xyz";
var HOST = "https://hentaicube.xyz";

var FETCH_HEADERS = {
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

var GENRE_SLUG_RE = /\/theloai\/([^\/?#]+)/;
var SIZE_SUFFIX_RE = /-\d+x\d+(\.[^./?]+)$/;

function selFirst(el, css) {
    var r = el.select(css);
    return r.size() > 0 ? r.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}
// Lấy ảnh chất lượng đầy đủ bằng cách bỏ hậu tố kích thước -NxN
function stripSizeSuffix(src) {
    if (!src) return "";
    return src.replace(SIZE_SUFFIX_RE, "$1");
}

// Parse danh sách truyện từ trang list/genre
// Trả về description là chương mới nhất
function parseListItems(doc) {
    var result = [];
    var seen = {};
    var cards = doc.select("div.page-item-detail");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleA = selFirst(card, ".post-title h3 a, h3.h5 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var link = titleA.attr("href") || "";
        if (!link || seen[link]) continue;
        seen[link] = true;

        var imgEl = selFirst(card, ".item-thumb img");
        var cover = imgEl ? stripSizeSuffix(imgEl.attr("src") || "") : "";

        // Chương mới nhất hiển thị dưới mỗi truyện
        var chapA = selFirst(card, ".list-chapter .chapter-item .chapter a");
        var description = chapA ? chapA.text().replace(/\s+/g, " ").trim() : "";

        result.push({ name: name, link: link, host: HOST, cover: cover, description: description });
    }
    return result;
}



function execute(keyword, page) {
    var q = encodeURIComponent(keyword);
    var fetchUrl = BASE_URL + "/?s=" + q + "&post_type=wp-manga";
    var res = fetch(fetchUrl, FETCH_OPTIONS);
    if (!res || !res.ok) return Response.success([], null);
    var doc = res.html();
    if (!doc) return Response.success([], null);

    // Trang search dùng .c-tabs-item__content thay vì .page-item-detail
    var items = [];
    var seen = {};
    var cards = doc.select(".c-tabs-item__content");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleA = selFirst(card, ".post-title h3 a, .post-title a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var link = titleA.attr("href") || "";
        if (!link || seen[link]) continue;
        seen[link] = true;

        var imgEl = selFirst(card, ".tab-thumb img, img");
        var cover = imgEl ? stripSizeSuffix(imgEl.attr("src") || "") : "";

        items.push({ name: name, link: link, host: HOST, cover: cover });
    }

    return Response.success(items, null);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"toc": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://hentaicube.xyz";
var HOST = "https://hentaicube.xyz";

var FETCH_HEADERS = {
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

var GENRE_SLUG_RE = /\/theloai\/([^\/?#]+)/;
var SIZE_SUFFIX_RE = /-\d+x\d+(\.[^./?]+)$/;

function selFirst(el, css) {
    var r = el.select(css);
    return r.size() > 0 ? r.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}
// Lấy ảnh chất lượng đầy đủ bằng cách bỏ hậu tố kích thước -NxN
function stripSizeSuffix(src) {
    if (!src) return "";
    return src.replace(SIZE_SUFFIX_RE, "$1");
}

// Parse danh sách truyện từ trang list/genre
// Trả về description là chương mới nhất
function parseListItems(doc) {
    var result = [];
    var seen = {};
    var cards = doc.select("div.page-item-detail");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleA = selFirst(card, ".post-title h3 a, h3.h5 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var link = titleA.attr("href") || "";
        if (!link || seen[link]) continue;
        seen[link] = true;

        var imgEl = selFirst(card, ".item-thumb img");
        var cover = imgEl ? stripSizeSuffix(imgEl.attr("src") || "") : "";

        // Chương mới nhất hiển thị dưới mỗi truyện
        var chapA = selFirst(card, ".list-chapter .chapter-item .chapter a");
        var description = chapA ? chapA.text().replace(/\s+/g, " ").trim() : "";

        result.push({ name: name, link: link, host: HOST, cover: cover, description: description });
    }
    return result;
}



function extractChapterNumber(name, href) {
    var raw = ((name || "") + " "+ (href || ""));
    var m = raw.match(/chap(?:ter)?[-\s]*(\d+)/i);
    return m ? parseInt(m[1]) : 0;
}

function execute(url) {
    var storyUrl = resolveUrl(url);
    if (storyUrl.charAt(storyUrl.length - 1) !== "/") storyUrl += "/";

    // Madara WP-Manga: POST {storyUrl}ajax/chapters/ trả về danh sách chương.
    // HentaiCube hiện phân trang list này, nên endpoint có thể chỉ trả 20 chap mới nhất.
    var ajaxUrl = storyUrl + "ajax/chapters/";
    var ajaxRes = fetch(ajaxUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Referer": storyUrl,
            "User-Agent": FETCH_HEADERS["User-Agent"]
        }
    });
    if (!ajaxRes || !ajaxRes.ok) return Response.error("Không tải được danh sách chương");
    var ajaxDoc = ajaxRes.html();
    if (!ajaxDoc) return Response.error("Không đọc được danh sách chương");

    var chapters = [];
    var byNumber = {};
    var seen = {};
    var maxNumber = 0;
    var minNumber = 0;
    var links = ajaxDoc.select("li.wp-manga-chapter a[href]");
    for (var i = 0; i < links.size(); i++) {
        var a = links.get(i);
        var href = a.attr("href") || "";
        if (!href) continue;
        if (href.indexOf("http") !== 0) href = BASE_URL + href;
        if (seen[href]) continue;
        seen[href] = true;
        var chapName = a.text().replace(/\s+/g, " ").trim();
        if (!chapName) continue;

        var item = { name: chapName, url: href, host: HOST };
        chapters.push(item);

        var number = extractChapterNumber(chapName, href);
        if (number > 0) {
            byNumber[number] = item;
            if (number > maxNumber) maxNumber = number;
            if (minNumber === 0 || number < minNumber) minNumber = number;
        }
    }

    if (chapters.length === 0) return Response.error("Không tìm thấy danh sách chương");

    // Nếu AJAX chỉ trả trang cuối (ví dụ Chap 25-44), tự sinh đủ URL Chap 1..N.
    // Chap URL của HentaiCube ổn định theo dạng /read/<slug>/chap-N/.
    if (maxNumber > 0 && minNumber > 1 && chapters.length >= 20) {
        var generated = [];
        for (var n = 1; n <= maxNumber; n++) {
            var existing = byNumber[n];
            if (existing) {
                generated.push(existing);
            } else {
                generated.push({ name: "Chap " + n, url: storyUrl + "chap-" + n + "/", host: HOST });
            }
        }
        return Response.success(generated);
    }

    // AJAX trả mới nhất trước → đảo lại để chương 1 đứng đầu
    var reversed = [];
    for (var j = chapters.length - 1; j >= 0; j--) {
        reversed.push(chapters[j]);
    }

    return Response.success(reversed);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"chap": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://hentaicube.xyz";
var HOST = "https://hentaicube.xyz";

var FETCH_HEADERS = {
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

var GENRE_SLUG_RE = /\/theloai\/([^\/?#]+)/;
var SIZE_SUFFIX_RE = /-\d+x\d+(\.[^./?]+)$/;

function selFirst(el, css) {
    var r = el.select(css);
    return r.size() > 0 ? r.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}
// Lấy ảnh chất lượng đầy đủ bằng cách bỏ hậu tố kích thước -NxN
function stripSizeSuffix(src) {
    if (!src) return "";
    return src.replace(SIZE_SUFFIX_RE, "$1");
}

// Parse danh sách truyện từ trang list/genre
// Trả về description là chương mới nhất
function parseListItems(doc) {
    var result = [];
    var seen = {};
    var cards = doc.select("div.page-item-detail");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleA = selFirst(card, ".post-title h3 a, h3.h5 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var link = titleA.attr("href") || "";
        if (!link || seen[link]) continue;
        seen[link] = true;

        var imgEl = selFirst(card, ".item-thumb img");
        var cover = imgEl ? stripSizeSuffix(imgEl.attr("src") || "") : "";

        // Chương mới nhất hiển thị dưới mỗi truyện
        var chapA = selFirst(card, ".list-chapter .chapter-item .chapter a");
        var description = chapA ? chapA.text().replace(/\s+/g, " ").trim() : "";

        result.push({ name: name, link: link, host: HOST, cover: cover, description: description });
    }
    return result;
}



function execute(url) {
  var chapUrl = resolveUrl(url);
  var browser = Engine.newBrowser();
  browser.setUserAgent(UserAgent.ios()); // Tùy chỉnh user agent
  var doc = browser.launch(chapUrl, 15000);
  browser.close();
  var imgs = doc.select('img[src*="cdn."]');
  if (imgs.size() === 0)
    return Response.error("Mở browser lên mà verify Cloudflare đi bạn ơi");

  var data = [];
  for (var i = 0; i < imgs.size(); i++) {
    var src = imgs.get(i).attr("src") || "";
    if (!src || src.indexOf("http") !== 0) continue;
    data.push(src);
  }

  if (data.length === 0)
    return Response.error("Không có ảnh trong chương (liên hệ tác giả)");
  return Response.success(data);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"authorcontent": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://hentaicube.xyz";
var HOST = "https://hentaicube.xyz";

var FETCH_HEADERS = {
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

var GENRE_SLUG_RE = /\/theloai\/([^\/?#]+)/;
var SIZE_SUFFIX_RE = /-\d+x\d+(\.[^./?]+)$/;

function selFirst(el, css) {
    var r = el.select(css);
    return r.size() > 0 ? r.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}
// Lấy ảnh chất lượng đầy đủ bằng cách bỏ hậu tố kích thước -NxN
function stripSizeSuffix(src) {
    if (!src) return "";
    return src.replace(SIZE_SUFFIX_RE, "$1");
}

// Parse danh sách truyện từ trang list/genre
// Trả về description là chương mới nhất
function parseListItems(doc) {
    var result = [];
    var seen = {};
    var cards = doc.select("div.page-item-detail");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleA = selFirst(card, ".post-title h3 a, h3.h5 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var link = titleA.attr("href") || "";
        if (!link || seen[link]) continue;
        seen[link] = true;

        var imgEl = selFirst(card, ".item-thumb img");
        var cover = imgEl ? stripSizeSuffix(imgEl.attr("src") || "") : "";

        // Chương mới nhất hiển thị dưới mỗi truyện
        var chapA = selFirst(card, ".list-chapter .chapter-item .chapter a");
        var description = chapA ? chapA.text().replace(/\s+/g, " ").trim() : "";

        result.push({ name: name, link: link, host: HOST, cover: cover, description: description });
    }
    return result;
}



function execute(url, page) {
    var p = page ? parseInt(page) : 1;
    var fetchUrl = resolveUrl(url);
    if (fetchUrl.charAt(fetchUrl.length - 1) !== "/") fetchUrl += "/";
    if (p > 1) fetchUrl += "page/" + p + "/";

    var res = fetch(fetchUrl, FETCH_OPTIONS);
    if (!res || !res.ok) return Response.success([], null);
    var doc = res.html();
    if (!doc) return Response.success([], null);

    var items = parseListItems(doc);
    var next = items.length > 0 ? String(p + 1) : null;
    return Response.success(items, next);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
}
} });
