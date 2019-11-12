(function() {
    if (navigator.platform.toLowerCase().indexOf("win") == -1) return;
    var e = {
        _zoomText: function() {
            var e = "position:absolute;left:-2000px;height:1px;",
            t = document.createElement("div");
            t.style.cssText = "width:16px;" + e,
            document.body.appendChild(t);
            var n = document.createElement("div");
            n.style.fontSize = "medium";
            var r = document.createElement("div");
            r.style.cssText = "width:1em;" + e,
            n.appendChild(r),
            document.body.appendChild(n);
            var i = t.offsetWidth,
            s = r.offsetWidth,
            o = s / i;
            return document.body.removeChild(t),
            document.body.removeChild(n),
            o
        },
        _zoomIe7: function() {
            var e = document.body.getBoundingClientRect(),
            t = (e.right - e.left) / document.body.offsetWidth;
            return t = Math.round(t * 100) / 100,
            t
        },
        _zoomIe8: function() {
            return screen.deviceXDPI / screen.logicalXDPI
        },
        _zoomWebkit: function() {
            var e = window.devicePixelRatio != null ? window.devicePixelRatio: 1,
            t = document.createElement("div"),
            n = document.createElement("div"),
            r = function(e) {
                return e.replace(/;/g, " !important;")
            };
            t.setAttribute("style", r("width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;")),
            n.innerHTML = "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0",
            n.setAttribute("style", r("font: 100px/1em sans-serif; -webkit-text-size-adjust: none;text-size-adjust:none; height: auto; width: 1em; padding: 0; overflow: visible;")),
            t.appendChild(n),
            document.body.appendChild(t);
            var i = 1e3 / n.clientHeight;
            return i = Math.round(i * 100) / 100,
            document.body.removeChild(t),
            i
        },
        _zoomOperaOlder: function() {
            var e = document.createElement("div");
            e.style.position = "fixed",
            e.style.width = "100%",
            e.style.height = "100%",
            e.style.top = e.style.left = "0",
            e.style.visibility = "hidden",
            document.body.appendChild(e);
            var t = window.innerWidth / e.offsetWidth;
            return document.body.removeChild(e),
            t
        },
        _zoomOpera11: function() {
            var e = window.outerWidth / window.innerWidth;
            return e = Math.round(e * 100) / 100,
            e
        },
        _zoomFF: function() {
            if (!window.matchMedia("(max--moz-device-pixel-ratio:0.99), (min--moz-device-pixel-ratio:1.01)").matches) return 1;
            if (window.matchMedia("(max--moz-device-pixel-ratio:0.99)").matches) {
                var e = 1;
                while (e) if (!window.matchMedia("(max--moz-device-pixel-ratio:" + (e -= .1) + ")").matches) return e += .1;
                return.01
            }
            var e = 1;
            while (e < 3) if (!window.matchMedia("(min--moz-device-pixel-ratio:" + (e += .1) + ")").matches) return e -= .1;
            return 3.1
        },
        zoomInOrOut: function(e) {
            return--e / Math.abs(e) || 0
        },
        zoomMul: function() {
            var e = navigator.userAgent;
            if (!isNaN(screen.logicalXDPI) && !isNaN(screen.systemXDPI)) return this._zoomIe8();
            if ( - 1 != navigator.appVersion.indexOf("MSIE 7.")) return this._zoomIe7();
            if (document.body.style.webkitTextSizeAdjust != null || document.body.style.textSizeAdjust != null) return this._zoomWebkit();
            if (e.indexOf("Firefox") && window.matchMedia) return this._zoomFF();
            if ( - 1 != e.indexOf("Opera")) {
                var t = e.indexOf("Version/");
                return 11.01 < parseFloat(e.substr(t + 8)) ? this._zoomOpera11() : this._zoomOperaOlder()
            }
            return 1
        },
        zoom: function() {
            return {
                text: this._zoomText().toFixed(2),
                doc: this.zoomMul().toFixed(2)
            }
        },
        isZoom: function() {
            return {
                text: this.zoomInOrOut(this._zoomText()),
                doc: this.zoomInOrOut(this.zoomMul())
            }
        }
    },
    t = e.isZoom().doc,
    n = e.zoom().doc,
    r = !!qboot.cookie.get("zoomTipsHide"),
    i = .9,
    s = 2,
    o;
    if (t && !r && (n >= s || n <= i)) {
        var u = W('<div id="zoom-tips"></div>');
        qboot.load.css("#zoom-tips{border-bottom:.1em solid #cdcdcd;height:2.3em;padding-left:2em;background-color:#fff4d8;position:relative;}.zoom-tips-text{font-size:1em;text-align:center;color:#666;line-height:2.3em}.zoom-tips-text img{width:1.4em;padding-right:.5em;vertical-align:middle}.close-zoom-tips{display:block;position:absolute;top:.4em;right:1em;width:1.4em;height:1.4em;color:#a87138;text-align:center;line-height:1.4em;border-radius:.1em;background:transparent;border:.1em solid #fff4d8}.close-zoom-tips:hover{background:#ede0be;border-color:#e1d2ac;text-decoration:none;}"),
        u.html('<p class="zoom-tips-text"><img src="http://p1.qhimg.com/t0154637416b268e46c.png" />\u60a8\u7684\u6d4f\u89c8\u5668\u76ee\u524d\u5904\u4e8e\u7f29\u653e\u72b6\u6001\uff0c\u4f1a\u5bfc\u81f4\u7f51\u9875\u6d4f\u89c8\u4e0d\u6b63\u5e38\uff0c\u8bf7\u6309\u201c<strong><key>Ctrl</key>+\u6570\u5b57<key>0</key></strong>\u201d\u7ec4\u5408\u952e\u6216<a style="text-decoration:underline;font-weight:bold;" href="http://hao.360.cn/fqa_zoomtip.html">\u67e5\u770b\u5e2e\u52a9</a>\u6765\u6062\u590d\u6b63\u5e38\u3002<a id="zoom-not-showtips" title="\u4e0d\u518d\u63d0\u793a\u8be5\u6d88\u606f">\u4e0d\u518d\u63d0\u793a</a></p><a class="close-zoom-tips" href="" onclick="return false;" title="\u4e0d\u518d\u63d0\u793a">X</a>'),
        W("body").prepend(u),
        u.css("font-size", Math.ceil(12 / n) + "px"),
        LogHub.behavior("zoomTips", "show"),
        W(".close-zoom-tips,#zoom-not-showtips").click(function(e) {
            u.hide(),
            qboot.cookie.set("zoomTipsHide", 1, {
                expires: 1296e6
            }),
            LogHub.behavior("zoomTips", "close")
        }),
        o = setInterval(function() {
            var t = e.isZoom().doc,
            n = e.zoom().doc;
            t && (n >= s || n <= i) ? u.css("font-size", Math.ceil(12 / n) + "px") : (u.removeNode(), clearInterval(o), LogHub.behavior("zoomTips", "adjust"))
        },
        500)
    }
})();
