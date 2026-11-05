__register({ META: {"id":"nguonc","name":"NguonC","source":"https://phim.nguonc.com","type":"video","locale":"vi","nsfw":false,"version":6,"config":{},"configDefaults":{}}, SCRIPTS: {
"home": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://phim.nguonc.com";

function normalizeUrl(url) {
    if (url && typeof url !== "string") {
        if (url.length > 0) {
            url = url[0];
        } else {
            url = BASE_URL;
        }
    }
    url = url || BASE_URL;
    // Xóa trailing slash trước khi xử lý
    url = url.replace(/\/$/, "");
    return url.replace(/^https?:\/\/([^\/]+)(\/.*)?$/, function(match, domain, path) {
        path = path || "";
        return BASE_URL + path;
    });
}

function parseCards(json) {
    var list = [];
    var items = [];
    if (json) {
        if (Array.isArray(json.items)) {
            items = json.items;
        } else if (json.data && Array.isArray(json.data.items)) {
            items = json.data.items;
        }
    }
    
    items.forEach(function(item) {
        var cover = item.poster_url || item.thumb_url;
        
        var description = "";
        if (item.year) description += item.year;
        if (item.current_episode) description += " • " + item.current_episode;
        if (item.quality) description += " • " + item.quality;
        if (item.language) description += " " + item.language;

        list.push({
            name: item.name,
            link: "https://phim.nguonc.com/phim/" + item.slug,
            cover: cover,
            description: description.trim(),
            host: "https://phim.nguonc.com"
        });
    });
    return list;
}



function execute() {
    return Response.success([
        { title: "Phim mới cập nhật", input: BASE_URL + "/api/films/phim-moi-cap-nhat", script: "gen.js" },
        { title: "Phim đang chiếu", input: BASE_URL + "/api/films/danh-sach/phim-dang-chieu", script: "gen.js" },
        { title: "Phim bộ", input: BASE_URL + "/api/films/danh-sach/phim-bo", script: "gen.js" },
        { title: "Phim lẻ", input: BASE_URL + "/api/films/danh-sach/phim-le", script: "gen.js" },
        { title: "Hoạt hình", input: BASE_URL + "/api/films/danh-sach/hoat-hinh", script: "gen.js" },
        { title: "TV Shows", input: BASE_URL + "/api/films/danh-sach/tv-shows", script: "gen.js" },

    ]);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"genre": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://phim.nguonc.com";

function normalizeUrl(url) {
    if (url && typeof url !== "string") {
        if (url.length > 0) {
            url = url[0];
        } else {
            url = BASE_URL;
        }
    }
    url = url || BASE_URL;
    // Xóa trailing slash trước khi xử lý
    url = url.replace(/\/$/, "");
    return url.replace(/^https?:\/\/([^\/]+)(\/.*)?$/, function(match, domain, path) {
        path = path || "";
        return BASE_URL + path;
    });
}

function parseCards(json) {
    var list = [];
    var items = [];
    if (json) {
        if (Array.isArray(json.items)) {
            items = json.items;
        } else if (json.data && Array.isArray(json.data.items)) {
            items = json.data.items;
        }
    }
    
    items.forEach(function(item) {
        var cover = item.poster_url || item.thumb_url;
        
        var description = "";
        if (item.year) description += item.year;
        if (item.current_episode) description += " • " + item.current_episode;
        if (item.quality) description += " • " + item.quality;
        if (item.language) description += " " + item.language;

        list.push({
            name: item.name,
            link: "https://phim.nguonc.com/phim/" + item.slug,
            cover: cover,
            description: description.trim(),
            host: "https://phim.nguonc.com"
        });
    });
    return list;
}



function execute() {
    var response = fetch(BASE_URL + "/api/films/the-loai");
    if (response.ok) {
        var json = response.json();
        var genres = [];
        if (json.items) {
            json.items.forEach(function(item) {
                genres.push({
                    title: item.name,
                    input: BASE_URL + "/api/films/the-loai/" + item.slug,
                    script: "gen.js"
                });
            });
            return Response.success(genres);
        }
    }
    // Fallback nếu API lỗi
    return Response.success([
        { title: "Hành động", input: BASE_URL + "/api/films/the-loai/hanh-dong", script: "gen.js" },
        { title: "Phiêu lưu", input: BASE_URL + "/api/films/the-loai/phieu-luu", script: "gen.js" },
        { title: "Hoạt hình", input: BASE_URL + "/api/films/the-loai/hoat-hinh", script: "gen.js" },
        { title: "Hài hước", input: BASE_URL + "/api/films/the-loai/hai-huoc", script: "gen.js" },
        { title: "Hình sự", input: BASE_URL + "/api/films/the-loai/hinh-su", script: "gen.js" },
        { title: "Tài liệu", input: BASE_URL + "/api/films/the-loai/tai-lieu", script: "gen.js" },
        { title: "Kịch tính", input: BASE_URL + "/api/films/the-loai/kich-tinh", script: "gen.js" },
        { title: "Gia đình", input: BASE_URL + "/api/films/the-loai/gia-dinh", script: "gen.js" },
        { title: "Giả tưởng", input: BASE_URL + "/api/films/the-loai/gia-tuong", script: "gen.js" },
        { title: "Lịch sử", input: BASE_URL + "/api/films/the-loai/lich-su", script: "gen.js" },
        { title: "Kinh dị", input: BASE_URL + "/api/films/the-loai/kinh-di", script: "gen.js" },
        { title: "Âm nhạc", input: BASE_URL + "/api/films/the-loai/am-nhac", script: "gen.js" },
        { title: "Bí ẩn", input: BASE_URL + "/api/films/the-loai/bi-an", script: "gen.js" },
        { title: "Lãng mạn", input: BASE_URL + "/api/films/the-loai/lang-man", script: "gen.js" },
        { title: "Khoa học viễn tưởng", input: BASE_URL + "/api/films/the-loai/khoa-hoc-vien-tuong", script: "gen.js" },
        { title: "Phim người đóng", input: BASE_URL + "/api/films/the-loai/phim-nguoi-dong", script: "gen.js" },
        { title: "Chiến tranh", input: BASE_URL + "/api/films/the-loai/chien-tranh", script: "gen.js" },
        { title: "Miền tây", input: BASE_URL + "/api/films/the-loai/mien-tay", script: "gen.js" }
    ]);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"detail": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://phim.nguonc.com";

function normalizeUrl(url) {
    if (url && typeof url !== "string") {
        if (url.length > 0) {
            url = url[0];
        } else {
            url = BASE_URL;
        }
    }
    url = url || BASE_URL;
    // Xóa trailing slash trước khi xử lý
    url = url.replace(/\/$/, "");
    return url.replace(/^https?:\/\/([^\/]+)(\/.*)?$/, function(match, domain, path) {
        path = path || "";
        return BASE_URL + path;
    });
}

function parseCards(json) {
    var list = [];
    var items = [];
    if (json) {
        if (Array.isArray(json.items)) {
            items = json.items;
        } else if (json.data && Array.isArray(json.data.items)) {
            items = json.data.items;
        }
    }
    
    items.forEach(function(item) {
        var cover = item.poster_url || item.thumb_url;
        
        var description = "";
        if (item.year) description += item.year;
        if (item.current_episode) description += " • " + item.current_episode;
        if (item.quality) description += " • " + item.quality;
        if (item.language) description += " " + item.language;

        list.push({
            name: item.name,
            link: "https://phim.nguonc.com/phim/" + item.slug,
            cover: cover,
            description: description.trim(),
            host: "https://phim.nguonc.com"
        });
    });
    return list;
}



function execute(url) {
    url = normalizeUrl(url);
    var slug = url.split('/').pop();
    var apiUrl = BASE_URL + "/api/film/" + slug;

    var response = fetch(apiUrl);
    if (response.ok) {
        var resJson = response.json();
        var movie = resJson.movie || (resJson.data && resJson.data.movie);
        if (movie) {
            var suggests = [];
            var infoText = "";
            infoText += "Tên gốc: " + (movie.original_name || movie.origin_name) + "<br>";
            infoText += "Trạng thái: " + (movie.current_episode || "Đang cập nhật") + " / " + (movie.total_episodes || "??") + "<br>";
            infoText += "Chất lượng: " + (movie.quality || "") + " " + (movie.language || "") + "<br>";
            if (movie.time && movie.time !== "null") infoText += "Thời lượng: " + movie.time + "<br>";
            if (movie.director && movie.director !== "N/A") infoText += "Đạo diễn: " + movie.director + "<br>";
            if (movie.casts && movie.casts !== "N/A") infoText += "Diễn viên: " + movie.casts + "<br>";

            if (movie.category) {
                var categories = movie.category;
                // Group 1: Định dạng
                if (categories["1"] && categories["1"].list) {
                    var formats = categories["1"].list.map(function(item) { return item.name; });
                    if (formats.length > 0) infoText += "Định dạng: " + formats.join(", ") + "<br>";
                }
                // Group 2: Thể loại
                if (categories["2"] && categories["2"].list) {
                    var genresList = categories["2"].list;
                    var genres = genresList.map(function(item) { return item.name; });
                    if (genres.length > 0) {
                        infoText += "Thể loại: " + genres.join(", ") + "<br>";
                        // Suggest theo thể loại đầu tiên
                        var firstGenre = genresList[0];
                        var genreSlug = firstGenre.slug || firstGenre.id;
                        if (genreSlug) {
                            suggests.push({
                                title: "Cùng thể loại: " + firstGenre.name,
                                input: BASE_URL + "/api/films/the-loai/" + genreSlug,
                                script: "gen.js"
                            });
                        }
                    }
                }
                // Group 3: Năm
                if (categories["3"] && categories["3"].list) {
                    var yearsList = categories["3"].list;
                    var years = yearsList.map(function(item) { return item.name; });
                    if (years.length > 0) {
                        infoText += "Năm: " + years.join(", ") + "<br>";
                        var yearName = yearsList[0].name;
                        suggests.push({
                            title: "Phim cùng năm " + yearName,
                            input: BASE_URL + "/api/films/nam-phat-hanh/" + yearName,
                            script: "gen.js"
                        });
                    }
                }
                // Group 4: Quốc gia
                if (categories["4"] && categories["4"].list) {
                    var countriesList = categories["4"].list;
                    var countries = countriesList.map(function(item) { return item.name; });
                    if (countries.length > 0) {
                        infoText += "Quốc gia: " + countries.join(", ") + "<br>";
                        var countrySlug = countriesList[0].slug;
                        suggests.push({
                            title: "Phim cùng quốc gia: " + countriesList[0].name,
                            input: BASE_URL + "/api/films/quoc-gia/" + countrySlug,
                            script: "gen.js"
                        });
                    }
                }
            }

            var ongoing = true;
            var status = (movie.status || "").toLowerCase();
            if (status === "completed" || status === "hoanthanh" || status === "hoàn thành") {
                ongoing = false;
            }

            var format = "movie";
            if (movie.total_episodes && (parseInt(movie.total_episodes) > 1 || isNaN(parseInt(movie.total_episodes)))) {
                format = "series";
            }

            return Response.success({
                name: movie.name,
                cover: movie.thumb_url || movie.poster_url,
                author: (movie.director && movie.director !== "N/A") ? movie.director : "Đang cập nhật",
                description: movie.description ? movie.description.replace(/<[^>]*>/g, '') : "",
                detail: infoText,
                ongoing: ongoing,
                format: format,
                suggests: suggests,
                host: "https://phim.nguonc.com"
            });
        }
    }
    return Response.error("Không tìm thấy thông tin phim");
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"search": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://phim.nguonc.com";

function normalizeUrl(url) {
    if (url && typeof url !== "string") {
        if (url.length > 0) {
            url = url[0];
        } else {
            url = BASE_URL;
        }
    }
    url = url || BASE_URL;
    // Xóa trailing slash trước khi xử lý
    url = url.replace(/\/$/, "");
    return url.replace(/^https?:\/\/([^\/]+)(\/.*)?$/, function(match, domain, path) {
        path = path || "";
        return BASE_URL + path;
    });
}

function parseCards(json) {
    var list = [];
    var items = [];
    if (json) {
        if (Array.isArray(json.items)) {
            items = json.items;
        } else if (json.data && Array.isArray(json.data.items)) {
            items = json.data.items;
        }
    }
    
    items.forEach(function(item) {
        var cover = item.poster_url || item.thumb_url;
        
        var description = "";
        if (item.year) description += item.year;
        if (item.current_episode) description += " • " + item.current_episode;
        if (item.quality) description += " • " + item.quality;
        if (item.language) description += " " + item.language;

        list.push({
            name: item.name,
            link: "https://phim.nguonc.com/phim/" + item.slug,
            cover: cover,
            description: description.trim(),
            host: "https://phim.nguonc.com"
        });
    });
    return list;
}



function execute(key, page) {
    if (!page) page = '1';
    
    // NguonC search API: /api/films/search?keyword={slug}
    var fetchUrl = BASE_URL + "/api/films/search?keyword=" + encodeURIComponent(key) + "&page=" + page;
    
    var response = fetch(fetchUrl, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Referer": "https://phim.nguonc.com/"
        }
    });

    if (response.ok) {
        var json = response.json();
        var list = parseCards(json);
        
        var next = null;
        var paginate = json.paginate || (json.data && json.data.paginate);
        if (paginate) {
            var currentPage = parseInt(paginate.current_page || page);
            var totalPages = parseInt(paginate.total_page || paginate.last_page || 0);
            if (currentPage < totalPages) {
                next = (currentPage + 1).toString();
            }
        }
        
        return Response.success(list, next);
    }
    
    return Response.success([]);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"toc": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://phim.nguonc.com";

function normalizeUrl(url) {
    if (url && typeof url !== "string") {
        if (url.length > 0) {
            url = url[0];
        } else {
            url = BASE_URL;
        }
    }
    url = url || BASE_URL;
    // Xóa trailing slash trước khi xử lý
    url = url.replace(/\/$/, "");
    return url.replace(/^https?:\/\/([^\/]+)(\/.*)?$/, function(match, domain, path) {
        path = path || "";
        return BASE_URL + path;
    });
}

function parseCards(json) {
    var list = [];
    var items = [];
    if (json) {
        if (Array.isArray(json.items)) {
            items = json.items;
        } else if (json.data && Array.isArray(json.data.items)) {
            items = json.data.items;
        }
    }
    
    items.forEach(function(item) {
        var cover = item.poster_url || item.thumb_url;
        
        var description = "";
        if (item.year) description += item.year;
        if (item.current_episode) description += " • " + item.current_episode;
        if (item.quality) description += " • " + item.quality;
        if (item.language) description += " " + item.language;

        list.push({
            name: item.name,
            link: "https://phim.nguonc.com/phim/" + item.slug,
            cover: cover,
            description: description.trim(),
            host: "https://phim.nguonc.com"
        });
    });
    return list;
}



function execute(url) {
    url = normalizeUrl(url);
    var slug = url.split('/').pop();
    var apiUrl = BASE_URL + "/api/film/" + slug;

    var response = fetch(apiUrl);
    if (response.ok) {
        var resJson = response.json();
        var movie = resJson.movie || (resJson.data && resJson.data.movie);
        if (!movie) return Response.error("Không tìm thấy dữ liệu phim");
        
        var episodesData = movie.episodes || []; 
        var list = [];

        var serversWithData = episodesData.filter(function(server) {
            return server.items && Array.isArray(server.items) && server.items.some(function(item) {
                return item.embed; // Chỉ quan tâm đến link embed
            });
        }).length;

        var hasMultipleServers = serversWithData > 1;

        if (Array.isArray(episodesData)) {
            episodesData.forEach(function(server) {
                var serverName = server.server_name || "Nguồn";
                var epItems = [];

                if (server.items && Array.isArray(server.items)) {
                    server.items.forEach(function(item) {
                        var streamUrl = item.embed; // Chỉ dùng link embed
                        if (streamUrl) {
                            var name = item.name || "";
                            var epName = name;
                            
                            if (name && !isNaN(name) && name.toLowerCase().indexOf("tập") === -1) {
                                epName = "Tập " + name;
                            }

                            epItems.push({
                                name: epName,
                                url: streamUrl,
                                host: BASE_URL
                            });
                        }
                    });
                }

                if (epItems.length > 0) {
                    if (hasMultipleServers) {
                        list.push({
                            name: serverName,
                            type: "section"
                        });
                    }
                    list = list.concat(epItems);
                }
            });
        }
        return Response.success(list);
    }
    return Response.error("Không lấy được danh sách tập phim");
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"chap": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {
function execute(url) {
    if (!url) return Response.error("Link trống");
    
    return Response.success([
        {
            title: "Embed Player",
            data: url
        }
    ]);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"track": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://phim.nguonc.com";

function normalizeUrl(url) {
    if (url && typeof url !== "string") {
        if (url.length > 0) {
            url = url[0];
        } else {
            url = BASE_URL;
        }
    }
    url = url || BASE_URL;
    // Xóa trailing slash trước khi xử lý
    url = url.replace(/\/$/, "");
    return url.replace(/^https?:\/\/([^\/]+)(\/.*)?$/, function(match, domain, path) {
        path = path || "";
        return BASE_URL + path;
    });
}

function parseCards(json) {
    var list = [];
    var items = [];
    if (json) {
        if (Array.isArray(json.items)) {
            items = json.items;
        } else if (json.data && Array.isArray(json.data.items)) {
            items = json.data.items;
        }
    }
    
    items.forEach(function(item) {
        var cover = item.poster_url || item.thumb_url;
        
        var description = "";
        if (item.year) description += item.year;
        if (item.current_episode) description += " • " + item.current_episode;
        if (item.quality) description += " • " + item.quality;
        if (item.language) description += " " + item.language;

        list.push({
            name: item.name,
            link: "https://phim.nguonc.com/phim/" + item.slug,
            cover: cover,
            description: description.trim(),
            host: "https://phim.nguonc.com"
        });
    });
    return list;
}



function execute(data) {
    if (!data) return Response.error("Link trống");

    // Nếu đã là link stream direct .m3u8 hoặc .mp4
    if (data.indexOf(".m3u8") !== -1 || data.indexOf(".mp4") !== -1) {
        return Response.success({
            type: "native",
            data: data,
            host: BASE_URL,
            mimeType: "application/x-mpegURL",
            headers: {
                "User-Agent": UserAgent.chrome(),
                "Referer": BASE_URL
            }
        });
    }

    // Embed streamc.xyz: POST bootstrap về chính embed.php, server trả sẵn link playlist HLS (preissued)
    var embedOrigin = data.replace(/^(https?:\/\/[^\/]+).*$/, "$1");
    var response = fetch(data, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Origin": embedOrigin,
            "Referer": data
        },
        body: JSON.stringify({
            action: "bootstrap",
            referrer: BASE_URL + "/",
            frame_origins: [BASE_URL],
            request_grant: true,
            playlist_format: "hls",
            pretty_url: true,
            path_chunks: true,
            bootstrap_format: "json"
        })
    });
    if (!response.ok) return Response.error("Không lấy được cấu hình video (HTTP " + response.status + ")");

    var json = response.json();
    var playlist = json && json.preissued && json.preissued.playlist;
    if (!playlist) return Response.error("Không tìm thấy link phát video");

    // Tự tải playlist rồi đưa cho player dưới dạng data URI vì:
    // - host embed chặn HTTP/1.1 (403) mà player Android dùng; segment ở host khác nên vẫn tải thẳng
    // - segment đầu (streamaaa0000.png) luôn bị Cloudflare chặn 403 khiến player dừng ngay, nên bỏ đi (~2 giây)
    var playlistResponse = fetch(playlist, {
        headers: {
            "User-Agent": UserAgent.chrome(),
            "Referer": embedOrigin + "/"
        }
    });
    if (playlistResponse.ok) {
        var m3u8 = playlistResponse.text().replace(/#EXTINF:[^\n]*\n[^\n]*0000\.png[^\n]*\n/, "");
        playlist = "data:application/x-mpegURL;base64," + base64Ascii(m3u8);
    }

    // Playlist và các segment (.png ngụy trang TS) đều bắt buộc Referer của host embed
    return Response.success({
        type: "native",
        data: playlist,
        host: embedOrigin,
        mimeType: "application/x-mpegURL",
        headers: {
            "User-Agent": UserAgent.chrome(),
            "Referer": embedOrigin + "/"
        }
    });
}

// Playlist chỉ chứa ký tự ASCII nên mã hóa thẳng từng byte
function base64Ascii(str) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var out = "";
    for (var i = 0; i < str.length; i += 3) {
        var a = str.charCodeAt(i), b = str.charCodeAt(i + 1), c = str.charCodeAt(i + 2);
        var n = (a << 16) | ((b || 0) << 8) | (c || 0);
        out += chars.charAt(n >> 18 & 63) + chars.charAt(n >> 12 & 63)
            + (i + 1 < str.length ? chars.charAt(n >> 6 & 63) : "=")
            + (i + 2 < str.length ? chars.charAt(n & 63) : "=");
    }
    return out;
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"gen": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {

return (function () {

var BASE_URL = "https://phim.nguonc.com";

function normalizeUrl(url) {
    if (url && typeof url !== "string") {
        if (url.length > 0) {
            url = url[0];
        } else {
            url = BASE_URL;
        }
    }
    url = url || BASE_URL;
    // Xóa trailing slash trước khi xử lý
    url = url.replace(/\/$/, "");
    return url.replace(/^https?:\/\/([^\/]+)(\/.*)?$/, function(match, domain, path) {
        path = path || "";
        return BASE_URL + path;
    });
}

function parseCards(json) {
    var list = [];
    var items = [];
    if (json) {
        if (Array.isArray(json.items)) {
            items = json.items;
        } else if (json.data && Array.isArray(json.data.items)) {
            items = json.data.items;
        }
    }
    
    items.forEach(function(item) {
        var cover = item.poster_url || item.thumb_url;
        
        var description = "";
        if (item.year) description += item.year;
        if (item.current_episode) description += " • " + item.current_episode;
        if (item.quality) description += " • " + item.quality;
        if (item.language) description += " " + item.language;

        list.push({
            name: item.name,
            link: "https://phim.nguonc.com/phim/" + item.slug,
            cover: cover,
            description: description.trim(),
            host: "https://phim.nguonc.com"
        });
    });
    return list;
}



function execute(url, page) {
    if (!page) page = '1';
    
    var fetchUrl = url + (url.indexOf('?') >= 0 ? '&' : '?') + "page=" + page;
    
    var response = fetch(fetchUrl, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Referer": "https://phim.nguonc.com/"
        }
    });

    if (response.ok) {
        var json = response.json();
        var list = parseCards(json);
        
        var next = null;
        // Kiểm tra paginate bọc trong data hoặc ở root
        var paginate = json.paginate || (json.data && json.data.paginate);
        if (paginate) {
            var currentPage = parseInt(paginate.current_page || page);
            var totalPages = parseInt(paginate.total_page || paginate.last_page || 0);
            if (currentPage < totalPages) {
                next = (currentPage + 1).toString();
            }
        }
        
        return Response.success(list, next);
    }
    
    return Response.success([]);
}

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
}
} });
