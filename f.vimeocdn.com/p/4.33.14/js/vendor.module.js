/* VimeoPlayer - v4.33.14 - 2024-06-06 - https://player.vimeo.com/NOTICE.txt */
var e = Object.prototype,
    t = function(t) {
        var n = t && t.constructor;
        return t === ("function" == typeof n && n.prototype || e)
    },
    n = function(e, t) {
        return function(n) {
            return e(t(n))
        }
    }(Object.keys, Object),
    r = Object.prototype.hasOwnProperty,
    i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function o(e, t, n) {
    return e(n = {
        path: t,
        exports: {},
        require: function(e, t) {
            return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }(null == t && n.path)
        }
    }, n.exports), n.exports
}
var s = "object" == typeof i && i && i.Object === Object && i,
    a = "object" == typeof self && self && self.Object === Object && self,
    u = s || a || Function("return this")(),
    c = u.Symbol,
    l = Object.prototype,
    d = l.hasOwnProperty,
    h = l.toString,
    f = c ? c.toStringTag : void 0,
    _ = Object.prototype.toString,
    p = c ? c.toStringTag : void 0,
    m = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : p && p in Object(e) ? function(e) {
            var t = d.call(e, f),
                n = e[f];
            try {
                e[f] = void 0;
                var r = !0
            } catch (Vd) {}
            var i = h.call(e);
            return r && (t ? e[f] = n : delete e[f]), i
        }(e) : function(e) {
            return _.call(e)
        }(e)
    },
    v = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    },
    g = function(e) {
        if (!v(e)) return !1;
        var t = m(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    },
    y = u["__core-js_shared__"],
    E = function() {
        var e = /[^.]+$/.exec(y && y.keys && y.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }(),
    T = Function.prototype.toString,
    S = function(e) {
        if (null != e) {
            try {
                return T.call(e)
            } catch (Vd) {}
            try {
                return e + ""
            } catch (Vd) {}
        }
        return ""
    },
    b = /^\[object .+?Constructor\]$/,
    A = Function.prototype,
    I = Object.prototype,
    w = A.toString,
    R = I.hasOwnProperty,
    k = RegExp("^" + w.call(R).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    P = function(e) {
        return !(!v(e) || function(e) {
            return !!E && E in e
        }(e)) && (g(e) ? k : b).test(S(e))
    },
    D = function(e, t) {
        var n = function(e, t) {
            return null == e ? void 0 : e[t]
        }(e, t);
        return P(n) ? n : void 0
    },
    O = D(u, "DataView"),
    L = D(u, "Map"),
    C = D(u, "Promise"),
    M = D(u, "Set"),
    N = D(u, "WeakMap"),
    x = S(O),
    U = S(L),
    F = S(C),
    j = S(M),
    B = S(N),
    V = m;
(O && "[object DataView]" != V(new O(new ArrayBuffer(1))) || L && "[object Map]" != V(new L) || C && "[object Promise]" != V(C.resolve()) || M && "[object Set]" != V(new M) || N && "[object WeakMap]" != V(new N)) && (V = function(e) {
    var t = m(e),
        n = "[object Object]" == t ? e.constructor : void 0,
        r = n ? S(n) : "";
    if (r) switch (r) {
        case x:
            return "[object DataView]";
        case U:
            return "[object Map]";
        case F:
            return "[object Promise]";
        case j:
            return "[object Set]";
        case B:
            return "[object WeakMap]"
    }
    return t
});
var H = V,
    X = function(e) {
        return null != e && "object" == typeof e
    },
    q = function(e) {
        return X(e) && "[object Arguments]" == m(e)
    },
    G = Object.prototype,
    W = G.hasOwnProperty,
    K = G.propertyIsEnumerable,
    Y = q(function() {
        return arguments
    }()) ? q : function(e) {
        return X(e) && W.call(e, "callee") && !K.call(e, "callee")
    },
    $ = Array.isArray,
    z = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    },
    Q = function() {
        return !1
    },
    J = o((function(e, t) {
        var n = t && !t.nodeType && t,
            r = n && e && !e.nodeType && e,
            i = r && r.exports === n ? u.Buffer : void 0,
            o = (i ? i.isBuffer : void 0) || Q;
        e.exports = o
    })),
    Z = {};
Z["[object Float32Array]"] = Z["[object Float64Array]"] = Z["[object Int8Array]"] = Z["[object Int16Array]"] = Z["[object Int32Array]"] = Z["[object Uint8Array]"] = Z["[object Uint8ClampedArray]"] = Z["[object Uint16Array]"] = Z["[object Uint32Array]"] = !0, Z["[object Arguments]"] = Z["[object Array]"] = Z["[object ArrayBuffer]"] = Z["[object Boolean]"] = Z["[object DataView]"] = Z["[object Date]"] = Z["[object Error]"] = Z["[object Function]"] = Z["[object Map]"] = Z["[object Number]"] = Z["[object Object]"] = Z["[object RegExp]"] = Z["[object Set]"] = Z["[object String]"] = Z["[object WeakMap]"] = !1;
var ee = o((function(e, t) {
        var n = t && !t.nodeType && t,
            r = n && e && !e.nodeType && e,
            i = r && r.exports === n && s.process,
            o = function() {
                try {
                    return r && r.require && r.require("util").types || i && i.binding && i.binding("util")
                } catch (Vd) {}
            }();
        e.exports = o
    })),
    te = ee && ee.isTypedArray,
    ne = te ? function(e) {
        return function(t) {
            return e(t)
        }
    }(te) : function(e) {
        return X(e) && z(e.length) && !!Z[m(e)]
    },
    re = Object.prototype.hasOwnProperty,
    ie = function(e) {
        if (null == e) return !0;
        if (function(e) {
                return null != e && z(e.length) && !g(e)
            }(e) && ($(e) || "string" == typeof e || "function" == typeof e.splice || J(e) || ne(e) || Y(e))) return !e.length;
        var i = H(e);
        if ("[object Map]" == i || "[object Set]" == i) return !e.size;
        if (t(e)) return ! function(e) {
            if (!t(e)) return n(e);
            var i = [];
            for (var o in Object(e)) r.call(e, o) && "constructor" != o && i.push(o);
            return i
        }(e).length;
        for (var o in e)
            if (re.call(e, o)) return !1;
        return !0
    };
const oe = {
        MANIFEST: "manifest",
        SEGMENT: "segment"
    },
    se = {
        method: "GET",
        async: !0,
        retry: 0,
        throwHttpErrors: !0,
        headers: {},
        hooks: {
            beforeRequest: [],
            beforeRetry: [],
            afterResponse: []
        },
        validateStatus: function(e) {
            return e >= 200 && e < 300
        },
        retryStatus: function(e) {
            return [408, 413, 429].includes(e) || e >= 500 && e < 600
        }
    };

function ae(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function ue(e, t, n) {
    return t && ae(e.prototype, t), n && ae(e, n), e
}

function ce(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function le(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
    }
    return n
}

function de(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? le(Object(n), !0).forEach((function(t) {
            ce(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
    }
    return e
}

function he(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}

function fe(e) {
    return (fe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function _e(e, t) {
    return (_e = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function pe() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
    } catch (Vd) {
        return !1
    }
}

function me(e, t, n) {
    return (me = pe() ? Reflect.construct : function(e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new(Function.bind.apply(e, r));
        return n && _e(i, n.prototype), i
    }).apply(null, arguments)
}

function ve(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return (ve = function(e) {
        if (null === e || ! function(e) {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
            }(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
        }

        function n() {
            return me(e, arguments, fe(this).constructor)
        }
        return n.prototype = Object.create(e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), _e(n, e)
    })(e)
}

function ge(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
            o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
}

function ye(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Ee(e) {
    return function(e) {
        if (Array.isArray(e)) return Se(e)
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }(e) || Te(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Te(e, t) {
    if (e) {
        if ("string" == typeof e) return Se(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Se(e, t) : void 0
    }
}

function Se(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function be(e, t) {
    var n;
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = Te(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0;
            return function() {
                return r >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[r++]
                }
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    return (n = e[Symbol.iterator]()).next.bind(n)
}

function Ae(e) {
    return e.filter((e, t, n) => n.indexOf(e) === t)
}

function Ie(e, t) {
    return e.reduce((e, n, r, i) => e.concat(t(n, r, i)), [])
}

function we(e) {
    return (t, ...n) => (n.forEach(n => {
        for (const r in n) {
            const i = Object.getOwnPropertyDescriptor(n, r);
            Object.defineProperty(t, r, Object.assign(i, e))
        }
    }), t)
}
const Re = we({
        enumerable: !1,
        configurable: !0,
        writeable: !1
    }),
    ke = we({
        enumerable: !1,
        configurable: !1,
        writeable: !1
    }),
    Pe = we({
        enumerable: !0,
        configurable: !0,
        writeable: !1
    });

function De(e) {
    let t = document.referrer || e;
    try {
        t = decodeURIComponent(t)
    } catch (Vd) {
        t = unescape(t)
    }
    return t
}
const Oe = e => new Promise((t, n) => setTimeout(t, e));

function Le(e) {
    e.substring(0, e.lastIndexOf("/") + 1)
}
const Ce = e => new Promise((t, n) => {
        const r = document.createElement("script");
        r.src = e, r.addEventListener("load", t), r.addEventListener("error", e => n(e.error)), document.head.appendChild(r)
    }),
    Me = e => Math.pow(e, 2),
    Ne = e => Math.sqrt(e);

function xe(e, ...t) {
    return t.reduce((e, t) => (Object.keys(t || {}).forEach(n => {
        const r = e[n],
            i = t[n];
        r && void 0 === i || (Array.isArray(i) ? e[n] = (r || []).concat(i) : (e => e && "object" == typeof e)(i) ? e[n] = xe({}, r, i) : e[n] = i)
    }), e), e)
}

function Ue() {
    let e, t, n = new Promise((function(n, r) {
        e = n, t = r
    }));
    return n.resolve = e, n.reject = t, n
}

function Fe(e, t) {
    let n = e;
    for (let r = 0; r < t.length; r++)
        if (t.start(r) <= e && t.end(r) >= e) {
            n = t.end(r);
            break
        }
    return n - e
}

function je(e, t) {
    if (!t || !t.length) return 0;
    if (1 === t.length && t.end(0) - t.start(0) < 1e-6) return 0;
    let n = 0;
    for (let r = t.length - 1; r >= 0 && t.end(r) > e; --r) n += t.end(r) - Math.max(t.start(r), e);
    return n
}

function Be() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function Ve(e) {
    return Be() - e
}

function He(e) {
    if ("object" != typeof e) return "";
    let t = [];
    for (let n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t.length ? t.join("&") : ""
}

function Xe(e) {
    return "string" != typeof e ? {} : e.replace("?", "").split("&").reduce((e, t) => {
        if (t.length > 0) {
            const n = t.substring(0, t.indexOf("=")),
                r = t.substring(t.indexOf("=") + 1);
            e[n] = decodeURIComponent(r)
        }
        return e
    }, {})
}

function qe(e) {
    const t = document.createElement("a");
    return t.href = e, t
}

function Ge(e, t) {
    const n = He(t);
    let r = -1 === e.indexOf("?") ? "?" : "&";
    return `${e}${n?`${r}${n}`:""}`
}

function We(e) {
    const t = e.split("://");
    if (2 !== t.length) return null;
    const n = t[1].split("/");
    if (n.length > 1) return n[0];
    const r = t[1].split("?");
    if (r.length > 1) return r[0];
    const i = t[1].split("#");
    return i.length > 1 ? i[0] : t[1]
}
const Ke = (e, t) => (...n) => {
    [`%c${e}`, t].concat(n)
};

function Ye(e, t) {
    this.headers = {}, this.perfTimings = {}, xe(this, t), this.ok = 2 == (this.status / 100 | 0), this.body = e, this.text = () => Promise.resolve(e), this.json = () => Promise.resolve(JSON.parse(e)), this.blob = () => Promise.resolve(new Blob([e])), this.arrayBuffer = () => Promise.resolve(e), this.clone = () => new Ye(e, this), this.isVimeoResponse = !0
}
let $e = function(e) {
        function t() {
            var t;
            return (t = e.call(this, "The operation was aborted.") || this).name = "AbortError", t
        }
        return he(t, e), t
    }(ve(Error)),
    ze = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, t.statusText) || this).name = "HTTPError", n.response = t, n
        }
        return he(t, e), t
    }(ve(Error)),
    Qe = function(e) {
        function t() {
            var t;
            return (t = e.call(this, "A network error occurred.") || this).name = "NetworkError", t
        }
        return he(t, e), t
    }(ve(Error)),
    Je = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, "Request timed out.") || this).name = "TimeoutError", n.timeoutMs = t, n
        }
        return he(t, e), t
    }(ve(Error));

function Ze(e, t) {
    let {
        url: n,
        method: r,
        body: i,
        onDownloadProgress: o
    } = e, s = 100;
    return new Promise((function(a, u) {
        const c = t ? new t : new XMLHttpRequest,
            l = window.performance;
        c.open(r.toUpperCase(), n, e.async), e.timeout && (c.timeout = e.timeout), c.onload = function() {
            if (0 === c.status && (!c.responseURL || 0 !== c.responseURL.indexOf("file:"))) return;
            const e = {};
            c.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (t, n, r) => {
                e[n] = e[n] ? `${e[n]},${r}` : r
            });
            let t = {};
            if (window.performance && void 0 !== window.performance.getEntriesByType) {
                const e = window.performance.getEntriesByType("resource");
                if (e.length && e.length >= s && ("function" == typeof l.clearResourceTimings && l.clearResourceTimings(), "function" == typeof l.setResourceTimingBufferSize && (l.setResourceTimingBufferSize(500), s = 500)), e.length) {
                    const n = e.filter(e => e.name === c.responseURL).sort((e, t) => e.connectStart - t.connectStart);
                    n.length && (t = n[n.length - 1].toJSON())
                }
            }
            a(new Ye(c.response, {
                headers: e,
                statusText: c.statusText,
                status: c.status,
                url: c.responseURL,
                perfTimings: t
            }))
        }, c.onabort = function() {
            u(new $e)
        }, c.onerror = function() {
            u(new Qe)
        }, c.ontimeout = function() {
            u(new Je(e.timeout))
        }, "function" == typeof o && c.addEventListener("progress", o);
        for (let t in e.headers) c.setRequestHeader(t, e.headers[t]);
        e.withCredentials && (c.withCredentials = !0), e.responseType && (c.responseType = e.responseType), e.abort = c.abort.bind(c), c.send(i || null)
    }))
}

function et() {}

function tt(e, t, n) {
    if (!e.s) {
        if (n instanceof nt) {
            if (!n.s) return void(n.o = tt.bind(null, e, t));
            1 & t && (t = n.s), n = n.v
        }
        if (n && n.then) return void n.then(tt.bind(null, e, t), tt.bind(null, e, 2));
        e.s = t, e.v = n;
        const r = e.o;
        r && r(e)
    }
}
const nt = function() {
    function e() {}
    return e.prototype.then = function(t, n) {
        const r = new e,
            i = this.s;
        if (i) {
            const e = 1 & i ? t : n;
            if (e) {
                try {
                    tt(r, 1, e(this.v))
                } catch (Vd) {
                    tt(r, 2, Vd)
                }
                return r
            }
            return this
        }
        return this.o = function(e) {
            try {
                const i = e.v;
                1 & e.s ? tt(r, 1, t ? t(i) : i) : n ? tt(r, 1, n(i)) : tt(r, 2, i)
            } catch (Vd) {
                tt(r, 2, Vd)
            }
        }, r
    }, e
}();

function rt(e) {
    return e instanceof nt && 1 & e.s
}

function it(e) {
    const t = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (Vd) {
                return Promise.reject(Vd)
            }
        }
    }((function(r) {
        return function(e, t) {
            try {
                var n = e()
            } catch (Vd) {
                return t(Vd)
            }
            return n && n.then ? n.then(void 0, t) : n
        }(r, (function(i) {
            let o = !1;
            n++;
            const s = function(t) {
                if (!e.retryAbortErrors && t instanceof $e) return 0;
                if (t instanceof Je) return 0;
                if (n >= e.retry) return 0;
                if (t instanceof ze) {
                    if (!e.retryStatus(t.response.status)) return 0;
                    const n = t.response.headers["retry-after"];
                    if (n && e.retryStatus(t.response.status)) {
                        let e = Number(n);
                        return isNaN(e) ? e = Date.parse(n) - Date.now() : e *= 1e3, e
                    }
                    if (413 === t.response.status) return 0
                }
                return .3 * 2 ** (n - 1) * 1e3
            }(i);
            return function(a, u) {
                var c = function() {
                    if (0 !== s && n > 0) return function(e, t, n) {
                        return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                    }(Oe(s), (function() {
                        const s = e.hooks.beforeRetry || [];
                        return function(e, t) {
                            return e && e.then ? e.then(t) : t()
                        }(function(e, t, n) {
                            var r, i, o = -1;
                            return function n(s) {
                                try {
                                    for (; ++o < e.length;)
                                        if ((s = t(o)) && s.then) {
                                            if (!rt(s)) return void s.then(n, i || (i = tt.bind(null, r = new nt, 2)));
                                            s = s.v
                                        }
                                    r ? tt(r, 1, s) : r = s
                                } catch (Vd) {
                                    tt(r || (r = new nt), 2, Vd)
                                }
                            }(), r
                        }(s, (function(t) {
                            return function(e, t) {
                                return e && e.then ? e.then(et) : Promise.resolve()
                            }((0, s[t])(e, i, n))
                        })), (function() {
                            return o = !0, t(r)
                        }))
                    }))
                }();
                return c && c.then ? c.then(u) : u(c)
            }(0, (function(t) {
                if (o) return t;
                if (e.throwHttpErrors) throw i
            }))
        }))
    }));
    let n = 0;
    return t
}

function ot(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function st(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }
}

function at(e, t, n) {
    if (!e.s) {
        if (n instanceof ut) {
            if (!n.s) return void(n.o = at.bind(null, e, t));
            1 & t && (t = n.s), n = n.v
        }
        if (n && n.then) return void n.then(at.bind(null, e, t), at.bind(null, e, 2));
        e.s = t, e.v = n;
        const r = e.o;
        r && r(e)
    }
}
const ut = function() {
    function e() {}
    return e.prototype.then = function(t, n) {
        const r = new e,
            i = this.s;
        if (i) {
            const e = 1 & i ? t : n;
            if (e) {
                try {
                    at(r, 1, e(this.v))
                } catch (Vd) {
                    at(r, 2, Vd)
                }
                return r
            }
            return this
        }
        return this.o = function(e) {
            try {
                const i = e.v;
                1 & e.s ? at(r, 1, t ? t(i) : i) : n ? at(r, 1, n(i)) : at(r, 2, i)
            } catch (Vd) {
                at(r, 2, Vd)
            }
        }, r
    }, e
}();

function ct(e) {
    return e instanceof ut && 1 & e.s
}

function lt(e, t, n) {
    var r, i, o = -1;
    return function s(a) {
        try {
            for (; ++o < e.length && (!n || !n());)
                if ((a = t(o)) && a.then) {
                    if (!ct(a)) return void a.then(s, i || (i = at.bind(null, r = new ut, 2)));
                    a = a.v
                }
            r ? at(r, 1, a) : r = a
        } catch (Vd) {
            at(r || (r = new ut), 2, Vd)
        }
    }(), r
}

function dt(e, t) {
    return e && e.then ? e.then(t) : t(e)
}
const ht = ["get", "post", "put", "patch", "head", "delete"],
    ft = {
        json: "application/json",
        text: "text/plain",
        arrayBuffer: "*/*",
        blob: "*/*"
    },
    _t = ["get"];

function pt(e, t) {
    const n = st((function() {
        let e = !1,
            n = !1;
        const r = t.hooks.beforeRequest || [];
        return dt(lt(r, (function(i) {
            return ot((0, r[i])(t), (function(r) {
                return r instanceof mt ? (t = r, void(n = !0)) : (null == r ? void 0 : r.isVimeoResponse) ? (e = !0, Promise.resolve(r).then(vt(t))) : void 0
            }))
        }), (function() {
            return n || e
        })), (function(n) {
            return e ? n : Ze(t).then(vt(t))
        }))
    }));
    t = new mt(e, t);
    const {
        method: r,
        json: i,
        jwt: o,
        searchParams: s
    } = t;
    if (i && (t.headers["Content-Type"] = ft.json, t.body = JSON.stringify(i)), o && (t.headers.Authorization = `jwt ${o}`), s) {
        const [e, n] = t.url.split("?");
        t.url = Ge(e, de(de({}, Xe(n)), s))
    }
    const a = -1 !== _t.indexOf(r.toLowerCase()) ? it(t)(n) : n();
    for (const u in ft) a[u] = st((function() {
        return t.headers["Content-Type"] = ft[u], ot(a, (function(e) {
            return e.clone()[u]()
        }))
    }));
    return function e(t, n) {
        const r = t.then.bind(t);
        return Object.assign(t, {
            abort: n,
            then: (...t) => e(r.apply(void 0, t), n)
        })
    }(a, () => t.abort())
}

function mt(e, t) {
    xe(this, se, e = "string" == typeof e ? {
        url: e
    } : e, t)
}

function vt(e) {
    const {
        validateStatus: t,
        throwHttpErrors: n,
        hooks: r
    } = e;
    return st((function(i) {
        const o = r.afterResponse || [];
        return dt(lt(o, (function(t) {
            return ot((0, o[t])(e, i.clone()), (function(e) {
                e instanceof Ye && (i = e)
            }))
        })), (function() {
            if (!t || t(i.status)) return i;
            if (n) throw new ze(i);
            return i
        }))
    }))
}
ht.forEach((function(e) {
    return pt[e] = (t, n) => pt(t, de({
        method: e
    }, n)), pt[e]
}));
const {
    get: gt,
    post: yt,
    put: Et,
    patch: Tt,
    head: St
} = pt, bt = {
    ARRAY_BUFFER: "arraybuffer"
};
var At = Object.freeze({
        __proto__: null,
        ContentTypes: oe,
        defaults: se,
        requestMethods: ht,
        responseTypes: ft,
        retryMethods: _t,
        request: pt,
        Request: mt,
        get: gt,
        post: yt,
        put: Et,
        patch: Tt,
        head: St,
        Response: Ye,
        ResponseTypes: bt,
        AbortError: $e,
        HTTPError: ze,
        NetworkError: Qe,
        TimeoutError: Je,
        xhr: Ze
    }),
    It = navigator.userAgent.toLowerCase();
const wt = ["googlebot", "google-inspectiontool"];

function Rt(e) {
    e = e.toLowerCase();
    var t = new RegExp(e).test(It);
    return "safari" === e ? t && new RegExp("version").test(It) : t
}

function kt(e) {
    var t = document.createElement("div"),
        n = e.charAt(0).toUpperCase() + e.slice(1),
        r = (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ");
    for (var i in r) {
        var o = r[i];
        if (void 0 !== t.style[o]) return o
    }
    return e
}
var Pt = !!Rt("android") && (parseFloat(It.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || !0),
    Dt = window.devicePixelRatio || 1,
    Ot = !(!Rt("windows phone") && !Rt("iemobile")) && (parseFloat(It.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) || !0),
    Lt = !!Rt("msie") && parseFloat(It.replace(/^.*msie (\d+).*$/, "$1")),
    Ct = !!Rt("trident") && parseFloat(It.replace(/^.*trident\/(\d+)\.(\d+).*$/, "$1.$2")) + 4,
    Mt = Rt("ipad;") || Rt("iphone;") || Rt("ipod touch;") ? parseFloat(It.replace(/^.* os (\d+)_(\d+).*$/, "$1.$2")) : navigator.userAgent.includes("Mac") && "ontouchend" in document,
    Nt = "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
    xt = Rt("opera") || Rt("opr"),
    Ut = /^Mozilla\/5\.0 \(.* Mac OS X.*\(KHTML, like Gecko\)(?: Mobile\/[\S]*|)$/i.test(It);

function Ft() {
    if (!Rt("safari")) return [];
    var e = It.split(" ").find((function(e) {
        return /version\//.test(e)
    }));
    return e ? e.replace("version/", "").split(".").map((function(e) {
        return parseInt(e, 10)
    })) : []
}
var jt = Rt("safari") && Rt("apple") && !Rt("chrome") && !Rt("android") && Ft()[0] >= 11,
    Bt = {
        airPlay: "WebKitPlaybackTargetAvailabilityEvent" in window,
        android: Pt,
        appleMail: Ut,
        hasAutoplayPolicy: Pt || Mt || jt || function() {
            if (!Rt("chrome")) return [];
            var e = It.split(" ").find((function(e) {
                return Mt ? /CriOS\//.test(e) : /chrome\//.test(e)
            }));
            return e ? e.replace("chrome/", "").split(".").map((function(e) {
                return parseInt(e, 10)
            })) : []
        }()[0] >= 66,
        iOS: Mt,
        iPadOS: Nt,
        mobileAndroid: Pt && Rt("mobile"),
        browser: {
            bb10: Rt("bb10"),
            chrome: Rt("chrome"),
            firefox: Rt("firefox"),
            ie: Lt || Ct,
            edge: Rt("edge"),
            opera: xt,
            safari: Rt("safari") && Rt("apple") && !Rt("chrome") && !Rt("android"),
            chromium: "chrome" in window
        },
        devicePixelRatio: Dt,
        iPhone: Rt("iphone;") || Rt("ipod touch;") || Rt("ipod;"),
        iPad: Rt("ipad;"),
        iPadNonRetina: Rt("ipad;") && Dt < 2,
        mac: Rt("mac os"),
        pointerEvents: window.navigator.pointerEnabled || window.navigator.msPointerEnabled || !1,
        passiveEvents: function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t)
            } catch (Vd) {}
            return e
        }(),
        svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || Rt("windows phone") || window.navigator.maxTouchPoints > 1 || window.navigator.msMaxTouchPoints || !1,
        transformProperty: kt("transform"),
        transitionProperty: kt("transition"),
        webp: function() {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d")) && 0 === e.toDataURL("image/webp").indexOf("data:image/webp")
        }(),
        windowsPhone: Ot,
        mediaCapabilities: "mediaCapabilities" in navigator,
        isGoogleBot: (() => {
            const e = It.toLowerCase();
            return wt.some(t => e.includes(t))
        })(),
        storageAccessAPI: "requestStorageAccess" in document && "hasStorageAccess" in document,
        clipboardAPI: "clipboard" in navigator && "write" in navigator.clipboard,
        videoContentPreload: !Rt("iphone"),
        intersectionObserver: "IntersectionObserver" in window
    },
    Vt = /mac os x 10_13/.test(It),
    Ht = Bt.iOS && Bt.iOS >= 11,
    Xt = "undefined" != typeof matchMedia && (matchMedia("(color-gamut: p3)").matches && screen.pixelDepth > 24 || matchMedia("(dynamic-range: high), (video-dynamic-range: high)").matches);

function qt(e = "hvc1") {
    return "undefined" != typeof MediaSource ? MediaSource.isTypeSupported(`video/mp4; codecs="${e}"`) : jt && (Vt || Ht)
}

function Gt() {
    return !(Bt.iOS || Bt.iPad || Bt.browser.ie) && (!Rt("safari") || Ft()[0] > 11 || 11 === Ft()[0] && (Ft()[2] > 1 || Ft()[1] > 0))
}
Bt.hevc = qt(), Bt.hevcMain10 = qt("hvc1.2.4.H150.90"), Bt.hdr = Xt, Bt.dolbyVision = function() {
    var e = "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="dvh1"');
    if (!e) {
        var t = document.createElement("video");
        "canPlayType" in t && (e = "probably" === t.canPlayType('video/mp4; codecs="dvh1"'))
    }
    if (Nt || Bt.iOS) {
        var n = Ft(),
            r = n[0],
            i = n[1];
        if (r < 14 || 14 === r && i < 1) return !1
    }
    return e
}(), Bt.vp9hdr = (window.matchMedia("(color-gamut: p3)").matches || window.matchMedia("(color-gamut: rec2020)").matches) && screen.colorDepth >= 48 && (MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.00"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.01"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.00"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.01"')), Bt.av1 = "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="av01.0.31M.08.0.110.01.01.01.0"'), Bt.webvr = !!(window.navigator && "getVRDisplays" in window.navigator), Bt.webxr = !!(window.navigator && "xr" in window.navigator && "supportsSession" in window.navigator.xr), Bt.spatialPlayback = Gt(), Bt.spatialHEVC = !Bt.browser.safari && Gt() && qt(), Bt.stereoscopic = Bt.spatialPlayback && Bt.mobileAndroid;
var Wt = Array.isArray,
    Kt = "object" == typeof global && global && global.Object === Object && global,
    Yt = "object" == typeof self && self && self.Object === Object && self,
    $t = Kt || Yt || Function("return this")(),
    zt = $t.Symbol,
    Qt = Object.prototype,
    Jt = Qt.hasOwnProperty,
    Zt = Qt.toString,
    en = zt ? zt.toStringTag : void 0,
    tn = Object.prototype.toString,
    nn = zt ? zt.toStringTag : void 0;

function rn(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : nn && nn in Object(e) ? function(e) {
        var t = Jt.call(e, en),
            n = e[en];
        try {
            e[en] = void 0;
            var r = !0
        } catch (Vd) {}
        var i = Zt.call(e);
        return r && (t ? e[en] = n : delete e[en]), i
    }(e) : function(e) {
        return tn.call(e)
    }(e)
}

function on(e) {
    return null != e && "object" == typeof e
}

function sn(e) {
    return "symbol" == typeof e || on(e) && "[object Symbol]" == rn(e)
}
var an = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    un = /^\w*$/;

function cn(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t)
}

function ln(e) {
    if (!cn(e)) return !1;
    var t = rn(e);
    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
}
var dn = $t["__core-js_shared__"],
    hn = function() {
        var e = /[^.]+$/.exec(dn && dn.keys && dn.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }(),
    fn = Function.prototype.toString;

function _n(e) {
    if (null != e) {
        try {
            return fn.call(e)
        } catch (Vd) {}
        try {
            return e + ""
        } catch (Vd) {}
    }
    return ""
}
var pn = /^\[object .+?Constructor\]$/,
    mn = Function.prototype,
    vn = Object.prototype,
    gn = mn.toString,
    yn = vn.hasOwnProperty,
    En = RegExp("^" + gn.call(yn).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Tn(e, t) {
    var n = function(e, t) {
        return null == e ? void 0 : e[t]
    }(e, t);
    return function(e) {
        return !(!cn(e) || function(e) {
            return !!hn && hn in e
        }(e)) && (ln(e) ? En : pn).test(_n(e))
    }(n) ? n : void 0
}
var Sn = Tn(Object, "create"),
    bn = Object.prototype.hasOwnProperty,
    An = Object.prototype.hasOwnProperty;

function In(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}

function wn(e, t) {
    return e === t || e != e && t != t
}

function Rn(e, t) {
    for (var n = e.length; n--;)
        if (wn(e[n][0], t)) return n;
    return -1
}
In.prototype.clear = function() {
    this.__data__ = Sn ? Sn(null) : {}, this.size = 0
}, In.prototype.delete = function(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t
}, In.prototype.get = function(e) {
    var t = this.__data__;
    if (Sn) {
        var n = t[e];
        return "__lodash_hash_undefined__" === n ? void 0 : n
    }
    return bn.call(t, e) ? t[e] : void 0
}, In.prototype.has = function(e) {
    var t = this.__data__;
    return Sn ? void 0 !== t[e] : An.call(t, e)
}, In.prototype.set = function(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = Sn && void 0 === t ? "__lodash_hash_undefined__" : t, this
};
var kn = Array.prototype.splice;

function Pn(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
Pn.prototype.clear = function() {
    this.__data__ = [], this.size = 0
}, Pn.prototype.delete = function(e) {
    var t = this.__data__,
        n = Rn(t, e);
    return !(n < 0 || (n == t.length - 1 ? t.pop() : kn.call(t, n, 1), --this.size, 0))
}, Pn.prototype.get = function(e) {
    var t = this.__data__,
        n = Rn(t, e);
    return n < 0 ? void 0 : t[n][1]
}, Pn.prototype.has = function(e) {
    return Rn(this.__data__, e) > -1
}, Pn.prototype.set = function(e, t) {
    var n = this.__data__,
        r = Rn(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
};
var Dn = Tn($t, "Map");

function On(e, t) {
    var n = e.__data__;
    return function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
}

function Ln(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}

function Cn(e, t) {
    if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
    var n = function n() {
        var r = arguments,
            i = t ? t.apply(this, r) : r[0],
            o = n.cache;
        if (o.has(i)) return o.get(i);
        var s = e.apply(this, r);
        return n.cache = o.set(i, s) || o, s
    };
    return n.cache = new(Cn.Cache || Ln), n
}
Ln.prototype.clear = function() {
    this.size = 0, this.__data__ = {
        hash: new In,
        map: new(Dn || Pn),
        string: new In
    }
}, Ln.prototype.delete = function(e) {
    var t = On(this, e).delete(e);
    return this.size -= t ? 1 : 0, t
}, Ln.prototype.get = function(e) {
    return On(this, e).get(e)
}, Ln.prototype.has = function(e) {
    return On(this, e).has(e)
}, Ln.prototype.set = function(e, t) {
    var n = On(this, e),
        r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this
}, Cn.Cache = Ln;
var Mn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Nn = /\\(\\)?/g,
    xn = function(e) {
        var t = Cn((function(e) {
                var t = [];
                return 46 === e.charCodeAt(0) && t.push(""), e.replace(Mn, (function(e, n, r, i) {
                    t.push(r ? i.replace(Nn, "$1") : n || e)
                })), t
            }), (function(e) {
                return 500 === n.size && n.clear(), e
            })),
            n = t.cache;
        return t
    }(),
    Un = zt ? zt.prototype : void 0,
    Fn = Un ? Un.toString : void 0;

function jn(e) {
    if ("string" == typeof e) return e;
    if (Wt(e)) return function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
        return i
    }(e, jn) + "";
    if (sn(e)) return Fn ? Fn.call(e) : "";
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
}

function Bn(e) {
    return null == e ? "" : jn(e)
}

function Vn(e, t) {
    return Wt(e) ? e : function(e, t) {
        if (Wt(e)) return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !sn(e)) || un.test(e) || !an.test(e) || null != t && e in Object(t)
    }(e, t) ? [e] : xn(Bn(e))
}

function Hn(e) {
    if ("string" == typeof e || sn(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
}

function Xn(e, t) {
    for (var n = 0, r = (t = Vn(t, e)).length; null != e && n < r;) e = e[Hn(t[n++])];
    return n && n == r ? e : void 0
}

function qn(e, t, n) {
    var r = null == e ? void 0 : Xn(e, t);
    return void 0 === r ? n : r
}
var Gn = "object" == typeof global && global && global.Object === Object && global,
    Wn = "object" == typeof self && self && self.Object === Object && self,
    Kn = (Gn || Wn || Function("return this")()).Symbol,
    Yn = Object.prototype,
    $n = Yn.hasOwnProperty,
    zn = Yn.toString,
    Qn = Kn ? Kn.toStringTag : void 0,
    Jn = Object.prototype.toString,
    Zn = Kn ? Kn.toStringTag : void 0;
var er = function(e, t) {
        return function(n) {
            return e(t(n))
        }
    }(Object.getPrototypeOf, Object),
    tr = Function.prototype,
    nr = Object.prototype,
    rr = tr.toString,
    ir = nr.hasOwnProperty,
    or = rr.call(Object),
    sr = function(e) {
        var t, n = ("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")()).Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
    }();

function ar(e, t, n) {
    var r;
    if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
        if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
        return n(ar)(e, t)
    }
    if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
    var i = e,
        o = t,
        s = [],
        a = s,
        u = !1;

    function c() {
        a === s && (a = s.slice())
    }

    function l() {
        return o
    }

    function d(e) {
        if ("function" != typeof e) throw new Error("Expected listener to be a function.");
        var t = !0;
        return c(), a.push(e),
            function() {
                if (t) {
                    t = !1, c();
                    var n = a.indexOf(e);
                    a.splice(n, 1)
                }
            }
    }

    function h(e) {
        if (! function(e) {
                if (! function(e) {
                        return null != e && "object" == typeof e
                    }(e) || "[object Object]" != function(e) {
                        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Zn && Zn in Object(e) ? function(e) {
                            var t = $n.call(e, Qn),
                                n = e[Qn];
                            try {
                                e[Qn] = void 0;
                                var r = !0
                            } catch (Vd) {}
                            var i = zn.call(e);
                            return r && (t ? e[Qn] = n : delete e[Qn]), i
                        }(e) : function(e) {
                            return Jn.call(e)
                        }(e)
                    }(e)) return !1;
                var t = er(e);
                if (null === t) return !0;
                var n = ir.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && rr.call(n) == or
            }(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
            u = !0, o = i(o, e)
        } finally {
            u = !1
        }
        for (var t = s = a, n = 0; n < t.length; n++)(0, t[n])();
        return e
    }
    return h({
        type: "@@redux/INIT"
    }), (r = {
        dispatch: h,
        subscribe: d,
        getState: l,
        replaceReducer: function(e) {
            if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
            i = e, h({
                type: "@@redux/INIT"
            })
        }
    })[sr] = function() {
        var e, t = d;
        return (e = {
            subscribe: function(e) {
                if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");

                function n() {
                    e.next && e.next(l())
                }
                return n(), {
                    unsubscribe: t(n)
                }
            }
        })[sr] = function() {
            return this
        }, e
    }, r
}

function ur() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return 0 === t.length ? function(e) {
        return e
    } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }))
}
var cr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
};

function lr() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(e) {
        return function(n, r, i) {
            var o, s = e(n, r, i),
                a = s.dispatch,
                u = {
                    getState: s.getState,
                    dispatch: function(e) {
                        return a(e)
                    }
                };
            return o = t.map((function(e) {
                return e(u)
            })), a = ur.apply(void 0, o)(s.dispatch), cr({}, s, {
                dispatch: a
            })
        }
    }
}
var dr = o((function(e, t) {
    e.exports = function(e) {
        var t = {};
        return (e = e || {}).prependOn = function(t, n) {
            return e.on(t, n, !0)
        }, e.eventNames = function() {
            return Object.keys(t)
        }, e.on = function(n, r, i) {
            for (var o = 0, s = (n = [].concat(n)).length; o < s; o++) {
                var a = n[o];
                if (!a) throw new Error("Tried to listen for an undefined event.");
                t[a] || (t[a] = []), i ? t[a].unshift(r) : t[a].push(r)
            }
            return e
        }, e.once = function(t, n, r) {
            function i() {
                n.apply(e.off(t, i), arguments)
            }
            return i.handler = n, e.on(t, i, r)
        }, e.off = function(n, r) {
            if (!n) return t = {}, e;
            for (var i = 0, o = (n = [].concat(n)).length; i < o; i++) {
                var s = n[i];
                if (!s) throw new Error("Tried to remove an undefined event.");
                if (s in t)
                    if (r) {
                        var a = t[s].indexOf(r);
                        if (-1 === a)
                            for (var u = 0, c = t[s].length; u < c; u++)
                                if (t[s][u].handler === r) {
                                    a = i;
                                    break
                                }
                        if (-1 === a) return e;
                        t[s].splice(a, 1)
                    } else delete t[s]
            }
            return e
        }, e.fire = function(n) {
            if (!n) throw new Error("Tried to fire an undefined event.");
            if (n in t)
                for (var r = t[n].slice(0), i = 0, o = r.length; i < o; i++)
                    if (r[i].apply(e, r.slice.call(arguments, 1)), e.__isHalted) {
                        delete e.__isHalted;
                        break
                    }
            return e
        }, e.halt = function() {
            return e.__isHalted = !0, e
        }, e
    }
}));

function hr(e) {
    var t = this.__data__ = new Pn(e);
    this.size = t.size
}
hr.prototype.clear = function() {
    this.__data__ = new Pn, this.size = 0
}, hr.prototype.delete = function(e) {
    var t = this.__data__,
        n = t.delete(e);
    return this.size = t.size, n
}, hr.prototype.get = function(e) {
    return this.__data__.get(e)
}, hr.prototype.has = function(e) {
    return this.__data__.has(e)
}, hr.prototype.set = function(e, t) {
    var n = this.__data__;
    if (n instanceof Pn) {
        var r = n.__data__;
        if (!Dn || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
        n = this.__data__ = new Ln(r)
    }
    return n.set(e, t), this.size = n.size, this
};
var fr = function() {
    try {
        var e = Tn(Object, "defineProperty");
        return e({}, "", {}), e
    } catch (Vd) {}
}();

function _r(e, t, n) {
    "__proto__" == t && fr ? fr(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n
}
var pr = Object.prototype.hasOwnProperty;

function mr(e, t, n) {
    var r = e[t];
    pr.call(e, t) && wn(r, n) && (void 0 !== n || t in e) || _r(e, t, n)
}

function vr(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var o = -1, s = t.length; ++o < s;) {
        var a = t[o],
            u = r ? r(n[a], e[a], a, n, e) : void 0;
        void 0 === u && (u = e[a]), i ? _r(n, a, u) : mr(n, a, u)
    }
    return n
}

function gr(e) {
    return on(e) && "[object Arguments]" == rn(e)
}
var yr = Object.prototype,
    Er = yr.hasOwnProperty,
    Tr = yr.propertyIsEnumerable,
    Sr = gr(function() {
        return arguments
    }()) ? gr : function(e) {
        return on(e) && Er.call(e, "callee") && !Tr.call(e, "callee")
    },
    br = "object" == typeof exports && exports && !exports.nodeType && exports,
    Ar = br && "object" == typeof module && module && !module.nodeType && module,
    Ir = Ar && Ar.exports === br ? $t.Buffer : void 0,
    wr = (Ir ? Ir.isBuffer : void 0) || function() {
        return !1
    },
    Rr = /^(?:0|[1-9]\d*)$/;

function kr(e, t) {
    var n = typeof e;
    return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && Rr.test(e)) && e > -1 && e % 1 == 0 && e < t
}

function Pr(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
}
var Dr = {};

function Or(e) {
    return function(t) {
        return e(t)
    }
}
Dr["[object Float32Array]"] = Dr["[object Float64Array]"] = Dr["[object Int8Array]"] = Dr["[object Int16Array]"] = Dr["[object Int32Array]"] = Dr["[object Uint8Array]"] = Dr["[object Uint8ClampedArray]"] = Dr["[object Uint16Array]"] = Dr["[object Uint32Array]"] = !0, Dr["[object Arguments]"] = Dr["[object Array]"] = Dr["[object ArrayBuffer]"] = Dr["[object Boolean]"] = Dr["[object DataView]"] = Dr["[object Date]"] = Dr["[object Error]"] = Dr["[object Function]"] = Dr["[object Map]"] = Dr["[object Number]"] = Dr["[object Object]"] = Dr["[object RegExp]"] = Dr["[object Set]"] = Dr["[object String]"] = Dr["[object WeakMap]"] = !1;
var Lr = "object" == typeof exports && exports && !exports.nodeType && exports,
    Cr = Lr && "object" == typeof module && module && !module.nodeType && module,
    Mr = Cr && Cr.exports === Lr && Kt.process,
    Nr = function() {
        try {
            return Cr && Cr.require && Cr.require("util").types || Mr && Mr.binding && Mr.binding("util")
        } catch (Vd) {}
    }(),
    xr = Nr && Nr.isTypedArray,
    Ur = xr ? Or(xr) : function(e) {
        return on(e) && Pr(e.length) && !!Dr[rn(e)]
    },
    Fr = Object.prototype.hasOwnProperty;

function jr(e, t) {
    var n = Wt(e),
        r = !n && Sr(e),
        i = !n && !r && wr(e),
        o = !n && !r && !i && Ur(e),
        s = n || r || i || o,
        a = s ? function(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }(e.length, String) : [],
        u = a.length;
    for (var c in e) !t && !Fr.call(e, c) || s && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || kr(c, u)) || a.push(c);
    return a
}
var Br = Object.prototype;

function Vr(e) {
    var t = e && e.constructor;
    return e === ("function" == typeof t && t.prototype || Br)
}

function Hr(e, t) {
    return function(n) {
        return e(t(n))
    }
}
var Xr = Hr(Object.keys, Object),
    qr = Object.prototype.hasOwnProperty;

function Gr(e) {
    if (!Vr(e)) return Xr(e);
    var t = [];
    for (var n in Object(e)) qr.call(e, n) && "constructor" != n && t.push(n);
    return t
}

function Wr(e) {
    return null != e && Pr(e.length) && !ln(e)
}

function Kr(e) {
    return Wr(e) ? jr(e) : Gr(e)
}
var Yr = Object.prototype.hasOwnProperty;

function $r(e) {
    return Wr(e) ? jr(e, !0) : function(e) {
        if (!cn(e)) return function(e) {
            var t = [];
            if (null != e)
                for (var n in Object(e)) t.push(n);
            return t
        }(e);
        var t = Vr(e),
            n = [];
        for (var r in e)("constructor" != r || !t && Yr.call(e, r)) && n.push(r);
        return n
    }(e)
}
var zr = "object" == typeof exports && exports && !exports.nodeType && exports,
    Qr = zr && "object" == typeof module && module && !module.nodeType && module,
    Jr = Qr && Qr.exports === zr ? $t.Buffer : void 0,
    Zr = Jr ? Jr.allocUnsafe : void 0;

function ei(e, t) {
    if (t) return e.slice();
    var n = e.length,
        r = Zr ? Zr(n) : new e.constructor(n);
    return e.copy(r), r
}

function ti(e, t) {
    var n = -1,
        r = e.length;
    for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
    return t
}

function ni() {
    return []
}
var ri = Object.prototype.propertyIsEnumerable,
    ii = Object.getOwnPropertySymbols,
    oi = ii ? function(e) {
        return null == e ? [] : (e = Object(e), function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
                var s = e[n];
                t(s) && (o[i++] = s)
            }
            return o
        }(ii(e), (function(t) {
            return ri.call(e, t)
        })))
    } : ni;

function si(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
    return e
}
var ai = Hr(Object.getPrototypeOf, Object),
    ui = Object.getOwnPropertySymbols ? function(e) {
        for (var t = []; e;) si(t, oi(e)), e = ai(e);
        return t
    } : ni;

function ci(e, t, n) {
    var r = t(e);
    return Wt(e) ? r : si(r, n(e))
}

function li(e) {
    return ci(e, Kr, oi)
}

function di(e) {
    return ci(e, $r, ui)
}
var hi = Tn($t, "DataView"),
    fi = Tn($t, "Promise"),
    _i = Tn($t, "Set"),
    pi = Tn($t, "WeakMap"),
    mi = _n(hi),
    vi = _n(Dn),
    gi = _n(fi),
    yi = _n(_i),
    Ei = _n(pi),
    Ti = rn;
(hi && "[object DataView]" != Ti(new hi(new ArrayBuffer(1))) || Dn && "[object Map]" != Ti(new Dn) || fi && "[object Promise]" != Ti(fi.resolve()) || _i && "[object Set]" != Ti(new _i) || pi && "[object WeakMap]" != Ti(new pi)) && (Ti = function(e) {
    var t = rn(e),
        n = "[object Object]" == t ? e.constructor : void 0,
        r = n ? _n(n) : "";
    if (r) switch (r) {
        case mi:
            return "[object DataView]";
        case vi:
            return "[object Map]";
        case gi:
            return "[object Promise]";
        case yi:
            return "[object Set]";
        case Ei:
            return "[object WeakMap]"
    }
    return t
});
var Si = Ti,
    bi = Object.prototype.hasOwnProperty,
    Ai = $t.Uint8Array;

function Ii(e) {
    var t = new e.constructor(e.byteLength);
    return new Ai(t).set(new Ai(e)), t
}
var wi = /\w*$/,
    Ri = zt ? zt.prototype : void 0,
    ki = Ri ? Ri.valueOf : void 0;

function Pi(e, t) {
    var n = t ? Ii(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length)
}
var Di = Object.create,
    Oi = function() {
        function e() {}
        return function(t) {
            if (!cn(t)) return {};
            if (Di) return Di(t);
            e.prototype = t;
            var n = new e;
            return e.prototype = void 0, n
        }
    }();

function Li(e) {
    return "function" != typeof e.constructor || Vr(e) ? {} : Oi(ai(e))
}
var Ci = Nr && Nr.isMap,
    Mi = Ci ? Or(Ci) : function(e) {
        return on(e) && "[object Map]" == Si(e)
    },
    Ni = Nr && Nr.isSet,
    xi = Ni ? Or(Ni) : function(e) {
        return on(e) && "[object Set]" == Si(e)
    },
    Ui = {};

function Fi(e, t, n, r, i, o) {
    var s, a = 1 & t,
        u = 2 & t,
        c = 4 & t;
    if (n && (s = i ? n(e, r, i, o) : n(e)), void 0 !== s) return s;
    if (!cn(e)) return e;
    var l = Wt(e);
    if (l) {
        if (s = function(e) {
                var t = e.length,
                    n = new e.constructor(t);
                return t && "string" == typeof e[0] && bi.call(e, "index") && (n.index = e.index, n.input = e.input), n
            }(e), !a) return ti(e, s)
    } else {
        var d = Si(e),
            h = "[object Function]" == d || "[object GeneratorFunction]" == d;
        if (wr(e)) return ei(e, a);
        if ("[object Object]" == d || "[object Arguments]" == d || h && !i) {
            if (s = u || h ? {} : Li(e), !a) return u ? function(e, t) {
                return vr(e, ui(e), t)
            }(e, function(e, t) {
                return e && vr(t, $r(t), e)
            }(s, e)) : function(e, t) {
                return vr(e, oi(e), t)
            }(e, function(e, t) {
                return e && vr(t, Kr(t), e)
            }(s, e))
        } else {
            if (!Ui[d]) return i ? e : {};
            s = function(e, t, n) {
                var r = e.constructor;
                switch (t) {
                    case "[object ArrayBuffer]":
                        return Ii(e);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new r(+e);
                    case "[object DataView]":
                        return function(e, t) {
                            var n = t ? Ii(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.byteLength)
                        }(e, n);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return Pi(e, n);
                    case "[object Map]":
                        return new r;
                    case "[object Number]":
                    case "[object String]":
                        return new r(e);
                    case "[object RegExp]":
                        return function(e) {
                            var t = new e.constructor(e.source, wi.exec(e));
                            return t.lastIndex = e.lastIndex, t
                        }(e);
                    case "[object Set]":
                        return new r;
                    case "[object Symbol]":
                        return function(e) {
                            return ki ? Object(ki.call(e)) : {}
                        }(e)
                }
            }(e, d, a)
        }
    }
    o || (o = new hr);
    var f = o.get(e);
    if (f) return f;
    o.set(e, s), xi(e) ? e.forEach((function(r) {
        s.add(Fi(r, t, n, r, e, o))
    })) : Mi(e) && e.forEach((function(r, i) {
        s.set(i, Fi(r, t, n, i, e, o))
    }));
    var _ = c ? u ? di : li : u ? keysIn : Kr,
        p = l ? void 0 : _(e);
    return function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n););
    }(p || e, (function(r, i) {
        p && (r = e[i = r]), mr(s, i, Fi(r, t, n, i, e, o))
    })), s
}

function ji(e) {
    return Fi(e, 5)
}

function Bi(e, t, n) {
    switch (n.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, n[0]);
        case 2:
            return e.call(t, n[0], n[1]);
        case 3:
            return e.call(t, n[0], n[1], n[2])
    }
    return e.apply(t, n)
}

function Vi(e) {
    return e
}
Ui["[object Arguments]"] = Ui["[object Array]"] = Ui["[object ArrayBuffer]"] = Ui["[object DataView]"] = Ui["[object Boolean]"] = Ui["[object Date]"] = Ui["[object Float32Array]"] = Ui["[object Float64Array]"] = Ui["[object Int8Array]"] = Ui["[object Int16Array]"] = Ui["[object Int32Array]"] = Ui["[object Map]"] = Ui["[object Number]"] = Ui["[object Object]"] = Ui["[object RegExp]"] = Ui["[object Set]"] = Ui["[object String]"] = Ui["[object Symbol]"] = Ui["[object Uint8Array]"] = Ui["[object Uint8ClampedArray]"] = Ui["[object Uint16Array]"] = Ui["[object Uint32Array]"] = !0, Ui["[object Error]"] = Ui["[object Function]"] = Ui["[object WeakMap]"] = !1;
var Hi = Math.max;

function Xi(e, t, n) {
    return t = Hi(void 0 === t ? e.length - 1 : t, 0),
        function() {
            for (var r = arguments, i = -1, o = Hi(r.length - t, 0), s = Array(o); ++i < o;) s[i] = r[t + i];
            i = -1;
            for (var a = Array(t + 1); ++i < t;) a[i] = r[i];
            return a[t] = n(s), Bi(e, this, a)
        }
}

function qi(e) {
    return function() {
        return e
    }
}
var Gi = fr ? function(e, t) {
        return fr(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: qi(t),
            writable: !0
        })
    } : Vi,
    Wi = Date.now,
    Ki = function(e) {
        var t = 0,
            n = 0;
        return function() {
            var r = Wi(),
                i = 16 - (r - n);
            if (n = r, i > 0) {
                if (++t >= 800) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }(Gi);

function Yi(e, t) {
    return Ki(Xi(e, t, Vi), e + "")
}

function $i(e, t, n) {
    (void 0 === n || wn(e[t], n)) && (void 0 !== n || t in e) || _r(e, t, n)
}
var zi = function(e, t, n) {
        for (var r = -1, i = Object(e), o = n(e), s = o.length; s--;) {
            var a = o[++r];
            if (!1 === t(i[a], a, i)) break
        }
        return e
    },
    Qi = Function.prototype,
    Ji = Object.prototype,
    Zi = Qi.toString,
    eo = Ji.hasOwnProperty,
    to = Zi.call(Object);

function no(e) {
    if (!on(e) || "[object Object]" != rn(e)) return !1;
    var t = ai(e);
    if (null === t) return !0;
    var n = eo.call(t, "constructor") && t.constructor;
    return "function" == typeof n && n instanceof n && Zi.call(n) == to
}

function ro(e, t) {
    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
}

function io(e, t, n, r, i) {
    e !== t && zi(t, (function(o, s) {
        if (i || (i = new hr), cn(o)) ! function(e, t, n, r, i, o, s) {
            var a = ro(e, n),
                u = ro(t, n),
                c = s.get(u);
            if (c) $i(e, n, c);
            else {
                var l = o ? o(a, u, n + "", e, t, s) : void 0,
                    d = void 0 === l;
                if (d) {
                    var h = Wt(u),
                        f = !h && wr(u),
                        _ = !h && !f && Ur(u);
                    l = u, h || f || _ ? Wt(a) ? l = a : function(e) {
                        return on(e) && Wr(e)
                    }(a) ? l = ti(a) : f ? (d = !1, l = ei(u, !0)) : _ ? (d = !1, l = Pi(u, !0)) : l = [] : no(u) || Sr(u) ? (l = a, Sr(a) ? l = function(e) {
                        return vr(e, $r(e))
                    }(a) : cn(a) && !ln(a) || (l = Li(u))) : d = !1
                }
                d && (s.set(u, l), i(l, u, r, o, s), s.delete(u)), $i(e, n, l)
            }
        }(e, t, s, n, io, r, i);
        else {
            var a = r ? r(ro(e, s), o, s + "", e, t, i) : void 0;
            void 0 === a && (a = o), $i(e, s, a)
        }
    }), $r)
}

function oo(e, t, n, r, i, o) {
    return cn(e) && cn(t) && (o.set(t, e), io(e, t, void 0, oo, o), o.delete(t)), e
}

function so(e) {
    return Yi((function(t, n) {
        var r = -1,
            i = n.length,
            o = i > 1 ? n[i - 1] : void 0,
            s = i > 2 ? n[2] : void 0;
        for (o = e.length > 3 && "function" == typeof o ? (i--, o) : void 0, s && function(e, t, n) {
                if (!cn(n)) return !1;
                var r = typeof t;
                return !!("number" == r ? Wr(n) && kr(t, n.length) : "string" == r && t in n) && wn(n[t], e)
            }(n[0], n[1], s) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++r < i;) {
            var a = n[r];
            a && e(t, a, r, o)
        }
        return t
    }))
}
var ao = so((function(e, t, n, r) {
        io(e, t, n, r)
    })),
    uo = Yi((function(e) {
        return e.push(void 0, oo), Bi(ao, void 0, e)
    }));
let co = function() {
    function e(e) {
        this._available = !1, this._active = !1, this._video = e, dr(this)
    }
    ue(e, null, [{
        key: "displayName",
        get: function() {
            return "ExternalDisplay"
        }
    }, {
        key: "supported",
        get: function() {
            return !1
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return []
        }
    }]);
    var t = e.prototype;
    return t.showPicker = function() {}, t.getFile = function() {
        const e = this.constructor.displayName.replace("ExternalDisplay", "");
        if (this._video.externalDisplayFiles[e]) return this._video.externalDisplayFiles[e];
        const t = this.constructor.supportedVideoTypes,
            n = this._video.files.filter(e => -1 !== t.indexOf(e.mime)).sort((e, n) => e.mime === n.mime ? e.priority - n.priority : t.indexOf(e.mime) - t.indexOf(n.mime));
        if (!n.length) throw new Error(`No files available for ${this.constructor.displayName} external display.`);
        return n[0]
    }, ue(e, [{
        key: "active",
        get: function() {
            return this._active
        }
    }, {
        key: "available",
        get: function() {
            return this._available
        }
    }, {
        key: "element",
        get: function() {
            return document.createElement("div")
        }
    }]), e
}();
const lo = {
        ABORT: "abort",
        CAN_PLAY: "canplay",
        CAN_PLAY_THROUGH: "canplaythrough",
        DURATION_CHANGE: "durationchange",
        EMPTIED: "emptied",
        ENDED: "ended",
        ENTER_PICTURE_IN_PICTURE: "enterpictureinpicture",
        LEAVE_PICTURE_IN_PICTURE: "leavepictureinpicture",
        ERROR: "error",
        LOADED_DATA: "loadeddata",
        LOADED_METADATA: "loadedmetadata",
        LOAD_START: "loadstart",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        PROGRESS: "progress",
        RATE_CHANGE: "ratechange",
        RESIZE: "resize",
        SEEKED: "seeked",
        SEEKING: "seeking",
        STALLED: "stalled",
        SUSPEND: "suspend",
        TIME_UPDATE: "timeupdate",
        VOLUME_CHANGE: "volumechange",
        WAITING: "waiting",
        WEBKIT_BEGIN_FULLSCREEN: "webkitbeginfullscreen",
        WEBKIT_END_FULLSCREEN: "webkitendfullscreen",
        WEBKIT_PRESENTATION_MODE_CHANGED: "webkitpresentationmodechanged"
    },
    ho = {
        ADD_TRACK: "addtrack",
        REMOVE_TRACK: "removetrack",
        CHANGE: "change"
    },
    fo = {
        AVAILABLE: "externaldisplayavailable",
        UNAVAILABLE: "externaldisplayunavailable",
        ACTIVATED: "externaldisplayactivated",
        DEACTIVATED: "externaldisplaydeactivated"
    },
    _o = {
        AIRPLAY_AVAILABLE: "available",
        AIRPLAY_UNAVAILABLE: "unavailable",
        AIRPLAY_ACTIVATED: "activated",
        AIRPLAY_DEACTIVATED: "deactivated"
    },
    po = {
        SCANNER_CHANGE: "scannerchange",
        SCANNER_ERROR: "scannererror",
        FILE_ERROR: "fileerror",
        FILE_SRC_UPDATE: "filesrcupdate",
        DOWNLOAD_START: "downloadstart",
        DOWNLOAD_END: "downloadend",
        DOWNLOAD_ERROR: "downloaderror",
        DOWNLOAD_TIMEOUT: "downloadtimeout",
        DRM_AUTH_FAILURE: "drmauthfailure",
        DRM_AUTH_SUCCESS: "drmauthsuccess",
        DRM_FAILURE: "drmfailure",
        DRM_KEY_SWITCH: "drmkeyswitch",
        DRM_OUTPUT_RESTRICTED: "drmoutputrestricted",
        EME_UNSUPPORTED: "emeunsupported",
        CURRENT_FILE_CHANGE: "currentfilechange",
        MEDIA_URL_EXPIRED: "mediaurlexpired",
        MEDIA_URL_BAD_REQUEST: "mediaurlbadrequest",
        STREAM_CHANGE: "streamchange",
        STREAM_CHANGE_START: "streamchangestart",
        STREAM_UPDATED: "streamupdated",
        STREAM_BUFFER_START: "streambufferstart",
        STREAM_BUFFER_END: "streambufferend",
        AVAILABLE_STREAMS_CHANGED: "availablestreamschanged",
        MEDIA_CAPABILITY_STREAMS_UNSUPPORTED: "mediacapabilitystreamsunsupported",
        DROPPED_FRAMES: "droppedframes",
        BANDWIDTH: "bandwidth",
        STREAM_TARGET_CHANGE: "streamtargetchange",
        CUE_POINT: "cuepoint",
        BUFFER_OCCUPANCY: "bufferoccupancy",
        MANIFEST_TIMEOUT: "manifesttimeout",
        MANIFEST_LOADED: "manifestloaded",
        STREAMS_LOADED: "streamsloaded",
        TEXT_SRC_UPDATE: "texttracksrcupdate",
        TEXT_TRACKS_AVAILABLE: "texttracksavailable",
        AV_DURATION_MISMATCH: "avdurationmismatch",
        BUFFER_STARTED: "bufferstarted",
        BUFFER_ENDED: "bufferended",
        QUOTA_EXCEEDED_ERROR: "quotaexceedederror",
        CHAPTER_CUES_UPDATED: "chaptercuesupdated",
        APPEND_BUFFER_END: "appendbufferend",
        DROPPED_FRAME_PERCENT_EXCEEDED: "droppedframepercentexceeded",
        LOAD_SEGMENT_FAILED: "loadsegmentfailed",
        AUDIO_TRACK_CHANGED: "audiotrackchanged",
        SEGMENT_CUES_LOADED: "segmentcuesloaded"
    },
    mo = {
        STREAM_ONLINE: "livestreamonline",
        STREAM_OFFLINE: "livestreamoffline",
        BUFFER_GAP_JUMP: "livebuffergapjump",
        BUFFER_GAP_JUMP_PREVENT: "livebuffergapjumpprevent",
        STALL_JUMP: "livestalljump",
        LATENCY_UPDATED: "latencyupdated"
    },
    vo = {
        CAMERA_UPDATE: "cameraupdate",
        CAMERA_CHANGE: "camerachange",
        MOTION_START: "motionstart",
        MOTION_END: "motionend",
        SPATIAL_UNSUPPORTED: "spatialunsupported",
        WEBVR_ENTER: "entervr",
        WEBVR_EXIT: "exitvr",
        WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable",
        AMBISONIC_UNSUPPORTED: "ambisonicunsupported"
    },
    go = {
        MEDIASESSION_PLAY: "mediasessionplay",
        MEDIASESSION_PAUSE: "mediasessionpause",
        MEDIASESSION_SEEK_FORWARD: "mediasessionseekforward",
        MEDIASESSION_SEEK_BACKWARD: "mediasessionseekbackward"
    },
    yo = {
        BRAIN_ML_MODEL_ERR: "brainmlmodelerr",
        BRAIN_ML_MODEL_NET_ERR: "brainmlmodelresperr",
        BRAIN_ML_MODEL_TIMEOUT: "brainmlmodeltimeout",
        BRAIN_ML_SWITCH_TO_SKYFIRE: "brainmlmodelswitchtoskyfire",
        BRAIN_ML_MODEL_INPUTS: "brainmlmodelinputs"
    },
    Eo = Object.assign({}, lo, ho, fo, _o, po, vo, mo, go, yo);
let To = function(e) {
    function t(t) {
        var n;
        return (n = e.call(this, t) || this)._videoElement = document.createElement("video"), n._videoElement.setAttribute("data-airplay", ""), n._videoElement.setAttribute("x-webkit-airplay", "allow"), n.addVideoEventListeners(), n
    }
    he(t, e), ue(t, null, [{
        key: "displayName",
        get: function() {
            return "AirPlayExternalDisplay"
        }
    }, {
        key: "supported",
        get: function() {
            return "WebKitPlaybackTargetAvailabilityEvent" in window
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return ["application/vnd.apple.mpegurl", "video/mp4"]
        }
    }]);
    var n = t.prototype;
    return n.addVideoEventListeners = function(e = this._videoElement) {
        e.addEventListener(lo.LOADED_METADATA, e => {
            this.fire(lo.LOADED_METADATA, e)
        }), e.addEventListener("webkitplaybacktargetavailabilitychanged", e => {
            switch (e.availability) {
                case "available":
                    this._available || (this._available = !0, this.fire(_o.AIRPLAY_AVAILABLE));
                    break;
                case "not-available":
                    this._available && (this._available = !1, this.fire(_o.AIRPLAY_UNAVAILABLE))
            }
        }), e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", e => {
            if (e.target.webkitCurrentPlaybackTargetIsWireless) return this._active = !0, void this.fire(_o.AIRPLAY_ACTIVATED);
            this._active = !1, this.fire(_o.AIRPLAY_DEACTIVATED)
        })
    }, n.showPicker = function() {
        this._videoElement.webkitShowPlaybackTargetPicker(), this.loadMetadata().then(() => this._videoElement.webkitShowPlaybackTargetPicker()).catch(() => {})
    }, n.loadMetadata = function() {
        return this._videoElement.readyState >= 1 ? Promise.resolve() : new Promise((e, t) => {
            this._videoElement.addEventListener(lo.LOADED_METADATA, () => {
                e()
            }), this._videoElement.src = this.getFile().src
        })
    }, ue(t, [{
        key: "element",
        get: function() {
            return this._videoElement
        },
        set: function(e) {
            if (!(e instanceof HTMLVideoElement)) throw new TypeError("The element for AirPlay must be a <video>.");
            e !== this._videoElement && (this.addVideoEventListeners(e), this._videoElement = e, this._videoElement.setAttribute("x-webkit-airplay", "allow"))
        }
    }]), t
}(co);
const So = (() => {
        const e = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\./);
        return !!e && {
            major: parseInt(e[1], 10),
            minor: parseInt(e[2], 10)
        }
    })(),
    bo = function(e) {
        for (let t = 0, n = this.length; t < n; t++)
            if (this[t].id === `${e}`) return this[t];
        return null
    };

function Ao(e = []) {
    return e.item = function(e) {
        return this[e]
    }, e.getTrackById = bo, e
}

function Io() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function wo(e) {
    return Io() - e
}

function Ro() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e => (e ^ (16 * Math.random() >> e) / 4).toString(16))
}

function ko(e) {
    const t = window.atob(e),
        n = t.length,
        r = new Uint8Array(n);
    for (let i = 0; i < n; i++) r[i] = t.charCodeAt(i);
    return r
}

function Po(e, t, n, r) {
    let i = 0,
        o = 0,
        s = 0,
        a = 0;
    const u = e,
        c = t,
        l = n / r;
    return u / c >= l ? (o = c, i = (l * c).toFixed(2)) : (i = u, o = (u / l).toFixed(2)), s = Math.max((u - i) / 2, 0), a = Math.max((c - o) / 2, 0), {
        width: i,
        height: o,
        left: s,
        top: a
    }
}

function Do(e) {
    if (function(e) {
            return "webkitDisplayingFullscreen" in e && e.webkitDisplayingFullscreen
        }(e)) return !0;
    const t = [document.fullscreenElement, document.webkitFullscreenElement, document.webkitCurrentFullScreenElement, document.mozFullScreenElement, document.msFullscreenElement].find(e => void 0 !== e);
    return Boolean(t)
}

function Oo(e, t) {
    let n = e;
    return t && (n += `;codecs="${t}"`), n
}

function Lo(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    const n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function Co(e, t) {
    return e && e.tests && e.tests[t] ? e.tests[t] : null
}

function Mo(e) {
    return e && "ML" === e.displayName
}
let No = function(e, t) {
    this.name = e, this.message = t, Object.freeze(this)
};
const xo = new WeakMap;
let Uo = function() {
    function e(e, t = {}) {
        const n = parseFloat(e);
        if (isNaN(n)) throw new TypeError("Time must be a number.");
        if (n < 0) throw new TypeError("Time must be a positive number.");
        this.time = e, this.data = t, this.id = Ro();
        try {
            const n = "undefined" == typeof VTTCue ? TextTrackCue : VTTCue;
            this.vttCue = new n(e, e + .25, JSON.stringify(t)), this.vttCue.id = this.id
        } catch (Vd) {
            throw new No("CuePointsNotSupported", "Cue points are not supported in this browser.")
        }
        xo.set(this.vttCue, this), Object.freeze(this)
    }
    return e.fromVTTCue = function(t) {
        if (xo.has(t)) return xo.get(t);
        let n = {};
        try {
            n = JSON.parse(t.text)
        } catch (Vd) {}
        return new e(t.startTime, n)
    }, e
}();

function Fo(e, t, n) {
    let r;
    try {
        document.removeChild({})
    } catch (Vd) {
        r = Object.create(Object.getPrototypeOf(Vd), {
            name: {
                value: t,
                configurable: !0,
                writable: !0
            },
            code: {
                value: e,
                configurable: !0,
                writable: !0
            },
            message: {
                value: n,
                configurable: !0,
                writable: !0
            },
            toString: {
                value: () => `${t}: DOM Exception ${e}`,
                configurable: !0,
                writable: !0
            }
        })
    }
    return Object.freeze(r)
}
const jo = (e, t) => {
    if (!e || void 0 === e[t]) throw Fo(1, "INDEX_SIZE_ERR");
    return e[t]
};

function Bo(e = [], t = []) {
    return Object.freeze({
        get length() {
            return e.length
        },
        start: t => jo(e, t),
        end: e => jo(t, e),
        [Symbol.iterator]: () => function(e, t) {
            let n = 0;
            return {
                [Symbol.iterator]() {
                    return this
                },
                next: () => n < e.length ? {
                    done: !1,
                    value: t ? [e[n], t[n++]] : e[n++]
                } : {
                    done: !0
                }
            }
        }(e, t)
    })
}
Bo.from = function(e) {
    if (!(e instanceof TimeRanges)) throw new TypeError("Can only create a TelecineTimeRange from a TimeRanges object.");
    const t = [],
        n = [];
    for (let r = 0, i = e.length; r < i; r++) t.push(e.start(r)), n.push(e.end(r));
    return Bo(t, n)
};
const Vo = "DRMFailure",
    Ho = "MediaUrlBadRequest",
    Xo = "PlayInterrupted",
    qo = "TextTracksNotSupported";

function Go() {}
const Wo = document.createElement("video"),
    Ko = {
        "application/vnd.apple.mpegurl": "application/vnd.apple.mpegurl",
        "video/mp4": 'video/mp4; codecs="avc1.64001E"',
        "video/webm": 'video/webm; codecs="vp8, vorbis"',
        "video/x-flv": 'video/x-flv; codecs="vp6"'
    },
    Yo = function() {
        const e = "undefined" == typeof TextTrack ? {} : TextTrack;
        return {
            disabled: "DISABLED" in e ? e.DISABLED : "disabled",
            hidden: "HIDDEN" in e ? e.HIDDEN : "hidden",
            showing: "SHOWING" in e ? e.SHOWING : "showing"
        }
    }(),
    $o = function() {
        const e = document.createElement("track");
        return "track" in e && "oncuechange" in e.track
    }(),
    zo = new WeakMap;
let Qo = function() {
    function e(e, t = {}) {
        this._element = e, this._options = t, this._telecineVideo = null, this._currentFile = null, this._externalDisplays = [], dr(this), this.on(lo.LOADED_METADATA, () => this._initMediaSessionHandlers()), this.on(lo.PLAY, () => this._initMediaSessionMetadata());
        let n = e.querySelector("video");
        n || (n = document.createElement("video"), n.preload = "none", this._element.appendChild(n)), n.setAttribute("tabindex", "-1"), this._video = n, t.playRequest && (this._playRequest = t.playRequest, this._playRequest.video = n), t.htmlScanner && t.htmlScanner.controls && (this._video.controls = !0), this._boundHandleVideoEvent = this.handleVideoEvent.bind(this), this._boundHandleAudioEvent = this.handleAudioEvent.bind(this), this.addVideoEventListeners(), this.addAudioEventListeners(), this._preload = "none", this._externalDisplayActivated = !1, this._inFullscreen = !1, this._lastCurrentTime = -1, this._switchingVideo = !1
    }
    ue(e, null, [{
        key: "displayName",
        get: function() {
            return "HTMLScanner"
        }
    }, {
        key: "supported",
        get: function() {
            return e.supportedVideoTypes.length > 0
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            const e = [];
            if ("function" != typeof Wo.canPlayType) return e;
            for (const t in Ko) {
                const n = Ko[t];
                Bt.android && "application/vnd.apple.mpegurl" === t || (Bt.android && !Bt.mobileAndroid && "video/mp4" === t && Bt.android instanceof String ? parseInt(Bt.android.split(".")[0], 10) > 3 && e.push(t) : Wo.canPlayType(n).replace(/^no$/, "") && e.push(t))
            }
            return e
        }
    }, {
        key: "supportedAudioTypes",
        get: function() {
            return []
        }
    }, {
        key: "supportedExternalDisplays",
        get: function() {
            return [To]
        }
    }, {
        key: "supportsSettingVolume",
        get: function() {
            if (Bt.android || Bt.iOS || Bt.iPadOS) return !1;
            const e = Wo.volume;
            return Wo.volume = .5 * e, Wo.volume !== e
        }
    }, {
        key: "supportsTextTracks",
        get: function() {
            return void 0 !== Wo.textTracks && Wo.textTracks instanceof TextTrackList
        }
    }, {
        key: "supportsVideoElementAudioTracks",
        get: function() {
            return void 0 !== Wo.audioTracks && this.supportedVideoTypes.includes("application/vnd.apple.mpegurl")
        }
    }]);
    var t = e.prototype;
    return t.deactivate = function() {
        this._telecineVideo && (this._telecineVideo.off("filesrcupdate"), this._telecineVideo.off("texttracksrcupdate")), this.removeVideoEventListeners(), this.removeAudioEventListeners(), this._switchingVideo || this.removeSnapshot(), this._video.style.display = "none"
    }, t.reactivate = function() {
        this.addVideoEventListeners(), this.addAudioEventListeners(), this._video.style.display = ""
    }, t.addVideoEventListeners = function(e = this._video) {
        Object.keys(lo).forEach(t => {
            const n = lo[t];
            e.addEventListener(n, this._boundHandleVideoEvent)
        })
    }, t.addAudioEventListeners = function(e = this._video) {
        var t;
        (null == e ? void 0 : e.audioTracks) && "function" == typeof(null == (t = e.audioTracks) ? void 0 : t.addEventListener) && (e.audioTracks.addEventListener(ho.ADD_TRACK, this._boundHandleAudioEvent), e.audioTracks.addEventListener(ho.REMOVE_TRACK, this._boundHandleAudioEvent), e.audioTracks.addEventListener(ho.CHANGE, this._boundHandleAudioEvent))
    }, t.removeVideoEventListeners = function(e = this._video) {
        Object.keys(lo).forEach(t => {
            const n = lo[t];
            e.removeEventListener(n, this._boundHandleVideoEvent)
        })
    }, t.removeAudioEventListeners = function(e = this._video) {
        var t;
        (null == e ? void 0 : e.audioTracks) && "function" == typeof(null == (t = e.audioTracks) ? void 0 : t.removeEventListener) && (e.audioTracks.removeEventListener(ho.ADD_TRACK, this._boundHandleAudioEvent), e.audioTracks.removeEventListener(ho.REMOVE_TRACK, this._boundHandleAudioEvent), e.audioTracks.removeEventListener(ho.CHANGE, this._boundHandleAudioEvent))
    }, t.play = function(e) {
        return this._playRequest.start(e).catch(e => {
            throw this._onPlayError(e), e
        })
    }, t._onPlayError = function(e) {
        this.fire(lo.ERROR, new No(null == e ? void 0 : e.name, null == e ? void 0 : e.message))
    }, t.pause = function() {
        this._playRequest.cancel(), this._video.pause()
    }, t.onpause = function() {}, t.ontimeupdate = function() {
        this._lastCurrentTime = this.currentTime
    }, t.addTextTrack = function(e) {
        let t, n;
        return e.src ? (t = document.createElement("track"), t.kind = e.kind, t.src = e.src, t.id = `telecine-track-${e.id}`, t.srclang = e.language, t.label = e.label, this._video.appendChild(t), n = t.track) : (n = this._video.addTextTrack(e.kind, e.label, e.language), this._textTracks = this._textTracks || {}, this._textTracks[`telecine-track-${e.id}`] = n), this._addTextTrackListeners(e, n, t), n
    }, t._addTextTrackListeners = function(e, t, n) {
        t.addEventListener("cuechange", () => e.dispatchEvent("cuechange")), this._video.addEventListener("timeupdate", () => {
            Do(this._video) && (e.mode = t.mode)
        });
        const r = () => {
                const n = Bt.iOS && Do(this._video);
                !e._modeHasBeenSet || n ? e.mode = t.mode : t.mode = Yo[e.mode]
            },
            i = [];
        if (n ? n.addEventListener("load", r) : r(), ["loadeddata", "seeking"].forEach(e => {
                this._video.addEventListener(e, r), i.push([e, r])
            }), e._modeHasBeenSet && (t.mode = Yo[e.mode]), !$o) {
            let n = [];
            const r = () => {
                if (t && "disabled" !== Yo[t.mode]) {
                    if (n.length !== t.activeCues.length) return e.dispatchEvent("cuechange"), void(n = Array.from(t.activeCues));
                    for (let r = 0, i = t.activeCues.length; r < i; r++)
                        if (t.activeCues[r].startTime !== n[r].startTime) return e.dispatchEvent("cuechange"), void(n = Array.from(e.activeCues))
                }
            };
            this._video.addEventListener("timeupdate", r), i.push(["timeupdate", r])
        }
        return zo.set(e, i), t
    }, t.removeTextTrack = function(e) {
        const t = this._video.querySelector(`#telecine-track-${e.id}`);
        t && this._video.removeChild(t);
        const n = zo.get(e);
        Array.isArray(n) && n.forEach(([e, t]) => {
            this._video.removeEventListener(e, t)
        })
    }, t.getCuesForTrack = function(e) {
        const t = this.getTrackById(`telecine-track-${e.id}`);
        return t ? Array.from(t.cues) : []
    }, t.getActiveCuesForTrack = function(e) {
        const t = this.getTrackById(`telecine-track-${e.id}`);
        return t && t.activeCues ? Array.from(t.activeCues) : []
    }, t.setModeForTrack = function(e, t) {
        const n = this.getTrackById(`telecine-track-${e.id}`);
        return n && n.mode !== Yo[t] && (n.mode = Yo[t], $o || "disabled" === t || e.dispatchEvent("cuechange")), this
    }, t.setSrcForTrack = function(e, t) {
        const n = this._video.querySelector(`#telecine-track-${e.id}`);
        return n && null === n.track.cues && (n.src = t), this
    }, t.enableAudioTrack = function(e) {
        if (!this.constructor.supportsVideoElementAudioTracks || !this.audioTracks) return null;
        if (!e) return null;
        if (!this.audioTracks.getTrackById(e)) return null;
        let t = null;
        for (let n = 0; n < this.audioTracks.length; n++) {
            const r = this.audioTracks[n].id === e;
            this.audioTracks[n].enabled = r, r && (t = this.audioTracks[n])
        }
        return t
    }, t._createChapterCue = function(e, t, n = null) {
        let r;
        this._chaptersTrack || (this._chaptersTrack = this._video.addTextTrack("chapters"), this._chaptersTrack.mode = "hidden");
        const i = e.timecode,
            o = n ? n.timecode : t,
            s = window.VTTCue || window.TextTrackCue;
        try {
            r = new s(i, o, e.title)
        } catch (Vd) {
            throw new No("ChaptersNotSupported", "Chapters are not supported in this browser.")
        }
        r.size = (o - i) / t, r.id = i, this._chaptersTrack.addCue(r)
    }, t.addChapter = function(e, t) {
        const n = this.video.chapters,
            r = {
                timecode: e,
                title: t
            };
        n.push(r), n.sort((e, t) => e.timecode - t.timecode);
        const i = n[n.indexOf(r) + 1];
        this._createChapterCue(r, this.video.duration, i), this._updateChapterCues(this._chaptersTrack, this.video.duration)
    }, t.removeChapter = function(e) {
        try {
            this._chaptersTrack.removeCue(e)
        } catch (Vd) {
            throw new No("ChaptersNotSupported", "Chapters are not supported in this browser.")
        }
        const t = this.video.chapters.find(t => t.timecode === e.timecode);
        this.video.chapters.splice(t, 1), this._updateChapterCues(this._chaptersTrack, this.video.duration)
    }, t._updateChapterCues = function(e, t) {
        for (let n = 0; n < e.cues.length; n++) {
            let r = e.cues[n],
                i = e.cues[n + 1];
            const o = i ? i.startTime : t;
            r.endTime = o, r.size = (o - r.startTime) / t
        }
        this.fire(po.CHAPTER_CUES_UPDATED)
    }, t.addChapters = function(e, t) {
        0 !== e.length && t && (e = e.filter(e => this._isValidChapter(e, t))).sort((e, t) => e.timecode - t.timecode).forEach((n, r) => this._createChapterCue(n, t, e[r + 1]))
    }, t.addCuePoint = function(e, t = {}) {
        if (this._cuePointTrack || (this._cuePointTrack = this._video.addTextTrack("metadata"), this._cuePointTrack.mode = "hidden", this._cuePointTrack.addEventListener("cuechange", e => {
                Array.from(e.target.activeCues).forEach(e => {
                    this.fire(po.CUE_POINT, Uo.fromVTTCue(e))
                })
            }), this._video.addEventListener("canplay", e => {
                this._cuePointTrack.mode = "hidden"
            })), e = parseFloat(e), isNaN(e)) throw new TypeError("Time must be a number.");
        if (e < 0 || e >= this.duration) throw new TypeError("Time must be a positive number less than the duration of the video.");
        const n = new Uo(e, t);
        return this._cuePointTrack.addCue(n.vttCue), n
    }, t.removeCuePoint = function(e) {
        if (!e) throw new No("InvalidCuePoint", "The specified cue point is not valid.");
        return this._cuePointTrack.removeCue(e.vttCue), !0
    }, t.removeAllCuePoints = function() {
        return this._cuePointTrack && this._cuePointTrack.length && Array.from(this._cuePointTrack.cues).forEach(e => {
            this._cuePointTrack.removeCue(e)
        }), !0
    }, t.requestPictureInPicture = function() {
        try {
            const e = this;
            return function(t, n) {
                var r = function() {
                    if (e._video.readyState < 1) return function(e, t) {
                        return e && e.then ? e.then(Go) : Promise.resolve()
                    }(e._initPreload())
                }();
                return r && r.then ? r.then(n) : n()
            }(0, (function() {
                switch (e.pictureInPictureSupportType) {
                    case "pip-api":
                        return e._video.requestPictureInPicture();
                    case "webkit-presentation-mode":
                        return e._video.webkitSetPresentationMode("picture-in-picture");
                    default:
                        throw new Error("Picture-in-picture is not supported by this browser")
                }
            }))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, t._initPreload = function() {
        return this.preload = "auto", new Promise(e => {
            this.once(lo.LOADED_METADATA, e)
        })
    }, t.exitPictureInPicture = function() {
        try {
            const e = this;
            switch (e.pictureInPictureSupportType) {
                case "pip-api":
                    return document.exitPictureInPicture();
                case "webkit-presentation-mode":
                    return e._video.webkitSetPresentationMode("inline");
                default:
                    throw new Error("Picture-in-picture is not supported by this browser")
            }
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, t.onerror = function() {
        if (!this._video.error) return !1;
        switch (this._video.error.code) {
            case this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                return this._fireVideoError("MediaSrcNotSupportedError", "The media was not suitable."), this._switchToNextFile(), !1;
            case this._video.error.MEDIA_ERR_DECODE:
                return -1 !== this._lastCurrentTime && Bt.iOS ? (this._video.load(), this.currentTime = this._lastCurrentTime, this._lastCurrentTime = -1, !1) : (this._fireVideoError("MediaDecodeError", "The media could not be decoded."), this._switchToNextFile(), !1);
            case this._video.error.MEDIA_ERR_NETWORK:
                return this._fireVideoError("MediaNetworkError", "A network error ocurred while fetching the media."), !1;
            case this._video.error.MEDIA_ERR_ABORTED:
                return this._fireVideoError("MediaAbortedError", "The user agent aborted the fetching of the media."), !1;
            default:
                return this._fireVideoError("MediaUnknownError", "An unknown error occurred."), !1
        }
    }, t._fireVideoError = function(e, t) {
        this.fire(lo.ERROR, new No(e, t))
    }, t.onended = function() {
        if (this._video.paused || this._video.pause(), this.currentTime < this._video.duration) return !1
    }, t.onwaiting = function() {
        return !1
    }, t.onwebkitbeginfullscreen = function() {
        this._inFullscreen = !0
    }, t.onwebkitendfullscreen = function() {
        this._inFullscreen = !1
    }, t.onwebkitpresentationmodechanged = function() {
        this.fire(this.pictureInPictureActive ? lo.ENTER_PICTURE_IN_PICTURE : lo.LEAVE_PICTURE_IN_PICTURE)
    }, t.shouldHandleVideoEvent = function(e) {
        return !0
    }, t.handleVideoEvent = function(e) {
        e.target === this._video && !1 !== this.shouldHandleVideoEvent(e) && ("function" == typeof this[`on${e.type}`] && !1 === this[`on${e.type}`](e) || this.fire(e.type))
    }, t.handleAudioEvent = function() {
        this.fire(po.AUDIO_TRACK_CHANGED)
    }, t.swapVideo = function(e, t) {
        const n = e.paused;
        this.removeVideoEventListeners(e), this.removeAudioEventListeners(e), e.parentElement.replaceChild(t, e), e.pause(), t.currentTime = e.currentTime, n || t.play(), this.addVideoEventListeners(t), this.addAudioEventListeners(t), this._video = t
    }, t.onexternaldisplayactivated = function(e) {
        this._externalDisplayActivated || (this._video !== e.element && (this._originalVideo = this._video, this.swapVideo(this._video, e.element)), this._externalDisplayActivated = !0)
    }, t.onexternaldisplaydeactivated = function(e) {
        this._externalDisplayActivated && (this._originalVideo && (this.swapVideo(e.element, this._originalVideo), this._originalVideo = null), this._externalDisplayActivated = !1)
    }, t.setVideoSrc = function(e) {
        this._video.src = e
    }, t.canSeekTo = function(e) {
        const t = this.duration;
        if (t && e > t && (e = t), this._video.seekable.length > 0)
            for (let n = 0, r = this._video.seekable.length; n < r; n++)
                if (this._video.seekable.start(n) <= e && this._video.seekable.end(n) >= e) return !0;
        return !1
    }, t.seekToTime = function(e) {
        return this.canSeekTo(e) ? (this._video.currentTime = e, Promise.resolve(this._video.currentTime)) : new Promise((t, n) => {
            const r = () => {
                this.canSeekTo(e) && (Object.keys(lo).forEach(e => {
                    const t = lo[e];
                    this._video.removeEventListener(t, r)
                }), this._video.currentTime = e, t(this._video.currentTime))
            };
            Object.keys(lo).forEach(e => {
                const t = lo[e];
                this._video.addEventListener(t, r)
            })
        })
    }, t.takeSnapshot = function() {
        let e = this._element.querySelector("[telecine-snapshot]");
        e || (e = document.createElement("canvas"), e.setAttribute("telecine-snapshot", ""), this._element.appendChild(e)), e.setAttribute("width", `${this._element.clientWidth}px`), e.setAttribute("height", `${this._element.clientHeight}px`), e.style.display = "";
        const {
            width: t,
            height: n,
            left: r,
            top: i
        } = Po(this._video.clientWidth, this._video.clientHeight, this._video.videoWidth, this._video.videoHeight);
        e.style.cssText = `position:absolute;width:${t}px;height:${n}px;left:${r}px;top:${i}px`;
        const o = e.getContext("2d");
        e.width > 0 && e.height > 0 && o.drawImage(this._video, 0, 0, e.width, e.height)
    }, t.removeSnapshot = function() {
        const e = this._element.querySelector("[telecine-snapshot]");
        e && (e.style.display = "none")
    }, t.getTrackById = function(e) {
        if (this._textTracks && this._textTracks[e]) return this._textTracks[e];
        if ("function" == typeof this._video.textTracks.getTrackById) return this._video.textTracks.getTrackById(e);
        const t = document.getElementById(e);
        return t ? t.track : null
    }, t.initDrm = function() {
        const e = this._telecineVideo.drmHandler;
        e && e.init(this)
    }, t.showExternalDisplayPicker = function(e) {
        if (!this._externalDisplays.length) throw new No("ExternalDisplayUnvailable", "No external displays are available.");
        if (!e) return void this._externalDisplays[0].showPicker();
        const t = this._externalDisplays.filter(t => t.constructor.displayName.replace("ExternalDisplay", "") === e)[0];
        if (!t) throw new No("InvalidExternalDisplay", "The specified external display is not available.");
        t.showPicker()
    }, t.setCaptionsShouldDisplay = function(e) {}, t.setCaptionsShouldLoad = function(e) {}, t._pickFile = function() {
        return this._files.length < 1 ? null : this._files.slice(0).sort((e, t) => e.priority - t.priority)[0]
    }, t._updateCurrentFile = function() {
        const e = this._pickFile();
        e ? this.currentFile = e : this.fire(po.SCANNER_ERROR, {
            reason: "all files failed"
        })
    }, t._isValidChapter = function(e, t) {
        return void 0 !== e.timecode && e.timecode >= 0 && e.timecode <= t && void 0 !== e.title
    }, t._switchToNextFile = function() {
        const e = this._files.indexOf(this._currentFile);
        this._files.splice(e, 1), this._updateCurrentFile()
    }, t._initMediaSessionMetadata = function() {
        if (!("mediaSession" in navigator)) return;
        const e = {
            title: this._telecineVideo.title,
            artist: this._telecineVideo.subtitle,
            artwork: []
        };
        this._telecineVideo.metadata.thumbnail && e.artwork.push({
            src: this._telecineVideo.metadata.thumbnail
        }), navigator.mediaSession.metadata = new MediaMetadata(e)
    }, t._initMediaSessionHandlers = function() {
        var e;
        "function" == typeof(null == (e = navigator.mediaSession) ? void 0 : e.setActionHandler) && (navigator.mediaSession.setActionHandler("play", () => {
            this.play().then(() => this.fire(go.MEDIASESSION_PLAY)).catch(this._onPlayError.bind(this))
        }), navigator.mediaSession.setActionHandler("pause", () => {
            this.pause(), this.fire(go.MEDIASESSION_PAUSE)
        }), navigator.mediaSession.setActionHandler("seekforward", () => {
            this.currentTime = Math.min(this.duration, this.currentTime + 10), this.fire(go.MEDIASESSION_SEEK_FORWARD)
        }), navigator.mediaSession.setActionHandler("seekbackward", () => {
            this.currentTime = Math.max(0, this.currentTime - 10), this.fire(go.MEDIASESSION_SEEK_BACKWARD)
        }))
    }, ue(e, [{
        key: "audioTracks",
        get: function() {
            return this._video.audioTracks
        }
    }, {
        key: "chaptersTrack",
        get: function() {
            return this._chaptersTrack
        }
    }, {
        key: "manifest",
        get: function() {
            return this._manifest
        }
    }, {
        key: "manifestLoaded",
        get: function() {
            return !!this._manifest
        }
    }, {
        key: "buffered",
        get: function() {
            return Bo.from(this._video.buffered)
        }
    }, {
        key: "cuePoints",
        get: function() {
            var e, t;
            return (null == (e = this._cuePointTrack) ? void 0 : e.cues) && "function" == typeof(null == (t = this._cuePointTrack) ? void 0 : t.cues[Symbol.iterator]) ? Array.from(this._cuePointTrack.cues).map(e => Uo.fromVTTCue(e)) : []
        }
    }, {
        key: "currentFile",
        get: function() {
            return this._currentFile
        },
        set: function(t) {
            const n = !this._video.paused,
                r = this.currentTime,
                i = !this._currentFile || t.video.id !== this._currentFile.video.id;
            if (i || this.takeSnapshot(), this._currentFile = t, i && (this._video.preload = this._preload), this.constructor === e && this._video.readyState > 0 && (this._video.currentTime = 0), (Bt.iOS || Bt.android) && this._currentFile.video.title) {
                let e = this._currentFile.video.title;
                this._currentFile.video.subtitle && (e = `${e} ${this._currentFile.video.subtitle}`), this._video.setAttribute("title", e)
            } else this._video.removeAttribute("title");
            this.setVideoSrc(this._currentFile.src, i), this.fire(po.CURRENT_FILE_CHANGE, t), Bt.iOS && !i && this.play().catch(this._onPlayError.bind(this)), this.constructor !== e || i ? n && this.play().catch(this._onPlayError.bind(this)) : (this.seekToTime(r).then(e => (n && this.play().catch(this._onPlayError.bind(this)), e)).catch(() => {}), this.once("canplay", () => this.removeSnapshot()), this.once("playing", () => this.removeSnapshot()))
        }
    }, {
        key: "currentTime",
        get: function() {
            return this._video.currentTime
        },
        set: function(e) {
            this.seekToTime(e)
        }
    }, {
        key: "duration",
        get: function() {
            return this._video.duration
        }
    }, {
        key: "ended",
        get: function() {
            return this._video.ended
        }
    }, {
        key: "externalDisplayAvailable",
        get: function() {
            return this._externalDisplays.some(e => e.available)
        }
    }, {
        key: "externalDisplayActive",
        get: function() {
            return this._externalDisplays.some(e => e.active)
        }
    }, {
        key: "loop",
        get: function() {
            return this._video.loop
        },
        set: function(e) {
            this._video.loop = e
        }
    }, {
        key: "isLowerProfileAvailable",
        get: function() {
            return null
        }
    }, {
        key: "muted",
        get: function() {
            return this._video.muted
        },
        set: function(e) {
            this._video.muted = e
        }
    }, {
        key: "playsinline",
        get: function() {
            return this._video.playsinline
        },
        set: function(e) {
            this._video.playsinline = e, e ? this._video.setAttribute("playsinline", "") : this._video.removeAttribute("playsinline")
        }
    }, {
        key: "paused",
        get: function() {
            return this._video.paused
        }
    }, {
        key: "defaultPlaybackRate",
        get: function() {
            return this._video.defaultPlaybackRate
        },
        set: function(e) {
            this._video.defaultPlaybackRate = e
        }
    }, {
        key: "playbackRate",
        get: function() {
            return this._video.playbackRate
        },
        set: function(e) {
            this._video.playbackRate = e
        }
    }, {
        key: "played",
        get: function() {
            return this._video.played
        }
    }, {
        key: "seekable",
        get: function() {
            return this._video.seekable
        }
    }, {
        key: "seeking",
        get: function() {
            return this._video.seeking
        }
    }, {
        key: "preload",
        get: function() {
            return this._preload
        },
        set: function(e) {
            this._video.preload = e, this._preload = e
        }
    }, {
        key: "autoPictureInPicture",
        get: function() {
            return this._video.autoPictureInPicture
        },
        set: function(e) {
            this._video.autoPictureInPicture = e
        }
    }, {
        key: "disablePictureInPicture",
        get: function() {
            return this._video.disablePictureInPicture
        },
        set: function(e) {
            this._video.disablePictureInPicture = e
        }
    }, {
        key: "pictureInPictureActive",
        get: function() {
            return "picture-in-picture" === this._video.webkitPresentationMode || !!document.pictureInPictureElement
        }
    }, {
        key: "pictureInPictureEnabled",
        get: function() {
            if (this.disablePictureInPicture) return !1;
            switch (this.pictureInPictureSupportType) {
                case "pip-api":
                    return document.pictureInPictureEnabled;
                case "webkit-presentation-mode":
                    return !0;
                default:
                    return !1
            }
        }
    }, {
        key: "pictureInPictureSupportType",
        get: function() {
            return "pictureInPictureEnabled" in document ? "pip-api" : !("function" != typeof this._video.webkitSetPresentationMode || !this._video.webkitSupportsPresentationMode("picture-in-picture")) && "webkit-presentation-mode"
        }
    }, {
        key: "video",
        get: function() {
            return this._telecineVideo
        },
        set: function(e) {
            if (this.reactivate(), this._telecineVideo !== e) {
                if (this._telecineVideo && (this._telecineVideo.off("filesrcupdate"), this._telecineVideo.off("texttracksrcupdate")), this.removeAllCuePoints(), this._telecineVideo = e, this._files = e.files.filter(e => -1 !== this.constructor.supportedVideoTypes.indexOf(e.mime)), this._telecineVideo.on("filesrcupdate", e => {
                        e === this._currentFile && this._updateCurrentFile()
                    }), this._telecineVideo.on("texttracksrcupdate", e => {
                        this.video.currentScanner && this.video.currentScanner.setSrcForTrack(e, e.src)
                    }), this._options.externalDisplays && this._options.externalDisplays.length) {
                    this._externalDisplays = [];
                    let t = this.constructor.supportedExternalDisplays;
                    Array.isArray(t) || (t = []);
                    const n = t.map(e => e.displayName);
                    this._options.externalDisplays.filter(e => e.supported && -1 !== n.indexOf(e.displayName)).forEach(t => {
                        const n = new t(e),
                            r = t.displayName.replace("ExternalDisplay", "");
                        n.on(lo.LOADED_METADATA, e => this.fire(lo.LOADED_METADATA, e)), n.on("available", () => this.fire(fo.AVAILABLE, {
                            type: r
                        })), n.on("unavailable", () => this.fire(fo.UNAVAILABLE, {
                            type: r
                        })), n.on("activated", () => {
                            "function" == typeof this.onexternaldisplayactivated && this.onexternaldisplayactivated(n), this.fire(fo.ACTIVATED, {
                                type: r
                            })
                        }), n.on("deactivated", () => {
                            "function" == typeof this.onexternaldisplaydeactivated && this.onexternaldisplaydeactivated(n), this.fire(fo.DEACTIVATED, {
                                type: r
                            })
                        }), this._externalDisplays.push(n)
                    })
                }
                this._updateCurrentFile(), Bt.iOS && this._externalDisplays.forEach(e => {
                    "AirPlay" === e.constructor.displayName && (e.element = this._video)
                }), this.initDrm()
            }
        }
    }, {
        key: "videoElement",
        get: function() {
            return this._video
        }
    }, {
        key: "videoWidth",
        get: function() {
            return this._video.videoWidth
        }
    }, {
        key: "videoHeight",
        get: function() {
            return this._video.videoHeight
        }
    }, {
        key: "volume",
        get: function() {
            return Ne(this._video.volume)
        },
        set: function(e) {
            this._video.volume = Me(e)
        }
    }, {
        key: "readyState",
        get: function() {
            return this._video.readyState
        }
    }, {
        key: "supportsPlaybackRate",
        get: function() {
            if (Bt.android && So && So.major < 52) return !1;
            const e = Wo.playbackRate;
            Wo.playbackRate = .5 * e;
            const t = e !== Wo.playbackRate;
            return Wo.playbackRate = e, t
        }
    }]), e
}();

function Jo(e, t = []) {
    if (0 === e.length) return 0;
    let n = 0,
        r = 0;
    for (let i = 0; i < e.length; i++) {
        const o = t[i] || 1;
        r += o, n += e[i] * o
    }
    return n / r
}

function Zo(e) {
    e.sort((e, t) => e - t);
    const t = Math.floor(e.length / 2);
    return e.length % 2 ? e[t] : (e[t - 1] + e[t]) / 2
}

function es() {
    return "undefined" != typeof performance ? performance.now() : Date.now()
}
let ts = function(e) {
    function t() {
        return e.apply(this, arguments) || this
    }
    return he(t, e), t
}(ve(Error));

function ns() {}
const rs = [],
    is = [],
    os = [];

function ss(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const as = [];
let us = function() {
        function e(e = {}) {
            const {
                retryCount: t = 3,
                parallel: n = 1,
                includeWithSpeeds: r = !0,
                timeout: i = 0,
                retryAbortErrors: o = !0
            } = e;
            this._queue = [], this._activeRequests = new Set, this._retries = new WeakMap, this._retryCount = t, this._running = !1, this._processingQueue = !1, this._parallel = n, this._includeWithSpeeds = r, this._timeout = i, this._retryAbortErrors = o, this._initialize()
        }
        e.getPercentileSpeed = function(e = 5, t = .8) {
            return function(e, t) {
                if (e.sort(), 0 === e.length) return 0;
                if (t <= 0) return e[0];
                if (t >= 1) return e[e.length - 1];
                const n = e.length * t,
                    r = Math.floor(n),
                    i = r + 1,
                    o = n % 1;
                return i >= e.length ? e[r] : e[r] * (1 - o) + e[i] * o
            }(rs.slice(-e), t)
        }, e.getAverageSpeed = function(e = 5, t = []) {
            return Jo(rs.slice(-e), t)
        }, e.getHarmonicAverageSpeed = function(e = 5) {
            return function(e) {
                if (0 === e.length) return 0;
                let t = 0;
                for (let n = 0; n < e.length; n++) t += 1 / e[n];
                return e.length / t
            }(rs.slice(-e))
        }, e.getVolatilityScaler = function(e = 5) {
            const t = rs.slice(-e);
            if (t.length < 3) return null;
            const n = Jo(t, []);
            return Math.min.apply(Math, Ee(t)) / n
        }, e.getMedianSpeed = function(e = 5) {
            return Zo(rs.slice(-e))
        }, e.getResponseSpeeds = function() {
            return rs
        }, e.getProgressSpeeds = function() {
            return as
        }, e.getFailedSegments = function() {
            return is
        }, e.getSuccessfulSegments = function() {
            return os
        };
        var t = e.prototype;
        return t.add = function(e, t) {
            return new Promise((n, r) => {
                const i = this._createSegmentInfo(e, n, r);
                this._addSegmentToQueue(i, t), this._running && !this._processingQueue && this._processQueue()
            })
        }, t.start = function() {
            this._running || (this._running = !0, this._processQueue())
        }, t.stop = function() {
            this._running = !1
        }, t.abort = function(e = null) {
            this._queue.filter(t => !e || e === t.stream).forEach(e => {
                e.reject(new ts("Stream manually aborted")), this.fire("downloadabort", e.identifier)
            }), this._queue = this._queue.filter(t => e && e !== t.stream), this._activeRequests.forEach(t => {
                e && e !== t.stream || t.request.abort()
            })
        }, t._insertAtPosition = function(e) {
            let t = 0;
            for (; t < this._queue.length && !(this._queue[t].priority > e.priority); t++);
            this._queue.splice(t, 0, e)
        }, t._initialize = function() {
            this._pendingFetchMap = new WeakMap, dr(this), window.addEventListener("online", () => {
                this.start(), this._waitUntilOnline && (this._waitUntilOnline.resolve(), this._waitUntilOnline = null)
            }), window.addEventListener("offline", () => {
                this.stop(), this.abort(), this._waitUntilOnline = new Ue
            })
        }, t._addSegmentToQueue = function(e, t) {
            e.hasOwnProperty("priority") ? this._insertAtPosition(e) : this._queue[t ? "unshift" : "push"](e)
        }, t._processQueue = function() {
            if (!this._running) return;
            this._processingQueue = !0;
            const e = this._parallel - this._activeRequests.size;
            for (let t = 0; t < e; t++) this._fetchOne()
        }, t._createSegmentInfo = function(e, t, n) {
            let r = e;
            return e.id && (r = e.id), de(de({}, e), {}, {
                identifier: r,
                resolve: t,
                reject: n
            })
        }, t._continueProcessingQueue = function() {
            0 !== this._activeRequests.size || 0 !== this._queue.length ? this._activeRequests.size < this._parallel && this._processQueue() : this._processingQueue = !1
        }, t._fetchOne = function() {
            if (0 === this._queue.length) return void(this._processingQueue = !1);
            const e = this._queue.shift(),
                {
                    url: t,
                    byteRange: n,
                    isInitSegmentRequest: r,
                    identifier: i,
                    timeout: o
                } = e,
                s = {
                    stream: e.stream,
                    data: {
                        url: t,
                        isInitSegmentRequest: r,
                        requestSendTime: es(),
                        uuid: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e => (e ^ 16 * Math.random() >> e / 4).toString(16))
                    }
                };
            let a = this._timeout;
            const u = parseInt(o, 10);
            u >= 0 && (a = u);
            const c = {
                url: t,
                type: oe.SEGMENT,
                responseType: bt.ARRAY_BUFFER,
                retry: this._retryCount,
                hooks: {
                    beforeRetry: [this._beforeRetry.bind(this)]
                },
                onDownloadProgress: this._makeOnDownloadProgress(i, s),
                headers: n && {
                    Range: `bytes=${n}`
                },
                retryAbortErrors: this._retryAbortErrors,
                timeout: a
            };
            this.fire("downloadstart", i), s.request = pt(c).then(this._makeOnRequestLoad(s, e)).catch(this._makeOnRequestError(s, e)), this._activeRequests.add(s)
        }, t._beforeRetry = function() {
            try {
                const e = this;
                return function(t) {
                    var n = function() {
                        if (e._waitUntilOnline) return function(e, t) {
                            return e && e.then ? e.then(ns) : Promise.resolve()
                        }(e._waitUntilOnline)
                    }();
                    if (n && n.then) return n.then(ns)
                }()
            } catch (Vd) {
                return Promise.reject(Vd)
            }
        }, t._makeOnDownloadProgress = function(e, t) {
            let n = 0,
                r = 0,
                i = es();
            return o => {
                if (o.lengthComputable) {
                    const s = 8 * (o.loaded - r),
                        a = es(),
                        u = a - i,
                        c = {
                            startTime: i,
                            length: u,
                            bitrate: s / (u / 1e3),
                            index: n
                        };
                    n > 0 && (as.length >= 100 && as.shift(), as.push(c)), i = a, r = o.loaded, n += 1, this._pendingFetchMap.set(t, {
                        bytesTotal: o.total,
                        bytesLoaded: o.loaded,
                        percent: o.loaded / o.total,
                        identifier: e
                    }), this.fire("progress", e)
                }
            }
        }, t._makeOnRequestLoad = function(e, t) {
            const n = this,
                r = es(),
                {
                    identifier: i,
                    resolve: o
                } = t;
            return function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (Vd) {
                        return Promise.reject(Vd)
                    }
                }
            }((function(s) {
                let a = es() - r;
                return ss(s.arrayBuffer(), (function(r) {
                    return e.data.duration = es() - e.data.requestSendTime, n._activeRequests.delete(e), n._pendingFetchMap.delete(e), n._saveResponseSpeeds(t, a, r.byteLength), n.fire("downloadend", i, {
                        request: e,
                        response: s
                    }), os.push({
                        url: e.data.url,
                        status: 200,
                        duration: e.data.duration
                    }), ss(n._processBuffer(e, r), (function(e) {
                        o(r = e), n._continueProcessingQueue()
                    }))
                }))
            }))
        }, t._saveResponseSpeeds = function(e, t, n) {
            const r = e.includeWithBandwidthChecks,
                i = t / 1e3;
            if (n > 8e3) {
                const t = 8 * n;
                let o = t / i;
                if (e.excludeConnectTime && t <= 16e5) {
                    const e = (50 * Math.max(0, 1 - t / 16e5) + 150) / 1e3;
                    o = t / Math.max(.1, i - e)
                }
                rs.length > 100 && rs.shift(), this._includeWithSpeeds && r && rs.push(o)
            }
        }, t._processBuffer = function(e, t) {
            return e.data.url && e.data.url.match(".ts$") ? this._feedMuxer(e, t) : Promise.resolve(new Uint8Array(t))
        }, t._feedMuxer = function(e, t) {
            try {
                const n = this;
                return function(e, t) {
                    var r = function() {
                        if (!n._transmuxer) return ss(n._loadMux(), (function(e) {
                            n._transmuxer = new e({
                                keepOriginalTimestamps: !0
                            })
                        }))
                    }();
                    return r && r.then ? r.then(t) : t()
                }(0, (function() {
                    return new Promise(r => {
                        n._transmuxer.on("data", t => {
                            n._transmuxer.off("data");
                            let i = new Uint8Array(t.initSegment.byteLength + t.data.byteLength);
                            i.set(t.initSegment, 0), i.set(t.data, t.initSegment.byteLength), r(e.data.isInitSegmentRequest ? t.initSegment : i)
                        }), n._transmuxer.push(new Uint8Array(t)), n._transmuxer.flush()
                    })
                }))
            } catch (Vd) {
                return Promise.reject(Vd)
            }
        }, t._makeOnRequestError = function(e, t) {
            const {
                identifier: n,
                reject: r,
                size: i
            } = t;
            return t => {
                const o = es() - e.data.requestSendTime;
                if (e.data.duration = o, t instanceof $e) is.push({
                    url: e.data.url,
                    status: "abort",
                    duration: o
                }), this.fire("downloadabort", n);
                else if (t instanceof ze) is.push({
                    url: e.data.url,
                    status: t.response.status,
                    duration: o
                }), this.fire("downloaderror", n, t.response.status);
                else if (t instanceof Je) {
                    if (is.push({
                            url: e.data.url,
                            status: "timeout",
                            duration: o
                        }), i > 0 && t.timeoutMs > 0) {
                        let e = 8 * i / (t.timeoutMs / 1e3);
                        e *= .5, rs.push(e)
                    }
                    this.fire("downloadtimeout", n, {
                        timeoutMs: t.timeoutMs
                    })
                }
                this._pendingFetchMap.delete(e), this._activeRequests.delete(e), r(t), this._continueProcessingQueue()
            }
        }, t._loadMux = function() {
            return import ("./mux-mp4.module.js").then(({
                default: e
            }) => e)
        }, ue(e, [{
            key: "parallel",
            get: function() {
                return this._parallel
            },
            set: function(e) {
                this._parallel = e
            }
        }, {
            key: "pendingFetches",
            get: function() {
                const e = [];
                return this._activeRequests.forEach(t => {
                    if (this._pendingFetchMap.get(t)) {
                        const n = this._pendingFetchMap.get(t);
                        n.elapsedTime = es() - t.data.requestSendTime, e.push(n)
                    }
                }), e
            }
        }]), e
    }(),
    cs = function() {
        function e(e) {
            dr(this), this._sorcerer = e, this._sourceBuffer = null, this._activeStreamIndex = null, this._needsStreamSwitch = !1, this._needInitSegment = !0, this._lastAppended = null, this._toRemove = [], this._streams = [], this._quotaExceeded = !1, this._quotaExceededTimer = null, this._appendingFinalSegment = !1, this._finalSegmentTime = void 0, this._addingInitSegment = !1, this._isFirstSegment = !0, this._bufferState = {}, this._boundHandleUpdateEnd = this._handleUpdateEnd.bind(this), this._sorcerer.on("durationset", this._onDurationSet.bind(this))
        }
        var t = e.prototype;
        return t.addStream = function(e) {
            e.on("segmentadd", () => this._process());
            const t = this._streams.push(e) - 1;
            e.index = t, null === this._activeStreamIndex && (this._setActiveIndex(t), this._needsStreamSwitch = !0)
        }, t.streamIndexAtTime = function(e) {
            return this._bufferState[void 0] ? {
                stream: this.activeStreamIndex
            } : this._bufferState[Math.floor(e / 6)]
        }, t.switchTo = function(e, t = !0, n = {}) {
            let r = e;
            "object" == typeof e && (r = e.index);
            let i = this._activeStreamIndex !== r;
            const o = i;
            if (!i && this._needsStreamSwitch && (i = !0), i) {
                this._needsStreamSwitch = !1;
                const e = this._activeStreamIndex,
                    n = this._streams[e];
                this.fire("streamchangestart", e, r), n && o && t && n.abort(), this._switchToIndex = r, this._setActiveIndex(r)
            }
            return this._process(), new Promise(e => {
                i ? this._resolveSwitchComplete = () => {
                    this._switchToIndex === r && (this._resolveSwitchComplete = null, e(), this.fire("streamchange", r, n))
                } : e()
            })
        }, t.isTimeInBuffer = function(e) {
            for (let t = 0; t < this._sourceBuffer.buffered.length; t++) {
                const n = this._sourceBuffer.buffered.start(t),
                    r = this._sourceBuffer.buffered.end(t);
                if (n <= e && r >= e) return !0
            }
            return !1
        }, t.hasAppendedFinalSegment = function() {
            return void 0 !== this._finalSegmentTime && this.isTimeInBuffer(this._finalSegmentTime)
        }, t.clear = function() {
            this._streams.forEach(e => e.clear())
        }, t.remove = function(e, t = this._sorcerer._mediaSource.duration) {
            return new Promise((n, r) => {
                this._toRemove.push([e, t, n]), this._process()
            })
        }, t.removeEventListeners = function() {
            this._sourceBuffer && this._sourceBuffer.removeEventListener("updateend", this._boundHandleUpdateEnd)
        }, t._onDurationSet = function() {
            const e = this._sorcerer._mediaSource.duration;
            let t = Math.floor(e / 6);
            t += 6 % e > 1 ? 1 : 0;
            for (let n = 0; n < t; n++) this._bufferState[n] = {
                stream: null,
                segment: n,
                type: "video"
            }
        }, t._attachEvents = function() {
            this._sourceBuffer.addEventListener("updateend", this._boundHandleUpdateEnd)
        }, t._setActiveIndex = function(e) {
            this._needInitSegment = !0, this._activeStreamIndex = e, this._sorcerer._frameDropper.streamIndex = e
        }, t._handleUpdateEnd = function() {
            this._checkEndOfStream(), this._updateBufferEnd(), this._process()
        }, t._checkEndOfStream = function() {
            if (this._appendingFinalSegment && this.endTime) return this._appendingFinalSegment = !1, this._finalSegmentTime = this.endTime, void this._sorcerer.checkEndOfStream();
            !this.activeStream.hasNextSegment() && this._finalSegmentTime > 0 && "open" === this._sorcerer._mediaSource.readyState && this._sorcerer.checkEndOfStream()
        }, t._updateBufferEnd = function() {
            this._lastAppended && (this.fire("appendbufferend", this._lastAppended), this._lastAppended = null, this._resolveSwitchComplete && this._resolveSwitchComplete())
        }, t._process = function() {
            if (this._sourceBuffer) {
                if (this.activeStream && "closed" !== this._sorcerer._mediaSource.readyState && !this._sourceBuffer.updating)
                    if (this._toRemove.length) this._removeBuffer();
                    else if (!this._quotaExceeded && !this._addingInitSegment) return this._needInitSegment ? (this._needInitSegment = !1, void this._appendInitSegment()) : void this._appendSegment()
            } else this.on("sourcebufferattach", this._process)
        }, t._removeBuffer = function() {
            const [e, t, n] = this._toRemove.shift(), r = e => {
                this._sourceBuffer.removeEventListener("updateend", r), n(), clearTimeout(this._quotaExceededTimer), this._quotaExceededTimer = setTimeout(() => {
                    this._quotaExceeded = !1, this._process()
                }, 5e3)
            };
            this._sourceBuffer.addEventListener("updateend", r), this._sourceBuffer.remove(e, t)
        }, t._appendInitSegment = function() {
            this._addingInitSegment = !0, this.activeStream.getInitSegment().then(e => (this._lastAppended = null, this._sourceBuffer.appendBuffer(e), this._addingInitSegment = !1, e)).catch(e => {
                this._needInitSegment = !0, this._addingInitSegment = !1
            })
        }, t._appendSegment = function() {
            const e = this.activeStream.getNextSegment();
            if (null === e) return;
            const t = this.activeStream.getIdForSegment(e);
            this.activeStream.isFinal(e) && (this._appendingFinalSegment = !0), this._lastAppended = t, this.fire("appendbufferstart", t);
            try {
                this._sourceBuffer.appendBuffer(e), this._bufferState[t.segment] = t, this._isFirstSegment && (this._isFirstSegment = !1, this.fire("initialbufferstart"))
            } catch (Vd) {
                if ("QuotaExceededError" === Vd.name) {
                    this._quotaExceeded = !0, this.fire("quotaexceedederror", this._sourceBuffer.buffered);
                    const t = 6;
                    if (this._sorcerer._video.currentTime > t) {
                        const e = 0,
                            n = this._sorcerer._video.currentTime - t;
                        this._sorcerer.removeBuffer(e, n)
                    }
                    this.activeStream._readyToAppend.unshift(e)
                }
            }
        }, ue(e, [{
            key: "streams",
            get: function() {
                return this._streams
            }
        }, {
            key: "activeStreamIndex",
            get: function() {
                return this._activeStreamIndex
            }
        }, {
            key: "activeStream",
            get: function() {
                return this._streams[this._activeStreamIndex]
            }
        }, {
            key: "sourceBuffer",
            get: function() {
                return this._sourceBuffer
            },
            set: function(e) {
                this._sourceBuffer = e, this._attachEvents(), this.fire("sourcebufferattach")
            }
        }, {
            key: "endTime",
            get: function() {
                const e = this._sourceBuffer.buffered;
                if (e.length > 0) return e.end(e.length - 1)
            }
        }]), e
    }();

function ls() {}
let ds = function() {
        function e(e, t = "", n = new us) {
            dr(this), this._readyToAppend = [], this._initSegment = e, this._needInitSegment = !0, this._index = NaN, this._codec = t, this._fetcher = n, this._fetcher.start(), this._bufferData = new WeakMap, this._segmentToId = {}
        }
        e.isValidSegmentUrl = function(e) {
            return "string" == typeof e || "string" == typeof e.url && "string" == typeof e.byteRange
        };
        var t = e.prototype;
        return t.getIdForSegment = function(t) {
            return e.isValidSegmentUrl(t) ? this._segmentToId[t] : this._bufferData.get(t).id
        }, t.isFinal = function(e) {
            return this._bufferData.get(e).final
        }, t.addSegment = function(t, {
            identifier: n = null,
            isFinalSegment: r = !1,
            loadOnly: i = !1,
            priority: o = 0,
            includeWithBandwidthChecks: s = !0,
            excludeConnectTime: a = !1,
            timeout: u = null,
            size: c = null
        } = {}) {
            return this._needInitSegment && this.getInitSegment(), e.isValidSegmentUrl(t) ? (this._segmentToId[t] = n || t, this.fire("queued", this.getIdForSegment(t)), this._fetcher.add({
                url: t.url || t,
                byteRange: t.byteRange,
                id: this.getIdForSegment(t),
                stream: this,
                includeWithBandwidthChecks: s,
                excludeConnectTime: a,
                isInitSegmentRequest: !1,
                priority: o,
                timeout: u,
                size: c
            }).then(e => {
                this._bufferData.set(e, {
                    id: n || t,
                    final: r
                }), this._readyToAppend.push(e), this.fire("bufferqueueadd", this.getIdForSegment(t)), i || this.fire("segmentadd")
            })) : (this._bufferData.set(t, {
                id: n,
                final: r
            }), this._readyToAppend.push(t), this.fire("bufferqueueadd", n), Promise.resolve())
        }, t.clear = function() {
            this._readyToAppend = []
        }, t.abort = function() {
            try {
                const e = this;
                return function(t, n) {
                    var r = function() {
                        if (e._needInitSegment) return function(e) {
                            if (e && e.then) return e.then(ls)
                        }(function(t, n) {
                            try {
                                var r = function(e, t) {
                                    return e && e.then ? e.then(ls) : Promise.resolve()
                                }(e.getInitSegment())
                            } catch (Vd) {
                                return
                            }
                            return r && r.then ? r.then(void 0, n) : r
                        }(0, (function(e) {})))
                    }();
                    return r && r.then ? r.then(n) : n()
                }(0, (function() {
                    e._fetcher.abort(e)
                }))
            } catch (Vd) {
                return Promise.reject(Vd)
            }
        }, t.hasNextSegment = function() {
            return this._readyToAppend.length > 0
        }, t.getNextSegment = function() {
            return 0 === this._readyToAppend.length ? null : this._readyToAppend.shift()
        }, t.getInitSegment = function() {
            const t = "object" == typeof this._initSegment && "url" in this._initSegment ? this._initSegment.url : this._initSegment;
            return t ? (this._needInitSegment = !1, e.isValidSegmentUrl(t) ? this._fetcher.add({
                url: t,
                byteRange: this._initSegment.byteRange,
                id: null,
                stream: this,
                isInitSegmentRequest: !0,
                priority: 0
            }).then(e => (this._initSegment = e, this._initSegment)) : Promise.resolve(this._initSegment)) : Promise.resolve(null)
        }, ue(e, [{
            key: "codec",
            get: function() {
                return this._codec
            },
            set: function(e) {
                this._codec = e
            }
        }, {
            key: "index",
            get: function() {
                return this._index
            },
            set: function(e) {
                this._index = e
            }
        }, {
            key: "pendingFetches",
            get: function() {
                return this._fetcher.pendingFetches
            }
        }]), e
    }(),
    hs = function() {
        function e(e) {
            this._video = e, this._running = !1, this._droppedFramesTimeout = null, this._droppedFrameData = {}, this._decodedFrameData = {}, this._droppedFrames = 0, this._decodedFrames = 0, this._streamIndex = "default", this._attached = !1, this.bound = {
                startCheckingDroppedFrames: this._startCheckingDroppedFrames.bind(this),
                stopCheckingDroppedFrames: this._stopCheckingDroppedFrames.bind(this),
                handleVisibilityChanged: this._handleVisibilityChanged.bind(this)
            }
        }
        var t = e.prototype;
        return t.init = function() {
            this._attachEvents()
        }, t.start = function() {
            return this._startCheckingDroppedFrames(), this
        }, t.stop = function() {
            return this._stopCheckingDroppedFrames(), this
        }, t.destroy = function() {
            this._stopCheckingDroppedFrames(), this._removeEvents()
        }, t.getDroppedFrameRate = function(e, t, n = "average") {
            const r = this._droppedFrameData[t];
            if (!r) return 0;
            if (r.length < e) return 0;
            const i = r.slice(-e);
            return "median" === n ? Zo(i) : Jo(i)
        }, t.getDroppedFrameTotal = function() {
            return {
                dropped: this._getTotalDroppedFrames(),
                total: this._getTotalFrames()
            }
        }, t._attachEvents = function() {
            this._attached || (this._video.addEventListener("playing", this.bound.startCheckingDroppedFrames), this._video.addEventListener("pause", this.bound.stopCheckingDroppedFrames), this._video.addEventListener("ended", this.bound.stopCheckingDroppedFrames), document.addEventListener("visibilitychange", this.bound.handleVisibilityChanged), this._attached = !0)
        }, t._removeEvents = function() {
            this._video.removeEventListener("playing", this.bound.startCheckingDroppedFrames), this._video.removeEventListener("pause", this.bound.stopCheckingDroppedFrames), this._video.removeEventListener("ended", this.bound.stopCheckingDroppedFrames), document.removeEventListener("visibilitychange", this.bound.handleVisibilityChanged), this._attached = !1
        }, t._startCheckingDroppedFrames = function() {
            this._running = !0, this._checkDroppedFrames()
        }, t._stopCheckingDroppedFrames = function() {
            this._running = !1
        }, t._checkDroppedFrames = function() {
            if (!this._running || null === this._streamIndex) return;
            if (Bt.browser.safari && (document.hidden || "hidden" === document.visibilityState)) return;
            clearTimeout(this._droppedFramesTimeout);
            const e = this._getTotalDroppedFrames(),
                t = e - this._droppedFrames;
            this._droppedFrames = e;
            const n = this._getTotalDecodedFrames(),
                r = n - this._decodedFrames;
            this._decodedFrames = n, this._droppedFrameData[this._streamIndex] || (this._droppedFrameData[this._streamIndex] = []), this._decodedFrameData[this._streamIndex] || (this._decodedFrameData[this._streamIndex] = []), this._droppedFrameData[this._streamIndex].length > 100 && this._droppedFrameData[this._streamIndex].shift(), this._decodedFrameData[this._streamIndex].length > 100 && this._decodedFrameData[this._streamIndex].shift(), this._droppedFrameData[this._streamIndex].push(t), this._decodedFrameData[this._streamIndex].push(r), this._droppedFramesTimeout = setTimeout(() => {
                this._checkDroppedFrames()
            }, 1e3)
        }, t._handleVisibilityChanged = function() {
            !Bt.browser.safari || document.hidden && "hidden" === document.visibilityState || this._checkDroppedFrames()
        }, t._getTotalDroppedFrames = function() {
            return "function" == typeof this._video.getVideoPlaybackQuality ? this._video.getVideoPlaybackQuality().droppedVideoFrames : this._video.webkitDroppedFrameCount || 0
        }, t._getTotalFrames = function() {
            return "function" == typeof this._video.getVideoPlaybackQuality ? this._video.getVideoPlaybackQuality().totalVideoFrames : this._video.webkitDecodedFrameCount || 0
        }, t._getTotalDecodedFrames = function() {
            if ("function" == typeof this._video.getVideoPlaybackQuality) {
                const e = this._video.getVideoPlaybackQuality();
                return e.totalVideoFrames - e.droppedVideoFrames - e.corruptedVideoFrames
            }
            return this._video.webkitDecodedFrameCount || 0
        }, ue(e, [{
            key: "streamIndex",
            get: function() {
                return this._streamIndex
            },
            set: function(e) {
                this._streamIndex = e
            }
        }]), e
    }(),
    fs = function() {
        function e(e, t = {}) {
            this._video = e, this._options = t, dr(this);
            const {
                fetcherTimeout: n = 0,
                fetcherRetryAbortErrors: r = !0
            } = this._options;
            this._frameDropper = new hs(e), this._mediaSource = new MediaSource, this._fetcher = new us({
                parallel: 1,
                timeout: n,
                retryAbortErrors: r
            }), this._buffersForCodec = {}, this._buffers = [], this._readyPromiseResolve = null, this._boundHandleSourceOpen = this._handleSourceOpen.bind(this), this._attachEvents()
        }
        var t = e.prototype;
        return t.switchTo = function(e) {
            return 1 === this._buffers.length && this.video.switchTo(e)
        }, t.getCurrentSpeed = function({
            type: e = "average",
            howMany: t = 10,
            weights: n = [],
            percentile: r = null
        } = {}) {
            return "harmonicAverage" === e ? us.getHarmonicAverageSpeed(t) : "average" === e ? us.getAverageSpeed(t, n) : "median" === e ? us.getMedianSpeed(t) : us.getPercentileSpeed(t, r)
        }, t.getVolatilityScaler = function(e) {
            return us.getVolatilityScaler(e)
        }, t.getResponseSpeeds = function() {
            return us.getResponseSpeeds()
        }, t.getFailedSegments = function() {
            return us.getFailedSegments()
        }, t.getSuccessfulSegments = function() {
            return us.getSuccessfulSegments()
        }, t.getDroppedFrameRate = function(e, t = this.activeStreamIndex, n = "average") {
            return this._frameDropper.getDroppedFrameRate(e, t, n)
        }, t.getDroppedFrameTotal = function() {
            return this._frameDropper.getDroppedFrameTotal()
        }, t.clear = function() {
            this._buffers.forEach(e => e.clear())
        }, t.initFrameDropper = function() {
            this._frameDropper.init()
        }, t.streamIndexAtTime = function(e, t) {
            return this._buffersForCodec[t].streamIndexAtTime(e) ? this._buffersForCodec[t].streamIndexAtTime(e).stream : null
        }, t.removeBuffer = function(e = 0, t = this._video.duration) {
            if (e >= (t = t || 0)) return Promise.resolve();
            const n = this._buffers.map(n => n.remove(e, t));
            return Promise.all(n)
        }, t.setLiveSeekableRange = function(e, t) {
            var n;
            "open" === this._mediaSource.readyState && (null == (n = this._mediaSource) || n.setLiveSeekableRange(e, t))
        }, t.addStream = function(e, t) {
            const n = this._getCodecType(e);
            if (!this._buffersForCodec[n]) {
                const t = new cs(this, n);
                this._buffersForCodec[n] = t, this._buffers.push(t), this.readyPromise.then(() => {
                    let r;
                    try {
                        r = this._mediaSource.addSourceBuffer(e)
                    } catch (Vd) {
                        if (22 !== Vd.code) return void this.fire("srcnotsupported", Vd);
                        r = this._buffersForCodec[n]
                    }
                    if (this._options.duration) {
                        const e = .1;
                        r.appendWindowEnd = this._options.duration + e
                    }
                    t.sourceBuffer = r
                }).catch(e => {}), ["appendbufferstart", "appendbufferend", "streamchange", "streamchangestart", "initialbufferstart", "quotaexceedederror"].forEach(e => {
                    t.on(e, t => {
                        this.fire(e, t)
                    })
                })
            }
            const r = new ds(t, e, this._fetcher);
            return ["queued", "bufferqueueadd"].forEach(e => {
                r.on(e, t => {
                    this.fire(e, t)
                })
            }), this._buffersForCodec[n].addStream(r), r
        }, t.checkEndOfStream = function() {
            if (!this._buffers.every(e => e.hasAppendedFinalSegment())) return;
            const e = () => {
                this._video.removeEventListener("timeupdate", e), this._buffers.every(e => e.isTimeInBuffer(this._video.currentTime)) && this.endOfStream()
            };
            this._video.addEventListener("timeupdate", e)
        }, t.abortFetches = function() {
            this._fetcher.abort()
        }, t.endOfStream = function() {
            "open" === this._mediaSource.readyState && (this._sourceBuffersAreUpdating() || (this._mediaSource.endOfStream(), this.fire("endofstream")))
        }, t.destroy = function() {
            this.clear(), this._removeEventListeners(), this.off(), this._frameDropper.destroy(), this._fetcher.abort(), this._video.src && (this._video.removeAttribute("src"), this._video.load())
        }, t._attachEvents = function() {
            this.readyPromise = new Promise((e, t) => {
                this._readyPromiseResolve = e, this._mediaSource.addEventListener("sourceopen", this._boundHandleSourceOpen)
            }), ["downloadstart", "downloadend", "downloadabort", "downloaderror", "downloadtimeout", "progress"].forEach(e => {
                this._fetcher.on(e, (...t) => {
                    this.fire.apply(this, [e].concat(t))
                })
            })
        }, t._sourceBuffersAreUpdating = function() {
            for (let e = 0; e < this._mediaSource.sourceBuffers.length; e++)
                if (this._mediaSource.sourceBuffers[e].updating) return !0;
            return !1
        }, t._handleSourceOpen = function() {
            URL.revokeObjectURL(this._video.src), this._mediaSource.removeEventListener("sourceopen", this._boundHandleSourceOpen), this._options.duration && (this._mediaSource.duration = this._options.duration, this.fire("durationset")), this._readyPromiseResolve()
        }, t._removeEventListeners = function() {
            this._buffers.forEach(e => e.removeEventListeners())
        }, t._getCodecType = function(e) {
            return 0 === e.indexOf("audio") ? "audio" : "video"
        }, ue(e, [{
            key: "mediaSource",
            get: function() {
                return this._mediaSource
            }
        }, {
            key: "pendingFetches",
            get: function() {
                return this._fetcher.pendingFetches
            }
        }, {
            key: "streams",
            get: function() {
                return 1 === this._buffers.length && this.video.streams
            }
        }, {
            key: "activeStreamIndex",
            get: function() {
                return 1 === this._buffers.length && this.video.activeStreamIndex
            }
        }, {
            key: "video",
            get: function() {
                return !!this._buffersForCodec.video && this._buffersForCodec.video
            }
        }, {
            key: "audio",
            get: function() {
                return !!this._buffersForCodec.audio && this._buffersForCodec.audio
            }
        }]), e
    }(),
    _s = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t) || this)._options = n, r.blacklisted = [], r.whitelisted = [], r.MAX_LOADABLE_SEGMENTS_AUTO = 3, r.MAX_LOADABLE_SEGMENTS_LOCKED = 15, r.SEGMENT_DURATION = 6, r
        }
        he(t, e), ue(t, [{
            key: "displayName",
            get: function() {
                return "MediaSource"
            }
        }]);
        var n = t.prototype;
        return n.isTimeInBuffer = function(e, t, n) {
            return this._timesAreInRange(e, e, t, n, 1)
        }, n.getDistanceFromBuffer = function(e, t) {
            let n = e;
            for (let r = 0; r < t.length; r++)
                if (t.start(r) <= e && t.end(r) >= e) {
                    n = t.end(r);
                    break
                }
            return n - e
        }, n.blacklist = function(e) {
            this.blacklisted[e] = 1
        }, n.lock = function(e = []) {
            this.whitelisted = e
        }, n.filterStreams = function(e, t, n, r = null) {
            const i = [];
            let o, s = !1;
            for (let a = 0; a < e.length; a++)
                if (o && o[0] === e[a].width && o[1] === e[a].height) i.push(e[a]);
                else {
                    if (s) break;
                    this.blacklisted[a] && -1 === this.whitelisted.indexOf(a) || this.whitelisted.length && -1 === this.whitelisted.indexOf(a) || (this.whitelisted.length ? i.push(e[a]) : (this._getScaleFromDimensions(t, n, e[a].width, e[a].height, r) >= (n < 1e3 / (window.devicePixelRatio || 1) ? 1.75 : 1) && (s = !0), i.push(e[a]), o = [e[a].width, e[a].height]))
                }
            return i
        }, n.getCurrentSpeed = function() {
            let e = "average",
                t = 3,
                n = [1, 2, 5];
            return this._options.tests && this._options.tests.harmonic_average && this._options.tests.harmonic_average.group && (e = "harmonicAverage", t = this._getMaxLoadableSegmentsAuto(), n = []), this.scanner.sorcerer.getCurrentSpeed({
                type: e,
                howMany: t,
                weights: n
            })
        }, n.shouldUseSurroundSound = function(e, t) {
            return "240p" !== e[t].quality
        }, n.getAudioIndexFromVideo = function(e, t, n) {
            if (0 === t.length) return !1;
            if (!e[n]) return 0;
            const r = t.filter(({
                channels: e
            }) => e > 2);
            if (r.length > 0 && this.shouldUseSurroundSound(e, n)) {
                const e = r[r.length - 1];
                return t.indexOf(e)
            }
            return t.length > 1 && 0 === n && e[n].height <= 360 && e.length > 1 ? "mp4a.40.2" === t[0].codecs && t[0].bitrate < 8e4 && "240p" !== e[n].quality ? 1 : 0 : t.length - 1
        }, n._getVisibleDimensions = function(e, t, n, r) {
            const i = n / r,
                o = e - t * i,
                s = t - e / i;
            let a = e - o,
                u = t - s;
            return o > 0 && (u = t), s > 0 && (a = e), [a, u]
        }, n._getScaleFromDimensions = function(e, t, n, r, i = null) {
            const o = this._getVisibleDimensions(e, t, n, r);
            let s = n * r;
            i && (s *= i);
            const a = window.devicePixelRatio || 1;
            return s / (o[0] * o[1] * a * a)
        }, n._getMaxLoadableSegmentsAuto = function() {
            const e = Co(this._options, "lookahead_count");
            return e && e.group && e.data.count ? e.data.count : e && e.data.segment_lookahead_count ? e.data.segment_lookahead_count : this.MAX_LOADABLE_SEGMENTS_AUTO
        }, n._getSecondsToLoadAhead = function(e, t, n) {
            const r = n && n.bitrate > 11e6;
            return 1 === this.whitelisted.length ? r ? 30 : this.MAX_LOADABLE_SEGMENTS_LOCKED * this.SEGMENT_DURATION : this._getMaxLoadableSegmentsAuto() * this.SEGMENT_DURATION
        }, n._timesAreInRange = function(e, t, n, r, i = 0) {
            if (!n) return !1;
            t = Math.min(t, r);
            for (let o = 0; o < n.length; o++) {
                const r = n.start(o),
                    s = n.end(o),
                    a = Lo(r) - i,
                    u = Lo(s) + i;
                if (a <= e && u >= t) {
                    if (t < r || e > s) continue;
                    return !0
                }
            }
            return !1
        }, n._hasSeparateStreams = function(e) {
            return e.video.length > 0 && e.audio.length > 0
        }, n._isSegmentInBuffer = function(e, t, n, r) {
            let i = 1;
            return this._hasSeparateStreams(r) && (i = .1), this._timesAreInRange(e.start, e.end, t, n, i)
        }, t
    }(function() {
        function e(e) {
            this.scanner = e, this.STREAM_TYPE_VIDEO = "video", this.STREAM_TYPE_AUDIO = "audio"
        }
        ue(e, [{
            key: "displayName",
            get: function() {
                return "Brain"
            }
        }]);
        var t = e.prototype;
        return t.destroy = function() {}, t.shouldPowerUp = function(e, t) {
            return !1
        }, t.shouldPowerDown = function(e, t) {
            return !1
        }, t.canPowerUp = function(e, t) {
            return 1 !== e.length && t < e.length - 1
        }, t.canPowerDown = function(e, t) {
            return 1 !== e.length && t > 0
        }, t.filterStreams = function(e) {
            return e
        }, e
    }());
let ps = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this).BANDWIDTH_UPSWITCH_THRESHOLD = .85, r.BANDWIDTH_DOWNSWITCH_THRESHOLD = .9, r.DEFAULT_TIMEOUT = 8e3, r.SEGMENT_RELATIVE_TIMEOUT_RATIO = 4 / 3, r.MINIMUM_TIMEOUT = 1e3, r.FRAME_DROP_WINDOW_SECONDS = 10, r
        }
        he(t, e), ue(t, [{
            key: "displayName",
            get: function() {
                return "Skyfire"
            }
        }]);
        var n = t.prototype;
        return n.shouldPowerUp = function(e, t, n) {
            n && this._options.startingBandwidthThreshold && (this.BANDWIDTH_UPSWITCH_THRESHOLD = this._options.startingBandwidthThreshold);
            let r = e.indexOf(t);
            if (-1 === r && (r = 0), !this.canPowerUp(e, r)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const i = this.getCurrentSpeed();
            if (!i) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const o = this._getStreamFromSpeed(i, this.BANDWIDTH_UPSWITCH_THRESHOLD, e);
            return o === r || !n && o > r && Fe(this.scanner.currentTime, this.scanner._video.buffered) < 1.5 * this.SEGMENT_DURATION ? Promise.resolve({
                index: !1,
                reasonForSwitch: null
            }) : Promise.resolve({
                index: o,
                reasonForSwitch: 3
            })
        }, n.shouldPowerDown = function(e, t) {
            const n = e.indexOf(t);
            if (-1 === n) {
                const t = this.isTimeInBuffer(this.scanner._video.duration, this.scanner._video.buffered, this.scanner._video.duration);
                return this.whitelisted.length || this.blacklisted.length || !t ? Promise.resolve({
                    index: e.length - 1,
                    reasonForSwitch: 6
                }) : Promise.resolve({
                    index: !1,
                    reasonForSwitch: null
                })
            }
            if (!this.canPowerDown(e, n)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const r = this.getCurrentSpeed();
            if (!r) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            if (this.hasTooManyDroppedFrames(n, t, this._options.droppedFrameSwitchPercent)) return this.blacklist(n), Promise.resolve({
                index: n - 1,
                reasonForSwitch: 2
            });
            const i = this._getStreamFromSpeed(r, this.BANDWIDTH_DOWNSWITCH_THRESHOLD, e);
            return i === n ? Promise.resolve({
                index: !1,
                reasonForSwitch: null
            }) : Promise.resolve({
                index: i,
                reasonForSwitch: 1
            })
        }, n.hasTooManyDroppedFrames = function(e, t, n) {
            return this.scanner.sorcerer.getDroppedFrameRate(this.FRAME_DROP_WINDOW_SECONDS, e, "median") / t.framerate * 100 >= n
        }, n.getTimeEstimateToLoad = function(e, t) {
            if (null === t) return 3;
            const n = t.segments[e],
                r = n.end - n.start,
                i = this.getCurrentSpeed();
            return r * (t.bitrate + t.audioBitrate) / i * 1.3
        }, n.canPlayFromTimeInStream = function(e, t) {
            if (!this.isTimeInBuffer(e, this.scanner._video.buffered, this.scanner._video.duration)) return !1;
            if (!t) return !1;
            const n = this.getSegmentsToLoad(!1, this.STREAM_TYPE_VIDEO, t);
            if (0 === n.length) return !0;
            const r = Fe(e, this.scanner._video.buffered);
            return this.getTimeEstimateToLoad(n[0], t) < r
        }, n.getSegmentsToLoad = function(e, t = this.STREAM_TYPE_VIDEO, n) {
            const r = this.scanner._video,
                i = this.scanner.currentTime,
                o = [],
                s = i + this._getSecondsToLoadAhead(i, r.duration, n),
                a = this.scanner.sorcerer[t].activeStreamIndex,
                u = this.scanner._streams[t][a];
            if (!u) return o;
            const c = this.scanner.sorcerer[t].sourceBuffer;
            let l = null;
            c && (l = c.buffered);
            for (let d = 0; d < u.segments.length; d++) {
                const t = u.segments[d];
                if (t.end < i || t.start > s) continue;
                const n = i >= t.start && i < t.end,
                    r = this._isSegmentInBuffer(t, l, this.scanner._video.duration, this.scanner._streams);
                !e && r || e && r && n || (n || s >= t.start) && o.push(d)
            }
            return o
        }, n.getSegmentRelativeTimeout = function(e, t, n) {
            var r;
            const i = null == t ? void 0 : t.bitrate,
                o = null == (r = e[0]) ? void 0 : r.bitrate;
            if (!i || !o || !n) return this.DEFAULT_TIMEOUT;
            if (i === o) return this.DEFAULT_TIMEOUT;
            const s = n * this.SEGMENT_RELATIVE_TIMEOUT_RATIO;
            return Math.max(this.MINIMUM_TIMEOUT, Math.min(this.DEFAULT_TIMEOUT, s))
        }, n._getStreamFromSpeed = function(e, t, n) {
            let r = 0;
            for (let i = r; i < n.length; i++) e * t > n[i].bitrate + n[i].audioBitrate && (r = i);
            return r
        }, t
    }(_s),
    ms = function(e) {
        function t(t, n = {}) {
            var r, i, o;
            return (o = e.call(this, t, n) || this)._mimirURL = n.tests.ml_brain.data.mimir_url, o._geolocation = n.tests.ml_brain.data.geolocation, o._segmentToStreamDecisionMap = {}, o._pendingModelFetch = null, o._prevBufferDurations = [], o._prevSegmentDownloadTimes = [], o._prevSegmentByteLengths = [], o._prevDistancesFromBuffer = [], o._prevSegmentStreamIndexes = [], o._prevRemainingSegmentCounts = [], o._prevTTFBs = [], o._prevSegmentTimeouts = [], o._prevSegmentRequestIDs = [], o._prevModelInputs = null, o._lastModelResponseTime = 0, o._videoSegInProgress = null, o._audioSegInProgress = null, o._scrubInProgress = !1, o._hasPreloaded = !1, o._networkIssueCount = 0, o._audioStreams = [], o._videoBufferAppendCount = 0, o._scannerEventsHandlers = [
                [po.DOWNLOAD_START, o._handleDownloadStart.bind(ye(o))],
                [po.DOWNLOAD_END, o._handleDownloadEnd.bind(ye(o))],
                [po.APPEND_BUFFER_END, o._handleAppendBufferEnd.bind(ye(o))],
                [po.DOWNLOAD_TIMEOUT, o._handleDownloadTimeout.bind(ye(o))]
            ], o._beforeRequestHooks = [o._beforeSegmentQualityFetch], o._afterResponseHooks = [o._afterSegmentQualityFetch], o._scannerEventsHandlers.forEach(e => {
                o.scanner.on(e[0], e[1])
            }), (r = se.hooks.beforeRequest).push.apply(r, Ee(o._beforeRequestHooks)), (i = se.hooks.afterResponse).push.apply(i, Ee(o._afterResponseHooks)), o
        }
        he(t, e), ue(t, [{
            key: "displayName",
            get: function() {
                return "ML"
            }
        }]);
        var n = t.prototype;
        return n.destroy = function() {
            this._scannerEventsHandlers.forEach(e => {
                this.scanner.off(e[0], e[1])
            }), this._beforeRequestHooks.forEach(e => {
                const t = se.hooks.beforeRequest,
                    n = t.indexOf(e);
                n >= 0 && t.splice(n, 1)
            }), this._afterResponseHooks.forEach(e => {
                const t = se.hooks.afterResponse,
                    n = t.indexOf(e);
                n >= 0 && t.splice(n, 1)
            })
        }, n._handleDownloadStart = function({
            identifier: e
        }) {
            e.type === this.STREAM_TYPE_VIDEO && (this._videoSegInProgress = {
                index: e.segment,
                streamIndex: e.stream,
                complete: null
            }), e.type === this.STREAM_TYPE_AUDIO && (this._audioSegInProgress = {
                index: e.segment,
                streamIndex: e.stream,
                complete: null
            })
        }, n._segmentInProgressMatchesIdentifer = function(e, t = this.STREAM_TYPE_VIDEO) {
            return t === this.STREAM_TYPE_VIDEO ? null !== this._videoSegInProgress && this._videoSegInProgress.index === e.segment && this._videoSegInProgress.streamIndex === e.stream : t === this.STREAM_TYPE_AUDIO && null !== this._audioSegInProgress && this._audioSegInProgress.index === e.segment
        }, n._isSegmentInProgress = function() {
            return null !== this._videoSegInProgress || null !== this._audioSegInProgress
        }, n._handleDownloadEnd = function({
            identifier: e,
            data: {
                request: t,
                response: n
            }
        }) {
            const r = t.data.duration / 1e3,
                i = n.body.byteLength;
            let o = null;
            n.perfTimings && (o = n.perfTimings.responseStart - n.perfTimings.connectStart), e.type === this.STREAM_TYPE_VIDEO && this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_VIDEO) && (this._videoSegInProgress.complete = {
                downloadTime: r,
                byteLength: i,
                ttfb: o,
                uuid: t.data.uuid
            }, this._hasPreloaded || (this._updateModelInputData({
                streamIndex: e.stream,
                segmentIndex: e.segment - 1,
                segmentDLTime: r,
                segmentLength: i,
                ttfb: o,
                didSegmentTimeout: !1
            }), this._hasPreloaded = !0)), e.type === this.STREAM_TYPE_AUDIO && this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_AUDIO) && (this._audioSegInProgress.complete = {
                downloadTime: r,
                byteLength: i,
                ttfb: o,
                uuid: t.data.uuid
            })
        }, n._handleDownloadTimeout = function({
            identifier: e,
            data: t
        }) {
            const n = (t.timeoutMs || 8e3) / 1e3,
                r = e.segment,
                i = this.scanner._streams[e.type][e.stream].segments[r].size;
            delete this._segmentToStreamDecisionMap[r], this._updateModelInputData({
                streamIndex: e.stream,
                segmentIndex: r,
                segmentDLTime: n,
                segmentLength: i,
                ttfb: .1,
                didSegmentTimeout: !0
            })
        }, n._clearInProgress = function() {
            this._videoSegInProgress = null, this._audioSegInProgress = null
        }, n._handleAppendBufferEnd = function({
            identifier: e
        }) {
            if (e.type === this.STREAM_TYPE_VIDEO && (this._videoBufferAppendCount += 1), this._hasSeparateStreams(this.scanner._streams)) {
                if (this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_VIDEO) && this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_AUDIO) && null !== this._videoSegInProgress.complete && null !== this._audioSegInProgress.complete) {
                    const t = this._videoSegInProgress.complete,
                        n = this._audioSegInProgress.complete,
                        r = t.downloadTime + n.downloadTime,
                        i = t.byteLength + n.byteLength,
                        o = t.ttfb + n.ttfb;
                    this._updateModelInputData({
                        streamIndex: e.stream,
                        segmentIndex: e.segment - 1,
                        segmentDLTime: r,
                        segmentLength: i,
                        ttfb: o,
                        segmentRequestID: t.uuid,
                        didSegmentTimeout: !1
                    }), this._clearInProgress()
                }
            } else if (this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_VIDEO) && null !== this._videoSegInProgress.complete) {
                const t = this._videoSegInProgress.complete;
                this._updateModelInputData({
                    streamIndex: e.stream,
                    segmentIndex: e.segment - 1,
                    segmentDLTime: t.downloadTime,
                    segmentLength: t.byteLength,
                    ttfb: t.ttfb,
                    segmentRequestID: t.uuid,
                    didSegmentTimeout: !1
                }), this._clearInProgress()
            }
        }, n._updateModelInputData = function(e) {
            const {
                streamIndex: t,
                segmentIndex: n,
                segmentDLTime: r,
                segmentLength: i,
                ttfb: o,
                segmentRequestID: s,
                didSegmentTimeout: a
            } = e, u = this.scanner._streams.video[t], c = this.scanner.sorcerer.video.sourceBuffer;
            if (!c || !u) return;
            this._prevBufferDurations.push(this.getTotalBufferDuration()), this._prevDistancesFromBuffer.push(Fe(this.scanner.currentTime, c.buffered)), this._prevSegmentStreamIndexes.push(t), this._prevSegmentDownloadTimes.push(r), this._prevSegmentByteLengths.push(i);
            const l = o + this._lastModelResponseTime;
            this._prevTTFBs.push(l), this._prevRemainingSegmentCounts.push(u.segments.length - n), this._prevSegmentRequestIDs.push(s), this._prevSegmentTimeouts.push(Number(a))
        }, n.handleScrubEnd = function(e) {
            const t = this._prevSegmentDownloadTimes.length,
                n = t ? this._prevSegmentDownloadTimes[t - 1] : 0,
                r = this._prevSegmentByteLengths.length,
                i = r ? this._prevSegmentByteLengths[r - 1] : 0,
                o = this._prevTTFBs.length,
                s = o ? this._prevTTFBs[o - 1] : 0,
                a = this.scanner._streams.video[e],
                u = this._getFirstLookaheadSegmentNotInBuffer(a),
                c = u ? u.index : this._prevRemainingSegmentCounts[this._prevRemainingSegmentCounts.length - 1],
                l = this._prevSegmentRequestIDs.length ? this._prevSegmentRequestIDs[this._prevSegmentRequestIDs.length - 1] : "";
            this._updateModelInputData({
                streamIndex: e,
                segmentIndex: c,
                segmentDLTime: n,
                segmentLength: i,
                ttfb: s,
                segmentRequestID: l,
                didSegmentTimeout: !1
            })
        }, n.shouldPowerUp = function(e, t, n) {
            let r = e.indexOf(t);
            if (-1 === r && (r = 0), 1 === this.whitelisted.length) return this.whitelisted[0] > r ? Promise.resolve(0) : Promise.resolve(!1);
            if (1 === this.scanner._streams.video.length) return Promise.resolve(!1);
            if (!this.canPowerUp(e, r)) return Promise.resolve(!1);
            if (this.scrubInProgress) return Promise.resolve(!1);
            const i = this._getFirstLookaheadSegmentNotInBuffer(t);
            if (null === i) return Promise.resolve(!1);
            const o = {
                    index: i.index,
                    streamIndex: i.streamIndex
                },
                s = i.index;
            if (null !== this._pendingModelFetch && this._pendingModelFetch.index === o.index && this._pendingModelFetch.streamIndex === o.streamIndex) return Promise.resolve(!1);
            if (!(s in this._segmentToStreamDecisionMap)) return this._fetchSegmentQualityFromModel(o, e, t).then(e => e > r && e).catch(console.error);
            const a = this._segmentToStreamDecisionMap[s];
            return a > r ? Promise.resolve(a) : Promise.resolve(!1)
        }, n.shouldPowerDown = function(e, t) {
            const n = e.indexOf(t);
            if (-1 === n) {
                const t = this.isTimeInBuffer(this.scanner._video.duration, this.scanner._video.buffered, this.scanner._video.duration);
                return this.whitelisted.length || this.blacklisted.length || !t ? Promise.resolve(e.length - 1) : Promise.resolve(!1)
            }
            if (1 === this.whitelisted.length) return this.whitelisted[0] < n ? Promise.resolve(0) : Promise.resolve(!1);
            if (1 === this.scanner._streams.video.length) return Promise.resolve(!1);
            if (!this.canPowerDown(e, n)) return Promise.resolve(!1);
            if (this.scrubInProgress) return Promise.resolve(!1);
            const r = this._getFirstLookaheadSegmentNotInBuffer(t);
            if (null === r) return Promise.resolve(!1);
            const i = {
                    index: r.index,
                    streamIndex: r.streamIndex
                },
                o = r.index;
            if (null !== this._pendingModelFetch && this._pendingModelFetch.index === i.index && this._pendingModelFetch.streamIndex === i.streamIndex) return Promise.resolve(!1);
            if (!(o in this._segmentToStreamDecisionMap)) return this._fetchSegmentQualityFromModel(i, e, t).then(e => e < n && e).catch(console.error);
            const s = this._segmentToStreamDecisionMap[o];
            return s < n ? Promise.resolve(s) : Promise.resolve(!1)
        }, n.getTotalBufferDuration = function() {
            const e = this.scanner.sorcerer.video.sourceBuffer;
            let t = 0;
            if (!e) return t;
            for (let n = 0; n < e.buffered.length; n++) {
                const r = e.buffered.start(n);
                t += e.buffered.end(n) - r
            }
            return t
        }, n.canPlayFromTimeInStream = function(e, t) {
            return !!this.isTimeInBuffer(e, this.scanner._video.buffered, this.scanner._video.duration) && !!t
        }, n._normalizeModelInput = function(e, t = 0) {
            let n = e.slice(0);
            if (n.length < 8) {
                const e = 8 - n.length;
                for (let r = 0; r < e; r++) n.unshift(t);
                return n
            }
            return n.slice(n.length - 8, n.length)
        }, n._getModelInputs = function(e, t) {
            const n = {
                    240: 1,
                    360: 2,
                    480: 3,
                    540: 3,
                    720: 4,
                    1080: 5,
                    1440: 6,
                    2160: 7
                },
                r = {
                    240: 0,
                    360: 1,
                    480: 2,
                    540: 2,
                    720: 3,
                    1080: 4,
                    1440: 5,
                    2160: 6
                };
            let i = [0, 0, 0, 0, 0, 0, 0, 0],
                o = [0, 0, 0, 0, 0, 0, 0, 0],
                s = [0, 0, 0, 0, 0, 0, 0, 0];
            this._videoBufferAppendCount < 3 && (s[s.length - 1] = 1);
            for (let u = 0; u < t.length; u++) {
                const s = t[u],
                    a = parseInt(s.quality, 10);
                a in n && (i[n[a]] = 1);
                const c = this.getAudioIndexFromVideo(t, this._audioStreams, u);
                let l = null;
                "number" == typeof c && (l = this._audioStreams[c]);
                for (let t = 0; t < s.segments.length; t++)
                    if (t === e && a in r) {
                        const e = s.segments[t].size;
                        let n = 0;
                        l && l.segments[t] && (n = l.segments[t].size), o[r[a]] = e + n
                    }
            }
            const a = this._prevSegmentStreamIndexes.map(e => parseInt(this.scanner._streams.video[e].quality, 10));
            return {
                availableQualities: i,
                nextChunkSizes: o,
                lastBufferSizes: this._normalizeModelInput(this._prevBufferDurations),
                lastChunkDownloadTimes: this._normalizeModelInput(this._prevSegmentDownloadTimes),
                lastTtfb: this._normalizeModelInput(this._prevTTFBs, .1),
                lastChunkSizes: this._normalizeModelInput(this._prevSegmentByteLengths),
                lastChunkQualities: this._normalizeModelInput(a),
                numRemainingChunks: this._normalizeModelInput(this._prevRemainingSegmentCounts),
                lastPlaybackHeads: this._normalizeModelInput(this._prevDistancesFromBuffer),
                geolocation: [
                    [this._geolocation]
                ],
                downloadTimeout: this._normalizeModelInput(this._prevSegmentTimeouts),
                videoStart: s
            }
        }, n._getStreamQualityFromModelOutput = function(e, t) {
            let n = -1,
                r = -1;
            for (let o = 0; o < e.length; o++) e[o] > r && (r = e[o], n = o);
            let i = [];
            for (let o = 0; o < t.length; o++) 1 === t[o] && i.push(o);
            return {
                1: 240,
                2: 360,
                3: 540,
                4: 720,
                5: 1080,
                6: 1440,
                7: 2160
            }[i[n]]
        }, n._getStreamIndexFromQuality = function(e, t) {
            for (let n = 0; n < t.length; n++) {
                const r = parseInt(t[n].quality, 10);
                if (r === e) return n;
                if (480 === r && 540 === e) return n
            }
            return 0
        }, n._beforeSegmentQualityFetch = function(e) {
            e.startTime = Io()
        }, n._afterSegmentQualityFetch = function(e, t) {
            return t.duration = wo(e.startTime), t
        }, n._fetchSegmentQualityFromModel = function(e, t, n) {
            const r = this._getModelInputs(e.index, t);
            return this._pendingModelFetch = e, pt.post(this._mimirURL, {
                json: {
                    inputs: r
                },
                timeout: 2e3
            }).then(n => {
                this._lastModelResponseTime = n.perfTimings.duration;
                const i = JSON.parse(n.body),
                    o = this._getStreamQualityFromModelOutput(i.outputs[0], r.availableQualities),
                    s = this._getStreamIndexFromQuality(o, t);
                if (this._segmentToStreamDecisionMap[e.index] = s, this._prevSegmentRequestIDs.length && this._prevModelInputs) {
                    const e = this._prevSegmentRequestIDs[this._prevSegmentRequestIDs.length - 1];
                    this.scanner.fire(yo.BRAIN_ML_MODEL_INPUTS, de({
                        chunkRequestID: e,
                        duration: n.duration,
                        geolocation: this._geolocation
                    }, this._prevModelInputs))
                }
                return this._prevModelInputs = r, this._pendingModelFetch = null, s
            }).catch(t => {
                if (t instanceof ze) {
                    const e = {
                        status: t.response.status,
                        resp: t.response.body,
                        url: this._mimirURL
                    };
                    this.scanner.fire(yo.BRAIN_ML_MODEL_ERR, e), this._networkIssueCount++
                }
                if (t instanceof Je) {
                    const e = {
                        url: this._mimirURL
                    };
                    this.scanner.fire(yo.BRAIN_ML_MODEL_TIMEOUT, e), this._networkIssueCount++
                }
                if (t instanceof Qe) {
                    const e = {
                        url: this._mimirURL
                    };
                    this.scanner.fire(yo.BRAIN_ML_MODEL_NET_ERR, e), this._networkIssueCount++
                }
                this._networkIssueCount >= 2 && this.scanner.resetBrain(!0);
                const n = e.streamIndex;
                return this._segmentToStreamDecisionMap[e.index] = n, this._pendingModelFetch = null, n
            })
        }, n._getFirstLookaheadSegmentNotInBuffer = function(e) {
            const t = this.scanner.sorcerer.video.sourceBuffer;
            let n = null;
            if (t && (n = t.buffered), null === n) return null;
            const r = this._getLookaheadSegments(e);
            for (let i = 0; i < r.length; i++) {
                const e = r[i].segment;
                if (!this._isSegmentInBuffer(e, n, this.scanner._video.duration, this.scanner._streams)) return r[i]
            }
            return null
        }, n._getLookaheadSegments = function(e, t = this.STREAM_TYPE_VIDEO) {
            const n = this.scanner._video,
                r = this.scanner.currentTime,
                i = r + this._getSecondsToLoadAhead(r, n.duration, e),
                o = [],
                s = this.scanner.sorcerer[t].activeStreamIndex,
                a = this.scanner._streams[t][s];
            if (!a) return o;
            for (let u = 0; u < a.segments.length; u++) {
                const e = a.segments[u];
                e.end < r || e.start > i || (r >= e.start && r < e.end || i >= e.start) && o.push({
                    segment: e,
                    index: u,
                    streamIndex: s
                })
            }
            return o
        }, n._clearSegmentsNotInBufferFromDecisionMap = function(e, t) {
            Object.keys(this._segmentToStreamDecisionMap).filter(t => -1 === e.indexOf(parseInt(t, 10))).forEach(e => {
                const n = this._segmentToStreamDecisionMap[e],
                    r = this.scanner._streams.video[n].segments[e];
                this._isSegmentInBuffer(r, t, this.scanner._video.duration, this.scanner._streams) || delete this._segmentToStreamDecisionMap[e]
            })
        }, n.getSegmentsToLoad = function(e, t, n) {
            const r = this._getLookaheadSegments(n, t),
                i = this.scanner.sorcerer[t].sourceBuffer;
            let o = null;
            i && (o = i.buffered), this._clearSegmentsNotInBufferFromDecisionMap(r.map(e => e.index), o);
            const s = [];
            for (let a = 0; a < r.length; a++) {
                const e = r[a].segment,
                    t = r[a].index,
                    n = this._isSegmentInBuffer(e, o, this.scanner._video.duration, this.scanner._streams),
                    i = t in this._segmentToStreamDecisionMap;
                n || !i && 1 !== this.whitelisted.length && 1 !== this.scanner._streams.video.length || s.push(t)
            }
            return s
        }, ue(t, [{
            key: "audioStreams",
            get: function() {
                return this._audioStreams
            },
            set: function(e) {
                this._audioStreams = e
            }
        }, {
            key: "scrubInProgress",
            set: function(e) {
                this._scrubInProgress = e
            },
            get: function() {
                return this._scrubInProgress
            }
        }]), t
    }(_s),
    vs = function() {
        function e(e, t) {
            this._video = e, this._getCurrentStream = t
        }
        var t = e.prototype;
        return t.start = function() {
            return clearInterval(this._checkGapInterval), this._checkGapInterval = setInterval(this._checkGap.bind(this), 200), this._checkGap()
        }, t.stop = function() {
            clearInterval(this._checkGapInterval)
        }, t.onSegmentAppended = function() {
            this._checkGap()
        }, t._checkGap = function() {
            const e = this._video.buffered,
                t = this._video.currentTime,
                n = this._getGapIndex(e, t);
            if (0 === this._video.readyState) return !1;
            if (this._video.paused) return !1;
            const r = this._video.duration;
            if (t >= r) return this._video.currentTime = r - .1, !0;
            if (e.length <= n) return !1;
            const i = e.start(n);
            return !(i >= r || i - t > .5 || 0 !== n || (this.stop(), this._correctFirstSegmentStart("audio", i), this._correctFirstSegmentStart("video", i), this._video.currentTime = i, 0))
        }, t._getGapIndex = function(e, t) {
            if (!e || !e.length) return null;
            let n = 0;
            for (; n < e.length; n++) {
                const r = e.start(n),
                    i = e.end(n);
                if (r > t && (0 === n || i - t <= .1)) break
            }
            return n >= 0 ? n : null
        }, t._correctFirstSegmentStart = function(e, t) {
            const n = this._getCurrentStream(0, e);
            n && n.segments && n.segments[0] && (n.segments[0].start = t)
        }, e
    }();
let gs = function() {
    function e(e, t = {}) {
        this._scanner = e, this.sessionId = t.sessionId, this.clipId = t.clipId
    }
    var t = e.prototype;
    return t.getLogAsQueryParam = function(e, t) {
        return this._buildCMCDQueryParam(this._getLog(e, t))
    }, t._getLog = function(e, t) {
        let n = {};
        return Object.assign(n, this._getStaticSessionData()), Object.assign(n, this._getDynamicSessionData(e, t)), n
    }, t._buildCMCDQueryParam = function(e) {
        return He({
            CMCD: this._getObjectAsAlphabetizedString(e)
        })
    }, t._getStaticSessionData = function() {
        return {
            sid: `"${this.sessionId}"`,
            cid: `"${this.clipId}"`,
            st: this._getStreamType(),
            sf: this._getStreamingFormat()
        }
    }, t._getDynamicSessionData = function(e, t) {
        return {
            pr: this._scanner.playbackRate,
            br: this._scanner.getBitrateAtTime(this._scanner.currentTime, t) / 1e3,
            ot: this._getObjectType(t),
            bl: this._getBufferLength(e)
        }
    }, t._getObjectType = function(e) {
        switch (e) {
            case "audio":
                return "a";
            case "video":
                return "v";
            default:
                return "av"
        }
    }, t._getBufferLength = function(e) {
        return Math.round(1e3 * (parseFloat(e.end) - parseFloat(e.start)))
    }, t._getStreamType = function() {
        switch (this._scanner.displayName) {
            case "HLSLiveScanner":
            case "NativeHLSLiveScanner":
                return "l";
            case "MediaSourceScanner":
            default:
                return "v"
        }
    }, t._getStreamingFormat = function() {
        switch (this._scanner.displayName) {
            case "HLSLiveScanner":
            case "NativeHLSLiveScanner":
                return '"hls"';
            case "MediaSourceScanner":
            default:
                return '"dash"'
        }
    }, t._getObjectAsAlphabetizedString = function(e) {
        let t = [],
            n = "";
        for (var r = 0, i = Object.entries(e); r < i.length; r++) {
            const [e, n] = i[r];
            t.push({
                key: e,
                value: n
            })
        }
        return t.sort((function(e, t) {
            return e.key.localeCompare(t.key)
        })).forEach(({
            key: e,
            value: t
        }) => {
            n += `${e}=${t},`
        }), n.replace(/,\s*$/, "")
    }, e
}();

function ys(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const Es = ["supported"];

function Ts(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}
const Ss = new Map;

function bs(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }
}
const As = Ke("MediaCapabilities", "color: white; background-color: green"),
    Is = bs((function(e) {
        let t;
        const n = ks(e);
        return Ss.get(n) || Ts((function() {
            if (Bt.mediaCapabilities) {
                const r = e.codecs.replace(/,.+/, ""),
                    i = {
                        type: "media-source",
                        video: {
                            contentType: `${e.mime_type}; codecs=${r}`,
                            width: e.width,
                            height: e.height,
                            bitrate: e.bitrate,
                            framerate: e.framerate
                        }
                    };
                return ys(navigator.mediaCapabilities.decodingInfo(i), (function(e) {
                    t = e, Ss.set(n, t)
                }))
            }
        }), (function() {
            return t
        }))
    })),
    ws = bs((function(e = []) {
        let t = !1,
            n = e,
            r = [],
            i = [];
        return Ts((function() {
            if (Bt.mediaCapabilities) return function() {
                if (0 !== e.length) return function(o, s) {
                    try {
                        var a = ys(Promise.all(e.map((function(e) {
                            return ys(Is(e))
                        }))), (function(o) {
                            if (o) {
                                if (n = function(e, t) {
                                        return e.filter((e, n) => Es.every(e => t[n][e]) || (As(`Stream ${e.quality} is not supported`, t[n]), !1))
                                    }(e, o), 0 === n.length) return As("No compatible streams found. Returning all available streams as safeguard."), t = !0, {
                                    compatibleStreams: e,
                                    incompatibleStreams: r,
                                    incompatibleStreamsAttributes: i
                                };
                                n.length < e.length ? (r = e.filter(e => -1 === n.indexOf(e)), i = r.map(Rs), As("Some streams are not supported. Returning compatible streams.")) : As("All streams are supported.")
                            }
                        }))
                    } catch (Vd) {
                        return s(Vd)
                    }
                    return a && a.then ? a.then(void 0, s) : a
                }(0, (function(e) {
                    As("Error checking stream capabilities", e)
                }));
                As("No streams to check for MediaCapabilities support")
            }();
            As("MediaCapabilities API not supported")
        }), (function(e) {
            return t ? e : {
                compatibleStreams: n,
                incompatibleStreams: r,
                incompatibleStreamsAttributes: i
            }
        }))
    }));

function Rs(e) {
    const t = ks(e),
        n = Ss.get(t);
    return n ? Es.filter(e => !n[e]) : []
}

function ks(e) {
    return `${e.mime_type};${e.codecs};${e.width};${e.height};${e.bitrate};${e.framerate}`
}

function Ps(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Ds(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }
}
let Os = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this).reset(), r.manifestLoadDurations = [], r._preserveCurrentTime = !1, n.mediaSourceScanner && (r._maxPreloadStreamIndex = n.mediaSourceScanner.maxPreloadStreamIndex), r
        }
        he(t, e), ue(t, null, [{
            key: "displayName",
            get: function() {
                return "MediaSourceScanner"
            }
        }, {
            key: "supported",
            get: function() {
                return "undefined" != typeof MediaSource && MediaSource.isTypeSupported
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                return ["application/vnd.vimeo.dash+json", "video/vnd.mpeg.dash.mpd"]
            }
        }]);
        var n = t.prototype;
        return n.deactivate = function() {
            e.prototype.deactivate.call(this), this.sorcerer && this.sorcerer.destroy(), this.reset()
        }, n.reset = function() {
            this._waitingOnSet = new Set, this._streamsForSegment = {}, Bt.browser.safari && (this._gapJumper = new vs(this._video, this._getCurrentStream.bind(this))), this.resetBrain(), this._setupCMCDLogger(), this._ready = !1, this._startedPlaying = !1, this._manifest = null, this._streams = {}, this._streams.audio = [], this._streams.video = [], this._audioStreams = [], this._onReady = null, this._baseUrl = null, this._lastTargetStreamId = null, this._timeToSeekTo = null, this._resolveSeek = null, this._resolveStartPreload = null, this._reloadingExistingVideo = !1, this._lastStreamIndex = null, this._checkSwitchUp = !1, this._clearBufferAtTime = !1, this._preloadStream = null, this._removeBufferPromise = null, this._ranIntoBuffer = !1, this._restrictedStreamIndexes = [], this._switching = {}, this._lastDownloadBitrate = 0, this._preloadSegmentStreamIndex = null, this._preserveCurrentTime = !1, clearInterval(this._loadSegmentsInterval), clearTimeout(this._slowLoadSegmentTimeout)
        }, n.resetBrain = function(e = !1) {
            const t = this._options.mediaSourceScanner || {};
            t.tests = this._options.tests;
            const n = Bt.ie;
            if (this._brain && this._brain.destroy(), e || n) {
                const e = Mo(this._brain);
                return this._brain = new ps(this, t), void((e || n) && this.fire(yo.BRAIN_ML_SWITCH_TO_SKYFIRE))
            }
            this._brain = new ps(this, t);
            const r = Co(t, "ml_brain");
            r && r.group && r.data.use_model && (this._brain = new ms(this, t))
        }, n.preloadStream = function() {
            if (this._preloadStream) return this._preloadStream;
            let e = 0,
                t = 1;
            this._streams.audio.length && (t = 2);
            let n = this.sorcerer.video.activeStreamIndex;
            this._restrictedStreamIndexes.length && (n = this._restrictedStreamIndexes[0]);
            let r = 0;
            const i = this._brain.getSegmentsToLoad(!1, "video", n);
            i.length > 0 && (r = i[0]);
            let o = () => {};
            const s = (e = !1) => {
                    e && (n = this.sorcerer.video.activeStreamIndex), this._preloadSegmentStreamIndex = n, this._restartLoadSegmentsIntervalWithBackoff(!0)
                },
                a = n => {
                    e += 1, e < t || (n.segment === r && 0 === this._restrictedStreamIndexes.length ? this._getStreamIndexToLoadAndSwitchReason(!0).then(t => {
                        let {
                            index: r,
                            reasonForSwitch: i
                        } = t, a = {
                            reasonForSwitch: i
                        };
                        if (!1 !== r && r > n.stream) {
                            if (this.sorcerer.video.switchTo(r, !1, a), this._streams.audio.length) {
                                const e = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, r);
                                this.sorcerer.audio.switchTo(e, !1)
                            }
                            return e = 0, void s(!0)
                        }
                        o()
                    }).catch(console.error) : o())
                };
            return this._preloadStream = new Promise((e, t) => {
                o = () => {
                    const t = this._getCurrentStream(n).segments[0].end,
                        r = this._getDuration(!0);
                    if (this.currentTime >= r && (this.currentTime = r), this.currentTime > t && (this.sorcerer.clear(), this._waitingOnSet = new Set), this.sorcerer.video.switchTo(n, !1), this._streams.audio.length) {
                        const e = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, n);
                        this.sorcerer.audio.switchTo(e, !1)
                    }
                    this.sorcerer.off("bufferqueueadd", a), this._preloadSegmentStreamIndex = null, this._ready = !0, e()
                }, this.sorcerer.on("bufferqueueadd", a), s()
            }), this._preloadStream
        }, n.loadManifest = function(e) {
            try {
                const t = this;
                return Ps(t.video.metadata.p2pReady, (function() {
                    const n = Date.now();
                    return Bt.browser.ie && e && -1 !== e.indexOf("archive_playlist") ? (setTimeout(() => {
                        t._fireVideoError("MediaUnknownError", "An unknown error occurred.")
                    }, 250), new Promise(() => {})) : pt({
                        url: e,
                        timeout: 1e4,
                        type: oe.MANIFEST
                    }).then(r => (r.url && r.url !== e && -1 !== r.url.indexOf("live-archive") && (t._baseUrl = r.url.split("/").slice(0, -2).join("/")), t.manifestLoadDurations.push({
                        url: e,
                        status: r.status,
                        duration: Date.now() - n
                    }), t.fire(po.MANIFEST_LOADED), r.text())).then(Ds((function(n) {
                        let r;
                        return function(i, o) {
                            var s = function() {
                                if (-1 !== e.indexOf(".mpd")) return Ps(t._loadMediaManifest(), (function({
                                    parseMPD: t
                                }) {
                                    r = t(n, e)
                                }));
                                r = JSON.parse(n)
                            }();
                            return s && s.then ? s.then(o) : o()
                        }(0, (function() {
                            return r
                        }))
                    }))).catch(r => {
                        if (t.manifestLoadDurations.push({
                                url: e,
                                status: r.response && r.response.status,
                                duration: Date.now() - n
                            }), t.reset(), r instanceof ze && 410 === r.response.status) return t.fire(po.MEDIA_URL_EXPIRED), new Promise(() => {});
                        throw r instanceof ze && 400 === r.response.status ? t.fire(po.MEDIA_URL_BAD_REQUEST, r.response.url) : r instanceof Je && t.fire(po.MANIFEST_TIMEOUT), r
                    })
                }))
            } catch (Vd) {
                return Promise.reject(Vd)
            }
        }, n.setVideoSrc = function(e, t, n = !0) {
            if (n && !t && this._onReady) {
                var r;
                if (("metadata" === this._preload || "none" === this._preload && !this.paused) && !this._ready) return void this._onReady.then(() => {
                    const t = this.paused;
                    this.setVideoSrc(e, t, !1)
                }).catch(console.error);
                if ("sd-fallback" === (null == (r = this._telecineVideo.drmHandler) ? void 0 : r.state)) return void this._onReady.then(() => {
                    this.setVideoSrc(e, !0, !1)
                }).catch(console.error);
                if ("auto" === this._preload) return void this._onReady.then(() => {
                    this.setVideoSrc(e, !1, !1)
                }).catch(console.error)
            }
            t && this.reset(), t || !this.paused || this.sorcerer || (t = !0);
            let i = this._initializeManifest;
            t && (i = this._initialize);
            const o = e.split("/");
            o.pop();
            const s = `${o.join("/")}/`;
            this._reloadingExistingVideo = !t, this._onReady = this._startPreload(e, this._preload).then(this.loadManifest.bind(this)).then(e => ("string" == typeof this._baseUrl && -1 !== this._baseUrl.indexOf("live-archive") || (this._baseUrl = s), e)).then(i.bind(this)), t && "auto" === this._preload && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this), !1)), this._onReady = this._addCatchToPromise(this._onReady)
        }, n.getBitrateAtTime = function(e, t) {
            if (!this.sorcerer) return 0;
            const n = this.sorcerer.streamIndexAtTime(e, t);
            return this._streams[t][n] ? this._streams[t][n].bitrate : 0
        }, n.lockStreamIndexes = function() {
            const e = this._restrictedStreamIndexes.map(e => this._streams.video.indexOf(this._streams.video[e])),
                t = !this.paused;
            if (t && (this._ignorePauseEvent = !0, this._video.pause()), this._switching.video = !1, this._brain.lock(e), !this._startedPlaying && "auto" !== this._preload) return;
            const n = Math.max(this.currentTime - 7, 0),
                r = Math.min(this.currentTime + 7, this._video.duration);
            this.sorcerer.removeBuffer(n, r).then(() => {
                !this._startedPlaying && "auto" === this._preload || this.ended ? this._loadSegments() : (this.seekToTime(this.currentTime), t && this.paused && (this._ignorePlayEvent = !0, this._video.play()))
            }).catch(console.error)
        }, n.seekToTime = function(e) {
            if (e === this.currentTime) return Promise.resolve();
            const t = null === this._timeToSeekTo;
            if (t || (this._lastSeekReject && (this._lastSeekReject(), this._lastSeekReject = null), this._seekInProgressPromise = null, this._timeToSeekTo = null, this._resolveSeek = null), this._timeToSeekTo = e, this._handleScrubbing(), this._ready)
                for (const n in this._streams)
                    if (this._streams[n].length > 0) {
                        const e = this.sorcerer[n].activeStreamIndex;
                        this.sorcerer[n].streams[e].abort()
                    }
            return this._seekInProgressPromise = this._getSeekReadyPromiseForTime(e), Promise.all([this._onReady, this._removeBufferPromise]).then(() => {
                this._loadSegments()
            }).catch(console.error), this._paused && 0 === e && this.fire(lo.SEEKING), t || this.play().catch(this._onPlayError.bind(this)), this._onReady.then(() => this._seekInProgressPromise).catch(e => {})
        }, n.takeSnapshot = function() {
            this._switchingVideo && e.prototype.takeSnapshot.call(this)
        }, n.initDrm = function() {}, n.onstalled = function() {
            return !1
        }, n.onseeked = function(e) {
            this._startedPlaying && this._restartLoadSegmentsIntervalWithBackoff()
        }, n.onended = function(t) {
            return e.prototype.onended.call(this, t), !0
        }, n.onseeking = function(e) {
            this._startedPlaying
        }, n._handleScrubbing = function() {
            this._scrubStart(), clearTimeout(this._scrubTimeout), this._scrubTimeout = setTimeout(() => {
                this._scrubEnd()
            }, 200)
        }, n._scrubStart = function() {
            this._scrubbing || (this._scrubbing = !0, Mo(this._brain) && (this._brain.scrubInProgress = !0))
        }, n._scrubEnd = function() {
            if (this._scrubbing = !1, Mo(this._brain)) {
                this._brain.scrubInProgress = !1;
                const e = this.sorcerer.video.activeStreamIndex;
                this._brain.handleScrubEnd(e), this._loadSegments()
            }
        }, n.ontimeupdate = function(t) {
            if (!this.sorcerer) return !1;
            if (e.prototype.ontimeupdate.call(this), this._gapJumper && this._gapJumper.stop(), 0 === this.currentTime) return this._startedPlaying;
            if (this._timeToSeekTo) return !1;
            if (this._startedPlaying || (this._startedPlaying = !0), this._clearBufferAtTime && this.currentTime >= this._clearBufferAtTime) {
                const e = 2;
                this.sorcerer.removeBuffer(0, this._clearBufferAtTime - e), this._clearBufferAtTime = !1
            }
            const n = this.sorcerer.getDroppedFrameTotal();
            this.fire(po.DROPPED_FRAMES, n);
            const r = this.sorcerer.getResponseSpeeds(),
                i = this._streams.video[this.sorcerer.video.activeStreamIndex],
                o = this._options.tests && this._options.tests.download_bitrate;
            if ((!o || !o.group) && i && this._brain.getCurrentSpeed) {
                const e = {
                    speed: this._brain.getCurrentSpeed(),
                    bitrate: i.bitrate,
                    speeds: r
                };
                this.fire(po.BANDWIDTH, e)
            }
            const s = this._video.buffered.length;
            if (!s) return !0;
            const a = this._video.buffered.end(s - 1);
            return Math.ceil(a) === Math.ceil(this._video.duration) || (Math.abs(this.currentTime - a) < .2 ? (this._ranIntoBuffer || (this.fire(po.STREAM_BUFFER_START, {
                hasLowerStreamIndex: this.sorcerer.video.activeStreamIndex > 0
            }), this._ranIntoBuffer = !0), !1) : void 0)
        }, n._isEnded = function() {
            return !!this.ended || Math.ceil(this.currentTime) === Math.ceil(this._video.duration)
        }, n._loadSegmentsIntervalTick = function() {
            if (!this.sorcerer) return !1;
            if (this._isEnded()) return !1;
            if (null !== this._preloadSegmentStreamIndex) {
                try {
                    this._loadPreloadSegments()
                } catch (Vd) {
                    return this._handleLoadSegmentFailures(Vd), !1
                }
                return !0
            }
            if (0 === this.currentTime && !this._ready) return this._startedPlaying;
            const e = this._loadSegments();
            return e && "function" == typeof e.catch && e.catch(this._handleLoadSegmentFailures.bind(this)), !0
        }, n._handleLoadSegmentFailures = function(e) {
            e.code === DOMException.INVALID_STATE_ERR ? this.fire(po.SCANNER_ERROR, {
                reason: e
            }) : this.fire(po.LOAD_SEGMENT_FAILED, new No(`${po.LOAD_SEGMENT_FAILED} - ${e.name}`, e.message)), clearInterval(this._loadSegmentsInterval)
        }, n.onprogress = function() {
            this._brain.canPlayFromTimeInStream(this.currentTime, this._getCurrentStream()) && this._ranIntoBuffer && (this.fire(po.STREAM_BUFFER_END), this._ranIntoBuffer = !1)
        }, n.onwaiting = function() {
            return !this._gapJumper || !this._gapJumper.start()
        }, n.onerror = function() {
            return !!this._video.error && (this._video.error.code === this._video.error.MEDIA_ERR_DECODE ? (this.fire(po.SCANNER_ERROR, {
                reason: "encountered media decode error"
            }), !1) : this._video.error.code === this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED ? (this._preserveCurrentTime = !0, this.fire(po.SCANNER_ERROR, {
                reason: "encountered media source not supported error"
            }), !1) : e.prototype.onerror.call(this))
        }, n.pause = function() {
            e.prototype.pause.call(this)
        }, n.play = function() {
            return this._restartLoadSegmentsIntervalWithBackoff(), e.prototype.play.call(this, () => (this._resolveStartPreload && this._resolveStartPreload(), this._reloadingExistingVideo || this._ready || "auto" === this._preload || (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))), this._onReady.then(() => Promise.resolve(this._seekInProgressPromise))))
        }, n.onpause = function() {
            return this._ignorePauseEvent ? (this._ignorePauseEvent = !1, !1) : (e.prototype.onpause.call(this), !0)
        }, n.onplay = function() {
            return !this._ignorePlayEvent || (this._ignorePlayEvent = !1, !1)
        }, n._addCallbackToPromise = function(e, t, n = !0) {
            let r = e.then(t);
            return n && (r = this._addCatchToPromise(r)), r
        }, n._addCatchToPromise = function(e) {
            return e.catch(e => (this.fire(po.FILE_ERROR, {
                reason: e
            }), new Promise((e, t) => {})))
        }, n._handleBufferForSeek = function() {
            this._ready && this._streams.video[this.sorcerer.video.activeStreamIndex].bitrate / 1e3 > 12e3 && (this._removeBufferPromise = this.sorcerer.removeBuffer())
        }, n._startPreload = function(e, t) {
            return new Promise((n, r) => {
                "none" !== t || this._reloadingExistingVideo && !this.paused ? n(e) : this._resolveStartPreload = () => {
                    n(e), this._resolveStartPreload = null
                }
            })
        }, n._getSeekReadyPromiseForTime = function(e = this._timeToSeekTo) {
            return new Promise((t, n) => {
                const r = this._startedPlaying && 0 === e,
                    i = this._brain.canPlayFromTimeInStream(e, this._getCurrentStream());
                r || i ? t(e) : (this._handleBufferForSeek(), this._resolveSeek = t)
            }).then(e => {
                this._timeToSeekTo = null, this._seekInProgressPromise = null;
                const t = new Promise((e, t) => {
                    this._lastSeekReject = t;
                    const n = () => {
                        e(this._video.currentTime), this._video.removeEventListener("seeked", n)
                    };
                    this._video.addEventListener("seeked", n)
                });
                return this._video.currentTime = e, t
            })
        }, n._handlePreloadChanged = function(e, t) {
            "auto" !== e && "auto" === t && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))), e !== t && "none" !== t && this._resolveStartPreload && this._resolveStartPreload()
        }, n._avDurationDifference = function(e) {
            const t = e.audio.reduce((e, t) => e + t.duration, 0),
                n = e.video.reduce((e, t) => e + t.duration, 0),
                r = t / e.audio.length,
                i = n / e.video.length;
            return r + 4 < i ? i - r : 0
        }, n._manifestContainsSegmentSizes = function(e) {
            return e.video.every(e => e.segments.every(e => "size" in e))
        }, n._initializeManifest = function(e) {
            const t = this;
            return new Promise(Ds((function(n, r) {
                if (t._manifest = e, t._streams.video = t._sortVideoStreams(e.video), e.audio) {
                    const n = t._avDurationDifference(e);
                    if (n > 0) return t.fire(po.AV_DURATION_MISMATCH, n), t.fire(po.SCANNER_ERROR, {
                        reason: "Encountered A/V duration mismatch"
                    }), void r();
                    const i = e.audio.filter(e => "opus" === e.codecs),
                        o = e.audio.filter(e => "opus" !== e.codecs),
                        s = Bt.browser.safari || Bt.iOS || Bt.iPadOS || !MediaSource.isTypeSupported('audio/mp4; codecs="opus"') || !i.length ? o : i;
                    t._streams.audio = t._sortAudioStreams(s)
                }
                for (let i = 0; i < t._streams.video.length; i++) {
                    let n = 0;
                    if (e.audio) {
                        const e = t._brain.getAudioIndexFromVideo(t._streams.video, t._streams.audio, i),
                            r = t._streams.audio[e];
                        r && (n = r.bitrate)
                    }
                    t._streams.video[i].audioBitrate = n
                }
                return Mo(t._brain) && t._streams.audio.length > 0 && (t._brain.audioStreams = t._streams.audio), t._initDrm(t._streams.video, t._streams.audio, t._manifest.key_info), t._manifestContainsSegmentSizes(e) || t.resetBrain(!0), t.fire(po.STREAMS_LOADED, t._streams), Ps(ws(t._streams.video), (function({
                    compatibleStreams: e,
                    incompatibleStreams: r,
                    incompatibleStreamsAttributes: i
                }) {
                    t._streams.video = e, r.length && (t.fire(po.AVAILABLE_STREAMS_CHANGED), t.fire(po.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, {
                        incompatibleStreams: r,
                        incompatibleStreamsAttributes: i
                    })), n()
                }))
            })))
        }, n._setUpSorcerer = function(e, t) {
            this.sorcerer && this.sorcerer.destroy(), this.sorcerer = new fs(e, t), this._video.src = URL.createObjectURL(this.sorcerer.mediaSource), this.successfulSegments = this.sorcerer.getSuccessfulSegments(), this.failedSegments = this.sorcerer.getFailedSegments(), this._restartLoadSegmentsIntervalWithBackoff()
        }, n._restartLoadSegmentsIntervalWithBackoff = function(e = !1) {
            this._restartLoadSegmentsInterval(500), clearTimeout(this._slowLoadSegmentTimeout), this._slowLoadSegmentTimeout = setTimeout(() => {
                this._restartLoadSegmentsInterval(5e3)
            }, 6e4), e && this._loadSegmentsIntervalTick()
        }, n._restartLoadSegmentsInterval = function(e) {
            clearInterval(this._loadSegmentsInterval), this._loadSegmentsInterval = setInterval(() => {
                this._loadSegmentsIntervalTick()
            }, e)
        }, n._getDuration = function(e = !1) {
            let t = e ? 1 / 0 : 0;
            for (const n in this._streams) this._streams[n].length && (t = Math[e ? "min" : "max"](t, this._streams[n][0].duration));
            return t
        }, n._initialize = function(e) {
            return this._initializeManifest(e).then(() => {
                const t = this.video && this.video.metadata.percentShown ? this.video.metadata.percentShown : null,
                    n = this._brain.filterStreams(this._streams.video, this._video.clientWidth, this._video.clientHeight, t).length - 1;
                let r = this._streams.video[0];
                this._restrictedStreamIndexes.length && (r = this._streams.video[this._restrictedStreamIndexes[0]]), void 0 !== this._maxPreloadStreamIndex && n <= this._streams.video.indexOf(e.video[this._maxPreloadStreamIndex]) && (r = this._streams.video[n]), this._setUpSorcerer(this._video, {
                    duration: this._getDuration(),
                    fetcherTimeout: 8e3,
                    fetcherRetryAbortErrors: !1
                }), this.sorcerer.on("srcnotsupported", () => {
                    this.fire(po.SCANNER_ERROR, {
                        reason: "this codec is not supported for mediasource playback"
                    })
                });
                const i = this._streams.video.indexOf(r);
                for (const e in this._streams) this._streams[e].forEach((t, n) => {
                    let r = this._getSegmentUrl(n, "init", e);
                    this._useRangeRequests(n, e) && this._streams[e][n].init_segment_range && (r = {
                        url: r,
                        byteRange: this._getRangeForSegment(n, "init", e)
                    }), this.sorcerer.addStream(`${t.mime_type}; codecs="${this._streams[e][n].codecs}"`, r)
                });
                this.sorcerer.video.switchTo(i, !0, {
                    reasonForSwitch: 7
                }), this.sorcerer.on("queued", this._handleQueued.bind(this)), this.sorcerer.on("downloadabort", this._handleAborted.bind(this)), this.sorcerer.on("appendbufferend", this._handleAppendBufferEnd.bind(this)), this.sorcerer.on("downloadstart", this._handleDownloadStart.bind(this)), this.sorcerer.on("downloadend", this._handleDownloadEnd.bind(this)), this.sorcerer.on("downloaderror", this._handleDownloadError.bind(this)), this.sorcerer.on("downloadtimeout", this._handleDownloadTimeout.bind(this)), this.sorcerer.on("quotaexceedederror", this._handleQuotaExceededError.bind(this)), this.sorcerer.video.on("streamchange", this._handleStreamChange.bind(this)), this.sorcerer.video.on("streamchangestart", this._handleStreamChangeStart.bind(this)), this.sorcerer.mediaSource.addEventListener("sourceended", () => {
                    this.fire(lo.PROGRESS)
                })
            })
        }, n._sortVideoStreams = function(e) {
            const t = e.slice(0);
            return t.sort((function(e, t) {
                const n = e.width * e.height * e.bitrate,
                    r = t.width * t.height * t.bitrate;
                return e.width === t.width && e.height === t.height ? e.framerate - t.framerate : n - r
            })), t
        }, n._sortAudioStreams = function(e) {
            const t = e.slice(0);
            return t.sort((function(e, t) {
                return e.bitrate * e.channels - t.bitrate * t.channels
            })), t
        }, n._useRangeRequests = function(e, t) {
            return !!this._streams[t][e].segments[0].range
        }, n._getRangeForSegment = function(e, t, n) {
            return "init" === t ? this._streams[n][e].init_segment_range : this._streams[n][e].segments[t].range
        }, n._getSegmentPriority = function(e, t, n = "video") {
            return "init" === t ? 0 : this._streams[n][e].segments[t].start
        }, n._getSegmentUrl = function(e, t, n = "video", r = !1) {
            if ("init" === t && !this._streams[n][e].init_segment_range && -1 === this._streams[n][e].init_segment.indexOf(".")) return function(e) {
                return ko(e).buffer
            }(this._streams[n][e].init_segment);
            let i = this._baseUrl;
            const o = this._manifest.base_url && -1 !== this._manifest.base_url.indexOf("//");
            if (o && (i = this._manifest.base_url), this._manifest.base_url && !o && (i += this._manifest.base_url), this._streams[n][e].base_url && (i += this._streams[n][e].base_url), this._useRangeRequests(e, n)) return i;
            if ("init" === t) return i += this._streams[n][e].init_segment, i;
            const s = this._streams[n][e].segments[t];
            s.url && (i += s.url);
            const a = -1 !== i.indexOf("akamaized"),
                u = -1 === i.indexOf("?") ? "?" : "&";
            return r && this.CMCDLogger && a && (i += `${u}${this.CMCDLogger.getLogAsQueryParam(s,n)}`), i
        }, n._key = function(e, t, n) {
            return `${e}:${t}:${n}`
        }, n._isFinalSegment = function(e, t, n) {
            return t === this._streams[n][e].segments.length - 1
        }, n._getCurrentlyLoadingStreamsForSegment = function(e, t) {
            const n = [],
                r = this._streamsForSegment[e];
            if (!r) return n;
            for (let i = 0; i < r.length; i++) this._waitingOnSet.has(this._key(r[i], e, t)) && n.push(r[i]);
            return n
        }, n.getCurrentStream = function(e = "video") {
            return this._getCurrentStream(0, e)
        }, n._getCurrentStream = function(e = 0, t = "video") {
            return void 0 !== this.sorcerer && (e = this.sorcerer[t].activeStreamIndex), this._streams[t][e]
        }, n._getStreamIndexToLoadAndSwitchReason = function(e) {
            let t = this._streams.video;
            const n = this.video && this.video.metadata.percentShown ? this.video.metadata.percentShown : null;
            if (t = this._brain.filterStreams(t, this._video.clientWidth, this._video.clientHeight, n), 0 === t.length) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            if (this._switching.video && !Mo(this._brain)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const r = t[t.length - 1];
            if (r.id !== this._lastTargetStreamId) {
                this._lastTargetStreamId = r.id;
                const e = {
                    index: this._streams.video.indexOf(r),
                    streams: this._streams.video
                };
                this.fire(po.STREAM_TARGET_CHANGE, e)
            }
            const i = this._getCurrentStream();
            return this._brain.shouldPowerUp(t, i, e).then(e => !1 === e.index ? this._brain.shouldPowerDown(t, i).then(e => !1 === e.index ? {
                index: e.index,
                reasonForSwitch: e.reasonForSwitch
            } : {
                index: this._streams.video.indexOf(t[e.index]),
                reasonForSwitch: e.reasonForSwitch
            }) : {
                index: this._streams.video.indexOf(t[e.index]),
                reasonForSwitch: e.reasonForSwitch
            })
        }, n._loadSegmentsForType = function(e = "video") {
            return this._getStreamIndexToLoadAndSwitchReason(!1).then(t => {
                let {
                    index: n,
                    reasonForSwitch: r
                } = t, i = {
                    reasonForSwitch: r
                };
                "audio" === e && (!1 === n && (n = this.sorcerer.video.activeStreamIndex), n = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, n), this.sorcerer.audio.activeStreamIndex === n && (n = !1));
                let o = !1;
                !1 !== n && (o = n > this.sorcerer[e].activeStreamIndex, this._switching[e] = !0, this.sorcerer[e].switchTo(n, !0, i).then(() => {
                    this._switching[e] = !1
                }).catch(console.error));
                let s = o;
                const a = this._brain.getSegmentsToLoad(s, e, this._getCurrentStream()),
                    u = this.sorcerer[e].activeStreamIndex;
                for (let c = 0; c < a.length; c++) {
                    const t = this._getSegmentUrl(u, a[c], e, !0),
                        n = this._getCurrentlyLoadingStreamsForSegment(a[c], e);
                    if (n.length > 1) continue;
                    if (1 === n.length && u <= n[0]) continue;
                    const r = this._isFinalSegment(u, a[c], e),
                        i = {
                            stream: u,
                            segment: a[c],
                            type: e
                        },
                        o = this.sorcerer[e].streams[u];
                    let s = t;
                    this._useRangeRequests(u, e) && (s = {
                        url: s,
                        byteRange: this._getRangeForSegment(u, a[c], e)
                    });
                    const l = this._getSegmentPriority(u, a[c], e),
                        d = "video" === e;
                    let h = null;
                    0 === u && "video" === e && (h = 16e3);
                    let f = null;
                    try {
                        f = this._streams[e][u].segments[a[c]].size
                    } catch (Vd) {}
                    o.addSegment(s, {
                        identifier: i,
                        isFinalSegment: r,
                        priority: l,
                        includeWithBandwidthChecks: d,
                        timeout: h,
                        size: f
                    }).catch(e => {})
                }
            }).catch(e => {
                throw e
            })
        }, n._loadPreloadSegments = function() {
            for (const e in this._streams) {
                if (0 === this._streams[e].length) continue;
                let t = 0;
                const n = this._brain.getSegmentsToLoad(!1, e, this._getCurrentStream());
                n.length > 0 && (t = n[0]);
                let r = this._preloadSegmentStreamIndex;
                "audio" === e && (r = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, this._preloadSegmentStreamIndex));
                const i = this._key(r, t, e);
                if (this._waitingOnSet.has(i)) continue;
                const o = this._getSegmentUrl(r, t, e),
                    s = this._isFinalSegment(r, t, e),
                    a = this.sorcerer[e].streams[r],
                    u = {
                        stream: r,
                        segment: t,
                        type: e
                    },
                    c = !0;
                let l = o;
                this._useRangeRequests(r, e) && (l = {
                    url: l,
                    byteRange: this._getRangeForSegment(r, t, e)
                }), a.addSegment(l, {
                    identifier: u,
                    isFinalSegment: s,
                    loadOnly: c,
                    priority: 0
                }).catch(e => {})
            }
        }, n._loadSegments = function() {
            return this._onReady && this._onReady.then(e => {
                const t = [];
                for (const n in this._streams) this._streams[n].length > 0 && t.push(this._loadSegmentsForType(n));
                return Promise.all(t)
            })
        }, n._handleQueued = function(e) {
            this._waitingOnSet.add(this._key(e.stream, e.segment, e.type)), this._streamsForSegment[e.segment] || (this._streamsForSegment[e.segment] = []), -1 === this._streamsForSegment[e.segment].indexOf(e.stream) && this._streamsForSegment[e.segment].push(e.stream)
        }, n._clearWaitingOn = function(e) {
            (this._streamsForSegment[e.segment] || []).forEach(t => {
                this._waitingOnSet.delete(this._key(t, e.segment, e.type))
            })
        }, n._handleAborted = function(e) {
            this._streamsForSegment[e.segment] && this._clearWaitingOn(e)
        }, n._handleAppendBufferEnd = function(e) {
            this.fire(po.APPEND_BUFFER_END, {
                identifier: e
            }), this._restartLoadSegmentsIntervalWithBackoff(), this._checkSwitchUp && e.stream === this._lastStreamIndex && (this._checkSwitchUp = !1, this._clearBufferAtTime = this._streams.video[e.stream].segments[e.segment].start), this._streamsForSegment[e.segment] && this._clearWaitingOn(e);
            const t = this._brain.canPlayFromTimeInStream(this._timeToSeekTo, this._getCurrentStream());
            null !== this._timeToSeekTo && this._resolveSeek && t && (this._resolveSeek(this._timeToSeekTo), this._resolveSeek = null), this._gapJumper && this._gapJumper.onSegmentAppended()
        }, n._handleDownloadStart = function(e) {
            this.fire(po.DOWNLOAD_START, {
                identifier: e
            })
        }, n._handleDownloadEnd = function(e, t) {
            this.fire(po.DOWNLOAD_END, {
                identifier: e,
                data: t
            })
        }, n._handleDownloadError = function(e, t) {
            this._clearWaitingOn(e);
            let n = po.DOWNLOAD_ERROR;
            410 === t && (n = po.MEDIA_URL_EXPIRED), 502 === t && this.video.metadata.drm && (n = po.DRM_FAILURE), this.fire(n, {
                identifier: e,
                status: t
            })
        }, n._handleDownloadTimeout = function(e, t) {
            this.fire(po.DOWNLOAD_TIMEOUT, {
                identifier: e,
                data: t
            }), this._streamsForSegment[e.segment] && this._clearWaitingOn(e), "video" === e.type ? this._switching.video = !1 : "audio" === e.type && (this._switching.audio = !1)
        }, n._handleQuotaExceededError = function(e) {
            this.fire(po.QUOTA_EXCEEDED_ERROR, {
                buffered: e
            })
        }, n._handleStreamChangeStart = function(e, t) {
            const n = {
                previousStreamIndex: this._manifest.video.indexOf(this._streams.video[e]),
                index: this._manifest.video.indexOf(this._streams.video[t]),
                streams: this._manifest.video
            };
            this.fire(po.STREAM_CHANGE_START, n)
        }, n._handleStreamChange = function(e, t) {
            e > this._lastStreamIndex && this.currentTime > 0 && (this._checkSwitchUp = !0), this._lastStreamIndex = e;
            const n = {
                index: this._manifest.video.indexOf(this._streams.video[e]),
                streams: this._manifest.video,
                metadata: t
            };
            this.fire(po.STREAM_CHANGE, n)
        }, n._initDrm = function(e = [], t = [], n = {}) {
            const r = this._telecineVideo.drmHandler;
            if (!r) return;
            const i = {
                audio: t.map(e => `${e.mime_type};codecs="${e.codecs}"`),
                video: e.map(e => `${e.mime_type};codecs="${e.codecs}"`)
            };
            r.init(this, i, n), r.setFallbackCallback(() => this.pause())
        }, n._setupCMCDLogger = function() {
            var e, t;
            (null == (e = this._options.tests) || null == (t = e.cmcd) ? void 0 : t.group) && (this.CMCDLogger = new gs(this, this._options.sessionMetadata))
        }, n._loadMediaManifest = function() {
            return import ("./media-manifest.module.js")
        }, ue(t, [{
            key: "preload",
            get: function() {
                return this._preload
            },
            set: function(e) {
                this._handlePreloadChanged(this._preload, e), this._preload = e
            }
        }, {
            key: "videoElement",
            get: function() {
                return this._video
            }
        }, {
            key: "videoWidth",
            get: function() {
                const e = this._getCurrentStream();
                return e ? e.width : this._video.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                const e = this._getCurrentStream();
                return e ? e.height : this._video.videoHeight
            }
        }, {
            key: "restrictedStreamIndexes",
            get: function() {
                return this._restrictedStreamIndexes
            },
            set: function(e = []) {
                this._restrictedStreamIndexes.join(",") !== e.join(",") && (this._restrictedStreamIndexes = e, this._onReady.then(() => this.lockStreamIndexes()).catch(console.error))
            }
        }, {
            key: "currentTime",
            get: function() {
                return null !== this._timeToSeekTo ? this._timeToSeekTo : this._video.currentTime
            },
            set: function(e) {
                (this._startedPlaying || 0 !== e) && this.seekToTime(e)
            }
        }, {
            key: "downloadSpeed",
            get: function() {
                return this._lastDownloadBitrate
            }
        }, {
            key: "brainDebug",
            get: function() {
                const e = this.sorcerer && this._brain && this._brain.getCurrentSpeed ? this._brain.getCurrentSpeed() : null;
                let t = this.sorcerer && this.sorcerer.getResponseSpeeds ? this.sorcerer.getResponseSpeeds() : null;
                return t = t ? t.slice(-20) : [], {
                    currentSpeed: e,
                    responseSpeeds: t
                }
            }
        }, {
            key: "isLowerProfileAvailable",
            get: function() {
                return this.sorcerer ? this.sorcerer.video.activeStreamIndex > 0 : null
            }
        }, {
            key: "videoStreams",
            get: function() {
                return this._streams.video
            }
        }]), t
    }(Qo),
    Ls = function() {
        function e(e) {
            this._scanner = e, this._currentTime = 0, this._latencyInterval = setInterval(this._onLatencyInterval.bind(this), 500)
        }
        var t = e.prototype;
        return t.destroy = function() {
            clearInterval(this._latencyInterval)
        }, t._onLatencyInterval = function() {
            const e = this._scanner.videoElement,
                t = this._scanner.getCurrentStream();
            if (!e || !t) return;
            this._currentTime = e.currentTime;
            const n = this._computeLatency();
            null !== n && (this._latency = n, this._scanner.fire(mo.LATENCY_UPDATED, n), this._scanner.lowLatencyMode && (Bt.browser.ie || Bt.browser.safari || null !== this._scanner.presentationDelay && (e.playbackRate = 1)))
        }, t._estimateLiveEdge = function() {
            const e = this._scanner.getCurrentStream();
            return e ? e.edge + e.age : null
        }, t._computeLatency = function() {
            const e = this._estimateLiveEdge();
            return null === e || 0 === this._currentTime ? null : e - this._currentTime
        }, t._getForwardBufferLength = function() {
            const e = this._scanner.videoElement,
                t = this._scanner.getCurrentStream();
            if (!e || !t) return 0;
            const n = e.buffered.length;
            return n ? e.buffered.end(n - 1) : t.edge - this._currentTime
        }, ue(e, [{
            key: "latency",
            get: function() {
                return this._latency
            }
        }, {
            key: "liveSyncPosition",
            get: function() {
                const e = this._estimateLiveEdge(),
                    t = this._scanner.presentationDelay,
                    n = this._scanner.getCurrentStream();
                return null === e || null === t || null === n ? 0 : e - t - this.edgeStalled
            }
        }, {
            key: "edgeStalled",
            get: function() {
                const e = this._scanner.getCurrentStream();
                if (!e) return 0;
                const t = 3 * (this._scanner.lowLatencyMode && e.partTargetDuration || e.targetDuration);
                return Math.max(e.age - t, 0)
            }
        }]), e
    }();
const Cs = [1, 2, 5];
let Ms = function(e) {
    function t(t, n = {}) {
        var r;
        return (r = e.call(this, t, n) || this)._UPSHIFT_BANDWIDTH_THRESHOLD = .4, r._DOWNSHIFT_BANDWIDTH_THRESHOLD = .6, r.consecutiveStreamIndex = {}, r.isNewPlayback = !0, r
    }
    he(t, e), ue(t, [{
        key: "displayName",
        get: function() {
            return "Live"
        }
    }]);
    var n = t.prototype;
    return n.optimalStream = function(e, t) {
        var n, r;
        this.isNewPlayback && ((null == (r = this.scanner.sorcerer) ? void 0 : r.getResponseSpeeds().length) >= 2 && (this.isNewPlayback = !1));
        if (1 === e.length) return {
            index: 0,
            reasonForSwitch: 6
        };
        if (this.isNewPlayback) {
            let t = 0,
                n = 0,
                r = this.scanner.videoElement.clientHeight,
                i = [];
            for (let o = 0; o < e.length; o++) {
                let s = e[o].height;
                i.push(s), s < r && s > n && (t = o, n = e[o].height)
            }
            return t = Math.max(0, t - 1), {
                index: t,
                reasonForSwitch: 4
            }
        }
        const i = this.getCurrentSpeed();
        let o = t,
            s = t;
        for (let f = 0; f < e.length; f++) i * this._UPSHIFT_BANDWIDTH_THRESHOLD > e[f].bandwidth && (o = f), i * this._DOWNSHIFT_BANDWIDTH_THRESHOLD > e[f].bandwidth && (s = f);
        const a = t < o ? o : s;
        this._clearConsecutiveStreamIndexes(a), this.consecutiveStreamIndex[a]++;
        const u = this.scanner.lowLatencyMode ? .5 : 1.5,
            c = this.scanner.segmentLength * u,
            l = this.scanner.videoElement,
            d = l.buffered,
            h = null == (n = this._options.mediaSourceScanner) ? void 0 : n.droppedFrameSwitchPercent;
        return d && 0 !== d.length ? d.end(d.length - 1) - l.currentTime < c ? {
            index: 0 !== t ? t - 1 : 0,
            reasonForSwitch: 1
        } : t > 0 && !isNaN(h) && this.hasTooManyDroppedFrames(t, this.scanner.getCurrentStream(), h) ? (this.blacklist(t), this.scanner.fire(po.DROPPED_FRAME_PERCENT_EXCEEDED), {
            index: t - 1,
            reasonForSwitch: 2
        }) : this.consecutiveStreamIndex[a] > 2 && a !== t ? {
            index: a,
            reasonForSwitch: 3
        } : {
            index: t,
            reasonForSwitch: null
        } : {
            index: 0,
            reasonForSwitch: 5
        }
    }, n.getCurrentSpeed = function() {
        var e;
        return null == (e = this.scanner.sorcerer) ? void 0 : e.getCurrentSpeed({
            type: "average",
            howMany: 5,
            weights: Cs
        })
    }, n._clearConsecutiveStreamIndexes = function(e) {
        this.consecutiveStreamIndex[e] || (this.consecutiveStreamIndex[e] = 0);
        for (const t in this.consecutiveStreamIndex) this.consecutiveStreamIndex.hasOwnProperty(t) && parseInt(t, 10) !== e && (this.consecutiveStreamIndex[t] = 0)
    }, n.getAvailabilityStart = function(e, t) {
        return this._getSegmentAvailabilityStart(e, t.edge)
    }, n.getAvailabilityEnd = function(e, t) {
        return this._getSegmentAvailabilityEnd(e, t.edge)
    }, n.canPlayFromTimeInStream = function(e, t) {
        return !!t && this.isTimeInBuffer(e, this.scanner._video.buffered, this.scanner._video.duration)
    }, n.getSegmentsToLoad = function(e, t, n) {
        var r, i, o;
        const {
            currentTime: s,
            liveTailTime: a,
            sorcerer: u,
            bufferTarget: c,
            atLiveEdge: l
        } = this.scanner, d = null == (r = u[t]) || null == (i = r.sourceBuffer) ? void 0 : i.buffered, h = (null == d ? void 0 : d.length) ? d.start(d.length - 1) : 0, f = je(Math.max(s, h), d);
        if (!e && f >= c) return [];
        const _ = Math.max(s, a),
            p = l ? n.edge : _,
            m = this._getSegmentAvailabilityStart(p, n.edge),
            v = this._getSegmentAvailabilityEnd(p, n.edge),
            g = this.scanner.lowLatencyMode && (null == (o = n.parts) ? void 0 : o.length),
            y = (g ? n.parts : n.segments).filter(t => !!t.uri && (e || !this.scanner.isSegmentAdded(t)) && !(t.end < m || t.start > v));
        return g && y.forEach((e, t) => {
            for (; e = e.dependentOn;) y.includes(e) || this.scanner.isStreamSegmentAdded(e) || y.splice(t, 0, e)
        }), u[t].activeStreamIndex, y
    }, n._getSegmentAvailabilityStart = function(e, t) {
        const n = t - this._getPresentationDelay();
        return Math.max(0, Math.min(e, n))
    }, n._getSegmentAvailabilityEnd = function(e, t) {
        const n = e + this.scanner.bufferTarget;
        return Math.min(n, t)
    }, n._getPresentationDelay = function() {
        return this.scanner.presentationDelay || this.scanner.manifest.presentationDelay
    }, t
}(ps);
const Ns = ["disabled", "hidden", "showing"],
    xs = ["subtitles", "captions", "descriptions", "chapters", "metadata"],
    Us = ["ar", "fa", "he", "iw", "ku", "ps", "sd", "ur", "yi"],
    Fs = new WeakMap,
    js = new WeakMap;
let Bs = function() {
    function e({
        kind: e,
        src: t = null,
        label: n = "",
        language: r = "",
        id: i = Ro()
    }, o) {
        if (-1 === xs.indexOf(e)) throw Fo(12, "SYNTAX_ERR", "Syntax Error");
        dr(this), Object.defineProperties(this, {
            kind: {
                value: e,
                enumerable: !0
            },
            label: {
                value: n,
                enumerable: !0
            },
            language: {
                value: r,
                enumerable: !0
            },
            id: {
                value: `${i}`,
                enumerable: !0
            },
            rtl: {
                value: -1 !== Us.indexOf(r.substr(0, 2)),
                enumerable: !0
            }
        }), this.video = o, this.src = t, this._modeHasBeenSet = !1, Fs.set(this, "disabled")
    }
    return e.prototype.dispatchEvent = function(e) {
        this.fire(e, {
            target: this
        })
    }, ue(e, [{
        key: "mode",
        get: function() {
            return Fs.get(this)
        },
        set: function(e) {
            if (Ns.indexOf(e) > -1) {
                if (this._modeHasBeenSet = !0, Fs.get(this) === e) return;
                Fs.set(this, e), this.video.currentScanner && this.video.currentScanner.setModeForTrack(this, e), this.dispatchEvent("modechange")
            }
        }
    }, {
        key: "src",
        get: function() {
            return js.get(this)
        },
        set: function(e) {
            js.set(this, e), this.video.fire(po.TEXT_SRC_UPDATE, this)
        }
    }, {
        key: "cues",
        get: function() {
            return this.video.currentScanner ? this.video.currentScanner.getCuesForTrack(this) : []
        }
    }, {
        key: "activeCues",
        get: function() {
            return this.video.currentScanner ? this.video.currentScanner.getActiveCuesForTrack(this) : []
        }
    }, {
        key: "trackElement",
        get: function() {
            return document.getElementById(`telecine-track-${this.id}`)
        }
    }]), e
}();

function Vs(e) {
    var t = /^(?:(\d{2,}):)?(\d{2}):(\d{2})[,.](\d{3})$/.exec(e);
    if (!t) return -1;
    var n = parseInt(t[4], 10) / 1e3;
    return n += parseInt(t[3], 10), t[2] && (n += 60 * parseInt(t[2], 10)), t[1] && (n += 60 * parseInt(t[1], 10) * 60), n
}

function Hs(e) {
    var t = 0,
        n = e.split(/(?:(?:\r\n|\n){2,})/),
        r = [],
        i = null;
    do {
        0 === t && /^\uFEFF?WEBVTT(?: .*)?/.test(n[t]) && t++, (i = /^(?:(.*)(?:\r\n|\n))?([\d:,.]+) --> ([\d:,.]+)(.*)?(?:\r\n|\n)([\s\S]*)/.exec(n[t])) && r.push({
            startTime: Vs(i[2]),
            endTime: Vs(i[3]),
            text: i[5]
        }), t++
    } while (t < n.length);
    return r
}

function Xs(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function qs(e, t) {
    try {
        var n = e()
    } catch (Vd) {
        return t(Vd)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function Gs(e, t) {
    return e && e.then ? e.then(t) : t(e)
}

function Ws() {}

function Ks(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}

function Ys(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }
}

function $s(e, t) {
    if (!t) return e && e.then ? e.then(Ws) : Promise.resolve()
}
const zs = Bt.browser.ie || Bt.browser.edge ? .5 : .2;
let Qs = function(e) {
    function t(t, n = {}) {
        var r, i, o, s, a, u, c, l;
        return (l = e.call(this, t, n) || this)._playInitiated = !1, l._captionsVisible = !1, l._captionsLoading = !1, l._atLiveEdge = !0, l._atLiveTail = !1, l._STREAM_SWITCH_CHECK_INTERVAL = 2e3, l._DOWN_SHIFT_CHECK_INTERVAL = 1e4, l.reset(), l.defaultPresentationDelay = null !== (r = n.presentationDelay) && void 0 !== r ? r : n.lowLatencyMode ? 3 : 12, l.defaultBufferTarget = n.lowLatencyMode ? 3 : 12, l.bufferTarget = l.defaultBufferTarget, l.presentationDelay = l.defaultPresentationDelay, l.lowLatencyMode = null !== (i = n.lowLatencyMode) && void 0 !== i && i, l.disableDeltaUpdates = null !== (o = n.disableDeltaUpdates) && void 0 !== o && o, Object.defineProperty(ye(l), "eventIsLowLatency", {
            value: null !== (s = n.lowLatencyMode) && void 0 !== s && s,
            writable: !1
        }), Object.defineProperty(ye(l), "eventHasDVREnabled", {
            value: null !== (a = n.dvrEnabled) && void 0 !== a && a,
            writable: !1
        }), l._timeoutTest = null == (u = l._options.tests) || null == (c = u.llhls_timeout) ? void 0 : c.group, window.addEventListener("online", () => {
            l.play()
        }), l
    }
    he(t, e), ue(t, null, [{
        key: "displayName",
        get: function() {
            return "HLSLiveScanner"
        }
    }, {
        key: "supported",
        get: function() {
            return "undefined" != typeof MediaSource && MediaSource.isTypeSupported
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return ["application/x-mpegURL"]
        }
    }]);
    var n = t.prototype;
    return n.deactivate = function() {
        e.prototype.deactivate.call(this), this.reset()
    }, n.reset = function() {
        var e, t, n;
        null == (e = this._sorcerer) || e.destroy(), null == (t = this._manifestLoader) || t.stop(), null == (n = this._latencyController) || n.destroy(), this._videoReady = new Ue, this._sorcerer = null, this._streams = {}, this._streams.video = [], this._streams.audio = [], this._lastStreamIndex = 0, this._isOnline = !1, this._hasLiveEventEnded = !1, this._timeSinceLastStreamSwitchCheck = 0, this._timeSinceLastDownShift = Number.NEGATIVE_INFINITY, this._lastStallCurrentTime = -1, this._timeToSeekTo = null, this._resolveSeek = null, this._abr = new Ms(this, this._options), this._latencyController = new Ls(this), this._restrictedStreamIndexes = [], this._switching = {}, this._segmentsAdded = {}, this._captionsAddedToTextTrack = {}, this._captionsAddedToTranscript = {}, this._fetchedCues = {}
    }, n.endLive = function() {
        var t;
        this._isOnline = !1, this._hasLiveEventEnded = !0, this.eventHasDVREnabled && !this.atLiveEdge || (null == (t = this._manifestLoader) || t.stop(), this._sorcerer && (this._sorcerer.abortFetches(), this._sorcerer.endOfStream()), this.eventHasDVREnabled || e.prototype.deactivate.call(this), this.fire(lo.ENDED))
    }, n._signalOnline = function() {
        this._isOnline || (this._isOnline = !0, this.fire(mo.STREAM_ONLINE))
    }, n._signalOffline = function() {
        this._isOnline && (this._isOnline = !1, this.fire(mo.STREAM_OFFLINE))
    }, n._toggleConnection = function(e) {
        e ? this._signalOnline() : this._signalOffline()
    }, n._loadManifest = function(e) {
        try {
            const t = this;
            if (t._hasLiveEventEnded) return;
            t._manifestLoader && (t._manifestLoader.stop(), t._manifestLoader.off());
            let n = [t._loadMediaManifest()];
            return t.video.metadata.p2pReady && n.push(t.video.metadata.p2pReady), Xs(Promise.allSettled(n), (function([n]) {
                const {
                    M3U8Loader: r,
                    PLAYLIST_UPDATE: i,
                    PLAYLIST_ERROR: o,
                    convertTsCodecs: s
                } = n.value;
                return t._manifestLoader = new r({
                    disableDeltaUpdates: t.disableDeltaUpdates
                }), t._manifestLoader.lowLatencyMode = t.lowLatencyMode, t._manifestLoader.dvrEnabled = t.eventHasDVREnabled, t._manifestLoader.on(i, t._onPlaylistUpdate.bind(t)), t._manifestLoader.on(o, e => {
                    t._signalOffline()
                }), Gs(qs((function() {
                    const n = t.video.metadata.playlistRefreshUrl;
                    return Xs(t._manifestLoader.start(e, n), (function(e) {
                        t._manifest = e, t._signalOnline()
                    }))
                }), (function(e) {
                    throw t._signalOffline(), t.endLive(), e
                })), (function(e) {
                    t._streams.video = Js(function(e) {
                        return e.filter(t => t.codecs.split(".")[0] === e[0].codecs.split(".")[0])
                    }(function(e) {
                        const t = e.slice(0);
                        return t.sort((function(e, t) {
                            const n = e.width * e.height * e.bitrate,
                                r = t.width * t.height * t.bitrate;
                            return e.width === t.width && e.height === t.height ? e.framerate - t.framerate : n - r
                        })), t
                    }(t._manifest.video))), t._streams.audio = Js(Ae(Ie(t._streams.video, ({
                        audio: e
                    }) => e)));
                    const {
                        index: n,
                        reasonForSwitch: r
                    } = t._getStream("video", !0);
                    let i = {
                        reasonForSwitch: r
                    };
                    return Xs(t._manifestLoader.switchTo("video", n), (function() {
                        let e, r = [];
                        if (t._streams.audio.length) {
                            let {
                                index: n
                            } = t._getStream("audio", !0);
                            e = n, r.push(t._manifestLoader.switchTo("audio", e))
                        }
                        if (t.manifest.captions && t.manifest.captions.length > 0) {
                            const {
                                index: e
                            } = t._getStream("subtitles", !0);
                            r.push(t._manifestLoader.switchTo("subtitles", e))
                        }
                        return Xs(Promise.all(r), (function() {
                            var r, o;
                            null == (r = t._sorcerer) || r.destroy(), t._sorcerer = new fs(t._video, {
                                fetcherRetryAbortErrors: !1,
                                fetcherTimeout: 8e3
                            }), t._sorcerer.initFrameDropper(), t._streams.video.forEach(e => {
                                t._sorcerer.addStream(s(Oo(t._manifestLoader.activeStream("video").mimeType, e.codecs)), e.initSegment)
                            }), t._streams.audio.forEach(e => {
                                t._sorcerer.addStream(s(Oo(t._manifestLoader.activeStream("audio").mimeType, e.codecs)), e.initSegment)
                            }), t.fire(po.STREAMS_LOADED, t._streams), t.manifest.captions && t.manifest.captions.length > 0 && (t.manifest.captions.forEach(t._loadTextTrack.bind(t)), t.fire(po.TEXT_TRACKS_AVAILABLE)), t._setUpMediaSorcererEvents(), t._sorcerer.video.switchTo(n, !1, i), t._streams.audio.length && (null == (o = t._sorcerer.audio) || o.switchTo(e, !1))
                        }))
                    }))
                }))
            }))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, n._refreshManifest = function() {
        try {
            const e = this;
            return function(e) {
                if (e && e.then) return e.then(Ws)
            }(qs((function() {
                return Xs(e._manifestLoader.update(), (function() {
                    e._signalOnline()
                }))
            }), (function() {
                e._signalOffline()
            })))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, n._setUpMediaSorcererEvents = function() {
        this._sorcerer.video.on("streamchange", this._handleStreamChange.bind(this)), this._sorcerer.video.on("streamchangestart", this._handleStreamChangeStart.bind(this)), this._sorcerer.on("downloadend", this._handleDownloadEnd.bind(this)), this._sorcerer.on("downloadtimeout", this._handleDownloadTimeout.bind(this)), this._sorcerer.on("downloadabort", this._handleDownloadAbort.bind(this)), this._sorcerer.on("appendbufferend", this._handleBufferAppend.bind(this))
    }, n._handleDownloadEnd = function(e, t) {
        if (e && e.isInitSegmentRequest) return;
        const n = this._getCurrentStream();
        t.extraContext = {
            liveAvail: {
                start: this._abr.getAvailabilityStart(this.currentTime, n),
                end: this._abr.getAvailabilityEnd(this.currentTime, n)
            }
        }, this.fire(po.DOWNLOAD_END, {
            identifier: e,
            data: t
        })
    }, n._handleDownloadTimeout = function(e, t) {
        e && e.isInitSegmentRequest || (this._key(e), this._clearSegment(e), this._switching[e.type] = !1, this.fire(po.DOWNLOAD_TIMEOUT, {
            identifier: e,
            data: t
        }))
    }, n._handleDownloadAbort = function(e) {
        e && e.isInitSegmentRequest || (this._key(e), this._clearSegment(e))
    }, n._handleStreamChangeStart = function(e, t) {
        const n = {
            previousStreamIndex: this._streams.video.indexOf(this._streams.video[e]),
            index: this._streams.video.indexOf(this._streams.video[t]),
            streams: this._streams.video
        };
        this.fire(po.STREAM_CHANGE_START, n)
    }, n._handleStreamChange = function(e, t = {}) {
        this.fire(po.STREAM_CHANGE, {
            index: e,
            streams: this._streams.video,
            metadata: t
        })
    }, n._firstBufferAheadIndex = function(e, t) {
        for (let n = 0; n < (null == t ? void 0 : t.length); n++)
            if (t.start(n) > e) return n
    }, n._handleBufferAppend = function(e) {
        var t;
        const {
            type: n,
            stream: r
        } = e, i = this.sorcerer[n].sourceBuffer.buffered, o = this._getSegmentById(e);
        if (o && i.length && (this._streams[n][r].playlist.timeOffset = i.end(i.length - 1) - (o.end - o.timeOffset)), null === this._timeToSeekTo || !this._resolveSeek) return;
        const s = this._firstBufferAheadIndex(this.currentTime, i),
            a = null !== (t = null == i ? void 0 : i.start(s)) && void 0 !== t ? t : 0,
            u = je(a, i);
        void 0 !== s && u > this.bufferTarget ? (Number((a - this.currentTime).toFixed(3)), this.currentTime = a) : (this._timeToSeekTo < this.liveTailTime && (this._timeToSeekTo = this.liveTailTime), this._abr.canPlayFromTimeInStream(this._timeToSeekTo, this._getCurrentStream()) && (this._resolveSeek(this._timeToSeekTo), this._resolveSeek = null))
    }, n._key = function({
        type: e,
        segment: t,
        part: n
    }) {
        return `${e}_${t}_${n}`
    }, n._getSegmentById = function({
        type: e,
        stream: t,
        segment: n,
        part: r
    }) {
        const i = this._streams[e][t].getSegmentBySN(n);
        return (null == i ? void 0 : i.getPart(r)) || i
    }, n._clearSegment = function(e) {
        if (e.part > 0) {
            const t = de(de({}, e), {}, {
                part: e.part - 1
            });
            this._clearSegment(t)
        }
        const t = this._key(e);
        delete this._segmentsAdded[t]
    }, n.isSegmentAdded = function(e) {
        return !!this._segmentsAdded[this._key(e)]
    }, n.isStreamSegmentAdded = function(e) {
        const t = this._key(e),
            n = this._sorcerer[e.type].activeStreamIndex;
        return !!this._segmentsAdded[t] && this._segmentsAdded[t].stream === n
    }, n._onPlaylistUpdate = function(e, t) {
        try {
            var n;
            const i = this,
                {
                    type: o
                } = e;
            var r;
            return null == (n = i._sorcerer) || n.setLiveSeekableRange(i.liveTailTime, i.liveEdgeTime), i.fire(po.STREAM_UPDATED, e), "subtitles" === o ? void((i._captionsVisible || i._captionsLoading) && (null == (r = i.manifest.captions) ? void 0 : r.length) > 0 && i._addTextTrackCue()) : (t || i._loadSegmentsForType(o), i._toggleConnection(i._hasNewSegments(o) || !i._atDurationEnd()), i._checkForPlaybackGap(), (i.lowLatencyMode || i.video.metadata.p2pReady) && i._checkForPlaybackStall(), Xs())
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, n._loadTextTrack = function({
        label: e,
        language: t
    }, n) {
        if (!this._captionsTrack) {
            const r = new Bs({
                label: e,
                id: n,
                kind: "captions",
                language: t
            }, this._telecineVideo);
            this._telecineVideo.textTracks = Ao([r]), this._captionsTrack = this.addTextTrack(r)
        }
    }, n._getSegmentIdentifier = function(e) {
        return `${e.type}_${e.mediaSequenceNumber}`
    }, n._shouldAddSegmentCuesToTextTrack = function(e) {
        const t = this._getSegmentIdentifier(e),
            n = this._captionsAddedToTextTrack[t],
            r = e.end >= this.currentTime && e.start <= this.currentTime + this.bufferTarget;
        return this._captionsVisible && !n && r
    }, n._shouldAddSegmentCuesToTranscript = function(e) {
        const t = this._getSegmentIdentifier(e),
            n = this._captionsAddedToTranscript[t],
            r = e.end >= this.liveEdgeTime - e.duration && e.start <= this.liveEdgeTime + this.bufferTarget;
        return this._captionsLoading && !n && r
    }, n._getSegmentCues = function(e) {
        try {
            const t = this,
                n = t._getSegmentIdentifier(e);
            return Ks((function() {
                if (!t._fetchedCues[n]) return Xs(pt(e.url).text(), (function(e) {
                    const r = Hs(e),
                        i = function(e) {
                            const t = e.match(/=MPEGTS:(\d+),/);
                            return (t && t[1] || 0) / 9e4
                        }(e),
                        o = r.map(e => (e.startTime = i + e.startTime, e.endTime = i + e.endTime, new(window.VTTCue || window.TextTrackCue)(e.startTime, e.endTime, e.text)));
                    t._fetchedCues[n] = o
                }))
            }), (function() {
                return t._fetchedCues[n]
            }))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, n._addTextTrackCue = function() {
        try {
            const e = this;
            return Xs(e._videoReady, (function() {
                e.manifest.captions && e.manifest.captions[0].segments.forEach(Ys((function(t) {
                    const n = e._getSegmentIdentifier(t),
                        r = e._shouldAddSegmentCuesToTextTrack(t),
                        i = e._shouldAddSegmentCuesToTranscript(t);
                    return function(o) {
                        var s = function() {
                            if (r || i) return Xs(e._getSegmentCues(t), (function(t) {
                                r && (e._captionsAddedToTextTrack[n] = !0, t.forEach(t => {
                                    e._captionsTrack.addCue(t)
                                })), i && (e._captionsAddedToTranscript[n] = !0, e.fire(po.SEGMENT_CUES_LOADED, t))
                            }))
                        }();
                        if (s && s.then) return s.then(Ws)
                    }()
                })))
            }))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, n._hasNewSegments = function(e) {
        var t;
        const n = this._getCurrentStream(e),
            r = 3 * (this.lowLatencyMode ? 3 : 1);
        return (null == (t = n.playlist) ? void 0 : t.misses) < r
    }, n._loadSegments = function() {
        try {
            const e = this;
            return Xs(e._videoReady, (function() {
                for (const t in e._streams) e._streams[t].length > 0 && e._loadSegmentsForType(t)
            }))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, n._loadSegmentsForType = function(e) {
        try {
            const t = this;
            return Xs(t._videoReady, (function() {
                const {
                    index: n,
                    reasonForSwitch: r
                } = t._getStream(e);
                let i;
                return Ks((function() {
                    if (n >= 0 && n !== t.sorcerer[e].activeStreamIndex) return i = n > t.sorcerer[e].activeStreamIndex, t._switching[e] = !0, Xs(t._manifestLoader.switchTo(e, n), (function() {
                        let i = {
                            reasonForSwitch: r
                        };
                        t.sorcerer[e].switchTo(n, !0, i).then(() => {
                            t._switching[e] = !1
                        }).catch(console.error)
                    }))
                }), (function() {
                    return Xs(Oe(0), (function() {
                        const n = t.lowLatencyMode && void 0 !== i,
                            r = t._sorcerer[e].activeStreamIndex,
                            o = t._getCurrentStream(e, r),
                            s = t._abr.getSegmentsToLoad(n, e, o),
                            a = t._getSegmentTimeoutMs();
                        s.forEach(n => {
                            const i = t._key(n),
                                s = {
                                    type: e,
                                    stream: r,
                                    segment: n.segment,
                                    part: n.part
                                },
                                u = "video" === e && !n.hint;
                            let c = a;
                            if (n.hint && t._playInitiated && n.start > t.currentTime) {
                                const e = 1e3 * (n.start - t.currentTime);
                                c = Math.min(8e3, e + a)
                            }
                            const l = o.bitrate / 8 * n.duration,
                                d = t.sorcerer[e].streams[r],
                                h = t._preventExpiredSegmentUsage(n);
                            d.addSegment(h, {
                                identifier: s,
                                includeWithBandwidthChecks: u,
                                priority: n.programDateTime,
                                excludeConnectTime: t.lowLatencyMode,
                                timeout: t._timeoutTest || t.lowLatencyMode ? c : 8e3,
                                size: t._timeoutTest || t.lowLatencyMode ? l : void 0
                            }).catch(e => {
                                e instanceof ts || e instanceof $e || t._clearSegment(s)
                            }), t._segmentsAdded[i] = s
                        })
                    }))
                }))
            }))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, n._preventExpiredSegmentUsage = function(e) {
        var t;
        let n = null == e ? void 0 : e.url;
        const r = null == (t = this._manifestLoader) ? void 0 : t.baseUrl;
        return r && n && !n.startsWith(r) && (n = `${r}${e.uri}`), n
    }, n._getStream = function(e, t = !1) {
        var n, r;
        if (this._switching[e]) return {
            index: -1,
            reasonForSwitch: null
        };
        if ("subtitles" === e) {
            const e = this._manifestLoader.activeStream("video");
            return {
                index: e.subtitles[e.currentRenditions.subtitles].index,
                reasonForSwitch: null
            }
        }
        if ("audio" === e) {
            const e = this._manifestLoader.activeStream("video");
            return {
                index: e.audio[e.currentRenditions.audio].index,
                reasonForSwitch: null
            }
        }
        if (!t && wo(this._timeSinceLastStreamSwitchCheck) < this._STREAM_SWITCH_CHECK_INTERVAL) return {
            index: this._lastStreamIndex,
            reasonForSwitch: null
        };
        this._timeSinceLastStreamSwitchCheck = Io();
        const i = null == (n = this.video) || null == (r = n.metadata) ? void 0 : r.percentShown,
            o = this._abr.filterStreams(this._streams.video, this._video.clientWidth, this._video.clientHeight, i);
        if (0 === o.length) return {
            index: this._lastStreamIndex,
            reasonForSwitch: null
        };
        const {
            index: s,
            reasonForSwitch: a
        } = this._abr.optimalStream(o, this._lastStreamIndex), u = o[s], c = this._streams.video.indexOf(u);
        if (c >= 0 && (t || c !== this._lastStreamIndex)) {
            if (c > this._lastStreamIndex && wo(this._timeSinceLastDownShift) < this._DOWN_SHIFT_CHECK_INTERVAL) return {
                index: this._lastStreamIndex,
                reasonForSwitch: a
            };
            c < this._lastStreamIndex && (this._timeSinceLastDownShift = Io());
            const e = {
                index: c,
                streams: this._streams.video
            };
            return this.fire(po.STREAM_TARGET_CHANGE, e), this._lastStreamIndex = c, {
                index: c,
                reasonForSwitch: a
            }
        }
        return {
            index: this._lastStreamIndex,
            reasonForSwitch: a
        }
    }, n.getCurrentStream = function(e = "video") {
        return this._getCurrentStream(e)
    }, n._getCurrentStream = function(e = "video", t = 0) {
        return void 0 !== this._sorcerer && null !== this._sorcerer && (t = this._sorcerer[e].activeStreamIndex), this._streams[e][t]
    }, n._checkForPlaybackStall = function() {
        if (this._video.currentTime === this._lastStallCurrentTime && Io() - this._lastStallCheckTime >= 1e3 && this._shouldBeMakingProgress()) {
            const e = "Jumping forward 0.1s" + ` because of stall at time of ${this._video.currentTime}`;
            this.fire(mo.STALL_JUMP, {
                msg: e
            }), this._video.currentTime += .1
        }
        this._lastStallCurrentTime = this._video.currentTime, this._lastStallCheckTime = Io()
    }, n._shouldBeMakingProgress = function() {
        return 0 !== this._video.readyState && !!this._video.buffered.length && !this._video.paused && this._hasContentFor(this._video.buffered, this._video.currentTime)
    }, n._hasContentFor = function(e, t) {
        for (let n = 0; n < e.length; n++)
            if (!(t < e.start(n) - .1 || t > e.end(n) - .5)) return !0;
        return !1
    }, n._checkForPlaybackGap = function() {
        const e = this.buffered;
        if (!e.length) return;
        const t = e.length,
            n = this._video.currentTime;
        let r, i, o;
        try {
            r = function(e, t) {
                if (!e || !e.length) return null;
                if (1 === e.length && e.end(0) - e.start(0) < 1e-6) return null;
                let n;
                for (let r = 0; r < e.length; r++)
                    if (e.start(r) > t && (0 === r || e.end(r - 1) - t <= .5)) {
                        n = r;
                        break
                    }
                return n >= 0 ? n : null
            }(e, n)
        } catch (Vd) {
            throw DOMException, Vd
        }
        if (null === r) return;
        if (0 === this._video.readyState) return;
        if (this._video.paused) return;
        if (t <= r) return;
        try {
            i = e.start(r), o = e.end(t - 1)
        } catch (Vd) {
            throw DOMException, Vd
        }
        const s = i - n,
            a = o - i,
            u = this.lowLatencyMode ? 1 : 2;
        if (a > 0 && a <= this.segmentLength * u) {
            const e = "Preventing jump too close to buffered end time." + ` Would have jumped to: ${i}.` + ` Last buffered end time ${o}.`;
            this.fire(mo.BUFFER_GAP_JUMP_PREVENT, {
                msg: e
            })
        } else {
            if (0 === r) {
                const e = `Jumping forward ${s}` + ` seconds because of gap before start time of ${i}`;
                this.fire(mo.BUFFER_GAP_JUMP, {
                    msg: e
                })
            } else {
                const t = `Jumping forward ${s} seconds because of gap starting at` + ` ${e.end(r-1)} and ending at ${i}`;
                this.fire(mo.BUFFER_GAP_JUMP, {
                    msg: t
                })
            }
            this._video.currentTime = i + .1
        }
    }, n._atDurationEnd = function() {
        const e = this.buffered;
        return !!(e && e.length && this._video.currentTime + zs > e.end(e.length - 1))
    }, n.setVideoSrc = function(e) {
        try {
            const t = this;
            return Xs(t._startPreload(t._preload), (function() {
                return Xs(t._loadManifest(e), (function() {
                    t._video.src = URL.createObjectURL(t._sorcerer.mediaSource), t._videoReady.resolve()
                }))
            }))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, n._startPreload = function(e) {
        try {
            const t = this;
            return t._preloadReady = new Ue, "none" === e && t.paused || t._preloadReady.resolve(), t._preloadReady
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, n.getBitrateAtTime = function(e, t) {
        if (!this._sorcerer) return 0;
        const n = this._sorcerer.streamIndexAtTime(e, t);
        return this._streams[t][n] ? this._streams[t][n].bandwidth : 0
    }, n.onprogress = function() {
        this._checkForPlaybackGap()
    }, n.ondurationchange = function() {
        this._checkForPlaybackGap()
    }, n.ontimeupdate = function() {
        if (!this._sorcerer) return;
        if (e.prototype.ontimeupdate.call(this), null !== this._timeToSeekTo) return;
        this.atLiveTail = this._isNearLiveTail(this._video.currentTime), this._shouldSnapToLiveEdge(this._video.currentTime) ? this.atLiveEdge = !0 : (this._video.playbackRate < 1 || this._hasDriftedBehindLiveEdge()) && (this.atLiveEdge = !1), this.fire(po.DROPPED_FRAMES, this._sorcerer.getDroppedFrameTotal());
        const t = this._getCurrentStream();
        if (t) {
            const e = {
                speed: this._abr.getCurrentSpeed(),
                bitrate: t.bitrate,
                speeds: this._sorcerer.getResponseSpeeds()
            };
            this.fire(po.BANDWIDTH, e)
        }!this._isOnline && this._atDurationEnd() && this.fire(mo.STREAM_OFFLINE), !this.lowLatencyMode && wo(this._timeSinceLastStreamSwitchCheck) > this._STREAM_SWITCH_CHECK_INTERVAL && this._loadSegments()
    }, n._shouldSnapToLiveEdge = function(e) {
        return e >= this.liveEdgeTime - 1 * this.segmentLength
    }, n._hasDriftedBehindLiveEdge = function(e) {
        return e >= this.liveEdgeTime - 2 * this.segmentLength
    }, n._isNearLiveTail = function(e) {
        return e <= this.liveTailTime + 2 * this.segmentLength
    }, n._getSeekReadyPromiseForTime = function(e = this._timeToSeekTo) {
        return new Promise((t, n) => {
            this._abr.canPlayFromTimeInStream(e, this._getCurrentStream()) ? t(e) : this._resolveSeek = t
        }).then(e => (this._timeToSeekTo = null, this._seekInProgressPromise = null, this._video.currentTime = e, new Promise((e, t) => {
            this._lastSeekReject = t;
            const n = () => {
                e(this._video.currentTime), this._video.removeEventListener("seeked", n)
            };
            this._video.addEventListener("seeked", n)
        })))
    }, n.seekToTime = function(e) {
        if (!this.eventHasDVREnabled || e === this.currentTime) return Promise.resolve();
        const t = null === this._timeToSeekTo;
        let n;
        if (t || (this._lastSeekReject && (this._lastSeekReject(), this._lastSeekReject = null), this._seekInProgressPromise = null, this._timeToSeekTo = null, this._resolveSeek = null), this._timeToSeekTo = e, !this._abr.canPlayFromTimeInStream(e, this._getCurrentStream())) try {
            this._segmentsAdded = {};
            for (const e in this._streams)
                if (this._streams[e].length > 0) {
                    const t = this.sorcerer[e].activeStreamIndex;
                    this.sorcerer[e].streams[t].abort()
                }
            n = this._sorcerer.removeBuffer()
        } catch (r) {}
        return this._seekInProgressPromise = this._getSeekReadyPromiseForTime(e), Promise.all([this._videoReady, n]).then(() => (this._loadSegments(), t || this.play().catch(this._onPlayError.bind(this)), this._seekInProgressPromise)).catch(e => {})
    }, n.onpause = function() {
        var t;
        e.prototype.onpause.call(this), this.eventHasDVREnabled ? this.atLiveEdge = !1 : (null == (t = this._manifestLoader) || t.stop(), this._sorcerer && (this._sorcerer.abortFetches(), this._segmentsAdded = {}, this._sorcerer.removeBuffer().catch(() => {})))
    }, n.onplay = function() {
        this.eventHasDVREnabled || this._playInitiated && this._refreshManifest()
    }, n.pause = function() {
        this.eventHasDVREnabled && (this.atLiveEdge = !1), e.prototype.pause.call(this)
    }, n.play = function() {
        const t = this;
        return e.prototype.play.call(this, Ys((function() {
            return t._preloadReady.resolve(), null !== t._timeToSeekTo ? Promise.resolve(t._seekInProgressPromise) : Ks((function() {
                if (t._playInitiated && !t.eventHasDVREnabled) return t._segmentsAdded = {}, Gs(qs((function() {
                    return $s(t._sorcerer.removeBuffer())
                }), (function(e) {})), (function() {
                    return $s(t._refreshManifest())
                }))
            }), (function() {
                return Xs(t._videoReady, (function() {
                    return t._loadSegments(), Xs(t._bufferAvailable(), (function() {
                        const e = Math.max(t._latencyController.liveSyncPosition, t._video.buffered.start(0));
                        return t._atLiveEdge ? t.currentTime = e : t.currentTime = t._video.currentTime, t._playInitiated = !0, Promise.resolve()
                    }))
                }))
            }))
        })))
    }, n._bufferAvailable = function() {
        return new Promise(e => {
            const t = () => {
                this.buffered.length && (this._sorcerer.off("appendbufferend", t), e())
            };
            this._sorcerer.on("appendbufferend", t), t()
        })
    }, n._getSegmentTimeoutMs = function() {
        return this._abr.getSegmentRelativeTimeout(this._streams.video, this._getCurrentStream("video"), 1e3 * this.segmentLength)
    }, n._loadMediaManifest = function() {
        return import ("./media-manifest.module.js")
    }, n.setCaptionsShouldDisplay = function(e) {
        this._captionsVisible = e
    }, n.setCaptionsShouldLoad = function(e) {
        this._captionsLoading = e
    }, ue(t, [{
        key: "preload",
        get: function() {
            return this._preload
        },
        set: function(e) {
            this._preload !== e && "none" !== e && this._preloadReady.resolve(), this._preload = e
        }
    }, {
        key: "supportsPlaybackRate",
        get: function() {
            return e.prototype.supportsPlaybackRate && this.eventHasDVREnabled
        }
    }, {
        key: "latency",
        get: function() {
            var e;
            return null == (e = this._latencyController) ? void 0 : e.latency
        }
    }, {
        key: "lowLatencyMode",
        get: function() {
            return this._lowLatencyMode
        },
        set: function(e) {
            this._lowLatencyMode = e, this._manifestLoader && (this._manifestLoader.lowLatencyMode = e)
        }
    }, {
        key: "downloadSpeed",
        get: function() {
            return this._abr.getCurrentSpeed()
        }
    }, {
        key: "restrictedStreamIndexes",
        get: function() {
            return this._restrictedStreamIndexes
        },
        set: function(e) {
            this._restrictedStreamIndexes.join(",") !== e.join(",") && (this._restrictedStreamIndexes = e, this._abr.lock(this._restrictedStreamIndexes))
        }
    }, {
        key: "videoWidth",
        get: function() {
            return this._stream ? this._stream.width : this._video.videoWidth
        }
    }, {
        key: "videoHeight",
        get: function() {
            return this._stream ? this._stream.height : this._video.videoHeight
        }
    }, {
        key: "currentTime",
        get: function() {
            return null !== this._timeToSeekTo ? this._timeToSeekTo : this._video.currentTime
        },
        set: function(e) {
            this._video.readyState <= 0 || (this.eventHasDVREnabled && this._playInitiated ? this._shouldSnapToLiveEdge(e) ? (this.atLiveEdge = !0, this.seekToTime(this.liveEdgeTime)) : (this.atLiveEdge = !1, this.seekToTime(Math.max(e, this.liveTailTime))) : this._video.currentTime = e)
        }
    }, {
        key: "liveEdgeTime",
        get: function() {
            return this._latencyController.liveSyncPosition
        }
    }, {
        key: "atLiveEdge",
        get: function() {
            return this._atLiveEdge
        },
        set: function(e) {
            this.atLiveEdge !== e && this.eventHasDVREnabled && (this._atLiveEdge = e, this._video.playbackRate > 1 && e && (this._video.playbackRate = 1), this.lowLatencyMode = !!this.eventIsLowLatency && e, this.bufferTarget = e ? this.defaultBufferTarget : 18, e && (this.presentationDelay = this.defaultPresentationDelay))
        }
    }, {
        key: "atLiveTail",
        get: function() {
            return this._atLiveTail
        },
        set: function(e) {
            this.atLiveTail !== e && this.eventHasDVREnabled && (this._atLiveTail = e, this._video.playbackRate < 1 && e && (this._video.playbackRate = 1))
        }
    }, {
        key: "liveTailTime",
        get: function() {
            var e, t, n, r;
            const i = null !== (e = null == (t = this._getCurrentStream()) || null == (n = t.segments) || null == (r = n[0]) ? void 0 : r.start) && void 0 !== e ? e : 0;
            return Math.max(i, 0)
        }
    }, {
        key: "ended",
        get: function() {
            return this._hasLiveEventEnded
        }
    }, {
        key: "isLowerProfileAvailable",
        get: function() {
            return this._sorcerer ? this._sorcerer.video.activeStreamIndex > 0 : null
        }
    }, {
        key: "sorcerer",
        get: function() {
            return this._sorcerer
        }
    }, {
        key: "segmentLength",
        get: function() {
            var e, t, n, r;
            return this.lowLatencyMode && (null == (e = this._manifestLoader) || null == (t = e.activeStream("video")) ? void 0 : t.partTargetDuration) || (null == (n = this._manifestLoader) || null == (r = n.activeStream("video")) ? void 0 : r.targetDuration)
        }
    }]), t
}(Qo);

function Js(e) {
    return e.forEach((e, t) => {
        e.index = t
    }), e
}
const Zs = document.createElement("video"),
    ea = {
        "application/x-mpegURL": "application/x-mpegURL"
    };
let ta = function(e) {
        function t(t, n = {}) {
            var r, i, o;
            return (o = e.call(this, t, n) || this)._apiManifestUrl = null, o._playInitiated = !1, o._atLiveEdge = !0, o._atLiveTail = !1, o._secondsBehindPlaylistStart = 0, o._playlistOffsetSet = !1, o.reset(), o.dvrEnabled = null !== (r = n.dvrEnabled) && void 0 !== r && r, o.liveEventStartTimeEpoch = null !== (i = n.liveEventStartTime) && void 0 !== i ? i : 0, window.addEventListener("online", () => {
                o.play()
            }), o
        }
        he(t, e), ue(t, null, [{
            key: "displayName",
            get: function() {
                return "NativeHLSLiveScanner"
            }
        }, {
            key: "supported",
            get: function() {
                return t.supportedVideoTypes.length > 0
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                const e = [];
                if ("function" != typeof Zs.canPlayType) return e;
                for (const t in ea) {
                    const n = ea[t];
                    Zs.canPlayType(n).replace(/^no$/, "") && e.push(t)
                }
                return e
            }
        }]);
        var n = t.prototype;
        return n.deactivate = function() {
            e.prototype.deactivate.call(this), this.reset()
        }, n.reset = function() {
            this._manifestRefreshTimeout && clearTimeout(this._manifestRefreshTimeout), this._onReady = null, this._manifestRefreshTimeout = null, this._isOnline = !1, this._hasLiveEventEnded = !1, this._hlsAvailabilityCheckTimeout = null, this._bufferedIndex = 0, this._manifestRefreshTimeout = null, this._secondsBehindPlaylistStart = 0, this._playlistOffsetSet = !1, this._abr = new Ms(this, this._options), this._restrictedStreamIndexes = []
        }, n.endLive = function() {
            this._isOnline = !1, this._hasLiveEventEnded = !0, clearTimeout(this._manifestRefreshTimeout), this._video.pause(),
                function(e) {
                    setTimeout(e, 0)
                }(() => {
                    e.prototype.deactivate.call(this), this.fire(lo.ENDED)
                })
        }, n._setUpRefreshTimer = function() {
            const e = Xe(this.video.metadata.playlistRefreshUrl.split("?")[1]);
            e.expires && (this._manifestRefreshTimeout = setTimeout(() => {
                this._refreshLiveApiPlaylistUrl()
            }, 1e3 * (e.expires - 10)))
        }, n._refreshLiveApiPlaylistUrl = function(e = 0) {
            const t = this.video.metadata.playlistRefreshUrl;
            return pt(t).json().then(n => {
                if (!("url" in n)) throw new Error(`Error parsing 'url' key from player live API refresh endpoint: ${t} ${n}`);
                return this._loadNativeHlsManifest(n.url.hls).then(() => (this.play(), this._checkHlsAvailability(5e3), null)).catch(() => this._refreshLiveApiPlaylistUrl(++e))
            }).catch(() => {
                if (e >= 3) throw new Error(`Manifest failed to load after ${e} attempts.`);
                return ++e, this._refreshLiveApiPlaylistUrl(e)
            })
        }, n._setUpLiveEventListeners = function() {
            this.on(mo.STREAM_OFFLINE, () => {
                this._isOnline = !1
            })
        }, n._setUpNativeHls = function(e) {
            return this._setUpLiveEventListeners(), this._isOnline = !0, this.fire(mo.STREAM_ONLINE), this._checkHlsAvailability(5e3), Promise.resolve(e)
        }, n._loadNativeHlsManifest = function(e) {
            return this._apiManifestUrl = e, /json=1/.test(e) ? pt(e).json().then(e => {
                if (!("url" in e)) throw new Error(`Error parsing 'url' key from Live API manifest endpoint: ${this._apiManifestUrl} ${e}`);
                this._video.src = this._getUrlWithMinSecondsParam(e.url), this._setUpRefreshTimer()
            }).catch(e => {
                const t = this.video.metadata.playlistRefreshUrl;
                return pt(t).json().then(e => {
                    if (!("url" in e)) throw new Error(`Error parsing 'url' key from player live API refresh endpoint: ${t} ${e}`);
                    this._apiManifestUrl = e.url.ios, this._video.src = this._getUrlWithMinSecondsParam(e.url.ios), this._setUpRefreshTimer()
                })
            }) : (this._video.src = this._getUrlWithMinSecondsParam(e), this._setUpRefreshTimer(), Promise.resolve())
        }, n._getUrlWithMinSecondsParam = function(e) {
            if (this.dvrEnabled) return e;
            const t = new URL(e);
            return t.searchParams.set("min_seconds", "30"), t.toString()
        }, n._loadTextTracks = function() {
            const e = this._video.textTracks;
            if (null == e ? void 0 : e.length)
                for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    this._loadTextTrack(n)
                }
        }, n._loadTextTrack = function(e) {
            if (e && !this._captionsTrack) {
                const {
                    label: t,
                    kind: n,
                    language: r,
                    id: i
                } = e, o = new Bs({
                    label: t,
                    kind: n,
                    language: r,
                    id: i
                }, this._telecineVideo);
                this._telecineVideo.textTracks = Ao([o]), this._addTextTrackListeners(o, e), this.fire(po.TEXT_TRACKS_AVAILABLE), this._captionsTrack = e
            }
        }, n.setModeForTrack = function(e, t) {
            return this._captionsTrack && this._captionsTrack.mode !== t && (this._captionsTrack.mode = t), this
        }, n.getActiveCuesForTrack = function(e) {
            return this._captionsTrack && "disabled" !== this._captionsTrack.mode ? this._captionsTrack.activeCues : []
        }, n.addTextTrack = function(e) {
            return this._captionsTrack || this._loadTextTracks(), this._captionsTrack
        }, n._checkHlsAvailability = function(e) {
            "number" == typeof Bt.iOS && Bt.iOS < 9 || this._hlsAvailabilityCheckTimeout || (this._hlsAvailabilityCheckTimeout = setTimeout(() => {
                if (!this._isOnline) return;
                const e = new XMLHttpRequest;
                e.onload = () => {
                    410 !== e.status ? (200 !== e.status && this.fire(mo.STREAM_OFFLINE), e.response.match(/^#EXTM3U\n#EXT-X-VERSION:3\n$/) && this.fire(mo.STREAM_OFFLINE)) : this._refreshLiveApiPlaylistUrl()
                }, e.onerror = () => {
                    this.fire(mo.STREAM_OFFLINE)
                }, /json=1/.test(this._apiManifestUrl) ? pt(this._apiManifestUrl).json().then(t => {
                    "url" in t || this.fire(mo.STREAM_OFFLINE), e.open("GET", t.url), e.send()
                }).catch(() => {
                    e.open("GET", this._apiManifestUrl), e.send()
                }) : (e.open("GET", this._apiManifestUrl), e.send())
            }, e))
        }, n._shouldSnapToLiveEdge = function(e) {
            return e >= this.liveEdgeTime - 3
        }, n._hasDriftedBehindLiveEdge = function(e) {
            return e >= this.liveEdgeTime - 6
        }, n._isNearLiveTail = function(e) {
            return e <= this.liveTailTime + 6
        }, n.setVideoSrc = function(e) {
            this._onReady = this._setUpNativeHls(e).then(() => (this._apiManifestUrl = e, this._loadNativeHlsManifest(e)))
        }, n.ontimeupdate = function() {
            e.prototype.ontimeupdate.call(this), this.atLiveTail = this._isNearLiveTail(this._video.currentTime), this._shouldSnapToLiveEdge(this._video.currentTime) ? this.atLiveEdge = !0 : (this._video.playbackRate < 1 || this._hasDriftedBehindLiveEdge()) && (this.atLiveEdge = !1)
        }, n.onplaying = function() {
            this._playInitiated = !0
        }, n.oncanplay = function() {
            if (!this._playInitiated) {
                const e = this._video.seekable.length;
                e > 0 && (this._video.currentTime = this._video.seekable.end(e - 1))
            }
            if (!this._playlistOffsetSet) {
                this._playlistOffsetSet = !0;
                const e = this._video.getStartDate().getTime() / 1e3;
                this._secondsBehindPlaylistStart = e - this.liveEventStartTimeEpoch
            }
            this._loadTextTracks()
        }, n.onprogress = function() {
            this._hlsAvailabilityCheckTimeout && (clearTimeout(this._hlsAvailabilityCheckTimeout), this._hlsAvailabilityCheckTimeout = null)
        }, n.onstalled = function() {
            this._checkHlsAvailability(1e4)
        }, n.onerror = function() {
            return this._video.error.code === this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED ? (pt(this._apiManifestUrl).then(() => {
                e.prototype.onerror.call(this)
            }).catch(t => {
                t instanceof Qe ? this.fire(lo.ERROR, new No("MediaNetworkError", "A network error ocurred while fetching the media.")) : e.prototype.onerror.call(this)
            }), !1) : e.prototype.onerror.call(this)
        }, n.onwaiting = function() {
            this._checkHlsAvailability(1e4)
        }, n.pause = function() {
            this.dvrEnabled && (this.atLiveEdge = !1), e.prototype.pause.call(this)
        }, n.play = function() {
            return e.prototype.play.call(this, () => this._onReady)
        }, ue(t, [{
            key: "currentTime",
            get: function() {
                return this._secondsBehindPlaylistStart + this._video.currentTime
            },
            set: function(e) {
                if (this.liveEdgeTime) {
                    const t = e >= this.liveEdgeTime - 3;
                    this.atLiveEdge = t
                }
                this._video.currentTime = e - this._secondsBehindPlaylistStart
            }
        }, {
            key: "liveEdgeTime",
            get: function() {
                const e = this._video.seekable.length;
                return e > 0 ? this._secondsBehindPlaylistStart + this._video.seekable.end(e - 1) : 0
            }
        }, {
            key: "atLiveEdge",
            get: function() {
                return this._atLiveEdge
            },
            set: function(e) {
                this.dvrEnabled && (this._atLiveEdge = e, this._video.playbackRate > 1 && e && (this._video.playbackRate = 1))
            }
        }, {
            key: "atLiveTail",
            get: function() {
                return this._atLiveTail
            },
            set: function(e) {
                this.dvrEnabled && (this._atLiveTail = e, this._video.playbackRate < 1 && e && (this._video.playbackRate = 1))
            }
        }, {
            key: "liveTailTime",
            get: function() {
                return this._video.seekable.length > 0 ? this._secondsBehindPlaylistStart + this._video.seekable.start(0) : 0
            }
        }, {
            key: "ended",
            get: function() {
                return this._hasLiveEventEnded
            }
        }, {
            key: "supportsPlaybackRate",
            get: function() {
                return e.prototype.supportsPlaybackRate && this.dvrEnabled
            }
        }]), t
    }(Qo),
    na = function() {
        function e(e, t = {}) {
            this._telecine = e, this._element = e._element, this._options = t
        }
        ue(e, null, [{
            key: "displayName",
            get: function() {
                return "Effect"
            }
        }, {
            key: "supported",
            get: function() {
                return !1
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return []
            }
        }]);
        var t = e.prototype;
        return t.activate = function() {
            throw new No("NotImplemented", "The effect must implement the activate method.")
        }, t.deactivate = function() {
            throw new No("NotImplemented", "The effect must implement the deactivate method.")
        }, e
    }();
const ra = new WeakMap,
    ia = new WeakMap;
let oa = function() {
        function e({
            src: e,
            mime: t,
            id: n = Ro(),
            priority: r = 0,
            metadata: i = {}
        }, o) {
            if (!e) throw new TypeError("Must provide a src for the file.");
            if (!t) throw new TypeError("Must provide a mime type for the file.");
            Object.defineProperties(this, {
                mime: {
                    value: t,
                    enumerable: !0
                },
                id: {
                    value: `${n}`,
                    enumerable: !0
                },
                metadata: {
                    value: i,
                    enumerable: !0
                }
            }), this.video = o, this.priority = r, this.src = e
        }
        return ue(e, [{
            key: "priority",
            get: function() {
                return ra.get(this)
            },
            set: function(e) {
                if (!("number" == typeof(e = parseInt(e, 10)) && isFinite(e) && Math.floor(e) === e && e >= 0)) throw new TypeError("The file priority must be an integer greater than or equal to 0.");
                ra.set(this, e)
            }
        }, {
            key: "src",
            get: function() {
                return ia.get(this)
            },
            set: function(e) {
                ia.set(this, e), this.video.fire(po.FILE_SRC_UPDATE, this)
            }
        }, {
            key: "restrictedStreamIndexes",
            get: function() {
                if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams.");
                return this.video.currentScanner.restrictedStreamIndexes
            },
            set: function(e = []) {
                if (!Array.isArray(e)) throw new TypeError("Indexes must be an array.");
                if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams.");
                this.video.currentScanner.restrictedStreamIndexes = e
            }
        }]), e
    }(),
    sa = function() {
        function e({
            enabled: e = !1,
            id: t = Ro(),
            kind: n = "",
            label: r = "",
            language: i = ""
        }, o) {
            this._enabled = e, dr(this), Object.defineProperties(this, {
                kind: {
                    value: n,
                    enumerable: !0
                },
                label: {
                    value: r,
                    enumerable: !0
                },
                language: {
                    value: i,
                    enumerable: !0
                },
                id: {
                    value: `${t}`,
                    enumerable: !0
                }
            }), this.video = o
        }
        return e.prototype.dispatchEvent = function(e) {
            this.fire(e, {
                target: this
            })
        }, ue(e, [{
            key: "enabled",
            get: function() {
                return this._enabled
            },
            set: function(e) {
                this._enabled = e
            }
        }, {
            key: "active",
            get: function() {
                return this._enabled
            }
        }]), e
    }();

function aa() {
    return !!(window.MediaKeys && window.navigator && window.navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration || window.WebKitMediaKeys)
}

function ua(e, t, n) {
    "string" == typeof t && (t = function(e) {
        const t = new ArrayBuffer(2 * e.length),
            n = new Uint16Array(t);
        for (let r = 0, i = e.length; r < i; r++) n[r] = e.charCodeAt(r);
        return n
    }(t));
    let r = 0;
    const i = new ArrayBuffer(e.byteLength + 4 + t.byteLength + 4 + n.byteLength),
        o = new DataView(i);
    new Uint8Array(i, r, e.byteLength).set(e), r += e.byteLength, o.setUint32(r, t.byteLength, !0), r += 4;
    const s = new Uint8Array(i, r, t.byteLength);
    return s.set(t), r += s.byteLength, o.setUint32(r, n.byteLength, !0), r += 4, new Uint8Array(i, r, n.byteLength).set(n), new Uint8Array(i, 0, i.byteLength)
}

function ca(e, t = !0) {
    const n = t ? e.buffer : e,
        r = String.fromCharCode.apply(null, new Uint16Array(n)),
        i = (new DOMParser).parseFromString(r, "application/xml"),
        o = {},
        s = i.getElementsByTagName("HttpHeader");
    for (let a = 0; a < s.length; ++a) {
        const e = s[a].querySelector("name"),
            t = s[a].querySelector("value");
        o[e.textContent] = t.textContent
    }
    return [o, e = ko(i.querySelector("Challenge").textContent)]
}

function la(e, t, n, r) {
    const i = r.audio || [],
        o = r.video || [],
        s = [{
            video: "HW_SECURE_ALL",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "HW_SECURE_DECODE",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "HW_SECURE_CRYPTO",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "SW_SECURE_DECODE",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "SW_SECURE_CRYPTO",
            audio: "SW_SECURE_CRYPTO"
        }].map(e => {
            const t = {
                persistentState: "optional",
                sessionTypes: ["temporary"]
            };
            return o.length && (t.videoCapabilities = o.map(t => ({
                contentType: t,
                robustness: e.video
            }))), i.length && (t.audioCapabilities = i.map(t => ({
                contentType: t,
                robustness: e.audio
            }))), t
        }),
        a = Object.keys(e).map(r => {
            const i = e[r].id;
            if (t || n) {
                let e = null;
                const n = t ? window.WebKitMediaKeys : window.MSMediaKeys;
                try {
                    e = new n(i)
                } catch (Vd) {}
                return Promise.resolve({
                    name: i,
                    keySystem: e
                })
            }
            return navigator.requestMediaKeySystemAccess(i, s).then(e => e.createMediaKeys()).catch(e => {}).then(e => ({
                name: i,
                keySystem: e
            }))
        });
    return Promise.all(a)
}

function da(e, t) {
    let n = null;
    return Object.keys(e).forEach(r => {
        t.name === e[r].id && (n = e[r])
    }), n
}
let ha = function() {
        function e(e, t) {
            this._cdms = e.cdms, this._lrToken = e.lr_token, this._userId = e.user, this._assetId = e.asset, this._useHls = t, this._licenseUrl = null, this._keySession = null, this._preferredKeySystem = null, this._encryptedEventName = null, this._boundGenerateRequest = this._generateRequest.bind(this)
        }
        var t = e.prototype;
        return t.init = function(e, t = {}) {
            return this._video = e._video, this._scanner = e, aa() ? (this._licenseRequestMetadata = function(e, t) {
                const n = {},
                    r = `${window.screen.availWidth}x${window.screen.availHeight}`,
                    i = window.devicePixelRatio;
                return n.merchant = "vimeo", n.sessionId = JSON.stringify({
                    ua: navigator.userAgent,
                    token: e,
                    resolution: r,
                    pixelRatio: i
                }), n.userId = t, n
            }(this._lrToken, this._userId), la(this._cdms, this._useHls, !1, t).then(e => {
                if (e.forEach(e => {
                        e.keySystem && (this._preferredKeySystem = e)
                    }), !this._preferredKeySystem) return this._scanner.fire(po.EME_UNSUPPORTED), !1;
                const t = da(this._cdms, this._preferredKeySystem);
                return this._encryptedEventName = "encrypted", this._licenseUrl = t.license_url, this._useHls && (this._certificateUrl = t.certificate_url, this._encryptedEventName = "webkitneedkey"), this._video.addEventListener(this._encryptedEventName, this._boundGenerateRequest), this._useHls ? (this._video.webkitSetMediaKeys(this._preferredKeySystem.keySystem), !0) : this._video.mediaKeys ? (this._keySession = this._video.mediaKeys.createSession(), this._keySession.addEventListener("message", e => this._getLicense(e)), !0) : (this._keySession = this._preferredKeySystem.keySystem.createSession(), this._keySession.addEventListener("message", e => this._getLicense(e)), this._video.setMediaKeys(this._preferredKeySystem.keySystem), !0)
            })) : (this._scanner.fire(po.EME_UNSUPPORTED), !1)
        }, t.destroy = function() {
            this._keySession && this._keySession.sessionId && this._keySession.close(), this._video.removeEventListener(this._encryptedEventName, this._boundGenerateRequest)
        }, t._generateRequest = function(e) {
            return "com.apple.fps.1_0" === this._preferredKeySystem.name ? (this._loadFairPlayCertificate().then(t => {
                this._contentId = `assetId=${this._assetId}`;
                const n = ua(e.initData, this._contentId, t);
                return this._keySession = this._preferredKeySystem.keySystem.createSession("video/mp4", n), this._keySession.addEventListener("webkitkeymessage", e => this._getLicense(e)), t
            }).catch(e => {
                this._scanner.fire(e.error, e.payload)
            }), !0) : !this._keySession.sessionId && !this._activeKeySession && (this._activeKeySession = this._keySession.generateRequest(e.initDataType, e.initData).catch(() => {
                this._scanner.fire(po.DRM_FAILURE)
            }), !0)
        }, t._getLicense = function(e) {
            return new Promise((t, n) => {
                this._activeKeySession = null;
                const r = new XMLHttpRequest;
                r.keySession = e.target, r.responseType = "arraybuffer", r.open("POST", this._licenseUrl), r.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(this._licenseRequestMetadata)));
                let i = e.message;
                if ("com.microsoft.playready" === this._preferredKeySystem.name) {
                    const t = ca(e.message, !1),
                        n = t[0];
                    Object.keys(n).forEach(e => {
                        r.setRequestHeader([e], n[e])
                    }), i = t[1]
                }
                if ("com.apple.fps.1_0" === this._preferredKeySystem.name) {
                    let e = btoa(String.fromCharCode.apply(null, i));
                    e = encodeURIComponent(e), i = `spc=${e}&${this._contentId}`, r.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
                }
                r.onload = () => {
                    if (403 !== r.status)
                        if (r.status >= 400) n({
                            error: po.DRM_FAILURE
                        });
                        else try {
                            this._scanner.fire(po.DRM_AUTH_SUCCESS);
                            const e = new Uint8Array(r.response);
                            let n = e.buffer;
                            "com.apple.fps.1_0" === this._preferredKeySystem.name && (n = function(e) {
                                let t = window.atob(e.trim());
                                return "<ckc>" === t.substr(0, 5) && "</ckc>" === t.substr(-6) && (t = t.slice(5, -6)), new Uint8Array(atob(t).split("").map(e => e.charCodeAt(0)))
                            }(btoa(String.fromCharCode.apply(null, e)))), r.keySession.update(n), t()
                        } catch (Vd) {
                            n(`Error updating key session: ${Vd}`)
                        } else {
                            const e = JSON.parse(r.getResponseHeader("x-dt-error-message"));
                            n({
                                error: po.DRM_AUTH_FAILURE,
                                payload: {
                                    text: e.error,
                                    code: e.error_code
                                }
                            })
                        }
                }, r.onerror = n, r.send(i)
            }).catch(e => {
                this._scanner.fire(e.error, e.payload)
            })
        }, t._loadFairPlayCertificate = function() {
            return new Promise((e, t) => {
                const n = new XMLHttpRequest;
                n.responseType = "arraybuffer", n.open("GET", this._certificateUrl), n.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(this._licenseRequestMetadata))), n.onload = () => {
                    if (403 !== n.status)
                        if (n.status >= 400) t({
                            error: po.DRM_FAILURE
                        });
                        else try {
                            e(new Uint8Array(n.response))
                        } catch (Vd) {
                            t(Vd)
                        } else {
                            const e = JSON.parse(n.getResponseHeader("x-dt-error-message"));
                            t({
                                error: po.DRM_AUTH_FAILURE,
                                payload: {
                                    text: e.error,
                                    code: e.error_code
                                }
                            })
                        }
                }, n.onerror = t, n.send()
            })
        }, e
    }(),
    fa = function() {
        function e() {
            this._cdmList = {}, this._preferredKeySystems = {}, this._licenseTokenUrls = {}, this._licenseUrls = {}, this._certificateUrls = {}, this._keySessions = {}, this._keyChainState = "default", this._keyTypes = {
                KEYCHAIN_DEFAULT: "default",
                KEYCHAIN_SD_FALLBACK: "sd-fallback"
            }
        }
        var t = e.prototype;
        return t.getAllKeySessions = function() {
            return Object.values(this._keySessions) || []
        }, t.getCdms = function(e) {
            return this._cdmList[e]
        }, t.getAllPreferredKeySystems = function() {
            return this._preferredKeySystems
        }, t.addCdms = function(e, t) {
            this._cdmList[t] = e
        }, t.addKeySession = function(e, t) {
            this._keySessions[t] = e
        }, t.addLicenseTokenUrl = function(e, t) {
            this._licenseTokenUrls[t] = e
        }, t.addLicenseUrl = function(e, t) {
            this._licenseUrls[t] = e
        }, t.addPreferedKeySystem = function(e, t) {
            this._preferredKeySystems[t] = e
        }, t.closeAllKeySessions = function() {
            for (let e in this._keySessions) this._keySessions[e] && this._keySessions[e].sessionId && this._keySessions[e].close()
        }, ue(e, [{
            key: "state",
            get: function() {
                return this._keyChainState
            },
            set: function(e) {
                Object.values(this._keyTypes).indexOf(e) < 0 || (this._keyChainState = e)
            }
        }, {
            key: "activeKeySession",
            get: function() {
                return this._keySessions[this._keyChainState]
            }
        }, {
            key: "activeKeySystem",
            get: function() {
                return this._preferredKeySystems[this._keyChainState]
            }
        }, {
            key: "keyTypes",
            get: function() {
                return this._keyTypes
            }
        }, {
            key: "activeLicenseTokenUrl",
            get: function() {
                return this._licenseTokenUrls[this._keyChainState]
            }
        }, {
            key: "activeLicenseUrl",
            get: function() {
                return this._licenseUrls[this._keyChainState]
            }
        }]), e
    }(),
    _a = function() {
        function e(e, t) {
            this._hasFallbackAssets = !!e.fallback_asset, this._useHls = t, this._fallbackCallback = () => null, this._currentTime = 0, this._encryptedEventName = null, this._boundGenerateRequest = this._generateRequest.bind(this), this._boundOnKeyStatus = this._onKeyStatus.bind(this), this._keyChain = new fa, this._keyTypes = this._keyChain.keyTypes, this._keyChain.state = this._keyTypes.KEYCHAIN_DEFAULT, this._keyChain.addCdms(e.cdms, this._keyTypes.KEYCHAIN_DEFAULT), this._hasFallbackAssets && this._keyChain.addCdms(e.fallback_cdms, this._keyTypes.KEYCHAIN_SD_FALLBACK)
        }
        var t = e.prototype;
        return t.init = function(e, t = {}, n = {}) {
            return this._video = e._video, this._scanner = e, this._useMs = !!window.MSMediaKeys, aa() || this._useMs ? this._keyChain.state === this._keyTypes.KEYCHAIN_SD_FALLBACK ? this.setUpKeySystem(t, n, this._keyTypes.KEYCHAIN_SD_FALLBACK).then(() => {
                this._scanner.currentTime = this._currentTime, this._scanner.play()
            }) : this.setUpKeySystem(t, n).then(() => this.setUpKeySystem(t, n, this._keyTypes.KEYCHAIN_SD_FALLBACK)) : (this._scanner.fire(po.EME_UNSUPPORTED), Promise.reject())
        }, t.setUpKeySystem = function(e, t, n = this._keyTypes.KEYCHAIN_DEFAULT) {
            return new Promise((r, i) => {
                const o = this._keyChain.getCdms(n);
                return o || i(), la(o, this._useHls, this._useMs, e).then(e => {
                    this._keyChain.addPreferedKeySystem(e.find(e => e.keySystem), n);
                    const r = this._keyChain.activeKeySystem && da(o, this._keyChain.activeKeySystem);
                    if (!r) throw this._scanner.fire(po.EME_UNSUPPORTED), new Error("No valid key system was found.");
                    this._keyChain.addLicenseTokenUrl(r.license_url, n);
                    const i = t && t.inits && t.inits[r.id];
                    return i || this._addEncryptedHandler(r, n), this._setMediaKeys(n).then(() => {
                        const e = this._keyChain.state === n;
                        return i && e && this._generateRequest(i.cenc, n)
                    })
                }).then(r)
            })
        }, t.destroy = function() {
            this._keyChain && this._keyChain.closeAllKeySessions(), this._video && this._video.removeEventListener(this._encryptedEventName, this._boundGenerateRequest)
        }, t._switchKeyChainState = function(e) {
            return new Promise(t => {
                this._keyChain.state = e, this._keyChain.activeKeySession.addEventListener("message", e => this._getLicense(e)), t()
            })
        }, t._addEncryptedHandler = function(e, t) {
            this._encryptedEventName = "encrypted", this._keyChain.addLicenseUrl(e.license_url, t), this._useHls ? (this._certificateUrl = e.certificate_url, this._encryptedEventName = "webkitneedkey") : this._useMs && (this._encryptedEventName = "msneedkey"), this._video.addEventListener(this._encryptedEventName, this._boundGenerateRequest)
        }, t._setMediaKeys = function(e) {
            return new Promise(t => {
                if (this._useMs) {
                    const e = () => {
                        this._video.msSetMediaKeys(this._keyChain.activeKeySystem.keySystem), this._video.removeEventListener("loadedmetadata", e), t()
                    };
                    this._video.readyState >= 1 ? e() : this._video.addEventListener("loadedmetadata", e)
                } else {
                    if (this._useHls) this._video.webkitSetMediaKeys(this._keyChain.activeKeySystem.keySystem);
                    else {
                        const t = this._video.mediaKeys || this._keyChain.activeKeySystem.keySystem;
                        this._keyChain.addKeySession(this._createSession(t), e), e === this._keyChain.state && this._keyChain.activeKeySession.addEventListener("message", e => this._getLicense(e)), this._video.mediaKeys || this._video.setMediaKeys(this._keyChain.activeKeySystem.keySystem)
                    }
                    t()
                }
            })
        }, t._createSession = function(e, t, n) {
            const r = e.createSession(t, n);
            if (!r) throw new Error("Could not create key session");
            return r
        }, t._generateRequest = function(e, t) {
            t = t || this._keyChain.state;
            const n = new Error("A decryption key error was encountered");
            return "com.apple.fps.1_0" === this._keyChain.activeKeySystem.name ? (this._loadFairPlayCertificate(this._certificateUrl).then(r => {
                this._contentId = function(e) {
                    var t = function(e) {
                            const t = new Uint16Array(e.buffer);
                            return String.fromCharCode.apply(null, t)
                        }(e),
                        n = document.createElement("a");
                    return n.href = t, n.hostname
                }(e.initData);
                const i = ua(e.initData, this._contentId, r);
                return this._keyChain.addKeySession(this._createSession(this._keyChain.activeKeySystem.keySystem, "video/mp4", i), t), this._keyChain.activeKeySession.contentId = this._contentId, this._keyChain.activeKeySession.addEventListener("webkitkeymessage", e => this._getLicense(e)), this._keyChain.activeKeySession.addEventListener("webkitkeyerror", e => {
                    throw n
                }), r
            }).catch(e => {
                this._scanner.fire(e.error, e.payload)
            }), !0) : "com.microsoft.playready" === this._keyChain.activeKeySystem.name ? (this._keyChain.addKeySession(this._createSession(this._video.msKeys, "video/mp4", e.initData), t), this._keyChain.activeKeySession.addEventListener("mskeymessage", e => this._getLicense(e)), this._keyChain.activeKeySession.addEventListener("mskeyerror", e => {
                throw n
            }), !0) : !this._keyChain.activeKeySession.sessionId && !this._activeKeySession && (this._keyChain.activeKeySession.addEventListener("keystatuseschange", this._boundOnKeyStatus), this._activeKeySession = this._keyChain.activeKeySession.generateRequest(e.initDataType, e.initData).catch(() => {
                this._scanner.fire(po.DRM_FAILURE)
            }), !0)
        }, t._onKeyStatus = function() {
            let e = !1;
            const t = Array.from(this._keyChain.activeKeySession.keyStatuses.values());
            if (t.forEach((t, n) => {
                    switch (t) {
                        case "expired":
                            e = !0
                    }
                }), t.every(e => "output-restricted" === e)) {
                if (this._hasFallbackAssets) return this._currentTime = this._scanner.currentTime, void this._switchKeyChainState(this._keyTypes.KEYCHAIN_SD_FALLBACK).then(() => {
                    this._fallbackCallback(), this._scanner.fire(po.DRM_KEY_SWITCH, this._keyTypes.KEYCHAIN_SD_FALLBACK)
                }).catch(e => {
                    this._scanner.fire(po.DRM_OUTPUT_RESTRICTED)
                });
                this._scanner.fire(po.DRM_OUTPUT_RESTRICTED)
            }
            e && this._keyChain.activeKeySession.close()
        }, t._getLicense = function(e) {
            return this._getLicenseUrl(this._keyChain.activeLicenseTokenUrl).then(t => new Promise((n, r) => {
                this._keyChain.addLicenseUrl(t, this._keyChain.state), this._activeKeySession = null;
                const i = new XMLHttpRequest;
                i.keySession = e.target, i.open("POST", this._keyChain.activeLicenseUrl), i.responseType = "arraybuffer";
                let o = e.message;
                if ("com.microsoft.playready" === this._keyChain.activeKeySystem.name) {
                    const t = ca(e.message),
                        n = t[0];
                    Object.keys(n).forEach(e => {
                        i.setRequestHeader(e, n[e])
                    }), o = t[1]
                }
                "com.apple.fps.1_0" === this._keyChain.activeKeySystem.name && (o = new Uint8Array(o), i.setRequestHeader("Content-type", "application/octet-stream")), i.onload = () => {
                    if (403 !== i.status)
                        if (i.status >= 400) r(new No(po.DRM_FAILURE));
                        else try {
                            this._scanner.fire(po.DRM_AUTH_SUCCESS);
                            const e = new Uint8Array(i.response);
                            i.keySession.update(e), n()
                        } catch (Vd) {
                            r(new No(po.DRM_FAILURE, `Error updating key session: ${Vd}`))
                        } else r(new No(po.DRM_AUTH_FAILURE))
                }, i.onerror = r, i.send(o)
            }).catch(e => {
                this._scanner.fire(e.name, {
                    text: e.message || "License request failed."
                })
            }))
        }, t._getLicenseUrl = function(e) {
            return new Promise((t, n) => {
                const r = new XMLHttpRequest;
                r.open("GET", e), r.onload = () => {
                    if (r.status >= 400) n(new No(po.DRM_FAILURE));
                    else try {
                        try {
                            const e = JSON.parse(r.response),
                                {
                                    licenseAcquisitionUrl: n,
                                    token: i
                                } = e;
                            if (!n && !i) throw new Error;
                            t(`${n}?ExpressPlayToken=${i}`)
                        } catch (e) {
                            t(r.response)
                        }
                    } catch (Vd) {
                        n(new No(po.DRM_FAILURE, `Error retrieving License Acquisition URL (LA_URL): ${Vd}`))
                    }
                }, r.onerror = n, r.send()
            })
        }, t._loadFairPlayCertificate = function(e) {
            return new Promise((t, n) => {
                const r = new XMLHttpRequest;
                r.open("GET", e), r.responseType = "arraybuffer", r.setRequestHeader("Pragma", "Cache-Control: no-cache"), r.setRequestHeader("Cache-Control", "max-age=0"), r.onload = () => {
                    if (403 !== r.status)
                        if (r.status >= 400) n({
                            error: po.DRM_FAILURE
                        });
                        else try {
                            t(new Uint8Array(r.response))
                        } catch (Vd) {
                            n(Vd)
                        } else n({
                            error: po.DRM_AUTH_FAILURE
                        })
                }, r.onerror = n, r.send()
            })
        }, t.setFallbackCallback = function(e) {
            this._fallbackCallback = () => e()
        }, ue(e, [{
            key: "state",
            get: function() {
                return this._keyChain.state
            }
        }, {
            key: "hasFallbackAssets",
            get: function() {
                return this._hasFallbackAssets
            }
        }]), e
    }();
const pa = new WeakMap;
let ma = function() {
        function e({
            files: e,
            id: t = Ro(),
            title: n = null,
            subtitle: r = null,
            metadata: i = {},
            textTracks: o = Ao(),
            audioTracks: s = Ao(),
            externalDisplayFiles: a = {},
            chapters: u = [],
            duration: c
        }) {
            if (!e || !Array.isArray(e)) throw new TypeError("Must provide files for the video.");
            dr(this);
            const l = function(e = []) {
                    return e.getFileById = bo, e
                }(e.map(e => e instanceof oa ? (e.video = this, e) : new oa(e, this))),
                d = Ao(o.map(e => e instanceof Bs ? (e.video = this, e) : new Bs(e, this)));
            this._audioTracksFromConfig = s, Object.keys(a).forEach(e => {
                !a[e] || a[e] instanceof oa || (a[e] = new oa(a[e], this))
            }), Object.defineProperties(this, {
                id: {
                    value: `${t}`,
                    enumerable: !0
                },
                title: {
                    value: n,
                    enumerable: !0
                },
                subtitle: {
                    value: r,
                    enumerable: !0
                },
                metadata: {
                    value: i,
                    enumerable: !0
                },
                files: {
                    value: l,
                    enumerable: !0
                },
                textTracks: {
                    value: d,
                    enumerable: !0,
                    writable: !0
                },
                chapters: {
                    value: u,
                    enumerable: !0
                },
                duration: {
                    value: c,
                    enumerable: !0
                },
                externalDisplayFiles: {
                    value: a,
                    enumerable: !0
                }
            }), i.drm && (i.drm.fastly || "vimeo" === i.drm.system ? this._drmHandler = new _a(i.drm, i.useHls) : this._drmHandler = new ha(i.drm, i.useHls))
        }
        return e.prototype.deactivate = function() {
            this._drmHandler && this._drmHandler.destroy(), this.textTracks.forEach(e => this.currentScanner.removeTextTrack(e))
        }, ue(e, [{
            key: "drmHandler",
            get: function() {
                return this._drmHandler || null
            }
        }, {
            key: "currentFile",
            get: function() {
                return this.currentScanner.currentFile
            },
            set: function(e) {
                this.currentScanner.currentFile = e
            }
        }, {
            key: "currentScanner",
            get: function() {
                return pa.get(this)
            },
            set: function(e) {
                this.currentScanner && this.currentScanner.constructor.supportsTextTracks && this.textTracks.forEach(e => this.currentScanner.removeTextTrack(e)), e.constructor.supportsTextTracks && this.textTracks.forEach(t => e.addTextTrack(t)), pa.set(this, e)
            }
        }, {
            key: "chapters",
            get: function() {
                return this.chapters
            }
        }, {
            key: "audioTracks",
            get: function() {
                return Ao((this.currentScanner.constructor.supportsVideoElementAudioTracks ? Array.from(this.currentScanner.audioTracks) : this._audioTracksFromConfig).map(e => e instanceof sa ? (e.video = this, e) : new sa(e, this)))
            }
        }]), e
    }(),
    va = function() {
        function e(e, t = {}) {
            this._telecine = e, this._options = t, this._bufferInterval = null, this._lastBufferCheckVideoTime = this._options.embedTime ? this._options.embedTime : 0, this._isBuffering = !1, this._isSeeking = !1, this._userPlayState = !1, this.playInitiated = !1, this._isLiveStreamOnline = !1, this._checkInterval = 250, dr(this), this._boundEndBuffering = this._endBuffering.bind(this), this._boundOnPause = this._onPause.bind(this), this._boundOnSeeking = this._onSeeking.bind(this), this._boundOnSeeked = this._onSeeked.bind(this), this._boundOnLiveOnline = this._onLiveOnline.bind(this), this._boundOnLiveOffline = this._onLiveOffline.bind(this), this._toggleEvents(this._telecine.on), this._options.noInterval || this._setUpRebufferMonitor()
        }
        var t = e.prototype;
        return t.destroy = function() {
            clearInterval(this._bufferInterval), this._toggleEvents(this._telecine.off), this._endBuffering()
        }, t._toggleEvents = function(e) {
            e(lo.PAUSE, this._boundOnPause), e(lo.PLAYING, this._boundEndBuffering), e(lo.SEEKING, this._boundOnSeeking), e(lo.SEEKED, this._boundOnSeeked), e(mo.STREAM_ONLINE, this._boundOnLiveOnline), e(mo.STREAM_OFFLINE, this._boundOnLiveOffline)
        }, t._onPause = function() {
            this.userPlayState = !1
        }, t._endBuffering = function() {
            this._isBuffering && (this._isBuffering = !1, this.fire(po.BUFFER_ENDED))
        }, t._onSeeking = function() {
            this._isSeeking = !0
        }, t._onSeeked = function() {
            this._isSeeking = !1
        }, t._onLiveOnline = function() {
            this._isLiveStreamOnline = !0
        }, t._onLiveOffline = function() {
            this._isLiveStreamOnline = !1
        }, t._setUpRebufferMonitor = function() {
            clearInterval(this._bufferInterval), this._bufferInterval = setInterval(this.runIntervalCheck.bind(this), this._checkInterval)
        }, t.runIntervalCheck = function() {
            if (!this._telecine.video) return;
            const e = this._telecine.video.currentScanner;
            if (!e) return;
            const t = this._telecine.isLive(),
                n = e.currentTime,
                r = this._checkInterval / 2 / 1e3;
            if (this.playInitiated && (!this._isSeeking || t) && (!this._telecine.paused || this.userPlayState) && !this._isBuffering && n < this._lastBufferCheckVideoTime + r) {
                if (t && !this._isLiveStreamOnline) return;
                const e = this._telecine.buffered;
                for (let t = 0; t < e.length; t++)
                    if (n >= e.start(t) && n + .2 <= e.end(t)) return;
                if (n + r >= this._telecine.duration) return;
                this._isBuffering = !0, this.fire(po.BUFFER_STARTED)
            }(this.playInitiated && this._isBuffering && n > this._lastBufferCheckVideoTime + r || t && !this._isLiveStreamOnline && this._isBuffering) && (this._isBuffering = !1, this.fire(po.BUFFER_ENDED)), this._lastBufferCheckVideoTime = n
        }, ue(e, [{
            key: "userPlayState",
            get: function() {
                return this._userPlayState
            },
            set: function(e) {
                this._userPlayState = e, e || this._endBuffering()
            }
        }]), e
    }();

function ga() {
    let e, t;

    function n() {
        if (!t) return Promise.reject();
        e.preload = "";
        let n = e.play();
        return void 0 === n && (n = new Promise(t => {
            e.addEventListener("playing", t)
        })), n
    }

    function r() {
        t && (t.resolve(), t = null)
    }

    function i(e) {
        t && (t.reject(e), t = null)
    }
    return {
        set video(t) {
            e = t
        },
        get video() {
            return e
        },
        get active() {
            return !!t
        },
        start: function(o = Promise.resolve.bind(Promise)) {
            return t || (t = new Ue), e.src ? document.createElement("video").load() : e.load(), o().then(n).then(r).catch(i), t
        },
        cancel: function() {
            t && (t.reject(new No("PlayInterrupted", "The play() request was interrupted by a call to pause()")), t = null)
        }
    }
}
let ya = function() {
        function e(e, t, n = {}) {
            this._element = e, this._scanners = t, this._options = n, this._video = null, this._textTracks = Ao(), this._properties = {}, this._currentScanner = new Qo(e), this._options.playRequest = new ga, this._blacklistedScanners = [], this._activeEffects = [], this._previousScanner = null, this._switchingVideo = !1, this._snapshotDisplayed = !1, dr(this)
        }
        var t = e.prototype;
        return t.supportsEffect = function(e) {
            return !!e.supported && e.supportedScanners.some(e => this._getScannerName(this._currentScanner) === e.displayName)
        }, t.getEffectByName = function(e) {
            let t = null;
            return this._activeEffects.forEach(n => {
                e === this._getEffectName(n) && (t = n)
            }), t
        }, t.activateEffect = function(e, t) {
            const n = new e(this, t);
            return n.activate(), this._activeEffects.push(n), n
        }, t.deactivateEffect = function(e) {
            return this._activeEffects.some((t, n) => t.constructor === e && (t.deactivate(), this._activeEffects.splice(n, 1), !0))
        }, t.deactivateEffects = function() {
            this._activeEffects.forEach(e => this.deactivateEffect(e.constructor))
        }, t.play = function() {
            if (!this._video || this._video.files.length < 1) throw new No("NoFiles", "There are no files to play.");
            this._rebufferMonitor.playInitiated || (this._rebufferMonitor.playInitiated = !0), this._rebufferMonitor.userPlayState = !0;
            const e = this._currentScanner.play();
            return this._properties.paused = !1, e
        }, t.pause = function() {
            if (!this._video || this._video.files.length < 1) throw new No("NoFiles", "There are no files to play.");
            return this._rebufferMonitor.userPlayState = !1, this._currentScanner.pause(), this._properties.paused = !0, this
        }, t.isLive = function() {
            return this.currentScannerName.includes("Live")
        }, t.endLive = function() {
            this._currentScanner.endLive()
        }, t.getBitrateAtTime = function(e, t = "video") {
            return "MediaSourceScanner" !== this._getScannerName(this._currentScanner) && "HLSLiveScanner" !== this._getScannerName(this._currentScanner) || "audio" === t && this._currentScanner._streams[t].length <= 1 ? 0 : this._currentScanner.getBitrateAtTime(e, t)
        }, t.getCurrentStream = function(e = "video") {
            var t, n;
            return null == (t = (n = this._currentScanner).getCurrentStream) ? void 0 : t.call(n, e)
        }, t.showExternalDisplayPicker = function(e) {
            this._currentScanner.showExternalDisplayPicker(e)
        }, t.requestPictureInPicture = function() {
            return this._currentScanner.requestPictureInPicture()
        }, t.exitPictureInPicture = function() {
            return this._currentScanner.exitPictureInPicture()
        }, t.addChapter = function(e, t) {
            this._currentScanner.addChapter(e, t)
        }, t.removeChapter = function(e) {
            this._currentScanner.removeChapter(e)
        }, t.addCuePoint = function(e, t) {
            return this._currentScanner.addCuePoint(e, t)
        }, t.removeCuePoint = function(e) {
            return this._currentScanner.removeCuePoint(e)
        }, t.removeAllCuePoints = function() {
            return this._currentScanner.removeAllCuePoints()
        }, t.enableAudioTrack = function(e) {
            return this._currentScanner.enableAudioTrack(e)
        }, t.addVideoEventListeners = function() {
            return this._currentScanner.addVideoEventListeners()
        }, t.removeVideoEventListeners = function() {
            return this._currentScanner.removeVideoEventListeners()
        }, t._findScanner = function({
            textTrackSupport: e = !1
        } = {}) {
            const t = this._video.files.sort((e, t) => e.priority - t.priority),
                n = this._scanners;
            for (const r in t) {
                let i = t[r];
                for (const t in n) {
                    let r = n[t];
                    if (r.supported && (!e || r.supportsTextTracks) && -1 === this._blacklistedScanners.indexOf(this._getScannerName(r)) && r.supportedVideoTypes.some(e => i.mime === e)) return r
                }
            }
            return null
        }, t.reactivate = function() {
            var e;
            (null == (e = this._currentScanner) ? void 0 : e.reactivate) && this._currentScanner.reactivate(), this.play()
        }, t.checkRebuffer = function(e, t) {
            this._rebufferMonitor && (this._rebufferMonitor.playInitiated = e, this._rebufferMonitor.userPlayState = t, this._rebufferMonitor.runIntervalCheck())
        }, t._initScanner = function(e, t) {
            if (this._currentScanner.constructor === e && this._currentScanner.video === t) return;
            const n = !this.isLive() && this._currentScanner._preserveCurrentTime;
            this._switchingVideo ? (this._previousScanner = this._currentScanner, this._previousScanner._switchingVideo = !0, this._snapshotDisplayed || (this._previousScanner.takeSnapshot(), this._snapshotDisplayed = !0), this._previousScanner.deactivate()) : this._currentScanner.deactivate();
            const r = new e(this._element, this._options);
            Object.keys(Eo).forEach(e => {
                const t = Eo[e];
                r.on(t, e => this._handleEvent(t, e, r))
            }), this._currentScanner = r, t.currentScanner = r, this._currentScanner.video = t;
            const i = Object.keys(this._properties);
            for (let o = 0; o < i.length; o++) {
                const e = i[o];
                "paused" !== e ? ("currentTime" !== e || n) && (this._currentScanner[e] = this._properties[e]) : !1 === this._properties.paused && this._currentScanner.play()
            }
            this._currentScanner.addChapters(t.chapters, t.duration), this.fire(po.SCANNER_CHANGE, this._getScannerName(this._currentScanner)), this._currentScanner.on(["canplay", "playing"], () => {
                this._previousScanner && (this._previousScanner._switchingVideo = !1, this._previousScanner.removeSnapshot(), this._previousScanner = null, this._snapshotDisplayed = !1)
            })
        }, t._updateScanner = function() {
            if (null === this._video) return;
            const e = this._findScanner({
                textTrackSupport: this._video.textTracks.length > 0
            });
            e ? this._initScanner(e, this._video) : this._fireVideoError("FilesNotPlayable", "None of the files could be played in this browser.")
        }, t._resetScanner = function() {
            this._currentScanner.deactivate(), this._currentScanner = new Qo(this._element)
        }, t._handleEvent = function(e, t, n) {
            if (n === this._currentScanner) {
                switch (e) {
                    case lo.ERROR:
                        return void(t instanceof No && this.fire(lo.ERROR, t));
                    case po.SCANNER_ERROR:
                        this._fireVideoError("ScannerError", `The current scanner can no longer be used because ${t.reason}`), this._blacklistedScanners.push(this._getScannerName(this._currentScanner)), this._updateScanner([]);
                        break;
                    case po.FILE_ERROR:
                        this._fireVideoError("FileError", `The current file can no longer be used because ${t.reason}`), this._currentScanner._switchToNextFile();
                        break;
                    case po.DOWNLOAD_ERROR:
                        this._fireVideoError("DownloadError", t), this._currentScanner._switchToNextFile();
                        break;
                    case po.EME_UNSUPPORTED:
                        this._fireVideoError("DRMFailure", {
                            text: null,
                            code: "emeunsupported"
                        });
                        break;
                    case po.DRM_FAILURE:
                    case po.DRM_AUTH_FAILURE:
                        this._fireVideoError("DRMFailure", {
                            text: t.text,
                            code: t.code
                        });
                        break;
                    case po.DRM_OUTPUT_RESTRICTED:
                        this._fireVideoError("DRMFailure", {
                            text: null,
                            code: "outputrestricted"
                        });
                        break;
                    case po.DRM_AUTH_SUCCESS:
                        this.fire(po.DRM_AUTH_SUCCESS);
                        break;
                    case lo.TIME_UPDATE:
                        this._properties.currentTime = this._currentScanner.currentTime;
                        break;
                    case po.MEDIA_URL_EXPIRED:
                        this._fireVideoError("MediaUrlExpired", t);
                        break;
                    case po.MEDIA_URL_BAD_REQUEST:
                        this._fireVideoError("MediaUrlBadRequest", t);
                        break;
                    case yo.BRAIN_ML_MODEL_ERR:
                        this._fireVideoError("MimirError", t);
                        break;
                    case yo.BRAIN_ML_MODEL_NET_ERR:
                        this._fireVideoError("MimirNetworkError", t);
                        break;
                    case yo.BRAIN_ML_MODEL_TIMEOUT:
                        this._fireVideoError("MimirNetworkTimeout", t);
                        break;
                    case vo.SPATIAL_UNSUPPORTED:
                        this.getEffectByName("ThreeSixtyEffect").deactivate();
                        break;
                    case lo.ENDED:
                        const e = !this._options.dvrEnabled || this.atLiveEdge;
                        this._properties.paused = e;
                        break;
                    case lo.WAITING:
                        this.fire(lo.WAITING)
                }
                this._activeEffects.forEach(t => {
                    "function" == typeof t[`on${e}`] && t[`on${e}`]()
                }), this.fire(e, t)
            }
        }, t._fireVideoError = function(e, t) {
            this.fire(lo.ERROR, new No(e, t))
        }, t._getScannerName = function(e) {
            return e instanceof Qo ? e.constructor.displayName : e.prototype.constructor.displayName
        }, t._setUpRebufferMonitor = function() {
            this._rebufferMonitor && this._rebufferMonitor.destroy(), this._rebufferMonitor = new va(this, this._options), this._rebufferMonitor.on(po.BUFFER_STARTED, () => {
                this.fire(po.BUFFER_STARTED)
            }), this._rebufferMonitor.on(po.BUFFER_ENDED, () => {
                this.fire(po.BUFFER_ENDED)
            })
        }, t._getEffectName = function(e) {
            return e instanceof na ? e.constructor.displayName : e.prototype.constructor.displayName
        }, t.setCaptionsShouldDisplay = function(e) {
            "HLSLiveScanner" === this._getScannerName(this._currentScanner) && this._currentScanner.setCaptionsShouldDisplay(e)
        }, t.setCaptionsShouldLoad = function(e) {
            "HLSLiveScanner" === this._getScannerName(this._currentScanner) && this._currentScanner.setCaptionsShouldLoad(e)
        }, ue(e, [{
            key: "element",
            get: function() {
                return this._element
            }
        }, {
            key: "videoElement",
            get: function() {
                return this._currentScanner.videoElement
            }
        }, {
            key: "manifest",
            get: function() {
                return this._currentScanner.manifest || {
                    video: []
                }
            }
        }, {
            key: "supportsSettingVolume",
            get: function() {
                return this._scanners.some(e => e.supported && e.supportsSettingVolume)
            }
        }, {
            key: "supportsPlaybackRate",
            get: function() {
                return this._currentScanner.supportsPlaybackRate
            }
        }, {
            key: "supportsTextTracks",
            get: function() {
                return this._scanners.some(e => e.supported && e.supportsTextTracks)
            }
        }, {
            key: "supportsVideoElementAudioTracks",
            get: function() {
                return this._currentScanner.constructor.supportsVideoElementAudioTracks
            }
        }, {
            key: "activeEffects",
            get: function() {
                return this._activeEffects
            }
        }, {
            key: "latency",
            get: function() {
                return this._currentScanner.latency
            }
        }, {
            key: "downloadSpeed",
            get: function() {
                return this._currentScanner.downloadSpeed || 0
            }
        }, {
            key: "pictureInPictureActive",
            get: function() {
                return this._currentScanner.pictureInPictureActive
            }
        }, {
            key: "pictureInPictureEnabled",
            get: function() {
                return this._currentScanner.pictureInPictureEnabled
            }
        }, {
            key: "isLowerProfileAvailable",
            get: function() {
                return this._currentScanner.isLowerProfileAvailable
            }
        }, {
            key: "buffered",
            get: function() {
                return this._currentScanner.buffered
            }
        }, {
            key: "bufferTarget",
            get: function() {
                return this._currentScanner.bufferTarget
            },
            set: function(e) {
                this._properties.bufferTarget = e, this._currentScanner.bufferTarget = e
            }
        }, {
            key: "presentationDelay",
            get: function() {
                return this._currentScanner.presentationDelay
            },
            set: function(e) {
                this._properties.presentationDelay = e, this._currentScanner.presentationDelay = e
            }
        }, {
            key: "lowLatencyMode",
            get: function() {
                return this._currentScanner.lowLatencyMode
            },
            set: function(e) {
                this._properties.lowLatencyMode = e, this._currentScanner.lowLatencyMode = e
            }
        }, {
            key: "manifestLoadDurations",
            get: function() {
                return this._currentScanner.manifestLoadDurations ? this._currentScanner.manifestLoadDurations : []
            }
        }, {
            key: "successfulSegments",
            get: function() {
                return this._currentScanner.successfulSegments ? this._currentScanner.successfulSegments : []
            }
        }, {
            key: "failedSegments",
            get: function() {
                return this._currentScanner.failedSegments ? this._currentScanner.failedSegments : []
            }
        }, {
            key: "cuePoints",
            get: function() {
                return this._currentScanner.cuePoints
            }
        }, {
            key: "currentChapterID",
            get: function() {
                if (this._currentScanner && this._currentScanner.chaptersTrack && this._currentScanner.chaptersTrack.activeCues.length) {
                    const {
                        activeCues: e
                    } = this._currentScanner.chaptersTrack;
                    return e[e.length - 1].id
                }
                return null
            }
        }, {
            key: "chapters",
            get: function() {
                return this._currentScanner.chaptersTrack ? this._currentScanner.chaptersTrack.cues : []
            }
        }, {
            key: "chaptersTrack",
            get: function() {
                return this._currentScanner.chaptersTrack
            }
        }, {
            key: "currentFile",
            get: function() {
                return this._currentScanner.currentFile
            },
            set: function(e) {
                if ("string" == typeof e && (e = this._files.filter(t => t.id === e)[0]), !e) throw new No("FileNotValid", "The file is not valid.");
                this._currentScanner.currentFile = e
            }
        }, {
            key: "currentScannerName",
            get: function() {
                return this._getScannerName(this._currentScanner)
            }
        }, {
            key: "currentScanner",
            get: function() {
                return this._currentScanner
            }
        }, {
            key: "currentTime",
            get: function() {
                return this._currentScanner.currentTime
            },
            set: function(e) {
                this._properties.currentTime = e, this._currentScanner.currentTime = e
            }
        }, {
            key: "liveEdgeTime",
            get: function() {
                const e = this._currentScanner.liveEdgeTime;
                return null == e ? this._previousLiveEdgeTime : (this._previousLiveEdgeTime = e, e)
            }
        }, {
            key: "atLiveEdge",
            get: function() {
                var e;
                return null !== (e = this._currentScanner.atLiveEdge) && void 0 !== e ? e : this.isLive()
            }
        }, {
            key: "liveTailTime",
            get: function() {
                const e = this._currentScanner.liveTailTime;
                return null == e ? this._previousLiveTailTime : (this._previousLiveTailTime = e, e)
            }
        }, {
            key: "atLiveTail",
            get: function() {
                var e;
                return null !== (e = this._currentScanner.atLiveTail) && void 0 !== e && e
            }
        }, {
            key: "duration",
            get: function() {
                return this._currentScanner.duration
            }
        }, {
            key: "ended",
            get: function() {
                return this._currentScanner.ended
            }
        }, {
            key: "externalDisplayAvailable",
            get: function() {
                return this._currentScanner.externalDisplayAvailable
            }
        }, {
            key: "externalDisplayActive",
            get: function() {
                return this._currentScanner.externalDisplayActive
            }
        }, {
            key: "loop",
            get: function() {
                return this._currentScanner.loop
            },
            set: function(e) {
                this._properties.loop = e, this._currentScanner.loop = e
            }
        }, {
            key: "muted",
            get: function() {
                return this._currentScanner.muted
            },
            set: function(e) {
                this._properties.muted = !!e, this._currentScanner.muted = !!e
            }
        }, {
            key: "playsinline",
            get: function() {
                return this._currentScanner.playsinline
            },
            set: function(e) {
                this._properties.playsinline = !!e, this._currentScanner.playsinline = !!e
            }
        }, {
            key: "paused",
            get: function() {
                return this._currentScanner.paused
            }
        }, {
            key: "played",
            get: function() {
                return this._currentScanner.played
            }
        }, {
            key: "seekable",
            get: function() {
                return this._currentScanner.seekable
            }
        }, {
            key: "seeking",
            get: function() {
                return this._currentScanner.seeking
            }
        }, {
            key: "defaultPlaybackRate",
            get: function() {
                return this._currentScanner.defaultPlaybackRate
            },
            set: function(e) {
                this._properties.defaultPlaybackRate = e, this._currentScanner.defaultPlaybackRate = e
            }
        }, {
            key: "playbackRate",
            get: function() {
                return this._currentScanner.playbackRate
            },
            set: function(e) {
                this._properties.playbackRate = e, this._currentScanner.playbackRate = e
            }
        }, {
            key: "preload",
            get: function() {
                return this._currentScanner.preload
            },
            set: function(e) {
                this._properties.preload = e, this._currentScanner.preload = e
            }
        }, {
            key: "autoPictureInPicture",
            get: function() {
                return this._currentScanner.autoPictureInPicture
            },
            set: function(e) {
                this._properties.autoPictureInPicture = !!e, this._currentScanner.autoPictureInPicture = !!e
            }
        }, {
            key: "disablePictureInPicture",
            get: function() {
                return this._currentScanner.disablePictureInPicture
            },
            set: function(e) {
                this._properties.disablePictureInPicture = !!e, this._currentScanner.disablePictureInPicture = !!e
            }
        }, {
            key: "video",
            get: function() {
                return this._video
            },
            set: function(e) {
                this._video && this._video.deactivate(), this._blacklistedScanners = [], this._setUpRebufferMonitor(), null === e ? (this._video = null, this._resetScanner()) : (this._video = new ma(e), this._updateScanner())
            }
        }, {
            key: "videoWidth",
            get: function() {
                return this._currentScanner.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                return this._currentScanner.videoHeight
            }
        }, {
            key: "volume",
            get: function() {
                return this._currentScanner.volume
            },
            set: function(e) {
                if (e < 0 || e > 1) throw new No("IndexSizeError", `Failed to set the 'volume' property: The volume provided (${e}) is outside of the range [0, 1].`);
                this._properties.volume = e, this._currentScanner.volume = e
            }
        }, {
            key: "videoElementAudioTracks",
            get: function() {
                return this._currentScanner.audioTracks
            }
        }, {
            key: "brainDebug",
            get: function() {
                return this._currentScanner.brainDebug
            }
        }]), e
    }(),
    Ea = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this)._activated = !1, r._video = r._telecine._currentScanner._video, r
        }
        he(t, e), ue(t, null, [{
            key: "displayName",
            get: function() {
                return "CanvasEffect"
            }
        }, {
            key: "supported",
            get: function() {
                return !0
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [Qo, Os]
            }
        }]);
        var n = t.prototype;
        return n.activate = function() {
            this._activated = !0, this._canvas = document.createElement("canvas"), this._canvas.className = "vp-canvas-effect", this._canvas.style.cssText = "\n            position: absolute;\n            top:0;\n            left:0;\n            bottom:0;\n            right:0;\n        ", this._ctx = this._canvas.getContext("2d", {
                alpha: !1
            }), this._element.appendChild(this._canvas), this._startRendering()
        }, n.deactivate = function() {
            this._canvas && this._element.removeChild(this._canvas), this._stopRendering(), this._activated = !1
        }, n._startRendering = function() {
            this._requestFrame()
        }, n._requestFrame = function() {
            this._animationFrame = window.requestAnimationFrame(this._renderFrame.bind(this))
        }, n._renderFrame = function() {
            const e = this._video,
                t = this._canvas;
            t.width = e.clientWidth, t.height = e.clientHeight;
            const n = Math.floor(this._videoContentWidth()),
                r = Math.floor(this._videoContentHeight()),
                i = Math.floor((e.clientWidth - n) / 2),
                o = Math.floor((e.clientHeight - r) / 2);
            this._ctx.fillStyle = "#000", this._ctx.fillRect(0, 0, t.width, t.height), this._ctx.drawImage(e, i, o, n, r), this._requestFrame()
        }, n._videoRatio = function() {
            return this._video.videoHeight / this._video.videoWidth
        }, n._videoContentWidth = function() {
            return Math.min(this._video.clientHeight / this._videoRatio(), this._video.clientWidth)
        }, n._videoContentHeight = function() {
            return Math.min(this._video.clientWidth * this._videoRatio(), this._video.clientHeight)
        }, n._stopRendering = function() {
            this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = null)
        }, t
    }(na),
    Ta = function() {
        function e() {}
        return ue(e, null, [{
            key: "Equirect",
            get: function() {
                return "equirectangular"
            }
        }]), e
    }(),
    Sa = function() {
        function e() {}
        return ue(e, null, [{
            key: "Mono",
            get: function() {
                return "mono"
            }
        }, {
            key: "TopBottom",
            get: function() {
                return "top-bottom"
            }
        }, {
            key: "LeftRight",
            get: function() {
                return "left-right"
            }
        }]), e
    }(),
    ba = function() {
        function e(e, t, n) {
            switch (this.isStereo = t !== Sa.Mono, this._leftEye = null, this._rightEye = null, e) {
                case Ta.Equirect:
                    this.createEquirectProjection(n, t);
                    break;
                default:
                    this.createEquirectProjection(n, Sa.Mono)
            }
        }
        var t = e.prototype;
        return t.createEquirectProjection = function(e, t) {
            t !== Sa.Mono ? (this._leftEye = this._createEquirectangularSphereMesh(e), this._rightEye = this._createEquirectangularSphereMesh(e), this._leftEye.layers.set(1), this._rightEye.layers.set(2), t === Sa.TopBottom && (this._chopGeometryUvs(this._leftEye.geometry, .5, .5), this._chopGeometryUvs(this._rightEye.geometry, .5, 0)), t === Sa.LeftRight && (this._chopGeometryUvs(this._leftEye.geometry, .5, 0, 0), this._chopGeometryUvs(this._rightEye.geometry, .5, .5, 0))) : this._leftEye = this._createEquirectangularSphereMesh(e)
        }, t._createEquirectangularSphereMesh = function(t, n, r, i) {
            const o = new THREE.SphereBufferGeometry(n || e.SPHERE_RADIUS, r || e.TESSELATION_WIDTH, i || e.TESSELATION_HEIGHT);
            o.scale(-1, 1, 1);
            const s = new THREE.MeshBasicMaterial({
                map: t
            });
            return new THREE.Mesh(o, s)
        }, t._chopGeometryUvs = function(e, t, n, r = 1) {
            for (let i = 0; i < e.attributes.uv.array.length; i += 2) e.attributes.uv.array[i + r] *= t, e.attributes.uv.array[i + r] += n
        }, ue(e, [{
            key: "left",
            get: function() {
                return this._leftEye
            }
        }, {
            key: "right",
            get: function() {
                return this._rightEye
            }
        }], [{
            key: "TESSELATION_WIDTH",
            get: function() {
                return 120
            }
        }, {
            key: "TESSELATION_HEIGHT",
            get: function() {
                return 80
            }
        }, {
            key: "SPHERE_RADIUS",
            get: function() {
                return 500
            }
        }]), e
    }(),
    Aa = function() {
        function e(e) {
            this._renderer = e
        }
        var t = e.prototype;
        return t.hasVRHeadset = function() {
            return Bt.webvr ? navigator.getVRDisplays().then(e => e.length > 0 ? (this._renderer.vr.setDevice(e[0]), e[0]) : null) : null
        }, t.enter = function() {
            return this._renderer.vr.getDevice() && this._renderer.vr.getDevice().requestPresent([{
                source: this._renderer.domElement
            }])
        }, t.exit = function() {
            return this._renderer.vr.getDevice() && this._renderer.vr.getDevice().exitPresent()
        }, ue(e, [{
            key: "supported",
            get: function() {
                return Bt.webvr
            }
        }, {
            key: "device",
            get: function() {
                return this._renderer && this._renderer.vr.getDevice() ? this._renderer.vr.getDevice() : null
            }
        }, {
            key: "isPresenting",
            get: function() {
                return !(!this._renderer || !this._renderer.vr.getDevice()) && this._renderer.vr.getDevice().isPresenting
            }
        }]), e
    }(),
    Ia = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this)._activated = !1, r._camera = null, r._scene = null, r._renderer = null, r.isUserInteracting = !1, r._onMouseDownMouseX = 0, r._onMouseDownMouseY = 0, r._coordinates = {
                lat: 0,
                long: 0
            }, r._previousCoordinates = {
                lat: 0,
                long: 0
            }, r._onMouseDownCoordinates = {
                lat: 0,
                long: 0
            }, r._previousCameraProps = r.cameraProps, r._phi = 0, r._theta = 0, r._rotation = 0, r._video = r._telecine._currentScanner._video, r._videoRefreshLoop = null, r._gyroVector = {
                x: 0,
                y: 0
            }, r._offset = {
                lat: 0,
                long: 0
            }, r._writeSpeeds = {
                videoFps: r._options.fps,
                motionRenderSpeed: 60
            }, r._maxTimeBetweenWrites = 1e3 / r._writeSpeeds.videoFps, r._motionTimeouts = [], r._movingAutomatically = !1, r._deviceMotionHasOccurred = !1, r._updateFromGyroscopePending = !1, r._keysPressed = {
                up: !1,
                down: !1,
                left: !1,
                right: !1
            }, r
        }
        he(t, e), ue(t, [{
            key: "isUserInteracting",
            set: function(e) {
                e !== this._isUserInteracting && (this._isUserInteracting = e, e ? this._options.isMobile || this._telecine.fire(vo.MOTION_START) : this._options.isMobile || this._telecine.fire(vo.MOTION_END))
            },
            get: function() {
                return this._isUserInteracting
            }
        }], [{
            key: "displayName",
            get: function() {
                return "ThreeSixtyEffect"
            }
        }, {
            key: "supported",
            get: function() {
                try {
                    const e = document.createElement("canvas");
                    return !!window.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
                } catch (Vd) {
                    return this._telecine._currentScanner.fire(vo.SPATIAL_UNSUPPORTED), !1
                }
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [Qo, Os]
            }
        }]), t.frustumSurfaceArea = function(e, t, n) {
            const r = 2 * ba.SPHERE_RADIUS * 2 * Math.sin(Math.PI / 180 * (e / 2));
            return r * (r * t / n) / (4 * Math.PI * Math.pow(ba.SPHERE_RADIUS, 2))
        };
        var n = t.prototype;
        return n.activate = function() {
            return new Promise((e, t) => {
                if (window.THREE) return void e();
                const n = document.createElement("script");
                n.src = this._options.threeUrl, document.body.appendChild(n), n.onload = () => {
                    e()
                }
            }).then(() => this._initialize())
        }, n._initialize = function() {
            this._activated = !0, this._camera = new THREE.PerspectiveCamera(this._options.fieldOfView, this._video.clientWidth / this._video.clientHeight, 1, 2 * ba.SPHERE_RADIUS), this._camera.target = new THREE.Vector3(0, 0, 0), this._camera.layers.enable(1), this._initializeAutoMovement(this._options.directorTimeline), this._scene = new THREE.Scene, this._texture = new THREE.VideoTexture(this._video), this._texture.generateMipmaps = !1, this._texture.minFilter = THREE.NearestFilter, this._texture.maxFilter = THREE.NearestFilter, this._texture.format = THREE.RGBFormat, this._projector = new ba(this._options.projection, this._options.stereoMode, this._texture), this._projector.isStereo && this._scene.add(this._projector.right), this._scene.add(this._projector.left), this._renderer = new THREE.WebGLRenderer, this._renderer.vr.enabled = !0, this._renderer.setPixelRatio(window.devicePixelRatio), this._output = document.createElement("div"), this._output.appendChild(this._renderer.domElement), this._element.appendChild(this._output), this._hideOutput(), this._telecine._currentScanner._video.setAttribute("crossorigin", "anonymous"), this._startRendering(), this._telecine._currentScanner.paused || this._showOutput(), this._webvr = new Aa(this._renderer), this._webvr.supported && this._webvr.hasVRHeadset().then(e => {
                setTimeout(() => {
                    this._telecine.fire(vo.WEBVR_HARDWARE_AVAILABLE, this._webvr.device)
                }, 100)
            }).catch(e => {})
        }, n.toggleVR = function() {
            if (this._webvr.isPresenting) this._webvr.exit().then(() => {
                this.adjustRenderSize()
            }).catch(e => {});
            else {
                if (this._telecine._currentScanner.paused) return;
                this._webvr.enter().then(() => {
                    this.adjustRenderSize()
                }).catch(e => {})
            }
        }, n.onplay = function() {
            this._activated && (this._showOutput(), this.adjustRenderSize())
        }, n.deactivate = function() {
            this._output && this._element.removeChild(this._output), this._stopRendering(), this._activated = !1
        }, n.snapToCenter = function() {
            this._motionTimeouts.forEach(e => clearTimeout(e));
            const e = ((this._coordinates.long >= 180 ? 360 : 0) - this._coordinates.long) / 11,
                t = (0 - this._coordinates.lat) / 11;
            this._rotation = 0;
            for (let n = 0; n < 50; n++) this._motionTimeouts.push(setTimeout(() => {
                0 === n && (this._movingAutomatically = !0, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.motionRenderSpeed)), 49 === n && (this._movingAutomatically = !1, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.videoFps)), this._updateViewpoint(this._coordinates.lat + t / Math.pow(1.1, n), this._coordinates.long + e / Math.pow(1.1, n)), this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._coordinates.lat + t / Math.pow(1.1, n), this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long + t / Math.pow(1.1, n)
            }, n * this._maxTimeBetweenWrites))
        }, n.isStereo = function() {
            return !!this._projector && this._projector.isStereo
        }, n._initializeAutoMovement = function(e) {
            e && e[0] && void 0 !== e[0].p && "undefined" !== e[0].y && this._updateViewpoint(e[0].p, e[0].y)
        }, n._updateViewpoint = function(e, t) {
            this._previousCoordinates.long = this._coordinates.long, this._previousCoordinates.lat = this._coordinates.lat, e %= 360, this._coordinates.lat = Math.max(-85, Math.min(85, e)), t = (t %= 360) >= 0 ? t : 360 + t, this._coordinates.long = t
        }, n.makeContact = function(e) {
            this.isUserInteracting = !0, this._motionTimeouts.forEach(e => clearTimeout(e)), this._movingAutomatically = !1, this._contactPoint = {
                x: e.x,
                y: e.y
            }, this._onMouseDownCoordinates.long = this._coordinates.long, this._onMouseDownCoordinates.lat = this._coordinates.lat, this._motionStart = {
                long: this._coordinates.long,
                lat: this._coordinates.lat
            }, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.motionRenderSpeed)
        }, n.move = function(e) {
            this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._previousCoordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._previousCoordinates.long;
            const t = this._motionStart.lat - .2 * (this._contactPoint.y - e.y),
                n = .2 * (this._contactPoint.x - e.x) + this._motionStart.long;
            this._updateViewpoint(t, n)
        }, n.moveWheel = function(e) {
            this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._previousCoordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._previousCoordinates.long;
            const t = this._coordinates.lat - .1 * e.y,
                n = this._coordinates.long + .1 * e.x;
            this._updateViewpoint(t, n)
        }, n.moveDevice = function(e, t, n, r) {
            this._updateFromGyroscopePending = !0;
            const i = new THREE.Quaternion;
            let o = window.orientation;
            null === o && (o = this._video.clientWidth > this._video.clientHeight ? 90 : 0), e = e ? THREE.Math.degToRad(e) : 0, t = t ? THREE.Math.degToRad(t) : 0, n = n ? THREE.Math.degToRad(n) : 0;
            const s = o ? THREE.Math.degToRad(o) : 0,
                a = new THREE.Vector3(0, 0, 1),
                u = new THREE.Euler,
                c = new THREE.Quaternion,
                l = new THREE.Quaternion(-Math.sqrt(.5), 0, 0, Math.sqrt(.5));
            u.set(t, e, -n, "YXZ"), i.setFromEuler(u), i.multiply(l), i.multiply(c.setFromAxisAngle(a, -s)), this._gyroVector = (new THREE.Euler).setFromQuaternion(i, "YXZ"), this._rotation = this._gyroVector.z, this.isUserInteracting || this._movingAutomatically || this._updateViewpoint(THREE.Math.radToDeg(this._gyroVector.x) - this._offset.lat, -THREE.Math.radToDeg(this._gyroVector.y) + this._offset.long), this._deviceMotionHasOccurred || (this.snapToCenter(), this._telecine.fire(vo.MOTION_START), this._deviceMotionHasOccurred = !0)
        }, n.releaseContact = function(e) {
            if (this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) - this._coordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long, this.isUserInteracting = !1, this._motionStart && !e) {
                const e = Math.hypot(this._coordinates.long - this._motionStart.long, this._coordinates.lat - this._motionStart.lat);
                this._moveDueToMomentum(e)
            }
        }, n.abandonMotion = function() {
            this.isUserInteracting = !1, this._motionStart = null
        }, n.keyPress = function(e) {
            this._options.keyboardDisabled || (this._keyIsDown() || (this.isUserInteracting = !0, this._motionTimeouts && this._motionTimeouts.forEach(e => clearTimeout(e))), this._keysPressed[e] || (this._keysPressed[e] = !0))
        }, n.keyUp = function(e) {
            this._keysPressed[e] = !1, this._keyIsDown() || (this.isUserInteracting = !1, this._moveDueToMomentum(1 / 0))
        }, n._moveFromKeyPress = function() {
            Object.keys(this._keysPressed).forEach(e => {
                if (this._keysPressed[e]) switch (e) {
                    case "up":
                        this._updateViewpoint(this._coordinates.lat + 2, this._coordinates.long);
                        break;
                    case "down":
                        this._updateViewpoint(this._coordinates.lat - 2, this._coordinates.long);
                        break;
                    case "left":
                        this._updateViewpoint(this._coordinates.lat, this._coordinates.long - 2);
                        break;
                    case "right":
                        this._updateViewpoint(this._coordinates.lat, this._coordinates.long + 2)
                }
            })
        }, n._keyIsDown = function() {
            return Object.keys(this._keysPressed).map(e => this._keysPressed[e]).some(e => e)
        }, n._moveDueToMomentum = function(e) {
            if (e >= 20) {
                const t = {
                    long: this._coordinates.long - this._previousCoordinates.long,
                    lat: this._coordinates.lat - this._previousCoordinates.lat
                };
                e === 1 / 0 && (t.long /= 2, t.lat /= 2);
                for (let e = 1; e < 50; e++) this._motionTimeouts.push(setTimeout(() => {
                    1 === e && (this._movingAutomatically = !0), 49 === e && (this._movingAutomatically = !1, this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.videoFps);
                    const n = 2 / Math.pow(e, 1.5);
                    this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._coordinates.lat + t.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long + t.long, this._updateViewpoint(this._coordinates.lat + t.lat * n, this._coordinates.long + t.long * n)
                }, e * this._maxTimeBetweenWrites))
            }
        }, n.onseeked = function() {
            this._activated && this._update()
        }, n.onresize = function() {
            this.adjustRenderSize(), this.isUserInteracting = !1
        }, n._update = function() {
            if (!this.isVRPresenting) {
                this._phi = THREE.Math.degToRad(90 + this._coordinates.lat), this._theta = THREE.Math.degToRad(this._coordinates.long), this._camera.position.set(Math.sin(this._phi) * Math.cos(this._theta), Math.cos(this._phi), Math.sin(this._phi) * Math.sin(this._theta)), this._camera.lookAt(this._camera.target), this._camera.rotation.z += this._rotation;
                const e = this.cameraProps;
                this._telecine.fire(vo.CAMERA_UPDATE, e), this._previousCameraProps.yaw === e.yaw && this._previousCameraProps.pitch === e.pitch && this._previousCameraProps.roll === e.roll && this._previousCameraProps.fov === e.fov || (this._previousCameraProps = e, this._telecine.fire(vo.CAMERA_CHANGE, e))
            }
            this._renderer.render(this._scene, this._camera)
        }, n.adjustRenderSize = function() {
            if (this.isVRPresenting) this._camera.aspect = this._video.clientWidth / this._video.clientHeight, this._camera.updateProjectionMatrix(), this._renderer.setSize(this._video.clientWidth, this._video.clientHeight);
            else {
                this._video.clientWidth > this._video.clientHeight ? this._camera.aspect = Math.max(1, Math.min(2, this._video.clientWidth / this._video.clientHeight)) : this._camera.aspect = Math.max(1 / 3, Math.min(3, this._video.clientWidth / this._video.clientHeight)), this._camera.updateProjectionMatrix();
                const e = Po(this._video.clientWidth, this._video.clientHeight, this._camera.aspect, 1);
                this._renderer.setSize(e.width, e.height), this._output.style.paddingTop = `${e.top}px`
            }
        }, n._startRendering = function() {
            this._renderer.setAnimationLoop(() => {
                this._keyIsDown() && this._moveFromKeyPress(), this._update()
            })
        }, n._stopRendering = function() {
            this._renderer.setAnimationLoop(null)
        }, n._showOutput = function() {
            this._styleOutput({
                backgroundColor: "#000",
                display: "block"
            })
        }, n._hideOutput = function() {
            this._styleOutput({
                backgroundColor: "#000",
                display: "none"
            })
        }, n._styleOutput = function({
            backgroundColor: e,
            display: t
        } = {}) {
            this._output.style.cssText = `position:absolute;left:0;top:0;margin-left:auto;margin-right:auto;padding:0;background:${e};width:100%;height:100%;text-align:center;display:${t}`
        }, ue(t, [{
            key: "currentCoordinates",
            get: function() {
                return this._coordinates
            },
            set: function([e, t]) {
                if (e > 90 || e < -90) throw new RangeError("Latitude should be a float between -90 and 90.");
                if (t < 0 || t > 360) throw new RangeError("Longitude should be a float between 0 and 360.");
                this._updateViewpoint(e, t), this._update()
            }
        }, {
            key: "cameraProps",
            get: function() {
                return {
                    yaw: this._coordinates.long,
                    pitch: this._coordinates.lat,
                    roll: this.roll,
                    fov: this.fieldOfView
                }
            },
            set: function(e) {
                e = de(de({}, this.cameraProps), e), this.fieldOfView = e.fov, this.roll = e.roll, this.currentCoordinates = [e.pitch, e.yaw]
            }
        }, {
            key: "roll",
            get: function() {
                return 180 * this._rotation / Math.PI
            },
            set: function(e) {
                if (e < -180 || e > 180) throw new RangeError("Roll should be a float between -180 and 180.");
                this._rotation = THREE.Math.degToRad(e)
            }
        }, {
            key: "isVRPresenting",
            get: function() {
                return this._webvr && this._webvr.isPresenting
            }
        }, {
            key: "fieldOfView",
            get: function() {
                return this._camera ? this._camera.fov : this._options.fieldOfView
            },
            set: function(e) {
                this._camera.fov = e, this._camera.updateProjectionMatrix(), this._renderer.render(this._scene, this._camera)
            }
        }, {
            key: "hasVRHeadset",
            get: function() {
                return this._webvr && !!this._webvr.device
            }
        }]), t
    }(na),
    wa = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this).connected = !1, r._context = null, r._source = null, r._mirror = null, r._rotator = null, r._decoder = null, r
        }
        he(t, e), ue(t, null, [{
            key: "displayName",
            get: function() {
                return "AmbisonicEffect"
            }
        }, {
            key: "supported",
            get: function() {
                return void 0 !== window.AudioContext
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [Qo, Os]
            }
        }]);
        var n = t.prototype;
        return n.activate = function() {
            return this._context = new AudioContext, new Promise((e, t) => {
                if ("undefined" != typeof ambisonics) return void e();
                const n = document.createElement("script");
                n.src = this._options.ambisonicsUrl, document.body.appendChild(n), n.onload = () => e(), n.onerror = () => t()
            }).then(() => this.toggleAmbisonics()).catch(() => {
                this._telecine._currentScanner.fire(vo.AMBISONIC_UNSUPPORTED)
            })
        }, n.deactivate = function() {
            this._disconnect(!0)
        }, n.toggleAmbisonics = function() {
            var e, t;
            (null !== (e = null == (t = this._telecine.getCurrentStream("audio")) ? void 0 : t.ambisonic_order) && void 0 !== e ? e : 0) < 1 ? this._disconnect() : this._connect()
        }, n._connect = function() {
            var e, t;
            if (!this._context) return;
            const n = null !== (e = null == (t = this._telecine.getCurrentStream("audio")) ? void 0 : t.ambisonic_order) && void 0 !== e ? e : 0;
            if (this.connected || n < 1) return;
            const r = this._telecine._currentScanner._video;
            this._source = this._context.createMediaElementSource(r), this._mirror = new ambisonics.sceneMirror(this._context, n), this._rotator = new ambisonics.sceneRotator(this._context, n), this._decoder = new ambisonics.binDecoder(this._context, n), this._source.connect(this._mirror.in), this._mirror.out.connect(this._rotator.in), this._rotator.out.connect(this._decoder.in), this._decoder.out.connect(this._context.destination), this._mirror.mirror(1), this.connected = !0
        }, n._disconnect = function(e = !1) {
            this._source && this._source.disconnect(), e && this._context && (this._context.close(), this._context = null), this._source = null, this._mirror = null, this._rotator = null, this._decoder = null, this.connected = !1
        }, n.updateRotation = function(e, t, n) {
            this._rotator && (this._rotator.yaw !== e || this._rotator.pitch !== t || this._rotator.roll !== n) && (this._rotator.yaw = e, this._rotator.pitch = t, this._rotator.roll = n, this._rotator.updateRotMtx())
        }, t
    }(na);
const Ra = {
        h264: "video/mp4",
        hls: "application/vnd.apple.mpegurl",
        hlsLive: "application/x-mpegURL",
        dash: "application/vnd.vimeo.dash+json",
        dashMpd: "video/vnd.mpeg.dash.mpd",
        vp6: "video/x-flv",
        vp8: "video/webm",
        webm: "video/webm",
        hds: "application/f4m"
    },
    ka = {
        "application/vnd.apple.mpegurl": "hls",
        "application/vnd.vimeo.dash+json": "dash",
        "video/vnd.mpeg.dash.mpd": "dash",
        "video/mp4": "progressive",
        "video/webm": "progressive",
        "video/x-flv": "progressive",
        "application/x-mpegURL": "hlslive"
    };
var Pa = /^\s+|\s+$/g,
    Da = /^[-+]0x[0-9a-f]+$/i,
    Oa = /^0b[01]+$/i,
    La = /^0o[0-7]+$/i,
    Ca = parseInt;

function Ma(e) {
    if ("number" == typeof e) return e;
    if (sn(e)) return NaN;
    if (cn(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = cn(t) ? t + "" : t
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(Pa, "");
    var n = Oa.test(e);
    return n || La.test(e) ? Ca(e.slice(2), n ? 2 : 8) : Da.test(e) ? NaN : +e
}
var Na = $t.isFinite,
    xa = Math.min,
    Ua = function(e) {
        var t = Math.round;
        return function(e, n) {
            if (e = Ma(e), (n = null == n ? 0 : xa(function(e) {
                    var t = function(e) {
                            return e ? (e = Ma(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                        }(e),
                        n = t % 1;
                    return t == t ? n ? t - n : t : 0
                }(n), 292)) && Na(e)) {
                var r = (Bn(e) + "e").split("e");
                return +((r = (Bn(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
            }
            return t(e)
        }
    }();

function Fa(e) {
    return !isNaN(e)
}

function ja(e) {
    return Ua(e, 3)
}

function Ba(e) {
    return "webkitDisplayingFullscreen" in e && e.webkitDisplayingFullscreen
}
let Va = 0;

function Ha(e = "b") {
    return `${e}${++Va}`
}
Ha(), Ha();
const Xa = Ha(),
    qa = Ha(),
    Ga = Ha(),
    Wa = Ha(),
    Ka = Ha(),
    Ya = Ha(),
    $a = Ha(),
    za = Ha(),
    Qa = Ha(),
    Ja = Ha(),
    Za = Ha(),
    eu = Ha(),
    tu = Ha(),
    nu = Ha(),
    ru = Ha(),
    iu = Ha(),
    ou = Ha(),
    su = Ha(),
    au = Ha(),
    uu = Ha();
var cu = Object.freeze({
        __proto__: null,
        CONFIG_CHANGED: $a,
        TELECINE_READY: za,
        TELECINE_VIDEO_INIT: Qa,
        PLAY_INITIATED: Ja,
        QUALITY_CHANGED: Za,
        FORCED_QUALITY: eu,
        CUE_CHANGED: tu,
        CAPTIONS_CHANGED: nu,
        SPATIAL_PLAYBACK_TOGGLED: ru,
        PICTURE_IN_PICTURE_AVAILABLE_SAFARI: iu,
        HLS_QUALITY_CHANGED: ou,
        REQUEST_COMPLETE_LIVE_SUBTITLES: su,
        COMPLETE_LIVE_SUBTITLES_LOADED: au,
        COMPLETE_LIVE_SUBTITLES_ERROR: uu
    }),
    lu = Object.freeze({
        __proto__: null,
        EVENT_PENDING: "liveeventpending",
        EVENT_ACTIVE: "liveeventactive",
        EVENT_STARTING: "liveeventstarting",
        EVENT_STARTED: "liveeventstarted",
        EVENT_ENDED: "liveeventended",
        ARCHIVE_STARTED: "livearchivestarted",
        ARCHIVE_DONE: "livearchivedone",
        ARCHIVE_ERROR: "livearchiveerror",
        SETTINGS_UPDATED: "livesettingsupdated",
        LOW_LATENCY_FALLBACK: "lowlatencyfallback",
        LIVE_STATS_SUCCESS: "livestatssuccess",
        LIVE_STATS_FAILURE: "livestatsfailure"
    });
de(de(de(de(de(de(de(de(de({}, lo), po), mo), lu), vo), fo), go), yo), cu);
const du = de(de({}, mo), lu);

function hu(e) {
    var t;
    return "done" === (null == e || null == (t = e.archive) ? void 0 : t.status)
}

function fu(e) {
    return "pending" === (null == e ? void 0 : e.status)
}

function _u(e) {
    return "started" === (null == e ? void 0 : e.status)
}

function pu(e) {
    return "ended" === (null == e ? void 0 : e.status)
}

function mu(e) {
    return vu(e, "/playlist/refresh")
}

function vu(e, t) {
    var n;
    const r = null == (n = e.request.files.hls) ? void 0 : n.default_cdn,
        {
            signature: i,
            timestamp: o,
            expires: s
        } = e.request;
    return `${`https://${e.player_url}/live/${e.video.id}`}${t}${`?signature=${i}&time=${o}&expires=${s}&cdn=${r}`}`
}
var gu = Object.prototype.hasOwnProperty;

function yu(e) {
    if (null == e) return !0;
    if (Wr(e) && (Wt(e) || "string" == typeof e || "function" == typeof e.splice || wr(e) || Ur(e) || Sr(e))) return !e.length;
    var t = Si(e);
    if ("[object Map]" == t || "[object Set]" == t) return !e.size;
    if (Vr(e)) return !Gr(e).length;
    for (var n in e)
        if (gu.call(e, n)) return !1;
    return !0
}

function Eu(e) {
    const t = this;
    let n = {};
    const r = {
        get attributes() {
            return Object.assign({}, t)
        },
        get previousAttributes() {
            return n
        },
        clear() {
            i();
            var e = t.attributes;
            for (var n in e) delete t[n]
        },
        set(e) {
            for (var n in i(), e = ji(e)) t[n] = e[n]
        },
        clone: () => new Eu(t.attributes),
        toJSON: () => ji(t.attributes)
    };

    function i() {
        yu(t.attributes) || (n = ji(t.attributes))
    }
    return r.set(e), Re(t, r)
}

function Tu(e, t) {
    const n = new Eu(uo(e, t));
    let r = !1;
    return ke(n, {
        reset: function(e) {
            return n.clear(),
                function(e) {
                    r = !0, n.set(e), uo(n, t)
                }(e), n
        },
        isNewVideo: function() {
            const e = n.previousAttributes;
            return !r || e.video.id !== n.video.id || e.video.version.current !== n.video.version.current || e.video.live_event && !hu(e.video.live_event) && (!n.video.live_event || hu(n.video.live_event))
        }
    })
}

function Su(e) {
    return e.quality || e.metadata.quality
}

function bu(e, t) {
    e.embed.settings.audio_tracks || (t = null);
    const n = e.request.files,
        r = ku(n),
        i = Mu(e),
        o = e.request.cookie.quality || i || function(e) {
            const t = ku(e.request.files);
            let n = t.some(Lu);
            Bt.mobileAndroid && (n = !1);
            let r = "720p";
            if (n) {
                const e = t.map(Su); - 1 !== e.indexOf("1080p") && -1 === e.indexOf("720p") && (r = "1080p")
            }
            return e.request.cookie.hd || e.video.default_to_hd ? r : "360p"
        }(e);
    let s = function({
        files: e = [],
        preference: t = "360p",
        priorityOffset: n = 0
    }) {
        (e = Array.from(e)).sort(xu());
        const r = e.map(Su);
        if (t) {
            -1 === r.indexOf(t) && (r.push(t), r.sort((e, t) => Cu(t) - Cu(e)));
            const e = r.indexOf(t),
                n = r.splice(0, e);
            n.reverse(), r.push.apply(r, Ee(n))
        }
        return e.map(e => ({
            id: e.id,
            src: e.url,
            mime: e.mime,
            priority: r.indexOf(e.quality) + 1 + n,
            metadata: {
                profile: e.profile,
                cdn: e.cdn,
                origin: e.origin,
                quality: e.quality,
                fps: e.fps
            }
        }))
    }({
        files: r,
        preference: o,
        priorityOffset: 3
    });
    return n.hls && (s = s.concat(wu(e, !1, t)), e.request.drm && Bt.browser.safari) || n.dash && (s = s.concat(Ru(e, !1, t))), s
}

function Au(e, t = !1, n = !1) {
    let r = e.url;
    if ("avc_url" in e && (r = e.avc_url), n) return r;
    const i = Bt.hevc && (!t || Bt.spatialHEVC),
        o = Bt.hdr && Bt.hevcMain10 && (!t || Bt.spatialHEVC);
    return Bt.dolbyVision && "hevc_dvh1_url" in e ? r = e.hevc_dvh1_url : o && "hevc_hdr_url" in e ? r = e.hevc_hdr_url : i && "hevc_sdr_url" in e ? r = e.hevc_sdr_url : Bt.av1 && "av1_url" in e && (r = e.av1_url), r
}

function Iu(e) {
    return e.fallback_url
}

function wu(e, t = !1, n = null) {
    var r;
    const i = e.request.files,
        o = i.hls.default_cdn,
        s = e.request.drm,
        a = i.hls.cdns[o],
        u = (null == a || null == (r = a.alternatives) ? void 0 : r[n]) || a,
        c = t ? Iu(u) : Au(u, e.video.spatial, s);
    return {
        id: `hls-${o}-${e.video.id}`,
        src: c,
        mime: Ra.hls,
        priority: 3,
        metadata: {
            cdn: o,
            origin: i.hls.cdns[o].origin,
            quality: "sd"
        }
    }
}

function Ru(e, t = !1, n = null) {
    const r = e.request.files;
    return yu(r.dash) ? [] : Object.keys(r.dash.cdns).map(i => {
        var o;
        const s = r.dash.cdns[i],
            a = (null == s || null == (o = s.alternatives) ? void 0 : o[n]) || s,
            u = t ? Iu(a) : Au(a, e.video.spatial);
        return {
            id: `dash-${i}-${e.video.id}`,
            src: u,
            mime: e.request.drm ? Ra.dashMpd : Ra.dash,
            priority: i === r.dash.default_cdn ? 1 : 2,
            metadata: {
                cdn: i,
                origin: r.dash.cdns[i].origin,
                quality: "sd"
            }
        }
    })
}

function ku(e) {
    if (yu(e.progressive)) return [];
    let t = e.progressive;
    return "progressive_avc" in e && (t = e.progressive_avc), t.filter(Du(t))
}

function Pu(e) {
    if ("number" == typeof e) return e;
    const t = e.split("-");
    return 5 === t.length ? t[0] : parseInt(t[0], 10)
}

function Du(e) {
    const t = e.filter(Ou).map(Su);
    return e => -1 === t.indexOf(Su(e)) || Ou(e)
}

function Ou(e) {
    let t = e.fps;
    return "metadata" in e && (t = e.metadata.fps), t > 30
}

function Lu(e) {
    return Cu(e) >= 720
}

function Cu(e) {
    return "string" != typeof e && (e = Su(e)), parseInt(e, 10)
}

function Mu(e) {
    const t = ku(e.request.files).map(e => e.quality);
    return Nu(e, e.embed.quality, t)
}

function Nu(e, t, n = []) {
    return e.embed.on_site || Bt.android || Bt.iOS || Bt.windowsPhone || !t || n.length && -1 === n.indexOf(t) ? null : t
}

function xu(e = "desc") {
    return (t, n) => {
        const r = Cu(t),
            i = Uu(t),
            o = Cu(n),
            s = Uu(n);
        return "asc" === e ? r - o || i - s : o - r || s - i
    }
}

function Uu(e) {
    return "object" != typeof e ? 0 : "fps" in e ? e.fps : "metadata" in e && "fps" in e.metadata ? e.metadata.fps : 0
}

function Fu(e) {
    const t = e.video.live_event,
        n = e.request.files;
    if (!yu(n.hls)) {
        const r = n.hls.default_cdn,
            i = n.hls.cdns[r].json_url || function(e) {
                var t;
                const n = e.dvr,
                    r = e.low_latency;
                var i, o;
                return n ? null == (i = e.playback_urls) ? void 0 : i["akamai-fmp4"].hls_noredirect : r ? null == (o = e.playback_urls) ? void 0 : o["akamai-low-latency"].hls_noredirect : null == (t = e.playback) ? void 0 : t.hls_noredirect
            }(t),
            o = e.request.flags.live_dash ? 2 : 1;
        return {
            id: `hls-${r}-${e.video.id}`,
            src: i,
            mime: Ra.hlsLive,
            priority: o,
            metadata: {
                cdn: r,
                origin: n.hls.cdns[r].origin,
                quality: "sd"
            }
        }
    }
    return null
}

function ju(e, t) {
    let n = [];
    if (t.video) {
        const i = t.video.currentFile.mime;
        if (i === Ra.hlsLive) return t.manifest.video.map(e => de(de({}, e), {}, {
            quality: `${e.height}p`
        }));
        if ([Ra.dash, Ra.dashMpd].includes(i)) {
            var r;
            const i = !!t.video.drmHandler,
                o = i && "sd-fallback" === t.video.drmHandler.state;
            n = function(e, t = !1, n = !1) {
                if (!e) return [];
                let r = e.streams;
                "streams_avc" in e && (r = e.streams_avc);
                const i = t ? Bt.spatialHEVC && Bt.hevc : Bt.hevc,
                    o = t ? Bt.spatialHEVC && Bt.hdr : Bt.hdr;
                return Bt.dolbyVision && "streams_hevc_dvh1" in e ? r = e.streams_hevc_dvh1 : o && "streams_hevc_hdr" in e ? r = e.streams_hevc_hdr : i && "streams_hevc_sdr" in e ? r = e.streams_hevc_sdr : Bt.av1 && "streams_av1" in e && (r = e.streams_av1), n && "streams_fallback" in e && (r = e.streams_fallback), r
            }(e.request.files.dash, e.video.spatial, o), !i && (null == t || null == (r = t.currentScanner) ? void 0 : r.manifestLoaded) && (n = function(e, t) {
                const n = t.map(e => e.id);
                return e.filter(e => {
                    const t = Pu(e.id);
                    return n.includes(e.id) || n.includes(t)
                })
            }(n, t.currentScanner.videoStreams))
        } else n = t.video.files.filter(e => "progressive" === ka[e.mime])
    }
    return n.filter(Du(n)).sort(xu())
}

function Bu(e) {
    let t = Su(e);
    const n = {
        "1440p": "2K",
        "2160p": "4K",
        "2700p": "5K",
        "3240p": "6K",
        "3780p": "7K",
        "4320p": "8K"
    };
    for (const r in n) t = t.replace(r, n[r]);
    return t
}

function Vu(e) {
    return Bt.spatialPlayback && e.video.spatial ? 35 : 75
}

function Hu(e) {
    return e.request.text_tracks.map(e => ({
        id: e.id,
        src: e.url,
        kind: e.kind,
        label: e.label,
        language: e.lang
    }))
}
let Xu = {
        captureException(e) {},
        captureMessage(e) {},
        captureBreadcrumb() {}
    },
    qu = Xu;
var Gu = {
    set: function(e) {
        qu = Object.assign({}, Xu, e)
    },
    captureException: function(e, t) {
        return qu.captureException(e, t)
    },
    captureMessage: function(e, t) {
        return qu.captureMessage(e, t)
    },
    captureBreadcrumb: function(e, t, n = "backbone", r = "info") {
        return qu.captureBreadcrumb(e, t, n, r)
    }
};

function Wu(e, t, n) {
    const r = !0 === Bt.iOS,
        i = e.embed.playsinline && (Bt.mobileAndroid || Bt.iOS >= 10 || r);
    let o = !1,
        s = !1,
        a = !1,
        u = !0,
        c = "auto";

    function l(e) {
        var t, r, i, o, s, a;
        const {
            embed: u
        } = e;
        n.disablePictureInPicture = !(null === (t = null !== (r = u.pip) && void 0 !== r ? r : null == (i = u.settings) ? void 0 : i.pip) || void 0 === t || t), n.autoPictureInPicture = null === (o = null !== (s = u.auto_pip) && void 0 !== s ? s : null == (a = u.settings) ? void 0 : a.auto_pip) || void 0 === o || o
    }

    function d(e) {
        if (!u && n.buffered && n.buffered.length > 0) {
            e = e || n.currentTime;
            const r = function(e, t) {
                    var n = e.length - 1;
                    if (e.length > 1)
                        for (var r = 0, i = e.length; r < i; r++)
                            if (e.start(r) <= t && e.end(r) >= t) {
                                n = r;
                                break
                            }
                    return n
                }(n.buffered, e),
                i = n.buffered.end(r),
                s = i / n.duration,
                u = n.duration;
            if (t.fire(lo.PROGRESS, {
                    loaded: i,
                    duration: u,
                    loadProgress: s
                }), a && o && i === n.duration) return void(o && n.paused && n.play().catch(Gu.captureException))
        }
    }

    function h(t) {
        if ("auto" === t) return void(n.video.currentFile.restrictedStreamIndexes = []);
        const r = ju(e, n).reverse().map(e => e.quality).indexOf(t); - 1 !== r && (Gu.captureBreadcrumb(`Switched to ${t}`, {}, "video"), n.video.currentFile.restrictedStreamIndexes = [r])
    }

    function f(r) {
        const i = ju(e, n).map(e => e.quality),
            o = Nu(e, e.embed.quality, i);
        o && t.fire(eu, o), h(o || "auto")
    }
    return t.on(Qa, (function() {
        var t;
        n.playsinline = i, n.muted = e.embed.muted, n.lowLatencyMode = null == (t = e.video.live_event) ? void 0 : t.low_latency
    })), t.on(qa, (function() {
        u = !0, n.paused || n.pause(), s = !1, o = !1, n.currentTime = 0
    })), t.on(Ga, (function() {
        n.paused || n.pause(), n.video = null
    })), n.on(lo.PLAY, (function() {
        u = !1, t.fire(lo.PLAY, n.currentTime)
    })), n.on(lo.PAUSE, (function() {
        o = !1, t.fire(lo.PAUSE, n.currentTime, n.ended)
    })), n.on(lo.PLAYING, (function(e) {
        d()
    })), n.on(lo.TIME_UPDATE, (function() {
        if (u) return;
        const {
            currentTime: e,
            liveEdgeTime: r,
            atLiveEdge: i,
            liveTailTime: o,
            atLiveTail: s,
            duration: a,
            playbackRate: c
        } = n, l = e / a;
        t.fire(lo.TIME_UPDATE, {
            currentTime: e,
            liveEdgeTime: r,
            atLiveEdge: i,
            liveTailTime: o,
            atLiveTail: s,
            duration: a,
            playbackRate: c,
            timeProgress: l
        })
    })), n.on(lo.ENDED, (function(e) {
        n.loop ? n.play().catch(Gu.captureException) : (o = !1, t.fire(lo.ENDED, e))
    })), n.on(lo.LOADED_METADATA, (function(t) {
        const r = n.duration;
        if (isFinite(r) && r > 0) {
            if (r < e.video.duration - 1 || r > e.video.duration + 1) return;
            e.video.duration = r
        }
        e.video.video_width = n.videoWidth, e.video.video_height = n.videoHeight
    })), n.on(lo.DURATION_CHANGE, (function(t) {
        const r = n.duration;
        isFinite(r) && (e.video.duration > 0 && (r < e.video.duration - 1 || r > e.video.duration + 1) || (e.video.duration = r))
    })), n.on(lo.PROGRESS, d), n.on(po.BUFFER_STARTED, () => {
        a = !0
    }), n.on(po.BUFFER_ENDED, () => {
        a = !1
    }), t.on(Xa, (function(t) {
        n.isLive() && 0 === n.liveEdgeTime || (t = function(e, t, n) {
            return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = Ma(n)) == n ? n : 0), void 0 !== t && (t = (t = Ma(t)) == t ? t : 0),
                function(e, t, n) {
                    return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
                }(Ma(e), t, n)
        }(t, ja(n.isLive() ? n.liveTailTime : 0), ja(n.isLive() ? n.liveEdgeTime : n.duration || e.video.duration)), n.currentTime = t)
    })), n.on(lo.SEEKING, (function() {
        const e = n.currentTime,
            r = n.duration,
            i = e / r;
        t.fire(lo.SEEKING, {
            currentTime: e,
            duration: r,
            timeProgress: i
        })
    })), n.on(lo.SEEKED, (function() {
        d();
        const e = n.currentTime,
            r = n.duration,
            i = e / r;
        t.fire(lo.SEEKED, {
            currentTime: e,
            duration: r,
            timeProgress: i
        })
    })), n.on(po.CURRENT_FILE_CHANGE, (function(r) {
        Gu.captureBreadcrumb("Current file changed", {
            id: r.id,
            mime: r.mime,
            src: r.src,
            metadata: r.metadata
        }, "video"), r.metadata.quality, [Ra.dash, Ra.dashMpd].includes(r.mime) && f(), [Ra.hlsLive].includes(r.mime) ? n.once(po.STREAMS_LOADED, () => {
            f()
        }) : function(n) {
            const r = Mu(e);
            r && t.fire(eu, r)
        }()
    })), n.on(lo.RESIZE, (function() {
        n.video.currentFile.mime === Ra.hls && n.videoHeight && t.fire(ou, {
            height: n.videoHeight
        })
    })), l(e), t.on($a, (e, t) => {
        var n, r;
        (null == t || null == (n = t.embed.settings) ? void 0 : n.pip) !== (null == (r = e.embed.settings) ? void 0 : r.pip) && l(e)
    }), {
        play: function() {
            return o = !0, s || (t.fire(Ja), s = !0), n.play()
        },
        pause: function() {
            o = !1, n.pause()
        },
        get quality() {
            return c
        },
        set quality(r) {
            ! function(r) {
                const i = n.video.currentFile.mime;
                if ([Ra.dash, Ra.dashMpd, Ra.hlsLive].includes(i)) h(r);
                else {
                    const t = ju(e, n).filter(e => e.metadata.quality === r);
                    t.length > 0 && (u = !0, n.video.currentFile = t[0])
                }
                c = r, t.fire(Za, r)
            }(r)
        }
    }
}

function Ku(e, t, n) {
    let r = null;
    Bt.spatialPlayback && (t.on(Qa, (function() {
        r && (n.deactivateEffect(Ia), r = null, t.fire(ru, r));
        const i = e.video.spatial;
        i && (e.request.drm || n.supportsEffect(Ia) && (r = n.activateEffect(Ia, {
            threeUrl: e.request.urls.three_js,
            fps: e.video.fps,
            fieldOfView: i.fov,
            directorTimeline: i.director_timeline,
            projection: i.projection,
            stereoMode: i.stereo_mode,
            initialView: i.initial_view,
            isMobile: Bt.android,
            dimensions: e.embed.on_site ? {
                width: 1080,
                height: 540
            } : {
                width: 640,
                height: 360
            },
            keyboardDisabled: !e.embed.keyboard
        }), t.fire(ru, r)))
    })), n.on(vo.SPATIAL_UNSUPPORTED, (function() {
        r && (n.deactivateEffect(Ia), r = null, t.fire(ru, r))
    })))
}

function Yu(e, t, n) {
    let r = null;
    t.on(Qa, (function() {
        r && (n.deactivateEffect(Ea), r = null), e.video.canvas && (e.request.drm || n.supportsEffect(Ea) && (r = n.activateEffect(Ea)))
    }))
}
var $u = so((function(e, t, n) {
    io(e, t, n)
}));

function zu(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Qu(e, t) {
    try {
        var n = e()
    } catch (Vd) {
        return t(Vd)
    }
    return n && n.then ? n.then(void 0, t) : n
}
let Ju = function() {
    function e(e, t, n, r) {
        dr(this), this._liveEventHasID = new Ue, this._liveEvent = ji(e), this._sessionUrl = e.session_url || e.sessionUrl, this._subtitleUrl = e.subtitleUrl, this._sessionRefreshUrl = t, this._subtitleRefreshUrl = r, this._appPollUrl = n, this._forcedPoll = !1, this._disabled = !1, this._dvrEnabled = e.dvr, this._setupPolling()
    }
    var t = e.prototype;
    return t.requestCompleteLiveSubtitles = function() {
        try {
            const e = this;
            return Qu((function() {
                return zu(pt({
                    url: e._subtitleUrl,
                    retry: 3,
                    retryStatus: e => [410].includes(e) || se.retryStatus(e),
                    hooks: {
                        beforeRetry: [e._beforeSubtitleRetry.bind(e)]
                    }
                }).json(), (function(e) {
                    if (!(null == e ? void 0 : e.url)) throw new Error("No webvtt url was available to fetch");
                    return zu(pt(e.url).text(), Hs)
                }))
            }), (function(e) {
                throw e
            }))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, t._beforeSubtitleRetry = function(e, t) {
        try {
            return zu(this._refreshSubtitleUrl(), (function(t) {
                e.url = t
            }))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, t._refreshSubtitleUrl = function() {
        try {
            const e = this;
            return zu(pt(e._subtitleRefreshUrl).json(), (function(t) {
                return e._subtitleUrl = t.url, t.url
            }))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, t.disable = function() {
        this._disabled = !0
    }, t.forcePolling = function() {
        this.isForcePolling || (this._forcedPoll = !0, this._setupPolling())
    }, t.unforcePolling = function() {
        this._forcedPoll = !1
    }, t._setupPolling = function() {
        !1 !== this._liveEvent.polling && (this._liveEvent.id && this._liveEventHasID.resolve(), this._shouldPollApp() ? this._pollApp() : this._shouldPoll() && this._pollLiveApi())
    }, t._shouldPoll = function() {
        var e;
        return !(pu(this._liveEvent) && "started" !== (null == (e = this._liveEvent.archive) ? void 0 : e.status) || !this.isForcePolling && _u(this._liveEvent))
    }, t._shouldPollApp = function() {
        return !this._sessionUrl || !(!fu(this._liveEvent) || null !== this._liveEvent.id)
    }, t._refreshSessionUrl = function() {
        try {
            const e = this;
            return zu(pt(e._sessionRefreshUrl).json(), (function(t) {
                return e._sessionUrl = t.url, t.url
            }))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, t._pollLiveApi = function() {
        try {
            const e = this;
            if (e._disabled) return;
            let t, n = {};
            return Bt.browser.ie && (n = {
                    Pragma: "no-cache",
                    "Cache-Control": "no-cache"
                }),
                function(e, t) {
                    return e && e.then ? e.then(t) : t()
                }(Qu((function() {
                    return zu(pt({
                        url: e._sessionUrl,
                        retry: 3,
                        retryStatus: e => [410].includes(e) || se.retryStatus(e),
                        hooks: {
                            beforeRetry: [e._beforeRetry.bind(e)]
                        },
                        headers: n
                    }).json(), (function(e) {
                        t = e
                    }))
                }), (function() {
                    throw new Error(`Hit max retries polling ${e._sessionUrl}`)
                })), (function(n) {
                    if (e._dvrEnabled && (t.dvr = e._dvrEnabled), t.status !== e._liveEvent.status) {
                        if (pu(t) && "provision_expire" === t.terminate_reason) return e._sessionUrl = null, e._liveEvent.id = null, void setTimeout(e._setupPolling.bind(e), 5e3);
                        const n = {
                            active: du.EVENT_ACTIVE,
                            pending: du.EVENT_PENDING,
                            started: du.EVENT_STARTED,
                            ended: du.EVENT_ENDED
                        }[t.status];
                        try {
                            e.fire(n, t)
                        } catch (r) {
                            throw new Error(`Error firing live event status change ${r}`)
                        }
                    }
                    if (t.archive && (!e._liveEvent.archive || t.archive.status !== e._liveEvent.archive.status)) {
                        const n = {
                            started: du.ARCHIVE_STARTED,
                            done: du.ARCHIVE_DONE,
                            error: du.ARCHIVE_ERROR
                        }[t.archive.status];
                        e.fire(n, t)
                    }
                    e._liveEvent = $u(e._liveEvent, t), e._shouldPoll() && setTimeout(e._pollLiveApi.bind(e), 5e3)
                }))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, t._beforeRetry = function(e, t) {
        try {
            return zu(this._refreshSessionUrl(), (function(t) {
                e.url = t
            }))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, t._pollApp = function() {
        try {
            const e = this;
            if (e._disabled) return;
            return zu(pt(e._appPollUrl).json(), (function(t) {
                let n = !1;
                return function(r, i) {
                    var o = function() {
                        if (null !== t.ingest.session_id) return e._liveEventHasID.resolve(), e._liveEvent.id = t.ingest.session_id, zu(e._refreshSessionUrl(), (function() {
                            e._pollLiveApi(), n = !0
                        }))
                    }();
                    return o && o.then ? o.then(i) : i(o)
                }(0, (function(t) {
                    if (n) return t;
                    setTimeout(e._pollApp.bind(e), 5e3)
                }))
            }))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }, ue(e, [{
        key: "isForcePolling",
        get: function() {
            return this._forcedPoll
        }
    }, {
        key: "liveEventIDReady",
        get: function() {
            return this._liveEventHasID
        }
    }]), e
}();

function Zu() {}

function ec(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }
}

function tc(e, t, n) {
    const r = ec((function() {
        return function(e, t) {
            return e && e.then ? e.then(Zu) : Promise.resolve()
        }({
            hive: () => {},
            kollective: () => {}
        }[e.video.ecdn.ecdn_provider]())
    }));
    let i, o, s, a = !1,
        u = 0,
        c = 0;

    function l() {
        o && (o.disable(), o = null)
    }

    function d() {
        n.endLive()
    }
    return t.on($a, (function() {
        i && !e.isNewVideo() || (i = !0, l(), e.video.live_event && !hu(e.video.live_event) && (function(n) {
            o = new Ju(n, function(e) {
                return vu(e, "/session/refresh")
            }(e), function(e) {
                return `https://${e.vimeo_url}/live_event/status?clip_id=${e.video.id}`
            }(e), function(e) {
                return vu(e, "/subtitle/refresh")
            }(e)), o.on(du.EVENT_ENDED, d), Object.keys(du).forEach(e => {
                const n = du[e];
                o.on(n, e => {
                    t.fire(n, e)
                })
            }), t.on(su, ec((function() {
                return function(e) {
                    if (e && e.then) return e.then(Zu)
                }(function(e, n) {
                    try {
                        var r = function() {
                            var e;
                            return function(e, t, n) {
                                return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                            }(null == (e = o) ? void 0 : e.requestCompleteLiveSubtitles(), (function(e) {
                                t.fire(au, e)
                            }))
                        }()
                    } catch (Vd) {
                        return n()
                    }
                    return r && r.then ? r.then(void 0, n) : r
                }(0, (function(e) {
                    t.fire(uu)
                })))
            })))
        }(e.video.live_event), function() {
            u = 0, c = 0;
            let e = !1;
            n.once(lo.PLAYING, () => e = !0);
            let r = Be();
            clearInterval(s), s = setInterval(() => {
                n.paused || (u += Ve(r) / 1e3), e && a && (c += Ve(r) / 1e3),
                    function(e) {
                        if (n.lowLatencyMode && e > 12 && n.latency > 10 && a) {
                            const e = "Rebuffer ratio > 12% and latency > 10s, fallback to normal HLS w/ target latency of 12s.";
                            t.fire(du.LOW_LATENCY_FALLBACK, {
                                msg: e
                            }), n.lowLatencyMode = !1, n.presentationDelay = 12, n.bufferTarget = 12
                        }
                    }(c / u * 100), r = Be()
            }, 500)
        }()), e.video.ecdn && r())
    })), t.on(Ga, (function() {
        l()
    })), n.on(du.STREAM_ONLINE, (function() {
        o.isForcePolling && o.unforcePolling()
    })), n.on(du.STREAM_OFFLINE, (function() {
        o.isForcePolling || o.forcePolling()
    })), n.on(po.BUFFER_STARTED, (function() {
        a = !0
    })), n.on(po.BUFFER_ENDED, (function() {
        a = !1
    })), {
        get p2pReady() {}
    }
}

function nc(e, t, n) {
    if (n) return t ? t(e()) : e();
    try {
        var r = Promise.resolve(e());
        return t ? r.then(t) : r
    } catch (Vd) {
        return Promise.reject(Vd)
    }
}

function rc(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}

function ic(e, t) {
    try {
        var n = e()
    } catch (Vd) {
        return t(Vd)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function oc(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Vd) {
            return Promise.reject(Vd)
        }
    }
}

function sc(e, t, n) {
    var r;
    const i = oc((function() {
            return ic((function() {
                return nc(m, (function(t) {
                    return t(n, e)
                }))
            }), (function(e) {
                throw Gu.captureException(e), new Error("Failed to create Hive Module", e)
            }))
        })),
        o = oc((function() {
            return ic((function() {
                return nc(p, (function(e) {
                    return e(n)
                }))
            }), (function(e) {
                return Gu.captureException(e), null
            }))
        })),
        s = function() {
            return function(e, t, n) {
                return e && e.then || (e = Promise.resolve(e)), e
            }(rc((function() {
                if (!u) return nc(o, (function(e) {
                    u = e
                }))
            }), (function() {
                var t;
                return null == (t = u) ? void 0 : t.setUp(e)
            })))
        },
        a = oc((function() {
            return ic((function() {
                return rc((function() {
                    if (!c) return nc(i, (function(e) {
                        c = e
                    }))
                }), (function() {
                    var e;
                    return null == (e = c) ? void 0 : e.setUp(d)
                }))
            }), (function(e) {
                var t;
                return null == (t = c) || t.stop(), null
            }))
        }));
    let u, c, l = !1,
        d = !1,
        h = !1;
    const f = null == (r = e.video.ecdn) ? void 0 : r.ecdn_provider;
    let _;

    function p() {
        return import ("./kollective.module.js").then(({
            default: e
        }) => e)
    }

    function m() {
        return import ("./hive.module.js").then(({
            default: e
        }) => e)
    }

    function v() {
        try {
            u && (u.destroy(), u = null), c && (c.destroy(), c = null)
        } catch (e) {}
    }
    return t.on($a, (function() {
        var t;
        e.isNewVideo() && (l = !1), !0 !== e.preload || !1 !== h || "kollective" !== f ? l || ("pending" !== (null == (t = e.video.live_event) ? void 0 : t.status) ? (l = !0, v(), f && (_ = {
            hive: a,
            kollective: s
        }[f]())) : d = !0) : h = !0
    })), t.on(Ga, v), {
        get p2pReady() {
            return _
        }
    }
}

function ac(e, t, n) {
    let r = null;

    function i() {
        n.deactivateEffect(wa), r = null
    }
    t.on(Ja, (function() {
        var t;
        r && i(), (null == (t = e.video.channel_layout) ? void 0 : t.startsWith("ambisonic")) && n.supportsEffect(wa) && (r = n.activateEffect(wa, {
            ambisonicsUrl: e.request.urls.ambisonics_js
        }))
    })), n.on(vo.CAMERA_UPDATE, (function({
        yaw: e,
        pitch: t,
        roll: n
    }) {
        r && r.updateRotation(e, t, n)
    })), n.on(vo.AMBISONIC_UNSUPPORTED, (function() {
        r && i()
    })), n.on(po.STREAM_CHANGE, (function() {
        r && r.toggleAmbisonics()
    }))
}

function uc(e, t = []) {
    if (!e || "null" === e || 0 === t.length) return {
        track: null
    };
    const [n, r] = e.split("."), [i] = n.split(/[-_]/), o = n !== i, s = t.filter(e => o && e.language === n || e.language === i).sort((e, t) => {
        const o = 2 * (e.language === i && e.kind === r) + 2 * (e.language === n) + 1 * (e.kind === r);
        return 2 * (t.language === i && t.kind === r) + 2 * (t.language === n) + 1 * (t.kind === r) - o
    });
    return s.length > 0 ? {
        track: s[0],
        exactMatch: s[0].language === n && s[0].kind === r
    } : {
        track: null
    }
}

function cc(e) {
    const t = e.split(/\n/g);
    let n = [],
        r = [];
    return t.forEach(e => {
        let t = e.match(/<[a-zA-Z]+ ?.*?>/g) || [],
            i = e.match(/<\/[a-zA-Z]+ ?.*?>/g) || [];
        const o = r.map(({
            startTag: e
        }) => e);
        r = [], t = o.concat(t), t.forEach(e => {
            let [t] = e.replace(/<|>/g, "").split(" ");
            const n = i.indexOf(`</${t}>`); - 1 !== n ? i.splice(n, 1) : r.push({
                startTag: e,
                closeTag: `</${t}>`
            })
        });
        const s = r.map(({
                closeTag: e
            }) => e).reverse().join(""),
            a = `${o.join("")}${e}${s}`;
        n.push(a)
    }), n.join("<br>")
}

function lc(e) {
    return e ? e.split(/\n/g).join("↵") : e
}

function dc(e, t, n, r) {
    let i;

    function o() {
        return t.pictureInPictureActive || Ba(t.videoElement) ? "showing" : "hidden"
    }

    function s() {
        if (0 !== t.video.textTracks.length) {
            if (t.video.textTracks.forEach(e => {
                    e.on("cuechange", a), e.on("modechange", u)
                }), t.video.textTracks.language) {
                const [n] = t.video.textTracks.language.split(/[-_]/), [r] = t.video.textTracks.language.split(/[-_]/);
                if (n !== r) {
                    const n = `${t.video.textTracks.language}.subtitles`,
                        {
                            track: r
                        } = uc(n, t.video.textTracks);
                    if (r) return void e.fire(Wa, n)
                }
            }
            e.fire(Ka)
        } else e.fire(Ka)
    }

    function a(t) {
        const n = t.target,
            r = n.activeCues,
            i = [];
        let o;
        for (var s = 0, a = r.length; s < a; s++) "" !== r[s].text.replace(/^\s+|\s+$/gm, "") && (o = document.createElement("span"), o.appendChild(r[s].getCueAsHTML()), i.push({
            html: cc(o.innerHTML),
            text: lc(r[s].text)
        }));
        e.fire(tu, n, i)
    }

    function u(n) {
        const r = n.target;
        Ba(t.videoElement) && "showing" === r.mode && e.fire(nu, r)
    }
    e.on(Qa, s), e.on(Wa, (function(n) {
        if (i && i.id === n) return;
        let r = t.video.textTracks.getTrackById(n),
            s = !0;
        r || ({
            track: r,
            exactMatch: s
        } = uc(n, t.video.textTracks)), r !== i && setTimeout(() => {
            t.video && t.video.textTracks.forEach(e => {
                e.mode = e === r ? o() : "disabled"
            }), e.fire(nu, r, !s), i = r
        }, 0)
    })), e.on(Ka, (function() {
        setTimeout(() => {
            t.video && t.video.textTracks.forEach(e => {
                e.mode = "disabled"
            }), e.fire(tu), i && (i = null, e.fire(nu, null))
        }, 0)
    })), e.on(po.TEXT_TRACKS_AVAILABLE, s), e.on([lo.ENTER_PICTURE_IN_PICTURE, lo.LEAVE_PICTURE_IN_PICTURE], (function() {
        ! function(e) {
            i && i.mode !== e && (i.mode = e)
        }(o())
    }))
}
const hc = ["main", "translation"];

function fc(e, t) {
    return Array.from(e).map(e => de(de({}, e), {}, {
        enabled: e.id === t
    }))
}

function _c(e) {
    return Array.from(e).find(e => e.enabled)
}

function pc(e, t = {}) {
    if (!(null == e ? void 0 : e.length)) return [];
    const n = t.language,
        r = t.kind;
    let i = null == t ? void 0 : t.id;
    if (i) return fc(e, i);
    if (r && n) {
        const t = e.find(e => e.language === n && e.kind === r);
        if (i = null == t ? void 0 : t.id, i) return fc(e, i)
    }
    if (n) {
        const t = e.find(e => e.language === n && hc.includes(e.kind));
        if (i = null == t ? void 0 : t.id, i) return fc(e, i)
    }
    const o = e.find(e => "main" === e.kind);
    return i = null == o ? void 0 : o.id, fc(e, i)
}

function mc(e, t, n) {
    let r, i, o, s, a, u;

    function c() {
        var t;
        const n = e.video.live_event,
            i = null == n ? void 0 : n.dvr;
        if (fu(n) || function(e) {
                return "active" === (null == e ? void 0 : e.status)
            }(n) || pu(n) && !hu(n)) return void(r.video = null);
        if (_u(n) && r.video && !e.isNewVideo()) return;
        const o = function(e) {
                return pc(e.request.audio_tracks, {
                    language: e.request.cookie.audio_language,
                    kind: e.request.cookie.audio_kind
                })
            }(e),
            s = null == (t = _c(o)) ? void 0 : t.id,
            u = _u(n) ? function(e) {
                const t = [],
                    n = Fu(e);
                n && t.push(n);
                const r = function(e) {
                    var t;
                    const n = e.video.live_event,
                        r = e.request.files;
                    if (yu(r.dash)) return null;
                    const i = r.dash.default_cdn,
                        o = r.dash.cdns[i].url || (null == (t = n.playback) ? void 0 : t.dash_noredirect),
                        s = e.request.flags.live_dash ? 2 : 1;
                    return {
                        id: `dash-${i}-${e.video.id}`,
                        src: o,
                        mime: Ra.dashMpd,
                        priority: s,
                        metadata: {
                            cdn: i,
                            origin: r.dash.cdns[i].origin,
                            quality: "sd"
                        }
                    }
                }(e);
                return r && t.push(r), t
            }(e) : bu(e, s),
            c = Hu(e);
        !r.video || e.isNewVideo() || a || i && !hu(n) ? d({
            files: u,
            textTracks: c,
            audioTracks: o,
            switchingVideo: i,
            startTime: i && r.currentTime
        }) : l(u, c)
    }

    function l(e, t) {
        e.forEach(e => {
            const t = r.video.files.getFileById(e.id);
            t && t.src !== e.src && (t.src = e.src)
        }), t.forEach(e => {
            const t = r.video.textTracks.getTrackById(e.id);
            t && t.src !== e.src && (t.src = e.src)
        })
    }

    function d({
        files: i,
        textTracks: a,
        audioTracks: c = [],
        switchingVideo: l = !1,
        startTime: d
    }) {
        var h, f;
        const _ = e.video.live_event,
            p = n.getBoundingClientRect(),
            m = _u(_) ? Fu(e) : function(e) {
                const t = e.request.files;
                if (!yu(t.hls)) {
                    const e = t.hls.default_cdn,
                        n = t.hls.cdns[e],
                        r = n.captions || n.url;
                    return r ? {
                        src: r,
                        mime: Ra.hls,
                        metadata: {
                            cdn: e,
                            origin: n.origin,
                            quality: "sd"
                        }
                    } : null
                }
                return null
            }(e);
        var v;
        u || (u = (null == (v = r.played) ? void 0 : v.length) > 0);
        const g = !r.paused || (null == (h = r._rebufferMonitor) ? void 0 : h._isBuffering);
        r._switchingVideo = l, r.video = {
            id: e.video.id,
            title: e.video.title,
            subtitle: `from ${e.video.owner.name}`,
            files: i,
            textTracks: a,
            audioTracks: c,
            chapters: qn(e, "embed.chapters", []),
            duration: e.video.duration,
            externalDisplayFiles: {
                AirPlay: m
            },
            metadata: {
                playlistRefreshUrl: mu(e),
                thumbnail: Ge(e.video.thumbs.base, {
                    w: "640"
                }),
                useHls: e.request.drm && Bt.browser.safari,
                drm: e.request.drm,
                p2pReady: e.video.ecdn && (null !== (f = o.p2pReady) && void 0 !== f ? f : s.p2pReady),
                percentShown: Ia.frustumSurfaceArea(e.video.spatial.fov, p.width, p.height)
            }
        }, l ? r.checkRebuffer(u, g) : t.fire(Qa), "number" == typeof d && (r.currentTime = d)
    }
    return function() {
            var t, i, o, s;
            const a = [Os, Qs, ta, Qo],
                u = e.video.ecdn && !e.request.flags.ecdn_delta_updates;
            r = new ya(n, a, {
                externalDisplays: [To],
                mediaSourceScanner: {
                    droppedFrameSwitchPercent: Vu(e)
                },
                tests: e.request.ab_tests,
                fileCodecs: e.request.file_codecs,
                presentationDelay: e.video.presentation_delay,
                lowLatencyMode: null == (t = e.video.live_event) ? void 0 : t.low_latency,
                dvrEnabled: null == (i = e.video.live_event) ? void 0 : i.dvr,
                disableDeltaUpdates: u,
                liveEventStartTime: null == (o = e.video.live_event) || null == (s = o.ingest) ? void 0 : s.start_time,
                sessionMetadata: {
                    clipId: e.video.id,
                    sessionId: e.request.session
                }
            })
        }(), Object.values(lo).filter(e => ![lo.TIME_UPDATE, lo.PROGRESS, lo.SUSPEND, lo.ERROR].includes(e)).forEach(e => {
            r.on(e, (t = "") => {
                Gu.captureBreadcrumb(e, t, "video event")
            })
        }), r.on(po.STREAMS_LOADED, (function(t) {
            t.video.forEach(t => {
                const n = function(e, t) {
                    return t.find(t => Pu(t.id) === String(e) || Pu(t.id) === Pu(e))
                }(t.id, ju(e, r));
                n ? (t.profile = n.profile, t.quality = n.quality, t.fps = n.fps) : (t.profile = null, t.quality = `${t.height}p`, t.fps = t.framerate)
            })
        })), r.on(po.STREAM_CHANGE, (function({
            index: e,
            streams: n,
            metadata: r
        }) {
            const i = n[e];
            Gu.captureBreadcrumb("Stream changed", i, "video"), t.fire(po.STREAM_CHANGE, i, e, n, r)
        })), r.on(po.STREAM_TARGET_CHANGE, (function({
            index: e,
            streams: n
        }) {
            const r = n[e];
            t.fire(po.STREAM_TARGET_CHANGE, r, e, n)
        })), r.on(po.DRM_KEY_SWITCH, (function() {
            if (!e.request.drm.fallback_asset) return;
            const t = Hu(e);
            l(function(e) {
                const t = e.request.files;
                let n = [];
                const r = e.request.drm && Bt.browser.safari;
                return (t.hls && (Bt.iPhone || Bt.iPad) || r) && (n = n.concat(wu(e, !0))), t.dash && !r && (n = n.concat(Ru(e, !0))), n
            }(e), t)
        })),
        function(e, t, n) {
            [fo.ACTIVATED, fo.AVAILABLE, fo.DEACTIVATED, fo.UNAVAILABLE, mo.STREAM_OFFLINE, mo.STREAM_ONLINE, mo.BUFFER_GAP_JUMP, mo.BUFFER_GAP_JUMP_PREVENT, mo.STALL_JUMP, mo.LATENCY_UPDATED, go.MEDIASESSION_PAUSE, go.MEDIASESSION_PLAY, go.MEDIASESSION_SEEK_BACKWARD, go.MEDIASESSION_SEEK_FORWARD, po.AUDIO_TRACK_CHANGED, po.AV_DURATION_MISMATCH, po.BANDWIDTH, po.BUFFER_ENDED, po.BUFFER_OCCUPANCY, po.BUFFER_STARTED, po.CHAPTER_CUES_UPDATED, po.CUE_POINT, po.CURRENT_FILE_CHANGE, po.DOWNLOAD_END, po.DOWNLOAD_TIMEOUT, po.DRM_AUTH_SUCCESS, po.DRM_KEY_SWITCH, po.DROPPED_FRAMES, po.MANIFEST_LOADED, po.MANIFEST_TIMEOUT, po.QUOTA_EXCEEDED_ERROR, po.SCANNER_CHANGE, po.STREAM_CHANGE_START, po.STREAM_BUFFER_END, po.STREAM_BUFFER_START, po.AVAILABLE_STREAMS_CHANGED, po.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, po.TEXT_TRACKS_AVAILABLE, po.DROPPED_FRAME_PERCENT_EXCEEDED, po.LOAD_SEGMENT_FAILED, po.SEGMENT_CUES_LOADED, vo.CAMERA_UPDATE, vo.CAMERA_CHANGE, vo.MOTION_END, vo.MOTION_START, vo.SPATIAL_UNSUPPORTED, vo.WEBVR_ENTER, vo.WEBVR_EXIT, vo.WEBVR_HARDWARE_AVAILABLE, yo.BRAIN_ML_SWITCH_TO_SKYFIRE, yo.BRAIN_ML_MODEL_INPUTS, lo.DURATION_CHANGE, lo.ERROR, lo.LOAD_START, lo.LOADED_DATA, lo.LOADED_METADATA, lo.PLAYING, lo.RATE_CHANGE, lo.RESIZE, lo.STALLED, lo.VOLUME_CHANGE, lo.WAITING, lo.ENTER_PICTURE_IN_PICTURE, lo.LEAVE_PICTURE_IN_PICTURE, lo.WEBKIT_BEGIN_FULLSCREEN, lo.WEBKIT_END_FULLSCREEN].forEach(n => {
                e(n, (...e) => {
                    t.apply(void 0, [n].concat(e))
                })
            })
        }(r.on, t.fire), t.fire(za), new dc(t, r, n, e), new Ku(e, t, r), new Yu(e, t, r), new ac(e, t, r), o = new tc(e, t, r), i = new Wu(e, t, r), s = new sc(e, t, r), t.on($a, c), t.on(Ya, (function(n) {
            var i, o;
            if (!(null == (i = e.embed) || null == (o = i.settings) ? void 0 : o.audio_tracks)) return;
            if (r.supportsVideoElementAudioTracks) return void r.enableAudioTrack(null == n ? void 0 : n.id);
            const s = pc(e.request.audio_tracks, n),
                a = _c(s);
            d({
                files: bu(e, null == a ? void 0 : a.id),
                textTracks: r.video.textTracks,
                audioTracks: s,
                switchingVideo: !0,
                startTime: r.currentTime
            }), t.fire(po.AUDIO_TRACK_CHANGED)
        })), Bt.browser.safari && window.addEventListener("pageshow", e => {
            e.persisted && (a = !0, c())
        }), Pe({
            telecine: r
        }, i)
}

function vc(e, t, n) {
    this.constructorName = "BackboneError", this.message = e, this.name = t, this.source = n
}
vc.prototype = new Error;
var gc = {
    embed: {},
    request: {
        cookie: {},
        files: {},
        flags: {},
        urls: {},
        text_tracks: [],
        file_codecs: {}
    },
    video: {
        owner: {},
        thumbs: {},
        version: {}
    },
    user: {}
};

function yc(e, t) {
    let n;
    const r = dr();
    let i, o, s = null,
        a = new Tu(t, gc);

    function u(e, t) {
        return r.fire($a, e, t), e
    }
    const c = {
        play: () => i.play(),
        pause: () => i.pause(),
        get currentTime() {
            return o.currentTime > .1 ? ja(o.currentTime) : 0
        },
        set currentTime(e) {
            if (e = parseFloat(e), isNaN(e) || e < 0) throw new vc("Seconds must be a positive number less than the duration of the video.", "RangeError", "setCurrentTime");
            r.fire(Xa, e)
        },
        get liveEdgeTime() {
            return o.liveEdgeTime
        },
        get atLiveEdge() {
            return o.atLiveEdge
        },
        get liveTailTime() {
            return o.liveTailTime
        },
        get atLiveTail() {
            return o.atLiveTail
        },
        get duration() {
            return ja(a.video.duration)
        },
        get enabledTextTrack() {
            return s
        },
        loadVideo(e) {
            const t = ji(a);
            return a.reset(e), a = u(a, t), this
        },
        reactivate() {
            var e;
            return (null == (e = o) ? void 0 : e.reactivate) && o.reactivate(), this
        },
        unload() {
            return r.fire(qa), this
        },
        destroy() {
            return r.fire(Ga), this
        },
        on(e, t) {
            return r.on(e, t), this
        },
        once(e, t) {
            return r.once(e, t), this
        },
        off(e, t) {
            return r.off(e, t), this
        },
        get events() {
            return r
        },
        hasTextTrack(e) {
            let t, n, r = this.textTracks;
            if (Fa(e)) n = r.getTrackById(e);
            else {
                let n = e.split(".")[0];
                t = r.some(e => e.language.toLowerCase() === n.toLowerCase())
            }
            return !(!n && !t)
        },
        enableTextTrack(e, t = null) {
            let n, i, a = this.textTracks;
            if (Fa(e)) s = a.getTrackById(e);
            else {
                if ([n, i = t] = e.split("."), !this.hasTextTrack(e)) throw new vc(`There are no tracks for “${n.toUpperCase()}”.`, "InvalidTrackLanguageError", "enableTextTrack");
                s = uc(i ? `${n}.${i}` : n, a).track
            }
            if (!s || i && s.kind !== i) throw new vc(`There are no ${i} tracks for “${n.toUpperCase()}”.`, "InvalidTrackError", "enableTextTrack");
            o.setCaptionsShouldDisplay(!0), r.fire(Wa, s.id)
        },
        disableTextTrack() {
            s = null, o.setCaptionsShouldDisplay(!1), r.fire(Ka)
        },
        enableAudioTrack(e) {
            r.fire(Ya, e)
        },
        get qualities() {
            return function(e) {
                var t;
                const n = e.representations.map(t => {
                        const n = Su(t);
                        return {
                            id: n,
                            label: Bu(t),
                            active: e.quality === n
                        }
                    }),
                    r = null == (t = e.video) ? void 0 : t.currentFile.mime;
                return [Ra.dash, Ra.dashMpd, Ra.hlsLive, Ra.hls].includes(r) && n.unshift({
                    id: "auto",
                    label: "Auto",
                    active: !e.quality || "auto" === e.quality
                }), n
            }(this)
        },
        get quality() {
            return i.quality
        },
        set quality(e) {
            i.quality = e
        },
        get playbackRate() {
            return o ? o.playbackRate : 1
        },
        set playbackRate(e) {
            o.playbackRate = e, o.defaultPlaybackRate = e
        },
        get textTracks() {
            return o.video ? o.video.textTracks : []
        },
        get representations() {
            return ju(a, o)
        },
        get volume() {
            return o ? o.volume : ja(a.request.cookie.volume)
        },
        set volume(e) {
            if (e = parseFloat(e), isNaN(e) || e < 0 || e > 1) throw new vc("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
            o.volume = e
        },
        get videoId() {
            return a.video.id
        },
        get videoWidth() {
            return o.videoWidth || a.video.width
        },
        get videoHeight() {
            return o.videoHeight || a.video.height
        },
        get readyState() {
            return o.videoElement.readyState
        },
        get telecine() {
            return o
        },
        get pictureInPictureEnabled() {
            const e = Bt.spatialPlayback && a.video.spatial,
                t = (Bt.iOS >= 17 || Bt.browser.safari) && this.readyState < 2;
            return t && o.once(lo.LOADED_DATA, () => r.fire(iu)), !t && !e && o.pictureInPictureEnabled
        },
        get audioTracks() {
            var e, t;
            return (null == (e = o) || null == (t = e.video) ? void 0 : t.audioTracks) || []
        },
        requestCompleteLiveSubtitles() {
            r.fire(su)
        },
        get hasAudio() {
            var e, t, n, r, i;
            return !!(null == (e = o) || null == (t = e.video) || null == (n = t.audioTracks) ? void 0 : n.length) || !!(null == (r = o.manifest) || null == (i = r.audio) ? void 0 : i.length)
        }
    };
    return a = u(a), i = new mc(a, r, e), o = i.telecine, n = Object.create(o), Pe(n, c)
}

function Ec(e) {
    return "string" == typeof e || !Wt(e) && on(e) && "[object String]" == rn(e)
}

function Tc(e) {
    return Math.round(parseInt(e, 16) / 255 * 100) / 100
}

function Sc(...e) {
    if (1 === e.length && e[0] instanceof Sc) {
        var t = e[0];
        return this.red = t.red, this.green = t.green, this.blue = t.blue, this.alpha = t.alpha, this.hue = t.hue, this.saturation = t.saturation, this.lightness = t.lightness, this
    }
    if (1 === e.length) {
        if ("string" == typeof e[0] && e[0].indexOf("rgb") >= 0) return this.rgba = function(e) {
            var t = /rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)/.exec(e);
            if (!t) throw new Error("Invalid rgb value");
            return {
                red: parseInt(t[1], 10),
                green: parseInt(t[2], 10),
                blue: parseInt(t[3], 10),
                alpha: parseFloat(t[5]) || 1
            }
        }(e[0]), this;
        if (! function(e) {
                return "string" == typeof(e = e.replace("#", "")) && [3, 4, 6, 8].includes(e.length) && !isNaN(parseInt(e, 16))
            }(`${e[0]}`)) throw new Error("Invalid hex value");
        const {
            hex: t,
            alpha: n
        } = function(e) {
            let t = 1;
            return 4 === (e = e.replace("#", "")).length && (t = Tc(e.slice(3) + e.slice(3)), e = e.slice(0, 3)), 8 === e.length && (t = Tc(e.slice(6, 8)), e = e.slice(0, 6)), {
                hex: e,
                alpha: t
            }
        }(`${e[0]}`);
        return this.hex = t, this.alpha = n, this
    }
    if (3 === e.length || 4 === e.length) {
        for (var n = 0; n < 3; n++)
            if (isNaN(parseInt(e[n], 10)) || parseInt(e[n], 10) < 0 || parseInt(e[n], 10) > 255) throw new Error("Invalid rgb value");
        if (e[3] && parseFloat(e[3]) < 0 || parseFloat(e[3]) > 1) throw new Error("Invalid alpha value");
        return this.rgba = {
            red: e[0],
            green: e[1],
            blue: e[2],
            alpha: parseFloat(e[3]) || 1
        }, this
    }
    throw new Error("Invalid color")
}

function bc() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function Ac(e) {
    return bc() - e
}

function Ic() {
    let e = 0,
        t = null,
        n = 0,
        r = !1;

    function i() {
        return e / 1e3
    }
    return {
        trackBufferStart: function(e, i) {
            t = bc(), n++, r = !0, e(i)
        },
        trackBufferEnd: function(n, i = {}) {
            if (!r) return;
            const o = Ac(t);
            e += o, i.buffer_duration = o / 1e3, r = !1, n(i)
        },
        trackVideoExit: function(n) {
            r && !n && (e += Ac(t))
        },
        resetLastBufferTime: function() {
            t = null
        },
        getBufferRatio: function(e) {
            const t = i() / e * 100;
            return isNaN(t) ? 0 : Math.round(100 * t) / 100
        },
        getBufferCount: function() {
            return n
        },
        getTotalBufferDuration: i,
        isVideoBuffering: function() {
            return r
        }
    }
}
Sc.prototype = {
    get complement() {
        var e = this.clone();
        return e.rgb = {
            red: 255 - this.red,
            green: 255 - this.green,
            blue: 255 - this.blue
        }, e
    },
    get hex() {
        return Sc.rgbToHex(this.red, this.green, this.blue)
    },
    get hexWithAlpha() {
        const e = ("0" + Math.round(255 * this.alpha).toString(16)).slice(-2);
        return Sc.rgbToHex(this.red, this.green, this.blue) + e
    },
    set hex(e) {
        return this.rgba = Sc.hexToRgb(e), this
    },
    get hsl() {
        return "hsl(" + this.hue + "," + this.saturation + "%," + Math.round(this.lightness) + "%)"
    },
    set hsl(e) {
        this.hue = e.hue, this.saturation = e.saturation, this.lightness = e.lightness;
        var t = Sc.hslToRgb(e.hue, e.saturation, e.lightness);
        return this.red = t.red, this.green = t.green, this.blue = t.blue, this.alpha = t.alpha, this
    },
    get luminance() {
        function e(e) {
            return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
        }
        return .2126 * e(this.red / 255) + .7152 * e(this.green / 255) + .0722 * e(this.blue / 255)
    },
    get rgb() {
        return "rgb(" + this.red + "," + this.green + "," + this.blue + ")"
    },
    set rgb(e) {
        return this.rgba = e, this
    },
    get rgba() {
        return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")"
    },
    set rgba(e) {
        this.red = e.red, this.green = e.green, this.blue = e.blue, this.alpha = e.alpha || 1;
        var t = Sc.rgbToHsl(e.red, e.green, e.blue);
        return this.hue = t.hue, this.saturation = t.saturation, this.lightness = t.lightness, this
    },
    get yiq() {
        return (299 * this.red + 587 * this.green + 114 * this.blue) / 1e3
    },
    clone: function() {
        return new Sc(this)
    },
    lighten: function(e, t, n) {
        if (this.hsl = {
                hue: this.hue,
                saturation: this.saturation,
                lightness: this.lightness + e
            }, t && n)
            for (var r = n.contrast(this).ratio; r < t && (this.lighten(5), r = n.contrast(this).ratio, !(this.lightness >= 100)););
        return this
    },
    darken: function(e, t, n) {
        if (this.hsl = {
                hue: this.hue,
                saturation: this.saturation,
                lightness: this.lightness - e
            }, t && n)
            for (var r = n.contrast(this).ratio; r < t && (this.darken(5), r = n.contrast(this).ratio, !(this.lightness <= 0)););
        return this
    },
    overlayOn: function(e) {
        if (this.alpha >= 1) return this;
        var t = this.clone();
        return t.rgba = {
            red: t.red * this.alpha + e.red * e.alpha * (1 - this.alpha),
            green: t.green * this.alpha + e.green * e.alpha * (1 - this.alpha),
            blue: t.blue * this.alpha + e.blue * e.alpha * (1 - this.alpha),
            alpha: t.alpha + e.alpha * (1 - this.alpha)
        }, t
    },
    contrast: function(e) {
        var t = this.alpha;
        if (t >= 1) {
            e.alpha < 1 && (e = e.overlayOn(this));
            var n = this.luminance + .05,
                r = e.luminance + .05,
                i = n / r;
            return r > n && (i = 1 / i), {
                ratio: i = Math.round(10 * i) / 10,
                error: 0,
                min: i,
                max: i
            }
        }
        var o = this.overlayOn(Sc.white).contrast(e).ratio,
            s = this.overlayOn(Sc.black).contrast(e).ratio,
            a = Math.max(o, s),
            u = {
                red: Math.min(Math.max(0, (e.red - this.red * t) / (1 - t)), 255),
                green: Math.min(Math.max(0, (e.green - this.green * t) / (1 - t)), 255),
                blue: Math.min(Math.max(0, (e.blue - this.blue * t) / (1 - t)), 255)
            },
            c = this.clone();
        c.rgb = u;
        var l = this.overlayOn(c).contrast(e).ratio;
        return {
            ratio: Math.round((l + a) / 2 * 10) / 10,
            error: Math.round((a - l) / 2 * 10) / 10,
            min: l,
            max: a,
            closest: c,
            farthest: s === a ? Sc.white : Sc.black
        }
    },
    wcagAACompliant: function(e) {
        return this.contrast(e).ratio >= 4.5
    },
    wcagAAACompliant: function(e) {
        return this.contrast(e).ratio >= 7
    },
    yiqContrastColor: function() {
        return this.yiq >= 120 ? new Sc(0, 0, 0) : new Sc(255, 255, 255)
    }
}, Sc.hexToRgb = function(e) {
    var t;
    return 3 === (e = String(e)).length || 4 === e.length ? (t = /^#?([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])$/i.exec(e)) && (t[1] += t[1], t[2] += t[2], t[3] += t[3]) : t = /^#?([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/i.exec(e), t ? {
        red: parseInt(t[1], 16),
        green: parseInt(t[2], 16),
        blue: parseInt(t[3], 16),
        alpha: 1
    } : null
}, Sc.rgbToHex = function(e, t, n) {
    return "#" + ((1 << 24) + (Math.round(e) << 16) + (Math.round(t) << 8) + Math.round(n)).toString(16).slice(1)
}, Sc.rgbToHsl = function(e, t, n) {
    e /= 255, t /= 255, n /= 255;
    var r, i = Math.max(e, t, n),
        o = Math.min(e, t, n),
        s = (i + o) / 2,
        a = s;
    if (i === o) return {
        hue: 0,
        saturation: 0,
        lightness: 100 * a
    };
    var u = i - o;
    return r = a > .5 ? u / (2 - i - o) : u / (i + o), i === e ? s = (t - n) / u + (t < n ? 6 : 0) : i === t ? s = (n - e) / u + 2 : i === n && (s = (e - t) / u + 4), s /= 6, {
        hue: Math.round(360 * s),
        saturation: Math.round(100 * r),
        lightness: Math.round(100 * a)
    }
}, Sc.hslToRgb = function(e, t, n) {
    function r(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), 6 * n < 1 ? e + 6 * (t - e) * n : 2 * n < 1 ? t : 3 * n < 2 ? e + 6 * (2 / 3 - n) * (t - e) : e
    }
    if (e /= 360, n /= 100, 0 == (t /= 100)) return {
        red: Math.floor(255 * n),
        green: Math.floor(255 * n),
        blue: Math.floor(255 * n)
    };
    var i = n < .5 ? n * (1 + t) : n + t - t * n,
        o = 2 * n - i;
    return {
        red: Math.floor(255 * r(o, i, e + 1 / 3)),
        green: Math.floor(255 * r(o, i, e)),
        blue: Math.floor(255 * r(o, i, e - 1 / 3))
    }
}, Sc.hslToHex = function(e, t, n) {
    var r = Sc.hslToRgb(e, t, n);
    return Sc.rgbToHex(r.red, r.green, r.blue)
}, Sc.white = new Sc("fff"), Sc.black = new Sc("000");
const wc = {
    VIDEO_BUFFER_END: "video-buffer-end",
    VIDEO_BUFFER_START: "video-buffer-start",
    VIDEO_ENDED: "video-ended",
    VIDEO_EXIT: "video-exit",
    VIDEO_LOAD_FAILURE: "video-load-failure",
    VIDEO_MINUTE_WATCHED: "video-minute-watched",
    VIDEO_PAUSED: "video-paused",
    VIDEO_PLAYED: "video-played",
    VIDEO_PLAYBACK_ERROR: "video-playback-error",
    VIDEO_READY: "video-ready",
    VIDEO_START_ATTEMPT: "video-start-attempt",
    VIDEO_START_FAILURE: "video-start-failure",
    VIDEO_START_TIME: "video-start-time",
    VIDEO_SEEK: "video-seek",
    VIDEO_SEEKED: "video-seeked",
    CHUNK_DOWNLOADED: "chunk_downloaded"
};

function Rc(e) {
    function t(e, t, n = !0, r = "POST") {
        return new Promise((i, o) => {
            "POST" === r && navigator.sendBeacon ? i({
                status: navigator.sendBeacon(e, t)
            }) : pt({
                url: e,
                body: t,
                method: r,
                async: n,
                headers: {
                    "Content-Type": "text/plain; charset=UTF-8"
                }
            }).then(e => {
                i({
                    response: e,
                    status: e.status
                })
            }).catch(o)
        })
    }
    return {
        log: function(n, r = !0, i = !0) {
            i && (n.event_time = n.event_time || bc());
            const o = [n];
            return t(e, JSON.stringify(o), r)
        },
        logRequestPromiseWithUrl: t
    }
}

function kc(e) {
    let t = 0,
        n = 0,
        r = 0,
        i = 0,
        o = !1,
        s = -1,
        a = null,
        u = null,
        c = null,
        l = {
            satisfied: 0,
            tolerable: 0,
            frustrated: 0
        },
        d = null;

    function h() {
        const t = e.getBoundingClientRect(),
            n = e.videoWidth,
            r = e.videoHeight;
        if (0 === n && 0 === r) return;
        let i = "satisfied";
        if (t.width > n && t.height > r && (n / t.width < .4 ? i = "satisfied" : n / t.width < 1 ? i = "tolerable" : n / t.width > 1 && (i = "frustrated")), u) {
            const e = Ac(u);
            l[c] += e
        }
        c = i, u = bc()
    }

    function f() {
        return o ? 0 : 1
    }

    function _() {
        return -1 === s ? null : s > 8e3 || -1 === s ? 0 : s > 2e3 ? .5 : 1
    }

    function p() {
        return d ? (i = r / Ac(d), t >= 4 || i >= .12 ? 0 : t < 4 && 0 !== t ? i < .12 ? .5 : 0 : 1) : null
    }

    function m() {
        if (-1 === s) return null;
        switch (h(), Object.keys(l).reduce((e, t) => l[e] > l[t] ? e : t)) {
            case "satisfied":
                return 1;
            case "tolerable":
                return .5;
            case "frustrated":
                return 0
        }
        return null
    }
    return e.addEventListener("playing", () => {
        -1 === s && (a = bc())
    }), e.addEventListener("progress", () => {
        -1 === s && (d = bc(), s = Ac(a)), h()
    }), {
        startupTimeScore: _,
        rebufferScore: p,
        failureScore: f,
        videoQualityScore: m,
        overallScore: function() {
            return Math.min(f(), _(), p(), m())
        },
        trackBufferStart: function() {
            -1 !== s && (t++, n = bc())
        },
        trackBufferEnd: function() {
            -1 !== s && (r += Ac(n))
        },
        onError: function(e) {
            e.final && (o = !0)
        }
    }
}

function Pc(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    var n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function Dc(e, t) {
    let n, r, i, o, s, a, u, c, l, d, h, f, _, p, m = 0;

    function v() {
        n = 0, r = 0, i = 0, o = 0, s = 0, a = null, u = 0, c = !1, l = !1, d = null, h = !1, f = new kc(e), _ = new Ic, p = {
            bufferTracker: _,
            videoBufferCheck: () => {
                setInterval(() => {
                    let t = e.currentTime;
                    l && !h && !e.paused && !p.bufferTracker.isVideoBuffering() && t < s + .125 && p.bufferTracker.trackBufferStart(y), l && !e.paused && p.bufferTracker.isVideoBuffering() && t > s + .125 && (p.bufferTracker.trackBufferEnd(E), p.bufferTracker.resetLastBufferTime()), s = t
                }, 250)
            },
            addEventData: e => null,
            playbackSessionTimer: () => {
                let t = bc();
                setInterval(() => {
                    (!e.paused && c || h || p.bufferTracker.isVideoBuffering()) && (u += Ac(t) / 1e3), t = bc()
                }, 500)
            },
            customMinuteTracker: {
                shouldCount: () => !1,
                onCount: () => {}
            }
        }
    }

    function g(e, n = {}) {
        0 === m && (n = Object.assign(n, p.addEventData(e)), t(e, n))
    }

    function y(e = {}) {
        f.trackBufferStart(), g(wc.VIDEO_BUFFER_START, e)
    }

    function E(e = {}) {
        f.trackBufferEnd(), g(wc.VIDEO_BUFFER_END, e)
    }
    return v(), g(wc.VIDEO_READY),
        function() {
            let t = Math.floor(60 * Math.random());
            setInterval(() => {
                var s, a, u;

                function l(e, n) {
                    return 0 === e ? n === t : n >= 60
                }!e.paused && c && (n++, (null == (s = p.customMinuteTracker) || null == s.shouldCount ? void 0 : s.shouldCount()) && r++, l(i, n) && (n = 0, i++, g(wc.VIDEO_MINUTE_WATCHED)), l(o, r) && (null == (a = p.customMinuteTracker) || null == a.shouldCount ? void 0 : a.shouldCount()) && (r = 0, o++, null == (u = p.customMinuteTracker) || null == u.onCount || u.onCount(o)))
            }, 1e3)
        }(), window.addEventListener("pagehide", t => {
            p.bufferTracker.trackVideoExit(e.paused);
            const n = {
                startup: f.startupTimeScore(),
                rebuffer: f.rebufferScore(),
                failure: f.failureScore(),
                quality: f.videoQualityScore(),
                overall: f.overallScore()
            };
            d && g(wc.VIDEO_EXIT, {
                vxs: n
            })
        }, !1), e.addEventListener("playing", () => {
            c = !0, h || l && g(wc.VIDEO_PLAYED)
        }), e.addEventListener("timeupdate", () => {
            if (l) return;
            let e = {
                startup_duration: d ? Pc(Ac(d) / 1e3, 2) : null
            };
            g(wc.VIDEO_START_TIME, e), l = !0
        }), e.addEventListener("pause", () => {
            c = !1, g(wc.VIDEO_PAUSED)
        }), e.addEventListener("seeking", () => {
            h || (a = bc(), h = !0, c = !1, g(wc.VIDEO_SEEK))
        }), e.addEventListener("seeked", () => {
            h = !1, e.paused || (c = !0), g(wc.VIDEO_SEEKED, {
                seek_duration: Ac(a) / 1e3
            }), a = null
        }), e.addEventListener("ended", () => {
            g(wc.VIDEO_ENDED)
        }), e.addEventListener("waiting", () => {
            c = !1
        }), e.addEventListener("canplay", () => {
            h || p.bufferTracker.isVideoBuffering() && !c && (p.bufferTracker.trackBufferEnd(E), p.bufferTracker.resetLastBufferTime())
        }), {
            globalProperties: function() {
                return {
                    autoplay: e.autoplay,
                    buffer_count: p.bufferTracker.getBufferCount(),
                    total_buffer_duration: p.bufferTracker.getTotalBufferDuration(),
                    buffer_ratio: p.bufferTracker.getBufferRatio(u),
                    client_time: bc(),
                    is_buffering: p.bufferTracker.isVideoBuffering(),
                    looping: e.loop,
                    minutes_watched: i,
                    network_state: e.networkState,
                    playback_rate: e.playbackRate,
                    player_width: e.getBoundingClientRect().width,
                    player_height: e.getBoundingClientRect().height,
                    session_playback_duration: Pc(u, 2),
                    video_time: e.currentTime,
                    video_height: e.videoHeight,
                    video_width: e.videoWidth,
                    volume: Pc(e.volume, 2)
                }
            },
            logStartRequest: function() {
                d = bc(), g(wc.VIDEO_START_ATTEMPT)
            },
            customizeHooks: function(e) {
                p = Object.assign(p, e)
            },
            initHooks: function() {
                p.videoBufferCheck(), p.playbackSessionTimer()
            },
            logBufferStart: y,
            logBufferEnd: E,
            setDisplayContext: function(e) {
                m = e
            },
            handleExternalError: function(e, t) {
                c = !1, f.onError(t), g(l ? wc.VIDEO_PLAYBACK_ERROR : l ? wc.VIDEO_START_FAILURE : wc.VIDEO_LOAD_FAILURE, e)
            },
            reset: v
        }
}
var Oc = function() {
        return $t.Date.now()
    },
    Lc = Math.max,
    Cc = Math.min;

function Mc(e, t, n) {
    var r, i, o, s, a, u, c = 0,
        l = !1,
        d = !1,
        h = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");

    function f(t) {
        var n = r,
            o = i;
        return r = i = void 0, c = t, s = e.apply(o, n)
    }

    function _(e) {
        return c = e, a = setTimeout(m, t), l ? f(e) : s
    }

    function p(e) {
        var n = e - u;
        return void 0 === u || n >= t || n < 0 || d && e - c >= o
    }

    function m() {
        var e = Oc();
        if (p(e)) return v(e);
        a = setTimeout(m, function(e) {
            var n = t - (e - u);
            return d ? Cc(n, o - (e - c)) : n
        }(e))
    }

    function v(e) {
        return a = void 0, h && r ? f(e) : (r = i = void 0, s)
    }

    function g() {
        var e = Oc(),
            n = p(e);
        if (r = arguments, i = this, u = e, n) {
            if (void 0 === a) return _(u);
            if (d) return clearTimeout(a), a = setTimeout(m, t), f(u)
        }
        return void 0 === a && (a = setTimeout(m, t)), s
    }
    return t = Ma(t) || 0, cn(n) && (l = !!n.leading, o = (d = "maxWait" in n) ? Lc(Ma(n.maxWait) || 0, t) : o, h = "trailing" in n ? !!n.trailing : h), g.cancel = function() {
        void 0 !== a && clearTimeout(a), c = 0, r = u = i = a = void 0
    }, g.flush = function() {
        return void 0 === a ? s : v(Oc())
    }, g
}

function Nc(e, t, n) {
    var r = !0,
        i = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    return cn(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Mc(e, t, {
        leading: r,
        maxWait: t,
        trailing: i
    })
}
var xc = o((function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Tracker = void 0;
    var n = function() {
        function e() {}
        return e.getAttributeTypeMap = function() {
            return e.attributeTypeMap
        }, e.attributeTypeMap = [{
            name: "name",
            baseName: "name",
            type: "string"
        }, {
            name: "version",
            baseName: "version",
            type: "string"
        }], e
    }();
    t.Tracker = n
}));
let Uc;
const Fc = new Uint8Array(16);

function jc() {
    if (!Uc && (Uc = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Uc)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Uc(Fc)
}
var Bc = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function Vc(e) {
    return "string" == typeof e && Bc.test(e)
}
const Hc = [];
for (let z_ = 0; z_ < 256; ++z_) Hc.push((z_ + 256).toString(16).slice(1));

function Xc(e, t = 0) {
    return Hc[e[t + 0]] + Hc[e[t + 1]] + Hc[e[t + 2]] + Hc[e[t + 3]] + "-" + Hc[e[t + 4]] + Hc[e[t + 5]] + "-" + Hc[e[t + 6]] + Hc[e[t + 7]] + "-" + Hc[e[t + 8]] + Hc[e[t + 9]] + "-" + Hc[e[t + 10]] + Hc[e[t + 11]] + Hc[e[t + 12]] + Hc[e[t + 13]] + Hc[e[t + 14]] + Hc[e[t + 15]]
}
let qc, Gc, Wc = 0,
    Kc = 0;

function Yc(e) {
    if (!Vc(e)) throw TypeError("Invalid UUID");
    let t;
    const n = new Uint8Array(16);
    return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = 255 & t, n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, n[5] = 255 & t, n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, n[7] = 255 & t, n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, n[9] = 255 & t, n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = t / 4294967296 & 255, n[12] = t >>> 24 & 255, n[13] = t >>> 16 & 255, n[14] = t >>> 8 & 255, n[15] = 255 & t, n
}

function $c(e, t, n) {
    function r(e, r, i, o) {
        var s;
        if ("string" == typeof e && (e = function(e) {
                e = unescape(encodeURIComponent(e));
                const t = [];
                for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
                return t
            }(e)), "string" == typeof r && (r = Yc(r)), 16 !== (null === (s = r) || void 0 === s ? void 0 : s.length)) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        let a = new Uint8Array(16 + e.length);
        if (a.set(r), a.set(e, r.length), a = n(a), a[6] = 15 & a[6] | t, a[8] = 63 & a[8] | 128, i) {
            o = o || 0;
            for (let e = 0; e < 16; ++e) i[o + e] = a[e];
            return i
        }
        return Xc(a)
    }
    try {
        r.name = e
    } catch (i) {}
    return r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", r
}

function zc(e) {
    return 14 + (e + 64 >>> 9 << 4) + 1
}

function Qc(e, t) {
    const n = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
}

function Jc(e, t, n, r, i, o) {
    return Qc(function(e, t) {
        return e << t | e >>> 32 - t
    }(Qc(Qc(t, e), Qc(r, o)), i), n)
}

function Zc(e, t, n, r, i, o, s) {
    return Jc(t & n | ~t & r, e, t, i, o, s)
}

function el(e, t, n, r, i, o, s) {
    return Jc(t & r | n & ~r, e, t, i, o, s)
}

function tl(e, t, n, r, i, o, s) {
    return Jc(t ^ n ^ r, e, t, i, o, s)
}

function nl(e, t, n, r, i, o, s) {
    return Jc(n ^ (t | ~r), e, t, i, o, s)
}
const rl = $c("v3", 48, (function(e) {
    if ("string" == typeof e) {
        const t = unescape(encodeURIComponent(e));
        e = new Uint8Array(t.length);
        for (let n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n)
    }
    return function(e) {
        const t = [],
            n = 32 * e.length;
        for (let r = 0; r < n; r += 8) {
            const n = e[r >> 5] >>> r % 32 & 255,
                i = parseInt("0123456789abcdef".charAt(n >>> 4 & 15) + "0123456789abcdef".charAt(15 & n), 16);
            t.push(i)
        }
        return t
    }(function(e, t) {
        e[t >> 5] |= 128 << t % 32, e[zc(t) - 1] = t;
        let n = 1732584193,
            r = -271733879,
            i = -1732584194,
            o = 271733878;
        for (let s = 0; s < e.length; s += 16) {
            const t = n,
                a = r,
                u = i,
                c = o;
            n = Zc(n, r, i, o, e[s], 7, -680876936), o = Zc(o, n, r, i, e[s + 1], 12, -389564586), i = Zc(i, o, n, r, e[s + 2], 17, 606105819), r = Zc(r, i, o, n, e[s + 3], 22, -1044525330), n = Zc(n, r, i, o, e[s + 4], 7, -176418897), o = Zc(o, n, r, i, e[s + 5], 12, 1200080426), i = Zc(i, o, n, r, e[s + 6], 17, -1473231341), r = Zc(r, i, o, n, e[s + 7], 22, -45705983), n = Zc(n, r, i, o, e[s + 8], 7, 1770035416), o = Zc(o, n, r, i, e[s + 9], 12, -1958414417), i = Zc(i, o, n, r, e[s + 10], 17, -42063), r = Zc(r, i, o, n, e[s + 11], 22, -1990404162), n = Zc(n, r, i, o, e[s + 12], 7, 1804603682), o = Zc(o, n, r, i, e[s + 13], 12, -40341101), i = Zc(i, o, n, r, e[s + 14], 17, -1502002290), r = Zc(r, i, o, n, e[s + 15], 22, 1236535329), n = el(n, r, i, o, e[s + 1], 5, -165796510), o = el(o, n, r, i, e[s + 6], 9, -1069501632), i = el(i, o, n, r, e[s + 11], 14, 643717713), r = el(r, i, o, n, e[s], 20, -373897302), n = el(n, r, i, o, e[s + 5], 5, -701558691), o = el(o, n, r, i, e[s + 10], 9, 38016083), i = el(i, o, n, r, e[s + 15], 14, -660478335), r = el(r, i, o, n, e[s + 4], 20, -405537848), n = el(n, r, i, o, e[s + 9], 5, 568446438), o = el(o, n, r, i, e[s + 14], 9, -1019803690), i = el(i, o, n, r, e[s + 3], 14, -187363961), r = el(r, i, o, n, e[s + 8], 20, 1163531501), n = el(n, r, i, o, e[s + 13], 5, -1444681467), o = el(o, n, r, i, e[s + 2], 9, -51403784), i = el(i, o, n, r, e[s + 7], 14, 1735328473), r = el(r, i, o, n, e[s + 12], 20, -1926607734), n = tl(n, r, i, o, e[s + 5], 4, -378558), o = tl(o, n, r, i, e[s + 8], 11, -2022574463), i = tl(i, o, n, r, e[s + 11], 16, 1839030562), r = tl(r, i, o, n, e[s + 14], 23, -35309556), n = tl(n, r, i, o, e[s + 1], 4, -1530992060), o = tl(o, n, r, i, e[s + 4], 11, 1272893353), i = tl(i, o, n, r, e[s + 7], 16, -155497632), r = tl(r, i, o, n, e[s + 10], 23, -1094730640), n = tl(n, r, i, o, e[s + 13], 4, 681279174), o = tl(o, n, r, i, e[s], 11, -358537222), i = tl(i, o, n, r, e[s + 3], 16, -722521979), r = tl(r, i, o, n, e[s + 6], 23, 76029189), n = tl(n, r, i, o, e[s + 9], 4, -640364487), o = tl(o, n, r, i, e[s + 12], 11, -421815835), i = tl(i, o, n, r, e[s + 15], 16, 530742520), r = tl(r, i, o, n, e[s + 2], 23, -995338651), n = nl(n, r, i, o, e[s], 6, -198630844), o = nl(o, n, r, i, e[s + 7], 10, 1126891415), i = nl(i, o, n, r, e[s + 14], 15, -1416354905), r = nl(r, i, o, n, e[s + 5], 21, -57434055), n = nl(n, r, i, o, e[s + 12], 6, 1700485571), o = nl(o, n, r, i, e[s + 3], 10, -1894986606), i = nl(i, o, n, r, e[s + 10], 15, -1051523), r = nl(r, i, o, n, e[s + 1], 21, -2054922799), n = nl(n, r, i, o, e[s + 8], 6, 1873313359), o = nl(o, n, r, i, e[s + 15], 10, -30611744), i = nl(i, o, n, r, e[s + 6], 15, -1560198380), r = nl(r, i, o, n, e[s + 13], 21, 1309151649), n = nl(n, r, i, o, e[s + 4], 6, -145523070), o = nl(o, n, r, i, e[s + 11], 10, -1120210379), i = nl(i, o, n, r, e[s + 2], 15, 718787259), r = nl(r, i, o, n, e[s + 9], 21, -343485551), n = Qc(n, t), r = Qc(r, a), i = Qc(i, u), o = Qc(o, c)
        }
        return [n, r, i, o]
    }(function(e) {
        if (0 === e.length) return [];
        const t = 8 * e.length,
            n = new Uint32Array(zc(t));
        for (let r = 0; r < t; r += 8) n[r >> 5] |= (255 & e[r / 8]) << r % 32;
        return n
    }(e), 8 * e.length))
}));
var il = {
    randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
};

function ol(e, t, n, r) {
    switch (e) {
        case 0:
            return t & n ^ ~t & r;
        case 1:
            return t ^ n ^ r;
        case 2:
            return t & n ^ t & r ^ n & r;
        case 3:
            return t ^ n ^ r
    }
}

function sl(e, t) {
    return e << t | e >>> 32 - t
}
const al = $c("v5", 80, (function(e) {
    const t = [1518500249, 1859775393, 2400959708, 3395469782],
        n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if ("string" == typeof e) {
        const t = unescape(encodeURIComponent(e));
        e = [];
        for (let n = 0; n < t.length; ++n) e.push(t.charCodeAt(n))
    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
    e.push(128);
    const r = e.length / 4 + 2,
        i = Math.ceil(r / 16),
        o = new Array(i);
    for (let s = 0; s < i; ++s) {
        const t = new Uint32Array(16);
        for (let n = 0; n < 16; ++n) t[n] = e[64 * s + 4 * n] << 24 | e[64 * s + 4 * n + 1] << 16 | e[64 * s + 4 * n + 2] << 8 | e[64 * s + 4 * n + 3];
        o[s] = t
    }
    o[i - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), o[i - 1][14] = Math.floor(o[i - 1][14]), o[i - 1][15] = 8 * (e.length - 1) & 4294967295;
    for (let s = 0; s < i; ++s) {
        const e = new Uint32Array(80);
        for (let t = 0; t < 16; ++t) e[t] = o[s][t];
        for (let t = 16; t < 80; ++t) e[t] = sl(e[t - 3] ^ e[t - 8] ^ e[t - 14] ^ e[t - 16], 1);
        let r = n[0],
            i = n[1],
            a = n[2],
            u = n[3],
            c = n[4];
        for (let n = 0; n < 80; ++n) {
            const o = Math.floor(n / 20),
                s = sl(r, 5) + ol(o, i, a, u) + c + t[o] + e[n] >>> 0;
            c = u, u = a, a = sl(i, 30) >>> 0, i = r, r = s
        }
        n[0] = n[0] + r >>> 0, n[1] = n[1] + i >>> 0, n[2] = n[2] + a >>> 0, n[3] = n[3] + u >>> 0, n[4] = n[4] + c >>> 0
    }
    return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
}));
var ul = function(e) {
        return e && e.default || e
    }(Object.freeze({
        __proto__: null,
        v1: function(e, t, n) {
            let r = t && n || 0;
            const i = t || new Array(16);
            let o = (e = e || {}).node || qc,
                s = void 0 !== e.clockseq ? e.clockseq : Gc;
            if (null == o || null == s) {
                const t = e.random || (e.rng || jc)();
                null == o && (o = qc = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]), null == s && (s = Gc = 16383 & (t[6] << 8 | t[7]))
            }
            let a = void 0 !== e.msecs ? e.msecs : Date.now(),
                u = void 0 !== e.nsecs ? e.nsecs : Kc + 1;
            const c = a - Wc + (u - Kc) / 1e4;
            if (c < 0 && void 0 === e.clockseq && (s = s + 1 & 16383), (c < 0 || a > Wc) && void 0 === e.nsecs && (u = 0), u >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            Wc = a, Kc = u, Gc = s, a += 122192928e5;
            const l = (1e4 * (268435455 & a) + u) % 4294967296;
            i[r++] = l >>> 24 & 255, i[r++] = l >>> 16 & 255, i[r++] = l >>> 8 & 255, i[r++] = 255 & l;
            const d = a / 4294967296 * 1e4 & 268435455;
            i[r++] = d >>> 8 & 255, i[r++] = 255 & d, i[r++] = d >>> 24 & 15 | 16, i[r++] = d >>> 16 & 255, i[r++] = s >>> 8 | 128, i[r++] = 255 & s;
            for (let h = 0; h < 6; ++h) i[r + h] = o[h];
            return t || Xc(i)
        },
        v3: rl,
        v4: function(e, t, n) {
            if (il.randomUUID && !t && !e) return il.randomUUID();
            const r = (e = e || {}).random || (e.rng || jc)();
            if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
                n = n || 0;
                for (let e = 0; e < 16; ++e) t[n + e] = r[e];
                return t
            }
            return Xc(r)
        },
        v5: al,
        NIL: "00000000-0000-0000-0000-000000000000",
        version: function(e) {
            if (!Vc(e)) throw TypeError("Invalid UUID");
            return parseInt(e.slice(14, 15), 16)
        },
        validate: Vc,
        stringify: function(e, t = 0) {
            const n = Xc(e, t);
            if (!Vc(n)) throw TypeError("Stringified UUID is invalid");
            return n
        },
        parse: Yc
    })),
    cl = o((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Envelope = void 0;
        var n = function() {
            function e(e, t) {
                this.event = e, this.eid = (0, ul.v4)(), this.ts_ms = Date.now(), this.created_at = Date.now(), this._tracker = new xc.Tracker, this._globalBPO = t
            }
            return Object.defineProperty(e.prototype, "tracker", {
                get: function() {
                    return this._tracker
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "global", {
                get: function() {
                    return this._globalBPO
                },
                enumerable: !1,
                configurable: !0
            }), e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "eid",
                baseName: "eid",
                type: "string"
            }, {
                name: "ts_ms",
                baseName: "ts_ms",
                type: "number"
            }, {
                name: "created_at",
                baseName: "created_at",
                type: "number"
            }, {
                name: "event",
                baseName: "event",
                type: "Event"
            }, {
                name: "global",
                baseName: "global",
                type: "Event"
            }, {
                name: "tracker",
                baseName: "tracker",
                type: "Tracker"
            }], e
        }();
        t.Envelope = n
    })),
    ll = o((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Event = void 0;
        var n = function() {
            function e(e, t, n) {
                this.name = e, this.ts_ms = Date.now(), this.version = t, this.fields = n
            }
            return e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "name",
                baseName: "name",
                type: "string"
            }, {
                name: "ts_ms",
                baseName: "ts_ms",
                type: "number"
            }, {
                name: "version",
                baseName: "version",
                type: "number"
            }, {
                name: "fields",
                baseName: "fields",
                type: "object"
            }], e
        }();
        t.Event = n
    })),
    dl = o((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EventContext = void 0;
        var n = function() {
            function e(e, t, n) {
                this.name = e, this.ts_ms = Date.now(), this.version = t, this.fields = n
            }
            return e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "name",
                baseName: "name",
                type: "string"
            }, {
                name: "ts_ms",
                baseName: "ts_ms",
                type: "number"
            }, {
                name: "version",
                baseName: "version",
                type: "number"
            }, {
                name: "fields",
                baseName: "fields",
                type: "object"
            }], e
        }();
        t.EventContext = n
    })),
    hl = o((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.GlobalContext = void 0;
        t.GlobalContext = function(e, t, n) {
            this.name = e, this.ts_ms = Date.now(), this.version = t, this.fields = n
        }
    })),
    fl = o((function(e, t) {
        var n = i && i.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                i && ("get" in i ? t.__esModule : !i.writable && !i.configurable) || (i = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, i)
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            r = i && i.__exportStar || function(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ObjectSerializer = void 0, r(cl, t), r(ll, t), r(dl, t), r(xc, t), r(hl, t);
        var o = ll,
            s = dl,
            a = xc,
            u = ["string", "boolean", "double", "integer", "long", "float", "number", "any"],
            c = {},
            l = {
                Envelope: cl.Envelope,
                Event: o.Event,
                Tracker: a.Tracker,
                EventContext: s.EventContext
            },
            d = function() {
                function e() {}
                return e.findCorrectType = function(e, t) {
                    if (null == e) return t;
                    if (-1 !== u.indexOf(t.toLowerCase())) return t;
                    if ("Date" === t) return t;
                    if (c[t]) return t;
                    if (!l[t]) return t;
                    var n = l[t].discriminator;
                    if (null == n) return t;
                    if (e[n]) {
                        var r = e[n];
                        return l[r] ? r : t
                    }
                    return t
                }, e.serialize = function(t, n) {
                    if (null == t) return t;
                    if (-1 !== u.indexOf(n.toLowerCase())) return t;
                    if (0 === n.lastIndexOf("Array<", 0)) {
                        var r = n.replace("Array<", "");
                        r = r.substring(0, r.length - 1);
                        var i = [];
                        for (var o in t) {
                            var s = t[o];
                            i.push(e.serialize(s, r))
                        }
                        return i
                    }
                    if ("Date" === n) return t.toISOString();
                    if (c[n]) return t;
                    if (!l[n]) return t;
                    n = this.findCorrectType(t, n);
                    var a = l[n].getAttributeTypeMap(),
                        d = {};
                    for (var o in a) {
                        var h = a[o];
                        d[h.baseName] = e.serialize(t[h.name], h.type)
                    }
                    return d
                }, e.deserialize = function(t, n) {
                    if (n = e.findCorrectType(t, n), null == t) return t;
                    if (-1 !== u.indexOf(n.toLowerCase())) return t;
                    if (0 === n.lastIndexOf("Array<", 0)) {
                        var r = n.replace("Array<", "");
                        r = r.substring(0, r.length - 1);
                        var i = [];
                        for (var o in t) {
                            var s = t[o];
                            i.push(e.deserialize(s, r))
                        }
                        return i
                    }
                    if ("Date" === n) return new Date(t);
                    if (c[n]) return t;
                    if (!l[n]) return t;
                    var a = new l[n],
                        d = l[n].getAttributeTypeMap();
                    for (var o in d) {
                        var h = d[o];
                        a[h.name] = e.deserialize(t[h.baseName], h.type)
                    }
                    return a
                }, e
            }();
        t.ObjectSerializer = d
    })),
    _l = o((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.formatRequestEvent = t.parseJwt = t.getCookie = void 0, t.getCookie = function(e) {
            if ("undefined" == typeof document) return null;
            var t = document.cookie.match(new RegExp("(;\\s)?".concat(e, "=")));
            if (!t || 0 == t.length || void 0 === t.index) return null;
            var n = document.cookie.indexOf(";", t.index + 1),
                r = t.index + t[0].length,
                i = -1 === n ? document.cookie.substr(r) : document.cookie.substring(r, n);
            return decodeURIComponent(i)
        }, t.parseJwt = function(e) {
            var t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
                n = decodeURIComponent(atob(t).split("").map((function(e) {
                    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                })).join(""));
            return JSON.parse(n)
        }, t.formatRequestEvent = function(e) {
            var t = e.split(".");
            if (t.length <= 2) return e;
            var n = t.pop();
            return "".concat(t.join("_"), ".").concat(n)
        }
    })),
    pl = o((function(e, t) {
        var n, r = i && i.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (Vd) {
                            o(Vd)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (Vd) {
                            o(Vd)
                        }
                    }

                    function u(e) {
                        e.done ? i(e.value) : function(e) {
                            return e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))
                        }(e.value).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            o = i && i.__generator || function(e, t) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(a) {
                    return function(u) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < i[1]) {
                                            s.label = i[1], i = a;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(a);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                a = t.call(e, s)
                            } catch (Vd) {
                                a = [6, Vd], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            },
            s = i && i.__values || function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            a = i && i.__read || function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
                } catch (a) {
                    i = {
                        error: a
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return s
            };
        Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BigPictureClient = t.Configuration = t.Service = void 0,
            function(e) {
                e.FRESNEL_PROD = "https://fresnel-events.vimeocdn.com", e.FRESNEL_DEV = "https://fresnel-event-staging.vimeows.com"
            }(n = t.Service || (t.Service = {}));
        var u = function(e, t, n) {
            void 0 === t && (t = null), void 0 === n && (n = null), this.service = e, this.globalBPO = t, this.contexts = n
        };
        t.Configuration = u;
        var c = function() {
            function e() {}
            return Object.defineProperty(e, "isInitalized", {
                get: function() {
                    return Boolean(e.conf.globalBPO)
                },
                enumerable: !1,
                configurable: !0
            }), e.configure = function(t) {
                e.conf = t, e.WAIT_QUEUE.length > 0 && (e.WAIT_QUEUE.map((function(t) {
                    return e.sendEvent(t)
                })), e.WAIT_QUEUE = [])
            }, e.updateObject = function(t, n) {
                return r(this, void 0, void 0, (function() {
                    var r, i, u, c, l, d, h;
                    return o(this, (function(o) {
                        try {
                            for (r = s(Object.entries(t)), i = r.next(); !i.done; i = r.next())
                                if (u = a(i.value, 2), c = u[0], l = u[1], c in n) {
                                    if (l instanceof Object) return n[c] instanceof Object ? (e.updateObject(l, n[c]), [2]) : (n[c] = l, [2]);
                                    n[c] = l
                                }
                        } catch (f) {
                            d = {
                                error: f
                            }
                        } finally {
                            try {
                                i && !i.done && (h = r.return) && h.call(r)
                            } finally {
                                if (d) throw d.error
                            }
                        }
                        return [2]
                    }))
                }))
            }, e.updateContext = function(t) {
                return r(this, void 0, void 0, (function() {
                    return o(this, (function(n) {
                        return "global" == t.context && e.conf.globalBPO && e.updateObject(t.fields, e.conf.globalBPO.fields), [2]
                    }))
                }))
            }, e.sendEvent = function(t, n) {
                return r(this, void 0, void 0, (function() {
                    var r, i, s, a, u;
                    return o(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if (null == t) throw new Error("Required parameter event was null or undefined when calling sendEvent.");
                                return e.isInitalized ? (r = JSON.stringify(fl.ObjectSerializer.serialize([new cl.Envelope(t, this.conf.globalBPO)], "Array<Envelope>")), i = (0, _l.formatRequestEvent)(t.name), s = "".concat(this.conf.service, "/add/").concat(encodeURIComponent(i)), navigator.sendBeacon && !n ? [3, 2] : (a = {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "User-Agent": navigator.userAgent,
                                        Origin: location.origin,
                                        Referer: document.referrer
                                    },
                                    body: r
                                }, n && (a.headers.Authorization = n), [4, fetch(s, a)])) : (e.WAIT_QUEUE.push(t), e.waitAndFlushQueue(), [2]);
                            case 1:
                                return o.sent(), [3, 3];
                            case 2:
                                u = new Blob([r]), navigator.sendBeacon(s, u), o.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, e.sendEventWithContexts = function(t, n) {
                return r(this, void 0, void 0, (function() {
                    var r, i, u, c, l, d, h, f, _, p, m, v, g, y, E;
                    return o(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if (null == t) throw new Error("Required parameter event was null or undefined when calling sendEvent.");
                                if (!e.isInitalized) return e.WAIT_QUEUE.push(t), e.waitAndFlushQueue(), [2];
                                r = new cl.Envelope(t, this.conf.globalBPO), (i = fl.ObjectSerializer.serialize([r], "Array<Envelope>"))[0].contexts = {};
                                try {
                                    for (u = s(Object.entries(n)), c = u.next(); !c.done; c = u.next()) l = a(c.value, 2), d = l[0], h = l[1], f = fl.ObjectSerializer.serialize(h, "EventContext"), i[0].contexts[d] = f
                                } catch (T) {
                                    y = {
                                        error: T
                                    }
                                } finally {
                                    try {
                                        c && !c.done && (E = u.return) && E.call(u)
                                    } finally {
                                        if (y) throw y.error
                                    }
                                }
                                return _ = JSON.stringify(i), p = (0, _l.formatRequestEvent)(t.name), m = "".concat(this.conf.service, "/add/").concat(encodeURIComponent(p)), navigator.sendBeacon ? [3, 2] : (v = {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "User-Agent": navigator.userAgent,
                                        Origin: location.origin,
                                        Referer: document.referrer
                                    },
                                    body: _
                                }, [4, fetch(m, v)]);
                            case 1:
                                return o.sent(), [3, 3];
                            case 2:
                                g = new Blob([_]), navigator.sendBeacon(m, g), o.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, e.waitAndFlushQueue = function() {
                e.flushQueueTimeoutHandler || (e.flushQueueTimeoutHandler = setTimeout((function() {
                    e.WAIT_QUEUE.length > 0 && (e.WAIT_QUEUE = [])
                }), e.FLUSH_QUEUE_TIMEOUT))
            }, e.FLUSH_QUEUE_TIMEOUT = 1e4, e.conf = new u(n.FRESNEL_PROD), e.WAIT_QUEUE = [], e
        }();
        t.BigPictureClient = c
    })),
    ml = o((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })),
    vl = o((function(e, t) {
        var n = i && i.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                i && ("get" in i ? t.__esModule : !i.writable && !i.configurable) || (i = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, i)
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            r = i && i.__exportStar || function(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r(pl, t), r(fl, t), r(ml, t)
    }));
const gl = {
    SETUP_DONE: "SETUP_DONE",
    NOT_SETUP: "NOT_SETUP"
};
let yl = function() {
    function e() {
        this.version = "1.2.36", this.remotePlayer = null, this.remotePlayerController = null, this.CastContextEventType = null, this.RemotePlayerEventType = null, this.CastState = gl, this.SessionState = null, this.PlayerState = null, this.currentLoadRequestId = null, this.currentLoadRequestPromise = null
    }
    var t = e.prototype;
    return t.init = function({
        receiverApplicationId: e = "",
        resumeSavedSession: t = !0,
        language: n = null,
        autoJoinPolicy: r = "TAB_AND_ORIGIN_SCOPED"
    } = {}) {
        if (!this.isGCastApiAvailable) throw new Error("CAF is not available. Call setup() first.");
        if ("string" != typeof e || "" === e.trim()) throw new Error("Parameter 'receiverApplicationId' must be valid.");
        switch (r) {
            case chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED:
            case chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED:
            case chrome.cast.AutoJoinPolicy.PAGE_SCOPED:
                break;
            default:
                r = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED
        }
        return this.CastContextEventType = cast.framework.CastContextEventType, this.RemotePlayerEventType = cast.framework.RemotePlayerEventType, this.CastState = Object.assign(this.CastState, cast.framework.CastState), this.SessionState = cast.framework.SessionState, this.PlayerState = chrome.cast.media.PlayerState, cast.framework.CastContext.getInstance().setOptions({
            receiverApplicationId: e.trim(),
            resumeSavedSession: t,
            language: n,
            autoJoinPolicy: r
        }), this.isInitialized ? this.remotePlayerController : this.initRemotePlayer()
    }, t.initRemotePlayer = function() {
        if (!this.isGCastApiAvailable) throw new ReferenceError("CAF is not available. Call setup() first.");
        return this.remotePlayer = new cast.framework.RemotePlayer, this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer), this.remotePlayerController
    }, t.setup = function({
        loadLibrary: e = !0
    } = {}) {
        return new Promise((t, n) => {
            if (this.isGCastApiAvailable) return this.AutoJoinPolicy = chrome.cast.AutoJoinPolicy, void t(!0);
            window.__onGCastApiAvailable = (e, r) => {
                if (r) {
                    const e = new Error(r);
                    n(e)
                } else if (chrome.cast) this.AutoJoinPolicy = chrome.cast.AutoJoinPolicy, t(e);
                else {
                    const e = new ReferenceError("Cast is not available on this browser.");
                    n(e)
                }
            };
            try {
                if (!1 === e) throw new ReferenceError("Cast is not available. Make sure the library has been loaded.");
                this.loadLibrary() || t(!1)
            } catch (r) {
                const e = new Error(r);
                n(e)
            }
        })
    }, t.loadLibrary = function() {
        if (this.isGCastApiAvailable) return !0;
        if (null !== window.chrome && void 0 !== window.chrome && "Google Inc." === window.navigator.vendor) {
            let e = "//www.gstatic.com/cv/js/sender/v1/cast_sender.js";
            if (!(document.querySelectorAll('script[src^="' + e + '"]').length > 0)) {
                e += "?loadCastFramework=1";
                const t = document.createElement("script");
                return t.src = e, t.async = !0, t.defer = !0, document.head.appendChild(t), !0
            }
        }
        return !1
    }, t.loadMedia = function({
        contentId: e,
        contentType: t,
        currentTime: n = 0,
        duration: r = 0,
        requestCustomData: i = null,
        mediaCustomData: o = null,
        autoRequest: s = !1,
        tracks: a = [],
        ottCastOptions: u
    }) {
        return e ? this.isSessionEstablished ? this.loadMediaOnSession(this.currentSession, {
            contentId: e,
            contentType: t,
            currentTime: n,
            duration: r,
            requestCustomData: i,
            mediaCustomData: o,
            tracks: a,
            ottCastOptions: u
        }) : !0 !== s ? Promise.reject(new TypeError("Option 'autoRequest' must be true when session is not connected.")) : this.requestSession().then(s => this.loadMediaOnSession(s, {
            contentId: e,
            contentType: t,
            currentTime: n,
            duration: r,
            requestCustomData: i,
            mediaCustomData: o,
            tracks: a,
            ottCastOptions: u
        })) : Promise.reject(new TypeError("Option 'contentId' must be valid."))
    }, t.loadMediaOnSession = function(e, {
        contentId: t,
        contentType: n,
        currentTime: r = 0,
        duration: i,
        requestCustomData: o = null,
        mediaCustomData: s = null,
        tracks: a = [],
        ottCastOptions: u
    }) {
        if (e && e instanceof cast.framework.CastSession) {
            const c = e.getSessionState();
            if (c !== this.SessionState.SESSION_STARTING && c !== this.SessionState.SESSION_STARTED && c !== this.SessionState.SESSION_RESUMED) return Promise.reject(new ReferenceError("Session must be established."));
            const l = this.createLoadRequest(t, n, r, i, o, s, a, u);
            return null !== this.currentLoadRequestId && this.currentLoadRequestId === l.requestId || (this.currentLoadRequestId = l.requestId, this.currentLoadingMediaPromise = e.loadMedia(l).finally(() => {
                this.currentLoadRequestId = null, this.currentLoadingMediaPromise = null
            })), this.currentLoadingMediaPromise
        }
        return Promise.reject(new ReferenceError("Session must be cast.framework.CastSession."))
    }, t.requestSession = function() {
        return this.isSessionEstablished ? Promise.resolve(this.currentSession) : this.castContext ? this.castContext.requestSession().then(() => this.currentSession) : Promise.reject(new Error("CastContext is not available. Call setup() first."))
    }, t.sendMessage = function({
        namespace: e,
        data: t = {},
        autoRequest: n = !1
    }) {
        return this.isSessionEstablished ? this.sendMessageOnSession(this.currentSession, {
            namespace: e,
            data: t
        }) : !0 !== n ? Promise.reject(new TypeError("Option 'autoRequest' must be true when session is not connected.")) : this.requestSession().then(n => this.sendMessageOnSession(n, {
            namespace: e,
            data: t
        }))
    }, t.sendMessageOnSession = function(e, {
        namespace: t,
        data: n = {}
    }) {
        if (e || !(e instanceof cast.framework.CastSession)) {
            const r = e.getSessionState();
            return r !== this.SessionState.SESSION_STARTING && r !== this.SessionState.SESSION_STARTED && r !== this.SessionState.SESSION_RESUMED ? Promise.reject(new ReferenceError("Session must be established.")) : e.sendMessage(t, n)
        }
        return Promise.reject(new ReferenceError("Session must be cast.framework.CastSession."))
    }, t.createCastButton = function(e) {
        const t = document.createElement("button", "google-cast-button");
        return e && e.style && (null === e.style["--disconnected-color"] && (e.style["--disconnected-color"] = "#00ADEF"), null === e.style["--connected-color"] && (e.style["--connected-color"] = "#E5E500")), e && Object.keys(e).forEach(n => {
            if ("string" == typeof e[n]) t.setAttribute(n, e[n]);
            else if ("style" === n && "object" == typeof e[n]) {
                let r = "";
                Object.keys(e[n]).forEach(t => {
                    r += t + ":" + e[n][t] + ";"
                }), t.setAttribute(n, r)
            }
        }), t
    }, t.createLoadRequest = function(e, t, n, r, i, o, s, a) {
        const u = a ? new chrome.cast.media.MediaInfo(a.contentId) : new chrome.cast.media.MediaInfo(e.toString(), t);
        u.customData = o, u.duration = r;
        const c = {
            subtitles: chrome.cast.media.TextTrackType.SUBTITLES,
            captions: chrome.cast.media.TextTrackType.CAPTIONS
        };
        u.tracks = s.map(e => {
            const t = new chrome.cast.media.Track(e.id, chrome.cast.media.TrackType.TEXT);
            return t.trackContentId = e.url, t.trackContentType = "text/vtt", t.subtype = c[e.kind], t.name = e.label, t.language = e.lang, t
        });
        const l = new chrome.cast.media.LoadRequest(u);
        return l.customData = a ? a.customData : i, l.currentTime = n || 0, a && (l.credentials = a.credentials, l.credentialsType = a.credentialsType), l
    }, ue(e, [{
        key: "isGCastApiAvailable",
        get: function() {
            return !!("undefined" != typeof cast && cast && cast.framework && cast.framework.VERSION)
        }
    }, {
        key: "castState",
        get: function() {
            return this.castContext ? this.castContext.getCastState() : this.isGCastApiAvailable ? this.CastState.SETUP_DONE : this.CastState.NOT_SETUP
        }
    }, {
        key: "versionGCastApi",
        get: function() {
            return this.isGCastApiAvailable ? cast.framework.VERSION : null
        }
    }, {
        key: "castContext",
        get: function() {
            return this.isGCastApiAvailable ? cast.framework.CastContext.getInstance() : null
        }
    }, {
        key: "currentSession",
        get: function() {
            return this.castContext ? this.castContext.getCurrentSession() : null
        }
    }, {
        key: "currentSessionObj",
        get: function() {
            const e = this.currentSession;
            return e ? e.getSessionObj() : null
        }
    }, {
        key: "isInitialized",
        get: function() {
            return !(!this.isGCastApiAvailable || !this.remotePlayerController)
        }
    }, {
        key: "isSessionEstablished",
        get: function() {
            const e = this.currentSessionObj;
            return !!e && e.status === chrome.cast.SessionStatus.CONNECTED
        }
    }, {
        key: "isCastConnected",
        get: function() {
            return this.castState === this.CastState.CONNECTED
        }
    }]), e
}();
var El, Tl = 0,
    Sl = 0,
    bl = {},
    Al = {};

function Il(e, t, n) {
    return "_root" == t ? n : e !== n ? function(e) {
        return El || (El = e.matches ? e.matches : e.webkitMatchesSelector ? e.webkitMatchesSelector : e.mozMatchesSelector ? e.mozMatchesSelector : e.msMatchesSelector ? e.msMatchesSelector : e.oMatchesSelector ? e.oMatchesSelector : Pl.matchesSelector)
    }(e).call(e, t) ? e : e.parentNode ? (Tl++, Il(e.parentNode, t, n)) : void 0 : void 0
}

function wl(e, t, n, r) {
    bl[e.id] || (bl[e.id] = {}), bl[e.id][t] || (bl[e.id][t] = {}), bl[e.id][t][n] || (bl[e.id][t][n] = []), bl[e.id][t][n].push(r)
}

function Rl(e, t, n, r) {
    if (bl[e.id])
        if (t)
            if (r || n)
                if (r) {
                    if (bl[e.id][t][n])
                        for (var i = 0; i < bl[e.id][t][n].length; i++)
                            if (bl[e.id][t][n][i] === r) {
                                bl[e.id][t][n].splice(i, 1);
                                break
                            }
                } else delete bl[e.id][t][n];
    else bl[e.id][t] = {};
    else
        for (var o in bl[e.id]) bl[e.id].hasOwnProperty(o) && (bl[e.id][o] = {})
}

function kl(e, t, n, r) {
    if (this.element) {
        e instanceof Array || (e = [e]), n || "function" != typeof t || (n = t, t = "_root");
        var i, o = this.id;
        for (i = 0; i < e.length; i++) r ? Rl(this, e[i], t, n) : (bl[o] && bl[o][e[i]] || Pl.addEvent(this, e[i], s(e[i])), wl(this, e[i], t, n));
        return this
    }

    function s(e) {
        return function(t) {
            ! function(e, t, n) {
                if (bl[e][n]) {
                    var r, i, o = t.target || t.srcElement,
                        s = {},
                        a = 0,
                        u = 0;
                    for (r in Tl = 0, bl[e][n]) bl[e][n].hasOwnProperty(r) && (i = Il(o, r, Al[e].element)) && Pl.matchesEvent(n, Al[e].element, i, "_root" == r, t) && (Tl++, bl[e][n][r].match = i, s[Tl] = bl[e][n][r]);
                    for (t.stopPropagation = function() {
                            t.cancelBubble = !0
                        }, a = 0; a <= Tl; a++)
                        if (s[a])
                            for (u = 0; u < s[a].length; u++) {
                                if (!1 === s[a][u].call(s[a].match, t)) return void Pl.cancel(t);
                                if (t.cancelBubble) return
                            }
                }
            }(o, t, e)
        }
    }
}

function Pl(e, t) {
    if (!(this instanceof Pl)) {
        for (var n in Al)
            if (Al[n].element === e) return Al[n];
        return Sl++, Al[Sl] = new Pl(e, Sl), Al[Sl]
    }
    this.element = e, this.id = t
}
Pl.prototype.on = function(e, t, n) {
    return kl.call(this, e, t, n)
}, Pl.prototype.off = function(e, t, n) {
    return kl.call(this, e, t, n, !0)
}, Pl.matchesSelector = function() {}, Pl.cancel = function(e) {
    e.preventDefault(), e.stopPropagation()
}, Pl.addEvent = function(e, t, n) {
    var r = "blur" == t || "focus" == t,
        i = Bt.passiveEvents ? {
            capture: r,
            passive: !1
        } : r;
    e.element.addEventListener(t, n, i)
}, Pl.matchesEvent = function() {
    return !0
};
const Dl = Pl.addEvent,
    Ol = void 0 === window.PointerEvent && void 0 !== window.MSPointerEvent,
    Ll = {
        pointerdown: "MSPointerDown",
        pointerup: "MSPointerUp",
        pointercancel: "MSPointerCancel",
        pointermove: "MSPointerMove",
        pointerenter: "MSPointerEnter",
        pointerleave: "MSPointerLeave",
        pointerover: "MSPointerOver",
        pointerout: "MSPointerOut"
    },
    Cl = "onmspointerenter" in document,
    Ml = "onmspointerleave" in document;

function Nl(e, t) {
    return null == e || e != e ? t : e
}
Pl.addEvent = function(e, t, n) {
    Ol && Ll[t] && (t = Ll[t]), "transitionend" === t && (Dl(e, "webkitTransitionEnd", n), Dl(e, "otransitionend", n)), "mouseenter" === t && (t = "mouseover"), "mouseleave" === t && (t = "mouseout"), "MSPointerEnter" !== t || Cl || (t = "MSPointerOver"), "MSPointerLeave" !== t || Ml || (t = "MSPointerOut"), Dl(e, t, n)
}, Pl.matchesEvent = function(e, t, n, r, i) {
    return !("mouseenter" === e || "mouseleave" === e || !Cl && "MSPointerEnter" === e || !Ml && "MSPointerLeave" === e) || function(e, t, n, r) {
        return !r.relatedTarget || (!n || e === t) && t !== r.relatedTarget && !t.contains(r.relatedTarget)
    }(t, n, r, i)
};
var xl = o((function(e, t) {
        function n(e, t) {
            return e === t
        }

        function r(e, t, n) {
            if (null === t || null === n || t.length !== n.length) return !1;
            for (var r = t.length, i = 0; i < r; i++)
                if (!e(t[i], n[i])) return !1;
            return !0
        }

        function i(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
                i = null,
                o = null;
            return function() {
                return r(t, i, arguments) || (o = e.apply(null, arguments)), i = arguments, o
            }
        }

        function o(e) {
            var t = Array.isArray(e[0]) ? e[0] : e;
            if (!t.every((function(e) {
                    return "function" == typeof e
                }))) {
                var n = t.map((function(e) {
                    return typeof e
                })).join(", ");
                throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]")
            }
            return t
        }

        function s(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return function() {
                for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
                var a = 0,
                    u = r.pop(),
                    c = o(r),
                    l = e.apply(void 0, [function() {
                        return a++, u.apply(null, arguments)
                    }].concat(n)),
                    d = i((function() {
                        for (var e = [], t = c.length, n = 0; n < t; n++) e.push(c[n].apply(null, arguments));
                        return l.apply(null, e)
                    }));
                return d.resultFunc = u, d.recomputations = function() {
                    return a
                }, d.resetRecomputations = function() {
                    return a = 0
                }, d
            }
        }
        t.__esModule = !0, t.defaultMemoize = i, t.createSelectorCreator = s, t.createStructuredSelector = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
            if ("object" != typeof e) throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof e);
            var n = Object.keys(e);
            return t(n.map((function(t) {
                return e[t]
            })), (function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return t.reduce((function(e, t, r) {
                    return e[n[r]] = t, e
                }), {})
            }))
        };
        var a = t.createSelector = s(i)
    })),
    Ul = function() {
        if ("undefined" != typeof Map) return Map;

        function e(e, t) {
            var n = -1;
            return e.some((function(e, r) {
                return e[0] === t && (n = r, !0)
            })), n
        }
        return (function() {
            function t() {
                this.__entries__ = []
            }
            return Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.get = function(t) {
                var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                return r && r[1]
            }, t.prototype.set = function(t, n) {
                var r = e(this.__entries__, t);
                ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
            }, t.prototype.delete = function(t) {
                var n = this.__entries__,
                    r = e(n, t);
                ~r && n.splice(r, 1)
            }, t.prototype.has = function(t) {
                return !!~e(this.__entries__, t)
            }, t.prototype.clear = function() {
                this.__entries__.splice(0)
            }, t.prototype.forEach = function(e, t) {
                void 0 === t && (t = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var i = r[n];
                    e.call(t, i[1], i[0])
                }
            }, t
        }())
    }(),
    Fl = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
    jl = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
    Bl = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(jl) : function(e) {
        return setTimeout((function() {
            return e(Date.now())
        }), 1e3 / 60)
    },
    Vl = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
    Hl = "undefined" != typeof MutationObserver,
    Xl = function() {
        function e() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                var n = !1,
                    r = !1,
                    i = 0;

                function o() {
                    n && (n = !1, e()), r && a()
                }

                function s() {
                    Bl(o)
                }

                function a() {
                    var e = Date.now();
                    if (n) {
                        if (e - i < 2) return;
                        r = !0
                    } else n = !0, r = !1, setTimeout(s, 20);
                    i = e
                }
                return a
            }(this.refresh.bind(this))
        }
        return e.prototype.addObserver = function(e) {
            ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
        }, e.prototype.removeObserver = function(e) {
            var t = this.observers_,
                n = t.indexOf(e);
            ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
        }, e.prototype.refresh = function() {
            this.updateObservers_() && this.refresh()
        }, e.prototype.updateObservers_ = function() {
            var e = this.observers_.filter((function(e) {
                return e.gatherActive(), e.hasActive()
            }));
            return e.forEach((function(e) {
                return e.broadcastActive()
            })), e.length > 0
        }, e.prototype.connect_ = function() {
            Fl && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Hl ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, e.prototype.disconnect_ = function() {
            Fl && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, e.prototype.onTransitionEnd_ = function(e) {
            var t = e.propertyName,
                n = void 0 === t ? "" : t;
            Vl.some((function(e) {
                return !!~n.indexOf(e)
            })) && this.refresh()
        }, e.getInstance = function() {
            return this.instance_ || (this.instance_ = new e), this.instance_
        }, e.instance_ = null, e
    }(),
    ql = function(e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var i = r[n];
            Object.defineProperty(e, i, {
                value: t[i],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return e
    },
    Gl = function(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || jl
    },
    Wl = Ql(0, 0, 0, 0);

function Kl(e) {
    return parseFloat(e) || 0
}

function Yl(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce((function(t, n) {
        return t + Kl(e["border-" + n + "-width"])
    }), 0)
}
var $l = "undefined" != typeof SVGGraphicsElement ? function(e) {
    return e instanceof Gl(e).SVGGraphicsElement
} : function(e) {
    return e instanceof Gl(e).SVGElement && "function" == typeof e.getBBox
};

function zl(e) {
    return Fl ? $l(e) ? function(e) {
        var t = e.getBBox();
        return Ql(0, 0, t.width, t.height)
    }(e) : function(e) {
        var t = e.clientWidth,
            n = e.clientHeight;
        if (!t && !n) return Wl;
        var r = Gl(e).getComputedStyle(e),
            i = function(e) {
                for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                    var i = r[n],
                        o = e["padding-" + i];
                    t[i] = Kl(o)
                }
                return t
            }(r),
            o = i.left + i.right,
            s = i.top + i.bottom,
            a = Kl(r.width),
            u = Kl(r.height);
        if ("border-box" === r.boxSizing && (Math.round(a + o) !== t && (a -= Yl(r, "left", "right") + o), Math.round(u + s) !== n && (u -= Yl(r, "top", "bottom") + s)), ! function(e) {
                return e === Gl(e).document.documentElement
            }(e)) {
            var c = Math.round(a + o) - t,
                l = Math.round(u + s) - n;
            1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(l) && (u -= l)
        }
        return Ql(i.left, i.top, a, u)
    }(e) : Wl
}

function Ql(e, t, n, r) {
    return {
        x: e,
        y: t,
        width: n,
        height: r
    }
}
var Jl = function() {
        function e(e) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ql(0, 0, 0, 0), this.target = e
        }
        return e.prototype.isActive = function() {
            var e = zl(this.target);
            return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        }, e.prototype.broadcastRect = function() {
            var e = this.contentRect_;
            return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
        }, e
    }(),
    Zl = function(e, t) {
        var n = function(e) {
            var t = e.x,
                n = e.y,
                r = e.width,
                i = e.height,
                o = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                s = Object.create(o.prototype);
            return ql(s, {
                x: t,
                y: n,
                width: r,
                height: i,
                top: n,
                right: t + r,
                bottom: i + n,
                left: t
            }), s
        }(t);
        ql(this, {
            target: e,
            contentRect: n
        })
    },
    ed = function() {
        function e(e, t, n) {
            if (this.activeObservations_ = [], this.observations_ = new Ul, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
        }
        return e.prototype.observe = function(e) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof Gl(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) || (t.set(e, new Jl(e)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, e.prototype.unobserve = function(e) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof Gl(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
            }
        }, e.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, e.prototype.gatherActive = function() {
            var e = this;
            this.clearActive(), this.observations_.forEach((function(t) {
                t.isActive() && e.activeObservations_.push(t)
            }))
        }, e.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var e = this.callbackCtx_,
                    t = this.activeObservations_.map((function(e) {
                        return new Zl(e.target, e.broadcastRect())
                    }));
                this.callback_.call(e, t, e), this.clearActive()
            }
        }, e.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }, e.prototype.hasActive = function() {
            return this.activeObservations_.length > 0
        }, e
    }(),
    td = "undefined" != typeof WeakMap ? new WeakMap : new Ul,
    nd = function e(t) {
        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var n = Xl.getInstance(),
            r = new ed(t, n, this);
        td.set(this, r)
    };
["observe", "unobserve", "disconnect"].forEach((function(e) {
    nd.prototype[e] = function() {
        var t;
        return (t = td.get(this))[e].apply(t, arguments)
    }
}));
var rd = void 0 !== jl.ResizeObserver ? jl.ResizeObserver : nd;

function id(e, t, n) {
    this.constructorName = "MessageApiError", this.message = e, this.name = t, this.source = n
}

function od(e) {
    return e
}

function sd(e) {
    if (!e || "" === e) return {};
    if ("object" == typeof e) return e;
    try {
        return JSON.parse(e)
    } catch (t) {
        return {}
    }
}

function ad(e) {}
id.prototype = new Error;
let ud = {
        captureException(e) {},
        captureMessage(e) {},
        captureBreadcrumb() {}
    },
    cd = ud;
var ld = {
    set: function(e) {
        cd = Object.assign({}, ud, e)
    },
    captureException: function(e, t) {
        return cd.captureException(e, t)
    },
    captureMessage: function(e, t) {
        return cd.captureMessage(e, t)
    },
    captureBreadcrumb: function(e, t, n = "backbone", r = "info") {
        return cd.captureBreadcrumb(e, t, n, r)
    }
};

function dd() {
    const e = {},
        t = {},
        n = {
            parseMessage: sd,
            buildMessage: od,
            logError: ad
        };
    let r, i, o = {};
    const s = {
        get methods() {
            return e
        },
        extendMethods(...t) {
            Pe.apply(void 0, [e].concat(t))
        },
        get listeners() {
            return o
        },
        set listeners(e) {
            o = e
        },
        emit(e, ...t) {
            a.apply(void 0, [e].concat(t)) && c(u.apply(void 0, [e].concat(t)))
        },
        filter(e, n) {
            n || "function" != typeof e || (n = e, e = null), e ? function(e, n) {
                t.event = t.event || {}, t.event[e] = t.event[e] || [], t.event[e].push(n)
            }(e, n) : function(e) {
                t.global = t.global || [], t.global.push(e)
            }(n)
        },
        hooks: (...e) => Pe.apply(void 0, [n].concat(e)),
        configureClient(e, t) {
            r = e, i = t
        }
    };

    function a(...e) {
        if (t) {
            let n, r;
            if (t.global && t.global.length)
                for (n = 0; n < t.global.length; n++)
                    if (r = t.global[n], !r.apply(r, e)) return !1;
            let i = e[0];
            if (t.event && t.event[i] && t.event[i].length)
                for (n = 0; n < t.event[i].length; n++)
                    if (r = t.event[i][n], !r.apply(r, e)) return !1
        }
        return !0
    }

    function u(e, ...t) {
        const n = {
            event: e
        };
        return t && void 0 !== t[0] && (n.data = t[0]), n
    }

    function c(e) {
        if (i && function(e = window.parent) {
                return !(!window.postMessage || !e.postMessage)
            }(r)) {
            e = n.buildMessage(e);
            try {
                r.postMessage(e, i)
            } catch (t) {}
        }
    }
    return window.addEventListener("message", (function(t) {
        if (r !== t.source) return;
        let i = n.parseMessage(t.data),
            {
                method: o,
                value: s,
                id: a
            } = i;
        if (!(void 0 === o || "string" != typeof o || o.indexOf("_") > -1)) try {
            let r = function(e, t) {
                if (!e) return null;
                let n = Object.getOwnPropertyDescriptor(t, e);
                if (n && "function" == typeof n.value) return n.value;
                if (n && "function" == typeof n.get) return n.get;
                const r = e.substr(0, 3),
                    i = e.substr(3, 1).toLowerCase() + e.substr(4);
                return n = Object.getOwnPropertyDescriptor(t, i), "get" === r && n && "function" == typeof n.get ? n.get : "set" === r && n && "function" == typeof n.set ? n.set : null
            }(o, e);
            if (!r) throw new id(`“${t}” is not a valid method. Valid methods are: ${function(e){return Object.keys(e).reduce((t,n)=>{if(n.indexOf("_")>-1)return t;const r=Object.getOwnPropertyDescriptor(e,n);return"function"==typeof r.value?(t.push(n),t):("function"==typeof r.get&&t.push("get"+n.charAt(0).toUpperCase()+n.slice(1)),"function"==typeof r.set&&t.push("set"+n.charAt(0).toUpperCase()+n.slice(1)),t)},[]).sort()}(e).join(", ")}.`, "TypeError", o);
            ld.captureBreadcrumb("API message received", i, "api"), Promise.resolve(r.call(t, s, a)).then(e => c({
                method: o,
                value: null == e ? s : e
            })).catch(n.logError)
        } catch (u) {
            n.logError(u)
        }
    }), !1), s
}
var hd = self !== top,
    fd = function() {
        var e = document.createElement("video"),
            t = {
                request: ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"],
                exit: ["exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                enabled: ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"],
                element: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"],
                change: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                error: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"]
            },
            n = {};
        for (var r in t)
            for (var i = 0, o = t[r].length; i < o; i++)
                if (t[r][i] in e || t[r][i] in document || "on" + t[r][i].toLowerCase() in document) {
                    n[r] = t[r][i];
                    break
                }
        return n
    }(),
    _d = {
        ENTER: "enter",
        EXIT: "exit",
        CHANGE: "change",
        ERROR: "error"
    },
    pd = [],
    md = {};

function vd() {
    var e = Array.prototype.slice.apply(arguments),
        t = e.shift();
    md[t].forEach((function(t) {
        "function" == typeof t && t.apply(t, e)
    }))
}

function gd(e) {
    return function(t, n) {
        -1 !== pd.indexOf(t) && e.call(this, t, n)
    }
}

function yd(e) {
    var t = null;
    if ("VIDEO" === e.tagName) t = e;
    else {
        var n = e.getElementsByTagName("video");
        n[0] && (t = n[0])
    }
    return t
}
Object.keys(_d).forEach((function(e) {
    pd.push(_d[e]), md[_d[e]] = []
}));
var Ed = null,
    Td = function() {},
    Sd = [];

function bd(e) {
    var t = yd(e);
    if (t && t.webkitEnterFullscreen) {
        try {
            t.readyState < t.HAVE_METADATA ? (t.addEventListener("loadedmetadata", (function n() {
                t.removeEventListener("loadedmetadata", n, !1);
                try {
                    t.webkitEnterFullscreen()
                } catch (r) {
                    return wd("cannot_enter_fullscreen", e)
                }
            }), !1), t.load()) : t.webkitEnterFullscreen(), Ed = t
        } catch (n) {
            return wd("not_supported", e)
        }
        return !0
    }
    return wd(void 0 === fd.request ? "not_supported" : "not_enabled", e)
}
var Ad = function(e) {
        var t = Sd[Sd.length - 1];
        t && (e !== t.element && e !== Ed || !t.hasEntered) && ("VIDEO" === e.tagName && (Ed = e), 1 === Sd.length && Rd.onenter(Rd.element), t.enter.call(t.element, e || t.element), t.hasEntered = !0, vd(_d.ENTER, Rd.element))
    },
    Id = function() {
        Ed = null;
        var e = Sd.pop();
        e && (e.exit.call(e.element), vd(_d.EXIT, e.element), Rd.element || (Sd.forEach((function(e) {
            e.exit.call(e.element), vd(_d.EXIT, e.element)
        })), Sd = [], Rd.onexit()))
    },
    wd = function(e, t) {
        if (Sd.length > 0) {
            var n = Sd.pop();
            t = t || n.element, n.error.call(t, e), Rd.onerror(t, e), vd(_d.ERROR, t, e)
        }
    },
    Rd = {
        request: function(e, t, n, r) {
            if (e = e || document.body, Sd.push({
                    element: e,
                    enter: t || Td,
                    exit: n || Td,
                    error: r || Td
                }), void 0 === fd.request) return bd(e);
            if (hd && !1 === document[fd.enabled]) return bd(e);
            try {
                e[fd.request]()
            } catch (i) {
                wd("not_enabled", e)
            }
        },
        exit: function() {
            !document[fd.exit] && Rd.element ? Rd.element[fd.exit]() : document[fd.exit]()
        },
        toggle: function(e, t, n, r) {
            Rd.element ? Rd.exit() : Rd.request(e, t, n, r)
        },
        videoEnabled: function(e) {
            if (Rd.enabled) return !0;
            var t = yd(e = e || document.body);
            return !(!t || void 0 === t.webkitSupportsFullscreen) && (t.readyState < t.HAVE_METADATA ? "maybe" : t.webkitSupportsFullscreen)
        },
        on: gd((function(e, t) {
            md[e].push(t)
        })),
        off: gd((function(e, t) {
            var n = md[e].indexOf(t);
            n > -1 && md[e].splice(n, 1)
        })),
        onenter: Td,
        onexit: Td,
        onchange: Td,
        onerror: Td
    };
try {
    Object.defineProperties(Rd, {
        element: {
            enumerable: !0,
            get: function() {
                return Ed && Ed.webkitDisplayingFullscreen ? Ed : document[fd.element] || null
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return document[fd.enabled] || !1
            }
        }
    })
} catch ($_) {
    Rd.element = null, Rd.enabled = !1
}

function kd() {
    return window.parent != window
}
fd.change && document.addEventListener(fd.change, (function(e) {
    if (Rd.onchange(Rd.element), vd(_d.CHANGE, Rd.element), Rd.element) {
        var t = Sd[Sd.length - 2];
        t && t.element === Rd.element ? Id() : Ad(Rd.element)
    } else Id()
}), !1), document.addEventListener("webkitbeginfullscreen", (function(e) {
    var t = !0;
    if (Sd.length > 0)
        for (var n = 0, r = Sd.length; n < r; n++)
            if (yd(Sd[n].element) === e.srcElement) {
                t = !1;
                break
            }
    t && Sd.push({
        element: e.srcElement,
        enter: Td,
        exit: Td,
        error: Td
    }), Rd.onchange(e.srcElement), vd(_d.CHANGE, Rd.srcElement), Ad(e.srcElement)
}), !0), document.addEventListener("webkitendfullscreen", (function(e) {
    Rd.onchange(e.srcElement), vd(_d.CHANGE, e.srcElement), Id(e.srcElement)
}), !0), fd.error && document.addEventListener(fd.error, (function(e) {
    wd("not_allowed")
}), !1);
var Pd = Object.prototype.hasOwnProperty,
    Dd = so((function(e, t) {
        if (Vr(t) || Wr(t)) vr(t, Kr(t), e);
        else
            for (var n in t) Pd.call(t, n) && mr(e, n, t[n])
    })),
    Od = o((function(e) {
        ! function() {
            var t = "undefined" != typeof window && window === this ? this : void 0 !== i && null != i ? i : this,
                n = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
                    e != Array.prototype && e != Object.prototype && (e[t] = n.value)
                };

            function r() {
                r = function() {}, t.Symbol || (t.Symbol = s)
            }
            var o = 0;

            function s(e) {
                return "jscomp_symbol_" + (e || "") + o++
            }

            function a() {
                r();
                var e = t.Symbol.iterator;
                e || (e = t.Symbol.iterator = t.Symbol("iterator")), "function" != typeof Array.prototype[e] && n(Array.prototype, e, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return u(this)
                    }
                }), a = function() {}
            }

            function u(e) {
                var n = 0;
                return function(e) {
                    return a(), (e = {
                        next: e
                    })[t.Symbol.iterator] = function() {
                        return this
                    }, e
                }((function() {
                    return n < e.length ? {
                        done: !1,
                        value: e[n++]
                    } : {
                        done: !0
                    }
                }))
            }

            function c(e) {
                a();
                var t = e[Symbol.iterator];
                return t ? t.call(e) : u(e)
            }

            function l(e) {
                if (!(e instanceof Array)) {
                    e = c(e);
                    for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                    e = n
                }
                return e
            }
            var d = 0,
                h = "img script iframe link audio video source".split(" ");

            function f(e, t) {
                for (var n = (e = c(e)).next(); !n.done; n = e.next())
                    if (n = n.value, t.includes(n.nodeName.toLowerCase()) || f(n.children, t)) return !0;
                return !1
            }

            function _(e, t) {
                if (2 < e.length) return performance.now();
                for (var n = [], r = (t = c(t)).next(); !r.done; r = t.next()) r = r.value, n.push({
                    timestamp: r.start,
                    type: "requestStart"
                }), n.push({
                    timestamp: r.end,
                    type: "requestEnd"
                });
                for (r = (t = c(e)).next(); !r.done; r = t.next()) n.push({
                    timestamp: r.value,
                    type: "requestStart"
                });
                for (n.sort((function(e, t) {
                        return e.timestamp - t.timestamp
                    })), e = e.length, t = n.length - 1; 0 <= t; t--) switch (r = n[t], r.type) {
                    case "requestStart":
                        e--;
                        break;
                    case "requestEnd":
                        if (2 < ++e) return r.timestamp;
                        break;
                    default:
                        throw Error("Internal Error: This should never happen")
                }
                return 0
            }

            function p(e) {
                e = e || {}, this.w = !!e.useMutationObserver, this.u = e.minValue || null, e = window.__tti && window.__tti.e;
                var t = window.__tti && window.__tti.o;
                this.a = e ? e.map((function(e) {
                        return {
                            start: e.startTime,
                            end: e.startTime + e.duration
                        }
                    })) : [], t && t.disconnect(), this.b = [], this.f = new Map, this.j = null, this.v = -1 / 0, this.i = !1, this.h = this.c = this.s = null,
                    function(e, t) {
                        var n = XMLHttpRequest.prototype.send,
                            r = d++;
                        XMLHttpRequest.prototype.send = function(i) {
                            for (var o = [], s = 0; s < arguments.length; ++s) o[s - 0] = arguments[s];
                            var a = this;
                            return e(r), this.addEventListener("readystatechange", (function() {
                                4 === a.readyState && t(r)
                            })), n.apply(this, o)
                        }
                    }(this.m.bind(this), this.l.bind(this)),
                    function(e, t) {
                        var n = fetch;
                        fetch = function(r) {
                            for (var i = [], o = 0; o < arguments.length; ++o) i[o - 0] = arguments[o];
                            return new Promise((function(r, o) {
                                var s = d++;
                                e(s), n.apply(null, [].concat(l(i))).then((function(e) {
                                    t(s), r(e)
                                }), (function(e) {
                                    t(e), o(e)
                                }))
                            }))
                        }
                    }(this.m.bind(this), this.l.bind(this)),
                    function(e) {
                        e.c = new PerformanceObserver((function(t) {
                            for (var n = (t = c(t.getEntries())).next(); !n.done; n = t.next())
                                if ("resource" === (n = n.value).entryType && (e.b.push({
                                        start: n.fetchStart,
                                        end: n.responseEnd
                                    }), v(e, _(e.g, e.b) + 5e3)), "longtask" === n.entryType) {
                                    var r = n.startTime + n.duration;
                                    e.a.push({
                                        start: n.startTime,
                                        end: r
                                    }), v(e, r + 5e3)
                                }
                        })), e.c.observe({
                            entryTypes: ["longtask", "resource"]
                        })
                    }(this), this.w && (this.h = function(e) {
                        var t = new MutationObserver((function(t) {
                            for (var n = (t = c(t)).next(); !n.done; n = t.next())("childList" == (n = n.value).type && f(n.addedNodes, h) || "attributes" == n.type && h.includes(n.target.tagName.toLowerCase())) && e(n)
                        }));
                        return t.observe(document, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0,
                            attributeFilter: ["href", "src"]
                        }), t
                    }(this.B.bind(this)))
            }

            function m(e) {
                e.i = !0;
                var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
                    n = _(e.g, e.b);
                v(e, Math.max(n + 5e3, t))
            }

            function v(e, t) {
                !e.i || e.v > t || (clearTimeout(e.j), e.j = setTimeout((function() {
                    var t = performance.timing.navigationStart,
                        n = _(e.g, e.b);
                    if (t = (window.a && window.a.A ? 1e3 * window.a.A().C - t : 0) || performance.timing.domContentLoadedEventEnd - t, e.u) var r = e.u;
                    else r = performance.timing.domContentLoadedEventEnd ? (r = performance.timing).domContentLoadedEventEnd - r.navigationStart : null;
                    var i = performance.now();
                    null === r && v(e, Math.max(n + 5e3, i + 1e3));
                    var o = e.a;
                    (n = 5e3 > i - n || 5e3 > i - (n = o.length ? o[o.length - 1].end : t) ? null : Math.max(n, r)) && (e.s(n), clearTimeout(e.j), e.i = !1, e.c && e.c.disconnect(), e.h && e.h.disconnect()), v(e, performance.now() + 1e3)
                }), t - performance.now()), e.v = t)
            }
            p.prototype.getFirstConsistentlyInteractive = function() {
                var e = this;
                return new Promise((function(t) {
                    e.s = t, "complete" == document.readyState ? m(e) : window.addEventListener("load", (function() {
                        m(e)
                    }))
                }))
            }, p.prototype.m = function(e) {
                this.f.set(e, performance.now())
            }, p.prototype.l = function(e) {
                this.f.delete(e)
            }, p.prototype.B = function() {
                v(this, performance.now() + 5e3)
            }, t.Object.defineProperties(p.prototype, {
                g: {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return [].concat(l(this.f.values()))
                    }
                }
            });
            var g = {
                getFirstConsistentlyInteractive: function(e) {
                    return e = e || {}, "PerformanceLongTaskTiming" in window ? new p(e).getFirstConsistentlyInteractive() : Promise.resolve(null)
                }
            };
            e.exports ? e.exports = g : window.ttiPolyfill = g
        }()
    }));
const Ld = function(e) {
        return (t, ...n) => (n.forEach(n => {
            for (const r in n) {
                const i = Object.getOwnPropertyDescriptor(n, r);
                Object.defineProperty(t, r, Object.assign(i, e))
            }
        }), t)
    }({
        enumerable: !0,
        configurable: !0,
        writeable: !1
    }),
    Cd = {
        AD_BUFFERING: "ad-buffering",
        AD_COMPLETE: "ad-complete",
        AD_CLICK: "ad-click",
        AD_SKIPPED: "ad-skipped",
        ALL_ADS_COMPLETED: "all-ads-completed",
        AD_ERROR: "ad-error",
        AD_STARTED: "ad-started",
        ADS_MANAGER_LOADED: "ads-manager-loaded",
        CONTENT_PAUSE_REQUESTED: "content-pause-requested",
        CONTENT_RESUME_REQUESTED: "content-resume-requested"
    };

function Md(e, t) {
    const n = dr();
    let r, i, o, s, a;

    function u(e) {
        var o = new r.AdsRenderingSettings;
        o.restoreCustomPlaybackStateOnAdBreakComplete = !0, o.uiElements = [], i = e.getAdsManager(t.videoPlayer, o), n.fire(Cd.ADS_MANAGER_LOADED), i.addEventListener(r.AdErrorEvent.Type.AD_ERROR, v), i.addEventListener(r.AdEvent.Type.CONTENT_PAUSE_REQUESTED, c), i.addEventListener(r.AdEvent.Type.CONTENT_RESUME_REQUESTED, l), i.addEventListener(r.AdEvent.Type.AD_BUFFERING, d), i.addEventListener(r.AdEvent.Type.STARTED, h), i.addEventListener(r.AdEvent.Type.COMPLETE, f), i.addEventListener(r.AdEvent.Type.CLICK, _), i.addEventListener(r.AdEvent.Type.SKIPPED, p), i.addEventListener(r.AdEvent.Type.ALL_ADS_COMPLETED, m)
    }

    function c(e) {
        n.fire(Cd.CONTENT_PAUSE_REQUESTED, e)
    }

    function l(e) {
        n.fire(Cd.CONTENT_RESUME_REQUESTED, e)
    }

    function d(e) {
        n.fire(Cd.AD_BUFFERING, e)
    }

    function h(e) {
        n.fire(Cd.AD_STARTED, e)
    }

    function f(e) {
        n.fire(Cd.AD_COMPLETE, e)
    }

    function _(e) {
        i.pause(), n.fire(Cd.AD_CLICK, e)
    }

    function p(e) {
        n.fire(Cd.AD_SKIPPED, e)
    }

    function m(e) {
        n.fire(Cd.ALL_ADS_COMPLETED, e)
    }

    function v(e) {
        n.fire(Cd.AD_ERROR, e.getError()), i && i.destroy()
    }
    const g = {
        start: (e, t) => (a.initialize(), i.init(e, t, r.ViewMode.NORMAL), i.start()),
        stop: () => i.stop(),
        pause: () => i.pause(),
        play: () => i.resume(),
        skip: () => i.skip(),
        resize: (e, t, n) => n ? i.resize(e, t, r.ViewMode.FULLSCREEN) : i.resize(e, t, r.ViewMode.NORMAL),
        destroy() {
            n.off(), i.destroy(), o.destroy(), a.destroy()
        },
        get volume() {
            return Ne(i.getVolume())
        },
        set volume(e) {
            i.setVolume(Me(e))
        },
        get adsManager() {
            return i
        },
        get adsLoader() {
            return o
        },
        get remainingTime() {
            return i.getRemainingTime()
        },
        setContentComplete() {
            o.contentComplete()
        },
        on(e, t) {
            return n.on(e, t), this
        },
        off(e, t) {
            return n.off(e, t), this
        }
    };
    return function(e, t, n) {
        if (document.getElementById("vp-ima-sdk")) n();
        else {
            var r = document.createElement("script");
            r.id = "vp-ima-sdk", r.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js", r.onreadystatechange = r.onload = () => {
                n && n()
            }, document.getElementsByTagName("body")[0].appendChild(r)
        }
    }(0, 0, (function() {
        r = google.ima;
        let n = Bt.iOS ? t.videoPlayer.videoElement : t.videoPlayer;
        a = new r.AdDisplayContainer(e, n), o = new r.AdsLoader(a), o.addEventListener(r.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, u), o.addEventListener(r.AdErrorEvent.Type.AD_ERROR, v), s = new r.AdsRequest, t.adUrl && (s.adTagUrl = t.adUrl), s.linearAdSlotWidth = t.width.linear, s.linearAdSlotHeight = t.height.linear, s.nonLinearAdSlotWidth = t.width.nonlinear, s.nonLinearAdSlotHeight = t.height.nonlinear, o.requestAds(s)
    })), Ld(this, g)
}

function Nd(e, t, n, r) {
    if (!cn(e)) return e;
    for (var i = -1, o = (t = Vn(t, e)).length, s = o - 1, a = e; null != a && ++i < o;) {
        var u = Hn(t[i]),
            c = n;
        if (i != s) {
            var l = a[u];
            void 0 === (c = r ? r(l, u, a) : void 0) && (c = cn(l) ? l : kr(t[i + 1]) ? [] : {})
        }
        mr(a, u, c), a = a[u]
    }
    return e
}

function xd(e, t) {
    return null != e && t in Object(e)
}

function Ud(e, t) {
    return function(e, t, n) {
        for (var r = -1, i = t.length, o = {}; ++r < i;) {
            var s = t[r],
                a = Xn(e, s);
            n(0, s) && Nd(o, Vn(s, e), a)
        }
        return o
    }(e, t, (function(t, n) {
        return function(e, t) {
            return null != e && function(e, t, n) {
                for (var r = -1, i = (t = Vn(t, e)).length, o = !1; ++r < i;) {
                    var s = Hn(t[r]);
                    if (!(o = null != e && n(e, s))) break;
                    e = e[s]
                }
                return o || ++r != i ? o : !!(i = null == e ? 0 : e.length) && Pr(i) && kr(s, i) && (Wt(e) || Sr(e))
            }(e, t, xd)
        }(e, n)
    }))
}
var Fd = zt ? zt.isConcatSpreadable : void 0;

function jd(e) {
    return Wt(e) || Sr(e) || !!(Fd && e && e[Fd])
}

function Bd(e) {
    return null != e && e.length ? function e(t, n, r, i, o) {
        var s = -1,
            a = t.length;
        for (r || (r = jd), o || (o = []); ++s < a;) {
            var u = t[s];
            n > 0 && r(u) ? n > 1 ? e(u, n - 1, r, i, o) : si(o, u) : i || (o[o.length] = u)
        }
        return o
    }(e, 1) : []
}
var Vd, Hd, Xd, qd, Gd, Wd, Kd, Yd, $d, zd, Qd, Jd = function(e) {
        return Ki(Xi(e, void 0, Bd), e + "")
    }((function(e, t) {
        return null == e ? {} : Ud(e, t)
    })),
    Zd = function(e, t) {
        return {
            name: e,
            value: void 0 === t ? -1 : t,
            delta: 0,
            entries: [],
            id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        }
    },
    eh = function(e, t) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
                var n = new PerformanceObserver((function(e) {
                    return e.getEntries().map(t)
                }));
                return n.observe({
                    type: e,
                    buffered: !0
                }), n
            }
        } catch (e) {}
    },
    th = function(e, t) {
        var n = function n(r) {
            "pagehide" !== r.type && "hidden" !== document.visibilityState || (e(r), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
        };
        addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
    },
    nh = function(e) {
        addEventListener("pageshow", (function(t) {
            t.persisted && e(t)
        }), !0)
    },
    rh = function(e, t, n) {
        var r;
        return function(i) {
            t.value >= 0 && (i || n) && (t.delta = t.value - (r || 0), (t.delta || void 0 === r) && (r = t.value, e(t)))
        }
    },
    ih = -1,
    oh = function() {
        return "hidden" === document.visibilityState ? 0 : 1 / 0
    },
    sh = function() {
        th((function(e) {
            var t = e.timeStamp;
            ih = t
        }), !0)
    },
    ah = function() {
        return ih < 0 && (ih = oh(), sh(), nh((function() {
            setTimeout((function() {
                ih = oh(), sh()
            }), 0)
        }))), {
            get firstHiddenTime() {
                return ih
            }
        }
    },
    uh = function(e, t) {
        var n, r = ah(),
            i = Zd("FCP"),
            o = function(e) {
                "first-contentful-paint" === e.name && (a && a.disconnect(), e.startTime < r.firstHiddenTime && (i.value = e.startTime, i.entries.push(e), n(!0)))
            },
            s = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0],
            a = s ? null : eh("paint", o);
        (s || a) && (n = rh(e, i, t), s && o(s), nh((function(r) {
            i = Zd("FCP"), n = rh(e, i, t), requestAnimationFrame((function() {
                requestAnimationFrame((function() {
                    i.value = performance.now() - r.timeStamp, n(!0)
                }))
            }))
        })))
    },
    ch = !1,
    lh = -1,
    dh = function(e, t) {
        ch || (uh((function(e) {
            lh = e.value
        })), ch = !0);
        var n, r = function(t) {
                lh > -1 && e(t)
            },
            i = Zd("CLS", 0),
            o = 0,
            s = [],
            a = function(e) {
                if (!e.hadRecentInput) {
                    var t = s[0],
                        r = s[s.length - 1];
                    o && e.startTime - r.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (o += e.value, s.push(e)) : (o = e.value, s = [e]), o > i.value && (i.value = o, i.entries = s, n())
                }
            },
            u = eh("layout-shift", a);
        u && (n = rh(r, i, t), th((function() {
            u.takeRecords().map(a), n(!0)
        })), nh((function() {
            o = 0, lh = -1, i = Zd("CLS", 0), n = rh(r, i, t)
        })))
    },
    hh = {
        passive: !0,
        capture: !0
    },
    fh = new Date,
    _h = function(e, t) {
        Vd || (Vd = t, Hd = e, Xd = new Date, vh(removeEventListener), ph())
    },
    ph = function() {
        if (Hd >= 0 && Hd < Xd - fh) {
            var e = {
                entryType: "first-input",
                name: Vd.type,
                target: Vd.target,
                cancelable: Vd.cancelable,
                startTime: Vd.timeStamp,
                processingStart: Vd.timeStamp + Hd
            };
            qd.forEach((function(t) {
                t(e)
            })), qd = []
        }
    },
    mh = function(e) {
        if (e.cancelable) {
            var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
            "pointerdown" == e.type ? function(e, t) {
                var n = function() {
                        _h(e, t), i()
                    },
                    r = function() {
                        i()
                    },
                    i = function() {
                        removeEventListener("pointerup", n, hh), removeEventListener("pointercancel", r, hh)
                    };
                addEventListener("pointerup", n, hh), addEventListener("pointercancel", r, hh)
            }(t, e) : _h(t, e)
        }
    },
    vh = function(e) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
            return e(t, mh, hh)
        }))
    },
    gh = function(e, t) {
        var n, r = ah(),
            i = Zd("FID"),
            o = function(e) {
                e.startTime < r.firstHiddenTime && (i.value = e.processingStart - e.startTime, i.entries.push(e), n(!0))
            },
            s = eh("first-input", o);
        n = rh(e, i, t), s && th((function() {
            s.takeRecords().map(o), s.disconnect()
        }), !0), s && nh((function() {
            var r;
            i = Zd("FID"), n = rh(e, i, t), qd = [], Hd = -1, Vd = null, vh(addEventListener), r = o, qd.push(r), ph()
        }))
    },
    yh = {},
    Eh = function(e, t) {
        var n, r = ah(),
            i = Zd("LCP"),
            o = function(e) {
                var t = e.startTime;
                t < r.firstHiddenTime && (i.value = t, i.entries.push(e), n())
            },
            s = eh("largest-contentful-paint", o);
        if (s) {
            n = rh(e, i, t);
            var a = function() {
                yh[i.id] || (s.takeRecords().map(o), s.disconnect(), yh[i.id] = !0, n(!0))
            };
            ["keydown", "click"].forEach((function(e) {
                addEventListener(e, a, {
                    once: !0,
                    capture: !0
                })
            })), th(a, !0), nh((function(r) {
                i = Zd("LCP"), n = rh(e, i, t), requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        i.value = performance.now() - r.timeStamp, yh[i.id] = !0, n(!0)
                    }))
                }))
            }))
        }
    },
    Th = {},
    Sh = [],
    bh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function Ah(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function Ih(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}

function wh(e, t, n) {
    var r, i, o, s = {};
    for (o in t) "key" == o ? r = t[o] : "ref" == o ? i = t[o] : s[o] = t[o];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? Gd.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
        for (o in e.defaultProps) void 0 === s[o] && (s[o] = e.defaultProps[o]);
    return Rh(e, s, r, i, null)
}

function Rh(e, t, n, r, i) {
    var o = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == i ? ++Kd : i
    };
    return null == i && null != Wd.vnode && Wd.vnode(o), o
}

function kh(e) {
    return e.children
}

function Ph(e, t) {
    this.props = e, this.context = t
}

function Dh(e, t) {
    if (null == t) return e.__ ? Dh(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? Dh(e) : null
}

function Oh(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break
            }
        return Oh(e)
    }
}

function Lh(e) {
    (!e.__d && (e.__d = !0) && Yd.push(e) && !Ch.__r++ || zd !== Wd.debounceRendering) && ((zd = Wd.debounceRendering) || $d)(Ch)
}

function Ch() {
    for (var e; Ch.__r = Yd.length;) e = Yd.sort((function(e, t) {
        return e.__v.__b - t.__v.__b
    })), Yd = [], e.some((function(e) {
        var t, n, r, i, o, s;
        e.__d && (o = (i = (t = e).__v).__e, (s = t.__P) && (n = [], (r = Ah({}, i)).__v = i.__v + 1, Hh(s, i, r, t.__n, void 0 !== s.ownerSVGElement, null != i.__h ? [o] : null, n, null == o ? Dh(i) : o, i.__h), Xh(n, i), i.__e != o && Oh(i)))
    }))
}

function Mh(e, t, n, r, i, o, s, a, u, c) {
    var l, d, h, f, _, p, m, v = r && r.__k || Sh,
        g = v.length;
    for (n.__k = [], l = 0; l < t.length; l++)
        if (null != (f = n.__k[l] = null == (f = t[l]) || "boolean" == typeof f ? null : "string" == typeof f || "number" == typeof f || "bigint" == typeof f ? Rh(null, f, null, null, f) : Array.isArray(f) ? Rh(kh, {
                children: f
            }, null, null, null) : f.__b > 0 ? Rh(f.type, f.props, f.key, null, f.__v) : f)) {
            if (f.__ = n, f.__b = n.__b + 1, null === (h = v[l]) || h && f.key == h.key && f.type === h.type) v[l] = void 0;
            else
                for (d = 0; d < g; d++) {
                    if ((h = v[d]) && f.key == h.key && f.type === h.type) {
                        v[d] = void 0;
                        break
                    }
                    h = null
                }
            Hh(e, f, h = h || Th, i, o, s, a, u, c), _ = f.__e, (d = f.ref) && h.ref != d && (m || (m = []), h.ref && m.push(h.ref, null, f), m.push(d, f.__c || _, f)), null != _ ? (null == p && (p = _), "function" == typeof f.type && f.__k === h.__k ? f.__d = u = Nh(f, u, e) : u = Uh(e, f, h, v, _, u), "function" == typeof n.type && (n.__d = u)) : u && h.__e == u && u.parentNode != e && (u = Dh(h))
        }
    for (n.__e = p, l = g; l--;) null != v[l] && ("function" == typeof n.type && null != v[l].__e && v[l].__e == n.__d && (n.__d = Dh(r, l + 1)), Wh(v[l], v[l]));
    if (m)
        for (l = 0; l < m.length; l++) Gh(m[l], m[++l], m[++l])
}

function Nh(e, t, n) {
    for (var r, i = e.__k, o = 0; i && o < i.length; o++)(r = i[o]) && (r.__ = e, t = "function" == typeof r.type ? Nh(r, t, n) : Uh(n, r, r, i, r.__e, t));
    return t
}

function xh(e, t) {
    return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
        xh(e, t)
    })) : t.push(e)), t
}

function Uh(e, t, n, r, i, o) {
    var s, a, u;
    if (void 0 !== t.__d) s = t.__d, t.__d = void 0;
    else if (null == n || i != o || null == i.parentNode) e: if (null == o || o.parentNode !== e) e.appendChild(i), s = null;
        else {
            for (a = o, u = 0;
                (a = a.nextSibling) && u < r.length; u += 2)
                if (a == i) break e;
            e.insertBefore(i, o), s = o
        }
    return void 0 !== s ? s : i.nextSibling
}

function Fh(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || bh.test(t) ? n : n + "px"
}

function jh(e, t, n, r, i) {
    var o;
    e: if ("style" === t)
        if ("string" == typeof n) e.style.cssText = n;
        else {
            if ("string" == typeof r && (e.style.cssText = r = ""), r)
                for (t in r) n && t in n || Fh(e.style, t, "");
            if (n)
                for (t in n) r && n[t] === r[t] || Fh(e.style, t, n[t])
        }
    else if ("o" === t[0] && "n" === t[1]) o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Vh : Bh, o) : e.removeEventListener(t, o ? Vh : Bh, o);
    else if ("dangerouslySetInnerHTML" !== t) {
        if (i) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
            e[t] = null == n ? "" : n;
            break e
        } catch (e) {}
        "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
    }
}

function Bh(e) {
    this.l[e.type + !1](Wd.event ? Wd.event(e) : e)
}

function Vh(e) {
    this.l[e.type + !0](Wd.event ? Wd.event(e) : e)
}

function Hh(e, t, n, r, i, o, s, a, u) {
    var c, l, d, h, f, _, p, m, v, g, y, E = t.type;
    if (void 0 !== t.constructor) return null;
    null != n.__h && (u = n.__h, a = t.__e = n.__e, t.__h = null, o = [a]), (c = Wd.__b) && c(t);
    try {
        e: if ("function" == typeof E) {
            if (m = t.props, v = (c = E.contextType) && r[c.__c], g = c ? v ? v.props.value : c.__ : r, n.__c ? p = (l = t.__c = n.__c).__ = l.__E : ("prototype" in E && E.prototype.render ? t.__c = l = new E(m, g) : (t.__c = l = new Ph(m, g), l.constructor = E, l.render = Kh), v && v.sub(l), l.props = m, l.state || (l.state = {}), l.context = g, l.__n = r, d = l.__d = !0, l.__h = []), null == l.__s && (l.__s = l.state), null != E.getDerivedStateFromProps && (l.__s == l.state && (l.__s = Ah({}, l.__s)), Ah(l.__s, E.getDerivedStateFromProps(m, l.__s))), h = l.props, f = l.state, d) null == E.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(), null != l.componentDidMount && l.__h.push(l.componentDidMount);
            else {
                if (null == E.getDerivedStateFromProps && m !== h && null != l.componentWillReceiveProps && l.componentWillReceiveProps(m, g), !l.__e && null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(m, l.__s, g) || t.__v === n.__v) {
                    l.props = m, l.state = l.__s, t.__v !== n.__v && (l.__d = !1), l.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
                        e && (e.__ = t)
                    })), l.__h.length && s.push(l);
                    break e
                }
                null != l.componentWillUpdate && l.componentWillUpdate(m, l.__s, g), null != l.componentDidUpdate && l.__h.push((function() {
                    l.componentDidUpdate(h, f, _)
                }))
            }
            l.context = g, l.props = m, l.state = l.__s, (c = Wd.__r) && c(t), l.__d = !1, l.__v = t, l.__P = e, c = l.render(l.props, l.state, l.context), l.state = l.__s, null != l.getChildContext && (r = Ah(Ah({}, r), l.getChildContext())), d || null == l.getSnapshotBeforeUpdate || (_ = l.getSnapshotBeforeUpdate(h, f)), y = null != c && c.type === kh && null == c.key ? c.props.children : c, Mh(e, Array.isArray(y) ? y : [y], t, n, r, i, o, s, a, u), l.base = t.__e, t.__h = null, l.__h.length && s.push(l), p && (l.__E = l.__ = null), l.__e = !1
        } else null == o && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = qh(n.__e, t, n, r, i, o, s, u);
        (c = Wd.diffed) && c(t)
    }
    catch (e) {
        t.__v = null, (u || null != o) && (t.__e = a, t.__h = !!u, o[o.indexOf(a)] = null), Wd.__e(e, t, n)
    }
}

function Xh(e, t) {
    Wd.__c && Wd.__c(t, e), e.some((function(t) {
        try {
            e = t.__h, t.__h = [], e.some((function(e) {
                e.call(t)
            }))
        } catch (e) {
            Wd.__e(e, t.__v)
        }
    }))
}

function qh(e, t, n, r, i, o, s, a) {
    var u, c, l, d = n.props,
        h = t.props,
        f = t.type,
        _ = 0;
    if ("svg" === f && (i = !0), null != o)
        for (; _ < o.length; _++)
            if ((u = o[_]) && "setAttribute" in u == !!f && (f ? u.localName === f : 3 === u.nodeType)) {
                e = u, o[_] = null;
                break
            }
    if (null == e) {
        if (null === f) return document.createTextNode(h);
        e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, h.is && h), o = null, a = !1
    }
    if (null === f) d === h || a && e.data === h || (e.data = h);
    else {
        if (o = o && Gd.call(e.childNodes), c = (d = n.props || Th).dangerouslySetInnerHTML, l = h.dangerouslySetInnerHTML, !a) {
            if (null != o)
                for (d = {}, _ = 0; _ < e.attributes.length; _++) d[e.attributes[_].name] = e.attributes[_].value;
            (l || c) && (l && (c && l.__html == c.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""))
        }
        if (function(e, t, n, r, i) {
                var o;
                for (o in n) "children" === o || "key" === o || o in t || jh(e, o, null, n[o], r);
                for (o in t) i && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || n[o] === t[o] || jh(e, o, t[o], n[o], r)
            }(e, h, d, i, a), l) t.__k = [];
        else if (_ = t.props.children, Mh(e, Array.isArray(_) ? _ : [_], t, n, r, i && "foreignObject" !== f, o, s, o ? o[0] : n.__k && Dh(n, 0), a), null != o)
            for (_ = o.length; _--;) null != o[_] && Ih(o[_]);
        a || ("value" in h && void 0 !== (_ = h.value) && (_ !== e.value || "progress" === f && !_ || "option" === f && _ !== d.value) && jh(e, "value", _, d.value, !1), "checked" in h && void 0 !== (_ = h.checked) && _ !== e.checked && jh(e, "checked", _, d.checked, !1))
    }
    return e
}

function Gh(e, t, n) {
    try {
        "function" == typeof e ? e(t) : e.current = t
    } catch (e) {
        Wd.__e(e, n)
    }
}

function Wh(e, t, n) {
    var r, i;
    if (Wd.unmount && Wd.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Gh(r, null, t)), null != (r = e.__c)) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount()
        } catch (e) {
            Wd.__e(e, t)
        }
        r.base = r.__P = null
    }
    if (r = e.__k)
        for (i = 0; i < r.length; i++) r[i] && Wh(r[i], t, "function" != typeof e.type);
    n || null == e.__e || Ih(e.__e), e.__e = e.__d = void 0
}

function Kh(e, t, n) {
    return this.constructor(e, n)
}

function Yh(e, t, n) {
    var r, i, o;
    Wd.__ && Wd.__(e, t), i = (r = "function" == typeof n) ? null : n && n.__k || t.__k, o = [], Hh(t, e = (!r && n || t).__k = wh(kh, null, [e]), i || Th, Th, void 0 !== t.ownerSVGElement, !r && n ? [n] : i ? null : t.firstChild ? Gd.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r), Xh(o, e)
}

function $h(e, t) {
    Yh(e, t, $h)
}

function zh(e, t, n) {
    var r, i, o, s = Ah({}, e.props);
    for (o in t) "key" == o ? r = t[o] : "ref" == o ? i = t[o] : s[o] = t[o];
    return arguments.length > 2 && (s.children = arguments.length > 3 ? Gd.call(arguments, 2) : n), Rh(e.type, s, r || e.key, i || e.ref, null)
}

function Qh(e, t) {
    var n = {
        __c: t = "__cC" + Qd++,
        __: e,
        Consumer: function(e, t) {
            return e.children(t)
        },
        Provider: function(e) {
            var n, r;
            return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
                return r
            }, this.shouldComponentUpdate = function(e) {
                this.props.value !== e.value && n.some(Lh)
            }, this.sub = function(e) {
                n.push(e);
                var t = e.componentWillUnmount;
                e.componentWillUnmount = function() {
                    n.splice(n.indexOf(e), 1), t && t.call(e)
                }
            }), e.children
        }
    };
    return n.Provider.__ = n.Consumer.contextType = n
}
Gd = Sh.slice, Wd = {
    __e: function(e, t) {
        for (var n, r, i; t = t.__;)
            if ((n = t.__c) && !n.__) try {
                if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), i = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), i = n.__d), i) return n.__E = n
            } catch (t) {
                e = t
            }
        throw e
    }
}, Kd = 0, Ph.prototype.setState = function(e, t) {
    var n;
    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = Ah({}, this.state), "function" == typeof e && (e = e(Ah({}, n), this.props)), e && Ah(n, e), null != e && this.__v && (t && this.__h.push(t), Lh(this))
}, Ph.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), Lh(this))
}, Ph.prototype.render = kh, Yd = [], $d = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ch.__r = 0, Qd = 0;
var Jh, Zh, ef, tf = 0,
    nf = [],
    rf = Wd.__b,
    of = Wd.__r,
    sf = Wd.diffed,
    af = Wd.__c,
    uf = Wd.unmount;

function cf(e, t) {
    Wd.__h && Wd.__h(Zh, e, tf || t), tf = 0;
    var n = Zh.__H || (Zh.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({}), n.__[e]
}

function lf(e) {
    return tf = 1, df(If, e)
}

function df(e, t, n) {
    var r = cf(Jh++, 2);
    return r.t = e, r.__c || (r.__ = [n ? n(t) : If(void 0, t), function(e) {
        var t = r.t(r.__[0], e);
        r.__[0] !== t && (r.__ = [t, r.__[1]], r.__c.setState({}))
    }], r.__c = Zh), r.__
}

function hf(e, t) {
    var n = cf(Jh++, 3);
    !Wd.__s && Af(n.__H, t) && (n.__ = e, n.__H = t, Zh.__H.__h.push(n))
}

function ff(e, t) {
    var n = cf(Jh++, 4);
    !Wd.__s && Af(n.__H, t) && (n.__ = e, n.__H = t, Zh.__h.push(n))
}

function _f(e) {
    return tf = 5, pf((function() {
        return {
            current: e
        }
    }), [])
}

function pf(e, t) {
    var n = cf(Jh++, 7);
    return Af(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__
}

function mf(e, t) {
    return tf = 8, pf((function() {
        return e
    }), t)
}

function vf(e) {
    var t = Zh.context[e.__c],
        n = cf(Jh++, 9);
    return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(Zh)), t.props.value) : e.__
}

function gf(e, t) {
    Wd.useDebugValue && Wd.useDebugValue(t ? t(e) : e)
}

function yf(e) {
    var t = cf(Jh++, 10),
        n = lf();
    return t.__ = e, Zh.componentDidCatch || (Zh.componentDidCatch = function(e) {
        t.__ && t.__(e), n[1](e)
    }), [n[0], function() {
        n[1](void 0)
    }]
}

function Ef() {
    for (var e; e = nf.shift();)
        if (e.__P) try {
            e.__H.__h.forEach(Sf), e.__H.__h.forEach(bf), e.__H.__h = []
        } catch (nh) {
            e.__H.__h = [], Wd.__e(nh, e.__v)
        }
}
Wd.__b = function(e) {
    Zh = null, rf && rf(e)
}, Wd.__r = function(e) { of && of (e), Jh = 0;
    var t = (Zh = e.__c).__H;
    t && (t.__h.forEach(Sf), t.__h.forEach(bf), t.__h = [])
}, Wd.diffed = function(e) {
    sf && sf(e);
    var t = e.__c;
    t && t.__H && t.__H.__h.length && (1 !== nf.push(t) && ef === Wd.requestAnimationFrame || ((ef = Wd.requestAnimationFrame) || function(e) {
        var t, n = function() {
                clearTimeout(r), Tf && cancelAnimationFrame(t), setTimeout(e)
            },
            r = setTimeout(n, 100);
        Tf && (t = requestAnimationFrame(n))
    })(Ef)), Zh = null
}, Wd.__c = function(e, t) {
    t.some((function(e) {
        try {
            e.__h.forEach(Sf), e.__h = e.__h.filter((function(e) {
                return !e.__ || bf(e)
            }))
        } catch (Zd) {
            t.some((function(e) {
                e.__h && (e.__h = [])
            })), t = [], Wd.__e(Zd, e.__v)
        }
    })), af && af(e, t)
}, Wd.unmount = function(e) {
    uf && uf(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach((function(e) {
        try {
            Sf(e)
        } catch (e) {
            t = e
        }
    })), t && Wd.__e(t, n.__v))
};
var Tf = "function" == typeof requestAnimationFrame;

function Sf(e) {
    var t = Zh,
        n = e.__c;
    "function" == typeof n && (e.__c = void 0, n()), Zh = t
}

function bf(e) {
    var t = Zh;
    e.__c = e.__(), Zh = t
}

function Af(e, t) {
    return !e || e.length !== t.length || t.some((function(t, n) {
        return t !== e[n]
    }))
}

function If(e, t) {
    return "function" == typeof t ? t(e) : t
}

function wf(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function Rf(e, t) {
    for (var n in e)
        if ("__source" !== n && !(n in t)) return !0;
    for (var r in t)
        if ("__source" !== r && e[r] !== t[r]) return !0;
    return !1
}

function kf(e) {
    this.props = e
}(kf.prototype = new Ph).isPureReactComponent = !0, kf.prototype.shouldComponentUpdate = function(e, t) {
    return Rf(this.props, e) || Rf(this.state, t)
};
var Pf = Wd.__b;
Wd.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Pf && Pf(e)
};
var Df = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function Of(e) {
    function t(t, n) {
        var r = wf({}, t);
        return delete r.ref, e(r, (n = t.ref || n) && ("object" != typeof n || "current" in n) ? n : null)
    }
    return t.$$typeof = Df, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var Lf = function(e, t) {
        return null == e ? null : xh(xh(e).map(t))
    },
    Cf = {
        map: Lf,
        forEach: Lf,
        count: function(e) {
            return e ? xh(e).length : 0
        },
        only: function(e) {
            var t = xh(e);
            if (1 !== t.length) throw "Children.only";
            return t[0]
        },
        toArray: xh
    },
    Mf = Wd.__e;
Wd.__e = function(e, t, n) {
    if (e.then)
        for (var r, i = t; i = i.__;)
            if ((r = i.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
    Mf(e, t, n)
};
var Nf = Wd.unmount;

function xf() {
    this.__u = 0, this.t = null, this.__b = null
}

function Uf(e) {
    var t = e.__.__c;
    return t && t.__e && t.__e(e)
}

function Ff() {
    this.u = null, this.o = null
}
Wd.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Nf && Nf(e)
}, (xf.prototype = new Ph).__c = function(e, t) {
    var n = t.__c,
        r = this;
    null == r.t && (r.t = []), r.t.push(n);
    var i = Uf(r.__v),
        o = !1,
        s = function() {
            o || (o = !0, n.__R = null, i ? i(a) : a())
        };
    n.__R = s;
    var a = function() {
            if (!--r.__u) {
                if (r.state.__e) {
                    var e = r.state.__e;
                    r.__v.__k[0] = function e(t, n, r) {
                        return t && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
                            return e(t, n, r)
                        })), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t
                    }(e, e.__c.__P, e.__c.__O)
                }
                var t;
                for (r.setState({
                        __e: r.__b = null
                    }); t = r.t.pop();) t.forceUpdate()
            }
        },
        u = !0 === t.__h;
    r.__u++ || u || r.setState({
        __e: r.__b = r.__v.__k[0]
    }), e.then(s, s)
}, xf.prototype.componentWillUnmount = function() {
    this.t = []
}, xf.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var n = document.createElement("div"),
                r = this.__v.__k[0].__c;
            this.__v.__k[0] = function e(t, n, r) {
                return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(e) {
                    "function" == typeof e.__c && e.__c()
                })), t.__c.__H = null), null != (t = wf({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
                    return e(t, n, r)
                }))), t
            }(this.__b, n, r.__O = r.__P)
        }
        this.__b = null
    }
    var i = t.__e && wh(kh, null, e.fallback);
    return i && (i.__h = null), [wh(kh, null, t.__e ? null : e.children), i]
};
var jf = function(e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
        for (n = e.u; n;) {
            for (; n.length > 3;) n.pop()();
            if (n[1] < n[0]) break;
            e.u = n = n[2]
        }
};

function Bf(e) {
    return this.getChildContext = function() {
        return e.context
    }, e.children
}

function Vf(e) {
    var t = this,
        n = e.i;
    t.componentWillUnmount = function() {
        Yh(null, t.l), t.l = null, t.i = null
    }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        appendChild: function(e) {
            this.childNodes.push(e), t.i.appendChild(e)
        },
        insertBefore: function(e, n) {
            this.childNodes.push(e), t.i.appendChild(e)
        },
        removeChild: function(e) {
            this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
        }
    }), Yh(wh(Bf, {
        context: t.context
    }, e.__v), t.l)) : t.l && t.componentWillUnmount()
}

function Hf(e, t) {
    return wh(Vf, {
        __v: e,
        i: t
    })
}(Ff.prototype = new Ph).__e = function(e) {
    var t = this,
        n = Uf(t.__v),
        r = t.o.get(e);
    return r[0]++,
        function(i) {
            var o = function() {
                t.props.revealOrder ? (r.push(i), jf(t, e, r)) : i()
            };
            n ? n(o) : o()
        }
}, Ff.prototype.render = function(e) {
    this.u = null, this.o = new Map;
    var t = xh(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
    for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children
}, Ff.prototype.componentDidUpdate = Ff.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach((function(t, n) {
        jf(e, n, t)
    }))
};
var Xf = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    qf = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Gf = "undefined" != typeof document,
    Wf = function(e) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e)
    };
Ph.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
    Object.defineProperty(Ph.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
}));
var Kf = Wd.event;

function Yf() {}

function $f() {
    return this.cancelBubble
}

function zf() {
    return this.defaultPrevented
}
Wd.event = function(e) {
    return Kf && (e = Kf(e)), e.persist = Yf, e.isPropagationStopped = $f, e.isDefaultPrevented = zf, e.nativeEvent = e
};
var Qf, Jf = {
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    Zf = Wd.vnode;
Wd.vnode = function(e) {
    var t = e.type,
        n = e.props,
        r = n;
    if ("string" == typeof t) {
        var i = -1 === t.indexOf("-");
        for (var o in r = {}, n) {
            var s = n[o];
            Gf && "children" === o && "noscript" === t || "value" === o && "defaultValue" in n && null == s || ("defaultValue" === o && "value" in n && null == n.value ? o = "value" : "download" === o && !0 === s ? s = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !Wf(n.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && qf.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === s && (s = void 0), r[o] = s)
        }
        "select" == t && r.multiple && Array.isArray(r.value) && (r.value = xh(n.children).forEach((function(e) {
            e.props.selected = -1 != r.value.indexOf(e.props.value)
        }))), "select" == t && null != r.defaultValue && (r.value = xh(n.children).forEach((function(e) {
            e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
        }))), e.props = r, n.class != n.className && (Jf.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", Jf))
    }
    e.$$typeof = Xf, Zf && Zf(e)
};
var e_ = Wd.__r;

function t_(e) {
    return !!e && e.$$typeof === Xf
}
Wd.__r = function(e) {
    e_ && e_(e), Qf = e.__c
};
var n_ = {
    useState: lf,
    useReducer: df,
    useEffect: hf,
    useLayoutEffect: ff,
    useRef: _f,
    useImperativeHandle: function(e, t, n) {
        tf = 6, ff((function() {
            "function" == typeof e ? e(t()) : e && (e.current = t())
        }), null == n ? n : n.concat(e))
    },
    useMemo: pf,
    useCallback: mf,
    useContext: vf,
    useDebugValue: gf,
    version: "17.0.2",
    Children: Cf,
    render: function(e, t, n) {
        return null == t.__k && (t.textContent = ""), Yh(e, t), "function" == typeof n && n(), e ? e.__c : null
    },
    hydrate: function(e, t, n) {
        return $h(e, t), "function" == typeof n && n(), e ? e.__c : null
    },
    unmountComponentAtNode: function(e) {
        return !!e.__k && (Yh(null, e), !0)
    },
    createPortal: Hf,
    createElement: wh,
    createContext: Qh,
    createFactory: function(e) {
        return wh.bind(null, e)
    },
    cloneElement: function(e) {
        return t_(e) ? zh.apply(null, arguments) : e
    },
    createRef: function() {
        return {
            current: null
        }
    },
    Fragment: kh,
    isValidElement: t_,
    findDOMNode: function(e) {
        return e && (e.base || 1 === e.nodeType && e) || null
    },
    Component: Ph,
    PureComponent: kf,
    memo: function(e, t) {
        function n(e) {
            var n = this.props.ref,
                r = n == e.ref;
            return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : Rf(this.props, e)
        }

        function r(t) {
            return this.shouldComponentUpdate = n, wh(e, t)
        }
        return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
    },
    forwardRef: Of,
    flushSync: function(e, t) {
        return e(t)
    },
    unstable_batchedUpdates: function(e, t) {
        return e(t)
    },
    StrictMode: kh,
    Suspense: xf,
    SuspenseList: Ff,
    lazy: function(e) {
        var t, n, r;

        function i(i) {
            if (t || (t = e()).then((function(e) {
                    n = e.default || e
                }), (function(e) {
                    r = e
                })), r) throw r;
            if (!n) throw t;
            return wh(n, i)
        }
        return i.displayName = "Lazy", i.__f = !0, i
    },
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        ReactCurrentDispatcher: {
            current: {
                readContext: function(e) {
                    return Qf.__n[e.__c].props.value
                }
            }
        }
    }
};
const r_ = "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? hf : ff;

function i_(e) {
    const t = "function" == typeof e ? function(e) {
            let t;
            const n = new Set,
                r = (e, r) => {
                    const i = "function" == typeof e ? e(t) : e;
                    if (i !== t) {
                        const e = t;
                        t = r ? i : Object.assign({}, t, i), n.forEach(n => n(t, e))
                    }
                },
                i = () => t,
                o = {
                    setState: r,
                    getState: i,
                    subscribe: (e, r, o) => r || o ? ((e, r = i, o = Object.is) => {
                        let s = r(t);

                        function a() {
                            const n = r(t);
                            if (!o(s, n)) {
                                const t = s;
                                e(s = n, t)
                            }
                        }
                        return n.add(a), () => n.delete(a)
                    })(e, r, o) : (n.add(e), () => n.delete(e)),
                    destroy: () => n.clear()
                };
            return t = e(r, i, o), o
        }(e) : e,
        n = (e = t.getState, n = Object.is) => {
            const [, r] = df(e => e + 1, 0), i = t.getState(), o = _f(i), s = _f(e), a = _f(n), u = _f(!1), c = _f();
            let l;
            void 0 === c.current && (c.current = e(i));
            let d = !1;
            (o.current !== i || s.current !== e || a.current !== n || u.current) && (l = e(i), d = !n(c.current, l)), r_(() => {
                d && (c.current = l), o.current = i, s.current = e, a.current = n, u.current = !1
            });
            const h = _f(i);
            r_(() => {
                const e = () => {
                        try {
                            const e = t.getState(),
                                n = s.current(e);
                            a.current(c.current, n) || (o.current = e, c.current = n, r())
                        } catch (e) {
                            u.current = !0, r()
                        }
                    },
                    n = t.subscribe(e);
                return t.getState() !== h.current && e(), n
            }, []);
            const f = d ? l : c.current;
            return gf(f), f
        };
    return Object.assign(n, t), n[Symbol.iterator] = function() {
        const e = [n, t];
        return {
            next() {
                const t = e.length <= 0;
                return {
                    value: e.shift(),
                    done: t
                }
            }
        }
    }, n
}

function o_() {
    const e = Qh(void 0);
    return {
        Provider: ({
            initialStore: t,
            createStore: n,
            children: r
        }) => {
            const i = _f();
            return i.current || (t && (n || (n = () => t)), i.current = n()), wh(e.Provider, {
                value: i.current
            }, r)
        },
        useStore: (t, n = Object.is) => {
            const r = vf(e);
            if (!r) throw new Error("Seems like you have not used zustand provider as an ancestor.");
            return r(t, n)
        },
        useStoreApi: () => {
            const t = vf(e);
            if (!t) throw new Error("Seems like you have not used zustand provider as an ancestor.");
            return pf(() => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy
            }), [t])
        }
    }
}
var s_, a_ = 0;

function u_(e, t, n, r, i) {
    var o, s, a = {};
    for (s in t) "ref" == s ? o = t[s] : a[s] = t[s];
    var u = {
        type: e,
        props: a,
        key: n,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --a_,
        __source: r,
        __self: i
    };
    if ("function" == typeof e && (o = e.defaultProps))
        for (s in o) void 0 === a[s] && (a[s] = o[s]);
    return Wd.vnode && Wd.vnode(u), u
}! function(e) {
    e[e.APPEAR = 0] = "APPEAR", e[e.APPEARING = 1] = "APPEARING", e[e.APPEARED = 2] = "APPEARED", e[e.ENTER = 3] = "ENTER", e[e.ENTERING = 4] = "ENTERING", e[e.ENTERED = 5] = "ENTERED", e[e.EXIT = 6] = "EXIT", e[e.EXITING = 7] = "EXITING", e[e.EXITED = 8] = "EXITED"
}(s_ || (s_ = {}));
var c_, l_ = function() {},
    d_ = setTimeout(l_),
    h_ = function(e) {
        var t = e.children,
            n = e.in,
            r = void 0 !== n && n,
            i = e.appear,
            o = void 0 !== i && i,
            s = e.enter,
            a = void 0 === s || s,
            u = e.exit,
            c = void 0 === u || u,
            l = e.duration,
            d = void 0 === l ? 500 : l,
            h = e.alwaysMounted,
            f = void 0 !== h && h,
            _ = e.onEnter,
            p = void 0 === _ ? l_ : _,
            m = e.onEntering,
            v = void 0 === m ? l_ : m,
            g = e.onEntered,
            y = void 0 === g ? l_ : g,
            E = e.onExit,
            T = void 0 === E ? l_ : E,
            S = e.onExiting,
            b = void 0 === S ? l_ : S,
            A = e.onExited,
            I = void 0 === A ? l_ : A,
            w = _f(d_),
            R = !1,
            k = lf((function() {
                return R = !0, r ? o ? s_.APPEAR : s_.APPEARED : s_.EXITED
            })),
            P = k[0],
            D = k[1];
        hf((function() {
            switch (P) {
                case s_.APPEAR:
                    p(), D(s_.APPEARING);
                    break;
                case s_.APPEARING:
                    v(), w.current = setTimeout((function() {
                        D(s_.APPEARED)
                    }), d);
                    break;
                case s_.APPEARED:
                    y();
                    break;
                case s_.ENTER:
                    p(), D(s_.ENTERING);
                    break;
                case s_.ENTERING:
                    v(), w.current = setTimeout((function() {
                        D(s_.ENTERED)
                    }), d);
                    break;
                case s_.ENTERED:
                    y();
                    break;
                case s_.EXIT:
                    T(), D(s_.EXITING);
                    break;
                case s_.EXITING:
                    b(), w.current = setTimeout((function() {
                        D(s_.EXITED)
                    }), d);
                    break;
                case s_.EXITED:
                    I()
            }
            return function() {
                clearTimeout(w.current)
            }
        }), [P]), ff((function() {
            if (!R) switch (!0) {
                case !(!r || !a):
                    D(s_.ENTER);
                    break;
                case !(!r || a):
                    D(s_.ENTERED);
                    break;
                case !(r || !c):
                    D(s_.EXIT);
                    break;
                case !(r || c):
                    D(s_.EXITED)
            }
        }), [r]);
        var O = pf((function() {
            return {
                appear: P === s_.APPEAR,
                appearActive: P === s_.APPEARING,
                appearDone: P === s_.APPEARED,
                enter: P === s_.ENTER,
                enterActive: P === s_.ENTERING,
                enterDone: P === s_.ENTERED,
                exit: P === s_.EXIT,
                exitActive: P === s_.EXITING,
                exitDone: P === s_.EXITED
            }
        }), [P]);
        return (f || P !== s_.EXITED) && t(O)
    };

function f_() {
    return (f_ = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}! function(e) {
    e.APPEAR = "-appear", e.APPEAR_ACTIVE = "-appear-active", e.APPEAR_DONE = "-appear-done", e.ENTER = "-enter", e.ENTER_ACTIVE = "-enter-active", e.ENTER_DONE = "-enter-done", e.EXIT = "-exit", e.EXIT_ACTIVE = "-exit-active", e.EXIT_DONE = "-exit-done"
}(c_ || (c_ = {}));
var __ = ["children", "styles"],
    p_ = function(e) {
        var t = e.children,
            n = e.styles,
            r = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) t.indexOf(n = o[r]) >= 0 || (i[n] = e[n]);
                return i
            }(e, __);
        return wh(h_, r, (function(e) {
            var r = t.props.style,
                i = pf((function() {
                    return f_({}, function(e, t) {
                        switch (!0) {
                            case e.appear:
                                return t.appear;
                            case e.appearActive:
                                return f_({}, t.appear, t.appearActive);
                            case e.appearDone:
                                return t.appearDone;
                            case e.enter:
                                return t.enter;
                            case e.enterActive:
                                return f_({}, t.enter, t.enterActive);
                            case e.enterDone:
                                return t.enterDone;
                            case e.exit:
                                return t.exit;
                            case e.exitActive:
                                return f_({}, t.exit, t.exitActive);
                            case e.exitDone:
                                return t.exitDone;
                            default:
                                return {}
                        }
                    }(e, n), r)
                }), [r, n, e]);
            return zh(t, {
                style: i
            })
        }))
    },
    m_ = function(e) {
        return function(t) {
            return null == e ? void 0 : e[t]
        }
    }({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }),
    v_ = /[&<>"']/g,
    g_ = RegExp(v_.source);

function y_(e) {
    return (e = Bn(e)) && g_.test(e) ? e.replace(v_, m_) : e
}
const E_ = e => (t, n, r) => {
    const i = r.subscribe;
    return r.subscribe = (e, t, n) => {
        let o = e;
        if (t) {
            const i = (null == n ? void 0 : n.equalityFn) || Object.is;
            let s = e(r.getState());
            o = n => {
                const r = e(n);
                if (!i(s, r)) {
                    const e = s;
                    t(s = r, e)
                }
            }, (null == n ? void 0 : n.fireImmediately) && t(s, s)
        }
        return i(o)
    }, e(t, n, r)
};

function T_(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.__data__ = new Ln; ++t < n;) this.add(e[t])
}

function S_(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
        if (t(e[n], n, e)) return !0;
    return !1
}

function b_(e, t) {
    return e.has(t)
}

function A_(e, t, n, r, i, o) {
    var s = 1 & n,
        a = e.length,
        u = t.length;
    if (a != u && !(s && u > a)) return !1;
    var c = o.get(e);
    if (c && o.get(t)) return c == t;
    var l = -1,
        d = !0,
        h = 2 & n ? new T_ : void 0;
    for (o.set(e, t), o.set(t, e); ++l < a;) {
        var f = e[l],
            _ = t[l];
        if (r) var p = s ? r(_, f, l, t, e, o) : r(f, _, l, e, t, o);
        if (void 0 !== p) {
            if (p) continue;
            d = !1;
            break
        }
        if (h) {
            if (!S_(t, (function(e, t) {
                    if (!b_(h, t) && (f === e || i(f, e, n, r, o))) return h.push(t)
                }))) {
                d = !1;
                break
            }
        } else if (f !== _ && !i(f, _, n, r, o)) {
            d = !1;
            break
        }
    }
    return o.delete(e), o.delete(t), d
}

function I_(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach((function(e, r) {
        n[++t] = [r, e]
    })), n
}

function w_(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach((function(e) {
        n[++t] = e
    })), n
}
T_.prototype.add = T_.prototype.push = function(e) {
    return this.__data__.set(e, "__lodash_hash_undefined__"), this
}, T_.prototype.has = function(e) {
    return this.__data__.has(e)
};
var R_ = zt ? zt.prototype : void 0,
    k_ = R_ ? R_.valueOf : void 0,
    P_ = Object.prototype.hasOwnProperty,
    D_ = Object.prototype.hasOwnProperty;

function O_(e, t, n, r, i) {
    return e === t || (null == e || null == t || !on(e) && !on(t) ? e != e && t != t : function(e, t, n, r, i, o) {
        var s = Wt(e),
            a = Wt(t),
            u = s ? "[object Array]" : Si(e),
            c = a ? "[object Array]" : Si(t),
            l = "[object Object]" == (u = "[object Arguments]" == u ? "[object Object]" : u),
            d = "[object Object]" == (c = "[object Arguments]" == c ? "[object Object]" : c),
            h = u == c;
        if (h && wr(e)) {
            if (!wr(t)) return !1;
            s = !0, l = !1
        }
        if (h && !l) return o || (o = new hr), s || Ur(e) ? A_(e, t, n, r, i, o) : function(e, t, n, r, i, o, s) {
            switch (n) {
                case "[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case "[object ArrayBuffer]":
                    return !(e.byteLength != t.byteLength || !o(new Ai(e), new Ai(t)));
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return wn(+e, +t);
                case "[object Error]":
                    return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                    return e == t + "";
                case "[object Map]":
                    var a = I_;
                case "[object Set]":
                    var u = 1 & r;
                    if (a || (a = w_), e.size != t.size && !u) return !1;
                    var c = s.get(e);
                    if (c) return c == t;
                    r |= 2, s.set(e, t);
                    var l = A_(a(e), a(t), r, i, o, s);
                    return s.delete(e), l;
                case "[object Symbol]":
                    if (k_) return k_.call(e) == k_.call(t)
            }
            return !1
        }(e, t, u, n, r, i, o);
        if (!(1 & n)) {
            var f = l && D_.call(e, "__wrapped__"),
                _ = d && D_.call(t, "__wrapped__");
            if (f || _) {
                var p = f ? e.value() : e,
                    m = _ ? t.value() : t;
                return o || (o = new hr), i(p, m, n, r, o)
            }
        }
        return !!h && (o || (o = new hr), function(e, t, n, r, i, o) {
            var s = 1 & n,
                a = li(e),
                u = a.length;
            if (u != li(t).length && !s) return !1;
            for (var c = u; c--;) {
                var l = a[c];
                if (!(s ? l in t : P_.call(t, l))) return !1
            }
            var d = o.get(e);
            if (d && o.get(t)) return d == t;
            var h = !0;
            o.set(e, t), o.set(t, e);
            for (var f = s; ++c < u;) {
                var _ = e[l = a[c]],
                    p = t[l];
                if (r) var m = s ? r(p, _, l, t, e, o) : r(_, p, l, e, t, o);
                if (!(void 0 === m ? _ === p || i(_, p, n, r, o) : m)) {
                    h = !1;
                    break
                }
                f || (f = "constructor" == l)
            }
            if (h && !f) {
                var v = e.constructor,
                    g = t.constructor;
                v != g && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof g && g instanceof g) && (h = !1)
            }
            return o.delete(e), o.delete(t), h
        }(e, t, n, r, i, o))
    }(e, t, n, r, O_, i))
}

function L_(e, t) {
    return O_(e, t)
}
var C_ = [],
    M_ = [];

function N_(e, t) {
    if (e && "undefined" != typeof document) {
        var n, r = !0 === t.prepend ? "prepend" : "append",
            i = !0 === t.singleTag,
            o = "string" == typeof t.container ? document.querySelector(t.container) : document.getElementsByTagName("head")[0];
        if (i) {
            var s = C_.indexOf(o); - 1 === s && (s = C_.push(o) - 1, M_[s] = {}), n = M_[s] && M_[s][r] ? M_[s][r] : M_[s][r] = a()
        } else n = a();
        65279 === e.charCodeAt(0) && (e = e.substring(1)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(document.createTextNode(e))
    }

    function a() {
        var e = document.createElement("style");
        if (e.setAttribute("type", "text/css"), t.attributes)
            for (var n = Object.keys(t.attributes), i = 0; i < n.length; i++) e.setAttribute(n[i], t.attributes[n[i]]);
        var s = "prepend" === r ? "afterbegin" : "beforeend";
        return o.insertAdjacentElement(s, e), e
    }
}
var x_ = o((function(e, t) {
    /*! For license information please see hls-parser.min.js.LICENSE.txt */
    self,
    e.exports = function() {
        return e = {
                851: (e, t, n) => {
                    var r = n(771),
                        i = r.getOptions,
                        o = r.setOptions,
                        s = n(463),
                        a = n(367),
                        u = n(890);
                    e.exports = {
                        parse: s,
                        stringify: a,
                        types: u,
                        getOptions: i,
                        setOptions: o
                    }
                },
                463: (e, t, n) => {
                    function r(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = o(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var s, a = !0,
                            u = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                u = !0, s = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (u) throw s
                                }
                            }
                        }
                    }

                    function i(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return n
                            }
                        }(e, t) || o(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function o(e, t) {
                        if (e) {
                            if ("string" == typeof e) return s(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                        }
                    }

                    function s(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }
                    var a = n(771),
                        u = n(890),
                        c = u.Rendition,
                        l = u.Variant,
                        d = u.SessionData,
                        h = u.Key,
                        f = u.MediaInitializationSection,
                        _ = u.DateRange,
                        p = u.SpliceInfo,
                        m = u.MasterPlaylist,
                        v = u.MediaPlaylist,
                        g = u.Segment,
                        y = u.PartialSegment,
                        E = u.RenditionReport;

                    function T(e) {
                        return a.trim(e, '"')
                    }

                    function S(e) {
                        var t = a.splitAt(e, ",");
                        return {
                            duration: a.toNumber(t[0]),
                            title: decodeURIComponent(escape(t[1]))
                        }
                    }

                    function b(e) {
                        var t = a.splitAt(e, "@");
                        return {
                            length: a.toNumber(t[0]),
                            offset: t[1] ? a.toNumber(t[1]) : -1
                        }
                    }

                    function A(e, t) {
                        t.IV && e.compatibleVersion < 2 && (e.compatibleVersion = 2), (t.KEYFORMAT || t.KEYFORMATVERSIONS) && e.compatibleVersion < 5 && (e.compatibleVersion = 5)
                    }

                    function I(e) {
                        var t = a.splitByCommaWithPreservingQuotes(e),
                            n = {};
                        return t.forEach((function(e) {
                            var t, r, o = i(a.splitAt(e, "="), 2),
                                s = o[0],
                                u = o[1],
                                c = T(u);
                            switch (s) {
                                case "URI":
                                    n[s] = c;
                                    break;
                                case "START-DATE":
                                case "END-DATE":
                                    n[s] = new Date(c);
                                    break;
                                case "IV":
                                    n[s] = (t = c, 16 !== (r = a.hexToByteSequence(t)).length && a.INVALIDPLAYLIST("IV must be a 128-bit unsigned integer"), r);
                                    break;
                                case "BYTERANGE":
                                    n[s] = b(c);
                                    break;
                                case "RESOLUTION":
                                    n[s] = function(e) {
                                        var t = a.splitAt(e, "x");
                                        return {
                                            width: a.toNumber(t[0]),
                                            height: a.toNumber(t[1])
                                        }
                                    }(c);
                                    break;
                                case "END-ON-NEXT":
                                case "DEFAULT":
                                case "AUTOSELECT":
                                case "FORCED":
                                case "PRECISE":
                                case "CAN-BLOCK-RELOAD":
                                case "INDEPENDENT":
                                case "GAP":
                                    n[s] = "YES" === c;
                                    break;
                                case "DURATION":
                                case "PLANNED-DURATION":
                                case "BANDWIDTH":
                                case "AVERAGE-BANDWIDTH":
                                case "FRAME-RATE":
                                case "TIME-OFFSET":
                                case "CAN-SKIP-UNTIL":
                                case "HOLD-BACK":
                                case "PART-HOLD-BACK":
                                case "PART-TARGET":
                                case "BYTERANGE-START":
                                case "BYTERANGE-LENGTH":
                                case "LAST-MSN":
                                case "LAST-PART":
                                case "SKIPPED-SEGMENTS":
                                    n[s] = a.toNumber(c);
                                    break;
                                default:
                                    s.startsWith("SCTE35-") ? n[s] = a.hexToByteSequence(c) : s.startsWith("X-") ? n[s] = function(e) {
                                        return e.startsWith('"') ? T(e) : e.startsWith("0x") || e.startsWith("0X") ? a.hexToByteSequence(e) : a.toNumber(e)
                                    }(u) : n[s] = c
                            }
                        })), n
                    }

                    function w() {
                        a.INVALIDPLAYLIST("The file contains both media and master playlist tags.")
                    }

                    function R(e, t, n) {
                        var i, o = (i = t.attributes, new c({
                                type: i.TYPE,
                                uri: i.URI,
                                groupId: i["GROUP-ID"],
                                language: i.LANGUAGE,
                                assocLanguage: i["ASSOC-LANGUAGE"],
                                name: i.NAME,
                                isDefault: i.DEFAULT,
                                autoselect: i.AUTOSELECT,
                                forced: i.FORCED,
                                instreamId: i["INSTREAM-ID"],
                                characteristics: i.CHARACTERISTICS,
                                channels: i.CHANNELS
                            })),
                            s = e[a.camelify(n)],
                            u = function(e, t) {
                                var n, i = !1,
                                    o = r(e);
                                try {
                                    for (o.s(); !(n = o.n()).done;) {
                                        var s = n.value;
                                        if (s.name === t.name) return "All EXT-X-MEDIA tags in the same Group MUST have different NAME attributes.";
                                        s.isDefault && (i = !0)
                                    }
                                } catch (e) {
                                    o.e(e)
                                } finally {
                                    o.f()
                                }
                                return i && t.isDefault ? "EXT-X-MEDIA A Group MUST NOT have more than one member with a DEFAULT attribute of YES." : ""
                            }(s, o);
                        u && a.INVALIDPLAYLIST(u), s.push(o), o.isDefault && (e.currentRenditions[a.camelify(n)] = s.length - 1)
                    }

                    function k(e, t, n, i, o) {
                        var s, u = new l({
                                uri: n,
                                bandwidth: t.BANDWIDTH,
                                averageBandwidth: t["AVERAGE-BANDWIDTH"],
                                codecs: t.CODECS,
                                resolution: t.RESOLUTION,
                                frameRate: t["FRAME-RATE"],
                                hdcpLevel: t["HDCP-LEVEL"]
                            }),
                            c = r(e);
                        try {
                            for (c.s(); !(s = c.n()).done;) {
                                var d = s.value;
                                if ("EXT-X-MEDIA" === d.name) {
                                    var h = d.attributes,
                                        f = h.TYPE;
                                    if (f && h["GROUP-ID"] || a.INVALIDPLAYLIST("EXT-X-MEDIA TYPE attribute is REQUIRED."), t[f] === h["GROUP-ID"] && (R(u, d, f), "CLOSED-CAPTIONS" === f)) {
                                        var _, p = r(u.closedCaptions);
                                        try {
                                            for (p.s(); !(_ = p.n()).done;) {
                                                var m = _.value.instreamId;
                                                if (m && m.startsWith("SERVICE") && o.compatibleVersion < 7) {
                                                    o.compatibleVersion = 7;
                                                    break
                                                }
                                            }
                                        } catch (e) {
                                            p.e(e)
                                        } finally {
                                            p.f()
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        return function(e, t, n) {
                            ["AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((function(r) {
                                "CLOSED-CAPTIONS" === r && "NONE" === e[r] ? (n.isClosedCaptionsNone = !0, t.closedCaptions = []) : e[r] && !t[a.camelify(r)].find((function(t) {
                                    return t.groupId === e[r]
                                })) && a.INVALIDPLAYLIST("".concat(r, " attribute MUST match the value of the GROUP-ID attribute of an EXT-X-MEDIA tag whose TYPE attribute is ").concat(r, "."))
                            }))
                        }(t, u, o), u.isIFrameOnly = i, u
                    }

                    function P(e, t) {
                        if (e.method !== t.method) return !1;
                        if (e.uri !== t.uri) return !1;
                        if (e.iv) {
                            if (!t.iv) return !1;
                            if (e.iv.length !== t.iv.length) return !1;
                            for (var n = 0; n < e.iv.length; n++)
                                if (e.iv[n] !== t.iv[n]) return !1
                        } else if (t.iv) return !1;
                        return e.format === t.format && e.formatVersion === t.formatVersion
                    }

                    function D(e, t, n, r, i, o, s) {
                        for (var u = new g({
                                uri: t,
                                mediaSequenceNumber: i,
                                discontinuitySequence: o
                            }), c = !1, l = !1, d = function(t) {
                                var n = e[t],
                                    r = n.name,
                                    i = n.value,
                                    o = n.attributes;
                                if ("EXTINF" === r) !Number.isInteger(i.duration) && s.compatibleVersion < 3 && (s.compatibleVersion = 3), Math.round(i.duration) > s.targetDuration && a.INVALIDPLAYLIST("EXTINF duration, when rounded to the nearest integer, MUST be less than or equal to the target duration"), u.duration = i.duration, u.title = i.title;
                                else if ("EXT-X-BYTERANGE" === r) s.compatibleVersion < 4 && (s.compatibleVersion = 4), u.byterange = i;
                                else if ("EXT-X-DISCONTINUITY" === r) u.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-DISCONTINUITY must appear before the first EXT-X-PART tag of the Parent Segment."), u.discontinuity = !0;
                                else if ("EXT-X-KEY" === r) u.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-KEY must appear before the first EXT-X-PART tag of the Parent Segment."), A(s, o), u.key = new h({
                                    method: o.METHOD,
                                    uri: o.URI,
                                    iv: o.IV,
                                    format: o.KEYFORMAT,
                                    formatVersion: o.KEYFORMATVERSIONS
                                });
                                else if ("EXT-X-MAP" === r) u.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-MAP must appear before the first EXT-X-PART tag of the Parent Segment."), s.compatibleVersion < 5 && (s.compatibleVersion = 5), s.hasMap = !0, u.map = new f({
                                    uri: o.URI,
                                    byterange: o.BYTERANGE
                                });
                                else if ("EXT-X-PROGRAM-DATE-TIME" === r) u.programDateTime = i;
                                else if ("EXT-X-DATERANGE" === r) {
                                    var d = {};
                                    Object.keys(o).forEach((function(e) {
                                        (e.startsWith("SCTE35-") || e.startsWith("X-")) && (d[e] = o[e])
                                    })), u.dateRange = new _({
                                        id: o.ID,
                                        classId: o.CLASS,
                                        start: o["START-DATE"],
                                        end: o["END-DATE"],
                                        duration: o.DURATION,
                                        plannedDuration: o["PLANNED-DURATION"],
                                        endOnNext: o["END-ON-NEXT"],
                                        attributes: d
                                    })
                                } else if ("EXT-X-CUE-OUT" === r) u.markers.push(new p({
                                    type: "OUT",
                                    duration: i
                                }));
                                else if ("EXT-X-CUE-IN" === r) u.markers.push(new p({
                                    type: "IN"
                                }));
                                else if ("EXT-X-CUE-OUT-CONT" === r || "EXT-X-CUE" === r || "EXT-OATCLS-SCTE35" === r || "EXT-X-ASSET" === r || "EXT-X-SCTE35" === r) u.markers.push(new p({
                                    type: "RAW",
                                    tagName: r,
                                    value: i
                                }));
                                else if ("EXT-X-PRELOAD-HINT" !== r || o.TYPE)
                                    if ("EXT-X-PRELOAD-HINT" === r && "PART" === o.TYPE && l) a.INVALIDPLAYLIST("Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist.");
                                    else if ("EXT-X-PART" !== r && "EXT-X-PRELOAD-HINT" !== r || o.URI) {
                                    if ("EXT-X-PRELOAD-HINT" === r && "MAP" === o.TYPE) c && a.INVALIDPLAYLIST("Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist."), c = !0, s.hasMap = !0, u.map = new f({
                                        hint: !0,
                                        uri: o.URI,
                                        byterange: {
                                            length: o["BYTERANGE-LENGTH"],
                                            offset: o["BYTERANGE-START"] || 0
                                        }
                                    });
                                    else if ("EXT-X-PART" === r || "EXT-X-PRELOAD-HINT" === r && "PART" === o.TYPE) {
                                        "EXT-X-PART" !== r || o.DURATION || a.INVALIDPLAYLIST("EXT-X-PART: DURATION attribute is mandatory"), "EXT-X-PRELOAD-HINT" === r && (l = !0);
                                        var m = new y({
                                            hint: "EXT-X-PRELOAD-HINT" === r,
                                            uri: o.URI,
                                            byterange: "EXT-X-PART" === r ? o.BYTERANGE : {
                                                length: o["BYTERANGE-LENGTH"],
                                                offset: o["BYTERANGE-START"] || 0
                                            },
                                            duration: o.DURATION,
                                            independent: o.INDEPENDENT,
                                            gap: o.GAP
                                        });
                                        u.parts.push(m)
                                    }
                                } else a.INVALIDPLAYLIST("EXT-X-PART / EXT-X-PRELOAD-HINT: URI attribute is mandatory");
                                else a.INVALIDPLAYLIST("EXT-X-PRELOAD-HINT: TYPE attribute is mandatory")
                            }, m = n; m <= r; m++) d(m);
                        return u
                    }

                    function O(e, t, n, r, i) {
                        var o = t.discontinuity,
                            s = t.key,
                            u = t.map,
                            c = t.byterange,
                            l = t.uri;
                        if (o && (t.discontinuitySequence = n + 1), s || (t.key = r), u || (t.map = i), c && -1 === c.offset) {
                            var d = e.segments;
                            if (d.length > 0) {
                                var h = d[d.length - 1];
                                h.byterange && h.uri === l ? c.offset = h.byterange.offset + h.byterange.length : a.INVALIDPLAYLIST("If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST be a sub-range of the same media resource")
                            } else a.INVALIDPLAYLIST("If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST appear in the Playlist file")
                        }
                        return e.segments.push(t), [t.discontinuitySequence, t.key, t.map]
                    }

                    function L(e, t) {
                        var n = i(function(e) {
                                var t = e.indexOf(":");
                                return -1 === t ? [e.slice(1).trim(), null] : [e.slice(1, t).trim(), e.slice(t + 1).trim()]
                            }(e), 2),
                            r = n[0],
                            o = n[1],
                            s = function(e) {
                                switch (e) {
                                    case "EXTM3U":
                                    case "EXT-X-VERSION":
                                        return "Basic";
                                    case "EXTINF":
                                    case "EXT-X-BYTERANGE":
                                    case "EXT-X-DISCONTINUITY":
                                    case "EXT-X-KEY":
                                    case "EXT-X-MAP":
                                    case "EXT-X-PROGRAM-DATE-TIME":
                                    case "EXT-X-DATERANGE":
                                    case "EXT-X-CUE-OUT":
                                    case "EXT-X-CUE-IN":
                                    case "EXT-X-CUE-OUT-CONT":
                                    case "EXT-X-CUE":
                                    case "EXT-OATCLS-SCTE35":
                                    case "EXT-X-ASSET":
                                    case "EXT-X-SCTE35":
                                    case "EXT-X-PART":
                                    case "EXT-X-PRELOAD-HINT":
                                        return "Segment";
                                    case "EXT-X-TARGETDURATION":
                                    case "EXT-X-MEDIA-SEQUENCE":
                                    case "EXT-X-DISCONTINUITY-SEQUENCE":
                                    case "EXT-X-ENDLIST":
                                    case "EXT-X-PLAYLIST-TYPE":
                                    case "EXT-X-I-FRAMES-ONLY":
                                    case "EXT-X-SERVER-CONTROL":
                                    case "EXT-X-PART-INF":
                                    case "EXT-X-RENDITION-REPORT":
                                    case "EXT-X-SKIP":
                                        return "MediaPlaylist";
                                    case "EXT-X-MEDIA":
                                    case "EXT-X-STREAM-INF":
                                    case "EXT-X-I-FRAME-STREAM-INF":
                                    case "EXT-X-SESSION-DATA":
                                    case "EXT-X-SESSION-KEY":
                                        return "MasterPlaylist";
                                    case "EXT-X-INDEPENDENT-SEGMENTS":
                                    case "EXT-X-START":
                                        return "MediaorMasterPlaylist";
                                    default:
                                        return "Unknown"
                                }
                            }(r);
                        if (function(e, t) {
                                if ("Segment" === e || "MediaPlaylist" === e) return void 0 === t.isMasterPlaylist ? void(t.isMasterPlaylist = !1) : void(t.isMasterPlaylist && w());
                                if ("MasterPlaylist" === e) {
                                    if (void 0 === t.isMasterPlaylist) return void(t.isMasterPlaylist = !0);
                                    !1 === t.isMasterPlaylist && w()
                                }
                            }(s, t), "Unknown" === s) return null;
                        "MediaPlaylist" === s && "EXT-X-RENDITION-REPORT" !== r && (t.hash[r] && a.INVALIDPLAYLIST("There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist"), t.hash[r] = !0);
                        var u = i(function(e, t) {
                            switch (e) {
                                case "EXTM3U":
                                case "EXT-X-DISCONTINUITY":
                                case "EXT-X-ENDLIST":
                                case "EXT-X-I-FRAMES-ONLY":
                                case "EXT-X-INDEPENDENT-SEGMENTS":
                                case "EXT-X-CUE-IN":
                                    return [null, null];
                                case "EXT-X-VERSION":
                                case "EXT-X-TARGETDURATION":
                                case "EXT-X-MEDIA-SEQUENCE":
                                case "EXT-X-DISCONTINUITY-SEQUENCE":
                                case "EXT-X-CUE-OUT":
                                    return [a.toNumber(t), null];
                                case "EXT-X-KEY":
                                case "EXT-X-MAP":
                                case "EXT-X-DATERANGE":
                                case "EXT-X-MEDIA":
                                case "EXT-X-STREAM-INF":
                                case "EXT-X-I-FRAME-STREAM-INF":
                                case "EXT-X-SESSION-DATA":
                                case "EXT-X-SESSION-KEY":
                                case "EXT-X-START":
                                case "EXT-X-SERVER-CONTROL":
                                case "EXT-X-PART-INF":
                                case "EXT-X-PART":
                                case "EXT-X-PRELOAD-HINT":
                                case "EXT-X-RENDITION-REPORT":
                                case "EXT-X-SKIP":
                                    return [null, I(t)];
                                case "EXTINF":
                                    return [S(t), null];
                                case "EXT-X-BYTERANGE":
                                    return [b(t), null];
                                case "EXT-X-PROGRAM-DATE-TIME":
                                    return [new Date(t), null];
                                case "EXT-X-PLAYLIST-TYPE":
                                default:
                                    return [t, null]
                            }
                        }(r, o), 2);
                        return {
                            name: r,
                            category: s,
                            value: u[0],
                            attributes: u[1]
                        }
                    }
                    e.exports = function(e) {
                        var t = {
                                version: void 0,
                                isMasterPlaylist: void 0,
                                hasMap: !1,
                                targetDuration: 0,
                                compatibleVersion: 1,
                                isClosedCaptionsNone: !1,
                                hash: {}
                            },
                            n = function(e, t) {
                                var n;
                                return t.isMasterPlaylist ? n = function(e, t) {
                                    var n, o = new m,
                                        s = r(e.entries());
                                    try {
                                        for (s.s(); !(n = s.n()).done;) {
                                            var u = i(n.value, 2),
                                                c = u[0],
                                                l = u[1],
                                                f = l.name,
                                                _ = l.value,
                                                p = l.attributes;
                                            if ("EXT-X-VERSION" === f) o.version = _;
                                            else if ("EXT-X-STREAM-INF" === f) {
                                                var v = e[c + 1];
                                                ("string" != typeof v || v.startsWith("#EXT")) && a.INVALIDPLAYLIST("EXT-X-STREAM-INF must be followed by a URI line");
                                                var g = k(e, p, v, !1, t);
                                                g && o.variants.push(g)
                                            } else if ("EXT-X-I-FRAME-STREAM-INF" === f) {
                                                var y = k(e, p, p.URI, !0, t);
                                                y && o.variants.push(y)
                                            } else "EXT-X-SESSION-DATA" === f ? function() {
                                                var e = new d({
                                                    id: p["DATA-ID"],
                                                    value: p.VALUE,
                                                    uri: p.URI,
                                                    language: p.LANGUAGE
                                                });
                                                o.sessionDataList.find((function(t) {
                                                    return t.id === e.id && t.language === e.language
                                                })) && a.INVALIDPLAYLIST("A Playlist MUST NOT contain more than one EXT-X-SESSION-DATA tag with the same DATA-ID attribute and the same LANGUAGE attribute."), o.sessionDataList.push(e)
                                            }() : "EXT-X-SESSION-KEY" === f ? function() {
                                                "NONE" === p.METHOD && a.INVALIDPLAYLIST("EXT-X-SESSION-KEY: The value of the METHOD attribute MUST NOT be NONE");
                                                var e = new h({
                                                    method: p.METHOD,
                                                    uri: p.URI,
                                                    iv: p.IV,
                                                    format: p.KEYFORMAT,
                                                    formatVersion: p.KEYFORMATVERSIONS
                                                });
                                                o.sessionKeyList.find((function(t) {
                                                    return P(t, e)
                                                })) && a.INVALIDPLAYLIST("A Master Playlist MUST NOT contain more than one EXT-X-SESSION-KEY tag with the same METHOD, URI, IV, KEYFORMAT, and KEYFORMATVERSIONS attribute values."), A(t, p), o.sessionKeyList.push(e)
                                            }() : "EXT-X-INDEPENDENT-SEGMENTS" === f ? (o.independentSegments && a.INVALIDPLAYLIST("EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"), o.independentSegments = !0) : "EXT-X-START" === f && (o.start && a.INVALIDPLAYLIST("EXT-X-START tag MUST NOT appear more than once in a Playlist"), "number" != typeof p["TIME-OFFSET"] && a.INVALIDPLAYLIST("EXT-X-START: TIME-OFFSET attribute is REQUIRED"), o.start = {
                                                offset: p["TIME-OFFSET"],
                                                precise: p.PRECISE || !1
                                            })
                                        }
                                    } catch (e) {
                                        s.e(e)
                                    } finally {
                                        s.f()
                                    }
                                    if (t.isClosedCaptionsNone) {
                                        var E, T = r(o.variants);
                                        try {
                                            for (T.s(); !(E = T.n()).done;) E.value.closedCaptions.length > 0 && a.INVALIDPLAYLIST("If there is a variant with CLOSED-CAPTIONS attribute of NONE, all EXT-X-STREAM-INF tags MUST have this attribute with a value of NONE")
                                        } catch (e) {
                                            T.e(e)
                                        } finally {
                                            T.f()
                                        }
                                    }
                                    return o
                                }(e, t) : !(n = function(e, t) {
                                    var n, o = new v,
                                        s = -1,
                                        u = 0,
                                        c = !1,
                                        l = 0,
                                        d = null,
                                        h = null,
                                        f = !1,
                                        _ = r(e.entries());
                                    try {
                                        for (_.s(); !(n = _.n()).done;) {
                                            var p = i(n.value, 2),
                                                m = p[0],
                                                g = p[1],
                                                y = g.name,
                                                T = g.value,
                                                S = g.attributes;
                                            if ("Segment" !== g.category) {
                                                if ("EXT-X-VERSION" === y) void 0 === o.version ? o.version = T : a.INVALIDPLAYLIST("A Playlist file MUST NOT contain more than one EXT-X-VERSION tag.");
                                                else if ("EXT-X-TARGETDURATION" === y) o.targetDuration = t.targetDuration = T;
                                                else if ("EXT-X-MEDIA-SEQUENCE" === y) o.segments.length > 0 && a.INVALIDPLAYLIST("The EXT-X-MEDIA-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."), o.mediaSequenceBase = u = T;
                                                else if ("EXT-X-DISCONTINUITY-SEQUENCE" === y) o.segments.length > 0 && a.INVALIDPLAYLIST("The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."), c && a.INVALIDPLAYLIST("The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before any EXT-X-DISCONTINUITY tag."), o.discontinuitySequenceBase = l = T;
                                                else if ("EXT-X-ENDLIST" === y) o.endlist = !0;
                                                else if ("EXT-X-PLAYLIST-TYPE" === y) o.playlistType = T;
                                                else if ("EXT-X-I-FRAMES-ONLY" === y) t.compatibleVersion < 4 && (t.compatibleVersion = 4), o.isIFrame = !0;
                                                else if ("EXT-X-INDEPENDENT-SEGMENTS" === y) o.independentSegments && a.INVALIDPLAYLIST("EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"), o.independentSegments = !0;
                                                else if ("EXT-X-START" === y) o.start && a.INVALIDPLAYLIST("EXT-X-START tag MUST NOT appear more than once in a Playlist"), "number" != typeof S["TIME-OFFSET"] && a.INVALIDPLAYLIST("EXT-X-START: TIME-OFFSET attribute is REQUIRED"), o.start = {
                                                    offset: S["TIME-OFFSET"],
                                                    precise: S.PRECISE || !1
                                                };
                                                else if ("EXT-X-SERVER-CONTROL" === y) S["CAN-BLOCK-RELOAD"] || a.INVALIDPLAYLIST("EXT-X-SERVER-CONTROL: CAN-BLOCK-RELOAD=YES is mandatory for Low-Latency HLS"), o.lowLatencyCompatibility = {
                                                    canBlockReload: S["CAN-BLOCK-RELOAD"],
                                                    canSkipUntil: S["CAN-SKIP-UNTIL"],
                                                    holdBack: S["HOLD-BACK"],
                                                    partHoldBack: S["PART-HOLD-BACK"]
                                                };
                                                else if ("EXT-X-PART-INF" === y) S["PART-TARGET"] || a.INVALIDPLAYLIST("EXT-X-PART-INF: PART-TARGET attribute is mandatory"), o.partTargetDuration = S["PART-TARGET"];
                                                else if ("EXT-X-RENDITION-REPORT" === y) S.URI || a.INVALIDPLAYLIST("EXT-X-RENDITION-REPORT: URI attribute is mandatory"), 0 === S.URI.search(/^[a-z]+:/) && a.INVALIDPLAYLIST("EXT-X-RENDITION-REPORT: URI must be relative to the playlist uri"), o.renditionReports.push(new E({
                                                    uri: S.URI,
                                                    lastMSN: S["LAST-MSN"],
                                                    lastPart: S["LAST-PART"]
                                                }));
                                                else if ("EXT-X-SKIP" === y) S["SKIPPED-SEGMENTS"] || a.INVALIDPLAYLIST("EXT-X-SKIP: SKIPPED-SEGMENTS attribute is mandatory"), t.compatibleVersion < 9 && (t.compatibleVersion = 9), o.skip = S["SKIPPED-SEGMENTS"], u += o.skip;
                                                else if ("string" == typeof g) {
                                                    -1 === s && a.INVALIDPLAYLIST("A URI line is not preceded by any segment tags"), o.targetDuration || a.INVALIDPLAYLIST("The EXT-X-TARGETDURATION tag is REQUIRED");
                                                    var b = D(e, g, s, m - 1, u++, l, t);
                                                    if (b) {
                                                        var A = i(O(o, b, l, d, h), 3);
                                                        l = A[0], d = A[1], h = A[2], !f && b.parts.length > 0 && (f = !0)
                                                    }
                                                    s = -1
                                                }
                                            } else -1 === s && (s = m), "EXT-X-DISCONTINUITY" === y && (c = !0)
                                        }
                                    } catch (e) {
                                        _.e(e)
                                    } finally {
                                        _.f()
                                    }
                                    if (-1 !== s) {
                                        var I = D(e, "", s, e.length - 1, u++, l, t);
                                        if (I) {
                                            var w = I.parts;
                                            w.length > 0 && !o.endlist && !w[w.length - 1].hint && a.INVALIDPLAYLIST("If the Playlist contains EXT-X-PART tags and does not contain an EXT-X-ENDLIST tag, the Playlist must contain an EXT-X-PRELOAD-HINT tag with a TYPE=PART attribute"), O(o, I, d, h), !f && I.parts.length > 0 && (f = !0)
                                        }
                                    }
                                    return function(e) {
                                        for (var t = new Map, n = new Map, i = !1, o = !1, s = e.length - 1; s >= 0; s--) {
                                            var u = e[s],
                                                c = u.programDateTime,
                                                l = u.dateRange;
                                            if (c && (o = !0), l && l.start) {
                                                i = !0, l.endOnNext && (l.end || l.duration) && a.INVALIDPLAYLIST("An EXT-X-DATERANGE tag with an END-ON-NEXT=YES attribute MUST NOT contain DURATION or END-DATE attributes.");
                                                var d = l.start.getTime(),
                                                    h = l.duration || 0;
                                                l.end && l.duration && d + 1e3 * h !== l.end.getTime() && a.INVALIDPLAYLIST("END-DATE MUST be equal to the value of the START-DATE attribute plus the value of the DURATION"), l.endOnNext && (l.end = t.get(l.classId)), t.set(l.classId, l.start);
                                                var f = l.end ? l.end.getTime() : l.start.getTime() + 1e3 * (l.duration || 0),
                                                    _ = n.get(l.classId);
                                                if (_) {
                                                    var p, m = r(_);
                                                    try {
                                                        for (m.s(); !(p = m.n()).done;) {
                                                            var v = p.value;
                                                            (v.start <= d && v.end > d || v.start >= d && v.start < f) && a.INVALIDPLAYLIST("DATERANGE tags with the same CLASS should not overlap")
                                                        }
                                                    } catch (e) {
                                                        m.e(e)
                                                    } finally {
                                                        m.f()
                                                    }
                                                    _.push({
                                                        start: d,
                                                        end: f
                                                    })
                                                } else n.set(l.classId, [{
                                                    start: d,
                                                    end: f
                                                }])
                                            }
                                        }
                                        i && !o && a.INVALIDPLAYLIST("If a Playlist contains an EXT-X-DATERANGE tag, it MUST also contain at least one EXT-X-PROGRAM-DATE-TIME tag.")
                                    }(o.segments), o.lowLatencyCompatibility && function(e, t) {
                                        var n = e.lowLatencyCompatibility,
                                            o = e.targetDuration,
                                            s = e.partTargetDuration,
                                            u = e.segments,
                                            c = e.renditionReports,
                                            l = n.canSkipUntil,
                                            d = n.holdBack,
                                            h = n.partHoldBack;
                                        if (l < 6 * o && a.INVALIDPLAYLIST("The Skip Boundary must be at least six times the EXT-X-TARGETDURATION."), d < 3 * o && a.INVALIDPLAYLIST("HOLD-BACK must be at least three times the EXT-X-TARGETDURATION."), t) {
                                            void 0 === s && a.INVALIDPLAYLIST("EXT-X-PART-INF is required if a Playlist contains one or more EXT-X-PART tags"), void 0 === h && a.INVALIDPLAYLIST("EXT-X-PART: PART-HOLD-BACK attribute is mandatory"), h < s && a.INVALIDPLAYLIST("PART-HOLD-BACK must be at least PART-TARGET");
                                            var f, _ = r(u.entries());
                                            try {
                                                for (_.s(); !(f = _.n()).done;) {
                                                    var p = i(f.value, 2),
                                                        m = p[0],
                                                        v = p[1].parts;
                                                    v.length > 0 && m < u.length - 3 && a.INVALIDPLAYLIST("Remove EXT-X-PART tags from the Playlist after they are greater than three target durations from the end of the Playlist.");
                                                    var g, y = r(v.entries());
                                                    try {
                                                        for (y.s(); !(g = y.n()).done;) {
                                                            var E = i(g.value, 2),
                                                                T = E[0],
                                                                S = E[1].duration;
                                                            void 0 !== S && (S > s && a.INVALIDPLAYLIST("PART-TARGET is the maximum duration of any Partial Segment"), T < v.length - 1 && S < .85 * s && a.INVALIDPLAYLIST("All Partial Segments except the last part of a segment must have a duration of at least 85% of PART-TARGET"))
                                                        }
                                                    } catch (e) {
                                                        y.e(e)
                                                    } finally {
                                                        y.f()
                                                    }
                                                }
                                            } catch (e) {
                                                _.e(e)
                                            } finally {
                                                _.f()
                                            }
                                        }
                                        var b, A = r(c);
                                        try {
                                            for (A.s(); !(b = A.n()).done;) {
                                                var I = b.value,
                                                    w = u[u.length - 1];
                                                I.lastMSN || (I.lastMSN = w.mediaSequenceNumber), !I.lastPart && w.parts.length > 0 && (I.lastPart = w.parts.length - 1)
                                            }
                                        } catch (e) {
                                            A.e(e)
                                        } finally {
                                            A.f()
                                        }
                                    }(o, f), o
                                }(e, t)).isIFrame && t.hasMap && t.compatibleVersion < 6 && (t.compatibleVersion = 6), t.compatibleVersion > 1 && (!n.version || n.version < t.compatibleVersion) && a.INVALIDPLAYLIST("EXT-X-VERSION needs to be ".concat(t.compatibleVersion, " or higher.")), n
                            }(function(e, t) {
                                var n = [];
                                return e.split("\n").forEach((function(e) {
                                    var r = e.trim();
                                    if (r)
                                        if (r.startsWith("#")) {
                                            if (r.startsWith("#EXT")) {
                                                var i = L(r, t);
                                                return void(i && n.push(i))
                                            }
                                        } else n.push(r)
                                })), 0 !== n.length && "EXTM3U" === n[0].name || a.INVALIDPLAYLIST("The EXTM3U tag MUST be the first line."), n
                            }(e, t), t);
                        return n.source = e, n
                    }
                },
                367: (e, t, n) => {
                    function r(e) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function i(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return n
                            }
                        }(e, t) || s(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function o(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = s(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, a = !0,
                            u = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                u = !0, o = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (u) throw o
                                }
                            }
                        }
                    }

                    function s(e, t) {
                        if (e) {
                            if ("string" == typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                        }
                    }

                    function a(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }

                    function u(e, t, n) {
                        return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                            var r = function(e, t) {
                                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _(e)););
                                return e
                            }(e, t);
                            if (r) {
                                var i = Object.getOwnPropertyDescriptor(r, t);
                                return i.get ? i.get.call(n) : i.value
                            }
                        })(e, t, n || e)
                    }

                    function c(e, t) {
                        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e) : t
                    }

                    function l(e) {
                        var t = "function" == typeof Map ? new Map : void 0;
                        return (l = function(e) {
                            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                            var n;
                            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                            if (void 0 !== t) {
                                if (t.has(e)) return t.get(e);
                                t.set(e, r)
                            }

                            function r() {
                                return d(e, arguments, _(this).constructor)
                            }
                            return r.prototype = Object.create(e.prototype, {
                                constructor: {
                                    value: r,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), f(r, e)
                        })(e)
                    }

                    function d(e, t, n) {
                        return (d = h() ? Reflect.construct : function(e, t, n) {
                            var r = [null];
                            r.push.apply(r, t);
                            var i = new(Function.bind.apply(e, r));
                            return n && f(i, n.prototype), i
                        }).apply(null, arguments)
                    }

                    function h() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }

                    function f(e, t) {
                        return (f = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function _(e) {
                        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var p = n(771),
                        m = ["#EXTINF", "#EXT-X-BYTERANGE", "#EXT-X-DISCONTINUITY", "#EXT-X-STREAM-INF", "#EXT-X-CUE-OUT", "#EXT-X-CUE-IN", "#EXT-X-KEY", "#EXT-X-MAP"],
                        v = ["#EXT-X-MEDIA"],
                        g = function(e) {
                            ! function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && f(e, t)
                            }(o, e);
                            var t, n, r, i = (t = o, n = h(), function() {
                                var e, r = _(t);
                                if (n) {
                                    var i = _(this).constructor;
                                    e = Reflect.construct(r, arguments, i)
                                } else e = r.apply(this, arguments);
                                return c(this, e)
                            });

                            function o(e) {
                                var t;
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, o), (t = i.call(this)).baseUri = e, t
                            }
                            return (r = [{
                                key: "push",
                                value: function() {
                                    for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    for (var i = function() {
                                            var t = a[s];
                                            if (!t.startsWith("#")) return u(_(o.prototype), "push", e).call(e, t), "continue";
                                            if (m.some((function(e) {
                                                    return t.startsWith(e)
                                                }))) return u(_(o.prototype), "push", e).call(e, t), "continue";
                                            if (e.includes(t)) {
                                                if (v.some((function(e) {
                                                        return t.startsWith(e)
                                                    }))) return "continue";
                                                p.INVALIDPLAYLIST("Redundant item (".concat(t, ")"))
                                            }
                                            u(_(o.prototype), "push", e).call(e, t)
                                        }, s = 0, a = n; s < a.length; s++) i()
                                }
                            }]) && function(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }(o.prototype, r), o
                        }(l(Array));

                    function y(e, t) {
                        var n = 1e3;
                        t && (n = Math.pow(10, t));
                        var r = Math.round(e * n) / n;
                        return t ? r.toFixed(t) : r
                    }

                    function E(e) {
                        var t = e.toString(10),
                            n = t.indexOf(".");
                        return -1 === n ? 0 : t.length - n - 1
                    }

                    function T(e) {
                        var t = ['DATA-ID="'.concat(e.id, '"')];
                        return e.language && t.push('LANGUAGE="'.concat(e.language, '"')), e.value ? t.push('VALUE="'.concat(e.value, '"')) : e.uri && t.push('URI="'.concat(e.uri, '"')), "#EXT-X-SESSION-DATA:".concat(t.join(","))
                    }

                    function S(e, t) {
                        var n = t ? "#EXT-X-SESSION-KEY" : "#EXT-X-KEY",
                            r = ["METHOD=".concat(e.method)];
                        return e.uri && r.push('URI="'.concat(e.uri, '"')), e.iv && (16 !== e.iv.length && p.INVALIDPLAYLIST("IV must be a 128-bit unsigned integer"), r.push("IV=".concat(p.byteSequenceToHex(e.iv)))), e.format && r.push('KEYFORMAT="'.concat(e.format, '"')), e.formatVersion && r.push('KEYFORMATVERSIONS="'.concat(e.formatVersion, '"')), "".concat(n, ":").concat(r.join(","))
                    }

                    function b(e, t) {
                        var n = t.isIFrameOnly ? "#EXT-X-I-FRAME-STREAM-INF" : "#EXT-X-STREAM-INF",
                            r = ["BANDWIDTH=".concat(t.bandwidth)];
                        if (t.averageBandwidth && r.push("AVERAGE-BANDWIDTH=".concat(t.averageBandwidth)), t.isIFrameOnly && r.push('URI="'.concat(t.uri, '"')), t.codecs && r.push('CODECS="'.concat(t.codecs, '"')), t.resolution && r.push("RESOLUTION=".concat(t.resolution.width, "x").concat(t.resolution.height)), t.frameRate && r.push("FRAME-RATE=".concat(y(t.frameRate, 3))), t.hdcpLevel && r.push("HDCP-LEVEL=".concat(t.hdcpLevel)), t.audio.length > 0) {
                            r.push('AUDIO="'.concat(t.audio[0].groupId, '"'));
                            var i, s = o(t.audio);
                            try {
                                for (s.s(); !(i = s.n()).done;) {
                                    var a = i.value;
                                    e.push(A(a))
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                        }
                        if (t.video.length > 0) {
                            r.push('VIDEO="'.concat(t.video[0].groupId, '"'));
                            var u, c = o(t.video);
                            try {
                                for (c.s(); !(u = c.n()).done;) {
                                    var l = u.value;
                                    e.push(A(l))
                                }
                            } catch (e) {
                                c.e(e)
                            } finally {
                                c.f()
                            }
                        }
                        if (t.subtitles.length > 0) {
                            r.push('SUBTITLES="'.concat(t.subtitles[0].groupId, '"'));
                            var d, h = o(t.subtitles);
                            try {
                                for (h.s(); !(d = h.n()).done;) {
                                    var f = d.value;
                                    e.push(A(f))
                                }
                            } catch (e) {
                                h.e(e)
                            } finally {
                                h.f()
                            }
                        }
                        if (p.getOptions().allowClosedCaptionsNone && 0 === t.closedCaptions.length) r.push("CLOSED-CAPTIONS=NONE");
                        else if (t.closedCaptions.length > 0) {
                            r.push('CLOSED-CAPTIONS="'.concat(t.closedCaptions[0].groupId, '"'));
                            var _, m = o(t.closedCaptions);
                            try {
                                for (m.s(); !(_ = m.n()).done;) {
                                    var v = _.value;
                                    e.push(A(v))
                                }
                            } catch (e) {
                                m.e(e)
                            } finally {
                                m.f()
                            }
                        }
                        e.push("".concat(n, ":").concat(r.join(","))), t.isIFrameOnly || e.push("".concat(t.uri))
                    }

                    function A(e) {
                        var t = ["TYPE=".concat(e.type), 'GROUP-ID="'.concat(e.groupId, '"'), 'NAME="'.concat(e.name, '"')];
                        return void 0 !== e.isDefault && t.push("DEFAULT=".concat(e.isDefault ? "YES" : "NO")), void 0 !== e.autoselect && t.push("AUTOSELECT=".concat(e.autoselect ? "YES" : "NO")), void 0 !== e.forced && t.push("FORCED=".concat(e.forced ? "YES" : "NO")), e.language && t.push('LANGUAGE="'.concat(e.language, '"')), e.assocLanguage && t.push('ASSOC-LANGUAGE="'.concat(e.assocLanguage, '"')), e.instreamId && t.push('INSTREAM-ID="'.concat(e.instreamId, '"')), e.characteristics && t.push('CHARACTERISTICS="'.concat(e.characteristics, '"')), e.channels && t.push('CHANNELS="'.concat(e.channels, '"')), e.uri && t.push('URI="'.concat(e.uri, '"')), "#EXT-X-MEDIA:".concat(t.join(","))
                    }

                    function I(e, t, n, r) {
                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                            o = !1;
                        if (t.byterange && e.push("#EXT-X-BYTERANGE:".concat(R(t.byterange))), t.discontinuity && e.push("#EXT-X-DISCONTINUITY"), t.key) {
                            var s = S(t.key);
                            s !== n && (e.push(s), n = s)
                        }
                        if (t.map) {
                            var a = w(t.map);
                            a !== r && (e.push(a), r = a)
                        }
                        if (t.programDateTime && e.push("#EXT-X-PROGRAM-DATE-TIME:".concat(p.formatDate(t.programDateTime))), t.dateRange && e.push(k(t.dateRange)), t.markers.length > 0 && P(e, t.markers), t.parts.length > 0 && (o = D(e, t.parts)), o) return [n, r];
                        var u = i < 3 ? Math.round(t.duration) : y(t.duration, E(t.duration));
                        return e.push("#EXTINF:".concat(u, ",").concat(unescape(encodeURIComponent(t.title || "")))), Array.prototype.push.call(e, "".concat(t.uri)), [n, r]
                    }

                    function w(e) {
                        var t = ['URI="'.concat(e.uri, '"')];
                        return e.byterange && t.push('BYTERANGE="'.concat(R(e.byterange), '"')), "#EXT-X-MAP:".concat(t.join(","))
                    }

                    function R(e) {
                        var t = e.offset,
                            n = e.length;
                        return "".concat(n, "@").concat(t)
                    }

                    function k(e) {
                        var t = ['ID="'.concat(e.id, '"')];
                        return e.start && t.push('START-DATE="'.concat(p.formatDate(e.start), '"')), e.end && t.push('END-DATE="'.concat(e.end, '"')), e.duration && t.push("DURATION=".concat(e.duration)), e.plannedDuration && t.push("PLANNED-DURATION=".concat(e.plannedDuration)), e.classId && t.push('CLASS="'.concat(e.classId, '"')), e.endOnNext && t.push("END-ON-NEXT=YES"), Object.keys(e.attributes).forEach((function(n) {
                            n.startsWith("X-") ? "number" == typeof e.attributes[n] ? t.push("".concat(n, "=").concat(e.attributes[n])) : t.push("".concat(n, '="').concat(e.attributes[n], '"')) : n.startsWith("SCTE35-") && t.push("".concat(n, "=").concat(p.byteSequenceToHex(e.attributes[n])))
                        })), "#EXT-X-DATERANGE:".concat(t.join(","))
                    }

                    function P(e, t) {
                        var n, r = o(t);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var i = n.value;
                                if ("OUT" === i.type) e.push("#EXT-X-CUE-OUT:".concat(i.duration));
                                else if ("IN" === i.type) e.push("#EXT-X-CUE-IN");
                                else if ("RAW" === i.type) {
                                    var s = i.value ? ":".concat(i.value) : "";
                                    e.push("#".concat(i.tagName).concat(s))
                                }
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    }

                    function D(e, t) {
                        var n, r = !1,
                            i = o(t);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var s = n.value;
                                if (s.hint) {
                                    var a = [];
                                    if (a.push("TYPE=PART"), a.push('URI="'.concat(s.uri, '"')), s.byterange) {
                                        var u = s.byterange,
                                            c = u.offset,
                                            l = u.length;
                                        a.push("BYTERANGE-START=".concat(c)), l && a.push("BYTERANGE-LENGTH=".concat(l))
                                    }
                                    e.push("#EXT-X-PRELOAD-HINT:".concat(a.join(","))), r = !0
                                } else {
                                    var d = [];
                                    d.push("DURATION=".concat(s.duration)), d.push('URI="'.concat(s.uri, '"')), s.byterange && d.push("BYTERANGE=".concat(R(s.byterange))), s.independent && d.push("INDEPENDENT=YES"), s.gap && d.push("GAP=YES"), e.push("#EXT-X-PART:".concat(d.join(",")))
                                }
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        return r
                    }
                    e.exports = function(e) {
                        p.PARAMCHECK(e), p.ASSERT("Not a playlist", "playlist" === e.type);
                        var t = new g(e.uri);
                        return t.push("#EXTM3U"), e.version && t.push("#EXT-X-VERSION:".concat(e.version)), e.independentSegments && t.push("#EXT-X-INDEPENDENT-SEGMENTS"), e.start && t.push("#EXT-X-START:TIME-OFFSET=".concat(y(e.start.offset)).concat(e.start.precise ? ",PRECISE=YES" : "")), e.isMasterPlaylist ? function(e, t) {
                            var n, r = o(t.sessionDataList);
                            try {
                                for (r.s(); !(n = r.n()).done;) {
                                    var i = n.value;
                                    e.push(T(i))
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            var s, a = o(t.sessionKeyList);
                            try {
                                for (a.s(); !(s = a.n()).done;) {
                                    var u = s.value;
                                    e.push(S(u, !0))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                            var c, l = o(t.variants);
                            try {
                                for (l.s(); !(c = l.n()).done;) b(e, c.value)
                            } catch (e) {
                                l.e(e)
                            } finally {
                                l.f()
                            }
                        }(t, e) : function(e, t) {
                            var n = "",
                                r = "";
                            if (t.targetDuration && e.push("#EXT-X-TARGETDURATION:".concat(t.targetDuration)), t.lowLatencyCompatibility) {
                                var s = t.lowLatencyCompatibility,
                                    a = s.canBlockReload,
                                    u = s.canSkipUntil,
                                    c = s.holdBack,
                                    l = s.partHoldBack,
                                    d = [];
                                d.push("CAN-BLOCK-RELOAD=".concat(a ? "YES" : "NO")), void 0 !== u && d.push("CAN-SKIP-UNTIL=".concat(u)), void 0 !== c && d.push("HOLD-BACK=".concat(c)), void 0 !== l && d.push("PART-HOLD-BACK=".concat(l)), e.push("#EXT-X-SERVER-CONTROL:".concat(d.join(",")))
                            }
                            t.partTargetDuration && e.push("#EXT-X-PART-INF:PART-TARGET=".concat(t.partTargetDuration)), t.mediaSequenceBase && e.push("#EXT-X-MEDIA-SEQUENCE:".concat(t.mediaSequenceBase)), t.discontinuitySequenceBase && e.push("#EXT-X-DISCONTINUITY-SEQUENCE:".concat(t.discontinuitySequenceBase)), t.playlistType && e.push("#EXT-X-PLAYLIST-TYPE:".concat(t.playlistType)), t.isIFrame && e.push("#EXT-X-I-FRAMES-ONLY"), t.skip > 0 && e.push("#EXT-X-SKIP:SKIPPED-SEGMENTS=".concat(t.skip));
                            var h, f = o(t.segments);
                            try {
                                for (f.s(); !(h = f.n()).done;) {
                                    var _ = i(I(e, h.value, n, r, t.version), 2);
                                    n = _[0], r = _[1]
                                }
                            } catch (e) {
                                f.e(e)
                            } finally {
                                f.f()
                            }
                            t.endlist && e.push("#EXT-X-ENDLIST");
                            var p, m = o(t.renditionReports);
                            try {
                                for (m.s(); !(p = m.n()).done;) {
                                    var v = p.value,
                                        g = [];
                                    g.push('URI="'.concat(v.uri, '"')), g.push("LAST-MSN=".concat(v.lastMSN)), void 0 !== v.lastPart && g.push("LAST-PART=".concat(v.lastPart)), e.push("#EXT-X-RENDITION-REPORT:".concat(g.join(",")))
                                }
                            } catch (e) {
                                m.e(e)
                            } finally {
                                m.f()
                            }
                        }(t, e), t.join("\n")
                    }
                },
                890: (e, t, n) => {
                    function r(e) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function i(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && function(e, t) {
                            (Object.setPrototypeOf || function(e, t) {
                                return e.__proto__ = t, e
                            })(e, t)
                        }(e, t)
                    }

                    function o(e) {
                        var t = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                            } catch (e) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = a(e);
                            if (t) {
                                var i = a(this).constructor;
                                n = Reflect.construct(r, arguments, i)
                            } else n = r.apply(this, arguments);
                            return s(this, n)
                        }
                    }

                    function s(e, t) {
                        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e) : t
                    }

                    function a(e) {
                        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }

                    function u(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    var c = n(771),
                        l = function e(t) {
                            u(this, e), c.PARAMCHECK(t), this.type = t
                        },
                        d = function(e) {
                            i(n, e);
                            var t = o(n);

                            function n(e) {
                                var r, i = e.isMasterPlaylist,
                                    o = e.uri,
                                    s = e.version,
                                    a = e.independentSegments,
                                    l = void 0 !== a && a,
                                    d = e.start,
                                    h = e.source;
                                return u(this, n), r = t.call(this, "playlist"), c.PARAMCHECK(i), r.isMasterPlaylist = i, r.uri = o, r.version = s, r.independentSegments = l, r.start = d, r.source = h, r
                            }
                            return n
                        }(l),
                        h = function(e) {
                            i(n, e);
                            var t = o(n);

                            function n() {
                                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                u(this, n), r.isMasterPlaylist = !0, e = t.call(this, r);
                                var i = r.variants,
                                    o = void 0 === i ? [] : i,
                                    s = r.currentVariant,
                                    a = r.sessionDataList,
                                    c = void 0 === a ? [] : a,
                                    l = r.sessionKeyList,
                                    d = void 0 === l ? [] : l;
                                return e.variants = o, e.currentVariant = s, e.sessionDataList = c, e.sessionKeyList = d, e
                            }
                            return n
                        }(d),
                        f = function(e) {
                            i(n, e);
                            var t = o(n);

                            function n() {
                                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                u(this, n), r.isMasterPlaylist = !1, e = t.call(this, r);
                                var i = r.targetDuration,
                                    o = r.mediaSequenceBase,
                                    s = void 0 === o ? 0 : o,
                                    a = r.discontinuitySequenceBase,
                                    c = void 0 === a ? 0 : a,
                                    l = r.endlist,
                                    d = void 0 !== l && l,
                                    h = r.playlistType,
                                    f = r.isIFrame,
                                    _ = r.segments,
                                    p = void 0 === _ ? [] : _,
                                    m = r.lowLatencyCompatibility,
                                    v = r.partTargetDuration,
                                    g = r.renditionReports,
                                    y = void 0 === g ? [] : g,
                                    E = r.skip,
                                    T = void 0 === E ? 0 : E,
                                    S = r.hash;
                                return e.targetDuration = i, e.mediaSequenceBase = s, e.discontinuitySequenceBase = c, e.endlist = d, e.playlistType = h, e.isIFrame = f, e.segments = p, e.lowLatencyCompatibility = m, e.partTargetDuration = v, e.renditionReports = y, e.skip = T, e.hash = S, e
                            }
                            return n
                        }(d),
                        _ = function(e) {
                            i(n, e);
                            var t = o(n);

                            function n(e) {
                                var r, i = e.uri,
                                    o = e.mimeType,
                                    s = e.data,
                                    a = e.duration,
                                    c = e.title,
                                    l = e.byterange,
                                    d = e.discontinuity,
                                    h = e.mediaSequenceNumber,
                                    f = void 0 === h ? 0 : h,
                                    _ = e.discontinuitySequence,
                                    p = void 0 === _ ? 0 : _,
                                    m = e.key,
                                    v = e.map,
                                    g = e.programDateTime,
                                    y = e.dateRange,
                                    E = e.markers,
                                    T = void 0 === E ? [] : E,
                                    S = e.parts,
                                    b = void 0 === S ? [] : S;
                                return u(this, n), (r = t.call(this, "segment")).uri = i, r.mimeType = o, r.data = s, r.duration = a, r.title = c, r.byterange = l, r.discontinuity = d, r.mediaSequenceNumber = f, r.discontinuitySequence = p, r.key = m, r.map = v, r.programDateTime = g, r.dateRange = y, r.markers = T, r.parts = b, r
                            }
                            return n
                        }(l),
                        p = function(e) {
                            i(n, e);
                            var t = o(n);

                            function n(e) {
                                var r, i = e.hint,
                                    o = void 0 !== i && i,
                                    s = e.uri,
                                    a = e.duration,
                                    l = e.independent,
                                    d = e.byterange,
                                    h = e.gap;
                                return u(this, n), r = t.call(this, "part"), c.PARAMCHECK(s), r.hint = o, r.uri = s, r.duration = a, r.independent = l, r.duration = a, r.byterange = d, r.gap = h, r
                            }
                            return n
                        }(l);
                    e.exports = {
                        Rendition: function e(t) {
                            var n = t.type,
                                r = t.uri,
                                i = t.groupId,
                                o = t.language,
                                s = t.assocLanguage,
                                a = t.name,
                                l = t.isDefault,
                                d = t.autoselect,
                                h = t.forced,
                                f = t.instreamId,
                                _ = t.characteristics,
                                p = t.channels;
                            u(this, e), c.PARAMCHECK(n, i, a), c.CONDITIONALASSERT(["SUBTITLES" === n, r], ["CLOSED-CAPTIONS" === n, f], ["CLOSED-CAPTIONS" === n, !r], [h, "SUBTITLES" === n]), this.type = n, this.uri = r, this.groupId = i, this.language = o, this.assocLanguage = s, this.name = a, this.isDefault = l, this.autoselect = d, this.forced = h, this.instreamId = f, this.characteristics = _, this.channels = p
                        },
                        Variant: function e(t) {
                            var n = t.uri,
                                r = t.isIFrameOnly,
                                i = void 0 !== r && r,
                                o = t.bandwidth,
                                s = t.averageBandwidth,
                                a = t.codecs,
                                l = t.resolution,
                                d = t.frameRate,
                                h = t.hdcpLevel,
                                f = t.audio,
                                _ = void 0 === f ? [] : f,
                                p = t.video,
                                m = void 0 === p ? [] : p,
                                v = t.subtitles,
                                g = void 0 === v ? [] : v,
                                y = t.closedCaptions,
                                E = void 0 === y ? [] : y,
                                T = t.currentRenditions,
                                S = void 0 === T ? {
                                    audio: 0,
                                    video: 0,
                                    subtitles: 0,
                                    closedCaptions: 0
                                } : T;
                            u(this, e), c.PARAMCHECK(n, o), this.uri = n, this.isIFrameOnly = i, this.bandwidth = o, this.averageBandwidth = s, this.codecs = a, this.resolution = l, this.frameRate = d, this.hdcpLevel = h, this.audio = _, this.video = m, this.subtitles = g, this.closedCaptions = E, this.currentRenditions = S
                        },
                        SessionData: function e(t) {
                            var n = t.id,
                                r = t.value,
                                i = t.uri,
                                o = t.language;
                            u(this, e), c.PARAMCHECK(n, r || i), c.ASSERT("SessionData cannot have both value and uri, shoud be either.", !(r && i)), this.id = n, this.value = r, this.uri = i, this.language = o
                        },
                        Key: function e(t) {
                            var n = t.method,
                                r = t.uri,
                                i = t.iv,
                                o = t.format,
                                s = t.formatVersion;
                            u(this, e), c.PARAMCHECK(n), c.CONDITIONALPARAMCHECK(["NONE" !== n, r]), c.CONDITIONALASSERT(["NONE" === n, !(r || i || o || s)]), this.method = n, this.uri = r, this.iv = i, this.format = o, this.formatVersion = s
                        },
                        MediaInitializationSection: function e(t) {
                            var n = t.hint,
                                r = void 0 !== n && n,
                                i = t.uri,
                                o = t.mimeType,
                                s = t.byterange;
                            u(this, e), c.PARAMCHECK(i), this.hint = r, this.uri = i, this.mimeType = o, this.byterange = s
                        },
                        DateRange: function e(t) {
                            var n = t.id,
                                r = t.classId,
                                i = t.start,
                                o = t.end,
                                s = t.duration,
                                a = t.plannedDuration,
                                l = t.endOnNext,
                                d = t.attributes,
                                h = void 0 === d ? {} : d;
                            u(this, e), c.PARAMCHECK(n), c.CONDITIONALPARAMCHECK([!0 === l, r]), c.CONDITIONALASSERT([o, i], [o, i <= o], [s, s >= 0], [a, a >= 0]), this.id = n, this.classId = r, this.start = i, this.end = o, this.duration = s, this.plannedDuration = a, this.endOnNext = l, this.attributes = h
                        },
                        SpliceInfo: function e(t) {
                            var n = t.type,
                                r = t.duration,
                                i = t.tagName,
                                o = t.value;
                            u(this, e), c.PARAMCHECK(n), c.CONDITIONALPARAMCHECK(["OUT" === n, r]), c.CONDITIONALPARAMCHECK(["RAW" === n, i]), this.type = n, this.duration = r, this.tagName = i, this.value = o
                        },
                        Playlist: d,
                        MasterPlaylist: h,
                        MediaPlaylist: f,
                        Segment: _,
                        PartialSegment: p,
                        RenditionReport: function e(t) {
                            var n = t.uri,
                                r = t.lastMSN,
                                i = t.lastPart;
                            u(this, e), c.PARAMCHECK(n), this.uri = n, this.lastMSN = r, this.lastPart = i
                        }
                    }
                },
                771: e => {
                    function t(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return n
                            }
                        }(e, t) || r(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function n(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var i = 0,
                                    o = function() {};
                                return {
                                    s: o,
                                    n: function() {
                                        return i >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[i++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: o
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var s, a = !0,
                            u = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                u = !0, s = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (u) throw s
                                }
                            }
                        }
                    }

                    function r(e, t) {
                        if (e) {
                            if ("string" == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                        }
                    }

                    function i(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }
                    var o = {};

                    function s(e) {
                        if (o.strictMode) throw e;
                        o.silent
                    }

                    function a(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                        if ("number" == typeof e) return e;
                        var n = 10 === t ? Number.parseFloat(e, t) : Number.parseInt(e, t);
                        return Number.isNaN(n) ? 0 : n
                    }
                    e.exports = {
                        THROW: s,
                        ASSERT: function(e) {
                            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                            var a, u = n(i.entries());
                            try {
                                for (u.s(); !(a = u.n()).done;) {
                                    var c = t(a.value, 2),
                                        l = c[0],
                                        d = c[1];
                                    d || s(new Error("".concat(e, " : Failed at [").concat(l, "]")))
                                }
                            } catch (e) {
                                u.e(e)
                            } finally {
                                u.f()
                            }
                        },
                        CONDITIONALASSERT: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var o, a = n(r.entries());
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var u = t(o.value, 2),
                                        c = u[0],
                                        l = t(u[1], 2),
                                        d = l[0],
                                        h = l[1];
                                    d && (h || s(new Error("Conditional Assert : Failed at [".concat(c, "]"))))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        PARAMCHECK: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var o, a = n(r.entries());
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var u = t(o.value, 2),
                                        c = u[0],
                                        l = u[1];
                                    void 0 === l && s(new Error("Param Check : Failed at [".concat(c, "]")))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        CONDITIONALPARAMCHECK: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var o, a = n(r.entries());
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var u = t(o.value, 2),
                                        c = u[0],
                                        l = t(u[1], 2),
                                        d = l[0],
                                        h = l[1];
                                    d && void 0 === h && s(new Error("Conditional Param Check : Failed at [".concat(c, "]")))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        INVALIDPLAYLIST: function(e) {
                            s(new Error("Invalid Playlist : ".concat(e)))
                        },
                        toNumber: a,
                        hexToByteSequence: function(e) {
                            (e.startsWith("0x") || e.startsWith("0X")) && (e = e.slice(2));
                            for (var t = [], n = 0; n < e.length; n += 2) t.push(a(e.slice(n, n + 2), 16));
                            return Buffer.from(t)
                        },
                        byteSequenceToHex: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length;
                            n <= t && s(new Error("end must be larger than start : start=".concat(t, ", end=").concat(n)));
                            for (var r = [], i = t; i < n; i++) r.push("0".concat((255 & e[i]).toString(16).toUpperCase()).slice(-2));
                            return "0x".concat(r.join(""))
                        },
                        tryCatch: function(e, t) {
                            try {
                                return e()
                            } catch (e) {
                                return t(e)
                            }
                        },
                        splitAt: function(e, t) {
                            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = -1, i = 0, o = 0; i < e.length; i++)
                                if (e[i] === t) {
                                    if (o++ === n) return [e.slice(0, i), e.slice(i + 1)];
                                    r = i
                                }
                            return -1 !== r ? [e.slice(0, r), e.slice(r + 1)] : [e]
                        },
                        trim: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
                            return e ? (e = e.trim(), " " === t || (e.startsWith(t) && (e = e.slice(1)), e.endsWith(t) && (e = e.slice(0, -1))), e) : e
                        },
                        splitByCommaWithPreservingQuotes: function(e) {
                            for (var t = [], n = !0, r = 0, i = [], o = 0; o < e.length; o++) {
                                var s = e[o];
                                n && "," === s ? (t.push(e.slice(r, o).trim()), r = o + 1) : '"' !== s && "'" !== s || (n ? (i.push(s), n = !1) : s === i[i.length - 1] ? (i.pop(), n = !0) : i.push(s))
                            }
                            return t.push(e.slice(r).trim()), t
                        },
                        camelify: function(e) {
                            var t, r = [],
                                i = !1,
                                o = n(e);
                            try {
                                for (o.s(); !(t = o.n()).done;) {
                                    var s = t.value;
                                    "-" !== s && "_" !== s ? i ? (r.push(s.toUpperCase()), i = !1) : r.push(s.toLowerCase()) : i = !0
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                            return r.join("")
                        },
                        formatDate: function(e) {
                            var t = e.getUTCFullYear(),
                                n = ("0" + (e.getUTCMonth() + 1)).slice(-2),
                                r = ("0" + e.getUTCDate()).slice(-2),
                                i = ("0" + e.getUTCHours()).slice(-2),
                                o = ("0" + e.getUTCMinutes()).slice(-2),
                                s = ("0" + e.getUTCSeconds()).slice(-2),
                                a = ("00" + e.getUTCMilliseconds()).slice(-3);
                            return "".concat(t, "-").concat(n, "-").concat(r, "T").concat(i, ":").concat(o, ":").concat(s, ".").concat(a, "Z")
                        },
                        hasOwnProp: function(e, t) {
                            return Object.hasOwnProperty.call(e, t)
                        },
                        setOptions: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            o = Object.assign(o, e)
                        },
                        getOptions: function() {
                            return Object.assign({}, o)
                        }
                    }
                }
            }, t = {},
            function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {
                    exports: {}
                };
                return e[r](i, i.exports, n), i.exports
            }(851);
        var e, t
    }()
}));

function U_() {
    return (U_ = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}
var F_, j_ = ["bottom", "height", "left", "right", "top", "width"],
    B_ = new Map,
    V_ = "undefined" != typeof window ? n_.useLayoutEffect : n_.useEffect;

function H_(e, t) {
    void 0 === t && (t = {
        width: 0,
        height: 0
    });
    var n = n_.useState(e.current),
        r = n[0],
        i = n[1],
        o = n_.useReducer(X_, t),
        s = o[0],
        a = o[1],
        u = n_.useRef(!1);
    return V_((function() {
        e.current !== r && i(e.current)
    })), V_((function() {
        if (r && !u.current) {
            u.current = !0;
            var e = r.getBoundingClientRect();
            a({
                rect: e
            })
        }
    }), [r]), n_.useEffect((function() {
        if (r) {
            var e = function(e, t) {
                return {
                    observe: function() {
                        var n = 0 === B_.size;
                        B_.has(e) ? B_.get(e).callbacks.push(t) : B_.set(e, {
                            rect: void 0,
                            hasRectChanged: !1,
                            callbacks: [t]
                        }), n && function e() {
                            var t = [];
                            B_.forEach((function(e, n) {
                                var r = n.getBoundingClientRect();
                                (function(e, t) {
                                    return void 0 === e && (e = {}), void 0 === t && (t = {}), j_.some((function(n) {
                                        return e[n] !== t[n]
                                    }))
                                })(r, e.rect) && (e.rect = r, t.push(e))
                            })), t.forEach((function(e) {
                                e.callbacks.forEach((function(t) {
                                    return t(e.rect)
                                }))
                            })), F_ = window.requestAnimationFrame(e)
                        }()
                    },
                    unobserve: function() {
                        var n = B_.get(e);
                        if (n) {
                            var r = n.callbacks.indexOf(t);
                            r >= 0 && n.callbacks.splice(r, 1), n.callbacks.length || B_.delete(e), B_.size || cancelAnimationFrame(F_)
                        }
                    }
                }
            }(r, (function(e) {
                a({
                    rect: e
                })
            }));
            return e.observe(),
                function() {
                    e.unobserve()
                }
        }
    }), [r]), s
}

function X_(e, t) {
    var n = t.rect;
    return e.height !== n.height || e.width !== n.width ? n : e
}
var q_ = function() {
        return 50
    },
    G_ = function(e) {
        return e
    },
    W_ = function(e, t) {
        return e[t ? "offsetWidth" : "offsetHeight"]
    },
    K_ = function(e) {
        for (var t = Math.max(e.start - e.overscan, 0), n = Math.min(e.end + e.overscan, e.size - 1), r = [], i = t; i <= n; i++) r.push(i);
        return r
    };

function Y_(e) {
    var t, n = e.size,
        r = void 0 === n ? 0 : n,
        i = e.estimateSize,
        o = void 0 === i ? q_ : i,
        s = e.overscan,
        a = void 0 === s ? 1 : s,
        u = e.paddingStart,
        c = void 0 === u ? 0 : u,
        l = e.paddingEnd,
        d = void 0 === l ? 0 : l,
        h = e.parentRef,
        f = e.horizontal,
        _ = e.scrollToFn,
        p = e.useObserver,
        m = e.initialRect,
        v = e.onScrollElement,
        g = e.scrollOffsetFn,
        y = e.keyExtractor,
        E = void 0 === y ? G_ : y,
        T = e.measureSize,
        S = void 0 === T ? W_ : T,
        b = e.rangeExtractor,
        A = void 0 === b ? K_ : b,
        I = f ? "width" : "height",
        w = f ? "scrollLeft" : "scrollTop",
        R = n_.useRef({
            scrollOffset: 0,
            measurements: []
        }),
        k = n_.useState(0),
        P = k[0],
        D = k[1];
    R.current.scrollOffset = P;
    var O = (p || H_)(h, m)[I];
    R.current.outerSize = O;
    var L = n_.useCallback((function(e) {
            h.current && (h.current[w] = e)
        }), [h, w]),
        C = _ || L;
    _ = n_.useCallback((function(e) {
        C(e, L)
    }), [L, C]);
    var M = n_.useState({}),
        N = M[0],
        x = M[1],
        U = n_.useCallback((function() {
            return x({})
        }), []),
        F = n_.useRef([]),
        j = n_.useMemo((function() {
            var e = F.current.length > 0 ? Math.min.apply(Math, F.current) : 0;
            F.current = [];
            for (var t = R.current.measurements.slice(0, e), n = e; n < r; n++) {
                var i = E(n),
                    s = N[i],
                    a = t[n - 1] ? t[n - 1].end : c,
                    u = "number" == typeof s ? s : o(n),
                    l = a + u;
                t[n] = {
                    index: n,
                    start: a,
                    size: u,
                    end: l,
                    key: i
                }
            }
            return t
        }), [o, N, c, r, E]),
        B = ((null == (t = j[r - 1]) ? void 0 : t.end) || c) + d;
    R.current.measurements = j, R.current.totalSize = B;
    var V = v ? v.current : h.current,
        H = n_.useRef(g);
    H.current = g, V_((function() {
        if (V) {
            var e = function(e) {
                var t = H.current ? H.current(e) : V[w];
                D(t)
            };
            return e(), V.addEventListener("scroll", e, {
                    capture: !1,
                    passive: !0
                }),
                function() {
                    V.removeEventListener("scroll", e)
                }
        }
        D(0)
    }), [V, w]);
    var X = function(e) {
            for (var t = e.measurements, n = e.outerSize, r = e.scrollOffset, i = t.length - 1, o = function(e, t, n, r) {
                    for (; e <= t;) {
                        var i = (e + t) / 2 | 0,
                            o = n(i);
                        if (o < r) e = i + 1;
                        else {
                            if (!(o > r)) return i;
                            t = i - 1
                        }
                    }
                    return e > 0 ? e - 1 : 0
                }(0, i, (function(e) {
                    return t[e].start
                }), r), s = o; s < i && t[s].end < r + n;) s++;
            return {
                start: o,
                end: s
            }
        }(R.current),
        q = X.start,
        G = X.end,
        W = n_.useMemo((function() {
            return A({
                start: q,
                end: G,
                overscan: a,
                size: j.length
            })
        }), [q, G, a, j.length, A]),
        K = n_.useRef(S);
    K.current = S;
    var Y = n_.useMemo((function() {
            for (var e = [], t = function(t, n) {
                    var r = W[t],
                        i = U_(U_({}, j[r]), {}, {
                            measureRef: function(e) {
                                if (e) {
                                    var t = K.current(e, f);
                                    if (t !== i.size) {
                                        var n = R.current.scrollOffset;
                                        i.start < n && L(n + (t - i.size)), F.current.push(r), x((function(e) {
                                            var n;
                                            return U_(U_({}, e), {}, ((n = {})[i.key] = t, n))
                                        }))
                                    }
                                }
                            }
                        });
                    e.push(i)
                }, n = 0, r = W.length; n < r; n++) t(n);
            return e
        }), [W, L, f, j]),
        $ = n_.useRef(!1);
    V_((function() {
        $.current && x({}), $.current = !0
    }), [o]);
    var z = n_.useCallback((function(e, t) {
            var n = (void 0 === t ? {} : t).align,
                r = void 0 === n ? "start" : n,
                i = R.current,
                o = i.scrollOffset,
                s = i.outerSize;
            "auto" === r && (r = e <= o ? "start" : e >= o + s ? "end" : "start"), "start" === r ? _(e) : "end" === r ? _(e - s) : "center" === r && _(e - s / 2)
        }), [_]),
        Q = n_.useCallback((function(e, t) {
            var n = void 0 === t ? {} : t,
                i = n.align,
                o = void 0 === i ? "auto" : i,
                s = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(n, ["align"]),
                a = R.current,
                u = a.measurements,
                c = a.scrollOffset,
                l = a.outerSize,
                d = u[Math.max(0, Math.min(e, r - 1))];
            if (d) {
                if ("auto" === o)
                    if (d.end >= c + l) o = "end";
                    else {
                        if (!(d.start <= c)) return;
                        o = "start"
                    }
                var h = "center" === o ? d.start + d.size / 2 : "end" === o ? d.end : d.start;
                z(h, U_({
                    align: o
                }, s))
            }
        }), [z, r]),
        J = n_.useCallback((function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            Q.apply(void 0, t), requestAnimationFrame((function() {
                Q.apply(void 0, t)
            }))
        }), [Q]);
    return {
        virtualItems: Y,
        totalSize: B,
        scrollToOffset: z,
        scrollToIndex: J,
        measure: U
    }
}
export {
    Nl as $, Qa as A, au as B, Sc as C, uu as D, fo as E, eu as F, Pl as G, ou as H, du as I, vo as J, yo as K, Rc as L, go as M, Xo as N, qo as O, Ja as P, Za as Q, su as R, ru as S, po as T, Ho as U, lo as V, Vo as W, Oe as X, Cn as Y, ln as Z, Ee as _, Ge as a, ze as a$, xl as a0, o as a1, rd as a2, id as a3, De as a4, dd as a5, kd as a6, Rd as a7, no as a8, wc as a9, ar as aA, lr as aB, ur as aC, yc as aD, Le as aE, ld as aF, y_ as aG, mo as aH, Ce as aI, Fe as aJ, Qh as aK, vf as aL, mf as aM, L_ as aN, xh as aO, zh as aP, E_ as aQ, yt as aR, yf as aS, Hf as aT, N_ as aU, At as aV, ie as aW, x_ as aX, Ae as aY, Ie as aZ, ye as a_, Od as aa, Dc as ab, je as ac, Ic as ad, xu as ae, We as af, Dd as ag, Md as ah, Cd as ai, Jd as aj, gh as ak, dh as al, Eh as am, u_ as an, o_ as ao, i_ as ap, ge as aq, lf as ar, _f as as, hf as at, kh as au, Of as av, wh as aw, p_ as ax, Yh as ay, Gu as az, Ke as b, se as b0, $e as b1, Y_ as b2, pf as b3, ji as c, Xe as d, yu as e, oe as f, qn as g, be as h, Ec as i, vl as j, de as k, ue as l, $u as m, Mc as n, dr as o, qe as p, he as q, pt as r, Bt as s, Nc as t, yl as u, nu as v, tu as w, Ze as x, iu as y, za as z
};