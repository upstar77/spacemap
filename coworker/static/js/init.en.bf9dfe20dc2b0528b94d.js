!function(t) {
    function e(i) {
        if (n[i])
            return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, e),
        o.l = !0,
        o.exports
    }
    var i = window.webpackJsonp;
    window.webpackJsonp = function(e, n, r) {
        for (var a, s, u = 0, c = []; u < e.length; u++)
            s = e[u],
            o[s] && c.push(o[s][0]),
            o[s] = 0;
        for (a in n)
            Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
        for (i && i(e, n, r); c.length; )
            c.shift()()
    }
    ;
    var n = {}
      , o = {
        14: 0
    };
    e.e = function(t) {
        function i() {
            s.onerror = s.onload = null,
            clearTimeout(u);
            var e = o[t];
            0 !== e && (e && e[1](new Error("Loading chunk " + t + " failed.")),
            o[t] = void 0)
        }
        var n = o[t];
        if (0 === n)
            return new Promise(function(t) {
                t()
            }
            );
        if (n)
            return n[2];
        var r = new Promise(function(e, i) {
            n = o[t] = [e, i]
        }
        );
        n[2] = r;
        var a = document.getElementsByTagName("head")[0]
          , s = document.createElement("script");
        s.type = "text/javascript",
        s.charset = "utf-8",
        s.async = !0,
        s.timeout = 12e4,
        e.nc && s.setAttribute("nonce", e.nc),
        s.src = e.p + "" + t + "." + ({
            0: "commons",
            1: "pages_simpleT1",
            2: "pages_signup",
            3: "pages_profile",
            4: "pages_home",
            5: "pages_who_to_follow",
            6: "dynamic_prompts",
            7: "pages_permalink",
            8: "pages_moments",
            9: "pages_search",
            10: "pages_highlights",
            11: "emojiInfo",
            12: "video_player_a",
            13: "video_player_b"
        }[t] || t) + ".en." + {
            0: "7fa3191d28a0545de428",
            1: "0853bfb6b682397db928",
            2: "1b44880d358add2a105e",
            3: "3cc04e0ac91c1f983f34",
            4: "339b101be9b724327414",
            5: "3678bca3c5e50f1995a0",
            6: "d8f9ee38cbf214f095a2",
            7: "73f6f6f96de4214d4534",
            8: "3bfd364c0bcbfe12d786",
            9: "2eb6c19a3613bc75f1a0",
            10: "1c71bd2bf33c4b416702",
            11: "c7abaa2d30707fb88fe4",
            12: "941cdc8fcc417434c7e3",
            13: "87021fcb609912a11ca2"
        }[t] + ".js";
        var u = setTimeout(i, 12e4);
        return s.onerror = s.onload = i,
        a.appendChild(s),
        r
    }
    ,
    e.m = t,
    e.c = n,
    e.d = function(t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }
    ,
    e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(i, "a", i),
        i
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "https://abs.twimg.com/k/en/",
    e.oe = function(t) {
        throw t
    }
    ,
    e(e.s = 0)
}({
    "+/oQ": function(t, e, i) {
        "use strict";
        function n() {
            this.after("initialize", function() {
                if (r.a.getDecider("sruMediaCategory")) {
                    var t = "segmented_uploader"
                      , e = "url_async_upload";
                    this.scribeOnEvent("dataMediaSruSuccess", {
                        component: t,
                        element: e,
                        action: "success"
                    }),
                    this.scribeOnEvent("dataMediaSruCancel", {
                        component: t,
                        element: e,
                        action: "cancel"
                    }),
                    this.scribeOnEvent("dataMediaSruError", {
                        component: t,
                        element: e,
                        action: "failure"
                    })
                }
            })
        }
        var o = i("DBjh")
          , r = i("IAMj")
          , a = i("3oDc");
        e.a = Object(o.default)(n, a.a)
    },
    "+0cQ": function(t, e, i) {
        (function(e) {
            t.exports = new e.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.s(n.f("isVS16", t, e, 1), t, e, 1, 0, 0, "") || (n.b('<span class="Emoji Emoji--forLinks" style="background-image:url(\''),
                    n.b(n.v(n.f("imageUrl", t, e, 0))),
                    n.b('\')" title="'),
                    n.b(n.v(n.f("description", t, e, 0))),
                    n.b('" aria-label="'),
                    n.b(n.v(n.f("aria", t, e, 0))),
                    n.b('">&nbsp;</span>'),
                    n.b('<span class="visuallyhidden" aria-hidden="true">'),
                    n.b(n.v(n.f("text", t, e, 0))),
                    n.b("</span>")),
                    n.s(n.f("isVS16", t, e, 1), t, e, 0, 248, 294, "{{ }}") && (n.rs(t, e, function(t, e, i) {
                        i.b('<span data-original-codepoint="U+fe0f"></span>')
                    }),
                    t.pop()),
                    n.fl()
                },
                partials: {},
                subs: {}
            })
        }
        ).call(e, i("jTWp"))
    },
    "+E39": function(t, e, i) {
        t.exports = !i("S82l")(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    "+NJ6": function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    signupSelector: "a.js-signup"
                }),
                this.frontpageScribes = {
                    signin: {
                        component: "login_callout",
                        element: "form",
                        action: "login_click",
                        gaEvent: "existing-user-signin"
                    },
                    signup: {
                        component: "signup_callout",
                        element: "form",
                        action: "signup_click",
                        gaEvent: "signup-clicked"
                    },
                    search: {
                        component: "main",
                        element: "search_field",
                        action: "search"
                    },
                    language: {
                        component: "footer",
                        element: "language_selector",
                        action: "select"
                    }
                },
                this.scribeLoggedOutForm = function(t, e) {
                    var i = t.target.className.match(/signin|signup|language|search/);
                    i && i.length && this.scribeForm(i[0], t, e)
                }
                ,
                this.scribeForm = function(e, i, n) {
                    var o = this.frontpageScribes[e];
                    t(i.target).data("component") && (o.component = t(i.target).data("component")),
                    t(i.target).data("element") && (o.element = t(i.target).data("element")),
                    this.scribe(o, n),
                    o.gaEvent && this.trigger("GATrackEvent", {
                        gaEvent: o.gaEvent
                    })
                }
                ,
                this.scribeSignupClick = function(t, e) {
                    this.scribeForm("signup", t, {})
                }
                ,
                this.after("initialize", function() {
                    this.scribeOnEvent("uiSignupLinkClicked", {
                        element: "signup_link",
                        action: "signup_click"
                    }),
                    this.scribeOnEvent("uiLoginLinkClicked", {
                        element: "login_link",
                        action: "login_click"
                    }),
                    this.scribeOnEvent("uiSigninOrSignupDialogOpened", "open"),
                    this.scribeOnEvent("uiSigninOrSignupDialogClosed", "close"),
                    this.scribeOnEvent("uiLoginDialogOpened", "open"),
                    this.scribeOnEvent("uiLoginDialogClosed", "close"),
                    this.scribeOnEvent("uiBannerDismissed", "dismiss"),
                    this.scribeOnEvent("uiBannerDisplayed", "impression"),
                    this.on("submit", this.scribeLoggedOutForm),
                    this.on("click", {
                        signupSelector: this.scribeSignupClick
                    })
                })
            }
            var o = i("DBjh")
              , r = i("3oDc");
            e.a = Object(o.default)(n, r.a)
        }
        ).call(e, i("4kSj"))
    },
    "+ZMJ": function(t, e, i) {
        var n = i("lOnJ");
        t.exports = function(t, e, i) {
            if (n(t),
            void 0 === e)
                return t;
            switch (i) {
            case 1:
                return function(i) {
                    return t.call(e, i)
                }
                ;
            case 2:
                return function(i, n) {
                    return t.call(e, i, n)
                }
                ;
            case 3:
                return function(i, n, o) {
                    return t.call(e, i, n, o)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    },
    "+ccy": function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                pageName: "",
                sectionName: "",
                loggedIn: !1,
                screenName: ""
            }),
            this.initGoogle = function() {
                !function(t, e, i, n, o, r, a) {
                    t.GoogleAnalyticsObject = o,
                    t[o] = t[o] || function() {
                        (t[o].q = t[o].q || []).push(arguments)
                    }
                    ,
                    t[o].l = 1 * new Date,
                    r = e.createElement(i),
                    a = e.getElementsByTagName(i)[0],
                    r.async = 1,
                    r.src = "//www.google-analytics.com/analytics.js",
                    a.parentNode.insertBefore(r, a)
                }(window, document, "script", 0, "ga"),
                ga("create", "UA-30775-6", "twitter.com"),
                ga("set", "forceSSL", !0),
                ga("set", "anonymizeIp", !0),
                ga("send", "pageview", this.getPageName()),
                window.ga = ga,
                this.off("uiSwiftLoaded", this.initGoogle)
            }
            ,
            this.trackEvent = function(t, e) {
                window.ga("send", "event", "button", e.gaEvent, "nav-buttons")
            }
            ,
            this.trackPageChange = function(t, e) {
                window.ga("send", "pageview", this.getPageName())
            }
            ,
            this.trackOverlayChange = function(t, e) {
                e.init_data && window.ga("send", "pageview", this.getPageName(e.init_data.pageName, e.init_data.sectionName))
            }
            ,
            this.getPageName = function(t, e) {
                var i = this.attr.loggedIn ? "user" : "anon";
                return t = t || this.attr.pageName,
                e = e || this.attr.sectionName,
                this.attr.loggedIn && "profile" === t && this.screenNameRE.test(this.getPath()) && (t = "self"),
                "/" + [i, t, e].join("/")
            }
            ,
            this.getPath = function() {
                return location.pathname
            }
            ,
            this.after("initialize", function() {
                this.screenNameRE = new RegExp("^/" + this.attr.screenName + "(/.*)?$"),
                this.on("uiSwiftLoaded", this.initGoogle),
                this.on("uiPageChanged uiOverlayClosed", this.trackPageChange),
                this.on("uiOverlayPageChanged", this.trackOverlayChange),
                this.on("GATrackEvent", this.trackEvent)
            })
        }
        var o = i("DBjh")
          , r = Object(o.default)(n);
        e.a = r
    },
    "+tPU": function(t, e, i) {
        i("xGkn");
        for (var n = i("7KvD"), o = i("hJx8"), r = i("/bQp"), a = i("dSzd")("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; u < 5; u++) {
            var c = s[u]
              , l = n[c]
              , d = l && l.prototype;
            d && !d[a] && o(d, a, c),
            r[c] = r.Array
        }
    },
    "//Fk": function(t, e, i) {
        t.exports = {
            default: i("U5ju"),
            __esModule: !0
        }
    },
    "/BKe": function(t, e, i) {
        var n, o;
        n = [i("Y6Nz")],
        void 0 !== (o = function(t) {
            "use strict";
            function e(e, i) {
                Object.keys(e).forEach(function(o) {
                    n.indexOf(o) < 0 && t.propertyWritability(e, o, i)
                })
            }
            function i(t, i) {
                t.mixedIn = t.hasOwnProperty("mixedIn") ? t.mixedIn : [];
                for (var n = 0; n < i.length; n++)
                    -1 == t.mixedIn.indexOf(i[n]) && (e(t, !1),
                    i[n].call(t),
                    t.mixedIn.push(i[n]));
                e(t, !0)
            }
            var n = ["mixedIn", "attrDef"];
            return {
                mixin: i
            }
        }
        .apply(e, n)) && (t.exports = o)
    },
    "/bQp": function(t, e) {
        t.exports = {}
    },
    "/eMm": function(t, e, i) {
        /*! bootstrap-tooltip.js v2.0.2 (c) 2012 Twitter, Inc. http://www.apache.org/licenses/LICENSE-2.0 */
        !function(e) {
            var n = i("4kSj");
            !function(t) {
                "use strict";
                function e(t) {
                    clearTimeout(t),
                    delete o[t]
                }
                function i(t, e) {
                    var i = setTimeout(t, e);
                    return o[i] = !0,
                    i
                }
                function n() {
                    Object.keys(o).forEach(e)
                }
                var o = {}
                  , r = function(t, e) {
                    this.init("tooltip", t, e)
                };
                r.prototype = {
                    constructor: r,
                    init: function(e, i, n) {
                        this.type = e,
                        this.$element = t(i),
                        this.options = this.getOptions(n),
                        this.enabled = !0,
                        "manual" != this.options.trigger && (this.$element.on("mouseenter focus", this.options.selector, t.proxy(this.enter, this)),
                        this.$element.on("mouseleave blur", this.options.selector, t.proxy(this.leave, this)),
                        this.$element.on("click", this.options.selector, t.proxy(this.leave, this))),
                        this.options.selector ? this._options = t.extend({}, this.options, {
                            trigger: "manual",
                            selector: ""
                        }) : this.fixTitle()
                    },
                    getOptions: function(e) {
                        return e = t.extend({}, t.fn[this.type].defaults, e, this.$element.data()),
                        e.delay && "number" == typeof e.delay && (e.delay = {
                            show: e.delay,
                            hide: 100
                        }),
                        e
                    },
                    enter: function(n) {
                        var o = t(n.target);
                        if ("focusin" == n.type && o.hasClass("js-is-nextTooltipPreventedOnFocus"))
                            return void o.removeClass("js-is-nextTooltipPreventedOnFocus");
                        var r = t(n.currentTarget)[this.type](this._options).data(this.type);
                        r.options.delay && r.options.delay.show ? (e(r.timeout),
                        r.timeout = i(function() {
                            r.show()
                        }, r.determineShowDelay(r.options.delay.show))) : r.show()
                    },
                    leave: function(n) {
                        var o = t(n.currentTarget)[this.type](this._options).data(this.type);
                        o.options.delay && o.options.delay.hide ? (e(o.timeout),
                        o.timeout = i(function() {
                            o.hide()
                        }, o.options.delay.hide)) : o.hide()
                    },
                    hasIconOnlyLabel: function() {
                        var e = this.$element.text().trim() || this.getLabelEl().text().trim()
                          , i = !!this.$element.find("img").length
                          , n = function(e) {
                            return t(e).text().trim()
                        }
                          , o = this.getHiddenLabel().toArray().map(n).join("");
                        return i && !!e.length || o == e
                    },
                    determineShowDelay: function(t) {
                        return this.hasIconOnlyLabel() ? Math.min(250, t) : t
                    },
                    getLabelText: function() {
                        var t = this.$element.text().trim();
                        return t.length || (t = this.getLabelEl().text()),
                        t.trim()
                    },
                    hasPartiallyHiddenLabelText: function() {
                        var e = this.$element.text().trim() ? this.$element : this.getLabelEl()
                          , i = e.text().trim()
                          , n = !1;
                        return i && e.add(e.find("*:visible")).each(function(e, o) {
                            if (t(o).text().trim() == i) {
                                var r = o.getBoundingClientRect()
                                  , a = Math.ceil(r.right - r.left);
                                n = a > 2 && o.scrollWidth > a
                            }
                            return !n
                        }),
                        n
                    },
                    getLabelEl: function() {
                        var e = this.$element[0].id
                          , i = t();
                        return this.$element.is("input") && (i = this.$element.closest("label"),
                        !i.length && e && (i = t("label[for=" + e + "]"))),
                        i
                    },
                    hasHiddenLabel: function() {
                        return !!this.getHiddenLabel().length
                    },
                    getHiddenLabel: function() {
                        var t, e = this.$element.find(".visuallyhidden, .u-hiddenVisually");
                        return e.length || (t = this.getLabelEl(),
                        e = t.is(".visuallyhidden, .u-hiddenVisually") ? t : t.find(".visuallyhidden, .u-hiddenVisually")),
                        e
                    },
                    shouldShow: function() {
                        return this.getLabelText() != this.getTitle() || this.hasPartiallyHiddenLabelText() || this.hasHiddenLabel()
                    },
                    show: function() {
                        var i, n, o, r, a, s, u;
                        if (this.shouldShow() && this.hasContent() && this.enabled) {
                            switch (e(this.timeout),
                            t(".tooltip").remove(),
                            this.$tip = null,
                            i = this.tip(),
                            this.setContent(),
                            this.options.animation && i.addClass("fade"),
                            s = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                            n = /in/.test(s),
                            this.applyARIA(),
                            i.remove().css({
                                top: 0,
                                left: 0,
                                display: "block"
                            }).appendTo(n ? this.$element : document.body),
                            o = this.getPosition(n),
                            r = i[0].offsetWidth,
                            a = i[0].offsetHeight,
                            n ? s.split(" ")[1] : s) {
                            case "bottom":
                                u = {
                                    top: o.top + o.height,
                                    left: o.left + o.width / 2 - r / 2
                                };
                                break;
                            case "bottom-right":
                                u = {
                                    top: o.top + o.height,
                                    left: o.left
                                };
                                break;
                            case "top":
                                u = {
                                    top: o.top - a,
                                    left: o.left + o.width / 2 - r / 2
                                };
                                break;
                            case "left":
                                u = {
                                    top: o.top + o.height / 2 - a / 2,
                                    left: o.left - r
                                };
                                break;
                            case "right":
                                u = {
                                    top: o.top + o.height / 2 - a / 2,
                                    left: o.left + o.width
                                }
                            }
                            this.$element.addClass("in"),
                            i.css(u).addClass(s).addClass("in"),
                            i.trigger("uiTooltipShow")
                        }
                    },
                    applyARIA: function() {
                        var t = this.getLabelText()
                          , e = this.$element.find("img").attr("alt")
                          , i = t + e;
                        !this.hasHiddenLabel() && i.trim() != this.getTitle() && (this.tip().find(".tooltip-inner").attr({
                            role: "tooltip",
                            id: "aria-tooltip"
                        }),
                        this.$element.attr("aria-describedby", "aria-tooltip"))
                    },
                    setContent: function() {
                        var t = this.tip();
                        t.find(".tooltip-inner").text(this.getTitle()),
                        t.removeClass("fade in top bottom left right")
                    },
                    hide: function() {
                        var i = this
                          , n = this.tip();
                        e(i.timeout),
                        this.$element.removeAttr("aria-describedby"),
                        n.removeClass("in"),
                        this.$element.removeClass("in"),
                        n.trigger("uiTooltipHide"),
                        t.support.transition && this.$tip.hasClass("fade") ? function() {
                            var e = setTimeout(function() {
                                n.off(t.support.transition.end).remove()
                            }, 500);
                            n.one(t.support.transition.end, function() {
                                clearTimeout(e),
                                n.remove()
                            })
                        }() : n.remove()
                    },
                    fixTitle: function() {
                        var t = this.$element;
                        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").removeAttr("title")
                    },
                    setTitle: function(t) {
                        this.$element.attr("data-original-title", t || "")
                    },
                    getTitle: function() {
                        var t, e = this.$element, i = this.options;
                        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title),
                        t = (t || "").toString().replace(/(^\s*|\s*$)/, "")
                    },
                    hasContent: function() {
                        return this.getTitle()
                    },
                    getPosition: function(e) {
                        var i = this.$element;
                        i.is("a") && i.find(".icon,.Icon,i,img").length && (i = i.find(".icon,.Icon,i,img"));
                        var n = i.offset();
                        return i.data("tooltip-top") && (n.top = parseInt(i.data("tooltip-top"))),
                        i.data("tooltip-left") && (n.left = parseInt(i.data("tooltip-left"))),
                        t.extend({}, e ? {
                            top: 0,
                            left: 0
                        } : n, {
                            width: i[0].offsetWidth,
                            height: i[0].offsetHeight
                        })
                    },
                    tip: function() {
                        return this.$tip = this.$tip || t(this.options.template)
                    },
                    validate: function() {
                        this.$element[0].parentNode || (this.hide(),
                        this.$element = null,
                        this.options = null)
                    },
                    enable: function() {
                        this.enabled = !0
                    },
                    disable: function() {
                        this.enabled = !1
                    },
                    toggleEnabled: function() {
                        this.enabled = !this.enabled
                    },
                    toggle: function() {
                        this[this.tip().hasClass("in") ? "hide" : "show"]()
                    }
                },
                t.fn.tooltip = function(e) {
                    var i = Array.prototype.slice.call(arguments, 1);
                    return this.each(function() {
                        var n = t(this)
                          , o = n.data("tooltip")
                          , a = "object" == typeof e && e;
                        o || n.data("tooltip", o = new r(this,a)),
                        "string" == typeof e && o[e].apply(o, i)
                    })
                }
                ,
                t.fn.tooltip.clearAllPendingTimeouts = n,
                t.fn.tooltip.Constructor = r,
                t.fn.tooltip.defaults = {
                    animation: !0,
                    delay: 1e3,
                    selector: !1,
                    placement: "top",
                    trigger: "hover",
                    title: "",
                    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
                }
            }(n),
            t.exports = n
        }()
    },
    "/tFf": function(t, e, i) {
        "use strict";
        function n() {
            this.handleNewerTimelineItems = function(t, e) {
                this.scribeInteractiveResults({
                    element: "newer",
                    action: "results"
                }, e.items, e)
            }
            ,
            this.handleRangeTimelineItems = function(t, e) {
                this.scribeInteractiveResults({
                    element: "range",
                    action: "results"
                }, e.items, e)
            }
            ,
            this.handlePeriodPress = function(t, e) {
                this.scribe({
                    element: "period_press",
                    action: "results"
                })
            }
            ,
            this.handleTopBarBirdClick = function(t, e) {
                this.scribe({
                    component: "top_bar",
                    element: "bird",
                    action: "results"
                })
            }
            ,
            this.handleUserComposedTweet = function(t, e) {
                this.scribe({
                    element: "composed_tweet",
                    action: "results"
                })
            }
            ,
            this.handleStreamingInjection = function() {
                this.scribe({
                    element: "streaming_injection",
                    action: "results"
                })
            }
            ,
            this.handlePushStateInjection = function(t, e) {
                this.scribe({
                    element: "pushstate_injection",
                    action: "results"
                })
            }
            ,
            this.handleProfileClick = function(t, e) {
                var i = e.sourceEventData || e
                  , n = i.isMentionClick ? "mention_click" : "profile_click";
                if (e.user_id && (i.userId = e.user_id),
                i.interactionInsideCard)
                    this.scribeCardAction(n, t, i);
                else {
                    var o = this.addConversationScribeContext({
                        action: n
                    }, i, !0);
                    this.scribeInteraction(o, i)
                }
            }
            ,
            this.scribeItemAction = function(t, e, i) {
                var n = this.addConversationScribeContext({
                    action: t
                }, i);
                this.scribeInteraction(n, i)
            }
            ,
            this.scribeSearchTagClick = function(t, e) {
                var i = "uiCashtagClick" === t.type ? "cashtag" : "hashtag";
                this.scribeInteraction({
                    element: i,
                    action: "search"
                }, e)
            }
            ,
            this.scribeGeoPivotClick = function(t, e) {
                var i = {
                    context: e.placeId,
                    event_value: e.tweetId
                };
                this.scribeInteraction({
                    element: "place_pivot",
                    action: "click"
                }, e, i)
            }
            ,
            this.scribeLinkClick = function(t, e) {
                var i = {};
                e.tcoUrl && (i.message = e.tcoUrl),
                e.text && 0 === e.text.indexOf("pic.twitter.com") && (e.url = "http://" + e.text),
                this.scribeInteraction("open_link", e, i)
            }
            ,
            this.scribeQuoteTweetClick = function(t, e) {
                this.scribe({
                    component: "tweet",
                    element: "quoted_tweet",
                    action: "click"
                }, e, {
                    items: e.items
                })
            }
            ,
            this.scribeCardAction = function(t, e, i) {
                i && i.hasCard && this.scribeCardInteraction(t, i)
            }
            ,
            this.scribeNewItemsBarClick = function(t, e) {
                var i = {
                    event_info: "unread_count",
                    event_value: e.unreadCount
                };
                e.items && (i.items = e.items),
                this.scribe({
                    component: "tweet",
                    element: "new_tweets_bar",
                    action: "click"
                }, e, i)
            }
            ,
            this.after("initialize", function() {
                this.on("uiNewItemsBarClick", this.scribeNewItemsBarClick),
                this.scribeOnEvent("uiNewItemsBarShown", {
                    component: "tweet",
                    element: "new_tweets_bar",
                    action: "show"
                }),
                this.scribeOnEvent("uiNewItemsBarHidden", {
                    component: "tweet",
                    element: "new_tweets_bar",
                    action: "hide"
                }),
                this.on(document, "uiHasInjectedNewTimeline", this.handleNewerTimelineItems),
                this.on(document, "uiHasInjectedRangeTimelineItems", this.handleRangeTimelineItems),
                this.on(document, "uiUserPressedPeriodAndSawNewTweets", this.handlePeriodPress),
                this.on(document, "uiUserPushStateInjectedTweets", this.handlePushStateInjection),
                this.on(document, "uiUserClickedTopBarBirdAndSawNewTweets", this.handleTopBarBirdClick),
                this.on(document, "uiUserComposedTweet", this.handleUserComposedTweet),
                this.on(document, "uiUserSawItemsViaStreamingInjection", this.handleStreamingInjection),
                this.on(document, "uiShowProfileNewWindow", this.handleProfileClick),
                this.on(document, "uiItemSelected", this.scribeItemAction.bind(this, "select")),
                this.on(document, "uiHashtagClick uiCashtagClick", this.scribeSearchTagClick),
                this.on(document, "uiGeoPivotClick", this.scribeGeoPivotClick),
                this.on(document, "uiItemLinkClick", this.scribeLinkClick),
                this.on(document, "uiQuoteTweetClick", this.scribeQuoteTweetClick),
                this.on(document, "uiCardInteractionLinkClick", this.scribeCardAction.bind(this, "click")),
                this.on(document, "uiCardExternalLinkClick", this.scribeCardAction.bind(this, "open_link")),
                this.on(document, "uiItemSelected", this.scribeCardAction.bind(this, "show")),
                this.on(document, "uiMapShow", this.scribeItemAction.bind(this, "show")),
                this.on(document, "uiMapClick", this.scribeItemAction.bind(this, "click")),
                this.on(document, "uiShareViaEmailDialogOpened", this.scribeItemAction.bind(this, "open"))
            })
        }
        var o = i("DBjh")
          , r = i("gcfh")
          , a = i("tPBl")
          , s = i("Vuuo");
        e.a = Object(o.default)(n, r.a, a.a, s.a)
    },
    "/zzY": function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    0: function(t, e, i) {
        i("jTWp"),
        i("Uimh"),
        i("Az+4"),
        i("fRuk"),
        i("jZXM"),
        i("hATt"),
        i("WXBK"),
        i("r8Bt"),
        i("DBjh"),
        i("q9/C"),
        i("GUGq"),
        i("0d4m"),
        i("XcBa"),
        i("8JB6"),
        i("kxx+"),
        i("YzIt"),
        i("DldO"),
        i("1QVz"),
        i("DNqT"),
        i("H3ms"),
        t.exports = i("8Wjb")
    },
    "0d4m": function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("8JB6");
        e.default = n.default
    },
    "0n/7": function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                resultsSelector: ".typeahead-dm-conversation-items",
                itemSelector: ".typeahead-dm-conversation-item",
                resultsClass: "has-results"
            }),
            this.render = function(t, e) {
                var i = e && e.suggestions && e.suggestions.dmConversations
                  , n = (i || []).map(this.createSuggestion, this);
                this.showSuggestions(n)
            }
            ,
            this.createSuggestion = function(t) {
                var e = this.template.clone(!1);
                return e.find("[role='option']").html(t.html),
                e.data("item", {
                    type: "dmConversation",
                    suggestion: t
                }),
                e
            }
            ,
            this.selectConversation = function(t, e) {
                if (e && e.item && "dmConversation" === e.item.type) {
                    var i = e.item.suggestion;
                    this.trigger("uiRenderConversationView", {
                        conversation_id: i.id,
                        name: i.emojified_title || i.title
                    })
                }
            }
            ,
            this.showSuggestions = function(t) {
                t && t.length ? this.results.html(t).addClass(this.attr.resultsClass) : this.results.empty().removeClass(this.attr.resultsClass)
            }
            ,
            this.after("initialize", function() {
                this.results = this.select("resultsSelector"),
                this.template = this.select("itemSelector").first().clone(!1),
                this.on("uiTypeaheadRenderResults", this.render),
                this.on("uiTypeaheadItemSelected", this.selectConversation)
            })
        }
        var o = i("DBjh");
        e.a = Object(o.default)(n)
    },
    "0oQ4": function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return Object.getPrototypeOf
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    "0qoN": function(t, e, i) {
        var n, o;
        n = [i("rTPn")],
        void 0 !== (o = function(t) {
            "use strict";
            return t._evalUrl = function(e) {
                return t.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }
            ,
            t._evalUrl
        }
        .apply(e, n)) && (t.exports = o)
    },
    "0y9Y": function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    tweetHashtagLinkSelector: ".js-stream-tweet .twitter-hashtag, .permalink-tweet .twitter-hashtag",
                    tweetLinkSelector: ".js-stream-tweet .twitter-timeline-link, .permalink-tweet .twitter-timeline-link",
                    mediaTagUserSelector: ".popup-tagged-user-list .js-user-profile-link, .media-tagging-block .js-user-profile-link",
                    statsName: "swift_promoted_logger"
                }),
                this.logEvent = function(t, e, i) {
                    var n = {
                        url: "/i/promoted_content/log.json",
                        data: t,
                        eventData: {},
                        success: "dataLogEventSuccess",
                        error: "dataLogEventError",
                        async: !e,
                        noAbortOnNavigate: !0
                    };
                    i || a.a.getDecider("promoted_logging_force_post") ? this.post(n) : this.get(n)
                }
                ,
                this.isEarnedMedia = function(t) {
                    return "earned" === t
                }
                ,
                this.onWillShowSignupDialog = function() {
                    this.willShowSignupDialog = !0
                }
                ,
                this.onDialogClosed = function() {
                    this.showSignupDialog = !1,
                    this.promotedTrendData && (this.logPromotedTrendImpression(this.promotedTrendData),
                    this.promotedTrendData = null)
                }
                ,
                this.possiblyLogPromotedTrendImpression = function(t, e) {
                    if ("clock" !== e.source) {
                        var i = e.items.filter(function(t) {
                            return !!t.promotedTrendId
                        });
                        if (i.length) {
                            var n = i[0];
                            if (this.willShowSignupDialog)
                                return void (this.promotedTrendData = n);
                            this.logPromotedTrendImpression(n)
                        }
                    }
                }
                ,
                this.logPromotedEvent = function(t, e) {
                    this.logEvent(e)
                }
                ,
                this.logPromotedTrendImpression = function(t) {
                    this.logEvent({
                        event: "i",
                        promoted_trend_id: t.promotedTrendId
                    })
                }
                ,
                this.logPromotedTrendClick = function(t, e) {
                    e.promotedTrendId && this.logEvent({
                        event: "c",
                        promoted_trend_id: e.promotedTrendId
                    }, !0)
                }
                ,
                this.logPromotedTweetImpressionForViewport = function(t, e) {
                    var i = this;
                    e.items.forEach(function(t) {
                        return i.logEvent({
                            event: "impression",
                            impression_id: t.impressionId,
                            earned: i.isEarnedMedia(t.disclosureType)
                        })
                    })
                }
                ,
                this.logPromotedTweetQualifiedImpressions = function(t, e) {
                    var i = this;
                    e.items.forEach(function(t) {
                        return i.logEvent({
                            event: "long_dwell_view",
                            impression_id: t.impressionId,
                            earned: i.isEarnedMedia(t.disclosureType)
                        })
                    })
                }
                ,
                this.logPromotedTweetLinkClick = function(e) {
                    var i = t(e.target).closest("[data-impression-id]").attr("data-impression-id")
                      , n = t(e.target).closest("[data-impression-id]").attr("data-disclosure-type")
                      , o = t(e.target).closest(this.attr.tweetLinkSelector).attr("href");
                    i && this.logEvent({
                        event: "url_click",
                        impression_id: i,
                        earned: this.isEarnedMedia(n),
                        url: o
                    }, !0)
                }
                ,
                this.logPromotedTweetMediaTagClick = function(e) {
                    var i = t(e.target).closest("[data-impression-id]").attr("data-impression-id")
                      , n = t(e.target).closest("[data-impression-id]").attr("data-disclosure-type");
                    i && this.logEvent({
                        event: "user_mention_click",
                        impression_id: i,
                        earned: this.isEarnedMedia(n)
                    }, !0)
                }
                ,
                this.logPromotedTweetHashtagClick = function(e) {
                    var i = t(e.target).closest("[data-impression-id]").attr("data-impression-id")
                      , n = t(e.target).closest("[data-impression-id]").attr("data-disclosure-type");
                    i && this.logEvent({
                        event: "hashtag_click",
                        impression_id: i,
                        earned: this.isEarnedMedia(n)
                    }, !0)
                }
                ,
                this.logPromotedUserImpression = function(t, e) {
                    e.users.filter(function(t) {
                        return t.impressionId
                    }).forEach(function(t) {
                        this.logEvent({
                            event: "impression",
                            impression_id: t.impressionId
                        })
                    }, this)
                }
                ,
                this.logPromotedUserClick = function(t, e) {
                    var i = e.impressionId;
                    if (i) {
                        var n = this.isEarnedMedia(e.disclosureType);
                        "avatar" === e.profileClickTarget ? this.logEvent({
                            event: "profile_image_click",
                            impression_id: i,
                            earned: n
                        }) : e.isMentionClick ? this.logEvent({
                            event: "user_mention_click",
                            impression_id: i,
                            earned: n
                        }) : e.isPromotedBadgeClick ? this.logEvent({
                            event: "footer_profile",
                            impression_id: i,
                            earned: n
                        }) : this.logEvent({
                            event: "screen_name_click",
                            impression_id: i,
                            earned: n
                        })
                    }
                }
                ,
                this.logPromotedUserDismiss = function(t, e) {
                    var i = e.impressionId;
                    i && this.logEvent({
                        event: "dismiss",
                        impression_id: i
                    })
                }
                ,
                this.logPromotedTweetDismiss = function(t, e) {
                    var i = e.impressionId
                      , n = e.disclosureType;
                    i && this.logEvent({
                        event: "dismiss",
                        impression_id: i,
                        earned: this.isEarnedMedia(n)
                    })
                }
                ,
                this.logPromotedTweetDetails = function(t, e) {
                    var i = e.impressionId
                      , n = e.disclosureType
                      , o = e.embeddedMediaLogged
                      , r = e.playableMedia && a.a.getDecider("promoted_video_logging_enabled");
                    !i || o || r || this.logEvent({
                        event: "view_details",
                        impression_id: i,
                        earned: this.isEarnedMedia(n)
                    })
                }
                ,
                this.logPromotedTweetCardUrlClick = function(t, e) {
                    var i = e.impressionId
                      , n = e.disclosureType
                      , o = e.cardEvent;
                    if (i) {
                        var r = {
                            event: "card_url_click",
                            impression_id: i,
                            earned: this.isEarnedMedia(n)
                        };
                        o ? (r.card_event = o,
                        this.logEvent(r, !1, !0)) : this.logEvent(r)
                    }
                }
                ,
                this.logPromotedTweetEmbeddedMedia = function(t, e) {
                    var i = e.impressionId
                      , n = e.disclosureType;
                    i && this.logEvent({
                        event: "embedded_media",
                        impression_id: i,
                        earned: this.isEarnedMedia(n)
                    })
                }
                ,
                this.logPromotedPlayableMediaEvent = function(t, e) {
                    if (a.a.getDecider("promoted_video_logging_enabled")) {
                        var i = e.impressionId
                          , n = e.disclosureType;
                        if (i) {
                            var o = {
                                event: e.name,
                                impression_id: i,
                                earned: this.isEarnedMedia(n),
                                playlist_url: e.playlist_url
                            };
                            void 0 !== e.video_uuid && (o.video_uuid = e.video_uuid),
                            void 0 !== e.video_type && (o.video_type = e.video_type),
                            void 0 !== e.card_event && (o.card_event = e.card_event),
                            void 0 !== e.engagement_metadata && (o.engagement_metadata = e.engagement_metadata),
                            this.logEvent(o)
                        }
                    }
                }
                ,
                this.logPromotedMacawCardClickEvent = function(t, e) {
                    var i = e.impressionId;
                    i && this.logEvent({
                        event: e.event,
                        impression_id: i,
                        earned: e.earned
                    }, e.sync)
                }
                ,
                this.after("initialize", function() {
                    this.on(document, "uiWillShowSignupDialog", this.onWillShowSignupDialog),
                    this.on(document, "uiDialogClosed", this.onDialogClosed),
                    this.on("uiTrendsDisplayed", this.possiblyLogPromotedTrendImpression),
                    this.on("uiTrendSelected", this.logPromotedTrendClick),
                    this.on("click", {
                        tweetLinkSelector: this.logPromotedTweetLinkClick,
                        tweetHashtagLinkSelector: this.logPromotedTweetHashtagClick,
                        mediaTagUserSelector: this.logPromotedTweetMediaTagClick
                    }),
                    this.on("uiHasClickedTweet", this.logPromotedTweetDetails),
                    this.on("uiTweetDismissed", this.logPromotedTweetDismiss),
                    this.on("uiPromotedTweetsInViewport", this.logPromotedTweetQualifiedImpressions),
                    this.on("uiPromotedTweets1pxInViewport", this.logPromotedTweetImpressionForViewport),
                    this.on("uiUsersDisplayed", this.logPromotedUserImpression),
                    this.on("uiDismissUserRecommendation", this.logPromotedUserDismiss),
                    this.on("uiShowProfilePopup uiShowProfileNewWindow", this.logPromotedUserClick),
                    this.on(window, "uiCardUrlClick", this.logPromotedTweetCardUrlClick),
                    this.on("uiEmbeddedMedia", this.logPromotedTweetEmbeddedMedia),
                    this.on("uiPlayableMediaEvent", this.logPromotedPlayableMediaEvent),
                    this.on("uiMacawCardClicked", this.logPromotedMacawCardClickEvent),
                    this.on("uiLogPromotedEvent", this.logPromotedEvent)
                })
            }
            var o = i("DBjh")
              , r = i("VtWx")
              , a = i("IAMj")
              , s = Object(o.default)(n, r.a);
            e.a = s
        }
        ).call(e, i("4kSj"))
    },
    "1QVz": function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t) {
            function n(t) {
                window.console || (window.console = {}),
                Y.forEach(function(e) {
                    !t && console[e] || (console[e] = K)
                })
            }
            function o() {
                return Object(w.a)("twid")
            }
            function r() {
                o() !== Q && window.location.reload(!0)
            }
            function a(e) {
                var i = e.environment
                  , a = "production" === i
                  , w = "preflight" === i;
                n((a || w) && !window.DEBUG.enabled),
                s.a.set(e.formAuthenticityToken),
                S.a.set(e),
                C.a.set(e),
                z.a.setEmojiAssetsPath(e.emojiAssetsPath),
                H.a.attachTo(document, e, {
                    noTeardown: !0
                }),
                g.a.attachTo(document, {
                    noTeardown: !0
                }),
                Object(u.a)(e),
                B.a.attachTo(document, {
                    scribeContext: {
                        client: "web",
                        page: e.pageName
                    }
                }),
                m.a.attachTo(document, {
                    noTeardown: !0
                }),
                O.a.attachTo(document),
                D.a.attachTo(document, {
                    pageViewScribeData: e.pageViewScribeData
                }),
                E.a.attachTo(document, e, {
                    routes: e.routes,
                    noTeardown: !0
                }),
                c.a.attachTo(document, {
                    pushState: e.pushState,
                    viewContainer: e.viewContainer,
                    noTeardown: !0
                }),
                d.a.attachTo(document),
                l.a.attachTo(document, {
                    init_data: e,
                    pushState: e.pushState,
                    assetsBasePath: e.assetsBasePath,
                    pushStateRequestHeaders: e.pushStateRequestHeaders,
                    pushStatePageLimit: 1e3 * e.deciders.push_state_size,
                    viewContainer: e.viewContainer,
                    noTeardown: !0
                }),
                Object($.a)(e),
                b.a.attachTo(document, {
                    noTeardown: !0
                }),
                t("input,textarea").placeholder(),
                v.a.attachTo("#message-drawer", {
                    noTeardown: !0,
                    minTimeout: "selenium" === e.environment ? 5e3 : void 0
                }),
                A.a.attachTo(document, {
                    noTeardown: !0
                }),
                I.a.attachTo(document, {
                    noTeardown: !0
                }),
                j.a.attachTo(document, {
                    noTeardown: !0
                }),
                P.a.attachTo(document, {
                    noTeardown: !0
                }),
                N.a.attachTo(document, {
                    noTeardown: !0
                }),
                L.a.attachTo(document, {
                    noTeardown: !0
                }),
                k.a.attachTo(document, {
                    noTeardown: !0
                }),
                e.loggedIn || h.a.attachTo(".js-language-dropdown"),
                e.initialState && e.initialState.ttft_navigation && (V = !0),
                V && y.a.attachTo(document, {
                    pageName: e.pageName,
                    sectionName: e.sectionName
                }),
                T.a.attachTo(".eu-cookie-notice"),
                x.a.attachTo(".dtab-banner"),
                e.loggedIn && (Q = o(),
                setInterval(r, 1e4)),
                e.deciders && e.deciders.partnerIdSyncEnabled && q.a.attachTo(document, e),
                f.a.attachTo(document, {
                    pageName: e.pageName,
                    sectionName: e.sectionName,
                    screenName: e.screenName,
                    loggedIn: e.loggedIn
                }),
                e.loggedIn && W.a.attachTo(document.body, {
                    nightModeActivated: e.night_mode_activated,
                    noTeardown: !0
                }),
                p.a.attachTo(document),
                R.a.attachTo(document, e),
                U.a.attachTo(document, {
                    noTeardown: !0
                }),
                M.a.attachTo("#copy-link-to-tweet-dialog", e, {
                    noTeardown: !0
                }),
                Object(F.a)(e)
            }
            e.default = a;
            var s = i("PYQz")
              , u = i("OPah")
              , c = i("STPD")
              , l = i("6Q0p")
              , d = i("D0I3")
              , h = i("fk4z")
              , f = i("+ccy")
              , p = i("oLke")
              , g = i("sb1D")
              , m = i("0y9Y")
              , v = i("DHQD")
              , b = i("qf1A")
              , y = i("Mwqt")
              , w = i("dsp6")
              , S = i("IAMj")
              , C = i("y3HV")
              , T = i("q59y")
              , x = i("Anz+")
              , E = i("2lph")
              , k = i("rwIS")
              , O = i("J83E")
              , D = i("CGZ6")
              , A = i("czo9")
              , I = i("x4tu")
              , j = i("LFmL")
              , P = i("DkBL")
              , N = i("CtpE")
              , L = i("unxK")
              , R = i("5Hmc")
              , M = i("w6V8")
              , U = i("qq5T")
              , F = i("Ziu4")
              , B = i("t6Jz")
              , $ = i("kX/m")
              , q = i("Dpkb")
              , H = i("L/VL")
              , z = i("tLYs")
              , W = i("NuvH")
              , G = i("h9ZS")
              , V = (i.n(G),
            !1)
              , Y = ["log", "warn", "debug", "info"]
              , K = function() {}
              , Q = ""
        }
        .call(e, i("4kSj"))
    },
    "1VmT": function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("rYQx")],
        void 0 !== (o = function(t) {
            "use strict";
            return t.expr.match.needsContext
        }
        .apply(e, n)) && (t.exports = o)
    },
    "1msk": function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("zpla"), i("QSv/"), i("rTPn")],
        void 0 !== (o = function(t, e, i) {
            "use strict";
            var n = []
              , o = /(=)\?(?=&|$)|\?\?/;
            t.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var i = n.pop() || t.expando + "_" + e++;
                    return this[i] = !0,
                    i
                }
            }),
            t.ajaxPrefilter("json jsonp", function(e, r, a) {
                var s, u, c, l = !1 !== e.jsonp && (o.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && o.test(e.data) && "data");
                if (l || "jsonp" === e.dataTypes[0])
                    return s = e.jsonpCallback = t.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    l ? e[l] = e[l].replace(o, "$1" + s) : !1 !== e.jsonp && (e.url += (i.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
                    e.converters["script json"] = function() {
                        return c || t.error(s + " was not called"),
                        c[0]
                    }
                    ,
                    e.dataTypes[0] = "json",
                    u = window[s],
                    window[s] = function() {
                        c = arguments
                    }
                    ,
                    a.always(function() {
                        void 0 === u ? t(window).removeProp(s) : window[s] = u,
                        e[s] && (e.jsonpCallback = r.jsonpCallback,
                        n.push(s)),
                        c && t.isFunction(u) && u(c[0]),
                        c = u = void 0
                    }),
                    "script"
            })
        }
        .apply(e, n)) && (t.exports = o)
    },
    "1nM6": function(t, e, i) {
        var n, o;
        n = [i("Olpr")],
        void 0 !== (o = function(t) {
            "use strict";
            return t.parseXML = function(e) {
                var i;
                if (!e || "string" != typeof e)
                    return null;
                try {
                    i = (new window.DOMParser).parseFromString(e, "text/xml")
                } catch (t) {
                    i = void 0
                }
                return i && !i.getElementsByTagName("parsererror").length || t.error("Invalid XML: " + e),
                i
            }
            ,
            t.parseXML
        }
        .apply(e, n)) && (t.exports = o)
    },
    "1ocf": function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[1];
            Promise.all([i.e(0), i.e(5)]).then(function(t) {
                var o = {
                    import: i("+sj1").default,
                    matches: i("klIS").default,
                    suggestions: i("8Nlb").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    "2+NM": function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("kdUt"), i("DdOc"), i("LTWT"), i("rY9R"), i("Yg0w"), i("x8As"), i("9DDo"), i("hnYP"), i("qtBK"), i("YXmp"), i("IHon"), i("TzBB"), i("TLAG"), i("5JGd"), i("Y2CE"), i("rYQx")],
        void 0 !== (o = function(t, e, i, n, o, r, a, s, u, c, l, d, h, f) {
            "use strict";
            function p(t) {
                if (t in C)
                    return t;
                for (var e = t[0].toUpperCase() + t.slice(1), i = S.length; i--; )
                    if ((t = S[i] + e)in C)
                        return t
            }
            function g(t, e, i) {
                var n = r.exec(e);
                return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
            }
            function m(e, i, n, o, r) {
                var a, u = 0;
                for (a = n === (o ? "border" : "content") ? 4 : "width" === i ? 1 : 0; a < 4; a += 2)
                    "margin" === n && (u += t.css(e, n + s[a], !0, r)),
                    o ? ("content" === n && (u -= t.css(e, "padding" + s[a], !0, r)),
                    "margin" !== n && (u -= t.css(e, "border" + s[a] + "Width", !0, r))) : (u += t.css(e, "padding" + s[a], !0, r),
                    "padding" !== n && (u += t.css(e, "border" + s[a] + "Width", !0, r)));
                return u
            }
            function v(e, i, n) {
                var o, r = !0, s = u(e), c = "border-box" === t.css(e, "boxSizing", !1, s);
                if (e.getClientRects().length && (o = e.getBoundingClientRect()[i]),
                o <= 0 || null == o) {
                    if (o = l(e, i, s),
                    (o < 0 || null == o) && (o = e.style[i]),
                    a.test(o))
                        return o;
                    r = c && (f.boxSizingReliable() || o === e.style[i]),
                    o = parseFloat(o) || 0
                }
                return o + m(e, i, n || (c ? "border" : "content"), r, s) + "px"
            }
            var b = /^(none|table(?!-c[ea]).+)/
              , y = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , w = {
                letterSpacing: "0",
                fontWeight: "400"
            }
              , S = ["Webkit", "Moz", "ms"]
              , C = o.createElement("div").style;
            return t.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var i = l(t, "opacity");
                                return "" === i ? "1" : i
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(e, i, n, o) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var a, s, u, c = t.camelCase(i), l = e.style;
                        if (i = t.cssProps[c] || (t.cssProps[c] = p(c) || c),
                        u = t.cssHooks[i] || t.cssHooks[c],
                        void 0 === n)
                            return u && "get"in u && void 0 !== (a = u.get(e, !1, o)) ? a : l[i];
                        s = typeof n,
                        "string" === s && (a = r.exec(n)) && a[1] && (n = d(e, i, a),
                        s = "number"),
                        null != n && n === n && ("number" === s && (n += a && a[3] || (t.cssNumber[c] ? "" : "px")),
                        f.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (l[i] = "inherit"),
                        u && "set"in u && void 0 === (n = u.set(e, n, o)) || (l[i] = n))
                    }
                },
                css: function(e, i, n, o) {
                    var r, a, s, u = t.camelCase(i);
                    return i = t.cssProps[u] || (t.cssProps[u] = p(u) || u),
                    s = t.cssHooks[i] || t.cssHooks[u],
                    s && "get"in s && (r = s.get(e, !0, n)),
                    void 0 === r && (r = l(e, i, o)),
                    "normal" === r && i in w && (r = w[i]),
                    "" === n || n ? (a = parseFloat(r),
                    !0 === n || isFinite(a) ? a || 0 : r) : r
                }
            }),
            t.each(["height", "width"], function(e, i) {
                t.cssHooks[i] = {
                    get: function(e, n, o) {
                        if (n)
                            return !b.test(t.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? v(e, i, o) : c(e, y, function() {
                                return v(e, i, o)
                            })
                    },
                    set: function(e, n, o) {
                        var a, s = o && u(e), c = o && m(e, i, o, "border-box" === t.css(e, "boxSizing", !1, s), s);
                        return c && (a = r.exec(n)) && "px" !== (a[3] || "px") && (e.style[i] = n,
                        n = t.css(e, i)),
                        g(e, n, c)
                    }
                }
            }),
            t.cssHooks.marginLeft = h(f.reliableMarginLeft, function(t, e) {
                if (e)
                    return (parseFloat(l(t, "marginLeft")) || t.getBoundingClientRect().left - c(t, {
                        marginLeft: 0
                    }, function() {
                        return t.getBoundingClientRect().left
                    })) + "px"
            }),
            t.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, i) {
                t.cssHooks[e + i] = {
                    expand: function(t) {
                        for (var n = 0, o = {}, r = "string" == typeof t ? t.split(" ") : [t]; n < 4; n++)
                            o[e + s[n] + i] = r[n] || r[n - 2] || r[0];
                        return o
                    }
                },
                n.test(e) || (t.cssHooks[e + i].set = g)
            }),
            t.fn.extend({
                css: function(e, n) {
                    return i(this, function(e, i, n) {
                        var o, r, a = {}, s = 0;
                        if (t.isArray(i)) {
                            for (o = u(e),
                            r = i.length; s < r; s++)
                                a[i[s]] = t.css(e, i[s], !1, o);
                            return a
                        }
                        return void 0 !== n ? t.style(e, i, n) : t.css(e, i)
                    }, e, n, arguments.length > 1)
                }
            }),
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    "2Doy": function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return n
        }),
        i.d(e, "b", function() {
            return o
        });
        var n = {
            DefaultApiError: 0,
            InvalidCoordinates: 3,
            InvalidGranularity: 4,
            InvalidAccuracy: 5,
            NoDataForPoint: 6,
            NoDataForPointRadius: 7,
            InvalidId: 8,
            InvalidMaxResults: 9,
            RockdoveError: 10,
            InvalidIp: 11,
            MustProvideCoordinatesIpQueryOrAttributes: 12,
            NoLocationForIp: 13,
            OverlimitAddressBookApi: 14,
            AddressBookDarkmoded: 15,
            AddressBookPermissionsError: 16,
            AddressBookLookupNotFound: 17,
            TooManyTerms: 18,
            RetweetDarkmoded: 19,
            NoScreenNameProvided: 20,
            ContributorsNotEnabled: 21,
            NotAuthorizedToViewUser: 22,
            BulkLookupDarkmoded: 23,
            UnsupportedProfileImageSize: 24,
            MissingQuery: 25,
            AutocompleteMustBeTrueOrFalse: 26,
            AccountLocked: 27,
            GenericDarkmode: 28,
            TimeOut: 29,
            WoeidDataUnavailable: 30,
            InvalidTimescale: 31,
            InvalidCredentials: 32,
            OverLimit: 33,
            GenericNotFound: 34,
            TrendDataUnavailable: 35,
            CantReportYourselfAsSpam: 36,
            GenericAccessDenied: 37,
            MissingParameter: 38,
            InvalidCreationToken: 39,
            RockdoveInvalidArgumentError: 41,
            InvalidAttribute: 42,
            AttributeAccessDenied: 43,
            InvalidParameter: 44,
            InvalidPlaceJson: 46,
            InvalidRequestUrl: 47,
            TimeoutRequestRainbird: 48,
            NoFollowRequest: 49,
            GenericUserNotFound: 50,
            PromotedContentOfflineError: 51,
            PromotedSearchNoQuery: 52,
            BasicAuthDisabled: 53,
            CassowaryError: 54,
            ResourceNotFound: 55,
            InvalidEmailAddress: 56,
            PasswordResetPermissionsError: 57,
            PasswordResetExpiredToken: 58,
            PasswordResetInvalidHash: 59,
            PasswordResetMismatchedEntries: 60,
            ClientNotPermitted: 61,
            CustomSaveErrors: 62,
            OtherUserSuspended: 63,
            CurrentUserSuspended: 64,
            StrictMustBeTrueOrFalse: 65,
            RequireActivityMustBeTrueOrFalse: 66,
            BackendServiceUnavailable: 67,
            EndpointDeprecated: 68,
            TalonUrlMalware: 69,
            InvalidPromotedContentLogEvent: 70,
            EmailDeliveryError: 71,
            ApplicationNotFound: 72,
            ApplicationNotDeleted: 73,
            ApplicationDomainNotRevoked: 74,
            ApplicationKeysNotReset: 75,
            ApplicationImageNotProcessed: 76,
            ApplicationNoManageRight: 77,
            ApplicationNoAdminRight: 78,
            InvalidTrimPlace: 79,
            CurationDarkmoded: 80,
            ContributorsAccessLevelNotValid: 81,
            ContributorsTargetUserNotSpecified: 82,
            ContributorsTargetUserNotValid: 83,
            TalonUrlUnrenderable: 84,
            ValidationFailure: 85,
            WrongHttpMethod: 86,
            ClientNotPrivileged: 87,
            RateLimitExceeded: 88,
            BadOauthToken: 89,
            ContributionNotPermitted: 90,
            InvalidUtf8: 91,
            SslRequired: 92,
            DmAccessRequired: 93,
            PageIsForbidden: 94,
            InvalidLanguage: 95,
            InvalidIds: 96,
            EndpointFeatureDeprecated: 97,
            FlagPossiblySensitiveScribeError: 98,
            AuthenticityTokenError: 99,
            GenericThriftException: 100,
            InvalidReverseAuthCredentials: 101,
            DarkmodedFeature: 102,
            TrendsAvailableTransientException: 103,
            ListAdminRightsError: 104,
            MaximumMembersExceeded: 105,
            AddBlockedUserError: 106,
            NoTargetUser: 107,
            TargetUserNotFound: 108,
            TargetUserNotRelatedToList: 109,
            ListNotAMemberError: 110,
            TargetUserSuspended: 111,
            InsufficientListParameters: 112,
            InsufficientTargetUserParameters: 113,
            InvalidCurrentPassword: 114,
            ListUnauthorizedSubscriptionError: 115,
            PasswordSmsResetPwSeedNotExist: 116,
            PasswordSmsResetOptOut: 117,
            ArgumentTooLarge: 118,
            NarrowcastNotSupported: 119,
            AccountUpdateFailure: 120,
            InvalidHexColor: 121,
            UpdateProfileColorsError: 122,
            ImageUpdateError: 123,
            AttributeUpdateError: 124,
            GeolocationError: 125,
            LoggedOut: 126,
            ArchiveDeprecated: 127,
            LocationUpdateFailure: 128,
            EmailRateLimitExceeded: 129,
            OverCapacity: 130,
            InternalError: 131,
            UnusedBackgroundUploadError: 132,
            NoSelectedBackgroundError: 133,
            TooManyDevices: 134,
            OauthTimestampException: 135,
            BlockedUserError: 136,
            PushForbidden: 137,
            FollowingInformationUnavailable: 138,
            DuplicateFavorite: 139,
            FollowingStatusUnauthorized: 140,
            InactiveUser: 141,
            ProtectedStatusFavoriteError: 142,
            FavoriteRateLimitExceeded: 143,
            StatusNotFound: 144,
            RecordInvalid: 145,
            OtherUserNotBlocked: 146,
            SelfBlockError: 147,
            UnsupportedDevice: 148,
            InvalidEnabledFor: 149,
            DirectMessageOtherUserNotFollowing: 150,
            MessageSendError: 151,
            DirectMessageDestroyPermissionsError: 152,
            DirectMessageDeleteError: 153,
            DirectMessageNotFound: 154,
            MessageSendUnknownError: 155,
            DowntimeAlert: 156,
            VerifiedDeviceNotFound: 157,
            SelfFollowError: 158,
            GenericSuspended: 159,
            DuplicateFollowRequest: 160,
            FollowRateLimitExceeded: 161,
            FollowBlockedUserError: 162,
            IndeterminateSource: 163,
            TargetUserNotSpecified: 164,
            MultipleMissingParameters: 165,
            MultipleUserNotFound: 166,
            FollowError: 167,
            StatusNotFoundForbidden: 168,
            StatusRelatedResultsForbidden: 169,
            ForbiddenMissingParameter: 170,
            SearchDeletionError: 171,
            SearchCreationError: 172,
            ConfirmEmailExpiredCode: 173,
            ConfirmEmailInvalidCode: 174,
            ConfirmEmailInvalidStateChange: 175,
            ConfirmEmailAlreadyConfirmed: 176,
            ConfirmEmailSuccessChanged: 177,
            ConfirmEmailSuccessNew: 178,
            StatusViewForbidden: 179,
            GenericEndpointOffline: 180,
            TimeParameterOrderError: 181,
            ParameterDeprecated: 182,
            StatusActionPermissionError: 183,
            StatusUpdateError: 184,
            OverStatusUpdateLimit: 185,
            StatusTooLongError: 186,
            DuplicateStatusError: 187,
            StatusMalwareError: 188,
            StatusCreationError: 189,
            UnknownInterpreterError: 190,
            OverPhotoLimit: 191,
            OverMediaEntitiesPerUpdateLimit: 192,
            MediaTooLarge: 193,
            StatusUpdateForbidden: 194,
            InvalidRequestUrlForbidden: 195,
            TimelineAuthorizationRequired: 196,
            CategoryNotFound: 197,
            ContactLoadError: 198,
            IdsOfContactsError: 199,
            GenericForbidden: 200,
            GetRequired: 201,
            InternalApplicationAuthenticationDenied: 202,
            DeviceError: 203,
            DestinationError: 204,
            SpamRateLimitExceeded: 205,
            InvalidDeviceRelationship: 206,
            AlreadyActivated: 207,
            FormatNotSupported: 208,
            DirectMessageMustFollowFirst: 209,
            TokenLimitExceeded: 210,
            InvalidBrandBanner: 211,
            ProfileBannerUploadsDisabled: 212,
            ProcessingInProgress: 213,
            GenericBadRequest: 214,
            BadAuthenticationData: 215,
            ShareViaEmailRateLimitExceeded: 216,
            ProtectedStatusShareViaEmailError: 217,
            RestrictedAccessShareViaEmailError: 218,
            ShareViaEmailIpRateLimitExceeded: 219,
            RestrictedAuthToken: 220,
            CursorInvalid: 221,
            TieredActionSignupSpammer: 222,
            EmailTweetSendingError: 223,
            MissingEmailAddress: 224,
            TieredActionFollowSpammer: 225,
            TieredActionTweetSpammer: 226,
            TieredActionFollowCreeper: 227,
            TieredActionTweetCreeper: 228,
            AmbiguousCredentials: 229,
            UserSleeping: 230,
            RequiresLoginVerification: 231,
            CannotEnableLoginVerificationPhone: 232,
            CannotEnableLoginVerificationAlreadyEnabled: 233,
            CannotEnableLoginVerificationUnconfirmedEmail: 234,
            ExpiredLoginVerificationRequest: 235,
            IncorrectChallengeResponse: 236,
            MissingLoginVerificationRequest: 237,
            NewPasswordWeak: 238,
            BadGuestToken: 239,
            TieredActionSignupSpammerPhoneVerify: 240,
            RejectedLoginVerificationRequest: 241,
            DeactivatedUser: 242,
            OverLimitLogin: 243,
            ForcePasswordReset: 244,
            OverLimitLoginVerificationStart: 245,
            OverLimitLoginVerificationAttempt: 246,
            CannotEnableLoginVerificationPush: 247,
            LoginVerificationAlreadyEnabled: 248,
            CloudIpRestricted: 249,
            UserMustBeAlcoholAgeScreened: 250,
            EndpointRetired: 251,
            DmSpamTimeout: 252,
            NotYetApprovedLoginVerification: 253,
            OfflineCodeSync: 254,
            RequiresTemporaryPassword: 255,
            CannotFollowFromCountry: 256,
            BadDeviceToken: 257,
            AppsCreateRequiresConfirmedEmail: 258,
            AppsCreateRequiresVerifiedPhone: 259,
            AppsCreateRejectedForAbuse: 260,
            AppInReadOnlyMode: 261,
            CurrentUserNeedsPhoneVerification: 262,
            TieredActionChallengeCaptcha: 263,
            TargetUserNotFollowing: 264,
            TargetUserNotFavoriteFollowing: 265,
            FailureSendingLoginVerificationRequest: 266,
            InvalidCredentialsOneFactorEligible: 267,
            MissingOneFactorLoginVerificationParams: 268,
            UserIsNotSdkUser: 269,
            AppsUpdateSettingsRequiresVerifiedPhone: 270,
            SelfMuteError: 271,
            NotMutingTargetUser: 272,
            ScheduledInPast: 273,
            ScheduledTooFarInFuture: 274,
            TooLateToEdit: 275,
            ScheduleInvalid: 276,
            DirectMessageRecipientDoesNotFollowSenderWithUnverifiedPhoneNumber: 277,
            DirectMessageUserNotInConversation: 278,
            DirectMessageConversationNotFound: 279,
            DirectMessageTooManyParticipants: 280,
            DirectMessageTooFewParticipants: 281,
            DirectMessageRecipientBlocksSender: 282,
            TieredActionFavoriteSpammer: 283,
            DeviceRegistrationGeneralError: 284,
            DeviceAlreadyRegistered: 285,
            DeviceOperatorUnsupported: 286,
            UserAlreadyHasVerifiedPhone: 287,
            CannotReuseCurrentPassword: 288,
            DevicePinInvalid: 289,
            DevicePinRequired: 290,
            UnexpectedDeviceProvided: 291,
            TieredActionConversationSpammer: 292,
            SmsVerifyGeneralError: 293,
            SmsVerifyInvalidPin: 294,
            SmsVerifyRateLimitExceeded: 295,
            DtabOverrideDarkmoded: 296,
            DirectMessageCannotHaveBothTweetAndMedia: 297,
            DirectMessageTweetNotFound: 298,
            DeviceRegistrationRateExceeded: 299,
            DeviceRegistrationInvalidInput: 300,
            DeviceRegistrationPending: 301,
            DeviceRegistrationOperationFailed: 302,
            DeviceRegistrationPhoneNormalizationFailed: 303,
            DeviceRegistrationPhoneCountryDetectionFailed: 304,
            CannotIdentifyByEmail: 305,
            TieredActionAccessTokenGrantSpam: 306,
            TieredActionAccessTokenRevokeSpam: 307,
            NoSmsVerifyExists: 308,
            DeviceNotVerified: 309,
            ExpiredPin: 310,
            DirectMessageDuplicate: 311,
            LocationNameMustBeSpecified: 312,
            EULANotAccepted: 313,
            VideoTranscodingError: 314,
            ClientCaptchaRequired: 315,
            CannotContributeToYourself: 316,
            AccountHasTooManyContributors: 317,
            AccountHasTooManyContributees: 318,
            CannotChangePassword: 319,
            ContributorsAccessLevelInsufficient: 320,
            DirectMessageConversationNameTooLong: 321,
            DirectMessageGenericUserCouldNotBeAdded: 322,
            AnimatedGifMultipleImages: 323,
            InvalidMediaId: 324,
            MediaNotFound: 325,
            AccessDeniedByBouncer: 326,
            AlreadyRetweeted: 327,
            InvalidRetweetForStatus: 328,
            NonsupportingClientRequiresLoginVerification: 329,
            ContributorsGenericUserCouldNotBeAdded: 330,
            MobileSettingsUserNotFound: 331,
            MobileSettingsTemplateNotFound: 332,
            MobileSettingsFileNotFound: 333,
            MobileSettingsUnsupportedTransport: 334,
            MobileSettingsSettingNotFound: 335,
            MobileSettingsInvalidValueFound: 336,
            MobileSettingsSettingObjectNotFound: 337,
            MobileSettingsEnabledForMissing: 338,
            MobileSettingsNoDevicesFound: 339,
            MobileSettingsNoIncomingPushSettings: 340,
            MobileSettingsNoIncomingSmsSettings: 341,
            MobileSettingsIncorrectApplicationId: 342,
            MobileSettingsNoIncomingSettings: 343,
            UserActionRateLimitExceeded: 344,
            OneFactorMethodIsNotSupported: 345,
            UserIsNotOneFactorEligible: 346,
            InvalidRequestToken: 347,
            ClientApplicationNotPermitted: 348,
            DirectMessageCannotDmOtherUser: 349,
            OauthException: 350,
            MobileSettingsCouldNotUpdateSleep: 351,
            ParameterLimitExceeded: 352,
            DeniedByApiCsrfProtection: 353,
            DirectMessageTooLongError: 354,
            GenericConflict: 355,
            GenericValidationFailure: 356,
            RequiredFieldMissing: 357,
            JsonProcessingError: 358,
            ValueTooLarge: 359,
            ValueTooSmall: 360,
            ValueCannotBeEmpty: 361,
            TimeNotFuture: 362,
            InvalidCountryCodes: 363,
            InvalidTimeGranularity: 364,
            InvalidUUID: 365,
            InvalidValues: 366,
            SizeOutOfRange: 367,
            TimeNotPast: 368,
            InvalidJsonSyntax: 369,
            DigitsCannotReuseCurrentEmail: 370,
            MentionLimitInTweetExceeded: 371,
            UrlLimitInTweetExceeded: 372,
            HashtagLimitInTweetExceeded: 373,
            ExpiredQrCode: 374,
            InvalidQrCode: 375,
            MissingCredentials: 376,
            TokenRetrievalException: 377,
            TokenMissing: 378,
            DataminrUserNotLinked: 379,
            ABLiveSyncIsDisabled: 380,
            SoftUserCreationSpamDenied: 381,
            SoftUserActionSpamDenied: 382,
            CashtagLimitInTweetExceeded: 383,
            HashtagLengthLimitInTweetExceeded: 384,
            InReplyToTweetNotFound: 385,
            AttachmentTypesLimitInTweetExceeded: 386,
            NotEnoughFollowers: 387,
            FeatureAccessLimited: 388,
            DirectMessagesSenderBlocksRecipient: 389,
            IneligibleFor2faAfterModification: 403
        }
          , o = function(t) {
            return t && t.errors && t.errors[0] ? t.errors[0].code : void 0
        }
    },
    "2KB6": function(t, e, i) {
        "use strict";
        (function(t) {
            function i() {
                this.defaultAttrs({
                    navSelector: "a[data-nav]:not(.js-nonNavigable)"
                }),
                this.navEvent = function(e, i) {
                    var n = t(i.el);
                    this.trigger("uiNavigationLinkClick", {
                        scribeContext: {
                            element: n.attr("data-nav")
                        },
                        url: n.attr("href")
                    })
                }
                ,
                this.after("initialize", function(t) {
                    this.on("click", {
                        navSelector: this.navEvent
                    })
                })
            }
            e.a = i
        }
        ).call(e, i("4kSj"))
    },
    "2KxR": function(t, e) {
        t.exports = function(t, e, i, n) {
            if (!(t instanceof e) || void 0 !== n && n in t)
                throw TypeError(i + ": incorrect invocation!");
            return t
        }
    },
    "2Vbt": function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    accountsListSelector: ".js-typeahead-accounts",
                    accountsItemSelector: ".typeahead-account-item",
                    accountsShortcutSelector: ".typeahead-accounts-shortcut",
                    accountsShortcutShow: !1,
                    datasources: ["accounts"],
                    socialContextMapping: {
                        FOLLOWING: 1,
                        FOLLOWS: 8
                    }
                }),
                this.isAccountMalformedAndScribe = function(t) {
                    var e = s.a.isAccountMalformed(t);
                    return e && this.trigger("uiTypeaheadAccountMalformed"),
                    e
                }
                ,
                this.renderAccounts = function(t, e) {
                    this.$accountsList.find(this.attr.accountsItemSelector).remove();
                    var i = [];
                    if (this.attr.datasources.forEach(function(t) {
                        return i = i.concat(e.suggestions[t] || [])
                    }),
                    !i.length)
                        return void this.clearAccounts();
                    this.updateShortcut(e.queryData.query),
                    i.forEach(function(t) {
                        if (!this.isAccountMalformedAndScribe(t)) {
                            var e = this.$accountItemTemplate.clone(!1);
                            e.attr("data-user-id", t.id),
                            e.attr("data-user-screenname", t.screen_name),
                            e.data("item", t);
                            var i = e.find("a");
                            if (i.attr("href", "/" + t.screen_name),
                            i.attr("data-search-query", t.id),
                            i.find(".avatar").attr("src", this.getAvatar(t)),
                            i.find(".fullname").html(a.a.emojifyText(t.name)),
                            i.find(".username b").text(t.screen_name),
                            t.verified && i.find(".js-verified").removeClass("hidden"),
                            t.is_protected && i.find(".js-protected").removeClass("hidden"),
                            this.attr.deciders.showDebugInfo) {
                                var n = t.prefetched;
                                i.attr("title", (n ? "local" : "remote") + " user, score: " + t.rounded_score)
                            }
                            this.isInConversation(t) && e.find(".typeahead-in-conversation").removeClass("hidden");
                            var o = this.getItemContext(t);
                            o && (i.find(".typeahead-social-context").text(o),
                            i.addClass("has-social-context")),
                            e.insertBefore(this.$accountsShortcut)
                        }
                    }, this),
                    this.$accountsList.addClass("has-results"),
                    this.$accountsList.show()
                }
                ,
                this.getAvatar = function(t) {
                    var e = t.profile_image_url_https
                      , i = this.attr.deciders.showSocialContext;
                    return e && (e = e.replace(/^https?:/, ""),
                    e = i ? e : e.replace(/_normal(\..*)?$/i, "_mini$1")),
                    e
                }
                ,
                this.isMutualFollow = function(t) {
                    return this.currentUserFollowsAccount(t) && this.accountFollowsCurrentUser(t)
                }
                ,
                this.isInConversation = function(t) {
                    return this.screenNamesInConversationHash && this.screenNamesInConversationHash[t.screen_name.toLowerCase()]
                }
                ,
                this.currentUserFollowsAccount = function(t) {
                    return !!(t & this.attr.socialContextMapping.FOLLOWING)
                }
                ,
                this.accountFollowsCurrentUser = function(t) {
                    return !!(t & this.attr.socialContextMapping.FOLLOWS)
                }
                ,
                this.getSocialContext = function(t) {
                    if (0 !== t.social_proof && this.attr.deciders.showSocialContext) {
                        var e = t.social_proof;
                        if (this.isMutualFollow(e))
                            return Object(o.default)("You follow each other");
                        if (this.currentUserFollowsAccount(e))
                            return Object(o.default)("Following");
                        if (this.accountFollowsCurrentUser(e))
                            return Object(o.default)("Follows you");
                        if (t.first_connecting_user_name)
                            return t.connecting_user_count > 1 ? Object(o.default)("Followed by {{user}} and {{number}} others", {
                                user: t.first_connecting_user_name,
                                number: t.connecting_user_count
                            }) : Object(o.default)("Followed by {{user}}", {
                                user: t.first_connecting_user_name
                            })
                    }
                    return !1
                }
                ,
                this.getBusinessContext = function(t) {
                    return "enabled" === t.customer_service_state && Object(o.default)("Provides support")
                }
                ,
                this.getItemContext = function(t) {
                    var e = this.getBusinessContext(t)
                      , i = this.getSocialContext(t);
                    return e || (i || !1)
                }
                ,
                this.updateShortcut = function(e) {
                    this.$accountsShortcut.toggle(this.attr.accountsShortcutShow);
                    var i = this.$accountsShortcut.find("a");
                    i.attr("href", "/search?f=users&q=" + encodeURIComponent(e)),
                    i.attr("data-search-query", e),
                    e = t("<div/>").text(e).html(),
                    i.html(Object(o.default)("Search all people for <strong>{{query}}</strong>", {
                        query: e
                    }))
                }
                ,
                this.clearAccounts = function() {
                    this.$accountsList.removeClass("has-results"),
                    this.$accountsList.hide()
                }
                ,
                this.updateUsersInConversation = function(t, e) {
                    this.screenNamesInConversationHash = e.screenNamesInConversationHash
                }
                ,
                this.after("initialize", function() {
                    this.$accountsList = this.select("accountsListSelector").first(),
                    this.$accountsShortcut = this.select("accountsShortcutSelector").first(),
                    this.$accountItemTemplate = this.select("accountsItemSelector").first().clone(!1),
                    this.$accountsList.hide(),
                    this.on("uiTypeaheadRenderResults", this.renderAccounts),
                    this.on("uiChangedUsersInConversation", this.updateUsersInConversation)
                })
            }
            var o = i("0d4m")
              , r = i("DBjh")
              , a = i("tLYs")
              , s = i("pFsH");
            e.a = Object(r.default)(n)
        }
        ).call(e, i("4kSj"))
    },
    "2gn9": function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return {}
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    "2ij6": function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            var t = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            return t.optgroup = t.option,
            t.tbody = t.tfoot = t.colgroup = t.caption = t.thead,
            t.th = t.td,
            t
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    "2lph": function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.keyCodeToEvent = {
                    27: {
                        type: "uiShortcutEsc",
                        defaultFn: "blurTextField"
                    },
                    13: "uiShortcutEnter",
                    37: "uiShortcutLeft",
                    39: "uiShortcutRight"
                },
                this.metaKeyCodeToEvent = {
                    13: "uiShortcutCmdEnter"
                },
                this.shiftKeyCodeToEvent = {
                    13: "uiShortcutShiftEnter"
                },
                this.charsToEvent = {
                    f: "uiShortcutFavorite",
                    l: "uiShortcutFavorite",
                    r: "uiShortcutReply",
                    t: "uiShortcutRetweet",
                    u: "uiShortcutMuteUser",
                    b: "uiShortcutBlock",
                    j: "uiShortcutSelectNext",
                    k: "uiShortcutSelectPrev",
                    ".": "uiShortcutGotoTopOfScreen",
                    "/": {
                        type: "uiShortcutGotoSearch",
                        defaultFn: "focusSearch"
                    },
                    m: "uiOpenNewDM",
                    n: "uiShortcutShowTweetbox",
                    gu: "uiShortcutShowGotoUser",
                    gm: "uiNeedsDMDialog",
                    "?": "uiOpenKeyboardShortcutsDialog",
                    o: "uiOpenSelectedPhoto"
                },
                this.routes = {
                    home: "/",
                    moments: "/i/moments",
                    connect: "/i/notifications",
                    notifications: "/i/notifications",
                    mentions: "/mentions",
                    profile: "/",
                    favorites: "/i/likes",
                    settings: "/settings/account",
                    lists: "/lists",
                    likes: "/i/likes"
                },
                this.routeShortcuts = {
                    gh: "home",
                    go: "moments",
                    gc: "connect",
                    gn: "notifications",
                    gr: "mentions",
                    gp: "profile",
                    gf: "favorites",
                    gs: "settings",
                    gi: "lists",
                    gl: "likes"
                },
                this.lastKey = "",
                this.defaultAttrs({
                    globalSearchBoxSelector: "#search-query",
                    isSingleLineTextBoxSelector: '[role="textbox"][aria-multiline="false"], [role="textbox"]:not([aria-multiline])'
                }),
                this.shortcutFromKeyCode = function(t, e) {
                    var i = e && e.meta
                      , n = e && e.shift;
                    return i && this.metaKeyCodeToEvent[t] || n && this.shiftKeyCodeToEvent[t] || this.keyCodeToEvent[t]
                }
                ,
                this.isTextField = function(t) {
                    if (!t || !t.tagName)
                        return !1;
                    var e = t.tagName.toLowerCase();
                    if ("textarea" === e || t.getAttribute("contenteditable"))
                        return !0;
                    if ("input" !== e)
                        return !1;
                    var i = (t.getAttribute("type") || "text").toLowerCase();
                    return c[i]
                }
                ,
                this.isRadioButton = function(t) {
                    return "radio" === t.type
                }
                ,
                this.isWhiteListedElement = function(t) {
                    var e = t.tagName.toLowerCase();
                    if (s[e])
                        return !0;
                    if ("input" !== e)
                        return !1;
                    var i = t.getAttribute("type").toLowerCase();
                    return u[i]
                }
                ,
                this.triggerShortcutEvent = function(t, e) {
                    var i = this
                      , n = void 0
                      , o = void 0
                      , r = void 0
                      , s = {
                        fromShortcut: !0
                    };
                    "string" == typeof e ? n = e : (n = e.type,
                    r = e.defaultFn,
                    e.data && (s = a({}, s, e.data))),
                    r && (o = {
                        type: n,
                        defaultBehavior: function() {
                            this[r](t, s)
                        }
                    }),
                    this.trigger(document, {
                        type: "uiBeforeKeyboardShortcut",
                        defaultBehavior: function() {
                            return i.trigger(t.target, o || n, s)
                        }
                    }, {
                        type: n
                    })
                }
                ,
                this.triggerShortcutForKey = function(t) {
                    if (!this.ignore(t)) {
                        var e = this.shortcutFromKeyCode(t.keyCode, {
                            meta: t.metaKey || t.ctrlKey
                        });
                        e && (t.preventDefault(),
                        this.triggerShortcutEvent(t, e))
                    }
                }
                ,
                this.triggerShortcutForChar = function(e) {
                    var i = this;
                    if (!this.isMetaKey(e)) {
                        var n = this.isTextField(e.target)
                          , o = String.fromCharCode(e.charCode).toLowerCase()
                          , r = this.charsToEvent[this.lastKey + o] || this.charsToEvent[o] || n && this.shortcutFromKeyCode(e.keyCode, {
                            shift: e.shiftKey
                        })
                          , a = "uiShortcutEnter" === r && t(e.target).is(this.attr.isSingleLineTextBoxSelector);
                        n && !a || (r && o !== this.lastKey ? (e.preventDefault(),
                        this.triggerShortcutEvent(e, r),
                        this.lastKey = "") : (setTimeout(function() {
                            return i.lastKey = ""
                        }, 5e3),
                        this.lastKey = o))
                    }
                }
                ,
                this.isMetaKey = function(t) {
                    return t.metaKey || t.ctrlKey || t.altKey
                }
                ,
                this.ignore = function(t) {
                    var e = t.target
                      , i = 27 === t.keyCode
                      , n = void 0
                      , o = void 0;
                    return 13 === t.keyCode && (this.isMetaKey(t) ? n = !0 : o = !0),
                    this.isMetaKey(t) && 13 !== t.keyCode || this.isTextField(e) && !(n || i) || this.isRadioButton(e) && !i || o && this.isWhiteListedElement(e)
                }
                ,
                this.blurTextField = function(t) {
                    var e = t.target;
                    this.isTextField(e) && e.blur()
                }
                ,
                this.focusSearch = function(t) {
                    this.select("globalSearchBoxSelector")[0].focus()
                }
                ,
                this.navigateTo = function(t, e) {
                    this.trigger("uiNavigate", {
                        href: e.href
                    })
                }
                ,
                this.createNavEventName = function(t) {
                    return l + t[0].toUpperCase() + t.slice(1)
                }
                ,
                this.createNavigationShortcuts = function() {
                    Object.keys(this.routeShortcuts).forEach(function(t) {
                        var e = this.routeShortcuts[t];
                        this.charsToEvent[t] = {
                            type: this.createNavEventName(e),
                            data: {
                                href: this.routes[e]
                            },
                            defaultFn: "navigateTo"
                        }
                    }, this)
                }
                ,
                this.after("initialize", function() {
                    this.on("keydown", this.triggerShortcutForKey),
                    this.on("keypress", this.triggerShortcutForChar),
                    this.attr.routes && r.default.push(this.routes, this.attr.routes),
                    this.createNavigationShortcuts()
                })
            }
            var o = i("DBjh")
              , r = i("YzIt")
              , a = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            }
              , s = {
                button: !0,
                a: !0
            }
              , u = {
                button: !0,
                submit: !0,
                file: !0
            }
              , c = {
                password: !0,
                text: !0,
                email: !0
            }
              , l = "uiShortcutNavigate"
              , d = Object(o.default)(n);
            e.a = d
        }
        ).call(e, i("4kSj"))
    },
    "2zJD": function(t, e, i) {
        "use strict";
        function n(t) {
            return Promise.all([o(), r(t || window.globalIndexedDBs || {})])
        }
        function o() {
            return new Promise(function(t) {
                return t(a.a.clearAll())
            }
            )
        }
        function r(t) {
            var e = Object.keys(t).map(function(e) {
                var i = t[e];
                return (i.clear || i.clearAllObjectStores).call(i)
            });
            return Promise.all(e)
        }
        var a = i("WODX");
        e.a = n
    },
    "34H3": function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return function(t, e) {
                for (var i = []; t; t = t.nextSibling)
                    1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    "3DSw": function(t, e, i) {
        "use strict";
        function n() {
            function t(t) {
                return function() {
                    return this.showApiErrorToast(t)
                }
            }
            function e() {}
            var i = {
                AlreadyRetweeted: e,
                BlockedUserError: function(t) {
                    switch (t.eventName) {
                    case "dataFailedToFavoriteTweet":
                        this.showApiErrorToast(r.a.BLOCKED_FROM_LIKE);
                        break;
                    case "dataFailedToRetweet":
                        this.showApiErrorToast(r.a.BLOCKED_FROM_RETWEET);
                        break;
                    default:
                        this.showApiErrorToast(r.a.BLOCKED_DEFAULT)
                    }
                },
                CurrentUserSuspended: function(t) {
                    a.a.user.needsPhoneVerification ? this.showApiErrorToast(r.a.PLEASE_ADD_PHONE_TO_FINISH) : this.showApiErrorToast(r.a.SUSPENDED_DEFAULT)
                },
                DeactivatedUser: t(r.a.SORRY_COULD_NOT_FIND_USER),
                DeniedByApiCsrfProtection: e,
                DeviceAlreadyRegistered: t(r.a.DEVICE_ALREADY_REGISTERED),
                DeviceOperatorUnsupported: t(r.a.DEVICE_OPERATOR_UNSUPPORTED),
                DeviceRegistrationGeneralError: t(r.a.DEVICE_REGISTRATION_GENERAL_ERROR),
                DirectMessageCannotDmOtherUser: t(r.a.CANNOT_MESSAGE_THIS_ACCOUNT),
                DirectMessageDuplicate: t(r.a.WHOOPS_YOU_ALREADY_SAID_THAT),
                DirectMessageTooLongError: t(r.a.DM_TOO_LONG),
                DuplicateFavorite: e,
                FollowRateLimitExceeded: t(r.a.FOLLOW_RATE_LIMITED),
                ForbiddenMissingParameter: t(r.a.YOUR_ACCOUNT_MAY_NOT_BE_ALLOWED),
                GenericBadRequest: t(r.a.WE_DID_SOMETHING_WRONG),
                GenericNotFound: t(r.a.WE_DID_SOMETHING_WRONG),
                GenericSuspended: function(t) {
                    a.a && a.a.user && a.a.user.needsPhoneVerification ? this.showApiErrorToast(r.a.PLEASE_ADD_PHONE_TO_FINISH) : this.showApiErrorToast(r.a.ACCOUNT_SUSPENDED)
                },
                GenericUserNotFound: t(r.a.SORRY_COULD_NOT_FIND_USER),
                InactiveUser: t(r.a.SUSPENDED_DEFAULT),
                InternalError: t(r.a.WE_DID_SOMETHING_WRONG),
                InvalidCredentials: t(r.a.YOUR_ACCOUNT_MAY_NOT_BE_ALLOWED),
                InvalidCurrentPassword: t(r.a.INVALID_CURRENT_PASSWORD),
                InvalidMediaId: t(r.a.INVALID_MEDIA),
                InvalidRequestUrlForbidden: t(r.a.CANNOT_ATTACH_MEDIA),
                OtherUserSuspended: t(r.a.ACCOUNT_SUSPENDED),
                OverCapacity: t(r.a.API_OVER_CAPACITY),
                RateLimitExceeded: t(r.a.SORRY_RATE_LIMITED),
                StatusNotFound: t(r.a.TWEET_IS_DELETED),
                StatusNotFoundForbidden: t(r.a.TWEET_IS_DELETED),
                TieredActionChallengeCaptcha: t(r.a.REQUEST_LOOKS_AUTOMATED),
                TieredActionFavoriteSpammer: t(r.a.REQUEST_LOOKS_AUTOMATED),
                TieredActionFollowCreeper: t(r.a.CREEPER_FOLLOW),
                TieredActionTweetCreeper: t(r.a.CREEPER_TWEET),
                UserActionRateLimitExceeded: t(r.a.DAILY_RATE_LIMIT_ADD_PHONE),
                UserAlreadyHasVerifiedPhone: t(r.a.USER_ALREADY_HAS_VERIFIED_PHONE),
                UserMustBeAlcoholAgeScreened: function(t) {
                    t.eventName
                },
                ValidationFailure: function(t) {
                    if ("dataMuteKeywordsAddKeywordFailed" === t.eventName) {
                        var e = t.data.errors[0].message;
                        this.trigger("dataMuteKeywordsAddKeywordFailure", {
                            error_message: e
                        })
                    }
                },
                IneligibleFor2faAfterModification: e
            };
            this.showApiErrorToast = function(t) {
                this.trigger("uiShowError", {
                    message: t
                })
            }
            ,
            this.getApiErrorDataField = function(t, e) {
                return t && t.errors && t.errors[0] ? t.errors[0][e] : void 0
            }
            ,
            this.handleApiError = function(t, e, n, a) {
                if (void 0 !== e) {
                    var s = i[r.b[e]];
                    void 0 !== s ? s.call(this, {
                        eventName: t,
                        data: a
                    }) : this.showApiErrorToast(Object(o.default)("Sorry, something went wrong."))
                } else
                    void 0 !== n && (429 === n ? this.trigger("uiShowError", {
                        message: r.a.SORRY_RATE_LIMITED
                    }) : 403 === n && this.trigger("uiShowError", {
                        message: r.a.YOUR_ACCOUNT_MAY_NOT_BE_ALLOWED
                    }));
                return Promise.resolve()
            }
        }
        var o = i("0d4m")
          , r = i("vlyl")
          , a = i("IAMj");
        e.a = n
    },
    "3Dhe": function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                signinSelector: ".signin-wrapper, .js-front-signin, .signin-dialog-body"
            }),
            this.signinConversion = function() {
                this.trigger("MNConversion", {
                    mnType: "signin"
                })
            }
            ,
            this.after("initialize", function() {
                this.on("submit", {
                    signinSelector: this.signinConversion
                })
            })
        }
        var o = i("DBjh")
          , r = Object(o.default)(n);
        e.a = r
    },
    "3Eo+": function(t, e) {
        var i = 0
          , n = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36))
        }
    },
    "3fs2": function(t, e, i) {
        var n = i("RY/4")
          , o = i("dSzd")("iterator")
          , r = i("/bQp");
        t.exports = i("FeBl").getIteratorMethod = function(t) {
            if (void 0 != t)
                return t[o] || t["@@iterator"] || r[n(t)]
        }
    },
    "3oDc": function(t, e, i) {
        "use strict";
        function n(t, e) {
            var i = {};
            for (var n in t)
                e.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
            return i
        }
        function o() {
            this.scribe = function() {
                var t = Array.prototype.slice.call(arguments)
                  , e = void 0
                  , i = void 0
                  , o = void 0
                  , r = void 0
                  , s = void 0;
                e = "string" == typeof t[0] ? {
                    action: t[0]
                } : t[0],
                t.shift(),
                t[0] && (o = t[0],
                o.sourceEventData && (o = o.sourceEventData),
                (o.scribeContext || o.scribeData) && (r = o.scribeContext,
                s = o.scribeData),
                (t[0].scribeContext || t[0].scribeData || t[0].sourceEventData || 2 === t.length) && t.shift()),
                e = a({}, r, e),
                i = "function" == typeof t[0] ? t[0].bind(this)(o) : t[0],
                i = a({}, s, i);
                var u = i
                  , c = u._category_
                  , l = n(u, ["_category_"]);
                this.transport(e, l, c)
            }
            ,
            this.scribeOnEvent = function(t, e, i) {
                this.on(t, function(t, n) {
                    n = n || {},
                    this.scribe(e, n.sourceEventData || n, i)
                })
            }
            ,
            this.transport = function(t, e, i) {
                r.a.scribe(t, e, i)
            }
        }
        var r = i("NNES")
          , a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
        ;
        e.a = o
    },
    "3xMo": function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("5JGd"), i("gb4J"), i("z06B")],
        void 0 !== (o = function(t) {
            "use strict";
            return t.fn.extend({
                wrapAll: function(e) {
                    var i;
                    return this[0] && (t.isFunction(e) && (e = e.call(this[0])),
                    i = t(e, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && i.insertBefore(this[0]),
                    i.map(function() {
                        for (var t = this; t.firstElementChild; )
                            t = t.firstElementChild;
                        return t
                    }).append(this)),
                    this
                },
                wrapInner: function(e) {
                    return t.isFunction(e) ? this.each(function(i) {
                        t(this).wrapInner(e.call(this, i))
                    }) : this.each(function() {
                        var i = t(this)
                          , n = i.contents();
                        n.length ? n.wrapAll(e) : i.append(e)
                    })
                },
                wrap: function(e) {
                    var i = t.isFunction(e);
                    return this.each(function(n) {
                        t(this).wrapAll(i ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        t(this).replaceWith(this.childNodes)
                    }),
                    this
                }
            }),
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    "4kSj": function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("rYQx"), i("z06B"), i("7p8o"), i("KgGA"), i("aItA"), i("Y2CE"), i("vQGr"), i("WHlL"), i("uqwf"), i("eIrJ"), i("Jozb"), i("iTQZ"), i("aI9I"), i("gb4J"), i("0qoN"), i("3xMo"), i("2+NM"), i("PySz"), i("baqs"), i("rTPn"), i("ltne"), i("jnMA"), i("1msk"), i("wVWF"), i("u4TT"), i("te80"), i("5oUk"), i("unGK"), i("qJxw"), i("MDEo"), i("Nfe4"), i("5iyq")],
        void 0 !== (o = function(t) {
            "use strict";
            return t
        }
        .apply(e, n)) && (t.exports = o)
    },
    "4mcu": function(t, e) {
        t.exports = function() {}
    },
    "52gC": function(t, e) {
        t.exports = function(t) {
            if (void 0 == t)
                throw TypeError("Can't call method on  " + t);
            return t
        }
    },
    "55eh": function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[1];
            Promise.all([i.e(0), i.e(6)]).then(function(t) {
                var o = {
                    congratulations_splash: i("nNAv").default,
                    follow_cards: i("8L7I").default,
                    import: i("JRK/").default,
                    interest_list: i("mPdi").default,
                    let_me_choose: i("baQo").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    "5Hmc": function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                experiments: {},
                manualExperiments: ["web_unfollow_5531", "like_over_http_client_6421", "cramming_default_group_6777", "cramming_large_group_6778", "cramming_medium_group_6779", "cramming_small_group_6780"]
            }),
            this.scribeExperiments = function() {
                for (var t in this.attr.experiments)
                    -1 === this.attr.manualExperiments.indexOf(t) && this.scribeByName(t)
            }
            ,
            this.scribeByName = function(t) {
                var e = this.attr.experiments[t] || {}
                  , i = e.bucket
                  , n = e.version;
                i && n && this.scribe({
                    page: "ddg",
                    section: t,
                    action: "experiment"
                }, {
                    experiment_key: t,
                    bucket: i,
                    version: n
                })
            }
            ,
            this.impressExperiment = function(t, e) {
                this.scribeByName(e.experiment)
            }
            ,
            this.after("initialize", function(t) {
                this.on("uiABImpression", this.impressExperiment),
                this.on("uiSwiftLoaded uiPageChanged", this.scribeExperiments)
            })
        }
        var o = i("DBjh")
          , r = i("3oDc")
          , a = Object(o.default)(n, r.a);
        e.a = a
    },
    "5JGd": function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("rY9R"), i("WMlg"), i("8wGY")],
        void 0 !== (o = function(t, e, i) {
            "use strict";
            var n, o = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, r = t.fn.init = function(r, a, s) {
                var u, c;
                if (!r)
                    return this;
                if (s = s || n,
                "string" == typeof r) {
                    if (!(u = "<" === r[0] && ">" === r[r.length - 1] && r.length >= 3 ? [null, r, null] : o.exec(r)) || !u[1] && a)
                        return !a || a.jquery ? (a || s).find(r) : this.constructor(a).find(r);
                    if (u[1]) {
                        if (a = a instanceof t ? a[0] : a,
                        t.merge(this, t.parseHTML(u[1], a && a.nodeType ? a.ownerDocument || a : e, !0)),
                        i.test(u[1]) && t.isPlainObject(a))
                            for (u in a)
                                t.isFunction(this[u]) ? this[u](a[u]) : this.attr(u, a[u]);
                        return this
                    }
                    return c = e.getElementById(u[2]),
                    c && (this[0] = c,
                    this.length = 1),
                    this
                }
                return r.nodeType ? (this[0] = r,
                this.length = 1,
                this) : t.isFunction(r) ? void 0 !== s.ready ? s.ready(r) : r(t) : t.makeArray(r, this)
            }
            ;
            return r.prototype = t.fn,
            n = t(e),
            r
        }
        .apply(e, n)) && (t.exports = o)
    },
    "5KY3": function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    directMessagesSelector: ".global-dm-nav",
                    msgCounterSelector: ".dm-new .count-inner",
                    newMsgClass: "new",
                    singleCount: "with-count",
                    doubleCount: "with-count-2",
                    tripleCount: "with-count-3"
                }),
                this.addGlowToEnvelope = function(t, e) {
                    this.select("directMessagesSelector").addClass(this.attr.newMsgClass)
                }
                ,
                this.removeGlowFromEnvelope = function(t, e) {
                    this.select("directMessagesSelector").removeClass(this.attr.newMsgClass)
                }
                ,
                this.addCountToEnvelope = function(e, i) {
                    var n = parseInt(i.msgCount, 10)
                      , o = t("html").attr("lang")
                      , r = Number(n).toLocaleString(o);
                    if (!isNaN(n)) {
                        var a = [this.attr.singleCount];
                        n > 9 && a.push(this.attr.doubleCount),
                        n > 99 && a.push(this.attr.tripleCount),
                        this.removeCountFromEnvelope(e),
                        this.select("directMessagesSelector").addClass(a.join(" ")),
                        this.select("directMessagesSelector").find(this.attr.msgCounterSelector).text(r)
                    }
                }
                ,
                this.removeCountFromEnvelope = function(t, e) {
                    this.select("directMessagesSelector").removeClass(this.attr.singleCount + " " + this.attr.doubleCount + " " + this.attr.tripleCount)
                }
                ,
                this.after("initialize", function() {
                    this.on(document, "dataUserHasUnreadDMs dataUserHasUnreadDMsWithCount", this.addGlowToEnvelope),
                    this.on(document, "dataUserHasNoUnreadDMs dataUserHasNoUnreadDMsWithCount", this.removeGlowFromEnvelope),
                    this.on(document, "dataUserHasUnreadDMsWithCount", this.addCountToEnvelope),
                    this.on(document, "dataUserHasNoUnreadDMsWithCount", this.removeCountFromEnvelope)
                })
            }
            var o = i("DBjh")
              , r = Object(o.default)(n);
            e.a = r
        }
        ).call(e, i("4kSj"))
    },
    "5VLS": function(t, e, i) {
        "use strict";
        (function(t) {
            function n(t, e, i, n) {
                this.key = e,
                this.timestamp = 0,
                this.active = t,
                this.seenFirstResponse = !1,
                this.pollEvent = i,
                this.paramAdder = n
            }
            function o() {
                this.entries = []
            }
            var r = i("WODX")
              , a = 2e4
              , s = new r.a("DM")
              , u = ["/i/users/recommendations", "/i/timeline", "/i/notifications/timeline", "/i/search/timeline", "/i/profiles/show", "/messages"];
            n.prototype = {
                reset: function() {
                    this.timestamp = (new Date).getTime()
                },
                isResponseValid: function(t) {
                    return this.active && t && t[this.key] && t.notCached && "ok" === t[this.key].status && null !== t[this.key].response
                },
                update: function(e) {
                    this.isResponseValid(e) ? this.reset() : !this.seenFirstResponse && this.pollEvent && t(document).trigger(this.pollEvent),
                    this.seenFirstResponse = !0
                },
                shouldPoll: function() {
                    return (new Date).getTime() - this.timestamp > a
                },
                addParam: function(t) {
                    this.shouldPoll() && this.paramAdder(t)
                }
            },
            o.prototype = {
                init: function(t) {
                    this.initialized = !0,
                    this.dm = new n(t.toasts_dm,"d","uiDMPoll",this.addDMData),
                    this.connect = new n(t.toasts_timeline,"t",null,function() {}
                    ),
                    this.entries = [this.dm, this.connect],
                    t.toasts_dm_poll_scale && (a = 1e3 * t.toasts_dm_poll_scale)
                },
                getPollDelay: function() {
                    return a
                },
                addDMData: function(t) {
                    t.oldest_unread_id = s.getItem("oldestUnreadMessageId") || 0
                },
                updateNotificationState: function(t) {
                    this.entries.forEach(function(e) {
                        return e.update(t)
                    })
                },
                resetDMState: function(t, e) {
                    this.dm.reset()
                },
                shouldPoll: function() {
                    return !!this.initialized
                },
                extraParameters: function(t) {
                    if (!t || !this.shouldPoll())
                        return {};
                    var e = {};
                    return u.some(function(e) {
                        return 0 === t.indexOf(e)
                    }) && this.entries.forEach(function(t) {
                        return t.addParam(e)
                    }),
                    e
                }
            },
            e.a = new o
        }
        ).call(e, i("4kSj"))
    },
    "5iyq": function(t, e, i) {
        var n, o;
        n = [i("Olpr")],
        void 0 !== (o = function(t, e) {
            "use strict";
            var i = window.jQuery
              , n = window.$;
            t.noConflict = function(e) {
                return window.$ === t && (window.$ = n),
                e && window.jQuery === t && (window.jQuery = i),
                t
            }
            ,
            e || (window.jQuery = window.$ = t)
        }
        .apply(e, n)) && (t.exports = o)
    },
    "5oUk": function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("rYQx"), i("te80")],
        void 0 !== (o = function(t) {
            "use strict";
            t.expr.pseudos.animated = function(e) {
                return t.grep(t.timers, function(t) {
                    return e === t.elem
                }).length
            }
        }
        .apply(e, n)) && (t.exports = o)
    },
    "5zde": function(t, e, i) {
        i("zQR9"),
        i("qyJz"),
        t.exports = i("FeBl").Array.from
    },
    "6Q0p": function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                viewContainer: "#page-container",
                pushState: !0,
                pushStateRequestHeaders: {
                    "X-Push-State-Request": !0
                },
                pushStatePageLimit: 5e5,
                assetsBasePath: "/",
                noTeardown: !0,
                init_data: {}
            });
            var t = /\/a\/(\d+)/
              , e = void 0
              , i = void 0
              , n = void 0
              , o = void 0;
            this.pageCache = {},
            this.pageCacheTTLs = {},
            this.navigateUsingPushState = function(t, e) {
                var o = Object(a.a)();
                if (n = e.href,
                (i = e.isPopState) || e.href !== o || !this.pageCache[o])
                    return this.shouldUseModalForPermalink(e) ? void this.useModalForPermalink(e) : void this.getPageData(e.href, e.nextActiveElement)
            }
            ,
            this.navigate = function(t, i) {
                if (Object(c.a)(this.attr.pushState))
                    this.trigger(document, {
                        type: "uiBeforeNavigate",
                        defaultBehavior: this.navigateUsingPushState.bind(this, t, i)
                    }, i);
                else {
                    var n = i.href;
                    n !== e && this.navigateTo(n)
                }
            }
            ,
            this.shouldUseModalForPermalink = function(t) {
                return !(!t.href || !t.href.match(/\w+\/status(?:es)?\/[0-9]+/))
            }
            ,
            this.useModalForPermalink = function(t) {
                this.trigger("uiOverlayNavigate", t)
            }
            ,
            this.sweepPageCache = function() {
                var t = (new Date).getTime();
                for (var e in this.pageCacheTTLs)
                    t > this.pageCacheTTLs[e] && (delete this.pageCache[e],
                    delete this.pageCacheTTLs[e])
            }
            ,
            this.hasDeployTimestampChanged = function(e) {
                var i = this.attr.assetsBasePath && this.attr.assetsBasePath.match(t)
                  , n = e.init_data.assetsBasePath && e.init_data.assetsBasePath.match(t);
                return i && n && n[1] !== i[1]
            }
            ,
            this.getPageData = function(t, e) {
                var i = this
                  , o = void 0;
                if (this.trigger("dataBeforeNavigate"),
                this.attr.init_data.initialState && this.createInitialState(),
                this.sweepPageCache(),
                this.trigger("uiBeforeNewPageLoad"),
                o = this.pageCache[t])
                    o.fromCache = !0,
                    o.href = t,
                    this.pageDataReceived(t, o, e);
                else {
                    this.trigger("dataPageFetch");
                    var r = this.attr.pushStateRequestHeaders;
                    r = l({}, r, {
                        "X-Asset-Version": this.attr.init_data.assetVersionKey
                    }),
                    this.get({
                        headers: r,
                        url: t,
                        success: function(o) {
                            var r = void 0;
                            if (o.init_data && o.page && o.module) {
                                if (r = o.init_data.href,
                                o.href = r,
                                !o.init_data.pushState)
                                    return void i.navigateTo(r);
                                if (i.hasDeployTimestampChanged(o))
                                    return void i.navigateTo(r);
                                if (o.init_data.viewContainer !== i.attr.viewContainer)
                                    return i.attr.viewContainer = o.init_data.viewContainer,
                                    void i.navigateTo(r);
                                if (i.cacheState(r, o),
                                n !== t)
                                    return;
                                i.pageDataReceived(r, o, e)
                            } else
                                i.navigateTo(o.href || t)
                        },
                        error: function(e) {
                            return i.navigateTo(t)
                        }
                    })
                }
            }
            ,
            this.updatePageCache = function(t, i) {
                if (i.href !== e) {
                    var n = this.pageCache[e];
                    n && (n.page = this.select("viewContainer").html(),
                    this.pageCacheTTLs[e] = new Date(1e3 * n.cache_ttl + (new Date).getTime()).getTime(),
                    n.page.length > this.attr.pushStatePageLimit && (delete this.pageCache[e],
                    delete this.pageCacheTTLs[e])),
                    this.trigger("dataPageCacheUpdated")
                }
            }
            ,
            this.cacheState = function(t, e) {
                0 !== e.cache_ttl && (this.pageCache[t] = e,
                this.pageCacheTTLs[t] = new Date(1e3 * e.cache_ttl + (new Date).getTime()).getTime())
            }
            ,
            this.pageDataReceived = function(t, e, i) {
                this.rollbackCount() > 0 ? (o = r.default.once(this.refreshPage.bind(this, t, e, i)),
                this.on("uiDidRollback", o),
                this.trigger("dataNeedsRollback", {
                    rollbackCount: this.rollbackCount()
                })) : (o && (this.off("uiDidRollback", o),
                o = null),
                this.refreshPage(t, e, i))
            }
            ,
            this.refreshPage = function(t, e, n) {
                var o = this;
                t !== Object(a.a)() && history.pushState({
                    title: e.title
                }, e.title, t),
                e.isPopState = i,
                e.nextActiveElement = n,
                setTimeout(function() {
                    return o.trigger("dataPageRefresh", e)
                })
            }
            ,
            this.createInitialState = function() {
                var t = r.default.merge(this.attr.init_data.initialState, !0);
                t.init_data = r.default.merge(this.attr.init_data, !0),
                delete t.init_data.initialState,
                this.attr.init_data.initialState = null,
                this.cacheState(e, t),
                this.createInitialHistoryEntry()
            }
            ,
            this.createInitialHistoryEntry = function(t, e) {
                if (this.attr.init_data.initialState) {
                    var i = this.attr.init_data.initialState.title
                      , n = Object(a.a)().replace(/\/{2,}/g, "/");
                    history.replaceState({
                        title: i
                    }, i, n)
                }
            }
            ,
            this.resetPageCache = function(t, e) {
                this.pageCache = {},
                this.pageCacheTTLs = {}
            }
            ,
            this.removePageFromCache = function(t, e) {
                var i = e.href;
                this.pageCache[i] && (delete this.pageCache[i],
                delete this.pageCacheTTLs[i])
            }
            ,
            this.navigateTo = function(t) {
                location.href = t
            }
            ,
            this.destroyCurrentPageState = function() {
                history.replaceState(null, document.title, e)
            }
            ,
            this.resetStateVariables = function() {
                e = Object(a.a)(),
                i = !1,
                n = null
            }
            ,
            this.after("initialize", function() {
                this.on("uiNavigate", this.navigate),
                Object(c.a)(this.attr.pushState) ? (this.on("uiSwiftLoaded uiPageChanged", this.resetStateVariables),
                this.on("uiSwiftLoaded", this.createInitialHistoryEntry),
                this.on("uiUpdatePageCache", this.updatePageCache),
                this.on(document, "dataPageMutated", this.resetPageCache),
                this.on(document, "uiPromotedLinkClick", this.removePageFromCache),
                this.on(window, "beforeunload uiBeforeUnload", this.destroyCurrentPageState)) : this.on("uiSwiftLoaded", this.resetStateVariables)
            })
        }
        var o = i("DBjh")
          , r = i("YzIt")
          , a = i("Ckrd")
          , s = i("VtWx")
          , u = i("L6po")
          , c = i("c16W")
          , l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
          , d = Object(o.default)(n, s.a, u.a);
        e.a = d
    },
    "6Z94": function(t, e, i) {
        var n, o;
        n = [i("Y6Nz")],
        void 0 !== (o = function(t) {
            "use strict";
            function e(t) {
                var e = t.tagName ? t.tagName.toLowerCase() : t.toString()
                  , i = t.className ? "." + t.className : ""
                  , n = e + i;
                return t.tagName ? ["'", "'"].join(n) : n
            }
            function i(t, i, n) {
                if (window.DEBUG && window.DEBUG.enabled) {
                    var r, a, s, u, c, l, d, h, f, p;
                    "function" == typeof n[n.length - 1] && (u = n.pop(),
                    u = u.unbound || u),
                    1 == n.length ? (s = i.$node[0],
                    a = n[0]) : 2 != n.length || "object" != typeof n[1] || n[1].type ? (s = n[0],
                    a = n[1],
                    "trigger" == t && (c = n[2])) : (s = i.$node[0],
                    a = n[0],
                    "trigger" == t && (c = n[1])),
                    r = "object" == typeof a ? a.type : a,
                    l = window.DEBUG.events.logFilter,
                    h = "all" == l.actions || l.actions.indexOf(t) > -1,
                    d = function(t) {
                        return t.test ? t : new RegExp("^" + t.replace(/\*/g, ".*") + "$")
                    }
                    ,
                    f = "all" == l.eventNames || l.eventNames.some(function(t) {
                        return d(t).test(r)
                    }),
                    h && f && (p = [o[t], t, "[" + r + "]"],
                    c && p.push(c),
                    p.push(e(s)),
                    p.push(i.constructor.describe.split(" ").slice(0, 3).join(" ")),
                    console.groupCollapsed)
                }
            }
            function n() {
                this.before("trigger", function() {
                    i("trigger", this, t.toArray(arguments))
                }),
                console.groupCollapsed && this.after("trigger", function() {}),
                this.before("on", function() {
                    i("on", this, t.toArray(arguments))
                }),
                this.before("off", function() {
                    i("off", this, t.toArray(arguments))
                })
            }
            var o = {
                on: "<-",
                trigger: "->",
                off: "x "
            };
            return n
        }
        .apply(e, n)) && (t.exports = o)
    },
    "6jrG": function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                usernameSelector: ".email-input",
                dialogContainerSelector: ".signin-dialog-body"
            }),
            this.focusUsername = function() {
                this.applyARIADialogAttrs(),
                this.select("usernameSelector").focus()
            }
            ,
            this.applyARIADialogAttrs = function() {
                this.select("dropDownMenuSelector").attr({
                    role: "dialog",
                    "aria-hidden": !1,
                    "aria-labelledby": "signin-form-legend"
                })
            }
            ,
            this.toggleARIAHiddenRole = function() {
                this.select("dropDownMenuSelector").attr("aria-hidden", !0)
            }
            ,
            this.after("initialize", function() {
                this.on("uiDropdownOpened", this.focusUsername),
                this.on("uiDropdownClosed", this.toggleARIAHiddenRole)
            })
        }
        var o = i("DBjh")
          , r = i("oHsY")
          , a = Object(o.default)(n, r.a);
        e.a = a
    },
    "6lLu": function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    backgroundShiftSelector: "body",
                    alertsSelector: ".alert-messages"
                }),
                this.handleBannerChange = function(e, i) {
                    var n = t(this.attr.backgroundShiftSelector).css("background-position");
                    if (n && "none" !== t(this.attr.backgroundShiftSelector).css("background-image")) {
                        var o = n.split(" ")[0]
                          , r = parseInt(n.split(" ")[1]);
                        t(this.attr.backgroundShiftSelector).css("background-position", o + " " + (r - t(e.target).outerHeight()) + "px")
                    }
                    t(this.attr.alertsSelector).css("top", "-=" + t(e.target).outerHeight())
                }
                ,
                this.adjustBackgroundInitially = function() {
                    var e = t(this.attr.backgroundShiftSelector).css("background-position");
                    if (e && "none" !== t(this.attr.backgroundShiftSelector).css("background-image")) {
                        var i = e.split(" ")[0];
                        t(this.attr.backgroundShiftSelector).css("background-position", i + " " + (this.$node.innerHeight() - 1) + "px")
                    }
                    t(this.attr.alertsSelector).css("top", this.$node.innerHeight() - 1)
                }
                ,
                this.after("initialize", function() {
                    this.on(document, "uiBannerDismissed", this.handleBannerChange),
                    this.on(document, "uiSwiftLoaded uiPageChanged", this.adjustBackgroundInitially)
                })
            }
            var o = i("DBjh");
            e.a = Object(o.default)(n)
        }
        ).call(e, i("4kSj"))
    },
    "77Pl": function(t, e, i) {
        var n = i("EqjI");
        t.exports = function(t) {
            if (!n(t))
                throw TypeError(t + " is not an object!");
            return t
        }
    },
    "7E0P": function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    conciergeBlockSelector: ".typeahead-concierge",
                    conciergeListSelector: ".typeahead-concierge-list",
                    conciergeItemSelector: ".typeahead-concierge-item",
                    datasource: "concierge"
                }),
                this.renderConcierge = function(e, i) {
                    this.$conciergeList.empty();
                    var n = i.suggestions && i.suggestions[this.attr.datasource] || []
                      , o = !!n.length;
                    n.forEach(function(e) {
                        var i = this.$conciergeItemTemplate.clone(!1)
                          , n = i.find("a");
                        i.data("item", e),
                        n.attr("href", e.searchPath),
                        n.attr("data-search-query", e.topic),
                        n.attr("data-query-source", e.querySource),
                        n.append(t("<span>").text(e.name)),
                        this.$conciergeList.append(i)
                    }, this),
                    this.$conciergeBlock.toggleClass("has-items", o),
                    this.$conciergeBlock.toggle(o)
                }
                ,
                this.after("initialize", function() {
                    this.$conciergeItemTemplate = this.select("conciergeItemSelector").clone(!1),
                    this.$conciergeBlock = this.select("conciergeBlockSelector"),
                    this.$conciergeList = this.select("conciergeListSelector"),
                    this.on("uiTypeaheadRenderResults", this.renderConcierge)
                })
            }
            var o = i("DBjh");
            e.a = Object(o.default)(n)
        }
        ).call(e, i("4kSj"))
    },
    "7KvD": function(t, e) {
        var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = i)
    },
    "7ofs": function(t, e, i) {
        var n, o;
        n = [i("Olpr")],
        void 0 !== (o = function(t) {
            "use strict";
            function e(e, i) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(i || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(i || "*") : [],
                void 0 === i || i && t.nodeName(e, i) ? t.merge([e], n) : n
            }
            return e
        }
        .apply(e, n)) && (t.exports = o)
    },
    "7p8o": function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("9CHI")],
        void 0 !== (o = function(t, e) {
            "use strict";
            function i(i) {
                var n = {};
                return t.each(i.match(e) || [], function(_, t) {
                    n[t] = !0
                }),
                n
            }
            return t.Callbacks = function(e) {
                e = "string" == typeof e ? i(e) : t.extend({}, e);
                var n, o, r, a, s = [], u = [], c = -1, l = function() {
                    for (a = e.once,
                    r = n = !0; u.length; c = -1)
                        for (o = u.shift(); ++c < s.length; )
                            !1 === s[c].apply(o[0], o[1]) && e.stopOnFalse && (c = s.length,
                            o = !1);
                    e.memory || (o = !1),
                    n = !1,
                    a && (s = o ? [] : "")
                }, d = {
                    add: function() {
                        return s && (o && !n && (c = s.length - 1,
                        u.push(o)),
                        function i(n) {
                            t.each(n, function(_, n) {
                                t.isFunction(n) ? e.unique && d.has(n) || s.push(n) : n && n.length && "string" !== t.type(n) && i(n)
                            })
                        }(arguments),
                        o && !n && l()),
                        this
                    },
                    remove: function() {
                        return t.each(arguments, function(_, e) {
                            for (var i; (i = t.inArray(e, s, i)) > -1; )
                                s.splice(i, 1),
                                i <= c && c--
                        }),
                        this
                    },
                    has: function(e) {
                        return e ? t.inArray(e, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []),
                        this
                    },
                    disable: function() {
                        return a = u = [],
                        s = o = "",
                        this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return a = u = [],
                        o || n || (s = o = ""),
                        this
                    },
                    locked: function() {
                        return !!a
                    },
                    fireWith: function(t, e) {
                        return a || (e = e || [],
                        e = [t, e.slice ? e.slice() : e],
                        u.push(e),
                        n || l()),
                        this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!r
                    }
                };
                return d
            }
            ,
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    "81nO": function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[0];
            Promise.all([i.e(0), i.e(1)]).then(function(t) {
                var o = {
                    simple_t1: i("FCfd").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    "82Mu": function(t, e, i) {
        var n = i("7KvD")
          , o = i("L42u").set
          , r = n.MutationObserver || n.WebKitMutationObserver
          , a = n.process
          , s = n.Promise
          , u = "process" == i("R9M2")(a);
        t.exports = function() {
            var t, e, i, c = function() {
                var n, o;
                for (u && (n = a.domain) && n.exit(); t; ) {
                    o = t.fn,
                    t = t.next;
                    try {
                        o()
                    } catch (n) {
                        throw t ? i() : e = void 0,
                        n
                    }
                }
                e = void 0,
                n && n.enter()
            };
            if (u)
                i = function() {
                    a.nextTick(c)
                }
                ;
            else if (r) {
                var l = !0
                  , d = document.createTextNode("");
                new r(c).observe(d, {
                    characterData: !0
                }),
                i = function() {
                    d.data = l = !l
                }
            } else if (s && s.resolve) {
                var h = s.resolve();
                i = function() {
                    h.then(c)
                }
            } else
                i = function() {
                    o.call(n, c)
                }
                ;
            return function(n) {
                var o = {
                    fn: n,
                    next: void 0
                };
                e && (e.next = o),
                t || (t = o,
                i()),
                e = o
            }
        }
    },
    "880/": function(t, e, i) {
        t.exports = i("hJx8")
    },
    "8JB6": function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = /\{\{(.+?)\}\}/g;
        e.default = function(t, e, i) {
            return e ? t.replace(n, function(t, n) {
                if (n) {
                    if (e[n])
                        return e[n];
                    if (i)
                        throw new Error("Cannot parameterize string, no replacement found for " + n);
                    return ""
                }
                return t
            }) : t
        }
    },
    "8Wjb": function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t) {
            var e = i("DldO")
              , n = i("njoX")
              , o = i("bXc2")
              , r = i("H3ms");
            t(document).ready(function() {
                return Object(n.a)(e.default, r.default, o.a)
            })
        }
        .call(e, i("4kSj"))
    },
    "8dLB": function(t, e, i) {
        var n, o;
        n = [i("oZoq")],
        void 0 !== (o = function(t) {
            "use strict";
            return t.call(Object)
        }
        .apply(e, n)) && (t.exports = o)
    },
    "8elM": function(t, e, i) {
        "use strict";
        function n() {
            this.getComponent = function(t) {
                return "user" === t.target ? "report_user" : "report_tweet"
            }
            ,
            this.reportImpression = function(t, e) {
                this.scribeReportEvent({
                    component: this.getComponent(e),
                    action: "impression"
                }, e)
            }
            ,
            this.cancelReport = function(t, e) {
                this.scribeReportEvent({
                    component: this.getComponent(e),
                    action: "cancel"
                }, e)
            }
            ,
            this.reportSubmit = function(t, e) {
                var i = e.reportType || ""
                  , n = {
                    component: this.getComponent(e.eventData),
                    action: "report_as_spam",
                    element: i
                };
                this.scribeReportEvent(n, e)
            }
            ,
            this.reportAbuseToSupport = function(t, e) {
                var i = {
                    component: this.getComponent(e.eventData) + "_abusive",
                    element: e.abuseType,
                    action: "click"
                };
                this.scribeReportEvent(i, e)
            }
            ,
            this.scribeReportEvent = function(t, e) {
                var i = e.eventData || e;
                "user" === i.target ? this.scribeReportUserEvent(t, e) : this.scribeReportTweetEvent(t, i)
            }
            ,
            this.scribeReportTweetEvent = function(t, e) {
                var i = {};
                i[a.a.associatedTweet] = {
                    association_type: r.a.tweet,
                    association_id: e.tweetId
                },
                this.scribeInteraction(t, e, {
                    associations: i
                })
            }
            ,
            this.scribeReportUserEvent = function(t, e) {
                var i = {};
                i[a.a.associatedUser] = {
                    association_type: r.a.user,
                    association_id: e.userId || e.eventData.userId
                },
                this.scribeInteraction(t, e, {
                    associations: i
                })
            }
            ,
            this.openTwitterRulesLink = function(t, e) {
                t = {
                    component: this.getComponent(e.eventData),
                    element: "twitter_rules_link",
                    action: "open_link"
                },
                this.scribeReportEvent(t, e)
            }
            ,
            this.after("initialize", function() {
                this.on(document, "uiNeedsReportDialog", this.reportImpression),
                this.on(document, "uiDidReportTweet uiReportUserAction", this.reportSubmit),
                this.on(document, "uiDidReportToSupport", this.reportAbuseToSupport),
                this.on(document, "uiDidCancelReport", this.cancelReport),
                this.on(document, "uiDidOpenTwitterRulesLink", this.openTwitterRulesLink)
            })
        }
        var o = i("DBjh")
          , r = i("rbkv")
          , a = i("EYxo")
          , s = i("gcfh");
        e.a = Object(o.default)(n, s.a)
    },
    "8wGY": function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("guk2"), i("1VmT"), i("rYQx")],
        void 0 !== (o = function(t, e, i) {
            "use strict";
            function n(i, n, r) {
                return t.isFunction(n) ? t.grep(i, function(t, e) {
                    return !!n.call(t, e, t) !== r
                }) : n.nodeType ? t.grep(i, function(t) {
                    return t === n !== r
                }) : "string" != typeof n ? t.grep(i, function(t) {
                    return e.call(n, t) > -1 !== r
                }) : o.test(n) ? t.filter(n, i, r) : (n = t.filter(n, i),
                t.grep(i, function(t) {
                    return e.call(n, t) > -1 !== r && 1 === t.nodeType
                }))
            }
            var o = /^.[^:#\[\.,]*$/;
            t.filter = function(e, i, n) {
                var o = i[0];
                return n && (e = ":not(" + e + ")"),
                1 === i.length && 1 === o.nodeType ? t.find.matchesSelector(o, e) ? [o] : [] : t.find.matches(e, t.grep(i, function(t) {
                    return 1 === t.nodeType
                }))
            }
            ,
            t.fn.extend({
                find: function(e) {
                    var i, n, o = this.length, r = this;
                    if ("string" != typeof e)
                        return this.pushStack(t(e).filter(function() {
                            for (i = 0; i < o; i++)
                                if (t.contains(r[i], this))
                                    return !0
                        }));
                    for (n = this.pushStack([]),
                    i = 0; i < o; i++)
                        t.find(e, r[i], n);
                    return o > 1 ? t.uniqueSort(n) : n
                },
                filter: function(t) {
                    return this.pushStack(n(this, t || [], !1))
                },
                not: function(t) {
                    return this.pushStack(n(this, t || [], !0))
                },
                is: function(e) {
                    return !!n(this, "string" == typeof e && i.test(e) ? t(e) : e || [], !1).length
                }
            })
        }
        .apply(e, n)) && (t.exports = o)
    },
    "8ymj": function(t, e, i) {
        "use strict";
        function n() {
            this.handlePageChange = function() {
                r.a.disableGlobalYOffsetCache = !!document.querySelector(".js-variableHeightTopBar"),
                r.a.refreshGlobalYOffset()
            }
            ,
            this.after("initialize", function() {
                this.on(document, "uiSwiftLoaded uiPageChanged", this.handlePageChange)
            })
        }
        var o = i("DBjh")
          , r = i("reQR");
        e.a = Object(o.default)(n)
    },
    "94VQ": function(t, e, i) {
        "use strict";
        var n = i("Yobk")
          , o = i("X8DO")
          , r = i("e6n0")
          , a = {};
        i("hJx8")(a, i("dSzd")("iterator"), function() {
            return this
        }),
        t.exports = function(t, e, i) {
            t.prototype = n(a, {
                next: o(1, i)
            }),
            r(t, e + " Iterator")
        }
    },
    "9CHI": function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return /[^\x20\t\r\n\f]+/g
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    "9DDo": function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return ["Top", "Right", "Bottom", "Left"]
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    "9G4n": function(t, e, i) {
        var n, o;
        n = [i("2gn9")],
        void 0 !== (o = function(t) {
            "use strict";
            return t.toString
        }
        .apply(e, n)) && (t.exports = o)
    },
    "9bBU": function(t, e, i) {
        i("mClu");
        var n = i("FeBl").Object;
        t.exports = function(t, e, i) {
            return n.defineProperty(t, e, i)
        }
    },
    "9np9": function(t, e, i) {
        "use strict";
        function n() {
            this.addAuthToken = function(t) {
                if (t = t || {},
                !o.a.get())
                    throw "addAuthToken requires a formAuthenticityToken";
                return r({}, t, {
                    authenticity_token: o.a.get()
                })
            }
            ,
            this.getAuthToken = function() {
                return this.attr.formAuthenticityToken
            }
        }
        var o = i("PYQz")
          , r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
        ;
        e.a = n
    },
    "9xKg": function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[1];
            Promise.all([i.e(0), i.e(1)]).then(function(t) {
                var o = {
                    live_video: i("75qo").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    "9zLT": function(t, e, i) {
        "use strict";
        function n() {
            return function(t, e) {
                var i = (new Date).getTime();
                return e(t).then(function(e) {
                    return s(e, t, i)
                })
            }
        }
        e.a = n;
        var o = i("TygE")
          , r = /^\/1\.1\/([A-Za-z_\/]+[A-Za-z])(?:\/)?(?:.json)?/
          , a = function(t) {
            var e = t && r.exec(t);
            return e && e[1] ? e[1].split("/").join("_") : "unknown"
        }
          , s = function(t, e, i) {
            var n = (new Date).getTime()
              , r = n - i
              , s = {}
              , u = ["stats", "http-client", "api", a(e.path), t.status];
            return Object(o.a)(u.join(":"), r, s),
            t
        }
    },
    AHT0: function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return []
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    AJAn: function(t, e, i) {
        "use strict";
        function n() {
            o.default.mixin(this, [s.a]),
            this.around("attachChild", function(t, e, i, n) {
                return t(e, i, r.default.merge(n, {
                    noTeardown: !0
                }))
            })
        }
        var o = i("q9/C")
          , r = i("YzIt")
          , a = i("NcKo")
          , s = i.n(a);
        e.a = n
    },
    AmlD: function(t, e, i) {
        var n, o;
        n = [],
        void 0 !== (o = function() {
            "use strict";
            function t(t, e) {
                var i, n, o, r = e.length;
                return "function" == typeof e[r - 1] && (r -= 1,
                o = e[r]),
                "object" == typeof e[r - 1] && (r -= 1),
                2 == r ? (i = e[0],
                n = e[1]) : (i = t.node,
                n = e[0]),
                {
                    element: i,
                    type: n,
                    callback: o
                }
            }
            function e(t, e) {
                return t.element == e.element && t.type == e.type && (null == e.callback || t.callback == e.callback)
            }
            function i() {
                function i(t) {
                    this.component = t,
                    this.attachedTo = [],
                    this.instances = {},
                    this.addInstance = function(t) {
                        var e = new n(t);
                        return this.instances[t.identity] = e,
                        this.attachedTo.push(t.node),
                        e
                    }
                    ,
                    this.removeInstance = function(t) {
                        delete this.instances[t.identity];
                        var e = this.attachedTo.indexOf(t.node);
                        e > -1 && this.attachedTo.splice(e, 1),
                        Object.keys(this.instances).length || o.removeComponentInfo(this)
                    }
                    ,
                    this.isAttachedTo = function(t) {
                        return this.attachedTo.indexOf(t) > -1
                    }
                }
                function n(t) {
                    this.instance = t,
                    this.events = [],
                    this.addBind = function(t) {
                        this.events.push(t),
                        o.events.push(t)
                    }
                    ,
                    this.removeBind = function(t) {
                        for (var i, n = 0; i = this.events[n]; n++)
                            e(i, t) && this.events.splice(n, 1)
                    }
                }
                var o = this;
                (this.reset = function() {
                    this.components = [],
                    this.allInstances = {},
                    this.events = []
                }
                ).call(this),
                this.addInstance = function(t) {
                    var e = this.findComponentInfo(t);
                    e || (e = new i(t.constructor),
                    this.components.push(e));
                    var n = e.addInstance(t);
                    return this.allInstances[t.identity] = n,
                    e
                }
                ,
                this.removeInstance = function(t) {
                    var e = this.findComponentInfo(t);
                    e && e.removeInstance(t),
                    delete this.allInstances[t.identity]
                }
                ,
                this.removeComponentInfo = function(t) {
                    var e = this.components.indexOf(t);
                    e > -1 && this.components.splice(e, 1)
                }
                ,
                this.findComponentInfo = function(t) {
                    for (var e, i = t.attachTo ? t : t.constructor, n = 0; e = this.components[n]; n++)
                        if (e.component === i)
                            return e;
                    return null
                }
                ,
                this.findInstanceInfo = function(t) {
                    return this.allInstances[t.identity] || null
                }
                ,
                this.getBoundEventNames = function(t) {
                    return this.findInstanceInfo(t).events.map(function(t) {
                        return t.type
                    })
                }
                ,
                this.findInstanceInfoByNode = function(t) {
                    var e = [];
                    return Object.keys(this.allInstances).forEach(function(i) {
                        var n = this.allInstances[i];
                        n.instance.node === t && e.push(n)
                    }, this),
                    e
                }
                ,
                this.on = function(e) {
                    for (var i, n = o.findInstanceInfo(this), r = arguments.length, a = 1, s = new Array(r - 1); a < r; a++)
                        s[a - 1] = arguments[a];
                    if (n) {
                        i = e.apply(null, s),
                        i && (s[s.length - 1] = i);
                        var u = t(this, s);
                        n.addBind(u)
                    }
                }
                ,
                this.off = function() {
                    var i = t(this, arguments)
                      , n = o.findInstanceInfo(this);
                    n && n.removeBind(i);
                    for (var r, a = 0; r = o.events[a]; a++)
                        e(r, i) && o.events.splice(a, 1)
                }
                ,
                o.trigger = function() {}
                ,
                this.teardown = function() {
                    o.removeInstance(this)
                }
                ,
                this.withRegistration = function() {
                    this.after("initialize", function() {
                        o.addInstance(this)
                    }),
                    this.around("on", o.on),
                    this.after("off", o.off),
                    window.DEBUG && DEBUG.enabled && this.after("trigger", o.trigger),
                    this.after("teardown", {
                        obj: o,
                        fnName: "teardown"
                    })
                }
            }
            return new i
        }
        .apply(e, n)) && (t.exports = o)
    },
    "Anz+": function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                closeButtonSelector: ".dtab-banner button"
            }),
            this.close = function() {
                this.trigger("uiBannerDismissed", {
                    height: this.$node.outerHeight()
                }),
                this.$node.remove(),
                this.teardown()
            }
            ,
            this.after("initialize", function() {
                this.on("click", {
                    closeButtonSelector: this.close
                })
            })
        }
        var o = i("DBjh");
        e.a = Object(o.default)(n)
    },
    "Az+4": function(t, e) {
        window.requestIdleCallback = window.requestIdleCallback || function(t) {
            var e = Date.now();
            return setTimeout(function() {
                t({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - e))
                    }
                })
            }, 1)
        }
        ,
        window.cancelIdleCallback = window.cancelIdleCallback || function(t) {
            clearTimeout(t)
        }
    },
    B68V: function(t, e, i) {
        "use strict";
        e.a = {
            pageVisible: function() {
                if (void 0 !== document.hidden)
                    return document.hidden ? "no" : "yes"
            }
        }
    },
    BITZ: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[1];
            Promise.all([i.e(0), i.e(1)]).then(function(t) {
                var o = {
                    directory: i("3MDS").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    BxZd: function(t, e, i) {
        var n, o;
        n = [i("rY9R"), i("ZWgy")],
        void 0 !== (o = function(t, e) {
            "use strict";
            return function() {
                var i = t.createDocumentFragment()
                  , n = i.appendChild(t.createElement("div"))
                  , o = t.createElement("input");
                o.setAttribute("type", "radio"),
                o.setAttribute("checked", "checked"),
                o.setAttribute("name", "t"),
                n.appendChild(o),
                e.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked,
                n.innerHTML = "<textarea>x</textarea>",
                e.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
            }(),
            e
        }
        .apply(e, n)) && (t.exports = o)
    },
    C4MV: function(t, e, i) {
        t.exports = {
            default: i("9bBU"),
            __esModule: !0
        }
    },
    C8jw: function(t, e, i) {
        "use strict";
        function n() {
            function t(t) {
                var e = t && t.associatedTweetId
                  , i = {};
                if (e)
                    return i[a.a.associatedTweet] = {
                        association_type: r.a.tweet,
                        association_id: e
                    },
                    {
                        associations: i
                    }
            }
            this.defaultAttrs({
                userActionToActionMap: {
                    uiMuteUserAction: "mute_user",
                    uiUnmuteUserAction: "unmute_user",
                    uiMentionAction: "reply",
                    uiDmAction: "dm",
                    uiListAction: "add_to_list",
                    uiReportSpamAction: "report_as_spam",
                    uiRetweetOnAction: {
                        element: "allow_retweets",
                        action: "on"
                    },
                    uiRetweetOffAction: {
                        element: "allow_retweets",
                        action: "off"
                    },
                    uiDeviceNotificationsOnAction: {
                        element: "mobile_notifications",
                        action: "on"
                    },
                    uiDeviceNotificationsOffAction: {
                        element: "mobile_notifications",
                        action: "off"
                    },
                    uiShowMobileNotificationsConfirm: {
                        element: "mobile_notifications",
                        action: "failure"
                    },
                    uiShowPushTweetsNotificationsConfirm: {
                        element: "mobile_notifications",
                        action: "failure"
                    },
                    uiUserTopicClickAction: {
                        element: "topic",
                        action: "click"
                    },
                    uiLoggedOutFollowAttempt: "follow_attempt"
                }
            }),
            this.handleUserEvent = function(e, i) {
                i && !i.skipScribe && (this.scribeInteraction(i.action, i, t(i.sourceEventData)),
                i.isFollowBack && this.scribeInteraction("follow_back", i, t(i.sourceEventData)))
            }
            ,
            this.handleAction = function(e, i) {
                var n = i || {};
                n.skipScribe || this.scribeInteraction(this.attr.userActionToActionMap[e.type], n, t(n))
            }
            ,
            this.after("initialize", function() {
                this.on(document, "dataFollowStateChange dataUserActionSuccess", this.handleUserEvent),
                this.on(document, Object.keys(this.attr.userActionToActionMap).join(" "), this.handleAction)
            })
        }
        var o = i("DBjh")
          , r = i("rbkv")
          , a = i("EYxo")
          , s = i("gcfh");
        e.a = Object(o.default)(n, s.a)
    },
    CCiT: function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            }
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    CGZ6: function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                pageViewScribeData: null
            }),
            this.after("initialize", function() {
                this.scribeOnEvent("uiSwiftLoaded uiPageChanged", {
                    action: "show"
                }, this.attr.pageViewScribeData)
            })
        }
        var o = i("DBjh")
          , r = i("3oDc");
        e.a = Object(o.default)(n, r.a)
    },
    CXw9: function(t, e, i) {
        "use strict";
        var n, o, r, a = i("O4g8"), s = i("7KvD"), u = i("+ZMJ"), c = i("RY/4"), l = i("kM2E"), d = i("EqjI"), h = i("lOnJ"), f = i("2KxR"), p = i("NWt+"), g = i("t8x9"), m = i("L42u").set, v = i("82Mu")(), b = s.TypeError, y = s.process, w = s.Promise, y = s.process, S = "process" == c(y), C = function() {}, T = !!function() {
            try {
                var t = w.resolve(1)
                  , e = (t.constructor = {})[i("dSzd")("species")] = function(t) {
                    t(C, C)
                }
                ;
                return (S || "function" == typeof PromiseRejectionEvent) && t.then(C)instanceof e
            } catch (t) {}
        }(), x = function(t, e) {
            return t === e || t === w && e === r
        }, E = function(t) {
            var e;
            return !(!d(t) || "function" != typeof (e = t.then)) && e
        }, k = function(t) {
            return x(w, t) ? new O(t) : new o(t)
        }, O = o = function(t) {
            var e, i;
            this.promise = new t(function(t, n) {
                if (void 0 !== e || void 0 !== i)
                    throw b("Bad Promise constructor");
                e = t,
                i = n
            }
            ),
            this.resolve = h(e),
            this.reject = h(i)
        }
        , D = function(t) {
            try {
                t()
            } catch (t) {
                return {
                    error: t
                }
            }
        }, A = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var i = t._c;
                v(function() {
                    for (var n = t._v, o = 1 == t._s, r = 0; i.length > r; )
                        !function(e) {
                            var i, r, a = o ? e.ok : e.fail, s = e.resolve, u = e.reject, c = e.domain;
                            try {
                                a ? (o || (2 == t._h && P(t),
                                t._h = 1),
                                !0 === a ? i = n : (c && c.enter(),
                                i = a(n),
                                c && c.exit()),
                                i === e.promise ? u(b("Promise-chain cycle")) : (r = E(i)) ? r.call(i, s, u) : s(i)) : u(n)
                            } catch (t) {
                                u(t)
                            }
                        }(i[r++]);
                    t._c = [],
                    t._n = !1,
                    e && !t._h && I(t)
                })
            }
        }, I = function(t) {
            m.call(s, function() {
                var e, i, n, o = t._v;
                if (j(t) && (e = D(function() {
                    S ? y.emit("unhandledRejection", o, t) : (i = s.onunhandledrejection) ? i({
                        promise: t,
                        reason: o
                    }) : (n = s.console) && n.error && n.error("Unhandled promise rejection", o)
                }),
                t._h = S || j(t) ? 2 : 1),
                t._a = void 0,
                e)
                    throw e.error
            })
        }, j = function(t) {
            if (1 == t._h)
                return !1;
            for (var e, i = t._a || t._c, n = 0; i.length > n; )
                if (e = i[n++],
                e.fail || !j(e.promise))
                    return !1;
            return !0
        }, P = function(t) {
            m.call(s, function() {
                var e;
                S ? y.emit("rejectionHandled", t) : (e = s.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            })
        }, N = function(t) {
            var e = this;
            e._d || (e._d = !0,
            e = e._w || e,
            e._v = t,
            e._s = 2,
            e._a || (e._a = e._c.slice()),
            A(e, !0))
        }, L = function(t) {
            var e, i = this;
            if (!i._d) {
                i._d = !0,
                i = i._w || i;
                try {
                    if (i === t)
                        throw b("Promise can't be resolved itself");
                    (e = E(t)) ? v(function() {
                        var n = {
                            _w: i,
                            _d: !1
                        };
                        try {
                            e.call(t, u(L, n, 1), u(N, n, 1))
                        } catch (t) {
                            N.call(n, t)
                        }
                    }) : (i._v = t,
                    i._s = 1,
                    A(i, !1))
                } catch (t) {
                    N.call({
                        _w: i,
                        _d: !1
                    }, t)
                }
            }
        };
        T || (w = function(t) {
            f(this, w, "Promise", "_h"),
            h(t),
            n.call(this);
            try {
                t(u(L, this, 1), u(N, this, 1))
            } catch (t) {
                N.call(this, t)
            }
        }
        ,
        n = function(t) {
            this._c = [],
            this._a = void 0,
            this._s = 0,
            this._d = !1,
            this._v = void 0,
            this._h = 0,
            this._n = !1
        }
        ,
        n.prototype = i("xH/j")(w.prototype, {
            then: function(t, e) {
                var i = k(g(this, w));
                return i.ok = "function" != typeof t || t,
                i.fail = "function" == typeof e && e,
                i.domain = S ? y.domain : void 0,
                this._c.push(i),
                this._a && this._a.push(i),
                this._s && A(this, !1),
                i.promise
            },
            catch: function(t) {
                return this.then(void 0, t)
            }
        }),
        O = function() {
            var t = new n;
            this.promise = t,
            this.resolve = u(L, t, 1),
            this.reject = u(N, t, 1)
        }
        ),
        l(l.G + l.W + l.F * !T, {
            Promise: w
        }),
        i("e6n0")(w, "Promise"),
        i("bRrM")("Promise"),
        r = i("FeBl").Promise,
        l(l.S + l.F * !T, "Promise", {
            reject: function(t) {
                var e = k(this);
                return (0,
                e.reject)(t),
                e.promise
            }
        }),
        l(l.S + l.F * (a || !T), "Promise", {
            resolve: function(t) {
                if (t instanceof w && x(t.constructor, this))
                    return t;
                var e = k(this);
                return (0,
                e.resolve)(t),
                e.promise
            }
        }),
        l(l.S + l.F * !(T && i("dY0y")(function(t) {
            w.all(t).catch(C)
        })), "Promise", {
            all: function(t) {
                var e = this
                  , i = k(e)
                  , n = i.resolve
                  , o = i.reject
                  , r = D(function() {
                    var i = []
                      , r = 0
                      , a = 1;
                    p(t, !1, function(t) {
                        var s = r++
                          , u = !1;
                        i.push(void 0),
                        a++,
                        e.resolve(t).then(function(t) {
                            u || (u = !0,
                            i[s] = t,
                            --a || n(i))
                        }, o)
                    }),
                    --a || n(i)
                });
                return r && o(r.error),
                i.promise
            },
            race: function(t) {
                var e = this
                  , i = k(e)
                  , n = i.reject
                  , o = D(function() {
                    p(t, !1, function(t) {
                        e.resolve(t).then(i.resolve, n)
                    })
                });
                return o && n(o.error),
                i.promise
            }
        })
    },
    Cdx3: function(t, e, i) {
        var n = i("sB3e")
          , o = i("lktj");
        i("uqUo")("keys", function() {
            return function(t) {
                return o(n(t))
            }
        })
    },
    Ckrd: function(t, e, i) {
        "use strict";
        function n() {
            return [location.pathname, location.search].join("")
        }
        e.a = n
    },
    CtpE: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    muteConversationDialogSelector: "#mute-conversation-dialog",
                    muteConversationDialogButtonSelector: ".MuteConversationDialog-button"
                }),
                this.renderDialog = function() {
                    var e = this.attr.muteConversationDialogSelector;
                    if (!t(e).length) {
                        var i = s.a.render({});
                        t("body").append(i),
                        this.$dialogContainer = t(e),
                        this.$dialog = this.$dialogContainer.find(this.attr.modalSelector)
                    }
                }
                ,
                this.showDialog = function(t) {
                    this.openedFromNode = t.target,
                    this.renderDialog(),
                    this.open()
                }
                ,
                this.muteConversation = function() {
                    this.close(),
                    this.trigger(this.openedFromNode, "click")
                }
                ,
                this.after("initialize", function() {
                    this.on(document, "uiOpenMuteConversationDialog", this.showDialog),
                    this.on(document, "click", {
                        muteConversationDialogButtonSelector: this.muteConversation
                    })
                })
            }
            var o = i("DBjh")
              , r = i("UHc7")
              , a = i("YZXk")
              , s = i.n(a)
              , u = Object(o.default)(n, r.a);
            e.a = u
        }
        ).call(e, i("4kSj"))
    },
    CwSZ: function(t, e, i) {
        "use strict";
        var n = i("p8xL")
          , o = i("XgCd")
          , r = {
            brackets: function(t) {
                return t + "[]"
            },
            indices: function(t, e) {
                return t + "[" + e + "]"
            },
            repeat: function(t) {
                return t
            }
        }
          , a = Date.prototype.toISOString
          , s = {
            delimiter: "&",
            encode: !0,
            encoder: n.encode,
            encodeValuesOnly: !1,
            serializeDate: function(t) {
                return a.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        }
          , u = function t(e, i, o, r, a, s, u, c, l, d, h, f) {
            var p = e;
            if ("function" == typeof u)
                p = u(i, p);
            else if (p instanceof Date)
                p = d(p);
            else if (null === p) {
                if (r)
                    return s && !f ? s(i) : i;
                p = ""
            }
            if ("string" == typeof p || "number" == typeof p || "boolean" == typeof p || n.isBuffer(p)) {
                if (s) {
                    return [h(f ? i : s(i)) + "=" + h(s(p))]
                }
                return [h(i) + "=" + h(String(p))]
            }
            var g = [];
            if (void 0 === p)
                return g;
            var m;
            if (Array.isArray(u))
                m = u;
            else {
                var v = Object.keys(p);
                m = c ? v.sort(c) : v
            }
            for (var b = 0; b < m.length; ++b) {
                var y = m[b];
                a && null === p[y] || (g = Array.isArray(p) ? g.concat(t(p[y], o(i, y), o, r, a, s, u, c, l, d, h, f)) : g.concat(t(p[y], i + (l ? "." + y : "[" + y + "]"), o, r, a, s, u, c, l, d, h, f)))
            }
            return g
        };
        t.exports = function(t, e) {
            var i = t
              , n = e || {};
            if (null !== n.encoder && void 0 !== n.encoder && "function" != typeof n.encoder)
                throw new TypeError("Encoder has to be a function.");
            var a = void 0 === n.delimiter ? s.delimiter : n.delimiter
              , c = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : s.strictNullHandling
              , l = "boolean" == typeof n.skipNulls ? n.skipNulls : s.skipNulls
              , d = "boolean" == typeof n.encode ? n.encode : s.encode
              , h = "function" == typeof n.encoder ? n.encoder : s.encoder
              , f = "function" == typeof n.sort ? n.sort : null
              , p = void 0 !== n.allowDots && n.allowDots
              , g = "function" == typeof n.serializeDate ? n.serializeDate : s.serializeDate
              , m = "boolean" == typeof n.encodeValuesOnly ? n.encodeValuesOnly : s.encodeValuesOnly;
            if (void 0 === n.format)
                n.format = o.default;
            else if (!Object.prototype.hasOwnProperty.call(o.formatters, n.format))
                throw new TypeError("Unknown format option provided.");
            var v, b, y = o.formatters[n.format];
            "function" == typeof n.filter ? (b = n.filter,
            i = b("", i)) : Array.isArray(n.filter) && (b = n.filter,
            v = b);
            var w = [];
            if ("object" != typeof i || null === i)
                return "";
            var S;
            S = n.arrayFormat in r ? n.arrayFormat : "indices"in n ? n.indices ? "indices" : "repeat" : "indices";
            var C = r[S];
            v || (v = Object.keys(i)),
            f && v.sort(f);
            for (var T = 0; T < v.length; ++T) {
                var x = v[T];
                l && null === i[x] || (w = w.concat(u(i[x], x, C, c, l, d ? h : null, b, f, p, g, y, m)))
            }
            return w.join(a)
        }
    },
    D0I3: function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                noTeardown: !0
            }),
            this.doTeardown = function(t, e) {
                Object.keys(r.default.allInstances).forEach(function(t) {
                    var i = r.default.allInstances[t];
                    i && this.teardownInstance(i.instance, e.teardownContext)
                }, this)
            }
            ,
            this.teardownInstance = function(t, e) {
                t.attr.noTeardown || (e ? t.teardownContext === e && t.teardown() : t.teardown())
            }
            ,
            this.after("initialize", function() {
                this.on("uiTeardown", this.doTeardown)
            })
        }
        var o = i("DBjh")
          , r = i("kxx+");
        e.a = Object(o.default)(n)
    },
    D2L2: function(t, e) {
        var i = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return i.call(t, e)
        }
    },
    DBjh: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("IuVG")
          , o = i.n(n);
        e.default = o.a
    },
    DDCP: function(t, e, i) {
        "use strict";
        var n = i("p8xL")
          , o = Object.prototype.hasOwnProperty
          , r = {
            allowDots: !1,
            allowPrototypes: !1,
            arrayLimit: 20,
            decoder: n.decode,
            delimiter: "&",
            depth: 5,
            parameterLimit: 1e3,
            plainObjects: !1,
            strictNullHandling: !1
        }
          , a = function(t, e) {
            for (var i = {}, n = t.split(e.delimiter, e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit), r = 0; r < n.length; ++r) {
                var a, s, u = n[r], c = -1 === u.indexOf("]=") ? u.indexOf("=") : u.indexOf("]=") + 1;
                -1 === c ? (a = e.decoder(u),
                s = e.strictNullHandling ? null : "") : (a = e.decoder(u.slice(0, c)),
                s = e.decoder(u.slice(c + 1))),
                o.call(i, a) ? i[a] = [].concat(i[a]).concat(s) : i[a] = s
            }
            return i
        }
          , s = function(t, e, i) {
            if (!t.length)
                return e;
            var n, o = t.shift();
            if ("[]" === o)
                n = [],
                n = n.concat(s(t, e, i));
            else {
                n = i.plainObjects ? Object.create(null) : {};
                var r = "[" === o.charAt(0) && "]" === o.charAt(o.length - 1) ? o.slice(1, -1) : o
                  , a = parseInt(r, 10);
                !isNaN(a) && o !== r && String(a) === r && a >= 0 && i.parseArrays && a <= i.arrayLimit ? (n = [],
                n[a] = s(t, e, i)) : n[r] = s(t, e, i)
            }
            return n
        }
          , u = function(t, e, i) {
            if (t) {
                var n = i.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t
                  , r = /(\[[^[\]]*])/
                  , a = /(\[[^[\]]*])/g
                  , u = r.exec(n)
                  , c = u ? n.slice(0, u.index) : n
                  , l = [];
                if (c) {
                    if (!i.plainObjects && o.call(Object.prototype, c) && !i.allowPrototypes)
                        return;
                    l.push(c)
                }
                for (var d = 0; null !== (u = a.exec(n)) && d < i.depth; ) {
                    if (d += 1,
                    !i.plainObjects && o.call(Object.prototype, u[1].slice(1, -1)) && !i.allowPrototypes)
                        return;
                    l.push(u[1])
                }
                return u && l.push("[" + n.slice(u.index) + "]"),
                s(l, e, i)
            }
        };
        t.exports = function(t, e) {
            var i = e || {};
            if (null !== i.decoder && void 0 !== i.decoder && "function" != typeof i.decoder)
                throw new TypeError("Decoder has to be a function.");
            if (i.delimiter = "string" == typeof i.delimiter || n.isRegExp(i.delimiter) ? i.delimiter : r.delimiter,
            i.depth = "number" == typeof i.depth ? i.depth : r.depth,
            i.arrayLimit = "number" == typeof i.arrayLimit ? i.arrayLimit : r.arrayLimit,
            i.parseArrays = !1 !== i.parseArrays,
            i.decoder = "function" == typeof i.decoder ? i.decoder : r.decoder,
            i.allowDots = "boolean" == typeof i.allowDots ? i.allowDots : r.allowDots,
            i.plainObjects = "boolean" == typeof i.plainObjects ? i.plainObjects : r.plainObjects,
            i.allowPrototypes = "boolean" == typeof i.allowPrototypes ? i.allowPrototypes : r.allowPrototypes,
            i.parameterLimit = "number" == typeof i.parameterLimit ? i.parameterLimit : r.parameterLimit,
            i.strictNullHandling = "boolean" == typeof i.strictNullHandling ? i.strictNullHandling : r.strictNullHandling,
            "" === t || null === t || void 0 === t)
                return i.plainObjects ? Object.create(null) : {};
            for (var o = "string" == typeof t ? a(t, i) : t, s = i.plainObjects ? Object.create(null) : {}, c = Object.keys(o), l = 0; l < c.length; ++l) {
                var d = c[l]
                  , h = u(d, o[d], i);
                s = n.merge(s, h, i)
            }
            return n.compact(s)
        }
    },
    DHQD: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    minTimeout: 2e3,
                    messageSelector: ".message",
                    closeSelector: ".dismiss",
                    reloadSelector: ".js-reload",
                    textSelector: ".message-text",
                    bannersSelector: "#banners",
                    topOffset: 46,
                    hiddenClass: "hidden",
                    visibleClass: "js-message-drawer-visible",
                    dialogOpenSelector: ".modal-enabled, .overlay-enabled",
                    $body: t("body")
                }),
                this.calculateFadeTimeout = function(t, e) {
                    if (null != e)
                        return e;
                    var i = t.split(" ").length
                      , n = 1e3 * i / 5 + 225;
                    return n < this.attr.minTimeout ? this.attr.minTimeout : n
                }
                ,
                this.dialogPresent = function() {
                    return this.attr.$body.is(this.attr.dialogOpenSelector)
                }
                ,
                this.showMessage = function(e, i, n) {
                    var o = this;
                    this.showing = !0;
                    var r = {
                        top: this.attr.topOffset + (t(this.attr.bannersSelector).height() || 0)
                    };
                    clearTimeout(this.messageTimeout),
                    this.timeoutExpired = !1,
                    this.dialogPresent() && (r.top = 0),
                    this.$node.stop(),
                    this.select("textSelector").html(e),
                    this.$node.removeClass(this.attr.hiddenClass),
                    this.$node.animate(r, 300, function() {
                        o.$node.addClass(o.attr.visibleClass),
                        o.scheduleClose(i, o.calculateFadeTimeout(e, n))
                    }),
                    this.select("closeSelector").toggle(!!i)
                }
                ,
                this.updateMessage = function(t, e) {
                    e && "message"in e && this.select("textSelector").html(e.message)
                }
                ,
                this.scheduleClose = function(t, e) {
                    var i = this;
                    t || (this.messageTimeout = setTimeout(function() {
                        i.hovering || i.closeMessage(),
                        i.timeoutExpired = !0
                    }, e))
                }
                ,
                this.handleMouseEnter = function() {
                    this.hovering = !0
                }
                ,
                this.handleMouseLeave = function() {
                    this.hovering = !1,
                    this.timeoutExpired && (clearTimeout(this.messageTimeout),
                    this.scheduleClose(!1, this.attr.minTimeout))
                }
                ,
                this.showTemporaryMessage = function(t, e) {
                    this.showMessage(e.message, !1, e.timeout)
                }
                ,
                this.showStickyMessage = function(t, e) {
                    this.showMessage(e.message, !0)
                }
                ,
                this.setHidden = function() {
                    this.$node.removeClass(this.attr.visibleClass),
                    this.$node.addClass(this.attr.hiddenClass)
                }
                ,
                this.closeMessage = function(t) {
                    var e = this;
                    this.showing = !1,
                    t && t.preventDefault(),
                    this.$node.animate({
                        top: -40
                    }, 300, function() {
                        return e.setHidden()
                    })
                }
                ,
                this.reloadPageHandler = function() {
                    this.reloadPage()
                }
                ,
                this.reloadPage = function() {
                    window.location.reload()
                }
                ,
                this.repositionMessage = function(e) {
                    var i = this;
                    this.showing && ("uiDialogOpened" === e.type ? this.$node.stop().css({
                        top: 0
                    }) : this.dialogPresent() || this.$node.queue(function(e) {
                        i.$node.css({
                            top: i.attr.topOffset + (t(i.attr.bannersSelector).height() || 0)
                        }),
                        e()
                    }))
                }
                ,
                this.after("initialize", function() {
                    this.on(document, "uiShowMessage", this.showTemporaryMessage),
                    this.on(document, "uiUpdateMessage", this.updateMessage),
                    this.on(document, "uiShowError uiShowStickyMessage", this.showStickyMessage),
                    this.on("click", {
                        reloadSelector: this.reloadPageHandler,
                        closeSelector: this.closeMessage
                    }),
                    this.on(document, "uiBeforePageChanged uiHideMessage", this.setHidden),
                    this.on("mouseenter", {
                        messageSelector: this.handleMouseEnter
                    }),
                    this.on("mouseleave", {
                        messageSelector: this.handleMouseLeave
                    }),
                    this.on(document, "uiDialogOpened uiDialogClosed", this.repositionMessage),
                    this.$node.hasClass(this.attr.hiddenClass) && this.closeMessage()
                })
            }
            var o = i("DBjh")
              , r = Object(o.default)(n);
            e.a = r
        }
        ).call(e, i("4kSj"))
    },
    DMss: function(t, e, i) {
        "use strict";
        function n(t) {
            return !t.prop("disabled") && !t.attr("aria-disabled")
        }
        e.a = n
    },
    DNqT: function(t, e, i) {
        "use strict";
        function n(t) {
            r.a.attachTo(document),
            s.a.attachTo(".LoginDialog", {
                eventData: {
                    scribeContext: {
                        component: "dialog",
                        element: "login"
                    }
                }
            }),
            a.a.attachTo(".SignupDialog", {
                shouldReplaceSignupWithLogin: t.shouldReplaceSignupWithLogin,
                eventData: {
                    scribeContext: {
                        component: "dialog",
                        element: "signup"
                    }
                }
            }),
            u.a.attachTo(document),
            l.a.attachTo(".Banner--signup"),
            t.inExpPhotoSet && c.a.attachTo("#page-container", {
                rotationMs: t.rotationMs
            }),
            o.a.attachTo(".session-dropdown .dropdown", {
                environment: t.environment,
                skipDisplay: !!t.internalReferer || t.skipAutoSignupDialog
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = n;
        var o = i("Qbs8")
          , r = i("8ymj")
          , a = i("HlP9")
          , s = i("nqm3")
          , u = i("+NJ6")
          , c = i("RIfZ")
          , l = i("bCrq")
    },
    DZ0u: function(t, e, i) {
        "use strict";
        var n = i("MB5k")
          , o = i("lGP/")
          , r = Object(n.a)(o.a);
        e.a = r
    },
    DdOc: function(t, e, i) {
        var n, o;
        n = [i("Olpr")],
        void 0 !== (o = function(t) {
            "use strict";
            var e = function(i, n, o, r, a, s, u) {
                var c = 0
                  , l = i.length
                  , d = null == o;
                if ("object" === t.type(o)) {
                    a = !0;
                    for (c in o)
                        e(i, n, c, o[c], !0, s, u)
                } else if (void 0 !== r && (a = !0,
                t.isFunction(r) || (u = !0),
                d && (u ? (n.call(i, r),
                n = null) : (d = n,
                n = function(e, i, n) {
                    return d.call(t(e), n)
                }
                )),
                n))
                    for (; c < l; c++)
                        n(i[c], o, u ? r : r.call(i[c], c, n(i[c], o)));
                return a ? i : d ? n.call(i) : l ? n(i[0], o) : s
            };
            return e
        }
        .apply(e, n)) && (t.exports = o)
    },
    DkBL: function(t, e, i) {
        "use strict";
        function n() {
            this.toggleMute = function(t, e, i) {
                this.post({
                    url: t ? "/i/mutes/conversations/create" : "/i/mutes/conversations/destroy",
                    data: {
                        tweet_id: i.tweetId
                    },
                    eventData: i,
                    success: t ? "dataDidMuteConversation" : "dataDidUnmuteConversation",
                    error: t ? "dataFailedToMuteConversation" : "dataFailedToUnmuteConversation"
                })
            }
            ,
            this.after("initialize", function() {
                this.on(document, "uiMuteConversation", this.toggleMute.bind(this, !0)),
                this.on(document, "uiUnmuteConversation", this.toggleMute.bind(this, !1))
            })
        }
        var o = i("DBjh")
          , r = i("VtWx")
          , a = Object(o.default)(n, r.a);
        e.a = a
    },
    DldO: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("JmAy")
          , o = i.n(n);
        e.default = o.a
    },
    Dpkb: function(t, e, i) {
        "use strict";
        function n() {
            var t = {
                969: "doubleclick",
                931: "tellapart"
            };
            this.defaultAttrs({
                statsName: "partner_id_sync",
                noShowError: !0
            }),
            this.doPartnerIdSync = function() {
                this.get({
                    acceptEmptyStringAsJsonResponse: !0,
                    url: "https://analytics.twitter.com/tpm/p",
                    xhrFields: {
                        withCredentials: !0
                    },
                    cache: !1,
                    setActiveUserHeader: !1,
                    success: this.handlePartnerIdSyncResponse.bind(this)
                })
            }
            ,
            this.handlePartnerIdSyncResponse = function(t) {
                var e = this;
                t.forEach(function(t) {
                    return e.syncWithPartner(t)
                })
            }
            ,
            this.syncWithPartner = function(e) {
                var i = {};
                e.requires_guest_id && (i.guest_id = a.a.user.guestId),
                this.get({
                    url: e.endpoint,
                    dataType: "jsonp",
                    jsonp: "tpm_cb",
                    jsonpCallback: "partnerIdSyncComplete",
                    cache: !1,
                    data: i,
                    statsSubcategory: t[e.partner_id]
                })
            }
            ,
            window.partnerIdSyncComplete = function() {}
            ,
            this.after("initialize", function() {
                "production" === this.attr.environment && this.doPartnerIdSync()
            })
        }
        var o = i("DBjh")
          , r = i("VtWx")
          , a = i("IAMj");
        e.a = Object(o.default)(n, r.a)
    },
    DuR2: function(t, e) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || Function("return this")() || (0,
            eval)("this")
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    },
    Dz0w: function(t, e, i) {
        "use strict";
        function n() {
            this.itemCannotBeSelected = function(t) {
                return this.$node.hasClass(this.attr.photoTaggingContainerClass) && !1 === t.can_media_tag
            }
        }
        e.a = n
    },
    "E//N": function(t, e, i) {
        "use strict";
        e.a = "AAAAAAAAAAAAAAAAAAAAAPYXBAAAAAAACLXUNDekMxqa8h%2F40K4moUkGsoc%3DTYfbDKbT3jJPCEVnMYqilB28NHfOPqkca3qaAxGfsyKCs0wRbw"
    },
    EGZi: function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    },
    ENMl: function(t, e, i) {
        (function(e) {
            t.exports = new e.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.s(n.f("is_muting", t, e, 1), t, e, 0, 14, 176, "{{ }}") && (n.rs(t, e, function(t, e, i) {
                        i.b('  Notifications muted for this conversation\n  <a href="//support.twitter.com/articles/20175032" target="_blank" class="learn-more" rel="noopener">Learn more</a>\n')
                    }),
                    t.pop()),
                    n.s(n.f("is_muting", t, e, 1), t, e, 1, 0, 0, "") || n.b("  Notifications unmuted for this conversation\n"),
                    n.b('<button type="button" class="u-floatRight\n'),
                    n.s(n.f("is_muting", t, e, 1), t, e, 0, 325, 358, "{{ }}") && (n.rs(t, e, function(t, e, i) {
                        i.b("    js-undo-mute-conversation\n")
                    }),
                    t.pop()),
                    n.s(n.f("is_muting", t, e, 1), t, e, 1, 0, 0, "") || n.b("    js-undo-unmute-conversation\n"),
                    n.b('  " data-tweet-id="'),
                    n.b(n.v(n.f("tweet_id", t, e, 0))),
                    n.b('">Undo</button>\n'),
                    n.fl()
                },
                partials: {},
                subs: {}
            })
        }
        ).call(e, i("jTWp"))
    },
    EYxo: function(t, e, i) {
        "use strict";
        e.a = {
            associatedTweet: 1,
            platformCardPublisher: 2,
            platformCardCreator: 3,
            conversationOrigin: 4,
            associatedUser: 5,
            associatedTimeline: 6
        }
    },
    EqjI: function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    },
    EvOp: function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.dispatcher = void 0;
        var o = i("//Fk")
          , r = n(o)
          , a = i("fZjL")
          , s = n(a)
          , u = i("xIf1")
          , c = n(u)
          , l = i("vRZH")
          , d = i("mw3O")
          , h = n(d)
          , f = e.dispatcher = function(t) {
            var e = t.headers
              , i = t.method
              , n = t.params
              , o = t.uri
              , a = t.withCredentials
              , u = void 0 === a || a
              , c = new XMLHttpRequest
              , l = o
              , d = h.default.stringify(n);
            return "GET" !== i && "DELETE" !== i || !d || (l = l + "?" + d),
            c.open(i, l),
            c.withCredentials = u,
            (0,
            s.default)(e).forEach(function(t) {
                return c.setRequestHeader(t, e[t])
            }),
            new r.default(function(e, i) {
                function n() {
                    if (4 === c.readyState) {
                        var t = p(c);
                        0 === c.status ? i(t) : e(t)
                    }
                }
                c.onreadystatechange = n,
                c.send(t.data)
            }
            )
        }
          , p = function(t) {
            var e = t.getAllResponseHeaders()
              , i = e ? (0,
            l.parseHeadersString)(e) : {};
            return {
                body: t.responseText,
                headers: i,
                status: t.status
            }
        }
          , g = (0,
        c.default)({
            dispatcher: f
        });
        e.default = g
    },
    FUxd: function(t, e, i) {
        "use strict";
        function n(t) {
            return t.match(s).map(function(t) {
                return 1 === t.length ? t.charCodeAt(0) : ((1023 & t.charCodeAt(0)) << 10) + (1023 & t.charCodeAt(1)) + 65536
            })
        }
        function o(t) {
            return t.map(function(t) {
                return t.toString(16)
            }).join("-")
        }
        function r(t) {
            return t >= u && t <= c
        }
        function a(t) {
            for (var e = 1; e < t.length; e++) {
                var i = t[e];
                if (r(i))
                    return i
            }
            return 0
        }
        var s = /[ud800-\udbff][\udc00-\udfff]|[\D\d]/g
          , u = 127995
          , c = 127999
          , l = {
            infoFromMatch: function(t) {
                var e = t[0] || ""
                  , i = n(e)
                  , s = i.indexOf(8205) >= 0 ? i : i.filter(function(t) {
                    return 65039 !== t
                })
                  , u = o(s)
                  , c = {
                    text: e,
                    key: u
                };
                "️" === e && (c.isVS16 = !0);
                var l = a(s);
                if (l) {
                    var d = t[1] ? s.map(function(t) {
                        return r(t) ? 65039 : t
                    }) : s.filter(function(t) {
                        return !r(t)
                    });
                    c.skinToneKey = o([l]),
                    c.baseKey = o(d)
                }
                return c
            },
            regex: /(?:\ud83d[\udc68\udc69])(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92])|(?:\ud83c[\udfcb\udfcc]|\ud83d\udd75|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd37-\udd39\udd3d\udd3e\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[\u0023\u002a\u0030-\u0039]\ufe0f?\u20e3|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\udeeb\udeec\udef4-\udef8]|\ud83e[\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd40-\udd45\udd47-\udd4c\udd50-\udd6b\udd80-\udd97\uddc0\uddd0\uddde-\udde6]|[\u23e9-\u23ec\u23f0\u23f3\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g
        };
        e.a = l
    },
    FeBl: function(t, e) {
        var i = t.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = i)
    },
    "G/4T": function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[0];
            Promise.all([i.e(0), i.e(7)]).then(function(t) {
                var o = {
                    permalink: i("1WuL").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    GGCE: function(t, e, i) {
        "use strict";
        function n(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1))
        }
        function o(t, e) {
            return t + Math.random() * (e - t + 1)
        }
        e.a = {
            getRandomInteger: n,
            getRandomDouble: o
        }
    },
    GJVY: function(t, e, i) {
        "use strict";
        function n() {
            this.setSessionItem = function(t, e) {
                window.sessionStorage && sessionStorage.setItem(t, e)
            }
            ,
            this.removeSessionItem = function(t) {
                window.sessionStorage && sessionStorage.removeItem(t)
            }
            ,
            this.getSessionItem = function(t) {
                return window.sessionStorage && sessionStorage.getItem(t)
            }
            ,
            this.setSessionObject = function(t, e) {
                void 0 === e ? this.removeSessionItem(t) : this.setSessionItem(t, JSON.stringify(e))
            }
            ,
            this.getSessionObject = function(t) {
                var e = this.getSessionItem(t);
                return void 0 === e ? e : JSON.parse(e)
            }
        }
        e.a = n
    },
    GUGq: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("zzFc")
          , o = i.n(n);
        e.default = o.a
    },
    GUxi: function(t, e, i) {
        var n, o;
        n = [i("AHT0")],
        void 0 !== (o = function(t) {
            "use strict";
            return t.push
        }
        .apply(e, n)) && (t.exports = o)
    },
    Gu7T: function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i("c/Tr")
          , o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n);
        e.default = function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = Array(t.length); e < t.length; e++)
                    i[e] = t[e];
                return i
            }
            return (0,
            o.default)(t)
        }
    },
    H3ms: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t) {
            function n() {
                window.ttftData = {},
                y = !1,
                S = 0,
                C = 0,
                T = {}
            }
            function o(e, i) {
                if (E = window.ttftData.ttft_browser || E,
                !y && window.performance && e && E) {
                    y = !0;
                    var n = e;
                    n.did_load = i,
                    n.web_timings = t.extend({}, window.performance.timing),
                    n.web_timings.toJSON && delete n.web_timings.toJSON,
                    n.navigation = {
                        type: window.performance.navigation.type,
                        redirectCount: window.performance.navigation.redirectCount
                    },
                    n.referrer = document.referrer;
                    var o = new Date(+new Date - k).getTime()
                      , a = new Date(+new Date + k).getTime();
                    if (!["navigationStart", "connectEnd", "responseStart", "responseEnd"].every(function(t) {
                        return n.web_timings[t] && n.web_timings[t] >= o && n.web_timings[t] < a
                    }))
                        return;
                    if (n.is_push_state = window.ttftData.is_push_state,
                    n.is_push_state ? (n.web_timings.navigationStart = window.ttftData.push_render_start,
                    n.web_timings.responseEnd = window.ttftData.push_render_start) : g.a.send(n, "swift_time_to_first_tweet", !1),
                    r(n),
                    x = x || v.a.fromQuery(window.location).show_ttft) {
                        var s = n.web_timings;
                        t(document).trigger("uiShowError", {
                            message: "<table width=80%><thead><th>milestone<th>time<th>cumulative</thead><tbody>" + (n.is_push_state ? "" : "<tr><td>connect:       <td>" + (s.connectEnd - s.navigationStart) + "<td>" + (s.connectEnd - s.navigationStart) + "</tr><tr><td>process:       <td>" + (s.responseStart - s.connectEnd) + "<td>" + (s.responseStart - s.navigationStart) + "</tr><tr><td>response:      <td>" + (s.responseEnd - s.responseStart) + "<td>" + (s.responseEnd - s.navigationStart) + "</tr>") + "<tr><td>render:        <td>" + (n.client_record_time - s.responseEnd) + "<td>" + (n.client_record_time - s.navigationStart) + "</tr><tr><td>interactivity: <td>" + (n.aq_empty_time - n.client_record_time) + "<td>" + (n.aq_empty_time - s.navigationStart) + "</tr><tr><td>ajax_complete: <td>" + (n.ajax_complete_time - n.aq_empty_time) + "<td>" + (n.ajax_complete_time - s.navigationStart) + "</tr><tr><td>ajax_count:    <td>" + n.ajax_count + "</tr></tbody></table>"
                        })
                    }
                }
            }
            function r(t) {
                var e = b.a.getDecider("web_perftown_ttft")
                  , i = b.a.getDecider("web_client_events_ttft");
                if (e || i) {
                    var n = t.web_timings
                      , o = {
                        ttft: t.client_record_time - n.navigationStart,
                        connect: n.connectEnd - n.navigationStart,
                        process: n.responseStart - n.connectEnd,
                        response: n.responseEnd - n.responseStart,
                        render: t.client_record_time - n.responseEnd,
                        interactivity: t.aq_empty_time - t.client_record_time,
                        ajax_complete: t.ajax_complete_time - t.aq_empty_time
                    };
                    t.is_push_state && (delete o.ttft,
                    delete o.connect,
                    delete o.process,
                    delete o.response);
                    var r = {
                        browser: {
                            name: E
                        },
                        page: t.page,
                        section: t.section,
                        push_state: t.is_push_state ? "push_state" : "full"
                    }
                      , a = JSON.stringify(r);
                    Object.keys(o).forEach(function(s) {
                        var u = {
                            product: "webclient",
                            description: "stats:perf:ttft:" + s,
                            duration_ms: o[s],
                            start_time_ms: t.is_push_state ? t.push_render_start : n.navigationStart,
                            metadata: a
                        };
                        e && g.a.send(u, "perftown"),
                        i && m.a.scribe({
                            component: r.push_state,
                            element: "ttft",
                            action: s
                        }, {
                            browser_name: r.browser.name,
                            browser_version: r.browser.version,
                            duration_ms: o[s]
                        })
                    })
                }
            }
            function a(t) {
                if (window.ttftData) {
                    for (var e = !0, i = 0; i < w.length; ++i)
                        if (!(w[i]in window.ttftData)) {
                            e = !1;
                            break
                        }
                    (t || e) && o(window.ttftData, e)
                }
            }
            function s(e, i, n) {
                if (n && n.url in T)
                    for (var o = 0; o < T[n.url].length; o++)
                        if (n === T[n.url][o])
                            return void T[n.url].splice(o, 1);
                0 !== --C && 0 !== t.active || (d(),
                c())
            }
            function u(t, e, i) {
                i && i.url && (T[i.url] || (T[i.url] = []),
                T[i.url].push(i))
            }
            function c() {
                f("ajax_complete_time", window.ttft.now())
            }
            function l() {
                t(document).bind("ajaxComplete", s),
                t(document).bind("ajaxSend", u)
            }
            function d() {
                t(document).unbind("ajaxComplete", s),
                t(document).unbind("ajaxSend", u)
            }
            function h() {
                S = C = t.active,
                f("ajax_count", S),
                0 === S ? c() : (d(),
                l())
            }
            function f(t, e) {
                window.ttftData && !window.ttftData[t] && (window.ttftData[t] = e),
                a(!1)
            }
            function p() {
                return (new Date).getTime()
            }
            var g = i("RMWW")
              , m = i("NNES")
              , v = i("sxXh")
              , b = i("IAMj")
              , y = !1
              , w = ["page", "client_record_time", "aq_empty_time", "ajax_complete_time", "ajax_count"]
              , S = 0
              , C = 0
              , T = {}
              , x = !1
              , E = !1
              , k = 6e5;
            window.ttft = {
                now: p,
                recordMilestone: f,
                resetTTFTState: n,
                startAjaxTracking: h
            },
            a(!1),
            setTimeout(function() {
                return a(!0)
            }, 45e3),
            e.default = {
                startAjaxTracking: h,
                _scribeTransport: g.a
            }
        }
        .call(e, i("4kSj"))
    },
    HlP9: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    dialogSelector: ".SignupDialog",
                    headingSelector: ".SignupDialog-heading",
                    iconSelector: ".SignupDialog-icon .Icon",
                    signupFormSubmitSelector: ".SignupForm-submit",
                    allIconSelectors: "Icon--bird Icon--reply Icon--retweet Icon--heart",
                    triggerSelector: ".js-openSignupDialog",
                    signinLinkSelector: ".SignupDialog-signinLink",
                    shouldReplaceSignupWithLogin: !1
                }),
                this.notifySignupButtonClicked = function() {
                    this.trigger("uiSignupButtonClicked")
                }
                ,
                this.signinClick = function() {
                    var t = "/login?hide_message=true&redirect_after_login=" + encodeURIComponent(this.redirectAfterLoginUrl());
                    this.select("signinLinkSelector").attr("href", t),
                    this.trigger("uiLoginLinkClicked")
                }
                ,
                this.redirectAfterLoginUrl = function() {
                    return this.triggerElementUrl ? this.triggerElementUrl : window.location.pathname + window.location.search
                }
                ,
                this.updateTriggerElementUrl = function(e) {
                    var i = t(e.target).closest(this.attr.triggerSelector);
                    i.length && i.attr("href") ? this.triggerElementUrl = i.attr("href") : this.resetTriggerElementUrl()
                }
                ,
                this.resetTriggerElementUrl = function() {
                    this.triggerElementUrl = void 0,
                    this.select("signinLinkSelector").attr("href", "/login")
                }
                ,
                this.around("open", function(t, e, i, n) {
                    i = i || {
                        action: "default"
                    },
                    "reply" === i.action ? (this.select("headingSelector").text(Object(a.default)("When you join Twitter, you can reply to anyone.")),
                    this.select("iconSelector").removeClass(this.attr.allIconSelectors).addClass("Icon--reply")) : "retweet" === i.action ? (this.select("headingSelector").text(Object(a.default)("When you join Twitter, share any Tweet by Retweeting it to your followers.")),
                    this.select("iconSelector").removeClass(this.attr.allIconSelectors).addClass("Icon--retweet")) : "favorite" === i.action ? (this.select("headingSelector").text(Object(a.default)("Join Twitter to like this Tweet.")),
                    this.select("iconSelector").removeClass(this.attr.allIconSelectors).addClass("Icon--heart")) : (this.select("headingSelector").text(Object(a.default)("Not on Twitter? Sign up, tune into the things you care about, and get updates as they happen.")),
                    this.select("iconSelector").removeClass(this.attr.allIconSelectors).addClass("Icon--bird")),
                    t()
                }),
                this.after("initialize", function() {
                    this.on("click", {
                        signupFormSubmitSelector: this.notifySignupButtonClicked,
                        signinLinkSelector: this.signinClick
                    }),
                    this.on(this.attr.triggerSelector, "click", this.updateTriggerElementUrl),
                    this.on("uiDialogClosed", this.resetTriggerElementUrl),
                    this.on(document, "uiPageChanged uiOverlayPageChanged", this.resetTriggerElementUrl),
                    this.attr.shouldReplaceSignupWithLogin ? this.on(document, "uiOpenSignupDialog", "uiOpenLoginDialog") : (this.on(document, "uiOpenSignupDialog", this.open),
                    this.on(document, "uiCloseSignupDialog", this.close),
                    this.on("uiDialogOpened", "uiSigninOrSignupDialogOpened"),
                    this.on("uiDialogClosed", "uiSigninOrSignupDialogClosed"))
                })
            }
            var o = i("DBjh")
              , r = i("UHc7")
              , a = i("0d4m");
            e.a = Object(o.default)(r.a, n)
        }
        ).call(e, i("4kSj"))
    },
    IAMj: function(t, e, i) {
        "use strict";
        var n = {}
          , o = {
            set: function(t) {
                n.createdAt = t.createdAt,
                n.id = t.userId,
                n.guestId = t.guestId,
                n.screenName = t.screenName,
                n.fullName = t.fullName,
                n.needsPhoneVerification = t.needsPhoneVerification,
                n.nightModeActivated = t.night_mode_activated,
                n.deciders = t.deciders || {},
                n.experiments = t.experiments || {}
            },
            reset: function() {
                this.set({
                    createdAt: null,
                    guestId: null,
                    userId: null,
                    screenName: null,
                    fullName: null,
                    needsPhoneVerification: null,
                    nightMode: !1,
                    deciders: {},
                    experiments: {},
                    settings: {}
                })
            },
            user: n,
            getDecider: function(t) {
                return !!n.deciders[t]
            },
            getDeciderValue: function(t) {
                return n.deciders[t]
            },
            getExperimentGroup: function(t) {
                return n.experiments[t]
            }
        };
        o.reset(),
        e.a = o
    },
    IHon: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("Yg0w")],
        void 0 !== (o = function(t, e) {
            "use strict";
            function i(i, n, o, r) {
                var a, s = 1, u = 20, c = r ? function() {
                    return r.cur()
                }
                : function() {
                    return t.css(i, n, "")
                }
                , l = c(), d = o && o[3] || (t.cssNumber[n] ? "" : "px"), h = (t.cssNumber[n] || "px" !== d && +l) && e.exec(t.css(i, n));
                if (h && h[3] !== d) {
                    d = d || h[3],
                    o = o || [],
                    h = +l || 1;
                    do {
                        s = s || ".5",
                        h /= s,
                        t.style(i, n, h + d)
                    } while (s !== (s = c() / l) && 1 !== s && --u)
                }
                return o && (h = +h || +l || 0,
                a = o[1] ? h + (o[1] + 1) * o[2] : +o[2],
                r && (r.unit = d,
                r.start = h,
                r.end = a)),
                a
            }
            return i
        }
        .apply(e, n)) && (t.exports = o)
    },
    IJyq: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("DdOc"), i("VGKQ"), i("rYQx")],
        void 0 !== (o = function(t, e, i) {
            "use strict";
            var n = /^(?:input|select|textarea|button)$/i
              , o = /^(?:a|area)$/i;
            t.fn.extend({
                prop: function(i, n) {
                    return e(this, t.prop, i, n, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[t.propFix[e] || e]
                    })
                }
            }),
            t.extend({
                prop: function(e, i, n) {
                    var o, r, a = e.nodeType;
                    if (3 !== a && 8 !== a && 2 !== a)
                        return 1 === a && t.isXMLDoc(e) || (i = t.propFix[i] || i,
                        r = t.propHooks[i]),
                        void 0 !== n ? r && "set"in r && void 0 !== (o = r.set(e, n, i)) ? o : e[i] = n : r && "get"in r && null !== (o = r.get(e, i)) ? o : e[i]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var i = t.find.attr(e, "tabindex");
                            return i ? parseInt(i, 10) : n.test(e.nodeName) || o.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            i.optSelected || (t.propHooks.selected = {
                get: function(t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex,
                    null
                },
                set: function(t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex,
                    e.parentNode && e.parentNode.selectedIndex)
                }
            }),
            t.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                t.propFix[this.toLowerCase()] = this
            })
        }
        .apply(e, n)) && (t.exports = o)
    },
    Ibhu: function(t, e, i) {
        var n = i("D2L2")
          , o = i("TcQ7")
          , r = i("vFc/")(!1)
          , a = i("ax3d")("IE_PROTO");
        t.exports = function(t, e) {
            var i, s = o(t), u = 0, c = [];
            for (i in s)
                i != a && n(s, i) && c.push(i);
            for (; e.length > u; )
                n(s, i = e[u++]) && (~r(c, i) || c.push(i));
            return c
        }
    },
    ImEy: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[1];
            Promise.all([i.e(0), i.e(5)]).then(function(t) {
                var o = {
                    all_notifications: i("MlH8").default,
                    mention_notifications: i("I6SL").default,
                    verified_notifications: i("DUu2").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    Iu5T: function(t, e, i) {
        "use strict";
        function n() {
            this.scribeNav = function(t, e) {
                this.scribe("navigate", e, {
                    url: e.url
                })
            }
            ,
            this.scribeCachedImpression = function(t, e) {
                e.fromCache && this.scribe("impression")
            }
            ,
            this.after("initialize", function() {
                r.a.internalReferer = Object(s.a)(),
                this.on("uiNavigationLinkClick", this.scribeNav),
                this.on("uiPageChanged", this.scribeCachedImpression)
            })
        }
        var o = i("DBjh")
          , r = i("NNES")
          , a = i("3oDc")
          , s = i("Ckrd");
        e.a = Object(o.default)(n, a.a)
    },
    IuVG: function(t, e, i) {
        (function(n) {
            var o, r;
            o = [i("zzFc"), i("Y6Nz"), i("/BKe"), i("kODj"), i("AmlD"), i("6Z94"), i("JmAy")],
            void 0 !== (r = function(t, e, i, o, r, a, s) {
                "use strict";
                function u() {
                    var t = r.findComponentInfo(this);
                    t && Object.keys(t.instances).forEach(function(e) {
                        var i = t.instances[e];
                        i && i.instance && i.instance.teardown()
                    })
                }
                function c(t) {
                    for (var i = arguments.length, o = new Array(i - 1), a = 1; a < i; a++)
                        o[a - 1] = arguments[a];
                    if (!t)
                        throw new Error("Component needs to be attachTo'd a jQuery object, native node or selector string");
                    var s = e.merge.apply(e, o)
                      , u = r.findComponentInfo(this);
                    n(t).each(function(t, e) {
                        u && u.isAttachedTo(e) || (new this).initialize(e, s)
                    }
                    .bind(this))
                }
                function l() {
                    return (this.mixedIn || this.prototype.mixedIn || []).map(function(t) {
                        if (null == t.name) {
                            var e = t.toString().match(h);
                            return e && e[1] ? e[1] : ""
                        }
                        return "withBase" != t.name ? t.name : ""
                    }).filter(Boolean).join(", ")
                }
                function d() {
                    for (var n = arguments.length, h = new Array(n), f = 0; f < n; f++)
                        h[f] = arguments[f];
                    var p = function() {};
                    return p.toString = p.prototype.toString = l,
                    s.enabled && (p.describe = p.prototype.describe = p.toString()),
                    p.attachTo = c,
                    p.mixin = function() {
                        var t = d()
                          , n = Object.create(p.prototype);
                        return n.mixedIn = [].concat(p.prototype.mixedIn),
                        n.defaults = e.merge(p.prototype.defaults),
                        n.attrDef = p.prototype.attrDef,
                        i.mixin(n, arguments),
                        t.prototype = n,
                        t.prototype.constructor = t,
                        t
                    }
                    ,
                    p.teardownAll = u,
                    s.enabled && h.unshift(a),
                    h.unshift(o, t.withAdvice, r.withRegistration),
                    i.mixin(p.prototype, h),
                    p
                }
                var h = /function (.*?)\s?\(/;
                return d.teardownAll = function() {
                    r.components.slice().forEach(function(t) {
                        t.component.teardownAll()
                    }),
                    r.reset()
                }
                ,
                d
            }
            .apply(e, o)) && (t.exports = r)
        }
        ).call(e, i("4kSj"))
    },
    J83E: function(t, e, i) {
        "use strict";
        function n() {
            this.scribeData = function(t, e) {
                this.scribe(e.scribeEvent, e.scribeData)
            }
            ,
            this.after("initialize", function() {
                this.on("scribe", this.scribeData)
            })
        }
        var o = i("DBjh")
          , r = i("3oDc");
        e.a = Object(o.default)(n, r.a)
    },
    JmAy: function(t, e, i) {
        var n, o;
        n = [i("AmlD")],
        void 0 !== (o = function(t) {
            "use strict";
            function e(t, i, n) {
                n = n || {};
                var o = n.obj || window
                  , r = n.path || (o == window ? "window" : "");
                Object.keys(o).forEach(function(n) {
                    (g[t] || t)(i, o, n),
                    "[object Object]" == Object.prototype.toString.call(o[n]) && o[n] != o && -1 == r.split(".").indexOf(n) && e(t, i, {
                        obj: o[n],
                        path: [r, n].join(".")
                    })
                })
            }
            function i(t, i, n, o) {
                i && typeof n != i || e(t, n, o)
            }
            function n(t, e) {
                i("name", "string", t, e)
            }
            function o(t, e) {
                i("nameContains", "string", t, e)
            }
            function r(t, e) {
                i("type", "function", t, e)
            }
            function a(t, e) {
                i("value", null, t, e)
            }
            function s(t, e) {
                i("valueCoerced", null, t, e)
            }
            function u(t, i) {
                e(t, null, i)
            }
            function c() {
                var t = [].slice.call(arguments);
                v.eventNames.length || (v.eventNames = m),
                v.actions = t.length ? t : m,
                f()
            }
            function l() {
                var t = [].slice.call(arguments);
                v.actions.length || (v.actions = m),
                v.eventNames = t.length ? t : m,
                f()
            }
            function d() {
                v.actions = [],
                v.eventNames = [],
                f()
            }
            function h() {
                v.actions = m,
                v.eventNames = m,
                f()
            }
            function f() {
                try {
                    window.localStorage && (localStorage.setItem("logFilter_eventNames", v.eventNames),
                    localStorage.setItem("logFilter_actions", v.actions))
                } catch (t) {}
            }
            function p() {
                var t, e;
                try {
                    t = window.localStorage && localStorage.getItem("logFilter_eventNames"),
                    e = window.localStorage && localStorage.getItem("logFilter_actions")
                } catch (t) {
                    return
                }
                t && (v.eventNames = t),
                e && (v.actions = e),
                Object.keys(v).forEach(function(t) {
                    var e = v[t];
                    "string" == typeof e && e !== m && (v[t] = e ? e.split(",") : [])
                })
            }
            var g = {
                name: function(t, e, i) {
                    return t == i
                },
                nameContains: function(t, e, i) {
                    return i.indexOf(t) > -1
                },
                type: function(t, e, i) {
                    return e[i]instanceof t
                },
                value: function(t, e, i) {
                    return e[i] === t
                },
                valueCoerced: function(t, e, i) {
                    return e[i] == t
                }
            }
              , m = "all"
              , v = {
                eventNames: [],
                actions: []
            };
            return {
                enable: function(t) {
                    this.enabled = !!t,
                    t && window.console,
                    p(),
                    window.DEBUG = this
                },
                registry: t,
                find: {
                    byName: n,
                    byNameContains: o,
                    byType: r,
                    byValue: a,
                    byValueCoerced: s,
                    custom: u
                },
                events: {
                    logFilter: v,
                    logByAction: c,
                    logByName: l,
                    logAll: h,
                    logNone: d
                }
            }
        }
        .apply(e, n)) && (t.exports = o)
    },
    Jozb: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("rY9R"), i("vKSX"), i("9CHI"), i("q1LG"), i("k/l/"), i("5JGd"), i("rYQx")],
        void 0 !== (o = function(t, e, i, n, o, r) {
            "use strict";
            function a() {
                return !0
            }
            function s() {
                return !1
            }
            function u() {
                try {
                    return e.activeElement
                } catch (t) {}
            }
            function c(e, i, n, o, r, a) {
                var u, l;
                if ("object" == typeof i) {
                    "string" != typeof n && (o = o || n,
                    n = void 0);
                    for (l in i)
                        c(e, l, n, o, i[l], a);
                    return e
                }
                if (null == o && null == r ? (r = n,
                o = n = void 0) : null == r && ("string" == typeof n ? (r = o,
                o = void 0) : (r = o,
                o = n,
                n = void 0)),
                !1 === r)
                    r = s;
                else if (!r)
                    return e;
                return 1 === a && (u = r,
                r = function(e) {
                    return t().off(e),
                    u.apply(this, arguments)
                }
                ,
                r.guid = u.guid || (u.guid = t.guid++)),
                e.each(function() {
                    t.event.add(this, i, r, o, n)
                })
            }
            var l = /^key/
              , d = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
              , h = /^([^.]*)(?:\.(.+)|)/;
            return t.event = {
                global: {},
                add: function(e, o, a, s, u) {
                    var c, l, d, f, p, g, m, v, b, y, w, S = r.get(e);
                    if (S)
                        for (a.handler && (c = a,
                        a = c.handler,
                        u = c.selector),
                        u && t.find.matchesSelector(i, u),
                        a.guid || (a.guid = t.guid++),
                        (f = S.events) || (f = S.events = {}),
                        (l = S.handle) || (l = S.handle = function(i) {
                            return void 0 !== t && t.event.triggered !== i.type ? t.event.dispatch.apply(e, arguments) : void 0
                        }
                        ),
                        o = (o || "").match(n) || [""],
                        p = o.length; p--; )
                            d = h.exec(o[p]) || [],
                            b = w = d[1],
                            y = (d[2] || "").split(".").sort(),
                            b && (m = t.event.special[b] || {},
                            b = (u ? m.delegateType : m.bindType) || b,
                            m = t.event.special[b] || {},
                            g = t.extend({
                                type: b,
                                origType: w,
                                data: s,
                                handler: a,
                                guid: a.guid,
                                selector: u,
                                needsContext: u && t.expr.match.needsContext.test(u),
                                namespace: y.join(".")
                            }, c),
                            (v = f[b]) || (v = f[b] = [],
                            v.delegateCount = 0,
                            m.setup && !1 !== m.setup.call(e, s, y, l) || e.addEventListener && e.addEventListener(b, l)),
                            m.add && (m.add.call(e, g),
                            g.handler.guid || (g.handler.guid = a.guid)),
                            u ? v.splice(v.delegateCount++, 0, g) : v.push(g),
                            t.event.global[b] = !0)
                },
                remove: function(e, i, o, a, s) {
                    var u, c, l, d, f, p, g, m, v, b, y, w = r.hasData(e) && r.get(e);
                    if (w && (d = w.events)) {
                        for (i = (i || "").match(n) || [""],
                        f = i.length; f--; )
                            if (l = h.exec(i[f]) || [],
                            v = y = l[1],
                            b = (l[2] || "").split(".").sort(),
                            v) {
                                for (g = t.event.special[v] || {},
                                v = (a ? g.delegateType : g.bindType) || v,
                                m = d[v] || [],
                                l = l[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                c = u = m.length; u--; )
                                    p = m[u],
                                    !s && y !== p.origType || o && o.guid !== p.guid || l && !l.test(p.namespace) || a && a !== p.selector && ("**" !== a || !p.selector) || (m.splice(u, 1),
                                    p.selector && m.delegateCount--,
                                    g.remove && g.remove.call(e, p));
                                c && !m.length && (g.teardown && !1 !== g.teardown.call(e, b, w.handle) || t.removeEvent(e, v, w.handle),
                                delete d[v])
                            } else
                                for (v in d)
                                    t.event.remove(e, v + i[f], o, a, !0);
                        t.isEmptyObject(d) && r.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var i, n, o, a, s, u, c = t.event.fix(e), l = new Array(arguments.length), d = (r.get(this, "events") || {})[c.type] || [], h = t.event.special[c.type] || {};
                    for (l[0] = c,
                    i = 1; i < arguments.length; i++)
                        l[i] = arguments[i];
                    if (c.delegateTarget = this,
                    !h.preDispatch || !1 !== h.preDispatch.call(this, c)) {
                        for (u = t.event.handlers.call(this, c, d),
                        i = 0; (a = u[i++]) && !c.isPropagationStopped(); )
                            for (c.currentTarget = a.elem,
                            n = 0; (s = a.handlers[n++]) && !c.isImmediatePropagationStopped(); )
                                c.rnamespace && !c.rnamespace.test(s.namespace) || (c.handleObj = s,
                                c.data = s.data,
                                void 0 !== (o = ((t.event.special[s.origType] || {}).handle || s.handler).apply(a.elem, l)) && !1 === (c.result = o) && (c.preventDefault(),
                                c.stopPropagation()));
                        return h.postDispatch && h.postDispatch.call(this, c),
                        c.result
                    }
                },
                handlers: function(e, i) {
                    var n, o, r, a, s, u = [], c = i.delegateCount, l = e.target;
                    if (c && l.nodeType && !("click" === e.type && e.button >= 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (a = [],
                                s = {},
                                n = 0; n < c; n++)
                                    o = i[n],
                                    r = o.selector + " ",
                                    void 0 === s[r] && (s[r] = o.needsContext ? t(r, this).index(l) > -1 : t.find(r, this, null, [l]).length),
                                    s[r] && a.push(o);
                                a.length && u.push({
                                    elem: l,
                                    handlers: a
                                })
                            }
                    return l = this,
                    c < i.length && u.push({
                        elem: l,
                        handlers: i.slice(c)
                    }),
                    u
                },
                addProp: function(e, i) {
                    Object.defineProperty(t.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: t.isFunction(i) ? function() {
                            if (this.originalEvent)
                                return i(this.originalEvent)
                        }
                        : function() {
                            if (this.originalEvent)
                                return this.originalEvent[e]
                        }
                        ,
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[t.expando] ? e : new t.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== u() && this.focus)
                                return this.focus(),
                                !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === u() && this.blur)
                                return this.blur(),
                                !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && t.nodeName(this, "input"))
                                return this.click(),
                                !1
                        },
                        _default: function(e) {
                            return t.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                }
            },
            t.removeEvent = function(t, e, i) {
                t.removeEventListener && t.removeEventListener(e, i)
            }
            ,
            t.Event = function(e, i) {
                if (!(this instanceof t.Event))
                    return new t.Event(e,i);
                e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? a : s,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
                i && t.extend(this, i),
                this.timeStamp = e && e.timeStamp || t.now(),
                this[t.expando] = !0
            }
            ,
            t.Event.prototype = {
                constructor: t.Event,
                isDefaultPrevented: s,
                isPropagationStopped: s,
                isImmediatePropagationStopped: s,
                isSimulated: !1,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = a,
                    t && !this.isSimulated && t.preventDefault()
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = a,
                    t && !this.isSimulated && t.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = a,
                    t && !this.isSimulated && t.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            t.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(t) {
                    var e = t.button;
                    return null == t.which && l.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && d.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
                }
            }, t.event.addProp),
            t.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, i) {
                t.event.special[e] = {
                    delegateType: i,
                    bindType: i,
                    handle: function(e) {
                        var n, o = this, r = e.relatedTarget, a = e.handleObj;
                        return r && (r === o || t.contains(o, r)) || (e.type = a.origType,
                        n = a.handler.apply(this, arguments),
                        e.type = i),
                        n
                    }
                }
            }),
            t.fn.extend({
                on: function(t, e, i, n) {
                    return c(this, t, e, i, n)
                },
                one: function(t, e, i, n) {
                    return c(this, t, e, i, n, 1)
                },
                off: function(e, i, n) {
                    var o, r;
                    if (e && e.preventDefault && e.handleObj)
                        return o = e.handleObj,
                        t(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler),
                        this;
                    if ("object" == typeof e) {
                        for (r in e)
                            this.off(r, i, e[r]);
                        return this
                    }
                    return !1 !== i && "function" != typeof i || (n = i,
                    i = void 0),
                    !1 === n && (n = s),
                    this.each(function() {
                        t.event.remove(this, e, n, i)
                    })
                }
            }),
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    JwrG: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("/zzY"), i("ypSt"), i("2ij6"), i("7ofs"), i("ggla")],
        void 0 !== (o = function(t, e, i, n, o, r) {
            "use strict";
            function a(a, u, c, l, d) {
                for (var h, f, p, g, m, v, b = u.createDocumentFragment(), y = [], w = 0, S = a.length; w < S; w++)
                    if ((h = a[w]) || 0 === h)
                        if ("object" === t.type(h))
                            t.merge(y, h.nodeType ? [h] : h);
                        else if (s.test(h)) {
                            for (f = f || b.appendChild(u.createElement("div")),
                            p = (e.exec(h) || ["", ""])[1].toLowerCase(),
                            g = n[p] || n._default,
                            f.innerHTML = g[1] + t.htmlPrefilter(h) + g[2],
                            v = g[0]; v--; )
                                f = f.lastChild;
                            t.merge(y, f.childNodes),
                            f = b.firstChild,
                            f.textContent = ""
                        } else
                            y.push(u.createTextNode(h));
                for (b.textContent = "",
                w = 0; h = y[w++]; )
                    if (l && t.inArray(h, l) > -1)
                        d && d.push(h);
                    else if (m = t.contains(h.ownerDocument, h),
                    f = o(b.appendChild(h), "script"),
                    m && r(f),
                    c)
                        for (v = 0; h = f[v++]; )
                            i.test(h.type || "") && c.push(h);
                return b
            }
            var s = /<|&#?\w+;/;
            return a
        }
        .apply(e, n)) && (t.exports = o)
    },
    Jz3K: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = "streams" === t[0] ? t[1] : t[0];
            Promise.all([i.e(0), i.e(4)]).then(function(t) {
                var o = {
                    frontpage: i("kjiX").default,
                    login: i("eCK1").default,
                    static_lohp: i("zBVw").default,
                    tweet_forward: i("/tGO").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    KHYl: function(t, e, i) {
        "use strict";
        function n() {
            this.ttl = new o.a(this.namespace + "_ttl"),
            this.now = function() {
                return (new Date).getTime()
            }
            ,
            this.isExpired = function(t) {
                var e = this.ttl.getItem(t) || 0;
                return "number" == typeof e && this.now() > e
            }
            ,
            this.updateTTL = function(t, e) {
                "number" == typeof e && this.ttl.setItem(t, this.now() + e)
            }
            ,
            this.getCacheAge = function(t, e) {
                var i = this.ttl.getItem(t);
                if (null == i)
                    return -1;
                var n = i - e
                  , o = this.now() - n;
                return o < 0 ? -1 : Math.floor(o / 36e5)
            }
            ,
            this.around("setItem", function(t, e, i, n) {
                return "number" == typeof n ? this.ttl.setItem(e, this.now() + n) : this.ttl.removeItem(e),
                t(e, i)
            }),
            this.around("getItem", function(t, e) {
                var i = this.ttl.getItem(e);
                return "number" == typeof i && this.now() > i && this.removeItem(e),
                t(e)
            }),
            this.after("removeItem", function(t) {
                this.ttl.removeItem(t)
            }),
            this.after("clear", function() {
                this.ttl.clear()
            })
        }
        var o = i("WODX");
        e.a = n
    },
    KgGA: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("q1LG"), i("7p8o")],
        void 0 !== (o = function(t, e) {
            "use strict";
            function i(t) {
                return t
            }
            function n(t) {
                throw t
            }
            function o(e, i, n) {
                var o;
                try {
                    e && t.isFunction(o = e.promise) ? o.call(e).done(i).fail(n) : e && t.isFunction(o = e.then) ? o.call(e, i, n) : i.call(void 0, e)
                } catch (e) {
                    n.call(void 0, e)
                }
            }
            return t.extend({
                Deferred: function(e) {
                    var o = [["notify", "progress", t.Callbacks("memory"), t.Callbacks("memory"), 2], ["resolve", "done", t.Callbacks("once memory"), t.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", t.Callbacks("once memory"), t.Callbacks("once memory"), 1, "rejected"]]
                      , r = "pending"
                      , a = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments),
                            this
                        },
                        catch: function(t) {
                            return a.then(null, t)
                        },
                        pipe: function() {
                            var e = arguments;
                            return t.Deferred(function(i) {
                                t.each(o, function(n, o) {
                                    var r = t.isFunction(e[o[4]]) && e[o[4]];
                                    s[o[1]](function() {
                                        var e = r && r.apply(this, arguments);
                                        e && t.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this, r ? [e] : arguments)
                                    })
                                }),
                                e = null
                            }).promise()
                        },
                        then: function(e, r, a) {
                            function s(e, o, r, a) {
                                return function() {
                                    var c = this
                                      , l = arguments
                                      , d = function() {
                                        var d, h;
                                        if (!(e < u)) {
                                            if ((d = r.apply(c, l)) === o.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            h = d && ("object" == typeof d || "function" == typeof d) && d.then,
                                            t.isFunction(h) ? a ? h.call(d, s(u, o, i, a), s(u, o, n, a)) : (u++,
                                            h.call(d, s(u, o, i, a), s(u, o, n, a), s(u, o, i, o.notifyWith))) : (r !== i && (c = void 0,
                                            l = [d]),
                                            (a || o.resolveWith)(c, l))
                                        }
                                    }
                                      , h = a ? d : function() {
                                        try {
                                            d()
                                        } catch (i) {
                                            t.Deferred.exceptionHook && t.Deferred.exceptionHook(i, h.stackTrace),
                                            e + 1 >= u && (r !== n && (c = void 0,
                                            l = [i]),
                                            o.rejectWith(c, l))
                                        }
                                    }
                                    ;
                                    e ? h() : (t.Deferred.getStackHook && (h.stackTrace = t.Deferred.getStackHook()),
                                    window.setTimeout(h))
                                }
                            }
                            var u = 0;
                            return t.Deferred(function(u) {
                                o[0][3].add(s(0, u, t.isFunction(a) ? a : i, u.notifyWith)),
                                o[1][3].add(s(0, u, t.isFunction(e) ? e : i)),
                                o[2][3].add(s(0, u, t.isFunction(r) ? r : n))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? t.extend(e, a) : a
                        }
                    }
                      , s = {};
                    return t.each(o, function(t, e) {
                        var i = e[2]
                          , n = e[5];
                        a[e[1]] = i.add,
                        n && i.add(function() {
                            r = n
                        }, o[3 - t][2].disable, o[0][2].lock),
                        i.add(e[3].fire),
                        s[e[0]] = function() {
                            return s[e[0] + "With"](this === s ? void 0 : this, arguments),
                            this
                        }
                        ,
                        s[e[0] + "With"] = i.fireWith
                    }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
                },
                when: function(i) {
                    var n = arguments.length
                      , r = n
                      , a = Array(r)
                      , s = e.call(arguments)
                      , u = t.Deferred()
                      , c = function(t) {
                        return function(i) {
                            a[t] = this,
                            s[t] = arguments.length > 1 ? e.call(arguments) : i,
                            --n || u.resolveWith(a, s)
                        }
                    };
                    if (n <= 1 && (o(i, u.done(c(r)).resolve, u.reject),
                    "pending" === u.state() || t.isFunction(s[r] && s[r].then)))
                        return u.then();
                    for (; r--; )
                        o(s[r], c(r), u.reject);
                    return u.promise()
                }
            }),
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    KgvP: function(t, e, i) {
        "use strict";
        function n(t) {
            return t.reduce(function(t, e) {
                return t.concat(e)
            }, [])
        }
        function o(t) {
            return t.filter(function(e, i) {
                return t.indexOf(e) === i
            })
        }
        function r(t) {
            return t.filter(function(t) {
                return void 0 !== t && null !== t
            })
        }
        function a(t, e, i) {
            return i = i || [],
            t.length ? a(t.slice(e), e, i.concat([t.slice(0, e)])) : i
        }
        function s(t) {
            for (var e = t.length - 1; e > 0; e--) {
                var i = Math.floor(Math.random() * (e + 1))
                  , n = t[e];
                t[e] = t[i],
                t[i] = n
            }
            return t
        }
        e.a = {
            flatten: n,
            unique: o,
            compact: r,
            grouped: a,
            shuffleInPlace: s
        }
    },
    KjWN: function(t, e, i) {
        "use strict";
        function n(t) {
            window.requestAnimationFrame(function() {
                window.requestAnimationFrame(t)
            })
        }
        e.a = n
    },
    "L/VL": function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.load = function(e) {
                    var n = this
                      , o = function(i) {
                        var o = t(e.target);
                        r.a.setEmojiInfo(i),
                        n.trigger(o, "dataEmojiInfoLoaded", i)
                    };
                    i.e(11).then(function(t) {
                        var e = i("R50U").default;
                        o(e)
                    }
                    .bind(null, i)).catch(i.oe)
                }
                ,
                this.after("initialize", function() {
                    this.on(document, "uiEmojiInfoLoad", this.load)
                })
            }
            var o = i("DBjh")
              , r = i("tLYs");
            e.a = Object(o.default)(n)
        }
        ).call(e, i("4kSj"))
    },
    L42u: function(t, e, i) {
        var n, o, r, a = i("+ZMJ"), s = i("knuC"), u = i("RPLV"), c = i("ON07"), l = i("7KvD"), d = l.process, h = l.setImmediate, f = l.clearImmediate, p = l.MessageChannel, g = 0, m = {}, v = function() {
            var t = +this;
            if (m.hasOwnProperty(t)) {
                var e = m[t];
                delete m[t],
                e()
            }
        }, b = function(t) {
            v.call(t.data)
        };
        h && f || (h = function(t) {
            for (var e = [], i = 1; arguments.length > i; )
                e.push(arguments[i++]);
            return m[++g] = function() {
                s("function" == typeof t ? t : Function(t), e)
            }
            ,
            n(g),
            g
        }
        ,
        f = function(t) {
            delete m[t]
        }
        ,
        "process" == i("R9M2")(d) ? n = function(t) {
            d.nextTick(a(v, t, 1))
        }
        : p ? (o = new p,
        r = o.port2,
        o.port1.onmessage = b,
        n = a(r.postMessage, r, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (n = function(t) {
            l.postMessage(t + "", "*")
        }
        ,
        l.addEventListener("message", b, !1)) : n = "onreadystatechange"in c("script") ? function(t) {
            u.appendChild(c("script")).onreadystatechange = function() {
                u.removeChild(this),
                v.call(t)
            }
        }
        : function(t) {
            setTimeout(a(v, t, 1), 0)
        }
        ),
        t.exports = {
            set: h,
            clear: f
        }
    },
    L6po: function(t, e, i) {
        "use strict";
        function n() {
            this.rollbackCount = function() {
                return history.state && history.state.rollbackCount || 0
            }
        }
        e.a = n
    },
    L94v: function(t, e, i) {
        var n, o;
        n = [i("rY9R"), i("ZWgy")],
        void 0 !== (o = function(t, e) {
            "use strict";
            return e.createHTMLDocument = function() {
                var e = t.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>",
                2 === e.childNodes.length
            }(),
            e
        }
        .apply(e, n)) && (t.exports = o)
    },
    LFmL: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    muteConversationSelector: ".mute-conversation-item",
                    unmuteConversationSelector: ".unmute-conversation-item",
                    undoMuteConversationSelector: ".js-undo-mute-conversation",
                    undoUnmuteConversationSelector: ".js-undo-unmute-conversation",
                    coversationMutingClass: "conversation-muting",
                    tweetSelector: ".tweet",
                    itemType: "tweet"
                }),
                this.updateTweetsState = function(t, e) {
                    this.select("tweetSelector").filter("[data-tweet-id=" + e + "]").toggleClass(this.attr.coversationMutingClass, t)
                }
                ,
                this.toggleMute = function(e, i, n) {
                    var o = t(n.target).closest("[data-tweet-id]").attr("data-tweet-id");
                    this.trigger("uiCloseDropdowns"),
                    this.trigger("uiHideMessage");
                    var r = this.interactionData(n, {
                        tweetId: o,
                        scribeContext: i
                    });
                    this.trigger(e ? "uiMuteConversation" : "uiUnmuteConversation", r),
                    this.updateTweetsState(e, o)
                }
                ,
                this.showToggleMuteSuccess = function(t, e, i) {
                    var n = l.a.render({
                        is_muting: t,
                        tweet_id: i.sourceEventData.tweetId
                    });
                    this.trigger("uiShowMessage", {
                        message: n
                    })
                }
                ,
                this.showToggleMuteError = function(t, e, i) {
                    this.trigger("uiShowError", {
                        message: t ? Object(o.default)("Error muting conversation") : Object(o.default)("Error unmuting conversation")
                    }),
                    this.updateTweetsState(!t, i.sourceEventData.tweetId)
                }
                ,
                this.getMuteConvoStore = function() {
                    return this.muteConvoStore || (this.muteConvoStore = new r.a("mute_convo_" + s.a.user.id)),
                    this.muteConvoStore
                }
                ,
                this.toggleMuteOn = function(t) {
                    var e = this.getMuteConvoStore();
                    this.seenDialog || e.getItem("seen_dialog") ? this.toggleMute(!0, h, t) : (this.seenDialog = !0,
                    e.setItem("seen_dialog", "1"),
                    this.trigger(t.target, "uiOpenMuteConversationDialog"))
                }
                ,
                this.after("initialize", function() {
                    this.on("click", {
                        muteConversationSelector: this.toggleMuteOn,
                        unmuteConversationSelector: this.toggleMute.bind(this, !1, h),
                        undoMuteConversationSelector: this.toggleMute.bind(this, !1, f),
                        undoUnmuteConversationSelector: this.toggleMute.bind(this, !0, f)
                    }),
                    this.on("dataDidMuteConversation", this.showToggleMuteSuccess.bind(this, !0)),
                    this.on("dataDidUnmuteConversation", this.showToggleMuteSuccess.bind(this, !1)),
                    this.on("dataFailedToMuteConversation", this.showToggleMuteError.bind(this, !0)),
                    this.on("dataFailedToUnmuteConversation", this.showToggleMuteError.bind(this, !1))
                })
            }
            var o = i("0d4m")
              , r = i("WODX")
              , a = i("DBjh")
              , s = i("IAMj")
              , u = i("alSu")
              , c = i("ENMl")
              , l = i.n(c)
              , d = Object(a.default)(n, u.a)
              , h = {
                component: "tweet",
                element: "tweet_actions_dropdown"
            }
              , f = {
                component: "message_drawer",
                element: "undolink"
            };
            e.a = d
        }
        ).call(e, i("4kSj"))
    },
    LTWT: function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return /^margin/
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    LXg4: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("2+NM")],
        void 0 !== (o = function(t) {
            "use strict";
            function e(t, i, n, o, r) {
                return new e.prototype.init(t,i,n,o,r)
            }
            t.Tween = e,
            e.prototype = {
                constructor: e,
                init: function(e, i, n, o, r, a) {
                    this.elem = e,
                    this.prop = n,
                    this.easing = r || t.easing._default,
                    this.options = i,
                    this.start = this.now = this.cur(),
                    this.end = o,
                    this.unit = a || (t.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var t = e.propHooks[this.prop];
                    return t && t.get ? t.get(this) : e.propHooks._default.get(this)
                },
                run: function(i) {
                    var n, o = e.propHooks[this.prop];
                    return this.options.duration ? this.pos = n = t.easing[this.easing](i, this.options.duration * i, 0, 1, this.options.duration) : this.pos = n = i,
                    this.now = (this.end - this.start) * n + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    o && o.set ? o.set(this) : e.propHooks._default.set(this),
                    this
                }
            },
            e.prototype.init.prototype = e.prototype,
            e.propHooks = {
                _default: {
                    get: function(e) {
                        var i;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (i = t.css(e.elem, e.prop, ""),
                        i && "auto" !== i ? i : 0)
                    },
                    set: function(e) {
                        t.fx.step[e.prop] ? t.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[t.cssProps[e.prop]] && !t.cssHooks[e.prop] ? e.elem[e.prop] = e.now : t.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            },
            e.propHooks.scrollTop = e.propHooks.scrollLeft = {
                set: function(t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            },
            t.easing = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                _default: "swing"
            },
            t.fx = e.prototype.init,
            t.fx.step = {}
        }
        .apply(e, n)) && (t.exports = o)
    },
    "Lv/Q": function(t, e, i) {
        "use strict";
        function n(t, e) {
            var i = {};
            for (var n in t)
                e.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
            return i
        }
        function o(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        var r = i("x8Ow")
          , a = i("EvOp")
          , s = i.n(a)
          , u = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
          , c = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , l = function() {
            function t(e) {
                o(this, t),
                this.client = new s.a(u({}, e))
            }
            return c(t, [{
                key: "_createSuccessOrErrorFilter",
                value: function(t, e) {
                    return function(i) {
                        var n = i.data
                          , o = i.status
                          , r = i.statusText
                          , a = function(t) {
                            return i.headers ? i.headers[t] : ""
                        }
                          , s = i.body;
                        return o >= 200 && o < 300 || 304 === o ? "function" == typeof t && t({
                            data: n,
                            responseHeaderGetter: a,
                            responseText: s,
                            statusCode: o,
                            statusText: r
                        }) : "function" == typeof e && e({
                            responseHeaderGetter: a,
                            responseText: s,
                            statusCode: o,
                            statusText: r
                        }),
                        i
                    }
                }
            }, {
                key: "_createOfflineFilter",
                value: function(t) {
                    return function(e) {
                        var i = e.status
                          , n = e.statusText
                          , o = function(t) {
                            return e.headers ? e.headers[t] : ""
                        }
                          , r = e.body;
                        return 0 === e.status && "function" == typeof t && t({
                            responseHeaderGetter: o,
                            responseText: r,
                            statusCode: i,
                            statusText: n
                        }),
                        Promise.reject(e)
                    }
                }
            }, {
                key: "dispatch",
                value: function(t) {
                    var e = t.host
                      , i = t.method
                      , o = t.url
                      , a = t.data
                      , s = t.headers
                      , u = t.successHandler
                      , c = t.errorHandler
                      , l = n(t, ["host", "method", "url", "data", "headers", "successHandler", "errorHandler"])
                      , d = this._createSuccessOrErrorFilter(u, c)
                      , h = this._createOfflineFilter(c)
                      , f = Object(r.a)(o);
                    return this.client.dispatch({
                        host: e,
                        path: f,
                        method: i,
                        data: a,
                        headers: s,
                        _options: l
                    }).then(d).catch(h)
                }
            }, {
                key: "post",
                value: function(t) {
                    return this.dispatch(u({
                        method: "POST"
                    }, t))
                }
            }]),
            t
        }();
        e.a = l
    },
    M6a0: function(t, e) {},
    MB5k: function(t, e, i) {
        "use strict";
        var n = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
          , o = {
            tweet_mode: "extended"
        };
        e.a = function(t) {
            return {
                like: function(e) {
                    return t.post(n({}, o, e, {
                        url: "/1.1/favorites/create.json"
                    }))
                }
            }
        }
    },
    MDEo: function(t, e, i) {
        var n, o;
        n = [i("Olpr")],
        void 0 !== (o = function(t) {
            "use strict";
            t.fn.extend({
                bind: function(t, e, i) {
                    return this.on(t, null, e, i)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                delegate: function(t, e, i, n) {
                    return this.on(e, t, i, n)
                },
                undelegate: function(t, e, i) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
                }
            }),
            t.parseJSON = JSON.parse
        }
        .apply(e, n)) && (t.exports = o)
    },
    MFJV: function(t, e, i) {
        (function(e) {
            t.exports = new e.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.s(n.f("isVS16", t, e, 1), t, e, 1, 0, 0, "") || (n.b('<span class="RichEditor-pictographText" title="'),
                    n.b(n.v(n.f("description", t, e, 0))),
                    n.b('" aria-label="'),
                    n.b(n.v(n.f("aria", t, e, 0))),
                    n.b('" data-pictograph-text="'),
                    n.b(n.v(n.f("text", t, e, 0))),
                    n.b('" data-pictograph-image="'),
                    n.b(n.v(n.f("imageUrl", t, e, 0))),
                    n.b('">&#x2003;</span>')),
                    n.s(n.f("isVS16", t, e, 1), t, e, 0, 209, 393, "{{ }}") && (n.rs(t, e, function(t, e, i) {
                        i.b('<span class="RichEditor-pictographText" title="Variation Selector-16" aria-label="Emoji: Variation Selector-16" data-pictograph-text="'),
                        i.b(i.v(i.f("text", t, e, 0))),
                        i.b('" data-pictograph-image="">&#x2003;</span>')
                    }),
                    t.pop()),
                    n.fl()
                },
                partials: {},
                subs: {}
            })
        }
        ).call(e, i("jTWp"))
    },
    MU5D: function(t, e, i) {
        var n = i("R9M2");
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == n(t) ? t.split("") : Object(t)
        }
    },
    Mhyx: function(t, e, i) {
        var n = i("/bQp")
          , o = i("dSzd")("iterator")
          , r = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (n.Array === t || r[o] === t)
        }
    },
    MmMw: function(t, e, i) {
        var n = i("EqjI");
        t.exports = function(t, e) {
            if (!n(t))
                return t;
            var i, o;
            if (e && "function" == typeof (i = t.toString) && !n(o = i.call(t)))
                return o;
            if ("function" == typeof (i = t.valueOf) && !n(o = i.call(t)))
                return o;
            if (!e && "function" == typeof (i = t.toString) && !n(o = i.call(t)))
                return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    Mwqt: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.beforeNewPageLoad = function(t, e) {
                    this.log("beforeNewPageLoad", t, e),
                    a = {
                        beforeNewPageLoad: +new Date,
                        source: {
                            page: this.attr.pageName,
                            action: this.attr.sectionName,
                            path: window.location.pathname
                        }
                    }
                }
                ,
                this.afterPageChanged = function(e, i) {
                    var n = this;
                    this.log("afterPageChanged", e, i),
                    a.afterPageChanged = +new Date,
                    this.fromCache = !!i.fromCache,
                    this.hookTimelineListener(!0),
                    this.timelineListener = setTimeout(function() {
                        n.hookTimelineListener(!1),
                        n.report()
                    }, 1),
                    a.ajaxCount = this.ajaxCountdown = t.active,
                    t.active && this.hookAjaxListener(!0)
                }
                ,
                this.timelineRefreshRequest = function(t, e) {
                    clearTimeout(this.timelineListener),
                    this.hookTimelineListener(!1),
                    e.navigated && (this.listeningForTimeline = !0,
                    this.hookTimelineResults(!0))
                }
                ,
                this.timelineSuccess = function(t, e) {
                    this.log("timelineSuccess", t, e),
                    this.listeningForTimeline = !1,
                    this.hookTimelineResults(!1),
                    a.timelineSuccess = +new Date,
                    this.report()
                }
                ,
                this.timelineError = function(t, e) {
                    this.log("timelineError", t, e),
                    this.listeningForTimeline = !1,
                    this.hookTimelineResults(!1),
                    this.report()
                }
                ,
                this.ajaxComplete = function(t, e) {
                    --this.ajaxCountdown || (this.log("ajaxComplete", t, e),
                    this.hookAjaxListener(!1),
                    a.ajaxComplete = +new Date,
                    this.report())
                }
                ,
                this.report = function() {
                    if ((!this.ajaxCountdown || !a.ajaxCount) && (!this.listeningForTimeline || a.timelineSuccess)) {
                        var t = {
                            event_name: "route_time",
                            source_page: a.source.page,
                            source_action: a.source.action,
                            source_path: a.source.path,
                            dest_page: this.attr.pageName,
                            dest_action: this.attr.sectionName,
                            dest_path: window.location.pathname,
                            cached: this.fromCache,
                            start_time: a.beforeNewPageLoad,
                            stream_switch_time: a.afterPageChanged,
                            stream_complete_time: a.timelineSuccess || a.afterPageChanged,
                            ajax_count: a.ajaxCount
                        };
                        a.ajaxCount && (t.ajax_complete_time = a.ajaxComplete),
                        this.scribeTransport.send(t, "route_timing"),
                        this.log(t)
                    }
                }
                ,
                this.log = function() {}
                ,
                this.time = function() {
                    return a
                }
                ,
                this.scribeTransport = r.a,
                this.hookAjaxListener = function(t) {
                    this[t ? "on" : "off"]("ajaxComplete", this.ajaxComplete)
                }
                ,
                this.hookTimelineListener = function(t) {
                    this[t ? "on" : "off"]("uiTimelineShouldRefresh", this.timelineRefreshRequest)
                }
                ,
                this.hookTimelineResults = function(t) {
                    this[t ? "on" : "off"]("dataGotMoreTimelineItems", this.timelineSuccess),
                    this[t ? "on" : "off"]("dataGotMoreTimelineItemsError", this.timelineError)
                }
                ,
                this.after("initialize", function() {
                    this.on("uiBeforeNewPageLoad", this.beforeNewPageLoad),
                    this.on("uiPageChanged", this.afterPageChanged)
                })
            }
            var o = i("DBjh")
              , r = i("RMWW")
              , a = {};
            e.a = Object(o.default)(n)
        }
        ).call(e, i("4kSj"))
    },
    "N+f0": function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[1];
            i.e(2).then(function(t) {
                var o = {
                    download: i("pX2M").default,
                    signup: i("8Ies").default,
                    signup_digits: i("v2/C").default,
                    signup_windows_oauth: i("uvq2").default,
                    verify: i("q1GU").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    NMjb: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[0];
            i.e(1).then(function(t) {
                var o = {
                    oauth_landing: i("H3QY").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    NNES: function(t, e, i) {
        "use strict";
        function n(t) {
            this.scribeContext = {},
            this.scribeData = {},
            this.scribe = function(e, i, n) {
                var o = t || window.scribeTransport;
                if (!o)
                    throw new Error("You must create a global scribeTransport variable or pass one into this constructor.");
                if (!e || "object" !== (void 0 === e ? "undefined" : a(e)) || i && "object" !== (void 0 === i ? "undefined" : a(i)))
                    throw new Error("Invalid terms or data hash argument when calling ClientEvent.scribe().");
                if (this.scribeContext) {
                    var s = "function" == typeof this.scribeContext ? this.scribeContext() : this.scribeContext;
                    e = r({}, s, e)
                }
                for (var u in e)
                    e[u] = e[u] && ("" + e[u]).toLowerCase().replace(/_?[^a-z0-9_]+_?/g, "_");
                if (o.options.debug) {
                    if (!e.client)
                        throw new Error("You must specify a client term in your client_event.");
                    if (!e.action)
                        throw new Error("You must specify an action term in your client_event.")
                }
                if (i = r({}, i),
                this.scribeData) {
                    var c = "function" == typeof this.scribeData ? this.scribeData() : this.scribeData;
                    i = r({}, c, i)
                }
                i.event_namespace = e,
                i.triggered_on = i.triggered_on || +new Date,
                i.format_version = i.format_version || 2,
                o.send(i, n || "client_event")
            }
        }
        var o = i("RMWW")
          , r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
          , a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        e.a = new n(o.a)
    },
    NW2Z: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[1];
            Promise.all([i.e(0), i.e(2)]).then(function(t) {
                var o = {
                    accessibility: i("vBSd").default,
                    account: i("+lS0").default,
                    applications: i("Iygm").default,
                    blocked: i("ddK9").default,
                    confirm_deactivation: i("I6pu").default,
                    contacts_dashboard: i("cnl0").default,
                    device_registration: i("F27J").default,
                    facebook: i("+y5u").default,
                    muted: i("bsIa").default,
                    muted_keywords: i("u8BE").default,
                    notifications: i("bkEY").default,
                    notifications_timeline: i("1Lw4").default,
                    password: i("BCPl").default,
                    password_gateway: i("g/JM").default,
                    personalization: i("VR0m").default,
                    safety: i("IieR").default,
                    sms: i("T9Rb").default,
                    tweet_export_download: i("7zzh").default,
                    user_data_dashboard: i("HNdY").default,
                    user_data_dashboard_apps: i("mpXb").default,
                    user_data_dashboard_logins: i("b/pT").default,
                    user_data_dashboard_twitter_interests: i("69Hw").default,
                    user_data_dashboard_partner_interests: i("lhQm").default,
                    web_notifications: i("qII5").default,
                    widgets: i("FrY0").default,
                    widgets_configurator: i("kX3f").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    "NWt+": function(t, e, i) {
        var n = i("+ZMJ")
          , o = i("msXi")
          , r = i("Mhyx")
          , a = i("77Pl")
          , s = i("QRG4")
          , u = i("3fs2")
          , c = {}
          , l = {}
          , e = t.exports = function(t, e, i, d, h) {
            var f, p, g, m, v = h ? function() {
                return t
            }
            : u(t), b = n(i, d, e ? 2 : 1), y = 0;
            if ("function" != typeof v)
                throw TypeError(t + " is not iterable!");
            if (r(v)) {
                for (f = s(t.length); f > y; y++)
                    if ((m = e ? b(a(p = t[y])[0], p[1]) : b(t[y])) === c || m === l)
                        return m
            } else
                for (g = v.call(t); !(p = g.next()).done; )
                    if ((m = o(g, b, p.value, e)) === c || m === l)
                        return m
        }
        ;
        e.BREAK = c,
        e.RETURN = l
    },
    NcKo: function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            function t() {
                this.defaultAttrs({
                    teardownOn: ""
                }),
                this.after("initialize", function() {
                    if (this.attr.teardownOn) {
                        if (this.attr.teardownOn === this.childTeardownEvent)
                            throw new Error("Component initialized to listen for its own teardown event.");
                        this.on(document, this.attr.teardownOn, function() {
                            this.teardown()
                        })
                    }
                })
            }
            function e() {
                this.before("initialize", function() {
                    this.childTeardownEvent = this.childTeardownEvent || e.nextTeardownEvent()
                }),
                this.before("teardown", function() {
                    this.trigger(this.childTeardownEvent)
                }),
                this.attachChild = function(e, i, n) {
                    n = n || {},
                    n.teardownOn || (n.teardownOn = this.childTeardownEvent),
                    ((e.prototype.mixedIn || []).indexOf(t) > -1 ? e : e.mixin(t)).attachTo(i, n)
                }
            }
            var i = 0;
            return e.nextTeardownEvent = function() {
                return "_teardownEvent" + (i += 1)
            }
            ,
            e.withBoundLifecycle = t,
            e
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    Nfe4: function(t, e, i) {
        var n, o, n, o;
        n = [i("Olpr")],
        void 0 !== (o = function(i) {
            "use strict";
            n = [],
            void 0 !== (o = function() {
                return i
            }
            .apply(e, n)) && (t.exports = o)
        }
        .apply(e, n)) && (t.exports = o)
    },
    NuvH: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    nightModeCookie: "night_mode",
                    nightmodeIconSelector: ".js-nightmode-icon",
                    emptyNightmodeClass: "Icon--crescent",
                    filledNightmodeClass: "Icon--crescentFilled",
                    nightModeActivated: !1,
                    testMode: !1
                }),
                this.modifyStylesheetHrefs = function(t) {
                    return this.attr.nightModeActivated ? t.replace("nightmode_", "") : t.replace("twitter_", "nightmode_twitter_")
                }
                ,
                this.toggleNightMode = function(e, i) {
                    if (!this.toggling) {
                        this.toggling = !0;
                        var n = t(".coreCSSBundles")
                          , o = t(".moreCSSBundles")
                          , r = this.modifyStylesheetHrefs(n.attr("href"))
                          , a = this.modifyStylesheetHrefs(o[0].href)
                          , s = this.modifyStylesheetHrefs(o[1].href);
                        this.attr.nightModeActivated = !this.attr.nightModeActivated,
                        this.trigger("uiShowGlobalLoadingIndicator"),
                        this.select("nightmodeIconSelector").toggleClass(this.attr.emptyNightmodeClass, !this.attr.nightModeActivated).toggleClass(this.attr.filledNightmodeClass, this.attr.nightModeActivated),
                        c.a.user.nightModeActivated = this.attr.nightModeActivated,
                        this.updateNightModeCookie(this.attr.nightModeActivated, this.attr.testMode),
                        this.changeTheme(r, a, s)
                    }
                }
                ,
                this.changeTheme = function(e, i, n) {
                    var o = this
                      , r = t("<style>* { transition: none !important; }</style>");
                    r.appendTo("head");
                    var a = t(".coreCSSBundles")
                      , s = t(".moreCSSBundles")
                      , c = u.a.load(e, a[0]);
                    c.className = "coreCSSBundles";
                    var l = u.a.load(i, a[0]);
                    l.className = "moreCSSBundles";
                    var d = u.a.load(n, a[0]);
                    d.className = "moreCSSBundles";
                    var h = function() {
                        0 === --f && o.complete(r, a, s)
                    }
                      , f = 3;
                    u.a.onload(c, h),
                    u.a.onload(l, h),
                    u.a.onload(d, h)
                }
                ,
                this.complete = function(t, e, i) {
                    t.remove(),
                    this.trigger("uiNightModeChanged", {
                        nightModeActivated: this.attr.nightModeActivated
                    }),
                    this.trigger("uiOverrideUserCss"),
                    this.trigger("uiReloadAllCards"),
                    e.remove(),
                    i.remove(),
                    this.trigger("uiHideGlobalLoadingIndicator"),
                    this.toggling = !1
                }
                ,
                this.updateNightModeCookie = function(t, e) {
                    var i = t ? 1 : null
                      , n = e ? null : ".twitter.com";
                    Object(r.a)(this.attr.nightModeCookie, i, {
                        expires: 1 / 0,
                        path: "/",
                        domain: n
                    })
                }
                ,
                this.cookieIsOn = function() {
                    return "1" === Object(r.a)(this.attr.nightModeCookie)
                }
                ,
                this.checkNightModeCookie = function() {
                    var t = this.cookieIsOn();
                    this.toggling || t === this.attr.nightModeActivated || this.toggleNightMode()
                }
                ,
                this.after("initialize", function() {
                    this.on("uiNightModeToggle", this.toggleNightMode),
                    o.default.setIntervalEvent("uiCheckNightMode", 200),
                    this.on(document, "uiCheckNightMode", this.checkNightModeCookie)
                })
            }
            var o = i("r8Bt")
              , r = i("dsp6")
              , a = i("DBjh")
              , s = i("rBC2")
              , u = i.n(s)
              , c = i("IAMj")
              , l = Object(a.default)(n);
            e.a = l
        }
        ).call(e, i("4kSj"))
    },
    O4g8: function(t, e) {
        t.exports = !0
    },
    ON07: function(t, e, i) {
        var n = i("EqjI")
          , o = i("7KvD").document
          , r = n(o) && n(o.createElement);
        t.exports = function(t) {
            return r ? o.createElement(t) : {}
        }
    },
    OPah: function(t, e, i) {
        "use strict";
        function n(t) {
            var e = !!Object(g.a)("force_enable_scribe_buffer")
              , i = "selenium" === t.environment || e
              , n = {
                useAjax: !0,
                bufferEvents: "development" !== t.environment && "staging" !== t.environment && !t.preflight || e,
                flushOnUnload: !i,
                bufferSize: i ? 1e3 * t.scribeBufferSize : t.scribeBufferSize,
                debug: !!t.debugAllowed,
                requestParameters: t.scribeParameters
            };
            o.a.updateOptions(n),
            o.a.registerEventHandlers(),
            a.a.scribeContext = {
                client: "web",
                page: t.pageName,
                section: t.sectionName
            },
            a.a.scribeData = {
                internal_referer: a.a.internalReferer || t.internalReferer,
                client_version: "macaw-swift"
            },
            delete a.a.internalReferer,
            t.loggedIn || (a.a.scribeData.user_id = 0),
            ("production" !== t.environment || t.preflight || t.scribesForScribeConsole) && r.a.attachTo(document, {
                scribesForScribeConsole: t.scribesForScribeConsole
            }),
            s.a.attachTo(document, t),
            u.a.attachTo(document, t),
            c.a.attachTo(document, t),
            l.a.attachTo(document, t),
            d.a.attachTo(document, t),
            h.a.attachTo(document, t),
            f.a.attachTo(document),
            p.a.attachTo(document)
        }
        var o = i("RMWW")
          , r = i("RZrQ")
          , a = i("NNES")
          , s = i("Pnpf")
          , u = i("8elM")
          , c = i("Zz8R")
          , l = i("C8jw")
          , d = i("/tFf")
          , h = i("Iu5T")
          , f = i("bxuR")
          , p = i("+/oQ")
          , g = i("dsp6");
        e.a = n
    },
    Olpr: function(t, e, i) {
        (function(n) {
            var o, r;
            o = [i("AHT0"), i("rY9R"), i("0oQ4"), i("q1LG"), i("ewb2"), i("GUxi"), i("guk2"), i("2gn9"), i("9G4n"), i("go26"), i("oZoq"), i("8dLB"), i("ZWgy"), i("f9Rl")],
            void 0 !== (r = function(t, e, i, n, o, r, a, s, u, c, l, d, h, f) {
                "use strict";
                function p(t) {
                    var e = !!t && "length"in t && t.length
                      , i = g.type(t);
                    return "function" !== i && !g.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                }
                var g = function(t, e) {
                    return new g.fn.init(t,e)
                }
                  , m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
                  , v = /^-ms-/
                  , b = /-([a-z])/g
                  , y = function(t, e) {
                    return e.toUpperCase()
                };
                return g.fn = g.prototype = {
                    jquery: "3.1.1",
                    constructor: g,
                    length: 0,
                    toArray: function() {
                        return n.call(this)
                    },
                    get: function(t) {
                        return null == t ? n.call(this) : t < 0 ? this[t + this.length] : this[t]
                    },
                    pushStack: function(t) {
                        var e = g.merge(this.constructor(), t);
                        return e.prevObject = this,
                        e
                    },
                    each: function(t) {
                        return g.each(this, t)
                    },
                    map: function(t) {
                        return this.pushStack(g.map(this, function(e, i) {
                            return t.call(e, i, e)
                        }))
                    },
                    slice: function() {
                        return this.pushStack(n.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    eq: function(t) {
                        var e = this.length
                          , i = +t + (t < 0 ? e : 0);
                        return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: r,
                    sort: t.sort,
                    splice: t.splice
                },
                g.extend = g.fn.extend = function() {
                    var t, e, i, n, o, r, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
                    for ("boolean" == typeof a && (c = a,
                    a = arguments[s] || {},
                    s++),
                    "object" == typeof a || g.isFunction(a) || (a = {}),
                    s === u && (a = this,
                    s--); s < u; s++)
                        if (null != (t = arguments[s]))
                            for (e in t)
                                i = a[e],
                                n = t[e],
                                a !== n && (c && n && (g.isPlainObject(n) || (o = g.isArray(n))) ? (o ? (o = !1,
                                r = i && g.isArray(i) ? i : []) : r = i && g.isPlainObject(i) ? i : {},
                                a[e] = g.extend(c, r, n)) : void 0 !== n && (a[e] = n));
                    return a
                }
                ,
                g.extend({
                    expando: "jQuery" + ("3.1.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(t) {
                        throw new Error(t)
                    },
                    noop: function() {},
                    isFunction: function(t) {
                        return "function" === g.type(t)
                    },
                    isArray: Array.isArray,
                    isWindow: function(t) {
                        return null != t && t === t.window
                    },
                    isNumeric: function(t) {
                        var e = g.type(t);
                        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
                    },
                    isPlainObject: function(t) {
                        var e, n;
                        return !(!t || "[object Object]" !== u.call(t)) && (!(e = i(t)) || "function" == typeof (n = c.call(e, "constructor") && e.constructor) && l.call(n) === d)
                    },
                    isEmptyObject: function(t) {
                        var e;
                        for (e in t)
                            return !1;
                        return !0
                    },
                    type: function(t) {
                        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? s[u.call(t)] || "object" : typeof t
                    },
                    globalEval: function(t) {
                        f(t)
                    },
                    camelCase: function(t) {
                        return t.replace(v, "ms-").replace(b, y)
                    },
                    nodeName: function(t, e) {
                        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                    },
                    each: function(t, e) {
                        var i, n = 0;
                        if (p(t))
                            for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++)
                                ;
                        else
                            for (n in t)
                                if (!1 === e.call(t[n], n, t[n]))
                                    break;
                        return t
                    },
                    trim: function(t) {
                        return null == t ? "" : (t + "").replace(m, "")
                    },
                    makeArray: function(t, e) {
                        var i = e || [];
                        return null != t && (p(Object(t)) ? g.merge(i, "string" == typeof t ? [t] : t) : r.call(i, t)),
                        i
                    },
                    inArray: function(t, e, i) {
                        return null == e ? -1 : a.call(e, t, i)
                    },
                    merge: function(t, e) {
                        for (var i = +e.length, n = 0, o = t.length; n < i; n++)
                            t[o++] = e[n];
                        return t.length = o,
                        t
                    },
                    grep: function(t, e, i) {
                        for (var n = [], o = 0, r = t.length, a = !i; o < r; o++)
                            !e(t[o], o) !== a && n.push(t[o]);
                        return n
                    },
                    map: function(t, e, i) {
                        var n, r, a = 0, s = [];
                        if (p(t))
                            for (n = t.length; a < n; a++)
                                null != (r = e(t[a], a, i)) && s.push(r);
                        else
                            for (a in t)
                                null != (r = e(t[a], a, i)) && s.push(r);
                        return o.apply([], s)
                    },
                    guid: 1,
                    proxy: function(t, e) {
                        var i, o, r;
                        if ("string" == typeof e && (i = t[e],
                        e = t,
                        t = i),
                        g.isFunction(t))
                            return o = n.call(arguments, 2),
                            r = function() {
                                return t.apply(e || this, o.concat(n.call(arguments)))
                            }
                            ,
                            r.guid = t.guid = t.guid || g.guid++,
                            r
                    },
                    now: Date.now,
                    support: h
                }),
                "function" == typeof Symbol && (g.fn[Symbol.iterator] = t[Symbol.iterator]),
                g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
                    s["[object " + e + "]"] = e.toLowerCase()
                }),
                g
            }
            .apply(e, o)) && (t.exports = r)
        }
        ).call(e, i("4kSj"))
    },
    OmTo: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[1];
            Promise.all([i.e(0), i.e(2)]).then(function(t) {
                var o = {
                    user_data_dashboard_twitter_interests: i("AaAZ").default,
                    user_data_dashboard_partner_interests: i("qX1W").default,
                    user_data_dashboard_logged_out: i("cTeS").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    Opvs: function(t, e, i) {
        "use strict";
        function n(t) {
            return Object.keys(t).reduce(function(e, i) {
                var n = t[i];
                return e[i] = n.template || n,
                n.partials && "object" === o(n.partials) && Object.keys(n.partials).forEach(function(t) {
                    return e[t] = n.partials[t]
                }),
                e
            }, {})
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = n;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
    },
    "PIW/": function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                sectionName: "permalink_overlay"
            }),
            this.namespace = function(t, e) {
                return {
                    section: this.attr.sectionName,
                    element: t,
                    action: e
                }
            }
            ,
            this.after("initialize", function() {
                this.scribeOnEvent("uiOverlayUpdate", this.namespace(void 0, "show")),
                this.scribeOnEvent("uiOverlayClosed", this.namespace(void 0, "hide")),
                this.scribeOnEvent("uiOverlayCloseButtonClicked", this.namespace("close_button", "click")),
                this.scribeOnEvent("uiOverlayNavigateBack", this.namespace("back_button", "click")),
                this.scribeOnEvent("dataNeedsShowBackButton", this.namespace("back_button", "impression"))
            })
        }
        var o = i("DBjh")
          , r = i("3oDc");
        e.a = Object(o.default)(n, r.a)
    },
    PTD5: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[1];
            Promise.all([i.e(0), i.e(3)]).then(function(t) {
                var o = {
                    alerts: i("l6C+").default,
                    collections: i("HJfX").default,
                    featured: i("CfM2").default,
                    highline_landing: i("mHAC").default,
                    highline_tweets: i("PE4H").default,
                    highline_favorites: i("muxT").default,
                    highline_follower_requests: i("a5zk").default,
                    highline_followers: i("qZAZ").default,
                    highline_following: i("R6DS").default,
                    highline_media: i("z7B1").default,
                    highline_lists: i("Tviy").default,
                    highline_custom_timelines: i("EOwp").default,
                    profile_user_moments: i("EnIf").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    PYQz: function(t, e, i) {
        "use strict";
        var n = void 0;
        e.a = {
            get: function() {
                if (!n)
                    throw new Error("authToken should have been set!");
                return n
            },
            set: function(t) {
                n = t
            },
            addTo: function(t) {
                return t.authenticity_token = n,
                t
            }
        }
    },
    Pnpf: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    tweetActionsSelector: ".ProfileTweet-action--more",
                    tweetActionToScribeActionsMap: {
                        uiReplyButtonTweetSuccess: "reply",
                        uiDidRetweetSuccess: {
                            action: "retweet",
                            selfAction: "self_retweet"
                        },
                        uiDidRetweetWithCommentSuccess: {
                            action: "retweet_with_comment",
                            selfAction: "self_retweet_with_comment"
                        },
                        uiDidDeleteTweet: "delete",
                        uiDismissTweet: "dismiss",
                        dataDidFavoriteTweet: "favorite",
                        dataDidUnfavoriteTweet: "unfavorite",
                        dataDidUnretweet: {
                            action: "unretweet",
                            selfAction: "self_unretweet"
                        },
                        uiPermalinkClick: "permalink",
                        dataTweetTranslationSuccess: "translate",
                        dataDidUserPinTweet: "pin",
                        dataDidUserUnpinTweet: "unpin",
                        uiMuteConversation: "mute_conversation",
                        uiUnmuteConversation: "unmute_conversation"
                    }
                }),
                this.scribeAction = function(t, e) {
                    var i = this.addConversationScribeContext({
                        action: t
                    }, e);
                    this.scribeInteraction(i, e)
                }
                ,
                this.handleAction = function(t, e) {
                    var i = this.attr.tweetActionToScribeActionsMap[t.type]
                      , n = i.selfAction
                      , o = i.action || i
                      , a = c({}, e, e.sourceEventData);
                    this.scribeAction(o, a),
                    n && r.a.user.id === a.userId && this.scribeAction(n, a)
                }
                ,
                this.scribeDropdown = function(e, i) {
                    t(e.target).closest(this.attr.tweetActionsSelector).length > 0 && this.scribe({
                        component: "tweet",
                        element: "tweet_actions_dropdown",
                        action: "open"
                    }, i)
                }
                ,
                this.scribeShowThreadClick = function(t, e) {
                    this.scribe({
                        component: "tweet",
                        element: "self_thread",
                        action: "click"
                    })
                }
                ,
                this.scribeLoggedOutAction = function(t, e) {
                    e && e.action && this.scribeInteraction({
                        element: "tweet",
                        action: e.action
                    }, c({}, e, e.sourceEventData))
                }
                ,
                this.after("initialize", function() {
                    this.on(Object.keys(this.attr.tweetActionToScribeActionsMap).join(" "), this.handleAction),
                    this.on("uiShowThreadCTAClicked", this.scribeShowThreadClick),
                    this.on("uiDropdownOpened", this.scribeDropdown),
                    this.on("uiLoggedOutActionAttempt", this.scribeLoggedOutAction)
                })
            }
            var o = i("DBjh")
              , r = i("IAMj")
              , a = i("tPBl")
              , s = i("alSu")
              , u = i("gcfh")
              , c = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            }
            ;
            e.a = Object(o.default)(n, s.a, a.a, u.a)
        }
        ).call(e, i("4kSj"))
    },
    PySz: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("rYQx")],
        void 0 !== (o = function(t) {
            "use strict";
            t.expr.pseudos.hidden = function(e) {
                return !t.expr.pseudos.visible(e)
            }
            ,
            t.expr.pseudos.visible = function(t) {
                return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
            }
        }
        .apply(e, n)) && (t.exports = o)
    },
    PzxK: function(t, e, i) {
        var n = i("D2L2")
          , o = i("sB3e")
          , r = i("ax3d")("IE_PROTO")
          , a = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = o(t),
            n(t, r) ? t[r] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
        }
    },
    QBb4: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[0];
            Promise.all([i.e(0), i.e(10)]).then(function(t) {
                var o = {
                    highlights: i("s2JV").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    QRG4: function(t, e, i) {
        var n = i("UuGF")
          , o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(n(t), 9007199254740991) : 0
        }
    },
    "QSv/": function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return /\?/
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    Qbs8: function(t, e, i) {
        "use strict";
        function n() {
            this.namespace = "signup_dialog",
            this.storageKey = "until",
            this.defaultAttrs({
                skipDisplay: !1
            }),
            this.shouldDisplayDialog = function() {
                return this.expired && !this.attr.skipDisplay
            }
            ,
            this.notifyDialogVisibility = function() {
                this.shouldDisplayDialog() && this.trigger(document, "uiWillShowSignupDialog")
            }
            ,
            this.possiblyShowDialog = function() {
                this.shouldDisplayDialog() && (this.showDialog(),
                this.clear(),
                this.updateComponentTTL())
            }
            ,
            this.showDialog = function() {
                this.trigger("uiShouldShowDropdown")
            }
            ,
            this.updateComponentTTL = function() {
                "selenium" === this.attr.environment ? this.updateTTL(this.storageKey, 6e4) : this.updateTTL(this.storageKey, 864e5)
            }
            ,
            this.after("initialize", function() {
                this.expired = this.isExpired(this.storageKey),
                this.on(document, "uiSwiftLoaded uiPageChanged", this.possiblyShowDialog)
            })
        }
        var o = i("DBjh")
          , r = i("KHYl");
        e.a = Object(o.default)(n, r.a)
    },
    QyNh: function(t, e, i) {
        var n = i("UuGF")
          , o = Math.max
          , r = Math.min;
        t.exports = function(t, e) {
            return t = n(t),
            t < 0 ? o(t + e, 0) : r(t, e)
        }
    },
    R9M2: function(t, e) {
        var i = {}.toString;
        t.exports = function(t) {
            return i.call(t).slice(8, -1)
        }
    },
    RCB8: function(t, e, i) {
        (function(e) {
            t.exports = e.$ = i("4kSj")
        }
        ).call(e, i("DuR2"))
    },
    RIfZ: function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                rotationMs: 7e3,
                fadeMs: 500,
                activeClass: "active",
                companionTweetsSelector: ".background-companion-tweets .companion-tweet",
                activeCompanionTweetSelector: ".companion-tweet.active",
                frontImageSelector: ".front-bg .front-image"
            }),
            this.cycleBackground = function() {
                if (document.hasFocus()) {
                    var t = this.select("activeCompanionTweetSelector")
                      , e = this.$companionTweets.index(t)
                      , i = ++e % this.companionTweetsLen
                      , n = this.$companionTweets.eq(i);
                    this.hideTweet(t),
                    this.changeImage(n),
                    this.showTweet(n)
                }
            }
            ,
            this.showTweet = function(t) {
                t.show().addClass(this.attr.activeClass)
            }
            ,
            this.hideTweet = function(t) {
                t.hide().removeClass(this.attr.activeClass)
            }
            ,
            this.changeImage = function(t) {
                var e = this;
                this.$frontImage.fadeOut(this.attr.fadeMs, function() {
                    e.$frontImage.attr("src", t.data("photo")),
                    e.$frontImage.fadeIn(e.attr.fadeMs)
                })
            }
            ,
            this.after("initialize", function() {
                this.$companionTweets = this.select("companionTweetsSelector"),
                this.$frontImage = this.select("frontImageSelector"),
                this.companionTweetsLen = this.$companionTweets.length,
                this.showTweet(this.$companionTweets.first()),
                this.$companionTweets.length <= 1 || (r.default.setIntervalEvent("uiFrontPagePhotoSetBackgroundTick", this.attr.rotationMs),
                this.on(document, "uiFrontPagePhotoSetBackgroundTick", this.cycleBackground))
            })
        }
        var o = i("DBjh")
          , r = i("r8Bt");
        e.a = Object(o.default)(n)
    },
    RMWW: function(t, e, i) {
        "use strict";
        (function(t) {
            function n(t) {
                this.SESSION_BUFFER_KEY = "ScribeTransport",
                this.SCRIBE_API_ENDPOINT = "/i/jot",
                this.options = {},
                t && (this.updateOptions(t),
                this.registerEventHandlers(t))
            }
            var o = i("B68V")
              , r = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            }
            ;
            n.prototype = {
                flush: function(e, i) {
                    if (e && e.length) {
                        void 0 === i && (i = !!this.options.sync);
                        var n = {
                            "X-Twitter-Polling": !0
                        }
                          , r = o.a.pageVisible();
                        if (void 0 !== r && (n["X-Twitter-Active-User"] = r),
                        this.options.useAjax) {
                            var a = {
                                url: this.options.url,
                                data: t.extend(this.ajaxParams(e), this.options.requestParameters),
                                type: "POST",
                                dataType: "text",
                                async: !i,
                                headers: n
                            };
                            this.options.debug && (this.options.debugHandler && (a.success = this.options.debugHandler),
                            a.data.debug = "1"),
                            t.ajax(a)
                        } else {
                            var s = this.options.debug ? "&debug=1" : "";
                            (new Image).src = this.options.url + "?q=" + (+new Date).toString().slice(-4) + s + "&" + this.imageParams(e)
                        }
                        this.reset()
                    }
                },
                ajaxParams: function(t) {
                    if ("string" == typeof t)
                        return {
                            log: "[" + t + "]"
                        };
                    var e = this.options.encodeParameters;
                    return e && "function" == typeof e ? e.apply(this, arguments) : {
                        log: JSON.stringify(t)
                    }
                },
                imageParams: function(t) {
                    if ("string" == typeof t)
                        return "log=%5B" + t + "%5D";
                    var e = this.options.encodeParameters;
                    return e && "function" == typeof e ? e.apply(this, arguments) : "log=" + encodeURIComponent(JSON.stringify(t))
                },
                reset: function() {
                    this.options.bufferEvents && (this.skipUnloadFlush = !1,
                    sessionStorage.removeItem(this.options.bufferKey))
                },
                getBuffer: function() {
                    return sessionStorage.getItem(this.options.bufferKey) || ""
                },
                logWithStorageException: function(t, e) {
                    var i = {
                        category: "client_scribe_storage_error",
                        error: t.message,
                        url: document.location.href,
                        product_name: "swift",
                        event_name: "storage_quota_exceeded",
                        type: "js_error"
                    };
                    this.addCategoryField(i, i.category),
                    this.flush(this.appendData(e, this.encodeEventData(i)))
                },
                storeData: function(t, e) {
                    try {
                        sessionStorage.setItem(t, e)
                    } catch (t) {
                        if ("QuotaExceededError" !== t.name && "QuotaExceededError" !== t.message && "NS_ERROR_DOM_QUOTA_REACHED" !== t.name && "QUOTA_EXCEEDED_ERR" !== t.name && -2147024882 !== t.number)
                            throw t;
                        this.logWithStorageException(t, e)
                    }
                },
                encodeEventData: function(t) {
                    var e = JSON.stringify(t);
                    return this.options.useAjax || (e = encodeURIComponent(e)),
                    e
                },
                appendData: function(t, e) {
                    return t + (t ? this.SEPARATOR + e : e)
                },
                addToBuffer: function(t) {
                    var e = this.getBuffer()
                      , i = this.encodeEventData(t)
                      , n = this.appendData(e, i);
                    this.options.bufferSize && this.fullBuffer(n) ? this.options.useAjax ? this.flush(n) : (this.flush(e),
                    this.storeData(this.options.bufferKey, i)) : this.storeData(this.options.bufferKey, n)
                },
                addCategoryField: function(t, e) {
                    t._category_ = e
                },
                send: function(e, i, n) {
                    !i || !e || this.options.bufferSize < 0 || (this.addCategoryField(e, i),
                    !n && this.options.bufferEvents && this.options.bufferSize ? this.addToBuffer(e) : this.flush([e], n),
                    this.options.debug && t(document).trigger("scribedata." + this.options.bufferKey, e),
                    this.options.metrics && "debug" !== e.event_info && t(document).trigger("debugscribe", e))
                },
                fullBuffer: function(t) {
                    return t.length >= (this.options.useAjax ? 2083 * this.options.bufferSize : 2050 - this.options.url.length)
                },
                updateOptions: function(e) {
                    if (this.options = r({}, this.options, e),
                    this.options.requestParameters || (this.options.requestParameters = {}),
                    void 0 === this.options.flushOnUnload && (this.options.flushOnUnload = !0),
                    this.options.bufferKey || (this.options.bufferKey = this.SESSION_BUFFER_KEY),
                    0 === this.options.bufferSize && (this.options.bufferEvents = !1),
                    void 0 === this.options.useAjax && (this.options.useAjax = !0),
                    this.options.bufferEvents || void 0 === this.options.bufferEvents)
                        try {
                            sessionStorage.setItem(this.SESSION_BUFFER_KEY + ".init", "test");
                            var i = "test" === sessionStorage.getItem(this.SESSION_BUFFER_KEY + ".init");
                            sessionStorage.removeItem(this.SESSION_BUFFER_KEY + ".init"),
                            this.options.bufferEvents = i
                        } catch (t) {
                            this.options.bufferEvents = !1
                        }
                    if (this.options.debug && !this.options.debugHandler) {
                        var n = this;
                        this.options.debugHandler = e.debugHandler || function(e) {
                            try {
                                t(document).trigger("handlescribe." + n.options.bufferKey, JSON.parse(e))
                            } catch (t) {}
                        }
                    }
                    var o = "https:" === window.location.protocol ? "https:" : "http:";
                    void 0 === this.options.url ? this.options.useAjax ? this.options.url = this.SCRIBE_API_ENDPOINT : this.options.url = "https://twitter.com" + this.SCRIBE_API_ENDPOINT : this.options.url = this.options.url.replace(/^[a-z]+:/g, o).replace(/\/$/, ""),
                    this.options.bufferEvents && void 0 === this.options.bufferSize && (this.options.bufferSize = 20)
                },
                appHost: function() {
                    return window.location.host
                },
                registerEventHandlers: function() {
                    var e = this
                      , i = t(document);
                    if (this.options.bufferEvents && (i.on("flushscribe." + e.options.bufferKey, function(t) {
                        return e.flush(e.getBuffer(), !0)
                    }),
                    this.options.flushOnUnload)) {
                        var n = function(t) {
                            e.skipUnloadFlush = !t || !t.match(/http/) || !!t.match(new RegExp("^https?://" + e.appHost(),"gi")),
                            e.skipUnloadFlush && window.setTimeout(function() {
                                return e.skipUnloadFlush = !1
                            }, 3e3)
                        };
                        i.on("mouseup." + this.options.bufferKey, "a", function(t) {
                            this.getAttribute("target") || t.button || t.metaKey || t.shiftKey || t.altKey || t.ctrlKey || n(this.getAttribute("href"))
                        }),
                        i.on("submit." + this.options.bufferKey, "form", function(t) {
                            n(this.getAttribute("action"))
                        }),
                        i.on("uiNavigate." + this.options.bufferKey, function(t, e) {
                            return n(e.url)
                        }),
                        t(window).on("unload." + this.options.bufferKey, function() {
                            e.skipUnloadFlush || e.flush(e.getBuffer(), !0),
                            e.skipUnloadFlush = !1
                        })
                    }
                    this.SEPARATOR = this.options.useAjax ? "," : encodeURIComponent(",")
                },
                destroy: function() {
                    this.flush(this.getBuffer()),
                    t(document).off("flushscribe." + this.options.bufferKey),
                    t(window).off("unload." + this.options.bufferKey),
                    t(document).off("mouseup." + this.options.bufferKey),
                    t(document).off("submit." + this.options.bufferKey),
                    t(document).off("uiNavigate." + this.options.bufferKey)
                }
            },
            e.a = new n
        }
        ).call(e, i("4kSj"))
    },
    RPLV: function(t, e, i) {
        t.exports = i("7KvD").document && document.documentElement
    },
    RTim: function(t, e, i) {
        "use strict";
        function n() {
            return function(t, e) {
                var i = t.headers
                  , n = t.method;
                if ("POST" === n || "PUT" === n)
                    switch (void 0 === i["content-type"] && (i["content-type"] = "application/x-www-form-urlencoded"),
                    i["content-type"]) {
                    case "application/x-www-form-urlencoded":
                        t.data = r.a.stringify(t.data);
                        break;
                    case "application/json":
                        t.data = JSON.stringify(t.data)
                    }
                return e(t)
            }
        }
        e.a = n;
        var o = i("mw3O")
          , r = i.n(o)
    },
    RW6J: function(t, e, i) {
        "use strict";
        function n(t) {
            t = t.toLowerCase();
            var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
            return {
                browser: e[1] || "",
                version: e[2] || "0"
            }
        }
        function o() {
            a = {};
            var t = n(navigator.userAgent);
            t.browser && (a[t.browser] = !0,
            a.version = t.version);
            var e = void 0;
            return a.chrome ? (a.webkit = !0,
            e = "chrome") : a.webkit ? (a.safari = !0,
            e = "webkit") : e = a.mozilla ? "mozilla" : a.msie ? "msie" : "unknown",
            a.name = e,
            a
        }
        function r() {
            return a || o()
        }
        e.a = r;
        var a = o()
    },
    "RY/4": function(t, e, i) {
        var n = i("R9M2")
          , o = i("dSzd")("toStringTag")
          , r = "Arguments" == n(function() {
            return arguments
        }())
          , a = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        };
        t.exports = function(t) {
            var e, i, s;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = a(e = Object(t), o)) ? i : r ? n(e) : "Object" == (s = n(e)) && "function" == typeof e.callee ? "Arguments" : s
        }
    },
    RZrQ: function(t, e, i) {
        "use strict";
        function n() {
            function t(t) {
                if (window.scribeConsole && window.scribeConsole.postMessage) {
                    var e = window.location.protocol + "//" + window.location.host;
                    try {
                        window.scribeConsole.postMessage(t, e)
                    } catch (e) {
                        t._category_
                    }
                }
            }
            this.verifyHost = function(t) {
                return t && t.match(/^(twitter\.com|localhost\.twitter\.com)(:[0-9]+)?$/)
            }
            ,
            this.after("initialize", function() {
                this.on("keypress", function(t) {
                    if (205 === t.charCode && t.shiftKey && t.altKey) {
                        var e = window.location.host;
                        this.verifyHost(e) || (e = "twitter.com"),
                        window.scribeConsole = window.open(window.location.protocol + "//" + e + "/scribe/console", "scribe_console", "menubar=no,toolbar=no,personalbar=no,location=no,resizable=yes,status=no,dependent=yes,height=600,width=600,screenX=100,screenY=100,scrollbars=yes")
                    }
                }),
                this.on("scribedata.ScribeTransport handlescribe.ScribeTransport", function(e, i) {
                    return t(i)
                }),
                this.attr.scribesForScribeConsole && this.on("uiSwiftLoaded uiPageChanged", function(e, i) {
                    "uiSwiftLoaded" !== e.type && i.fromCache || this.attr.scribesForScribeConsole.forEach(function(e) {
                        e._category_ = "client_event",
                        t(e)
                    })
                })
            })
        }
        var o = i("DBjh");
        e.a = Object(o.default)(n)
    },
    S82l: function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    },
    SGbo: function(t, e, i) {
        "use strict";
        function n(t) {
            return t.is(":visible") && "hidden" !== t.css("visibility") && "1" === t.css("opacity")
        }
        e.a = n
    },
    SKNr: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    followedSearchesListSelector: ".followed-searches-list",
                    followedSearchesSelector: ".followed-searches-list",
                    followedSearchesItemSelector: ".typeahead-followed-search-item",
                    followedSearchesTitleSelector: ".followed-searches-title",
                    followedSearchesBlockSelector: ".typeahead-followed-searches",
                    followedSearchesButtonSelector: ".FollowSearchButton--typeahead",
                    followedSearchesRemoveSelector: ".FollowSearchButton--typeahead .FollowSearchButton-unfollow",
                    datasources: ["followedSearches"]
                }),
                this.renderFollowedSearches = function(t, e) {
                    this.$followedSearchesList.empty();
                    var i = [];
                    if (this.attr.datasources.forEach(function(t) {
                        return i = i.concat(e.suggestions[t] || [])
                    }),
                    0 === i.length)
                        return this.$followedSearchesTitle.hide(),
                        void this.$followedSearchesBlock.removeClass("has-items");
                    i.reverse();
                    var n = a.a.render({
                        followed_searches: i
                    });
                    this.$followedSearchesList.html(n),
                    this.$followedSearchesTitle.show(),
                    this.$followedSearchesBlock.addClass("has-items")
                }
                ,
                this.removeFollowedSearch = function(e, i) {
                    e.preventDefault(),
                    e.stopPropagation();
                    var n = t(e.target).closest(this.attr.followedSearchesItemSelector)
                      , o = n.find("a").attr("data-search-query");
                    0 === n.siblings().length && (this.$followedSearchesTitle.hide(),
                    this.$followedSearchesBlock.removeClass("has-items")),
                    n.remove(),
                    this.trigger("uiRemoveFollowSearch", {
                        query: o,
                        scribeComponent: "top_bar_searchbox"
                    })
                }
                ,
                this.after("initialize", function() {
                    this.$followedSearchesList = this.select("followedSearchesSelector"),
                    this.$followedSearchesTitle = this.select("followedSearchesTitleSelector"),
                    this.$followedSearchesBlock = this.select("followedSearchesBlockSelector"),
                    this.on("uiTypeaheadRenderResults", this.renderFollowedSearches),
                    this.on("click", {
                        followedSearchesRemoveSelector: this.removeFollowedSearch
                    })
                })
            }
            var o = i("DBjh")
              , r = i("UbM7")
              , a = i.n(r);
            e.a = Object(o.default)(n)
        }
        ).call(e, i("4kSj"))
    },
    "SNS+": function(t, e, i) {
        "use strict";
        e.a = {
            GLOBAL_FORCE_CLOSE_EVENTS: ["uiBeforePageChanged", "uiPageChanged", "uiNavigate", "uiForceDropdownClosed"].join(" "),
            GLOBAL_REQUEST_CLOSE_EVENTS: ["uiCloseDropdowns"].join(" ")
        }
    },
    STPD: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    spinnerContainer: "body",
                    pushState: !0,
                    pushStateSelector: "a.js-nav",
                    navigateBackSelector: ".js-navigateBack",
                    pageContainer: "#page-container",
                    docContainer: "#doc",
                    globalHeadingSelector: ".global-nav h1",
                    baseFoucClass: "swift-loading"
                }),
                this.navigate = function(e) {
                    if (!(e.shiftKey || e.ctrlKey || e.metaKey || void 0 !== e.which && e.which > 1)) {
                        var i = t(e.target)
                          , n = i.closest(this.attr.pushStateSelector);
                        if (n.length && !e.isDefaultPrevented()) {
                            var o = n.attr("href") || n.attr("xlink:href");
                            o && !n.attr("target") && (this.trigger(n, "uiNavigate", {
                                href: o,
                                conversation_id: n.data("conversation-id"),
                                nextActiveElement: n.data("next-active-element")
                            }),
                            e.preventDefault(),
                            !n.hasClass("js-allowPropagation") && e.stopImmediatePropagation())
                        }
                    }
                }
                ,
                this.updatePage = function(e, i) {
                    function n(e) {
                        i.init_data.fromCache = i.fromCache,
                        this.logPushStateTTFT && (window.ttft.recordMilestone("page", i.init_data.pageName),
                        window.ttft.recordMilestone("section", i.init_data.sectionName)),
                        e(i.init_data),
                        t("body").removeClass(this.attr.baseFoucClass),
                        this.trigger("uiPageChanged", i),
                        void 0 !== i.nextActiveElement && t(i.nextActiveElement).focus(),
                        this.logPushStateTTFT && (window.ttft.recordMilestone("aq_empty_time", window.ttft.now()),
                        window.ttft.startAjaxTracking())
                    }
                    this.logPushStateTTFT && (window.ttft.resetTTFTState(),
                    window.ttft.recordMilestone("is_push_state", !0),
                    window.ttft.recordMilestone("push_render_start", window.ttft.now())),
                    this.hideSpinner(),
                    this.trigger("uiBeforePageChanged", i),
                    this.trigger("uiTeardown", {}),
                    this.trigger("uiUpdatePageCache", {
                        href: i.href
                    }),
                    t("body").attr("class", i.init_data.bodyFoucClassNames + " " + i.body_class_names),
                    this.select("docContainer").attr("class", i.doc_class_names),
                    this.select("pageContainer").attr("class", i.page_container_class_names),
                    i.canonical_url && t('link[rel="canonical"]').attr("href", i.canonical_url);
                    var o = i.banners && !i.fromCache ? i.banners + i.page : i.page;
                    this.$node.find(i.init_data.viewContainer).html(o),
                    i.isPopState || t(window).scrollTop(0),
                    this.logPushStateTTFT && window.ttft.recordMilestone("client_record_time", window.ttft.now()),
                    Object(c.a)(this, [i.module], n)
                }
                ,
                this.showSpinner = function(t, e) {
                    this.trigger("uiShowGlobalLoadingIndicator")
                }
                ,
                this.hideSpinner = function(t, e) {
                    this.trigger("uiHideGlobalLoadingIndicator")
                }
                ,
                this.onPopState = function(t, e) {
                    var i = {
                        state: t.originalEvent && t.originalEvent.state
                    };
                    this.trigger(document, {
                        type: "uiPopStateNavigate",
                        defaultBehavior: this.doPopState.bind(this, t, i)
                    }, i)
                }
                ,
                this.doPopState = function(t, e) {
                    e.state && (Object(o.a)().safari && (document.body.style.display = "none",
                    document.body.offsetHeight,
                    document.body.style.display = "block"),
                    this.trigger("uiNavigate", {
                        isPopState: !0,
                        href: Object(a.a)()
                    }))
                }
                ,
                this.navigateBack = function(e, i) {
                    var n = t(e.target).attr("data-fallback-url");
                    this.getHistoryLength() > 1 ? history.back() : n && this.trigger("uiNavigate", {
                        href: n
                    })
                }
                ,
                this.getHistoryLength = function() {
                    return history.length
                }
                ,
                this.after("initialize", function() {
                    Object(s.a)(this.attr.pushState) && (this.on("click", this.navigate),
                    this.on(window, "popstate", this.onPopState),
                    this.on("dataPageRefresh", this.updatePage),
                    this.on("dataPageFetch", this.showSpinner)),
                    this.logPushStateTTFT = u.a.getDecider("log_push_state_ttft_metrics"),
                    this.on("click", {
                        navigateBackSelector: this.navigateBack
                    })
                })
            }
            var o = i("RW6J")
              , r = i("DBjh")
              , a = i("Ckrd")
              , s = i("c16W")
              , u = i("IAMj")
              , c = i("bXc2")
              , l = Object(r.default)(n);
            e.a = l
        }
        ).call(e, i("4kSj"))
    },
    SfB7: function(t, e, i) {
        t.exports = !i("+E39") && !i("S82l")(function() {
            return 7 != Object.defineProperty(i("ON07")("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    T51W: function(t, e, i) {
        var n;
        /*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
        !function(o) {
            function r(t, e, i, n) {
                var o, r, a, s, u, c, l, d = e && e.ownerDocument, h = e ? e.nodeType : 9;
                if (i = i || [],
                "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h)
                    return i;
                if (!n && ((e ? e.ownerDocument || e : z) !== R && L(e),
                e = e || R,
                U)) {
                    if (11 !== h && (u = wt.exec(t)))
                        if (o = u[1]) {
                            if (9 === h) {
                                if (!(a = e.getElementById(o)))
                                    return i;
                                if (a.id === o)
                                    return i.push(a),
                                    i
                            } else if (d && (a = d.getElementById(o)) && q(e, a) && a.id === o)
                                return i.push(a),
                                i
                        } else {
                            if (u[2])
                                return et.apply(i, e.getElementsByTagName(t)),
                                i;
                            if ((o = u[3]) && x.getElementsByClassName && e.getElementsByClassName)
                                return et.apply(i, e.getElementsByClassName(o)),
                                i
                        }
                    if (x.qsa && !K[t + " "] && (!F || !F.test(t))) {
                        if (1 !== h)
                            d = e,
                            l = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((s = e.getAttribute("id")) ? s = s.replace(xt, _t) : e.setAttribute("id", s = H),
                            c = D(t),
                            r = c.length; r--; )
                                c[r] = "#" + s + " " + g(c[r]);
                            l = c.join(","),
                            d = St.test(t) && f(e.parentNode) || e
                        }
                        if (l)
                            try {
                                return et.apply(i, d.querySelectorAll(l)),
                                i
                            } catch (t) {} finally {
                                s === H && e.removeAttribute("id")
                            }
                    }
                }
                return I(t.replace(lt, "$1"), e, i, n)
            }
            function a() {
                function t(i, n) {
                    return e.push(i + " ") > E.cacheLength && delete t[e.shift()],
                    t[i + " "] = n
                }
                var e = [];
                return t
            }
            function s(t) {
                return t[H] = !0,
                t
            }
            function u(t) {
                var e = R.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e),
                    e = null
                }
            }
            function c(t, e) {
                for (var i = t.split("|"), n = i.length; n--; )
                    E.attrHandle[i[n]] = e
            }
            function l(t, e) {
                var i = e && t
                  , n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (n)
                    return n;
                if (i)
                    for (; i = i.nextSibling; )
                        if (i === e)
                            return -1;
                return t ? 1 : -1
            }
            function d(t) {
                return function(e) {
                    return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && kt(e) === t : e.disabled === t : "label"in e && e.disabled === t
                }
            }
            function h(t) {
                return s(function(e) {
                    return e = +e,
                    s(function(i, n) {
                        for (var o, r = t([], i.length, e), a = r.length; a--; )
                            i[o = r[a]] && (i[o] = !(n[o] = i[o]))
                    })
                })
            }
            function f(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            function p() {}
            function g(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++)
                    n += t[e].value;
                return n
            }
            function m(t, e, i) {
                var n = e.dir
                  , o = e.next
                  , r = o || n
                  , a = i && "parentNode" === r
                  , s = G++;
                return e.first ? function(e, i, o) {
                    for (; e = e[n]; )
                        if (1 === e.nodeType || a)
                            return t(e, i, o);
                    return !1
                }
                : function(e, i, u) {
                    var c, l, d, h = [W, s];
                    if (u) {
                        for (; e = e[n]; )
                            if ((1 === e.nodeType || a) && t(e, i, u))
                                return !0
                    } else
                        for (; e = e[n]; )
                            if (1 === e.nodeType || a)
                                if (d = e[H] || (e[H] = {}),
                                l = d[e.uniqueID] || (d[e.uniqueID] = {}),
                                o && o === e.nodeName.toLowerCase())
                                    e = e[n] || e;
                                else {
                                    if ((c = l[r]) && c[0] === W && c[1] === s)
                                        return h[2] = c[2];
                                    if (l[r] = h,
                                    h[2] = t(e, i, u))
                                        return !0
                                }
                    return !1
                }
            }
            function v(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var o = t.length; o--; )
                        if (!t[o](e, i, n))
                            return !1;
                    return !0
                }
                : t[0]
            }
            function b(t, e, i) {
                for (var n = 0, o = e.length; n < o; n++)
                    r(t, e[n], i);
                return i
            }
            function y(t, e, i, n, o) {
                for (var r, a = [], s = 0, u = t.length, c = null != e; s < u; s++)
                    (r = t[s]) && (i && !i(r, n, o) || (a.push(r),
                    c && e.push(s)));
                return a
            }
            function w(t, e, i, n, o, r) {
                return n && !n[H] && (n = w(n)),
                o && !o[H] && (o = w(o, r)),
                s(function(r, a, s, u) {
                    var c, l, d, h = [], f = [], p = a.length, g = r || b(e || "*", s.nodeType ? [s] : s, []), m = !t || !r && e ? g : y(g, h, t, s, u), v = i ? o || (r ? t : p || n) ? [] : a : m;
                    if (i && i(m, v, s, u),
                    n)
                        for (c = y(v, f),
                        n(c, [], s, u),
                        l = c.length; l--; )
                            (d = c[l]) && (v[f[l]] = !(m[f[l]] = d));
                    if (r) {
                        if (o || t) {
                            if (o) {
                                for (c = [],
                                l = v.length; l--; )
                                    (d = v[l]) && c.push(m[l] = d);
                                o(null, v = [], c, u)
                            }
                            for (l = v.length; l--; )
                                (d = v[l]) && (c = o ? nt(r, d) : h[l]) > -1 && (r[c] = !(a[c] = d))
                        }
                    } else
                        v = y(v === a ? v.splice(p, v.length) : v),
                        o ? o(null, a, v, u) : et.apply(a, v)
                })
            }
            function S(t) {
                for (var e, i, n, o = t.length, r = E.relative[t[0].type], a = r || E.relative[" "], s = r ? 1 : 0, u = m(function(t) {
                    return t === e
                }, a, !0), c = m(function(t) {
                    return nt(e, t) > -1
                }, a, !0), l = [function(t, i, n) {
                    var o = !r && (n || i !== j) || ((e = i).nodeType ? u(t, i, n) : c(t, i, n));
                    return e = null,
                    o
                }
                ]; s < o; s++)
                    if (i = E.relative[t[s].type])
                        l = [m(v(l), i)];
                    else {
                        if (i = E.filter[t[s].type].apply(null, t[s].matches),
                        i[H]) {
                            for (n = ++s; n < o && !E.relative[t[n].type]; n++)
                                ;
                            return w(s > 1 && v(l), s > 1 && g(t.slice(0, s - 1).concat({
                                value: " " === t[s - 2].type ? "*" : ""
                            })).replace(lt, "$1"), i, s < n && S(t.slice(s, n)), n < o && S(t = t.slice(n)), n < o && g(t))
                        }
                        l.push(i)
                    }
                return v(l)
            }
            function C(t, e) {
                var i = e.length > 0
                  , n = t.length > 0
                  , o = function(o, a, s, u, c) {
                    var l, d, h, f = 0, p = "0", g = o && [], m = [], v = j, b = o || n && E.find.TAG("*", c), w = W += null == v ? 1 : Math.random() || .1, S = b.length;
                    for (c && (j = a === R || a || c); p !== S && null != (l = b[p]); p++) {
                        if (n && l) {
                            for (d = 0,
                            a || l.ownerDocument === R || (L(l),
                            s = !U); h = t[d++]; )
                                if (h(l, a || R, s)) {
                                    u.push(l);
                                    break
                                }
                            c && (W = w)
                        }
                        i && ((l = !h && l) && f--,
                        o && g.push(l))
                    }
                    if (f += p,
                    i && p !== f) {
                        for (d = 0; h = e[d++]; )
                            h(g, m, a, s);
                        if (o) {
                            if (f > 0)
                                for (; p--; )
                                    g[p] || m[p] || (m[p] = Z.call(u));
                            m = y(m)
                        }
                        et.apply(u, m),
                        c && !o && m.length > 0 && f + e.length > 1 && r.uniqueSort(u)
                    }
                    return c && (W = w,
                    j = v),
                    g
                };
                return i ? s(o) : o
            }
            var T, x, E, k, O, D, A, I, j, P, N, L, R, M, U, F, B, $, q, H = "sizzle" + 1 * new Date, z = o.document, W = 0, G = 0, V = a(), Y = a(), K = a(), Q = function(t, e) {
                return t === e && (N = !0),
                0
            }, J = {}.hasOwnProperty, X = [], Z = X.pop, tt = X.push, et = X.push, it = X.slice, nt = function(t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e)
                        return i;
                return -1
            }, ot = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", rt = "[\\x20\\t\\r\\n\\f]", at = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", st = "\\[" + rt + "*(" + at + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + at + "))|)" + rt + "*\\]", ut = ":(" + at + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)", ct = new RegExp(rt + "+","g"), lt = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$","g"), dt = new RegExp("^" + rt + "*," + rt + "*"), ht = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"), ft = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]","g"), pt = new RegExp(ut), gt = new RegExp("^" + at + "$"), mt = {
                ID: new RegExp("^#(" + at + ")"),
                CLASS: new RegExp("^\\.(" + at + ")"),
                TAG: new RegExp("^(" + at + "|[*])"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + ut),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)","i"),
                bool: new RegExp("^(?:" + ot + ")$","i"),
                needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)","i")
            }, vt = /^(?:input|select|textarea|button)$/i, bt = /^h\d$/i, yt = /^[^{]+\{\s*\[native \w/, wt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, St = /[+~]/, Ct = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)","ig"), Tt = function(_, t, e) {
                var i = "0x" + t - 65536;
                return i !== i || e ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, xt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, _t = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, Et = function() {
                L()
            }, kt = m(function(t) {
                return !0 === t.disabled && ("form"in t || "label"in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                et.apply(X = it.call(z.childNodes), z.childNodes),
                X[z.childNodes.length].nodeType
            } catch (t) {
                et = {
                    apply: X.length ? function(t, e) {
                        tt.apply(t, it.call(e))
                    }
                    : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++]; )
                            ;
                        t.length = i - 1
                    }
                }
            }
            x = r.support = {},
            O = r.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }
            ,
            L = r.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : z;
                return n !== R && 9 === n.nodeType && n.documentElement ? (R = n,
                M = R.documentElement,
                U = !O(R),
                z !== R && (i = R.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Et, !1) : i.attachEvent && i.attachEvent("onunload", Et)),
                x.attributes = u(function(t) {
                    return t.className = "i",
                    !t.getAttribute("className")
                }),
                x.getElementsByTagName = u(function(t) {
                    return t.appendChild(R.createComment("")),
                    !t.getElementsByTagName("*").length
                }),
                x.getElementsByClassName = yt.test(R.getElementsByClassName),
                x.getById = u(function(t) {
                    return M.appendChild(t).id = H,
                    !R.getElementsByName || !R.getElementsByName(H).length
                }),
                x.getById ? (E.filter.ID = function(t) {
                    var e = t.replace(Ct, Tt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }
                ,
                E.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && U) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }
                ) : (E.filter.ID = function(t) {
                    var e = t.replace(Ct, Tt);
                    return function(t) {
                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }
                ,
                E.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && U) {
                        var i, n, o, r = e.getElementById(t);
                        if (r) {
                            if ((i = r.getAttributeNode("id")) && i.value === t)
                                return [r];
                            for (o = e.getElementsByName(t),
                            n = 0; r = o[n++]; )
                                if ((i = r.getAttributeNode("id")) && i.value === t)
                                    return [r]
                        }
                        return []
                    }
                }
                ),
                E.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                }
                : function(t, e) {
                    var i, n = [], o = 0, r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = r[o++]; )
                            1 === i.nodeType && n.push(i);
                        return n
                    }
                    return r
                }
                ,
                E.find.CLASS = x.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && U)
                        return e.getElementsByClassName(t)
                }
                ,
                B = [],
                F = [],
                (x.qsa = yt.test(R.querySelectorAll)) && (u(function(t) {
                    M.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    t.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + rt + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length || F.push("\\[" + rt + "*(?:value|" + ot + ")"),
                    t.querySelectorAll("[id~=" + H + "-]").length || F.push("~="),
                    t.querySelectorAll(":checked").length || F.push(":checked"),
                    t.querySelectorAll("a#" + H + "+*").length || F.push(".#.+[+~]")
                }),
                u(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = R.createElement("input");
                    e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length && F.push("name" + rt + "*[*^$|!~]?="),
                    2 !== t.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"),
                    M.appendChild(t).disabled = !0,
                    2 !== t.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    F.push(",.*:")
                })),
                (x.matchesSelector = yt.test($ = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && u(function(t) {
                    x.disconnectedMatch = $.call(t, "*"),
                    $.call(t, "[s!='']:x"),
                    B.push("!=", ut)
                }),
                F = F.length && new RegExp(F.join("|")),
                B = B.length && new RegExp(B.join("|")),
                e = yt.test(M.compareDocumentPosition),
                q = e || yt.test(M.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t
                      , n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                }
                : function(t, e) {
                    if (e)
                        for (; e = e.parentNode; )
                            if (e === t)
                                return !0;
                    return !1
                }
                ,
                Q = e ? function(t, e) {
                    if (t === e)
                        return N = !0,
                        0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1,
                    1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === R || t.ownerDocument === z && q(z, t) ? -1 : e === R || e.ownerDocument === z && q(z, e) ? 1 : P ? nt(P, t) - nt(P, e) : 0 : 4 & i ? -1 : 1)
                }
                : function(t, e) {
                    if (t === e)
                        return N = !0,
                        0;
                    var i, n = 0, o = t.parentNode, r = e.parentNode, a = [t], s = [e];
                    if (!o || !r)
                        return t === R ? -1 : e === R ? 1 : o ? -1 : r ? 1 : P ? nt(P, t) - nt(P, e) : 0;
                    if (o === r)
                        return l(t, e);
                    for (i = t; i = i.parentNode; )
                        a.unshift(i);
                    for (i = e; i = i.parentNode; )
                        s.unshift(i);
                    for (; a[n] === s[n]; )
                        n++;
                    return n ? l(a[n], s[n]) : a[n] === z ? -1 : s[n] === z ? 1 : 0
                }
                ,
                R) : R
            }
            ,
            r.matches = function(t, e) {
                return r(t, null, null, e)
            }
            ,
            r.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== R && L(t),
                e = e.replace(ft, "='$1']"),
                x.matchesSelector && U && !K[e + " "] && (!B || !B.test(e)) && (!F || !F.test(e)))
                    try {
                        var i = $.call(t, e);
                        if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                            return i
                    } catch (t) {}
                return r(e, R, null, [t]).length > 0
            }
            ,
            r.contains = function(t, e) {
                return (t.ownerDocument || t) !== R && L(t),
                q(t, e)
            }
            ,
            r.attr = function(t, e) {
                (t.ownerDocument || t) !== R && L(t);
                var i = E.attrHandle[e.toLowerCase()]
                  , n = i && J.call(E.attrHandle, e.toLowerCase()) ? i(t, e, !U) : void 0;
                return void 0 !== n ? n : x.attributes || !U ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }
            ,
            r.escape = function(t) {
                return (t + "").replace(xt, _t)
            }
            ,
            r.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }
            ,
            r.uniqueSort = function(t) {
                var e, i = [], n = 0, o = 0;
                if (N = !x.detectDuplicates,
                P = !x.sortStable && t.slice(0),
                t.sort(Q),
                N) {
                    for (; e = t[o++]; )
                        e === t[o] && (n = i.push(o));
                    for (; n--; )
                        t.splice(i[n], 1)
                }
                return P = null,
                t
            }
            ,
            k = r.getText = function(t) {
                var e, i = "", n = 0, o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent)
                            return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)
                            i += k(t)
                    } else if (3 === o || 4 === o)
                        return t.nodeValue
                } else
                    for (; e = t[n++]; )
                        i += k(e);
                return i
            }
            ,
            E = r.selectors = {
                cacheLength: 50,
                createPseudo: s,
                match: mt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(Ct, Tt),
                        t[3] = (t[3] || t[4] || t[5] || "").replace(Ct, Tt),
                        "~=" === t[2] && (t[3] = " " + t[3] + " "),
                        t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(),
                        "nth" === t[1].slice(0, 3) ? (t[3] || r.error(t[0]),
                        t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                        t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && r.error(t[0]),
                        t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return mt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && pt.test(i) && (e = D(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e),
                        t[2] = i.slice(0, e)),
                        t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(Ct, Tt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        }
                        : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = V[t + " "];
                        return e || (e = new RegExp("(^|" + rt + ")" + t + "(" + rt + "|$)")) && V(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, i) {
                        return function(n) {
                            var o = r.attr(n, t);
                            return null == o ? "!=" === e : !e || (o += "",
                            "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? (" " + o.replace(ct, " ") + " ").indexOf(i) > -1 : "|=" === e && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, i, n, o) {
                        var r = "nth" !== t.slice(0, 3)
                          , a = "last" !== t.slice(-4)
                          , s = "of-type" === e;
                        return 1 === n && 0 === o ? function(t) {
                            return !!t.parentNode
                        }
                        : function(e, i, u) {
                            var c, l, d, h, f, p, g = r !== a ? "nextSibling" : "previousSibling", m = e.parentNode, v = s && e.nodeName.toLowerCase(), b = !u && !s, y = !1;
                            if (m) {
                                if (r) {
                                    for (; g; ) {
                                        for (h = e; h = h[g]; )
                                            if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)
                                                return !1;
                                        p = g = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild],
                                a && b) {
                                    for (h = m,
                                    d = h[H] || (h[H] = {}),
                                    l = d[h.uniqueID] || (d[h.uniqueID] = {}),
                                    c = l[t] || [],
                                    f = c[0] === W && c[1],
                                    y = f && c[2],
                                    h = f && m.childNodes[f]; h = ++f && h && h[g] || (y = f = 0) || p.pop(); )
                                        if (1 === h.nodeType && ++y && h === e) {
                                            l[t] = [W, f, y];
                                            break
                                        }
                                } else if (b && (h = e,
                                d = h[H] || (h[H] = {}),
                                l = d[h.uniqueID] || (d[h.uniqueID] = {}),
                                c = l[t] || [],
                                f = c[0] === W && c[1],
                                y = f),
                                !1 === y)
                                    for (; (h = ++f && h && h[g] || (y = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++y || (b && (d = h[H] || (h[H] = {}),
                                    l = d[h.uniqueID] || (d[h.uniqueID] = {}),
                                    l[t] = [W, y]),
                                    h !== e)); )
                                        ;
                                return (y -= o) === n || y % n == 0 && y / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var i, n = E.pseudos[t] || E.setFilters[t.toLowerCase()] || r.error("unsupported pseudo: " + t);
                        return n[H] ? n(e) : n.length > 1 ? (i = [t, t, "", e],
                        E.setFilters.hasOwnProperty(t.toLowerCase()) ? s(function(t, i) {
                            for (var o, r = n(t, e), a = r.length; a--; )
                                o = nt(t, r[a]),
                                t[o] = !(i[o] = r[a])
                        }) : function(t) {
                            return n(t, 0, i)
                        }
                        ) : n
                    }
                },
                pseudos: {
                    not: s(function(t) {
                        var e = []
                          , i = []
                          , n = A(t.replace(lt, "$1"));
                        return n[H] ? s(function(t, e, i, o) {
                            for (var r, a = n(t, null, o, []), s = t.length; s--; )
                                (r = a[s]) && (t[s] = !(e[s] = r))
                        }) : function(t, o, r) {
                            return e[0] = t,
                            n(e, null, r, i),
                            e[0] = null,
                            !i.pop()
                        }
                    }),
                    has: s(function(t) {
                        return function(e) {
                            return r(t, e).length > 0
                        }
                    }),
                    contains: s(function(t) {
                        return t = t.replace(Ct, Tt),
                        function(e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                    }),
                    lang: s(function(t) {
                        return gt.test(t || "") || r.error("unsupported lang: " + t),
                        t = t.replace(Ct, Tt).toLowerCase(),
                        function(e) {
                            var i;
                            do {
                                if (i = U ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                    return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                        }
                    }),
                    target: function(t) {
                        var e = o.location && o.location.hash;
                        return e && e.slice(1) === t.id
                    },
                    root: function(t) {
                        return t === M
                    },
                    focus: function(t) {
                        return t === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: d(!1),
                    disabled: d(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex,
                        !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !E.pseudos.empty(t)
                    },
                    header: function(t) {
                        return bt.test(t.nodeName)
                    },
                    input: function(t) {
                        return vt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: h(function() {
                        return [0]
                    }),
                    last: h(function(t, e) {
                        return [e - 1]
                    }),
                    eq: h(function(t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: h(function(t, e) {
                        for (var i = 0; i < e; i += 2)
                            t.push(i);
                        return t
                    }),
                    odd: h(function(t, e) {
                        for (var i = 1; i < e; i += 2)
                            t.push(i);
                        return t
                    }),
                    lt: h(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; --n >= 0; )
                            t.push(n);
                        return t
                    }),
                    gt: h(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e; )
                            t.push(n);
                        return t
                    })
                }
            },
            E.pseudos.nth = E.pseudos.eq;
            for (T in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                E.pseudos[T] = function(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }(T);
            for (T in {
                submit: !0,
                reset: !0
            })
                E.pseudos[T] = function(t) {
                    return function(e) {
                        var i = e.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && e.type === t
                    }
                }(T);
            p.prototype = E.filters = E.pseudos,
            E.setFilters = new p,
            D = r.tokenize = function(t, e) {
                var i, n, o, a, s, u, c, l = Y[t + " "];
                if (l)
                    return e ? 0 : l.slice(0);
                for (s = t,
                u = [],
                c = E.preFilter; s; ) {
                    i && !(n = dt.exec(s)) || (n && (s = s.slice(n[0].length) || s),
                    u.push(o = [])),
                    i = !1,
                    (n = ht.exec(s)) && (i = n.shift(),
                    o.push({
                        value: i,
                        type: n[0].replace(lt, " ")
                    }),
                    s = s.slice(i.length));
                    for (a in E.filter)
                        !(n = mt[a].exec(s)) || c[a] && !(n = c[a](n)) || (i = n.shift(),
                        o.push({
                            value: i,
                            type: a,
                            matches: n
                        }),
                        s = s.slice(i.length));
                    if (!i)
                        break
                }
                return e ? s.length : s ? r.error(t) : Y(t, u).slice(0)
            }
            ,
            A = r.compile = function(t, e) {
                var i, n = [], o = [], r = K[t + " "];
                if (!r) {
                    for (e || (e = D(t)),
                    i = e.length; i--; )
                        r = S(e[i]),
                        r[H] ? n.push(r) : o.push(r);
                    r = K(t, C(o, n)),
                    r.selector = t
                }
                return r
            }
            ,
            I = r.select = function(t, e, i, n) {
                var o, r, a, s, u, c = "function" == typeof t && t, l = !n && D(t = c.selector || t);
                if (i = i || [],
                1 === l.length) {
                    if (r = l[0] = l[0].slice(0),
                    r.length > 2 && "ID" === (a = r[0]).type && 9 === e.nodeType && U && E.relative[r[1].type]) {
                        if (!(e = (E.find.ID(a.matches[0].replace(Ct, Tt), e) || [])[0]))
                            return i;
                        c && (e = e.parentNode),
                        t = t.slice(r.shift().value.length)
                    }
                    for (o = mt.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o],
                    !E.relative[s = a.type]); )
                        if ((u = E.find[s]) && (n = u(a.matches[0].replace(Ct, Tt), St.test(r[0].type) && f(e.parentNode) || e))) {
                            if (r.splice(o, 1),
                            !(t = n.length && g(r)))
                                return et.apply(i, n),
                                i;
                            break
                        }
                }
                return (c || A(t, l))(n, e, !U, i, !e || St.test(t) && f(e.parentNode) || e),
                i
            }
            ,
            x.sortStable = H.split("").sort(Q).join("") === H,
            x.detectDuplicates = !!N,
            L(),
            x.sortDetached = u(function(t) {
                return 1 & t.compareDocumentPosition(R.createElement("fieldset"))
            }),
            u(function(t) {
                return t.innerHTML = "<a href='#'></a>",
                "#" === t.firstChild.getAttribute("href")
            }) || c("type|href|height|width", function(t, e, i) {
                if (!i)
                    return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }),
            x.attributes && u(function(t) {
                return t.innerHTML = "<input/>",
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
            }) || c("value", function(t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase())
                    return t.defaultValue
            }),
            u(function(t) {
                return null == t.getAttribute("disabled")
            }) || c(ot, function(t, e, i) {
                var n;
                if (!i)
                    return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            });
            var Ot = o.Sizzle;
            r.noConflict = function() {
                return o.Sizzle === r && (o.Sizzle = Ot),
                r
            }
            ,
            void 0 !== (n = function() {
                return r
            }
            .call(e, i, e, t)) && (t.exports = n)
        }(window)
    },
    TLAG: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("rY9R"), i("vKSX"), i("ZWgy")],
        void 0 !== (o = function(t, e, i, n) {
            "use strict";
            return function() {
                function o() {
                    if (l) {
                        l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                        l.innerHTML = "",
                        i.appendChild(c);
                        var t = window.getComputedStyle(l);
                        r = "1%" !== t.top,
                        u = "2px" === t.marginLeft,
                        a = "4px" === t.width,
                        l.style.marginRight = "50%",
                        s = "4px" === t.marginRight,
                        i.removeChild(c),
                        l = null
                    }
                }
                var r, a, s, u, c = e.createElement("div"), l = e.createElement("div");
                l.style && (l.style.backgroundClip = "content-box",
                l.cloneNode(!0).style.backgroundClip = "",
                n.clearCloneStyle = "content-box" === l.style.backgroundClip,
                c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                c.appendChild(l),
                t.extend(n, {
                    pixelPosition: function() {
                        return o(),
                        r
                    },
                    boxSizingReliable: function() {
                        return o(),
                        a
                    },
                    pixelMarginRight: function() {
                        return o(),
                        s
                    },
                    reliableMarginLeft: function() {
                        return o(),
                        u
                    }
                }))
            }(),
            n
        }
        .apply(e, n)) && (t.exports = o)
    },
    TX0g: function(t, e, i) {
        "use strict";
        function n(t) {
            return encodeURIComponent(t).replace(/\+/g, "%2B")
        }
        function o(t) {
            return decodeURIComponent(t.replace(/\+/g, " "))
        }
        function r(t) {
            var e = [];
            for (var i in t)
                null !== t[i] && void 0 !== t[i] && e.push(n(i) + "=" + n(t[i]));
            return e.sort().join("&")
        }
        function a(t) {
            var e = {}
              , i = void 0
              , n = void 0
              , r = void 0
              , a = void 0;
            if (t)
                for (i = t.split("&"),
                a = 0; r = i[a]; a++)
                    n = r.split("="),
                    2 === n.length && (e[o(n[0])] = o(n[1]));
            return e
        }
        function s(t) {
            var e = {}
              , i = t.match(/\?(.*)/);
            return i && i[1] && (e = a(i[1])),
            e
        }
        e.a = {
            decode: a,
            encode: r,
            encodePart: n,
            decodePart: o,
            queryMap: s
        }
    },
    TcQ7: function(t, e, i) {
        var n = i("MU5D")
          , o = i("52gC");
        t.exports = function(t) {
            return n(o(t))
        }
    },
    TygE: function(t, e, i) {
        "use strict";
        function n(t, e, i) {
            var n = {
                product: "webclient",
                description: t,
                duration_ms: e,
                metadata: JSON.stringify(i)
            };
            r.send(n, "perftown")
        }
        var o = i("RMWW")
          , r = o.a;
        e.a = n
    },
    TzBB: function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            function t(t, e) {
                return {
                    get: function() {
                        return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                    }
                }
            }
            return t
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    "U+pv": function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[1];
            Promise.all([i.e(0), i.e(7)]).then(function(t) {
                var o = {
                    topic: i("+0k3").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    U5ju: function(t, e, i) {
        i("M6a0"),
        i("zQR9"),
        i("+tPU"),
        i("CXw9"),
        t.exports = i("FeBl").Promise
    },
    UHc7: function(t, e, i) {
        "use strict";
        (function(t) {
            function n(e, i) {
                return parseInt(t(e).css("z-index")) - parseInt(t(i).css("z-index"))
            }
            function o() {
                r.default.mixin(this, [u.a, s.a]),
                this.defaultAttrs({
                    formControlsSelector: "textarea,select,input,button,div[contenteditable=true],div[contenteditable=plaintext-only]",
                    closeTargetsSelector: ".js-close",
                    initialFocusSelector: ".js-initial-focus:visible",
                    hideFocusClass: "hide-focus",
                    hideFocusSelector: ".hide-focus",
                    closeButtonClass: "modal-close",
                    closeButtonSelector: ".modal-close",
                    dragabilityClass: "draggable",
                    modalEnabledClass: "modal-enabled",
                    modalContainerClass: "modal-container",
                    modalContainerSelector: ".modal-container",
                    modalOverlaySelector: ".modal-overlay",
                    stackableModalContainerSelector: ".modal-container",
                    stackableModalOverlaySelector: ".modal-overlay",
                    modalSelector: ".modal",
                    modalHeaderSelector: ".modal-header",
                    modalContentSelector: ".modal-content, .js-ariaDocument",
                    modalTitleSelector: ".modal-title, .js-ariaTitle",
                    modalBodySelector: ".modal-body, .js-ariaBody",
                    dropdownRootNodeSelector: ".dropdown",
                    dropdownToggleSelector: ".dropdown-toggle",
                    keyboardShortcutWhitelist: ["uiShortcutEsc", "uiShortcutLeft", "uiShortcutRight", "uiShortcutEnter", "uiShortcutCmdEnter", "uiShortcutShiftEnter"],
                    openOnPageChanged: !1,
                    enableClosingViaBackground: !0
                }),
                this.center = function(t) {
                    var e = a.a.getWindow();
                    return {
                        top: Math.max(0, parseInt((e.height() - t.outerHeight()) / 2)),
                        left: Math.max(0, parseInt((e.width() - t.outerWidth()) / 2))
                    }
                }
                ,
                this.blockKeyboardShortcuts = function(t, e) {
                    this.isOpen() && -1 === this.attr.keyboardShortcutWhitelist.indexOf(e.type) && t.preventDefault()
                }
                ,
                this.getVisibleModals = function() {
                    return t(this.attr.stackableModalContainerSelector + ":visible").toArray()
                }
                ,
                this.position = function() {
                    var e = this.center(this.$dialog)
                      , i = a.a.getWindow()
                      , n = i.height()
                      , o = i.scrollTop();
                    null != this.attr.top && (e.top = this.attr.top),
                    null != this.attr.left && (e.left = this.attr.left),
                    null != this.attr.maxTop && (e.top = Math.min(e.top, this.attr.maxTop)),
                    null != this.attr.maxLeft && (e.left = Math.min(e.left, this.attr.maxLeft)),
                    "rtl" === t("body").attr("dir") ? this.$dialog.css({
                        top: e.top,
                        right: e.left
                    }) : this.$dialog.css({
                        top: e.top,
                        left: e.left
                    }),
                    n < this.$dialog.outerHeight() && null == this.attr.top ? (this.$dialog.css("position", "absolute"),
                    this.$dialog.css("top", e.top + o)) : !1 === this.attr.fixed && this.$dialog.css("top", e.top + o)
                }
                ,
                this.resize = function() {
                    this.attr.width && this.$dialog.css("width", this.attr.width),
                    this.attr.height && this.$dialog.css("height", this.attr.height)
                }
                ,
                this.applyDraggability = function() {
                    if (this.$dialog.hasClass(this.attr.dragabilityClass)) {
                        var e = this
                          , i = {
                            relative: !0,
                            handle: this.attr.modalHeaderSelector
                        }
                          , n = function(e, i) {
                            "rtl" === t("body").attr("dir") ? this.$dialog.css({
                                top: i.offsetY,
                                right: i.originalX - i.deltaX
                            }) : this.$dialog.css({
                                top: i.offsetY,
                                left: i.offsetX
                            })
                        };
                        this.$dialog.drag("start", function() {
                            e.$dialog.addClass("unselectable"),
                            t("#doc").addClass("unselectable")
                        }),
                        this.$dialog.drag("end", function() {
                            e.$dialog.removeClass("unselectable"),
                            t("#doc").removeClass("unselectable")
                        }),
                        this.$dialog.drag(n.bind(this), i)
                    }
                }
                ,
                this.notifyFocusChange = function() {
                    this.trigger(this.$dialog, {
                        type: "uiDialogInitialFocus",
                        defaultBehavior: "setInitialFocus"
                    })
                }
                ,
                this.setInitialFocus = function() {
                    var t = this.$dialog.find(this.attr.initialFocusSelector);
                    t.length || (t = this.$dialog.find(".primary-btn, .EdgeButton--primary")),
                    t.length && Object(l.a)(t) && Object(c.a)(t) ? t.focus() : this.focusNextAvailableControl("start", this.$dialog);
                    var e = this.$dialog.find(this.attr.closeButtonSelector);
                    e.is(document.activeElement) && e.addClass(this.attr.hideFocusClass)
                }
                ,
                this.hasFocus = function() {
                    var e = this.$dialog[0]
                      , i = document.activeElement;
                    return e && i && (e === i || t.contains(e, i))
                }
                ,
                this.blur = function() {
                    this.hasFocus() && document.activeElement.blur()
                }
                ,
                this.positionCloseButton = function() {
                    var t = this.$dialog.find(this.attr.focusableDescendants)
                      , e = this.$dialog.find(this.attr.closeButtonSelector);
                    t.length > 1 ? e.insertBefore(this.$dialog.find(this.attr.lastTabStopSelector)) : e.insertBefore(this.$dialog.find(this.attr.modalBodySelector))
                }
                ,
                this.focusFirstAvailableControl = function() {
                    this.isOpen() && this.focusNextAvailableControl("first", this.$dialog)
                }
                ,
                this.focusLastAvailableControl = function() {
                    this.isOpen() && this.focusNextAvailableControl("last", this.$dialog)
                }
                ,
                this.setFocusWhenContentChanges = function(t) {
                    this.isOpen() && this.$dialog.is(t.target) && this.notifyFocusChange()
                }
                ,
                this.removeHideFocusClass = function(e) {
                    t(e.target).removeClass(this.attr.hideFocusClass)
                }
                ,
                this.open = function() {
                    this.isOpen() || (this.bringToTop(),
                    this.applyARIAAttrs(),
                    this.createFirstLastTabStop(this.$dialog),
                    this.positionCloseButton(),
                    this.openState = !0,
                    this.$dialogContainer.fadeIn("fast", this.notifyFadeInComplete.bind(this)),
                    this.calculateScrollbarWidth(),
                    t("body").addClass(this.attr.modalEnabledClass),
                    this.resize(),
                    this.initiallyVisible || this.attr.noReposition || this.position(),
                    this.applyDraggability(),
                    this.activeEl = document.activeElement,
                    this.notifyFocusChange(),
                    this.trigger("uiCloseDropdowns"),
                    this.trigger("uiDialogOpened"),
                    delete this.initiallyVisible)
                }
                ,
                this.bringToTop = function() {
                    if (this.$dialogContainer.is(this.attr.stackableModalContainerSelector)) {
                        var e = this.getVisibleModals().reduce(function(e, i) {
                            return Math.max(e, parseInt(t(i).css("z-index"), 10) || 0)
                        }, 4e3)
                          , i = t(this.attr.stackableModalOverlaySelector);
                        this.originalModalOverlayZIndex = i.css("z-index"),
                        i.css("z-index", e + 1),
                        this.$dialogContainer.css("z-index", e + 2)
                    }
                }
                ,
                this.isOpen = function() {
                    var t = !!(this.$dialog && this.$dialog.length && this.$dialogContainer.length)
                      , e = window.DEBUG && window.DEBUG.enabled;
                    if (t && e && !this.initiallyVisible && this.openState !== this.$dialogContainer.is(":visible"))
                        throw new Error("Dialog markup and internal openState variable are out of sync.");
                    return this.openState
                }
                ,
                this.isBehindStackableOverlay = function() {
                    var e = t(this.attr.stackableModalOverlaySelector);
                    return e.is(":visible") && this.$dialogContainer.css("z-index") < e.css("z-index")
                }
                ,
                this.isModalOpen = function() {
                    return t("body").hasClass(this.attr.modalEnabledClass)
                }
                ,
                this.notifyFadeInComplete = function() {
                    this.trigger("uiDialogFadeInComplete")
                }
                ,
                this.openWhenTriggerClicked = function(t) {
                    t.preventDefault(),
                    this.open()
                }
                ,
                this.closeWithoutAction = function(t) {
                    var e = this.$node.get(0)
                      , i = this.$dialogContainer.get(0);
                    !this.isOpen() || this.isBehindStackableOverlay() || !this.eventUiCloseDialogTriggered(t) && (this.eventTriggeredByClickAndOutsideContainerAndNode(t, e, i) || this.eventTriggeredByKeyboardAndGalleryOrDrodpownOpen(t)) || this.__closeDialog(t)
                }
                ,
                this.eventUiCloseDialogTriggered = function(t) {
                    return "uiCloseDialog" === t.type
                }
                ,
                this.eventTriggeredByClickAndOutsideContainerAndNode = function(e, i, n) {
                    return !this.eventTriggeredByKeyboard(e) && !t.contains(i, e.target) && !t.contains(n, e.target)
                }
                ,
                this.eventTriggeredByKeyboardAndGalleryOrDrodpownOpen = function(t) {
                    return this.eventTriggeredByKeyboard(t) && (this.isGalleryOpen() || this.isDropdownOpen())
                }
                ,
                this.eventTriggeredByKeyboard = function(t) {
                    return !!{
                        keydown: !0,
                        uiShortcutEsc: !0
                    }[t.type]
                }
                ,
                this.isGalleryOpen = function() {
                    return t("body").hasClass("gallery-enabled")
                }
                ,
                this.isDropdownOpen = function() {
                    return t("body").hasClass("dropdown-enabled")
                }
                ,
                this.close = function(t) {
                    if (this.isOpen()) {
                        var e = t && this.eventTriggeredByKeyboard(t);
                        this.trigger({
                            type: "uiDialogCloseRequested",
                            defaultBehavior: this.blurAndClose.bind(this, e)
                        })
                    }
                }
                ,
                this.closeImmediately = function() {
                    this.isOpen() && this.blurAndCloseImmediately()
                }
                ,
                this.restorePreviousFocus = function() {
                    var e = void 0;
                    if (this.activeEl) {
                        e = t(this.activeEl).closest(this.attr.dropdownRootNodeSelector),
                        e.length && (this.activeEl = e.find(this.attr.dropdownToggleSelector)[0]);
                        try {
                            Object(d.a)(this.activeEl),
                            this.activeEl.focus(),
                            this.activeEl = null
                        } catch (t) {}
                    }
                }
                ,
                this.handleCloseKeys = function(t) {
                    var e = {
                        13: !0,
                        32: !0
                    };
                    this.isOpen() && e[t.keyCode] && this.closeWithoutAction(t)
                }
                ,
                this.blurAndClose = function(t) {
                    this.blur(),
                    this.$dialogContainer.fadeOut("fast", this.afterClose.bind(this, t, !0))
                }
                ,
                this.blurAndCloseImmediately = function() {
                    this.blur(),
                    this.$dialogContainer.hide(),
                    this.afterClose()
                }
                ,
                this.afterClose = function(e, i) {
                    this.removeFirstLastTabStop(this.$dialog);
                    var o = this.getVisibleModals();
                    o.length ? (o.sort(n).pop().removeAttribute("aria-hidden"),
                    t(this.attr.modalOverlaySelector).css("z-index", this.originalModalOverlayZIndex)) : (t("body").removeClass(this.attr.modalEnabledClass),
                    this.$dialog.closest(this.attr.modalContainerSelector).siblings("div[aria-hidden=true]").removeAttr("aria-hidden")),
                    this.openState = !1,
                    e && this.trigger(this.$dialog, {
                        type: "uiDialogRestorePreviousFocus",
                        defaultBehavior: "restorePreviousFocus"
                    }),
                    this.trigger("uiDialogClosed"),
                    i && this.trigger("uiDialogClosedByRequest")
                }
                ,
                this.applyARIAAttrs = function() {
                    var e = this.$dialog.closest(this.attr.modalContainerSelector)
                      , i = this.$dialog.find(this.attr.modalContentSelector)
                      , n = this.$dialog.find(this.attr.modalTitleSelector)
                      , o = this.$dialog.find(this.attr.modalBodySelector)
                      , r = e.attr("id")
                      , a = r + "-dialog"
                      , s = this.$dialog.find(this.attr.closeButtonSelector);
                    this.$dialog.attr("id", a),
                    s.attr("aria-controls", a);
                    var u = r + "-header";
                    n.attr("id", u);
                    var c = !!o.find(this.attr.formControlsSelector).length
                      , l = c ? "dialog" : "alertdialog"
                      , d = {
                        role: l,
                        "aria-labelledby": u
                    }
                      , h = void 0;
                    c || (h = r + "-body",
                    o.attr("id", h),
                    d["aria-describedby"] = h,
                    s.attr("aria-describedby", h)),
                    this.$dialog.attr(d),
                    i.attr("role", "document");
                    var f = t("#doc")[0]
                      , p = e[0];
                    f && p && !t.contains(f, p) && e.siblings("div:visible").attr("aria-hidden", !0)
                }
                ,
                this.closeOtherDialogs = function(t, e) {
                    this.node !== t.target && this.close()
                }
                ,
                this.__closeDialog = function(t) {
                    t.stopPropagation(),
                    this.trigger(t.target, "uiDialogClosedWithoutAction"),
                    this.close(t)
                }
                ,
                this.handleModalContainerClicks = function(t) {
                    this.attr.enableClosingViaBackground && this.isOpen() && this.$dialog.closest(this.attr.modalContainerSelector).is(t.target) && this.__closeDialog(t)
                }
                ,
                this.possiblyDisableBackgroundClose = function(e) {
                    t(e.target).hasClass(this.attr.modalContainerClass) ? this.attr.enableClosingViaBackground = !0 : this.attr.enableClosingViaBackground = !1
                }
                ,
                this.after("initialize", function() {
                    this.openState = !1,
                    this.$dialogContainer = this.$dialog || this.$node;
                    var t = this.$dialogContainer.is(document);
                    t || (this.$dialog = this.$dialogContainer.find(this.attr.modalSelector)),
                    this.on("mousedown", this.possiblyDisableBackgroundClose),
                    this.on(document, "click", {
                        modalContainerSelector: this.handleModalContainerClicks
                    }),
                    this.on(document, "click", {
                        closeTargetsSelector: this.closeWithoutAction
                    }),
                    this.on("keydown", {
                        closeTargetsSelector: this.handleCloseKeys
                    }),
                    this.on(document, "uiShortcutEsc uiCloseDialog", this.closeWithoutAction),
                    this.on(document, "uiBeforePageChanged", this.closeImmediately),
                    this.on(document, "uiDialogContentChanged", this.setFocusWhenContentChanges),
                    this.on("focusin", {
                        lastTabStopSelector: this.focusFirstAvailableControl,
                        firstTabStopSelector: this.focusLastAvailableControl
                    }),
                    this.on("focusout", {
                        hideFocusSelector: this.removeHideFocusClass
                    }),
                    this.attr.triggerSelector && this.on(this.attr.triggerSelector, "click", this.openWhenTriggerClicked),
                    this.attr.disableKeyboardShortcuts && this.on(document, "uiBeforeKeyboardShortcut", this.blockKeyboardShortcuts),
                    this.attr.closeOnOtherDialogOpened && this.on(document, "uiDialogOpened", this.closeOtherDialogs),
                    this.attr.openOnPageChanged && this.on(document, "uiPageChanged", this.open),
                    !t && this.$dialogContainer.is(":visible") && (this.initiallyVisible = !0,
                    this.open())
                })
            }
            var r = i("q9/C")
              , a = i("V3w7")
              , s = i("mRBi")
              , u = i("exje")
              , c = i("SGbo")
              , l = i("DMss")
              , d = i("bHbJ")
              , h = i("ekH1");
            i.n(h);
            e.a = o
        }
        ).call(e, i("4kSj"))
    },
    USFV: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[0];
            Promise.all([i.e(0), i.e(4)]).then(function(t) {
                var o = {
                    home: i("oF/X").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    UbJK: function(t, e, i) {
        "use strict";
        function n(t) {
            return function(e, i) {
                var n = Promise.resolve()
                  , u = {};
                return o.a.user.id || e.skipGuestAuth || (n = t.getValue().then(function(t) {
                    u["x-guest-token"] = t
                })),
                n.then(function() {
                    var n = r({}, e);
                    return i(r({}, e, {
                        headers: r({}, e.headers, u)
                    })).then(function(o) {
                        try {
                            var u = JSON.parse(o.body);
                            if (s(u, a) && !e.skipGuestAuth)
                                return t.refresh().then(function(t) {
                                    return i(r({}, n, {
                                        headers: r({}, n.headers, {
                                            "x-guest-token": t
                                        })
                                    }))
                                })
                        } catch (t) {}
                        return o
                    })
                })
            }
        }
        e.a = n;
        var o = i("IAMj")
          , r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
          , a = 239
          , s = function(t, e) {
            if (t.errors && Array.isArray(t.errors))
                return t.errors.find(function(t) {
                    return t.code === e
                })
        }
    },
    UbM7: function(t, e, i) {
        (function(e) {
            function n(t, e, i) {
                e = e || {};
                for (var n in a)
                    e[n] || (e[n] = a[n]);
                return s.render(t, e, i)
            }
            var o = i("Opvs").default
              , r = {
                "search/components/follow_search_button_typeahead": i("n59M")
            }
              , a = o(r)
              , s = new e.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.s(n.f("followed_searches", t, e, 1), t, e, 0, 22, 524, "{{ }}") && (n.rs(t, e, function(t, e, i) {
                        i.b('  <li role="presentation" class="typeahead-item typeahead-followed-search-item">\n    <a\n      role="option"\n      aria-describedby="followed-searches-heading"\n      class="js-nav"\n      href="'),
                        i.b(i.v(i.f("followed_search_path", t, e, 0))),
                        i.b('"\n      data-search-query="'),
                        i.b(i.v(i.f("query", t, e, 0))),
                        i.b('"\n      data-query-source="'),
                        i.b(i.v(i.f("search_query_source", t, e, 0))),
                        i.b('"\n      data-ds="followed_search"\n      tabindex="-1">\n      <span class="typeahead-followed-search-query">'),
                        i.b(i.v(i.f("query", t, e, 0))),
                        i.b("</span>\n    </a>\n"),
                        i.b(i.rp("<search/components/follow_search_button_typeahead0", t, e, "    ")),
                        i.b("  </li>\n")
                    }),
                    t.pop()),
                    n.fl()
                },
                partials: {
                    "<search/components/follow_search_button_typeahead0": {
                        name: "search/components/follow_search_button_typeahead",
                        partials: {},
                        subs: {}
                    }
                },
                subs: {}
            });
            t.exports = {
                template: s,
                partials: a,
                render: n
            }
        }
        ).call(e, i("jTWp"))
    },
    Uimh: function(t, e) {
        !function() {
            for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i)
                window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"],
                window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
                var n = (new Date).getTime()
                  , o = Math.max(0, 16 - (n - t))
                  , r = window.setTimeout(function() {
                    e(n + o)
                }, o);
                return t = n + o,
                r
            }
            ),
            window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            }
            )
        }()
    },
    Ujh8: function(t, e, i) {
        "use strict";
        function n() {
            return function(t, e) {
                var i = t._options
                  , n = function(t) {
                    return o(t, i)
                };
                return e(t).then(n).then(r)
            }
        }
        e.a = n;
        var o = function(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t.headers)
              , i = e && e["content-type"]
              , n = "string" == typeof i && i.indexOf("application/json") >= 0;
            return t.data = n ? t.body ? JSON.parse(t.body) : null : t.body,
            t
        }
          , r = function(t) {
            var e = t.status
              , i = "";
            return i = 204 === e ? "nocontent" : 304 === e ? "notmodified" : e >= 200 && e < 300 ? "success" : "error",
            t.statusText = i,
            t
        }
    },
    UuGF: function(t, e) {
        var i = Math.ceil
          , n = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
        }
    },
    V3w7: function(t, e, i) {
        "use strict";
        (function(t) {
            function i() {
                return t(window)
            }
            e.a = {
                getWindow: i
            }
        }
        ).call(e, i("4kSj"))
    },
    VD6g: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("rY9R"), i("k/l/"), i("CCiT"), i("go26"), i("Jozb")],
        void 0 !== (o = function(t, e, i, n, o) {
            "use strict";
            var r = /^(?:focusinfocus|focusoutblur)$/;
            return t.extend(t.event, {
                trigger: function(a, s, u, c) {
                    var l, d, h, f, p, g, m, v = [u || e], b = o.call(a, "type") ? a.type : a, y = o.call(a, "namespace") ? a.namespace.split(".") : [];
                    if (d = h = u = u || e,
                    3 !== u.nodeType && 8 !== u.nodeType && !r.test(b + t.event.triggered) && (b.indexOf(".") > -1 && (y = b.split("."),
                    b = y.shift(),
                    y.sort()),
                    p = b.indexOf(":") < 0 && "on" + b,
                    a = a[t.expando] ? a : new t.Event(b,"object" == typeof a && a),
                    a.isTrigger = c ? 2 : 3,
                    a.namespace = y.join("."),
                    a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    a.result = void 0,
                    a.target || (a.target = u),
                    s = null == s ? [a] : t.makeArray(s, [a]),
                    m = t.event.special[b] || {},
                    c || !m.trigger || !1 !== m.trigger.apply(u, s))) {
                        if (!c && !m.noBubble && !t.isWindow(u)) {
                            for (f = m.delegateType || b,
                            r.test(f + b) || (d = d.parentNode); d; d = d.parentNode)
                                v.push(d),
                                h = d;
                            h === (u.ownerDocument || e) && v.push(h.defaultView || h.parentWindow || window)
                        }
                        for (l = 0; (d = v[l++]) && !a.isPropagationStopped(); )
                            a.type = l > 1 ? f : m.bindType || b,
                            g = (i.get(d, "events") || {})[a.type] && i.get(d, "handle"),
                            g && g.apply(d, s),
                            (g = p && d[p]) && g.apply && n(d) && (a.result = g.apply(d, s),
                            !1 === a.result && a.preventDefault());
                        return a.type = b,
                        c || a.isDefaultPrevented() || m._default && !1 !== m._default.apply(v.pop(), s) || !n(u) || p && t.isFunction(u[b]) && !t.isWindow(u) && (h = u[p],
                        h && (u[p] = null),
                        t.event.triggered = b,
                        u[b](),
                        t.event.triggered = void 0,
                        h && (u[p] = h)),
                        a.result
                    }
                },
                simulate: function(e, i, n) {
                    var o = t.extend(new t.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    t.event.trigger(o, null, i)
                }
            }),
            t.fn.extend({
                trigger: function(e, i) {
                    return this.each(function() {
                        t.event.trigger(e, i, this)
                    })
                },
                triggerHandler: function(e, i) {
                    var n = this[0];
                    if (n)
                        return t.event.trigger(e, i, n, !0)
                }
            }),
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    VGKQ: function(t, e, i) {
        var n, o;
        n = [i("rY9R"), i("ZWgy")],
        void 0 !== (o = function(t, e) {
            "use strict";
            return function() {
                var i = t.createElement("input")
                  , n = t.createElement("select")
                  , o = n.appendChild(t.createElement("option"));
                i.type = "checkbox",
                e.checkOn = "" !== i.value,
                e.optSelected = o.selected,
                i = t.createElement("input"),
                i.value = "t",
                i.type = "radio",
                e.radioValue = "t" === i.value
            }(),
            e
        }
        .apply(e, n)) && (t.exports = o)
    },
    VZrU: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("9CHI"), i("CCiT")],
        void 0 !== (o = function(t, e, i) {
            "use strict";
            function n() {
                this.expando = t.expando + n.uid++
            }
            return n.uid = 1,
            n.prototype = {
                cache: function(t) {
                    var e = t[this.expando];
                    return e || (e = {},
                    i(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0
                    }))),
                    e
                },
                set: function(e, i, n) {
                    var o, r = this.cache(e);
                    if ("string" == typeof i)
                        r[t.camelCase(i)] = n;
                    else
                        for (o in i)
                            r[t.camelCase(o)] = i[o];
                    return r
                },
                get: function(e, i) {
                    return void 0 === i ? this.cache(e) : e[this.expando] && e[this.expando][t.camelCase(i)]
                },
                access: function(t, e, i) {
                    return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i),
                    void 0 !== i ? i : e)
                },
                remove: function(i, n) {
                    var o, r = i[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== n) {
                            t.isArray(n) ? n = n.map(t.camelCase) : (n = t.camelCase(n),
                            n = n in r ? [n] : n.match(e) || []),
                            o = n.length;
                            for (; o--; )
                                delete r[n[o]]
                        }
                        (void 0 === n || t.isEmptyObject(r)) && (i.nodeType ? i[this.expando] = void 0 : delete i[this.expando])
                    }
                },
                hasData: function(e) {
                    var i = e[this.expando];
                    return void 0 !== i && !t.isEmptyObject(i)
                }
            },
            n
        }
        .apply(e, n)) && (t.exports = o)
    },
    Vg5K: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[1];
            Promise.all([i.e(0), i.e(1)]).then(function(t) {
                var o = {
                    download: i("du85").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    VtWx: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                x || (x = new l.a("XHRNotes"))
            }
            function o() {
                u.default.mixin(this, [y.a, b.a]);
                var e = []
                  , i = [];
                this.CONTENT_TYPES = {
                    APPLICATION_JSON: "application/json; charset=utf-8"
                },
                this.DATA_TYPES = {
                    TEXT: "text",
                    JSON: "json"
                },
                this.defaultAttrs({}),
                this.apiEndpointUrl = function(t) {
                    return D + "/1.1" + t
                }
                ,
                this.isApiRequest = function(t) {
                    return -1 !== t.indexOf(D)
                }
                ,
                this.apiRequestStatsName = function(t) {
                    var e = t && O.exec(t);
                    return e && e[1] ? e[1].split("/").join("_") : "unknown"
                }
                ,
                this.composeData = function(t, e) {
                    return t = t || {},
                    e.eventData && (t.sourceEventData = e.eventData),
                    t
                }
                ,
                this.callSuccessHandler = function(t, e, i) {
                    "function" == typeof t ? t(e) : this.trigger(t, e)
                }
                ,
                this.callErrorHandler = function(t, e, i) {
                    if ("function" == typeof t)
                        return t(e);
                    this.trigger(t, e)
                }
                ,
                this.createJQuerySuccessHandler = function(t) {
                    return function(e, i, n) {
                        var o = i
                          , r = n && n.status
                          , a = n && n.responseText
                          , s = n && "function" == typeof n.getResponseHeader ? n.getResponseHeader : function() {
                            return ""
                        }
                        ;
                        return t({
                            data: e,
                            statusText: o,
                            statusCode: r,
                            responseText: a,
                            responseHeaderGetter: s,
                            xhr: n
                        })
                    }
                }
                ,
                this.createJQueryErrorHandler = function(t) {
                    return function(e, i) {
                        var n = i || e && e.statusText
                          , o = e && e.status
                          , r = e && e.responseText
                          , a = e && "function" == typeof e.getResponseHeader ? e.getResponseHeader : function() {
                            return ""
                        }
                        ;
                        return t({
                            responseHeaderGetter: a,
                            responseText: r,
                            statusCode: o,
                            statusText: n,
                            xhr: e
                        })
                    }
                }
                ,
                this.createSuccessHandler = function(t, i, o) {
                    var r = this;
                    return n(),
                    function(n) {
                        var a = n.data
                          , s = n.responseHeaderGetter
                          , u = n.responseText
                          , c = n.statusCode
                          , l = n.statusText
                          , d = n.xhr
                          , h = a
                          , p = i && i.originalDataType && i.originalDataType.toLowerCase() === r.DATA_TYPES.JSON;
                        if ("string" == typeof a && p)
                            if ("" === u)
                                h = null;
                            else if (!function() {
                                try {
                                    return h = JSON.parse(u),
                                    !0
                                } catch (t) {
                                    return i.requestErrorHandler({
                                        responseHeaderGetter: s,
                                        responseText: u,
                                        statusCode: c,
                                        statusText: l,
                                        xhr: d
                                    }),
                                    !1
                                }
                            }())
                                return;
                        o && o(u),
                        e.splice(e.indexOf(d), 1);
                        var g = void 0;
                        "success" === l && (g = s("Redirect-Page-To")) && "/login" === g && (window.location.href = "/login");
                        var m = h
                          , v = null
                          , b = encodeURIComponent(i.url);
                        if (h && h.hasOwnProperty("note") && h.hasOwnProperty("inner")) {
                            i.returnNotificationData || (m = h.inner),
                            v = h.note;
                            var y = s("x-transaction");
                            y && y !== x.getItem(b) && (v.notCached = !0,
                            x.setItem(b, y))
                        }
                        m = r.composeData(m, i),
                        i.cache_ttl && T.setItem(b, {
                            data: m,
                            time: Date.now()
                        }, i.cache_ttl),
                        t && r.callSuccessHandler(t, m, i),
                        v && (f.a.updateNotificationState(v),
                        v.notCached && r.trigger("dataNotificationsReceived", v)),
                        m.debug && r.trigger("dataSetDebugData", m.debug),
                        i.useOAuthSessionAuth && r.trigger("dataApiStats", {
                            statsName: r.apiRequestStatsName(i.url),
                            status: l,
                            statusCode: c
                        })
                    }
                }
                ,
                this.retryJSONRequestAfterDelay = function(t, e, n) {
                    var o = this
                      , r = setTimeout(function() {
                        return o.JSONRequest(t, e)
                    }, 1e3 * n);
                    i.push(r)
                }
                ,
                this.handleBouncer = function(t) {
                    if (t && t.errors)
                        for (var e = t.errors.length, i = 0; i < e; i++) {
                            var n = t.errors[i];
                            if (n && (326 === n.code || "326" === n.code)) {
                                if (1 === n.sub_error_code || "1" === n.sub_error_code)
                                    this.trigger(document, "dataRequestBounced", {
                                        bounce: n
                                    });
                                else {
                                    var o = n.bounce_location || "/account/access"
                                      , r = document.documentElement.lang || "en";
                                    0 === o.indexOf("https://") ? (o = g.a.addToUrl(o, {
                                        lang: r
                                    }),
                                    this.redirect(o)) : ("/" !== o.charAt(0) && (o = "/" + o),
                                    o = g.a.addToUrl("https://twitter.com" + o, {
                                        lang: r
                                    }),
                                    this.redirect(o))
                                }
                                return !0
                            }
                        }
                    return !1
                }
                ,
                this.redirect = function(t) {
                    window.location = t
                }
                ,
                this.createErrorHandler = function(t, i, n, o, s) {
                    var u = this;
                    return function(c) {
                        var l = c.responseHeaderGetter
                          , d = c.responseText
                          , f = c.statusCode
                          , p = c.statusText
                          , g = c.xhr;
                        s && s(d),
                        e.splice(e.indexOf(g), 1);
                        var m = "function" == typeof l ? parseInt(l("retry-after"), 10) : null;
                        if (i.retryIfUnavailable && 503 === f && m > 0)
                            return n.retryIfUnavailable = !1,
                            void u.retryJSONRequestAfterDelay(n, o, m);
                        var v = void 0;
                        try {
                            if (v = JSON.parse(d),
                            v.xhr = {
                                status: f
                            },
                            u.handleBouncer(v))
                                return;
                            v && v.challengeName ? u.trigger(document, "dataInitialChallengeNeeded", v) : v && v.message && !u.attr.noShowError && u.trigger("uiShowError", v)
                        } catch (t) {
                            v = {
                                xhr: {}
                            },
                            p && (v.xhr.statusText = p),
                            f && (v.xhr.status = f)
                        }
                        v.message || (v.message = Object(r.default)("Internal server error.")),
                        v = u.composeData(v, i);
                        var b = void 0
                          , y = t && u.callErrorHandler(t, v, i);
                        if (i.useOAuthSessionAuth) {
                            var w = Object(h.b)(v)
                              , S = function() {
                                return u.handleApiError(t, w, f, v)
                            };
                            u.trigger("dataApiStats", {
                                statsName: u.apiRequestStatsName(i.url),
                                status: p,
                                statusCode: f,
                                apiErrorName: a.b[w] || "unknown"
                            }),
                            y && "function" == typeof y.then ? y.catch(function() {
                                return b = S()
                            }) : b = S()
                        }
                        return b || Promise.resolve()
                    }
                }
                ,
                this.createCompletionHandler = function(t, e, i) {
                    var n = this;
                    return function(o) {
                        var r = Date.now() - i;
                        n.trigger && n.attr.statsName && n.trigger("dataAjaxDuration", {
                            statsName: n.attr.statsName,
                            statsSubcategory: t.statsSubcategory,
                            duration: r,
                            status: status,
                            url: t.url,
                            requestData: n.sortData(e),
                            responseText: o
                        })
                    }
                }
                ,
                this.sortData = function(t) {
                    if (!t || "object" !== (void 0 === t ? "undefined" : S(t)))
                        return t;
                    var e = {};
                    return Object.keys(t).sort().forEach(function(i) {
                        return e[i] = t[i]
                    }),
                    e
                }
                ,
                this.extractParams = function(t, e) {
                    var i = {}
                      , n = g.a.fromQuery(e);
                    return Object.keys(n).forEach(function(e) {
                        t[e] && (i[e] = n[e])
                    }),
                    i
                }
                ,
                this.getCsrfToken = function() {
                    return Object(c.a)(E)
                }
                ,
                this.JSONRequest = function(i, n) {
                    var o = arguments
                      , r = Date.now()
                      , a = void 0
                      , s = void 0
                      , u = void 0;
                    if (i.retryIfUnavailable && (s = w({}, i),
                    u = n),
                    i.cache_ttl && (T || (T = new C("with_data")),
                    (a = T.getItem(encodeURIComponent(i.url))) && Date.now() - a.time <= i.cache_ttl))
                        return void (i.success && this.callSuccessHandler(i.success, a.data));
                    var c = "POST" === n || "DELETE" === n;
                    c && !1 === i.isMutation && (c = !1),
                    delete i.isMutation,
                    this.trigger && c && this.trigger("dataPageMutated"),
                    ["url"].forEach(function(t) {
                        if (!i.hasOwnProperty(t))
                            throw new Error("getJSONRequest called without required option: " + t,o)
                    });
                    var l = i.data || {};
                    for (var d in l)
                        void 0 === l[d] && delete l[d];
                    if (["GET", "POST"].indexOf(n) < 0 && (l = w({
                        _method: n
                    }, l),
                    n = "POST"),
                    window.DEBUG && window.DEBUG.enabled && "POST" === n && "string" == typeof l)
                        throw new Error("Strings not supported - post data will be lost");
                    "POST" !== n || i.useOAuthSessionAuth || (l = this.addAuthToken(l));
                    var h = w({
                        lang: !0
                    }, i.echoParams);
                    l = t.extend(l, this.extractParams(h, window.location)),
                    t.extend(l, f.a.extraParameters(i.url));
                    var g = this.createCompletionHandler(i, l, r)
                      , b = this.createSuccessHandler(i.success, i, g);
                    i.success = this.createJQuerySuccessHandler(b);
                    var y = this.createErrorHandler(i.error, i, s, u, g);
                    i.requestErrorHandler = y,
                    i.error = this.createJQueryErrorHandler(y),
                    this.attr.includePageContext && this.attr.pageContext && (l.page_context = this.attr.pageContext);
                    var S = {}
                      , x = {};
                    if (i.useOAuthSessionAuth) {
                        var E = this.getCsrfToken();
                        S = {
                            authorization: "Bearer " + k,
                            "x-twitter-auth-type": "OAuth2Session",
                            "x-csrf-token": E
                        },
                        x = {
                            withCredentials: !0
                        }
                    }
                    var O = p.a.pageVisible()
                      , D = void 0 === i.setActiveUserHeader || i.setActiveUserHeader;
                    void 0 !== O && D && (S["X-Twitter-Active-User"] = O);
                    var A = this.sortData(l)
                      , I = i.contentType === this.CONTENT_TYPES.APPLICATION_JSON;
                    i.dataType = i.dataType ? i.dataType : this.DATA_TYPES.JSON,
                    i.originalDataType = i.dataType;
                    var j = i.dataType.toLowerCase() === this.DATA_TYPES.JSON;
                    !v.a.getDecider("disable_ajax_datatype_default_to_text") && j && i.acceptEmptyStringAsJsonResponse && (i.dataType = "text");
                    var P = t.extend(i, {
                        url: i.url,
                        data: I ? JSON.stringify(A) : A,
                        dataType: i.dataType,
                        type: n,
                        headers: t.extend(i.headers, S),
                        xhrFields: t.extend(i.xhrFields, x)
                    });
                    if (i.useHttpClient)
                        return i.successHandler = b,
                        i.errorHandler = y,
                        m.a[i.endpoint](P);
                    var N = t.ajax(P);
                    return i.noAbortOnNavigate || e.push(N),
                    N
                }
                ,
                this.get = function(t) {
                    return this.JSONRequest(t, "GET")
                }
                ,
                this.post = function(t) {
                    return this.JSONRequest(t, "POST")
                }
                ,
                this.destroy = function(t) {
                    return this.JSONRequest(t, "DELETE")
                }
                ,
                this.abortAllXHR = function() {
                    e.forEach(function(t) {
                        return t && t.abort && t.abort()
                    }),
                    e = [],
                    i.forEach(function(t) {
                        return clearTimeout(t)
                    }),
                    i = []
                }
                ,
                this.after("initialize", function() {
                    this.on(document, "dataBeforeNavigate", this.abortAllXHR)
                })
            }
            var r = i("0d4m")
              , a = i("vlyl")
              , s = i("E//N")
              , u = i("q9/C")
              , c = i("dsp6")
              , l = i("WODX")
              , d = i("rWgq")
              , h = i("2Doy")
              , f = i("5VLS")
              , p = i("B68V")
              , g = i("sxXh")
              , m = i("DZ0u")
              , v = i("IAMj")
              , b = i("3DSw")
              , y = i("9np9")
              , w = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            }
              , S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
              , C = Object(d.a)({
                withExpiry: !0
            })
              , T = void 0
              , x = void 0
              , E = "ct0"
              , k = s.a
              , O = /^https:\/\/api\.twitter\.com\/1\.1\/([A-Za-z_\/]+[A-Za-z])(?:\/)?(?:.json)?/
              , D = "https://api.twitter.com";
            e.a = o
        }
        ).call(e, i("4kSj"))
    },
    Vuuo: function(t, e, i) {
        "use strict";
        function n() {
            o.default.mixin(this, [a.a]);
            this.cardAssociationsForData = function(t) {
                var e = {
                    associations: {}
                };
                return e.associations[r.a.platformCardPublisher] = {
                    association_id: t.publisherUserId,
                    association_type: s.a.user
                },
                e.associations[r.a.platformCardCreator] = {
                    association_id: t.creatorUserId,
                    association_type: s.a.user
                },
                e.message = t.cardUrl,
                e
            }
            ,
            this.getCardDataFromContainer = function(t) {
                var e = t.closest("[data-tweet-id], [data-message-id]")
                  , i = void 0
                  , n = void 0
                  , o = {
                    hasCard: e.hasClass("has-cards"),
                    interactionInsideCard: !1,
                    itemTypes: e.hasClass("tweet") ? s.a.tweet : s.a.message
                };
                return e.find(".card2").length ? (o.hasCard2 = !0,
                o.itemId = e.attr("data-item-id") || null,
                o.promotedId = e.attr("data-impression-id") || null,
                i = e.find(".card2"),
                n = i.find(".js-macaw-cards-iframe-container"),
                n.length ? (o.cardName = n.attr("data-card-name"),
                o.itemTypes !== s.a.message && (o.cardUrl = n.attr("data-card-url")),
                o.publisherUserId = n.attr("data-publisher-id"),
                o.creatorUserId = n.attr("data-creator-id"),
                o.amplifyContentId = n.attr("data-amplify-content-id") || null,
                o.amplifyPlaylistUrl = n.attr("data-amplify-playlist-url") || null) : o.cardName = i.attr("data-card2-name"),
                o.interactionInsideCard = !!t.closest(".card2").length) : o.hasCard && (o.cardType = e.data("card-type") || e.find(".js-adaptive-photo").length ? "photo" : ""),
                o
            }
            ,
            this.scribeCardInteraction = function(t, e, i, n) {
                e.hasCard2 ? this.scribeCard2Interaction(t, e, i, n) : e.hasCard && this.scribeClassicCardInteraction(t, e)
            }
            ,
            this.scribeClassicCardInteraction = function(t, e) {
                var i = this.cardAssociationsForData(e)
                  , n = e.cardType ? "platform_" + e.cardType + "_card" : "platform_card";
                this.scribeInteraction({
                    element: n,
                    action: t
                }, e, i)
            }
            ,
            this.getCard2Item = function(t) {
                return {
                    item_type: t.itemTypes,
                    id: t.itemId,
                    promoted_id: t.promotedId,
                    card_type: u.a.plusCard,
                    card_name: t.cardName,
                    card_url: t.cardUrl,
                    card_platform_key: "Swift-6",
                    publisher_id: t.publisherUserId,
                    content_id: t.amplifyContentId,
                    playlist_url: t.amplifyPlaylistUrl
                }
            }
            ,
            this.buildItems = function(t, e) {
                var i = this.getCard2Item(t);
                return "object" === (void 0 === e ? "undefined" : l(e)) && e && (i = c({}, i, e)),
                [i]
            }
            ,
            this.scribeCard2Interaction = function(t, e, i, n) {
                var o = {
                    items: this.buildItems(e, n)
                };
                this.scribeInteraction({
                    element: i || "platform_card",
                    action: t
                }, e, o)
            }
        }
        var o = i("q9/C")
          , r = i("EYxo")
          , a = i("gcfh")
          , s = i("rbkv")
          , u = i("eAms")
          , c = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
          , l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        e.a = n
    },
    W36v: function(t, e, i) {
        var n, o;
        n = [i("Olpr")],
        void 0 !== (o = function(t) {
            "use strict";
            return function(e, i, n) {
                for (var o = [], r = void 0 !== n; (e = e[i]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (r && t(e).is(n))
                            break;
                        o.push(e)
                    }
                return o
            }
        }
        .apply(e, n)) && (t.exports = o)
    },
    WHlL: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("k/l/"), i("KgGA"), i("7p8o")],
        void 0 !== (o = function(t, e) {
            "use strict";
            return t.extend({
                queue: function(i, n, o) {
                    var r;
                    if (i)
                        return n = (n || "fx") + "queue",
                        r = e.get(i, n),
                        o && (!r || t.isArray(o) ? r = e.access(i, n, t.makeArray(o)) : r.push(o)),
                        r || []
                },
                dequeue: function(e, i) {
                    i = i || "fx";
                    var n = t.queue(e, i)
                      , o = n.length
                      , r = n.shift()
                      , a = t._queueHooks(e, i)
                      , s = function() {
                        t.dequeue(e, i)
                    };
                    "inprogress" === r && (r = n.shift(),
                    o--),
                    r && ("fx" === i && n.unshift("inprogress"),
                    delete a.stop,
                    r.call(e, s, a)),
                    !o && a && a.empty.fire()
                },
                _queueHooks: function(i, n) {
                    var o = n + "queueHooks";
                    return e.get(i, o) || e.access(i, o, {
                        empty: t.Callbacks("once memory").add(function() {
                            e.remove(i, [n + "queue", o])
                        })
                    })
                }
            }),
            t.fn.extend({
                queue: function(e, i) {
                    var n = 2;
                    return "string" != typeof e && (i = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? t.queue(this[0], e) : void 0 === i ? this : this.each(function() {
                        var n = t.queue(this, e, i);
                        t._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && t.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        t.dequeue(this, e)
                    })
                },
                clearQueue: function(t) {
                    return this.queue(t || "fx", [])
                },
                promise: function(i, n) {
                    var o, r = 1, a = t.Deferred(), s = this, u = this.length, c = function() {
                        --r || a.resolveWith(s, [s])
                    };
                    for ("string" != typeof i && (n = i,
                    i = void 0),
                    i = i || "fx"; u--; )
                        (o = e.get(s[u], i + "queueHooks")) && o.empty && (r++,
                        o.empty.add(c));
                    return c(),
                    a.promise(n)
                }
            }),
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    WMlg: function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    WNtH: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("rYQx")],
        void 0 !== (o = function(t) {
            "use strict";
            return function(e, i) {
                return e = i || e,
                "none" === e.style.display || "" === e.style.display && t.contains(e.ownerDocument, e) && "none" === t.css(e, "display")
            }
        }
        .apply(e, n)) && (t.exports = o)
    },
    WODX: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.initialize = function(t) {
                    window.DEBUG && window.DEBUG.enabled,
                    this.namespace = t,
                    this.prefix = ["__", this.namespace, "__:"].join(""),
                    this.matcher = new RegExp("^" + this.prefix)
                }
                ,
                this.getItem = function(t) {
                    return this.decode(window.localStorage.getItem(this.prefix + t))
                }
                ,
                this.setItem = function(t, e) {
                    try {
                        return window.localStorage.setItem(this.prefix + t, this.encode(e))
                    } catch (t) {
                        return void (window.DEBUG && window.DEBUG.enabled)
                    }
                }
                ,
                this.removeItem = function(t) {
                    return window.localStorage.removeItem(this.prefix + t)
                }
                ,
                this.keys = function() {
                    for (var t, e = [], i = 0, n = window.localStorage.length; i < n; i++)
                        t = window.localStorage.key(i),
                        t.match(this.matcher) && e.push(t.replace(this.matcher, ""));
                    return e
                }
                ,
                this.clear = function() {
                    this.keys().forEach(function(t) {
                        this.removeItem(t)
                    }, this)
                }
                ,
                this.clearAll = function() {
                    window.localStorage.clear()
                }
            }
            function o() {
                this.initialize = t.noop,
                this.getNodeByKey = function(t) {
                    return null
                }
                ,
                this.getItem = function(t) {
                    return null
                }
                ,
                this.setItem = function(t, e) {
                    return e
                }
                ,
                this.removeItem = function(t) {
                    return null
                }
                ,
                this.keys = function() {
                    return []
                }
                ,
                this.clear = t.noop,
                this.clearAll = t.noop
            }
            function r() {
                this.initialize = function(t) {
                    this.namespace = t,
                    h[this.namespace] || (h[this.namespace] = {}),
                    this.store = h[this.namespace]
                }
                ,
                this.getItem = function(t) {
                    return this.store[t] ? this.decode(this.store[t]) : void 0
                }
                ,
                this.setItem = function(t, e) {
                    return this.store[t] = this.encode(e)
                }
                ,
                this.removeItem = function(t) {
                    delete this.store[t]
                }
                ,
                this.keys = function() {
                    return Object.keys(this.store)
                }
                ,
                this.clear = function() {
                    this.store = h[this.namespace] = {}
                }
                ,
                this.clearAll = function() {
                    h = {}
                }
            }
            function a() {
                s() ? n.call(this) : document.documentElement.addBehavior ? o.call(this) : r.call(this)
            }
            function s() {
                if (void 0 === f)
                    try {
                        window.localStorage.setItem("~~~~", 1),
                        window.localStorage.removeItem("~~~~"),
                        f = !0
                    } catch (t) {
                        f = !1
                    }
                return f
            }
            function u() {
                this.encode = function(t) {
                    return void 0 === t && (t = null),
                    JSON.stringify(t)
                }
                ,
                this.decode = function(t) {
                    try {
                        return JSON.parse(t)
                    } catch (t) {
                        return window.DEBUG && window.DEBUG.enabled,
                        null
                    }
                }
            }
            function c() {
                arguments.length && this.initialize.apply(this, arguments)
            }
            var l = i("q9/C")
              , d = i("GUGq")
              , h = {}
              , f = void 0;
            l.default.mixin(c.prototype, [u, a, d.default.withAdvice]),
            c.clearAll = c.prototype.clearAll,
            e.a = c
        }
        ).call(e, i("4kSj"))
    },
    WXBK: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("RCB8");
        i.n(n)
    },
    Wet5: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[2];
            Promise.all([i.e(0), i.e(2)]).then(function(t) {
                var o = {
                    download: i("tZHu").default,
                    phone: i("GijB").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    X8DO: function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    },
    XcBa: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("6Z94")
          , o = i.n(n);
        e.default = o.a
    },
    XgCd: function(t, e, i) {
        "use strict";
        var n = String.prototype.replace
          , o = /%20/g;
        t.exports = {
            default: "RFC3986",
            formatters: {
                RFC1738: function(t) {
                    return n.call(t, o, "+")
                },
                RFC3986: function(t) {
                    return t
                }
            },
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        }
    },
    Y2CE: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("rY9R"), i("zkvI"), i("KgGA")],
        void 0 !== (o = function(t, e) {
            "use strict";
            function i() {
                e.removeEventListener("DOMContentLoaded", i),
                window.removeEventListener("load", i),
                t.ready()
            }
            var n = t.Deferred();
            t.fn.ready = function(e) {
                return n.then(e).catch(function(e) {
                    t.readyException(e)
                }),
                this
            }
            ,
            t.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? t.readyWait++ : t.ready(!0)
                },
                ready: function(i) {
                    (!0 === i ? --t.readyWait : t.isReady) || (t.isReady = !0,
                    !0 !== i && --t.readyWait > 0 || n.resolveWith(e, [t]))
                }
            }),
            t.ready.then = n.then,
            "complete" === e.readyState || "loading" !== e.readyState && !e.documentElement.doScroll ? window.setTimeout(t.ready) : (e.addEventListener("DOMContentLoaded", i),
            window.addEventListener("load", i))
        }
        .apply(e, n)) && (t.exports = o)
    },
    Y6Nz: function(t, e, i) {
        (function(n) {
            var o, r;
            o = [i("JmAy")],
            void 0 !== (r = function(t) {
                "use strict";
                function e() {
                    var e = t.enabled && !Object.propertyIsEnumerable("getOwnPropertyDescriptor");
                    if (e)
                        try {
                            Object.getOwnPropertyDescriptor(Object, "keys")
                        } catch (t) {
                            return !1
                        }
                    return e
                }
                return {
                    isDomObj: function(t) {
                        return !(!t.nodeType && t !== window)
                    },
                    toArray: function(t, e) {
                        e = e || 0;
                        for (var i = t.length, n = new Array(i - e), o = e; o < i; o++)
                            n[o - e] = t[o];
                        return n
                    },
                    merge: function() {
                        var t = arguments.length
                          , e = new Array(t + 1);
                        if (0 === t)
                            return {};
                        for (var i = 0; i < t; i++)
                            e[i + 1] = arguments[i];
                        return e[0] = {},
                        !0 === e[e.length - 1] && (e.pop(),
                        e.unshift(!0)),
                        n.extend.apply(void 0, e)
                    },
                    push: function(t, e, i) {
                        return t && Object.keys(e || {}).forEach(function(n) {
                            if (t[n] && i)
                                throw new Error('utils.push attempted to overwrite "' + n + '" while running in protected mode');
                            "object" == typeof t[n] && "object" == typeof e[n] ? this.push(t[n], e[n]) : t[n] = e[n]
                        }, this),
                        t
                    },
                    getEnumerableProperty: function(t, e) {
                        return t.propertyIsEnumerable(e) ? t[e] : void 0
                    },
                    compose: function() {
                        var t = arguments;
                        return function() {
                            for (var e = arguments, i = t.length - 1; i >= 0; i--)
                                e = [t[i].apply(this, e)];
                            return e[0]
                        }
                    },
                    uniqueArray: function(t) {
                        for (var e = {}, i = [], n = 0, o = t.length; n < o; ++n)
                            e.hasOwnProperty(t[n]) || (i.push(t[n]),
                            e[t[n]] = 1);
                        return i
                    },
                    debounce: function(t, e, i) {
                        "number" != typeof e && (e = 100);
                        var n, o;
                        return function() {
                            var r = this
                              , a = arguments
                              , s = function() {
                                n = null,
                                i || (o = t.apply(r, a))
                            }
                              , u = i && !n;
                            return n && clearTimeout(n),
                            n = setTimeout(s, e),
                            u && (o = t.apply(r, a)),
                            o
                        }
                    },
                    throttle: function(t, e) {
                        "number" != typeof e && (e = 100);
                        var i, n, o, r, a, s, u = this.debounce(function() {
                            a = r = !1
                        }, e);
                        return function() {
                            i = this,
                            n = arguments;
                            var c = function() {
                                o = null,
                                a && (s = t.apply(i, n)),
                                u()
                            };
                            return o || (o = setTimeout(c, e)),
                            r ? a = !0 : (r = !0,
                            s = t.apply(i, n)),
                            u(),
                            s
                        }
                    },
                    countThen: function(t, e) {
                        return function() {
                            if (!--t)
                                return e.apply(this, arguments)
                        }
                    },
                    delegate: function(t) {
                        return function(e, i) {
                            var o, r = n(e.target);
                            Object.keys(t).forEach(function(n) {
                                if (!e.isPropagationStopped() && (o = r.closest(n)).length)
                                    return i = i || {},
                                    i.el = o[0],
                                    t[n].apply(this, [e, i])
                            }, this)
                        }
                    },
                    once: function(t) {
                        var e, i;
                        return function() {
                            return e ? i : (e = !0,
                            i = t.apply(this, arguments))
                        }
                    },
                    propertyWritability: function(t, i, n) {
                        e() && t.hasOwnProperty(i) && Object.defineProperty(t, i, {
                            writable: n
                        })
                    },
                    mutateProperty: function(t, i, n) {
                        var o;
                        if (!e() || !t.hasOwnProperty(i))
                            return void n.call(t);
                        o = Object.getOwnPropertyDescriptor(t, i).writable,
                        Object.defineProperty(t, i, {
                            writable: !0
                        }),
                        n.call(t),
                        Object.defineProperty(t, i, {
                            writable: o
                        })
                    }
                }
            }
            .apply(e, o)) && (t.exports = r)
        }
        ).call(e, i("4kSj"))
    },
    YXmp: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("x8As"), i("LTWT"), i("hnYP"), i("TLAG"), i("rYQx")],
        void 0 !== (o = function(t, e, i, n, o) {
            "use strict";
            function r(r, a, s) {
                var u, c, l, d, h = r.style;
                return s = s || n(r),
                s && (d = s.getPropertyValue(a) || s[a],
                "" !== d || t.contains(r.ownerDocument, r) || (d = t.style(r, a)),
                !o.pixelMarginRight() && e.test(d) && i.test(a) && (u = h.width,
                c = h.minWidth,
                l = h.maxWidth,
                h.minWidth = h.maxWidth = h.width = d,
                d = s.width,
                h.width = u,
                h.minWidth = c,
                h.maxWidth = l)),
                void 0 !== d ? d + "" : d
            }
            return r
        }
        .apply(e, n)) && (t.exports = o)
    },
    YZXk: function(t, e, i) {
        (function(e) {
            t.exports = new e.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.b('<div id="mute-conversation-dialog" class="EducationDialog EducationDialog--muteConversation modal-container">\n  <div class="modal modal-large EducationDialog-modal">\n    <div class="modal-content">\n      <div class="modal-body">\n        <div class="EducationDialog-graphic"></div>\n        <p class="EducationDialog-text">\n          When you mute a conversation, you won\'t get any new notifications about it.\n          <a href="//support.twitter.com/articles/20175032" target="_blank" class="learn-more" rel="noopener">Learn more</a>\n        </p>\n        <button class="EdgeButton EdgeButton--primary EducationDialog-button MuteConversationDialog-button">Yes, mute this</button>\n        <br>\n        <button class="btn btn-link EducationDialog-button js-close">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n'),
                    n.fl()
                },
                partials: {},
                subs: {}
            })
        }
        ).call(e, i("jTWp"))
    },
    Yg0w: function(t, e, i) {
        var n, o;
        n = [i("kdUt")],
        void 0 !== (o = function(t) {
            "use strict";
            return new RegExp("^(?:([+-])=|)(" + t + ")([a-z%]*)$","i")
        }
        .apply(e, n)) && (t.exports = o)
    },
    Yobk: function(t, e, i) {
        var n = i("77Pl")
          , o = i("qio6")
          , r = i("xnc9")
          , a = i("ax3d")("IE_PROTO")
          , s = function() {}
          , u = function() {
            var t, e = i("ON07")("iframe"), n = r.length;
            for (e.style.display = "none",
            i("RPLV").appendChild(e),
            e.src = "javascript:",
            t = e.contentWindow.document,
            t.open(),
            t.write("<script>document.F=Object<\/script>"),
            t.close(),
            u = t.F; n--; )
                delete u.prototype[r[n]];
            return u()
        };
        t.exports = Object.create || function(t, e) {
            var i;
            return null !== t ? (s.prototype = n(t),
            i = new s,
            s.prototype = null,
            i[a] = t) : i = u(),
            void 0 === e ? i : o(i, e)
        }
    },
    YzIt: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("Y6Nz")
          , o = i.n(n);
        e.default = o.a
    },
    ZRHz: function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                magnifyingGlassSelector: ".js-search-action",
                inputFieldSelector: "#search-query",
                searchBoxQuery: "",
                searchPathWithQuery: "/search?q=query&src=typd",
                focusClass: "focus"
            }),
            this.addFocusStyles = function(t) {
                this.$node.addClass(this.attr.focusClass),
                this.$input.addClass(this.attr.focusClass),
                this.trigger("uiSearchInputFocused")
            }
            ,
            this.removeFocusStyles = function(t) {
                this.$node.removeClass(this.attr.focusClass),
                this.$input.removeClass(this.attr.focusClass)
            }
            ,
            this.executeTypeaheadSelection = function(t, e) {
                "account" !== e.source && this.$input.val(e.display),
                e.isClick || (this.trigger("uiNavigate", {
                    href: e.href
                }),
                this.$input.blur())
            }
            ,
            this.submitQuery = function(t, e) {
                this.trigger("uiSearchQuery", {
                    query: e.query,
                    source: "search"
                }),
                this.trigger("uiNavigate", {
                    href: this.attr.searchPathWithQuery.replace("query", encodeURIComponent(e.query))
                }),
                this.$input.blur()
            }
            ,
            this.searchFormSubmit = function(t, e) {
                t.preventDefault(),
                this.trigger(this.$input, "uiTypeaheadInputSubmit")
            }
            ,
            this.after("initialize", function() {
                this.$input = this.select("inputFieldSelector"),
                this.$input[0] === document.activeElement || this.$input.val() || this.$input.val(this.attr.searchBoxQuery),
                this.on("uiTypeaheadItemSelected", this.executeTypeaheadSelection),
                this.on("uiTypeaheadSubmitQuery", this.submitQuery),
                this.on(this.$input, "focus", this.addFocusStyles),
                this.on(this.$input, "blur", this.removeFocusStyles),
                this.on("submit", this.searchFormSubmit),
                this.on(this.select("magnifyingGlassSelector"), "click", this.searchFormSubmit)
            })
        }
        var o = i("DBjh");
        e.a = Object(o.default)(n)
    },
    ZVYm: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    typeaheadItemClass: "typeahead-item",
                    trendLocationsListSelector: ".typeahead-trend-locations-list",
                    trendLocationsItemSelector: ".typeahead-trend-locations-item",
                    datasources: ["trendLocations"]
                }),
                this.renderTrendLocations = function(t, e) {
                    this.$trendLocationsList.empty();
                    var i = [];
                    this.attr.datasources.forEach(function(t) {
                        return i = i.concat(e.suggestions[t] || [])
                    }),
                    i.forEach(function(t) {
                        var e = this.$trendLocationItemTemplate.clone(!1)
                          , i = e.find("a");
                        e.data("item", t),
                        i.attr("data-search-query", t.name),
                        i.attr("href", "#"),
                        i.append(this.getLocationHtml(t)),
                        -1 === t.woeid && (e.removeClass(this.attr.typeaheadItemClass),
                        i.attr("data-search-query", "")),
                        e.appendTo(this.$trendLocationsList)
                    }, this)
                }
                ,
                this.getLocationHtml = function(e) {
                    var i = t("<span>");
                    switch (e.placeTypeCode) {
                    case a.WORLDWIDE:
                    case a.NOT_FOUND:
                        i.text(e.name);
                        break;
                    case a.COUNTRY:
                        i.html(e.name + "  " + Object(r.default)("(All cities)"));
                        break;
                    default:
                        i.text([e.name, e.countryName].join(", "))
                    }
                    return i
                }
                ,
                this.after("initialize", function() {
                    this.$trendLocationItemTemplate = this.select("trendLocationsItemSelector").clone(!1),
                    this.$trendLocationsList = this.select("trendLocationsListSelector"),
                    this.on("uiTypeaheadRenderResults", this.renderTrendLocations)
                })
            }
            var o = i("DBjh")
              , r = i("0d4m");
            e.a = Object(o.default)(n);
            var a = {
                WORLDWIDE: 19,
                COUNTRY: 12,
                CITY: 7,
                NOT_FOUND: -1
            }
        }
        ).call(e, i("4kSj"))
    },
    ZWgy: function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return {}
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    Ziu4: function(t, e, i) {
        "use strict";
        function n(t) {
            r.a.attachTo(".global-nav", {
                noTeardown: !0
            }),
            o.a.attachTo(".dm-nav", {
                noTeardown: !0
            }),
            c.a.attachTo("#global-nav-search", m({}, t, {
                eventData: {
                    scribeContext: {
                        component: "top_bar_searchbox",
                        element: ""
                    }
                }
            })),
            l.a.attachTo("#global-nav-search", {
                noTeardown: !0
            });
            var e = [["recentSearches", ["recentSearches"]], ["followedSearches", ["followedSearches"]], ["savedSearches", ["savedSearches"]], ["topics", ["topics"]], ["accounts", ["accounts"]]];
            t.typeaheadData.accountsOnTop && (e = [["recentSearches", ["recentSearches"]], ["followedSearches", ["followedSearches"]], ["savedSearches", ["savedSearches"]], ["accounts", ["accounts"]], ["topics", ["topics"]]]),
            p.a.attachTo("#global-nav-search"),
            f.a.attachTo("#global-nav-search", {
                datasourceRenders: e,
                accountsShortcutShow: !0,
                autocompleteAccounts: !1,
                parseHashflags: !0,
                typeaheadSrc: "SEARCH_BOX",
                deciders: m({}, t.typeaheadData, {
                    showSocialContext: t.typeaheadData.showSearchAccountSocialContext
                }),
                eventData: {
                    scribeContext: {
                        component: "top_bar_searchbox",
                        element: "typeahead"
                    }
                }
            }),
            t.loggedIn ? g.a.attachTo("#user-dropdown", {
                noTeardown: !0,
                signout: "#signout-button",
                signoutForm: "#signout-form",
                keyboardShortcuts: ".js-keyboard-shortcut-trigger",
                dmCount: ".js-direct-message-count",
                glowClass: "new"
            }) : t.passwordResetAdvancedLoginForm && a.a.attachTo(".signin-dialog-body"),
            t.loggedIn || d.a.attachTo(".js-session"),
            u.a.attachTo(".global-nav", {
                noTeardown: !0,
                eventData: {
                    scribeContext: {
                        component: "top_bar"
                    }
                }
            }),
            h.a.attachTo(".topbar"),
            s.a.attachTo(".signin-dialog-body")
        }
        var o = i("5KY3")
          , r = i("ssKs")
          , a = i("oV37")
          , s = i("3Dhe")
          , u = i("y9Hg")
          , c = i("ZRHz")
          , l = i("nrgU")
          , d = i("6jrG")
          , h = i("6lLu")
          , f = i("cCv7")
          , p = i("aRgS")
          , g = i("xOay")
          , m = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
        ;
        e.a = n
    },
    ZoCq: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("DdOc"), i("VGKQ"), i("9CHI"), i("rYQx")],
        void 0 !== (o = function(t, e, i, n) {
            "use strict";
            var o, r = t.expr.attrHandle;
            t.fn.extend({
                attr: function(i, n) {
                    return e(this, t.attr, i, n, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        t.removeAttr(this, e)
                    })
                }
            }),
            t.extend({
                attr: function(e, i, n) {
                    var r, a, s = e.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s)
                        return void 0 === e.getAttribute ? t.prop(e, i, n) : (1 === s && t.isXMLDoc(e) || (a = t.attrHooks[i.toLowerCase()] || (t.expr.match.bool.test(i) ? o : void 0)),
                        void 0 !== n ? null === n ? void t.removeAttr(e, i) : a && "set"in a && void 0 !== (r = a.set(e, n, i)) ? r : (e.setAttribute(i, n + ""),
                        n) : a && "get"in a && null !== (r = a.get(e, i)) ? r : (r = t.find.attr(e, i),
                        null == r ? void 0 : r))
                },
                attrHooks: {
                    type: {
                        set: function(e, n) {
                            if (!i.radioValue && "radio" === n && t.nodeName(e, "input")) {
                                var o = e.value;
                                return e.setAttribute("type", n),
                                o && (e.value = o),
                                n
                            }
                        }
                    }
                },
                removeAttr: function(t, e) {
                    var i, o = 0, r = e && e.match(n);
                    if (r && 1 === t.nodeType)
                        for (; i = r[o++]; )
                            t.removeAttribute(i)
                }
            }),
            o = {
                set: function(e, i, n) {
                    return !1 === i ? t.removeAttr(e, n) : e.setAttribute(n, n),
                    n
                }
            },
            t.each(t.expr.match.bool.source.match(/\w+/g), function(e, i) {
                var n = r[i] || t.find.attr;
                r[i] = function(t, e, i) {
                    var o, a, s = e.toLowerCase();
                    return i || (a = r[s],
                    r[s] = o,
                    o = null != n(t, e, i) ? s : null,
                    r[s] = a),
                    o
                }
            })
        }
        .apply(e, n)) && (t.exports = o)
    },
    Zrlr: function(t, e, i) {
        "use strict";
        e.__esModule = !0,
        e.default = function(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
    },
    Zz8R: function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                scribeContext: {
                    component: "block_dialog"
                }
            }),
            this.getScribeElement = function(t) {
                return "user" === t.target ? "user" : "tweet"
            }
            ,
            this.scribeBlockDialogImpression = function(t, e) {
                var i = {
                    element: this.getScribeElement(e),
                    action: "impression"
                }
                  , n = a({}, this.attr.scribeContext, i);
                this.scribeInteraction(n, e)
            }
            ,
            this.scribeBlockDialogCancel = function(t, e) {
                var i = {
                    element: this.getScribeElement(e),
                    action: "cancel"
                }
                  , n = a({}, this.attr.scribeContext, i);
                this.scribeInteraction(n, e)
            }
            ,
            this.after("initialize", function() {
                this.on("uiNeedsBlockDialog", this.scribeBlockDialogImpression),
                this.on("uiBlockDialogCancel", this.scribeBlockDialogCancel)
            })
        }
        var o = i("DBjh")
          , r = i("gcfh")
          , a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
        ;
        e.a = Object(o.default)(n, r.a)
    },
    a1Jc: function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return window.location
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    a6WQ: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("T51W")],
        void 0 !== (o = function(t, e) {
            "use strict";
            t.find = e,
            t.expr = e.selectors,
            t.expr[":"] = t.expr.pseudos,
            t.uniqueSort = t.unique = e.uniqueSort,
            t.text = e.getText,
            t.isXMLDoc = e.isXML,
            t.contains = e.contains,
            t.escapeSelector = e.escape
        }
        .apply(e, n)) && (t.exports = o)
    },
    aI9I: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("k/l/"), i("c7Hc"), i("Jozb"), i("VD6g")],
        void 0 !== (o = function(t, e, i) {
            "use strict";
            return i.focusin || t.each({
                focus: "focusin",
                blur: "focusout"
            }, function(i, n) {
                var o = function(e) {
                    t.event.simulate(n, e.target, t.event.fix(e))
                };
                t.event.special[n] = {
                    setup: function() {
                        var t = this.ownerDocument || this
                          , r = e.access(t, n);
                        r || t.addEventListener(i, o, !0),
                        e.access(t, n, (r || 0) + 1)
                    },
                    teardown: function() {
                        var t = this.ownerDocument || this
                          , r = e.access(t, n) - 1;
                        r ? e.access(t, n, r) : (t.removeEventListener(i, o, !0),
                        e.remove(t, n))
                    }
                }
            }),
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    aItA: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("KgGA")],
        void 0 !== (o = function(t) {
            "use strict";
            var e = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            t.Deferred.exceptionHook = function(t, i) {
                window.console && window.console.warn && t && e.test(t.name) && window.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
            }
        }
        .apply(e, n)) && (t.exports = o)
    },
    aRgS: function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                inputSelector: "#search-query",
                buttonSelector: ".nav-search",
                dropdownSelectedItemSelector: ".typeahead-items li.selected",
                completeAllEntities: !1,
                completeAllText: !1,
                includeTweetContext: !1,
                tweetContextEnabled: !1,
                allowAccountsWithoutAtSign: !1,
                inputIsTweetbox: !1,
                allowIdenticalAccountToTriggerComplete: !1
            }),
            this.getDefaultKeycodes = function() {
                return {
                    13: {
                        name: "ENTER",
                        event: "uiTypeaheadInputSubmit",
                        on: "keypress",
                        preventDefault: !0,
                        enabled: !0
                    },
                    9: {
                        name: "TAB",
                        event: "uiTypeaheadInputTab",
                        on: "keydown",
                        preventDefault: !0,
                        canCauseComplete: !0,
                        enabled: !0
                    },
                    37: {
                        name: "LEFT",
                        event: "uiTypeaheadInputLeft",
                        on: "keydown",
                        canCauseComplete: !0,
                        enabled: !0
                    },
                    39: {
                        name: "RIGHT",
                        event: "uiTypeaheadInputRight",
                        on: "keydown",
                        canCauseComplete: !0,
                        enabled: !0
                    },
                    38: {
                        name: "UP",
                        event: "uiTypeaheadInputMoveUp",
                        on: "keydown",
                        preventDefault: !0,
                        enabled: !0
                    },
                    40: {
                        name: "DOWN",
                        event: "uiTypeaheadInputMoveDown",
                        on: "keydown",
                        preventDefault: !0,
                        enabled: !0
                    }
                }
            }
            ,
            this.setPreventKeyDefault = function(t, e) {
                this.KEY_CODE_MAP[e.key].preventDefault = e.preventDefault
            }
            ,
            this.toggleTextareaActions = function(t) {
                this.KEY_CODE_MAP[13].enabled = t,
                this.KEY_CODE_MAP[38].enabled = t,
                this.KEY_CODE_MAP[40].enabled = t
            }
            ,
            this.enableTextareaActionWatching = function() {
                this.toggleTextareaActions(!0)
            }
            ,
            this.disableTextareaActionWatching = function() {
                this.toggleTextareaActions(!1)
            }
            ,
            this.clearCurrentQuery = function(t) {
                this.currentQuery = null
            }
            ,
            this.focusInput = function(t) {
                this.$input.focus()
            }
            ,
            this.click = function(t) {
                this.updateCaretPosition()
            }
            ,
            this.ignoreNextFocus = function(t) {
                this.ignoreFocus = !0
            }
            ,
            this.updateCaretPosition = function() {
                if (this.ignoreFocus)
                    return void (this.ignoreFocus = !1);
                this.richTextareaMode || this.trigger(this.$input, "uiTextChanged", {
                    text: this.$input.val(),
                    position: r.a.getPosition(this.$input[0])
                })
            }
            ,
            this.modifierKeyPressed = function(t) {
                var e = this.KEY_CODE_MAP[t.which || t.keyCode]
                  , i = "keydown" === t.type && 16 === t.which || "keyup" === t.type && 16 === t.which;
                if (e && e.enabled) {
                    if (t.type !== e.on)
                        return;
                    if ("TAB" === e.name && t.shiftKey)
                        return;
                    if (this.releaseTabKey && "TAB" === e.name)
                        return;
                    if (e.preventDefault)
                        if (this.attr.inputIsTweetbox && "ENTER" === e.name) {
                            var n = this.select("dropdownSelectedItemSelector");
                            n.length && t.preventDefault()
                        } else
                            t.preventDefault();
                    e.canCauseComplete && this.isValidCompletionAction(e.event) && (this.textareaMode || (this.releaseTabKey = !0),
                    this.trigger(this.$input, "uiTypeaheadInputAutocomplete")),
                    this.trigger(this.$input, e.event),
                    this.updateCaretPosition()
                } else {
                    if (27 === t.keyCode)
                        return;
                    i || (this.releaseTabKey = !1),
                    this.supportsInputEvent || this.handleInputChange(t)
                }
            }
            ,
            this.handleInputChange = function(t) {
                this.richTextareaMode || (d.a.onTextChange(t),
                this.trigger(this.$input, "uiTextChanged", {
                    text: this.$input.val(),
                    position: r.a.getPosition(this.$input[0])
                }))
            }
            ,
            this.getCurrentWord = function() {
                var t = void 0;
                if (this.textareaMode && !this.attr.completeAllText) {
                    l.a.extractEntitiesWithIndices(this.text).forEach(function(e) {
                        var i = e.screenName && !e.listSlug
                          , n = this.attr.completeAllEntities && (e.cashtag || e.hashtag)
                          , o = this.position > e.indices[0] && this.position <= e.indices[1];
                        (i || n) && o && (t = this.text.slice(e.indices[0], e.indices[1]))
                    }, this),
                    this.attr.allowAccountsWithoutAtSign && !t && (t = this.getCurrentWordUsingRegex(w) || this.getCurrentWordUsingRegex(S))
                } else
                    t = "" === this.text.trim() ? "" : this.text;
                return t ? d.a.cleanText(t) : ""
            }
            ,
            this.getCurrentWordUsingRegex = function(t) {
                var e = u.a.wordAtPosition(this.text, this.position, t, 1);
                if (e) {
                    if (e.split(/\s+/).every(function(t) {
                        var e = s.a.getFirstChar(t);
                        return e === e.toUpperCase()
                    }))
                        return e
                }
            }
            ,
            this.completeInput = function(t, e) {
                t.stopPropagation();
                var i = e.value || e.query
                  , n = "account" !== e.source || e.item.screen_name !== this.currentQuery || this.attr.allowIdenticalAccountToTriggerComplete;
                if (i !== this.currentQuery && n) {
                    var o = i;
                    if ("account" === e.source && (o = (this.textareaMode ? "@" : "") + e.item.screen_name,
                    this.currentQuery = e.item.screen_name),
                    this.textareaMode) {
                        var r = this.replaceWordAtPosition(this.text, this.position, e.input, o + " ");
                        this.$input.trigger("uiChangeTextAndPosition", r),
                        this.richTextareaMode && "uiTypeaheadItemSelected" !== t.type || this.$input.focus()
                    } else
                        "account" !== e.source && this.$input.val(o),
                        "uiTypeaheadItemSelected" !== t.type && (this.$input.focus(),
                        this.setQuery(o));
                    e.fromSelectionEvent = "uiTypeaheadItemSelected" === t.type,
                    this.trigger(this.$input, "uiTypeaheadItemComplete", e)
                }
            }
            ,
            this.replaceWordAtPosition = function(t, e, i, n) {
                var o = null;
                return i = i.replace(y, function(t) {
                    return "\\" + t
                }),
                t = t.replace(new RegExp(i + "\\s?","g"), function() {
                    var t = arguments[0]
                      , i = arguments[arguments.length - 2];
                    return i <= e && i + t.length >= e ? (o = i + n.length,
                    n) : t
                }),
                {
                    text: t,
                    position: o
                }
            }
            ,
            this.isValidCompletionAction = function(t) {
                var e = "rtl" === this.$input.attr("dir");
                return (!this.textareaMode || "uiTypeaheadInputRight" !== t && "uiTypeaheadInputLeft" !== t) && ((!e || "uiTypeaheadInputRight" !== t) && (!(!e && "uiTypeaheadInputLeft" === t) && (!this.text || this.position === this.text.length || !("uiTypeaheadInputRight" === t || e && "uiTypeaheadInputLeft" === t))))
            }
            ,
            this.setQuery = function(t) {
                var e = void 0;
                if (null == this.currentQuery || this.currentQuery !== t) {
                    this.currentQuery = t,
                    e = t.length > 0 ? 0 : -1,
                    this.$button.attr("tabIndex", e);
                    var i = this.attr.tweetContextEnabled && this.attr.includeTweetContext ? this.text : void 0;
                    this.trigger(this.$input, "uiTypeaheadInputChanged", {
                        value: this.currentQuery,
                        tweetContext: i
                    })
                }
            }
            ,
            this.setRTLMarkers = function() {
                d.a.setText(this.$input.get(0))
            }
            ,
            this.clearInput = function() {
                this.$input.val(""),
                this.clearCurrentQuery(),
                this.$button.attr("tabIndex", -1),
                this.releaseTabKey = !1
            }
            ,
            this.saveTextAndPosition = function(t, e) {
                this.text = e.text,
                this.position = e.position;
                var i = this.getCurrentWord();
                this.setQuery(i)
            }
            ,
            this.savePosition = function(t, e) {
                if (this.position = e.position,
                this.textareaMode && this.currentQuery) {
                    this.getCurrentWord() !== this.currentQuery && this.setQuery("")
                }
            }
            ,
            this.after("initialize", function() {
                this.$input = this.select("inputSelector"),
                this.textareaMode = !this.$input.is("input"),
                this.richTextareaMode = this.$input.is(".rich-editor"),
                this.$button = this.select("buttonSelector"),
                this.KEY_CODE_MAP = this.getDefaultKeycodes(),
                this.richTextareaMode && this.disableTextareaActionWatching(),
                this.supportsInputEvent = a.a.browserSupports("input", "input"),
                this.$button.attr("tabIndex", -1),
                this.on(this.$input, "keyup keydown keypress paste", this.modifierKeyPressed),
                this.on(this.$input, "input", this.handleInputChange),
                this.on(this.$input, "focus", this.updateCaretPosition),
                this.on("uiTypeaheadSelectionCleared", this.updateCaretPosition),
                this.on(this.$input, "uiTypeaheadIgnoreNextFocus", this.ignoreNextFocus),
                this.$input.is(":focus") && this.updateCaretPosition(),
                this.on(this.$input, "blur", this.clearCurrentQuery),
                this.textareaMode && (this.on(this.$input, "click", this.click),
                this.on("uiTypeaheadResultsShown", this.enableTextareaActionWatching),
                this.on("uiTypeaheadResultsHidden", this.disableTextareaActionWatching)),
                this.on("uiTextChanged", this.saveTextAndPosition),
                this.on("uiCursorPositionChanged", this.savePosition),
                this.on(document, "uiBeforePageChanged", this.clearInput),
                this.on("uiTypeaheadSetPreventDefault", this.setPreventKeyDefault),
                this.on(document, "uiSwiftLoaded uiPageChanged", this.setRTLMarkers),
                this.on("uiTypeaheadItemPossiblyComplete uiTypeaheadItemSelected", this.completeInput)
            })
        }
        var o = i("DBjh")
          , r = i("mJ5M")
          , a = i("pHim")
          , s = i("pFsH")
          , u = i("lUIe")
          , c = i("xK4V")
          , l = i.n(c)
          , d = i("mzT9");
        e.a = Object(o.default)(n);
        var h = function(t, e, i) {
            return i = i || "",
            "string" != typeof t && (t.global && i.indexOf("g") < 0 && (i += "g"),
            t.ignoreCase && i.indexOf("i") < 0 && (i += "i"),
            t.multiline && i.indexOf("m") < 0 && (i += "m"),
            t = t.source),
            new RegExp(t.replace(/#\{(\w+)\}/g, function(t, i) {
                var n = e[i] || "";
                return "string" != typeof n && (n = n.source),
                n
            }),i)
        }
          , f = /a-z\xb5\xdf-\xf6\xf8-\xff\u0101\u0103\u0105\u0107\u0109\u010b\u010d\u010f\u0111\u0113\u0115\u0117\u0119\u011b\u011d\u011f\u0121\u0123\u0125\u0127\u0129\u012b\u012d\u012f\u0131\u0133\u0135\u0137\u0138\u013a\u013c\u013e\u0140\u0142\u0144\u0146\u0148\u0149\u014b\u014d\u014f\u0151\u0153\u0155\u0157\u0159\u015b\u015d\u015f\u0161\u0163\u0165\u0167\u0169\u016b\u016d\u016f\u0171\u0173\u0175\u0177\u017a\u017c\u017e-\u0180\u0183\u0185\u0188\u018c\u018d\u0192\u0195\u0199-\u019b\u019e\u01a1\u01a3\u01a5\u01a8\u01aa\u01ab\u01ad\u01b0\u01b4\u01b6\u01b9\u01ba\u01bd-\u01bf\u01c6\u01c9\u01cc\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da\u01dc\u01dd\u01df\u01e1\u01e3\u01e5\u01e7\u01e9\u01eb\u01ed\u01ef\u01f0\u01f3\u01f5\u01f9\u01fb\u01fd\u01ff\u0201\u0203\u0205\u0207\u0209\u020b\u020d\u020f\u0211\u0213\u0215\u0217\u0219\u021b\u021d\u021f\u0221\u0223\u0225\u0227\u0229\u022b\u022d\u022f\u0231\u0233-\u0239\u023c\u023f\u0240\u0242\u0247\u0249\u024b\u024d\u024f-\u0293\u0295-\u02af\u0371\u0373\u0377\u037b-\u037d\u0390\u03ac-\u03ce\u03d0\u03d1\u03d5-\u03d7\u03d9\u03db\u03dd\u03df\u03e1\u03e3\u03e5\u03e7\u03e9\u03eb\u03ed\u03ef-\u03f3\u03f5\u03f8\u03fb\u03fc\u0430-\u045f\u0461\u0463\u0465\u0467\u0469\u046b\u046d\u046f\u0471\u0473\u0475\u0477\u0479\u047b\u047d\u047f\u0481\u048b\u048d\u048f\u0491\u0493\u0495\u0497\u0499\u049b\u049d\u049f\u04a1\u04a3\u04a5\u04a7\u04a9\u04ab\u04ad\u04af\u04b1\u04b3\u04b5\u04b7\u04b9\u04bb\u04bd\u04bf\u04c2\u04c4\u04c6\u04c8\u04ca\u04cc\u04ce\u04cf\u04d1\u04d3\u04d5\u04d7\u04d9\u04db\u04dd\u04df\u04e1\u04e3\u04e5\u04e7\u04e9\u04eb\u04ed\u04ef\u04f1\u04f3\u04f5\u04f7\u04f9\u04fb\u04fd\u04ff\u0501\u0503\u0505\u0507\u0509\u050b\u050d\u050f\u0511\u0513\u0515\u0517\u0519\u051b\u051d\u051f\u0521\u0523\u0525\u0527\u0529\u052b\u052d\u052f\u0561-\u0587\u1d00-\u1d2b\u1d6b-\u1d77\u1d79-\u1d9a\u1e01\u1e03\u1e05\u1e07\u1e09\u1e0b\u1e0d\u1e0f\u1e11\u1e13\u1e15\u1e17\u1e19\u1e1b\u1e1d\u1e1f\u1e21\u1e23\u1e25\u1e27\u1e29\u1e2b\u1e2d\u1e2f\u1e31\u1e33\u1e35\u1e37\u1e39\u1e3b\u1e3d\u1e3f\u1e41\u1e43\u1e45\u1e47\u1e49\u1e4b\u1e4d\u1e4f\u1e51\u1e53\u1e55\u1e57\u1e59\u1e5b\u1e5d\u1e5f\u1e61\u1e63\u1e65\u1e67\u1e69\u1e6b\u1e6d\u1e6f\u1e71\u1e73\u1e75\u1e77\u1e79\u1e7b\u1e7d\u1e7f\u1e81\u1e83\u1e85\u1e87\u1e89\u1e8b\u1e8d\u1e8f\u1e91\u1e93\u1e95-\u1e9d\u1e9f\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ebf\u1ec1\u1ec3\u1ec5\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9\u1efb\u1efd\u1eff-\u1f07\u1f10-\u1f15\u1f20-\u1f27\u1f30-\u1f37\u1f40-\u1f45\u1f50-\u1f57\u1f60-\u1f67\u1f70-\u1f7d\u1f80-\u1f87\u1f90-\u1f97\u1fa0-\u1fa7\u1fb0-\u1fb4\u1fb6\u1fb7\u1fbe\u1fc2-\u1fc4\u1fc6\u1fc7\u1fd0-\u1fd3\u1fd6\u1fd7\u1fe0-\u1fe7\u1ff2-\u1ff4\u1ff6\u1ff7\u210a\u210e\u210f\u2113\u212f\u2134\u2139\u213c\u213d\u2146-\u2149\u214e\u2184\u2c30-\u2c5e\u2c61\u2c65\u2c66\u2c68\u2c6a\u2c6c\u2c71\u2c73\u2c74\u2c76-\u2c7b\u2c81\u2c83\u2c85\u2c87\u2c89\u2c8b\u2c8d\u2c8f\u2c91\u2c93\u2c95\u2c97\u2c99\u2c9b\u2c9d\u2c9f\u2ca1\u2ca3\u2ca5\u2ca7\u2ca9\u2cab\u2cad\u2caf\u2cb1\u2cb3\u2cb5\u2cb7\u2cb9\u2cbb\u2cbd\u2cbf\u2cc1\u2cc3\u2cc5\u2cc7\u2cc9\u2ccb\u2ccd\u2ccf\u2cd1\u2cd3\u2cd5\u2cd7\u2cd9\u2cdb\u2cdd\u2cdf\u2ce1\u2ce3\u2ce4\u2cec\u2cee\u2cf3\u2d00-\u2d25\u2d27\u2d2d\ua641\ua643\ua645\ua647\ua649\ua64b\ua64d\ua64f\ua651\ua653\ua655\ua657\ua659\ua65b\ua65d\ua65f\ua661\ua663\ua665\ua667\ua669\ua66b\ua66d\ua681\ua683\ua685\ua687\ua689\ua68b\ua68d\ua68f\ua691\ua693\ua695\ua697\ua699\ua69b\ua723\ua725\ua727\ua729\ua72b\ua72d\ua72f-\ua731\ua733\ua735\ua737\ua739\ua73b\ua73d\ua73f\ua741\ua743\ua745\ua747\ua749\ua74b\ua74d\ua74f\ua751\ua753\ua755\ua757\ua759\ua75b\ua75d\ua75f\ua761\ua763\ua765\ua767\ua769\ua76b\ua76d\ua76f\ua771-\ua778\ua77a\ua77c\ua77f\ua781\ua783\ua785\ua787\ua78c\ua78e\ua791\ua793-\ua795\ua797\ua799\ua79b\ua79d\ua79f\ua7a1\ua7a3\ua7a5\ua7a7\ua7a9\ua7fa\uab30-\uab5a\uab64\uab65\ufb00-\ufb06\ufb13-\ufb17\uff41-\uff5a/
          , p = /\ud801[\udc28-\udc4f]|\ud806[\udcc0-\udcdf]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]/
          , g = l.a.regexen
          , m = g.nonBmpCodePairs
          , v = g.hashtagAlphaNumeric
          , b = h(/(?:[#{bmpLowerCase}]|(?=#{nonBmpCodePairs})(?:#{astralLowerCase}))/, {
            bmpLowerCase: f,
            nonBmpCodePairs: m,
            astralLowerCase: p
        })
          , y = /[[\]\\*?(){}.+$^]/g
          , w = h(/((?:#{hashtagAlphaNumeric}){4,})/gi, {
            hashtagAlphaNumeric: v
        })
          , S = h(/(?=((^|\b)(?!#{lowerCase})(?:#{hashtagAlphaNumeric})+\s(?!#{lowerCase})(?:#{hashtagAlphaNumeric})+))/g, {
            lowerCase: b,
            hashtagAlphaNumeric: v
        })
    },
    aXPZ: function(t, e, i) {
        "use strict";
        function n() {
            this.getArray = function(t) {
                return this.getItem(t) || []
            }
            ,
            this.push = function(t, e) {
                var i = this.getArray(t)
                  , n = i.push(e);
                return this.setItem(t, i),
                n
            }
            ,
            this.pushAll = function(t, e) {
                var i = this.getArray(t);
                return i.push.apply(i, e),
                this.setItem(t, i),
                i
            }
        }
        e.a = n
    },
    abGh: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[1]
              , o = "adaptive" === n ? t[2] : n;
            Promise.all([i.e(0), i.e(9)]).then(function(t) {
                var n = {
                    advanced: i("qX0T").default,
                    default: i("CZUl").default,
                    home: i("KtwL").default,
                    news: i("0iib").default,
                    place: i("74Qr").default,
                    stickers: i("Jz6c").default
                };
                e(n[o])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    alSu: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                o.default.mixin(this, [a.a, s.a]),
                this.defaultAttrs({
                    genericInteractionItemSelector: ".js-stream-item",
                    mainTimelineStreamItemContainer: ".stream-items",
                    mainTimelineStreamItemSelector: ".stream-items > .js-stream-item",
                    streamItemContainerSelector: ".js-stream-item, .permalink",
                    suggestionJsonItemSelector: ".js-stream-item[data-suggestion-json]",
                    activityTargetSelector: ".activity-truncated-tweet .tweet, .js-activity-list_member_added [data-list-id]",
                    activityItemSelector: ".js-activity",
                    itemAvatarSelector: ".js-action-profile-avatar, .avatar.size48",
                    itemSmallAvatarSelector: ".avatar.size24, .avatar.size32",
                    itemMentionSelector: ".twitter-atreply",
                    originalTweetSelector: ".js-original-tweet[data-tweet-id]",
                    promotedBadgeSelector: ".js-promoted-badge",
                    userTargetSelector: ".js-user-profile-link, .twitter-atreply"
                });
                var e = {
                    feedbackToken: "data-feedback-token",
                    impressionId: "data-impression-id",
                    lifeline: "data-lifeline",
                    disclosureType: "data-disclosure-type",
                    impressionCookie: "data-impression-cookie",
                    relevanceType: "data-relevance-type",
                    associatedTweetId: "data-associated-tweet-id"
                }
                  , i = u({
                    canBeSelfThreaded: "data-can-be-self-threaded",
                    tweetId: "data-tweet-id",
                    retweetId: "data-retweet-id",
                    isReplyTo: "data-is-reply-to",
                    hasParentTweet: "data-has-parent-tweet"
                }, e)
                  , n = u({
                    activityType: "data-activity-type"
                }, i)
                  , c = u({
                    storyType: "data-story-type",
                    storySource: "data-source"
                }, i)
                  , l = {
                    contactId: "data-item-id",
                    importClientApplicationId: "data-client-application-id"
                }
                  , d = u({
                    rtbAdId: "data-item-id",
                    creativeId: "data-creative-id"
                }, i);
                this.interactionDataWithCard = function(t, e) {
                    return this.interactionData(t, e, !0)
                }
                ,
                this.interactionData = function(e, i, n) {
                    var o = {}
                      , a = {}
                      , s = !!n
                      , c = t(e.target ? e.target : e);
                    this.setItemType(c),
                    this.attr.eventData = r.default.merge({}, this.defaultEventData, !0),
                    this.attr.eventData && (o = this.attr.eventData.scribeContext,
                    a = this.attr.eventData.scribeData),
                    i = u({}, this.getEventData(c, s), i);
                    var l = c.closest("[data-scribe-context]").data("scribe-context");
                    if (l && (a = u({}, l, a)),
                    o = u({}, o, this.getScribeContext(c, i)),
                    "tweet" === this.attr.itemType && ["replies", "conversation", "in_reply_to"].indexOf(o.component) >= 0) {
                        var d = c.closest(this.attr.streamItemContainerSelector).find(this.attr.originalTweetSelector);
                        d.length && (i.conversationOriginTweetId = d.attr("data-tweet-id"))
                    }
                    return u({
                        scribeContext: o,
                        scribeData: a
                    }, i)
                }
                ,
                this.getScribeContext = function(t, e) {
                    var i = {}
                      , n = t.closest("[data-component-context]").attr("data-component-context");
                    n && (i.component = n);
                    var o = t.closest("[data-element-context]").attr("data-element-context");
                    if (o && (i.element = o),
                    i.element || i.component)
                        return i
                }
                ,
                this.getInteractionItemPosition = function(t, e) {
                    if (e && e.position >= 0)
                        return e.position;
                    var i = this.getItemPosition && this.getItemPosition(t);
                    return i >= 0 ? i : (i = this.getExpandoPosition(t),
                    -1 !== i ? i : "true" === t.attr("data-is-tweet-proof") ? this.getTweetProofPosition(t) : this.getStreamPosition(t))
                }
                ,
                this.getExpandoPosition = function(t) {
                    var e = void 0
                      , i = -1;
                    return t.closest(".in-reply-to,.replies-to").length && (e = t.closest(".in-reply-to,.replies-to"),
                    i = e.find(".tweet").index(t.closest(".tweet"))),
                    i
                }
                ,
                this.getTweetProofPosition = function(t) {
                    var e = t.closest(this.attr.trendItemSelector).index();
                    return -1 !== e ? e : -1
                }
                ,
                this.getStreamPosition = function(t) {
                    var e = void 0;
                    e = t.closest(this.attr.mainTimelineStreamItemContainer).length ? t.closest(this.attr.mainTimelineStreamItemSelector) : t.closest(this.attr.genericInteractionItemSelector);
                    var i = e.parent().children(":not(.js-ignore-position)").index(e);
                    if (-1 !== i)
                        return i
                }
                ,
                this.getEventData = function(t, n) {
                    var o = void 0;
                    switch (this.attr.itemType) {
                    case "activity":
                        return this.getActivityEventData(t);
                    case "story":
                        return this.getStoryEventData(t);
                    case "user":
                        return u({}, this.getDataAttrs(t, e), this.getSuggestionAttrs(t), this.getMomentsEventData(t), this.getLiveVideoEventData(t), this.getLiveBroadcastData(t));
                    case "tweet":
                        return o = u({}, this.getDataAttrs(t, i), this.getConversationAttrs(t), this.getSuggestionAttrs(t), this.getMomentsEventData(t), this.getLiveVideoEventData(t), this.getLiveBroadcastData(t)),
                        n ? u({}, this.getCardAttrs(t), o) : o;
                    case "list":
                        return this.getDataAttrs(t, e);
                    case "trend":
                        return this.getDataAttrs(t, i);
                    case "contact":
                        return this.getDataAttrs(t, l);
                    case "rtb_ad":
                        return this.getDataAttrs(t, d);
                    default:
                        return {}
                    }
                }
                ,
                this.getActivityEventData = function(e) {
                    var i = e.closest(this.attr.activityItemSelector)
                      , o = i.find(this.attr.activityTargetSelector);
                    o.length || (o = e);
                    var r = this.getDataAttrs(e, n, o);
                    r.isNetworkActivity = !!e.closest(".discover-stream").length,
                    r.activityType || (r.isReplyTo ? r.activityType = "reply" : r.activityType = r.retweetId ? "retweet" : "mention");
                    var a = []
                      , s = r.isNetworkActivity ? ".stream-item-activity-header" : "ol.ActivityItem-hiddenSupplementContainer";
                    return i.find(s + " a[data-user-id]").each(function() {
                        a.push(t(this).data("user-id"))
                    }),
                    a.length && (r.actingUserIds = a),
                    r
                }
                ,
                this.getAncestorJSONData = function(t, e) {
                    var i = t.closest("[" + e + "]").attr(e);
                    return i && JSON.parse(i)
                }
                ,
                this.getLiveVideoEventData = function(t) {
                    var e = this.getAncestorJSONData(t, "data-live-video-event-details-json");
                    return e ? {
                        live_video_event_details: e
                    } : {}
                }
                ,
                this.getLiveBroadcastData = function(t) {
                    var e = this.getAncestorJSONData(t, "data-live-broadcast-details-json");
                    return e ? {
                        live_broadcast_details: e
                    } : {}
                }
                ,
                this.getMomentsEventData = function(t) {
                    var e = this.getAncestorJSONData(t, "data-moments-details-json");
                    return e ? {
                        moments_details: e
                    } : {}
                }
                ,
                this.getSuggestionAttrs = function(t) {
                    var e = {}
                      , i = t.closest(this.attr.suggestionJsonItemSelector);
                    if (i.length > 0) {
                        var n = i.attr("data-suggestion-json")
                          , o = n && JSON.parse(n);
                        o && (e.suggestion_details = o.suggestion_details)
                    }
                    return e
                }
                ,
                this.getStoryEventData = function(t) {
                    return this.getDataAttrs(t, c)
                }
                ,
                this.getTargetUserId = function(t) {
                    var e = t.closest(this.attr.userTargetSelector);
                    if (e.length)
                        return e.closest("[data-user-id]").attr("data-user-id") || e.find("[data-user-id]").attr("data-user-id")
                }
                ,
                this.getDataAttrs = function(e, i, n) {
                    var o = {};
                    n = n || e,
                    t.each(i, function(t, e) {
                        var i = void 0;
                        void 0 !== (i = n.is("[" + e + "]") ? n.attr(e) : n.closest("[" + e + "]").attr(e)) && (o[t] = i)
                    }),
                    o.isReplyTo = "true" === o.isReplyTo,
                    o = u({}, o, {
                        position: this.getInteractionItemPosition(e, o),
                        isMentionClick: e.closest(this.attr.itemMentionSelector).length > 0,
                        isPromotedBadgeClick: e.closest(this.attr.promotedBadgeSelector).length > 0,
                        itemType: this.attr.itemType
                    }),
                    o.conversationSection = e.closest("[data-conversation-section-quality]").attr("data-conversation-section-quality"),
                    e.is(this.attr.itemAvatarSelector) ? o.profileClickTarget = "avatar" : e.is(this.attr.itemSmallAvatarSelector) ? o.profileClickTarget = "mini_avatar" : o.profileClickTarget = "screen_name";
                    var r = this.getTargetUserId(e);
                    return r && (o.targetUserId = r),
                    o.userId = e.closest("[data-user-id]").attr("data-user-id"),
                    o.containerUserId = n.closest("[data-user-id]").attr("data-user-id"),
                    o
                }
                ,
                this.getCardAttrs = function(t) {
                    var e = this.getCardDataFromContainer(t);
                    return e.hasCard2 ? {
                        cardItem: this.getCard2Item(e)
                    } : {}
                }
                ,
                this.setItemType = function(t) {
                    var e = t.closest("[data-item-type]");
                    this.attr.itemType = e.data("item-type") || this.defaultItemType,
                    this.attr.itemType
                }
                ,
                this.after("initialize", function() {
                    this.defaultItemType = this.attr.itemType || "",
                    this.defaultEventData = this.attr.eventData || {
                        scribeContext: {},
                        scribeData: {}
                    }
                })
            }
            var o = i("q9/C")
              , r = i("YzIt")
              , a = i("Vuuo")
              , s = i("tPBl")
              , u = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            }
            ;
            e.a = n
        }
        ).call(e, i("4kSj"))
    },
    ax3d: function(t, e, i) {
        var n = i("e8AB")("keys")
          , o = i("3Eo+");
        t.exports = function(t) {
            return n[t] || (n[t] = o(t))
        }
    },
    bCrq: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    dismissSelector: ".js-close",
                    signupSelector: ".js-signup",
                    topbarSpacerSelector: ".topbar-spacer",
                    eventData: {
                        scribeContext: {
                            component: "banner",
                            element: "signup"
                        }
                    }
                }),
                this.setCookie = function() {
                    Object(r.a)("sn_bn_act", 1, {
                        expires: 1
                    })
                }
                ,
                this.dismiss = function() {
                    this.trigger("uiBannerDismissed"),
                    this.hideBanner()
                }
                ,
                this.hideBanner = function() {
                    this.setCookie(),
                    t(document).find(this.attr.topbarSpacerSelector).css("padding-top", "-=" + this.$node.outerHeight()),
                    this.$node.remove()
                }
                ,
                this.signup = function() {
                    this.hideBanner()
                }
                ,
                this.after("initialize", function() {
                    this.on("click", {
                        dismissSelector: this.dismiss,
                        signupSelector: this.signup
                    }),
                    this.trigger("uiBannerDisplayed")
                })
            }
            var o = i("DBjh")
              , r = i("dsp6");
            e.a = Object(o.default)(n)
        }
        ).call(e, i("4kSj"))
    },
    bHbJ: function(t, e, i) {
        "use strict";
        (function(t) {
            function i(e) {
                var i = t(e);
                i.hasClass("js-tooltip") && i.addClass("js-is-nextTooltipPreventedOnFocus")
            }
            e.a = i
        }
        ).call(e, i("4kSj"))
    },
    bRrM: function(t, e, i) {
        "use strict";
        var n = i("7KvD")
          , o = i("FeBl")
          , r = i("evD5")
          , a = i("+E39")
          , s = i("dSzd")("species");
        t.exports = function(t) {
            var e = "function" == typeof o[t] ? o[t] : n[t];
            a && e && !e[s] && r.f(e, s, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    bWvc: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[0];
            Promise.all([i.e(0), i.e(3)]).then(function(t) {
                var o = {
                    custom_timeline: i("mLbD").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    bXc2: function(t, e, i) {
        "use strict";
        function n(t) {
            throw new Error("did not match route " + t)
        }
        function o(t, e, i) {
            function o(e) {
                e ? i.call(t, e) : n(I)
            }
            var I = e.filter(function(t) {
                return 0 === t.indexOf("app/pages")
            })[0]
              , j = I.split("/").slice(2);
            switch (j[0]) {
            case "account":
            case "login_verification_page":
                return Object(r.a)(j, o);
            case "connect":
            case "notifications":
                return Object(w.a)(j, o);
            case "custom_timeline":
                return Object(s.a)(j, o);
            case "directory":
                return Object(u.a)(j, o);
            case "download":
                return Object(c.a)(j, o);
            case "frontpage":
            case "login":
            case "static_lohp":
            case "streams":
                return Object(l.a)(j, o);
            case "guide":
                return Object(d.a)(j, o);
            case "highlights":
                return Object(h.a)(j, o);
            case "home":
                return Object(f.a)(j, o);
            case "list":
                return Object(g.a)(j, o);
            case "live_event":
                return Object(m.a)(j, o);
            case "live_video":
                return Object(v.a)(j, o);
            case "logged_out_settings":
                return Object(b.a)(j, o);
            case "moments":
                return Object(y.a)(j, o);
            case "oauth_landing":
                return Object(S.a)(j, o);
            case "permalink":
                return Object(C.a)(j, o);
            case "profile":
                return Object(T.a)(j, o);
            case "search":
                return Object(x.a)(j, o);
            case "settings":
                return "internal" === j[1] ? Object(p.a)(j, o) : Object(E.a)(j, o);
            case "signup":
            case "signup_download":
                return Object(k.a)(j, o);
            case "simple_t1":
                return Object(O.a)(j, o);
            case "start":
                return Object(D.a)(j, o);
            case "welcome":
                return Object(a.a)(j, o);
            case "who_to_follow":
                return Object(A.a)(j, o);
            case "noop":
                return o(function() {});
            default:
                n(I)
            }
        }
        e.a = o;
        var r = i("eV5I")
          , a = i("Wet5")
          , s = i("bWvc")
          , u = i("BITZ")
          , c = i("Vg5K")
          , l = i("Jz3K")
          , d = i("U+pv")
          , h = i("QBb4")
          , f = i("USFV")
          , p = i("ggwa")
          , g = i("palu")
          , m = i("z1BS")
          , v = i("9xKg")
          , b = i("OmTo")
          , y = i("xZOO")
          , w = i("ImEy")
          , S = i("NMjb")
          , C = i("G/4T")
          , T = i("PTD5")
          , x = i("abGh")
          , E = i("NW2Z")
          , k = i("N+f0")
          , O = i("81nO")
          , D = i("55eh")
          , A = i("1ocf")
    },
    baqs: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("lAZW"), i("5JGd"), i("z06B"), i("IJyq")],
        void 0 !== (o = function(t, e) {
            "use strict";
            function i(e, o, r, a) {
                var s;
                if (t.isArray(o))
                    t.each(o, function(t, o) {
                        r || n.test(e) ? a(e, o) : i(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, r, a)
                    });
                else if (r || "object" !== t.type(o))
                    a(e, o);
                else
                    for (s in o)
                        i(e + "[" + s + "]", o[s], r, a)
            }
            var n = /\[\]$/
              , o = /\r?\n/g
              , r = /^(?:submit|button|image|reset|file)$/i
              , a = /^(?:input|select|textarea|keygen)/i;
            return t.param = function(e, n) {
                var o, r = [], a = function(e, i) {
                    var n = t.isFunction(i) ? i() : i;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
                if (t.isArray(e) || e.jquery && !t.isPlainObject(e))
                    t.each(e, function() {
                        a(this.name, this.value)
                    });
                else
                    for (o in e)
                        i(o, e[o], n, a);
                return r.join("&")
            }
            ,
            t.fn.extend({
                serialize: function() {
                    return t.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = t.prop(this, "elements");
                        return e ? t.makeArray(e) : this
                    }).filter(function() {
                        var i = this.type;
                        return this.name && !t(this).is(":disabled") && a.test(this.nodeName) && !r.test(i) && (this.checked || !e.test(i))
                    }).map(function(e, i) {
                        var n = t(this).val();
                        return null == n ? null : t.isArray(n) ? t.map(n, function(t) {
                            return {
                                name: i.name,
                                value: t.replace(o, "\r\n")
                            }
                        }) : {
                            name: i.name,
                            value: n.replace(o, "\r\n")
                        }
                    }).get()
                }
            }),
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    bxuR: function(t, e, i) {
        "use strict";
        function n() {
            this.updateSection = function(t, e) {
                e && "string" == typeof e.sectionName && (this.clientEvent.scribeContext.section = e.sectionName)
            }
            ,
            this.after("initialize", function() {
                this.clientEvent = r.a,
                this.on(document, "dataUpdateScribeSection", this.updateSection)
            })
        }
        var o = i("DBjh")
          , r = i("NNES");
        e.a = Object(o.default)(n)
    },
    "c/Tr": function(t, e, i) {
        t.exports = {
            default: i("5zde"),
            __esModule: !0
        }
    },
    c16W: function(t, e, i) {
        "use strict";
        function n(t) {
            return t && !(!window.history || !history.pushState)
        }
        e.a = n
    },
    c7Hc: function(t, e, i) {
        var n, o;
        n = [i("ZWgy")],
        void 0 !== (o = function(t) {
            "use strict";
            return t.focusin = "onfocusin"in window,
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    cCv7: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    inputSelector: "#search-query",
                    buttonSelector: ".nav-search",
                    dropdownSelector: ".dropdown-menu.typeahead",
                    resultSelector: ".js-typeahead-results",
                    itemsContainerSelector: ".typeahead-items",
                    itemsSelector: ".typeahead-items li",
                    itemAnchorsSelector: ".typeahead-items li a",
                    itemSelector: ".typeahead-item",
                    categoryTitle: ".typeahead-category-title",
                    selectedItemSelector: ".typeahead-items li.selected",
                    selectedClass: "selected",
                    blockLinkActions: !1,
                    hideOnEmptyQuery: !1,
                    alwaysOpen: !1,
                    deciders: {
                        showDebugInfo: !1,
                        showSocialContext: !1
                    },
                    autocompleteAccounts: !0,
                    datasourceRenders: [["concierge", ["concierge"]], ["followedSearches", ["followedSearches"]], ["savedSearches", ["savedSearches"]], ["recentSearches", ["recentSearches"]], ["topics", ["topics"]], ["accounts", ["accounts"]], ["dmConversations", ["dmConversations"]]],
                    datasourceOptions: {},
                    typeaheadSrc: "UNKNOWN",
                    templateContainerSelector: ".dropdown-inner",
                    recentSearchesListSelector: ".typeahead-recent-searches",
                    savedSearchesListSelector: ".typeahead-saved-searches",
                    followedSearchesListSelector: ".typeahead-followed-searches",
                    topicsListSelector: ".typeahead-topics",
                    accountsListSelector: ".js-typeahead-accounts",
                    trendLocationsListSelector: ".typeahead-trend-locations-list",
                    conciergeSelector: ".typeahead-concierge",
                    userSelectSelector: ".typeahead-user-select",
                    selectedListSelector: ".typeahead-selected",
                    dmConversationsSelector: ".typeahead-dm-conversations",
                    renderLimit: void 0
                }),
                this.mouseOver = function(e, i) {
                    this.clearSelected(),
                    t(i.el).addClass(this.attr.selectedClass)
                }
                ,
                this.clearSelected = function() {
                    this.select("itemsSelector").removeClass(this.attr.selectedClass)
                }
                ,
                this.moveSelection = function(t) {
                    var e = this.select("itemsSelector").filter(":visible")
                      , i = e.filter(".selected");
                    i.removeClass(this.attr.selectedClass),
                    i.find("a").removeAttr("aria-selected"),
                    this.$input.removeAttr("aria-activedescendant");
                    var n = e.index(i) + t;
                    if (-1 === (n = (n + 1) % (e.length + 1) - 1))
                        return void this.trigger("uiTypeaheadSelectionCleared");
                    n < -1 && (n = e.length - 1);
                    var o = e.eq(n)
                      , r = o.find("a");
                    o.addClass(this.attr.selectedClass),
                    r.attr("aria-selected", !0),
                    this.$input.attr("aria-activedescendant", r.attr("id")),
                    this.scrollResultContainer(o)
                }
                ,
                this.scrollResultContainer = function(t) {
                    if (t.length > 0) {
                        var e = this.select("resultSelector")
                          , i = e.height()
                          , n = t.offset().top - e.offset().top
                          , o = t.height();
                        i < n + o ? e.scrollTop(e.scrollTop() + n - i + o) : n <= 0 && e.scrollTop(e.scrollTop() + n)
                    }
                }
                ,
                this.moveSelectionUp = function(t) {
                    this.moveSelection(-1)
                }
                ,
                this.moveSelectionDown = function(t) {
                    this.moveSelection(1)
                }
                ,
                this.dropdownIsOpen = function() {
                    if (this.attr.alwaysOpen)
                        return !0;
                    if (window.DEBUG && window.DEBUG.enabled && this.openState !== this.$dropdown.is(":visible"))
                        throw new Error("Dropdown markup and internal openState variable are out of sync.");
                    return this.openState
                }
                ,
                this.show = function() {
                    this.$dropdown.show(),
                    this.$input.trigger("uiDropdownOpened"),
                    this.$input.attr("aria-expanded", !0),
                    this.openState = !0,
                    this.select("resultSelector").scrollTop(0)
                }
                ,
                this.hide = function(e) {
                    var i = e && e.target && t(e.target)
                      , n = !!e && "click" === e.type
                      , o = n && this.$input.is(i)
                      , r = n && this.$button.is(i);
                    this.mouseIsOverDropdown || o || r || !this.dropdownIsOpen() || this.attr.alwaysOpen || (this.$dropdown.find(".selected a").removeAttr("aria-selected"),
                    this.$dropdown.hide(),
                    this.$input.attr("aria-expanded", !1),
                    this.$input.removeAttr("aria-activedescendant"),
                    this.openState = !1)
                }
                ,
                this.hideAndManageEsc = function(t) {
                    this.dropdownIsOpen() && !this.attr.alwaysOpen && (this.forceHide(),
                    t.preventDefault(),
                    t.stopPropagation())
                }
                ,
                this.forceHide = function() {
                    this.clearMouseTracking(),
                    this.hide()
                }
                ,
                this.inputValueUpdated = function(t, e) {
                    this.clearSelected(),
                    this.lastQuery = e.value;
                    var i = y({}, this.attr.datasourceOptions, {
                        query: e.value,
                        typeaheadSrc: this.attr.typeaheadSrc
                    });
                    void 0 !== e.tweetContext && (i.tweetContext = e.tweetContext),
                    this.trigger("uiNeedsTypeaheadSuggestions", {
                        datasources: this.datasources,
                        queryData: i,
                        id: this.getDropdownId()
                    })
                }
                ,
                this.getDropdownId = function() {
                    return this.dropdownId || (this.dropdownId = "swift_typeahead_dropdown_" + v.a.getRandomInteger(0, 1e6)),
                    this.dropdownId
                }
                ,
                this.checkIfSelectionFromSearchInput = function(t) {
                    return t.closest("form").find("input").hasClass("search-input")
                }
                ,
                this.triggerSelectionEvent = function(t, e) {
                    this.attr.blockLinkActions && t.preventDefault();
                    var i = this.select("itemsSelector")
                      , n = i.filter(".selected").first();
                    if (0 !== n.length) {
                        var o = n.find("a")
                          , r = n.index()
                          , a = this.lastQuery
                          , s = o.attr("data-search-query")
                          , u = o.attr("data-query-source");
                        if (n.removeClass(this.attr.selectedClass),
                        this.$input.removeAttr("aria-activedescendant"),
                        a || s || "typeahead_oneclick" === u) {
                            var c = this.getItemData(n);
                            this.trigger("uiTypeaheadItemSelected", {
                                isSearchInput: this.checkIfSelectionFromSearchInput(o),
                                index: r,
                                source: o.data("ds"),
                                query: s,
                                input: a,
                                display: n.data("user-screenname") || s,
                                href: o.attr("href"),
                                isClick: !!t.originalEvent && "click" === t.originalEvent.type,
                                item: c
                            }),
                            this.forceHide()
                        }
                    }
                }
                ,
                this.getItemData = function(t) {
                    return t.data("item")
                }
                ,
                this.submitQuery = function(t, e) {
                    if (this.select("itemsSelector").filter(".selected").first().length)
                        return void this.triggerSelectionEvent(t, e);
                    var i = this.$input.val();
                    "" !== i.trim() && (this.trigger("uiTypeaheadSubmitQuery", {
                        query: g.a.cleanText(i)
                    }),
                    this.forceHide())
                }
                ,
                this.getSelectedCompletion = function() {
                    var t = this.select("itemsSelector").filter(".selected").first();
                    if (!t.length && this.dropdownIsOpen() && (t = this.select("itemsSelector").filter(".typeahead-item").first()),
                    t.length && this.$dropdown.attr("id") === t.closest(this.attr.dropdownSelector).attr("id")) {
                        var e = t.find("a")
                          , i = e.data("search-query")
                          , n = this.select("itemsSelector")
                          , o = n.index(t)
                          , r = this.lastQuery;
                        if ("account" !== e.data("ds") || this.attr.autocompleteAccounts) {
                            var a = this.getItemData(t);
                            this.trigger("uiTypeaheadItemPossiblyComplete", {
                                value: i,
                                source: e.data("ds"),
                                index: o,
                                query: i,
                                item: a,
                                display: t.data("user-screenname") || i,
                                input: r,
                                href: e.attr("href") || ""
                            })
                        }
                    }
                }
                ,
                this.renderResults = function(t) {
                    if (!this.attr.renderLimit)
                        return void this.trigger("uiTypeaheadRenderResults", t);
                    var e = 0
                      , i = 0
                      , n = 0
                      , o = {}
                      , r = t.suggestions
                      , a = this.attr.renderLimit;
                    this.datasources.forEach(function(r) {
                        t.suggestions[r] && n < a && (e = a - n,
                        i = t.suggestions[r].length < e ? t.suggestions[r].length : e,
                        o[r] = t.suggestions[r].slice(0, i),
                        n += i)
                    }),
                    t.suggestions = o,
                    this.trigger("uiTypeaheadRenderResults", t),
                    t.suggestions = r
                }
                ,
                this.updateDropdown = function(e, i) {
                    var n = this.$input.is(document.activeElement);
                    if (!(i.id !== this.getDropdownId() || !i.queryData.atSignRemoved && i.queryData.query !== this.lastQuery || i.queryData.atSignRemoved && i.queryData.query !== this.lastQuery.substring(1) || !n && !this.attr.alwaysOpen)) {
                        var o = this.select("itemsSelector").filter(".selected").first()
                          , r = o.find("a").data("ds")
                          , a = o.find("a").data("search-query");
                        if (this.renderResults(i),
                        r && a) {
                            this.select("itemsSelector").find("[data-ds='" + r + "'][data-search-query='" + a + "']").closest("li").addClass(this.attr.selectedClass)
                        }
                        this.select("itemAnchorsSelector").each(function(e, i) {
                            return t(i).attr("id", "typeahead-item-" + e)
                        });
                        var s = this.datasources.map(function(t) {
                            return i.suggestions[t] ? i.suggestions[t].length : 0
                        })
                          , u = s.reduce(function(t, e) {
                            return t + e
                        })
                          , c = n && (!this.attr.hideOnEmptyQuery || i.queryData.query);
                        if (u > 0 && (this.attr.alwaysOpen || c)) {
                            this.show();
                            var l = !!i.queryData.query;
                            this.trigger("uiTypeaheadSetPreventDefault", {
                                preventDefault: l,
                                key: 9
                            }),
                            this.trigger("uiTypeaheadResultsShown", {
                                numResults: u,
                                query: i.queryData.query
                            })
                        } else
                            this.forceHide(),
                            this.trigger("uiTypeaheadSetPreventDefault", {
                                preventDefault: !1,
                                key: 9
                            }),
                            this.trigger("uiTypeaheadResultsHidden")
                    }
                }
                ,
                this.updateNumResults = function(t, e) {
                    0 !== this.select("itemSelector").length || this.attr.alwaysOpen || this.forceHide()
                }
                ,
                this.trackMouse = function(t, e) {
                    this.mouseIsOverDropdown = !0
                }
                ,
                this.clearMouseTracking = function(t, e) {
                    this.mouseIsOverDropdown = !1,
                    this.clearSelected()
                }
                ,
                this.resetTemplates = function() {
                    this.$templateContainer.empty(),
                    this.$templateContainer.append(this.$conciergeTemplate),
                    this.$templateContainer.append(this.$savedSearchesTemplate),
                    this.$templateContainer.append(this.$followedSearchesTemplate),
                    this.$templateContainer.append(this.$recentSearchesTemplate),
                    this.$templateContainer.append(this.$topicsTemplate),
                    this.$templateContainer.append(this.$accountsTemplate),
                    this.$templateContainer.append(this.$trendLocationsTemplate),
                    this.$templateContainer.append(this.$userSelectTemplate),
                    this.$templateContainer.append(this.$dmConversationsTemplate)
                }
                ,
                this.addRenderer = function(t, e, i) {
                    i = y({}, i, {
                        datasources: e
                    });
                    var n = "block" + this.blockCount++;
                    "accounts" === t ? (this.$accountsTemplate.clone().addClass(n).appendTo(this.$templateContainer),
                    this.attachChild(a.a, this.$node, y({}, i, {
                        accountsListSelector: this.attr.accountsListSelector + "." + n
                    }))) : "topics" === t ? (this.$topicsTemplate.clone().addClass(n).appendTo(this.$templateContainer),
                    this.attachChild(d.a, this.$node, y({}, i, {
                        topicsListSelector: this.attr.topicsListSelector + "." + n
                    }))) : "savedSearches" === t ? (this.$savedSearchesTemplate.clone().addClass(n).appendTo(this.$templateContainer),
                    this.attachChild(u.a, this.$node, y({}, i, {
                        savedSearchesListSelector: this.attr.savedSearchesListSelector + "." + n
                    }))) : "followedSearches" === t ? (this.$followedSearchesTemplate.clone().addClass(n).appendTo(this.$templateContainer),
                    this.attachChild(c.a, this.$node, y({}, i, {
                        followedSearchesListSelector: this.attr.followedSearchesListSelector + "." + n
                    }))) : "recentSearches" === t ? (this.$recentSearchesTemplate.clone().addClass(n).appendTo(this.$templateContainer),
                    this.attachChild(l.a, this.$node, y({}, i, {
                        recentSearchesListSelector: this.attr.recentSearchesListSelector + "." + n
                    }))) : "trendLocations" === t ? (this.$trendLocationsTemplate.clone().addClass(n).appendTo(this.$templateContainer),
                    this.attachChild(h.a, this.$node, y({}, i, {
                        trendLocationsListSelector: this.attr.trendLocationsListSelector + "." + n
                    }))) : "concierge" === t ? (this.$conciergeTemplate.clone().addClass(n).appendTo(this.$templateContainer),
                    this.attachChild(f.a, this.$node, y({}, i, {
                        conciergeSelector: this.attr.conciergeSelector + "." + n
                    }))) : "selectedUsers" === t ? (this.$userSelectTemplate.clone().addClass(n).appendTo(this.$templateContainer),
                    this.attachChild(p.a, this.$node, y({}, i, {
                        rootSelector: this.attr.userSelectSelector + "." + n,
                        accountsListSelector: this.attr.accountsListSelector,
                        selectedListSelector: this.attr.selectedListSelector
                    })),
                    this.$dropdown.attr("aria-multiselectable", "true")) : "dmConversations" === t && (this.$dmConversationsTemplate.clone().addClass(n).appendTo(this.$templateContainer),
                    this.attachChild(s.a, this.$node, y({}, i, {
                        dmConversationsListSelector: this.attr.dmConversationsSelector + "." + n
                    })))
                }
                ,
                this.applyARIAToInput = function() {
                    w += 1;
                    var t = "typeahead-dropdown-" + w;
                    this.$dropdown.attr("id", t),
                    this.$input.attr({
                        "aria-autocomplete": "list",
                        "aria-expanded": !1,
                        "aria-owns": t
                    })
                }
                ,
                this.before("teardown", this.resetTemplates),
                this.after("initialize", function(t, e) {
                    this.openState = !1,
                    this.$input = this.select("inputSelector").first(),
                    this.$dropdown = this.select("dropdownSelector").first(),
                    this.$button = this.select("buttonSelector"),
                    this.applyARIAToInput(),
                    this.$templateContainer = this.select("templateContainerSelector").first(),
                    this.$accountsTemplate = this.select("accountsListSelector").first().clone(!1),
                    this.$contactsTemplate = this.select("contactsListSelector").first().clone(!1),
                    this.$savedSearchesTemplate = this.select("savedSearchesListSelector").first().clone(!1),
                    this.$followedSearchesTemplate = this.select("followedSearchesListSelector").first().clone(!1),
                    this.$recentSearchesTemplate = this.select("recentSearchesListSelector").first().clone(!1),
                    this.$topicsTemplate = this.select("topicsListSelector").first().clone(!1),
                    this.$trendLocationsTemplate = this.select("trendLocationsListSelector").first().clone(!1),
                    this.$conciergeTemplate = this.select("conciergeSelector").first().clone(!1),
                    this.$userSelectTemplate = this.select("userSelectSelector").first().clone(!1),
                    this.$dmConversationsTemplate = this.select("dmConversationsSelector").first().clone(!1),
                    this.$templateContainer.empty(),
                    this.datasources = [],
                    this.attr.datasourceRenders.forEach(function(t) {
                        this.datasources = this.datasources.concat(t[1])
                    }, this),
                    this.datasources = r.default.uniqueArray(this.datasources),
                    this.blockCount = 0,
                    this.attr.datasourceRenders.forEach(function(t) {
                        this.addRenderer(t[0], t[1], e)
                    }, this),
                    this.on(this.$input, "blur", this.hide),
                    this.on(this.$input, "uiTypeaheadInputSubmit", this.submitQuery),
                    this.on(this.$input, "uiTypeaheadInputChanged", this.inputValueUpdated),
                    this.on(this.$input, "uiTypeaheadInputMoveUp", this.moveSelectionUp),
                    this.on(this.$input, "uiTypeaheadInputMoveDown", this.moveSelectionDown),
                    this.on(this.$input, "uiTypeaheadInputAutocomplete", this.getSelectedCompletion),
                    this.on(this.$input, "uiTypeaheadInputTab", this.clearMouseTracking),
                    this.on(this.$input, "uiShortcutEsc", this.hideAndManageEsc),
                    this.on(this.$dropdown, "mouseenter", this.trackMouse),
                    this.on(this.$dropdown, "mouseleave", this.clearMouseTracking),
                    this.on(document, "dataTypeaheadSuggestionsResults", this.updateDropdown),
                    this.on(document, b.a.GLOBAL_FORCE_CLOSE_EVENTS, this.forceHide),
                    this.on(document, "click", this.hide),
                    this.on("mouseover", {
                        itemsSelector: this.mouseOver
                    }),
                    this.on("click", {
                        itemsSelector: this.triggerSelectionEvent
                    }),
                    this.on("uiTypeaheadDeleteRecentSearch uiRemoveSavedSearch uiRemoveFollowSearch", this.updateNumResults),
                    this.attr.alwaysOpen && (this.$input.attr("aria-expanded", !0),
                    this.$dropdown.show().attr("aria-hidden", !1),
                    this.openState = !0)
                })
            }
            var o = i("DBjh")
              , r = i("YzIt")
              , a = i("2Vbt")
              , s = i("0n/7")
              , u = i("zu7c")
              , c = i("SKNr")
              , l = i("uRBM")
              , d = i("rNLd")
              , h = i("ZVYm")
              , f = i("7E0P")
              , p = i("yDoZ")
              , g = i("mzT9")
              , m = i("AJAn")
              , v = i("GGCE")
              , b = i("SNS+")
              , y = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            }
              , w = 0;
            e.a = Object(o.default)(n, m.a)
        }
        ).call(e, i("4kSj"))
    },
    "cQm/": function(t, e, i) {
        "use strict";
        function n() {
            o.default.mixin(this, [r.a]),
            this.before("push", function(t, e) {
                var i = this.getArray(t);
                this.deleteElement(i, e) && this.setItem(t, i)
            }),
            this.around("pushAll", function(t, e, i) {
                i = i || [];
                var n = this.getArray(e)
                  , o = !1
                  , r = []
                  , a = {};
                return i.forEach(function(t) {
                    a[t] || (o = this.deleteElement(n, t) || o,
                    a[t] = !0,
                    r.push(t))
                }, this),
                o && this.setItem(e, n),
                t(e, r)
            }),
            this.deleteElement = function(t, e) {
                var i = -1;
                return (i = t.indexOf(e)) >= 0 && (t.splice(i, 1),
                !0)
            }
        }
        var o = i("q9/C")
          , r = i("aXPZ");
        e.a = n
    },
    cmX3: function(t, e, i) {
        (function(e) {
            t.exports = new e.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.s(n.f("isVS16", t, e, 1), t, e, 1, 0, 0, "") || (n.b('<img class="Emoji Emoji--forText" src="'),
                    n.b(n.v(n.f("imageUrl", t, e, 0))),
                    n.b('" draggable="false" alt="'),
                    n.b(n.v(n.f("text", t, e, 0))),
                    n.b('" title="'),
                    n.b(n.v(n.f("description", t, e, 0))),
                    n.b('" aria-label="'),
                    n.b(n.v(n.f("aria", t, e, 0))),
                    n.b('">')),
                    n.s(n.f("isVS16", t, e, 1), t, e, 0, 171, 217, "{{ }}") && (n.rs(t, e, function(t, e, i) {
                        i.b('<span data-original-codepoint="U+fe0f"></span>')
                    }),
                    t.pop()),
                    n.fl()
                },
                partials: {},
                subs: {}
            })
        }
        ).call(e, i("jTWp"))
    },
    czo9: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    muteUserSelector: ".mute-user-item",
                    unmuteUserSelector: ".unmute-user-item",
                    undoMuteUserSelector: ".js-undo-muting",
                    undoUnmuteUserSelector: ".js-undo-not-muting",
                    learnMoreSelector: ".learn-more",
                    skipRemoveTweetPageSelector: ".route-profile, .route-moments",
                    tweetSelector: ".tweet, .js-actionable-tweet"
                }),
                this.scribeLearnMoreClick = function(t, e) {
                    var i = {
                        url: "https://support.twitter.com/articles/20171399",
                        message: "https://support.twitter.com/articles/20171399"
                    };
                    this.scribeInteraction({
                        component: "message_drawer",
                        element: "learn_more_link",
                        action: "open_link"
                    }, e, i)
                }
                ,
                this.doAction = function(e, i, n) {
                    if ("tweet" !== i.itemType) {
                        i.modClass = "muting",
                        i.modOp = "Mute" === e ? "addClass" : "removeClass",
                        delete i.el;
                        var o = this.$node.find("[data-user-id=" + i.userId + "]")
                          , r = "true" === o.first().attr("data-you-follow")
                          , a = "Mute" === e && !r
                          , s = t(this.attr.skipRemoveTweetPageSelector).length;
                        a && !s ? this.trigger("uiRemoveTweetsAndEngagementsFromUser", i) : o[i.modOp]("muting"),
                        this.trigger("uiUpdateMuteButtonState", i),
                        n || (this.trigger("uiCloseDropdowns"),
                        this.trigger("uiHideMessage"),
                        this.trigger("ui" + e + "UserAction", i))
                    }
                }
                ,
                this.handleClick = function(e) {
                    return function(i, n) {
                        var o = t(i.target)
                          , r = o.closest(".user-actions")[0];
                        n.scribeContext = n.scribeContext || {},
                        r ? (n.scribeContext.element = "user_actions_dropdown",
                        o.closest(".ProfileNav-item--userActions") && (n.scribeContext.component = "profile_follow_card")) : (r = o.closest(this.attr.tweetSelector)[0],
                        n.scribeContext.component = "tweet",
                        n.scribeContext.element = "tweet_actions_dropdown"),
                        n.userId = t(r).data("user-id"),
                        this.doAction(e, n)
                    }
                }
                ,
                this.handleAction = function(t) {
                    return function(e, i) {
                        this.doAction(t, i)
                    }
                }
                ,
                this.handleRevertTo = function(t) {
                    return function(e, i) {
                        i.userId = i.sourceEventData.userId,
                        this.doAction(t, i, !0)
                    }
                }
                ,
                this.handleUndoTo = function(e) {
                    return function(i, n) {
                        n.userId = t(n.el).data("user-id"),
                        n.scribeContext = {
                            component: "message_drawer",
                            element: "undolink"
                        },
                        this.doAction(e, n)
                    }
                }
                ,
                this.after("initialize", function() {
                    this.on("click", {
                        muteUserSelector: this.handleClick("Mute"),
                        unmuteUserSelector: this.handleClick("Unmute"),
                        undoMuteUserSelector: this.handleUndoTo("Unmute"),
                        undoUnmuteUserSelector: this.handleUndoTo("Mute"),
                        learnMoreSelector: this.scribeLearnMoreClick
                    }),
                    this.on(document, "uiDidMuteUser", this.handleAction("Mute")),
                    this.on(document, "uiDidUnmuteUser", this.handleAction("Unmute")),
                    this.on(document, "dataFailedToMuteUser", this.handleRevertTo("Unmute")),
                    this.on(document, "dataFailedToUnmuteUser", this.handleRevertTo("Mute"))
                })
            }
            var o = i("DBjh")
              , r = i("gcfh")
              , a = Object(o.default)(n, r.a);
            e.a = a
        }
        ).call(e, i("4kSj"))
    },
    d9CK: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("fq1W"), i("9CHI"), i("k/l/"), i("5JGd")],
        void 0 !== (o = function(t, e, i, n) {
            "use strict";
            function o(t) {
                return t.getAttribute && t.getAttribute("class") || ""
            }
            t.fn.extend({
                addClass: function(n) {
                    var r, a, s, u, c, l, d, h = 0;
                    if (t.isFunction(n))
                        return this.each(function(e) {
                            t(this).addClass(n.call(this, e, o(this)))
                        });
                    if ("string" == typeof n && n)
                        for (r = n.match(i) || []; a = this[h++]; )
                            if (u = o(a),
                            s = 1 === a.nodeType && " " + e(u) + " ") {
                                for (l = 0; c = r[l++]; )
                                    s.indexOf(" " + c + " ") < 0 && (s += c + " ");
                                d = e(s),
                                u !== d && a.setAttribute("class", d)
                            }
                    return this
                },
                removeClass: function(n) {
                    var r, a, s, u, c, l, d, h = 0;
                    if (t.isFunction(n))
                        return this.each(function(e) {
                            t(this).removeClass(n.call(this, e, o(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof n && n)
                        for (r = n.match(i) || []; a = this[h++]; )
                            if (u = o(a),
                            s = 1 === a.nodeType && " " + e(u) + " ") {
                                for (l = 0; c = r[l++]; )
                                    for (; s.indexOf(" " + c + " ") > -1; )
                                        s = s.replace(" " + c + " ", " ");
                                d = e(s),
                                u !== d && a.setAttribute("class", d)
                            }
                    return this
                },
                toggleClass: function(e, r) {
                    var a = typeof e;
                    return "boolean" == typeof r && "string" === a ? r ? this.addClass(e) : this.removeClass(e) : t.isFunction(e) ? this.each(function(i) {
                        t(this).toggleClass(e.call(this, i, o(this), r), r)
                    }) : this.each(function() {
                        var r, s, u, c;
                        if ("string" === a)
                            for (s = 0,
                            u = t(this),
                            c = e.match(i) || []; r = c[s++]; )
                                u.hasClass(r) ? u.removeClass(r) : u.addClass(r);
                        else
                            void 0 !== e && "boolean" !== a || (r = o(this),
                            r && n.set(this, "__className__", r),
                            this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : n.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(t) {
                    var i, n, r = 0;
                    for (i = " " + t + " "; n = this[r++]; )
                        if (1 === n.nodeType && (" " + e(o(n)) + " ").indexOf(i) > -1)
                            return !0;
                    return !1
                }
            })
        }
        .apply(e, n)) && (t.exports = o)
    },
    dIAO: function(t, e, i) {
        "use strict";
        function n() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
            return e.length < 1 ? o : e.reduceRight(function(t, e) {
                return t ? function(i, n) {
                    return e(i, function(e) {
                        return t(e, n)
                    })
                }
                : e
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.compose = n;
        var o = e.IdentityFilter = function(t, e) {
            return e(t)
        }
    },
    dSzd: function(t, e, i) {
        var n = i("e8AB")("wks")
          , o = i("3Eo+")
          , r = i("7KvD").Symbol
          , a = "function" == typeof r;
        (t.exports = function(t) {
            return n[t] || (n[t] = a && r[t] || (a ? r : o)("Symbol." + t))
        }
        ).store = n
    },
    dY0y: function(t, e, i) {
        var n = i("dSzd")("iterator")
          , o = !1;
        try {
            var r = [7][n]();
            r.return = function() {
                o = !0
            }
            ,
            Array.from(r, function() {
                throw 2
            })
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !o)
                return !1;
            var i = !1;
            try {
                var r = [7]
                  , a = r[n]();
                a.next = function() {
                    return {
                        done: i = !0
                    }
                }
                ,
                r[n] = function() {
                    return a
                }
                ,
                t(r)
            } catch (t) {}
            return i
        }
    },
    dsp6: function(t, e, i) {
        "use strict";
        function n(t, e, i) {
            var n = o({}, i);
            if (arguments.length > 1 && "[object Object]" !== String(e)) {
                if (null !== e && void 0 !== e || (n.expires = -1,
                e = ""),
                "number" == typeof n.expires)
                    if (n.expires === 1 / 0)
                        n.expires = "Fri, 31 Dec 9999 23:59:59 GMT";
                    else {
                        var r = n.expires
                          , a = new Date((new Date).getTime() + 24 * r * 60 * 60 * 1e3);
                        n.expires = a.toUTCString()
                    }
                return e = String(e),
                document.cookie = [encodeURIComponent(t), "=", n.raw ? e : encodeURIComponent(e), n.expires ? "; expires=" + n.expires : "", "; path=" + (n.path || "/"), n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
            }
            n = e || {};
            var s = void 0
              , u = n.raw ? function(t) {
                return t
            }
            : decodeURIComponent;
            return (s = new RegExp("(?:^|; )" + encodeURIComponent(t) + "=([^;]*)").exec(document.cookie)) ? u(s[1]) : null
        }
        e.a = n;
        var o = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
    },
    e6n0: function(t, e, i) {
        var n = i("evD5").f
          , o = i("D2L2")
          , r = i("dSzd")("toStringTag");
        t.exports = function(t, e, i) {
            t && !o(t = i ? t : t.prototype, r) && n(t, r, {
                configurable: !0,
                value: e
            })
        }
    },
    e8AB: function(t, e, i) {
        var n = i("7KvD")
          , o = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
        t.exports = function(t) {
            return o[t] || (o[t] = {})
        }
    },
    eAms: function(t, e, i) {
        "use strict";
        e.a = {
            photoTweet: 1,
            photoCard: 2,
            playerCard: 3,
            summaryCard: 4,
            promotionCard: 5,
            plusCard: 6
        }
    },
    eIrJ: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("ZoCq"), i("IJyq"), i("d9CK"), i("fE2x")],
        void 0 !== (o = function(t) {
            "use strict";
            return t
        }
        .apply(e, n)) && (t.exports = o)
    },
    eV5I: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = "account" === t[0] ? t[1] : t[0];
            Promise.all([i.e(0), i.e(1)]).then(function(t) {
                var o = {
                    errors: i("LdtQ").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    ekH1: function(t, e, i) {
        /*! jquery.event.drag (c) 2010 Three Dub Media - http://threedubmedia.com http://threedubmedia.com/code/license */
        !function(e) {
            var n = i("4kSj");
            !function(t) {
                t.fn.drag = function(e, i, n) {
                    var o = "string" == typeof e ? e : ""
                      , r = t.isFunction(e) ? e : t.isFunction(i) ? i : null;
                    return 0 !== o.indexOf("drag") && (o = "drag" + o),
                    n = (e == r ? i : n) || {},
                    r ? this.bind(o, n, r) : this.trigger(o)
                }
                ;
                var e = t.event
                  , i = e.special
                  , n = i.drag = {
                    defaults: {
                        which: 1,
                        distance: 0,
                        not: ":input",
                        handle: null,
                        relative: !1,
                        drop: !0,
                        click: !1
                    },
                    datakey: "dragdata",
                    livekey: "livedrag",
                    add: function(i) {
                        var o = t.data(this, n.datakey)
                          , r = i.data || {};
                        o.related += 1,
                        !o.live && i.selector && (o.live = !0,
                        e.add(this, "draginit." + n.livekey, n.delegate)),
                        t.each(n.defaults, function(t, e) {
                            void 0 !== r[t] && (o[t] = r[t])
                        })
                    },
                    remove: function() {
                        t.data(this, n.datakey).related -= 1
                    },
                    setup: function() {
                        if (!t.data(this, n.datakey)) {
                            var i = t.extend({
                                related: 0
                            }, n.defaults);
                            t.data(this, n.datakey, i),
                            e.add(this, "mousedown", n.init, i),
                            this.attachEvent && this.attachEvent("ondragstart", n.dontstart)
                        }
                    },
                    teardown: function() {
                        t.data(this, n.datakey).related || (t.removeData(this, n.datakey),
                        e.remove(this, "mousedown", n.init),
                        e.remove(this, "draginit", n.delegate),
                        n.textselect(!0),
                        this.detachEvent && this.detachEvent("ondragstart", n.dontstart))
                    },
                    init: function(o) {
                        var r, a = o.data;
                        if (!(a.which > 0 && o.which != a.which) && !t(o.target).is(a.not) && (!a.handle || t(o.target).closest(a.handle, o.currentTarget).length) && (a.propagates = 1,
                        a.interactions = [n.interaction(this, a)],
                        a.target = o.target,
                        a.pageX = o.pageX,
                        a.pageY = o.pageY,
                        a.dragging = null,
                        r = n.hijack(o, "draginit", a),
                        a.propagates))
                            return r = n.flatten(r),
                            r && r.length && (a.interactions = [],
                            t.each(r, function() {
                                a.interactions.push(n.interaction(this, a))
                            })),
                            a.propagates = a.interactions.length,
                            !1 !== a.drop && i.drop && i.drop.handler(o, a),
                            n.textselect(!1),
                            e.add(document, "mousemove mouseup", n.handler, a),
                            !1
                    },
                    interaction: function(e, i) {
                        return {
                            drag: e,
                            callback: new n.callback,
                            droppable: [],
                            offset: t(e)[i.relative ? "position" : "offset"]() || {
                                top: 0,
                                left: 0
                            }
                        }
                    },
                    handler: function(o) {
                        var r = o.data;
                        switch (o.type) {
                        case !r.dragging && "mousemove":
                            if (Math.pow(o.pageX - r.pageX, 2) + Math.pow(o.pageY - r.pageY, 2) < Math.pow(r.distance, 2))
                                break;
                            o.target = r.target,
                            n.hijack(o, "dragstart", r),
                            r.propagates && (r.dragging = !0);
                        case "mousemove":
                            if (r.dragging) {
                                if (n.hijack(o, "drag", r),
                                r.propagates) {
                                    !1 !== r.drop && i.drop && i.drop.handler(o, r);
                                    break
                                }
                                o.type = "mouseup"
                            }
                        case "mouseup":
                            e.remove(document, "mousemove mouseup", n.handler),
                            r.dragging && (!1 !== r.drop && i.drop && i.drop.handler(o, r),
                            n.hijack(o, "dragend", r)),
                            n.textselect(!0),
                            !1 === r.click && r.dragging && (t.event.triggered = !0,
                            setTimeout(function() {
                                t.event.triggered = !1
                            }, 20),
                            r.dragging = !1)
                        }
                    },
                    delegate: function(i) {
                        var o, r = [], a = t.data(this, "events") || {};
                        return t.each(a.live || [], function(a, s) {
                            0 === s.preType.indexOf("drag") && (o = t(i.target).closest(s.selector, i.currentTarget)[0]) && (e.add(o, s.origType + "." + n.livekey, s.origHandler, s.data),
                            t.inArray(o, r) < 0 && r.push(o))
                        }),
                        !!r.length && t(r).bind("dragend." + n.livekey, function() {
                            e.remove(this, "." + n.livekey)
                        })
                    },
                    hijack: function(i, o, r, a, s) {
                        if (r) {
                            var u, c, l, d = {
                                event: i.originalEvent,
                                type: i.type
                            }, h = o.indexOf("drop") ? "drag" : "drop", f = a || 0, p = isNaN(a) ? r.interactions.length : a;
                            i.type = o,
                            i.originalEvent = null,
                            r.results = [];
                            do {
                                if (c = r.interactions[f]) {
                                    if ("dragend" !== o && c.cancelled)
                                        continue;
                                    l = n.properties(i, r, c),
                                    c.results = [],
                                    t(s || c[h] || r.droppable).each(function(a, s) {
                                        if (l.target = s,
                                        u = s ? e.dispatch.call(s, i, l) : null,
                                        !1 === u ? ("drag" == h && (c.cancelled = !0,
                                        r.propagates -= 1),
                                        "drop" == o && (c[h][a] = null)) : "dropinit" == o && c.droppable.push(n.element(u) || s),
                                        "dragstart" == o && (c.proxy = t(n.element(u) || c.drag)[0]),
                                        c.results.push(u),
                                        delete i.result,
                                        "dropinit" !== o)
                                            return u
                                    }),
                                    r.results[f] = n.flatten(c.results),
                                    "dropinit" == o && (c.droppable = n.flatten(c.droppable)),
                                    "dragstart" != o || c.cancelled || l.update()
                                }
                            } while (++f < p);return i.type = d.type,
                            i.originalEvent = d.event,
                            n.flatten(r.results)
                        }
                    },
                    properties: function(t, e, i) {
                        var o = i.callback;
                        return o.drag = i.drag,
                        o.proxy = i.proxy || i.drag,
                        o.startX = e.pageX,
                        o.startY = e.pageY,
                        o.deltaX = t.pageX - e.pageX,
                        o.deltaY = t.pageY - e.pageY,
                        o.originalX = i.offset.left,
                        o.originalY = i.offset.top,
                        o.offsetX = t.pageX - (e.pageX - o.originalX),
                        o.offsetY = t.pageY - (e.pageY - o.originalY),
                        o.drop = n.flatten((i.drop || []).slice()),
                        o.available = n.flatten((i.droppable || []).slice()),
                        o
                    },
                    element: function(t) {
                        if (t && (t.jquery || 1 == t.nodeType))
                            return t
                    },
                    flatten: function(e) {
                        return t.map(e, function(e) {
                            return e && e.jquery ? t.makeArray(e) : e && e.length ? n.flatten(e) : e
                        })
                    },
                    textselect: function(e) {
                        t(document)[e ? "unbind" : "bind"]("selectstart", n.dontstart).attr("unselectable", e ? "off" : "on").css("MozUserSelect", e ? "" : "none")
                    },
                    dontstart: function() {
                        return !1
                    },
                    callback: function() {}
                };
                n.callback.prototype = {
                    update: function() {
                        i.drop && this.available.length && t.each(this.available, function(t) {
                            i.drop.locate(this, t)
                        })
                    }
                },
                i.draginit = i.dragstart = i.dragend = n
            }(n),
            t.exports = n
        }()
    },
    evD5: function(t, e, i) {
        var n = i("77Pl")
          , o = i("SfB7")
          , r = i("MmMw")
          , a = Object.defineProperty;
        e.f = i("+E39") ? Object.defineProperty : function(t, e, i) {
            if (n(t),
            e = r(e, !0),
            n(i),
            o)
                try {
                    return a(t, e, i)
                } catch (t) {}
            if ("get"in i || "set"in i)
                throw TypeError("Accessors not supported!");
            return "value"in i && (t[e] = i.value),
            t
        }
    },
    ewb2: function(t, e, i) {
        var n, o;
        n = [i("AHT0")],
        void 0 !== (o = function(t) {
            "use strict";
            return t.concat
        }
        .apply(e, n)) && (t.exports = o)
    },
    exje: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    focusableDescendants: "a,textarea,select,input,button,div[contenteditable=true],div[contenteditable=plaintext-only],li[tabindex]",
                    firstTabStopClass: "js-first-tabstop",
                    lastTabStopClass: "js-last-tabstop",
                    firstTabStopSelector: ".js-first-tabstop",
                    lastTabStopSelector: ".js-last-tabstop"
                }),
                this.focusNextAvailableControl = function(e, i) {
                    var n = i.find(this.attr.focusableDescendants).not('[tabindex="-1"]').get();
                    e && "last" === e && n.reverse();
                    var a = void 0;
                    if (n.some(function(e) {
                        var i = t(e);
                        if (Object(r.a)(i) && Object(o.a)(i))
                            return a = e,
                            !0
                    }),
                    a)
                        try {
                            a.focus()
                        } catch (t) {}
                    return a && document.activeElement === a
                }
                ,
                this.createFirstLastTabStop = function(t, e, i) {
                    e = void 0 !== e ? e : 0,
                    i = void 0 !== i ? i : 0,
                    t.prepend('<div class="' + this.attr.firstTabStopClass + '" tabindex="' + e + '"></div>'),
                    t.append('<div class="' + this.attr.lastTabStopClass + '" tabindex="' + i + '"></div>')
                }
                ,
                this.removeFirstLastTabStop = function(t) {
                    t.find(this.attr.firstTabStopSelector).remove(),
                    t.find(this.attr.lastTabStopSelector).remove()
                }
            }
            var o = i("SGbo")
              , r = i("DMss");
            e.a = n
        }
        ).call(e, i("4kSj"))
    },
    f9Rl: function(t, e, i) {
        var n, o;
        n = [i("rY9R")],
        void 0 !== (o = function(t) {
            "use strict";
            function e(e, i) {
                i = i || t;
                var n = i.createElement("script");
                n.text = e,
                i.head.appendChild(n).parentNode.removeChild(n)
            }
            return e
        }
        .apply(e, n)) && (t.exports = o)
    },
    fBQ2: function(t, e, i) {
        "use strict";
        var n = i("evD5")
          , o = i("X8DO");
        t.exports = function(t, e, i) {
            e in t ? n.f(t, e, o(0, i)) : t[e] = i
        }
    },
    fE2x: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("fq1W"), i("VGKQ"), i("5JGd")],
        void 0 !== (o = function(t, e, i) {
            "use strict";
            var n = /\r/g;
            t.fn.extend({
                val: function(e) {
                    var i, o, r, a = this[0];
                    {
                        if (arguments.length)
                            return r = t.isFunction(e),
                            this.each(function(n) {
                                var o;
                                1 === this.nodeType && (o = r ? e.call(this, n, t(this).val()) : e,
                                null == o ? o = "" : "number" == typeof o ? o += "" : t.isArray(o) && (o = t.map(o, function(t) {
                                    return null == t ? "" : t + ""
                                })),
                                (i = t.valHooks[this.type] || t.valHooks[this.nodeName.toLowerCase()]) && "set"in i && void 0 !== i.set(this, o, "value") || (this.value = o))
                            });
                        if (a)
                            return (i = t.valHooks[a.type] || t.valHooks[a.nodeName.toLowerCase()]) && "get"in i && void 0 !== (o = i.get(a, "value")) ? o : (o = a.value,
                            "string" == typeof o ? o.replace(n, "") : null == o ? "" : o)
                    }
                }
            }),
            t.extend({
                valHooks: {
                    option: {
                        get: function(i) {
                            var n = t.find.attr(i, "value");
                            return null != n ? n : e(t.text(i))
                        }
                    },
                    select: {
                        get: function(e) {
                            var i, n, o, r = e.options, a = e.selectedIndex, s = "select-one" === e.type, u = s ? null : [], c = s ? a + 1 : r.length;
                            for (o = a < 0 ? c : s ? a : 0; o < c; o++)
                                if (n = r[o],
                                (n.selected || o === a) && !n.disabled && (!n.parentNode.disabled || !t.nodeName(n.parentNode, "optgroup"))) {
                                    if (i = t(n).val(),
                                    s)
                                        return i;
                                    u.push(i)
                                }
                            return u
                        },
                        set: function(e, i) {
                            for (var n, o, r = e.options, a = t.makeArray(i), s = r.length; s--; )
                                o = r[s],
                                (o.selected = t.inArray(t.valHooks.option.get(o), a) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1),
                            a
                        }
                    }
                }
            }),
            t.each(["radio", "checkbox"], function() {
                t.valHooks[this] = {
                    set: function(e, i) {
                        if (t.isArray(i))
                            return e.checked = t.inArray(t(e).val(), i) > -1
                    }
                },
                i.checkOn || (t.valHooks[this].get = function(t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                }
                )
            })
        }
        .apply(e, n)) && (t.exports = o)
    },
    fRuk: function(t, e, i) {
        "Promise"in window || (window.Promise = i("urph"))
    },
    fZjL: function(t, e, i) {
        t.exports = {
            default: i("jFbC"),
            __esModule: !0
        }
    },
    fk4z: function(t, e, i) {
        "use strict";
        var n = i("DBjh")
          , o = i("mGri")
          , r = Object(n.default)(o.a);
        e.a = r
    },
    fq1W: function(t, e, i) {
        var n, o;
        n = [i("9CHI")],
        void 0 !== (o = function(t) {
            "use strict";
            function e(e) {
                return (e.match(t) || []).join(" ")
            }
            return e
        }
        .apply(e, n)) && (t.exports = o)
    },
    gb4J: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("ewb2"), i("GUxi"), i("DdOc"), i("lAZW"), i("/zzY"), i("ypSt"), i("2ij6"), i("7ofs"), i("ggla"), i("JwrG"), i("BxZd"), i("k/l/"), i("ukCe"), i("CCiT"), i("f9Rl"), i("5JGd"), i("z06B"), i("rYQx"), i("Jozb")],
        void 0 !== (o = function(t, e, i, n, o, r, a, s, u, c, l, d, h, f, p, g) {
            "use strict";
            function m(e, i) {
                return t.nodeName(e, "table") && t.nodeName(11 !== i.nodeType ? i : i.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
            }
            function v(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
                t
            }
            function b(t) {
                var e = k.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"),
                t
            }
            function y(e, i) {
                var n, o, r, a, s, u, c, l;
                if (1 === i.nodeType) {
                    if (h.hasData(e) && (a = h.access(e),
                    s = h.set(i, a),
                    l = a.events)) {
                        delete s.handle,
                        s.events = {};
                        for (r in l)
                            for (n = 0,
                            o = l[r].length; n < o; n++)
                                t.event.add(i, r, l[r][n])
                    }
                    f.hasData(e) && (u = f.access(e),
                    c = t.extend({}, u),
                    f.set(i, c))
                }
            }
            function w(t, e) {
                var i = e.nodeName.toLowerCase();
                "input" === i && o.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
            }
            function S(i, n, o, r) {
                n = e.apply([], n);
                var s, c, f, p, m, y, w = 0, C = i.length, T = C - 1, x = n[0], k = t.isFunction(x);
                if (k || C > 1 && "string" == typeof x && !d.checkClone && E.test(x))
                    return i.each(function(t) {
                        var e = i.eq(t);
                        k && (n[0] = x.call(this, t, e.html())),
                        S(e, n, o, r)
                    });
                if (C && (s = l(n, i[0].ownerDocument, !1, i, r),
                c = s.firstChild,
                1 === s.childNodes.length && (s = c),
                c || r)) {
                    for (f = t.map(u(s, "script"), v),
                    p = f.length; w < C; w++)
                        m = s,
                        w !== T && (m = t.clone(m, !0, !0),
                        p && t.merge(f, u(m, "script"))),
                        o.call(i[w], m, w);
                    if (p)
                        for (y = f[f.length - 1].ownerDocument,
                        t.map(f, b),
                        w = 0; w < p; w++)
                            m = f[w],
                            a.test(m.type || "") && !h.access(m, "globalEval") && t.contains(y, m) && (m.src ? t._evalUrl && t._evalUrl(m.src) : g(m.textContent.replace(O, ""), y))
                }
                return i
            }
            function C(e, i, n) {
                for (var o, r = i ? t.filter(i, e) : e, a = 0; null != (o = r[a]); a++)
                    n || 1 !== o.nodeType || t.cleanData(u(o)),
                    o.parentNode && (n && t.contains(o.ownerDocument, o) && c(u(o, "script")),
                    o.parentNode.removeChild(o));
                return e
            }
            var T = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
              , x = /<script|<style|<link/i
              , E = /checked\s*(?:[^=]|=\s*.checked.)/i
              , k = /^true\/(.*)/
              , O = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            return t.extend({
                htmlPrefilter: function(t) {
                    return t.replace(T, "<$1></$2>")
                },
                clone: function(e, i, n) {
                    var o, r, a, s, l = e.cloneNode(!0), h = t.contains(e.ownerDocument, e);
                    if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || t.isXMLDoc(e)))
                        for (s = u(l),
                        a = u(e),
                        o = 0,
                        r = a.length; o < r; o++)
                            w(a[o], s[o]);
                    if (i)
                        if (n)
                            for (a = a || u(e),
                            s = s || u(l),
                            o = 0,
                            r = a.length; o < r; o++)
                                y(a[o], s[o]);
                        else
                            y(e, l);
                    return s = u(l, "script"),
                    s.length > 0 && c(s, !h && u(e, "script")),
                    l
                },
                cleanData: function(e) {
                    for (var i, n, o, r = t.event.special, a = 0; void 0 !== (n = e[a]); a++)
                        if (p(n)) {
                            if (i = n[h.expando]) {
                                if (i.events)
                                    for (o in i.events)
                                        r[o] ? t.event.remove(n, o) : t.removeEvent(n, o, i.handle);
                                n[h.expando] = void 0
                            }
                            n[f.expando] && (n[f.expando] = void 0)
                        }
                }
            }),
            t.fn.extend({
                detach: function(t) {
                    return C(this, t, !0)
                },
                remove: function(t) {
                    return C(this, t)
                },
                text: function(e) {
                    return n(this, function(e) {
                        return void 0 === e ? t.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return S(this, arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            m(this, t).appendChild(t)
                        }
                    })
                },
                prepend: function() {
                    return S(this, arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = m(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                },
                before: function() {
                    return S(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function() {
                    return S(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, i = 0; null != (e = this[i]); i++)
                        1 === e.nodeType && (t.cleanData(u(e, !1)),
                        e.textContent = "");
                    return this
                },
                clone: function(e, i) {
                    return e = null != e && e,
                    i = null == i ? e : i,
                    this.map(function() {
                        return t.clone(this, e, i)
                    })
                },
                html: function(e) {
                    return n(this, function(e) {
                        var i = this[0] || {}
                          , n = 0
                          , o = this.length;
                        if (void 0 === e && 1 === i.nodeType)
                            return i.innerHTML;
                        if ("string" == typeof e && !x.test(e) && !s[(r.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = t.htmlPrefilter(e);
                            try {
                                for (; n < o; n++)
                                    i = this[n] || {},
                                    1 === i.nodeType && (t.cleanData(u(i, !1)),
                                    i.innerHTML = e);
                                i = 0
                            } catch (t) {}
                        }
                        i && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return S(this, arguments, function(i) {
                        var n = this.parentNode;
                        t.inArray(this, e) < 0 && (t.cleanData(u(this)),
                        n && n.replaceChild(i, this))
                    }, e)
                }
            }),
            t.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, n) {
                t.fn[e] = function(e) {
                    for (var o, r = [], a = t(e), s = a.length - 1, u = 0; u <= s; u++)
                        o = u === s ? this : this.clone(!0),
                        t(a[u])[n](o),
                        i.apply(r, o.get());
                    return this.pushStack(r)
                }
            }),
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    gcfh: function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                profileClickContextExpirationMs: 6e5,
                profileClickContextSessionKey: "profileClickContext"
            }),
            o.default.mixin(this, [r.a, a.a]),
            this.scribeInteraction = function(t, e, i) {
                if (t && e) {
                    "string" == typeof t && (t = {
                        action: t
                    });
                    var n = t.action;
                    if (n) {
                        e = d({}, e, e.sourceEventData),
                        t = this.getInteractionScribeContext(t, e);
                        var o = {};
                        e.url && (o.url = e.url),
                        e.query && (o.query = e.query),
                        e.impressionId && (o.promoted = !0);
                        var r = this.interactionItem(e);
                        r && (o.items = [r]);
                        var a = this.interactionTarget(e, t);
                        a && (o.targets = [a]),
                        i = d({}, o, i, e.scribeData),
                        e.conversationOriginTweetId && (i.associations = i.associations || {},
                        i.associations[u.a.conversationOrigin] = {
                            association_id: e.conversationOriginTweetId,
                            association_type: s.a.tweet
                        }),
                        "profile_click" !== n && "mention_click" !== n || this.saveProfileClickContext(e);
                        if (("report_as_spam" === n || "block" === n) && "report_tweet" !== t.component && "report_user" !== t.component) {
                            var c = this.getUserActionAssociations(e);
                            c && (i.associations = d({}, i.associations, c))
                        }
                        this.scribe(t, e, i)
                    }
                }
            }
            ,
            this.interactionItem = function(t) {
                var e = {};
                switch ((0 === t.position || t.position) && (e.position = t.position),
                t.impressionId && (e.promoted_id = t.impressionId),
                t.itemType) {
                case "user":
                    this.userDetails(e, t),
                    this.suggestionDetails(e, t),
                    this.momentsDetails(e, t),
                    this.liveVideoEventDetails(e, t),
                    this.liveBroadcastDetails(e, t);
                    break;
                case "tweet":
                    this.tweetDetails(e, t),
                    this.cardDetails(e, t),
                    this.translationDetails(e, t),
                    this.conversationDetails(e, t),
                    this.lingerDetails(e, t),
                    this.suggestionDetails(e, t),
                    this.momentsDetails(e, t),
                    this.liveVideoEventDetails(e, t),
                    this.liveBroadcastDetails(e, t);
                    break;
                case "activity":
                    this.activityDetails(e, t),
                    "follow" === t.activityType ? (this.userDetails(e, t),
                    t.isNetworkActivity || (e.id = this.attr.userId)) : t.listId ? this.listDetails(e, t) : (this.tweetDetails(e, t),
                    this.cardDetails(e, t));
                    break;
                case "story":
                    this.storyDetails(e, t),
                    t.tweetId ? this.tweetDetails(e, t) : t.userId ? this.userDetails(e, t) : e.item_type = s.a.story
                }
                return e
            }
            ,
            this.interactionTarget = function(t, e) {
                if (this.isUserTarget(e.action, e.component)) {
                    var i = (t.isMentionClick ? t.userId : t.targetUserId) || t.userId;
                    return this.userDetails({}, {
                        userId: i
                    })
                }
            }
            ,
            this.suggestionDetails = function(t, e) {
                return e.suggestion_details && (t.suggestion_details = e.suggestion_details),
                t
            }
            ,
            this.momentsDetails = function(t, e) {
                return e.moments_details && (t.moments_details = e.moments_details),
                t
            }
            ,
            this.liveVideoEventDetails = function(t, e) {
                return e.live_video_event_details && (t.live_video_event_details = e.live_video_event_details),
                t
            }
            ,
            this.liveBroadcastDetails = function(t, e) {
                return e.live_broadcast_details && (t.live_broadcast_details = e.live_broadcast_details),
                t
            }
            ,
            this.tweetDetails = function(t, e) {
                return t.id = e.tweetId,
                t.item_type = s.a.tweet,
                t.media_details || (t.media_details = {}),
                t.media_details.photo_count = e.photoCount,
                e.relevanceType && (t.is_popular_tweet = !0),
                e.retweetId && (t.retweeting_tweet_id = e.retweetId),
                t
            }
            ,
            this.cardDetails = function(t, e) {
                return e.cardItem && l.default.push(t, e.cardItem),
                t
            }
            ,
            this.translationDetails = function(t, e) {
                return t.dest = e.dest,
                t
            }
            ,
            this.conversationDetails = function(t, e) {
                e.isConversation && (t.description = "focal"),
                e.isConversationComponent && (t.description = e.description,
                t.id = e.tweetId),
                t.conversation_details = {
                    conversation_section: e.conversationSection
                }
            }
            ,
            this.lingerDetails = function(t, e) {
                e.visibility_start && (t.visibility_start = e.visibility_start),
                e.visibility_end && (t.visibility_end = e.visibility_end)
            }
            ,
            this.userDetails = function(t, e) {
                return t.id = e.containerUserId || e.userId,
                t.item_type = s.a.user,
                e.feedbackToken && (t.token = e.feedbackToken),
                t
            }
            ,
            this.listDetails = function(t, e) {
                return t.id = e.listId,
                t.item_type = s.a.list,
                t
            }
            ,
            this.activityDetails = function(t, e) {
                return t.activity_type = e.activityType,
                e.actingUserIds && (t.acting_user_ids = e.actingUserIds),
                t
            }
            ,
            this.storyDetails = function(t, e) {
                return t.story_type = e.storyType,
                t.story_source = e.storySource,
                t.social_proof_type = e.socialProofType,
                t
            }
            ,
            this.isUserTarget = function(t, e) {
                return -1 !== ["mention_click", "profile_click", "follow", "unfollow", "block", "unblock", "report_as_spam", "add_to_list", "dm"].indexOf(t) || -1 !== ["profile_hover", "report_user", "report_tweet", "report_user_abusive", "report_tweet_abusive"].indexOf(e)
            }
            ,
            this.getInteractionScribeContext = function(t, e) {
                return "profile_click" === t.action && void 0 === t.element && (t.element = e.isPromotedBadgeClick ? "promoted_badge" : e.profileClickTarget),
                t
            }
            ,
            this.scribeInteractiveResults = function(t, e, i, n) {
                var o = this
                  , r = []
                  , a = !1;
                if ("string" == typeof t && (t = {
                    action: t
                }),
                t.action && e) {
                    e.length || (t.action = "no_results"),
                    e.forEach(function(t) {
                        a || (a = !!t.impressionId),
                        r.push(o.interactionItem(t))
                    }),
                    t = this.getInteractionScribeContext(t, i);
                    var s = {};
                    r && r.length && (s.items = r),
                    a && (s.promoted = !0),
                    this.scribe(t, i, d({}, s, n))
                }
            }
            ,
            this.associationNamespace = function(t, e) {
                var i = {
                    page: t.page,
                    section: t.section
                };
                return ["conversation", "replies", "in_reply_to"].indexOf(e) >= 0 && (i.component = e),
                i
            }
            ,
            this.getProfileUserAssociations = function() {
                var t = this.attr.profile_user && this.attr.profile_user.id_str
                  , e = null;
                return t && (e = {},
                e[u.a.associatedUser] = {
                    association_id: t,
                    association_type: s.a.user,
                    association_namespace: this.associationNamespace(c.a.scribeContext)
                }),
                e
            }
            ,
            this.getProfileClickContextAssociations = function(t) {
                var e = this.getSessionObject(this.attr.profileClickContextSessionKey) || null;
                return e && e.userId === t && e.expires > (new Date).getTime() && e.associations || null
            }
            ,
            this.saveProfileClickContext = function(t) {
                var e = {};
                t.tweetId ? (e[u.a.associatedTweet] = {
                    association_id: t.tweetId,
                    association_type: s.a.tweet,
                    association_namespace: this.associationNamespace(c.a.scribeContext, t.scribeContext.component)
                },
                t.conversationOriginTweetId && (e[u.a.conversationOrigin] = {
                    association_id: t.conversationOriginTweetId,
                    association_type: s.a.tweet
                })) : e = this.getProfileUserAssociations(),
                this.setSessionObject(this.attr.profileClickContextSessionKey, {
                    userId: t.userId,
                    associations: e,
                    expires: (new Date).getTime() + this.attr.profileClickContextExpirationMs
                })
            }
            ,
            this.getUserActionAssociations = function(t) {
                var e = t.scribeContext.component;
                return "profile_dialog" === e || "profile_follow_card" === e ? this.getProfileClickContextAssociations(t.userId) : "user" === e ? this.getProfileUserAssociations() : null
            }
        }
        var o = i("q9/C")
          , r = i("3oDc")
          , a = i("GJVY")
          , s = i("rbkv")
          , u = i("EYxo")
          , c = i("NNES")
          , l = i("YzIt")
          , d = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
        ;
        e.a = n
    },
    ggla: function(t, e, i) {
        var n, o;
        n = [i("k/l/")],
        void 0 !== (o = function(t) {
            "use strict";
            function e(e, i) {
                for (var n = 0, o = e.length; n < o; n++)
                    t.set(e[n], "globalEval", !i || t.get(i[n], "globalEval"))
            }
            return e
        }
        .apply(e, n)) && (t.exports = o)
    },
    ggwa: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[2];
            Promise.all([i.e(0), i.e(1)]).then(function(t) {
                var o = {
                    deciders: i("ipHo").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    go26: function(t, e, i) {
        var n, o;
        n = [i("2gn9")],
        void 0 !== (o = function(t) {
            "use strict";
            return t.hasOwnProperty
        }
        .apply(e, n)) && (t.exports = o)
    },
    guk2: function(t, e, i) {
        var n, o;
        n = [i("AHT0")],
        void 0 !== (o = function(t) {
            "use strict";
            return t.indexOf
        }
        .apply(e, n)) && (t.exports = o)
    },
    h65t: function(t, e, i) {
        var n = i("UuGF")
          , o = i("52gC");
        t.exports = function(t) {
            return function(e, i) {
                var r, a, s = String(o(e)), u = n(i), c = s.length;
                return u < 0 || u >= c ? t ? "" : void 0 : (r = s.charCodeAt(u),
                r < 55296 || r > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : r : t ? s.slice(u, u + 2) : a - 56320 + (r - 55296 << 10) + 65536)
            }
        }
    },
    h9ZS: function(t, e, i) {
        /*! http://mths.be/placeholder v2.0.7 by @mathias */
        !function(e) {
            var n = i("4kSj");
            !function(t) {
                function e(e) {
                    var i = {}
                      , n = /^jQuery\d+$/;
                    return t.each(e.attributes, function(t, e) {
                        e.specified && !n.test(e.name) && (i[e.name] = e.value)
                    }),
                    i
                }
                function i(t) {
                    t.attr("title", t.attr("placeholder"))
                }
                function n(e, n) {
                    var o = this
                      , r = t(o);
                    if (o.value == r.attr("placeholder") && r.hasClass("placeholder")) {
                        if (r.data("placeholder-password")) {
                            if (r = r.hide().next().show().attr("id", r.removeAttr("id").data("placeholder-id")),
                            !0 === e)
                                return r[0].value = n;
                            r.focus(),
                            "paste" == e.type && window.clipboardData && (r[0].value = window.clipboardData.getData("Text"))
                        } else
                            o.value = "",
                            r.removeClass("placeholder"),
                            o == document.activeElement && o.select();
                        i(r)
                    }
                }
                function o(n) {
                    var o, r = this, a = t(r), s = this.id;
                    if (!n && "" == r.value || a.hasClass("placeholder")) {
                        if ("password" == r.type) {
                            if (!a.data("placeholder-textinput")) {
                                try {
                                    o = a.clone().attr({
                                        type: "text"
                                    })
                                } catch (n) {
                                    o = t("<input>").attr(t.extend(e(this), {
                                        type: "text"
                                    }))
                                }
                                o.removeAttr("name").data({
                                    "placeholder-password": !0,
                                    "placeholder-id": s
                                }).bind(p),
                                a.data({
                                    "placeholder-textinput": o,
                                    "placeholder-id": s
                                }).before(o)
                            }
                            var u = r == document.activeElement;
                            a = a.removeAttr("id").hide().prev().attr("id", a.data("placeholder-id")).show(),
                            u && "password" == r.type && a.focus()
                        }
                        a.addClass("placeholder"),
                        a[0].value = a.attr("placeholder"),
                        a.removeAttr("title")
                    } else
                        a.removeClass("placeholder"),
                        i(a)
                }
                function r(e) {
                    if (t(this).hasClass("placeholder")) {
                        ({
                            35: !0,
                            36: !0,
                            37: !0,
                            38: !0,
                            39: !0,
                            40: !0
                        })[e.keyCode] && e.preventDefault()
                    }
                }
                function a(t, e) {
                    "" == this.value && (o.call(this),
                    "keyup" == t.type && s.call(this))
                }
                function s() {
                    var e = this;
                    if (t(e).hasClass("placeholder"))
                        try {
                            if (document.selection) {
                                var i = e.createTextRange();
                                i.collapse(!0),
                                i.moveEnd("character", 0),
                                i.moveStart("character", 0),
                                i.select()
                            } else
                                "number" == typeof e.selectionStart && (e.selectionStart = 0,
                                e.selectionEnd = 0)
                        } catch (t) {}
                }
                var u, c, l = "placeholder"in document.createElement("input"), d = "placeholder"in document.createElement("textarea"), h = t.fn, f = t.valHooks, p = {
                    "focus.placeholder click.placeholder": s,
                    "keydown.placeholder": r,
                    "keypress.placeholder paste.placeholder": n,
                    "keyup.placeholder blur.placeholder": a
                };
                l && d ? (c = h.placeholder = function() {
                    return this
                }
                ,
                c.input = c.textarea = !0) : (c = h.placeholder = function() {
                    var t = this;
                    return t.filter((l ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind(p).data("placeholder-enabled", !0).each(function() {
                        "" == this.value && o.call(this)
                    }),
                    t
                }
                ,
                c.input = l,
                c.textarea = d,
                u = {
                    get: function(e) {
                        var i = t(e);
                        return i.data("placeholder-enabled") && i.hasClass("placeholder") ? "" : e.value
                    },
                    set: function(e, i) {
                        var r = t(e);
                        return r.data("placeholder-enabled") ? ("" == i ? (e.value = i,
                        o.call(e)) : r.hasClass("placeholder") ? n.call(e, !0, i) || (e.value = i) : e.value = i,
                        r) : r.data("placeholder-password") ? (r.next()[0].value = i,
                        "" != i && n.call(e),
                        r) : e.value = i
                    }
                },
                l || (f.input = u),
                d || (f.textarea = u),
                t(function() {
                    t(document).delegate("form", "submit.placeholder", function() {
                        var e = t(".placeholder", this).each(n);
                        setTimeout(function() {
                            e.each(o)
                        }, 10)
                    })
                }),
                t(window).bind("beforeunload.placeholder", function() {
                    t(".placeholder").each(function() {
                        this.value = ""
                    })
                }))
            }(n),
            t.exports = n
        }()
    },
    hATt: function(t, e) {
        "function" != typeof Object.assign && (Object.assign = function(t, e) {
            "use strict";
            if (null == t)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var i = Object(t), n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                if (null != o)
                    for (var r in o)
                        Object.prototype.hasOwnProperty.call(o, r) && (i[r] = o[r])
            }
            return i
        }
        )
    },
    hJx8: function(t, e, i) {
        var n = i("evD5")
          , o = i("X8DO");
        t.exports = i("+E39") ? function(t, e, i) {
            return n.f(t, e, o(1, i))
        }
        : function(t, e, i) {
            return t[e] = i,
            t
        }
    },
    hnYP: function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = window),
                e.getComputedStyle(t)
            }
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    iLqk: function(t, e, i) {
        "use strict";
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
            return function(e, i) {
                var n = {
                    authorization: "Bearer " + t
                };
                a.a.user.id && (n["x-twitter-auth-type"] = "OAuth2Session");
                var o = Object(r.a)(c);
                return o && (n["x-csrf-token"] = o),
                e.headers = s({}, e.headers, n),
                i(e)
            }
        }
        e.a = n;
        var o = i("E//N")
          , r = i("dsp6")
          , a = i("IAMj")
          , s = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
          , u = o.a
          , c = "ct0"
    },
    iTQZ: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("Jozb"), i("VD6g")],
        void 0 !== (o = function(t) {
            "use strict";
            t.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, i) {
                t.fn[i] = function(t, e) {
                    return arguments.length > 0 ? this.on(i, null, t, e) : this.trigger(i)
                }
            }),
            t.fn.extend({
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            })
        }
        .apply(e, n)) && (t.exports = o)
    },
    jFbC: function(t, e, i) {
        i("Cdx3"),
        t.exports = i("FeBl").Object.keys
    },
    jTWp: function(t, e, i) {
        !function(t, e) {
            function i(t, e, i) {
                var n;
                return e && "object" == typeof e && (null != e[t] ? n = e[t] : i && e.get && "function" == typeof e.get && (n = e.get(t))),
                n
            }
            function n(t, e, i, n) {
                function o() {}
                function r() {}
                o.prototype = t,
                r.prototype = t.subs;
                var a, s = new o;
                s.subs = new r,
                s.subsText = {},
                s.ib();
                for (a in e)
                    s.subs[a] = e[a],
                    s.subsText[a] = n;
                for (a in i)
                    s.partials[a] = i[a];
                return s
            }
            function o(t) {
                return String(null === t || void 0 === t ? "" : t)
            }
            function r(t) {
                return t = o(t),
                d.test(t) ? t.replace(a, "&amp;").replace(s, "&lt;").replace(u, "&gt;").replace(c, "&#39;").replace(l, "&quot;") : t
            }
            t.Template = function(t, e, i, n) {
                t = t || {},
                this.r = t.code || this.r,
                this.c = i,
                this.options = n || {},
                this.text = e || "",
                this.partials = t.partials || {},
                this.subs = t.subs || {},
                this.ib()
            }
            ,
            t.Template.prototype = {
                r: function(t, e, i) {
                    return ""
                },
                v: r,
                t: o,
                render: function(t, e, i) {
                    return this.ri([t], e || {}, i)
                },
                ri: function(t, e, i) {
                    return this.r(t, e, i)
                },
                ep: function(t, e) {
                    var i = this.partials[t]
                      , o = e[i.name];
                    if (i.instance && i.base == o)
                        return i.instance;
                    if ("string" == typeof o) {
                        if (!this.c)
                            throw new Error("No compiler available.");
                        o = this.c.compile(o, this.options)
                    }
                    return o ? (this.partials[t].base = o,
                    i.subs && (void 0 === this.activeSub && (e.stackText = this.text),
                    o = n(o, i.subs, i.partials, e.stackText || this.text)),
                    this.partials[t].instance = o,
                    o) : null
                },
                rp: function(t, e, i, n) {
                    var o = this.ep(t, i);
                    return o ? o.ri(e, i, n) : ""
                },
                rs: function(t, e, i) {
                    var n = t[t.length - 1];
                    if (!h(n))
                        return void i(t, e, this);
                    for (var o = 0; o < n.length; o++)
                        t.push(n[o]),
                        i(t, e, this),
                        t.pop()
                },
                s: function(t, e, i, n, o, r, a) {
                    var s;
                    return (!h(t) || 0 !== t.length) && ("function" == typeof t && (t = this.ms(t, e, i, n, o, r, a)),
                    s = !!t,
                    !n && s && e && e.push("object" == typeof t ? t : e[e.length - 1]),
                    s)
                },
                d: function(t, e, n, o) {
                    var r, a = t.split("."), s = this.f(a[0], e, n, o), u = this.options.modelGet, c = null;
                    if ("." === t && h(e[e.length - 2]))
                        s = e[e.length - 1];
                    else
                        for (var l = 1; l < a.length; l++)
                            r = i(a[l], s, u),
                            null != r ? (c = s,
                            s = r) : s = "";
                    return !(o && !s) && (o || "function" != typeof s || (e.push(c),
                    s = this.mv(s, e, n),
                    e.pop()),
                    s)
                },
                f: function(t, e, n, o) {
                    for (var r = !1, a = null, s = !1, u = this.options.modelGet, c = e.length - 1; c >= 0; c--)
                        if (a = e[c],
                        null != (r = i(t, a, u))) {
                            s = !0;
                            break
                        }
                    return s ? (o || "function" != typeof r || (r = this.mv(r, e, n)),
                    r) : !o && ""
                },
                ls: function(t, e, i, n, r) {
                    var a = this.options.delimiters;
                    return this.options.delimiters = r,
                    this.b(this.ct(o(t.call(e, n)), e, i)),
                    this.options.delimiters = a,
                    !1
                },
                ct: function(t, e, i) {
                    if (this.options.disableLambda)
                        throw new Error("Lambda features disabled.");
                    return this.c.compile(t, this.options).render(e, i)
                },
                b: function(t) {
                    this.buf += t
                },
                fl: function() {
                    var t = this.buf;
                    return this.buf = "",
                    t
                },
                ib: function() {
                    this.buf = ""
                },
                ms: function(t, e, i, n, o, r, a) {
                    var s, u = e[e.length - 1], c = t.call(u);
                    return "function" == typeof c ? !!n || (s = this.activeSub && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text,
                    this.ls(c, u, i, s.substring(o, r), a)) : c
                },
                mv: function(t, e, i) {
                    var n = e[e.length - 1]
                      , r = t.call(n);
                    return "function" == typeof r ? this.ct(o(r.call(n)), n, i) : r
                },
                sub: function(t, e, i, n) {
                    var o = this.subs[t];
                    o && (this.activeSub = t,
                    o(e, i, this, n),
                    this.activeSub = !1)
                }
            };
            var a = /&/g
              , s = /</g
              , u = />/g
              , c = /\'/g
              , l = /\"/g
              , d = /[&<>\"\']/
              , h = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
        }(e)
    },
    jZXM: function(t, e) {
        Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function(t) {
                if (null == this)
                    throw new TypeError('"this" is null or not defined');
                var e = Object(this)
                  , i = e.length >>> 0;
                if ("function" != typeof t)
                    throw new TypeError("predicate must be a function");
                for (var n = arguments[1], o = 0; o < i; ) {
                    var r = e[o];
                    if (t.call(n, r, o, e))
                        return r;
                    o++
                }
            }
        })
    },
    jnMA: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("rY9R"), i("rTPn")],
        void 0 !== (o = function(t, e) {
            "use strict";
            t.ajaxPrefilter(function(t) {
                t.crossDomain && (t.contents.script = !1)
            }),
            t.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return t.globalEval(e),
                        e
                    }
                }
            }),
            t.ajaxPrefilter("script", function(t) {
                void 0 === t.cache && (t.cache = !1),
                t.crossDomain && (t.type = "GET")
            }),
            t.ajaxTransport("script", function(i) {
                if (i.crossDomain) {
                    var n, o;
                    return {
                        send: function(_, r) {
                            n = t("<script>").prop({
                                charset: i.scriptCharset,
                                src: i.url
                            }).on("load error", o = function(t) {
                                n.remove(),
                                o = null,
                                t && r("error" === t.type ? 404 : 200, t.type)
                            }
                            ),
                            e.head.appendChild(n[0])
                        },
                        abort: function() {
                            o && o()
                        }
                    }
                }
            })
        }
        .apply(e, n)) && (t.exports = o)
    },
    jouG: function(t, e, i) {
        (function(e) {
            t.exports = new e.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.b('<div class="\n  FollowSearchButton\n  '),
                    n.sub("variant", t, e, i),
                    n.b("\n" + i),
                    n.b("  "),
                    n.sub("hide_button", t, e, i),
                    n.b("\n" + i),
                    n.b("  "),
                    n.sub("follow_state", t, e, i),
                    n.b('">\n  <button type="button" class="\n    EdgeButton\n    EdgeButton--secondary\n'),
                    n.sub("button_size", t, e, i),
                    n.b("    FollowSearchButton-follow\n    "),
                    n.sub("tooltip", t, e, i),
                    n.b('"\n'),
                    n.sub("data_attr", t, e, i),
                    n.b(">\n    "),
                    n.sub("follow_text", t, e, i),
                    n.b("\n" + i),
                    n.b('  </button>\n  <button type="button" class="\n    EdgeButton\n    EdgeButton--primary\n'),
                    n.sub("button_size", t, e, i),
                    n.b('    FollowSearchButton-following">\n    '),
                    n.sub("following_text", t, e, i),
                    n.b("\n" + i),
                    n.b('  </button>\n  <button type="button" class="\n    EdgeButton\n    EdgeButton--danger\n'),
                    n.sub("button_size", t, e, i),
                    n.b('    FollowSearchButton-unfollow">\n    '),
                    n.sub("unfollow_text", t, e, i),
                    n.b("\n" + i),
                    n.b("  </button>\n</div>\n"),
                    n.fl()
                },
                partials: {},
                subs: {
                    variant: function(t, e, i, n) {
                        i.b("FollowSearchButton--srp")
                    },
                    hide_button: function(t, e, i, n) {
                        i.b("u-hidden")
                    },
                    follow_state: function(t, e, i, n) {},
                    button_size: function(t, e, i, n) {},
                    tooltip: function(t, e, i, n) {
                        i.b("js-tooltip")
                    },
                    data_attr: function(t, e, i, n) {
                        i.b('      data-original-title="Click Follow search to add top Tweets to your timeline"'),
                        i.b("\n" + n),
                        i.b("    ")
                    },
                    follow_text: function(t, e, i, n) {
                        i.b("Follow search")
                    },
                    following_text: function(t, e, i, n) {
                        i.b("Following search")
                    },
                    unfollow_text: function(t, e, i, n) {
                        i.b("Unfollow search")
                    }
                }
            })
        }
        ).call(e, i("jTWp"))
    },
    "k/l/": function(t, e, i) {
        var n, o;
        n = [i("VZrU")],
        void 0 !== (o = function(t) {
            "use strict";
            return new t
        }
        .apply(e, n)) && (t.exports = o)
    },
    kM2E: function(t, e, i) {
        var n = i("7KvD")
          , o = i("FeBl")
          , r = i("+ZMJ")
          , a = i("hJx8")
          , s = function(t, e, i) {
            var u, c, l, d = t & s.F, h = t & s.G, f = t & s.S, p = t & s.P, g = t & s.B, m = t & s.W, v = h ? o : o[e] || (o[e] = {}), b = v.prototype, y = h ? n : f ? n[e] : (n[e] || {}).prototype;
            h && (i = e);
            for (u in i)
                (c = !d && y && void 0 !== y[u]) && u in v || (l = c ? y[u] : i[u],
                v[u] = h && "function" != typeof y[u] ? i[u] : g && c ? r(l, n) : m && y[u] == l ? function(t) {
                    var e = function(e, i, n) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e,i)
                            }
                            return new t(e,i,n)
                        }
                        return t.apply(this, arguments)
                    };
                    return e.prototype = t.prototype,
                    e
                }(l) : p && "function" == typeof l ? r(Function.call, l) : l,
                p && ((v.virtual || (v.virtual = {}))[u] = l,
                t & s.R && b && !b[u] && a(b, u, l)))
        };
        s.F = 1,
        s.G = 2,
        s.S = 4,
        s.P = 8,
        s.B = 16,
        s.W = 32,
        s.U = 64,
        s.R = 128,
        t.exports = s
    },
    kODj: function(t, e, i) {
        (function(n) {
            var o, r;
            o = [i("Y6Nz"), i("AmlD"), i("JmAy")],
            void 0 !== (r = function(t, e, i) {
                "use strict";
                function o(t) {
                    t.events.slice().forEach(function(t) {
                        var e = [t.type];
                        t.element && e.unshift(t.element),
                        "function" == typeof t.callback && e.push(t.callback),
                        this.off.apply(this, e)
                    }, t.instance)
                }
                function r(t, e) {
                    try {
                        window.postMessage(e, "*")
                    } catch (e) {
                        throw new Error(["The event", t, "on component", this.toString(), "was triggered with non-serializable data"].join(" "))
                    }
                }
                function a(t) {
                    var e, n = [];
                    if (this.attr = new this.attrDef,
                    i.enabled && window.console) {
                        for (var o in this.attrDef.prototype)
                            n.push(o);
                        e = Object.keys(t);
                        for (var r = e.length - 1; r >= 0 && -1 != n.indexOf(e[r]); r--)
                            ;
                    }
                    for (var o in this.attrDef.prototype) {
                        if (void 0 === t[o]) {
                            if (null === this.attr[o])
                                throw new Error('Required attribute "' + o + '" not specified in attachTo for component "' + this.toString() + '".')
                        } else
                            this.attr[o] = t[o];
                        "function" == typeof this.attr[o] && (this.attr[o] = this.attr[o].call(this))
                    }
                }
                function s(t) {
                    var e = Object.create(t);
                    for (var i in this.defaults)
                        t.hasOwnProperty(i) || (e[i] = this.defaults[i]);
                    this.attr = e
                }
                function u(t) {
                    return function(e, i) {
                        n(e.target).trigger(t, i)
                    }
                }
                function c() {
                    this.trigger = function() {
                        var t, e, o, a, s, u = arguments.length - 1, c = arguments[u];
                        return "string" == typeof c || c && c.defaultBehavior || (u--,
                        o = c),
                        1 == u ? (t = n(arguments[0]),
                        a = arguments[1]) : (t = this.$node,
                        a = arguments[0]),
                        a.defaultBehavior && (s = a.defaultBehavior,
                        a = n.Event(a.type)),
                        e = a.type || a,
                        i.enabled && window.postMessage && r.call(this, e, o),
                        "object" == typeof this.attr.eventData && (o = n.extend(!0, {}, this.attr.eventData, o)),
                        t.trigger(a || e, o),
                        s && !a.isDefaultPrevented() && (this[s] || s).call(this, a, o),
                        t
                    }
                    ,
                    this.on = function() {
                        var e, i, o, r, a = arguments.length - 1, s = arguments[a];
                        if (r = "object" == typeof s ? t.delegate(this.resolveDelegateRules(s)) : "string" == typeof s ? u(s) : s,
                        2 == a ? (e = n(arguments[0]),
                        i = arguments[1]) : (e = this.$node,
                        i = arguments[0]),
                        "function" != typeof r && "object" != typeof r)
                            throw new Error('Unable to bind to "' + i + '" because the given callback is not a function or an object');
                        return o = r.bind(this),
                        o.target = r,
                        o.context = this,
                        e.on(i, o),
                        r.bound || (r.bound = []),
                        r.bound.push(o),
                        o
                    }
                    ,
                    this.off = function() {
                        var t, i, o, r = arguments.length - 1;
                        if ("function" == typeof arguments[r] && (o = arguments[r],
                        r -= 1),
                        1 == r ? (t = n(arguments[0]),
                        i = arguments[1]) : (t = this.$node,
                        i = arguments[0]),
                        o) {
                            var a = o.target ? o.target.bound : o.bound || [];
                            a && a.some(function(t, e, i) {
                                if (t.context && this.identity == t.context.identity)
                                    return i.splice(e, 1),
                                    o = t,
                                    !0
                            }, this),
                            t.off(i, o)
                        } else
                            e.findInstanceInfo(this).events.forEach(function(e) {
                                i == e.type && t.off(i, e.callback)
                            });
                        return t
                    }
                    ,
                    this.resolveDelegateRules = function(t) {
                        var e = {};
                        return Object.keys(t).forEach(function(i) {
                            if (!(i in this.attr))
                                throw new Error('Component "' + this.toString() + '" wants to listen on "' + i + '" but no such attribute was defined.');
                            e[this.attr[i]] = "string" == typeof t[i] ? u(t[i]) : t[i]
                        }, this),
                        e
                    }
                    ,
                    this.select = function(t) {
                        return this.$node.find(this.attr[t])
                    }
                    ,
                    this.attributes = function(t) {
                        var e = function() {};
                        this.attrDef && (e.prototype = new this.attrDef);
                        for (var i in t)
                            e.prototype[i] = t[i];
                        this.attrDef = e
                    }
                    ,
                    this.defaultAttrs = function(e) {
                        t.push(this.defaults, e, !0) || (this.defaults = e)
                    }
                    ,
                    this.initialize = function(t, e) {
                        if (e = e || {},
                        this.identity || (this.identity = l++),
                        !t)
                            throw new Error("Component needs a node");
                        return t.jquery ? (this.node = t[0],
                        this.$node = t) : (this.node = t,
                        this.$node = n(t)),
                        this.attrDef ? a.call(this, e) : s.call(this, e),
                        this
                    }
                    ,
                    this.teardown = function() {
                        o(e.findInstanceInfo(this))
                    }
                }
                var l = 0;
                return c
            }
            .apply(e, o)) && (t.exports = r)
        }
        ).call(e, i("4kSj"))
    },
    "kX/m": function(t, e, i) {
        "use strict";
        function n(t) {
            a.a.attachTo(".PermalinkOverlay", {
                noTeardown: !0,
                modalEnabledClass: "overlay-enabled",
                modalSelector: ".PermalinkOverlay-modal",
                modalContainerSelector: ".PermalinkOverlay",
                modalContentSelector: ".PermalinkOverlay-content",
                modalBodySelector: ".PermalinkOverlay-body",
                initialFocusSelector: ".permalink-tweet"
            }),
            o.a.attachTo(document, {
                pushState: t.pushState,
                noTeardown: !0
            }),
            r.a.attachTo(document, {
                currentPageName: t.pageName,
                underlyingSectionName: t.sectionName,
                pushState: t.pushState,
                noTeardown: !0
            }),
            s.a.attachTo(document)
        }
        var o = i("odeb")
          , r = i("kv+H")
          , a = i("y+gB")
          , s = i("PIW/");
        e.a = n
    },
    kdUt: function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    knuC: function(t, e) {
        t.exports = function(t, e, i) {
            var n = void 0 === i;
            switch (e.length) {
            case 0:
                return n ? t() : t.call(i);
            case 1:
                return n ? t(e[0]) : t.call(i, e[0]);
            case 2:
                return n ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
            case 3:
                return n ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
            case 4:
                return n ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3])
            }
            return t.apply(i, e)
        }
    },
    "kv+H": function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                pushState: !0,
                currentPageName: "",
                underlyingSectionName: "",
                statsName: "permalink_overlay"
            }),
            this.pushState = function(t, e) {
                if (e.href !== Object(a.a)()) {
                    var i = {
                        inOverlay: !0,
                        rollbackCount: this.rollbackCount() + 1
                    };
                    history.pushState(i, e.title, e.href)
                }
                this.rollbackCount() > 1 && this.trigger("dataNeedsShowBackButton")
            }
            ,
            this.handlePageSuccess = function(t) {
                t.init_data && t.page && t.module ? (t.href = t.init_data.href,
                t.init_data.overlayCapable ? (this.trigger("dataOverlayDoPushState", t),
                this.trigger("dataOverlayPageSuccess", t)) : this.trigger("uiNavigate", {
                    href: t.href
                })) : this.handlePageError(t)
            }
            ,
            this.handlePageError = function(t) {
                this.trigger("dataOverlayPageFailure", t)
            }
            ,
            this.getHeaders = function() {
                return {
                    "X-Overlay-Request": !0,
                    "X-Previous-Page-Name": this.currentPageName
                }
            }
            ,
            this.currentPageChanged = function(t, e) {
                this.currentPageName = e.init_data.pageName,
                this.underlyingSectionName = e.init_data.sectionName
            }
            ,
            this.getPage = function(t, e) {
                var i = this;
                this.trigger("dataNeedsHideBackButton"),
                this.get({
                    headers: this.getHeaders(),
                    url: e.href,
                    data: {
                        conversation_id: e.conversation_id
                    },
                    success: function(t) {
                        return i.handlePageSuccess(c({}, t, {
                            autoplay: e && e.autoplay
                        }))
                    },
                    error: this.handlePageError.bind(this)
                })
            }
            ,
            this.rollback = function() {
                this.trigger("dataNeedsRollback", {
                    rollbackCount: this.rollbackCount()
                })
            }
            ,
            this.updateScribeSection = function() {
                this.trigger("dataUpdateScribeSection", {
                    sectionName: this.underlyingSectionName
                })
            }
            ,
            this.after("initialize", function() {
                this.currentPageName = this.attr.currentPageName,
                this.underlyingSectionName = this.attr.underlyingSectionName,
                this.on("uiPageChanged", this.currentPageChanged),
                this.on("uiOverlayNeedsPage", this.getPage),
                Object(u.a)(this.attr.pushState) && (this.on("uiOverlayClosedByRequest", this.rollback),
                this.on("dataOverlayDoPushState", this.pushState)),
                this.on("uiOverlayClosed", this.updateScribeSection)
            })
        }
        var o = i("DBjh")
          , r = i("VtWx")
          , a = i("Ckrd")
          , s = i("L6po")
          , u = i("c16W")
          , c = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
        ;
        e.a = Object(o.default)(n, r.a, s.a)
    },
    "kxx+": function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("AmlD")
          , o = i.n(n);
        e.default = o.a
    },
    lAZW: function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return /^(?:checkbox|radio)$/i
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    "lGP/": function(t, e, i) {
        "use strict";
        var n = i("UbJK")
          , o = i("mVMF")
          , r = i("Lv/Q")
          , a = i("iLqk")
          , s = i("Ujh8")
          , u = i("RTim")
          , c = i("9zLT")
          , l = {
            host: "https://api.twitter.com",
            filters: [Object(a.a)(), Object(n.a)(new o.a(function() {
                return d
            }
            )), Object(c.a)(), Object(s.a)(), Object(u.a)()]
        }
          , d = new r.a(l);
        e.a = d
    },
    lOnJ: function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t)
                throw TypeError(t + " is not a function!");
            return t
        }
    },
    lUIe: function(t, e, i) {
        "use strict";
        function n(t) {
            return t.charCodeAt(0) <= 32
        }
        function o(t, e) {
            if ("" === t)
                return "";
            var i = t.split("")
              , n = i.pop();
            return t = i.join(""),
            "0" === n ? o(t, !0) + "9" : (n -= 1,
            "" === t && 0 === n ? e ? "" : "0" : t + n)
        }
        function r(t) {
            var e = t.charCodeAt(0);
            return e >= 48 && e <= 57
        }
        function a(t, e) {
            for (var i = 0, n = 0, o = 0, a = void 0, s = void 0; ; n++,
            o++) {
                if (a = t.charAt(n),
                s = e.charAt(o),
                !r(a) && !r(s))
                    return i;
                if (!r(a))
                    return -1;
                if (!r(s))
                    return 1;
                a < s ? 0 === i && (i = -1) : a > s && 0 === i && (i = 1)
            }
        }
        function s(t, e) {
            var i = 0
              , o = 0
              , s = void 0
              , u = void 0
              , c = void 0
              , l = void 0
              , d = void 0;
            if (t === e)
                return 0;
            for ("number" == typeof t && (t = t.toString()),
            "number" == typeof e && (e = e.toString()); ; ) {
                if (i > 100)
                    return;
                for (s = u = 0,
                c = t.charAt(i),
                l = e.charAt(o); n(c) || "0" === c; )
                    "0" === c ? s++ : s = 0,
                    c = t.charAt(++i);
                for (; n(l) || "0" === l; )
                    "0" === l ? u++ : u = 0,
                    l = e.charAt(++o);
                if (r(c) && r(l) && 0 !== (d = a(t.substring(i), e.substring(o))))
                    return d;
                if (0 == c && 0 == l)
                    return s - u;
                if (c < l)
                    return -1;
                if (c > l)
                    return 1;
                ++i,
                ++o
            }
        }
        var u = {
            compare: s,
            max: function() {
                if (arguments.length)
                    return [].reduce.call(arguments, function(t, e) {
                        return s(t, e) > 0 ? t : e
                    })
            },
            min: function(t, e) {
                if (arguments.length)
                    return [].reduce.call(arguments, function(t, e) {
                        return s(t, e) < 0 ? t : e
                    })
            },
            wordAtPosition: function(t, e, i, n) {
                i = i || /[^\s]+/g,
                n = n || 0;
                var o = null;
                return t.replace(i, function() {
                    var t = arguments[n]
                      , i = arguments[arguments.length - 2];
                    i <= e && i + t.length >= e && (o = t)
                }),
                o
            },
            parseBigInt: function(t) {
                return isNaN(Number(t)) ? NaN : t.toString()
            },
            subtractOne: o
        };
        e.a = u
    },
    lV5l: function(t, e, i) {
        "use strict";
        (function(t) {
            function i() {
                return t("body").hasClass("overlay-enabled") ? t(".PermalinkOverlay") : n || ([document.body, document.documentElement].forEach(function(t) {
                    var e = t.scrollTop
                      , i = e > 0 ? e - 1 : e + 1;
                    t.scrollTop = i,
                    t.scrollTop !== e && (n = t.tagName.toLowerCase())
                }),
                n)
            }
            var n = void 0;
            e.a = function(e, n, o) {
                t(i()).animate({
                    scrollTop: e
                }, n, o),
                i() || o && o()
            }
        }
        ).call(e, i("4kSj"))
    },
    lktj: function(t, e, i) {
        var n = i("Ibhu")
          , o = i("xnc9");
        t.exports = Object.keys || function(t) {
            return n(t, o)
        }
    },
    lm8W: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("k/l/"), i("WNtH")],
        void 0 !== (o = function(t, e, i) {
            "use strict";
            function n(e) {
                var i, n = e.ownerDocument, o = e.nodeName, a = r[o];
                return a || (i = n.body.appendChild(n.createElement(o)),
                a = t.css(i, "display"),
                i.parentNode.removeChild(i),
                "none" === a && (a = "block"),
                r[o] = a,
                a)
            }
            function o(t, o) {
                for (var r, a, s = [], u = 0, c = t.length; u < c; u++)
                    a = t[u],
                    a.style && (r = a.style.display,
                    o ? ("none" === r && (s[u] = e.get(a, "display") || null,
                    s[u] || (a.style.display = "")),
                    "" === a.style.display && i(a) && (s[u] = n(a))) : "none" !== r && (s[u] = "none",
                    e.set(a, "display", r)));
                for (u = 0; u < c; u++)
                    null != s[u] && (t[u].style.display = s[u]);
                return t
            }
            var r = {};
            return t.fn.extend({
                show: function() {
                    return o(this, !0)
                },
                hide: function() {
                    return o(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        i(this) ? t(this).show() : t(this).hide()
                    })
                }
            }),
            o
        }
        .apply(e, n)) && (t.exports = o)
    },
    ltne: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("ZWgy"), i("rTPn")],
        void 0 !== (o = function(t, e) {
            "use strict";
            t.ajaxSettings.xhr = function() {
                try {
                    return new window.XMLHttpRequest
                } catch (t) {}
            }
            ;
            var i = {
                0: 200,
                1223: 204
            }
              , n = t.ajaxSettings.xhr();
            e.cors = !!n && "withCredentials"in n,
            e.ajax = n = !!n,
            t.ajaxTransport(function(t) {
                var o, r;
                if (e.cors || n && !t.crossDomain)
                    return {
                        send: function(e, n) {
                            var a, s = t.xhr();
                            if (s.open(t.type, t.url, t.async, t.username, t.password),
                            t.xhrFields)
                                for (a in t.xhrFields)
                                    s[a] = t.xhrFields[a];
                            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                            t.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                            for (a in e)
                                s.setRequestHeader(a, e[a]);
                            o = function(t) {
                                return function() {
                                    o && (o = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null,
                                    "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? n(0, "error") : n(s.status, s.statusText) : n(i[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                        binary: s.response
                                    } : {
                                        text: s.responseText
                                    }, s.getAllResponseHeaders()))
                                }
                            }
                            ,
                            s.onload = o(),
                            r = s.onerror = o("error"),
                            void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                                4 === s.readyState && window.setTimeout(function() {
                                    o && r()
                                })
                            }
                            ,
                            o = o("abort");
                            try {
                                s.send(t.hasContent && t.data || null)
                            } catch (t) {
                                if (o)
                                    throw t
                            }
                        },
                        abort: function() {
                            o && o()
                        }
                    }
            })
        }
        .apply(e, n)) && (t.exports = o)
    },
    mClu: function(t, e, i) {
        var n = i("kM2E");
        n(n.S + n.F * !i("+E39"), "Object", {
            defineProperty: i("evD5").f
        })
    },
    mGri: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                o.default.mixin(this, [r.a]),
                this.defaultAttrs({
                    menuListSelector: ".dropdown-menu ul",
                    menuItemSelector: ".dropdown-menu li:not(.dropdown-divider)",
                    menuitemFragmentSelector: ".dropdown-menu li a[href=#]",
                    dividerSelector: ".dropdown-divider",
                    dividerClass: "dropdown-divider",
                    selectedMenuItemSelector: ".js-selected",
                    firstMenuItemSelector: "li:first-child",
                    lastMenuItemSelector: "li:last-child",
                    selectedMenuItemClass: "js-selected"
                }),
                this.applyARIAToMenuItems = function() {
                    this.$dropdown.find("li").attr("role", "presentation"),
                    this.$dropdown.find(this.attr.menuItemSelector).each(function(e, i) {
                        var n = t(i).find("a, button").eq(0);
                        !!n.length && Object(a.a)(n) && Object(s.a)(n) && n.attr({
                            role: "menuitem"
                        })
                    })
                }
                ,
                this.applyARIAToMenu = function() {
                    var t = this.$dropdown.find(this.attr.menuListSelector)
                      , e = this.$dropdown.find(this.attr.togglerSelector)
                      , i = void 0;
                    e.length && !(i = e.attr("id")) && (i = "menu-" + u++,
                    e.attr("id", i)),
                    t.attr({
                        tabIndex: -1,
                        role: "menu"
                    }),
                    i && t.attr("aria-labelledby", i)
                }
                ,
                this.moveSelection = function(t) {
                    if (this.isOpen()) {
                        var e = {
                            38: "prev",
                            40: "next"
                        }[t.keyCode];
                        if (e) {
                            var i = this.$dropdown.find(this.attr.menuListSelector).find("[role=menuitem]")
                              , n = this.$dropdown.find(this.attr.selectedMenuItemSelector)
                              , o = void 0
                              , r = void 0;
                            n.length && (r = i.index(n),
                            r = "next" === e ? r + 1 : r - 1,
                            o = i.eq(r)),
                            (!o || o && !o.length) && (o = "next" === e ? i.first() : i.last()),
                            o.length && (n.removeClass(this.attr.selectedMenuItemClass),
                            o.addClass(this.attr.selectedMenuItemClass),
                            o[0].focus(),
                            t.preventDefault())
                        }
                    }
                }
                ,
                this.applyARIAAndFocus = function(t) {
                    var e = this.$dropdown
                      , i = void 0;
                    e && e.is(t.target) && (this.applyARIAToMenu(),
                    this.applyARIAToMenuItems(),
                    i = this.$dropdown.find(this.attr.menuListSelector),
                    i.attr("aria-hidden", !1),
                    i[0].focus(),
                    this.trigger("uiDropdownFocused"))
                }
                ,
                this.toggleARIAHiddenState = function(t) {
                    var e = this.$dropdown;
                    e && e.is(t.target) && (e.find(this.attr.menuListSelector).attr("aria-hidden", !0),
                    e.find(this.attr.selectedMenuItemSelector).removeClass(this.attr.selectedMenuItemClass))
                }
                ,
                this.preventFragmentNavigation = function(t) {
                    this.isOpen() && t.preventDefault()
                }
                ,
                this.after("initialize", function() {
                    this.on(document, "keydown", {
                        menuListSelector: this.moveSelection
                    }),
                    this.on(document, "click", {
                        menuitemFragmentSelector: this.preventFragmentNavigation
                    }),
                    this.on(document, "uiDropdownOpened", this.applyARIAAndFocus),
                    this.on(document, "uiDropdownClosed", this.toggleARIAHiddenState)
                })
            }
            var o = i("q9/C")
              , r = i("oHsY")
              , a = i("SGbo")
              , s = i("DMss")
              , u = 0;
            e.a = n
        }
        ).call(e, i("4kSj"))
    },
    mJ5M: function(t, e, i) {
        "use strict";
        var n = {
            getPosition: function(t) {
                try {
                    if (document.selection) {
                        var e = document.selection.createRange();
                        return e.moveStart("character", -t.value.length),
                        e.text.length
                    }
                    if ("number" == typeof t.selectionStart)
                        return t.selectionStart
                } catch (t) {}
                return 0
            },
            setPosition: function(t, e) {
                try {
                    if (document.selection) {
                        var i = t.createTextRange();
                        i.collapse(!0),
                        i.moveEnd("character", e),
                        i.moveStart("character", e),
                        i.select()
                    } else
                        "number" == typeof t.selectionStart && (t.selectionStart = e,
                        t.selectionEnd = e)
                } catch (t) {}
            },
            getSelection: function() {
                return window.getSelection ? window.getSelection().toString() : document.selection.createRange().text
            }
        };
        e.a = n
    },
    mRBi: function(t, e, i) {
        "use strict";
        (function(t) {
            function i() {
                this.calculateScrollbarWidth = function() {
                    if (!(t("#scrollbar-width").length > 0)) {
                        var e = t('<div class="modal-measure-scrollbar"/>').prependTo(t("body"))
                          , i = t('<div class="inner"/>').appendTo(e)
                          , n = e.width() - i.width();
                        e.remove(),
                        t("head").append(['<style id="scrollbar-width">', ".compensate-for-scrollbar,", ".modal-enabled,", ".modal-enabled .global-nav-inner,", ".profile-editing,", ".profile-editing .global-nav-inner,", ".overlay-enabled,", ".overlay-enabled .global-nav-inner,", ".grid-enabled,", ".grid-enabled .global-nav-inner,", ".gallery-enabled,", ".gallery-enabled .global-nav-inner {", "margin-right: " + n + "px", "}", "</style>"].join("\n"))
                    }
                }
            }
            e.a = i
        }
        ).call(e, i("4kSj"))
    },
    mVMF: function(t, e, i) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        var o = i("sp77")
          , r = i.n(o)
          , a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , s = "gt"
          , u = function() {
            function t(e) {
                n(this, t),
                this.getHttpClient = e,
                navigator.cookieEnabled && (this._value = r.a.parse(document.cookie)[s])
            }
            return a(t, [{
                key: "refresh",
                value: function() {
                    return this.refreshPromise || (this.refreshPromise = this._refresh()),
                    this.refreshPromise
                }
            }, {
                key: "getValue",
                value: function() {
                    return this._value || this.refreshPromise || this.refresh(),
                    this.refreshPromise || Promise.resolve(this._value)
                }
            }, {
                key: "_getSerializedCookie",
                value: function() {
                    return this.getValue().then(function(t) {
                        var e = {
                            domain: ".twitter.com",
                            path: "/",
                            maxAge: t ? 10800 : 0
                        };
                        return r.a.serialize(s, t, e)
                    })
                }
            }, {
                key: "_refresh",
                value: function() {
                    var t = this;
                    return this.getHttpClient().dispatch({
                        method: "POST",
                        skipGuestAuth: !0,
                        path: "/1.1/guest/activate.json",
                        host: "https://api.twitter.com"
                    }).then(function(e) {
                        return delete t.refreshPromise,
                        t._value = JSON.parse(e.body).guest_token,
                        t._getSerializedCookie().then(function(e) {
                            return document.cookie = e,
                            t._value
                        })
                    })
                }
            }]),
            t
        }();
        e.a = u
    },
    msXi: function(t, e, i) {
        var n = i("77Pl");
        t.exports = function(t, e, i, o) {
            try {
                return o ? e(n(i)[0], i[1]) : e(i)
            } catch (e) {
                var r = t.return;
                throw void 0 !== r && n(r.call(t)),
                e
            }
        }
    },
    mw3O: function(t, e, i) {
        "use strict";
        var n = i("CwSZ")
          , o = i("DDCP")
          , r = i("XgCd");
        t.exports = {
            formats: r,
            parse: o,
            stringify: n
        }
    },
    mzT9: function(t, e, i) {
        "use strict";
        var n = i("xK4V")
          , o = i.n(n)
          , r = function() {
            function t(t) {
                try {
                    return document.activeElement === t
                } catch (t) {
                    return !1
                }
            }
            function e(e) {
                if (!t(e))
                    return 0;
                var i = void 0;
                if ("number" == typeof e.selectionStart)
                    return e.selectionStart;
                if (document.selection) {
                    e.focus(),
                    i = document.selection.createRange(),
                    i.moveStart("character", -e.value.length);
                    return i.text.length
                }
            }
            function i(e, i) {
                if (t(e))
                    if ("number" == typeof e.selectionStart)
                        e.selectionStart = i,
                        e.selectionEnd = i;
                    else if (document.selection) {
                        var n = e.createTextRange();
                        n.collapse(!0),
                        n.moveEnd("character", i),
                        n.moveStart("character", i),
                        n.select()
                    }
            }
            function n(t, e, i) {
                for (var n = 0, o = "", r = e(t), a = 0; a < r.length; a++) {
                    var s = r[a]
                      , u = "";
                    s.screenName && (u = "screenName"),
                    s.hashtag && (u = "hashtag"),
                    s.url && (u = "url"),
                    s.cashtag && (u = "cashtag");
                    var c = {
                        entityText: t.slice(s.indices[0], s.indices[1]),
                        entityType: u
                    };
                    o += t.slice(n, s.indices[0]) + i(c),
                    n = s.indices[1]
                }
                return o + t.slice(n, t.length)
            }
            function r(t) {
                var e = t.match(f)
                  , i = t;
                return (e || "rtl" === w) && (i = n(i, o.a.extractEntitiesWithIndices, function(t) {
                    return "screenName" === t.entityType ? g + t.entityText + m : "hashtag" === t.entityType ? t.entityText.charAt(1).match(f) ? t.entityText : g + t.entityText : "url" === t.entityType ? t.entityText + g : "cashtag" === t.entityType ? g + t.entityText : void 0
                })),
                i
            }
            function a(t) {
                var n = void 0
                  , o = t.target ? t.target : t.srcElement
                  , r = t.which ? t.which : t.keyCode;
                if (r === v.BACKSPACE)
                    n = -1;
                else {
                    if (r !== v.DELETE)
                        return;
                    n = 0
                }
                var a = e(o)
                  , s = o.value
                  , u = 0
                  , c = void 0;
                do {
                    (c = s.charAt(a + n) || "") && (a += n,
                    u++,
                    s = s.slice(0, a) + s.slice(a + 1, s.length))
                } while (c.match(p));u > 1 && (o.value = s,
                i(o, a),
                t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            }
            function s(t) {
                return t.replace(p, "")
            }
            function u(t) {
                var e = t.match(f);
                t = t.replace(y, "");
                var i = 0
                  , n = t.replace(S, "")
                  , r = w;
                if (!n || !n.replace(/#/g, ""))
                    return "rtl" === r;
                if (!e)
                    return !1;
                if (t) {
                    var a = o.a.extractMentionsWithIndices(t)
                      , s = a.length
                      , u = void 0;
                    for (u = 0; u < s; u++)
                        i += a[u].screenName.length + 1;
                    var c = o.a.extractUrlsWithIndices(t)
                      , l = c.length;
                    for (u = 0; u < l; u++)
                        i += c[u].url.length + 2
                }
                var d = n.length - i;
                return d > 0 && e.length / d > h
            }
            function c(t) {
                var e = t.target || t.srcElement;
                "keydown" !== t.type || 91 !== t.keyCode && 16 !== t.keyCode && 88 !== t.keyCode && 17 !== t.keyCode ? "keyup" !== t.type || 91 !== t.keyCode && 16 !== t.keyCode && 88 !== t.keyCode && 17 !== t.keyCode || (T[String(t.keyCode)] = !1) : T[String(t.keyCode)] = !0,
                (!x && T[91] || x && T[17]) && T[16] && T[88] && (C = !0,
                "rtl" === e.dir ? l("ltr", e) : l("rtl", e),
                T = {
                    91: !1,
                    16: !1,
                    88: !1,
                    17: !1
                })
            }
            function l(t, e) {
                e.setAttribute("dir", t),
                e.style.direction = t,
                e.style.textAlign = "rtl" === t ? "right" : "left"
            }
            var d = {}
              , h = .3
              , f = /[\u0590-\u083F]|[\u08A0-\u08FF]|[\uFB1D-\uFDFF]|[\uFE70-\uFEFF]/gm
              , p = /\u200e|\u200f/gm
              , g = "‎"
              , m = "‏"
              , v = {
                BACKSPACE: 8,
                DELETE: 46
            }
              , b = !1
              , y = ""
              , w = ""
              , S = /^\s+|\s+$/g
              , C = !1
              , T = {
                91: !1,
                16: !1,
                88: !1,
                17: !1
            }
              , x = -1 === navigator.userAgent.indexOf("Mac");
            return d.onTextChange = function(t) {
                var e = t || window.event;
                c(t),
                "keydown" === e.type && a(e),
                d.setText(e.target || e.srcElement)
            }
            ,
            d.setText = function(t) {
                w || (w = t.style.direction ? t.style.direction : t.dir ? t.dir : document.body.style.direction ? document.body.style.direction : document.body.dir),
                2 === arguments.length && (w = t.ownerDocument.documentElement.className,
                y = arguments[1]);
                var n = t.value;
                if (n) {
                    var o = s(n);
                    b = u(o);
                    var a = r(o)
                      , c = b ? "rtl" : "ltr";
                    a !== n && (t.value = a,
                    i(t, e(t) + a.length - o.length)),
                    C || l(c, t)
                }
            }
            ,
            d.textLength = function(t) {
                for (var e = s(t), i = o.a.extractUrls(e), n = e.length - i.join("").length, r = i.length, a = 0; a < r; a++)
                    n += 20,
                    /^https:/.test(i[a]) && (n += 1);
                return n
            }
            ,
            d.cleanText = function(t) {
                return s(t)
            }
            ,
            d.addRTLMarkers = function(t) {
                return r(t)
            }
            ,
            d.shouldBeRTL = function(t) {
                return u(t)
            }
            ,
            d
        }();
        e.a = r
    },
    n59M: function(t, e, i) {
        (function(e) {
            function n(t, e, i) {
                e = e || {};
                for (var n in a)
                    e[n] || (e[n] = a[n]);
                return s.render(t, e, i)
            }
            var o = i("Opvs").default
              , r = {
                "search/components/follow_search_button": i("jouG")
            }
              , a = o(r)
              , s = new e.Template({
                code: function(t, e, i) {
                    var n = this;
                    return n.b(i = i || ""),
                    n.b(n.rp("<search/components/follow_search_button0", t, e, "")),
                    n.fl()
                },
                partials: {
                    "<search/components/follow_search_button0": {
                        name: "search/components/follow_search_button",
                        partials: {},
                        subs: {
                            variant: function(t, e, i, n) {
                                i.b("FollowSearchButton--typeahead")
                            },
                            hide_button: function(t, e, i, n) {},
                            follow_state: function(t, e, i, n) {
                                i.b("following")
                            },
                            tooltip: function(t, e, i, n) {},
                            data_attr: function(t, e, i, n) {},
                            button_size: function(t, e, i, n) {
                                i.b("EdgeButton--small")
                            },
                            follow_text: function(t, e, i, n) {
                                i.b("Follow")
                            },
                            following_text: function(t, e, i, n) {
                                i.b("Following")
                            },
                            unfollow_text: function(t, e, i, n) {
                                i.b("Unfollow")
                            }
                        }
                    }
                },
                subs: {}
            });
            t.exports = {
                template: s,
                partials: a,
                render: n
            }
        }
        ).call(e, i("jTWp"))
    },
    njoX: function(t, e, i) {
        "use strict";
        (function(t) {
            function i(e, i, n) {
                function o() {
                    var n = t("#init-data").val()
                      , o = JSON.parse(n)
                      , r = t.makeArray(arguments);
                    !function() {
                        r.forEach(function(t) {
                            return t(o)
                        });
                        var n = t(document);
                        if (n.on("uiSwiftLoaded uiPageChanged", function() {
                            return window.__swift_loaded = !0
                        }),
                        n.on("uiBeforeNewPageLoad", function() {
                            return window.__swift_loaded = !1
                        }),
                        t("body").removeClass(o.baseFoucClass),
                        n.trigger("uiSwiftLoaded"),
                        window.swiftActionQueue) {
                            var a = window.swiftActionQueue;
                            e.enabled && a.logActions(),
                            a.flush(t),
                            e.enabled || (window.swiftActionQueue = void 0)
                        }
                        if (window.ttftData) {
                            var s = window.ttft;
                            s && s.recordMilestone("aq_empty_time", s.now()),
                            i.startAjaxTracking()
                        }
                        var u = ["uiHasInjectedNewTimeline", "uiHasInjectedOldTimelineItems", "uiHasInjectedRangeTimelineItems", "uiHasInjectedNewTimelineItems", "uiOverlayPageChanged", "uiPermalinkThreadExpanded", "uiExpandedConversationRendered", "uiTweetInserted", "uiPageChanged", "uiShowRelatedVideoTweets", "uiLoadDynamicContent", "uiDMConversationUpdated"].join(" ");
                        n.on(u, function() {
                            n.trigger("uiWatchAutoplayMedia"),
                            n.trigger("uiWatchUnloadedCards"),
                            n.trigger("uiWatchPlayableMedia"),
                            n.trigger("uiNeedUpdateInjectedTweetStats")
                        })
                    }()
                }
                location.search.match(/debug=1/) && t("body").addClass("debug"),
                t("body").hasClass("debug") && window.console ? (window.DEBUG = e,
                e.enable(!0),
                t(document).on("scribedata.ScribeTransport", function(t, e) {
                    var i = void 0;
                    if (i = e.event_namespace) {
                        [i.client, i.page, i.section, i.component, i.element, i.action].join(":")
                    }
                })) : e.enable(!1),
                n(this, t("input.swift-boot-module").map(function(e, i) {
                    return t(i).val()
                }).toArray(), o)
            }
            e.a = i
        }
        ).call(e, i("4kSj"))
    },
    nqm3: function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                loginFormSubmitSelector: ".js-submit",
                focusFieldSelector: ".js-signin-email",
                signupLinkSelector: ".LoginDialog-signupLink"
            }),
            this.notifyLoginButtonClicked = function() {
                this.trigger("uiLoginButtonClicked")
            }
            ,
            this.signupClick = function() {
                this.trigger("uiSignupLinkClicked")
            }
            ,
            this.openAndFocus = function() {
                this.open(),
                this.select("focusFieldSelector").focus()
            }
            ,
            this.after("initialize", function() {
                this.$dialog = this.$node,
                this.after("open", function() {
                    this.trigger("uiLoginDialogOpened")
                }),
                this.after("close", function() {
                    this.trigger("uiLoginDialogClosed")
                }),
                this.on("click", {
                    loginFormSubmitSelector: this.notifyLoginButtonClicked,
                    signupLinkSelector: this.signupClick
                }),
                this.on(document, "uiOpenLoginDialog", this.openAndFocus)
            })
        }
        var o = i("DBjh")
          , r = i("UHc7")
          , a = i("3oDc");
        e.a = Object(o.default)(n, r.a, a.a)
    },
    nrgU: function(t, e, i) {
        "use strict";
        function n() {
            var t = {
                account: function(t) {
                    var e = {
                        message: t.input,
                        items: [{
                            id: t.query,
                            item_type: a.a.user,
                            position: t.index
                        }],
                        format_version: 2,
                        event_info: t.item ? t.item.origin : void 0
                    };
                    this.scribe("profile_click", t, e)
                },
                search: function(e) {
                    if (this.lastCompletion && e.query === this.lastCompletion.query)
                        t.topics.call(this, this.lastCompletion);
                    else {
                        var i = {
                            items: [{
                                item_query: e.query,
                                item_type: a.a.search
                            }],
                            format_version: 2
                        };
                        this.scribe("search", e, i)
                    }
                },
                topics: function(t) {
                    var e = {
                        message: t.input,
                        items: [{
                            item_query: t.query,
                            item_type: a.a.search,
                            position: t.index
                        }],
                        format_version: 2
                    };
                    this.scribe("search", t, e)
                },
                account_search: function(t) {
                    this.scribe("people_search", t, {
                        query: t.input
                    })
                },
                followed_search: function(t) {
                    var e = {
                        message: t.input,
                        items: [{
                            item_query: t.query,
                            item_type: a.a.savedSearch,
                            position: t.index
                        }],
                        format_version: 2
                    };
                    this.scribe({
                        element: "followed_search",
                        action: "search"
                    }, t, e)
                },
                saved_search: function(t) {
                    var e = {
                        message: t.input,
                        items: [{
                            item_query: t.query,
                            item_type: a.a.savedSearch,
                            position: t.index
                        }],
                        format_version: 2
                    };
                    this.scribe({
                        element: "saved_search",
                        action: "search"
                    }, t, e)
                },
                recent_search: function(t) {
                    var e = {
                        message: t.input,
                        items: [{
                            item_query: t.query,
                            item_type: a.a.search,
                            position: t.index
                        }],
                        format_version: 2
                    };
                    this.scribe({
                        element: "recent_search",
                        action: "search"
                    }, t, e)
                },
                concierge: function(t) {
                    var e = {
                        message: t.input,
                        items: [{
                            item_query: t.query,
                            item_type: a.a.search,
                            position: t.index
                        }],
                        format_version: 2
                    };
                    this.scribe({
                        element: "typeahead_concierge",
                        action: "search"
                    }, t, e)
                }
            };
            this.storeCompletionData = function(t, e) {
                "uiTypeaheadItemSelected" === t.type || "uiSearchQuery" === t.type ? this.scribeSelection(t, e) : e.fromSelectionEvent || (this.lastCompletion = e)
            }
            ,
            this.scribeSelection = function(e, i) {
                t[i.source] && t[i.source].call(this, i)
            }
            ,
            this.after("initialize", function() {
                this.scribeOnEvent("uiSearchInputFocused", "focus_field"),
                this.on("uiTypeaheadItemComplete uiTypeaheadItemSelected uiSearchQuery", this.storeCompletionData)
            })
        }
        var o = i("DBjh")
          , r = i("3oDc")
          , a = i("rbkv");
        e.a = Object(o.default)(n, r.a)
    },
    o0Lh: function(t, e, i) {
        "use strict";
        function n() {
            this.itemCannotBeSelected = function(t) {
                return this.existingParticipants && -1 !== this.existingParticipants.indexOf(t.id.toString())
            }
            ,
            this.setExistingParticipants = function(t, e) {
                this.existingParticipants = (e.participants || []).map(function(t) {
                    return t.toString()
                })
            }
            ,
            this.initWithDMParticipantItems = function() {
                this.on(document, "uiExistingConversationParticipants", this.setExistingParticipants)
            }
        }
        e.a = n
    },
    oHsY: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                o.default.mixin(this, [a.a]),
                this.defaultAttrs({
                    dropDownSelector: ".dropdown",
                    dropDownMenuSelector: ".dropdown-menu",
                    dropDownMenuAlignRightClass: "dropdown-menu--rightAlign",
                    togglerSelector: ".js-dropdown-toggle:not(:disabled)",
                    preventCloseSelector: ".js-dropdown-prevent-close",
                    openClass: "open",
                    dropdownEnabledClass: "dropdown-enabled",
                    restoreFocusOnClose: !1,
                    skipFocusManager: !1
                }),
                this.isOpen = function() {
                    return !!this.$dropdown && this.$dropdown.hasClass(this.attr.openClass)
                }
                ,
                this.toggleDisplay = function(e) {
                    if (e) {
                        var i = t(e.target).closest(this.attr.dropDownSelector);
                        this.isOpen() && !this.$dropdown.is(i) && this.closeDropdown(),
                        this.$dropdown = i,
                        this.isOpen() ? this.notifyCloseRequested() : this.notifyOpenRequested(),
                        e.preventDefault(),
                        e.stopImmediatePropagation();
                        var n = document.activeElement;
                        t(e.target).closest(".js-tooltip").trigger("blur"),
                        n && n.focus()
                    }
                }
                ,
                this.enableTriggerTooltip = function(t) {
                    this.$dropdown.find(this.attr.togglerSelector).closest(".js-tooltip").tooltip(t ? "enable" : "disable")
                }
                ,
                this.showDropdown = function(e) {
                    var i = t(e.target);
                    i.length && (i.hasClass(this.attr.openClass) || (this.$dropdown = i,
                    this.notifyOpenRequested()))
                }
                ,
                this.openDropdown = function() {
                    if (!this.isOpen()) {
                        this.trigger(document, "uiCloseDropdowns"),
                        this.enableTriggerTooltip(!1);
                        var e = this.$dropdown.find(this.attr.dropDownMenuSelector);
                        this.createFirstLastTabStop(e),
                        this.attr.skipFocusManager || (this.on(e.find(this.attr.lastTabStopSelector), "focus", this.focusFirstAvailableControl),
                        this.on(e.find(this.attr.firstTabStopSelector), "focus", this.focusLastAvailableControl)),
                        this.activeEl = document.activeElement,
                        this.$dropdown.addClass(this.attr.openClass),
                        this.repositionHorizontal(),
                        this.trigger(this.$dropdown, "uiDropdownOpened"),
                        t("body").addClass(this.attr.dropdownEnabledClass)
                    }
                }
                ,
                this.repositionHorizontal = function() {
                    var t = this.$dropdown.find(this.attr.dropDownMenuSelector);
                    if (t.length > 0 && !t.hasClass("is-forceRight")) {
                        t.removeClass(this.attr.dropDownMenuAlignRightClass);
                        var e = t.offset()
                          , i = this.getWindowWidth()
                          , n = e.left + t.outerWidth() > i || e.left < 0;
                        t.toggleClass(this.attr.dropDownMenuAlignRightClass, n)
                    }
                }
                ,
                this.getWindowWidth = function() {
                    return t(window).width()
                }
                ,
                this.notifyOpenRequested = function() {
                    this.isOpen() || this.trigger(this.$dropdown, {
                        type: "uiDropdownOpenRequested",
                        defaultBehavior: "openDropdown"
                    })
                }
                ,
                this.closeDropdown = function() {
                    if (this.isOpen()) {
                        this.enableTriggerTooltip(!0);
                        var e = this.$dropdown.find(this.attr.dropDownMenuSelector);
                        this.attr.skipFocusManager || (this.off(e.find(this.attr.lastTabStopSelector), "focus", this.focusFirstAvailableControl),
                        this.off(e.find(this.attr.firstTabStopSelector), "focus", this.focusLastAvailableControl)),
                        this.removeFirstLastTabStop(e),
                        this.$dropdown.removeClass(this.attr.openClass),
                        this.trigger(this.$dropdown, "uiDropdownClosed"),
                        this.$dropdown = null,
                        this.attr.restoreFocusOnClose && this.restoreFocus(),
                        t("body").removeClass(this.attr.dropdownEnabledClass)
                    }
                }
                ,
                this.notifyCloseRequested = function() {
                    this.isOpen() && this.trigger(this.$dropdown, {
                        type: "uiDropdownCloseRequested",
                        defaultBehavior: "closeDropdown"
                    })
                }
                ,
                this.closeAndRestoreFocus = function(t) {
                    this.isOpen() && (t.stopPropagation(),
                    this.notifyCloseRequested(),
                    this.activeEl && (t.preventDefault(),
                    this.restoreFocus()))
                }
                ,
                this.restoreFocus = function() {
                    if (this.activeEl) {
                        try {
                            Object(s.a)(this.activeEl)
                        } catch (t) {}
                        this.activeEl.focus(),
                        this.activeEl = null
                    }
                }
                ,
                this.close = function(e) {
                    if (this.isOpen()) {
                        var i = e.target
                          , n = t(i)
                          , o = this.$dropdown.find(this.attr.dropDownMenuSelector)
                          , r = this.$dropdown.find(this.attr.togglerSelector)
                          , a = o.is(i) || t.contains(o[0], i)
                          , s = !!r.length && (r.is(i) || t.contains(r[0], i))
                          , u = n.is(this.attr.preventCloseSelector) || !!n.closest(this.attr.preventCloseSelector, this.$dropdown[0]).length;
                        a || s || u || this.notifyCloseRequested()
                    }
                }
                ,
                this.applyARIAAttrs = function() {
                    var t = this.select("togglerSelector");
                    "A" === t.prop("nodeName") && t.attr({
                        role: "button"
                    }),
                    t.attr({
                        "aria-haspopup": !0
                    })
                }
                ,
                this.focusFirstAvailableControl = function() {
                    var t = void 0;
                    this.isOpen() && (t = this.$dropdown.find(this.attr.dropDownMenuSelector),
                    this.focusNextAvailableControl("first", t))
                }
                ,
                this.focusLastAvailableControl = function() {
                    var t = void 0;
                    this.isOpen() && (t = this.$dropdown.find(this.attr.dropDownMenuSelector),
                    this.focusNextAvailableControl("last", t))
                }
                ,
                this.preventFocusLoss = function(t) {
                    t.preventDefault()
                }
                ,
                this.after("initialize", function() {
                    this.on(document, "uiSwiftLoaded", this.applyARIAAttrs),
                    this.on("uiShouldShowDropdown", this.showDropdown),
                    this.on("click", {
                        togglerSelector: this.toggleDisplay
                    }),
                    this.attr.restoreFocusOnClose && this.on("mousedown", {
                        togglerSelector: this.preventFocusLoss
                    }),
                    this.on(document, r.a.GLOBAL_REQUEST_CLOSE_EVENTS, this.notifyCloseRequested),
                    this.on(document, "click", this.close),
                    this.on(document, "uiShortcutEsc", this.closeAndRestoreFocus),
                    this.on(document, r.a.GLOBAL_FORCE_CLOSE_EVENTS, this.closeDropdown)
                })
            }
            var o = i("q9/C")
              , r = i("SNS+")
              , a = i("exje")
              , s = i("bHbJ")
              , u = i("/eMm");
            i.n(u);
            e.a = n
        }
        ).call(e, i("4kSj"))
    },
    oLke: function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                kenshooLandingParam: "ken_prf",
                checkLandingParam: !0
            }),
            this.hitEndpoint = function(t) {
                (new Image).src = "/i/anonymize?data=" + encodeURIComponent(JSON.stringify(t))
            }
            ,
            this.hasLandingParam = function() {
                return !!a.a.fromQuery(window.location)[this.attr.kenshooLandingParam]
            }
            ,
            this.renderPixel = function() {
                this.hitEndpoint([{
                    integration: "kenshooClick",
                    ref: document.referrer,
                    type: "click"
                }])
            }
            ,
            this.conversion = function(t, e) {
                this.hitEndpoint([{
                    integration: "kenshooConversion",
                    ref: document.referrer,
                    type: e.mnType
                }])
            }
            ,
            this.after("initialize", function() {
                r.a.getDecider("enableMacawNymizerConversionLanding") && (this.attr.checkLandingParam && !this.hasLandingParam() || this.on("uiSwiftLoaded", this.renderPixel),
                this.on("MNConversion", this.conversion))
            })
        }
        var o = i("DBjh")
          , r = i("IAMj")
          , a = i("sxXh")
          , s = Object(o.default)(n);
        e.a = s
    },
    oV37: function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                forgotPasswordLinkSelector: ".forgot",
                accountIdentifierInputSelector: '[name="session[username_or_email]"]'
            }),
            this.navigateToPasswordReset = function(t) {
                t.stopPropagation(),
                t.preventDefault();
                var e = this.$accountIdentifierInput.val()
                  , i = e ? "?account_identifier=" + encodeURIComponent(e) : "";
                this.trigger("uiNavigate", {
                    href: this.forgotPasswordHref + i
                })
            }
            ,
            this.after("initialize", function() {
                this.$accountIdentifierInput = this.select("accountIdentifierInputSelector"),
                this.forgotPasswordHref = this.select("forgotPasswordLinkSelector").attr("href"),
                this.on("click", {
                    forgotPasswordLinkSelector: this.navigateToPasswordReset
                })
            })
        }
        var o = i("DBjh");
        e.a = Object(o.default)(n)
    },
    oZoq: function(t, e, i) {
        var n, o;
        n = [i("go26")],
        void 0 !== (o = function(t) {
            "use strict";
            return t.toString
        }
        .apply(e, n)) && (t.exports = o)
    },
    odeb: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    pushState: !0
                }),
                this.overlayNavigate = function(t, e) {
                    e && e.impressionCookie && this.trigger("uiSendImpressionCookie", e),
                    this.trigger(document, "uiPauseAllMedia"),
                    this.trigger("uiOverlayOpen"),
                    this.trigger("uiOverlayNeedsPage", e),
                    this.teardownOverlay()
                }
                ,
                this.updateOverlay = function(t, e) {
                    this.logPushStateTTFT && (window.ttft.resetTTFTState(),
                    window.ttft.recordMilestone("is_push_state", !0),
                    window.ttft.recordMilestone("push_render_start", window.ttft.now())),
                    this.trigger("uiOverlayUpdate", {
                        html: e.page
                    }),
                    this.logPushStateTTFT && window.ttft.recordMilestone("client_record_time", window.ttft.now()),
                    this.loadModule(e)
                }
                ,
                this.updateOverlayAndTitle = function(e, i) {
                    this.updateOverlay(e, i),
                    this.trigger("uiUpdatePageTitle", {
                        title: i.title
                    }),
                    i.canonical_url && t('link[rel="canonical"]').attr("href", i.canonical_url)
                }
                ,
                this.loadModule = function(t) {
                    function e(e) {
                        t.init_data.inOverlay = !0,
                        this.logPushStateTTFT && (window.ttft.recordMilestone("page", t.init_data.pageName),
                        window.ttft.recordMilestone("section", t.init_data.sectionName)),
                        this.bootWithTeardownContext(e, t.init_data, "overlay"),
                        this.trigger("uiOverlayPageChanged", t),
                        this.logPushStateTTFT && (window.ttft.recordMilestone("aq_empty_time", window.ttft.now()),
                        window.ttft.startAjaxTracking())
                    }
                    Object(c.a)(this, [t.module], e)
                }
                ,
                this.rollback = function(t, e) {
                    e.rollbackCount > 0 ? (this.isRollback = !0,
                    history.go(-e.rollbackCount)) : delete this.isRollback
                }
                ,
                this.navigateBack = function(t, e) {
                    history.go(-1)
                }
                ,
                this.handlePopstate = function(t, e) {
                    var i = e.state && e.state.inOverlay;
                    this.isRollback ? (t.preventDefault(),
                    this.trigger("uiDidRollback", e),
                    delete this.isRollback) : i && (t.preventDefault(),
                    this.trigger("uiOverlayNavigate", {
                        isPopState: !0,
                        href: Object(a.a)()
                    }))
                }
                ,
                this.updatePageTitle = function() {
                    this.trigger("uiUpdatePageTitle", {
                        title: history.state && history.state.title
                    }),
                    this.trigger("uiPageNeedsCount")
                }
                ,
                this.handleUpdatePageCount = function(t, e) {
                    history.state && history.state.inOverlay && t.preventDefault()
                }
                ,
                this.teardownOverlay = function() {
                    var t = this;
                    Object(l.a)(function() {
                        t.trigger("uiTeardown", {
                            teardownContext: "overlay"
                        })
                    })
                }
                ,
                this.after("initialize", function() {
                    this.on("uiOverlayNavigate", this.overlayNavigate),
                    this.on("uiOverlayClosedByRequest", this.teardownOverlay),
                    Object(s.a)(this.attr.pushState) ? (this.on("dataOverlayPageSuccess", this.updateOverlayAndTitle),
                    this.on("dataNeedsRollback", this.rollback),
                    this.on("uiOverlayNavigateBack", this.navigateBack),
                    this.on(document, "uiPopStateNavigate", this.handlePopstate),
                    this.on("uiDidRollback", this.updatePageTitle),
                    this.on(document, "uiUpdatePageCount", this.handleUpdatePageCount)) : this.on("dataOverlayPageSuccess", this.updateOverlay),
                    this.logPushStateTTFT = u.a.getDecider("log_push_state_ttft_metrics")
                })
            }
            var o = i("DBjh")
              , r = i("uDHI")
              , a = i("Ckrd")
              , s = i("c16W")
              , u = i("IAMj")
              , c = i("bXc2")
              , l = i("KjWN");
            e.a = Object(o.default)(n, r.a)
        }
        ).call(e, i("4kSj"))
    },
    p8xL: function(t, e, i) {
        "use strict";
        var n = Object.prototype.hasOwnProperty
          , o = function() {
            for (var t = [], e = 0; e < 256; ++e)
                t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
            return t
        }();
        e.arrayToObject = function(t, e) {
            for (var i = e && e.plainObjects ? Object.create(null) : {}, n = 0; n < t.length; ++n)
                void 0 !== t[n] && (i[n] = t[n]);
            return i
        }
        ,
        e.merge = function(t, i, o) {
            if (!i)
                return t;
            if ("object" != typeof i) {
                if (Array.isArray(t))
                    t.push(i);
                else {
                    if ("object" != typeof t)
                        return [t, i];
                    (o.plainObjects || o.allowPrototypes || !n.call(Object.prototype, i)) && (t[i] = !0)
                }
                return t
            }
            if ("object" != typeof t)
                return [t].concat(i);
            var r = t;
            return Array.isArray(t) && !Array.isArray(i) && (r = e.arrayToObject(t, o)),
            Array.isArray(t) && Array.isArray(i) ? (i.forEach(function(i, r) {
                n.call(t, r) ? t[r] && "object" == typeof t[r] ? t[r] = e.merge(t[r], i, o) : t.push(i) : t[r] = i
            }),
            t) : Object.keys(i).reduce(function(t, n) {
                var r = i[n];
                return Object.prototype.hasOwnProperty.call(t, n) ? t[n] = e.merge(t[n], r, o) : t[n] = r,
                t
            }, r)
        }
        ,
        e.decode = function(t) {
            try {
                return decodeURIComponent(t.replace(/\+/g, " "))
            } catch (e) {
                return t
            }
        }
        ,
        e.encode = function(t) {
            if (0 === t.length)
                return t;
            for (var e = "string" == typeof t ? t : String(t), i = "", n = 0; n < e.length; ++n) {
                var r = e.charCodeAt(n);
                45 === r || 46 === r || 95 === r || 126 === r || r >= 48 && r <= 57 || r >= 65 && r <= 90 || r >= 97 && r <= 122 ? i += e.charAt(n) : r < 128 ? i += o[r] : r < 2048 ? i += o[192 | r >> 6] + o[128 | 63 & r] : r < 55296 || r >= 57344 ? i += o[224 | r >> 12] + o[128 | r >> 6 & 63] + o[128 | 63 & r] : (n += 1,
                r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(n)),
                i += o[240 | r >> 18] + o[128 | r >> 12 & 63] + o[128 | r >> 6 & 63] + o[128 | 63 & r])
            }
            return i
        }
        ,
        e.compact = function(t, i) {
            if ("object" != typeof t || null === t)
                return t;
            var n = i || []
              , o = n.indexOf(t);
            if (-1 !== o)
                return n[o];
            if (n.push(t),
            Array.isArray(t)) {
                for (var r = [], a = 0; a < t.length; ++a)
                    t[a] && "object" == typeof t[a] ? r.push(e.compact(t[a], n)) : void 0 !== t[a] && r.push(t[a]);
                return r
            }
            return Object.keys(t).forEach(function(i) {
                t[i] = e.compact(t[i], n)
            }),
            t
        }
        ,
        e.isRegExp = function(t) {
            return "[object RegExp]" === Object.prototype.toString.call(t)
        }
        ,
        e.isBuffer = function(t) {
            return null !== t && void 0 !== t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        }
    },
    pFsH: function(t, e, i) {
        "use strict";
        function n(t) {
            return t.trim().toLowerCase().split(/[\s_,.-]+/)
        }
        function o(t) {
            return a.test(t.substr(0, 1)) ? t.substr(0, 2) : t.charAt(0)
        }
        function r(t) {
            return !t || !t.screen_name || !t.name || !t.profile_image_url && !t.profile_image_url_https
        }
        var a = /[\uD800-\uDFFF]/;
        e.a = {
            tokenizeText: n,
            getFirstChar: o,
            isAccountMalformed: r
        }
    },
    pHim: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var i = document.createElement(e || "div")
              , n = "on" + t
              , r = n in i;
            return r || (i.setAttribute(n, "return;"),
            r = "function" == typeof i[n]),
            i = null,
            o[t] = r,
            r
        }
        var o = {}
          , r = function(t, e) {
            return t.forEach(function(t) {
                return n(t, e[t])
            }, this),
            o
        }
          , a = {
            checkEvents: function(t, e) {
                r(t, e || {})
            },
            browserSupports: function(t, e) {
                return void 0 === o[t] && n(t, e),
                o[t]
            }
        };
        e.a = a
    },
    palu: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[1];
            Promise.all([i.e(0), i.e(3)]).then(function(t) {
                var o = {
                    permalink_tweets: i("N7h8").default,
                    permalink_users: i("QtQ2").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    q1LG: function(t, e, i) {
        var n, o;
        n = [i("AHT0")],
        void 0 !== (o = function(t) {
            "use strict";
            return t.slice
        }
        .apply(e, n)) && (t.exports = o)
    },
    q59y: function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                closeButtonSelector: ".eu-cookie-notice button",
                cookieDomain: ".twitter.com"
            }),
            this.setCookie = function() {
                Object(r.a)("eu_cn", 1, {
                    domain: this.attr.cookieDomain,
                    path: "/",
                    expires: 365
                })
            }
            ,
            this.close = function() {
                this.setCookie(),
                this.trigger("uiBannerDismissed", {
                    height: this.$node.outerHeight()
                }),
                this.$node.remove(),
                this.teardown()
            }
            ,
            this.after("initialize", function() {
                this.on("click", {
                    closeButtonSelector: this.close
                }),
                setTimeout(this.setCookie.bind(this), 5e3)
            })
        }
        var o = i("DBjh")
          , r = i("dsp6");
        e.a = Object(o.default)(n)
    },
    "q9/C": function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("/BKe")
          , o = i.n(n);
        e.default = o.a
    },
    qJxw: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("DdOc"), i("2+NM")],
        void 0 !== (o = function(t, e) {
            "use strict";
            return t.each({
                Height: "height",
                Width: "width"
            }, function(i, n) {
                t.each({
                    padding: "inner" + i,
                    content: n,
                    "": "outer" + i
                }, function(o, r) {
                    t.fn[r] = function(a, s) {
                        var u = arguments.length && (o || "boolean" != typeof a)
                          , c = o || (!0 === a || !0 === s ? "margin" : "border");
                        return e(this, function(e, n, o) {
                            var a;
                            return t.isWindow(e) ? 0 === r.indexOf("outer") ? e["inner" + i] : e.document.documentElement["client" + i] : 9 === e.nodeType ? (a = e.documentElement,
                            Math.max(e.body["scroll" + i], a["scroll" + i], e.body["offset" + i], a["offset" + i], a["client" + i])) : void 0 === o ? t.css(e, n, c) : t.style(e, n, o, c)
                        }, n, u ? a : void 0, u)
                    }
                })
            }),
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    qf1A: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    tooltipSelector: ".js-tooltip",
                    visibleTooltipSelector: ".js-tooltip.in"
                }),
                this.hideEvents = ["uiBeforePageChanged", "uiDialogOpened", "uiDialogClosed", "uiDropdownOpened", "uiDropdownClosed", "uiGalleryOpened", "uiBeforeTweetRemoved", "uiDialogClosedWithoutAction", "uiHoverShown", "uiShowProfileHover", "uiFileInputClicked", "uiImagePickerAdd", "uiVideoPickerAdd", "uiPreviewThumbnailRemove", "uiHideVisibleTooltip"],
                this.hide = function() {
                    this.select("visibleTooltipSelector").tooltip("hide")
                }
                ,
                this.after("initialize", function() {
                    this.$node.tooltip({
                        selector: this.attr.tooltipSelector
                    }),
                    this.on(document, "uiShortcutEsc", {
                        tooltipSelector: function() {
                            t.fn.tooltip.clearAllPendingTimeouts(),
                            this.hide()
                        }
                    }),
                    this.on(document, this.hideEvents.join(" "), this.hide)
                })
            }
            var o = i("DBjh")
              , r = i("/eMm");
            i.n(r);
            e.a = Object(o.default)(n)
        }
        ).call(e, i("4kSj"))
    },
    qio6: function(t, e, i) {
        var n = i("evD5")
          , o = i("77Pl")
          , r = i("lktj");
        t.exports = i("+E39") ? Object.defineProperties : function(t, e) {
            o(t);
            for (var i, a = r(e), s = a.length, u = 0; s > u; )
                n.f(t, i = a[u++], e[i]);
            return t
        }
    },
    qq5T: function(t, e, i) {
        "use strict";
        function n() {
            this.after("initialize", function() {
                this.scribeOnEvent("uiCopyLinkToTweetDialogOpened", {
                    action: "impression"
                }),
                this.scribeOnEvent("uiUserCopiedTweetCode", {
                    action: "success"
                })
            })
        }
        var o = i("DBjh")
          , r = i("3oDc")
          , a = Object(o.default)(n, r.a);
        e.a = a
    },
    qtBK: function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return function(t, e, i, n) {
                var o, r, a = {};
                for (r in e)
                    a[r] = t.style[r],
                    t.style[r] = e[r];
                o = i.apply(t, n || []);
                for (r in e)
                    t.style[r] = a[r];
                return o
            }
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    qyJz: function(t, e, i) {
        "use strict";
        var n = i("+ZMJ")
          , o = i("kM2E")
          , r = i("sB3e")
          , a = i("msXi")
          , s = i("Mhyx")
          , u = i("QRG4")
          , c = i("fBQ2")
          , l = i("3fs2");
        o(o.S + o.F * !i("dY0y")(function(t) {
            Array.from(t)
        }), "Array", {
            from: function(t) {
                var e, i, o, d, h = r(t), f = "function" == typeof this ? this : Array, p = arguments.length, g = p > 1 ? arguments[1] : void 0, m = void 0 !== g, v = 0, b = l(h);
                if (m && (g = n(g, p > 2 ? arguments[2] : void 0, 2)),
                void 0 == b || f == Array && s(b))
                    for (e = u(h.length),
                    i = new f(e); e > v; v++)
                        c(i, v, m ? g(h[v], v) : h[v]);
                else
                    for (d = b.call(h),
                    i = new f; !(o = d.next()).done; v++)
                        c(i, v, m ? a(d, g, [o.value, v], !0) : o.value);
                return i.length = v,
                i
            }
        })
    },
    r8Bt: function(t, e, i) {
        "use strict";
        function n() {}
        function o() {
            this.timers = [],
            this.clockComponent = function() {
                return this.currentClock && c.default.findInstanceInfo(this.currentClock) || (this.reset(),
                this.currentClock = new l(document).initialize(document)),
                this.currentClock
            }
            ,
            this.trigger = function(t, e) {
                this.clockComponent().trigger(t, e)
            }
            ,
            this.reset = function() {
                this.timers = this.timers.filter(function(t) {
                    return t.noTeardown
                })
            }
            ,
            this.tick = function() {
                this.timers.forEach(function(t) {
                    return t.tick(h)
                })
            }
            ,
            this.setTicker = function() {
                this.pause(),
                this.ticker = window.setInterval(this.tick.bind(this), h)
            }
            ,
            this.init = function() {
                this.clockComponent(),
                this.ticker || this.setTicker()
            }
            ,
            this.clear = function(t) {
                t && this.timers.splice(this.timers.indexOf(t), 1)
            }
            ,
            this.setTimeoutEvent = function(t, e, i, n) {
                if ("string" == typeof t) {
                    this.init();
                    var o = new a(t,e,i,n);
                    return this.timers.push(o),
                    o
                }
            }
            ,
            this.clearTimeout = function(t) {
                t instanceof a && this.clear(t)
            }
            ,
            this.setIntervalEvent = function(t, e, i, n) {
                if ("string" == typeof t) {
                    this.init();
                    var o = new s(t,e,i,n);
                    return this.timers.push(o),
                    o
                }
            }
            ,
            this.clearInterval = function(t) {
                t instanceof s && this.clear(t)
            }
            ,
            this.resume = this.restart = this.setTicker,
            this.pause = function(t, e) {
                clearInterval(this.ticker || 0)
            }
        }
        function r() {
            this.callback = function() {
                d.trigger(this.eventName, this.data)
            }
            ,
            this.clear = function() {
                d.clear(this)
            }
            ,
            this.pause = function() {
                this.paused = !0
            }
            ,
            this.resume = function() {
                this.paused = !1
            }
            ,
            this.tickUnlessPaused = this.tick,
            this.tick = function() {
                this.paused || this.tickUnlessPaused.apply(this, arguments)
            }
        }
        function a(t, e, i, n) {
            this.countdown = e,
            this.eventName = t,
            this.data = i,
            this.noTeardown = n
        }
        function s(t, e, i, n) {
            this.countdown = this.interval = this.maxInterval = this.initialInterval = e,
            this.backoffFactor = f,
            this.eventName = t,
            this.data = i,
            this.noTeardown = n
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var u = i("DBjh")
          , c = i("kxx+")
          , l = Object(u.default)(n)
          , d = new o
          , h = 500
          , f = 2;
        e.default = d,
        function() {
            this.tick = function(t) {
                this.countdown -= t,
                this.countdown <= 0 && (this.clear(),
                this.callback())
            }
        }
        .call(a.prototype),
        r.call(a.prototype),
        function() {
            this.tick = function(t) {
                if (this.countdown -= t,
                this.countdown <= 0) {
                    if (this.callback(),
                    this.interval < this.maxInterval) {
                        var e = Math.ceil(this.interval * this.backoffFactor / h) * h;
                        this.interval = Math.min(e, this.maxInterval)
                    }
                    this.countdown = this.interval
                }
            }
            ,
            this.backoff = function(t, e) {
                this.maxInterval = t,
                this.backoffFactor = e || f,
                this.interval > this.maxInterval && (this.interval = t)
            }
            ,
            this.cancelBackoff = function() {
                this.interval = this.maxInterval = this.initialInterval,
                this.countdown = Math.min(this.countdown, this.interval),
                this.resume()
            }
        }
        .call(s.prototype),
        r.call(s.prototype)
    },
    rBC2: function(t, e) {
        function i(t, e) {
            var i = "function" == typeof e;
            if (r.indexOf(t) > -1)
                i && e();
            else {
                o(n(t), function() {
                    r.push(t),
                    i && e()
                })
            }
        }
        function n(t, e, i) {
            function n(t) {
                if (a.body)
                    return t();
                setTimeout(function() {
                    n(t)
                })
            }
            function o() {
                s.addEventListener && s.removeEventListener("load", o)
            }
            var r, a = window.document, s = a.createElement("link");
            if (e)
                r = e;
            else {
                var u = (a.body || a.getElementsByTagName("head")[0]).childNodes;
                r = u[u.length - 1]
            }
            var c = a.styleSheets;
            s.rel = "stylesheet",
            s.href = t,
            n(function() {
                r.parentNode.insertBefore(s, e ? r : r.nextSibling)
            });
            var l = function(t) {
                for (var e = s.href, i = c.length; i--; )
                    if (c[i].href === e)
                        return t();
                setTimeout(function() {
                    l(t)
                })
            };
            return s.addEventListener && s.addEventListener("load", o),
            s.onloadcssdefined = l,
            l(o),
            s
        }
        function o(t, e) {
            function i() {
                !n && e && (n = !0,
                e.call(t))
            }
            var n;
            t.addEventListener && t.addEventListener("load", i),
            t.attachEvent && t.attachEvent("onload", i),
            "isApplicationInstalled"in navigator && "onloadcssdefined"in t && t.onloadcssdefined(i)
        }
        /*! loadCSS: load a CSS file asynchronously. [c]2016 @scottjehl, Filament Group, Inc. Licensed MIT */
        /*! onloadCSS: adds onload support for asynchronous stylesheets loaded with loadCSS. [c]2016 @zachleat, Filament Group, Inc. Licensed MIT */
        var r = [];
        t.exports = {
            load: n,
            loadOnce: i,
            onload: o
        }
    },
    rNLd: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    parseHashflags: !1,
                    datasources: ["topics"],
                    topicsListSelector: ".topics-list",
                    topicsItemSelector: ".typeahead-topic-item",
                    hashflagClass: "twitter-hashflag"
                }),
                this.toggleTopics = function(t) {
                    this.$topicsList.toggleClass("has-results", t).toggle(t)
                }
                ,
                this.renderTopics = function(t, e) {
                    this.$topicsList.empty();
                    var i = [];
                    this.attr.datasources.forEach(function(t) {
                        return i = i.concat(e.suggestions[t] || [])
                    }),
                    i.length ? (i.forEach(function(t) {
                        this.renderTopic(t)
                    }, this),
                    this.toggleTopics(!0)) : this.toggleTopics(!1)
                }
                ,
                this.renderTopic = function(e) {
                    var i = this.$topicsItemTemplate.clone(!1)
                      , n = i.find("a")
                      , o = e.topic || e.hashtag
                      , r = o.charAt(0)
                      , a = o.slice(1)
                      , u = void 0
                      , c = void 0;
                    this.isHashOrCashSign(r) ? (c = s.test(a),
                    u = t("<span>").text(r).append(t("<strong>").text(a)).append(this.constructHashflagImg(r, a))) : (c = s.test(o),
                    u = e.filter ? t("<strong>").text(o) : t("<span>").text(o));
                    var l = void 0;
                    l = e.filter ? this.applySearchFilter(u.prop("outerHTML"), e.filter) : u.prop("outerHTML"),
                    n.html(l).attr("dir", c ? "rtl" : "ltr").attr("href", e.searchPath).attr("data-search-query", o),
                    i.data("item", e).appendTo(this.$topicsList)
                }
                ,
                this.constructHashflagImg = function(e, i) {
                    var n = this.attr.parseHashflags && this.isHashSign(e) && r.a.getImageUrl(i);
                    if (n)
                        return t("<img>", {
                            src: n,
                            addClass: this.attr.hashflagClass
                        })
                }
                ,
                this.applySearchFilter = function(t, e) {
                    return {
                        images: Object(o.default)("Photos of {{text}}", {
                            text: t
                        }),
                        videos: Object(o.default)("Videos of {{text}}", {
                            text: t
                        }),
                        news: Object(o.default)("News about {{text}}", {
                            text: t
                        })
                    }[e]
                }
                ,
                this.isHashOrCashSign = function(t) {
                    return this.isHashSign(t) || this.isCashSign(t)
                }
                ,
                this.isHashSign = function(t) {
                    return u.test(t)
                }
                ,
                this.isCashSign = function(t) {
                    return "$" === t
                }
                ,
                this.after("initialize", function() {
                    this.$topicsItemTemplate = this.select("topicsItemSelector").first().clone(!1),
                    this.$topicsList = this.select("topicsListSelector"),
                    this.$topicsList.hide(),
                    this.on("uiTypeaheadRenderResults", this.renderTopics)
                })
            }
            var o = i("0d4m")
              , r = i("y3HV")
              , a = i("DBjh");
            e.a = Object(a.default)(n);
            var s = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm
              , u = /[#＃]/
        }
        ).call(e, i("4kSj"))
    },
    rTPn: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("rY9R"), i("9CHI"), i("a1Jc"), i("zpla"), i("QSv/"), i("5JGd"), i("1nM6"), i("VD6g"), i("KgGA"), i("baqs")],
        void 0 !== (o = function(t, e, i, n, o, r) {
            "use strict";
            function a(e) {
                return function(n, o) {
                    "string" != typeof n && (o = n,
                    n = "*");
                    var r, a = 0, s = n.toLowerCase().match(i) || [];
                    if (t.isFunction(o))
                        for (; r = s[a++]; )
                            "+" === r[0] ? (r = r.slice(1) || "*",
                            (e[r] = e[r] || []).unshift(o)) : (e[r] = e[r] || []).push(o)
                }
            }
            function s(e, i, n, o) {
                function r(u) {
                    var c;
                    return a[u] = !0,
                    t.each(e[u] || [], function(_, t) {
                        var e = t(i, n, o);
                        return "string" != typeof e || s || a[e] ? s ? !(c = e) : void 0 : (i.dataTypes.unshift(e),
                        r(e),
                        !1)
                    }),
                    c
                }
                var a = {}
                  , s = e === y;
                return r(i.dataTypes[0]) || !a["*"] && r("*")
            }
            function u(e, i) {
                var n, o, r = t.ajaxSettings.flatOptions || {};
                for (n in i)
                    void 0 !== i[n] && ((r[n] ? e : o || (o = {}))[n] = i[n]);
                return o && t.extend(!0, e, o),
                e
            }
            function c(t, e, i) {
                for (var n, o, r, a, s = t.contents, u = t.dataTypes; "*" === u[0]; )
                    u.shift(),
                    void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                if (n)
                    for (o in s)
                        if (s[o] && s[o].test(n)) {
                            u.unshift(o);
                            break
                        }
                if (u[0]in i)
                    r = u[0];
                else {
                    for (o in i) {
                        if (!u[0] || t.converters[o + " " + u[0]]) {
                            r = o;
                            break
                        }
                        a || (a = o)
                    }
                    r = r || a
                }
                if (r)
                    return r !== u[0] && u.unshift(r),
                    i[r]
            }
            function l(t, e, i, n) {
                var o, r, a, s, u, c = {}, l = t.dataTypes.slice();
                if (l[1])
                    for (a in t.converters)
                        c[a.toLowerCase()] = t.converters[a];
                for (r = l.shift(); r; )
                    if (t.responseFields[r] && (i[t.responseFields[r]] = e),
                    !u && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                    u = r,
                    r = l.shift())
                        if ("*" === r)
                            r = u;
                        else if ("*" !== u && u !== r) {
                            if (!(a = c[u + " " + r] || c["* " + r]))
                                for (o in c)
                                    if (s = o.split(" "),
                                    s[1] === r && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                        !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0],
                                        l.unshift(s[1]));
                                        break
                                    }
                            if (!0 !== a)
                                if (a && t.throws)
                                    e = a(e);
                                else
                                    try {
                                        e = a(e)
                                    } catch (t) {
                                        return {
                                            state: "parsererror",
                                            error: a ? t : "No conversion from " + u + " to " + r
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: e
                }
            }
            var d = /%20/g
              , h = /#.*$/
              , f = /([?&])_=[^&]*/
              , p = /^(.*?):[ \t]*([^\r\n]*)$/gm
              , g = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
              , m = /^(?:GET|HEAD)$/
              , v = /^\/\//
              , b = {}
              , y = {}
              , w = "*/".concat("*")
              , S = e.createElement("a");
            return S.href = n.href,
            t.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: n.href,
                    type: "GET",
                    isLocal: g.test(n.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": w,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": t.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, i) {
                    return i ? u(u(e, t.ajaxSettings), i) : u(t.ajaxSettings, e)
                },
                ajaxPrefilter: a(b),
                ajaxTransport: a(y),
                ajax: function(a, u) {
                    function g(e, i, n, o) {
                        var r, a, s, u, d, h = i;
                        D || (D = !0,
                        k && window.clearTimeout(k),
                        C = void 0,
                        x = o || "",
                        q.readyState = e > 0 ? 4 : 0,
                        r = e >= 200 && e < 300 || 304 === e,
                        n && (u = c(P, q, n)),
                        u = l(P, u, q, r),
                        r ? (P.ifModified && (d = q.getResponseHeader("Last-Modified"),
                        d && (t.lastModified[T] = d),
                        (d = q.getResponseHeader("etag")) && (t.etag[T] = d)),
                        204 === e || "HEAD" === P.type ? h = "nocontent" : 304 === e ? h = "notmodified" : (h = u.state,
                        a = u.data,
                        s = u.error,
                        r = !s)) : (s = h,
                        !e && h || (h = "error",
                        e < 0 && (e = 0))),
                        q.status = e,
                        q.statusText = (i || h) + "",
                        r ? R.resolveWith(N, [a, h, q]) : R.rejectWith(N, [q, h, s]),
                        q.statusCode(U),
                        U = void 0,
                        A && L.trigger(r ? "ajaxSuccess" : "ajaxError", [q, P, r ? a : s]),
                        M.fireWith(N, [q, h]),
                        A && (L.trigger("ajaxComplete", [q, P]),
                        --t.active || t.event.trigger("ajaxStop")))
                    }
                    "object" == typeof a && (u = a,
                    a = void 0),
                    u = u || {};
                    var C, T, x, E, k, O, D, A, I, j, P = t.ajaxSetup({}, u), N = P.context || P, L = P.context && (N.nodeType || N.jquery) ? t(N) : t.event, R = t.Deferred(), M = t.Callbacks("once memory"), U = P.statusCode || {}, F = {}, B = {}, $ = "canceled", q = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (D) {
                                if (!E)
                                    for (E = {}; e = p.exec(x); )
                                        E[e[1].toLowerCase()] = e[2];
                                e = E[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return D ? x : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == D && (t = B[t.toLowerCase()] = B[t.toLowerCase()] || t,
                            F[t] = e),
                            this
                        },
                        overrideMimeType: function(t) {
                            return null == D && (P.mimeType = t),
                            this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (D)
                                    q.always(t[q.status]);
                                else
                                    for (e in t)
                                        U[e] = [U[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || $;
                            return C && C.abort(e),
                            g(0, e),
                            this
                        }
                    };
                    if (R.promise(q),
                    P.url = ((a || P.url || n.href) + "").replace(v, n.protocol + "//"),
                    P.type = u.method || u.type || P.method || P.type,
                    P.dataTypes = (P.dataType || "*").toLowerCase().match(i) || [""],
                    null == P.crossDomain) {
                        O = e.createElement("a");
                        try {
                            O.href = P.url,
                            O.href = O.href,
                            P.crossDomain = S.protocol + "//" + S.host != O.protocol + "//" + O.host
                        } catch (t) {
                            P.crossDomain = !0
                        }
                    }
                    if (P.data && P.processData && "string" != typeof P.data && (P.data = t.param(P.data, P.traditional)),
                    s(b, P, u, q),
                    D)
                        return q;
                    A = t.event && P.global,
                    A && 0 == t.active++ && t.event.trigger("ajaxStart"),
                    P.type = P.type.toUpperCase(),
                    P.hasContent = !m.test(P.type),
                    T = P.url.replace(h, ""),
                    P.hasContent ? P.data && P.processData && 0 === (P.contentType || "").indexOf("application/x-www-form-urlencoded") && (P.data = P.data.replace(d, "+")) : (j = P.url.slice(T.length),
                    P.data && (T += (r.test(T) ? "&" : "?") + P.data,
                    delete P.data),
                    !1 === P.cache && (T = T.replace(f, "$1"),
                    j = (r.test(T) ? "&" : "?") + "_=" + o++ + j),
                    P.url = T + j),
                    P.ifModified && (t.lastModified[T] && q.setRequestHeader("If-Modified-Since", t.lastModified[T]),
                    t.etag[T] && q.setRequestHeader("If-None-Match", t.etag[T])),
                    (P.data && P.hasContent && !1 !== P.contentType || u.contentType) && q.setRequestHeader("Content-Type", P.contentType),
                    q.setRequestHeader("Accept", P.dataTypes[0] && P.accepts[P.dataTypes[0]] ? P.accepts[P.dataTypes[0]] + ("*" !== P.dataTypes[0] ? ", " + w + "; q=0.01" : "") : P.accepts["*"]);
                    for (I in P.headers)
                        q.setRequestHeader(I, P.headers[I]);
                    if (P.beforeSend && (!1 === P.beforeSend.call(N, q, P) || D))
                        return q.abort();
                    if ($ = "abort",
                    M.add(P.complete),
                    q.done(P.success),
                    q.fail(P.error),
                    C = s(y, P, u, q)) {
                        if (q.readyState = 1,
                        A && L.trigger("ajaxSend", [q, P]),
                        D)
                            return q;
                        P.async && P.timeout > 0 && (k = window.setTimeout(function() {
                            q.abort("timeout")
                        }, P.timeout));
                        try {
                            D = !1,
                            C.send(F, g)
                        } catch (t) {
                            if (D)
                                throw t;
                            g(-1, t)
                        }
                    } else
                        g(-1, "No Transport");
                    return q
                },
                getJSON: function(e, i, n) {
                    return t.get(e, i, n, "json")
                },
                getScript: function(e, i) {
                    return t.get(e, void 0, i, "script")
                }
            }),
            t.each(["get", "post"], function(e, i) {
                t[i] = function(e, n, o, r) {
                    return t.isFunction(n) && (r = r || o,
                    o = n,
                    n = void 0),
                    t.ajax(t.extend({
                        url: e,
                        type: i,
                        dataType: r,
                        data: n,
                        success: o
                    }, t.isPlainObject(e) && e))
                }
            }),
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    rWgq: function(t, e, i) {
        "use strict";
        function n(t) {
            var e = Object.keys(t).filter(function(e) {
                return t[e]
            }).sort().join(",")
              , i = void 0;
            if (i = l[e])
                return i;
            i = function() {
                r.a.apply(this, arguments)
            }
            ,
            i.prototype = new r.a;
            var n = [];
            return t.withExpiry && n.push(a.a),
            t.withArray && n.push(s.a),
            t.withUniqueElements && n.push(c.a),
            t.withMaxElements && n.push(u.a),
            n.length > 0 && o.default.mixin(i.prototype, n),
            l[e] = i,
            i
        }
        var o = i("q9/C")
          , r = i("WODX")
          , a = i("KHYl")
          , s = i("aXPZ")
          , u = i("v2wR")
          , c = i("cQm/")
          , l = {};
        e.a = n
    },
    rY9R: function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return window.document
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    rYQx: function(t, e, i) {
        var n, o;
        n = [i("a6WQ")],
        void 0 !== (o = function() {
            "use strict"
        }
        .apply(e, n)) && (t.exports = o)
    },
    rbkv: function(t, e, i) {
        "use strict";
        e.a = {
            tweet: 0,
            promotedTweet: 1,
            popularTweet: 2,
            retweet: 10,
            quotedTweet: 23,
            user: 3,
            promotedUser: 4,
            message: 6,
            story: 7,
            trend: 8,
            promotedTrend: 9,
            popularTrend: 15,
            list: 11,
            search: 12,
            savedSearch: 13,
            peopleSearch: 14,
            geoDetails: 19,
            customTimeline: 17,
            feedbackRequest: 27
        }
    },
    reQR: function(t, e, i) {
        "use strict";
        var n = {
            globalYOffset: null,
            selectors: {
                globalNav: ".global-nav"
            },
            refreshGlobalYOffset: function() {
                var t = document.querySelector(n.selectors.globalNav);
                n.globalYOffset = t ? t.getBoundingClientRect().bottom : 0
            },
            getGlobalYOffset: function() {
                return (null === n.globalYOffset || n.disableGlobalYOffsetCache) && n.refreshGlobalYOffset(),
                n.globalYOffset
            },
            getCanvasYOffset: function(t) {
                return t.offset().top - n.getGlobalYOffset()
            },
            setGlobalNavSelector: function(t) {
                n.selectors.globalNav = t,
                n.refreshGlobalYOffset()
            }
        };
        e.a = n
    },
    rwIS: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    typeaheadDebounceInterval: 500
                }),
                this.MESSAGES = {
                    LIKED: function() {
                        return Object(r.default)("Liked")
                    },
                    UNLIKED: function() {
                        return Object(r.default)("Unliked")
                    },
                    RETWEETED: function() {
                        return Object(r.default)("Retweeted")
                    },
                    UNRETWEETED: function() {
                        return Object(r.default)("Unretweeted")
                    },
                    EXPANDED: function() {
                        return Object(r.default)("Expanded")
                    },
                    COLLAPSED: function() {
                        return Object(r.default)("Collapsed")
                    },
                    RENDERING_CONVERSATION: function() {
                        return Object(r.default)("Loading conversation.")
                    },
                    CONVERSATION_RENDERED: function() {
                        return Object(r.default)("Conversation loaded. Press j or k to review Tweets.")
                    },
                    CONVERSATION_START: function() {
                        return Object(r.default)("Conversation start.")
                    },
                    CONVERSATION_END: function() {
                        return Object(r.default)("Conversation end.")
                    },
                    NEW_ITEMS_BAR_VISIBLE: function() {
                        return Object(r.default)("New Tweets available. Press period to review them.")
                    },
                    DM_MESSAGE_SENT: function(t) {
                        return Object(r.default)("Direct message sent: {{message}}", {
                            message: t
                        })
                    }
                },
                this.CLEAR_LOG_EVENTS = ["uiPageChanged", "uiShortcutSelectPrev", "uiShortcutSelectNext", "uiSelectNext", "uiSelectItem", "uiShortcutGotoTopOfScreen", "uiSelectTopTweet", "uiTypeaheadSelectionCleared"].join(" "),
                this.createLog = function() {
                    var e = t('<div id="sr-event-log" class="visuallyhidden" aria-live="assertive"></div>');
                    t("body").append(e),
                    this.$log = e
                }
                ,
                this.speakSpecifiedMessage = function(t, e) {
                    this.logMessage(e.message, e.assertiveness)
                }
                ,
                this.logMessage = function(e, i) {
                    if (this.$log) {
                        i || (i = "assertive"),
                        i !== this.$log.attr("aria-live") && this.$log.attr("aria-live", i);
                        var n = t("<p>").text(e);
                        this.$log.append(n),
                        this.$log.children().length > 3 && this.$log.children().first().remove()
                    }
                }
                ,
                this.logEvent = function(t, e) {
                    for (var i = arguments.length, n = Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++)
                        n[o - 2] = arguments[o];
                    var r = this;
                    return function() {
                        var i;
                        return r.logMessage((i = r.MESSAGES)[t].apply(i, n), e)
                    }
                }
                ,
                this.logPageChange = function() {
                    this.logMessage(Object(r.default)("Page ready: {{title}}", {
                        title: document.title
                    }))
                }
                ,
                this.logCharCountWarning = function(t, e) {
                    this.clearLog(),
                    this.logMessage(e.charCount, "polite")
                }
                ,
                this.logTypeAheadResultsVisible = function(t, e) {
                    this.typeAheadResultsVisible && e.query && this.logSuggestionsVisible(t, e)
                }
                ,
                this.logSuggestionsVisible = function(t, e) {
                    e.numResults > 1 ? this.logMessage(Object(r.default)("{{numResults}} suggestions.", {
                        numResults: e.numResults
                    }), "polite") : this.logMessage(Object(r.default)("{{numResults}} suggestion.", {
                        numResults: e.numResults
                    }), "polite")
                }
                ,
                this.clearLog = function() {
                    this.$log && this.$log.html("")
                }
                ,
                this.after("initialize", function() {
                    var t = this;
                    this.on(document, "uiSwiftLoaded", this.createLog),
                    this.on(document, "uiDidFavoriteTweet dataFailedToUnfavoriteTweet", this.logEvent("LIKED")),
                    this.on(document, "uiDidUnfavoriteTweet dataFailedToFavoriteTweet", this.logEvent("UNLIKED")),
                    this.on(document, "uiDidRetweet dataFailedToUnretweet", this.logEvent("RETWEETED")),
                    this.on(document, "uiDidUnretweet dataFailedToRetweet", this.logEvent("UNRETWEETED")),
                    this.on(document, "uiRenderingExpandedConversation", this.logEvent("RENDERING_CONVERSATION", "polite")),
                    this.on(document, "uiExpandedConversationRendered", this.logEvent("CONVERSATION_RENDERED", "polite")),
                    this.on(document, "uiNewItemsBarVisible", this.logEvent("NEW_ITEMS_BAR_VISIBLE", "polite")),
                    this.on(document, "uiCharCountWarningVisible", this.logCharCountWarning),
                    this.on(document, "uiTypeaheadResultsShown", function() {
                        this.typeAheadResultsVisible = !0
                    }),
                    this.on(document, "uiTypeaheadResultsHidden", function() {
                        this.typeAheadResultsVisible = !1
                    }),
                    this.on(document, "uiTypeaheadResultsShown", a.default.debounce(this.logTypeAheadResultsVisible, this.attr.typeaheadDebounceInterval)),
                    this.on(document, "uiGeoResultsShown", a.default.debounce(this.logSuggestionsVisible, this.attr.typeaheadDebounceInterval)),
                    this.on(document, "uiDMSendMessage dataDMDialogSendMessageRetry", function(e, i) {
                        t.logEvent("DM_MESSAGE_SENT", "polite", i.text)
                    }),
                    this.on(document, this.CLEAR_LOG_EVENTS, this.clearLog),
                    this.on(document, "uiPageChanged", this.logPageChange),
                    this.on(document, "uiShouldSpeakMessage", this.speakSpecifiedMessage)
                })
            }
            var o = i("DBjh")
              , r = i("0d4m")
              , a = i("YzIt")
              , s = Object(o.default)(n);
            e.a = s
        }
        ).call(e, i("4kSj"))
    },
    sB3e: function(t, e, i) {
        var n = i("52gC");
        t.exports = function(t) {
            return Object(n(t))
        }
    },
    sb1D: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    sendImpressionCookieSelector: "a[data-send-impression-cookie]",
                    link: "a"
                }),
                this.setCookie = function(t, e) {
                    Object(r.a)("ic", t, {
                        expires: e
                    })
                }
                ,
                this.sendImpressionCookie = function(e, i) {
                    var n = i.el;
                    if (n) {
                        var o = t(n)
                          , r = o.closest("[data-impression-cookie]").attr("data-impression-cookie");
                        this.triggerPromotedClickAndSetCookie(e, {
                            href: o.attr("href"),
                            hostName: n.hostname,
                            impressionCookie: r
                        })
                    }
                }
                ,
                this.triggerPromotedClickAndSetCookie = function(t, e) {
                    if (e.impressionCookie) {
                        this.trigger("uiPromotedLinkClick", {
                            href: e.href
                        });
                        var i = new Date
                          , n = new Date(i.getTime() + 6e5).toUTCString();
                        this.setCookie(e.impressionCookie, n)
                    }
                }
                ,
                this.after("initialize", function() {
                    this.on("click", {
                        sendImpressionCookieSelector: this.sendImpressionCookie
                    }),
                    this.on("uiShowProfileNewWindow", {
                        link: this.sendImpressionCookie
                    }),
                    this.on("uiSendImpressionCookie", this.triggerPromotedClickAndSetCookie)
                })
            }
            var o = i("DBjh")
              , r = i("dsp6");
            e.a = Object(o.default)(n)
        }
        ).call(e, i("4kSj"))
    },
    sp77: function(t, e, i) {
        "use strict";
        function n(t, e) {
            if ("string" != typeof t)
                throw new TypeError("argument str must be a string");
            for (var i = {}, n = e || {}, o = t.split(u), s = n.decode || a, c = 0; c < o.length; c++) {
                var l = o[c]
                  , d = l.indexOf("=");
                if (!(d < 0)) {
                    var h = l.substr(0, d).trim()
                      , f = l.substr(++d, l.length).trim();
                    '"' == f[0] && (f = f.slice(1, -1)),
                    void 0 == i[h] && (i[h] = r(f, s))
                }
            }
            return i
        }
        function o(t, e, i) {
            var n = i || {}
              , o = n.encode || s;
            if ("function" != typeof o)
                throw new TypeError("option encode is invalid");
            if (!c.test(t))
                throw new TypeError("argument name is invalid");
            var r = o(e);
            if (r && !c.test(r))
                throw new TypeError("argument val is invalid");
            var a = t + "=" + r;
            if (null != n.maxAge) {
                var u = n.maxAge - 0;
                if (isNaN(u))
                    throw new Error("maxAge should be a Number");
                a += "; Max-Age=" + Math.floor(u)
            }
            if (n.domain) {
                if (!c.test(n.domain))
                    throw new TypeError("option domain is invalid");
                a += "; Domain=" + n.domain
            }
            if (n.path) {
                if (!c.test(n.path))
                    throw new TypeError("option path is invalid");
                a += "; Path=" + n.path
            }
            if (n.expires) {
                if ("function" != typeof n.expires.toUTCString)
                    throw new TypeError("option expires is invalid");
                a += "; Expires=" + n.expires.toUTCString()
            }
            if (n.httpOnly && (a += "; HttpOnly"),
            n.secure && (a += "; Secure"),
            n.sameSite) {
                switch ("string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite) {
                case !0:
                    a += "; SameSite=Strict";
                    break;
                case "lax":
                    a += "; SameSite=Lax";
                    break;
                case "strict":
                    a += "; SameSite=Strict";
                    break;
                default:
                    throw new TypeError("option sameSite is invalid")
                }
            }
            return a
        }
        function r(t, e) {
            try {
                return e(t)
            } catch (e) {
                return t
            }
        }
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
        e.parse = n,
        e.serialize = o;
        var a = decodeURIComponent
          , s = encodeURIComponent
          , u = /; */
          , c = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
    },
    ssKs: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    activeClass: "active",
                    newClass: "new",
                    newCountClass: "new-count",
                    maxCountClass: "max",
                    nav: "li",
                    notificationsNav: "li.notifications",
                    meNav: "li.profile",
                    navLinkSelector: "li > a",
                    linkSelector: "a",
                    notificationsCountSelector: "li.people .count",
                    notificationsCountInnerSelector: "li.people .count .count-inner",
                    maxCountValue: 99,
                    dynamicTooltipSelector: ".js-dynamic-tooltip"
                }),
                this.updateActive = function(t, e) {
                    e && (this.select("nav").removeClass(this.attr.activeClass),
                    this.select("nav").filter("[data-global-action=" + e.section + "]").addClass(this.attr.activeClass),
                    this.removeGlowFromActive())
                }
                ,
                this.isNotificationsActive = function() {
                    return this.select("notificationsNav").hasClass(this.attr.activeClass)
                }
                ,
                this.updateNotificationsCount = function(t, e) {
                    e && e.count && "number" == typeof e.count && e.count > 0 && !this.isNotificationsActive() ? this.setNotificationsCount(e.localized_count) : this.clearBadgeAndNotificationsCount()
                }
                ,
                this.setNotificationsCount = function(t) {
                    var e = this.select("notificationsCountSelector")
                      , i = this.select("notificationsCountInnerSelector")
                      , n = t > this.attr.maxCountValue;
                    n && (t = this.attr.maxCountValue + "+"),
                    e.toggleClass(this.attr.maxCountClass, n),
                    i.text(t),
                    e.addClass(this.attr.newCountClass)
                }
                ,
                this.clearBadgeAndNotificationsCount = function() {
                    var t = this.select("notificationsCountSelector");
                    t.removeClass(this.attr.newCountClass),
                    t.removeClass(this.attr.maxCountClass)
                }
                ,
                this.addGlowToActive = function() {
                    this.$node.find("." + this.attr.activeClass).addClass(this.attr.newClass)
                }
                ,
                this.addGlowToMe = function() {
                    this.select("meNav").addClass(this.attr.newClass)
                }
                ,
                this.removeGlowFromActive = function() {
                    this.$node.find("." + this.attr.activeClass).not(this.attr.meNav).removeClass(this.attr.newClass)
                }
                ,
                this.removeGlowFromMe = function() {
                    this.select("meNav").removeClass(this.attr.newClass)
                }
                ,
                this.scrollToTopLink = function(e) {
                    var i = t(e.target).closest(this.attr.linkSelector);
                    i.attr("href") === Object(r.a)() && (e.preventDefault(),
                    i.blur(),
                    this.scrollToTop())
                }
                ,
                this.topBarBirdClick = function() {
                    this.scrollToTop({
                        wasTopBarBirdClick: !0
                    })
                }
                ,
                this.scrollToTop = function(t) {
                    Object(a.a)(0, "fast"),
                    this.trigger(document, "uiGotoTopOfScreen", t || {})
                }
                ,
                this.addTooltip = function(e, i) {
                    var n = t(i.el)
                      , o = n.find(".text");
                    1 !== o.width() || n.attr("data-original-title") || (o.addClass("u-hiddenVisually"),
                    n.attr({
                        "data-original-title": o.text().trim()
                    }))
                }
                ,
                this.removeTooltip = function(e, i) {
                    var n = t(i.el)
                      , o = n.find(".text");
                    n.attr("data-original-title") && (o.removeClass("u-hiddenVisually"),
                    n.removeAttr("data-original-title"))
                }
                ,
                this.after("initialize", function() {
                    this.on(document, "uiAddPageCount", this.addGlowToActive),
                    this.on(document, "uiHasInjectedNewTimeline", this.removeGlowFromActive),
                    this.on(document, "uiUpdateConnectBadge", this.updateNotificationsCount),
                    this.on(document, "dataPageRefresh", this.updateActive),
                    this.on(".bird-topbar-etched", "click", this.topBarBirdClick),
                    this.on("click", {
                        navLinkSelector: this.scrollToTopLink
                    }),
                    this.on("mouseover focusin", {
                        dynamicTooltipSelector: this.addTooltip
                    }),
                    this.on("mouseout focusout", {
                        dynamicTooltipSelector: this.removeTooltip
                    })
                })
            }
            var o = i("DBjh")
              , r = i("Ckrd")
              , a = i("lV5l")
              , s = Object(o.default)(n);
            e.a = s
        }
        ).call(e, i("4kSj"))
    },
    sxXh: function(t, e, i) {
        "use strict";
        (function(t) {
            var n = i("TX0g")
              , o = function(t) {
                var e = t.search.substr(1);
                return n.a.decode(e)
            }
              , r = function(t) {
                var e = t.href
                  , i = e.indexOf("#")
                  , o = i < 0 ? "" : e.substring(i + 1);
                return n.a.decode(o)
            }
              , a = function(t) {
                var e = {}
                  , i = o(t)
                  , n = r(t);
                for (var a in i)
                    i.hasOwnProperty(a) && (e[a] = i[a]);
                for (var s in n)
                    n.hasOwnProperty(s) && (e[s] = n[s]);
                return e
            }
              , s = function(e, i) {
                var n = t("<a>", {
                    href: e
                })[0]
                  , o = n.search ? "&" : "";
                return n.search += o + t.param(i),
                n.href
            };
            e.a = {
                combined: a,
                fromQuery: o,
                fromFragment: r,
                addToUrl: s
            }
        }
        ).call(e, i("4kSj"))
    },
    t6Jz: function(t, e, i) {
        "use strict";
        function n() {
            this.defaultAttrs({
                scribeContext: {},
                path: "https://syndication.twitter.com/i/jot/syndication",
                baseParam: "l",
                category: "syndicated_impression"
            }),
            this.scribeMetricsTokenImpression = function() {
                var t = {};
                t._category_ = this.attr.category,
                t.event_namespace = r({}, this.attr.scribeContext, {
                    action: "impression"
                }),
                t.triggered_on = +new Date,
                this.send(t)
            }
            ,
            this.generateUrl = function(t) {
                return this.attr.path + "?" + this.attr.baseParam + "=" + encodeURIComponent(JSON.stringify(t))
            }
            ,
            this.send = function(t) {
                (new Image).src = this.generateUrl(t)
            }
            ,
            this.after("initialize", function() {
                this.on("uiSwiftLoaded uiPageChanged", this.scribeMetricsTokenImpression)
            })
        }
        var o = i("DBjh")
          , r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
        ;
        e.a = Object(o.default)(n)
    },
    t8x9: function(t, e, i) {
        var n = i("77Pl")
          , o = i("lOnJ")
          , r = i("dSzd")("species");
        t.exports = function(t, e) {
            var i, a = n(t).constructor;
            return void 0 === a || void 0 == (i = n(a)[r]) ? e : o(i)
        }
    },
    tLYs: function(t, e, i) {
        "use strict";
        (function(t) {
            function n(t) {
                return S.descriptionsAndKeywords && S.descriptionsAndKeywords[t] || []
            }
            function o(t) {
                return t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + (t - 65536 >> 10 & 1023), 56320 + (1023 & t))
            }
            function r(t) {
                return parseInt(t, 16)
            }
            var a = i("0d4m")
              , s = i("KgvP")
              , u = i("FUxd")
              , c = i("xK4V")
              , l = i.n(c)
              , d = i("YzIt")
              , h = i("MFJV")
              , f = i.n(h)
              , p = i("+0cQ")
              , g = i.n(p)
              , m = i("cmX3")
              , v = i.n(m)
              , b = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            }
              , y = /[\x00-\x22\x24-\x29\x2b-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\xd7\xf7\u2000-\u206F\u2E00-\u2E7F\u3000-\u303F\ufe00-\ufe0f]/g
              , w = void 0
              , S = {}
              , C = {}
              , T = d.default.debounce(function() {
                return t(document).trigger("uiEmojiInfoLoad")
            }, 1e4, !0)
              , x = {
                hexCodePointsToUnicode: function(t) {
                    return t.split("-").map(r).map(o).join("")
                },
                normalizeKeyword: function(t) {
                    return t.replace(y, "").toLocaleLowerCase().replace(u.a.regex, function() {
                        var t = u.a.infoFromMatch(Array.prototype.slice.call(arguments));
                        return x.hexCodePointsToUnicode(t.baseKey || t.key)
                    })
                },
                setEmojiAssetsPath: function(t) {
                    w = t
                },
                setEmojiInfo: function(t) {
                    S !== t && (C = {},
                    S = t,
                    x.resolveEmptyDescriptions())
                },
                description: function(t) {
                    return n(t)[0] || ""
                },
                keywords: function(t) {
                    return n(t)[1] || ""
                },
                infoFromMatch: function(t) {
                    var e = t && u.a.infoFromMatch(t);
                    if (!e)
                        return e;
                    var i = e.skinToneKey ? (x.description(e.baseKey) + " " + x.description(e.skinToneKey)).trim() : x.description(e.key)
                      , n = e.skinToneKey ? e.baseKey : e.key
                      , o = C[n];
                    if (!o) {
                        o = x.description(n).split(" ");
                        var r = x.keywords(n);
                        r && (o = o.concat(r.split(","))),
                        o.push(e.text),
                        o = s.a.unique(o.map(x.normalizeKeyword).filter(Boolean)),
                        C[n] = o
                    }
                    return b({
                        imageUrl: w + e.key + ".png",
                        description: i,
                        aria: Object(a.default)("Emoji: {{description}}", {
                            description: i
                        }),
                        keywords: o
                    }, e)
                },
                lazyLoadDescriptions: function() {
                    S.descriptionsAndKeywords || T()
                },
                infoFromSingleEmoji: function(t) {
                    return u.a.regex.lastIndex = 0,
                    x.infoFromMatch(u.a.regex.exec(t))
                },
                EMOJIFY_FOR_COMPOSER: f.a,
                EMOJIFY_FOR_LINKS: g.a,
                EMOJIFY_FOR_TEXT: v.a,
                emojifyPreEscapedText: function(t, e, i) {
                    var n = 0;
                    return t.replace(u.a.regex, function(t) {
                        if (void 0 !== i && ++n > i)
                            return t;
                        x.lazyLoadDescriptions();
                        var o = x.infoFromMatch(Array.prototype.slice.call(arguments));
                        return (e || x.EMOJIFY_FOR_TEXT).render(o)
                    })
                },
                emojifyText: function(t, e, i) {
                    return x.emojifyPreEscapedText(l.a.htmlEscape(t), e, i)
                },
                getEmojiEntities: function(t) {
                    var e = [];
                    t.replace(u.a.regex, function(t) {
                        var i = x.infoFromMatch(Array.prototype.slice.call(arguments));
                        e.push({
                            match: t,
                            length: t.length,
                            index: arguments[arguments.length - 2],
                            emojiInfo: i
                        })
                    });
                    var i = 0
                      , n = [];
                    return e.forEach(function(e) {
                        var o = t.substring(i, e.index);
                        i = e.index + e.length,
                        o && n.push({
                            text: o,
                            emojiInfo: void 0
                        }),
                        n.push({
                            text: e.match,
                            emojiInfo: e.emojiInfo
                        })
                    }),
                    e.length || n.push({
                        text: t,
                        emojiInfo: void 0
                    }),
                    n
                },
                resolveEmptyDescriptions: function() {
                    function e(t, e) {
                        var i = x.infoFromSingleEmoji(e || "");
                        i && t.attr({
                            title: i.description,
                            "aria-label": i.aria
                        })
                    }
                    t('.Emoji--forLinks[title=""]').each(function(i, n) {
                        var o = t(n);
                        e(o, o.next().text())
                    }),
                    t('.Emoji--forText[title=""]').each(function(i, n) {
                        var o = t(n);
                        e(o, o.attr("alt"))
                    }),
                    t('.RichEditor-pictographText[title=""]').each(function(i, n) {
                        var o = t(n);
                        e(o, o.attr("data-pictograph-text"))
                    })
                }
            };
            e.a = x
        }
        ).call(e, i("4kSj"))
    },
    tPBl: function(t, e, i) {
        "use strict";
        (function(t) {
            function i() {
                this.defaultAttrs({
                    hasConversationModuleClass: "has-conversation-module",
                    conversationModuleSelectorAlt: ".conversation-module",
                    rootClass: "root",
                    conversationRootTweetSelector: ".conversation-module .conversation-tweet-item.root .tweet",
                    conversationAncestorTweetSelector: ".conversation-module .conversation-tweet-item:not(root) .tweet"
                }),
                this.getConversationAttrs = function(t) {
                    var e = {}
                      , i = t.closest(".tweet");
                    if (i.hasClass(this.attr.hasConversationModuleClass)) {
                        var n = i.closest(this.attr.conversationModuleSelector);
                        e.isConversation = !0,
                        e.conversationAncestors = n.attr("data-ancestors").split(",")
                    } else
                        i.hasClass("conversation-tweet") && (e.isConversationComponent = !0,
                        e.description = i.hasClass(this.attr.rootClass) ? "root" : "ancestor");
                    return e
                }
                ,
                this.conversationComponentInteractionData = function(e, i) {
                    return {
                        itemType: "tweet",
                        tweetId: t(e).attr("data-item-id"),
                        description: i,
                        isConversationComponent: !0
                    }
                }
                ,
                this.extraInteractionData = function(t) {
                    var e = this;
                    if (t.find(this.attr.conversationModuleSelector).length > 0) {
                        var i = t.find(this.conversationRootTweetSelector).map(function(t, i) {
                            return e.conversationComponentInteractionData(i, "root")
                        }).get()
                          , n = t.find(this.attr.conversationAncestorTweetSelector).map(function(t, i) {
                            return e.conversationComponentInteractionData(i, "ancestor")
                        }).get();
                        return i.concat(n)
                    }
                    return []
                }
                ,
                this.addConversationScribeContext = function(t, e, i) {
                    return e && e.isConversation ? (t.component = "conversation",
                    t.element = "tweet") : e && e.isConversationComponent && (t.component = "conversation",
                    i || (t.element = e.description)),
                    t
                }
                ,
                this.after("initialize", function() {
                    this.attr.conversationModuleSelector || (this.attr.conversationModuleSelector = this.attr.conversationModuleSelectorAlt)
                })
            }
            e.a = i
        }
        ).call(e, i("4kSj"))
    },
    te80: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("rY9R"), i("Yg0w"), i("9CHI"), i("9DDo"), i("WNtH"), i("qtBK"), i("IHon"), i("k/l/"), i("lm8W"), i("5JGd"), i("WHlL"), i("KgGA"), i("z06B"), i("gb4J"), i("2+NM"), i("LXg4")],
        void 0 !== (o = function(t, e, i, n, o, r, a, s, u, c) {
            "use strict";
            function l() {
                b && (window.requestAnimationFrame(l),
                t.fx.tick())
            }
            function d() {
                return window.setTimeout(function() {
                    v = void 0
                }),
                v = t.now()
            }
            function h(t, e) {
                var i, n = 0, r = {
                    height: t
                };
                for (e = e ? 1 : 0; n < 4; n += 2 - e)
                    i = o[n],
                    r["margin" + i] = r["padding" + i] = t;
                return e && (r.opacity = r.width = t),
                r
            }
            function f(t, e, i) {
                for (var n, o = (m.tweeners[e] || []).concat(m.tweeners["*"]), r = 0, a = o.length; r < a; r++)
                    if (n = o[r].call(i, e, t))
                        return n
            }
            function p(e, i, n) {
                var o, a, s, l, d, h, p, g, m = "width"in i || "height"in i, v = this, b = {}, w = e.style, S = e.nodeType && r(e), C = u.get(e, "fxshow");
                n.queue || (l = t._queueHooks(e, "fx"),
                null == l.unqueued && (l.unqueued = 0,
                d = l.empty.fire,
                l.empty.fire = function() {
                    l.unqueued || d()
                }
                ),
                l.unqueued++,
                v.always(function() {
                    v.always(function() {
                        l.unqueued--,
                        t.queue(e, "fx").length || l.empty.fire()
                    })
                }));
                for (o in i)
                    if (a = i[o],
                    y.test(a)) {
                        if (delete i[o],
                        s = s || "toggle" === a,
                        a === (S ? "hide" : "show")) {
                            if ("show" !== a || !C || void 0 === C[o])
                                continue;
                            S = !0
                        }
                        b[o] = C && C[o] || t.style(e, o)
                    }
                if ((h = !t.isEmptyObject(i)) || !t.isEmptyObject(b)) {
                    m && 1 === e.nodeType && (n.overflow = [w.overflow, w.overflowX, w.overflowY],
                    p = C && C.display,
                    null == p && (p = u.get(e, "display")),
                    g = t.css(e, "display"),
                    "none" === g && (p ? g = p : (c([e], !0),
                    p = e.style.display || p,
                    g = t.css(e, "display"),
                    c([e]))),
                    ("inline" === g || "inline-block" === g && null != p) && "none" === t.css(e, "float") && (h || (v.done(function() {
                        w.display = p
                    }),
                    null == p && (g = w.display,
                    p = "none" === g ? "" : g)),
                    w.display = "inline-block")),
                    n.overflow && (w.overflow = "hidden",
                    v.always(function() {
                        w.overflow = n.overflow[0],
                        w.overflowX = n.overflow[1],
                        w.overflowY = n.overflow[2]
                    })),
                    h = !1;
                    for (o in b)
                        h || (C ? "hidden"in C && (S = C.hidden) : C = u.access(e, "fxshow", {
                            display: p
                        }),
                        s && (C.hidden = !S),
                        S && c([e], !0),
                        v.done(function() {
                            S || c([e]),
                            u.remove(e, "fxshow");
                            for (o in b)
                                t.style(e, o, b[o])
                        })),
                        h = f(S ? C[o] : 0, o, v),
                        o in C || (C[o] = h.start,
                        S && (h.end = h.start,
                        h.start = 0))
                }
            }
            function g(e, i) {
                var n, o, r, a, s;
                for (n in e)
                    if (o = t.camelCase(n),
                    r = i[o],
                    a = e[n],
                    t.isArray(a) && (r = a[1],
                    a = e[n] = a[0]),
                    n !== o && (e[o] = a,
                    delete e[n]),
                    (s = t.cssHooks[o]) && "expand"in s) {
                        a = s.expand(a),
                        delete e[o];
                        for (n in a)
                            n in e || (e[n] = a[n],
                            i[n] = r)
                    } else
                        i[o] = r
            }
            function m(e, i, n) {
                var o, r, a = 0, s = m.prefilters.length, u = t.Deferred().always(function() {
                    delete c.elem
                }), c = function() {
                    if (r)
                        return !1;
                    for (var t = v || d(), i = Math.max(0, l.startTime + l.duration - t), n = i / l.duration || 0, o = 1 - n, a = 0, s = l.tweens.length; a < s; a++)
                        l.tweens[a].run(o);
                    return u.notifyWith(e, [l, o, i]),
                    o < 1 && s ? i : (u.resolveWith(e, [l]),
                    !1)
                }, l = u.promise({
                    elem: e,
                    props: t.extend({}, i),
                    opts: t.extend(!0, {
                        specialEasing: {},
                        easing: t.easing._default
                    }, n),
                    originalProperties: i,
                    originalOptions: n,
                    startTime: v || d(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(i, n) {
                        var o = t.Tween(e, l.opts, i, n, l.opts.specialEasing[i] || l.opts.easing);
                        return l.tweens.push(o),
                        o
                    },
                    stop: function(t) {
                        var i = 0
                          , n = t ? l.tweens.length : 0;
                        if (r)
                            return this;
                        for (r = !0; i < n; i++)
                            l.tweens[i].run(1);
                        return t ? (u.notifyWith(e, [l, 1, 0]),
                        u.resolveWith(e, [l, t])) : u.rejectWith(e, [l, t]),
                        this
                    }
                }), h = l.props;
                for (g(h, l.opts.specialEasing); a < s; a++)
                    if (o = m.prefilters[a].call(l, e, h, l.opts))
                        return t.isFunction(o.stop) && (t._queueHooks(l.elem, l.opts.queue).stop = t.proxy(o.stop, o)),
                        o;
                return t.map(h, f, l),
                t.isFunction(l.opts.start) && l.opts.start.call(e, l),
                t.fx.timer(t.extend(c, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })),
                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }
            var v, b, y = /^(?:toggle|show|hide)$/, w = /queueHooks$/;
            return t.Animation = t.extend(m, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return s(n.elem, t, i.exec(e), n),
                        n
                    }
                    ]
                },
                tweener: function(e, i) {
                    t.isFunction(e) ? (i = e,
                    e = ["*"]) : e = e.match(n);
                    for (var o, r = 0, a = e.length; r < a; r++)
                        o = e[r],
                        m.tweeners[o] = m.tweeners[o] || [],
                        m.tweeners[o].unshift(i)
                },
                prefilters: [p],
                prefilter: function(t, e) {
                    e ? m.prefilters.unshift(t) : m.prefilters.push(t)
                }
            }),
            t.speed = function(i, n, o) {
                var r = i && "object" == typeof i ? t.extend({}, i) : {
                    complete: o || !o && n || t.isFunction(i) && i,
                    duration: i,
                    easing: o && n || n && !t.isFunction(n) && n
                };
                return t.fx.off || e.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration in t.fx.speeds ? r.duration = t.fx.speeds[r.duration] : r.duration = t.fx.speeds._default),
                null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    t.isFunction(r.old) && r.old.call(this),
                    r.queue && t.dequeue(this, r.queue)
                }
                ,
                r
            }
            ,
            t.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(r).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(e, i, n, o) {
                    var r = t.isEmptyObject(e)
                      , a = t.speed(i, n, o)
                      , s = function() {
                        var i = m(this, t.extend({}, e), a);
                        (r || u.get(this, "finish")) && i.stop(!0)
                    };
                    return s.finish = s,
                    r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
                },
                stop: function(e, i, n) {
                    var o = function(t) {
                        var e = t.stop;
                        delete t.stop,
                        e(n)
                    };
                    return "string" != typeof e && (n = i,
                    i = e,
                    e = void 0),
                    i && !1 !== e && this.queue(e || "fx", []),
                    this.each(function() {
                        var i = !0
                          , r = null != e && e + "queueHooks"
                          , a = t.timers
                          , s = u.get(this);
                        if (r)
                            s[r] && s[r].stop && o(s[r]);
                        else
                            for (r in s)
                                s[r] && s[r].stop && w.test(r) && o(s[r]);
                        for (r = a.length; r--; )
                            a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n),
                            i = !1,
                            a.splice(r, 1));
                        !i && n || t.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"),
                    this.each(function() {
                        var i, n = u.get(this), o = n[e + "queue"], r = n[e + "queueHooks"], a = t.timers, s = o ? o.length : 0;
                        for (n.finish = !0,
                        t.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        i = a.length; i--; )
                            a[i].elem === this && a[i].queue === e && (a[i].anim.stop(!0),
                            a.splice(i, 1));
                        for (i = 0; i < s; i++)
                            o[i] && o[i].finish && o[i].finish.call(this);
                        delete n.finish
                    })
                }
            }),
            t.each(["toggle", "show", "hide"], function(e, i) {
                var n = t.fn[i];
                t.fn[i] = function(t, e, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(h(i, !0), t, e, o)
                }
            }),
            t.each({
                slideDown: h("show"),
                slideUp: h("hide"),
                slideToggle: h("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, i) {
                t.fn[e] = function(t, e, n) {
                    return this.animate(i, t, e, n)
                }
            }),
            t.timers = [],
            t.fx.tick = function() {
                var e, i = 0, n = t.timers;
                for (v = t.now(); i < n.length; i++)
                    (e = n[i])() || n[i] !== e || n.splice(i--, 1);
                n.length || t.fx.stop(),
                v = void 0
            }
            ,
            t.fx.timer = function(e) {
                t.timers.push(e),
                e() ? t.fx.start() : t.timers.pop()
            }
            ,
            t.fx.interval = 13,
            t.fx.start = function() {
                b || (b = window.requestAnimationFrame ? window.requestAnimationFrame(l) : window.setInterval(t.fx.tick, t.fx.interval))
            }
            ,
            t.fx.stop = function() {
                window.cancelAnimationFrame ? window.cancelAnimationFrame(b) : window.clearInterval(b),
                b = null
            }
            ,
            t.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    u4TT: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("Jozb")],
        void 0 !== (o = function(t) {
            "use strict";
            t.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, i) {
                t.fn[i] = function(t) {
                    return this.on(i, t)
                }
            })
        }
        .apply(e, n)) && (t.exports = o)
    },
    uDHI: function(t, e, i) {
        "use strict";
        function n() {
            this.bootWithTeardownContext = function(t, e, i) {
                var n = o.default.addInstance;
                i && (o.default.addInstance = function(t) {
                    t.teardownContext = i,
                    n.call(o.default, t)
                }
                ),
                t(e),
                o.default.addInstance = n
            }
        }
        var o = i("kxx+");
        e.a = n
    },
    uRBM: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    recentSearchesSelector: ".recent-searches-list",
                    recentSearchesItemSelector: ".typeahead-recent-search-item",
                    recentSearchesDismissSelector: ".typeahead-recent-search-item .Icon--close",
                    recentSearchesBlockSelector: ".typeahead-recent-searches",
                    recentSearchesTitleSelector: ".recent-searches-title",
                    recentSearchesClearAllSelector: ".clear-recent-searches",
                    datasources: ["recentSearches"]
                }),
                this.deleteRecentSearch = function(e, i) {
                    var n = t(e.target).closest(this.attr.recentSearchesItemSelector)
                      , o = n.find("a.js-nav")
                      , r = o.data("search-query");
                    1 === this.$recentSearchesList.children().length && (this.$recentSearchesTitle.hide(),
                    this.$recentSearchesBlock.removeClass("has-results"),
                    this.$recentSearchesBlock.removeClass("has-items"),
                    this.$recentSearchesClearAll.hide()),
                    n.remove(),
                    this.trigger("uiTypeaheadDeleteRecentSearch", {
                        query: r
                    })
                }
                ,
                this.deleteAllRecentSearches = function(t, e) {
                    this.$recentSearchesList.empty(),
                    this.$recentSearchesTitle.hide(),
                    this.$recentSearchesBlock.removeClass("has-results"),
                    this.$recentSearchesBlock.removeClass("has-items"),
                    this.$recentSearchesClearAll.hide(),
                    this.trigger("uiTypeaheadDeleteRecentSearch", {
                        deleteAll: !0
                    })
                }
                ,
                this.renderRecentSearches = function(e, i) {
                    this.$recentSearchesList.empty();
                    var n = this.attr.datasources.map(function(t) {
                        return i.suggestions[t] || []
                    }).reduce(function(t, e) {
                        return t.concat(e)
                    });
                    n.forEach(function(e) {
                        var i = this.$recentSearchItemTemplate.clone(!1);
                        i.data("item", e);
                        var n = i.find("a");
                        n.attr("href", e.recent_search_path),
                        n.attr("data-search-query", e.name),
                        n.attr("data-query-source", e.search_query_source),
                        n.append(t("<span>").text(e.name)),
                        this.$recentSearchesList.append(i)
                    }, this);
                    var o = 0 !== n.length
                      , r = "" === i.queryData.query
                      , a = r && o;
                    this.$recentSearchesBlock.toggleClass("has-results", !r && o),
                    this.$recentSearchesBlock.toggleClass("has-items", o),
                    this.$recentSearchesTitle.toggle(a),
                    this.$recentSearchesClearAll.toggle(a)
                }
                ,
                this.after("initialize", function() {
                    this.$recentSearchItemTemplate = this.select("recentSearchesItemSelector").clone(!1),
                    this.$recentSearchesList = this.select("recentSearchesSelector"),
                    this.$recentSearchesBlock = this.select("recentSearchesBlockSelector"),
                    this.$recentSearchesTitle = this.select("recentSearchesTitleSelector"),
                    this.$recentSearchesClearAll = this.select("recentSearchesClearAllSelector"),
                    this.on("click", {
                        recentSearchesDismissSelector: this.deleteRecentSearch,
                        recentSearchesClearAllSelector: this.deleteAllRecentSearches
                    }),
                    this.on("uiTypeaheadRenderResults", this.renderRecentSearches),
                    this.on("uiTypeaheadDeleteAllRecentSearches", this.deleteAllRecentSearches)
                })
            }
            var o = i("DBjh");
            e.a = Object(o.default)(n)
        }
        ).call(e, i("4kSj"))
    },
    "ui9/": function(t, e, i) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , r = function() {
            function t() {
                n(this, t)
            }
            return o(t, null, [{
                key: "isAvailable",
                value: function() {
                    return "function" == typeof document.queryCommandSupported && document.queryCommandSupported("copy")
                }
            }, {
                key: "getString",
                value: function() {
                    return Promise.resolve("")
                }
            }, {
                key: "setString",
                value: function(t) {
                    var e = !1
                      , i = document.body;
                    if (i) {
                        var n = document.createElement("span");
                        n.textContent = t,
                        n.style.position = "absolute",
                        n.style.opacity = "0",
                        i.appendChild(n);
                        var o = window.getSelection();
                        o.removeAllRanges();
                        var r = document.createRange();
                        r.selectNodeContents(n),
                        o.addRange(r);
                        try {
                            document.execCommand("copy"),
                            e = !0
                        } catch (t) {}
                        o.removeAllRanges(),
                        i.removeChild(n)
                    }
                    return e
                }
            }]),
            t
        }();
        e.a = r
    },
    ukCe: function(t, e, i) {
        var n, o;
        n = [i("VZrU")],
        void 0 !== (o = function(t) {
            "use strict";
            return new t
        }
        .apply(e, n)) && (t.exports = o)
    },
    unGK: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("DdOc"), i("rY9R"), i("vKSX"), i("x8As"), i("YXmp"), i("TzBB"), i("TLAG"), i("5JGd"), i("2+NM"), i("rYQx")],
        void 0 !== (o = function(t, e, i, n, o, r, a, s) {
            "use strict";
            function u(e) {
                return t.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            return t.offset = {
                setOffset: function(e, i, n) {
                    var o, r, a, s, u, c, l, d = t.css(e, "position"), h = t(e), f = {};
                    "static" === d && (e.style.position = "relative"),
                    u = h.offset(),
                    a = t.css(e, "top"),
                    c = t.css(e, "left"),
                    l = ("absolute" === d || "fixed" === d) && (a + c).indexOf("auto") > -1,
                    l ? (o = h.position(),
                    s = o.top,
                    r = o.left) : (s = parseFloat(a) || 0,
                    r = parseFloat(c) || 0),
                    t.isFunction(i) && (i = i.call(e, n, t.extend({}, u))),
                    null != i.top && (f.top = i.top - u.top + s),
                    null != i.left && (f.left = i.left - u.left + r),
                    "using"in i ? i.using.call(e, f) : h.css(f)
                }
            },
            t.fn.extend({
                offset: function(e) {
                    if (arguments.length)
                        return void 0 === e ? this : this.each(function(i) {
                            t.offset.setOffset(this, e, i)
                        });
                    var i, n, o, r, a = this[0];
                    if (a)
                        return a.getClientRects().length ? (o = a.getBoundingClientRect(),
                        o.width || o.height ? (r = a.ownerDocument,
                        n = u(r),
                        i = r.documentElement,
                        {
                            top: o.top + n.pageYOffset - i.clientTop,
                            left: o.left + n.pageXOffset - i.clientLeft
                        }) : o) : {
                            top: 0,
                            left: 0
                        }
                },
                position: function() {
                    if (this[0]) {
                        var e, i, n = this[0], o = {
                            top: 0,
                            left: 0
                        };
                        return "fixed" === t.css(n, "position") ? i = n.getBoundingClientRect() : (e = this.offsetParent(),
                        i = this.offset(),
                        t.nodeName(e[0], "html") || (o = e.offset()),
                        o = {
                            top: o.top + t.css(e[0], "borderTopWidth", !0),
                            left: o.left + t.css(e[0], "borderLeftWidth", !0)
                        }),
                        {
                            top: i.top - o.top - t.css(n, "marginTop", !0),
                            left: i.left - o.left - t.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === t.css(e, "position"); )
                            e = e.offsetParent;
                        return e || n
                    })
                }
            }),
            t.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(i, n) {
                var o = "pageYOffset" === n;
                t.fn[i] = function(t) {
                    return e(this, function(t, e, i) {
                        var r = u(t);
                        if (void 0 === i)
                            return r ? r[n] : t[e];
                        r ? r.scrollTo(o ? r.pageXOffset : i, o ? i : r.pageYOffset) : t[e] = i
                    }, i, t, arguments.length)
                }
            }),
            t.each(["top", "left"], function(e, i) {
                t.cssHooks[i] = a(s.pixelPosition, function(e, n) {
                    if (n)
                        return n = r(e, i),
                        o.test(n) ? t(e).position()[i] + "px" : n
                })
            }),
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    unxK: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    undoBlockSelector: ".js-undo-block",
                    undoUnblockSelector: ".js-undo-unblock"
                }),
                this.handleUndo = function(e, i, n) {
                    n.userId = t(n.el).data("user-id"),
                    n.screenName = t(n.el).data("screen-name");
                    var o = {
                        component: "message_drawer",
                        element: "undolink"
                    };
                    this.trigger(e, {
                        userId: n.userId,
                        scribeContext: o
                    })
                }
                ,
                this.after("initialize", function() {
                    this.on("click", {
                        undoUnblockSelector: this.handleUndo.bind(this, "uiBlockAction"),
                        undoBlockSelector: this.handleUndo.bind(this, "uiUnblockAction")
                    })
                })
            }
            var o = i("DBjh")
              , r = i("gcfh")
              , a = Object(o.default)(n, r.a);
            e.a = a
        }
        ).call(e, i("4kSj"))
    },
    uqUo: function(t, e, i) {
        var n = i("kM2E")
          , o = i("FeBl")
          , r = i("S82l");
        t.exports = function(t, e) {
            var i = (o.Object || {})[t] || Object[t]
              , a = {};
            a[t] = e(i),
            n(n.S + n.F * r(function() {
                i(1)
            }), "Object", a)
        }
    },
    uqwf: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("WHlL"), i("te80")],
        void 0 !== (o = function(t) {
            "use strict";
            return t.fn.delay = function(e, i) {
                return e = t.fx ? t.fx.speeds[e] || e : e,
                i = i || "fx",
                this.queue(i, function(t, i) {
                    var n = window.setTimeout(t, e);
                    i.stop = function() {
                        window.clearTimeout(n)
                    }
                })
            }
            ,
            t.fn.delay
        }
        .apply(e, n)) && (t.exports = o)
    },
    urph: function(t, e, i) {
        "use strict";
        function n(t) {
            if (!(this instanceof n))
                throw new TypeError("Constructor Promise requires `new`");
            if (!d(t))
                throw new TypeError("Must pass resolver function");
            this._state = a,
            this._value = [],
            this._isChainEnd = !0,
            g(this, c(this, o), c(this, r), {
                then: t
            })
        }
        function o(t, e, i, n) {
            return e ? (n || (n = new s(this.constructor)),
            v(p(n, e, t)),
            n.promise) : this
        }
        function r(t, e, i, n) {
            return i ? (n || (n = new s(this.constructor)),
            v(p(n, i, t)),
            n.promise) : this
        }
        function a(t, e, i, n) {
            return e || i ? (n || (n = new s(this.constructor)),
            t.push({
                deferred: n,
                onFulfilled: e || n.resolve,
                onRejected: i || n.reject
            }),
            n.promise) : this
        }
        function s(t) {
            var e = this;
            return this.promise = new t(function(t, i) {
                e.resolve = t,
                e.reject = i
            }
            ),
            e
        }
        function u(t, e, i) {
            var n = t._value;
            t._state = e,
            t._value = i;
            for (var o = 0; o < n.length; o++) {
                var a = n[o];
                t._state(i, a.onFulfilled, a.onRejected, a.deferred)
            }
            e === r && t._isChainEnd && setTimeout(function() {
                t._isChainEnd && m(i, t)
            }, 0)
        }
        function c(t, e) {
            return function(i) {
                u(t, e, i)
            }
        }
        function l() {}
        function d(t) {
            return "function" == typeof t
        }
        function h(t) {
            return t === Object(t)
        }
        function f(t, e) {
            for (var i = 0; i < t.length; i++)
                e(t[i], i)
        }
        function p(t, e, i) {
            var n = t.promise
              , o = t.resolve
              , r = t.reject;
            return function() {
                try {
                    var t = e(i);
                    if (o === e || r === e)
                        return;
                    g(n, o, r, t, t)
                } catch (t) {
                    r(t)
                }
            }
        }
        function g(t, e, i, n, o) {
            var r, a, s = i;
            try {
                if (n === t)
                    throw new TypeError("Cannot fulfill promise with itself");
                var c = h(n);
                c && n instanceof t.constructor ? u(t, n._state, n._value) : c && (r = n.then) && d(r) ? (a = function(n) {
                    a = s = l,
                    g(t, e, i, n, n)
                }
                ,
                s = function(t) {
                    a = s = l,
                    i(t)
                }
                ,
                r.call(o, function(t) {
                    a(t)
                }, function(t) {
                    s(t)
                })) : e(n)
            } catch (t) {
                s(t)
            }
        }
        n.prototype.then = function(t, e) {
            return t = d(t) ? t : void 0,
            e = d(e) ? e : void 0,
            (t || e) && (this._isChainEnd = !1),
            this._state(this._value, t, e)
        }
        ,
        n.prototype.catch = function(t) {
            return this.then(void 0, t)
        }
        ,
        n.resolve = function(t) {
            var e = this;
            return h(t) && t instanceof this ? t : new e(function(e) {
                e(t)
            }
            )
        }
        ,
        n.reject = function(t) {
            return new this(function(_, e) {
                e(t)
            }
            )
        }
        ,
        n.all = function(t) {
            var e = this;
            return new e(function(i, n) {
                var o = t.length
                  , r = new Array(o);
                if (0 === o)
                    return i(r);
                f(t, function(t, a) {
                    e.resolve(t).then(function(t) {
                        r[a] = t,
                        0 == --o && i(r)
                    }, n)
                })
            }
            )
        }
        ,
        n.race = function(t) {
            var e = this;
            return new e(function(i, n) {
                for (var o = 0, r = t.length; o < r; o++)
                    e.resolve(t[o]).then(i, n)
            }
            )
        }
        ,
        n._overrideUnhandledExceptionHandler = function(t) {
            m = t
        }
        ;
        var m = function(t, e) {
            throw t
        }
          , v = function() {
            function t() {
                for (var t = 0; t < o; t++) {
                    var e = n[t];
                    n[t] = null,
                    e()
                }
                o = 0
            }
            function e(t) {
                0 === o && i(),
                n[o++] = t
            }
            var i;
            "undefined" != typeof window && window.postMessage ? (window.addEventListener("message", t),
            i = function() {
                window.postMessage("macro-task", "*")
            }
            ) : i = function() {
                setTimeout(t, 0)
            }
            ;
            var n = new Array(16)
              , o = 0;
            return e
        }();
        t.exports = n
    },
    v2wR: function(t, e, i) {
        "use strict";
        function n() {
            o.default.mixin(this, [r.a]),
            this.maxElements = {},
            this.getMaxElements = function(t) {
                return this.maxElements[t] || 0
            }
            ,
            this.setMaxElements = function(t, e) {
                this.maxElements[t] = e
            }
            ,
            this.before("push", function(t, e) {
                this.makeRoomFor(t, 1)
            }),
            this.around("pushAll", function(t, e, i) {
                return i = i || [],
                this.makeRoomFor(e, i.length),
                t(e, i.slice(Math.max(0, i.length - this.getMaxElements(e))))
            }),
            this.makeRoomFor = function(t, e) {
                var i = this.getArray(t)
                  , n = i.length + e - this.getMaxElements(t);
                n > 0 && (i.splice(0, n),
                this.setItem(t, i))
            }
        }
        var o = i("q9/C")
          , r = i("aXPZ");
        e.a = n
    },
    "vFc/": function(t, e, i) {
        var n = i("TcQ7")
          , o = i("QRG4")
          , r = i("QyNh");
        t.exports = function(t) {
            return function(e, i, a) {
                var s, u = n(e), c = o(u.length), l = r(a, c);
                if (t && i != i) {
                    for (; c > l; )
                        if ((s = u[l++]) != s)
                            return !0
                } else
                    for (; c > l; l++)
                        if ((t || l in u) && u[l] === i)
                            return t || l || 0;
                return !t && -1
            }
        }
    },
    "vIB/": function(t, e, i) {
        "use strict";
        var n = i("O4g8")
          , o = i("kM2E")
          , r = i("880/")
          , a = i("hJx8")
          , s = i("D2L2")
          , u = i("/bQp")
          , c = i("94VQ")
          , l = i("e6n0")
          , d = i("PzxK")
          , h = i("dSzd")("iterator")
          , f = !([].keys && "next"in [].keys())
          , p = function() {
            return this
        };
        t.exports = function(t, e, i, g, m, v, b) {
            c(i, e, g);
            var y, w, S, C = function(t) {
                if (!f && t in k)
                    return k[t];
                switch (t) {
                case "keys":
                case "values":
                    return function() {
                        return new i(this,t)
                    }
                }
                return function() {
                    return new i(this,t)
                }
            }, T = e + " Iterator", x = "values" == m, E = !1, k = t.prototype, O = k[h] || k["@@iterator"] || m && k[m], D = O || C(m), A = m ? x ? C("entries") : D : void 0, I = "Array" == e ? k.entries || O : O;
            if (I && (S = d(I.call(new t))) !== Object.prototype && (l(S, T, !0),
            n || s(S, h) || a(S, h, p)),
            x && O && "values" !== O.name && (E = !0,
            D = function() {
                return O.call(this)
            }
            ),
            n && !b || !f && !E && k[h] || a(k, h, D),
            u[e] = D,
            u[T] = p,
            m)
                if (y = {
                    values: x ? D : C("values"),
                    keys: v ? D : C("keys"),
                    entries: A
                },
                b)
                    for (w in y)
                        w in k || r(k, w, y[w]);
                else
                    o(o.P + o.F * (f || E), e, y);
            return y
        }
    },
    vKSX: function(t, e, i) {
        var n, o;
        n = [i("rY9R")],
        void 0 !== (o = function(t) {
            "use strict";
            return t.documentElement
        }
        .apply(e, n)) && (t.exports = o)
    },
    vQGr: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("DdOc"), i("k/l/"), i("ukCe")],
        void 0 !== (o = function(t, e, i, n) {
            "use strict";
            function o(t) {
                return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : a.test(t) ? JSON.parse(t) : t)
            }
            function r(t, e, i) {
                var r;
                if (void 0 === i && 1 === t.nodeType)
                    if (r = "data-" + e.replace(s, "-$&").toLowerCase(),
                    "string" == typeof (i = t.getAttribute(r))) {
                        try {
                            i = o(i)
                        } catch (t) {}
                        n.set(t, e, i)
                    } else
                        i = void 0;
                return i
            }
            var a = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , s = /[A-Z]/g;
            return t.extend({
                hasData: function(t) {
                    return n.hasData(t) || i.hasData(t)
                },
                data: function(t, e, i) {
                    return n.access(t, e, i)
                },
                removeData: function(t, e) {
                    n.remove(t, e)
                },
                _data: function(t, e, n) {
                    return i.access(t, e, n)
                },
                _removeData: function(t, e) {
                    i.remove(t, e)
                }
            }),
            t.fn.extend({
                data: function(o, a) {
                    var s, u, c, l = this[0], d = l && l.attributes;
                    if (void 0 === o) {
                        if (this.length && (c = n.get(l),
                        1 === l.nodeType && !i.get(l, "hasDataAttrs"))) {
                            for (s = d.length; s--; )
                                d[s] && (u = d[s].name,
                                0 === u.indexOf("data-") && (u = t.camelCase(u.slice(5)),
                                r(l, u, c[u])));
                            i.set(l, "hasDataAttrs", !0)
                        }
                        return c
                    }
                    return "object" == typeof o ? this.each(function() {
                        n.set(this, o)
                    }) : e(this, function(t) {
                        var e;
                        if (l && void 0 === t) {
                            if (void 0 !== (e = n.get(l, o)))
                                return e;
                            if (void 0 !== (e = r(l, o)))
                                return e
                        } else
                            this.each(function() {
                                n.set(this, o, t)
                            })
                    }, null, a, arguments.length > 1, null, !0)
                },
                removeData: function(t) {
                    return this.each(function() {
                        n.remove(this, t)
                    })
                }
            }),
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    vRZH: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.parseHeadersString = e.getNormalizedUrlFromRequest = void 0;
        var n = i("mw3O")
          , o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n);
        e.getNormalizedUrlFromRequest = function(t) {
            var e = o.default.stringify(t.params)
              , i = e.length > 0
              , n = t.uri.indexOf("?") > -1 ? "&" : "?";
            return i ? "" + t.uri + n + e : t.uri
        }
        ,
        e.parseHeadersString = function(t) {
            return t.split("\n").filter(Boolean).reduce(function(t, e) {
                var i = e.indexOf(":")
                  , n = e.slice(0, i).trim()
                  , o = e.slice(i + 1).trim();
                return n && o && (t[n.toLowerCase()] = o),
                t
            }, {})
        }
    },
    vlyl: function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return r
        }),
        i.d(e, "b", function() {
            return a
        });
        var n = i("0d4m")
          , o = i("2Doy")
          , r = {
            ACCOUNT_SUSPENDED: Object(n.default)("Sorry, this account has been suspended."),
            ACCOUNT_UPDATE_FAILURE: Object(n.default)("Account update failed."),
            ADD_PHONE: Object(n.default)("Add phone"),
            API_OVER_CAPACITY: Object(n.default)("Twitter is over capacity. Please wait a few moments then try again."),
            BLOCKED_DEFAULT: Object(n.default)("You have been blocked from performing this action."),
            BLOCKED_FROM_LIKE: Object(n.default)("You have been blocked from liking this user's Tweets at their request."),
            BLOCKED_FROM_RETWEET: Object(n.default)("You have been blocked from retweeting this user's Tweets at their request."),
            CANNOT_ATTACH_MEDIA: Object(n.default)("Cannot attach media, try re-uploading."),
            CANNOT_MESSAGE_THIS_ACCOUNT: Object(n.default)("Sorry! You cannot message this account."),
            CREEPER_FOLLOW: Object(n.default)('To protect our users from spam and other malicious activity, this account is temporarily blocked from following additional accounts. Please make sure you understand the Twitter Rules. <a href="{{twitter_rules_path}}">Learn more</a>', {
                twitter_rules_path: "https://twitter.com/rules"
            }),
            CREEPER_TWEET: Object(n.default)("To protect our users from spam and other malicious activity, this account is temporarily blocked from sending Tweets. Please make sure you understand the Twitter Rules."),
            DAILY_RATE_LIMIT_ADD_PHONE: Object(n.default)("You have reached your daily limit for this action. Please <a href='{{add_a_phone_path}}'>add a phone to your account</a> to remove the limit.", {
                add_a_phone_path: "/settings/add_phone"
            }),
            DAILY_RATE_LIMIT_DEFAULT: Object(n.default)("You are over the daily limit for this action."),
            DAILY_RATE_LIMIT_DM: Object(n.default)("You are over the daily limit for sending messages."),
            DAILY_RATE_LIMIT_TWEET: Object(n.default)("You are over the daily limit for sending Tweets."),
            DEVICE_ALREADY_REGISTERED: Object(n.default)("This phone number is already registered."),
            DEVICE_OPERATOR_UNSUPPORTED: Object(n.default)("We cannot send a text message to this phone number because its operator is not supported."),
            DEVICE_REGISTRATION_GENERAL_ERROR: Object(n.default)("We are unable to verify this phone number."),
            DM_NOT_FOLLOWING: Object(n.default)("This user doesn't follow you. You can only send messages to people who do."),
            DM_TOO_LONG: Object(n.default)("This message is too long."),
            FOLLOW_RATE_LIMITED: Object(n.default)('You are unable to follow more people at this time. <a href="{{follow_limit_help_doc_path}}">Learn more</a>', {
                follow_limit_help_doc_path: "https://support.twitter.com/articles/66885"
            }),
            INVALID_CURRENT_PASSWORD: Object(n.default)("The password you entered was incorrect."),
            INVALID_MEDIA: Object(n.default)("The media you tried to upload was invalid."),
            LEARN_MORE: Object(n.default)("Learn more"),
            NEW_PASSWORD_WEAK: Object(n.default)("That password is too easy to guess. Please choose a stronger password."),
            NO_FOLLOW_REQUEST_PENDING: Object(n.default)("No follow request pending for that user."),
            NO_MUTE_SELF: Object(n.default)("You can't mute yourself."),
            NOT_MUTING_TARGET_USER: Object(n.default)("You are not muting the specified user."),
            PARAMATER_INVALID: Object(n.default)("One or more fields are invalid. Please check your input and try again."),
            PLEASE_ADD_PHONE_TO_FINISH: Object(n.default)("Please add your phone number to finish setting up your account"),
            PLEASE_COMPELTE_ALL_FIELDS: Object(n.default)("Please complete all required fields."),
            PLEASE_REFRESH: Object(n.default)("Please refresh the page and try again."),
            REFRESH: Object(n.default)("Refresh"),
            REQUEST_LOOKS_AUTOMATED: Object(n.default)("This request looks like it might be automated. To protect our users from spam and other malicious activity, we can't complete this action right now. Please try again later."),
            SMS_VERIFY_RATE_LIMIT_EXCEEDED: Object(n.default)("Sms verification rate limit exceeded."),
            SMS_VERIFY_INVALID_PIN: Object(n.default)("SMS verification pin is invalid."),
            SORRY_COULD_NOT_FIND_USER: Object(n.default)("Sorry, we couldn't find that user."),
            SORRY_RATE_LIMITED: Object(n.default)("Sorry, you are rate limited. Please wait a few moments then try again."),
            SUSPENDED_DEFAULT: Object(n.default)("Your account is suspended and is not permitted to perform this action."),
            SUSPENDED_DM: Object(n.default)("Your account is suspended and is not permitted to send messages."),
            SUSPENDED_TWEET: Object(n.default)("Your account is suspended and is not permitted to send Tweets."),
            TRY_ADD_LIST_MEMBER_AGAIN: Object(n.default)("Try adding a list member again in a minute."),
            TRY_BLOCK_AGAIN: Object(n.default)("Try blocking that user again in a minute."),
            TRY_CANCEL_FOLLOW_REQUEST_AGAIN: Object(n.default)("Try canceling your follow request for that user again in a minute."),
            TRY_DELETE_TWEET_AGAIN: Object(n.default)("Try deleting your Tweet again in a minute."),
            TRY_DM_AGAIN: Object(n.default)("Try sending your message again in a minute."),
            TRY_FOLLOW_AGAIN: Object(n.default)("Try following that user again in a minute."),
            TRY_LIKING_AGAIN: Object(n.default)("Try liking your Tweet again in a minute."),
            TRY_REMOVING_LIST_MEMBER_AGAIN: Object(n.default)("Try removing a list member again in a minute."),
            TRY_RETWEET_AGAIN: Object(n.default)("Try Retweet again in a minute."),
            TRY_TWEET_AGAIN: Object(n.default)("Try sending your Tweet again in a minute."),
            TRY_UNBLOCK_AGAIN: Object(n.default)("Try unblocking that user again in a minute."),
            TRY_UNFOLLOW_AGAIN: Object(n.default)("Try unfollowing that user again in a minute."),
            TRY_UNLIKING_AGAIN: Object(n.default)("Try unliking your Tweet again in a minute."),
            TRY_UNRETWEET_AGAIN: Object(n.default)("Try undoing your Retweet again in a minute."),
            TWEET_IS_DELETED: Object(n.default)("Sorry, that Tweet has been deleted."),
            TWEET_UNAUTHORIZED: Object(n.default)("Sorry, you are not authorized to see this status."),
            URL_CONTAINS_MALWARE: Object(n.default)("Oops! A URL in your Tweet appears to link to a page that has spammy or unsafe content."),
            USER_ALREADY_HAS_VERIFIED_PHONE: Object(n.default)("This user already has a verified phone number."),
            WE_DID_SOMETHING_WRONG: Object(n.default)("Sorry! We did something wrong."),
            WHOOPS_YOU_ALREADY_SAID_THAT: Object(n.default)("Whoops! You already said that."),
            YOU_MUST_FOLLOW_USER_FIRST: Object(n.default)("You must follow this user first before sending a message to them."),
            YOUR_ACCOUNT_MAY_NOT_BE_ALLOWED: Object(n.default)("Your account may not be allowed to perform this action. Please refresh the page and try again."),
            YOUR_MESSAGE_COULD_NOT_BE_SENT: Object(n.default)("Your message could not be sent.")
        }
          , a = Object.keys(o.a).reduce(function(t, e) {
            return t[o.a[e]] = e,
            t
        }, {})
    },
    w6V8: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    linkToTweetDestinationSelector: ".link-to-tweet-destination"
                }),
                this.openDialog = function(e, i) {
                    var n = t(e.target).attr("data-permalink-path")
                      , a = location.protocol + "//" + location.host + n;
                    if (r.a.isAvailable() && r.a.setString(a)) {
                        this.trigger("uiForceDropdownClosed");
                        var s = Object(o.default)("Link copied.");
                        return this.trigger("uiShowMessage", {
                            message: s
                        }),
                        this.trigger("uiUserCopiedTweetCode", {
                            scribeContext: this.scribeContext()
                        })
                    }
                    this.open(),
                    this.$linkToTweetDestination.val(a),
                    this.selectTweetCode(),
                    this.trigger("uiCopyLinkToTweetDialogOpened", {
                        scribeContext: this.scribeContext()
                    })
                }
                ,
                this.selectTweetCode = function() {
                    this.$linkToTweetDestination.select()
                }
                ,
                this.tweetCodeCopied = function() {
                    this.trigger("uiUserCopiedTweetCode", {
                        scribeContext: this.scribeContext()
                    })
                }
                ,
                this.scribeContext = function() {
                    return {
                        component: "copy_link_to_tweet_dialog"
                    }
                }
                ,
                this.after("initialize", function() {
                    this.$linkToTweetDestination = this.select("linkToTweetDestinationSelector"),
                    this.on(this.$linkToTweetDestination, "copy cut", this.tweetCodeCopied),
                    this.on(this.$linkToTweetDestination, "click", this.selectTweetCode),
                    this.on(document, "uiNeedsCopyLinkToTweetDialog", this.openDialog)
                })
            }
            var o = i("0d4m")
              , r = i("ui9/")
              , a = i("DBjh")
              , s = i("UHc7")
              , u = Object(a.default)(n, s.a);
            e.a = u
        }
        ).call(e, i("4kSj"))
    },
    wVWF: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("fq1W"), i("wgNQ"), i("rTPn"), i("z06B"), i("gb4J"), i("rYQx")],
        void 0 !== (o = function(t, e) {
            "use strict";
            t.fn.load = function(i, n, o) {
                var r, a, s, u = this, c = i.indexOf(" ");
                return c > -1 && (r = e(i.slice(c)),
                i = i.slice(0, c)),
                t.isFunction(n) ? (o = n,
                n = void 0) : n && "object" == typeof n && (a = "POST"),
                u.length > 0 && t.ajax({
                    url: i,
                    type: a || "GET",
                    dataType: "html",
                    data: n
                }).done(function(e) {
                    s = arguments,
                    u.html(r ? t("<div>").append(t.parseHTML(e)).find(r) : e)
                }).always(o && function(t, e) {
                    u.each(function() {
                        o.apply(this, s || [t.responseText, e, t])
                    })
                }
                ),
                this
            }
        }
        .apply(e, n)) && (t.exports = o)
    },
    wgNQ: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("rY9R"), i("WMlg"), i("JwrG"), i("L94v")],
        void 0 !== (o = function(t, e, i, n, o) {
            "use strict";
            return t.parseHTML = function(r, a, s) {
                if ("string" != typeof r)
                    return [];
                "boolean" == typeof a && (s = a,
                a = !1);
                var u, c, l;
                return a || (o.createHTMLDocument ? (a = e.implementation.createHTMLDocument(""),
                u = a.createElement("base"),
                u.href = e.location.href,
                a.head.appendChild(u)) : a = e),
                c = i.exec(r),
                l = !s && [],
                c ? [a.createElement(c[1])] : (c = n([r], a, l),
                l && l.length && t(l).remove(),
                t.merge([], c.childNodes))
            }
            ,
            t.parseHTML
        }
        .apply(e, n)) && (t.exports = o)
    },
    wxAW: function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i("C4MV")
          , o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n);
        e.default = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    (0,
                    o.default)(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
    },
    x4tu: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    successFromEndpoints: {
                        mute: "dataDidMuteUser",
                        unmute: "dataDidUnmuteUser"
                    },
                    errorsFromEndpoints: {
                        mute: "dataFailedToMuteUser",
                        unmute: "dataFailedToUnmuteUser"
                    }
                }),
                this.takeAction = function(e, i, n) {
                    var o = function(i) {
                        i = t.extend(i, {
                            userId: n.userId
                        }),
                        i && i.message && this.trigger("uiShowMessage", i),
                        this.trigger(this.attr.successFromEndpoints[e], i)
                    }
                      , r = function(t) {
                        t && t.message && this.trigger("uiShowMessage", t),
                        this.trigger(this.attr.errorsFromEndpoints[e], t)
                    };
                    this.post({
                        url: "/i/user/" + e,
                        data: {
                            user_id: n.userId
                        },
                        eventData: n,
                        success: o.bind(this),
                        error: r.bind(this)
                    })
                }
                ,
                this.hitEndpoint = function(t) {
                    return this.takeAction.bind(this, t)
                }
                ,
                this.after("initialize", function() {
                    this.on(document, "uiMuteUserAction", this.hitEndpoint("mute")),
                    this.on(document, "uiUnmuteUserAction", this.hitEndpoint("unmute"))
                })
            }
            var o = i("DBjh")
              , r = i("VtWx")
              , a = Object(o.default)(n, r.a);
            e.a = a
        }
        ).call(e, i("4kSj"))
    },
    x8As: function(t, e, i) {
        var n, o;
        n = [i("kdUt")],
        void 0 !== (o = function(t) {
            "use strict";
            return new RegExp("^(" + t + ")(?!px)[a-z%]+$","i")
        }
        .apply(e, n)) && (t.exports = o)
    },
    x8Ow: function(t, e, i) {
        "use strict";
        var n = ["https://api.twitter.com", "https://twitter.com"]
          , o = function(t) {
            var e = function(t, e) {
                return 0 === t.indexOf(e) ? t.substr(e.length) : t
            };
            return n.reduce(e, t)
        };
        e.a = o
    },
    xGkn: function(t, e, i) {
        "use strict";
        var n = i("4mcu")
          , o = i("EGZi")
          , r = i("/bQp")
          , a = i("TcQ7");
        t.exports = i("vIB/")(Array, "Array", function(t, e) {
            this._t = a(t),
            this._i = 0,
            this._k = e
        }, function() {
            var t = this._t
              , e = this._k
              , i = this._i++;
            return !t || i >= t.length ? (this._t = void 0,
            o(1)) : "keys" == e ? o(0, i) : "values" == e ? o(0, t[i]) : o(0, [i, t[i]])
        }, "values"),
        r.Arguments = r.Array,
        n("keys"),
        n("values"),
        n("entries")
    },
    "xH/j": function(t, e, i) {
        var n = i("hJx8");
        t.exports = function(t, e, i) {
            for (var o in e)
                i && t[o] ? t[o] = e[o] : n(t, o, e[o]);
            return t
        }
    },
    xIf1: function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function o(t) {
            var e = t.dispatcher;
            return function() {
                function t() {
                    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (0,
                    u.default)(this, t);
                    var n = i.dispatcher || e;
                    if ("function" != typeof n)
                        throw new Error('No "dispatcher" function provided to HttpClient constructor');
                    this.host = i.host || "",
                    this.retryFilter = i.retryFilter || h.IdentityFilter,
                    this.errorFilter = i.errorFilter || h.IdentityFilter,
                    this.filters = i.filters || [];
                    var o = [this.retryFilter].concat((0,
                    a.default)(this.filters), [this.errorFilter])
                      , r = h.compose.apply(h, (0,
                    a.default)(o));
                    this._dispatch = function(t) {
                        return r(t, n)
                    }
                }
                return (0,
                l.default)(t, [{
                    key: "dispatch",
                    value: function(t) {
                        return void 0 === t.headers && (t.headers = {}),
                        void 0 === t.params && (t.params = {}),
                        t.host || (t.host = this.host),
                        t.uri = t.host + t.path,
                        this._dispatch(t)
                    }
                }]),
                t
            }()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i("Gu7T")
          , a = n(r)
          , s = i("Zrlr")
          , u = n(s)
          , c = i("wxAW")
          , l = n(c);
        e.default = o;
        var d = i("dIAO")
          , h = function(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t,
            e
        }(d)
    },
    xK4V: function(t, e, i) {
        /*!
 * twitter-text 1.15.3
 *
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this work except in compliance with the License.
 * You may obtain a copy of the License at:
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 */
        !function(e, i) {
            t.exports = i()
        }(0, function() {
            "use strict";
            function t(t, e, i) {
                return i ? !t || t.match(e) && RegExp["$&"] === t : "string" == typeof t && t.match(e) && RegExp["$&"] === t
            }
            var e = /[a-z]{1,6}(?:[._][a-z]{1,2})?/i
              , i = /\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~\$/
              , n = function(t, e, i) {
                return i = i || "",
                "string" != typeof t && (t.global && i.indexOf("g") < 0 && (i += "g"),
                t.ignoreCase && i.indexOf("i") < 0 && (i += "i"),
                t.multiline && i.indexOf("m") < 0 && (i += "m"),
                t = t.source),
                new RegExp(t.replace(/#\{(\w+)\}/g, function(t, i) {
                    var n = e[i] || "";
                    return "string" != typeof n && (n = n.source),
                    n
                }),i)
            }
              , o = /\x09-\x0D\x20\x85\xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000/
              , r = n(/[#{spacesGroup}]/, {
                spacesGroup: o
            })
              , a = n("(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])", {
                cashtag: e,
                spaces: r,
                punct: i
            }, "gi")
              , s = function(t) {
                if (!t || -1 === t.indexOf("$"))
                    return [];
                var e = [];
                return t.replace(a, function(t, i, n, o, r, a) {
                    var s = r + i.length
                      , u = s + o.length + 1;
                    e.push({
                        cashtag: o,
                        indices: [s, u]
                    })
                }),
                e
            }
              , u = /[#＃]/
              , c = n(/^(?:#{hashSigns}|:\/\/)/, {
                hashSigns: u
            })
              , l = n(RegExp("(?:(?:한국|香港|澳門|新加坡|台灣|台湾|中國|中国|გე|ไทย|ලංකා|ഭാരതം|ಭಾರತ|భారత్|சிங்கப்பூர்|இலங்கை|இந்தியா|ଭାରତ|ભારત|ਭਾਰਤ|ভাৰত|ভারত|বাংলা|भारोत|भारतम्|भारत|ڀارت|پاکستان|مليسيا|مصر|قطر|فلسطين|عمان|عراق|سورية|سودان|تونس|بھارت|بارت|ایران|امارات|المغرب|السعودية|الجزائر|الاردن|հայ|қаз|укр|срб|рф|мон|мкд|ею|бел|бг|ελ|zw|zm|za|yt|ye|ws|wf|vu|vn|vi|vg|ve|vc|va|uz|uy|us|um|uk|ug|ua|tz|tw|tv|tt|tr|tp|to|tn|tm|tl|tk|tj|th|tg|tf|td|tc|sz|sy|sx|sv|su|st|ss|sr|so|sn|sm|sl|sk|sj|si|sh|sg|se|sd|sc|sb|sa|rw|ru|rs|ro|re|qa|py|pw|pt|ps|pr|pn|pm|pl|pk|ph|pg|pf|pe|pa|om|nz|nu|nr|np|no|nl|ni|ng|nf|ne|nc|na|mz|my|mx|mw|mv|mu|mt|ms|mr|mq|mp|mo|mn|mm|ml|mk|mh|mg|mf|me|md|mc|ma|ly|lv|lu|lt|ls|lr|lk|li|lc|lb|la|kz|ky|kw|kr|kp|kn|km|ki|kh|kg|ke|jp|jo|jm|je|it|is|ir|iq|io|in|im|il|ie|id|hu|ht|hr|hn|hm|hk|gy|gw|gu|gt|gs|gr|gq|gp|gn|gm|gl|gi|gh|gg|gf|ge|gd|gb|ga|fr|fo|fm|fk|fj|fi|eu|et|es|er|eh|eg|ee|ec|dz|do|dm|dk|dj|de|cz|cy|cx|cw|cv|cu|cr|co|cn|cm|cl|ck|ci|ch|cg|cf|cd|cc|ca|bz|by|bw|bv|bt|bs|br|bq|bo|bn|bm|bl|bj|bi|bh|bg|bf|be|bd|bb|ba|az|ax|aw|au|at|as|ar|aq|ao|an|am|al|ai|ag|af|ae|ad|ac)(?=[^0-9a-zA-Z@]|$))"))
              , d = /\uFFFE\uFEFF\uFFFF\u202A-\u202E/
              , h = function(t, e) {
                return t.replace(/#\{(\w+)\}/g, function(t, i) {
                    return e[i] || ""
                })
            }
              , f = h("#{punct}#{spacesGroup}#{invalidCharsGroup}", {
                punct: i,
                spacesGroup: o,
                invalidCharsGroup: d
            })
              , p = n(/[^#{invalidDomainChars}]/, {
                invalidDomainChars: f
            })
              , g = n(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/, {
                validDomainChars: p
            })
              , m = n(RegExp("(?:(?:삼성|닷컴|닷넷|香格里拉|餐厅|食品|飞利浦|電訊盈科|集团|通販|购物|谷歌|诺基亚|联通|网络|网站|网店|网址|组织机构|移动|珠宝|点看|游戏|淡马锡|机构|書籍|时尚|新闻|政府|政务|手表|手机|我爱你|慈善|微博|广东|工行|家電|娱乐|天主教|大拿|大众汽车|在线|嘉里大酒店|嘉里|商标|商店|商城|公益|公司|八卦|健康|信息|佛山|企业|中文网|中信|世界|ポイント|ファッション|セール|ストア|コム|グーグル|クラウド|みんな|คอม|संगठन|नेट|कॉम|همراه|موقع|موبايلي|كوم|كاثوليك|عرب|شبكة|بيتك|بازار|العليان|ارامكو|اتصالات|ابوظبي|קום|сайт|рус|орг|онлайн|москва|ком|католик|дети|zuerich|zone|zippo|zip|zero|zara|zappos|yun|youtube|you|yokohama|yoga|yodobashi|yandex|yamaxun|yahoo|yachts|xyz|xxx|xperia|xin|xihuan|xfinity|xerox|xbox|wtf|wtc|wow|world|works|work|woodside|wolterskluwer|wme|winners|wine|windows|win|williamhill|wiki|wien|whoswho|weir|weibo|wedding|wed|website|weber|webcam|weatherchannel|weather|watches|watch|warman|wanggou|wang|walter|walmart|wales|vuelos|voyage|voto|voting|vote|volvo|volkswagen|vodka|vlaanderen|vivo|viva|vistaprint|vista|vision|visa|virgin|vip|vin|villas|viking|vig|video|viajes|vet|versicherung|vermögensberatung|vermögensberater|verisign|ventures|vegas|vanguard|vana|vacations|ups|uol|uno|university|unicom|uconnect|ubs|ubank|tvs|tushu|tunes|tui|tube|trv|trust|travelersinsurance|travelers|travelchannel|travel|training|trading|trade|toys|toyota|town|tours|total|toshiba|toray|top|tools|tokyo|today|tmall|tkmaxx|tjx|tjmaxx|tirol|tires|tips|tiffany|tienda|tickets|tiaa|theatre|theater|thd|teva|tennis|temasek|telefonica|telecity|tel|technology|tech|team|tdk|tci|taxi|tax|tattoo|tatar|tatamotors|target|taobao|talk|taipei|tab|systems|symantec|sydney|swiss|swiftcover|swatch|suzuki|surgery|surf|support|supply|supplies|sucks|style|study|studio|stream|store|storage|stockholm|stcgroup|stc|statoil|statefarm|statebank|starhub|star|staples|stada|srt|srl|spreadbetting|spot|spiegel|space|soy|sony|song|solutions|solar|sohu|software|softbank|social|soccer|sncf|smile|smart|sling|skype|sky|skin|ski|site|singles|sina|silk|shriram|showtime|show|shouji|shopping|shop|shoes|shiksha|shia|shell|shaw|sharp|shangrila|sfr|sexy|sex|sew|seven|ses|services|sener|select|seek|security|secure|seat|search|scot|scor|scjohnson|science|schwarz|schule|school|scholarships|schmidt|schaeffler|scb|sca|sbs|sbi|saxo|save|sas|sarl|sapo|sap|sanofi|sandvikcoromant|sandvik|samsung|samsclub|salon|sale|sakura|safety|safe|saarland|ryukyu|rwe|run|ruhr|rugby|rsvp|room|rogers|rodeo|rocks|rocher|rmit|rip|rio|ril|rightathome|ricoh|richardli|rich|rexroth|reviews|review|restaurant|rest|republican|report|repair|rentals|rent|ren|reliance|reit|reisen|reise|rehab|redumbrella|redstone|red|recipes|realty|realtor|realestate|read|raid|radio|racing|qvc|quest|quebec|qpon|pwc|pub|prudential|pru|protection|property|properties|promo|progressive|prof|productions|prod|pro|prime|press|praxi|pramerica|post|porn|politie|poker|pohl|pnc|plus|plumbing|playstation|play|place|pizza|pioneer|pink|ping|pin|pid|pictures|pictet|pics|piaget|physio|photos|photography|photo|phone|philips|phd|pharmacy|pfizer|pet|pccw|pay|passagens|party|parts|partners|pars|paris|panerai|panasonic|pamperedchef|page|ovh|ott|otsuka|osaka|origins|orientexpress|organic|org|orange|oracle|open|ooo|onyourside|online|onl|ong|one|omega|ollo|oldnavy|olayangroup|olayan|okinawa|office|off|observer|obi|nyc|ntt|nrw|nra|nowtv|nowruz|now|norton|northwesternmutual|nokia|nissay|nissan|ninja|nikon|nike|nico|nhk|ngo|nfl|nexus|nextdirect|next|news|newholland|new|neustar|network|netflix|netbank|net|nec|nba|navy|natura|nationwide|name|nagoya|nadex|nab|mutuelle|mutual|museum|mtr|mtpc|mtn|msd|movistar|movie|mov|motorcycles|moto|moscow|mortgage|mormon|mopar|montblanc|monster|money|monash|mom|moi|moe|moda|mobily|mobile|mobi|mma|mls|mlb|mitsubishi|mit|mint|mini|mil|microsoft|miami|metlife|merckmsd|meo|menu|men|memorial|meme|melbourne|meet|media|med|mckinsey|mcdonalds|mcd|mba|mattel|maserati|marshalls|marriott|markets|marketing|market|map|mango|management|man|makeup|maison|maif|madrid|macys|luxury|luxe|lupin|lundbeck|ltda|ltd|lplfinancial|lpl|love|lotto|lotte|london|lol|loft|locus|locker|loans|loan|lixil|living|live|lipsy|link|linde|lincoln|limo|limited|lilly|like|lighting|lifestyle|lifeinsurance|life|lidl|liaison|lgbt|lexus|lego|legal|lefrak|leclerc|lease|lds|lawyer|law|latrobe|latino|lat|lasalle|lanxess|landrover|land|lancome|lancia|lancaster|lamer|lamborghini|ladbrokes|lacaixa|kyoto|kuokgroup|kred|krd|kpn|kpmg|kosher|komatsu|koeln|kiwi|kitchen|kindle|kinder|kim|kia|kfh|kerryproperties|kerrylogistics|kerryhotels|kddi|kaufen|juniper|juegos|jprs|jpmorgan|joy|jot|joburg|jobs|jnj|jmp|jll|jlc|jio|jewelry|jetzt|jeep|jcp|jcb|java|jaguar|iwc|iveco|itv|itau|istanbul|ist|ismaili|iselect|irish|ipiranga|investments|intuit|international|intel|int|insure|insurance|institute|ink|ing|info|infiniti|industries|immobilien|immo|imdb|imamat|ikano|iinet|ifm|ieee|icu|ice|icbc|ibm|hyundai|hyatt|hughes|htc|hsbc|how|house|hotmail|hotels|hoteles|hot|hosting|host|hospital|horse|honeywell|honda|homesense|homes|homegoods|homedepot|holiday|holdings|hockey|hkt|hiv|hitachi|hisamitsu|hiphop|hgtv|hermes|here|helsinki|help|healthcare|health|hdfcbank|hdfc|hbo|haus|hangout|hamburg|hair|guru|guitars|guide|guge|gucci|guardian|group|grocery|gripe|green|gratis|graphics|grainger|gov|got|gop|google|goog|goodyear|goodhands|goo|golf|goldpoint|gold|godaddy|gmx|gmo|gmbh|gmail|globo|global|gle|glass|glade|giving|gives|gifts|gift|ggee|george|genting|gent|gea|gdn|gbiz|garden|gap|games|game|gallup|gallo|gallery|gal|fyi|futbol|furniture|fund|fun|fujixerox|fujitsu|ftr|frontier|frontdoor|frogans|frl|fresenius|free|fox|foundation|forum|forsale|forex|ford|football|foodnetwork|food|foo|fly|flsmidth|flowers|florist|flir|flights|flickr|fitness|fit|fishing|fish|firmdale|firestone|fire|financial|finance|final|film|fido|fidelity|fiat|ferrero|ferrari|feedback|fedex|fast|fashion|farmers|farm|fans|fan|family|faith|fairwinds|fail|fage|extraspace|express|exposed|expert|exchange|everbank|events|eus|eurovision|etisalat|esurance|estate|esq|erni|ericsson|equipment|epson|epost|enterprises|engineering|engineer|energy|emerck|email|education|edu|edeka|eco|eat|earth|dvr|dvag|durban|dupont|duns|dunlop|duck|dubai|dtv|drive|download|dot|doosan|domains|doha|dog|dodge|doctor|docs|dnp|diy|dish|discover|discount|directory|direct|digital|diet|diamonds|dhl|dev|design|desi|dentist|dental|democrat|delta|deloitte|dell|delivery|degree|deals|dealer|deal|dds|dclk|day|datsun|dating|date|data|dance|dad|dabur|cyou|cymru|cuisinella|csc|cruises|cruise|crs|crown|cricket|creditunion|creditcard|credit|courses|coupons|coupon|country|corsica|coop|cool|cookingchannel|cooking|contractors|contact|consulting|construction|condos|comsec|computer|compare|company|community|commbank|comcast|com|cologne|college|coffee|codes|coach|clubmed|club|cloud|clothing|clinique|clinic|click|cleaning|claims|cityeats|city|citic|citi|citadel|cisco|circle|cipriani|church|chrysler|chrome|christmas|chloe|chintai|cheap|chat|chase|channel|chanel|cfd|cfa|cern|ceo|center|ceb|cbs|cbre|cbn|cba|catholic|catering|cat|casino|cash|caseih|case|casa|cartier|cars|careers|career|care|cards|caravan|car|capitalone|capital|capetown|canon|cancerresearch|camp|camera|cam|calvinklein|call|cal|cafe|cab|bzh|buzz|buy|business|builders|build|bugatti|budapest|brussels|brother|broker|broadway|bridgestone|bradesco|box|boutique|bot|boston|bostik|bosch|boots|booking|book|boo|bond|bom|bofa|boehringer|boats|bnpparibas|bnl|bmw|bms|blue|bloomberg|blog|blockbuster|blanco|blackfriday|black|biz|bio|bingo|bing|bike|bid|bible|bharti|bet|bestbuy|best|berlin|bentley|beer|beauty|beats|bcn|bcg|bbva|bbt|bbc|bayern|bauhaus|basketball|baseball|bargains|barefoot|barclays|barclaycard|barcelona|bar|bank|band|bananarepublic|banamex|baidu|baby|azure|axa|aws|avianca|autos|auto|author|auspost|audio|audible|audi|auction|attorney|athleta|associates|asia|asda|arte|art|arpa|army|archi|aramco|arab|aquarelle|apple|app|apartments|aol|anz|anquan|android|analytics|amsterdam|amica|amfam|amex|americanfamily|americanexpress|alstom|alsace|ally|allstate|allfinanz|alipay|alibaba|alfaromeo|akdn|airtel|airforce|airbus|aigo|aig|agency|agakhan|africa|afl|afamilycompany|aetna|aero|aeg|adult|ads|adac|actor|active|aco|accountants|accountant|accenture|academy|abudhabi|abogado|able|abc|abbvie|abbott|abb|abarth|aarp|aaa|onion)(?=[^0-9a-zA-Z@]|$))"))
              , v = /(?:xn--[0-9a-z]+)/
              , b = n(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/, {
                validDomainChars: p
            })
              , y = n(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/, {
                validDomainName: g,
                validSubdomain: b,
                validGTLD: m,
                validCCTLD: l,
                validPunycode: v
            })
              , w = /[0-9]+/
              , S = /\u0400-\u04FF/
              , C = /\xC0-\xD6\xD8-\xF6\xF8-\xFF\u0100-\u024F\u0253\u0254\u0256\u0257\u0259\u025B\u0263\u0268\u026F\u0272\u0289\u028B\u02BB\u0300-\u036F\u1E00-\u1EFF/
              , T = n(/[a-z#{cyrillicLettersAndMarks}0-9!\*';:=\+,\.\$\/%#\[\]\-\u2013_~@\|&#{latinAccentChars}]/i, {
                cyrillicLettersAndMarks: S,
                latinAccentChars: C
            })
              , x = n("\\((?:#{validGeneralUrlPathChars}+|(?:#{validGeneralUrlPathChars}*\\(#{validGeneralUrlPathChars}+\\)#{validGeneralUrlPathChars}*))\\)", {
                validGeneralUrlPathChars: T
            }, "i")
              , E = n(/[\+\-a-z#{cyrillicLettersAndMarks}0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i, {
                cyrillicLettersAndMarks: S,
                latinAccentChars: C,
                validUrlBalancedParens: x
            })
              , k = n("(?:(?:#{validGeneralUrlPathChars}*(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*#{validUrlPathEndingChars})|(?:@#{validGeneralUrlPathChars}+/))", {
                validGeneralUrlPathChars: T,
                validUrlBalancedParens: x,
                validUrlPathEndingChars: E
            }, "i")
              , O = n(/(?:[^A-Za-z0-9@＠$#＃#{invalidCharsGroup}]|^)/, {
                invalidCharsGroup: d
            })
              , D = /[a-z0-9!?\*'@\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i
              , A = /[a-z0-9_&=#\/]/i
              , I = n("((#{validUrlPrecedingChars})((https?:\\/\\/)?(#{validDomain})(?::(#{validPortNumber}))?(\\/#{validUrlPath}*)?(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?))", {
                validUrlPrecedingChars: O,
                validDomain: y,
                validPortNumber: w,
                validUrlPath: k,
                validUrlQueryChars: D,
                validUrlQueryEndingChars: A
            }, "gi")
              , j = n(/^#{validDomainName}#{validCCTLD}$/i, {
                validDomainName: g,
                validCCTLD: l
            })
              , P = /[-_.\/]$/
              , N = n(/(?:(?:[\-a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi, {
                latinAccentChars: C,
                validGTLD: m,
                validCCTLD: l,
                validPunycode: v
            })
              , L = /(?:(?:co|tv)(?=[^0-9a-zA-Z@]|$))/
              , R = n(/^#{validDomainName}#{validSpecialCCTLD}$/i, {
                validDomainName: g,
                validSpecialCCTLD: L
            })
              , M = /^https?:\/\/t\.co\/[a-z0-9]+/i
              , U = function(t, e) {
                if (e || (e = {
                    extractUrlsWithoutProtocol: !0
                }),
                !t || (e.extractUrlsWithoutProtocol ? !t.match(/\./) : !t.match(/:/)))
                    return [];
                for (var i = []; I.exec(t); ) {
                    (function() {
                        var t = RegExp.$2
                          , n = RegExp.$3
                          , o = RegExp.$4
                          , r = RegExp.$5
                          , a = RegExp.$7
                          , s = I.lastIndex
                          , u = s - n.length;
                        if (o)
                            n.match(M) && (n = RegExp.lastMatch,
                            s = u + n.length),
                            i.push({
                                url: n,
                                indices: [u, s]
                            });
                        else {
                            if (!e.extractUrlsWithoutProtocol || t.match(P))
                                return "continue";
                            var c = null
                              , l = 0;
                            if (r.replace(N, function(t) {
                                var e = r.indexOf(t, l);
                                l = e + t.length,
                                c = {
                                    url: t,
                                    indices: [u + e, u + l]
                                },
                                (a || t.match(R) || !t.match(j)) && i.push(c)
                            }),
                            null == c)
                                return "continue";
                            a && (c.url = n.replace(r, c.url),
                            c.indices[1] = s)
                        }
                    }
                    )()
                }
                return i
            }
              , F = function(t) {
                t.sort(function(t, e) {
                    return t.indices[0] - e.indices[0]
                });
                for (var e = t[0], i = 1; i < t.length; i++)
                    e.indices[1] > t[i].indices[0] ? (t.splice(i, 1),
                    i--) : e = t[i]
            }
              , B = /\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\uddfd\ude80-\ude9c\udea0-\uded0\udee0\udf00-\udf1f\udf30-\udf40\udf42-\udf49\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc00-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude33\ude38-\ude3a\ude3f\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee6\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48]|\ud804[\udc00-\udc46\udc7f-\udcba\udcd0-\udce8\udd00-\udd34\udd50-\udd73\udd76\udd80-\uddc4\uddda\ude00-\ude11\ude13-\ude37\udeb0-\udeea\udf01-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3c-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc80-\udcc5\udcc7\udd80-\uddb5\uddb8-\uddc0\ude00-\ude40\ude44\ude80-\udeb7]|\ud806[\udca0-\udcdf\udcff\udec0-\udef8]|\ud808[\udc00-\udf98]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udef0-\udef4\udf00-\udf36\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\udf00-\udf44\udf50-\udf7e\udf8f-\udf9f]|\ud82c[\udc00\udc01]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9d\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udc00-\udcc4\udcd0-\udcd6]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud840[\udc00-\udfff]|\ud841[\udc00-\udfff]|\ud842[\udc00-\udfff]|\ud843[\udc00-\udfff]|\ud844[\udc00-\udfff]|\ud845[\udc00-\udfff]|\ud846[\udc00-\udfff]|\ud847[\udc00-\udfff]|\ud848[\udc00-\udfff]|\ud849[\udc00-\udfff]|\ud84a[\udc00-\udfff]|\ud84b[\udc00-\udfff]|\ud84c[\udc00-\udfff]|\ud84d[\udc00-\udfff]|\ud84e[\udc00-\udfff]|\ud84f[\udc00-\udfff]|\ud850[\udc00-\udfff]|\ud851[\udc00-\udfff]|\ud852[\udc00-\udfff]|\ud853[\udc00-\udfff]|\ud854[\udc00-\udfff]|\ud855[\udc00-\udfff]|\ud856[\udc00-\udfff]|\ud857[\udc00-\udfff]|\ud858[\udc00-\udfff]|\ud859[\udc00-\udfff]|\ud85a[\udc00-\udfff]|\ud85b[\udc00-\udfff]|\ud85c[\udc00-\udfff]|\ud85d[\udc00-\udfff]|\ud85e[\udc00-\udfff]|\ud85f[\udc00-\udfff]|\ud860[\udc00-\udfff]|\ud861[\udc00-\udfff]|\ud862[\udc00-\udfff]|\ud863[\udc00-\udfff]|\ud864[\udc00-\udfff]|\ud865[\udc00-\udfff]|\ud866[\udc00-\udfff]|\ud867[\udc00-\udfff]|\ud868[\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86a[\udc00-\udfff]|\ud86b[\udc00-\udfff]|\ud86c[\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]|\ud87e[\udc00-\ude1d]|\udb40[\udd00-\uddef]/
              , $ = /A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u052f\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07ca-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0-\u08b2\u08e4-\u0963\u0971-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09f0\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a70-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0c00-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c81-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0cf1\u0cf2\u0d01-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0edc-\u0edf\u0f00\u0f18\u0f19\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u103f\u1050-\u108f\u109a-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16f1-\u16f8\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17d3\u17d7\u17dc\u17dd\u180b-\u180d\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f\u1aa7\u1ab0-\u1abe\u1b00-\u1b4b\u1b6b-\u1b73\u1b80-\u1baf\u1bba-\u1bf3\u1c00-\u1c37\u1c4d-\u1c4f\u1c5a-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1cf8\u1cf9\u1d00-\u1df5\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u20d0-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005\u3006\u302a-\u302f\u3031-\u3035\u303b\u303c\u3041-\u3096\u3099\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua672\ua674-\ua67d\ua67f-\ua69d\ua69f-\ua6e5\ua6f0\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua7ad\ua7b0\ua7b1\ua7f7-\ua827\ua840-\ua873\ua880-\ua8c4\ua8e0-\ua8f7\ua8fb\ua90a-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf\ua9e0-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa60-\uaa76\uaa7a-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab5f\uab64\uab65\uabc0-\uabea\uabec\uabed\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf870-\uf87f\uf882\uf884-\uf89f\uf8b8\uf8c1-\uf8d6\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe2d\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc/
              , q = /[\uD800-\uDBFF][\uDC00-\uDFFF]/gm
              , H = n(/(?:[#{bmpLetterAndMarks}]|(?=#{nonBmpCodePairs})(?:#{astralLetterAndMarks}))/, {
                bmpLetterAndMarks: $,
                nonBmpCodePairs: q,
                astralLetterAndMarks: B
            })
              , z = /\ud801[\udca0-\udca9]|\ud804[\udc66-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udef0-\udef9]|\ud805[\udcd0-\udcd9\ude50-\ude59\udec0-\udec9]|\ud806[\udce0-\udce9]|\ud81a[\ude60-\ude69\udf50-\udf59]|\ud835[\udfce-\udfff]/
              , W = /0-9\u0660-\u0669\u06f0-\u06f9\u07c0-\u07c9\u0966-\u096f\u09e6-\u09ef\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0be6-\u0bef\u0c66-\u0c6f\u0ce6-\u0cef\u0d66-\u0d6f\u0de6-\u0def\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f29\u1040-\u1049\u1090-\u1099\u17e0-\u17e9\u1810-\u1819\u1946-\u194f\u19d0-\u19d9\u1a80-\u1a89\u1a90-\u1a99\u1b50-\u1b59\u1bb0-\u1bb9\u1c40-\u1c49\u1c50-\u1c59\ua620-\ua629\ua8d0-\ua8d9\ua900-\ua909\ua9d0-\ua9d9\ua9f0-\ua9f9\uaa50-\uaa59\uabf0-\uabf9\uff10-\uff19/
              , G = /_\u200c\u200d\ua67e\u05be\u05f3\u05f4\uff5e\u301c\u309b\u309c\u30a0\u30fb\u3003\u0f0b\u0f0c\xb7/
              , V = n(/(?:[#{bmpLetterAndMarks}#{bmpNumerals}#{hashtagSpecialChars}]|(?=#{nonBmpCodePairs})(?:#{astralLetterAndMarks}|#{astralNumerals}))/, {
                bmpLetterAndMarks: $,
                bmpNumerals: W,
                hashtagSpecialChars: G,
                nonBmpCodePairs: q,
                astralLetterAndMarks: B,
                astralNumerals: z
            })
              , Y = /(?:[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF])/
              , K = n(/(?:^|\uFE0E|\uFE0F|$|(?!#{hashtagAlphaNumeric}|&)#{codePoint})/, {
                codePoint: Y,
                hashtagAlphaNumeric: V
            })
              , Q = n(/(#{hashtagBoundary})(#{hashSigns})(?!\uFE0F|\u20E3)(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi, {
                hashtagBoundary: K,
                hashSigns: u,
                hashtagAlphaNumeric: V,
                hashtagAlpha: H
            })
              , J = function(t, e) {
                if (e || (e = {
                    checkUrlOverlap: !0
                }),
                !t || !t.match(u))
                    return [];
                var i = [];
                if (t.replace(Q, function(t, e, n, o, r, a) {
                    if (!a.slice(r + t.length).match(c)) {
                        var s = r + e.length
                          , u = s + o.length + 1;
                        i.push({
                            hashtag: o,
                            indices: [s, u]
                        })
                    }
                }),
                e.checkUrlOverlap) {
                    var n = U(t);
                    if (n.length > 0) {
                        var o = i.concat(n);
                        F(o),
                        i = [];
                        for (var r = 0; r < o.length; r++)
                            o[r].hashtag && i.push(o[r])
                    }
                }
                return i
            }
              , X = /[@＠]/
              , Z = n(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/, {
                atSigns: X,
                latinAccentChars: C
            })
              , tt = /(?:^|[^a-zA-Z0-9_!#$%&*@＠]|(?:^|[^a-zA-Z0-9_+~.-])(?:rt|RT|rT|Rt):?)/
              , et = n("(#{validMentionPrecedingChars})(#{atSigns})([a-zA-Z0-9_]{1,20})(/[a-zA-Z][a-zA-Z0-9_-]{0,24})?", {
                validMentionPrecedingChars: tt,
                atSigns: X
            }, "g")
              , it = function(t) {
                if (!t || !t.match(X))
                    return [];
                var e = [];
                return t.replace(et, function(t, i, n, o, r, a, s) {
                    if (!s.slice(a + t.length).match(Z)) {
                        r = r || "";
                        var u = a + i.length
                          , c = u + o.length + r.length + 1;
                        e.push({
                            screenName: o,
                            listSlug: r,
                            indices: [u, c]
                        })
                    }
                }),
                e
            }
              , nt = function(t, e) {
                var i = U(t, e).concat(it(t)).concat(J(t, {
                    checkUrlOverlap: !1
                })).concat(s(t));
                return 0 == i.length ? [] : (F(i),
                i)
            }
              , ot = function(t) {
                var e = {};
                for (var i in t)
                    t.hasOwnProperty(i) && (e[i] = t[i]);
                return e
            }
              , rt = {
                disabled: !0,
                readonly: !0,
                multiple: !0,
                checked: !0
            }
              , at = {
                urlClass: !0,
                listClass: !0,
                usernameClass: !0,
                hashtagClass: !0,
                cashtagClass: !0,
                usernameUrlBase: !0,
                listUrlBase: !0,
                hashtagUrlBase: !0,
                cashtagUrlBase: !0,
                usernameUrlBlock: !0,
                listUrlBlock: !0,
                hashtagUrlBlock: !0,
                linkUrlBlock: !0,
                usernameIncludeSymbol: !0,
                suppressLists: !0,
                suppressNoFollow: !0,
                targetBlank: !0,
                suppressDataScreenName: !0,
                urlEntities: !0,
                symbolTag: !0,
                textWithSymbolTag: !0,
                urlTarget: !0,
                invisibleTagAttrs: !0,
                linkAttributeBlock: !0,
                linkTextBlock: !0,
                htmlEscapeNonEntities: !0
            }
              , st = function(t) {
                var e = {};
                for (var i in t) {
                    var n = t[i];
                    at[i] || (rt[i] && (n = n ? i : null),
                    null != n && (e[i] = n))
                }
                return e
            }
              , ut = {
                "&": "&amp;",
                ">": "&gt;",
                "<": "&lt;",
                '"': "&quot;",
                "'": "&#39;"
            }
              , ct = function(t) {
                return t && t.replace(/[&"'><]/g, function(t) {
                    return ut[t]
                })
            }
              , lt = {
                disabled: !0,
                readonly: !0,
                multiple: !0,
                checked: !0
            }
              , dt = function(t) {
                var e = "";
                for (var i in t) {
                    var n = t[i];
                    lt[i] && (n = n ? i : null),
                    null != n && (e += " " + ct(i) + '="' + ct(n.toString()) + '"')
                }
                return e
            }
              , ht = function(t, e, i, n) {
                n.suppressNoFollow || (i.rel = "nofollow"),
                n.linkAttributeBlock && n.linkAttributeBlock(t, i),
                n.linkTextBlock && (e = n.linkTextBlock(t, e));
                var o = {
                    text: e,
                    attr: dt(i)
                };
                return h("<a#{attr}>#{text}</a>", o)
            }
              , ft = function(t, e, i, n, o) {
                var r = o.symbolTag ? "<" + o.symbolTag + ">" + e + "</" + o.symbolTag + ">" : e;
                i = ct(i);
                var a = o.textWithSymbolTag ? "<" + o.textWithSymbolTag + ">" + i + "</" + o.textWithSymbolTag + ">" : i;
                return o.usernameIncludeSymbol || !e.match(twttr.txt.regexen.atSigns) ? ht(t, r + a, n, o) : r + ht(t, a, n, o)
            }
              , pt = function(t, e, i) {
                var n = ct(t.cashtag)
                  , o = ot(i.htmlAttrs || {});
                return o.href = i.cashtagUrlBase + n,
                o.title = "$" + n,
                o.class = i.cashtagClass,
                i.targetBlank && (o.target = "_blank"),
                ft(t, "$", n, o, i)
            }
              , gt = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm
              , mt = function(t, e, i) {
                var n = e.substring(t.indices[0], t.indices[0] + 1)
                  , o = ct(t.hashtag)
                  , r = ot(i.htmlAttrs || {});
                return r.href = i.hashtagUrlBase + o,
                r.title = "#" + o,
                r.class = i.hashtagClass,
                o.charAt(0).match(gt) && (r.class += " rtl"),
                i.targetBlank && (r.target = "_blank"),
                ft(t, n, o, r, i)
            }
              , vt = function(t, e) {
                var i = t.display_url
                  , n = t.expanded_url
                  , o = i.replace(/…/g, "");
                if (-1 != n.indexOf(o)) {
                    var r = n.indexOf(o)
                      , a = {
                        displayUrlSansEllipses: o,
                        beforeDisplayUrl: n.substr(0, r),
                        afterDisplayUrl: n.substr(r + o.length),
                        precedingEllipsis: i.match(/^…/) ? "…" : "",
                        followingEllipsis: i.match(/…$/) ? "…" : ""
                    };
                    for (var s in a)
                        a.hasOwnProperty(s) && (a[s] = ct(a[s]));
                    return a.invisible = e.invisibleTagAttrs,
                    h("<span class='tco-ellipsis'>#{precedingEllipsis}<span #{invisible}>&nbsp;</span></span><span #{invisible}>#{beforeDisplayUrl}</span><span class='js-display-url'>#{displayUrlSansEllipses}</span><span #{invisible}>#{afterDisplayUrl}</span><span class='tco-ellipsis'><span #{invisible}>&nbsp;</span>#{followingEllipsis}</span>", a)
                }
                return i
            }
              , bt = /^https?:\/\//i
              , yt = function(t, e, i) {
                var n = t.url
                  , o = n
                  , r = ct(o)
                  , a = i.urlEntities && i.urlEntities[n] || t;
                a.display_url && (r = vt(a, i));
                var s = ot(i.htmlAttrs || {});
                return n.match(bt) || (n = "http://" + n),
                s.href = n,
                i.targetBlank && (s.target = "_blank"),
                i.urlClass && (s.class = i.urlClass),
                i.urlTarget && (s.target = i.urlTarget),
                !i.title && a.display_url && (s.title = a.expanded_url),
                ht(t, r, s, i)
            }
              , wt = function(t, e, i) {
                var n = e.substring(t.indices[0], t.indices[0] + 1)
                  , o = ct(t.screenName)
                  , r = ct(t.listSlug)
                  , a = t.listSlug && !i.suppressLists
                  , s = ot(i.htmlAttrs || {});
                return s.class = a ? i.listClass : i.usernameClass,
                s.href = a ? i.listUrlBase + o + r : i.usernameUrlBase + o,
                a || i.suppressDataScreenName || (s["data-screen-name"] = o),
                i.targetBlank && (s.target = "_blank"),
                ft(t, n, a ? o + r : o, s, i)
            }
              , St = function(t, e, i) {
                var i = ot(i || {});
                i.hashtagClass = i.hashtagClass || "tweet-url hashtag",
                i.hashtagUrlBase = i.hashtagUrlBase || "https://twitter.com/#!/search?q=%23",
                i.cashtagClass = i.cashtagClass || "tweet-url cashtag",
                i.cashtagUrlBase = i.cashtagUrlBase || "https://twitter.com/#!/search?q=%24",
                i.listClass = i.listClass || "tweet-url list-slug",
                i.usernameClass = i.usernameClass || "tweet-url username",
                i.usernameUrlBase = i.usernameUrlBase || "https://twitter.com/",
                i.listUrlBase = i.listUrlBase || "https://twitter.com/",
                i.htmlAttrs = st(i),
                i.invisibleTagAttrs = i.invisibleTagAttrs || "style='position:absolute;left:-9999px;'";
                var n, o, r;
                if (i.urlEntities) {
                    for (n = {},
                    o = 0,
                    r = i.urlEntities.length; o < r; o++)
                        n[i.urlEntities[o].url] = i.urlEntities[o];
                    i.urlEntities = n
                }
                var a = ""
                  , s = 0;
                e.sort(function(t, e) {
                    return t.indices[0] - e.indices[0]
                });
                for (var u = i.htmlEscapeNonEntities ? ct : function(t) {
                    return t
                }
                , o = 0; o < e.length; o++) {
                    var c = e[o];
                    a += u(t.substring(s, c.indices[0])),
                    c.url ? a += yt(c, 0, i) : c.hashtag ? a += mt(c, t, i) : c.screenName ? a += wt(c, t, i) : c.cashtag && (a += pt(c, 0, i)),
                    s = c.indices[1]
                }
                return a += u(t.substring(s, t.length))
            }
              , Ct = function(t, e) {
                var i = nt(t, {
                    extractUrlsWithoutProtocol: !1
                });
                return St(t, i, e)
            }
              , Tt = function(t, e) {
                var i = s(t);
                return St(t, i, e)
            }
              , xt = function(t, e) {
                var i = J(t);
                return St(t, i, e)
            }
              , _t = function(t, e) {
                var i = U(t, {
                    extractUrlsWithoutProtocol: !1
                });
                return St(t, i, e)
            }
              , Et = function(t, e) {
                var i = it(t);
                return St(t, i, e)
            }
              , kt = function(t, e, i) {
                if (0 !== e.length) {
                    var n = 0
                      , o = 0;
                    e.sort(function(t, e) {
                        return t.indices[0] - e.indices[0]
                    });
                    for (var r = 0, a = e[0]; n < t.length; ) {
                        if (a.indices[0] === (i ? n : o)) {
                            var s = a.indices[1] - a.indices[0];
                            if (a.indices[0] = i ? o : n,
                            a.indices[1] = a.indices[0] + s,
                            ++r === e.length)
                                break;
                            a = e[r]
                        }
                        var u = t.charCodeAt(n);
                        u >= 55296 && u <= 56319 && n < t.length - 1 && (u = t.charCodeAt(n + 1)) >= 56320 && u <= 57343 && n++,
                        o++,
                        n++
                    }
                }
            }
              , Ot = function(t, e) {
                kt(t, e, !1)
            }
              , Dt = function(t, e, i) {
                if (e.user_mentions)
                    for (var n = 0; n < e.user_mentions.length; n++)
                        e.user_mentions[n].screenName = e.user_mentions[n].screen_name;
                if (e.hashtags)
                    for (var n = 0; n < e.hashtags.length; n++)
                        e.hashtags[n].hashtag = e.hashtags[n].text;
                if (e.symbols)
                    for (var n = 0; n < e.symbols.length; n++)
                        e.symbols[n].cashtag = e.symbols[n].text;
                var o = [];
                for (var r in e)
                    o = o.concat(e[r]);
                return Ot(t, o),
                St(t, o, i)
            }
              , At = {
                version: 1,
                maxWeightedTweetLength: 140,
                scale: 1,
                defaultWeight: 1,
                transformedURLLength: 23
            }
              , It = [{
                start: 0,
                end: 4351,
                weight: 100
            }, {
                start: 8192,
                end: 8205,
                weight: 100
            }, {
                start: 8208,
                end: 8223,
                weight: 100
            }, {
                start: 8242,
                end: 8247,
                weight: 100
            }]
              , jt = {
                version: 2,
                maxWeightedTweetLength: 280,
                scale: 100,
                defaultWeight: 200,
                transformedURLLength: 23,
                ranges: It
            }
              , Pt = At
              , Nt = {
                defaults: Pt,
                version1: At,
                version2: jt
            }
              , Lt = function(t, e, i) {
                if (0 != e.length) {
                    var n = 0
                      , o = 0;
                    e.sort(function(t, e) {
                        return t.indices[0] - e.indices[0]
                    });
                    for (var r = 0, a = e[0]; n < t.length; ) {
                        if (a.indices[0] == (i ? n : o)) {
                            var s = a.indices[1] - a.indices[0];
                            if (a.indices[0] = i ? o : n,
                            a.indices[1] = a.indices[0] + s,
                            ++r == e.length)
                                break;
                            a = e[r]
                        }
                        var u = t.charCodeAt(n);
                        u >= 55296 && u <= 56319 && n < t.length - 1 && (u = t.charCodeAt(n + 1)) >= 56320 && u <= 57343 && n++,
                        o++,
                        n++
                    }
                }
            }
              , Rt = function(t) {
                for (var e = [], i = s(t), n = 0; n < i.length; n++)
                    e.push(i[n].cashtag);
                return e
            }
              , Mt = function(t) {
                for (var e = [], i = J(t), n = 0; n < i.length; n++)
                    e.push(i[n].hashtag);
                return e
            }
              , Ut = function(t) {
                for (var e = [], i = void 0, n = it(t), o = 0; o < n.length; o++)
                    i = n[o],
                    "" === i.listSlug && e.push({
                        screenName: i.screenName,
                        indices: i.indices
                    });
                return e
            }
              , Ft = function(t) {
                for (var e = [], i = Ut(t), n = 0; n < i.length; n++) {
                    var o = i[n].screenName;
                    e.push(o)
                }
                return e
            }
              , Bt = n(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/, {
                atSigns: X,
                spaces: r
            })
              , $t = function(t) {
                if (!t)
                    return null;
                var e = t.match(Bt);
                return !e || RegExp.rightContext.match(Z) ? null : e[1]
            }
              , qt = function(t, e) {
                for (var i = [], n = U(t, e), o = 0; o < n.length; o++)
                    i.push(n[o].url);
                return i
            }
              , Ht = function(t, e) {
                var i = e.defaultWeight
                  , n = e.ranges
                  , o = i
                  , r = t.charCodeAt(0);
                if (Array.isArray(n))
                    for (var a = 0, s = n.length; a < s; a++) {
                        var u = n[a];
                        if (r >= u.start && r <= u.end) {
                            o = u.weight;
                            break
                        }
                    }
                return o
            }
              , zt = function(t, e) {
                kt(t, e, !0)
            }
              , Wt = n(/[#{invalidCharsGroup}]/, {
                invalidCharsGroup: d
            })
              , Gt = function(t) {
                return Wt.test(t)
            }
              , Vt = /^https:\/\//i
              , Yt = (function() {
                function t(t) {
                    this.value = t
                }
                function e(e) {
                    function i(t, e) {
                        return new Promise(function(i, o) {
                            var s = {
                                key: t,
                                arg: e,
                                resolve: i,
                                reject: o,
                                next: null
                            };
                            a ? a = a.next = s : (r = a = s,
                            n(t, e))
                        }
                        )
                    }
                    function n(i, r) {
                        try {
                            var a = e[i](r)
                              , s = a.value;
                            s instanceof t ? Promise.resolve(s.value).then(function(t) {
                                n("next", t)
                            }, function(t) {
                                n("throw", t)
                            }) : o(a.done ? "return" : "normal", a.value)
                        } catch (t) {
                            o("throw", t)
                        }
                    }
                    function o(t, e) {
                        switch (t) {
                        case "return":
                            r.resolve({
                                value: e,
                                done: !0
                            });
                            break;
                        case "throw":
                            r.reject(e);
                            break;
                        default:
                            r.resolve({
                                value: e,
                                done: !1
                            })
                        }
                        r = r.next,
                        r ? n(r.key, r.arg) : a = null
                    }
                    var r, a;
                    this._invoke = i,
                    "function" != typeof e.return && (this.return = void 0)
                }
                "function" == typeof Symbol && Symbol.asyncIterator && (e.prototype[Symbol.asyncIterator] = function() {
                    return this
                }
                ),
                e.prototype.next = function(t) {
                    return this._invoke("next", t)
                }
                ,
                e.prototype.throw = function(t) {
                    return this._invoke("throw", t)
                }
                ,
                e.prototype.return = function(t) {
                    return this._invoke("return", t)
                }
            }(),
            Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            }
            )
              , Kt = function() {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nt.defaults, i = Yt({}, Nt.defaults, e), n = (i.defaultWeight,
                i.scale), o = i.maxWeightedTweetLength, r = i.transformedURLLength, a = "function" == typeof String.prototype.normalize ? t.normalize() : t, s = U(a), u = a.length, c = 0, l = 0, d = !0, h = 0; h < u; h++)
                    !function(t) {
                        var e = s.filter(function(e) {
                            return e.indices[0] === t
                        })[0];
                        if (e) {
                            var u = e.url;
                            c += r * n,
                            t += u.length - 1
                        } else
                            Qt(a, t) && (t += 1),
                            c += Ht(a.charAt(t), i);
                        d && (d = !Gt(a.substring(t, t + 1))),
                        d && c <= o * n && (l = t),
                        h = t
                    }(h);
                c /= n,
                d = d && c > 0 && c <= o;
                var f = Math.floor(c / o * 1e3)
                  , p = t.length - a.length;
                return l += p,
                {
                    weightedLength: c,
                    valid: d,
                    permillage: f,
                    validRangeStart: 0,
                    validRangeEnd: l,
                    displayRangeStart: 0,
                    displayRangeEnd: t.length > 0 ? t.length - 1 : 0
                }
            }
              , Qt = function(t, e) {
                if (e < t.length - 1) {
                    var i = t.charCodeAt(e)
                      , n = t.charCodeAt(e + 1);
                    return 55296 <= i && i <= 56319 && 56320 <= n && n <= 57343
                }
                return !1
            }
              , Jt = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nt.defaults;
                return Kt(t, e).weightedLength
            }
              , Xt = function(t) {
                return t.replace(q, " ").length
            }
              , Zt = function(t) {
                for (var e = t.split("<"), i = void 0, n = [], o = void 0, r = 0; r < e.length; r += 1)
                    if (o = e[r]) {
                        i = o.split(">");
                        for (var a = 0; a < i.length; a += 1)
                            n.push(i[a])
                    } else
                        n.push("");
                return n
            }
              , te = function(t, e, i) {
                if (e = e || [],
                i = i || {},
                0 === e.length)
                    return t;
                var n = i.tag || "em"
                  , o = ["<" + n + ">", "</" + n + ">"]
                  , r = Zt(t)
                  , a = void 0
                  , s = void 0
                  , u = ""
                  , c = 0
                  , l = r[0]
                  , d = 0
                  , h = 0
                  , f = !1
                  , p = l
                  , g = []
                  , m = void 0
                  , v = void 0
                  , b = void 0
                  , y = void 0
                  , w = void 0;
                for (a = 0; a < e.length; a += 1)
                    for (s = 0; s < e[a].length; s += 1)
                        g.push(e[a][s]);
                for (m = 0; m < g.length; m += 1) {
                    for (v = g[m],
                    b = o[m % 2],
                    y = !1; null != l && v >= d + l.length; )
                        u += p.slice(h),
                        f && v === d + p.length && (u += b,
                        y = !0),
                        r[c + 1] && (u += "<" + r[c + 1] + ">"),
                        d += p.length,
                        h = 0,
                        c += 2,
                        l = r[c],
                        p = l,
                        f = !1;
                    y || null == l ? y || (y = !0,
                    u += b) : (w = v - d,
                    u += p.slice(h, w) + b,
                    h = w,
                    f = m % 2 == 0)
                }
                if (null != l)
                    for (h < p.length && (u += p.slice(h)),
                    m = c + 1; m < r.length; m += 1)
                        u += m % 2 == 0 ? r[m] : "<" + r[m] + ">";
                return u
            }
              , ee = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nt.defaults;
                if (!t)
                    return "empty";
                var i = Yt({}, Nt.defaults, e)
                  , n = i.maxWeightedTweetLength;
                return Jt(t, i) > n ? "too_long" : !!Gt(t) && "invalid_characters"
            }
              , ie = function(t) {
                if (!t)
                    return !1;
                var e = Mt(t);
                return 1 === e.length && e[0] === t.slice(1)
            }
              , ne = n(/^#{validMentionOrList}$/, {
                validMentionOrList: et
            })
              , oe = function(t) {
                var e = t.match(ne);
                return !(!e || "" != e[1] || !e[4])
            }
              , re = function(t, e) {
                return !ee(t, e)
            }
              , ae = /[a-z\u0400-\u04FF0-9\-._~]/i
              , se = /(?:%[0-9a-f]{2})/i
              , ue = /[!$&'()*+,;=]/i
              , ce = n("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|:)*", {
                validateUrlUnreserved: ae,
                validateUrlPctEncoded: se,
                validateUrlSubDelims: ue
            }, "i")
              , le = /(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i
              , de = /(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i
              , he = /(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i
              , fe = n(/(?:(?:#{validateUrlSubDomainSegment}\.)*(?:#{validateUrlDomainSegment}\.)#{validateUrlDomainTld})/i, {
                validateUrlSubDomainSegment: he,
                validateUrlDomainSegment: le,
                validateUrlDomainTld: de
            })
              , pe = /(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i
              , ge = n(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i, {
                validateUrlDecOctet: pe
            })
              , me = /(?:\[[a-f0-9:\.]+\])/i
              , ve = n("(?:#{validateUrlIpv4}|#{validateUrlIpv6})", {
                validateUrlIpv4: ge,
                validateUrlIpv6: me
            }, "i")
              , be = n("(?:#{validateUrlIp}|#{validateUrlDomain})", {
                validateUrlIp: ve,
                validateUrlDomain: fe
            }, "i")
              , ye = /[0-9]{1,5}/
              , we = n("(?:(#{validateUrlUserinfo})@)?(#{validateUrlHost})(?::(#{validateUrlPort}))?", {
                validateUrlUserinfo: ce,
                validateUrlHost: be,
                validateUrlPort: ye
            }, "i")
              , Se = n("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|[:|@])", {
                validateUrlUnreserved: ae,
                validateUrlPctEncoded: se,
                validateUrlSubDelims: ue
            }, "i")
              , Ce = n(/(#{validateUrlPchar}|\/|\?)*/i, {
                validateUrlPchar: Se
            })
              , Te = n(/(\/#{validateUrlPchar}*)*/i, {
                validateUrlPchar: Se
            })
              , xe = n(/(#{validateUrlPchar}|\/|\?)*/i, {
                validateUrlPchar: Se
            })
              , _e = /(?:[a-z][a-z0-9+\-.]*)/i
              , Ee = n("^(?:([^:/?#]+):\\/\\/)?([^/?#]*)([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$", "i")
              , ke = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i
              , Oe = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i
              , De = /(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i
              , Ae = n(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i, {
                validateUrlUnicodeSubDomainSegment: ke,
                validateUrlUnicodeDomainSegment: Oe,
                validateUrlUnicodeDomainTld: De
            })
              , Ie = n("(?:#{validateUrlIp}|#{validateUrlUnicodeDomain})", {
                validateUrlIp: ve,
                validateUrlUnicodeDomain: Ae
            }, "i")
              , je = n("(?:(#{validateUrlUserinfo})@)?(#{validateUrlUnicodeHost})(?::(#{validateUrlPort}))?", {
                validateUrlUserinfo: ce,
                validateUrlUnicodeHost: Ie,
                validateUrlPort: ye
            }, "i")
              , Pe = function(e, i, n) {
                if (null == i && (i = !0),
                null == n && (n = !0),
                !e)
                    return !1;
                var o = e.match(Ee);
                if (!o || o[0] !== e)
                    return !1;
                var r = o[1]
                  , a = o[2]
                  , s = o[3]
                  , u = o[4]
                  , c = o[5];
                return !!((!n || t(r, _e) && r.match(/^https?$/i)) && t(s, Te) && t(u, xe, !0) && t(c, Ce, !0)) && (i && t(a, je) || !i && t(a, we))
            }
              , Ne = function(t) {
                if (!t)
                    return !1;
                var e = Ft(t);
                return 1 === e.length && e[0] === t.slice(1)
            };
            return function() {
                "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                    value: function(t, e) {
                        if (null == t)
                            throw new TypeError("Cannot convert undefined or null to object");
                        for (var i = Object(t), n = 1; n < arguments.length; n++) {
                            var o = arguments[n];
                            if (null != o)
                                for (var r in o)
                                    Object.prototype.hasOwnProperty.call(o, r) && (i[r] = o[r])
                        }
                        return i
                    },
                    writable: !0,
                    configurable: !0
                })
            }(),
            {
                autoLink: Ct,
                autoLinkCashtags: Tt,
                autoLinkEntities: St,
                autoLinkHashtags: xt,
                autoLinkUrlsCustom: _t,
                autoLinkUsernamesOrLists: Et,
                autoLinkWithJSON: Dt,
                configs: Nt,
                convertUnicodeIndices: Lt,
                extractCashtags: Rt,
                extractCashtagsWithIndices: s,
                extractEntitiesWithIndices: nt,
                extractHashtags: Mt,
                extractHashtagsWithIndices: J,
                extractHtmlAttrsFromOptions: st,
                extractMentions: Ft,
                extractMentionsOrListsWithIndices: it,
                extractMentionsWithIndices: Ut,
                extractReplies: $t,
                extractUrls: qt,
                extractUrlsWithIndices: U,
                getTweetLength: Jt,
                getUnicodeTextLength: Xt,
                hasInvalidCharacters: Gt,
                hitHighlight: te,
                htmlEscape: ct,
                isInvalidTweet: ee,
                isValidHashtag: ie,
                isValidList: oe,
                isValidTweetText: re,
                isValidUrl: Pe,
                isValidUsername: Ne,
                linkTextWithEntity: vt,
                linkToCashtag: pt,
                linkToHashtag: mt,
                linkToMentionAndList: wt,
                linkToText: ht,
                linkToTextWithSymbol: ft,
                linkToUrl: yt,
                modifyIndicesFromUTF16ToUnicode: zt,
                modifyIndicesFromUnicodeToUTF16: Ot,
                regexen: {
                    astralLetterAndMarks: B,
                    astralNumerals: z,
                    atSigns: X,
                    bmpLetterAndMarks: $,
                    bmpNumerals: W,
                    cashtag: e,
                    codePoint: Y,
                    cyrillicLettersAndMarks: S,
                    endHashtagMatch: c,
                    endMentionMatch: Z,
                    hashSigns: u,
                    hashtagAlpha: H,
                    hashtagAlphaNumeric: V,
                    hashtagBoundary: K,
                    hashtagSpecialChars: G,
                    invalidChars: Wt,
                    invalidCharsGroup: d,
                    invalidDomainChars: f,
                    invalidShortDomain: j,
                    invalidUrlWithoutProtocolPrecedingChars: P,
                    latinAccentChars: C,
                    nonBmpCodePairs: q,
                    punct: i,
                    rtlChars: gt,
                    spaces: r,
                    spacesGroup: o,
                    urlHasHttps: Vt,
                    urlHasProtocol: bt,
                    validAsciiDomain: N,
                    validateUrlAuthority: we,
                    validateUrlDecOctet: pe,
                    validateUrlDomain: fe,
                    validateUrlDomainSegment: le,
                    validateUrlDomainTld: de,
                    validateUrlFragment: Ce,
                    validateUrlHost: be,
                    validateUrlIp: ve,
                    validateUrlIpv4: ge,
                    validateUrlIpv6: me,
                    validateUrlPath: Te,
                    validateUrlPchar: Se,
                    validateUrlPctEncoded: se,
                    validateUrlPort: ye,
                    validateUrlQuery: xe,
                    validateUrlScheme: _e,
                    validateUrlSubDelims: ue,
                    validateUrlSubDomainSegment: he,
                    validateUrlUnencoded: Ee,
                    validateUrlUnicodeAuthority: je,
                    validateUrlUnicodeDomain: Ae,
                    validateUrlUnicodeDomainSegment: Oe,
                    validateUrlUnicodeDomainTld: De,
                    validateUrlUnicodeHost: Ie,
                    validateUrlUnicodeSubDomainSegment: ke,
                    validateUrlUnreserved: ae,
                    validateUrlUserinfo: ce,
                    validCashtag: a,
                    validCCTLD: l,
                    validDomain: y,
                    validDomainChars: p,
                    validDomainName: g,
                    validGeneralUrlPathChars: T,
                    validGTLD: m,
                    validHashtag: Q,
                    validMentionOrList: et,
                    validMentionPrecedingChars: tt,
                    validPortNumber: w,
                    validPunycode: v,
                    validReply: Bt,
                    validSpecialCCTLD: L,
                    validSpecialShortDomain: R,
                    validSubdomain: b,
                    validTcoUrl: M,
                    validUrlBalancedParens: x,
                    validUrlPath: k,
                    validUrlPathEndingChars: E,
                    validUrlPrecedingChars: O,
                    validUrlQueryChars: D,
                    validUrlQueryEndingChars: A
                },
                removeOverlappingEntities: F,
                parseTweet: Kt,
                splitTags: Zt,
                tagAttrs: dt
            }
        })
    },
    xOay: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    feedbackLinkSelector: ".feedback-callout-link",
                    keyboardShortcuts: ".js-keyboard-shortcut-trigger",
                    nightmodeSelector: ".nightmode-toggle"
                }),
                this.clearStorage = function() {
                    return Object(s.a)()
                }
                ,
                this.signout = function() {
                    var e = this;
                    this.post({
                        url: "/i/push_destinations/destroy",
                        data: {
                            nonPermanent: !0
                        },
                        success: t.noop,
                        error: t.noop
                    });
                    var i = function() {
                        return e.$signoutForm.submit()
                    };
                    this.clearStorage().then(i, i)
                }
                ,
                this.showKeyboardShortcutsDialog = function(t, e) {
                    this.trigger(document, "uiOpenKeyboardShortcutsDialog"),
                    t.preventDefault()
                }
                ,
                this.showConversationNotification = function(t, e) {
                    this.unreadThreads = e.threads,
                    this.$node.addClass(this.attr.glowClass),
                    this.$dmCount.addClass(this.attr.glowClass).text(e.threads.length)
                }
                ,
                this.openFeedbackDialog = function(t, e) {
                    this.closeDropdown(),
                    this.trigger("uiPrepareFeedbackDialog", {})
                }
                ,
                this.updateConversationNotication = function(e, i) {
                    var n = t.inArray(i.recipient, this.unreadThreads);
                    if (-1 !== n) {
                        this.unreadThreads.splice(n, 1);
                        var o = parseInt(this.$dmCount.text(), 10) - 1;
                        o ? this.$dmCount.text(o) : (this.$node.removeClass(this.attr.glowClass),
                        this.$dmCount.removeClass(this.attr.glowClass).text(""))
                    }
                }
                ,
                this.toggleNightMode = function() {
                    this.trigger("uiNightModeToggle")
                }
                ,
                this.after("initialize", function() {
                    this.unreadThreads = [],
                    this.$signoutForm = this.select("signoutForm"),
                    this.on("click", {
                        keyboardShortcuts: this.showKeyboardShortcutsDialog,
                        feedbackLinkSelector: this.openFeedbackDialog,
                        signout: this.signout,
                        nightmodeSelector: this.toggleNightMode
                    }),
                    this.$dmCount = this.select("dmCount"),
                    this.on(document, "uiDMDialogOpenedConversation", this.updateConversationNotication),
                    this.on(document, "uiDMDialogHasNewConversations", this.showConversationNotification),
                    this.on(document, "click uiNightModeChanged", this.close),
                    this.on(document, "uiNavigate", this.close)
                })
            }
            var o = i("DBjh")
              , r = i("VtWx")
              , a = i("mGri")
              , s = i("2zJD")
              , u = Object(o.default)(n, r.a, a.a);
            e.a = u
        }
        ).call(e, i("4kSj"))
    },
    xZOO: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[1];
            Promise.all([i.e(0), i.e(8)]).then(function(t) {
                var o = {
                    moment_maker: i("Hm+1").default,
                    moments_guide: i("9lih").default,
                    moments_permalink: i("Kxn0").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    xnc9: function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    "y+gB": function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    spinnerSelector: ".PermalinkOverlay-spinnerContainer",
                    overlayEnabledClass: "overlay-enabled",
                    overlayModalContainerSelector: ".PermalinkOverlay",
                    overlayModalContainerClass: "PermalinkOverlay",
                    overlayModalClass: ".PermalinkOverlay-modal",
                    overlayModalContentSelector: ".PermalinkOverlay-content",
                    overlayModalBodySelector: ".PermalinkOverlay-body",
                    overlayDismissSelector: ".PermalinkProfile-dismiss span",
                    moreItemsSelector: ".has-more-items",
                    loadAtBootClass: "load-at-boot",
                    topMargin: 60,
                    bottomMargin: 60,
                    noReposition: !0
                }),
                this.openOverlay = function(t, e) {
                    this.isOpen() || (this.showSpinner(),
                    this.select("overlayModalBodySelector").empty(),
                    this.open())
                }
                ,
                this.updateOverlay = function(t, e) {
                    this.hideSpinner(),
                    this.select("overlayModalBodySelector").html(e.html),
                    this.open(),
                    this.setInitialFocus()
                }
                ,
                this.shouldResize = function() {
                    return !!this.select("threadedOverlaySelector").length
                }
                ,
                this.windowHeight = function() {
                    return t(window).height()
                }
                ,
                this.redirect = function(t) {
                    this.trigger("uiNavigate", {
                        href: t
                    })
                }
                ,
                this.possiblyCloseOverlay = function(t) {
                    (this.$node.is(t.target) && this.attr.enableClosingViaBackground || this.select("overlayDismissSelector").is(t.target) || this.eventTriggeredByKeyboard(t) && !this.isGalleryOpen() && !this.isDropdownOpen()) && (this.possiblyRedirectToProfile(),
                    t.stopPropagation(),
                    this.close(t))
                }
                ,
                this.possiblyRedirectToProfile = function() {
                    this.loadAtBoot() && (this.$node.removeClass(this.attr.loadAtBootClass),
                    this.redirect(this.redirectPath()))
                }
                ,
                this.redirectPath = function() {
                    return this.locationOrigin() + this.select("overlayModalBodySelector").attr("data-background-path")
                }
                ,
                this.locationOrigin = function() {
                    return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
                }
                ,
                this.empty = function() {
                    this.select("overlayModalBodySelector").empty()
                }
                ,
                this.hideSpinner = function() {
                    this.select("spinnerSelector").addClass("u-hidden")
                }
                ,
                this.showSpinner = function() {
                    this.select("spinnerSelector").removeClass("u-hidden")
                }
                ,
                this.getScrollTop = function(t) {
                    return t.scrollTop()
                }
                ,
                this.loadAtBoot = function() {
                    return this.$node.hasClass(this.attr.loadAtBootClass)
                }
                ,
                this.handleFailure = function(t, e) {
                    this.close(),
                    this.trigger("uiShowMessage", {
                        message: e && "404" === e.xhr.status ? Object(a.default)("Tweet does not exist.") : Object(a.default)("Whoops! Something went wrong. Please try again!")
                    })
                }
                ,
                this.around("possiblyDisableBackgroundClose", function(e, i) {
                    t(i.target).hasClass(this.attr.overlayModalContainerClass) ? this.attr.enableClosingViaBackground = !0 : this.attr.enableClosingViaBackground = !1
                }),
                this.after("initialize", function() {
                    this.overlayOffset = 0,
                    this.on("click uiShortcutEsc", this.possiblyCloseOverlay),
                    this.on("uiDialogClosed", this.empty),
                    this.on("uiDialogClosed", "uiOverlayClosed"),
                    this.on("uiDialogClosedByRequest", "uiOverlayClosedByRequest"),
                    this.on(document, "uiOverlayOpen", this.openOverlay),
                    this.on(document, "uiOverlayClose", this.close),
                    this.on(document, "uiOverlayUpdate", this.updateOverlay),
                    this.on(document, "dataOverlayPageFailure", this.handleFailure),
                    this.loadAtBoot() && this.on("uiSwiftLoaded", this.open)
                })
            }
            var o = i("DBjh")
              , r = i("UHc7")
              , a = i("0d4m");
            e.a = Object(o.default)(r.a, n)
        }
        ).call(e, i("4kSj"))
    },
    y3HV: function(t, e, i) {
        "use strict";
        var n = void 0
          , o = void 0
          , r = {
            set: function(t) {
                n = t.activeHashflags,
                o = t.hashflagBaseUrl || "https://abs.twimg.com/hashflags/"
            },
            getImageUrl: function(t) {
                var e = n && n[t.toLowerCase()];
                return e ? o + e : null
            },
            isEnabled: function() {
                return !!n
            }
        };
        e.a = r
    },
    y9Hg: function(t, e, i) {
        "use strict";
        var n = i("DBjh")
          , o = i("2KB6");
        e.a = Object(n.default)(o.a)
    },
    yDoZ: function(t, e, i) {
        "use strict";
        function n() {
            function t(t, e) {
                if (!e)
                    return !1;
                for (var i = 0; i < e.length; i++)
                    if (t.id === e[i].id)
                        return !0;
                return !1
            }
            this.defaultAttrs({
                rootSelector: ".typeahead-user-select",
                accountsListSelector: ".js-typeahead-accounts",
                accountsItemSelector: ".typeahead-account-item",
                selectedItemSelector: ".typeahead-selected-item",
                accountsEndPlaceholderSelector: ".typeahead-accounts-end",
                selectedEndPlaceholderSelector: ".typeahead-selected-end",
                emptyTextSelector: ".typeahead-empty-suggestions",
                selectedListSelector: ".js-typeahead-selected",
                selectedItemType: "",
                photoTaggingContainerClass: "photo-tagging-container",
                datasources: ["accounts", "selectedUsers"],
                socialContextMapping: {
                    FOLLOWING: 1,
                    FOLLOWS: 8
                }
            }),
            this.renderAccounts = function(t, e) {
                this.clearRenderedResults();
                var i = e.suggestions.selectedUsers || []
                  , n = void 0;
                n = e.queryData ? e.queryData.query || "" : "";
                var o = [];
                this.attr.datasources.forEach(function(t) {
                    ("accounts" === t || "mediaTagAccounts" === t || "dmAccounts" === t || "prefillUsers" === t && 0 === n.length && 0 === i.length) && (o = o.concat(e.suggestions[t] || []))
                }),
                o && o.length > 0 ? (o.forEach(function(t) {
                    var e = this.$accountItemTemplate.clone(!1);
                    this.addUser(e, this.$accountsEnd, t, i)
                }, this),
                this.$accountsList.addClass("has-results"),
                this.$accountsList.show()) : this.clearAccounts();
                var r = o && o.length > 0
                  , a = n.length > 0
                  , s = i && i.length > 0;
                r || a || !s ? this.clearSelected() : (i.forEach(function(t) {
                    var e = this.$selectedItemTemplate.clone(!1);
                    this.addUser(e, this.$selectedEnd, t, i)
                }, this),
                this.$selectedList.addClass("has-results"),
                this.$selectedList.show());
                var u = this.select("emptyTextSelector").first();
                e.suggestions.prefillUsers && o.length - e.suggestions.prefillUsers.length == 0 && 0 === i.length && o.length > 0 ? u.show() : u.hide(),
                t.stopPropagation()
            }
            ,
            this.addUser = function(e, i, n, o) {
                e.attr("data-user-id", n.id),
                e.attr("data-user-screenname", n.screen_name),
                e.data("item", n);
                var r = e.find("a");
                if (r.attr("href", "/" + n.screen_name),
                r.attr("data-search-query", n.id),
                r.find(".avatar").attr("src", this.getAvatar(n)),
                r.find(".fullname").html(s.a.emojifyText(n.name)),
                r.find(".username b").text(n.screen_name),
                n.verified && r.find(".js-verified").removeClass("hidden"),
                n.is_protected && r.find(".js-protected").removeClass("hidden"),
                t(n, o) ? (e.addClass("selected-user"),
                r.attr("aria-selected", "true")) : r.attr("aria-selected", "false"),
                this.itemCannotBeSelected(n) && e.addClass("cannot-select"),
                this.attr.deciders.showDebugInfo) {
                    var a = n.prefetched;
                    r.attr("title", (a ? "local" : "remote") + " user, score: " + n.rounded_score)
                }
                if (0 !== n.social_proof && this.attr.deciders.showSocialContext) {
                    var u = r.find(".typeahead-social-context")
                      , c = this.getSocialContext(n);
                    c && (u.text(c),
                    r.addClass("has-social-context"))
                }
                e.insertBefore(i)
            }
            ,
            this.getAvatar = function(t) {
                var e = t.profile_image_url_https
                  , i = this.attr.deciders.showSocialContext;
                return e && (e = e.replace(/^https?:/, ""),
                e = i ? e : e.replace(/_normal(\..*)?$/i, "_mini$1")),
                e
            }
            ,
            this.isMutualFollow = function(t) {
                return this.currentUserFollowsAccount(t) && this.accountFollowsCurrentUser(t)
            }
            ,
            this.currentUserFollowsAccount = function(t) {
                return !!(t & this.attr.socialContextMapping.FOLLOWING)
            }
            ,
            this.accountFollowsCurrentUser = function(t) {
                return !!(t & this.attr.socialContextMapping.FOLLOWS)
            }
            ,
            this.getSocialContext = function(t) {
                var e = t.social_proof;
                return this.isMutualFollow(e) ? Object(o.default)("You follow each other") : this.currentUserFollowsAccount(e) ? Object(o.default)("Following") : this.accountFollowsCurrentUser(e) ? Object(o.default)("Follows you") : !!t.first_connecting_user_name && (t.connecting_user_count > 1 ? Object(o.default)("Followed by {{user}} and {{number}} others", {
                    user: t.first_connecting_user_name,
                    number: t.connecting_user_count
                }) : Object(o.default)("Followed by {{user}}", {
                    user: t.first_connecting_user_name
                }))
            }
            ,
            this.clearAccounts = function() {
                this.$accountsList.removeClass("has-results"),
                this.$accountsList.hide()
            }
            ,
            this.clearSelected = function() {
                this.$selectedList.removeClass("has-results"),
                this.$selectedList.hide()
            }
            ,
            this.clearRenderedResults = function() {
                this.$accountsList.find(this.attr.accountsItemSelector).remove(),
                this.$selectedList.find(this.attr.selectedItemSelector).remove()
            }
            ,
            this.configureDisabledSelectionLogic = function() {
                switch (this.attr.selectedItemType) {
                case "dmExistingParticipants":
                    r.default.mixin(this, [u.a]),
                    this.initWithDMParticipantItems();
                    break;
                default:
                    r.default.mixin(this, [c.a])
                }
            }
            ,
            this.after("initialize", function() {
                this.configureDisabledSelectionLogic(),
                this.$accountsList = this.select("accountsListSelector"),
                this.$selectedList = this.select("selectedListSelector"),
                this.$accountsEnd = this.select("accountsEndPlaceholderSelector"),
                this.$accountItemTemplate = this.select("accountsItemSelector").clone(!1),
                this.$selectedItemTemplate = this.select("selectedItemSelector").clone(!1),
                this.$selectedEnd = this.select("selectedEndPlaceholderSelector"),
                this.$accountsList.hide(),
                this.on("uiTypeaheadRenderResults", this.renderAccounts),
                this.on("uiTypeaheadClearRenderedResults", this.clearRenderedResults)
            })
        }
        var o = i("0d4m")
          , r = i("q9/C")
          , a = i("DBjh")
          , s = i("tLYs")
          , u = i("o0Lh")
          , c = i("Dz0w");
        e.a = Object(a.default)(n)
    },
    ypSt: function(t, e, i) {
        var n;
        void 0 !== (n = function() {
            "use strict";
            return /^$|\/(?:java|ecma)script/i
        }
        .call(e, i, e, t)) && (t.exports = n)
    },
    z06B: function(t, e, i) {
        var n, o;
        n = [i("Olpr"), i("guk2"), i("W36v"), i("34H3"), i("1VmT"), i("5JGd"), i("8wGY"), i("rYQx")],
        void 0 !== (o = function(t, e, i, n, o) {
            "use strict";
            function r(t, e) {
                for (; (t = t[e]) && 1 !== t.nodeType; )
                    ;
                return t
            }
            var a = /^(?:parents|prev(?:Until|All))/
              , s = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            return t.fn.extend({
                has: function(e) {
                    var i = t(e, this)
                      , n = i.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (t.contains(this, i[e]))
                                return !0
                    })
                },
                closest: function(e, i) {
                    var n, r = 0, a = this.length, s = [], u = "string" != typeof e && t(e);
                    if (!o.test(e))
                        for (; r < a; r++)
                            for (n = this[r]; n && n !== i; n = n.parentNode)
                                if (n.nodeType < 11 && (u ? u.index(n) > -1 : 1 === n.nodeType && t.find.matchesSelector(n, e))) {
                                    s.push(n);
                                    break
                                }
                    return this.pushStack(s.length > 1 ? t.uniqueSort(s) : s)
                },
                index: function(i) {
                    return i ? "string" == typeof i ? e.call(t(i), this[0]) : e.call(this, i.jquery ? i[0] : i) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, i) {
                    return this.pushStack(t.uniqueSort(t.merge(this.get(), t(e, i))))
                },
                addBack: function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }),
            t.each({
                parent: function(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function(t) {
                    return i(t, "parentNode")
                },
                parentsUntil: function(t, e, n) {
                    return i(t, "parentNode", n)
                },
                next: function(t) {
                    return r(t, "nextSibling")
                },
                prev: function(t) {
                    return r(t, "previousSibling")
                },
                nextAll: function(t) {
                    return i(t, "nextSibling")
                },
                prevAll: function(t) {
                    return i(t, "previousSibling")
                },
                nextUntil: function(t, e, n) {
                    return i(t, "nextSibling", n)
                },
                prevUntil: function(t, e, n) {
                    return i(t, "previousSibling", n)
                },
                siblings: function(t) {
                    return n((t.parentNode || {}).firstChild, t)
                },
                children: function(t) {
                    return n(t.firstChild)
                },
                contents: function(e) {
                    return e.contentDocument || t.merge([], e.childNodes)
                }
            }, function(e, i) {
                t.fn[e] = function(n, o) {
                    var r = t.map(this, i, n);
                    return "Until" !== e.slice(-5) && (o = n),
                    o && "string" == typeof o && (r = t.filter(o, r)),
                    this.length > 1 && (s[e] || t.uniqueSort(r),
                    a.test(e) && r.reverse()),
                    this.pushStack(r)
                }
            }),
            t
        }
        .apply(e, n)) && (t.exports = o)
    },
    z1BS: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var n = t[1];
            Promise.all([i.e(0), i.e(1)]).then(function(t) {
                var o = {
                    live_broadcast: i("OcgB").default,
                    live_event: i("NWj/").default
                };
                e(o[n])
            }
            .bind(null, i)).catch(i.oe)
        }
        e.a = n
    },
    zQR9: function(t, e, i) {
        "use strict";
        var n = i("h65t")(!0);
        i("vIB/")(String, "String", function(t) {
            this._t = String(t),
            this._i = 0
        }, function() {
            var t, e = this._t, i = this._i;
            return i >= e.length ? {
                value: void 0,
                done: !0
            } : (t = n(e, i),
            this._i += t.length,
            {
                value: t,
                done: !1
            })
        })
    },
    zkvI: function(t, e, i) {
        var n, o;
        n = [i("Olpr")],
        void 0 !== (o = function(t) {
            "use strict";
            t.readyException = function(t) {
                window.setTimeout(function() {
                    throw t
                })
            }
        }
        .apply(e, n)) && (t.exports = o)
    },
    zpla: function(t, e, i) {
        var n, o;
        n = [i("Olpr")],
        void 0 !== (o = function(t) {
            "use strict";
            return t.now()
        }
        .apply(e, n)) && (t.exports = o)
    },
    zu7c: function(t, e, i) {
        "use strict";
        (function(t) {
            function n() {
                this.defaultAttrs({
                    savedSearchesListSelector: ".saved-searches-list",
                    savedSearchesSelector: ".saved-searches-list",
                    savedSearchesItemSelector: ".typeahead-saved-search-item",
                    savedSearchesItemAnchorSelector: "a.js-nav",
                    savedSearchesTitleSelector: ".saved-searches-title",
                    savedSearchesBlockSelector: ".typeahead-saved-searches",
                    savedSearchesRemoveSelector: ".typeahead-saved-search-item .Icon--close",
                    datasources: ["savedSearches"]
                }),
                this.renderSavedSearches = function(e, i) {
                    this.$savedSearchesList.empty();
                    var n = [];
                    if (this.attr.datasources.forEach(function(t) {
                        return n = n.concat(i.suggestions[t] || [])
                    }),
                    0 === n.length)
                        return this.$savedSearchesTitle.hide(),
                        void this.$savedSearchesBlock.removeClass("has-items");
                    var o = "" === i.queryData.query
                      , r = this.$savedSearchesTitle.attr("id");
                    n.reverse(),
                    n.forEach(function(e) {
                        var i = this.$savedSearchItemTemplate.clone(!1);
                        i.data("item", e);
                        var n = i.find("a");
                        n.attr("href", e.saved_search_path),
                        n.attr("data-search-query", e.query),
                        n.attr("data-query-source", e.search_query_source),
                        n.attr("data-saved-search-id", e.id),
                        n.append(t("<span>").text(e.name)),
                        o && n.attr("aria-describedby", r),
                        this.$savedSearchesList.append(i)
                    }, this),
                    this.$savedSearchesTitle.toggle(o),
                    this.$savedSearchesBlock.addClass("has-items")
                }
                ,
                this.removeSavedSearch = function(e, i) {
                    var n = t(e.target).closest(this.attr.savedSearchesItemSelector)
                      , o = n.find(this.attr.savedSearchesItemAnchorSelector)
                      , r = o.attr("data-saved-search-id");
                    0 === n.siblings().length && (this.$savedSearchesTitle.hide(),
                    this.$savedSearchesBlock.removeClass("has-items")),
                    n.remove(),
                    this.trigger("uiRemoveSavedSearch", {
                        id: r,
                        scribeComponent: "top_bar_searchbox"
                    })
                }
                ,
                this.after("initialize", function() {
                    this.$savedSearchItemTemplate = this.select("savedSearchesItemSelector").clone(!1),
                    this.$savedSearchesList = this.select("savedSearchesSelector"),
                    this.$savedSearchesTitle = this.select("savedSearchesTitleSelector"),
                    this.$savedSearchesBlock = this.select("savedSearchesBlockSelector"),
                    this.on("uiTypeaheadRenderResults", this.renderSavedSearches),
                    this.on("click", {
                        savedSearchesRemoveSelector: this.removeSavedSearch
                    })
                })
            }
            var o = i("DBjh");
            e.a = Object(o.default)(n)
        }
        ).call(e, i("4kSj"))
    },
    zzFc: function(t, e, i) {
        var n, o;
        n = [i("Y6Nz")],
        void 0 !== (o = function(t) {
            "use strict";
            var e = {
                around: function(t, e) {
                    return function() {
                        var i = 0
                          , n = arguments.length
                          , o = new Array(n + 1);
                        for (o[0] = t.bind(this); i < n; i++)
                            o[i + 1] = arguments[i];
                        return e.apply(this, o)
                    }
                },
                before: function(t, e) {
                    var i = "function" == typeof e ? e : e.obj[e.fnName];
                    return function() {
                        return i.apply(this, arguments),
                        t.apply(this, arguments)
                    }
                },
                after: function(t, e) {
                    var i = "function" == typeof e ? e : e.obj[e.fnName];
                    return function() {
                        var e = (t.unbound || t).apply(this, arguments);
                        return i.apply(this, arguments),
                        e
                    }
                },
                withAdvice: function() {
                    ["before", "after", "around"].forEach(function(i) {
                        this[i] = function(n, o) {
                            t.mutateProperty(this, n, function() {
                                return "function" == typeof this[n] ? this[n] = e[i](this[n], o) : this[n] = o,
                                this[n]
                            })
                        }
                    }, this)
                }
            };
            return e
        }
        .apply(e, n)) && (t.exports = o)
    }
});
//# sourceMappingURL=init.en.bf9dfe20dc2b0528b94d.js.map
