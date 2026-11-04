__register({ META: {"id":"truyenqq","name":"Truyện QQ","source":"https://truyenqqko.com","type":"comic","locale":"vi_VN","nsfw":false,"version":25,"config":{},"configDefaults":{}}, SCRIPTS: {
"home": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {

return (function () {
function execute() {
    return Response.success([
        {title: "Top Ngày", input: "/top-ngay", script: "gen.js"},
        {title: "Top Tuần", input: "/top-tuan", script: "gen.js"},
        {title: "Top Tháng", input: "/top-thang", script: "gen.js"},
        {title: "Yêu Thích", input: "/truyen-yeu-thich", script: "gen.js"},
        {title: "Mới Cập Nhật", input: "/truyen-moi-cap-nhat", script: "gen.js"},
        {title: "Truyện Mới", input: "/truyen-tranh-moi", script: "gen.js"},
        {title: "Truyện Full", input: "/truyen-hoan-thanh", script: "gen.js"},
        {title: "Truyện Ngẫu Nhiên", input: "/truyen-ngau-nhien", script: "gen.js"}
    ]);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"genre": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

function bypass(url, doc) {
    var cookie = doc.html().match(/document.cookie="(.*?)"/);
    if (cookie) {
        cookie = cookie[1];
        doc = Http.get(url).headers({"Cookie": cookie}).html();
    }
    return doc
}


let BASE_URL = 'https://truyenqqko.com';
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}


function execute() {
    var doc = bypass(BASE_URL, fetch(BASE_URL).html());
    if (!doc) return null;

    var genres = [];
    doc.select(".book_tags_content a[href^=/the-loai/]").forEach(function(e) {
        genres.push({
            input: e.attr("href"),
            title: e.text(),
            script: "gen.js"
        });
    });

    return Response.success(genres);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"detail": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

function bypass(url, doc) {
    var cookie = doc.html().match(/document.cookie="(.*?)"/);
    if (cookie) {
        cookie = cookie[1];
        doc = Http.get(url).headers({"Cookie": cookie}).html();
    }
    return doc
}


let BASE_URL = 'https://truyenqqko.com';
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}


function normalizeCover(url) {
    if (url && url.startsWith("//")) {
        return "https:" + url;
    }
    return url;
}

function buildDetail(doc, name, author) {
    var lines = ["Tên truyện: " + name, "Tác giả: " + (author || "Không rõ")];
    doc.select(".book_info .list-info li").forEach(function (item) {
        var label = item.select(".name").text().replace(/\s+/g, " ").trim();
        var valueNode = item.select("p").last();
        var value = valueNode.html().replace(/\s+/g, " ").trim();

        // Tác giả đã có ở dòng đầu
        if (!label || !value || label === "Tác giả" || label === valueNode.text().replace(/\s+/g, " ").trim()) {
            return;
        }

        lines.push("<b>" + label + ":</b> " + value);
    });

    return lines.join("<br>");
}

function getGenres(doc) {
    var genres = [];
    doc.select(".book_info .list01 a").forEach(function (e) {
        genres.push({
            title: e.text(),
            input: e.attr("href"),
            script: "gen.js"
        });
    });
    return genres;
}

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);

    var doc = bypass(url, Http.get(url).html());
    if (doc) {
        var cover = normalizeCover(doc.select(".book_avatar img").first().attr("src"));
        var status = doc.select(".book_info .status").text().replace(/\s+/g, " ").trim();
        var name = doc.select("h1[itemprop=name]").text();
        var author = doc.select(".book_info .author a.org").first().text();
        return Response.success({
            name: name,
            cover: cover,
            host: BASE_URL,
            author: author,
            description: doc.select("div.story-detail-info").html(),
            detail: buildDetail(doc, name, author),
            ongoing: status.indexOf("Hoàn Thành") === -1,
            genres: getGenres(doc),
            comments: getComments(doc, url)
        });
    }

    return null;
}

function getComments(doc, url) {
    var bookId = firstInputValue(doc, "book_id");
    if (!bookId) bookId = getBookIdFromUrl(url);
    if (!bookId) return [];

    var episodeId = firstInputValue(doc, "episode_id") || "0";
    var teamId = firstInputValue(doc, "team_id") || "1";
    var input = BASE_URL + "/frontend/comment/list?book_id=" + encodeURIComponent(bookId)
        + "&parent_id=0&page={{page}}&episode_id=" + encodeURIComponent(episodeId)
        + "&team_id=" + encodeURIComponent(teamId) + "&referer=" + encodeURIComponent(url);

    return [{
        title: "Bình luận",
        input: input,
        script: "comment.js"
    }];
}

function firstInputValue(doc, id) {
    var el = doc.select("input#" + id).first();
    return el ? ((el.attr("value") || "") + "") : "";
}

function getBookIdFromUrl(url) {
    var match = ((url || "") + "").match(/-(\d+)\/?(?:[?#].*)?$/);
    return match && match[1] ? match[1] : "";
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"search": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

function bypass(url, doc) {
    var cookie = doc.html().match(/document.cookie="(.*?)"/);
    if (cookie) {
        cookie = cookie[1];
        doc = Http.get(url).headers({"Cookie": cookie}).html();
    }
    return doc
}


let BASE_URL = 'https://truyenqqko.com';
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}


function execute(key, page) {
    key = ((key || '') + '').trim();
    if (!key) return Response.success([], null);

    page = page ? (page + '') : '1';
    var url = BASE_URL + '/tim-kiem/trang-' + page + '?q=' + encodeURIComponent(key);
    var res = fetch(url, {
        headers: {
            'Referer': BASE_URL + '/tim-kiem?q=' + encodeURIComponent(key),
            'User-Agent': UserAgent.android()
        }
    });
    if (!res || !res.ok) return Response.error('Search failed: ' + (res ? res.status : 'no response'));

    var doc = bypass(url, res.html());
    if (!doc) return Response.success([], null);

    var data = parseSearchItems(doc);
    var next = parseNextPage(doc, page);
    return Response.success(data, next);
}

function parseSearchItems(doc) {
    var data = [];
    var seen = {};
    var items = doc.select('#main_homepage .list_grid li');
    for (var i = 0; i < items.size(); i++) {
        var item = items.get(i);
        var linkEl = item.select('.book_name a[href]').first();
        if (!linkEl) continue;

        var link = normalizeUrl(linkEl.attr('href') + '');
        if (!link || seen[link]) continue;

        var name = cleanText(linkEl.text() + '');
        if (!name) continue;

        var img = item.select('.book_avatar img').first();
        var cover = img ? normalizeUrl(firstAttr(img, ['src', 'data-src', 'data-original', 'data-fb', 'data-ni'])) : '';
        var chapter = cleanText(item.select('.last_chapter').first().text() + '');
        var otherName = cleanText(item.select('.more-info .title-more-other').first().text() + '');
        var excerpt = cleanText(item.select('.more-info .excerpt').first().text() + '');

        var desc = [];
        if (otherName) desc.push(otherName);
        if (chapter) desc.push(chapter);
        if (excerpt) desc.push(excerpt);

        seen[link] = true;
        data.push({
            name: name,
            link: link,
            description: desc.join(' · '),
            cover: cover,
            host: BASE_URL
        });
    }
    return data;
}

function parseNextPage(doc, page) {
    var current = parseInt(page || '1', 10);
    if (isNaN(current)) current = 1;

    var links = doc.select('.page_redirect a[href]');
    var next = null;
    for (var i = 0; i < links.size(); i++) {
        var href = (links.get(i).attr('href') || '') + '';
        var match = href.match(/\/tim-kiem\/trang-(\d+)/);
        if (!match || !match[1]) continue;
        var value = parseInt(match[1], 10);
        if (!isNaN(value) && value > current && (next === null || value < next)) next = value;
    }
    return next !== null ? String(next) : null;
}

function firstAttr(el, names) {
    for (var i = 0; i < names.length; i++) {
        var value = (el.attr(names[i]) || '') + '';
        if (value && value.indexOf('data:image/') !== 0) return value;
    }
    return '';
}

function normalizeUrl(url) {
    url = ((url || '') + '').trim();
    if (!url) return '';
    if (url.indexOf('//') === 0) return 'https:' + url;
    if (/^https?:\/\//i.test(url)) return url;
    if (url.charAt(0) === '/') return BASE_URL + url;
    return BASE_URL + '/' + url;
}

function cleanText(text) {
    return ((text || '') + '').replace(/\s+/g, ' ').trim();
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"toc": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

function bypass(url, doc) {
    var cookie = doc.html().match(/document.cookie="(.*?)"/);
    if (cookie) {
        cookie = cookie[1];
        doc = Http.get(url).headers({"Cookie": cookie}).html();
    }
    return doc
}


let BASE_URL = 'https://truyenqqko.com';
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);

    var doc = bypass(url, Http.get(url).html());
    if(doc) {
        var list = [];
        var el = doc.select(".works-chapter-list a");
        for (var i = el.size() - 1; i >= 0; i--) {
            var e = el.get(i);
            list.push({
                name: e.text(),
                url: e.attr("href"),
                host: BASE_URL,
            });
        }
        return Response.success(list);
    }

    return null;
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"chap": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

function bypass(url, doc) {
    var cookie = doc.html().match(/document.cookie="(.*?)"/);
    if (cookie) {
        cookie = cookie[1];
        doc = Http.get(url).headers({"Cookie": cookie}).html();
    }
    return doc
}


let BASE_URL = 'https://truyenqqko.com';
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}


function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let doc = bypass(url, fetch(url).html());
    if (doc) {
        let imgs = doc.select(".chapter_content img.lazy");
        let data = [];
        for (let i = 0; i < imgs.size(); i++) {
            let e = imgs.get(i);
            let link = e.attr("data-original")
            if (link !== undefined) {
                if (link.indexOf("mangaqq.net") > -1 || link.indexOf("cdnqq.xyz") > -1) {
                    link = link.replace("mangaqq.net", "i200.truyenvua.com");
                    link = link.replace("cdnqq.xyz", "i200.truyenvua.com");
                } else if (link.indexOf("mangaqq.com") > -1) {
                    link = link.replace("mangaqq.com", "i216.truyenvua.com");
                } else if (link.indexOf("trangshop.net") > -1 || link.indexOf("photruyen.com") > -1 || link.indexOf("tintruyen.com") > -1) {
                    link = link.replace("photruyen.com", "i109.truyenvua.com");
                    link = link.replace("tintruyen.com", "i109.truyenvua.com");
                    link = link.replace("trangshop.net", "i109.truyenvua.com");
                } else if (link.indexOf("tintruyen.net") > -1) {
                    link = link.replace("//tintruyen.net", "//i138.truyenvua.com");
                    link = link.replace("//i125.tintruyen.net", "//i125.truyenvua.com");
                } else if (link.indexOf("qqtaku.com") > -1) {
                    link = link.replace("qqtaku.com", "i125.truyenvua.com");
                }
            }
            data.push({
                link: e.attr("src"),
                fallback: [link]
            });
        }
        return Response.success(data);
    }
    return null;
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"comment": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

let BASE_URL = 'https://truyenqqko.com';
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}


function execute(input, next) {
    var page = next || '1';
    var url = input.replace('{{page}}', page);
    var endpoint = url.split('?')[0];
    var params = parseParams(url);
    var referer = params.referer || BASE_URL;

    var body = 'book_id=' + encodeURIComponent(params.book_id || '')
        + '&parent_id=' + encodeURIComponent(params.parent_id || '0')
        + '&page=' + encodeURIComponent(params.page || page)
        + '&episode_id=' + encodeURIComponent(params.episode_id || '0')
        + '&team_id=' + encodeURIComponent(params.team_id || '1');

    var res = fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',
            'Referer': referer,
            'User-Agent': UserAgent.android()
        },
        body: body
    });

    if (!res || !res.ok) return Response.error('Cannot load comments: ' + (res ? res.status : 'no response'));

    var html = res.text() + '';
    if (!html) return Response.success([], null);

    var doc = Html.parse('<html><body><div class="list-comment">' + html + '</div></body></html>');
    var data = parseComments(doc);
    var nextPage = parseNextPage(doc, page);
    return Response.success(data, nextPage);
}

function parseComments(doc) {
    var data = [];
    var comments = doc.select('article.comment-main-level');
    for (var i = 0; i < comments.size(); i++) {
        var item = comments.get(i);
        if (hasClass(item, 'parent_0')) {
            var comment = buildComment(item);
            if (comment.content) data.push(comment);
        }
    }
    return data;
}

function buildComment(item) {
    var name = cleanText(item.select('.item-comment strong[class*=name_]').first().text() + '');
    if (!name) name = cleanText(item.select('.item-comment strong').first().text() + '');
    if (!name) name = 'Ẩn danh';

    var contentEl = item.select('.outline-content-comment .content-comment').first();
    var content = contentEl ? cleanCommentHtml(contentEl.html() + '') : '';

    var replies = item.select('article.info-comment');
    for (var i = 0; i < replies.size(); i++) {
        var reply = replies.get(i);
        if (hasClass(reply, 'parent_0')) continue;
        var replyName = cleanText(reply.select('.item-comment strong[class*=name_]').first().text() + '');
        if (!replyName) replyName = cleanText(reply.select('.item-comment strong').first().text() + '');
        var replyContentEl = reply.select('.outline-content-comment .content-comment').first();
        var replyContent = replyContentEl ? cleanCommentHtml(replyContentEl.html() + '') : '';
        if (replyContent) {
            content += '<br><small>' + escapeHtml(replyName || 'Ẩn danh') + ': ' + replyContent + '</small>';
        }
    }

    return {
        name: name,
        content: content,
        description: buildDescription(item)
    };
}

function buildDescription(item) {
    var parts = [];
    var title = cleanText(item.select('.title-user-comment').first().text() + '');
    var likes = cleanText(item.select('.total-like-comment').first().text() + '');
    var time = cleanText(item.select('.action-comment .time').first().text() + '');
    if (title) parts.push(title);
    if (time) parts.push(time);
    if (likes) parts.push('Thích: ' + likes);
    return parts.join(' · ');
}

function parseNextPage(doc, page) {
    var pages = doc.select('.page_redirect p[onclick]');
    var current = parseInt(page || '1', 10);
    if (isNaN(current)) current = 1;

    var next = null;
    for (var i = 0; i < pages.size(); i++) {
        var onclick = (pages.get(i).attr('onclick') || '') + '';
        var match = onclick.match(/loadComment\((\d+)\)/);
        if (!match || !match[1]) continue;
        var value = parseInt(match[1], 10);
        if (!isNaN(value) && value > current && (next === null || value < next)) next = value;
    }
    return next !== null ? String(next) : null;
}

function cleanCommentHtml(html) {
    html = ((html || '') + '').replace(/<script[\s\S]*?<\/script>/gi, '');
    html = html.replace(/<strong>\s*<\/strong>\s*/gi, '');
    html = html.replace(/<img([^>]*?)src=["']data:image\/[^"']*["']([^>]*?)data-src=["']([^"']+)["']([^>]*)>/gi, '<img$1src="$3"$2data-src="$3"$4>');
    html = html.replace(/\s+/g, ' ').trim();
    return html;
}

function hasClass(el, className) {
    var cls = ' ' + ((el.attr('class') || '') + '') + ' ';
    return cls.indexOf(' ' + className + ' ') >= 0;
}

function parseParams(url) {
    var out = {};
    var index = url.indexOf('?');
    if (index < 0) return out;
    var query = url.substring(index + 1);
    var parts = query.split('&');
    for (var i = 0; i < parts.length; i++) {
        var pair = parts[i].split('=');
        if (!pair[0]) continue;
        out[decodeURIComponent(pair[0])] = decodeURIComponent((pair.slice(1).join('=') || '').replace(/\+/g, ' '));
    }
    return out;
}

function cleanText(text) {
    return ((text || '') + '').replace(/\s+/g, ' ').trim();
}

function escapeHtml(text) {
    text = (text || '') + '';
    return text.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"gen": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

function bypass(url, doc) {
    var cookie = doc.html().match(/document.cookie="(.*?)"/);
    if (cookie) {
        cookie = cookie[1];
        doc = Http.get(url).headers({"Cookie": cookie}).html();
    }
    return doc
}


let BASE_URL = 'https://truyenqqko.com';
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}

function execute(url, page) {
    if (!page) page = '1';
    url = url.replace(/\/$/, "") + "/trang-" + page;
    var requestUrl = BASE_URL + url;
    var doc = bypass(requestUrl, fetch(requestUrl).html());

    if (doc) {
        var novelList = [];
        var next = doc.select(".page_redirect").select("a:has(p.active) + a").last().text();
        doc.select("#main_homepage .list_grid li").forEach(e => {
            var cover = e.select(".book_avatar img").attr("src");
            if (cover.startsWith("//")) {
                cover = "https:" + cover;
            }
            novelList.push({
                name: e.select(".book_name").text(),
                link: e.select(".book_name a").first().attr("href"),
                description: e.select(".last_chapter").text(),
                cover: cover,
                host: BASE_URL
            });
        });

        return Response.success(novelList, next);
    }

    return null;
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
}
} });
