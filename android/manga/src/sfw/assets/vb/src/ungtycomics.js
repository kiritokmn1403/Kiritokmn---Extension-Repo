__register({ META: {"id":"ungtycomics","name":"Ưng Tỷ Comics","source":"https://ungtycomicseo.com/","type":"comic","locale":"vi_VN","nsfw":false,"version":1,"config":{},"configDefaults":{}}, SCRIPTS: {
"home": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {

return (function () {
function execute() {
        return Response.success(
[
        {
            "input": "/truyen-tranh",
            "title": "Truyện Mới",
            "script": "gen.js"
        },
        {
            "input": "/full-tron-bo.html",
            "title": "Truyện Full",
            "script": "gen.js"
        },
        {
            "input": "/dam-my.html",
            "title": "Đam Mỹ",
            "script": "gen.js"
        },
        {
            "input": "/manhwa.html",
            "title": "Manhwa",
            "script": "gen.js"
        },
]
    
    );
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"detail": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

let BASE_URL = "https://ungtycomicseo.com";
if (typeof host !== "undefined") {
    BASE_URL = host;
}

function execute(url) {
    //let BASE_URL = "https://ungtycomicsnay.com";
    const match = url.match(/\/[^\/]+\.html/);
    url = BASE_URL + match[0];
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let name = doc.select(".title-heading").text();
        let cover = doc.select('.comics-thumbnail img').attr('src');
        const el = doc.select(".comics-info .meta_item");
        
        let author = "Ưng Tỷ Comics";
        let ongoing = false;
        let detail = `Ngày cập nhật: ${doc.select(".comics-info .meta .updated").text()}<br>Lượt xem: ${doc.select(".comics-info .meta .viewer").text().trim()}<br>`;
        for (let i=0; i < el.size(); i++) {
            let e = el.get(i);
            // console.log(e.text());
            if (e.text().includes("Đang tiến hành")) ongoing = true;
            detail += e.select(".meta_label").text().trim() + " " + e.select(".meta_info").text() + "<br>";
        }
        let description = doc.select(".structure").text().replace(name, "").trim();
        return Response.success({
            name: name,
            cover: cover,
            author: author,
            detail: detail,
            host: BASE_URL,
            description: description,
            ongoing: ongoing,
        });
    }
    return null;
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"genre": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {

return (function () {
function execute() {
        return Response.success(
[
        {
            "input": "/gioi-giai-tri.html",
            "title": "Giới giải trí",
            "script": "gen.js"
        },
        {
            "input": "/ngon-tinh.html",
            "title": "Ngôn Tình",
            "script": "gen.js"
        },
        {
            "input": "/co-trang.html",
            "title": "Cổ Trang",
            "script": "gen.js"
        },
        {
            "input": "/lang-man.html",
            "title": "Lãng Mạn",
            "script": "gen.js"
        },
        {
            "input": "/dam-my.html",
            "title": "Đam Mỹ",
            "script": "gen.js"
        },
        {
            "input": "/boys-love.html",
            "title": "Boys Love",
            "script": "gen.js"
        },
        {
            "input": "/manhua.html",
            "title": "Manhua",
            "script": "gen.js"
        },
        {
            "input": "/romance.html",
            "title": "Romance",
            "script": "gen.js"
        },
        {
            "input": "/nguoc.html",
            "title": "Ngược",
            "script": "gen.js"
        },
        {
            "input": "/sung.html",
            "title": "Sủng",
            "script": "gen.js"
        },
        {
            "input": "/cung-dau.html",
            "title": "Cung Đấu",
            "script": "gen.js"
        },
        {
            "input": "/drama.html",
            "title": "Drama",
            "script": "gen.js"
        },
        {
            "input": "/trinh-tham.html",
            "title": "Trinh Thám",
            "script": "gen.js"
        },
        {
            "input": "/hoc-duong.html",
            "title": "Học Đường",
            "script": "gen.js"
        },
        {
            "input": "/xuyen-khong.html",
            "title": "Xuyên Không",
            "script": "gen.js"
        },
        {
            "input": "/trong-sinh.html",
            "title": "Trọng Sinh",
            "script": "gen.js"
        },
        {
            "input": "/school-life.html",
            "title": "School Life",
            "script": "gen.js"
        },
        {
            "input": "/hien-dai.html",
            "title": "Hiện Đại",
            "script": "gen.js"
        },
        {
            "input": "/vong-du.html",
            "title": "Võng Du",
            "script": "gen.js"
        },
        {
            "input": "/bao-thu.html",
            "title": "Báo Thù",
            "script": "gen.js"
        },
        {
            "input": "/tong-tai.html",
            "title": "Tổng Tài",
            "script": "gen.js"
        },
        {
            "input": "/abo.html",
            "title": "ABO",
            "script": "gen.js"
        },
        {
            "input": "/truyen-chu.html",
            "title": "Truyện Chữ",
            "script": "gen.js"
        },
        {
            "input": "/hai-huoc.html",
            "title": "Hài Hước",
            "script": "gen.js"
        },
        {
            "input": "/nien-ha.html",
            "title": "Niên Hạ",
            "script": "gen.js"
        },
        {
            "input": "/hien-thuc.html",
            "title": "Hiện Thực",
            "script": "gen.js"
        },
        {
            "input": "/xuyen-nhanh.html",
            "title": "Xuyên Nhanh",
            "script": "gen.js"
        },
        {
            "input": "/su-do-luyen.html",
            "title": "Sư Đồ Luyến",
            "script": "gen.js"
        },
        {
            "input": "/he-thong.html",
            "title": "Hệ Thống",
            "script": "gen.js"
        },
        {
            "input": "/huyet-toc.html",
            "title": "Huyết Tộc",
            "script": "gen.js"
        },
        {
            "input": "/hac-bang.html",
            "title": "Hắc Bang",
            "script": "gen.js"
        },
        {
            "input": "/full-tron-bo.html",
            "title": "Full Trọn Bộ",
            "script": "gen.js"
        },
        {
            "input": "/pha-an.html",
            "title": "Phá Án",
            "script": "gen.js"
        },
        {
            "input": "/linh-di.html",
            "title": "Linh Dị",
            "script": "gen.js"
        },
        {
            "input": "/tu-tien.html",
            "title": "Tu Tiên",
            "script": "gen.js"
        },
        {
            "input": "/esports.html",
            "title": "eSports",
            "script": "gen.js"
        },
        {
            "input": "/manhwa.html",
            "title": "Manhwa",
            "script": "gen.js"
        },
        {
            "input": "/19.html",
            "title": "19+",
            "script": "gen.js"
        },
        {
            "input": "/yaoi-bl.html",
            "title": "Yaoi (BL)",
            "script": "gen.js"
        },
        {
            "input": "/bl.html",
            "title": "BL",
            "script": "gen.js"
        }


]
    
    );
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"search": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

let BASE_URL = "https://ungtycomicseo.com";
if (typeof host !== "undefined") {
    BASE_URL = host;
}

function execute(key, page) {
    if (!page) page = "1";
    //let BASE_URL = "https://ungtycomicsnay.com";
    let response = fetch(BASE_URL + "/search?query_string=" + key + "&page=" + page);
    if (response.ok) {
        const doc = response.html();
        let els = doc.select('[class="pagination customer-pagination"] li');
        let nextPage = null;
        let bool = false;
        for (let i=0; i<els.size(); i++) {
            let el = els.get(i);
            let ss = el.text().trim()
            if (ss && bool) {
                nextPage = ss;
                break;
            }
            if (ss == page) bool = true;
        }
        let data = [];
        //console.log(el.html());
        let nameHtml = doc.select('[class="row list-comics"] .content-title');
        let descriptionHtml = doc.select('[class="row list-comics"] .chapter-item');
        let imageHtml = doc.select('[class="row list-comics"] .content-image');
        for (let i=0; i<nameHtml.size(); i++) {
            let name = nameHtml.get(i).text().trim();
            let cover = imageHtml.get(i).select("img").attr("data-src");
            let link = nameHtml.get(i).select("a").attr("href");
            let description = descriptionHtml.get(i).select("a").text().trim() + " · " + descriptionHtml.get(i).select("span").last().text().trim();
            data.push({
                name: name,
                link: link,
                cover: cover,
                description: description,
                host: BASE_URL
            });
        }

        return Response.success(data, nextPage)
    }
    return Response.error("Kiểm tra lại?")
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"toc": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

let BASE_URL = "https://ungtycomicseo.com";
if (typeof host !== "undefined") {
    BASE_URL = host;
}

function execute(url) {
    //let BASE_URL = "https://ungtycomicsnay.com";
    let page;
    let data = [];
    while(true) {
        if (!page) page = "1";
        const match = url.match(/\/[^\/]+\.html/);
        url = BASE_URL + match[0] + "?page=" + page;
        let response = fetch(url);
        if (response.ok) {
            let doc = response.html();
            let els = doc.select('[class="pagination customer-pagination"] li');
            let nextPage = null;
            let bool = false;
            for (let i=0; i<els.size(); i++) {
                let el = els.get(i);
                let ss = el.text().trim()
                if (ss && bool) {
                    nextPage = ss;
                    break;
                }
                if (ss == page) bool = true;
            }
            doc.select('[class="row cnt-list-chapter"] .item-right .episode-title a').forEach(e => {
                data.unshift({
                    name: e.text().trim(),
                    url: e.attr("href"),
                    host: BASE_URL
                });
            });
            if (nextPage === null) {
                break;
            } else {
                page = nextPage;
            }
        } else {
            return Response.error("Lỗi: " + response.status)
        }
    }
    if (data) return Response.success(data);
    return null;
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"chap": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

let BASE_URL = "https://ungtycomicseo.com";
if (typeof host !== "undefined") {
    BASE_URL = host;
}

function execute(url) {
    //let BASE_URL = "https://ungtycomicsnay.com";
    const match = url.match(/\/[^\/]+\/[^\/]+\.html/);
    url = BASE_URL + match[0];
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let data = [];

        doc.select('.content-container img').forEach(e => {
            let img = e.attr("data-src").trim();
            if (img) {
                data.push(img);
            }
        })
        return Response.success(data);
    }
    return null;
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"gen": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

let BASE_URL = "https://ungtycomicseo.com";
if (typeof host !== "undefined") {
    BASE_URL = host;
}

function execute(url, page) {
    if (!page) page = "1";
    //let BASE_URL = "https://ungtycomicsnay.com";
    const newUrl = BASE_URL + url + "?page=" + page;
    const response = fetch(newUrl);
    if (response.ok) {
        const doc = response.html();
        let els = doc.select('[class="pagination customer-pagination"] li');
        let nextPage = null;
        let bool = false;
        for (let i=0; i<els.size(); i++) {
            let el = els.get(i);
            let ss = el.text().trim()
            if (ss && bool) {
                nextPage = ss;
                break;
            }
            if (ss == page) bool = true;
        }
        let data = [];
        //console.log(el.html());
        let nameHtml = doc.select('[class="row list-comics"] .content-title');
        let descriptionHtml = doc.select('[class="row list-comics"] .chapter-item');
        let imageHtml = doc.select('[class="row list-comics"] .content-image');
        for (let i=0; i<nameHtml.size(); i++) {
            let name = nameHtml.get(i).text().trim();
            let cover = imageHtml.get(i).select("img").attr("data-src");
            let link = nameHtml.get(i).select("a").attr("href");
            let description = descriptionHtml.get(i).select("a").text().trim() + " · " + descriptionHtml.get(i).select("span").last().text().trim();
            data.push({
                name: name,
                link: link,
                cover: cover,
                description: description,
                host: BASE_URL
            });
        }

        return Response.success(data, nextPage)
    }
    return Response.error("Kiểm tra lại?")
}
return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
}
} });
