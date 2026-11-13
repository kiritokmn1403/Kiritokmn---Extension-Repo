__register({ META: {"id":"sayhentai","name":"SayHentai -18+","source":"https://sayhentai.cx","type":"comic","locale":"vi","nsfw":true,"version":4,"config":{},"configDefaults":{}}, SCRIPTS: {
"home": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://sayhentai.cx";
var HOST = BASE_URL;

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.7,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

function normalizeSpace(value) {
    return (value || "").replace(/\s+/g, " ").trim();
}

function selectFirst(el, css) {
    var list = el.select(css);
    return list.size() > 0 ? list.get(0) : null;
}

function resolveUrl(url) {
    var value = url || "";
    if (!value) return BASE_URL;
    if (value.indexOf("http://") === 0 || value.indexOf("https://") === 0) return value;
    if (value.indexOf("//") === 0) return "https:" + value;
    return BASE_URL + (value.charAt(0) === "/" ? value : "/" + value);
}

function resolveImageUrl(url) {
    var value = url || "";
    if (!value || value.indexOf("data:") === 0) return "";
    return resolveUrl(value);
}

function fetchRetry(url) {
    var target = resolveUrl(url);
    var res = fetch(target, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(target, FETCH_OPTIONS);
    }
    return res;
}

function buildPagedUrl(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    var target = resolveUrl(url);
    if (!(currentPage > 1)) return target;
    if (/([?&])page=\d+/i.test(target)) {
        return target.replace(/([?&]page=)\d+/i, "$1" + currentPage);
    }
    return target + (target.indexOf("?") >= 0 ? "&" : "?") + "page=" + currentPage;
}

function getNextPage(doc, currentPage) {
    var want = String(currentPage + 1);
    var links = doc.select(".pager a[href], .pager li a[href]");
    for (var i = 0; i < links.size(); i++) {
        if (normalizeSpace(links.get(i).text()) === want) return want;
    }
    return null;
}

function parseListItems(doc) {
    var cards = doc.select(".page-item-detail");
    var items = [];
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleLink = selectFirst(card, "h3 a[href]");
        if (!titleLink) titleLink = selectFirst(card, "a[href*='/truyen-']");
        if (!titleLink) continue;

        var name = normalizeSpace(titleLink.text());
        var link = resolveUrl(titleLink.attr("href") || "");
        if (!name || !link) continue;

        var img = selectFirst(card, "img.img-responsive, img");
        var cover = img ? resolveImageUrl(img.attr("data-src") || img.attr("data-original") || img.attr("src") || "") : "";

        var chapterEl = selectFirst(card, ".chapter");
        var description = chapterEl ? normalizeSpace(chapterEl.text()) : "";

        items.push({
            name: name,
            link: link,
            cover: cover,
            description: description,
            host: HOST
        });
    }
    return items;
}

function cleanGenreTitle(text) {
    var title = normalizeSpace(text);
    title = title.replace(/\s+\d[\d\.]*\s+truyện$/i, "");
    title = title.replace(/\s+\d[\d\.]*\s+truyen$/i, "");
    title = title.replace(/^Truyện hentai\s+/i, "");
    title = title.replace(/^truyen hentai\s+/i, "");
    title = title.replace(/\s+[–-]\s*SayHentai.*$/i, "");
    return normalizeSpace(title);
}

function createGenreEntry(name, href) {
    var title = cleanGenreTitle(name);
    var input = resolveUrl(href);
    if (!title || !input || /\/genre\/?$/i.test(input)) return null;
    return {
        title: title,
        input: input,
        script: "genrecontent.js"
    };
}

function collectGenreEntries(links) {
    var items = [];
    var seen = {};
    for (var i = 0; i < links.size(); i++) {
        var a = links.get(i);
        var entry = createGenreEntry(a.text(), a.attr("href") || "");
        if (!entry || seen[entry.input]) continue;
        seen[entry.input] = true;
        items.push(entry);
    }
    return items;
}

function collectDetailGenres(doc) {
    var links = doc.select(".genres li a[href*='/genre/'], .genres-content a[href*='/genre/'], .summary-content a[href*='/genre/'], .summary_content a[href*='/genre/'], .post-content_item a[href*='/genre/']");
    if (links.size() === 0) {
        links = doc.select("a[href*='/genre/']");
    }
    return collectGenreEntries(links);
}

function listPageResponse(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    if (!(currentPage > 0)) currentPage = 1;

    var res = fetchRetry(buildPagedUrl(url, currentPage));
    if (!res || !res.ok) return Response.error("Khong tai duoc danh sach");

    var doc = res.html();
    if (!doc) return Response.error("Khong doc duoc danh sach");

    var items = parseListItems(doc);
    var next = getNextPage(doc, currentPage);
    return Response.success(items, next);
}


function execute() {
    return Response.success([
        { title: "Cap nhat", input: BASE_URL + "/", script: "homecontent.js" },
        { title: "Truyen full", input: BASE_URL + "/completed", script: "homecontent.js" },
        { title: "Manhwa", input: BASE_URL + "/genre/manhwa", script: "homecontent.js" },
        { title: "Manga", input: BASE_URL + "/genre/manga", script: "homecontent.js" },
        { title: "Manhua", input: BASE_URL + "/genre/manhua", script: "homecontent.js" }
    ]);
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"homecontent": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://sayhentai.cx";
var HOST = BASE_URL;

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.7,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

function normalizeSpace(value) {
    return (value || "").replace(/\s+/g, " ").trim();
}

function selectFirst(el, css) {
    var list = el.select(css);
    return list.size() > 0 ? list.get(0) : null;
}

function resolveUrl(url) {
    var value = url || "";
    if (!value) return BASE_URL;
    if (value.indexOf("http://") === 0 || value.indexOf("https://") === 0) return value;
    if (value.indexOf("//") === 0) return "https:" + value;
    return BASE_URL + (value.charAt(0) === "/" ? value : "/" + value);
}

function resolveImageUrl(url) {
    var value = url || "";
    if (!value || value.indexOf("data:") === 0) return "";
    return resolveUrl(value);
}

function fetchRetry(url) {
    var target = resolveUrl(url);
    var res = fetch(target, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(target, FETCH_OPTIONS);
    }
    return res;
}

function buildPagedUrl(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    var target = resolveUrl(url);
    if (!(currentPage > 1)) return target;
    if (/([?&])page=\d+/i.test(target)) {
        return target.replace(/([?&]page=)\d+/i, "$1" + currentPage);
    }
    return target + (target.indexOf("?") >= 0 ? "&" : "?") + "page=" + currentPage;
}

function getNextPage(doc, currentPage) {
    var want = String(currentPage + 1);
    var links = doc.select(".pager a[href], .pager li a[href]");
    for (var i = 0; i < links.size(); i++) {
        if (normalizeSpace(links.get(i).text()) === want) return want;
    }
    return null;
}

function parseListItems(doc) {
    var cards = doc.select(".page-item-detail");
    var items = [];
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleLink = selectFirst(card, "h3 a[href]");
        if (!titleLink) titleLink = selectFirst(card, "a[href*='/truyen-']");
        if (!titleLink) continue;

        var name = normalizeSpace(titleLink.text());
        var link = resolveUrl(titleLink.attr("href") || "");
        if (!name || !link) continue;

        var img = selectFirst(card, "img.img-responsive, img");
        var cover = img ? resolveImageUrl(img.attr("data-src") || img.attr("data-original") || img.attr("src") || "") : "";

        var chapterEl = selectFirst(card, ".chapter");
        var description = chapterEl ? normalizeSpace(chapterEl.text()) : "";

        items.push({
            name: name,
            link: link,
            cover: cover,
            description: description,
            host: HOST
        });
    }
    return items;
}

function cleanGenreTitle(text) {
    var title = normalizeSpace(text);
    title = title.replace(/\s+\d[\d\.]*\s+truyện$/i, "");
    title = title.replace(/\s+\d[\d\.]*\s+truyen$/i, "");
    title = title.replace(/^Truyện hentai\s+/i, "");
    title = title.replace(/^truyen hentai\s+/i, "");
    title = title.replace(/\s+[–-]\s*SayHentai.*$/i, "");
    return normalizeSpace(title);
}

function createGenreEntry(name, href) {
    var title = cleanGenreTitle(name);
    var input = resolveUrl(href);
    if (!title || !input || /\/genre\/?$/i.test(input)) return null;
    return {
        title: title,
        input: input,
        script: "genrecontent.js"
    };
}

function collectGenreEntries(links) {
    var items = [];
    var seen = {};
    for (var i = 0; i < links.size(); i++) {
        var a = links.get(i);
        var entry = createGenreEntry(a.text(), a.attr("href") || "");
        if (!entry || seen[entry.input]) continue;
        seen[entry.input] = true;
        items.push(entry);
    }
    return items;
}

function collectDetailGenres(doc) {
    var links = doc.select(".genres li a[href*='/genre/'], .genres-content a[href*='/genre/'], .summary-content a[href*='/genre/'], .summary_content a[href*='/genre/'], .post-content_item a[href*='/genre/']");
    if (links.size() === 0) {
        links = doc.select("a[href*='/genre/']");
    }
    return collectGenreEntries(links);
}

function listPageResponse(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    if (!(currentPage > 0)) currentPage = 1;

    var res = fetchRetry(buildPagedUrl(url, currentPage));
    if (!res || !res.ok) return Response.error("Khong tai duoc danh sach");

    var doc = res.html();
    if (!doc) return Response.error("Khong doc duoc danh sach");

    var items = parseListItems(doc);
    var next = getNextPage(doc, currentPage);
    return Response.success(items, next);
}


function execute(url, page) {
    return listPageResponse(url, page);
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"genre": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://sayhentai.cx";
var HOST = BASE_URL;

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.7,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

function normalizeSpace(value) {
    return (value || "").replace(/\s+/g, " ").trim();
}

function selectFirst(el, css) {
    var list = el.select(css);
    return list.size() > 0 ? list.get(0) : null;
}

function resolveUrl(url) {
    var value = url || "";
    if (!value) return BASE_URL;
    if (value.indexOf("http://") === 0 || value.indexOf("https://") === 0) return value;
    if (value.indexOf("//") === 0) return "https:" + value;
    return BASE_URL + (value.charAt(0) === "/" ? value : "/" + value);
}

function resolveImageUrl(url) {
    var value = url || "";
    if (!value || value.indexOf("data:") === 0) return "";
    return resolveUrl(value);
}

function fetchRetry(url) {
    var target = resolveUrl(url);
    var res = fetch(target, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(target, FETCH_OPTIONS);
    }
    return res;
}

function buildPagedUrl(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    var target = resolveUrl(url);
    if (!(currentPage > 1)) return target;
    if (/([?&])page=\d+/i.test(target)) {
        return target.replace(/([?&]page=)\d+/i, "$1" + currentPage);
    }
    return target + (target.indexOf("?") >= 0 ? "&" : "?") + "page=" + currentPage;
}

function getNextPage(doc, currentPage) {
    var want = String(currentPage + 1);
    var links = doc.select(".pager a[href], .pager li a[href]");
    for (var i = 0; i < links.size(); i++) {
        if (normalizeSpace(links.get(i).text()) === want) return want;
    }
    return null;
}

function parseListItems(doc) {
    var cards = doc.select(".page-item-detail");
    var items = [];
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleLink = selectFirst(card, "h3 a[href]");
        if (!titleLink) titleLink = selectFirst(card, "a[href*='/truyen-']");
        if (!titleLink) continue;

        var name = normalizeSpace(titleLink.text());
        var link = resolveUrl(titleLink.attr("href") || "");
        if (!name || !link) continue;

        var img = selectFirst(card, "img.img-responsive, img");
        var cover = img ? resolveImageUrl(img.attr("data-src") || img.attr("data-original") || img.attr("src") || "") : "";

        var chapterEl = selectFirst(card, ".chapter");
        var description = chapterEl ? normalizeSpace(chapterEl.text()) : "";

        items.push({
            name: name,
            link: link,
            cover: cover,
            description: description,
            host: HOST
        });
    }
    return items;
}

function cleanGenreTitle(text) {
    var title = normalizeSpace(text);
    title = title.replace(/\s+\d[\d\.]*\s+truyện$/i, "");
    title = title.replace(/\s+\d[\d\.]*\s+truyen$/i, "");
    title = title.replace(/^Truyện hentai\s+/i, "");
    title = title.replace(/^truyen hentai\s+/i, "");
    title = title.replace(/\s+[–-]\s*SayHentai.*$/i, "");
    return normalizeSpace(title);
}

function createGenreEntry(name, href) {
    var title = cleanGenreTitle(name);
    var input = resolveUrl(href);
    if (!title || !input || /\/genre\/?$/i.test(input)) return null;
    return {
        title: title,
        input: input,
        script: "genrecontent.js"
    };
}

function collectGenreEntries(links) {
    var items = [];
    var seen = {};
    for (var i = 0; i < links.size(); i++) {
        var a = links.get(i);
        var entry = createGenreEntry(a.text(), a.attr("href") || "");
        if (!entry || seen[entry.input]) continue;
        seen[entry.input] = true;
        items.push(entry);
    }
    return items;
}

function collectDetailGenres(doc) {
    var links = doc.select(".genres li a[href*='/genre/'], .genres-content a[href*='/genre/'], .summary-content a[href*='/genre/'], .summary_content a[href*='/genre/'], .post-content_item a[href*='/genre/']");
    if (links.size() === 0) {
        links = doc.select("a[href*='/genre/']");
    }
    return collectGenreEntries(links);
}

function listPageResponse(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    if (!(currentPage > 0)) currentPage = 1;

    var res = fetchRetry(buildPagedUrl(url, currentPage));
    if (!res || !res.ok) return Response.error("Khong tai duoc danh sach");

    var doc = res.html();
    if (!doc) return Response.error("Khong doc duoc danh sach");

    var items = parseListItems(doc);
    var next = getNextPage(doc, currentPage);
    return Response.success(items, next);
}


function execute() {
    var res = fetchRetry(BASE_URL + "/genre");
    if (!res || !res.ok) return Response.success([]);

    var doc = res.html();
    if (!doc) return Response.success([]);

    var links = doc.select("a[href*='/genre/']");
    return Response.success(collectGenreEntries(links));
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"genrecontent": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://sayhentai.cx";
var HOST = BASE_URL;

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.7,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

function normalizeSpace(value) {
    return (value || "").replace(/\s+/g, " ").trim();
}

function selectFirst(el, css) {
    var list = el.select(css);
    return list.size() > 0 ? list.get(0) : null;
}

function resolveUrl(url) {
    var value = url || "";
    if (!value) return BASE_URL;
    if (value.indexOf("http://") === 0 || value.indexOf("https://") === 0) return value;
    if (value.indexOf("//") === 0) return "https:" + value;
    return BASE_URL + (value.charAt(0) === "/" ? value : "/" + value);
}

function resolveImageUrl(url) {
    var value = url || "";
    if (!value || value.indexOf("data:") === 0) return "";
    return resolveUrl(value);
}

function fetchRetry(url) {
    var target = resolveUrl(url);
    var res = fetch(target, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(target, FETCH_OPTIONS);
    }
    return res;
}

function buildPagedUrl(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    var target = resolveUrl(url);
    if (!(currentPage > 1)) return target;
    if (/([?&])page=\d+/i.test(target)) {
        return target.replace(/([?&]page=)\d+/i, "$1" + currentPage);
    }
    return target + (target.indexOf("?") >= 0 ? "&" : "?") + "page=" + currentPage;
}

function getNextPage(doc, currentPage) {
    var want = String(currentPage + 1);
    var links = doc.select(".pager a[href], .pager li a[href]");
    for (var i = 0; i < links.size(); i++) {
        if (normalizeSpace(links.get(i).text()) === want) return want;
    }
    return null;
}

function parseListItems(doc) {
    var cards = doc.select(".page-item-detail");
    var items = [];
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleLink = selectFirst(card, "h3 a[href]");
        if (!titleLink) titleLink = selectFirst(card, "a[href*='/truyen-']");
        if (!titleLink) continue;

        var name = normalizeSpace(titleLink.text());
        var link = resolveUrl(titleLink.attr("href") || "");
        if (!name || !link) continue;

        var img = selectFirst(card, "img.img-responsive, img");
        var cover = img ? resolveImageUrl(img.attr("data-src") || img.attr("data-original") || img.attr("src") || "") : "";

        var chapterEl = selectFirst(card, ".chapter");
        var description = chapterEl ? normalizeSpace(chapterEl.text()) : "";

        items.push({
            name: name,
            link: link,
            cover: cover,
            description: description,
            host: HOST
        });
    }
    return items;
}

function cleanGenreTitle(text) {
    var title = normalizeSpace(text);
    title = title.replace(/\s+\d[\d\.]*\s+truyện$/i, "");
    title = title.replace(/\s+\d[\d\.]*\s+truyen$/i, "");
    title = title.replace(/^Truyện hentai\s+/i, "");
    title = title.replace(/^truyen hentai\s+/i, "");
    title = title.replace(/\s+[–-]\s*SayHentai.*$/i, "");
    return normalizeSpace(title);
}

function createGenreEntry(name, href) {
    var title = cleanGenreTitle(name);
    var input = resolveUrl(href);
    if (!title || !input || /\/genre\/?$/i.test(input)) return null;
    return {
        title: title,
        input: input,
        script: "genrecontent.js"
    };
}

function collectGenreEntries(links) {
    var items = [];
    var seen = {};
    for (var i = 0; i < links.size(); i++) {
        var a = links.get(i);
        var entry = createGenreEntry(a.text(), a.attr("href") || "");
        if (!entry || seen[entry.input]) continue;
        seen[entry.input] = true;
        items.push(entry);
    }
    return items;
}

function collectDetailGenres(doc) {
    var links = doc.select(".genres li a[href*='/genre/'], .genres-content a[href*='/genre/'], .summary-content a[href*='/genre/'], .summary_content a[href*='/genre/'], .post-content_item a[href*='/genre/']");
    if (links.size() === 0) {
        links = doc.select("a[href*='/genre/']");
    }
    return collectGenreEntries(links);
}

function listPageResponse(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    if (!(currentPage > 0)) currentPage = 1;

    var res = fetchRetry(buildPagedUrl(url, currentPage));
    if (!res || !res.ok) return Response.error("Khong tai duoc danh sach");

    var doc = res.html();
    if (!doc) return Response.error("Khong doc duoc danh sach");

    var items = parseListItems(doc);
    var next = getNextPage(doc, currentPage);
    return Response.success(items, next);
}


function execute(url, page) {
    return listPageResponse(url, page);
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"detail": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://sayhentai.cx";
var HOST = BASE_URL;

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.7,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

function normalizeSpace(value) {
    return (value || "").replace(/\s+/g, " ").trim();
}

function selectFirst(el, css) {
    var list = el.select(css);
    return list.size() > 0 ? list.get(0) : null;
}

function resolveUrl(url) {
    var value = url || "";
    if (!value) return BASE_URL;
    if (value.indexOf("http://") === 0 || value.indexOf("https://") === 0) return value;
    if (value.indexOf("//") === 0) return "https:" + value;
    return BASE_URL + (value.charAt(0) === "/" ? value : "/" + value);
}

function resolveImageUrl(url) {
    var value = url || "";
    if (!value || value.indexOf("data:") === 0) return "";
    return resolveUrl(value);
}

function fetchRetry(url) {
    var target = resolveUrl(url);
    var res = fetch(target, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(target, FETCH_OPTIONS);
    }
    return res;
}

function buildPagedUrl(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    var target = resolveUrl(url);
    if (!(currentPage > 1)) return target;
    if (/([?&])page=\d+/i.test(target)) {
        return target.replace(/([?&]page=)\d+/i, "$1" + currentPage);
    }
    return target + (target.indexOf("?") >= 0 ? "&" : "?") + "page=" + currentPage;
}

function getNextPage(doc, currentPage) {
    var want = String(currentPage + 1);
    var links = doc.select(".pager a[href], .pager li a[href]");
    for (var i = 0; i < links.size(); i++) {
        if (normalizeSpace(links.get(i).text()) === want) return want;
    }
    return null;
}

function parseListItems(doc) {
    var cards = doc.select(".page-item-detail");
    var items = [];
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleLink = selectFirst(card, "h3 a[href]");
        if (!titleLink) titleLink = selectFirst(card, "a[href*='/truyen-']");
        if (!titleLink) continue;

        var name = normalizeSpace(titleLink.text());
        var link = resolveUrl(titleLink.attr("href") || "");
        if (!name || !link) continue;

        var img = selectFirst(card, "img.img-responsive, img");
        var cover = img ? resolveImageUrl(img.attr("data-src") || img.attr("data-original") || img.attr("src") || "") : "";

        var chapterEl = selectFirst(card, ".chapter");
        var description = chapterEl ? normalizeSpace(chapterEl.text()) : "";

        items.push({
            name: name,
            link: link,
            cover: cover,
            description: description,
            host: HOST
        });
    }
    return items;
}

function cleanGenreTitle(text) {
    var title = normalizeSpace(text);
    title = title.replace(/\s+\d[\d\.]*\s+truyện$/i, "");
    title = title.replace(/\s+\d[\d\.]*\s+truyen$/i, "");
    title = title.replace(/^Truyện hentai\s+/i, "");
    title = title.replace(/^truyen hentai\s+/i, "");
    title = title.replace(/\s+[–-]\s*SayHentai.*$/i, "");
    return normalizeSpace(title);
}

function createGenreEntry(name, href) {
    var title = cleanGenreTitle(name);
    var input = resolveUrl(href);
    if (!title || !input || /\/genre\/?$/i.test(input)) return null;
    return {
        title: title,
        input: input,
        script: "genrecontent.js"
    };
}

function collectGenreEntries(links) {
    var items = [];
    var seen = {};
    for (var i = 0; i < links.size(); i++) {
        var a = links.get(i);
        var entry = createGenreEntry(a.text(), a.attr("href") || "");
        if (!entry || seen[entry.input]) continue;
        seen[entry.input] = true;
        items.push(entry);
    }
    return items;
}

function collectDetailGenres(doc) {
    var links = doc.select(".genres li a[href*='/genre/'], .genres-content a[href*='/genre/'], .summary-content a[href*='/genre/'], .summary_content a[href*='/genre/'], .post-content_item a[href*='/genre/']");
    if (links.size() === 0) {
        links = doc.select("a[href*='/genre/']");
    }
    return collectGenreEntries(links);
}

function listPageResponse(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    if (!(currentPage > 0)) currentPage = 1;

    var res = fetchRetry(buildPagedUrl(url, currentPage));
    if (!res || !res.ok) return Response.error("Khong tai duoc danh sach");

    var doc = res.html();
    if (!doc) return Response.error("Khong doc duoc danh sach");

    var items = parseListItems(doc);
    var next = getNextPage(doc, currentPage);
    return Response.success(items, next);
}


function execute(url) {
    var res = fetchRetry(url);
    if (!res || !res.ok) return Response.error("Khong tai duoc truyen");

    var doc = res.html();
    if (!doc) return Response.error("Khong doc duoc thong tin truyen");

    var name = normalizeSpace(doc.select("h1").text());
    var coverEl = selectFirst(doc, ".summary_image img, .summary_image img.img-responsive, .post-thumb img");
    var cover = coverEl ? resolveImageUrl(coverEl.attr("data-src") || coverEl.attr("src") || "") : "";

    var author = normalizeSpace(doc.select(".author-content").text());
    var descEl = selectFirst(doc, ".description-summary p, .description-summary");
    var description = descEl ? normalizeSpace(descEl.text()) : "";

    var metaEls = doc.select(".post-content_item .summary-content, .post-content_item .summary-content-right, .summary-content");
    var detailParts = [];
    var seen = {};
    for (var i = 0; i < metaEls.size(); i++) {
        var text = normalizeSpace(metaEls.get(i).text());
        if (!text || seen[text]) continue;
        seen[text] = true;
        detailParts.push(text);
    }
    if (author && !seen["Author: " + author]) {
        detailParts.unshift("Author: " + author);
    }
    var detail = detailParts.join("<br>");

    var statusText = normalizeSpace(doc.select(".post-status .summary-content, .post-status").text());
    var statusValue = (statusText || detail).toLowerCase();
    var ongoing = !(statusValue.indexOf("full") >= 0 || statusValue.indexOf("completed") >= 0 || statusValue.indexOf("hoan thanh") >= 0);

    return Response.success({
        name: name,
        cover: cover,
        author: author || "SayHentai",
        description: description,
        detail: detail,
        genres: collectDetailGenres(doc),
        host: HOST,
        ongoing: ongoing
    });
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"search": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://sayhentai.cx";
var HOST = BASE_URL;

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.7,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

function normalizeSpace(value) {
    return (value || "").replace(/\s+/g, " ").trim();
}

function selectFirst(el, css) {
    var list = el.select(css);
    return list.size() > 0 ? list.get(0) : null;
}

function resolveUrl(url) {
    var value = url || "";
    if (!value) return BASE_URL;
    if (value.indexOf("http://") === 0 || value.indexOf("https://") === 0) return value;
    if (value.indexOf("//") === 0) return "https:" + value;
    return BASE_URL + (value.charAt(0) === "/" ? value : "/" + value);
}

function resolveImageUrl(url) {
    var value = url || "";
    if (!value || value.indexOf("data:") === 0) return "";
    return resolveUrl(value);
}

function fetchRetry(url) {
    var target = resolveUrl(url);
    var res = fetch(target, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(target, FETCH_OPTIONS);
    }
    return res;
}

function buildPagedUrl(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    var target = resolveUrl(url);
    if (!(currentPage > 1)) return target;
    if (/([?&])page=\d+/i.test(target)) {
        return target.replace(/([?&]page=)\d+/i, "$1" + currentPage);
    }
    return target + (target.indexOf("?") >= 0 ? "&" : "?") + "page=" + currentPage;
}

function getNextPage(doc, currentPage) {
    var want = String(currentPage + 1);
    var links = doc.select(".pager a[href], .pager li a[href]");
    for (var i = 0; i < links.size(); i++) {
        if (normalizeSpace(links.get(i).text()) === want) return want;
    }
    return null;
}

function parseListItems(doc) {
    var cards = doc.select(".page-item-detail");
    var items = [];
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleLink = selectFirst(card, "h3 a[href]");
        if (!titleLink) titleLink = selectFirst(card, "a[href*='/truyen-']");
        if (!titleLink) continue;

        var name = normalizeSpace(titleLink.text());
        var link = resolveUrl(titleLink.attr("href") || "");
        if (!name || !link) continue;

        var img = selectFirst(card, "img.img-responsive, img");
        var cover = img ? resolveImageUrl(img.attr("data-src") || img.attr("data-original") || img.attr("src") || "") : "";

        var chapterEl = selectFirst(card, ".chapter");
        var description = chapterEl ? normalizeSpace(chapterEl.text()) : "";

        items.push({
            name: name,
            link: link,
            cover: cover,
            description: description,
            host: HOST
        });
    }
    return items;
}

function cleanGenreTitle(text) {
    var title = normalizeSpace(text);
    title = title.replace(/\s+\d[\d\.]*\s+truyện$/i, "");
    title = title.replace(/\s+\d[\d\.]*\s+truyen$/i, "");
    title = title.replace(/^Truyện hentai\s+/i, "");
    title = title.replace(/^truyen hentai\s+/i, "");
    title = title.replace(/\s+[–-]\s*SayHentai.*$/i, "");
    return normalizeSpace(title);
}

function createGenreEntry(name, href) {
    var title = cleanGenreTitle(name);
    var input = resolveUrl(href);
    if (!title || !input || /\/genre\/?$/i.test(input)) return null;
    return {
        title: title,
        input: input,
        script: "genrecontent.js"
    };
}

function collectGenreEntries(links) {
    var items = [];
    var seen = {};
    for (var i = 0; i < links.size(); i++) {
        var a = links.get(i);
        var entry = createGenreEntry(a.text(), a.attr("href") || "");
        if (!entry || seen[entry.input]) continue;
        seen[entry.input] = true;
        items.push(entry);
    }
    return items;
}

function collectDetailGenres(doc) {
    var links = doc.select(".genres li a[href*='/genre/'], .genres-content a[href*='/genre/'], .summary-content a[href*='/genre/'], .summary_content a[href*='/genre/'], .post-content_item a[href*='/genre/']");
    if (links.size() === 0) {
        links = doc.select("a[href*='/genre/']");
    }
    return collectGenreEntries(links);
}

function listPageResponse(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    if (!(currentPage > 0)) currentPage = 1;

    var res = fetchRetry(buildPagedUrl(url, currentPage));
    if (!res || !res.ok) return Response.error("Khong tai duoc danh sach");

    var doc = res.html();
    if (!doc) return Response.error("Khong doc duoc danh sach");

    var items = parseListItems(doc);
    var next = getNextPage(doc, currentPage);
    return Response.success(items, next);
}


function execute(key, page) {
    var keyword = normalizeSpace(key);
    if (!keyword) return Response.success([], null);

    var currentPage = page ? parseInt(page, 10) : 1;
    if (!(currentPage > 0)) currentPage = 1;

    var searchUrl = BASE_URL + "/search?s=" + encodeURIComponent(keyword);
    var res = fetchRetry(buildPagedUrl(searchUrl, currentPage));
    if (!res || !res.ok) return Response.error("Khong tai duoc ket qua tim kiem");

    var doc = res.html();
    if (!doc) return Response.error("Khong doc duoc ket qua tim kiem");

    var items = parseListItems(doc);
    var next = getNextPage(doc, currentPage);
    return Response.success(items, next);
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"toc": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://sayhentai.cx";
var HOST = BASE_URL;

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.7,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

function normalizeSpace(value) {
    return (value || "").replace(/\s+/g, " ").trim();
}

function selectFirst(el, css) {
    var list = el.select(css);
    return list.size() > 0 ? list.get(0) : null;
}

function resolveUrl(url) {
    var value = url || "";
    if (!value) return BASE_URL;
    if (value.indexOf("http://") === 0 || value.indexOf("https://") === 0) return value;
    if (value.indexOf("//") === 0) return "https:" + value;
    return BASE_URL + (value.charAt(0) === "/" ? value : "/" + value);
}

function resolveImageUrl(url) {
    var value = url || "";
    if (!value || value.indexOf("data:") === 0) return "";
    return resolveUrl(value);
}

function fetchRetry(url) {
    var target = resolveUrl(url);
    var res = fetch(target, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(target, FETCH_OPTIONS);
    }
    return res;
}

function buildPagedUrl(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    var target = resolveUrl(url);
    if (!(currentPage > 1)) return target;
    if (/([?&])page=\d+/i.test(target)) {
        return target.replace(/([?&]page=)\d+/i, "$1" + currentPage);
    }
    return target + (target.indexOf("?") >= 0 ? "&" : "?") + "page=" + currentPage;
}

function getNextPage(doc, currentPage) {
    var want = String(currentPage + 1);
    var links = doc.select(".pager a[href], .pager li a[href]");
    for (var i = 0; i < links.size(); i++) {
        if (normalizeSpace(links.get(i).text()) === want) return want;
    }
    return null;
}

function parseListItems(doc) {
    var cards = doc.select(".page-item-detail");
    var items = [];
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleLink = selectFirst(card, "h3 a[href]");
        if (!titleLink) titleLink = selectFirst(card, "a[href*='/truyen-']");
        if (!titleLink) continue;

        var name = normalizeSpace(titleLink.text());
        var link = resolveUrl(titleLink.attr("href") || "");
        if (!name || !link) continue;

        var img = selectFirst(card, "img.img-responsive, img");
        var cover = img ? resolveImageUrl(img.attr("data-src") || img.attr("data-original") || img.attr("src") || "") : "";

        var chapterEl = selectFirst(card, ".chapter");
        var description = chapterEl ? normalizeSpace(chapterEl.text()) : "";

        items.push({
            name: name,
            link: link,
            cover: cover,
            description: description,
            host: HOST
        });
    }
    return items;
}

function cleanGenreTitle(text) {
    var title = normalizeSpace(text);
    title = title.replace(/\s+\d[\d\.]*\s+truyện$/i, "");
    title = title.replace(/\s+\d[\d\.]*\s+truyen$/i, "");
    title = title.replace(/^Truyện hentai\s+/i, "");
    title = title.replace(/^truyen hentai\s+/i, "");
    title = title.replace(/\s+[–-]\s*SayHentai.*$/i, "");
    return normalizeSpace(title);
}

function createGenreEntry(name, href) {
    var title = cleanGenreTitle(name);
    var input = resolveUrl(href);
    if (!title || !input || /\/genre\/?$/i.test(input)) return null;
    return {
        title: title,
        input: input,
        script: "genrecontent.js"
    };
}

function collectGenreEntries(links) {
    var items = [];
    var seen = {};
    for (var i = 0; i < links.size(); i++) {
        var a = links.get(i);
        var entry = createGenreEntry(a.text(), a.attr("href") || "");
        if (!entry || seen[entry.input]) continue;
        seen[entry.input] = true;
        items.push(entry);
    }
    return items;
}

function collectDetailGenres(doc) {
    var links = doc.select(".genres li a[href*='/genre/'], .genres-content a[href*='/genre/'], .summary-content a[href*='/genre/'], .summary_content a[href*='/genre/'], .post-content_item a[href*='/genre/']");
    if (links.size() === 0) {
        links = doc.select("a[href*='/genre/']");
    }
    return collectGenreEntries(links);
}

function listPageResponse(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    if (!(currentPage > 0)) currentPage = 1;

    var res = fetchRetry(buildPagedUrl(url, currentPage));
    if (!res || !res.ok) return Response.error("Khong tai duoc danh sach");

    var doc = res.html();
    if (!doc) return Response.error("Khong doc duoc danh sach");

    var items = parseListItems(doc);
    var next = getNextPage(doc, currentPage);
    return Response.success(items, next);
}


function execute(url) {
    var res = fetchRetry(url);
    if (!res || !res.ok) return Response.error("Khong tai duoc danh sach chuong");

    var doc = res.html();
    if (!doc) return Response.error("Khong doc duoc danh sach chuong");

    var links = doc.select("ul.box-list-chapter li a[href], .listing-chapters_wrap li a[href], .listing-chapters_wrap a[href]");
    var moreLinks = null;
    var moreEl = selectFirst(doc, ".c-chapter-readmore[data-ajax-url]");
    if (moreEl) {
        var moreUrl = moreEl.attr("data-ajax-url") || "";
        var view = moreEl.attr("data-view") || "";
        if (moreUrl && view) {
            moreUrl += (moreUrl.indexOf("?") >= 0 ? "&" : "?") + "view=" + view;
            var moreRes = fetchRetry(moreUrl);
            if (moreRes && moreRes.ok) {
                var moreDoc = moreRes.html();
                if (moreDoc) moreLinks = moreDoc.select("li.wp-manga-chapter a[href]");
            }
        }
    }

    var items = [];
    var seen = {};
    var linkGroups = [moreLinks, links];
    for (var group = 0; group < linkGroups.length; group++) {
        var groupLinks = linkGroups[group];
        if (!groupLinks) continue;
        for (var i = groupLinks.size() - 1; i >= 0; i--) {
            var a = groupLinks.get(i);
            var chapterUrl = resolveUrl(a.attr("href") || "");
            var name = normalizeSpace(a.text());
            if (!chapterUrl || !name || seen[chapterUrl]) continue;
            seen[chapterUrl] = true;
            items.push({
                name: name,
                url: chapterUrl,
                host: HOST
            });
        }
    }

    if (items.length === 0) return Response.error("Khong tim thay chuong nao");
    return Response.success(items);
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"chap": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://sayhentai.cx";
var HOST = BASE_URL;

var FETCH_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.7,en;q=0.5",
    "Referer": BASE_URL + "/"
};
var FETCH_OPTIONS = { headers: FETCH_HEADERS };

function normalizeSpace(value) {
    return (value || "").replace(/\s+/g, " ").trim();
}

function selectFirst(el, css) {
    var list = el.select(css);
    return list.size() > 0 ? list.get(0) : null;
}

function resolveUrl(url) {
    var value = url || "";
    if (!value) return BASE_URL;
    if (value.indexOf("http://") === 0 || value.indexOf("https://") === 0) return value;
    if (value.indexOf("//") === 0) return "https:" + value;
    return BASE_URL + (value.charAt(0) === "/" ? value : "/" + value);
}

function resolveImageUrl(url) {
    var value = url || "";
    if (!value || value.indexOf("data:") === 0) return "";
    return resolveUrl(value);
}

function fetchRetry(url) {
    var target = resolveUrl(url);
    var res = fetch(target, FETCH_OPTIONS);
    if (!res) return res;
    if (!res.ok && !(res.status >= 400 && res.status < 500)) {
        res = fetch(target, FETCH_OPTIONS);
    }
    return res;
}

function buildPagedUrl(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    var target = resolveUrl(url);
    if (!(currentPage > 1)) return target;
    if (/([?&])page=\d+/i.test(target)) {
        return target.replace(/([?&]page=)\d+/i, "$1" + currentPage);
    }
    return target + (target.indexOf("?") >= 0 ? "&" : "?") + "page=" + currentPage;
}

function getNextPage(doc, currentPage) {
    var want = String(currentPage + 1);
    var links = doc.select(".pager a[href], .pager li a[href]");
    for (var i = 0; i < links.size(); i++) {
        if (normalizeSpace(links.get(i).text()) === want) return want;
    }
    return null;
}

function parseListItems(doc) {
    var cards = doc.select(".page-item-detail");
    var items = [];
    for (var i = 0; i < cards.size(); i++) {
        var card = cards.get(i);
        var titleLink = selectFirst(card, "h3 a[href]");
        if (!titleLink) titleLink = selectFirst(card, "a[href*='/truyen-']");
        if (!titleLink) continue;

        var name = normalizeSpace(titleLink.text());
        var link = resolveUrl(titleLink.attr("href") || "");
        if (!name || !link) continue;

        var img = selectFirst(card, "img.img-responsive, img");
        var cover = img ? resolveImageUrl(img.attr("data-src") || img.attr("data-original") || img.attr("src") || "") : "";

        var chapterEl = selectFirst(card, ".chapter");
        var description = chapterEl ? normalizeSpace(chapterEl.text()) : "";

        items.push({
            name: name,
            link: link,
            cover: cover,
            description: description,
            host: HOST
        });
    }
    return items;
}

function cleanGenreTitle(text) {
    var title = normalizeSpace(text);
    title = title.replace(/\s+\d[\d\.]*\s+truyện$/i, "");
    title = title.replace(/\s+\d[\d\.]*\s+truyen$/i, "");
    title = title.replace(/^Truyện hentai\s+/i, "");
    title = title.replace(/^truyen hentai\s+/i, "");
    title = title.replace(/\s+[–-]\s*SayHentai.*$/i, "");
    return normalizeSpace(title);
}

function createGenreEntry(name, href) {
    var title = cleanGenreTitle(name);
    var input = resolveUrl(href);
    if (!title || !input || /\/genre\/?$/i.test(input)) return null;
    return {
        title: title,
        input: input,
        script: "genrecontent.js"
    };
}

function collectGenreEntries(links) {
    var items = [];
    var seen = {};
    for (var i = 0; i < links.size(); i++) {
        var a = links.get(i);
        var entry = createGenreEntry(a.text(), a.attr("href") || "");
        if (!entry || seen[entry.input]) continue;
        seen[entry.input] = true;
        items.push(entry);
    }
    return items;
}

function collectDetailGenres(doc) {
    var links = doc.select(".genres li a[href*='/genre/'], .genres-content a[href*='/genre/'], .summary-content a[href*='/genre/'], .summary_content a[href*='/genre/'], .post-content_item a[href*='/genre/']");
    if (links.size() === 0) {
        links = doc.select("a[href*='/genre/']");
    }
    return collectGenreEntries(links);
}

function listPageResponse(url, page) {
    var currentPage = page ? parseInt(page, 10) : 1;
    if (!(currentPage > 0)) currentPage = 1;

    var res = fetchRetry(buildPagedUrl(url, currentPage));
    if (!res || !res.ok) return Response.error("Khong tai duoc danh sach");

    var doc = res.html();
    if (!doc) return Response.error("Khong doc duoc danh sach");

    var items = parseListItems(doc);
    var next = getNextPage(doc, currentPage);
    return Response.success(items, next);
}


function execute(url) {
    var res = fetchRetry(url);
    if (!res || !res.ok) return Response.error("Khong tai duoc chuong");

    var doc = res.html();
    if (!doc) return Response.error("Khong doc duoc noi dung chuong");

    var imgs = doc.select("#chapter_content img[id^=image], #chapter_content img, .chapter-content img, .reading-content img");
    if (imgs.size() === 0) return Response.error("Khong tim thay anh chuong");

    var data = [];
    for (var i = 0; i < imgs.size(); i++) {
        var img = imgs.get(i);
        var src = resolveImageUrl(img.attr("data-src") || img.attr("data-original") || img.attr("src") || "");
        if (!src) continue;
        data.push({ link: src });
    }

    if (data.length === 0) return Response.error("Khong tim thay anh chuong");
    return Response.success(data);
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
}
} });
