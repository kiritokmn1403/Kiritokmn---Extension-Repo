__register({ META: {"id":"luottruyen","name":"LuotTruyen","source":"https://luottruyen7.com","type":"comic","locale":"vi_VN","nsfw":false,"version":8,"config":{},"configDefaults":{}}, SCRIPTS: {
"home": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://luottruyen7.com";
var HOST = "https://luottruyen7.com";

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

// ─── Helper functions ──────────────────────────────────────────────

function selFirst(el, css) {
    var items = el.select(css);
    return items.size() > 0 ? items.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}

function fetchRetry(url) {
    var res = fetch(url, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(url, FETCH_OPTIONS);
    }
    return res;
}

// ─── Parse story cards from listing pages ──────────────────────────
// Structure: div.items > div.row > div.item > figure
//   .image > a > img  (cover)
//   figcaption > h3 > a  (title + link)
//   figcaption > ul > li.chapter > a  (latest chapter)
function parseItems(doc) {
    var items = [];
    var cards = doc.select("div.items div.item");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);

        // Title & link
        var titleA = selFirst(card, "figcaption h3 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var href = titleA.attr("href") || "";
        if (!name || !href) continue;
        var link = resolveUrl(href);

        // Cover image
        var img = selFirst(card, "div.image a img");
        var cover = "";
        if (img) {
            cover = img.attr("data-original") || img.attr("data-src") || img.attr("src") || "";
            if (cover && cover.indexOf("http") !== 0) {
                cover = resolveUrl(cover);
            }
        }

        // Status (Full badge or default "Đang Ra")
        var status = "Đang Ra";
        var fullLabel = selFirst(card, "span.label-full, span.full, i.icon-full");
        if (fullLabel) {
            status = "Full";
        }

        // Latest chapter
        var chapA = selFirst(card, "figcaption ul li.chapter a");
        var chapText = chapA ? chapA.text().trim() : "";

        // Time
        var timeEl = selFirst(card, "figcaption ul li.chapter i.time");
        var timeText = timeEl ? timeEl.text().trim() : "";

        // Build description: Tình trạng • Chapter • Thời gian
        var desc = status;
        if (chapText) desc += " • " + chapText;
        if (timeText) desc += " • " + timeText;

        items.push({
            name: name,
            cover: cover,
            link: link,
            description: desc,
            host: HOST
        });
    }
    return items;
}

// ─── Pagination: find next page link ───────────────────────────────
function getNextPage(doc, currentPage) {
    var nextPage = String(currentPage + 1);
    // Look for pagination links containing page=N
    var pageLinks = doc.select("ul.pagination a[href]");
    for (var j = 0; j < pageLinks.size(); j++) {
        var ph = pageLinks.get(j).attr("href") || "";
        if (ph.indexOf("page=" + nextPage) >= 0) return nextPage;
    }
    return null;
}



function execute() {
    return Response.success([
        { title: "Mới Cập Nhật",  input: BASE_URL + "/tim-truyen?status=-1&sort=0",   script: "gen.js" },
        { title: "Truyện Full",   input: BASE_URL + "/tim-truyen?status=2&sort=0",     script: "gen.js" },
        { title: "Yêu Thích",    input: BASE_URL + "/tim-truyen?status=-1&sort=20",    script: "gen.js" },
        { title: "Truyện Mới",   input: BASE_URL + "/tim-truyen?status=-1&sort=15",    script: "gen.js" },
        { title: "Theo Dõi",     input: BASE_URL + "/tim-truyen?status=-1&sort=20",    script: "gen.js" },
        { title: "Lịch Sử",     input: BASE_URL + "/lich-su",                          script: "gen.js" },
        { title: "BXH Ngày",     input: BASE_URL + "/tim-truyen?status=-1&sort=13",    script: "gen.js" },
        { title: "BXH Tuần",     input: BASE_URL + "/tim-truyen?status=-1&sort=12",    script: "gen.js" },
        { title: "BXH Tháng",    input: BASE_URL + "/tim-truyen?status=-1&sort=11",    script: "gen.js" },
        { title: "BXH Tổng",     input: BASE_URL + "/tim-truyen?status=-1&sort=10",    script: "gen.js" }
    ]);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"genre": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://luottruyen7.com";
var HOST = "https://luottruyen7.com";

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

// ─── Helper functions ──────────────────────────────────────────────

function selFirst(el, css) {
    var items = el.select(css);
    return items.size() > 0 ? items.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}

function fetchRetry(url) {
    var res = fetch(url, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(url, FETCH_OPTIONS);
    }
    return res;
}

// ─── Parse story cards from listing pages ──────────────────────────
// Structure: div.items > div.row > div.item > figure
//   .image > a > img  (cover)
//   figcaption > h3 > a  (title + link)
//   figcaption > ul > li.chapter > a  (latest chapter)
function parseItems(doc) {
    var items = [];
    var cards = doc.select("div.items div.item");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);

        // Title & link
        var titleA = selFirst(card, "figcaption h3 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var href = titleA.attr("href") || "";
        if (!name || !href) continue;
        var link = resolveUrl(href);

        // Cover image
        var img = selFirst(card, "div.image a img");
        var cover = "";
        if (img) {
            cover = img.attr("data-original") || img.attr("data-src") || img.attr("src") || "";
            if (cover && cover.indexOf("http") !== 0) {
                cover = resolveUrl(cover);
            }
        }

        // Status (Full badge or default "Đang Ra")
        var status = "Đang Ra";
        var fullLabel = selFirst(card, "span.label-full, span.full, i.icon-full");
        if (fullLabel) {
            status = "Full";
        }

        // Latest chapter
        var chapA = selFirst(card, "figcaption ul li.chapter a");
        var chapText = chapA ? chapA.text().trim() : "";

        // Time
        var timeEl = selFirst(card, "figcaption ul li.chapter i.time");
        var timeText = timeEl ? timeEl.text().trim() : "";

        // Build description: Tình trạng • Chapter • Thời gian
        var desc = status;
        if (chapText) desc += " • " + chapText;
        if (timeText) desc += " • " + timeText;

        items.push({
            name: name,
            cover: cover,
            link: link,
            description: desc,
            host: HOST
        });
    }
    return items;
}

// ─── Pagination: find next page link ───────────────────────────────
function getNextPage(doc, currentPage) {
    var nextPage = String(currentPage + 1);
    // Look for pagination links containing page=N
    var pageLinks = doc.select("ul.pagination a[href]");
    for (var j = 0; j < pageLinks.size(); j++) {
        var ph = pageLinks.get(j).attr("href") || "";
        if (ph.indexOf("page=" + nextPage) >= 0) return nextPage;
    }
    return null;
}



function execute() {
    var res = fetchRetry(BASE_URL + "/tim-truyen");
    if (!res || !res.ok) return Response.success([]);

    var doc = res.html();
    if (!doc) return Response.success([]);

    var genres = [];

    // Parse genre links from the dropdown menu
    var genreLinks = doc.select("ul.dropdown-menu.megamenu a[href*='/tim-truyen/']");
    var seen = {};

    for (var i = 0; i < genreLinks.size(); i++) {
        var a = genreLinks.get(i);
        var name = a.text().trim();
        var href = a.attr("href") || "";
        if (!name || !href) continue;

        // Skip "Tất cả"
        if (name === "Tất cả") continue;

        // Remove count badges from name (e.g. "Action 6648" -> "Action")
        // The count is in a nested span, but text() includes it
        var spanEl = selFirst(a, "span");
        if (spanEl) {
            var spanText = spanEl.text().trim();
            if (spanText && name.indexOf(spanText) >= 0) {
                name = name.replace(spanText, "").trim();
            }
        }
        if (!name) continue;

        // Deduplicate
        if (seen[name]) continue;
        seen[name] = true;

        genres.push({
            title: name,
            input: resolveUrl(href),
            script: "gen.js"
        });
    }

    return Response.success(genres);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"detail": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://luottruyen7.com";
var HOST = "https://luottruyen7.com";

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

// ─── Helper functions ──────────────────────────────────────────────

function selFirst(el, css) {
    var items = el.select(css);
    return items.size() > 0 ? items.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}

function fetchRetry(url) {
    var res = fetch(url, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(url, FETCH_OPTIONS);
    }
    return res;
}

// ─── Parse story cards from listing pages ──────────────────────────
// Structure: div.items > div.row > div.item > figure
//   .image > a > img  (cover)
//   figcaption > h3 > a  (title + link)
//   figcaption > ul > li.chapter > a  (latest chapter)
function parseItems(doc) {
    var items = [];
    var cards = doc.select("div.items div.item");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);

        // Title & link
        var titleA = selFirst(card, "figcaption h3 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var href = titleA.attr("href") || "";
        if (!name || !href) continue;
        var link = resolveUrl(href);

        // Cover image
        var img = selFirst(card, "div.image a img");
        var cover = "";
        if (img) {
            cover = img.attr("data-original") || img.attr("data-src") || img.attr("src") || "";
            if (cover && cover.indexOf("http") !== 0) {
                cover = resolveUrl(cover);
            }
        }

        // Status (Full badge or default "Đang Ra")
        var status = "Đang Ra";
        var fullLabel = selFirst(card, "span.label-full, span.full, i.icon-full");
        if (fullLabel) {
            status = "Full";
        }

        // Latest chapter
        var chapA = selFirst(card, "figcaption ul li.chapter a");
        var chapText = chapA ? chapA.text().trim() : "";

        // Time
        var timeEl = selFirst(card, "figcaption ul li.chapter i.time");
        var timeText = timeEl ? timeEl.text().trim() : "";

        // Build description: Tình trạng • Chapter • Thời gian
        var desc = status;
        if (chapText) desc += " • " + chapText;
        if (timeText) desc += " • " + timeText;

        items.push({
            name: name,
            cover: cover,
            link: link,
            description: desc,
            host: HOST
        });
    }
    return items;
}

// ─── Pagination: find next page link ───────────────────────────────
function getNextPage(doc, currentPage) {
    var nextPage = String(currentPage + 1);
    // Look for pagination links containing page=N
    var pageLinks = doc.select("ul.pagination a[href]");
    for (var j = 0; j < pageLinks.size(); j++) {
        var ph = pageLinks.get(j).attr("href") || "";
        if (ph.indexOf("page=" + nextPage) >= 0) return nextPage;
    }
    return null;
}



function execute(url) {
    var res = fetchRetry(url);
    if (!res || !res.ok) return Response.error("Không tải được trang truyện");
    var doc = res.html();
    if (!doc) return Response.error("Không parse được HTML");

    // ─── Title ────────────────────────────────────────────────────────────
    var titleEl = selFirst(doc, "h1.title-detail");
    var name = titleEl ? titleEl.text().trim() : "";

    // ─── Cover ────────────────────────────────────────────────────────────
    var coverEl = selFirst(doc, "div.col-image div.avatar img");
    var cover = "";
    if (coverEl) {
        cover = coverEl.attr("src") || "";
        if (cover && cover.indexOf("http") !== 0) cover = resolveUrl(cover);
    }

    // ─── Author ───────────────────────────────────────────────────────────
    var author = "";
    var authorLi = selFirst(doc, "li.author");
    if (authorLi) {
        var authorVal = selFirst(authorLi, "p.col-xs-10");
        if (authorVal) author = authorVal.text().trim();
    }

    // ─── Status ───────────────────────────────────────────────────────────
    var ongoing = true;
    var statusText = "";
    var statusLi = selFirst(doc, "li.status");
    if (statusLi) {
        var statusVal = selFirst(statusLi, "p.col-xs-10");
        if (statusVal) {
            statusText = statusVal.text().trim();
            if (statusText.indexOf("Hoàn thành") >= 0 || statusText.indexOf("Full") >= 0) {
                ongoing = false;
            }
        }
    }

    // ─── Views ────────────────────────────────────────────────────────────
    var views = "";
    var viewEl = selFirst(doc, "div.col-image div.avatar span.view");
    if (viewEl) views = viewEl.text().trim().replace(/\s+/g, " ");

    // ─── Rating ───────────────────────────────────────────────────────────
    var ratingAvg = "";
    var ratingCount = "";
    var ratingAvgEl = selFirst(doc, "span.rating-average");
    if (ratingAvgEl) ratingAvg = ratingAvgEl.text().trim();
    var ratingCountEl = selFirst(doc, "span.rating-count");
    if (ratingCountEl) ratingCount = ratingCountEl.text().trim();

    // ─── Followers ────────────────────────────────────────────────────────
    var followers = "";
    var followEl = selFirst(doc, "div.follow b");
    if (followEl) followers = followEl.text().trim();

    // ─── Description (chỉ giới thiệu truyện) ─────────────────────────────
    var description = "";
    var descEl = selFirst(doc, "div.detail-content p#summary");
    if (descEl) description = descEl.text().trim();
    if (!description || description === "Updating") {
        description = "";
    }

    // ─── Detail (thông tin) ───────────────────────────────────────────────
    var detailParts = [];
    if (statusText) detailParts.push("Tình trạng: " + statusText);
    if (author && author !== "Đang cập nhật") detailParts.push("Tác giả: " + author);
    if (views) detailParts.push("👁 Lượt xem: " + views);
    if (followers) detailParts.push("🔖 Theo dõi: " + followers);
    if (ratingAvg) {
        var ratingStr = "⭐ Đánh giá: " + ratingAvg + "/5";
        if (ratingCount) ratingStr += " (" + ratingCount + ")";
        detailParts.push(ratingStr);
    }
    var detail = detailParts.join("<br>");

    // ─── Genres ───────────────────────────────────────────────────────────
    var genres = [];
    var genreLinks = doc.select("a.tr-theloai");
    for (var i = 0; i < genreLinks.size(); i++) {
        var gLink = genreLinks.get(i);
        var gName = gLink.text().trim();
        var gHref = gLink.attr("href") || "";
        if (!gName) continue;
        genres.push({
            title: gName,
            input: resolveUrl(gHref),
            script: "gen.js"
        });
    }

    // ─── Suggests ─────────────────────────────────────────────────────────
    var suggests = [];
    if (author && author !== "Đang cập nhật") {
        suggests.push({
            title: "Cùng tác giả: " + author,
            input: BASE_URL + "/tim-truyen?keyword=" + encodeURIComponent(author),
            script: "gen.js"
        });
    }

    // ─── Comments ─────────────────────────────────────────────────────────
    var comments = [];
    if (url) {
        // Find comment count (adapting user's snippet)
        var commentCountEl = selFirst(doc, "#comment-count");
        // Fallback to luottruyen's typical tab count or list count if #comments-count isn't found
        if (!commentCountEl) commentCountEl = selFirst(doc, ".jcountcmt");

        var commentCount = commentCountEl ? commentCountEl.text().trim() : "0";
        comments.push({
            title: "Bình luận (" + commentCount + ")",
            input: url,
            script: "comment.js"
        });
    }

    return Response.success({
        name: name,
        cover: cover,
        host: HOST,
        author: author,
        description: description,
        detail: detail,
        ongoing: ongoing,
        genres: genres,
        suggests: suggests,
        comments: comments
    });
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"search": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://luottruyen7.com";
var HOST = "https://luottruyen7.com";

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

// ─── Helper functions ──────────────────────────────────────────────

function selFirst(el, css) {
    var items = el.select(css);
    return items.size() > 0 ? items.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}

function fetchRetry(url) {
    var res = fetch(url, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(url, FETCH_OPTIONS);
    }
    return res;
}

// ─── Parse story cards from listing pages ──────────────────────────
// Structure: div.items > div.row > div.item > figure
//   .image > a > img  (cover)
//   figcaption > h3 > a  (title + link)
//   figcaption > ul > li.chapter > a  (latest chapter)
function parseItems(doc) {
    var items = [];
    var cards = doc.select("div.items div.item");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);

        // Title & link
        var titleA = selFirst(card, "figcaption h3 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var href = titleA.attr("href") || "";
        if (!name || !href) continue;
        var link = resolveUrl(href);

        // Cover image
        var img = selFirst(card, "div.image a img");
        var cover = "";
        if (img) {
            cover = img.attr("data-original") || img.attr("data-src") || img.attr("src") || "";
            if (cover && cover.indexOf("http") !== 0) {
                cover = resolveUrl(cover);
            }
        }

        // Status (Full badge or default "Đang Ra")
        var status = "Đang Ra";
        var fullLabel = selFirst(card, "span.label-full, span.full, i.icon-full");
        if (fullLabel) {
            status = "Full";
        }

        // Latest chapter
        var chapA = selFirst(card, "figcaption ul li.chapter a");
        var chapText = chapA ? chapA.text().trim() : "";

        // Time
        var timeEl = selFirst(card, "figcaption ul li.chapter i.time");
        var timeText = timeEl ? timeEl.text().trim() : "";

        // Build description: Tình trạng • Chapter • Thời gian
        var desc = status;
        if (chapText) desc += " • " + chapText;
        if (timeText) desc += " • " + timeText;

        items.push({
            name: name,
            cover: cover,
            link: link,
            description: desc,
            host: HOST
        });
    }
    return items;
}

// ─── Pagination: find next page link ───────────────────────────────
function getNextPage(doc, currentPage) {
    var nextPage = String(currentPage + 1);
    // Look for pagination links containing page=N
    var pageLinks = doc.select("ul.pagination a[href]");
    for (var j = 0; j < pageLinks.size(); j++) {
        var ph = pageLinks.get(j).attr("href") || "";
        if (ph.indexOf("page=" + nextPage) >= 0) return nextPage;
    }
    return null;
}



function execute(keyword, page) {
    if (!keyword || keyword.trim().length === 0) return Response.success([]);

    var p = page ? parseInt(page) : 1;
    var url = BASE_URL + "/tim-truyen?keyword=" + encodeURIComponent(keyword.trim()) + "&page=" + p;

    var res = fetchRetry(url);
    if (!res || !res.ok) return Response.success([]);

    var doc = res.html();
    if (!doc) return Response.success([]);

    return Response.success(parseItems(doc), getNextPage(doc, p));
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"toc": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://luottruyen7.com";
var HOST = "https://luottruyen7.com";

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

// ─── Helper functions ──────────────────────────────────────────────

function selFirst(el, css) {
    var items = el.select(css);
    return items.size() > 0 ? items.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}

function fetchRetry(url) {
    var res = fetch(url, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(url, FETCH_OPTIONS);
    }
    return res;
}

// ─── Parse story cards from listing pages ──────────────────────────
// Structure: div.items > div.row > div.item > figure
//   .image > a > img  (cover)
//   figcaption > h3 > a  (title + link)
//   figcaption > ul > li.chapter > a  (latest chapter)
function parseItems(doc) {
    var items = [];
    var cards = doc.select("div.items div.item");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);

        // Title & link
        var titleA = selFirst(card, "figcaption h3 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var href = titleA.attr("href") || "";
        if (!name || !href) continue;
        var link = resolveUrl(href);

        // Cover image
        var img = selFirst(card, "div.image a img");
        var cover = "";
        if (img) {
            cover = img.attr("data-original") || img.attr("data-src") || img.attr("src") || "";
            if (cover && cover.indexOf("http") !== 0) {
                cover = resolveUrl(cover);
            }
        }

        // Status (Full badge or default "Đang Ra")
        var status = "Đang Ra";
        var fullLabel = selFirst(card, "span.label-full, span.full, i.icon-full");
        if (fullLabel) {
            status = "Full";
        }

        // Latest chapter
        var chapA = selFirst(card, "figcaption ul li.chapter a");
        var chapText = chapA ? chapA.text().trim() : "";

        // Time
        var timeEl = selFirst(card, "figcaption ul li.chapter i.time");
        var timeText = timeEl ? timeEl.text().trim() : "";

        // Build description: Tình trạng • Chapter • Thời gian
        var desc = status;
        if (chapText) desc += " • " + chapText;
        if (timeText) desc += " • " + timeText;

        items.push({
            name: name,
            cover: cover,
            link: link,
            description: desc,
            host: HOST
        });
    }
    return items;
}

// ─── Pagination: find next page link ───────────────────────────────
function getNextPage(doc, currentPage) {
    var nextPage = String(currentPage + 1);
    // Look for pagination links containing page=N
    var pageLinks = doc.select("ul.pagination a[href]");
    for (var j = 0; j < pageLinks.size(); j++) {
        var ph = pageLinks.get(j).attr("href") || "";
        if (ph.indexOf("page=" + nextPage) >= 0) return nextPage;
    }
    return null;
}



function execute(url) {
    // Extract StoryID from URL: e.g. /truyen-tranh/ten-truyen-12345 -> "12345"
    var storyId = url.replace(/\/$/, "").split("-").pop();

    // Use POST API like Tachiyomi (much faster than browser)
    var apiUrl = BASE_URL + "/Story/ListChapterByStoryID";

    var res = fetch(apiUrl, {
        method: "POST",
        headers: {
            "User-Agent": FETCH_HEADERS["User-Agent"],
            "Referer": url,
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Accept": "text/html, */*; q=0.01"
        },
        body: "StoryID=" + storyId
    });

    if (!res || !res.ok) {
        // Fallback: try fetching the detail page and parsing chapter list from HTML
        return fallbackToc(url);
    }

    var doc = res.html();
    if (!doc) return fallbackToc(url);

    var chapters = parseChapterList(doc);

    if (chapters.length === 0) {
        // Fallback if POST API returns empty
        return fallbackToc(url);
    }

    // Reverse so oldest chapter is first (Vbook expects ascending order)
    chapters.reverse();
    return Response.success(chapters);
}

// Parse chapter list from HTML fragment (used by both POST API and fallback)
function parseChapterList(doc) {
    var chapters = [];

    // Selectors matching Tachiyomi: li.row:not(.heading)
    var el = doc.select("li.row");

    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);

        // Skip heading row
        var cls = e.attr("class") || "";
        if (cls.indexOf("heading") >= 0) continue;

        // Find chapter link: div.chapter a or just a
        var chapterLink = selFirst(e, "div.chapter a");
        if (!chapterLink) chapterLink = selFirst(e, "a");
        if (!chapterLink) continue;

        var chName = chapterLink.text().trim();
        if (!chName) continue;

        var chapterUrl = chapterLink.attr("href") || "";
        chapterUrl = resolveUrl(chapterUrl);

        chapters.push({
            name: chName,
            url: chapterUrl,
            host: HOST
        });
    }

    return chapters;
}

// Fallback: fetch the full detail page and parse chapter list from embedded HTML
function fallbackToc(url) {
    var res = fetchRetry(url);
    if (!res || !res.ok) return Response.error("Không tải được mục lục");

    var doc = res.html();
    if (!doc) return Response.error("Không parse được HTML");

    var chapters = [];

    // Try multiple selectors for embedded chapter list
    var el = doc.select("#nt_listchapter li.row");
    if (!el || el.size() === 0) {
        el = doc.select(".list-chapter li.row");
    }
    if (!el || el.size() === 0) {
        el = doc.select("#nt_listchapter li");
    }

    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);

        var cls = e.attr("class") || "";
        if (cls.indexOf("heading") >= 0) continue;

        var chapterLink = selFirst(e, ".chapter a");
        if (!chapterLink) chapterLink = selFirst(e, "a");
        if (!chapterLink) continue;

        var chName = chapterLink.text().trim();
        if (!chName) continue;

        var chapterUrl = chapterLink.attr("href") || "";
        chapterUrl = resolveUrl(chapterUrl);

        chapters.push({
            name: chName,
            url: chapterUrl,
            host: HOST
        });
    }

    chapters.reverse();
    return Response.success(chapters);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"chap": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://luottruyen7.com";
var HOST = "https://luottruyen7.com";

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

// ─── Helper functions ──────────────────────────────────────────────

function selFirst(el, css) {
    var items = el.select(css);
    return items.size() > 0 ? items.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}

function fetchRetry(url) {
    var res = fetch(url, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(url, FETCH_OPTIONS);
    }
    return res;
}

// ─── Parse story cards from listing pages ──────────────────────────
// Structure: div.items > div.row > div.item > figure
//   .image > a > img  (cover)
//   figcaption > h3 > a  (title + link)
//   figcaption > ul > li.chapter > a  (latest chapter)
function parseItems(doc) {
    var items = [];
    var cards = doc.select("div.items div.item");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);

        // Title & link
        var titleA = selFirst(card, "figcaption h3 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var href = titleA.attr("href") || "";
        if (!name || !href) continue;
        var link = resolveUrl(href);

        // Cover image
        var img = selFirst(card, "div.image a img");
        var cover = "";
        if (img) {
            cover = img.attr("data-original") || img.attr("data-src") || img.attr("src") || "";
            if (cover && cover.indexOf("http") !== 0) {
                cover = resolveUrl(cover);
            }
        }

        // Status (Full badge or default "Đang Ra")
        var status = "Đang Ra";
        var fullLabel = selFirst(card, "span.label-full, span.full, i.icon-full");
        if (fullLabel) {
            status = "Full";
        }

        // Latest chapter
        var chapA = selFirst(card, "figcaption ul li.chapter a");
        var chapText = chapA ? chapA.text().trim() : "";

        // Time
        var timeEl = selFirst(card, "figcaption ul li.chapter i.time");
        var timeText = timeEl ? timeEl.text().trim() : "";

        // Build description: Tình trạng • Chapter • Thời gian
        var desc = status;
        if (chapText) desc += " • " + chapText;
        if (timeText) desc += " • " + timeText;

        items.push({
            name: name,
            cover: cover,
            link: link,
            description: desc,
            host: HOST
        });
    }
    return items;
}

// ─── Pagination: find next page link ───────────────────────────────
function getNextPage(doc, currentPage) {
    var nextPage = String(currentPage + 1);
    // Look for pagination links containing page=N
    var pageLinks = doc.select("ul.pagination a[href]");
    for (var j = 0; j < pageLinks.size(); j++) {
        var ph = pageLinks.get(j).attr("href") || "";
        if (ph.indexOf("page=" + nextPage) >= 0) return nextPage;
    }
    return null;
}



function execute(url) {
    // Fetch chapter page directly (no browser needed, matching Tachiyomi approach)
    var res = fetch(url, {
        headers: {
            "User-Agent": FETCH_HEADERS["User-Agent"],
            "Referer": BASE_URL + "/",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5"
        }
    });

    if (!res || !res.ok) {
        return Response.error("Không tải được trang chương: " + (res ? res.status : "null"));
    }

    var doc = res.html();
    if (!doc) return Response.error("Không parse được HTML");

    var images = [];
    var seen = {};

    // Primary selector (Tachiyomi: #view-chapter img)
    var imgEls = doc.select("#view-chapter img");

    // Fallback selectors (matching Tachiyomi's fallback chain)
    if (!imgEls || imgEls.size() === 0) {
        imgEls = doc.select(".reading-detail .page-chapter img");
    }
    if (!imgEls || imgEls.size() === 0) {
        imgEls = doc.select(".chapter-content img");
    }
    if (!imgEls || imgEls.size() === 0) {
        imgEls = doc.select(".reading-content img");
    }
    if (!imgEls || imgEls.size() === 0) {
        imgEls = doc.select(".content-chapter img");
    }
    if (!imgEls || imgEls.size() === 0) {
        imgEls = doc.select(".reading-detail .page-chapter img[data-index]");
    }
    if (!imgEls || imgEls.size() === 0) {
        imgEls = doc.select(".box_doc .page-chapter img");
    }
    if (!imgEls || imgEls.size() === 0) {
        imgEls = doc.select(".reading-detail img");
    }

    for (var i = 0; i < imgEls.size(); i++) {
        var img = imgEls.get(i);

        // Try multiple src attributes
        var src = img.attr("src") || "";
        if (!src) src = img.attr("data-src") || "";
        if (!src) src = img.attr("data-original") || "";
        if (!src) src = img.attr("data-cdn") || "";
        if (!src) continue;

        src = src.trim();

        // Skip non-content images
        if (src.indexOf("data:image") >= 0) continue;
        if (src.indexOf("logo") >= 0) continue;
        if (src.indexOf("avatar") >= 0) continue;
        if (src.indexOf("icon") >= 0) continue;
        if (src.indexOf("avata.png") >= 0) continue;
        if (src.indexOf("/Content/") >= 0) continue;
        if (src.indexOf("googleusercontent") >= 0) continue;
        if (src.indexOf("1x1") >= 0) continue;
        if (src.indexOf("blank.") >= 0) continue;

        // Resolve URL
        if (src.indexOf("//") === 0) {
            src = "https:" + src;
        } else if (src.indexOf("http") !== 0) {
            if (src.charAt(0) === "/") {
                src = BASE_URL + src;
            }
        }

        // Deduplicate
        if (seen[src]) continue;
        seen[src] = true;

        images.push(src);
    }

    // If no images found, check for login requirement (matching Tachiyomi)
    if (images.length === 0) {
        var loginHint = selFirst(doc, "a[href*='/Account/Login']");
        if (!loginHint) loginHint = selFirst(doc, "a[href*='/dang-nhap']");
        if (!loginHint) loginHint = selFirst(doc, ".login-page-wrapper");

        if (loginHint) {
            return Response.error("Vui lòng đăng nhập bằng Webview để xem chương này");
        }

        return Response.error("Không tìm thấy ảnh chương");
    }

    return Response.success(images);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"comment": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://luottruyen7.com";
var HOST = "https://luottruyen7.com";

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

// ─── Helper functions ──────────────────────────────────────────────

function selFirst(el, css) {
    var items = el.select(css);
    return items.size() > 0 ? items.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}

function fetchRetry(url) {
    var res = fetch(url, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(url, FETCH_OPTIONS);
    }
    return res;
}

// ─── Parse story cards from listing pages ──────────────────────────
// Structure: div.items > div.row > div.item > figure
//   .image > a > img  (cover)
//   figcaption > h3 > a  (title + link)
//   figcaption > ul > li.chapter > a  (latest chapter)
function parseItems(doc) {
    var items = [];
    var cards = doc.select("div.items div.item");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);

        // Title & link
        var titleA = selFirst(card, "figcaption h3 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var href = titleA.attr("href") || "";
        if (!name || !href) continue;
        var link = resolveUrl(href);

        // Cover image
        var img = selFirst(card, "div.image a img");
        var cover = "";
        if (img) {
            cover = img.attr("data-original") || img.attr("data-src") || img.attr("src") || "";
            if (cover && cover.indexOf("http") !== 0) {
                cover = resolveUrl(cover);
            }
        }

        // Status (Full badge or default "Đang Ra")
        var status = "Đang Ra";
        var fullLabel = selFirst(card, "span.label-full, span.full, i.icon-full");
        if (fullLabel) {
            status = "Full";
        }

        // Latest chapter
        var chapA = selFirst(card, "figcaption ul li.chapter a");
        var chapText = chapA ? chapA.text().trim() : "";

        // Time
        var timeEl = selFirst(card, "figcaption ul li.chapter i.time");
        var timeText = timeEl ? timeEl.text().trim() : "";

        // Build description: Tình trạng • Chapter • Thời gian
        var desc = status;
        if (chapText) desc += " • " + chapText;
        if (timeText) desc += " • " + timeText;

        items.push({
            name: name,
            cover: cover,
            link: link,
            description: desc,
            host: HOST
        });
    }
    return items;
}

// ─── Pagination: find next page link ───────────────────────────────
function getNextPage(doc, currentPage) {
    var nextPage = String(currentPage + 1);
    // Look for pagination links containing page=N
    var pageLinks = doc.select("ul.pagination a[href]");
    for (var j = 0; j < pageLinks.size(); j++) {
        var ph = pageLinks.get(j).attr("href") || "";
        if (ph.indexOf("page=" + nextPage) >= 0) return nextPage;
    }
    return null;
}



/**
 * comment.js — LuotTruyen comment loader
 *
 * Vbook calls execute(input, next) where:
 *   input = detail page URL
 *   next  = null → first load
 *   next  = page number string → load more
 *
 * Comments JS-rendered → cần browser.
 * Có pagination: "Xem thêm" sẽ load trang tiếp theo.
 */
function execute(input, next) {
    var url = resolveUrl(input);
    var pageNum = next ? parseInt(next) : 1;

    var browser = null;
    try {
        browser = Engine.newBrowser();
        browser.setUserAgent(UserAgent.android());
        browser.launch(url, 5);
        browser.callJs("", 3000);

        // Load trang comment cụ thể nếu > 1
        if (pageNum > 1) {
            browser.callJs("story.getPagingCmt(" + pageNum + ", 15)", 2000);
        }

        var doc = browser.html();
        browser.close();
        browser = null;

        var comments = [];

        // Get top-level comment rows
        var topItems = doc.select(".journalItems .journalrow");
        if (!topItems || topItems.size() === 0) {
            topItems = doc.select(".journalrow");
        }

        for (var i = 0; i < topItems.size(); i++) {
            var item = topItems.get(i);

            // Parse the main comment
            var parsed = parseOneComment(item, false);
            if (parsed) comments.push(parsed);

            // Parse replies (inside .jcmt li)
            var replies = item.select(".jcmt li");
            for (var r = 0; r < replies.size(); r++) {
                var reply = replies.get(r);
                var replyCls = reply.attr("class") || "";
                if (replyCls.indexOf("cmteditarea") >= 0) continue;
                if (replyCls.indexOf("cmtbtn") >= 0) continue;

                var parsedReply = parseOneComment(reply, true);
                if (parsedReply) comments.push(parsedReply);
            }
        }

        // ─── Pagination: tìm trang tiếp theo ─────────────────────────────
        var nextCursor = null;
        var activeLi = selFirst(doc, ".commentpager .pagination li.active");
        if (!activeLi) activeLi = selFirst(doc, ".pagination.tr-paging li.active");
        if (activeLi) {
            var allLi = doc.select(".commentpager .pagination li");
            if (!allLi || allLi.size() === 0) {
                allLi = doc.select(".pagination.tr-paging li");
            }
            var foundActive = false;
            for (var j = 0; j < allLi.size(); j++) {
                var li = allLi.get(j);
                var cls = li.attr("class") || "";
                if (cls.indexOf("active") >= 0) {
                    foundActive = true;
                    continue;
                }
                if (foundActive) {
                    nextCursor = String(pageNum + 1);
                    break;
                }
            }
        }

        // Nếu không tìm được pagination nhưng có comments → vẫn cho "xem thêm" trang 2
        if (!nextCursor && pageNum === 1 && comments.length >= 10) {
            nextCursor = "2";
        }

        return Response.success(comments, nextCursor);

    } catch (e) {
        if (browser) {
            try { browser.close(); } catch (err) {}
        }
        return Response.error("Lỗi tải bình luận: " + e.message);
    }
}

function parseOneComment(el, isReply) {
    // Username
    var nameEl = selFirst(el, ".authorname");
    var name = nameEl ? nameEl.text().trim() : "Ẩn danh";

    // Chapter reference: optionally append chapter link text to username
    var chapterEl = selFirst(el, ".cmchapter");
    if (chapterEl) {
        var chapText = chapterEl.text().trim();
        if (chapText) name = name + " - " + chapText; // Using " - " to separate name and chapter
    }

    // Content
    var contentEl = selFirst(el, ".summary");
    var content = contentEl ? contentEl.text().trim() : "";
    if (!content) return null;

    // Time
    var timeEl = selFirst(el, "abbr");
    var timeText = "";
    if (timeEl) {
        var fullTime = timeEl.attr("title") || "";
        timeText = fullTime || timeEl.text().trim();
    }

    // Build description
    var description = timeText;

    // Chapter reference (Moved to Username above)

    // Reply indent
    if (isReply) {
        name = "  ↳ " + name;
    }

    return {
        name: name,
        content: content,
        description: description
    };
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"gen": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://luottruyen7.com";
var HOST = "https://luottruyen7.com";

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

// ─── Helper functions ──────────────────────────────────────────────

function selFirst(el, css) {
    var items = el.select(css);
    return items.size() > 0 ? items.get(0) : null;
}

function resolveUrl(url) {
    if (!url) return BASE_URL;
    if (url.indexOf("http") === 0) return url;
    return BASE_URL + (url.charAt(0) === "/" ? url : "/" + url);
}

function fetchRetry(url) {
    var res = fetch(url, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(url, FETCH_OPTIONS);
    }
    return res;
}

// ─── Parse story cards from listing pages ──────────────────────────
// Structure: div.items > div.row > div.item > figure
//   .image > a > img  (cover)
//   figcaption > h3 > a  (title + link)
//   figcaption > ul > li.chapter > a  (latest chapter)
function parseItems(doc) {
    var items = [];
    var cards = doc.select("div.items div.item");
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);

        // Title & link
        var titleA = selFirst(card, "figcaption h3 a");
        if (!titleA) continue;
        var name = titleA.text().trim();
        var href = titleA.attr("href") || "";
        if (!name || !href) continue;
        var link = resolveUrl(href);

        // Cover image
        var img = selFirst(card, "div.image a img");
        var cover = "";
        if (img) {
            cover = img.attr("data-original") || img.attr("data-src") || img.attr("src") || "";
            if (cover && cover.indexOf("http") !== 0) {
                cover = resolveUrl(cover);
            }
        }

        // Status (Full badge or default "Đang Ra")
        var status = "Đang Ra";
        var fullLabel = selFirst(card, "span.label-full, span.full, i.icon-full");
        if (fullLabel) {
            status = "Full";
        }

        // Latest chapter
        var chapA = selFirst(card, "figcaption ul li.chapter a");
        var chapText = chapA ? chapA.text().trim() : "";

        // Time
        var timeEl = selFirst(card, "figcaption ul li.chapter i.time");
        var timeText = timeEl ? timeEl.text().trim() : "";

        // Build description: Tình trạng • Chapter • Thời gian
        var desc = status;
        if (chapText) desc += " • " + chapText;
        if (timeText) desc += " • " + timeText;

        items.push({
            name: name,
            cover: cover,
            link: link,
            description: desc,
            host: HOST
        });
    }
    return items;
}

// ─── Pagination: find next page link ───────────────────────────────
function getNextPage(doc, currentPage) {
    var nextPage = String(currentPage + 1);
    // Look for pagination links containing page=N
    var pageLinks = doc.select("ul.pagination a[href]");
    for (var j = 0; j < pageLinks.size(); j++) {
        var ph = pageLinks.get(j).attr("href") || "";
        if (ph.indexOf("page=" + nextPage) >= 0) return nextPage;
    }
    return null;
}



// gen.js handles home content tabs and browsing pages
function execute(url, page) {
    var p = page ? parseInt(page) : 1;

    // Build URL with page parameter
    var fetchUrl = url;
    if (fetchUrl.indexOf("?") >= 0) {
        fetchUrl = fetchUrl + "&page=" + p;
    } else {
        fetchUrl = fetchUrl + "?page=" + p;
    }

    var res = fetchRetry(fetchUrl);
    if (!res || !res.ok) return Response.success([], null);

    var doc = res.html();
    if (!doc) return Response.success([], null);

    var items = parseItems(doc);
    var next = getNextPage(doc, p);

    return Response.success(items, next);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
}
} });
