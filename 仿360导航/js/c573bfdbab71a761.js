(function() {
    var e = function(e, t) {
        var n = new RegExp(t + "\\b[ \\/]?([\\w\\.]*)", "i"),
        r = e.match(n);
        return r ? r.slice(1) : ["", ""]
    } (navigator.userAgent, "(maxthon|360se|360ee|theworld|se|greenbrowser|qqbrowser)");
    if (hao360.is360se() || e[0]) document.getElementById("setHomepage").onclick = ""
})();