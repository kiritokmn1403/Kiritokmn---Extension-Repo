load('config.js');

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

    // streamc.xyz embed: POST "bootstrap" to embed.php itself; the server answers with a pre-issued HLS playlist URL.
    // (Cloudflare on the embed host rejects requests without a browser User-Agent.)
    var embedOrigin = data.replace(/^(https?:\/\/[^\/]+).*$/, "$1");
    var ua = UserAgent.chrome();
    var response = fetch(data, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "User-Agent": ua,
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

    // Download the playlist here and hand it to the player as a data: URI, so the player only has to reach the
    // segment host.
    var playlistResponse = fetch(playlist, {
        headers: {
            "User-Agent": ua,
            "Referer": embedOrigin + "/"
        }
    });
    if (playlistResponse.ok) {
        var m3u8 = playlistResponse.text();
        if (m3u8.indexOf("#EXTM3U") === 0) playlist = "data:application/x-mpegURL;base64," + base64Ascii(m3u8);
    }

    // 0.0.5: the segment hosts (*.amass11.top, *.hihihoho1.top ... ".png" = disguised MPEG-TS) answer 403 to every
    // HTTP/1.1 request; they need HTTP/2 + a User-Agent + the embed host as Referer. "http2: true" tells the hosts
    // whose player only speaks HTTP/1.1 (mpv/ffmpeg in Aniyomi) to route this stream through their HTTP/2 bridge.
    return Response.success({
        type: "native",
        data: playlist,
        host: embedOrigin,
        mimeType: "application/x-mpegURL",
        http2: true,
        headers: {
            "User-Agent": ua,
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
