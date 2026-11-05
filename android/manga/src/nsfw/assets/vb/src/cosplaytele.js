__register({ META: {"id":"cosplaytele","name":"Cosplaytele","source":"https://cosplaytele.com","type":"comic","locale":"en","nsfw":true,"version":5,"config":{},"configDefaults":{}}, SCRIPTS: {
"home": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

const BASE_URL = "https://cosplaytele.com";


function execute() {
  return Response.success([
    {
      title: "Latest",
      input: "/",
      script: "gen.js",
    },
    {
      input: "/24-hours",
      title: "Top View 1 Day",
      script: "top-view.js",
    },
    {
      input: "/3-day",
      title: "Top View 3 Day",
      script: "top-view.js",
    },
    {
      input: "/7-day",
      title: "Top View 7 Day",
      script: "top-view.js",
    },
    {
      input: "/15-day",
      title: "Top View 15 Day",
      script: "top-view.js",
    },
  ]);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"genre": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

const BASE_URL = "https://cosplaytele.com";


function execute() {
  // // Build genre list from tags + specific menus (Video Cosplay + Level Cosplay)
  // let res = fetch(BASE_URL + '/explore-categories/', { method: 'GET' });
  // if (!res.ok) {
  //     return Response.error('Failed to load explore-categories');
  // }
  // let doc = res.html();
  // let genres = [];
  // let seen = {};

  // function pushAnchor(a) {
  //     if (!a) return;
  //     let href = a.attr('href');
  //     if (!href) return;
  //     href = href.replace(BASE_URL, '');
  //     if (!href.startsWith('/')) href = '/' + href;
  //     // Only accept tags and the specified categories
  //     if (!(href.indexOf('/tag/') === 0 || href.indexOf('/category/video-cosplay/') === 0 || href.indexOf('/category/cosplay-ero/') === 0 || href.indexOf('/category/nude/') === 0)) {
  //         return;
  //     }
  //     if (seen[href]) return;
  //     seen[href] = true;
  //     // Prefer <strong> text when present (especially for tag links)
  //     let strongEl = a.select('strong').first();
  //     let title = (href.indexOf('/tag/') === 0 && strongEl) ? strongEl.text() : a.text();
  //     if (!title) title = href;
  //     genres.push({ title: title, input: href, script: 'gen.js' });
  // }

  // // From page content (tags)
  // doc.select('a[href*="/tag/"]').forEach(pushAnchor);

  // // From header menus (Video Cosplay + Level Cosplay submenu)
  // // Using broad selection on the same document since header is present
  // doc.select('a[href*="/category/video-cosplay/"]').forEach(pushAnchor);
  // doc.select('a[href*="/category/cosplay-ero/"]').forEach(pushAnchor);
  // doc.select('a[href*="/category/nude/"]').forEach(pushAnchor);

  let genres = [
    {
      input: "/tag/wuthering-waves/",
      title: "Wuthering Waves",
      script: "gen.js",
    },
    {
      input: "/tag/honkai-star-rail/",
      title: "Honkai Star Rail",
      script: "gen.js",
    },
    {
      input: "/tag/nikke/",
      title: "Nikke",
      script: "gen.js",
    },
    {
      input: "/tag/blue-archive/",
      title: "Blue Archive",
      script: "gen.js",
    },
    {
      input: "/tag/league-of-legends/",
      title: "League of Legends",
      script: "gen.js",
    },
    {
      input: "/tag/final-fantasy/",
      title: "Final Fantasy",
      script: "gen.js",
    },
    {
      input: "/tag/arknights/",
      title: "Arknights",
      script: "gen.js",
    },
    {
      input: "/tag/valorant/",
      title: "Valorant",
      script: "gen.js",
    },
    {
      input: "/tag/rezero/",
      title: "Rezero",
      script: "gen.js",
    },
    {
      input: "/tag/nierautomata/",
      title: "NieR Automata",
      script: "gen.js",
    },
    {
      input: "/tag/sono-bisque-doll/",
      title: "Sono Bisque Doll",
      script: "gen.js",
    },
    {
      input: "/tag/spy-x-family/",
      title: "Spy x Family",
      script: "gen.js",
    },
    {
      input: "/tag/dead-or-alive/",
      title: "Dead or Alive",
      script: "gen.js",
    },
    {
      input: "/tag/chainsaw-man/",
      title: "Chainsaw Man",
      script: "gen.js",
    },
    {
      input: "/tag/kimetsu-no-yaiba/",
      title: "Kimetsu no Yaiba",
      script: "gen.js",
    },
    {
      input: "/tag/evangelion/",
      title: "Evangelion",
      script: "gen.js",
    },
    {
      input: "/tag/bocchi-the-rock/",
      title: "Bocchi the Rock",
      script: "gen.js",
    },
    {
      input: "/tag/overlord/",
      title: "Overlord",
      script: "gen.js",
    },
    {
      input: "/tag/maid/",
      title: "Maid",
      script: "gen.js",
    },
    {
      input: "/tag/school-girl/",
      title: "School Girl",
      script: "gen.js",
    },
    {
      input: "/tag/elf/",
      title: "Elf",
      script: "gen.js",
    },
    {
      input: "/tag/nun/",
      title: "Nun",
      script: "gen.js",
    },
    {
      input: "/tag/nurse/",
      title: "Nurse",
      script: "gen.js",
    },
    {
      input: "/tag/miko/",
      title: "Miko",
      script: "gen.js",
    },
    {
      input: "/tag/cheongsam/",
      title: "Cheongsam",
      script: "gen.js",
    },
    {
      input: "/tag/hololive/",
      title: "Hololive",
      script: "gen.js",
    },
    {
      input: "/tag/devil/",
      title: "Devil",
      script: "gen.js",
    },
    {
      input: "/tag/kimono/",
      title: "Kimono",
      script: "gen.js",
    },
    {
      input: "/tag/bunny-girl/",
      title: "Bunny Girl",
      script: "gen.js",
    },
    {
      input: "/tag/hatsune-miku/",
      title: "Hatsune Miku",
      script: "gen.js",
    },
    {
      input: "/category/video-cosplay/",
      title: "Video Cosplay",
      script: "gen.js",
    },
    {
      input: "/category/cosplay-ero/",
      title: "Cosplay Ero",
      script: "gen.js",
    },
    {
      input: "/category/nude/",
      title: "Cosplay Nude",
      script: "gen.js",
    },
  ];
  return Response.success(genres);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"detail": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

const BASE_URL = "https://cosplaytele.com";


function execute(url) {
    if (!url) return Response.error("No url");

    // Normalize to path
    url = url.replace(BASE_URL, '');
    if (!url.startsWith('/')) url = '/' + url;
    url = url.replace(/\/$/, '');

    var response = fetch(BASE_URL + url, { method: 'GET' });
    if (response.ok) {
        var doc = response.html();

        var name = doc.select('h1.entry-title').text();
        if (!name) name = doc.select('title').text();

        var cover = '';
        var firstImg = doc.select('#gallery-1 .gallery-item img').first();
        if (!firstImg) firstImg = doc.select('.entry-content a img').first();
        if (firstImg) cover = firstImg.attr('src') || firstImg.attr('data-src') || firstImg.attr('data-original');

        var description = '';
        var p = doc.select('.entry-content p').first();
        if (p) description = p.text();

        return Response.success({
            name: name,
            cover: cover,
            author: 'Unknown',
            description: description,
            detail: "Title: " + name + "<br>Author: Unknown",
            host: BASE_URL
        });
    }
    return Response.error("Failed to load detail");
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"search": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

const BASE_URL = "https://cosplaytele.com";


function execute(key, page) {
  if (!page) page = "1";

  var candidates = [
    BASE_URL + "/?s=" + key + "&paged=" + page,
    BASE_URL + "/page/" + page + "/?s=" + key
  ];

  for (var i = 0; i < candidates.length; i++) {
    var url = candidates[i];
    var response = fetch(url, { method: "GET" });
    if (!response.ok) continue;

    var doc = response.html();
    var data = [];
    doc.select("#post-list .col.post-item").forEach(function (e) {
      var a = e.select(".post-title a").first();
      if (!a) return;
      var name = a.text();
      var link = a.attr("href");
      if (link) link = link.replace(BASE_URL, '');
      var img = e.select(".box-image img").first();
      var cover = img ? (img.attr('src') || img.attr('data-src') || img.attr('data-original')) : '';
      data.push({ name: name, link: link, cover: cover });
    });

    var next = '';
    var nextHref = doc.select("a.next.page-numbers").first().attr("href");
    if (nextHref) {
      var m = nextHref.match(/page\/(\d+)/);
      if (m) next = m[1];
    }

    return Response.success(data, next);
  }

  return Response.error("Search failed");
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"toc": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

const BASE_URL = "https://cosplaytele.com";


function execute(url) {
    if (!url) return Response.error("No url");
    url = url.replace(BASE_URL, '');
    if (!url.startsWith('/')) url = '/' + url;
    url = url.replace(/\/$/, '');

    return Response.success([
        { name: 'Gallery', url: url, host: BASE_URL }
    ]);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"chap": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

const BASE_URL = "https://cosplaytele.com";


function isImage(url) {
    if (!url) return false;
    return /\.(jpe?g|png|webp|gif)(?:\?|$)/i.test(url);
}

function execute(url) {
    if (!url) return Response.error("No url");

    url = url.replace(BASE_URL, '');
    if (!url.startsWith('/')) url = '/' + url;
    url = url.replace(/\/$/, '');

    var response = fetch(BASE_URL + url, { method: 'GET' });
    if (!response.ok) return Response.error("Failed to load chapter");

    var doc = response.html();
    var data = [];

    // Primary: images within WP gallery
    doc.select('#gallery-1 .gallery-item img').forEach(function(img){
        var src = img.attr('src') || img.attr('data-src') || img.attr('data-original');
        if (isImage(src)) data.push(src);
    });

    // Fallback: any image inside entry-content links
    if (data.length === 0) {
        doc.select('.entry-content a img').forEach(function(img){
            var src = img.attr('src') || img.attr('data-src') || img.attr('data-original');
            if (isImage(src)) data.push(src);
        });
    }

    if (data.length > 0) return Response.success(data);
    return Response.error("No images found");
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"gen": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

const BASE_URL = "https://cosplaytele.com";


function normalizePath(url) {
    var path = (url || '/') + '';
    if (/^https?:\/\//.test(path)) path = path.replace(BASE_URL, '');
    if (!path.startsWith('/')) path = '/' + path;
    path = path.replace(/\?.*$/, '');
    if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
    return path || '/';
}

function toAbsoluteUrl(url) {
    var u = (url || '') + '';
    if (!u) return '';
    if (u.startsWith('//')) return 'https:' + u;
    if (u.startsWith('http')) return u;
    if (!u.startsWith('/')) u = '/' + u;
    return BASE_URL + u;
}

function buildUrl(path, page) {
    var p = parseInt(page, 10);
    if (!(p > 0)) p = 1;

    if (path === '/') {
        return p === 1 ? (BASE_URL + '/') : (BASE_URL + '/page/' + p + '/');
    }

    return p === 1 ? (BASE_URL + path + '/') : (BASE_URL + path + '/page/' + p + '/');
}

function execute(url, page) {
    var p = page || '1';
    var path = normalizePath(url);
    var listUrl = buildUrl(path, p);

    var response = fetch(listUrl, { method: 'GET' });
    if (!response.ok) return Response.error('Failed to load list');

    var doc = response.html();
    var data = [];
    var seen = {};

    doc.select('#post-list .col.post-item').forEach(function(item) {
        var titleEl = item.select('.post-title a').first();
        if (!titleEl) return;

        var name = (titleEl.text() || '') + '';
        var link = (titleEl.attr('href') || '') + '';
        if (!name || !link) return;

        link = toAbsoluteUrl(link);
        if (seen[link]) return;
        seen[link] = true;

        var cover = '';
        var img = item.select('.box-image img').first();
        if (img) {
            cover = (img.attr('src') || img.attr('data-src') || img.attr('data-original') || '') + '';
            cover = toAbsoluteUrl(cover);
        }

        data.push({
            name: name,
            link: link,
            cover: cover
        });
    });

    var next = null;
    var nextEl = doc.select('a.next').first();
    if (nextEl) {
        var nextHref = (nextEl.attr('href') || '') + '';
        var match = nextHref.match(/\/page\/(\d+)\//);
        if (match && match[1]) next = match[1] + '';
    }

    return Response.success(data, next);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"top-view": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

const BASE_URL = "https://cosplaytele.com";


function execute(url, page) {
    // mark params as used to satisfy linters
    if (url || page) {}

    // Top view is a single, non-paginated section on home page
    var response = fetch(BASE_URL + '/', { method: 'GET' });
    if (!response.ok) return Response.error('Failed to load top view');

    var doc = response.html();
    var data = [];

    // Prefer the slider right after the "Popular Cosplay" section title
    var slider = doc.select('div.section-title-container:has(.section-title-main:matchesOwn(Popular\\s+Cosplay)) + div.slider').first();

    // Fallback: any slider block (take the first one)
    if (!slider) slider = doc.select('div.slider').first();

    if (slider) {
        slider.select('.col.post-item').forEach(function (e) {
            var a = e.select('.post-title a').first();
            if (!a) a = e.select('.box-image a').first();
            if (!a) return;
            var name = a.text();
            var link = a.attr('href');
            if (link) link = link.replace(BASE_URL, '');
            var img = e.select('.box-image img').first();
            var cover = img ? (img.attr('src') || img.attr('data-src') || img.attr('data-original')) : '';
            data.push({ name: name, link: link, cover: cover });
        });
    }

    if (data.length === 0) return Response.error('No items found in top view');

    // No pagination for top view
    return Response.success(data);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
}
} });
