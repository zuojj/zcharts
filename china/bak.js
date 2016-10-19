/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-10-19 14:43:51
 * @version $Id$
 */

try {
    var s_zia, s_ii, s_Aia, s_ji;
    s_D("sy39");
    var s_ki = s_b
      , s_li = s_8c(0)
      , s_mi = s_8c(0)
      , s_ni = s_8c(0)
      , s_Bia = function(a, b) {
        window.scrollBy(a, b)
    }
      , s_oi = function(a, b) {
        window.scrollTo(a, b)
    }
      , s_pi = s_9c
      , s_qi = s_9c
      , s_Cia = s_$a.match(/ GSA\/([.\d]+)/)
      , s_ri = s_Cia ? s_Cia[1] : "";
    s_Aia = (s_ji = !!s_Cia) && 0 <= s_Da(s_ri, "4");
    s_ii = s_ji && 0 <= s_Da(s_ri, "5.2");
    s_ji && s_Da(s_ri, "5.7");
    s_zia = s_ji && 0 <= s_Da(s_ri, "4.3") && 0 > s_Da(s_ri, "4.5");
    s_C("sy39");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy49");
    var s_si = function() {
        if (document.body) {
            var a = s_Kd(document.body).top;
            s_si = s_8c(a);
            return a
        }
        return 0
    }
      , s_Dia = s_b
      , s_Eia = s_b;
    s_C("sy49");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("em2");
    s_C("em2");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("em1");
    s_C("em1");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy51");
    var s_rja = {}
      , s_sja = function(a, b) {
        if (!s_da("velour.loadJsInterface"))
            return s_$e("No Velour.");
        a in s_rja || (s_rja[a] = {});
        var c = s_rja[a];
        if (c[b])
            return c[b];
        var d = s_bf()
          , e = window.velour.loadJsInterface(a, b)
          , f = "google.velourCb." + a + "." + b;
        s_oa(f, {
            onSuccess: function() {
                d.resolve(e.getResult())
            },
            onFailure: function() {
                d.reject(a + "." + b + " failed to load: " + e.getError().getMessage())
            }
        });
        e.setCallback(f);
        return c[b] = d.Mc
    }
      , s_tja = function(a, b, c, d) {
        for (var e = s_sja(a, b), f = [], g = 3; g < arguments.length; g++)
            f.push(arguments[g]);
        return e.then(function(a) {
            return a[c] ? a[c].apply(a, f) : s_$e(c + " not found")
        })
    }
    ;
    s_C("sy51");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("em0");
    s_C("em0");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy306");
    var s_N0a = !1
      , s_O0a = null
      , s_Q0a = function() {
        var a = s_P0a;
        s_1c(window, "beforeunload", function() {
            s_N0a || s_O0a.set("isn", a)
        })
    }
    ;
    if (s_ji) {
        var s_O0a = s_Tf("session", "isn"), s_P0a, s_R0a, s_S0a, s_T0a = s_Ig("isn").split(":");
        s_S0a = s_T0a[0];
        s_R0a = s_T0a[1];
        (s_P0a = s_S0a ? s_qb(s_R0a, s_S0a) : null ) && s_Q0a()
    }
    ;s_C("sy306");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("aa");
    s_C("aa");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("abd");
    var s_zv = function(a) {
        for (var b = "", c = 21, d = 0; d < a.length; d++)
            3 != d % 4 && (b += String.fromCharCode(a[d] ^ c),
            c++);
        return b
    }
      , s_eTa = s_zv([97, 119, 115, 111, 107])
      , s_fTa = s_zv([120, 116, 82, 108, 118, 125])
      , s_gTa = s_zv([97, 119, 115, 111, 107, 123])
      , s_hTa = s_zv([118, 115, 121, 107, 108, 124, 104, 119, 68, 127, 114, 105, 114])
      , s_iTa = s_zv([101, 126, 118, 102, 118, 125, 118, 109, 126])
      , s_jTa = s_zv([116, 116, 115, 108])
      , s_kTa = s_zv([102, 115, 116, 107])
      , s_lTa = s_zv([113, 119, 118, 111])
      , s_mTa = s_zv([113, 115, 99, 107])
      , s_nTa = s_zv([113, 115, 101, 107])
      , s_oTa = s_zv([113, 115, 117, 107])
      , s_pTa = s_zv([122, 100, 103, 124, 112, 120, 116, 107, 104])
      , s_qTa = s_zv([58, 127, 122, 103, 121, 126, 127, 98, 104, 51, 109, 124, 118, 123, 15, 76, 70, 68, 79, 95, 10, 66, 79, 97, 65])
      , s_rTa = s_zv([58, 127, 122, 103, 121, 126, 127, 98, 104, 51, 109, 124, 118, 123, 15, 76, 81, 90, 13, 95, 67, 76, 64, 118])
      , s_sTa = function() {
        var a = s_i(s_eTa)
          , b = s_i(s_fTa)
          , c = s_i(s_gTa);
        return a || b || c ? s_zb() && (a && 4E3 < s_gf(a, s_pTa, !1) || b && 4E3 < s_gf(b, s_pTa, !1) || c && 4E3 < s_gf(c, s_pTa, !1)) ? 1 : 0 : 0
    }
      , s_tTa = function(a) {
        var b = 0, c;
        for (c in a)
            if (a[c].e)
                if (a[c].b)
                    b++;
                else
                    return !1;
        return 0 < b
    }
      , s_uTa = function(a) {
        a = a || {};
        var b = {};
        b[s_mTa] = {
            e: !!a[s_mTa],
            b: !s_vj(s_eTa)
        };
        b[s_nTa] = {
            e: !!a[s_nTa],
            b: !s_vj(s_fTa)
        };
        b[s_oTa] = {
            e: !!a[s_oTa],
            b: !s_vj(s_gTa)
        };
        return b
    }
      , s_vTa = function(a) {
        var b = [], c;
        for (c in a)
            a[c].e && b.push(c + ":" + (a[c].b ? "1" : "0"));
        return b.join(",")
    }
      , s_wTa = function(a, b) {
        var c = String(a);
        b && (c += "," + b);
        google.log(s_iTa, c)
    }
      , s_xTa = function(a, b, c) {
        c = null != c ? c : 2;
        if (1 > c)
            s_wTa(7, b);
        else {
            var d = new Image;
            d.onerror = s_d(s_xTa, a, b, c - 1);
            d.src = a
        }
    }
    ;
    s_we("abd", {
        init: function(a) {
            a = a || {};
            if (a[s_jTa] && s_vj(s_hTa)) {
                var b = s_uTa(a)
                  , c = s_vTa(b);
                s_tTa(b) ? (b = a[s_kTa] ? 0 : s_sTa(),
                s_wTa(1, String(b) + "," + c)) : s_wTa(0, c);
                a[s_lTa] && s_Ef(function() {
                    s_xTa(s_rTa, "aa")
                });
                a[s_kTa] || (s_xTa(s_qTa, "gfl"),
                a[s_lTa] || s_xTa(s_rTa, "aa"))
            }
        }
    });
    s_C("abd");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy74");
    s_C("sy74");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Ama = function(a) {
        return a.ka || (a.ka = a.ma())
    }
      , s_Bma = function(a) {
        switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            return !0;
        default:
            return !1
        }
    }
    ;
    s_D("sy73");
    var s_bk = function(a) {
        s_7c.call(this);
        this.headers = new s_je;
        this.rb = a || null ;
        this.ma = !1;
        this.Db = this.$ = null ;
        this.Ia = "";
        this.qa = 0;
        this.Ga = "";
        this.Da = this.nb = this.Za = this.Ka = !1;
        this.Wa = 0;
        this.Ja = null ;
        this.Ea = "";
        this.xc = this.Ca = !1
    }
    ;
    s_f(s_bk, s_7c);
    var s_Cma = /^https?$/i
      , s_Dma = ["POST", "PUT"]
      , s_Ema = []
      , s_ck = function(a, b, c, d, e, f, g) {
        var k = new s_bk;
        s_Ema.push(k);
        b && k.listen("complete", b);
        k.Ma.add("ready", k.Pb, !0, void 0, void 0);
        f && (k.Wa = Math.max(0, f));
        g && (k.Ca = g);
        k.send(a, c, d, e);
        return k
    }
    ;
    s_bk.prototype.Pb = function() {
        this.dispose();
        s_Ya(s_Ema, this)
    }
    ;
    s_bk.prototype.send = function(a, b, c, d) {
        if (this.$)
            throw Error("p`" + this.Ia + "`" + a);
        b = b ? b.toUpperCase() : "GET";
        this.Ia = a;
        this.Ga = "";
        this.qa = 0;
        this.Ka = !1;
        this.ma = !0;
        this.$ = this.Xa();
        this.Db = this.rb ? s_Ama(this.rb) : s_Ama(s_mha);
        this.$.onreadystatechange = s_c(this.Kb, this);
        try {
            this.nb = !0,
            this.$.open(b, String(a), !0),
            this.nb = !1
        } catch (f) {
            this.Ni(5, f);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && s_Rca(d, function(a, b) {
            e.set(b, a)
        });
        d = s_Sa(e.Pf(), s_Fma);
        c = s_ca.FormData && a instanceof s_ca.FormData;
        !s_Ta(s_Dma, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(a, b) {
            this.$.setRequestHeader(b, a)
        }, this);
        this.Ea && (this.$.responseType = this.Ea);
        "withCredentials"in this.$ && this.$.withCredentials !== this.Ca && (this.$.withCredentials = this.Ca);
        try {
            s_Gma(this),
            0 < this.Wa && ((this.xc = s_Hma(this.$)) ? (this.$.timeout = this.Wa,
            this.$.ontimeout = s_c(this.Ij, this)) : this.Ja = s_Xf(this.Ij, this.Wa, this)),
            this.Za = !0,
            this.$.send(a),
            this.Za = !1
        } catch (f) {
            this.Ni(5, f)
        }
    }
    ;
    var s_Hma = function(a) {
        return s_Jb && s_Tb(9) && s_ka(a.timeout) && s_a(a.ontimeout)
    }
      , s_Fma = function(a) {
        return s_Kea("Content-Type", a)
    }
    ;
    s_bk.prototype.Xa = function() {
        return this.rb ? this.rb.$() : s_4h()
    }
    ;
    s_bk.prototype.Ij = function() {
        "undefined" != typeof s_kaa && this.$ && (this.Ga = "Timed out after " + this.Wa + "ms, aborting",
        this.qa = 8,
        this.dispatchEvent("timeout"),
        this.abort(8))
    }
    ;
    s_bk.prototype.Ni = function(a, b) {
        this.ma = !1;
        this.$ && (this.Da = !0,
        this.$.abort(),
        this.Da = !1);
        this.Ga = b;
        this.qa = a;
        s_Ima(this);
        s_Jma(this)
    }
    ;
    var s_Ima = function(a) {
        a.Ka || (a.Ka = !0,
        a.dispatchEvent("complete"),
        a.dispatchEvent("error"))
    }
    ;
    s_bk.prototype.abort = function(a) {
        this.$ && this.ma && (this.ma = !1,
        this.Da = !0,
        this.$.abort(),
        this.Da = !1,
        this.qa = a || 7,
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        s_Jma(this))
    }
    ;
    s_bk.prototype.Ha = function() {
        this.$ && (this.ma && (this.ma = !1,
        this.Da = !0,
        this.$.abort(),
        this.Da = !1),
        s_Jma(this, !0));
        s_bk.Ba.Ha.call(this)
    }
    ;
    s_bk.prototype.Kb = function() {
        this.isDisposed() || (this.nb || this.Za || this.Da ? s_Kma(this) : this.Ub())
    }
    ;
    s_bk.prototype.Ub = function() {
        s_Kma(this)
    }
    ;
    var s_Kma = function(a) {
        if (a.ma && "undefined" != typeof s_kaa && (!a.Db[1] || 4 != s_dk(a) || 2 != a.getStatus()))
            if (a.Za && 4 == s_dk(a))
                s_Xf(a.Kb, 0, a);
            else if (a.dispatchEvent("readystatechange"),
            4 == s_dk(a)) {
                a.ma = !1;
                try {
                    a.isSuccess() ? (a.dispatchEvent("complete"),
                    a.dispatchEvent("success")) : (a.qa = 6,
                    a.Ga = s_Lma(a) + " [" + a.getStatus() + "]",
                    s_Ima(a))
                } finally {
                    s_Jma(a)
                }
            }
    }
      , s_Jma = function(a, b) {
        if (a.$) {
            s_Gma(a);
            var c = a.$
              , d = a.Db[0] ? s_b : null ;
            a.$ = null ;
            a.Db = null ;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }
      , s_Gma = function(a) {
        a.$ && a.xc && (a.$.ontimeout = null );
        s_ka(a.Ja) && (s_Yf(a.Ja),
        a.Ja = null )
    }
    ;
    s_bk.prototype.dd = function() {
        return !!this.$
    }
    ;
    s_bk.prototype.isSuccess = function() {
        var a = this.getStatus(), b;
        if (!(b = s_Bma(a))) {
            if (a = 0 === a)
                a = s_2d(String(this.Ia))[1] || null ,
                !a && s_ca.self && s_ca.self.location && (a = s_ca.self.location.protocol,
                a = a.substr(0, a.length - 1)),
                a = !s_Cma.test(a ? a.toLowerCase() : "");
            b = a
        }
        return b
    }
    ;
    var s_dk = function(a) {
        return a.$ ? a.$.readyState : 0
    }
    ;
    s_bk.prototype.getStatus = function() {
        try {
            return 2 < s_dk(this) ? this.$.status : -1
        } catch (a) {
            return -1
        }
    }
    ;
    var s_Lma = function(a) {
        try {
            return 2 < s_dk(a) ? a.$.statusText : ""
        } catch (b) {
            return ""
        }
    }
    ;
    s_bk.prototype.Hm = function() {
        try {
            return this.$ ? this.$.responseText : ""
        } catch (a) {
            return ""
        }
    }
    ;
    var s_ek = function(a, b) {
        if (a.$) {
            var c = a.$.responseText;
            b && 0 == c.indexOf(b) && (c = c.substring(b.length));
            return s_pe(c)
        }
    }
      , s_fk = function(a) {
        try {
            if (!a.$)
                return null ;
            if ("response"in a.$)
                return a.$.response;
            switch (a.Ea) {
            case "":
            case "text":
                return a.$.responseText;
            case "arraybuffer":
                if ("mozResponseArrayBuffer"in a.$)
                    return a.$.mozResponseArrayBuffer
            }
            return null
        } catch (b) {
            return null
        }
    }
    ;
    s_bk.prototype.getResponseHeader = function(a) {
        return this.$ && 4 == s_dk(this) ? this.$.getResponseHeader(a) : void 0
    }
    ;
    s_bk.prototype.getAllResponseHeaders = function() {
        return this.$ && 4 == s_dk(this) ? this.$.getAllResponseHeaders() : ""
    }
    ;
    var s_gk = function(a) {
        return s_ja(a.Ga) ? a.Ga : String(a.Ga)
    }
    ;
    s_C("sy73");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Mma = function(a) {
        for (var b in a)
            return a[b]
    }
    ;
    s_D("sy72");
    var s_Nma = function(a) {
        var b = [];
        s_bb(a, function(a, d) {
            b.push(encodeURIComponent(d) + ":" + encodeURIComponent(a))
        });
        return b.join(",")
    }
    ;
    var s_Oma = "authuser deb e esrch expflags expid fesp gl hl host hotel_dates hotel_ds noj ogdeb opti opts optq optt mergelabel mlp plugin rlst skew_host source_ip ssl_dbg st tbcp tbs useragent uuld uule v".split(" ")
      , s_Pma = function() {
        return ""
    }
      , s_Sma = function(a, b, c, d, e, f, g, k) {
        b = s_Qma(b, d, e, g, f);
        k && (b.q = encodeURIComponent(k));
        s_pb(b, c);
        return s_Pma(b) + "/async/" + a + s_Rma(b)
    }
      , s_Tma = function(a, b, c, d, e, f, g) {
        var k = "/search"
          , l = b.q
          , m = b.start;
        delete b.q;
        delete b.start;
        b = s_Qma(b, d, e, !1, f);
        void 0 != l && (b.q = encodeURIComponent(l));
        void 0 != m && (b.start = m);
        g && (b.sns = "1",
        k = "/s");
        b.asearch = a;
        s_pb(b, c);
        return k + s_Rma(b)
    }
      , s_Qma = function(a, b, c, d, e) {
        var f = {};
        d && (f.dfsl = 1);
        (a = s_Nma(a)) && (f.async = a);
        b && (a = new s_He,
        s_mg(a, b),
        (b = s_Ke(a)) && (f.vet = s_9d(b, "vet")));
        c ? f.ved = c : f.ei = google.kEI;
        null != e && (f.lei = e);
        s_g(s_Oma, function(a) {
            var b = s_Ig(a);
            b && (f[a] = encodeURIComponent(b))
        });
        c = s_Kg(new s_2f);
        s_pb(f, s_hg(c));
        f.yv = 2;
        return f
    }
      , s_Rma = function(a) {
        if (s_jb(a))
            return "";
        var b = [];
        s_bb(a, function(a, d) {
            b.push(d + "=" + a)
        });
        return "?" + b.join("&")
    }
    ;
    var s_hk = function(a, b, c, d, e, f, g, k, l) {
        b._fmt = c;
        a = s_Sma(a, b, l || {}, d, e, k, g, f);
        return s_Uma(a, c)
    }
      , s_Vma = function(a, b, c, d, e, f, g, k) {
        b._fmt = "jspb";
        b.q = c;
        a = s_Tma(a, b, d || {}, e, f, g, k);
        return s_Uma(a, "jspb")
    }
      , s_Uma = function(a, b) {
        var c = s_bf();
        s_ck(a, function(a) {
            var d = a.target
              , f = d.Hm();
            if ("complete" == a.type && d.isSuccess())
                if (s_qa(f, ")]}'\n") && (f = f.substr(5)),
                "json" == b) {
                    var g;
                    try {
                        JSON ? g = JSON.parse(f) : g = s_qe(f)
                    } catch (k) {
                        c.reject(k)
                    }
                    s_ma(g) && (g = s_Mma(g),
                    a = g.__err__,
                    s_a(a) && c.reject(a));
                    c.resolve(g)
                } else
                    c.resolve(f);
            else
                c.reject(void 0)
        }, void 0, void 0, void 0, void 0, !1);
        return c.Mc
    }
    ;
    s_C("sy72");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Wma = function(a, b) {
        return s_Oa(b, function(a, b) {
            return a.Ef(b)
        }, a)
    }
      , s_Xma = function(a) {
        var b, c = a.parentNode;
        if (c && 11 != c.nodeType)
            if (a.removeNode)
                a.removeNode(!1);
            else {
                for (; b = a.firstChild; )
                    c.insertBefore(b, a);
                s_n(a)
            }
    }
      , s_Yma = function(a, b) {
        for (var c = b; c = c.previousSibling; )
            if (c == a)
                return -1;
        return 1
    }
      , s_Zma = function(a, b) {
        var c = a.parentNode;
        if (c == b)
            return -1;
        for (var d = b; d.parentNode != c; )
            d = d.parentNode;
        return s_Yma(d, a)
    }
      , s__ma = function(a) {
        if (!a)
            return {};
        var b = {};
        s_g(a.split(","), function(c) {
            c = c.split(":");
            2 != c.length && google.ml(Error("T"), !1, {
                _sn: "as_badCtx",
                cxt: a
            });
            b[decodeURIComponent(c[0])] = decodeURIComponent(c[1])
        });
        return b
    }
      , s_0ma = function() {
        var a = s_ng()
          , a = s_Qj(a);
        if (!a.q) {
            var b = s_Qj(s_Ze());
            b.q && (a.q = b.q,
            s_$d().hash = s_Rj(a))
        }
    }
      , s_ik = function(a) {
        null != a && s_Ed(a) && s_Mb && (a.style.display = "none",
        s_Gb(a.offsetHeight),
        a.style.display = "")
    }
      , s_1ma = function(a) {
        a > s__e ? s_0e = 1 : a < s__e && (s_0e = 2)
    }
      , s_2ma = function(a, b) {
        for (var c = a.search(s_8d), d = 0, e, f = []; 0 <= (e = s_7d(a, d, b, c)); ) {
            d = a.indexOf("&", e);
            if (0 > d || d > c)
                d = c;
            e += b.length + 1;
            f.push(s_wa(a.substr(e, d - e)))
        }
        return f
    }
      , s_3ma = function(a, b) {
        if (a == b)
            return 0;
        if (a.compareDocumentPosition)
            return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (s_Jb && !s_Ub(9)) {
            if (9 == a.nodeType)
                return -1;
            if (9 == b.nodeType)
                return 1
        }
        if ("sourceIndex"in a || a.parentNode && "sourceIndex"in a.parentNode) {
            var c = 1 == a.nodeType
              , d = 1 == b.nodeType;
            if (c && d)
                return a.sourceIndex - b.sourceIndex;
            var e = a.parentNode
              , f = b.parentNode;
            return e == f ? s_Yma(a, b) : !c && s_Hc(e, b) ? -1 * s_Zma(a, b) : !d && s_Hc(f, a) ? s_Zma(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
        }
        d = s_gc(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        d = d.createRange();
        d.selectNode(b);
        d.collapse(!0);
        return c.compareBoundaryPoints(s_ca.Range.START_TO_END, d)
    }
      , s_4ma = function(a, b) {
        var c = {};
        s_g(a, function(d, e) {
            c[b.call(void 0, d, e, a)] = d
        });
        return c
    }
    ;
    s_D("sy75");
    var s_5ma = !1
      , s_jk = {
        preload: "yp",
        filled: "yf",
        inlined: "yi"
    }
      , s_6ma = s_ob(s_jk)
      , s_7ma = {
        loading: "yl",
        error: "ye"
    }
      , s_8ma = s_ob(s_7ma)
      , s_9ma = {
        preload: "asyncReset",
        filled: "asyncFilled",
        loading: "asyncLoading",
        error: "asyncError"
    }
      , s_$ma = function() {}
    ;
    s_f(s_$ma, Error);
    var s_kk = function(a) {
        this.element = a;
        this.type = s_t(a, "asyncType") || "";
        if (!this.type)
            throw a = new s_$ma,
            s_de(a),
            a;
    }
      , s_lk = function(a) {
        var b = s_t(a, "asyncTrigger");
        if (b) {
            if (a = s_i(b))
                return new s_kk(a);
            a = new s_$ma;
            s_de(a);
            throw a;
        }
        return new s_kk(a)
    }
    ;
    s_kk.prototype.getState = function() {
        var a = s_Oe(this.element);
        return s_Sa(s_Na(a, function(a) {
            return s_6ma[a]
        }), s_bd)
    }
    ;
    var s_ana = function(a) {
        a = s_Oe(a.element);
        return s_Sa(s_Na(a, function(a) {
            return s_8ma[a]
        }), s_bd) || ""
    }
    ;
    s_kk.prototype.setState = function(a) {
        s_bna(this, a);
        "filled" == a && s_g(this.element.querySelectorAll("." + s_jk.inlined), function(a) {
            s_bna(new s_kk(a), "filled")
        })
    }
    ;
    var s_mk = function(a, b) {
        s_Qe(a.element, s_fb(s_7ma));
        if ("" != b) {
            s_w(a.element, s_7ma[b]);
            var c = a.getState();
            s_Og(a.element, s_9ma[b], {
                state: c,
                Z7: b
            })
        }
    }
      , s_bna = function(a, b) {
        s_Qe(a.element, s_fb(s_jk));
        s_w(a.element, s_jk[b]);
        s_mk(a, "");
        s_Og(a.element, s_9ma[b], {
            state: b,
            Z7: ""
        })
    }
      , s_cna = function(a) {
        return (a = s_t(a.element, "asyncContextRequired")) ? a.split(",") : []
    }
      , s_nk = function(a, b, c, d) {
        this.target = a;
        this.trigger = c;
        c = b = s_nb(b);
        var e;
        var f = this.trigger || this.target.element;
        e = s_cna(this.target);
        var g = b;
        if (e.length) {
            e = new s_oe(e);
            for (var g = new s_oe(s_gb(g)), k = {}; f && null != f.parentNode && !s_Uca(e, g); ) {
                var l = s_t(f, "asyncContext");
                if (l)
                    for (var l = l.split(";"), m = 0; m < l.length; ++m) {
                        var n = l[m].split(":");
                        2 == n.length ? (n[0] = s_wa(n[0]),
                        n[1] = s_wa(n[1]),
                        e.contains(n[0]) && !g.contains(n[0]) && (k[n[0]] = n[1],
                        g.add(n[0]))) : s_de(Error("W"), {
                            cxt: l[m]
                        })
                    }
                f = f.parentNode
            }
            e = k
        } else
            e = {};
        s_pb(c, e);
        c = b;
        e = this.target.element;
        e.id != this.target.type && (c._id = e.id);
        (e = s_t(this.target.element, "asyncToken")) && (c._xsrf = e);
        c._pms = s_if(google.xjsu, "k").match(/xjs\.(\w+)\./)[1];
        this.context = b;
        this.$ = d || {};
        this.Mr = "stateful" == s_t(a.element, "asyncMethod") || s_t(a.element, "asyncToken") ? "POST" : "GET";
        this.ka = s_t(a.element, "asyncRclass") || ""
    }
      , s_ok = function(a, b, c, d) {
        if (s_Fc(a))
            e = s_lk(a),
            a = s_t(a, "asyncTrigger") ? a : void 0;
        else {
            var e = a;
            a = c
        }
        return new s_nk(e,b || {},a,d)
    }
      , s_dna = function(a, b, c) {
        var d;
        d = b.getStatus() ? Error("vd") : Error("wd");
        d.details = {
            s: b.getStatus()
        };
        c && (d.details.e = c);
        0 == b.getStatus() && s_de(d, d.details);
        a.reject(d)
    }
      , s_ena = function(a) {
        if ("POST" == a.Mr)
            var b = {}
              , c = {};
        else
            b = a.context,
            c = a.$;
        var d = s_Ge(a.target.element)
          , e = a.trigger ? s_Ge(a.trigger) : void 0
          , f = a.trigger ? google.getLEI(a.trigger) : void 0;
        return ("search" == a.ka ? s_Tma : s_Sma)(a.target.type, b, c, d, e, f)
    }
      , s_fna = function(a) {
        if ("POST" == a.Mr) {
            var b = {};
            s_pb(b, a.$);
            var c = s_Nma(a.context);
            c && (b.async = a.target.type + "," + c);
            var d = [];
            s_bb(b, function(a, b) {
                d.push(b + "=" + a)
            });
            return d.join("&")
        }
    }
    ;
    s_nk.prototype.fetch = function() {
        var a;
        a = new s_oe(s_cna(this.target));
        var b = {};
        s_pb(b, this.context);
        s_pb(b, this.$);
        b = new s_oe(s_gb(b));
        s_Uca(a, b) ? a = !0 : (a = s_$ea(a, b).Xc().join(","),
        s_de(Error("U"), {
            type: this.target.type,
            cxt: a
        }),
        a = !1);
        return a ? s_gna(this) : s_$e(void 0)
    }
    ;
    var s_gna = function(a) {
        var b = s_bf()
          , c = s_ena(a)
          , c = c + (s_hda && s_1e ? s_2e() : "")
          , d = a.target.type;
        s_ck(c, function(a) {
            var c = a.target;
            if ("complete" == a.type)
                if (c.isSuccess()) {
                    a = c.Hm();
                    var e = "\n\n";
                    s_ya(a, e) || (e = "\n");
                    a = s_Ma(a.split(e), s_bd);
                    var k = [];
                    a = s_Ma(s_Na(a, function(a) {
                        try {
                            var d = JSON.parse(a)
                              , e = d.__err__;
                            if (s_a(e))
                                s_dna(b, c, e);
                            else
                                return s_9ja(d)
                        } catch (ba) {
                            s_Ig("deb") ? k.push(ba) : (s_dna(b, c),
                            s_de(ba, {
                                a: "1"
                            }))
                        }
                    }), s_bd);
                    (e = c.getResponseHeader("Version")) && s_1ma(parseInt(e, 10));
                    b.resolve(a)
                } else
                    s_dna(b, c);
            else
                s_dna(b, c),
                s_de(Error("V"), {
                    type: d
                })
        }, a.Mr, s_fna(a), void 0, void 0, s_5ma);
        return b.Mc
    }
      , s_hna = function() {
        s_g(document.querySelectorAll("." + s_jk.inlined), function(a) {
            s_bna(new s_kk(a), "filled")
        })
    }
      , s_qk = function(a) {
        var b = s_lk(a);
        return "preload" != b.getState() || "loading" == s_ana(b) ? s_B(void 0) : s_pk(a, void 0, void 0, void 0)
    }
      , s_pk = function(a, b, c, d, e) {
        if (b instanceof s_je) {
            var f = b;
            b = {};
            f.forEach(function(a, c) {
                b[c] = a
            })
        }
        var g = e ? s_ok(s_lk(a), b, e) : s_ok(a, b);
        a = c || 1;
        1 != a && (d = d ? d(g.context) : g.context,
        s_ina(g.target.element.id, g.target.type, d, a));
        s_mk(g.target, "loading");
        return s_df(g.fetch().then(function(a) {
            s_g(a, function(a) {
                a.apply()
            });
            g.target.setState("filled")
        }), function(a) {
            s_mk(g.target, "error");
            throw a;
        })
    }
      , s_rk = function(a, b) {
        var c = s_ok(a, b);
        s_mk(c.target, "loading");
        return s_df(c.fetch().then(function(a) {
            s_g(a, function(a) {
                (new s_Dj(a.Pl,s_Gj.Et())).append(a)
            });
            c.target.setState("filled")
        }), function(a) {
            s_mk(c.target, "error");
            throw a;
        })
    }
      , s_sk = function(a, b, c) {
        return s_ok(a, b, c, void 0).fetch()
    }
      , s_uk = function(a) {
        a = s_ok(a);
        delete s_tk[a.target.element.id];
        s_Cg("async", s_jna(), !1);
        s_wc(a.target.element);
        s_Xga(a.target.element.id);
        a.target.setState("preload")
    }
      , s_kna = function(a, b, c) {
        this.id = a;
        this.type = b;
        this.context = c
    }
      , s_lna = function(a) {
        if (!a)
            return null ;
        var b = s_Bh(a, ",", 1);
        a = b[0];
        var b = s__ma(b[1])
          , c = b._id || a;
        s_kb(b, "_id");
        return new s_kna(c,a,b)
    }
    ;
    s_kna.prototype.yb = function() {
        var a = s_nb(this.context);
        this.id != this.type && (a._id = this.id);
        return s_jb(a) ? this.type : this.type + "," + s_Nma(a)
    }
    ;
    s_kna.prototype.apply = function() {
        var a = document.getElementById(this.id);
        if (!a)
            return !1;
        if (s_t(a, "asyncDisableReplay"))
            return !0;
        s_pk(a, this.context);
        return !0
    }
    ;
    var s_mna = function(a) {
        a = s_Na(a.split(";"), s_lna);
        a = s_Ma(a, function(a) {
            return null != a
        });
        return s_4ma(a, function(a) {
            return a.id
        })
    }
      , s_jna = function() {
        var a = s_Na(s_fb(s_tk), function(a) {
            return a.yb()
        });
        return s_Ma(a, function(a) {
            return null != a
        }).join(";")
    }
      , s_tk = {}
      , s_nna = ""
      , s_ina = function(a, b, c, d) {
        1 != d && (c = s_cb(c, function(a, b) {
            return "_id" != b
        }),
        s_tk[a] = new s_kna(a,b,c),
        a = s_jna(),
        a != s_nna && (s_Cg("async", a, 3 == d),
        s_Nj && s_0ma()))
    }
      , s_ona = function(a, b) {
        s_nna = a;
        if (b)
            s_tk = s_mna(a),
            s_Ma(s_fb(s_tk), function(a) {
                return !a.apply()
            });
        else {
            var c = s_mna(a), d;
            for (d in s_tk)
                if (!(d in c)) {
                    var e = document.getElementById(d);
                    e && s_uk(e)
                }
            for (d in c) {
                var f = c[d]
                  , e = s_tk[d];
                e && s_1f(e.context, f.context) || (e = document.getElementById(d)) && s_pk(e, f.context)
            }
        }
    }
    ;
    s_xe("async", {
        init: function() {
            s_yg("async", s_ona);
            s_1h("async", {
                u: function(a) {
                    s_pk(a)
                },
                uo: function(a) {
                    s_qk(a)
                },
                r: s_uk
            });
            s_hna()
        }
    });
    s_C("sy75");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("em14");
    s_C("em14");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("async");
    s_C("async");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy9");
    var s__f = function(a, b, c, d) {
        s_h.call(this);
        s_Zd(this);
        this.$ = new s_Wf(166);
        this.$.bI = s_c(this.Wa, this);
        this.ka(this.$);
        this.ma = a;
        this.ka(this.ma);
        this.Ca = b;
        this.qa = d;
        this.Ea = c
    }
    ;
    s_f(s__f, s_h);
    s__f.prototype.start = function() {
        this.$.start();
        this.ma.start(this.$);
        this.Mb.start(this.Ca)
    }
    ;
    s__f.prototype.Wa = function() {
        var a = this.ma
          , b = this.$;
        a.$ = s_e();
        a.ma = a.$ - a.qa - b.$;
        a.qa = a.$;
        a = this.ma;
        1E3 < a.$ - a.Ea && 66.4 > a.ma ? (this.$.stop(),
        this.qa.call(),
        s_8a(this)) : 66.4 <= this.ma.ma && (this.$.stop(),
        this.Ea.call(),
        s_8a(this))
    }
    ;
    var s_0f = function(a) {
        this.O_ = a
    }
    ;
    s_Vd(s_0f, s__f);
    s_0f.prototype.start = function(a) {
        s_Ve(a, !0)
    }
    ;
    s_Xd(s_0f.prototype.start);
    var s_Lea = function() {
        this.Ea = this.ma = this.qa = this.$ = 0
    }
    ;
    s_f(s_Lea, s_h);
    s_Lea.prototype.start = function() {
        this.Ea = this.qa = this.$ = s_e()
    }
    ;
    var s_Mea = function(a, b, c) {
        (new s__f(new s_Lea,a,b,c)).start()
    }
    ;
    s_C("sy9");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy284");
    var s_gXa = function(a, b, c) {
        this.ka = a;
        this.Nh = b.name || null ;
        this.$ = {};
        for (a = 0; a < c.length; a++)
            b = c[a],
            this.$[b.$] = b
    }
    ;
    s_gXa.prototype.getName = function() {
        return this.Nh
    }
    ;
    var s_hXa = function(a) {
        a = s_fb(a.$);
        s_5a(a, function(a, c) {
            return a.$ - c.$
        });
        return a
    }
    ;
    var s_hx = function(a, b, c) {
        this.$ = b;
        this.Nh = c.name;
        this.Wa = !!c.Lr;
        this.Ca = !!c.required;
        this.ka = c.mj;
        this.Ea = c.type;
        this.qa = !1;
        switch (this.ka) {
        case 3:
        case 4:
        case 6:
        case 16:
        case 18:
        case 2:
        case 1:
            this.qa = !0
        }
        this.ma = c.defaultValue
    }
    ;
    s_hx.prototype.getName = function() {
        return this.Nh
    }
    ;
    var s_iXa = function(a) {
        return 11 == a.ka || 10 == a.ka
    }
    ;
    s_hx.prototype.Zj = function() {
        return this.Wa
    }
    ;
    s_hx.prototype.aAa = function() {
        return this.Ca
    }
    ;
    s_hx.prototype.ccb = function() {
        return !this.Wa && !this.Ca
    }
    ;
    var s_ix = function() {
        this.Vi = {};
        this.ka = this.getDescriptor().$;
        this.$ = this.ma = null
    }
    ;
    s_ = s_ix.prototype;
    s_.has = function(a) {
        return null != this.Vi[a.$]
    }
    ;
    s_.get = function(a, b) {
        return s_jx(this, a.$, b)
    }
    ;
    s_.set = function(a, b) {
        s_kx(this, a.$, b)
    }
    ;
    s_.add = function(a, b) {
        s_jXa(this, a.$, b)
    }
    ;
    s_.clear = function(a) {
        a = a.$;
        delete this.Vi[a];
        this.$ && delete this.$[a]
    }
    ;
    s_.equals = function(a) {
        if (!a || this.constructor != a.constructor)
            return !1;
        for (var b = s_hXa(this.getDescriptor()), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = d.$;
            if (null != this.Vi[e] != (null != a.Vi[e]))
                return !1;
            if (null != this.Vi[e]) {
                var f = s_iXa(d)
                  , g = s_lx(this, e)
                  , e = s_lx(a, e);
                if (d.Zj()) {
                    if (g.length != e.length)
                        return !1;
                    for (d = 0; d < g.length; d++) {
                        var k = g[d]
                          , l = e[d];
                        if (f ? !k.equals(l) : k != l)
                            return !1
                    }
                } else if (f ? !g.equals(e) : g != e)
                    return !1
            }
        }
        return !0
    }
    ;
    var s_kXa = function(a, b) {
        for (var c = s_hXa(a.getDescriptor()), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = e.$;
            if (null != b.Vi[f]) {
                a.$ && delete a.$[e.$];
                var g = s_iXa(e);
                if (e.Zj())
                    for (var e = s_lx(b, f) || [], k = 0; k < e.length; k++)
                        s_jXa(a, f, g ? e[k].clone() : e[k]);
                else
                    e = s_lx(b, f),
                    g ? (g = s_lx(a, f)) ? s_kXa(g, e) : s_kx(a, f, e.clone()) : s_kx(a, f, e)
            }
        }
    }
    ;
    s_ix.prototype.clone = function() {
        var a = new this.constructor;
        a != this && (a.Vi = {},
        a.$ && (a.$ = {}),
        s_kXa(a, this));
        return a
    }
    ;
    var s_lx = function(a, b) {
        var c = a.Vi[b];
        return null == c ? null : a.ma ? b in a.$ ? a.$[b] : (c = a.ma.ma(a.ka[b], c),
        a.$[b] = c) : c
    }
      , s_jx = function(a, b, c) {
        var d = s_lx(a, b);
        return a.ka[b].Zj() ? d[c || 0] : d
    }
      , s_kx = function(a, b, c) {
        a.Vi[b] = c;
        a.$ && (a.$[b] = c)
    }
      , s_jXa = function(a, b, c) {
        a.Vi[b] || (a.Vi[b] = []);
        a.Vi[b].push(c);
        a.$ && delete a.$[b]
    }
      , s_mx = function(a, b) {
        var c = [], d = b[0], e;
        for (e in b)
            0 != e && c.push(new s_hx(0,e,b[e]));
        return new s_gXa(a,d,c)
    }
    ;
    s_C("sy284");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy320");
    var s_rz, s_C2a = 0, s_sz = function(a, b, c) {
        this.ma = a;
        this.Qc = b;
        this.qa = c
    }
    ;
    s_sz.prototype.$ = !1;
    s_sz.prototype.ka = 0;
    s_sz.prototype.get = function() {
        if ((!this.$ || this.ka < s_C2a) && s_rz && this.ma + "-config"in s_rz) {
            var a = s_rz[this.ma + "-config"][this.Qc]
              , b = s_C2a;
            this.Jc = void 0 !== a ? a : this.qa;
            this.$ = !0;
            this.ka = b
        }
        if (!this.$)
            throw Error("Qb");
        return this.Jc
    }
    ;
    s_C("sy320");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy5");
    var s_yea = function() {
        s_xea(this)
    }
      , s_zea = null
      , s_xea = function(a) {
        s_zea || (s_zea = new s_9e(function(a, c) {
            var b = s_da("velour");
            if (b && b.loadJsInterface) {
                var e = b.loadJsInterface("piccard", "piccard_launcher");
                s_oa("gws.piccard.VelourApi.onSuccess", function() {
                    a(e.getResult())
                });
                s_oa("gws.piccard.VelourApi.onFailure", function() {
                    var a = 6;
                    e && e.getError() && (a += " " + e.getError().getMessage());
                    c(a)
                });
                e.setCallback("gws.piccard.VelourApi")
            } else
                c(5)
        }
        ,a))
    }
      , s_Aea = function() {
        new s_yea;
        return new s_9e(function(a, b) {
            var c = window.agsa_ext;
            s_a(c) ? s_a(c.getNetworkConnectionType) ? (c = c.getNetworkConnectionType(),
            "WIFI" != c && "ETHERNET" != c && "CELL_4G" != c ? b(4) : s_zea.then(a, b)) : b(3) : b(1)
        }
        )
    }
    ;
    s_yea.prototype.ka = function(a, b) {
        b.launch(a)
    }
    ;
    s_yea.prototype.$ = function(a) {
        try {
            s_de(Error("gd`" + a))
        } catch (b) {}
    }
    ;
    s_oa("gws.piccard.VelourApi.launch", function(a) {
        var b = new s_yea;
        s_zea.then(s_d(b.ka, a), b.$, b)
    });
    s_C("sy5");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy11");
    var s_Pea = function(a, b, c) {
        if (!b || !c && !a)
            return 4;
        var d = window.agsa_ext;
        if (!s_a(d))
            return 1;
        if (c) {
            if (!s_a(d.canLaunchApp))
                return 2;
            if (!d.canLaunchApp(b))
                return 3
        } else {
            if (!s_a(d.canUriBeHandledByPackage))
                return 2;
            if (!d.canUriBeHandledByPackage(a || "", b))
                return 3
        }
        return 0
    }
    ;
    s_C("sy11");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Lia = function(a) {
        return s_sc().matchMedia("(min-resolution: " + a + "dppx),(min--moz-device-pixel-ratio: " + a + "),(min-resolution: " + 96 * a + "dpi)").matches ? a : 0
    }
      , s_Mia = function() {
        var a = s_sc();
        return s_a(a.devicePixelRatio) ? a.devicePixelRatio : a.matchMedia ? s_Lia(3) || s_Lia(2) || s_Lia(1.5) || s_Lia(1) || .75 : 1
    }
    ;
    s_D("sy55");
    var s_Nia, s_Oia, s_wi = function() {
        var a = s_8h(0, !0)
          , b = s_8h(1, !0);
        return a < b
    }
    , s_Pia = function() {
        this.$ = !!(window.orientation % 180)
    }
    , s_Qia = function() {
        var a = s_Ig("client")
          , b = s_Ig("source");
        return !(!/^mobilesearchapp/.test(a) && !/^mobilesearchapp/.test(b))
    }
    , s_xi = [], s_Ria = !1, s_yi = function(a) {
        if (window.addEventListener) {
            for (var b = 0; b < s_xi.length; b++)
                if (s_xi[b] == a)
                    return;
            s_xi.push(a);
            s_Ria || (s_Nia = window.orientation,
            s_Oia = window.innerWidth,
            "orientation"in window && !s_Qia() && window.addEventListener("orientationchange", s_Sia, !1),
            window.addEventListener("resize", s_Qia() ? s_Tia : s_Sia, !1),
            s_Ria = !0)
        }
    }
    , s_zi = function(a) {
        for (var b = 0; b < s_xi.length; b++)
            if (s_xi[b] == a) {
                s_xi.splice(b, 1);
                break
            }
    }
    , s_Sia = function() {
        if (!("orientation"in window && !s_Qia() && window.orientation == s_Nia || window.innerWidth == s_Oia)) {
            var a = new s_Pia;
            s_Nia = window.orientation;
            s_Oia = window.innerWidth;
            for (var b = 0; b < s_xi.length; b++)
                s_7e(s_d(s_xi[b], a))
        }
    }
    , s_Tia = function() {
        window.setTimeout(s_Sia, 10)
    }
    ;
    s_C("sy55");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy321");
    var s_D2a = new s_sz("devloc","geo_gcpf",!1)
      , s_E2a = new s_sz("devloc","geo_eha",!1);
    var s_tz = !1
      , s_F2a = !1
      , s_G2a = new s_sz("devloc","cont_cache",!0)
      , s_H2a = new s_sz("devloc","cont_no_clear_watch",!1)
      , s_I2a = new s_sz("devloc","cont_api_tracker",!1);
    s_C("sy321");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_uz = function(a, b, c, d, e, f) {
        this.lat = a || null ;
        this.Rg = b || null ;
        this.Wi = c || null ;
        this.ma = !!d;
        this.ka = e || null ;
        this.$ = f || null
    }
    ;
    s_uz.prototype.toString = function() {
        return "{lat:" + this.lat + ", lon:" + this.Rg + ", acc:" + this.Wi + ", isCached:" + this.ma + ", ts:" + this.ka + ", addr:" + this.$ + "}"
    }
    ;
    s_D("sy322");
    var s_vz = function() {
        s_ix.call(this)
    }
    ;
    s_f(s_vz, s_ix);
    var s_J2a = null ;
    s_vz.prototype.getDescriptor = function() {
        var a = s_J2a;
        a || (s_J2a = a = s_mx(s_vz, {
            0: {
                name: "LatLng",
                hh: "location.unified.LatLng"
            },
            1: {
                name: "latitude_e7",
                mj: 15,
                type: Number
            },
            2: {
                name: "longitude_e7",
                mj: 15,
                type: Number
            }
        }));
        return a
    }
    ;
    s_vz.getDescriptor = s_vz.prototype.getDescriptor;
    var s_K2a = new s_sz("devloc","cookie_secure",!0)
      , s_L2a = new s_sz("devloc","cookie_timeout",86400)
      , s_M2a = new s_sz("devloc","cookie_domain","")
      , s_N2a = function(a) {
        var b;
        if (a && a.lat && a.Rg && a.Wi) {
            var c = new s_vz;
            s_kx(c, 1, Math.round(1E7 * Number(a.lat)));
            s_kx(c, 2, Math.round(1E7 * Number(a.Rg)));
            b = String(1E3 * Number(a.ka));
            a = 620 * Number(a.Wi);
            s_Mf.get("UULE");
            var d = ["role:"];
            d.push(1);
            d.push("\nproducer:");
            d.push(12);
            d.push("\nprovenance:");
            d.push(6);
            d.push("\ntimestamp:");
            d.push(b);
            d.push("\nlatlng{\nlatitude_e7:");
            d.push(s_jx(c, 1));
            d.push("\nlongitude_e7:");
            d.push(s_jx(c, 2));
            d.push("\n}\nradius:");
            d.push(a);
            b = d.join("");
            b = s_ch(b);
            s_Mf.set("UULE", "a+" + b, s_L2a.get(), "/", s_M2a.get(), s_K2a.get())
        }
    }
    ;
    s_C("sy322");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy28");
    var s_pha = function(a, b) {
        var c = s_4h();
        if (s_oha(b))
            c.open("GET", a, !1),
            c.send(),
            s_We(b);
        else {
            var d = s_F(function() {
                c && c.abort();
                s_We(b)
            }, 2E3);
            c.onreadystatechange = function() {
                4 == c.readyState && (s_Gf(d),
                s_We(b))
            }
            ;
            c.open("GET", a, !0);
            c.send(null )
        }
    }
      , s_5h = function(a, b, c, d, e, f, g) {
        a = "/gen_204?sa=X&ei=" + google.getEI(a) + "&ved=" + encodeURIComponent(b) + (e ? "&lei=" + encodeURIComponent(e) : "") + (d ? "&url=" + encodeURIComponent(d) : "") + (f ? "&title=" + encodeURIComponent(f) : "");
        void 0 != g && (a = a + "&ct=clpit&cad=" + encodeURIComponent(f + ":" + (g ? "1" : "0")));
        s_pha(a, c)
    }
      , s_oha = function(a) {
        return s_Bb() && s_kf() && !s_Fb("2.4") && 0 != a.indexOf("tel:")
    }
    ;
    s_oa("google.bct", s_pha);
    s_oa("google.vbct", s_5h);
    s_C("sy28");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_O2a = null
      , s_P2a = function(a) {
        this.ma = a || navigator.geolocation;
        this.$ = this.Ea = this.Wa = this.ka = null ;
        this.qa = 0
    }
      , s_S2a = function() {
        var a = s_O2a
          , b = s_Q2a
          , c = s_R2a;
        null == a.ka && (a.$ = null ,
        a.Wa = b,
        a.Ea = c,
        b = s_c(a.Ca, a),
        c = {
            enableHighAccuracy: s_E2a.get(),
            timeout: 3E4,
            maximumAge: 15E3
        },
        s_D2a.get() ? a.ma.getCurrentPosition(b, b, c) : a.ka = a.ma.watchPosition(b, b, c))
    }
      , s_T2a = function(a) {
        s_D2a.get() || null == a.ka || (a.ma.clearWatch(a.ka),
        a.ka = null )
    }
    ;
    s_P2a.prototype.Ca = function(a) {
        if (!a || "code"in a)
            this.$ || this.Ea(a);
        else {
            var b;
            !this.$ || this.$.coords.accuracy > a.coords.accuracy ? (this.$ = a,
            this.qa = 0,
            b = !1) : (this.qa++,
            10 <= this.qa && s_T2a(this),
            b = !0);
            b || (b = a.coords,
            this.Wa(new s_uz(b.latitude,b.longitude,a.coords.accuracy,!1,+a.timestamp)))
        }
    }
    ;
    var s_wz = function() {
        return s_Tf("local", "devloc")
    }
      , s_U2a = function() {
        if (!s_O2a) {
            var a;
            "geolocation"in navigator && (a = navigator.geolocation);
            s_O2a = new s_P2a(a)
        }
    }
      , s_xz = null
      , s_yz = null
      , s_zz = function(a, b, c) {
        b = "udla=3&e=" + b;
        c && (b += "&d=" + c);
        a(b)
    }
      , s_V2a = function() {
        var a = s_wz();
        if (!s_G2a.get() || !a)
            return null ;
        try {
            var b = Number(a.get("web.gws.devloc.lat"))
              , c = Number(a.get("web.gws.devloc.lon"))
              , d = Number(a.get("web.gws.devloc.acc"))
              , e = Number(a.get("web.gws.devloc.ts"));
            if (b && c && d && e && 3E5 >= s_e() - e)
                return new s_uz(b,c,d,!0,e)
        } catch (f) {}
        return null
    }
      , s_R2a = function(a) {
        s_F2a = !0;
        s_xz && s_xz.T0(a);
        s_yz.error.call(s_yz, a)
    }
      , s_Q2a = function(a) {
        var b = s_wz();
        if (!a.ma && s_G2a.get() && b && a.lat && a.Rg && a.Wi)
            try {
                b.set("web.gws.devloc.lat", a.lat),
                b.set("web.gws.devloc.lon", a.Rg),
                b.set("web.gws.devloc.acc", a.Wi),
                b.set("web.gws.devloc.ts", a.ka || s_e())
            } catch (c) {}
        s_F2a = !0;
        s_xz && s_xz.V0();
        s_yz.success.call(s_yz, a)
    }
      , s_W2a = function() {
        !s_H2a.get() && s_tz && (s_U2a(),
        s_T2a(s_O2a),
        s_tz = !1)
    }
      , s_Y2a = function(a) {
        this.ma = a;
        this.qa = 0;
        this.ka = !1;
        this.Ca = this.$ = 0;
        this.Ea = !1;
        this.Wa = s_X2a(this.hRa.bind(this))
    }
      , s_Z2a = function(a) {
        return a.Wa.then(a.ZUa.bind(a))
    }
    ;
    s_ = s_Y2a.prototype;
    s_.V0 = function(a) {
        0 != this.$ && this.ka && (a = a || s_e() - this.qa,
        s_zz(this.ma, 2 == this.$ ? 8 : 6, a),
        this.$ = 2,
        this.ka = !1)
    }
    ;
    s_.T0 = function(a, b) {
        if (0 != this.$ && this.ka) {
            this.ka = !1;
            var c = b || s_e() - this.qa;
            this.Wa = s_X2a(this.W6a.bind(this, a, c))
        }
    }
    ;
    s_.q9 = function() {
        return 1 == this.Ca && !this.ka
    }
    ;
    s_.W6a = function(a, b, c) {
        c = c.state || c.status;
        "prompt" == c ? 200 > b ? (this.Ca = 3,
        a = 10) : a = 5 : a = "granted" == c ? this.Ea && 1 == a.code ? 5 : 1 == a.code ? 11 : 1 == this.$ ? 6 : 8 : 3 == this.$ ? 9 : 7;
        s_zz(this.ma, a, b);
        a: {
            switch (a) {
            case 6:
            case 8:
                b = 2;
                break a;
            case 5:
            case 7:
            case 10:
            case 11:
            case 9:
                b = 3;
                break a
            }
            b = null
        }
        b && (this.$ = b);
        this.Ea = !1
    }
    ;
    s_.hRa = function(a) {
        switch (a.state || a.status) {
        case "granted":
            this.$ = 2;
            s_zz(this.ma, 2, void 0);
            break;
        case "denied":
            this.$ = 3;
            s_zz(this.ma, 3, void 0);
            break;
        case "prompt":
            this.$ = 1,
            s_zz(this.ma, 1, void 0)
        }
        a.addEventListener("change", s__2a(this))
    }
    ;
    s_.ZUa = function() {
        this.Ca = this.$;
        this.ka = !0;
        this.qa = s_e();
        s_zz(this.ma, 4, void 0)
    }
    ;
    var s__2a = function(a) {
        return function() {
            var b = this.state || this.status;
            "granted" == b && a.ka && (a.Ea = !0);
            if (!a.ka)
                switch (b) {
                case "denied":
                    a.$ = 3;
                    break;
                case "granted":
                    a.$ = 2;
                    break;
                case "prompt":
                    a.$ = 1
                }
        }
    }
      , s_X2a = function(a) {
        return navigator.permissions ? navigator.permissions.query({
            name: "geolocation"
        }).then(a) : Promise.resolve(0)
    }
      , s_02a = function(a) {
        a = "&ei=" + a;
        return function(b) {
            b += a;
            navigator.sendBeacon && navigator.sendBeacon(google.logUrl("", b), "") || google.log("", b)
        }
    }
      , s_12a = function() {
        if (!s_tz) {
            s_e();
            var a = s_V2a();
            a && s_Q2a(a);
            s_U2a();
            s_tz = !0;
            a = function() {
                s_S2a();
                s_F(function() {
                    s_W2a()
                }, 6E4)
            }
            ;
            s_I2a.get() ? (s_xz = new s_Y2a(s_02a(google.kEI)),
            s_Z2a(s_xz).then(a)) : a()
        }
    }
    ;
    s_D("sy323");
    var s_22a = function() {}
    ;
    s_22a.prototype.success = function() {}
    ;
    s_22a.prototype.error = function() {}
    ;
    var s_32a = new s_sz("devloc","msg_err","Location unavailable")
      , s_42a = new s_sz("devloc","uul_text","")
      , s_52a = new s_sz("devloc","msg_gps","Using GPS")
      , s_62a = new s_sz("devloc","msg_dsc","")
      , s_72a = new s_sz("devloc","msg_dvl","")
      , s_82a = new s_sz("devloc","msg_upd","update")
      , s_92a = new s_sz("devloc","msg_use","update")
      , s_$2a = new s_sz("devloc","msg_unk","Unknown")
      , s_a3a = new s_sz("devloc","mnr_crd","0")
      , s_b3a = new s_sz("devloc","dl_tld_mismatch",!1);
    var s_c3a = new s_sz("devloc","rgc_md",2E3)
      , s_d3a = new s_sz("devloc","rgc_me",10)
      , s_e3a = new s_sz("devloc","rgc_to",12096E5)
      , s_f3a = new s_sz("devloc","rgc_url","/uul?uulo=4");
    var s_g3a = function(a, b) {
        this.ka = a;
        this.$ = b || null
    }
    ;
    s_f(s_g3a, s_22a);
    s_g3a.prototype.success = function(a) {
        s_N2a(a);
        this.ka(a)
    }
    ;
    s_g3a.prototype.error = function(a) {
        this.$ && this.$(a)
    }
    ;
    var s_h3a = new s_sz("devloc","driver_ui_type",0)
      , s_Az = function(a, b) {
        s_W2a();
        s_yz = new s_g3a(a,b);
        s_12a()
    }
    ;
    s_C("sy323");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_bOc = !1
      , s_cOc = {}
      , s_0Y = []
      , s_dOc = function() {
        var a = s_wz();
        if (a) {
            var b = s_0Y.length;
            a.set("web.rgc." + google.kHL + ".count", b);
            var c, d;
            try {
                for (var e = 0; e < b; e++)
                    d = "web.rgc." + google.kHL + "." + e + ".",
                    c = s_0Y[e],
                    a.set(d + "lat", c.lat),
                    a.set(d + "lon", c.Rg),
                    a.set(d + "acc", c.Wi),
                    a.set(d + "rgc", c.Yu),
                    a.set(d + "last", c.Cy)
            } catch (f) {}
        }
    }
      , s_eOc = function() {
        if (!s_bOc) {
            var a = s_wz();
            if (a) {
                var b = Number(a.get("web.rgc." + google.kHL + ".count")) || 0, c, d;
                try {
                    for (var e = 0; e < b; e++)
                        d = "web.rgc." + google.kHL + "." + e + ".",
                        c = {},
                        c.lat = a.get(d + "lat"),
                        c.Rg = a.get(d + "lon"),
                        c.Wi = a.get(d + "acc"),
                        c.Yu = a.get(d + "rgc"),
                        c.Cy = a.get(d + "last"),
                        s_0Y.push(c),
                        s_cOc[c.Yu] = 1
                } catch (f) {}
                s_bOc = !0
            }
        }
    }
      , s_fOc = function(a, b, c) {
        this.address = a;
        this.$ = b;
        this.timestamp = s_a(c) ? c : s_e()
    }
      , s_gOc = function(a, b) {
        s_Ef(function() {
            if (b) {
                s_eOc();
                s_0Y.unshift({
                    lat: a.lat,
                    Rg: a.Rg,
                    Wi: a.Wi,
                    Yu: b,
                    Cy: s_e()
                });
                s_cOc[b] = 1;
                if (s_0Y.length > s_d3a.get()) {
                    for (var c = s_e() - s_e3a.get(), d, e = 0, f, g = s_0Y.length - 1; 0 <= g; g--)
                        if (f = s_0Y[g],
                        f.Cy < c)
                            d = g,
                            e++;
                        else {
                            0 == e && (d = g,
                            e++);
                            break
                        }
                    if (c = s_wz())
                        try {
                            for (g = d; g < d + e; g++)
                                delete s_cOc[s_0Y[g].Yu],
                                f = "rgc:" + g + ":",
                                c.remove(f + "lat"),
                                c.remove(f + "lon"),
                                c.remove(f + "acc"),
                                c.remove(f + "rgc"),
                                c.remove(f + "last");
                            s_0Y.splice(d, e)
                        } catch (k) {}
                }
                s_dOc()
            }
        })
    }
      , s_hOc = function() {
        var a = s_wz();
        if (!a)
            return null ;
        var b = a.get("swml.location")
          , c = a.get("swml.location.isdev")
          , a = a.get("swml.location.ts");
        return null == b || null == c || null == a ? null : new s_fOc(String(b),!!Number(c),Number(a))
    }
      , s_iOc = function(a) {
        var b = s_tc("span");
        s_y(b, "known_loc", a);
        s_y(b, "unknown_loc", !a);
        return b
    }
      , s_jOc = function(a) {
        this.$ = a || s_4h()
    }
    ;
    s_jOc.prototype.get = function(a, b, c) {
        if (!c && (c = s_kOc(a))) {
            b(c);
            return
        }
        c = s_f3a.get();
        google.kHL && (c = c + "&hl=" + google.kHL);
        this.$.open("GET", c, !0);
        this.$.onreadystatechange = function() {
            if (4 == this.readyState && 200 == this.status) {
                var c = this.responseText;
                s_ta(s_Ca(c)) || (s_gOc(a, c),
                b(c))
            }
        }
        ;
        this.$.send("")
    }
    ;
    var s_kOc = function(a) {
        if (!a || !a.lat || !a.Rg)
            return null ;
        s_eOc();
        for (var b = s_c3a.get(), c = null , d, e, f, g = 0; g < s_0Y.length; g++) {
            f = s_0Y[g];
            var k, l, m;
            s_ma(a) && s_ma(f) ? (k = a.lat,
            e = a.Rg,
            l = f.lat,
            m = f.Rg) : (k = a,
            e = f,
            m = l = void 0);
            k = k * Math.PI / 180;
            l = l * Math.PI / 180;
            e = 12734E3 * Math.asin(Math.min(1, Math.sqrt(Math.pow(Math.sin((l - k) / 2), 2) + Math.cos(k) * Math.cos(l) * Math.pow(Math.sin((m * Math.PI / 180 - e * Math.PI / 180) / 2), 2))));
            e < b && (b = e,
            c = f,
            d = g)
        }
        c && (c.Cy = s_e(),
        s_0Y.splice(d, 1),
        s_0Y.unshift(c),
        s_F(s_dOc, 100));
        return c && c.Yu || null
    }
      , s_lOc = function(a) {
        a = new s_fOc(a || "",!0);
        var b = s_wz();
        if (b && a)
            try {
                b.set("swml.location", a.address),
                b.set("swml.location.isdev", a.$ ? "1" : "0"),
                b.set("swml.location.ts", String(a.timestamp))
            } catch (c) {}
    }
      , s_1Y = function() {
        this.$ = ""
    }
    ;
    s_f(s_1Y, s_22a);
    s_1Y.prototype.error = function(a) {
        s_1Y.Ba.error.call(this, a);
        this.$ = ""
    }
    ;
    s_1Y.prototype.success = function(a) {
        s_1Y.Ba.success.call(this, a);
        a && a.lat && a.Rg && (this.$ = null != s_72a ? s_72a.get() : "")
    }
    ;
    s_1Y.prototype.RY = function() {
        s_yz = this;
        s_12a()
    }
    ;
    s_1Y.prototype.rP = function() {
        this.RY()
    }
    ;
    var s_mOc = function(a, b, c, d) {
        d = d || s_iOc(!0);
        c = c || s_tc("span");
        s_wc(c);
        var e = b ? b.$ || s_52a.get() : s_$2a.get()
          , f = s_m("SPAN", {
            id: "swml_addr"
        });
        f.appendChild(s_Ah(e));
        s_vc(c, d, f);
        b && a.$ && (b = s_tc("span"),
        b.appendChild(s_Ah(a.$)),
        s_vc(c, s_Ah(" - "), b))
    }
      , s_nOc = function() {
        var a = s_hOc();
        return a && a.$ ? s_e() - a.timestamp <= Number(3E5) : !1
    }
      , s_oOc = function(a, b) {
        var c = null
          , d = s_42a.get();
        if (d)
            c = s_62a;
        else {
            var e = s_hOc();
            e && (d = e.address,
            c = s_72a)
        }
        a.$ = null != c ? c.get() : "";
        c = s_iOc(s_nOc());
        s_mOc(a, d ? new s_uz(null ,null ,null ,null ,null ,d) : null , b, c)
    }
      , s_pOc = function(a) {
        var b = s_m("A", {
            href: "#"
        });
        s_uc(b, s_Ah(s_nOc() ? s_82a.get() : s_92a.get()));
        b.addEventListener("click", s_c(function(a) {
            a.preventDefault();
            a.stopPropagation();
            this.rP()
        }, a), !1);
        return b
    }
    ;
    s_1Y.prototype.pv = function(a, b) {
        s_b3a.get() || (a.appendChild(s_Ah(" - ")),
        a.appendChild(b))
    }
    ;
    var s_2Y = function(a) {
        this.$ = "";
        this.Wa = a || new s_jOc;
        this.qa = this.ma = !0;
        this.ka = null
    }
    ;
    s_f(s_2Y, s_1Y);
    var s_qOc = function() {
        var a = s_i("swml");
        if (a && "1" === s_a3a.get()) {
            var b = a.getElementsByTagName("DIV");
            if (b && b[0])
                return b[0]
        }
        return a
    }
    ;
    s_2Y.prototype.start = function() {
        s_42a.get() && (this.qa = !1);
        var a = s_qOc();
        a && (s_oOc(this, a),
        this.RY());
        s_rOc(this)
    }
    ;
    var s_rOc = function(a) {
        "1" === s_a3a.get() && s_yi(s_c(a.Ea, a))
    }
    ;
    s_ = s_2Y.prototype;
    s_.RY = function() {
        s_tz && this.ka ? this.Wa.get(this.ka, s_c(this.cFa, this, this.ka), !0) : (this.ma = !0,
        s_2Y.Ba.RY.call(this))
    }
    ;
    s_.rP = function() {
        this.qa = !0;
        this.RY()
    }
    ;
    s_.success = function(a) {
        s_2Y.Ba.success.call(this, a);
        s_N2a(a);
        this.ma && (s_lOc(null ),
        this.Wa.get(a, s_c(this.cFa, this, a)),
        this.ka = a,
        this.ma = !1)
    }
    ;
    s_.error = function(a) {
        if (this.ma) {
            var b = s_qOc();
            b && (this.qa && (s_wc(b),
            b.appendChild(s_iOc(!1)),
            b.appendChild(s_Ah(s_32a.get()))),
            a.code != a.PERMISSION_DENIED ? this.pv(b, s_pOc(this)) : (s_sOc(),
            this.Ea()))
        }
    }
    ;
    s_.cFa = function(a, b) {
        a.$ = b;
        var c = s_qOc();
        c && (s_mOc(this, a, c),
        this.pv(c, s_pOc(this)));
        s_lOc(b)
    }
    ;
    s_.pv = function(a, b) {
        s_sOc();
        s_2Y.Ba.pv.call(this, a, b);
        this.Ea()
    }
    ;
    var s_sOc = function() {
        var a = s_i("swml");
        a && (s_q(a, "visibility", "visible"),
        s_q(a, "display", ""))
    }
    ;
    s_2Y.prototype.Ea = function() {
        if ("1" === s_a3a.get()) {
            var a = s_i("swml_lmsep");
            if (a) {
                var b = s_i("swml").offsetHeight - s_Kd(s_i("swml")).top - s_Kd(s_i("swml")).bottom
                  , c = s_qOc().offsetHeight;
                a.textContent = b > c ? "\u00a0\u00a0\u00a0" : "\u00a0-\u00a0"
            }
        }
    }
    ;
    var s_tOc = function(a) {
        s_2Y.call(this, a)
    }
    ;
    s_f(s_tOc, s_2Y);
    s_tOc.prototype.start = function() {
        var a = s_qOc();
        a && (s_oOc(this, a),
        this.pv(a, s_pOc(this)));
        s_rOc(this)
    }
    ;
    s_D("dvl");
    s_oa("google.devloc.boc", function(a, b, c, d, e) {
        var f = a.getAttribute(b)
          , g = a.onclick;
        a.onclick = null ;
        a.style.opacity = .5;
        f && (s_j(c).style.display = "none",
        s_j(d).style.display = "inline-block",
        s_j(e).style.display = "none",
        s_Az(function() {
            s_5h(a, a.getAttribute("data-ved"), f)
        }, function(b) {
            b.code == b.PERMISSION_DENIED ? (s_j(c).style.display = "none",
            s_j(d).style.display = "none",
            s_j(e).style.display = "inline-block") : (s_j(c).style.display = "inline-block",
            s_j(d).style.display = "none",
            s_j(e).style.display = "none",
            a.onclick = g,
            a.style.opacity = 1)
        }))
    });
    s_we("dvl", {
        init: function(a) {
            s_rz || (s_rz = {});
            s_rz["devloc-config"] = a;
            s_C2a++;
            a = Number(s_h3a.get());
            1 == a ? (new s_2Y).start() : 2 == a && (new s_tOc).start()
        },
        dispose: function() {
            s_W2a()
        }
    });
    s_C("dvl");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy77");
    var s_vk = null
      , s_qna = !0
      , s_wk = s_b;
    s_C("sy77");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_rna = function() {
        var a = s_i("fbar")
          , b = s_i("fuser") || s_i("fsr")
          , c = s_i("fsl");
        a && b && c && (a = s_l("fbar", a),
        s_x(a, "fmulti"),
        32 > a.clientWidth - c.offsetWidth - b.offsetWidth - 30 - 34 && s_w(a, "fmulti"))
    }
      , s_sna = !1
      , s_tna = !1
      , s_una = 0
      , s_vna = function() {
        var a = s_vk = s_vk || s_i("fbarcnt")
          , b = s_i("fbar");
        if (b && a && s_Ed(a) && (s_sna || !s_tna || s_una != window.innerWidth)) {
            s_una = window.innerWidth;
            s_q(a, {
                height: "auto"
            });
            s_q(b, {
                bottom: "",
                position: ""
            });
            s_rna();
            if (s_i("dbg_"))
                s_q(b, {
                    position: "static"
                });
            else {
                var c = window.innerHeight || Math.max(document.documentElement.clientHeight, document.body.scrollHeight)
                  , d = s_td(a).y
                  , c = c - d;
                c > b.offsetHeight && (s_q(a, {
                    height: c + "px"
                }),
                s_q(b, {
                    bottom: "0",
                    position: "absolute"
                }))
            }
            s_q(a, {
                visibility: "visible"
            })
        }
    }
    ;
    s_D("foot");
    var s_wna = null
      , s_xk = null
      , s_yk = null
      , s_yna = function() {
        if (s_Ed(s_xk))
            s_yk.setAttribute("aria-expanded", "false"),
            s_xna();
        else {
            s_yk.setAttribute("aria-expanded", "true");
            var a = s_r(s_xk)
              , b = -20;
            if (s_ff())
                c = s_r(s_yk),
                0 > s_td(s_yk).x + c.width - a.width - b && (b = s_Md(s_yk),
                b = c.width - a.width + b.left + b.right),
                s_xk.style.right = b + "px";
            else {
                if (s_td(s_yk).x + a.width + b > s_nc().width)
                    var c = s_r(s_yk)
                      , b = s_Md(s_yk)
                      , b = c.width - a.width + b.left + b.right;
                s_xk.style.left = b + "px"
            }
            s_s(s_xk, !0);
            s_ye(document.body, "click", s_xna)
        }
    }
      , s_xna = function(a) {
        a && a.target == s_yk || s_s(s_xk, !1);
        s_ze(document.body, "click", s_xna)
    }
      , s_zna = function(a) {
        s_wna && s_s(s_wna, !a)
    }
    ;
    s_we("foot", {
        init: function(a) {
            s_xk = s_i("fsett");
            s_yk = s_i("fsettl");
            s_xk && s_yk && s_1h("foot", {
                cst: s_yna
            });
            var b = s_i("fbar");
            b && s_s(b, !0);
            s_wna = s_i("footcnt");
            s_zna(!1);
            var b = a.po
              , c = a.qe
              , d = a.pf;
            s_vk = s_i("fbarcnt");
            s_sna = !!c;
            s_qna = null != s_vk && (void 0 === d || d);
            s_tna = !!b;
            s_wk = s_qna ? s_5e(null , s_vna, !1) : s_rna;
            s_wk();
            s_ye(window, "resize", s_wk);
            s_Me(165, s_wk);
            void 0 !== a.dv && "" !== a.dv && s_Mf.set("DV", a.dv, 600)
        },
        dispose: function() {
            s_3h("foot", ["cst"])
        }
    });
    s_Me(37, s_zna);
    s_Me(155, s_d(s_zna, !0));
    s_C("foot");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("fpe");
    var s_pAd, s_qAd = !1, s_A5 = function(a) {
        s_h.call(this);
        var b = a || !1;
        a = !!(s_Lj() && window.gbar && gbar.elc && gbar.elr);
        this.Ea = b && !a;
        this.qa = [];
        s_qAd || (a && gbar.elc(s_c(function() {
            b && s_rAd(gbar.elr().mo);
            s_u(71)
        }, this)),
        s_qAd = !0);
        this.Ea && (this.$ = s_5e(null , s_c(this.Wa, this), !0),
        s_p(window, "resize", this.$, !1, this),
        this.$());
        (a = s_i("tbbcc")) && this.qa.push(a);
        this.ma();
        s_p(window, "scroll", this.ma, !1, this)
    }
    ;
    s_f(s_A5, s_h);
    s_A5.prototype.Ha = function() {
        this.qa = [];
        this.Ea && s_2c(window, "resize", this.$, !1, this);
        s_2c(window, "scroll", this.ma, !1, this)
    }
    ;
    var s_rAd = function(a) {
        var b = s_i("cnt")
          , c = s_i("searchform");
        b && (s_y(b, "big", "lg" == a),
        s_y(b, "mdm", "md" == a));
        c && (s_y(c, "big", "lg" == a),
        s_y(c, "mdm", "md" == a))
    }
    ;
    s_A5.prototype.Wa = function() {
        s_rAd(1250 <= document.body.offsetWidth ? "lg" : "sm")
    }
    ;
    s_A5.prototype.$ = null ;
    s_A5.prototype.ma = function() {
        var a = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
          , b = s_ff()
          , c = b ? "marginRight" : "marginLeft"
          , d = b ? "right" : "left";
        b && (a = Math.abs(a));
        for (var b = 0, e; e = this.qa[b]; b++)
            "fixed" == s_pd(e) && ("tbbcc" == e.id ? e.style[c] = -a + "px" : e.style[d] = -a + "px")
    }
    ;
    s_we("fpe", {
        init: function(a) {
            s_pAd = new s_A5(a.js)
        },
        dispose: function() {
            s_pAd && (s_pAd.dispose(),
            s_pAd = null )
        }
    });
    s_C("fpe");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("idck");
    var s_azd = {
        webhp: 1,
        imghp: 1,
        mobilewebhp: 1
    }
      , s_bzd = "";
    s_we("idck", {
        init: function(a) {
            if (google.sn != s_bzd) {
                var b = a.idckids;
                b && window.setTimeout(function() {
                    if (google.sn != s_bzd) {
                        var a;
                        a = [];
                        for (var d = b.split("."), e = 0; e < d.length; ++e) {
                            var f;
                            f = d[e].split("a");
                            for (var g = [], k = 0; k < f.length; ++k) {
                                var l = f[k].split("b");
                                0 < l[0].length && g.push(String.fromCharCode(parseInt(l[0], 10)));
                                for (var m = 1; m < l.length; ++m)
                                    g.push(l[m])
                            }
                            f = g.join("");
                            s_i(f) && a.push(e)
                        }
                        a = a.join(",");
                        google.log("idck", a + "&s=" + (google.sn in s_azd ? "1" : "0"));
                        s_bzd = google.sn
                    }
                }, Number(a.idckt))
            }
        }
    });
    s_C("idck");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("ipv6");
    var s_zk = null
      , s_Ana = function(a) {
        s_oa("google.v6t", s_e());
        s_oa("google.v6s", 0);
        s_zk = new Image;
        s_oa("google.v6", s_zk);
        s_zk.onload = s_zk.onerror = function() {
            s_oa("google.v6s", 1)
        }
        ;
        s_zk.src = a + "&rndm=" + Math.random()
    }
    ;
    s_xe("ipv6", {
        init: function(a) {
            a.url && s_Ana(a.url)
        },
        dispose: function() {
            s_zk = null
        }
    });
    s_C("ipv6");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy119");
    s_C("sy119");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_owa = function(a, b) {
        if (a)
            for (var c = a.split("&"), d = 0; d < c.length; d++) {
                var e = c[d].indexOf("="), f, g = null ;
                0 <= e ? (f = c[d].substring(0, e),
                g = c[d].substring(e + 1)) : f = c[d];
                b(f, g ? s_wa(g) : "")
            }
    }
      , s_pwa = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ s_e()).toString(36)
    }
    ;
    s_D("sy166");
    var s_Uo = function(a, b) {
        this.ka = this.Da = this.qa = "";
        this.Wa = null ;
        this.Ea = this.ma = "";
        this.Ca = !1;
        var c;
        a instanceof s_Uo ? (this.Ca = s_a(b) ? b : a.Ca,
        s_Vo(this, a.qa),
        this.Da = a.Da,
        s_Wo(this, a.ka),
        s_Xo(this, a.Wa),
        s_Yo(this, a.ma),
        s_Zo(this, a.$.clone()),
        s__o(this, a.Ea)) : a && (c = s_2d(String(a))) ? (this.Ca = !!b,
        s_Vo(this, c[1] || "", !0),
        this.Da = s_0o(c[2] || ""),
        s_Wo(this, c[3] || "", !0),
        s_Xo(this, c[4]),
        s_Yo(this, c[5] || "", !0),
        s_Zo(this, c[6] || "", !0),
        s__o(this, c[7] || "", !0)) : (this.Ca = !!b,
        this.$ = new s_1o(null ,0,this.Ca))
    }
    ;
    s_Uo.prototype.toString = function() {
        var a = []
          , b = this.qa;
        b && a.push(s_2o(b, s_qwa, !0), ":");
        var c = this.ka;
        if (c || "file" == b)
            a.push("//"),
            (b = this.Da) && a.push(s_2o(b, s_qwa, !0), "@"),
            a.push(s_va(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.Wa,
            null != c && a.push(":", String(c));
        if (c = this.ma)
            this.ka && "/" != c.charAt(0) && a.push("/"),
            a.push(s_2o(c, "/" == c.charAt(0) ? s_rwa : s_swa, !0));
        (c = this.$.toString()) && a.push("?", c);
        (c = this.Ea) && a.push("#", s_2o(c, s_twa));
        return a.join("")
    }
    ;
    s_Uo.prototype.resolve = function(a) {
        var b = this.clone()
          , c = !!a.qa;
        c ? s_Vo(b, a.qa) : c = !!a.Da;
        c ? b.Da = a.Da : c = !!a.ka;
        c ? s_Wo(b, a.ka) : c = null != a.Wa;
        var d = a.ma;
        if (c)
            s_Xo(b, a.Wa);
        else if (c = !!a.ma) {
            if ("/" != d.charAt(0))
                if (this.ka && !this.ma)
                    d = "/" + d;
                else {
                    var e = b.ma.lastIndexOf("/");
                    -1 != e && (d = b.ma.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e)
                d = "";
            else if (s_ya(e, "./") || s_ya(e, "/.")) {
                for (var d = s_qa(e, "/"), e = e.split("/"), f = [], g = 0; g < e.length; ) {
                    var k = e[g++];
                    "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                    d && g == e.length && f.push("")) : (f.push(k),
                    d = !0)
                }
                d = f.join("/")
            } else
                d = e
        }
        c ? s_Yo(b, d) : c = "" !== a.$.toString();
        c ? s_Zo(b, s_0o(a.$.toString())) : c = !!a.Ea;
        c && s__o(b, a.Ea);
        return b
    }
    ;
    s_Uo.prototype.clone = function() {
        return new s_Uo(this)
    }
    ;
    var s_Vo = function(a, b, c) {
        a.qa = c ? s_0o(b, !0) : b;
        a.qa && (a.qa = a.qa.replace(/:$/, ""))
    }
      , s_Wo = function(a, b, c) {
        a.ka = c ? s_0o(b, !0) : b
    }
      , s_Xo = function(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("sa`" + b);
            a.Wa = b
        } else
            a.Wa = null
    }
      , s_Yo = function(a, b, c) {
        a.ma = c ? s_0o(b, !0) : b;
        return a
    }
      , s_Zo = function(a, b, c) {
        b instanceof s_1o ? (a.$ = b,
        s_uwa(a.$, a.Ca)) : (c || (b = s_2o(b, s_vwa)),
        a.$ = new s_1o(b,0,a.Ca));
        return a
    }
    ;
    s_Uo.prototype.getQuery = function() {
        return this.$.toString()
    }
    ;
    var s_3o = function(a, b, c) {
        a.$.set(b, c);
        return a
    }
      , s_4o = function(a, b, c) {
        s_ha(c) || (c = [String(c)]);
        s_wwa(a.$, b, c)
    }
      , s_5o = function(a, b) {
        return a.$.get(b)
    }
      , s__o = function(a, b, c) {
        a.Ea = c ? s_0o(b) : b;
        return a
    }
      , s_6o = function(a, b) {
        return a instanceof s_Uo ? a.clone() : new s_Uo(a,b)
    }
      , s_xwa = function(a, b, c, d, e, f) {
        var g = new s_Uo(null ,void 0);
        a && s_Vo(g, a);
        b && s_Wo(g, b);
        c && s_Xo(g, c);
        d && s_Yo(g, d);
        e && s_Zo(g, e);
        f && s__o(g, f);
        return g
    }
      , s_0o = function(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
      , s_2o = function(a, b, c) {
        return s_ja(a) ? (a = encodeURI(a).replace(b, s_ywa),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null
    }
      , s_ywa = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
      , s_qwa = /[#\/\?@]/g
      , s_swa = /[\#\?:]/g
      , s_rwa = /[\#\?]/g
      , s_vwa = /[\#\?@]/g
      , s_twa = /#/g
      , s_1o = function(a, b, c) {
        this.ka = this.$ = null ;
        this.ma = a || null ;
        this.qa = !!c
    }
      , s_7o = function(a) {
        a.$ || (a.$ = new s_je,
        a.ka = 0,
        a.ma && s_owa(a.ma, function(b, c) {
            a.add(s_wa(b), c)
        }))
    }
      , s_zwa = function(a) {
        var b = s_Qca(a);
        if ("undefined" == typeof b)
            throw Error("Bd");
        var c = new s_1o(null ,0,void 0);
        a = s_ne(a);
        for (var d = 0; d < b.length; d++) {
            var e = b[d]
              , f = a[d];
            s_ha(f) ? s_wwa(c, e, f) : c.add(e, f)
        }
        return c
    }
    ;
    s_ = s_1o.prototype;
    s_.ze = function() {
        s_7o(this);
        return this.ka
    }
    ;
    s_.add = function(a, b) {
        s_7o(this);
        this.ma = null ;
        a = s_8o(this, a);
        var c = this.$.get(a);
        c || this.$.set(a, c = []);
        c.push(b);
        this.ka += 1;
        return this
    }
    ;
    s_.remove = function(a) {
        s_7o(this);
        a = s_8o(this, a);
        return s_me(this.$, a) ? (this.ma = null ,
        this.ka -= this.$.get(a).length,
        this.$.remove(a)) : !1
    }
    ;
    s_.clear = function() {
        this.$ = this.ma = null ;
        this.ka = 0
    }
    ;
    s_.isEmpty = function() {
        s_7o(this);
        return 0 == this.ka
    }
    ;
    var s_Awa = function(a, b) {
        s_7o(a);
        b = s_8o(a, b);
        return s_me(a.$, b)
    }
    ;
    s_ = s_1o.prototype;
    s_.Us = function(a) {
        var b = this.Xc();
        return s_Ta(b, a)
    }
    ;
    s_.Pf = function() {
        s_7o(this);
        for (var a = this.$.Xc(), b = this.$.Pf(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    s_.Xc = function(a) {
        s_7o(this);
        var b = [];
        if (s_ja(a))
            s_Awa(this, a) && (b = s_Za(b, this.$.get(s_8o(this, a))));
        else {
            a = this.$.Xc();
            for (var c = 0; c < a.length; c++)
                b = s_Za(b, a[c])
        }
        return b
    }
    ;
    s_.set = function(a, b) {
        s_7o(this);
        this.ma = null ;
        a = s_8o(this, a);
        s_Awa(this, a) && (this.ka -= this.$.get(a).length);
        this.$.set(a, [b]);
        this.ka += 1;
        return this
    }
    ;
    s_.get = function(a, b) {
        var c = a ? this.Xc(a) : [];
        return 0 < c.length ? String(c[0]) : b
    }
    ;
    var s_wwa = function(a, b, c) {
        a.remove(b);
        0 < c.length && (a.ma = null ,
        a.$.set(s_8o(a, b), s__a(c)),
        a.ka += c.length)
    }
    ;
    s_1o.prototype.toString = function() {
        if (this.ma)
            return this.ma;
        if (!this.$)
            return "";
        for (var a = [], b = this.$.Pf(), c = 0; c < b.length; c++)
            for (var d = b[c], e = s_va(d), d = this.Xc(d), f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + s_va(d[f]));
                a.push(g)
            }
        return this.ma = a.join("&")
    }
    ;
    s_1o.prototype.clone = function() {
        var a = new s_1o;
        a.ma = this.ma;
        this.$ && (a.$ = this.$.clone(),
        a.ka = this.ka);
        return a
    }
    ;
    var s_8o = function(a, b) {
        var c = String(b);
        a.qa && (c = c.toLowerCase());
        return c
    }
      , s_uwa = function(a, b) {
        b && !a.qa && (s_7o(a),
        a.ma = null ,
        a.$.forEach(function(a, b) {
            var c = b.toLowerCase();
            b != c && (this.remove(b),
            s_wwa(this, c, a))
        }, a));
        a.qa = b
    }
    ;
    s_1o.prototype.extend = function(a) {
        for (var b = 0; b < arguments.length; b++)
            s_Rca(arguments[b], function(a, b) {
                this.add(b, a)
            }, this)
    }
    ;
    s_C("sy166");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("lu");
    var s_dWc = ["luibli", "luibbri"]
      , s_eWc = {}
      , s_UZ = -1
      , s_fWc = null
      , s_gWc = function(a, b, c) {
        a = a.cloneNode(!0);
        var d, e;
        b.hasAttribute("data-mh") && (d = b.getAttribute("data-mh"));
        b.hasAttribute("data-mw") ? e = b.getAttribute("data-mw") : e = 88 * c - 16;
        var f;
        "IMG" == a.tagName ? f = a : f = a.getElementsByTagName("IMG")[0];
        f.id = "";
        f.width = e;
        void 0 !== d && (f.height = d);
        f.onload = function() {
            f.style.display = "block";
            delete f.onload
        }
        ;
        f.style.display = "none";
        c = f.src.split("&")[0] + "&w=" + e;
        void 0 !== d && (c += "&h=" + d);
        f.src = c;
        null != f.parentNode && (f.parentNode.style.width = e + "px",
        void 0 !== d && (f.parentNode.style.height = d + "px"));
        b.appendChild(a)
    }
      , s_hWc = function(a) {
        if (!a)
            return null ;
        var b, c = 0, d;
        for (d in a)
            if (d = Number(d),
            0 < a[d].offsetHeight) {
                b = a[d];
                c = d;
                break
            }
        if (!b)
            return null ;
        if (!b.firstChild) {
            var e;
            for (d in a)
                if (d = Number(d),
                a[d].firstChild) {
                    e = a[d];
                    break
                }
            s_gWc(e.firstChild, b, c)
        }
        return {
            element: b,
            wFa: c
        }
    }
      , s_kWc = function() {
        for (var a = s_iWc(), b = !1, c = 0; c < s_dWc.length; c++)
            for (var d = s_k(s_dWc[c]), e = 0; e < d.length; e++)
                s_jWc(d[e]) && (b = !0);
        return a || b
    }
      , s_iWc = function() {
        var a = s_i("rhs_block");
        if (!a || 0 == a.offsetHeight)
            return !1;
        a: {
            for (var b = {}, c = 3; 5 >= c; c++)
                if (b[c] = a.querySelector(".rhsmap" + c + "col"),
                b[c])
                    b[c].column_count = c;
                else {
                    a = null ;
                    break a
                }
            a = b
        }
        b = s_hWc(a);
        if (!b)
            return !1;
        a = b.wFa;
        if (s_UZ == a && s_eWc[s_UZ])
            return !0;
        b = b.element.getElementsByTagName("IMG")[0];
        b.id || (s_i("lu_map").id = "",
        b.id = "lu_map");
        s_eWc[a] || (s_eWc[a] = !0);
        s_UZ = a;
        return !0
    }
      , s_jWc = function(a) {
        for (var b = [], c, d = 3; 5 >= d; d++) {
            var e = a.querySelector(".luib-" + d);
            if (!e)
                return !1;
            e = e.querySelector(".thumb");
            if (!e)
                return !1;
            b.push(e);
            0 < e.offsetHeight && (c = e)
        }
        if (!c)
            return !1;
        var e = parseInt(c.style.width, 10)
          , f = parseInt(c.style.height, 10);
        if ((d = c.querySelector("img")) && d.src)
            return !0;
        for (var g, k, d = 0; d < b.length; d++) {
            var l = b[d].querySelector("img");
            if (l && l.src) {
                g = s_m("DIV");
                g.innerHTML = b[d].innerHTML;
                k = l;
                break
            }
        }
        if (!k)
            return !1;
        b = g.querySelector("img");
        d = "1" == a.getAttribute("data-crop");
        d || (b.width = e,
        b.height = f,
        k = s_6o(k.src),
        s_3o(k, "w", parseInt(e, 10)),
        s_3o(k, "h", parseInt(f, 10)),
        b.src = k.toString());
        c.innerHTML = g.innerHTML;
        d && (b = c.querySelector("img"),
        s_Gd(a) ? b.style.right = (e - b.width) / 2 + "px" : b.style.left = (e - b.width) / 2 + "px",
        b.style.top = (f - b.height) / 2 + "px");
        return !0
    }
    ;
    s_we("lu", {
        init: function() {
            "webhp" != google.sn && s_i("lu_map") && (s_kWc() ? (s_fWc = s_5e(null , s_kWc, !0),
            s_Me(60, s_fWc)) : (s_UZ = 3,
            s_eWc[s_UZ] = !0))
        },
        dispose: function() {
            s_fWc && (s_Ne(60, s_fWc),
            s_fWc = null );
            s_eWc = {};
            s_UZ = -1
        }
    });
    s_C("lu");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("m");
    var s_D5 = null ;
    var s_xAd, s_yAd, s_zAd, s_AAd, s_BAd, s_E5, s_CAd = {}, s_F5 = null , s_G5 = null , s_H5 = [], s_EAd = function() {
        s_D5.ab.on && (s_Me(41, s_DAd),
        s_Me(37, function(a) {
            a && (a = s_i("appbar")) && (a.style.visibility = "hidden")
        }),
        s_i("pocs"))
    }
    , s_FAd = function() {
        return s_i("sftab") || s_i("lst-ib")
    }
    , s_GAd = function() {
        var a = s_FAd();
        a && s_w(a, "lst-d-f")
    }
    , s_HAd = function() {
        var a = s_FAd();
        a && s_x(a, "lst-d-f")
    }
    , s_IAd = function(a) {
        this.element = a;
        this.$ = [];
        this.ka = null ;
        "ab_opt" == this.element.id && 0 == this.element.childNodes.length && gbar.aomc(this.element);
        a = s_k("ab_dropdownitem", this.element);
        for (var b = 0, c; c = a[b]; b++)
            s_v(c, "disabled") || this.$.push(c)
    }
    , s_KAd = function(a) {
        var b = s_F5;
        s_JAd(b, null == b.ka ? a ? 0 : b.$.length - 1 : (b.ka + (a ? 1 : b.$.length - 1)) % b.$.length)
    }
    , s_JAd = function(a, b) {
        var c = a.$[b];
        c && (s_LAd(a),
        s_w(c, "selected"),
        c.setAttribute("aria-selected", "true"),
        c = c.querySelector("a, .action-menu-button") || c,
        c.setAttribute("tabindex", "0"),
        c.focus(),
        a.ka = b)
    }
    , s_LAd = function(a) {
        var b = a.$[a.ka];
        b && (s_x(b, "selected"),
        b.setAttribute("aria-selected", "false"),
        (b.querySelector("a, .action-menu-button") || b).setAttribute("tabindex", "-1"),
        a.element.focus(),
        a.ka = null )
    }
    ;
    s_IAd.prototype.kd = function(a) {
        for (var b = 0, c; c = this.$[b]; b++)
            if (a == c) {
                b != this.ka && s_JAd(this, b);
                break
            }
    }
    ;
    var s_NAd = function(a) {
        var b = (a = s_Oc(a, "ab_button")) && s_G5 != a;
        s_F5 && s_I5();
        a && b && s_MAd(a)
    }
      , s_OAd = function(a) {
        google.ac && google.ac.cc && google.ac.cc();
        s_We(a.href);
        return !0
    }
      , s_PAd = function(a, b, c) {
        32 == c.keyCode && s_We(a.href)
    }
      , s_QAd = function(a) {
        s_s(s_i("ufp"), "block");
        s_NAd(a)
    }
      , s_MAd = function(a, b) {
        var c;
        c = s_na(a);
        if (void 0 == s_CAd[c]) {
            var d;
            d = s_Oc(a, "ab_ctl");
            var e = null ;
            d && (d = s_l("ab_dropdown", d)) && (e = new s_IAd(d));
            s_CAd[c] = e
        }
        if (c = s_CAd[c])
            s_w(a, "selected"),
            a.setAttribute("aria-expanded", "true"),
            s_G5 = a,
            c.element.style.visibility = "inherit",
            s_F5 = c,
            c = a.id.indexOf("am-b"),
            a.id && -1 != c && (c = s_Gc(a)) && s_v(c, "action-menu") && (c = s_l("action-menu-panel", c)) && s_z(a, [c], [], "", "&id=" + a.id),
            s_ye(document.body, "click", s_I5),
            s_ye(document.body, "keydown", s_RAd),
            b && s_KAd(!0)
    }
      , s_I5 = function(a) {
        s_F5 && ((a = a || window.event) && "click" == a.type && s_Oc(s_3e(a), "ab_button") && (s_4e(a),
        a.preventDefault ? a.preventDefault() : a.returnValue = !1),
        s_ze(document.body, "click", s_I5),
        s_ze(document.body, "keydown", s_RAd),
        s_LAd(s_F5),
        s_F5.element.style.visibility = "hidden",
        s_F5 = null );
        s_G5 && (s_x(s_G5, "selected"),
        s_G5.setAttribute("aria-expanded", "false"),
        s_G5 = null )
    }
      , s_RAd = function(a) {
        27 == a.keyCode && s_I5()
    }
      , s_SAd = function(a, b, c) {
        if (9 == c.keyCode)
            s_I5();
        else if (27 == c.keyCode) {
            if (s_F5)
                return s_I5(),
                s_J5(c)
        } else {
            if (38 == c.keyCode || 40 == c.keyCode)
                return s_F5 ? s_KAd(40 == c.keyCode) : s_MAd(a, !0),
                s_J5(c);
            if (37 == c.keyCode || 39 == c.keyCode)
                return s_J5(c)
        }
        return !0
    }
      , s_TAd = function(a, b, c) {
        s_F5 && ((a = s_Oc(s_3e(c), "ab_dropdownitem")) ? s_F5.kd(a) : s_LAd(s_F5))
    }
      , s_UAd = function() {
        s_F5 && s_LAd(s_F5)
    }
      , s_VAd = function(a, b, c) {
        if (s_F5)
            if (9 == c.keyCode)
                s_I5();
            else {
                if (27 == c.keyCode)
                    return a = s_G5,
                    s_I5(),
                    a.focus(),
                    s_J5(c);
                if (38 == c.keyCode)
                    return s_KAd(!1),
                    s_J5(c);
                if (40 == c.keyCode)
                    return s_KAd(!0),
                    s_J5(c);
                if (32 == c.keyCode || 37 == c.keyCode || 39 == c.keyCode)
                    return s_J5(c)
            }
        return !0
    }
      , s_J5 = function(a) {
        s_4e(a);
        a.preventDefault && a.preventDefault();
        return a.returnValue = !1
    }
      , s_WAd = function(a) {
        return s_ub() ? (37 != a.keyCode && 38 != a.keyCode && 39 != a.keyCode && 40 != a.keyCode || s_J5(a),
        !1) : !0
    }
      , s_DAd = function(a) {
        var b = s_i("rcnt")
          , c = s_Mj();
        if (c && b) {
            var d = parseInt(s_md(c, "top"), 10)
              , e = s_FAd()
              , e = e ? e.offsetHeight : c.offsetHeight
              , b = s_wd(b);
            if (a != s_xAd || d != s_yAd || e != s_zAd || b != s_AAd)
                s_xAd = a,
                s_yAd = d,
                s_zAd = e,
                s_AAd = b,
                d = 0,
                a && !s_WZa.isch && (c = s_wd(c) + e,
                d = Math.max(0, a + 7 - b + c)),
                s_BAd = d;
            (a = s_i("center_col")) && a.style.paddingTop != s_BAd + "px" && (a.style.paddingTop = s_BAd + "px")
        }
        return !1
    }
      , s_XAd = function() {
        var a = s_i("bbar");
        a && s_s(a, !1)
    }
      , s_YAd = function(a) {
        s_E5 && s_E5.remove("bbh");
        s_We(a.href)
    }
    ;
    var s_ZAd = !1;
    s_we("m", {
        init: function(a) {
            s_D5 = a;
            s_ZAd || s_EAd();
            s_ZAd = !0;
            s_FAd() && (a = s_i("lst-ib"),
            s_ye(a, "focus", s_GAd),
            s_ye(a, "blur", s_HAd),
            a == s_Vf(document) && s_GAd());
            s_E5 = s_Tf("local", "abar");
            s_H5 = [];
            (a = s_i("abar_ps_on")) && s_H5.push(new s_C5(a,s_v(a, "disabled") ? s_D5.msgs.sPersD : s_D5.msgs.sPers));
            (a = s_i("abar_ps_off")) && s_H5.push(new s_C5(a,s_v(a, "disabled") ? s_D5.msgs.hPersD : s_D5.msgs.hPers));
            a = s_E5 ? s_E5.get("bbh") : "";
            var b = document.getElementById("safesearch");
            "1" == a || b && !b.getAttribute("data-safesearch-on") || !(a = document.getElementById("bbar")) || (s_q(a, "visibility", "hidden"),
            s_s(a, !0),
            b = s_r(a),
            s_q(a, "margin-left", -Math.floor(b.width / 2) + "px"),
            s_q(a, "visibility", "visible"),
            s_E5 && s_E5.set("bbh", 1));
            s_1h("m", {
                cc: s_OAd,
                hbke: s_SAd,
                hdke: s_VAd,
                hdhne: s_TAd,
                hdhue: s_UAd,
                go: s_PAd,
                mskpe: s_WAd,
                tdd: s_NAd,
                tei: s_QAd,
                hbb: s_XAd,
                cbbl: s_YAd
            }, !0);
            s_1h("ab", {
                cc: s_OAd,
                hbke: s_SAd,
                hdke: s_VAd,
                hdhne: s_TAd,
                hdhue: s_UAd,
                go: s_PAd,
                mskpe: s_WAd,
                tdd: s_NAd,
                tei: s_QAd,
                hbb: s_XAd,
                cbbl: s_YAd
            }, !0)
        },
        dispose: function() {
            if (s_FAd()) {
                var a = s_i("lst-ib");
                s_ze(a, "focus", s_GAd);
                s_ze(a, "blur", s_HAd)
            }
            s_F5 && s_I5();
            s_CAd = {};
            for (a = 0; a < s_H5.length; a++)
                s_H5[a].destroy();
            s_H5 = [];
            s_3h("ab", "cc hbke hdke hdhne hdhue go mskpe tdd tei tne".split(" "))
        }
    });
    s_C("m");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sf");
    s_we("sf", {
        init: function() {
            s_1h("sf", {
                chk: function(a) {
                    a.checked = !0
                },
                lck: function(a) {
                    a.form.q.value ? a.checked = !0 : s_$d().href = "/doodles/"
                },
                tia: function(a, b) {
                    var c = s_m("SCRIPT", {
                        src: b.js
                    });
                    s_Od(c)
                }
            })
        }
    });
    s_C("sf");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy183");
    s_C("sy183");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_toa = function(a) {
        return new s_dc(a.width,a.height)
    }
      , s_uoa = function(a) {
        if (a instanceof s_3b)
            return a;
        a = s_6b(a);
        var b;
        b = s_4b(a).replace(/(\r\n|\r|\n)/g, "<br>");
        return s_5b(b, a.Vq())
    }
    ;
    s_D("sy83");
    var s_il = function(a) {
        var b = s_Gd(a);
        return b && s_Lb ? -a.scrollLeft : !b || s_Paa && s_Tb("8") || "visible" == s_od(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft
    }
      , s_jl = function(a) {
        var b = a.offsetLeft
          , c = a.offsetParent;
        c || "fixed" != s_pd(a) || (c = s_gc(a).documentElement);
        if (!c)
            return b;
        if (s_Lb)
            var d = s_ud(c)
              , b = b + d.left;
        else
            s_Ub(8) && !s_Ub(9) && (d = s_ud(c),
            b -= d.left);
        return s_Gd(c) ? c.clientWidth - (b + a.offsetWidth) : b
    }
      , s_kl = function(a, b) {
        b = Math.max(b, 0);
        s_Gd(a) ? s_Lb ? a.scrollLeft = -b : s_Paa && s_Tb("8") ? a.scrollLeft = b : a.scrollLeft = a.scrollWidth - b - a.clientWidth : a.scrollLeft = b
    }
    ;
    s_C("sy83");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Xi = function(a, b, c) {
        return s_l(b, c || a.$)
    }
      , s_Yi = function(a, b, c) {
        return s_k(b, c || a.$)
    }
      , s_aja = function(a, b) {
        return b.y < a.top ? b.y - a.top : b.y > a.bottom ? b.y - a.bottom : 0
    }
      , s_bja = function(a, b) {
        return b.x < a.left ? b.x - a.left : b.x > a.right ? b.x - a.right : 0
    }
      , s_cja = function(a) {
        return a.contentDocument || a.contentWindow.document
    }
      , s_dja = function(a, b) {
        var c = s_bja(a, b)
          , d = s_aja(a, b);
        return Math.sqrt(c * c + d * d)
    }
    ;
    s_D("sy46");
    var s_Zi = function(a) {
        s_h.call(this);
        this.Ga = a;
        this.Wa = {}
    }
    ;
    s_f(s_Zi, s_h);
    var s_eja = [];
    s_Zi.prototype.listen = function(a, b, c, d) {
        return s__i(this, a, b, c, d)
    }
    ;
    var s__i = function(a, b, c, d, e, f) {
        s_ha(c) || (c && (s_eja[0] = c.toString()),
        c = s_eja);
        for (var g = 0; g < c.length; g++) {
            var k = s_p(b, c[g], d || a.handleEvent, e || !1, f || a.Ga || a);
            if (!k)
                break;
            a.Wa[k.key] = k
        }
        return a
    }
      , s_0i = function(a, b, c, d) {
        s_fja(a, b, c, d, void 0)
    }
      , s_fja = function(a, b, c, d, e, f) {
        if (s_ha(c))
            for (var g = 0; g < c.length; g++)
                s_fja(a, b, c[g], d, e, f);
        else
            (b = s_1c(b, c, d || a.handleEvent, e, f || a.Ga || a)) && (a.Wa[b.key] = b)
    }
    ;
    s_Zi.prototype.unlisten = function(a, b, c, d, e) {
        if (s_ha(b))
            for (var f = 0; f < b.length; f++)
                this.unlisten(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
            e = e || this.Ga || this,
            c = s__c(c),
            d = !!d,
            b = s_Yc(a) ? s_Yba(a.Ma, String(b), c, d, e) : a ? (a = s_0c(a)) ? s_Yba(a, b, c, d, e) : null : null ,
            b && (s_3c(b),
            delete this.Wa[b.key]);
        return this
    }
    ;
    s_Zi.prototype.removeAll = function() {
        s_bb(this.Wa, function(a, b) {
            this.Wa.hasOwnProperty(b) && s_3c(a)
        }, this);
        this.Wa = {}
    }
    ;
    s_Zi.prototype.Ha = function() {
        s_Zi.Ba.Ha.call(this);
        this.removeAll()
    }
    ;
    s_Zi.prototype.handleEvent = function() {
        throw Error("l");
    }
    ;
    s_C("sy46");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Npa = /^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/
      , s_Opa = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    }
      , s_Ppa = /^[a-zA-Z0-9-]+$/
      , s_Qpa = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    }
      , s_Rpa = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    s_D("sy102");
    var s_Tl = function(a, b) {
        s_ha(b) || (b = [b]);
        var c = s_Na(b, function(a) {
            return s_ja(a) ? a : a.Gf + " " + a.duration + "s " + a.timing + " " + a.Tc + "s"
        });
        s_Spa(a, c.join(","))
    }
      , s_Ul = function(a) {
        s_Spa(a, "")
    }
      , s_Vl = s_ed(function() {
        if (s_Jb)
            return s_Tb("10.0");
        var a = s_tc("DIV")
          , b = s_Tc()
          , c = {
            transition: "opacity 1s linear"
        };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        if (!s_Ppa.test("div"))
            throw Error("da`div");
        if ("DIV"in s_Rpa)
            throw Error("ea`div");
        var c = null , d, e = "";
        if (b)
            for (d in b) {
                if (!s_Ppa.test(d))
                    throw Error("fa`" + d);
                var f = b[d];
                if (null != f) {
                    var g;
                    g = d;
                    if (f instanceof s_Vb)
                        f = s_Wb(f);
                    else if ("style" == g.toLowerCase()) {
                        if (!s_ma(f))
                            throw Error("ia`" + typeof f + "`" + f);
                        if (!(f instanceof s_Yb)) {
                            var k = ""
                              , l = void 0;
                            for (l in f) {
                                if (!/^[-_a-zA-Z0-9]+$/.test(l))
                                    throw Error("$`" + l);
                                var m = f[l];
                                if (null != m) {
                                    if (m instanceof s_Vb)
                                        m = s_Wb(m);
                                    else if (s_Npa.test(m)) {
                                        for (var n = !0, ba = !0, t = 0; t < m.length; t++) {
                                            var w = m.charAt(t);
                                            "'" == w && ba ? n = !n : '"' == w && n && (ba = !ba)
                                        }
                                        n && ba || (m = "zClosurez")
                                    } else
                                        m = "zClosurez";
                                    k += l + ":" + m + ";"
                                }
                            }
                            f = k ? s_8aa(k) : s_9aa
                        }
                        f instanceof s_Yb && f.constructor === s_Yb && f.ka === s_7aa ? f = f.$ : (s_fa(f),
                        f = "type_error:SafeStyle")
                    } else {
                        if (/^on/i.test(g))
                            throw Error("ga`" + g + "`" + f);
                        if (g.toLowerCase()in s_Opa)
                            if (f instanceof s_2b)
                                f = s_kba(f);
                            else if (f instanceof s__b)
                                f = s_0b(f);
                            else if (s_ja(f))
                                f = s_1b(f).yo();
                            else
                                throw Error("cd`" + g + "`div`" + f);
                    }
                    f.qu && (f = f.yo());
                    g = g + '="' + s_xa(String(f)) + '"';
                    e += " " + g
                }
            }
        d = "<div" + e;
        e = void 0;
        null != e ? s_ha(e) || (e = [e]) : e = [];
        !0 === s_Qpa.div ? d += ">" : (c = s_nba(e),
        d += ">" + s_4b(c) + "</div>",
        c = c.Vq());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null );
        b = s_5b(d, c);
        s_7b(a, b);
        return "" != s_ld(a.firstChild, "transition")
    })
      , s_Spa = function(a, b) {
        s_q(a, "transition", b)
    }
    ;
    s_C("sy102");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy184");
    var s_9q = function() {
        s_7c.call(this);
        this.ma = 0;
        this.endTime = this.startTime = null
    }
    ;
    s_f(s_9q, s_7c);
    var s_$q = function(a) {
        return 1 == a.ma
    }
    ;
    s_ = s_9q.prototype;
    s_.ue = function() {
        this.Oj("begin")
    }
    ;
    s_.xe = function() {
        this.Oj("end")
    }
    ;
    s_.Hu = function() {
        this.Oj("finish")
    }
    ;
    s_.Ju = function() {
        this.Oj("play")
    }
    ;
    s_.onStop = function() {
        this.Oj("stop")
    }
    ;
    s_.Oj = function(a) {
        this.dispatchEvent(a)
    }
    ;
    s_C("sy184");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy160");
    var s_to = function() {}
    ;
    s_ea(s_to);
    s_to.prototype.$ = 0;
    var s_uo = function(a) {
        return ":" + (a.$++).toString(36)
    }
    ;
    s_C("sy160");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy244");
    var s_Du = function(a, b) {
        null != a && this.append.apply(this, arguments)
    }
    ;
    s_ = s_Du.prototype;
    s_.Pk = "";
    s_.set = function(a) {
        this.Pk = "" + a
    }
    ;
    s_.append = function(a, b, c) {
        this.Pk += String(a);
        if (null != b)
            for (var d = 1; d < arguments.length; d++)
                this.Pk += arguments[d];
        return this
    }
    ;
    s_.clear = function() {
        this.Pk = ""
    }
    ;
    s_.toString = function() {
        return this.Pk
    }
    ;
    s_C("sy244");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_8La = function(a) {
        if (s_Jb && !s_Ub(8))
            return a.offsetParent;
        var b = s_gc(a)
          , c = s_od(a, "position")
          , d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host),
            c = s_od(a, "position"),
            d = d && "static" == c && a != b.documentElement && a != b.body,
            !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                return a;
        return null
    }
      , s_kt = function(a) {
        for (var b = new s_id(0,Infinity,Infinity,0), c = s_hc(a), d = c.$.body, e = c.$.documentElement, f = s_qc(c.$); a = s_8La(a); )
            if (!(s_Jb && 0 == a.clientWidth || s_Mb && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != s_od(a, "overflow")) {
                var g = s_td(a)
                  , k = new s_$b(a.clientLeft,a.clientTop);
                g.x += k.x;
                g.y += k.y;
                b.top = Math.max(b.top, g.y);
                b.right = Math.min(b.right, g.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                b.left = Math.max(b.left, g.x)
            }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = s_nc(s_Qc(c));
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }
    ;
    s_D("sy205");
    var s_mt = function(a, b, c, d, e, f, g, k, l) {
        var m = s_9La(c)
          , n = s_Cd(a)
          , ba = s_kt(a);
        if (ba) {
            var t = new s_jd(ba.left,ba.top,ba.right - ba.left,ba.bottom - ba.top)
              , ba = Math.max(n.left, t.left)
              , w = Math.min(n.left + n.width, t.left + t.width);
            if (ba <= w) {
                var B = Math.max(n.top, t.top)
                  , t = Math.min(n.top + n.height, t.top + t.height);
                B <= t && (n.left = ba,
                n.top = B,
                n.width = w - ba,
                n.height = t - B)
            }
        }
        ba = s_hc(a);
        w = s_hc(c);
        if (ba.$ != w.$) {
            ba = ba.$.body;
            w = s_Qc(w);
            B = new s_$b(0,0);
            t = s_sc(s_gc(ba));
            if (s_Oaa(t, "parent")) {
                var G = ba;
                do {
                    var I = t == w ? s_td(G) : s_ica(G);
                    B.x += I.x;
                    B.y += I.y
                } while (t && t != w && t != t.parent && (G = t.frameElement) && (t = t.parent))
            }
            ba = s_cc(B, s_td(ba));
            n.left += ba.x;
            n.top += ba.y
        }
        a = s_$La(a, b);
        b = n.left;
        a & 4 ? b += n.width : a & 2 && (b += n.width / 2);
        n = new s_$b(b,n.top + (a & 1 ? n.height : 0));
        n = s_cc(n, m);
        e && (n.x += (a & 4 ? -1 : 1) * e.x,
        n.y += (a & 1 ? -1 : 1) * e.y);
        var N;
        if (g)
            if (l)
                N = l;
            else if (N = s_kt(c))
                N.top -= m.y,
                N.right -= m.x,
                N.bottom -= m.y,
                N.left -= m.x;
        return s_lt(n, c, d, f, N, g, k)
    }
      , s_9La = function(a) {
        var b;
        if (a = a.offsetParent) {
            var c = "HTML" == a.tagName || "BODY" == a.tagName;
            c && "static" == s_pd(a) || (b = s_td(a),
            c || (b = s_cc(b, new s_$b(s_il(a),a.scrollTop))))
        }
        return b || new s_$b
    }
      , s_lt = function(a, b, c, d, e, f, g) {
        a = a.clone();
        var k = s_$La(b, c);
        c = s_r(b);
        g = g ? g.clone() : c.clone();
        a = a.clone();
        g = g.clone();
        var l = 0;
        if (d || 0 != k)
            k & 4 ? a.x -= g.width + (d ? d.right : 0) : k & 2 ? a.x -= g.width / 2 : d && (a.x += d.left),
            k & 1 ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (f) {
            if (e) {
                d = a;
                k = g;
                l = 0;
                65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                d.x < e.left && f & 1 && (d.x = e.left,
                l |= 1);
                if (f & 16) {
                    var m = d.x;
                    d.x < e.left && (d.x = e.left,
                    l |= 4);
                    d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, m + k.width - e.left),
                    k.width = Math.max(k.width, 0),
                    l |= 4)
                }
                d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left),
                l |= 1);
                f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                d.y < e.top && f & 4 && (d.y = e.top,
                l |= 2);
                f & 32 && (m = d.y,
                d.y < e.top && (d.y = e.top,
                l |= 8),
                d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top),
                k.height = Math.max(k.height, 0),
                l |= 8));
                d.y + k.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - k.height, e.top),
                l |= 2);
                f & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
                e = l
            } else
                e = 256;
            l = e
        }
        f = new s_jd(0,0,0,0);
        f.left = a.x;
        f.top = a.y;
        f.width = g.width;
        f.height = g.height;
        e = l;
        if (e & 496)
            return e;
        s_qd(b, new s_$b(f.left,f.top));
        g = s_toa(f);
        s_ec(c, g) || (c = g,
        a = s_Gba(s_hc(s_gc(b))),
        !s_Jb || s_Tb("10") || a && s_Tb("8") ? (b = b.style,
        s_Lb ? b.MozBoxSizing = "border-box" : s_Mb ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box",
        b.width = Math.max(c.width, 0) + "px",
        b.height = Math.max(c.height, 0) + "px") : (g = b.style,
        a ? (a = s_Kd(b),
        b = s_ud(b),
        g.pixelWidth = c.width - b.left - a.left - a.right - b.right,
        g.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (g.pixelWidth = c.width,
        g.pixelHeight = c.height)));
        return e
    }
      , s_$La = function(a, b) {
        return (b & 8 && s_Gd(a) ? b ^ 4 : b) & -9
    }
    ;
    s_C("sy205");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy259");
    s_C("sy259");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy204");
    var s_jt = function() {}
    ;
    s_jt.prototype.$ = function() {}
    ;
    s_C("sy204");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy256");
    var s_Yv = function(a, b, c, d, e) {
        s_9q.call(this);
        this.Aa = a;
        this.Lw = b;
        this.Ea = c;
        this.$ = d;
        this.Wa = s_ha(e) ? e : [e]
    }
    ;
    s_f(s_Yv, s_9q);
    s_ = s_Yv.prototype;
    s_.play = function() {
        if (s_$q(this))
            return !1;
        this.ue();
        this.Ju();
        this.startTime = s_e();
        this.ma = 1;
        if (s_Vl())
            return s_q(this.Aa, this.Ea),
            this.qa = s_Xf(this.cW, void 0, this),
            !0;
        this.dC(!1);
        return !1
    }
    ;
    s_.cW = function() {
        s_r(this.Aa);
        s_Tl(this.Aa, this.Wa);
        s_q(this.Aa, this.$);
        this.qa = s_Xf(s_c(this.dC, this, !1), 1E3 * this.Lw)
    }
    ;
    s_.stop = function() {
        s_$q(this) && this.dC(!0)
    }
    ;
    s_.dC = function(a) {
        s_Ul(this.Aa);
        s_Yf(this.qa);
        s_q(this.Aa, this.$);
        this.endTime = s_e();
        this.ma = 0;
        if (a)
            this.onStop();
        else
            this.Hu();
        this.xe()
    }
    ;
    s_.Ha = function() {
        this.stop();
        s_Yv.Ba.Ha.call(this)
    }
    ;
    s_.pause = function() {}
    ;
    s_C("sy256");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy41");
    var s_7ia;
    s_rb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
    var s_Ki = function(a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    }
      , s_Li = function(a) {
        return a.getAttribute("role") || null
    }
      , s_Mi = function(a, b, c) {
        s_ha(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (s_7ia || (s_7ia = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }),
        c = s_7ia,
        b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    }
      , s_Ni = function(a, b) {
        a.removeAttribute("aria-" + b)
    }
      , s_Oi = function(a, b) {
        var c = a.getAttribute("aria-" + b);
        return null == c || void 0 == c ? "" : String(c)
    }
      , s_8ia = function(a, b) {
        var c = "";
        b && (c = b.id);
        s_Mi(a, "activedescendant", c)
    }
    ;
    s_C("sy41");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy161");
    var s_vo = function(a) {
        s_7c.call(this);
        this.Fa = a || s_hc();
        this.Vc = s_Lva;
        this.jd = null ;
        this.Hb = !1;
        this.Aa = null ;
        this.rb = void 0;
        this.Ja = this.Wa = this.Ca = this.Ka = null ;
        this.JQ = !1
    }
    ;
    s_f(s_vo, s_7c);
    s_vo.prototype.WZ = s_to.Sa();
    var s_Lva = null ;
    s_vo.prototype.getId = function() {
        return this.jd || (this.jd = s_uo(this.WZ))
    }
    ;
    s_vo.prototype.Qd = function(a) {
        this.Ca && this.Ca.Ja && (s_kb(this.Ca.Ja, this.jd),
        s_lb(this.Ca.Ja, a, this));
        this.jd = a
    }
    ;
    s_vo.prototype.va = function() {
        return this.Aa
    }
    ;
    var s_wo = function(a, b) {
        return a.Aa ? s_Xi(a.Fa, b, a.Aa) : null
    }
      , s_xo = function(a) {
        a.rb || (a.rb = new s_Zi(a));
        return a.rb
    }
      , s_zo = function(a, b) {
        if (a == b)
            throw Error("xa");
        if (b && a.Ca && a.jd && s_yo(a.Ca, a.jd) && a.Ca != b)
            throw Error("xa");
        a.Ca = b;
        s_vo.Ba.Vb.call(a, b)
    }
    ;
    s_vo.prototype.getParent = function() {
        return this.Ca
    }
    ;
    s_vo.prototype.Vb = function(a) {
        if (this.Ca && this.Ca != a)
            throw Error("ya");
        s_vo.Ba.Vb.call(this, a)
    }
    ;
    s_vo.prototype.Ob = function() {
        this.Aa = this.Fa.createElement("DIV")
    }
    ;
    s_vo.prototype.render = function(a) {
        s_Mva(this, a)
    }
    ;
    var s_Mva = function(a, b, c) {
        if (a.Hb)
            throw Error("za");
        a.Aa || a.Ob();
        b ? b.insertBefore(a.Aa, c || null ) : a.Fa.$.body.appendChild(a.Aa);
        a.Ca && !a.Ca.Hb || a.Eb()
    }
    ;
    s_ = s_vo.prototype;
    s_.Gc = function(a) {
        if (this.Hb)
            throw Error("za");
        if (a && this.Lt(a)) {
            this.JQ = !0;
            var b = s_gc(a);
            this.Fa && this.Fa.$ == b || (this.Fa = s_hc(a));
            this.Oc(a);
            this.Eb()
        } else
            throw Error("Aa");
    }
    ;
    s_.Lt = function() {
        return !0
    }
    ;
    s_.Oc = function(a) {
        this.Aa = a
    }
    ;
    s_.Eb = function() {
        this.Hb = !0;
        s_Ao(this, function(a) {
            !a.Hb && a.va() && a.Eb()
        })
    }
    ;
    s_.$b = function() {
        s_Ao(this, function(a) {
            a.Hb && a.$b()
        });
        this.rb && this.rb.removeAll();
        this.Hb = !1
    }
    ;
    s_.Ha = function() {
        this.Hb && this.$b();
        this.rb && (this.rb.dispose(),
        delete this.rb);
        s_Ao(this, function(a) {
            a.dispose()
        });
        !this.JQ && this.Aa && s_n(this.Aa);
        this.Ca = this.Ka = this.Aa = this.Ja = this.Wa = null ;
        s_vo.Ba.Ha.call(this)
    }
    ;
    s_.Ta = function() {
        return this.Ka
    }
    ;
    s_.wb = function(a, b) {
        this.Tv(a, s_Bo(this), b)
    }
    ;
    s_.Tv = function(a, b, c) {
        if (a.Hb && (c || !this.Hb))
            throw Error("za");
        if (0 > b || b > s_Bo(this))
            throw Error("Ba");
        this.Ja && this.Wa || (this.Ja = {},
        this.Wa = []);
        if (a.getParent() == this) {
            var d = a.getId();
            this.Ja[d] = a;
            s_Ya(this.Wa, a)
        } else
            s_lb(this.Ja, a.getId(), a);
        s_zo(a, this);
        s_2a(this.Wa, b, 0, a);
        a.Hb && this.Hb && a.getParent() == this ? (c = this.Hc(),
        b = c.childNodes[b] || null ,
        b != a.va() && c.insertBefore(a.va(), b)) : c ? (this.Aa || this.Ob(),
        b = s_Co(this, b + 1),
        s_Mva(a, this.Hc(), b ? b.Aa : null )) : this.Hb && !a.Hb && a.Aa && a.Aa.parentNode && 1 == a.Aa.parentNode.nodeType && a.Eb()
    }
    ;
    s_.Hc = function() {
        return this.Aa
    }
    ;
    var s_Do = function(a) {
        null == a.Vc && (a.Vc = s_Gd(a.Hb ? a.Aa : a.Fa.$.body));
        return a.Vc
    }
      , s_Bo = function(a) {
        return a.Wa ? a.Wa.length : 0
    }
      , s_yo = function(a, b) {
        return a.Ja && b ? s_mb(a.Ja, b) || null : null
    }
      , s_Co = function(a, b) {
        return a.Wa ? a.Wa[b] || null : null
    }
      , s_Ao = function(a, b, c) {
        a.Wa && s_g(a.Wa, b, c)
    }
    ;
    s_vo.prototype.removeChild = function(a, b) {
        if (a) {
            var c = s_ja(a) ? a : a.getId();
            a = s_yo(this, c);
            c && a && (s_kb(this.Ja, c),
            s_Ya(this.Wa, a),
            b && (a.$b(),
            a.Aa && s_n(a.Aa)),
            s_zo(a, null ))
        }
        if (!a)
            throw Error("Ca");
        return a
    }
    ;
    var s_Nva = function(a) {
        for (var b = []; a.Wa && 0 != a.Wa.length; )
            b.push(a.removeChild(s_Co(a, 0), !0))
    }
    ;
    s_C("sy161");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy243");
    s_Jb && s_Tb(8);
    var s_Eu = {}
      , s_2Pa = {}
      , s_3Pa = {}
      , s_Fu = function() {
        throw Error("Ha");
    }
    ;
    s_Fu.prototype.Vs = null ;
    s_Fu.prototype.getContent = function() {
        return this.content
    }
    ;
    s_Fu.prototype.toString = function() {
        return this.content
    }
    ;
    var s_4Pa = function() {
        s_Fu.call(this)
    }
    ;
    s_f(s_4Pa, s_Fu);
    var s_7Pa = function(a, b, c, d) {
        a = a(b || s_5Pa, void 0, c);
        d = (d || s_hc()).createElement("DIV");
        a = s_6Pa(a);
        d.innerHTML = a;
        1 == d.childNodes.length && (a = d.firstChild,
        1 == a.nodeType && (d = a));
        return d
    }
      , s_6Pa = function(a) {
        if (!s_ma(a))
            return String(a);
        if (a instanceof s_Fu) {
            if (a.Nj === s_Eu)
                return a.getContent();
            if (a.Nj === s_3Pa)
                return s_xa(a.getContent())
        }
        return "zSoyz"
    }
      , s_5Pa = {};
    var s_8Pa = function(a) {
        if (null != a)
            switch (a.Vs) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
            }
        return null
    }
      , s_Gu = function() {
        s_Fu.call(this)
    }
    ;
    s_f(s_Gu, s_Fu);
    s_Gu.prototype.Nj = s_Eu;
    var s_Iu = function(a) {
        return null != a && a.Nj === s_Eu ? a : a instanceof s_3b ? s_Hu(s_4b(a), a.Vq()) : s_Hu(s_xa(String(String(a))), s_8Pa(a))
    }
      , s_9Pa = function(a, b) {
        this.content = String(a);
        this.Vs = null != b ? b : null
    }
    ;
    s_f(s_9Pa, s_4Pa);
    s_9Pa.prototype.Nj = s_3Pa;
    var s_Hu = function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var c = new b(String(a));
            void 0 !== d && (c.Vs = d);
            return c
        }
    }(s_Gu);
    (function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var c = String(a);
            if (!c)
                return "";
            c = new b(c);
            void 0 !== d && (c.Vs = d);
            return c
        }
    })(s_Gu);
    var s_Ju = function(a) {
        return null != a && a.Nj === s_Eu ? String(String(a.getContent()).replace(s_$Pa, "").replace(s_aQa, "&lt;")).replace(s_bQa, s_cQa) : s_xa(String(a))
    }
      , s_eQa = function(a) {
        null != a && a.Nj === s_2Pa ? a = a.getContent().replace(/([^"'\s])$/, "$1 ") : (a = String(a),
        a = s_dQa.test(a) ? a : "zSoyz");
        return a
    }
      , s_fQa = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    }
      , s_cQa = function(a) {
        return s_fQa[a]
    }
      , s_bQa = /[\x00\x22\x27\x3c\x3e]/g
      , s_dQa = /^(?!on|src|(?:style|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i
      , s_$Pa = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
      , s_aQa = /</g;
    s_C("sy243");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Mv = function(a, b) {
        s_7c.call(this);
        this.$ = new s_Zi(this);
        this.zm(a || null );
        b && (this.Pa = b)
    }
    ;
    s_f(s_Mv, s_7c);
    s_ = s_Mv.prototype;
    s_.Aa = null ;
    s_.hH = !0;
    s_.Js = null ;
    s_.kC = null ;
    s_.Do = !1;
    s_.mD = -1;
    s_.jD = -1;
    s_.ly = !1;
    s_.Pa = "toggle_display";
    s_.getType = function() {
        return this.Pa
    }
    ;
    s_.va = function() {
        return this.Aa
    }
    ;
    s_.zm = function(a) {
        s_8Ta(this);
        this.Aa = a
    }
    ;
    var s_Nv = function(a, b) {
        s_8Ta(a);
        a.hH = b
    }
      , s_8Ta = function(a) {
        if (a.Do)
            throw Error("Xa");
    }
    ;
    s_Mv.prototype.Ua = function() {
        return this.Do
    }
    ;
    var s_9Ta = function(a) {
        return a.Do || 150 > s_e() - a.jD
    }
    ;
    s_Mv.prototype.setVisible = function(a) {
        this.Ka && this.Ka.stop();
        this.Db && this.Db.stop();
        if (a) {
            if (!this.Do && this.ND()) {
                if (!this.Aa)
                    throw Error("Ya");
                this.Ia();
                a = s_gc(this.Aa);
                this.ly && this.$.listen(a, "keydown", this.V2, !0);
                if (this.hH)
                    if (this.$.listen(a, "mousedown", this.jM, !0),
                    s_Jb) {
                        var b;
                        try {
                            b = a.activeElement
                        } catch (d) {}
                        for (; b && "IFRAME" == b.nodeName; ) {
                            try {
                                var c = s_cja(b)
                            } catch (d) {
                                break
                            }
                            a = c;
                            b = a.activeElement
                        }
                        this.$.listen(a, "mousedown", this.jM, !0);
                        this.$.listen(a, "deactivate", this.iM)
                    } else
                        this.$.listen(a, "blur", this.iM);
                "toggle_display" == this.Pa ? (this.Aa.style.visibility = "visible",
                s_s(this.Aa, !0)) : "move_offscreen" == this.Pa && this.Ia();
                this.Do = !0;
                this.mD = s_e();
                this.jD = -1;
                this.Ka ? (s_1c(this.Ka, "end", this.Gt, !1, this),
                this.Ka.play()) : this.Gt()
            }
        } else
            s_$Ta(this)
    }
    ;
    s_Mv.prototype.Ia = s_b;
    var s_$Ta = function(a, b) {
        if (!a.Do || !a.dispatchEvent({
            type: "beforehide",
            target: b
        }))
            return !1;
        a.$ && a.$.removeAll();
        a.Do = !1;
        a.jD = s_e();
        a.Db ? (s_1c(a.Db, "end", s_d(a.QH, b), !1, a),
        a.Db.play()) : a.QH(b);
        return !0
    }
    ;
    s_ = s_Mv.prototype;
    s_.QH = function(a) {
        "toggle_display" == this.Pa ? this.J0() : "move_offscreen" == this.Pa && (this.Aa.style.top = "-10000px");
        this.Sn(a)
    }
    ;
    s_.J0 = function() {
        this.Aa.style.visibility = "hidden";
        s_s(this.Aa, !1)
    }
    ;
    s_.ND = function() {
        return this.dispatchEvent("beforeshow")
    }
    ;
    s_.Gt = function() {
        this.dispatchEvent("show")
    }
    ;
    s_.Sn = function(a) {
        this.dispatchEvent({
            type: "hide",
            target: a
        })
    }
    ;
    s_.jM = function(a) {
        a = a.target;
        s_Hc(this.Aa, a) || s_aUa(this, a) || this.kC && !s_Hc(this.kC, a) || 150 > s_e() - this.mD || s_$Ta(this, a)
    }
    ;
    s_.V2 = function(a) {
        27 == a.keyCode && s_$Ta(this, a.target) && (a.preventDefault(),
        a.stopPropagation())
    }
    ;
    s_.iM = function(a) {
        var b = s_gc(this.Aa);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement,
            !a || s_Hc(this.Aa, a) || "BODY" == a.tagName)
                return
        } else if (a.target != b)
            return;
        150 > s_e() - this.mD || s_$Ta(this)
    }
    ;
    var s_aUa = function(a, b) {
        return s_Pa(a.Js || [], function(a) {
            return b === a || s_Hc(a, b)
        })
    }
    ;
    s_Mv.prototype.Ha = function() {
        s_Mv.Ba.Ha.call(this);
        this.$.dispose();
        s_8a(this.Ka);
        s_8a(this.Db);
        delete this.Aa;
        delete this.$;
        delete this.Js
    }
    ;
    s_D("sy260");
    var s_Ov = function(a, b) {
        this.LP = 8;
        this.Gq = b || void 0;
        s_Mv.call(this, a)
    }
    ;
    s_f(s_Ov, s_Mv);
    s_Ov.prototype.getPosition = function() {
        return this.Gq || null
    }
    ;
    var s_Pv = function(a, b) {
        a.Gq = b || void 0;
        a.Ua() && a.Ia()
    }
    ;
    s_Ov.prototype.Ia = function() {
        if (this.Gq) {
            var a = !this.Ua() && "move_offscreen" != this.getType()
              , b = this.va();
            a && (b.style.visibility = "hidden",
            s_s(b, !0));
            this.Gq.$(b, this.LP, this.zg);
            a && s_s(b, !1)
        }
    }
    ;
    s_C("sy260");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy263");
    var s_Vv = function(a, b) {
        this.qa = a;
        this.Ca = !!b;
        this.Ea = {
            0: this.qa + "-arrowright",
            1: this.qa + "-arrowup",
            2: this.qa + "-arrowdown",
            3: this.qa + "-arrowleft"
        }
    }
    ;
    s_f(s_Vv, s_jt);
    s_ = s_Vv.prototype;
    s_.Sh = !1;
    s_.EA = 2;
    s_.ZG = 20;
    s_.KA = 3;
    s_.LD = -5;
    s_.Jfa = !1;
    s_.Wd = function(a) {
        this.ma = a
    }
    ;
    var s_Wv = function(a, b, c, d, e) {
        null != b && (a.KA = b);
        null != c && (a.EA = c);
        s_ka(d) && (a.ZG = Math.max(d, 15));
        s_ka(e) && (a.LD = e)
    }
    ;
    s_Vv.prototype.$ = function(a, b, c) {
        a = this.EA;
        2 == a && (a = 0);
        s_kUa(this, this.KA, a, 2 == this.EA ? s_Xv(this.KA) ? this.ka.offsetHeight / 2 : this.ka.offsetWidth / 2 : this.ZG, 0, c)
    }
    ;
    var s_kUa = function(a, b, c, d, e, f) {
        if (a.ma) {
            var g = s_lUa(b, c), k;
            k = a.ma;
            var l = s_r(k);
            var l = (s_Xv(b) ? l.height / 2 : l.width / 2) - d, m = s_$La(k, g), n;
            if (n = s_kt(k))
                k = s_kd(s_Cd(k)),
                s_Xv(b) ? k.top < n.top && !(m & 1) ? l -= n.top - k.top : k.bottom > n.bottom && m & 1 && (l -= k.bottom - n.bottom) : k.left < n.left && !(m & 4) ? l -= n.left - k.left : k.right > n.right && m & 4 && (l -= k.right - n.right);
            k = l;
            k = s_Xv(b) ? new s_$b(a.LD,k) : new s_$b(k,a.LD);
            l = s_Xv(b) ? 6 : 9;
            a.Jfa && 2 == e && (l = s_Xv(b) ? 4 : 1);
            m = b ^ 3;
            s_Xv(b) && "rtl" == a.ma.dir && (m = b);
            g = s_mt(a.ma, s_lUa(m, c), a.ka, g, k, f, a.Sh ? l : 0, void 0, null );
            if (2 != e && g & 496) {
                s_kUa(a, b ^ 3, c, d, a.Jfa && 0 == e ? 1 : 2, f);
                return
            }
            !a.Ca || g & 496 || (e = parseFloat(a.ka.style.left),
            f = parseFloat(a.ka.style.top),
            isFinite(e) && 0 == e % 1 && isFinite(f) && 0 == f % 1 || s_qd(a.ka, Math.round(e), Math.round(f)))
        }
        s_mUa(a, b, c, d)
    }
      , s_mUa = function(a, b, c, d) {
        var e = a.Wa;
        s_bb(a.Ea, function(a) {
            s_y(e, a, !1)
        }, a);
        s_w(e, a.Ea[b]);
        e.style.top = e.style.left = e.style.right = e.style.bottom = "";
        a.ma ? (c = s_yd(a.ma, a.ka),
        d = s_nUa(a.ma, b),
        s_Xv(b) ? e.style.top = s_oUa(c.y + d.y, a.ka.offsetHeight - 15) + "px" : e.style.left = s_oUa(c.x + d.x, a.ka.offsetWidth - 15) + "px") : e.style[0 == c ? s_Xv(b) ? "top" : "left" : s_Xv(b) ? "bottom" : "right"] = d + "px"
    }
      , s_oUa = function(a, b) {
        return 15 > b ? 15 : s_8b(a, 15, b)
    }
      , s_lUa = function(a, b) {
        switch (a) {
        case 2:
            return 0 == b ? 1 : 5;
        case 1:
            return 0 == b ? 0 : 4;
        case 0:
            return 0 == b ? 12 : 13;
        default:
            return 0 == b ? 8 : 9
        }
    }
      , s_nUa = function(a, b) {
        var c = 0
          , d = 0
          , e = s_r(a);
        switch (b) {
        case 2:
            c = e.width / 2;
            break;
        case 1:
            c = e.width / 2;
            d = e.height;
            break;
        case 0:
            d = e.height / 2;
            break;
        case 3:
            c = e.width,
            d = e.height / 2
        }
        return new s_$b(c,d)
    }
      , s_Xv = function(a) {
        return 0 == a || 3 == a
    }
    ;
    s_C("sy263");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy257");
    var s_Zv = function(a, b, c, d, e) {
        return new s_Yv(a,b,{
            opacity: d
        },{
            opacity: e
        },{
            Gf: "opacity",
            duration: b,
            timing: c,
            Tc: 0
        })
    }
      , s_pUa = function(a, b) {
        return s_Zv(a, b, "ease-out", 0, 1)
    }
      , s_qUa = function(a, b) {
        return s_Zv(a, b, "ease-in", 1, 0)
    }
    ;
    s_C("sy257");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_rUa = function(a, b, c) {
        a = a.vk[b.toString()];
        b = [];
        if (a)
            for (var d = 0; d < a.length; ++d) {
                var e = a[d];
                e.Ns == c && b.push(e)
            }
        return b
    }
    ;
    s_D("sy254");
    var s_sUa = function() {}
      , s_tUa = new s_sUa
      , s_uUa = ["click", s_Lb ? "keypress" : "keydown", "keyup"];
    s_sUa.prototype.listen = function(a, b, c, d, e) {
        var f = function(a) {
            var c = s__c(b)
              , e = s_Fc(a.target) ? s_Li(a.target) : null ;
            "click" == a.type && a.Ii() ? c.call(d, a) : 13 != a.keyCode && 3 != a.keyCode || "keyup" == a.type ? 32 != a.keyCode || "keyup" != a.type || "button" != e && "tab" != e || (c.call(d, a),
            a.preventDefault()) : (a.type = "keypress",
            c.call(d, a))
        }
        ;
        f.ma = b;
        f.qa = d;
        e ? e.listen(a, s_uUa, f, c) : s_p(a, s_uUa, f, c)
    }
    ;
    s_sUa.prototype.unlisten = function(a, b, c, d, e) {
        for (var f, g = 0; f = s_uUa[g]; g++) {
            var k;
            var l = a;
            k = f;
            var m = !!c;
            k = s_Yc(l) ? s_rUa(l.Ma, String(k), m) : l ? (l = s_0c(l)) ? s_rUa(l, k, m) : [] : [];
            for (l = 0; m = k[l]; l++) {
                var n = m.listener;
                if (n.ma == b && n.qa == d) {
                    e ? e.unlisten(a, f, m.listener, c, d) : s_2c(a, f, m.listener, c, d);
                    break
                }
            }
        }
    }
    ;
    var s_vUa = function(a) {
        var b = '<div class="jfk-bubble" role="alertdialog"' + (a.uid ? ' aria-describedby="' + s_Ju(a.uid) + '"' : "") + '><div class="jfk-bubble-content-id"' + (a.uid ? ' id="' + s_Ju(a.uid) + '"' : "") + "></div>";
        a.r7 && (a = b,
        b = "\u5173\u95ed".replace(s_bQa, s_cQa),
        b = a + ('<div class="jfk-bubble-closebtn-id jfk-bubble-closebtn" aria-label="' + b + '" role="button" tabindex=0></div>'));
        return s_Hu(b + '<div class="jfk-bubble-arrow-id jfk-bubble-arrow"><div class="jfk-bubble-arrowimplbefore"></div><div class="jfk-bubble-arrowimplafter"></div></div></div>')
    }
    ;
    var s__v = function(a) {
        s_vo.call(this, a);
        this.$ = new s_Vv("jfk-bubble",!0);
        this.ma = new s_Ov;
        this.Da = []
    }
    ;
    s_f(s__v, s_vo);
    s__v.prototype.qa = !0;
    s__v.prototype.Ea = !1;
    s__v.prototype.Wd = function(a) {
        this.$.Wd(a);
        this.Zk()
    }
    ;
    s__v.prototype.Wb = function(a) {
        this.Da.push(a)
    }
    ;
    var s_0v = function(a, b) {
        a.Ga = b;
        s_wUa(a, b)
    }
      , s_wUa = function(a, b) {
        var c = a.Hc();
        if (b && c)
            if (s_ja(b))
                s_o(c, b);
            else if (b instanceof s_Gu) {
                var d;
                if (b.Nj === s_3Pa)
                    d = s_6b(b.toString());
                else {
                    if (b.Nj !== s_Eu)
                        throw Error("Ia");
                    s_Xb("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
                    d = s_5b(b.toString(), b.Vs || null )
                }
                s_7b(c, d)
            } else
                b instanceof s_3b ? s_7b(c, b) : (s_7b(c, s_oba),
                c.appendChild(b))
    }
    ;
    s_ = s__v.prototype;
    s_.Hc = function() {
        return s_wo(this, "jfk-bubble-content-id")
    }
    ;
    s_.Ob = function() {
        this.Aa = s_7Pa(s_vUa, {
            r7: this.qa,
            uid: "bubble-" + s_na(this)
        }, void 0, this.Fa);
        s_wUa(this, this.Ga);
        s_s(this.va(), !1);
        this.ma.zm(this.va());
        if (!s_Nb) {
            var a = this.ma
              , b = s_pUa(this.va(), .218)
              , c = s_qUa(this.va(), .218);
            a.Ka = b;
            a.Db = c
        }
        s_Pe(this.va(), this.Da)
    }
    ;
    s_.Eb = function() {
        s__v.Ba.Eb.call(this);
        s_xo(this).listen(this.ma, ["beforeshow", "show", "beforehide", "hide"], this.x_);
        if (this.qa) {
            var a = s_xo(this)
              , b = s_wo(this, "jfk-bubble-closebtn-id")
              , c = s_d(this.setVisible, !1);
            s_tUa.listen(b, c, void 0, a.Ga || a, a)
        }
        a = this.va();
        b = s_wo(this, "jfk-bubble-arrow-id");
        c = this.$;
        c.ka = a;
        c.Wa = b;
        s_Pv(this.ma, this.$)
    }
    ;
    s_.setVisible = function(a) {
        this.ma.setVisible(a)
    }
    ;
    s_.Ua = function() {
        return this.ma.Ua()
    }
    ;
    s_.Zk = function() {
        this.Ua() && this.ma.Ia()
    }
    ;
    s_.Ha = function() {
        this.ma.dispose();
        delete this.ma;
        s__v.Ba.Ha.call(this)
    }
    ;
    s_.lL = function() {
        s_xd(this.va());
        return !1
    }
    ;
    s_.x_ = function(a) {
        if ("show" == a.type || "hide" == a.type) {
            var b = s_xo(this)
              , c = this.Fa
              , c = s_Jb ? s_Qc(c) : c.$;
            "show" == a.type ? b.listen(c, "scroll", this.lL) : b.unlisten(c, "scroll", this.lL)
        }
        b = this.dispatchEvent(a.type);
        this.Ea && "hide" == a.type && this.dispose();
        return b
    }
    ;
    s_C("sy254");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("spch");
    var s_V6 = function() {
        s_Zi.call(this);
        this.ma = null ;
        this.Ea = s_i("fkbx-spch");
        this.qa = s_i("fkbx-hspch");
        this.Ma = this.Ja = this.$ = this.Da = null ;
        this.rb = s_i("fkbx-hht");
        this.Za = s_i("gsri_ok0");
        this.Ca = s_i("chw-o");
        if (this.Za)
            s_LGd(this);
        else {
            var a;
            if (a = this.Ea && this.qa)
                (a = s_i("fkbx-tchm")) ? (this.$ = new s__v,
                this.$.Wb("fkbx-chm"),
                this.$.qa = !1,
                this.$.Wd(this.Ea),
                s_Nv(this.$.ma, !1),
                this.$.$.Sh = !0,
                s_Wv(this.$.$, 1, 2, void 0, -3),
                s_0v(this.$, a),
                this.$.render(),
                s_q(a, "display", "block"),
                this.Ja = s_i("fkbx-chme"),
                (a = s_i("fkbx-chmer")) && this.listen(a, ["click", "keydown"], s_c(this.Ia, this, "hcr")),
                (a = s_i("fkbx-chmed")) && this.listen(a, ["click", "keydown"], s_c(this.Ia, this, "hcd")),
                this.Ma = s_i("fkbx-chmt"),
                (a = s_i("fkbx-chmtr")) && this.listen(a, ["click", "keydown"], s_c(this.Ia, this, "hcc")),
                a = !0) : a = !1;
            a && (this.listen(this.qa, ["mousedown", "click", "keydown"], this.nb, !0),
            s_LGd(this))
        }
    }
    ;
    s_f(s_V6, s_Zi);
    s_ea(s_V6);
    var s_NGd = function(a) {
        var b = s_MGd;
        s_Uf("local") && b.ma && b.Ca ? !0 === s_Tf("local").get("chwos") ? a() : window.chrome && window.chrome.runtime && window.chrome.runtime.sendMessage ? window.chrome.runtime.sendMessage("nbpagnldghgfoolbancepceaanlmhfmd", {
            type: "wu"
        }, s_c(b.Ka, b, a)) : a() : a()
    }
    ;
    s_V6.prototype.Ka = function(a, b) {
        var c = this.Za || this.Ea;
        !c || window.chrome.runtime.lastError || b.doNotShowOptinMessage ? a() : (this.ma.setVisible(!0),
        s_z(c, [this.Ca], [!0], "chw"))
    }
    ;
    var s_PGd = function() {
        var a = s_MGd;
        window.chrome && window.chrome.runtime && window.chrome.runtime.sendMessage && chrome.runtime.sendMessage("bepbmhgboaologfdajaanbcjmnhjmhfn", {
            type: "wuh"
        }, s_c(function() {
            window.chrome.runtime.lastError || s_OGd("wu", "dnhpdliibojhegemfjheidglijccjfmc")
        }, a))
    }
    ;
    s_V6.prototype.hide = function() {
        this.$ && this.$.setVisible(!1);
        s_QGd(this)
    }
    ;
    s_V6.prototype.Ha = function() {
        s_QGd(this);
        this.Da && (this.Da.destroy(),
        this.Da = null );
        this.$ && s_8a(this.$);
        s_V6.Ba.Ha.call(this)
    }
    ;
    var s_LGd = function(a) {
        a.listen(window, "message", s_c(a.Xa, a));
        s_1h("chw", {
            optInEnableButtonClicked: s_c(a.Db, a, "hco"),
            optInNoThanksButtonClicked: s_c(a.Db, a, "hcno")
        });
        s_Fd('.goog-inline-block{position:relative;display:-moz-inline-box;display:inline-block}* html .goog-inline-block{display:inline}*:first-child+html .goog-inline-block{display:inline}.jfk-bubble{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.2);-moz-box-shadow:0 1px 3px rgba(0,0,0,.2);box-shadow:0 1px 3px rgba(0,0,0,.2);background-color:#fff;border:1px solid;border-color:#bbb #bbb #a8a8a8;padding:16px;position:absolute;z-index:1201!important}.jfk-bubble-closebtn{background:url("//ssl.gstatic.com/ui/v1/icons/common/x_8px.png") no-repeat;border:1px solid transparent;height:21px;opacity:.4;outline:0;position:absolute;right:2px;top:2px;width:21px}.jfk-bubble-closebtn:focus{border:1px solid #4d90fe;opacity:.8}.jfk-bubble-arrow{position:absolute}.jfk-bubble-arrow .jfk-bubble-arrowimplbefore,.jfk-bubble-arrow .jfk-bubble-arrowimplafter{display:block;height:0;position:absolute;width:0}.jfk-bubble-arrow .jfk-bubble-arrowimplbefore{border:9px solid}.jfk-bubble-arrow .jfk-bubble-arrowimplafter{border:8px solid}.jfk-bubble-arrowdown{bottom:0}.jfk-bubble-arrowup{top:-9px}.jfk-bubble-arrowleft{left:-9px}.jfk-bubble-arrowright{right:0}.jfk-bubble-arrowdown .jfk-bubble-arrowimplbefore,.jfk-bubble-arrowup .jfk-bubble-arrowimplbefore{border-color:#bbb transparent;left:-9px}.jfk-bubble-arrowdown .jfk-bubble-arrowimplbefore{border-color:#a8a8a8 transparent}.jfk-bubble-arrowdown .jfk-bubble-arrowimplafter,.jfk-bubble-arrowup .jfk-bubble-arrowimplafter{border-color:#fff transparent;left:-8px}.jfk-bubble-arrowdown .jfk-bubble-arrowimplbefore{border-bottom-width:0}.jfk-bubble-arrowdown .jfk-bubble-arrowimplafter{border-bottom-width:0}.jfk-bubble-arrowup .jfk-bubble-arrowimplbefore{border-top-width:0}.jfk-bubble-arrowup .jfk-bubble-arrowimplafter{border-top-width:0;top:1px}.jfk-bubble-arrowleft .jfk-bubble-arrowimplbefore,.jfk-bubble-arrowright .jfk-bubble-arrowimplbefore{border-color:transparent #bbb;top:-9px}.jfk-bubble-arrowleft .jfk-bubble-arrowimplafter,.jfk-bubble-arrowright .jfk-bubble-arrowimplafter{border-color:transparent #fff;top:-8px}.jfk-bubble-arrowleft .jfk-bubble-arrowimplbefore{border-left-width:0}.jfk-bubble-arrowleft .jfk-bubble-arrowimplafter{border-left-width:0;left:1px}.jfk-bubble-arrowright .jfk-bubble-arrowimplbefore{border-right-width:0}.jfk-bubble-arrowright .jfk-bubble-arrowimplafter{border-right-width:0}');
        if (a.Ca) {
            var b = a.Za || a.Ea;
            b && (a.ma = new s__v,
            s_0v(a.ma, a.Ca),
            a.ma.Wb("chw-oc"),
            a.ma.qa = !1,
            a.ma.Wd(b),
            a.ma.$.Sh = !0,
            s_Wv(a.ma.$, 2, 2, void 0, -8),
            a.ma.render(),
            s_q(a.Ca, "display", "block"),
            a.ma.setVisible(!1))
        }
        a.listen(window, "resize", s_c(a.Lb, a))
    }
      , s_OGd = function(a, b) {
        window.chrome && window.chrome.runtime && window.chrome.runtime.sendMessage ? window.chrome.runtime.sendMessage(b, {
            type: a
        }) : s_RGd(a)
    }
    ;
    s_V6.prototype.Xa = function(a) {
        a = a.$;
        if (a.source == window && a.data && a.data.type) {
            a = a.data.type;
            switch (a) {
            case "vt":
                s_u(144)
            }
            if (this.$)
                switch (a) {
                case "hs":
                    this.$.setVisible(!1);
                    (a = s_i("fkbx_ph")) && s_Dd(a, 0);
                    s_q(this.Ea, "display", "none");
                    s_q(this.qa, "display", "block");
                    s_w(this.rb, "fkbx-hht-s");
                    s_RGd("shs");
                    break;
                case "hd":
                    this.$.Ua() || this.hide();
                    break;
                case "ht":
                    s_q(this.Ja, "display", "none");
                    s_q(this.Ma, "display", "block");
                    s_SGd(this);
                    s_RGd("stm");
                    break;
                case "he":
                    s_q(this.Ma, "display", "none"),
                    s_q(this.Ja, "display", "block"),
                    s_SGd(this),
                    s_RGd("sem")
                }
        }
    }
    ;
    var s_RGd = function(a) {
        window.postMessage({
            type: a
        }, "*")
    }
    ;
    s_V6.prototype.nb = function(a) {
        a.$.stopImmediatePropagation();
        if ("click" == a.type || "keydown" == a.type && 13 == a.keyCode)
            this.hide(),
            s_u(128)
    }
    ;
    s_V6.prototype.Ia = function(a) {
        s_RGd(a)
    }
    ;
    s_V6.prototype.Db = function(a, b) {
        s_OGd(a, "nbpagnldghgfoolbancepceaanlmhfmd");
        this.ma && this.ma.Ua() && (this.ma.setVisible(!1),
        s_z(b, [this.Ca], [!1], "chw"));
        if (s_Uf("local")) {
            var c = s_Tf("local");
            c.get("chwos") || c.set("chwos", !0)
        }
    }
    ;
    var s_SGd = function(a) {
        s_QGd(a);
        a.$ && (a.$.setVisible(!0),
        a.$.Zk())
    }
    ;
    s_V6.prototype.Lb = function() {
        this.$ && this.$.Ua() && this.$.Zk();
        this.ma && this.ma.Ua() && this.ma.Zk()
    }
    ;
    var s_QGd = function(a) {
        var b = s_i("fkbx_ph");
        b && s_Dd(b, 1);
        a.$ && (s_q(a.Ea, "display", "block"),
        s_q(a.qa, "display", "none"),
        s_x(a.rb, "fkbx-hht-s"))
    }
    ;
    var s_TGd, s_W6, s_X6, s_Y6, s_UGd, s_Z6, s__6, s_06, s_MGd, s_16 = {
        cH: "",
        oL: "",
        uL: "",
        ZL: "",
        aM: "",
        bM: "",
        UM: "",
        ready: "",
        waiting: ""
    };
    var s_VGd, s_26, s_WGd = !1, s_XGd = function() {
        if (s_WGd) {
            var a = .5 + .55 * Math.random()
              , b = Math.round(170 + 10 * Math.random());
            s_26.style.setProperty("-webkit-transition", "-webkit-transform " + b / 1E3 + "s ease-in-out");
            s_26.style.setProperty("-webkit-transform", "scale(" + a + ")");
            window.setTimeout(s_XGd, b)
        } else
            s_26.style.removeProperty("opacity"),
            s_26.style.removeProperty("-webkit-transition"),
            s_26.style.removeProperty("-webkit-transform")
    }
    ;
    var s_YGd = {
        webhp: 1,
        imghp: 1,
        mobilewebhp: 1,
        newtab: 1
    };
    var s_36, s_46, s_56, s_ZGd, s__Gd, s_66 = function(a, b, c) {
        window.clearTimeout(s_ZGd);
        window.clearTimeout(s__Gd);
        c ? (s_46.innerHTML = a,
        s_36.innerHTML = b,
        a = s_46.firstElementChild,
        a.id = "spchta",
        a.className = "spchta") : (s_46.innerText = a,
        s_36.innerText = b);
        a = s_46;
        b = s_36;
        0 == s_56 && (s_56 = google.sn in s_YGd ? 32 : 27);
        c = 1.2 * s_56 + 1;
        var d = 2.4 * s_56 + 1
          , e = 1.2 * s_56 * 3 + 1
          , f = s_46.scrollHeight
          , g = "spcht";
        f > 4.8 * s_56 + 1 ? g += " spch-5l" : f > e ? g += " spch-4l" : f > d ? g += " spch-3l" : f > c && (g += " spch-2l");
        a.className = b.className = g
    }
    , s_0Gd = function() {
        s_46.innerText = "";
        s_36.innerText = "";
        s_ZGd = window.setTimeout(function() {
            "" == s_46.innerText && s_66(s_16.waiting, "")
        }, 300)
    }
    , s_1Gd = function() {
        window.clearTimeout(s__Gd);
        window.clearTimeout(s_ZGd);
        s_56 = 0;
        s_46.className = "spcht";
        s_36.className = "spcht"
    }
    , s_2Gd = function() {
        var a = 0
          , b = ""
          , c = function() {
            var d = s_16.uL
              , e = 0 < a && s_46.innerText != d.substring(0, a)
              , f = 0 == a && s_46.innerText != s_16.ready;
            a == d.length || e || f || (b += d.substring(a, a + 1),
            s_66(b, ""),
            ++a,
            s__Gd = window.setTimeout(c, 30))
        }
        ;
        s__Gd = window.setTimeout(c, 2E3)
    }
    ;
    var s_76, s_86, s_3Gd, s_4Gd = !1, s_96 = !1, s_5Gd = function(a) {
        var b = s_W6;
        s_96 && (s_86.className = "spchc s2ra",
        s_66(a, b))
    }
    , s_6Gd = function(a) {
        s_86.className = "spchc s2er";
        switch (a) {
        case "8":
            s_66(s_16.aM, "", !0);
            break;
        case "0":
            s_66(s_16.bM, "", !0);
            break;
        case "2":
            s_66(s_16.cH, "", !0);
            break;
        case "3":
            s_66(s_16.ZL, "");
            break;
        case "4":
        case "5":
            s_66(s_16.UM, "", !0);
            break;
        case "7":
            s_66(s_16.oL, "")
        }
        s_WGd = !1;
        "8" == a && (s_4Gd = !0)
    }
    , s_7Gd = function(a) {
        if (s_96) {
            a = a.target.id;
            var b = "4"
              , c = "";
            "spchx" == a ? b = "0" : "spch" == a ? b = "2" : "spchb" == a ? b = "1" : "spchta" == a ? b = "5" : c = a;
            s_3Gd(b, c, "1" == b && !s_4Gd, ("1" == b || "5" == b) && s_4Gd)
        }
    }
    ;
    var s_$6 = -1
      , s_a7 = 0
      , s_dHd = function() {
        s__6 = new webkitSpeechRecognition;
        s__6.continuous = !1;
        s__6.interimResults = !0;
        s__6.lang = s_UGd;
        s__6.maxAlternatives = 4;
        s__6.onerror = s_8Gd;
        s__6.onnomatch = s_9Gd;
        s__6.onend = s_$Gd;
        s__6.onresult = s_aHd;
        s__6.onaudiostart = s_bHd;
        s__6.onspeechstart = s_cHd
    }
      , s_iHd = function() {
        if (2 == s_$6) {
            s_eHd("ss");
            s_96 || (s_0Gd(),
            s_96 || (s_s(s_76, !0),
            google.sn in s_YGd ? (s_76.className = "spch s2fp-h",
            s_76.className = "spch s2fp") : (s_76.className = "spch s2tb-h",
            s_76.className = "spch s2tb"),
            s_96 = !0),
            window.addEventListener("mouseup", s_7Gd, !1));
            s_b7(8E3);
            window.clearTimeout(s_Z6);
            s_Z6 = window.setTimeout(s_fHd, 1500);
            s_u(120);
            document.addEventListener("webkitvisibilitychange", s_gHd, !1);
            s__6 && s__6.onerror && s__6.onnomatch && s__6.onend && s__6.onresult && s__6.onaudiostart && s__6.onspeechstart || s_dHd();
            try {
                s__6.start(),
                s_$6 = 3
            } catch (a) {
                s_$6 = 2;
                s_dHd();
                try {
                    s__6.start(),
                    s_$6 = 3
                } catch (b) {
                    s_$6 = 10,
                    s_c7(0, "1"),
                    s_hHd()
                }
            }
        }
    }
      , s_hHd = function() {
        7 != s_$6 && s_u(126);
        10 == s_$6 && (s_$6 = 11,
        s__6.abort());
        window.removeEventListener("mouseup", s_7Gd, !1);
        s_WGd = !1;
        s_76.className = google.sn in s_YGd ? "spch s2fp-h" : "spch s2tb-h";
        s_86.className = "spchc";
        s_76.removeAttribute("style");
        s_s(s_76, !1);
        s_4Gd = s_96 = !1;
        s_1Gd();
        s_jHd()
    }
      , s_d7 = function(a, b, c) {
        s_c7(a, b, c);
        s_$6 = 10;
        s_hHd()
    }
      , s_jHd = function() {
        window.clearTimeout(s_X6);
        window.clearTimeout(s_TGd);
        window.clearTimeout(s_Z6);
        s_u(137);
        s_Ne(106, s_kHd, 50);
        document.removeEventListener("webkitvisibilitychange", s_gHd, !1);
        s_eHd("sr");
        s_W6 = s_Y6 = s_06 = "";
        s_$6 = 0;
        s__6.abort()
    }
      , s_bHd = function() {
        s_b7(8E3);
        window.clearTimeout(s_Z6);
        s_$6 = 4;
        s_96 && (s_86.className = "spchc s2ml",
        window.clearTimeout(s_ZGd),
        s_66(s_16.ready, ""),
        s_2Gd())
    }
      , s_cHd = function() {
        s_b7(8E3);
        s_$6 = 5;
        s_96 && (s_86.className = "spchc s2ra",
        google.sn in s_YGd || (s_76.style.backgroundColor = "rgba(255, 255, 255, 0.9)"),
        s_WGd || (s_WGd = !0,
        s_XGd()),
        window.clearTimeout(s__Gd));
        s_Me(106, s_kHd, 50)
    }
      , s_aHd = function(a) {
        s_b7(8E3);
        switch (s_$6) {
        case 6:
        case 5:
            break;
        case 4:
            s_cHd();
            break;
        case 3:
            s_cHd();
            s_bHd();
            break;
        default:
            return
        }
        var b = a.results
          , c = b.length;
        if (0 != c) {
            s_$6 = 6;
            s_W6 = s_Y6 = "";
            var d = a.resultIndex;
            if (a = b[d].isFinal)
                s_W6 = b[d][0].transcript,
                s_5Gd(s_W6);
            else {
                for (d = 0; d < c; d++) {
                    var e = b[d][0].transcript;
                    s_Y6 += e;
                    .5 < b[d][0].confidence && (s_W6 += e)
                }
                s_5Gd(s_Y6)
            }
            6 == s_$6 && (a || 120 < s_Y6.length ? (s_06 = s_W6,
            s_lHd(18)) : (s_06 = s_Y6,
            s_u(136, [s_06])))
        }
    }
      , s_8Gd = function(a) {
        s_b7(8E3);
        window.clearTimeout(s_Z6);
        var b = s_mHd(a.error);
        if ("1" != b) {
            var c = "";
            "9" == b && (c = a.error);
            s_c7(2, b, c);
            s_$6 = 8;
            s_6Gd(b);
            s_eHd("se");
            window.clearTimeout(s_X6);
            s_nHd(s_a7)
        }
    }
      , s_9Gd = function() {
        s_c7(4);
        s_$6 = 8;
        s_6Gd("8");
        s_eHd("se");
        window.clearTimeout(s_X6);
        s_nHd(8E3)
    }
      , s_$Gd = function() {
        window.clearTimeout(s_X6);
        window.clearTimeout(s_Z6);
        var a = "9";
        switch (s_$6) {
        case 3:
            s_$6 = 9;
            a = "2";
            break;
        case 4:
            s_$6 = 9;
            a = "0";
            break;
        case 5:
        case 6:
            s_$6 = 9;
            a = "8";
            break;
        case 8:
            break;
        default:
            return
        }
        switch (s_$6) {
        case 9:
            s_6Gd(a),
            s_eHd("se"),
            s_nHd(8E3),
            s_c7(3, a);
        case 8:
            s_$6 = 11;
            break;
        default:
            s_$6 = 11,
            s_hHd()
        }
    }
      , s_oHd = function(a) {
        var b;
        a: {
            switch (s_$6) {
            case 0:
            case 10:
            case 11:
            case 8:
            case -1:
            case 1:
                b = !1;
                break a
            }
            b = !0
        }
        b ? (a.stopPropagation(),
        27 == a.keyCode ? s_d7(0, "0") : 13 == a.keyCode && s_06 && s_lHd(3)) : (b = a.ctrlKey || s_Ob && a.metaKey,
        0 == s_$6 && 190 == a.keyCode && a.shiftKey && b && s_e7())
    }
      , s_eHd = function(a) {
        window.postMessage({
            type: a
        }, "*")
    }
      , s_kHd = function() {
        return 7 == s_$6
    }
      , s_pHd = function() {
        if ("" != s_W6)
            s_06 = s_W6,
            s_lHd(19);
        else
            switch (s_$6) {
            case 3:
            case 4:
            case 5:
            case 6:
            case 8:
                s_d7(0, "3")
            }
    }
      , s_fHd = function() {
        s_b7(15E3);
        s_c7(0, "6");
        s_96 && (s_86.className = "spchc s2wfp")
    }
      , s_gHd = function() {
        s_qHd() || document.webkitHidden && s_d7(0, "4")
    }
      , s_rHd = function() {
        s_qHd() || s_d7(0, "7")
    }
      , s_lHd = function(a) {
        s_$6 = 7;
        window.clearTimeout(s_X6);
        s_u(121, [s_06, a]);
        s_hHd()
    }
      , s_mHd = function(a) {
        switch (a) {
        case "no-speech":
            return s_a7 = 8E3,
            "0";
        case "aborted":
            return s_a7 = 3E3,
            "1";
        case "audio-capture":
            return s_a7 = 8E3,
            "2";
        case "network":
            return s_a7 = 3E3,
            "3";
        case "not-allowed":
            return s_a7 = 8E3,
            "4";
        case "service-not-allowed":
            return s_a7 = 8E3,
            "5";
        case "bad-grammar":
            return s_a7 = 3E3,
            "6";
        case "language-not-supported":
            return s_a7 = 3E3,
            "7";
        default:
            return s_a7 = 3E3,
            "9"
        }
    }
      , s_c7 = function(a, b, c) {
        var d = "";
        b && (d += "&reason=" + b);
        c && (d += "&data=" + c);
        google.log("spch-recog", a + d)
    }
      , s_b7 = function(a) {
        window.clearTimeout(s_X6);
        s_X6 = window.setTimeout(s_pHd, a)
    }
      , s_nHd = function(a) {
        window.clearTimeout(s_TGd);
        s_TGd = window.setTimeout(s_hHd, a)
    }
      , s_qHd = function() {
        switch (s_$6) {
        case 0:
        case -1:
        case 1:
            return !0
        }
        return !1
    }
      , s_sHd = function() {
        0 != s_$6 && s_d7(7, "5");
        s_$6 = 2;
        s_iHd()
    }
      , s_e7 = function() {
        -1 == s_$6 ? s_c7(5) : 0 != s_$6 ? s_d7(0, "5") : s_MGd ? s_NGd(function() {
            s_$6 = 2;
            s_iHd()
        }) : (s_$6 = 2,
        s_iHd())
    }
      , s_tHd = function(a, b, c, d) {
        s_06 && c ? s_lHd(17) : 11 == s_$6 && d ? (s_c7(6, a, b),
        s_jHd(),
        s_e7()) : s_d7(1, a, b)
    }
    ;
    s_we("spch", {
        init: function(a) {
            s_UGd = a.hl;
            var b;
            if (b = "webkitSpeechRecognition"in self && !!webkitSpeechRecognition) {
                s_76 = s_i("spch");
                s_86 = s_i("spchc");
                s_3Gd = s_tHd;
                if (b = !!s_76 && !!s_86)
                    s_36 = s_i("spchf"),
                    s_46 = s_i("spchi"),
                    s_1Gd(),
                    b = !(!s_36 || !s_46);
                b && (s_VGd = s_i("spchb"),
                s_26 = s_i("spchl"),
                b = !(!s_VGd || !s_26))
            }
            if (b) {
                -1 == s_$6 && (s_ye(window, "keydown", s_oHd),
                s_Me(140, s_e7),
                s_Me(128, s_e7),
                s_Me(141, s_rHd),
                s_Me(144, s_sHd));
                if (a.hen) {
                    s_MGd = s_V6.Sa();
                    b = a.htt;
                    var c = s_MGd;
                    c.qa && !c.Da && b && (c.Da = new s_C5(c.qa,b));
                    s_PGd()
                }
                s_16 = {
                    uL: a.lm,
                    ready: a.rm,
                    aM: a.nt,
                    waiting: a.iw,
                    cH: a.ae,
                    ZL: a.ne,
                    oL: a.lu,
                    UM: a.pe,
                    bM: a.nv
                };
                s_$6 = 1;
                s_dHd();
                s_jHd()
            } else
                s_$6 = -1,
                s_u(138),
                s_ze(window, "keydown", s_oHd),
                s_Ne(140, s_e7),
                s_Ne(128, s_e7),
                s_Ne(141, s_rHd),
                s_Ne(144, s_sHd)
        },
        dispose: function() {
            s_qHd() || s_d7(0, "2")
        }
    });
    s_C("spch");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy58");
    var s_ej = function(a) {
        s_h.call(this);
        this.Qc = 1;
        this.qa = [];
        this.Ea = 0;
        this.$ = [];
        this.ma = {};
        this.Wa = !!a
    }
    ;
    s_f(s_ej, s_h);
    var s_fj = function(a, b, c, d) {
        var e = a.ma[b];
        e || (e = a.ma[b] = []);
        var f = a.Qc;
        a.$[f] = b;
        a.$[f + 1] = c;
        a.$[f + 2] = d;
        a.Qc = f + 3;
        e.push(f);
        return f
    }
    ;
    s_ej.prototype.Pv = function(a) {
        var b = this.$[a];
        if (b) {
            var c = this.ma[b];
            0 != this.Ea ? (this.qa.push(a),
            this.$[a + 1] = s_b) : (c && s_Ya(c, a),
            delete this.$[a],
            delete this.$[a + 1],
            delete this.$[a + 2])
        }
        return !!b
    }
    ;
    s_ej.prototype.publish = function(a, b) {
        var c = this.ma[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)
                d[e - 1] = arguments[e];
            if (this.Wa)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    s_Aja(this.$[g + 1], this.$[g + 2], d)
                }
            else {
                this.Ea++;
                try {
                    for (e = 0,
                    f = c.length; e < f; e++)
                        g = c[e],
                        this.$[g + 1].apply(this.$[g + 2], d)
                } finally {
                    if (this.Ea--,
                    0 < this.qa.length && 0 == this.Ea)
                        for (; c = this.qa.pop(); )
                            this.Pv(c)
                }
            }
            return 0 != e
        }
        return !1
    }
    ;
    var s_Aja = function(a, b, c) {
        s_7e(function() {
            a.apply(b, c)
        })
    }
    ;
    s_ej.prototype.clear = function(a) {
        if (a) {
            var b = this.ma[a];
            b && (s_g(b, this.Pv, this),
            delete this.ma[a])
        } else
            this.$.length = 0,
            this.ma = {}
    }
    ;
    s_ej.prototype.ze = function(a) {
        if (a) {
            var b = this.ma[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.ma)
            a += this.ze(b);
        return a
    }
    ;
    s_ej.prototype.Ha = function() {
        s_ej.Ba.Ha.call(this);
        this.clear();
        this.qa.length = 0
    }
    ;
    s_C("sy58");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy59");
    var s_gj = new s_ej
      , s_hj = function(a) {
        s_gj.publish("r", a)
    }
      , s_ij = function() {
        s_gj.publish("ra")
    }
      , s_jj = function(a, b, c) {
        var d;
        null === c ? d = b : d = function(a) {
            a && a == s_Oc(c, "xpdbox") && b(a)
        }
        ;
        return s_fj(s_gj, a, d)
    }
      , s_kj = function(a, b) {
        return s_jj("es", a, b || null )
    }
      , s_lj = function(a, b) {
        return s_jj("ef", a, b || null )
    }
      , s_mj = function(a, b) {
        return s_jj("cs", a, b || null )
    }
      , s_Bja = function(a, b) {
        return s_jj("cf", a, b || null )
    }
      , s_nj = function(a) {
        return s_gj.Pv(a)
    }
      , s_oj = function(a) {
        s_gj.publish("es", a)
    }
      , s_pj = function(a) {
        s_gj.publish("ef", a)
    }
      , s_qj = function(a) {
        s_gj.publish("cs", a)
    }
      , s_rj = function(a) {
        s_gj.publish("cf", a)
    }
    ;
    s_C("sy59");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy118");
    var s_Esa = function(a, b) {
        for (var c = new RegExp("(?:^|\\s)" + b + "(?:$|\\s)"); a; ) {
            if (c.test(a.className))
                return a;
            a = a.parentElement
        }
        return null
    }
    ;
    var s_Fsa = function(a) {
        return a ? 4 <= a ? 4 : 3 <= a ? 3 : 2 <= a ? 2 : 1 : 1
    }
      , s_Gsa = function(a, b, c, d) {
        a = a.split("?")[0];
        d = s_Fsa(d);
        b = b ? b : 0;
        c = c ? c : 0;
        var e = b * d
          , f = c * d
          , e = Math.min(1, 2048 / (e ? e : 1), 2048 / (f ? f : 1));
        b = Math.floor(b * e);
        c = Math.floor(c * e);
        return a + "?scale=" + d + (c ? "&h=" + c : "") + (b ? "&w=" + b : "")
    }
    ;
    var s_Hsa = function(a, b, c) {
        var d = s_Fsa(s_ca.devicePixelRatio)
          , e = s_Gsa(a.getAttribute("data-bsrc"), b, c, d);
        a.setAttribute("data-bsrc", e);
        var f = function() {
            a.removeEventListener("load", f, !1);
            a.style.display = "inline";
            a.removeAttribute("height");
            a.removeAttribute("width");
            var e = 0 != s_ca.SCALE_MAP;
            1 != d && e && (c || (c = a.height / d),
            b || (b = a.width / d));
            c && a.setAttribute("height", c);
            b && a.setAttribute("width", b);
            (e = s_Dc(a)) && s_s(e, !0)
        }
        ;
        a.addEventListener("load", f, !1)
    }
      , s_Isa = function(a) {
        var b = {};
        if (!a.hasAttribute("data-vs"))
            return null ;
        a.getAttribute("data-vs").split(",").forEach(function(a) {
            a = a.split(":");
            b[a[0]] = a[1]
        });
        return b
    }
    ;
    var s_Jsa = []
      , s_Ksa = []
      , s_Lsa = []
      , s_Msa = s_b
      , s_Nsa = function() {
        var a = s_k("lu_vs");
        a.length && s_en(a)
    }
      , s_en = function(a) {
        a ? (s_yi(s_Osa),
        s_g(a, s_Psa)) : s_Nsa()
    }
      , s_Qsa = function(a) {
        var b = s_Isa(a);
        if (!b)
            return null ;
        var c = s_Oc(a, b.r);
        if (!c)
            return null ;
        if (0 == c.offsetWidth && 0 == c.offsetHeight)
            return -1 == s_Ksa.indexOf(a) && (s_Ksa.push(a),
            s_Lsa.push(s_lj(s_c(s_Psa, null , a))),
            s_Lsa.push(s_Bja(s_c(s_Psa, null , a)))),
            null ;
        if (s_a(b.lukp) && b.lukp) {
            a = s_Esa(c, "kno-mrg");
            var d = s_Esa(c, "kno-mrg-m");
            d && (d.style.width = "auto",
            d.style.height = "auto");
            if (a) {
                var d = a.getElementsByClassName("img-kc-m")[0]
                  , e = a.getElementsByClassName("bi-io")[0]
                  , f = d && !e && s_yfa(a, d) && 0 < d.offsetHeight && 0 < d.offsetWidth
                  , e = 0;
                f && (e = d.offsetHeight);
                a = a.offsetWidth - (f ? d.offsetWidth : 0);
                0 < a && 0 < e ? (c.style.width = a + "px",
                c.style.height = e + "px") : 0 < a && (c.style.width = a + "px")
            }
        }
        a = 0;
        s_a(b.w) && (a = Math.floor(c.offsetWidth * parseFloat(b.w)));
        d = 0;
        s_a(b.h) && (d = Math.floor(c.offsetHeight * parseFloat(b.h)));
        a && d && s_a(b.mhwr) && (d = Math.max(d, a * parseFloat(b.mhwr)));
        return new s_dc(a,d)
    }
      , s_Psa = function(a) {
        a.setAttribute("data-bsrc", a.getAttribute("data-bsrc").split("&")[0]);
        var b = s_Qsa(a);
        if (b) {
            var c = s_Isa(a);
            c && "1" == c.o && -1 == s_Jsa.indexOf(a) && s_Jsa.push(a);
            s_Hsa(a, b.width, b.height);
            a.getAttribute("data-bsrc") != a.getAttribute("src") && (s_Msa(a),
            a.setAttribute("src", a.getAttribute("data-bsrc")))
        }
    }
      , s_Osa = function() {
        s_g(s_Jsa, s_Psa)
    }
    ;
    s_we("vs", {
        init: s_Nsa,
        dispose: function() {
            s_zi(s_Osa);
            s_Jsa = [];
            s_Ksa = [];
            s_g(s_Lsa, s_nj);
            s_Lsa = []
        }
    });
    s_C("sy118");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("em10");
    s_C("em10");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("vs");
    s_C("vs");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy86");
    var s_Ina = function(a) {
        this.Aa = a;
        this.Aa._wect = this;
        this.ka = {};
        this.$ = {};
        this.ma = {}
    }
      , s_Jna = function(a) {
        a._wect || new s_Ina(a);
        return a._wect
    }
    ;
    s_Ina.prototype.qa = function(a, b) {
        void 0 == this.ka[a] && (this.ka[a] = 0);
        this.ka[a]++;
        for (var c = this.$[a], d = c.length, e, f = 0; f < d; f++)
            try {
                c[f](b)
            } catch (g) {
                e = e || g
            }
        this.ka[a]--;
        if (e)
            throw e;
    }
    ;
    var s_Kna = function(a, b) {
        a.ma[b] || (a.ma[b] = s_c(a.qa, a, b));
        return a.ma[b]
    }
      , s_Lna = function(a, b) {
        return a + ":" + (b ? "capture" : "bubble")
    }
      , s_Mna = function(a, b, c, d) {
        d = !!d;
        var e = s_Lna(b, d);
        a.$[e] || (a.$[e] = [],
        a.Aa.addEventListener(b, s_Kna(a, e), d));
        a.$[e].push(c)
    }
      , s_Nna = function(a, b, c, d) {
        d = !!d;
        var e = s_Lna(b, d);
        a.$[e] && (a.ka[e] && (a.$[e] = a.$[e].slice(0)),
        c = a.$[e].indexOf(c),
        -1 != c && a.$[e].splice(c, 1),
        0 == a.$[e].length && (a.$[e] = void 0,
        a.Aa.removeEventListener(b, s_Kna(a, e), d)))
    }
    ;
    var s_Nk = function(a, b, c, d) {
        s_Nna(s_Jna(a), b, c, d)
    }
      , s_Ok = function(a, b, c, d, e) {
        var f = s_Jna(a);
        s_Mna(f, b, c, d);
        e && s_Ona(a, function() {
            s_Mna(f, b, c, d)
        }, function() {
            s_Nna(f, b, c, d)
        })
    }
      , s_Ona = function(a, b, c) {
        a.addEventListener("DOMFocusIn", function(a) {
            a.target && "TEXTAREA" == a.target.tagName && b()
        }, !1);
        a.addEventListener("DOMFocusOut", function(a) {
            a.target && "TEXTAREA" == a.target.tagName && c()
        }, !1)
    }
    ;
    var s_Pna = /iPhone|iPod|iPad/
      , s_Pk = function() {
        return s_ya(navigator.userAgent, "Android")
    }
      , s_Qna = /Mac OS X.+Silk\//;
    var s_Qk = s_Pna.test(navigator.userAgent) || s_Pk() || s_Qna.test(navigator.userAgent)
      , s_Rk = window.navigator.msPointerEnabled
      , s_Sk = s_Qk ? "touchstart" : s_Rk ? "MSPointerDown" : "mousedown"
      , s_Tk = s_Qk ? "touchmove" : s_Rk ? "MSPointerMove" : "mousemove"
      , s_Uk = s_Qk ? "touchend" : s_Rk ? "MSPointerUp" : "mouseup"
      , s_Rna = s_Rk ? "MSPointerCancel" : "touchcancel"
      , s_Sna = function(a, b, c, d, e, f, g) {
        s_Qk || s_Rk || (b = s_Vk(b),
        c = s_Vk(c),
        d = s_Vk(d));
        f = !!f;
        s_Ok(a, s_Sk, b, f, g);
        s_Ok(a, s_Tk, c, f, g);
        s_Ok(a, s_Uk, d, f, g);
        s_Ok(a, s_Rna, e, f, g)
    }
      , s_Vk = function(a) {
        return function(b) {
            b.touches = [];
            b.targetTouches = [];
            b.changedTouches = [];
            b.type != s_Uk && (b.touches[0] = b,
            b.targetTouches[0] = b);
            b.changedTouches[0] = b;
            a(b)
        }
    }
      , s_Wk = function(a) {
        return a.touches || [a]
    }
      , s_Xk = function(a) {
        return (s_Rk ? [a] : a.changedTouches) || []
    }
    ;
    s_C("sy86");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s__na = /Chrome\/([0-9.]+)/
      , s_0na = function() {
        return s_ya(navigator.userAgent, "Chrome/")
    }
      , s_1na = /OS (\d+)_(\d+)(?:_(\d+))?/
      , s_2na = function(a, b, c, d) {
        return a << 21 | b << 14 | c << 7 | d
    }
      , s_3na = function() {
        var a = s_1na.exec(navigator.userAgent) || [];
        a.shift();
        return s_2na.apply(null , a)
    }
      , s_4na = function(a) {
        var b;
        if (b = s_Pk() && s_0na())
            b = s__na.exec(navigator.userAgent),
            b = 18 == +(b ? b[1] : "").split(".")[0];
        return b ? new s_$b(a.clientX,a.pageY - window.scrollY) : new s_$b(a.clientX,a.clientY)
    }
    ;
    s_D("sy87");
    var s__k, s_5na, s_6na, s_7na, s_8na = function(a) {
        if (!(2500 < s_e() - s_5na)) {
            var b = s_4na(a);
            if (!(1 > b.x && 1 > b.y)) {
                for (var c = 0; c < s__k.length; c += 2)
                    if (25 > Math.abs(b.x - s__k[c]) && 25 > Math.abs(b.y - s__k[c + 1])) {
                        s__k.splice(c, c + 2);
                        return
                    }
                a.stopPropagation();
                a.preventDefault();
                (a = s_6na) && a()
            }
        }
    }
    , s_9na = function(a) {
        var b = s_4na(s_Wk(a)[0]);
        s__k.push(b.x, b.y);
        window.setTimeout(function() {
            for (var a = b.x, d = b.y, e = 0; e < s__k.length; e += 2)
                if (s__k[e] == a && s__k[e + 1] == d) {
                    s__k.splice(e, e + 2);
                    break
                }
            s_6na = void 0
        }, 2500)
    }
    , s_$na = function() {
        s_a(s_7na) || (s_7na = s_3na() >= s_2na(6) || !0);
        return s_7na
    }
    , s_0k = function(a, b, c) {
        s_6na = c;
        s__k || (document.addEventListener("click", s_8na, !0),
        c = s_9na,
        s_Qk || s_Rk || (c = s_Vk(c)),
        s_Ok(document, s_Sk, c, !0, !0),
        s__k = []);
        s_5na = s_e();
        for (c = 0; c < s__k.length; c += 2)
            if (25 > Math.abs(a - s__k[c]) && 25 > Math.abs(b - s__k[c + 1])) {
                s__k.splice(c, c + 2);
                break
            }
    }
    ;
    s_C("sy87");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy89");
    var s_aoa = function() {
        this.ka = [];
        this.$ = []
    }
      , s_boa = function(a, b, c, d) {
        a.ka.length = a.$.length = 0;
        a.ka.push(b, d);
        a.$.push(c, d)
    }
      , s_eoa = function(a, b, c, d) {
        var e = a.ka[a.ka.length - 2] - b
          , f = a.$[a.$.length - 2] - c
          , g = a.ka
          , k = a.ma;
        k && e && 2 < g.length && 0 < k ^ 0 < e && g.splice(0, g.length - 2);
        g = a.$;
        (k = a.qa) && f && 2 < g.length && 0 < k ^ 0 < f && g.splice(0, g.length - 2);
        s_coa(a.ka, d);
        s_coa(a.$, d);
        a.ka.push(b, d);
        a.$.push(c, d);
        a.ma = e;
        a.qa = f;
        return s_doa(a, b, c, d)
    }
      , s_coa = function(a, b) {
        for (; a.length && 250 < b - a[1] || 10 < a.length; )
            a.splice(0, 2)
    }
      , s_foa = function(a, b, c, d) {
        if (s_a(b) && s_a(c) && d)
            return s_coa(a.ka, d),
            s_coa(a.$, d),
            s_doa(a, b, c, d)
    }
      , s_doa = function(a, b, c, d) {
        b = a.ka.length ? (b - a.ka[0]) / (d - a.ka[1]) : 0;
        c = a.$.length ? (c - a.$[0]) / (d - a.$[1]) : 0;
        b = s_goa(a, b);
        c = s_goa(a, c);
        return new s_$b(b,c)
    }
      , s_goa = function(a, b) {
        var c = Math.abs(b);
        5 < c && (c = 6 > a.$.length ? 1 : 5);
        return c * (0 > b ? -1 : 1)
    }
    ;
    s_C("sy89");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy91");
    var s_Moa = s_Jb ? "-ms-" : s_Lb ? "-moz-" : s_Ib ? 0 > s_Da(s_Sb, "15.0") ? "-o-" : "-webkit-" : "-webkit-"
      , s_Noa = s_Jb ? "ms" : s_Lb ? "Moz" : s_Ib ? 0 > s_Da(s_Sb, "15.0") ? "O" : "webkit" : "webkit"
      , s_wl = s_Moa + "transform"
      , s_xl = s_Noa + "Transform"
      , s_Ooa = s_Noa + "Transition"
      , s_yl = function(a) {
        a = document.defaultView.getComputedStyle(a, null )[s_xl];
        return "undefined" != typeof WebKitCSSMatrix ? new WebKitCSSMatrix(a) : "undefined" != typeof MSCSSMatrix ? new MSCSSMatrix(a) : "undefined" != typeof CSSMatrix ? new CSSMatrix(a) : {}
    }
    ;
    s_C("sy91");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy82");
    var s_ll = function(a, b, c) {
        this.x = s_a(a) ? a : 0;
        this.y = s_a(b) ? b : 0;
        this.z = s_a(c) ? c : 0
    }
    ;
    s_ll.prototype.clone = function() {
        return new s_ll(this.x,this.y,this.z)
    }
    ;
    s_ll.prototype.Oa = function() {
        return [this.x, this.y, this.z]
    }
    ;
    s_C("sy82");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy84");
    var s_ml = function(a) {
        return (a = a.exec(s_$a)) ? a[1] : ""
    }
      , s_voa = function() {
        if (s_9ca)
            return s_ml(/Firefox\/([0-9.]+)/);
        if (s_Jb || s_Kb || s_Ib)
            return s_Sb;
        if (s_ada)
            return s_ml(/Chrome\/([0-9.]+)/);
        if (s_bda && !s_Eb())
            return s_ml(/Version\/([0-9.]+)/);
        if (s_Ae || s_Be) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(s_$a);
            if (a)
                return a[1] + "." + a[2]
        } else if (s_$ca)
            return (a = s_ml(/Android\s+([0-9.]+)/)) ? a : s_ml(/Version\/([0-9.]+)/);
        return ""
    }();
    s_C("sy84");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Doa = 0
      , s_pl = function(a) {
        return s_Rk ? a.pointerId : a.identifier
    }
      , s_ql = function(a, b, c, d) {
        var e = document.createEvent("HTMLEvents");
        e.initEvent(b, !0, !0);
        e.sender = c;
        e.Ig = d;
        a.dispatchEvent(e)
    }
      , s_rl = function(a) {
        return a + "_" + s_Doa++
    }
    ;
    s_D("sy88");
    var s_sl = function(a, b, c) {
        this.Xa = a;
        this.Ka = b;
        this.ma = c;
        this.ka = [];
        this.Wa = [];
        this.Ga = [];
        this.Ia = [];
        this.Ea = [];
        this.Ca = []
    }
    ;
    s_sl.prototype.$ = 0;
    var s_Eoa = function(a, b) {
        for (var c, d = s_Xk(b), e = d.length, f = 0; f < a.$; f++) {
            a.Wa[f] = void 0;
            for (var g = 0; g < e; g++)
                if (a.ka[f] == s_pl(d[g])) {
                    a.Wa[f] = d[g];
                    c = !0;
                    break
                }
        }
        return c
    }
    ;
    s_sl.prototype.iG = function(a) {
        if (!this.Da && this.$ != this.ma) {
            for (var b = s_Xk(a), c = Math.min(b.length, this.ma - this.$), d = 0; d < c; d++) {
                var e = b[d];
                this.ka[this.$] = s_pl(e);
                this.Ea[this.$] = e.clientX;
                this.Ca[this.$] = e.clientY;
                this.$++
            }
            s_Eoa(this, a);
            if (this.$ == this.ma)
                for (d = 0; d < this.ma; d++)
                    this.Ga[d] = this.Ia[d] = 0;
            this.Yb(a)
        }
    }
    ;
    s_sl.prototype.OW = function(a) {
        if (!this.Da && this.$ == this.ma && s_Eoa(this, a))
            if (this.qa)
                this.Za(a);
            else {
                for (var b, c = 0; c < this.ma; c++) {
                    var d = this.Wa[c];
                    if (d) {
                        var e = this.ka[c]
                          , f = this.Ka[e] - d.clientY;
                        this.Ga[c] += Math.abs(this.Xa[e] - d.clientX);
                        this.Ia[c] += Math.abs(f);
                        b = b || 2 < this.Ga[c] || 2 < this.Ia[c]
                    }
                }
                if (b) {
                    for (c = 0; c < this.ma; c++)
                        this.Ea[c] = s_Foa(this, c),
                        this.Ca[c] = s_Goa(this, c);
                    (this.qa = this.Lb(a)) ? this.Za(a) : this.reset()
                }
            }
    }
    ;
    s_sl.prototype.reset = function() {
        this.$ = 0;
        this.Da = this.qa = !1
    }
    ;
    s_sl.prototype.suspend = function() {
        this.Da = !0
    }
    ;
    var s_Foa = function(a, b) {
        var c = b || 0
          , d = a.Wa[c];
        return d ? d.clientX : a.Xa[a.ka[c || 0]]
    }
      , s_Goa = function(a, b) {
        var c = b || 0
          , d = a.Wa[c];
        return d ? d.clientY : a.Ka[a.ka[c || 0]]
    }
    ;
    var s_tl = function(a, b, c) {
        s_sl.call(this, b, c, 1);
        this.Db = a;
        this.Ja = new s_aoa
    }
    ;
    s_f(s_tl, s_sl);
    s_tl.prototype.Yb = function(a) {
        s_boa(this.Ja, this.Ea[0], this.Ca[0], a.timeStamp);
        this.Cd = this.Ea[0];
        this.rb = this.Ca[0]
    }
    ;
    s_tl.prototype.Lb = function(a) {
        return this.Db.rb(a)
    }
    ;
    s_tl.prototype.Za = function(a) {
        this.Cd = this.Ea[0];
        this.rb = this.Ca[0];
        s_eoa(this.Ja, s_Foa(this), s_Goa(this), a.timeStamp);
        this.Db.Ub(a);
        a.preventDefault()
    }
    ;
    s_tl.prototype.Ma = function(a) {
        a && (this.nb = s_foa(this.Ja, this.Xa[this.ka[0]], this.Ka[this.ka[0]], a.timeStamp) || void 0,
        a.preventDefault());
        this.Db.Rb(a);
        var b = this.Ea[0]
          , c = this.Ca[0];
        a && s_$na() ? a.preventDefault() : s_0k(b, c, void 0)
    }
    ;
    var s_Hoa = function(a) {
        return s_Foa(a) - a.Cd
    }
      , s_Ioa = function(a) {
        return Math.abs(s_Goa(a) - a.rb) > Math.abs(s_Hoa(a))
    }
    ;
    var s_ul = function(a, b, c) {
        s_sl.call(this, b, c, 2);
        this.Ja = a
    }
    ;
    s_f(s_ul, s_sl);
    s_ul.prototype.Yb = s_b;
    s_ul.prototype.Lb = function(a) {
        return this.Ja.ma(a)
    }
    ;
    s_ul.prototype.Za = function(a) {
        this.Ja.ka(a);
        a.preventDefault()
    }
    ;
    s_ul.prototype.Ma = function(a) {
        this.Ja.$(a);
        a && a.preventDefault()
    }
    ;
    var s_vl = function(a) {
        this.qa = a;
        this.Aa = this.qa.va();
        this.ka = {};
        this.ma = {};
        this.$ = []
    }
      , s_Joa = [s_tl, s_ul]
      , s_Koa = function(a, b) {
        var c = a.$[0];
        if (c)
            return c;
        c = new s_Joa[0](b,a.ka,a.ma);
        return a.$[0] = c
    }
    ;
    s_vl.prototype.Ca = function(a) {
        var b = s_Wk(a), c = b.length, d;
        for (d in this.ka) {
            for (var e = 0; e < c; e++)
                if (d == s_pl(b[e])) {
                    var f = !0;
                    break
                }
            f || s_Loa(this, +d)
        }
        b = s_Xk(a);
        c = b.length;
        for (e = 0; e < c; e++)
            d = s_pl(b[e]),
            s_a(this.ka[d]) && s_Loa(this, +d);
        c = !0;
        e = this.$.length;
        for (b = 0; b < e; b++)
            if ((d = this.$[b]) && d.$ != d.ma) {
                c = !1;
                break
            }
        if (!c && this.qa.iG(a)) {
            c = s_Xk(a);
            d = c.length;
            for (b = 0; b < d; b++) {
                var f = c[b]
                  , g = s_pl(f);
                this.ka[g] = f.clientX;
                this.ma[g] = f.clientY
            }
            for (b = 0; b < e; b++)
                (d = this.$[b]) && d.iG(a)
        }
    }
    ;
    s_vl.prototype.Ea = function(a) {
        for (var b = !0, c = this.$.length, d = 0; d < c; d++) {
            var e = this.$[d];
            if (e && 0 < e.$) {
                b = !1;
                break
            }
        }
        if (!b) {
            for (d = 0; d < c; d++)
                (e = this.$[d]) && e.OW(a);
            a = s_Xk(a);
            b = a.length;
            for (d = 0; d < b; d++)
                c = a[d],
                e = s_pl(c),
                s_a(this.ka[e]) && (this.ka[e] = c.clientX,
                this.ma[e] = c.clientY)
        }
    }
    ;
    s_vl.prototype.Wa = function(a) {
        for (var b = s_Xk(a), c = b.length, d, e = 0; e < c; e++) {
            var f = b[e]
              , f = s_pl(f);
            s_a(this.ka[f]) && (this.qa.nb(a),
            d = !0)
        }
        if (d) {
            d = this.$.length;
            for (e = 0; e < d; e++)
                if (f = this.$[e]) {
                    var g = a;
                    if (!f.Da && 0 < f.$ && s_Eoa(f, g)) {
                        f.qa && f.Ma(g);
                        for (var g = f.$, k = 0, l = 0; l < g; l++)
                            if (f.Wa[l]) {
                                var m = f;
                                m.ka.splice(l - k, 1);
                                m.$--;
                                m.qa = !1;
                                k++
                            }
                    }
                }
            for (e = 0; e < c; e++)
                f = b[e],
                f = s_pl(f),
                s_a(this.ka[f]) && (delete this.ka[f],
                delete this.ma[f])
        }
    }
    ;
    var s_Loa = function(a, b) {
        a.qa.nb(null );
        for (var c = a.$.length, d = 0; d < c; d++) {
            var e = a.$[d];
            if (e) {
                var f = e;
                if (!f.Da && 0 < f.$) {
                    for (var e = void 0, g = 0; g < f.$; g++)
                        if (f.ka[g] == b) {
                            e = g;
                            break
                        }
                    s_a(e) && (f.qa && f.Ma(null ),
                    f.ka.splice(e, 1),
                    f.$--,
                    f.qa = !1)
                }
            }
        }
        delete a.ka[b];
        delete a.ma[b]
    }
    ;
    s_vl.prototype.enable = function(a, b) {
        var c = s_c(this.Wa, this);
        s_Sna(this.Aa, s_c(this.Ca, this), s_c(this.Ea, this), c, c, a, b)
    }
    ;
    s_vl.prototype.reset = function() {
        for (var a in this.ka)
            delete this.ka[Number(a)],
            delete this.ma[Number(a)];
        for (a = 0; a < this.$.length; a++) {
            var b = this.$[a];
            b && b.reset()
        }
    }
    ;
    s_C("sy88");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy92");
    var s_Poa = "WebKitCSSMatrix"in window && "m11"in new WebKitCSSMatrix("")
      , s_Qoa = s_Mb ? "webkitTransitionEnd" : "transitionend"
      , s_Roa = function(a, b, c, d) {
        a.style[s_Ooa] = (c || s_wl) + " " + b + "ms " + (d || "ease-in-out")
    }
      , s_zl = function(a, b, c) {
        a.style[s_xl] = s_Soa(b, c)
    }
      , s_Soa = function(a, b) {
        var c = s_ka(a) ? a + "px" : a || "0"
          , d = s_ka(b) ? b + "px" : b || "0";
        return s_Poa ? "translate3d(" + c + "," + d + ",0)" : "translate(" + c + "," + d + ")"
    }
    ;
    s_C("sy92");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy79");
    var s_1k = function(a, b, c) {
        this.type = a;
        this.$ = b;
        this.target = c
    }
      , s_hoa = function(a, b, c, d) {
        s_1k.call(this, 1, a, b);
        this.x = c;
        this.y = d
    }
    ;
    s_f(s_hoa, s_1k);
    var s_2k = function(a, b, c, d, e, f, g, k, l, m) {
        s_1k.call(this, 3, a, b);
        this.direction = c;
        this.touches = d;
        this.ka = e;
        this.ma = f;
        this.x = g;
        this.y = k;
        this.velocityX = l;
        this.velocityY = m
    }
    ;
    s_f(s_2k, s_1k);
    var s_3k = function(a, b, c, d, e, f, g) {
        s_1k.call(this, 4, a, b);
        this.scale = c;
        this.rotation = d;
        this.x = f;
        this.y = g
    }
    ;
    s_f(s_3k, s_1k);
    var s_4k = function(a, b, c, d, e, f) {
        s_1k.call(this, a, b, c);
        this.touches = d;
        this.x = e;
        this.y = f
    }
    ;
    s_f(s_4k, s_1k);
    var s_ioa = function(a, b, c) {
        this.target = a;
        this.type = b;
        this.Kk = c
    }
      , s_joa = new s_je
      , s_koa = 0
      , s_5k = function(a, b, c) {
        s_ye(a, b, c);
        return new s_ioa(a,b,c)
    }
      , s_6k = function(a, b) {
        var c = "gt" + s_koa++;
        s_joa.set(c, b);
        "_GTL_"in a || (a._GTL_ = []);
        a._GTL_.push(c);
        return c
    }
      , s_7k = function(a) {
        var b = s_joa.get(a);
        if (b && b.length) {
            for (var c, d = null , e = 0; e < b.length; e++)
                c = b[e],
                c instanceof s_ioa ? (s_ze(c.target, c.type, c.Kk),
                d = c.target) : c();
            s_joa.remove(a);
            d && "_GTL_"in d && s_Ya(d._GTL_, a)
        }
    }
    ;
    var s_8k = function(a, b, c, d) {
        this.$ = a;
        this.ka = b;
        this.x1 = c;
        this.y1 = d
    }
    ;
    s_8k.prototype.clone = function() {
        return new s_8k(this.$,this.ka,this.x1,this.y1)
    }
    ;
    s_8k.prototype.equals = function(a) {
        return this.$ == a.$ && this.ka == a.ka && this.x1 == a.x1 && this.y1 == a.y1
    }
    ;
    var s_loa = function(a) {
        var b = a.x1 - a.$;
        a = a.y1 - a.ka;
        return b * b + a * a
    }
      , s_9k = function(a) {
        return new s_$b(s_9b(a.$, a.x1, .5),s_9b(a.ka, a.y1, .5))
    }
    ;
    var s_$k = function() {}
    ;
    s_f(s_$k, s_Ud);
    var s_moa = function() {
        return "DEFAULT_ID"
    }
    ;
    s_$k.prototype.qa = s_Xd(s_moa);
    s_$k.prototype.ma = s_Xd(s_moa);
    s_$k.prototype.$ = s_Xd(s_moa);
    s_$k.prototype.Ea = s_Xd(s_moa);
    var s_noa = function(a) {
        return !a || 0 == a.x && 0 == a.y ? 0 : Math.abs(a.x) > Math.abs(a.y) ? 0 < a.x ? 6 : 4 : 0 < a.y ? 5 : 3
    }
      , s_al = function(a, b) {
        return 0 == b || 2 >= b && a % 2 == b % 2 ? !0 : a == b
    }
      , s_bl = function(a, b, c, d) {
        a = 180 * Math.atan2(d - b, c - a) / Math.PI;
        0 > a && (a = 360 + a);
        return a
    }
      , s_ooa = function(a, b, c, d, e, f, g, k) {
        a = Math.sqrt(s_loa(new s_8k(e,f,g,k))) / Math.sqrt(s_loa(new s_8k(a,b,c,d)));
        return isNaN(a) ? 1 : isFinite(a) ? a : 10
    }
    ;
    var s_cl = function() {
        s_Zd(this)
    }
    ;
    s_Vd(s_$k, s_cl);
    s_ea(s_cl);
    var s_poa = function(a, b) {
        return s_cl.Sa().Mb.qa(a, b, void 0, void 0)
    }
      , s_dl = function(a, b, c, d, e, f, g) {
        return s_cl.Sa().Mb.ma(a, b, c, d, e, f, g)
    }
      , s_qoa = function(a, b, c, d) {
        return s_cl.Sa().Mb.Ea(a, b, c, d, 1, !0)
    }
    ;
    var s_gl = function() {}
    ;
    s_f(s_gl, s_$k);
    s_Wd(s_gl, s_$k);
    s_gl.prototype.qa = function(a, b, c, d) {
        c = [s_5k(a, "click", function(c) {
            d && c.stopPropagation();
            b(new s_hoa(c,a,c.screenX,c.screenY))
        }), s_5k(a, "keydown", function(c) {
            var d = c.which || c.keyCode || c.key
              , e = a.tagName.toUpperCase();
            "TEXTAREA" == e || "BUTTON" == e || "INPUT" == e || a.isContentEditable || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey || 13 != d && 32 != d && 3 != d || (32 == d && c.preventDefault(),
            b(c))
        })];
        return s_6k(a, c)
    }
    ;
    s_gl.prototype.ma = function(a, b, c, d, e, f, g) {
        var k = e || 0, l, m, n, ba, t, w = new s_aoa, B, G = !1;
        e = function(a) {
            G = a
        }
        ;
        var I = function(c) {
            if (G) {
                n = c.screenX;
                ba = c.screenY;
                var d = s_eoa(w, n, ba, c.timeStamp);
                t = s_noa(d);
                s_al(t, k) && b(new s_2k(c,a,t,1,l,m,n,ba,d.x,d.y))
            }
        }
        ;
        B = function(b) {
            if (s_al(t, k)) {
                s_ze(a, "mousemove", I);
                s_ze(a, "mouseup", B);
                s_ze(a, "mouseout", B);
                var c = s_foa(w, n, ba, b.timeStamp);
                d && d(new s_2k(b,a,t,1,l,m,b.screenX,b.screenY,c.x,c.y));
                g || s_0k(l, m)
            }
        }
        ;
        e = [s_5k(a, "mousedown", function(b) {
            l = n = b.screenX;
            m = ba = b.screenY;
            s_boa(w, l, m, b.timeStamp);
            c && c(new s_2k(b,a,0,1,l,m,n,ba,0,0));
            s_ye(a, "mousemove", I);
            s_ye(a, "mouseup", B);
            s_ye(a, "mouseout", B)
        }), s_5k(document.body, "mousedown", s_d(e, !0)), s_5k(document.body, "mouseup", s_d(e, !1))];
        return s_6k(a, e)
    }
    ;
    s_gl.prototype.$ = function(a, b, c, d, e) {
        var f = !1, g = function(a) {
            f = a
        }
        , k, l = !1, m, n, ba, t, w, B = function(b) {
            ba = b.screenX;
            t = b.screenY;
            w = s_bl(m, n, ba, t);
            var d = s_9k(new s_8k(m,n,ba,t));
            c && c(new s_3k(b,a,1,0,0,d.x,d.y))
        }
        , G = function(c) {
            if (f) {
                var d = c.screenX
                  , e = c.screenY
                  , g = s_9k(new s_8k(m,n,d,e));
                b(new s_3k(c,a,s_ooa(m, n, ba, t, m, n, d, e),s_bl(m, n, d, e) - w,0,g.x,g.y))
            }
        }
        ;
        k = function(b) {
            l = !1;
            s_ze(a, "mousedown", B);
            s_ze(a, "mousemove", G);
            s_ze(a, "mouseup", k);
            s_ze(a, "mouseout", k);
            if (d) {
                var c = b.screenX
                  , f = b.screenY
                  , g = s_9k(new s_8k(m,n,c,f));
                d(new s_3k(b,a,s_ooa(m, n, ba, t, m, n, c, f),s_bl(m, n, c, f) - w,0,g.x,g.y))
            }
            e || s_0k(m, n)
        }
        ;
        g = [s_5k(a, "click", function(b) {
            m = b.screenX;
            n = b.screenY;
            l || (s_ye(a, "mousedown", B),
            s_ye(a, "mousemove", G),
            s_ye(a, "mouseup", k),
            s_ye(a, "mouseout", k),
            l = !0)
        }), s_5k(document.body, "mousedown", s_d(g, !0)), s_5k(document.body, "mouseup", s_d(g, !1))];
        return s_6k(a, g)
    }
    ;
    s_gl.prototype.Ea = function(a, b, c, d, e, f) {
        var g, k, l, m = !1;
        e = function(a) {
            m = a
        }
        ;
        var n = function(c) {
            m && b && b(new s_4k(6,c,a,1,c.screenX,c.screenY))
        }
        ;
        l = function(b) {
            s_ze(a, "mousemove", n);
            s_ze(a, "mouseup", l);
            s_ze(a, "mouseout", l);
            d && d(new s_4k(7,b,a,1,b.screenX,b.screenY));
            f || s_0k(g, k)
        }
        ;
        e = [s_5k(a, "mousedown", function(b) {
            g = b.screenX;
            k = b.screenY;
            c && c(new s_4k(5,b,a,1,g,k));
            s_ye(a, "mousemove", n);
            s_ye(a, "mouseup", l);
            s_ye(a, "mouseout", l)
        }), s_5k(document.body, "mousedown", s_d(e, !0)), s_5k(document.body, "mouseup", s_d(e, !1))];
        return s_6k(a, e)
    }
    ;
    s_C("sy79");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_woa = function(a) {
        var b;
        a: {
            b = s_Fa("transform");
            if (void 0 === a.style[b] && (b = s_Sc() + s_Ha(b),
            void 0 !== a.style[b])) {
                b = s_Tc() + "-transform";
                break a
            }
            b = "transform"
        }
        return s_od(a, b) || s_od(a, "transform")
    }
    ;
    s_D("sy85");
    var s_xoa = s_ed(function() {
        return !s_Jb || 0 <= s_Da(s_voa, 9)
    })
      , s_yoa = s_ed(function() {
        return s_Mb || s_Kb || s_Lb && 0 <= s_Da(s_voa, 10) || s_Jb && 0 <= s_Da(s_voa, 10)
    })
      , s_nl = function(a) {
        a = s_woa(a);
        var b = s_zoa();
        return a && b ? (a = new b(a),
        new s_$b(a.m41,a.m42)) : new s_$b(0,0)
    }
      , s_ol = function(a, b, c) {
        s_xoa() && (b = s_yoa() ? "translate3d(" + b + "px," + c + "px,0px)" : "translate(" + b + "px," + c + "px)",
        s_q(a, s_Aoa(), b))
    }
      , s_Boa = function(a) {
        a = s_woa(a);
        var b = s_zoa();
        return a && b ? (a = new b(a),
        new s_ll(a.m11,a.m22,a.m33)) : new s_ll(0,0,0)
    }
      , s_Aoa = s_ed(function() {
        return s_Jb && 9 == s_Zaa ? "-ms-transform" : "transform"
    })
      , s_zoa = s_ed(function() {
        return s_a(s_ca.WebKitCSSMatrix) ? s_ca.WebKitCSSMatrix : s_a(s_ca.MSCSSMatrix) ? s_ca.MSCSSMatrix : s_a(s_ca.CSSMatrix) ? s_ca.CSSMatrix : null
    });
    s_C("sy85");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Toa = function(a, b, c) {
        a.style.left = b + "px";
        a.style.top = c + "px"
    }
      , s_Uoa = function(a, b, c, d, e, f, g, k) {
        b = "translate3d(" + b + "px," + c + "px," + (d || 0) + "px)";
        e && (b += " rotate(" + e + "deg)");
        s_a(f) && (b += " scale3d(" + f + "," + f + ",1)");
        a.style[s_xl] = b;
        g && (a.style[s_xl + "OriginX"] = g + "px");
        k && (a.style[s_xl + "OriginY"] = k + "px")
    }
    ;
    s_D("sy90");
    var s_Voa = 1 / 3
      , s_Woa = 2 / 3
      , s_Xoa = [s_Voa, s_Woa, s_Woa, 1]
      , s_Yoa = function(a, b, c, d) {
        if (1E-6 >= Math.abs(b - 0))
            return s_Xoa;
        1E-6 >= Math.abs(a - b) ? a = [0, 0] : (b = (d - c * b) / (a - b),
        a = [b, b * a]);
        a = [a[0] / c, a[1] / d];
        c = a[0] * s_Woa;
        d = a[1] * s_Woa;
        return [c, d, c + s_Voa, d + s_Voa]
    }
    ;
    var s_Zoa = function() {
        this.Ma = s_c(this.rb, this);
        this.Wa = this.Ca = 0
    }
      , s__oa = 7 / 60
      , s_0oa = 7 / 60
      , s_1oa = 1E3 / 60
      , s_2oa = .25 * s_1oa
      , s_Al = .01 * s_1oa;
    s_ = s_Zoa.prototype;
    s_.WB = function() {
        return 0
    }
    ;
    s_.start = function(a, b, c, d) {
        this.Ga = b;
        this.Da = c;
        this.$ = d.clone();
        this.qa = d.clone();
        b = s_3oa(a.x, this.$.x, this.Ga.x, this.Da.x);
        if (0 > b * a.x || !a.x && b)
            this.Wa = 2;
        c = s_3oa(a.y, this.$.y, this.Ga.y, this.Da.y);
        if (0 > c * a.y || !a.y && c)
            this.Ca = 2;
        this.ka = new s_$b(b,c);
        if (Math.abs(this.ka.y) >= s_2oa || Math.abs(this.ka.x) >= s_2oa || this.Wa || this.Ca) {
            a = [];
            for (b = s_e(); ; ) {
                do
                    this.$.y += this.ka.y,
                    this.$.x += this.ka.x,
                    this.Ja = Math.round(this.$.y),
                    this.Ia = Math.round(this.$.x),
                    s_4oa(this, this.$.x, this.Ga.x, this.Da.x, this.ka.x, this.Wa, !1),
                    s_4oa(this, this.$.y, this.Ga.y, this.Da.y, this.ka.y, this.Ca, !0),
                    b += s_1oa;
                while (this.Ja == this.qa.y && this.Ia == this.qa.x && (Math.abs(this.ka.y) >= s_Al || Math.abs(this.ka.x) >= s_Al));if (0 == this.Wa && 0 == this.Ca && this.Ja == this.qa.y && this.Ia == this.qa.x)
                    break;
                a.push(b, this.Ia, this.Ja);
                this.qa.y = this.Ja;
                this.qa.x = this.Ia
            }
            this.ma = a;
            if (this.ma.length)
                return this.Za = window.setTimeout(this.Ma, this.ma[0] - s_e()),
                this.Db = !0
        }
    }
    ;
    s_.CP = s_b;
    s_.stop = function() {
        this.Db = !1;
        this.ma = [];
        window.clearTimeout(this.Za);
        s_5oa(this.Mb)
    }
    ;
    s_.dA = function() {
        return this.Db
    }
    ;
    s_.pO = function(a) {
        this.Mb = a
    }
    ;
    var s_3oa = function(a, b, c, d) {
        a = a * s_1oa * 1.25;
        Math.abs(a) < s_2oa && (b < c ? (a = (c - b) * s_0oa,
        a = Math.max(a, s_Al)) : b > d && (a = (b - d) * s_0oa,
        a = -Math.max(a, s_Al)));
        return a
    }
      , s_4oa = function(a, b, c, d, e, f, g) {
        if (e) {
            e *= .97;
            if (b < c)
                var k = c - b;
            else
                b > d && (k = d - b);
            k ? 0 > k * e ? (f = 2 == f ? 0 : 1,
            e += k * s__oa) : (f = 2,
            e = 0 < k ? Math.max(k * s_0oa, s_Al) : Math.min(k * s_0oa, -s_Al)) : f = 0;
            g ? (a.ka.y = e,
            a.Ca = f) : (a.ka.x = e,
            a.Wa = f)
        }
    }
    ;
    s_Zoa.prototype.rb = function() {
        if (this.ma.length) {
            var a = this.ma.splice(0, 3);
            this.Mb.Pb(a[1], a[2]);
            this.ma.length ? (a = this.ma[0] - s_e(),
            this.Za = window.setTimeout(this.Ma, a)) : this.stop()
        }
    }
    ;
    var s_Bl = function() {
        this.$ = []
    }
    ;
    s_Bl.prototype.Ea = -5E-4;
    s_Bl.prototype.WB = function() {
        return 1
    }
    ;
    s_Bl.prototype.start = function(a, b, c, d) {
        var e = Math.abs(a.y) >= Math.abs(a.x)
          , f = e ? a.y : a.x;
        a = e ? b.y : b.x;
        var g = e ? c.y : c.x
          , k = e ? d.y : d.x;
        b = s_8b(e ? d.x : d.y, e ? b.x : b.y, e ? c.x : c.y);
        if (k < a || k > g)
            a = k < a ? a : g,
            this.$.push(e ? b : a, e ? a : b, 500, "ease-out");
        else if (.25 <= Math.abs(f)) {
            d = (c = 0 > f) ? -this.Ea : this.Ea;
            var l = c ? a - k : g - k
              , m = f;
            if (l) {
                var m = f * f
                  , n = 2 * d
                  , ba = -m / n;
                Math.abs(ba) < Math.abs(l) ? (l = ba,
                m = 0) : (m = Math.sqrt(m + n * l),
                m *= 0 > f ? -1 : 1);
                this.Wa = m;
                this.ka = (m - f) / d;
                this.qa = l;
                f = "cubic-bezier(" + s_Yoa(f, this.Wa, this.ka, this.qa).join(",") + ")";
                k += this.qa;
                this.$.push(e ? b : k, e ? k : b, this.ka, f);
                m = this.Wa
            }
            0 != m && (a = c ? a : g,
            k = 50 * m,
            g = a + k,
            this.ka = 2 * k / (m + 0),
            f = "cubic-bezier(" + s_Yoa(m, 0, this.ka, k).join(",") + ")",
            this.$.push(e ? b : g, e ? g : b, this.ka, f),
            this.$.push(e ? b : a, e ? a : b, 500, "ease-out"))
        }
        if (this.$.length)
            return this.ma = !0,
            s_6oa(this),
            !0
    }
    ;
    var s_6oa = function(a) {
        var b = a.$
          , c = b.shift()
          , d = b.shift()
          , e = b.shift()
          , b = b.shift();
        a.Mb.Pb(c, d, e, b)
    }
    ;
    s_Bl.prototype.CP = function() {
        this.ma && (this.$.length ? s_6oa(this) : (this.ma = !1,
        s_5oa(this.Mb)))
    }
    ;
    s_Bl.prototype.stop = function() {
        this.ma = !1;
        this.$ = [];
        s_5oa(this.Mb)
    }
    ;
    s_Bl.prototype.dA = function() {
        return this.ma
    }
    ;
    s_Bl.prototype.pO = function(a) {
        this.Mb = a
    }
    ;
    var s_7oa = function() {}
      , s_8oa = new s_7oa;
    s_7oa.prototype.$ = 1;
    var s_Dl = function(a, b, c, d, e, f, g, k) {
        this.Aa = a;
        this.Lb = a.parentNode;
        this.Aa.addEventListener(s_Qoa, s_c(this.Vc, this), !1);
        this.Rv = new s_vl(this);
        this.Rv.enable(f);
        this.Ca = s_Koa(this.Rv, this);
        var l;
        switch (s_8oa.$) {
        case 0:
            l = new s_Zoa;
            break;
        case 1:
            l = new s_Bl
        }
        l.pO(this);
        this.ma = l;
        this.Wa = null ;
        this.Ka = !!b;
        this.Yd = !!c;
        this.De = d;
        this.Ga = e || 1;
        this.ka = s_Cl.clone();
        this.Ia = s_Cl.clone();
        this.Db = s_Cl.clone();
        this.$ = s_Cl.clone();
        this.Xa = 1 == this.Ga ? s_Uoa : s_Toa;
        a = s_a(k) ? k : this.ka.y;
        this.$.x = s_a(g) ? g : this.ka.x;
        this.$.y = a;
        this.Ga = g = this.Ga;
        this.Xa = 1 == g ? s_Uoa : s_Toa;
        1 != g && (this.Aa.style[s_Ooa] = "",
        this.Aa.style[s_xl] = "");
        2 != g && s_Toa(this.Aa, 0, 0);
        this.Xa(this.Aa, this.$.x, this.$.y);
        this.Kb = []
    }
      , s_9oa = s_rl("scroller:scroll_start")
      , s_El = s_rl("scroller:scroll_end")
      , s_$oa = s_rl("scroller:drag_end")
      , s_apa = s_rl("scroller:content_moved")
      , s_bpa = s_rl("scroller:decel_start")
      , s_Cl = new s_$b(0,0);
    s_Dl.prototype.Ma = !0;
    s_Dl.prototype.reset = function() {
        this.stop();
        this.Ca.reset();
        s_Fl(this, this.Aa, 0);
        this.Da();
        s_Gl(this, s_Gd(document.body) ? this.qa.x : this.ka.x, this.ka.y)
    }
    ;
    s_Dl.prototype.Da = function() {
        this.Ea = new s_dc(this.Lb.offsetWidth,this.Lb.offsetHeight);
        this.Yb = new s_dc(this.Be || this.Aa.scrollWidth,this.fD || this.Aa.scrollHeight);
        var a = new s_dc(Math.max(this.Ea.width, this.Yb.width),Math.max(this.Ea.height, this.Yb.height)), b = s_Gd(document.body), c;
        b ? (c = a.width - this.Ea.width,
        c = this.Ia.x ? Math.min(c, this.Ia.x) : c) : c = s_Cl.x - this.Ia.x;
        this.ka = new s_$b(c,s_Cl.y - this.Ia.y);
        this.qa = new s_$b(b ? this.Db.x : Math.min(this.Ea.width - a.width + this.Db.x, this.ka.x),Math.min(this.Ea.height - a.height + this.Db.y, this.ka.y));
        s_cpa(this)
    }
    ;
    var s_cpa = function(a) {
        var b = s_8b(a.$.x, a.qa.x, a.ka.x)
          , c = s_8b(a.$.y, a.qa.y, a.ka.y);
        a.$.x == b && a.$.y == c || s_Gl(a, b, c)
    }
      , s_Gl = function(a, b, c) {
        a.$.x = b;
        a.$.y = c;
        a.Xa(a.Aa, b, c);
        s_ql(a.Aa, s_apa, a)
    }
    ;
    s_Dl.prototype.mi = function(a, b, c, d) {
        s_a(c) && 1 == this.Ga && s_Fl(this, this.Aa, c, s_wl, d);
        s_Gl(this, a, b)
    }
    ;
    s_Dl.prototype.Vc = function(a) {
        a.target == this.Aa && (this.Ja = !1,
        this.ma.CP())
    }
    ;
    s_Dl.prototype.stop = function() {
        if (this.ma.dA())
            if (2 == this.Ga)
                this.ma.stop();
            else {
                var a = s_yl(this.Aa);
                if (this.Ja) {
                    this.$.x = a.m41;
                    this.$.y = a.m42;
                    this.Za = !0;
                    var b = this;
                    window.setTimeout(function() {
                        var c = s_yl(b.Aa);
                        s_Fl(b, b.Aa, 0);
                        window.setTimeout(function() {
                            b.Za = !1
                        }, 0);
                        var d = c.m41 + 2 * (c.m41 - a.m41)
                          , c = c.m42 + 2 * (c.m42 - a.m42)
                          , d = s_8b(d, b.qa.x, b.ka.x)
                          , c = s_8b(c, b.qa.y, b.ka.y);
                        s_dpa(b, d, c)
                    }, 0)
                } else
                    s_dpa(this, a.m41, a.m42)
            }
    }
    ;
    var s_dpa = function(a, b, c) {
        a.ma.stop();
        s_Gl(a, b, c)
    }
    ;
    s_Dl.prototype.iG = function(a) {
        if (this.Ca.qa)
            return !0;
        this.Da();
        this.ma.dA() ? (a.preventDefault(),
        this.xc || a.stopPropagation(),
        this.stop()) : s_Fl(this, this.Aa, 0);
        this.Cc = this.$.clone();
        s_cpa(this);
        return !0
    }
    ;
    s_Dl.prototype.nb = function() {}
    ;
    s_Dl.prototype.rb = function(a) {
        var b = s_Ioa(this.Ca);
        if (this.Ed && !b || !this.Ka && (!s_epa(this) || b))
            return !1;
        for (var b = 0, c; c = this.Kb[b]; ++b)
            if (!c.ka(this, a))
                return !1;
        for (b = 0; c = this.Kb[b]; ++b)
            c.$(this, a);
        return !0
    }
    ;
    s_Dl.prototype.Ub = function(a) {
        this.Ma || a.stopPropagation();
        var b;
        a = this.Ca;
        b = s_Goa(a) - a.rb;
        if (!this.Za) {
            var c = this.Cc;
            a = c.x + s_Hoa(this.Ca);
            a = s_epa(this) ? s_fpa(a, this.qa.x, this.ka.x) : 0;
            b = c.y + b;
            b = this.Ka ? s_fpa(b, this.qa.y, this.ka.y) : 0;
            this.Cd || (this.Cd = !0,
            s_ql(this.Aa, s_9oa, this));
            s_Gl(this, a, b)
        }
    }
    ;
    var s_epa = function(a) {
        return a.Yd && a.Ea.width < a.Yb.width
    }
      , s_fpa = function(a, b, c) {
        a < b ? a -= (a - b) / 2 : a > c && (a -= (a - c) / 2);
        return a
    }
    ;
    s_Dl.prototype.Rb = function() {
        var a = this.Ca.nb;
        s_ql(this.Aa, s_$oa, this);
        if (a && this.De && !this.Ja) {
            var b;
            s_epa(this) || (a.x = 0);
            this.Ka || (a.y = 0);
            b = this.ma.start(a, this.qa, this.ka, this.$)
        }
        b ? s_ql(this.Aa, s_bpa, this) : (s_cpa(this),
        s_ql(this.Aa, s_El, this),
        this.Cd = !1)
    }
    ;
    var s_Fl = function(a, b, c, d, e) {
        a.Ja = 0 < c;
        s_Roa(b, c, d, e)
    }
    ;
    s_Dl.prototype.va = function() {
        return this.Aa
    }
    ;
    s_Dl.prototype.getFrame = function() {
        return this.Lb
    }
    ;
    s_Dl.prototype.Pb = s_Dl.prototype.mi;
    var s_5oa = function(a) {
        s_Fl(a, a.Aa, 0);
        s_ql(a.Aa, s_El, a);
        a.Cd = !1
    }
    ;
    s_C("sy90");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy93");
    s_C("sy93");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_gpa = function(a, b) {
        b ? (s_w(a, "checked"),
        a.setAttribute("aria-checked", "true")) : (s_x(a, "checked"),
        a.setAttribute("aria-checked", "false"))
    }
      , s_hpa = function(a) {
        var b;
        s_t(a, "s") && (b = a.previousSibling);
        var c = null !== a && s_v(a, "checked");
        s_gpa(a, !c);
        b && !c && s_gpa(b, !1);
        a.hasAttribute("url") && (b = a.getAttribute("url") + "&ei=" + google.getEI(a),
        (a = s_t(a, "ved")) && (b += "&ved=" + a),
        s_We(b))
    }
      , s_ipa = function() {
        var a = {
            cdr_min: "cd_min",
            cdr_max: "cd_max"
        }
          , b = s_i("ctbs");
        if (b)
            for (var c in a) {
                var d = s_Coa(s_i(c).value)
                  , d = d.replace(/^\s+|\s+$/g, "");
                b.value = b.value.replace(new RegExp("(" + a[c] + ":)([^,]*)"), "$1" + d)
            }
        return !0
    }
    ;
    s_D("sy80");
    var s_Il = function(a, b, c, d) {
        this.jj = a;
        this.$ = b;
        this.qa = !!c;
        this.Zd = d ? d : null ;
        this.ka = null ;
        this.ma = s_poa(this.jj, s_c(this.Wa, this));
        s_Me(93, s_c(this.hide, this));
        s_Hl.push(this);
        a = this.jj.querySelectorAll(".mn-hd-txt");
        0 < a.length && this.jj.setAttribute("aria-label", a[0].innerHTML)
    }
      , s_Hl = [];
    s_Il.prototype.hide = function() {
        this.$.setAttribute("aria-expanded", "false");
        s_x(this.$, "hdtb-mn-o");
        s_w(this.$, "hdtb-mn-c");
        this.ka && s_ze(document.body, "click", this.ka)
    }
    ;
    s_Il.prototype.Wa = function(a) {
        var b = s_v(this.$, "hdtb-mn-c");
        this.qa && s_z(this.$, [this.$], [b]);
        b ? (s_u(93),
        this.$.setAttribute("aria-expanded", "true"),
        s_4e(a.$ || a),
        this.Zd && this.Zd(this.jj, this.$),
        s_x(this.$, "hdtb-mn-c"),
        s_w(this.$, "hdtb-mn-o"),
        this.ka = s_c(this.Ea, this),
        s_ye(document.body, "click", this.ka),
        b = this.$.querySelectorAll(".hdtb-mitem .qs"),
        0 < b.length && ("keydown" == a.type && a.preventDefault(),
        b[0].focus()),
        b = this.$.querySelectorAll(".hdtbSel"),
        0 < b.length && ("keydown" == a.type && a.preventDefault(),
        b[0].focus())) : this.hide()
    }
    ;
    s_Il.prototype.Ea = function(a) {
        s_Hc(this.$, s_3e(a.$ || a)) || this.hide()
    }
    ;
    s_Il.prototype.dispose = function() {
        s_7k(this.ma);
        this.ma = "";
        this.ka && (s_ze(document.body, "click", this.ka),
        this.ka = null )
    }
    ;
    var s_npa = function(a, b, c) {
        this.jj = a;
        this.$ = b;
        this.ma = s_i("hdtb-rst");
        c && (this.Zd = c);
        this.ka = s_i("appbar");
        this.qa = [];
        a = this.$.querySelectorAll(".hdtb-mn-hd");
        b = this.$.querySelectorAll("ul.hdtbU");
        c = a.length;
        for (var d = 0; d < c; d++) {
            var e = a[d]
              , f = b[d];
            e && f && this.qa.push(new s_Il(e,f,!1,s_jpa))
        }
        s_poa(this.jj, s_c(this.Wa, this));
        this.ma && s_poa(this.ma, s_c(this.Ea, this));
        s_kpa(this);
        s_lpa(this);
        s_mpa(this, s_Jl(this))
    }
      , s_jpa = function(a, b) {
        var c = document.body || document.documentElement
          , d = s_Gd(c)
          , e = d ? "right" : "left"
          , f = s_vd(a)
          , g = s_rd(a).y
          , k = s_vd(s_l("hdtb-mn-cont")) - s_vd(s_i("hdtbMenus"))
          , l = f - 15 - k;
        s_l("gsa-tools-card") && (l -= s_vd(s_i("hdtbMenus")));
        var m = s_r(a);
        d && (l = s_r(c).width - f - m.width - 15 + k - 20);
        c = m.height + g + "px";
        m = m.width + 30 + 30 + "px";
        b.style[e] = l + "px";
        s_q(b, {
            top: c,
            "min-width": m
        })
    }
      , s_opa = function(a) {
        for (var b = a.qa.length, c = 0; c < b; ++c)
            a.qa[c].hide()
    }
      , s_ppa = function(a) {
        var b = s_l("gsa-tools-card");
        b && s_s(b, !0);
        a.Zd && a.Zd();
        a.$.setAttribute("aria-expanded", "true");
        s_mpa(a, !0);
        s_x(a.$, "hdtb-td-c");
        s_x(a.$, "hdtb-td-h");
        s_Ef(s_c(function() {
            s_w(this.$, "hdtb-td-o");
            this.ka && s_w(this.ka, "hdtb-ab-o");
            s_kpa(this);
            s_lpa(this)
        }, a));
        a = a.$.querySelectorAll(".hdtb-mn-hd");
        0 < a.length && a[0].focus()
    }
      , s_qpa = function(a) {
        s_mpa(a, !1);
        s_opa(a);
        a.$.setAttribute("aria-expanded", "false");
        s_Ef(s_c(function() {
            s_x(this.$, "hdtb-td-o");
            s_w(this.$, "hdtb-td-c");
            this.ka && s_x(this.ka, "hdtb-ab-o");
            s_kpa(this);
            s_lpa(this)
        }, a));
        a.jj.focus();
        (a = s_l("gsa-tools-card")) && s_s(a, !1)
    }
    ;
    s_npa.prototype.Wa = function() {
        var a = !s_Jl(this);
        s_z(this.jj, [this.$], [a]);
        var b = s_i("tndd");
        b && (b.style.webkitTransform = "translate3d(0,-" + s_t(b, "height") + "px,0)");
        var b = s_i("htnmenu")
          , c = s_i("htnoverlay");
        b && c && (b.style.webkitTransform = "translate3d(0,0,0)",
        c.style.opacity = 0,
        s_x(document.body, "fxd"));
        a ? s_ppa(this) : s_qpa(this);
        for (a = 0; a < s_Hl.length; a++)
            s_Hl[a].hide()
    }
    ;
    s_npa.prototype.Ea = function() {
        s_We(this.ma.getAttribute("data-url"))
    }
    ;
    var s_Jl = function(a) {
        return "hdtb-td-o" == a.$.className
    }
      , s_kpa = function(a) {
        var b = s_i("botabar");
        b && s_Ed(b) && (s_r(b),
        b.style.marginTop = s_Jl(a) ? a.$.offsetHeight + "px" : 0);
        a.ka && s_y(a.ka, "hdtb-ab-o", s_Jl(a))
    }
      , s_lpa = function(a) {
        var b = s_i("epbar")
          , c = s_i("slim_appbar");
        c && !s_Ed(c) && b && (b.style.marginTop = s_Jl(a) ? 10 + a.$.offsetHeight + "px" : "10px")
    }
      , s_mpa = function(a, b) {
        s_y(a.jj, "hdtb-tl-sel", b)
    }
    ;
    var s_Kl = function(a) {
        this.Ja = this.Ia = null ;
        this.Ga = s_M(a, 2);
        this.$ = s_M(a, 9);
        this.Ca = s_M(a, 3);
        this.ma = s_M(a, 1);
        this.rb = !1;
        this.qa = s_i("hdtb-more");
        this.Ea = s_i("hdtb-more-mn");
        this.Xa = s_i("hdtb-tls");
        this.Wa = s_i("hdtbMenus");
        this.Da = s_i("hdtb-sc");
        this.Ma = s_i("hdtb-s") || s_i("hdtb-msb");
        this.qa && this.Ea && new s_Il(this.qa,this.Ea,!0,s_c(this.Za, this));
        this.Ga && !this.$ && this.Ma && (this.Ia = s_rpa(this.Ma));
        this.qa && this.Ea && this.$ && this.ma && s_ye(window, "resize", s_c(this.Za, this, this.qa, this.Ea));
        this.Xa && this.Wa && new s_npa(this.Xa,this.Wa,s_c(this.nb, this));
        this.Ca && null !== this.Wa && s_v(this.Wa, "hdtb-td-o") && s_spa(this);
        if (!this.Ga) {
            var b = s_i("hdtb-s");
            if (b) {
                a = 4;
                for (var b = b.childNodes, c = 0; c < b.length; ++c)
                    a += b[c].clientWidth;
                b = s_i("top_nav");
                null !== b && (c = s_Ia(s_md(b, "minWidth") || s_nd(b, "minWidth")),
                !c || a > c) && (b.style.minWidth = a + "px")
            }
        }
        a = s_i("hdtb");
        null === a || s_ye(a, "keydown", s_c(this.Db, this));
        s_1h("tnv", {
            cb: s_hpa,
            scf: s_ipa
        });
        this.Ga && this.Da && s_1h("tnv", {
            msc: s_c(this.Ka, this)
        })
    }
    ;
    s_f(s_Kl, s_h);
    s_Kl.prototype.Ha = function() {
        for (var a = 0; a < s_Hl.length; a++)
            s_Hl[a].dispose();
        s_Hl = [];
        this.Ja = this.Ia = null ;
        this.ma = this.Ca = !1;
        a = s_i("hdtb");
        null === a || s_ze(a, "keydown", this.Db)
    }
    ;
    s_Kl.prototype.Db = function(a) {
        this.rb || 9 != a.keyCode || (s_x(s_i("hdtb"), "notl"),
        this.rb = !0)
    }
    ;
    s_Kl.prototype.Za = function(a, b) {
        var c = s_ff()
          , d = this.ma != c
          , c = d ? "right" : "left"
          , e = Math.max(0, s_vd(a));
        this.ma && !this.$ ? e = 0 : d && (d = s_r(document.body || document.documentElement).width,
        e = Math.max(0, d - e - s_r(a).width));
        b.style[c] = e + "px"
    }
    ;
    s_Kl.prototype.nb = function() {
        !this.Ja && this.Ca && s_spa(this)
    }
    ;
    var s_rpa = function(a) {
        var b = s_ld(a, "transform") ? s_nl(a).x : null
          , c = new s_Dl(a,!1,!0,!0,1,!0);
        c.Ma = !0;
        c.xc = !0;
        c.Da();
        a = s_l("hdtb-msel", a) || s_l("hdtb-tsel", a);
        var d = 0;
        null != b ? d = b : a && (b = document.body || document.documentElement,
        d = s_Gd(b) ? Math.min(s_vd(a) - s_vd(b), c.ka.x) : Math.max(Math.min(c.ka.x, -s_vd(a) + 15), c.qa.x));
        c.mi(d, 0);
        s_ye(document, "orientationChange", c.Da);
        return c
    }
      , s_spa = function(a) {
        var b = s_k("hdtb-mn-cont")[0];
        b && (a.Ja = s_rpa(b))
    }
    ;
    s_Kl.prototype.Ka = function(a, b, c) {
        s_Eb() && !s_wb() && c.target && "A" == c.target.nodeName && s_q(this.Da, "overflow-scrolling", "auto");
        a = this.$ ? s_il(this.Da) : Math.abs(this.Ia.$.x);
        (b = s_Tf("session", "tnv")) && b.set("hdtb-pos", a)
    }
    ;
    var s_tpa = function(a) {
        s_K(this, a, 0, 10, null , null )
    }
    ;
    s_f(s_tpa, s_J);
    s_C("sy80");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_upa = function(a) {
        s_Kl.call(this, a.$.$(s_tpa, "top_nav"))
    }
    ;
    s_f(s_upa, s_Kl);
    s_D("tnv");
    var s_vpa = function(a) {
        this.$ = a
    }
    ;
    s_T(function(a) {
        s_R(a, "t-js5htJpaNsk", s_upa, s_vpa, null , function(a, c) {
            s_upa.call(a, c)
        })
    });
    s_C("tnv");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy98");
    var s_Nl = function(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    }
    ;
    s_Nl.prototype.clone = function() {
        return new s_Nl(this.start,this.end)
    }
    ;
    var s_ypa = function(a) {
        return a.end - a.start
    }
    ;
    s_C("sy98");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy402");
    var s_IF = function() {
        return s_da("google.tufte.fcs") ? !1 : !!document.createElementNS && !!s_Pmb().createSVGRect
    }
      , s_Pmb = function(a) {
        a = s_JF("svg", a);
        a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        return a
    }
      , s_KF = function(a, b) {
        for (var c in b)
            a.setAttribute(c, b[c])
    }
      , s_JF = function(a, b) {
        var c = document.createElementNS("http://www.w3.org/2000/svg", a);
        null != b && s_KF(c, b);
        return c
    }
      , s_Qmb = function(a) {
        return (a.getAttribute("class") || "").match(/\S+/g) || []
    }
      , s_LF = function(a, b) {
        for (var c = s_Qmb(a), d = 0; d < c.length; d++)
            if (c[d] == b)
                return;
        c.push(b);
        a.setAttribute("class", c.join(" "))
    }
      , s_Rmb = function(a, b) {
        for (var c = s_Qmb(a), d = 0; d < c.length; d++)
            if (c[d] == b) {
                c.splice(d, 1);
                a.setAttribute("class", c.join(" "));
                break
            }
    }
    ;
    s_C("sy402");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy403");
    s_C("sy403");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_MF = function(a) {
        var b = parseInt(a.slice(0, 4), 10)
          , c = 7 <= a.length ? parseInt(a.slice(5, 7), 10) - 1 : 0
          , d = 10 <= a.length ? parseInt(a.slice(8, 10), 10) : 1
          , e = 13 <= a.length ? parseInt(a.slice(11, 13), 10) : 0
          , f = 16 <= a.length ? parseInt(a.slice(14, 16), 10) : 0;
        a = 19 <= a.length ? parseInt(a.slice(17, 19), 10) : 0;
        return new Date(Date.UTC(b, c, d, e, f, a))
    }
      , s_NF = function(a) {
        a = a.getElementsByTagName("svg");
        return 1 == a.length ? a[0] : null
    }
    ;
    s_D("sy404");
    s_C("sy404");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy154");
    var s_qva = function() {}
      , s_fo = function(a) {
        if ("number" == typeof a) {
            var b = new s_qva;
            b.ma = a;
            var c;
            c = a;
            if (0 == c)
                c = "Etc/GMT";
            else {
                var d = ["Etc/GMT", 0 > c ? "-" : "+"];
                c = Math.abs(c);
                d.push(Math.floor(c / 60) % 100);
                c %= 60;
                0 != c && d.push(":", s_bg(c, 2));
                c = d.join("")
            }
            b.qa = c;
            c = a;
            0 == c ? c = "UTC" : (d = ["UTC", 0 > c ? "+" : "-"],
            c = Math.abs(c),
            d.push(Math.floor(c / 60) % 100),
            c %= 60,
            0 != c && d.push(":", c),
            c = d.join(""));
            a = s_rva(a);
            b.Ea = [c, c];
            b.$ = {
                qTa: a,
                ala: a
            };
            b.ka = [];
            return b
        }
        b = new s_qva;
        b.qa = a.id;
        b.ma = -a.std_offset;
        b.Ea = a.names;
        b.$ = a.names_ext;
        b.ka = a.transitions;
        return b
    }
      , s_rva = function(a) {
        var b = ["GMT"];
        b.push(0 >= a ? "+" : "-");
        a = Math.abs(a);
        b.push(s_bg(Math.floor(a / 60) % 100, 2), ":", s_bg(a % 60, 2));
        return b.join("")
    }
      , s_go = function(a, b) {
        for (var c = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5, d = 0; d < a.ka.length && c >= a.ka[d]; )
            d += 2;
        return 0 == d ? 0 : a.ka[d - 1]
    }
    ;
    var s_ho = function(a, b) {
        this.ka = [];
        this.$ = b || s_cg;
        "number" == typeof a ? s_sva(this, a) : s_tva(this, a)
    }
      , s_uva = [/^\'(?:[^\']|\'\')*(\'|$)/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvVwzZ]+/]
      , s_io = function(a) {
        return a.getHours ? a.getHours() : 0
    }
      , s_tva = function(a, b) {
        for (s_vva && (b = b.replace(/\u200f/g, "")); b; ) {
            for (var c = b, d = 0; d < s_uva.length; ++d) {
                var e = b.match(s_uva[d]);
                if (e) {
                    var f = e[0];
                    b = b.substring(f.length);
                    0 == d && ("''" == f ? f = "'" : (f = f.substring(1, "'" == e[1] ? f.length - 1 : f.length),
                    f = f.replace(/\'\'/g, "'")));
                    a.ka.push({
                        text: f,
                        type: d
                    });
                    break
                }
            }
            if (c === b)
                throw Error("S`" + b);
        }
    }
    ;
    s_ho.prototype.format = function(a, b) {
        if (!a)
            throw Error("ua");
        var c = b ? 6E4 * (a.getTimezoneOffset() - (b.ma - s_go(b, a))) : 0
          , d = c ? new Date(a.getTime() + c) : a
          , e = d;
        b && d.getTimezoneOffset() != a.getTimezoneOffset() && (e = 6E4 * (d.getTimezoneOffset() - a.getTimezoneOffset()),
        d = new Date(d.getTime() + e),
        c += 0 < c ? -864E5 : 864E5,
        e = new Date(a.getTime() + c));
        for (var c = [], f = 0; f < this.ka.length; ++f) {
            var g = this.ka[f].text;
            1 == this.ka[f].type ? c.push(s_wva(this, g, a, d, e, b)) : c.push(g)
        }
        return c.join("")
    }
    ;
    var s_sva = function(a, b) {
        var c;
        if (4 > b)
            c = a.$.mq[b];
        else if (8 > b)
            c = a.$.vT[b - 4];
        else if (12 > b)
            c = a.$.bG[b - 8],
            c = c.replace("{1}", a.$.mq[b - 8]),
            c = c.replace("{0}", a.$.vT[b - 8]);
        else {
            s_sva(a, 10);
            return
        }
        s_tva(a, c)
    }
      , s_jo = function(a, b) {
        var c;
        c = String(b);
        var d = a.$ || s_cg;
        if (void 0 !== d.qA) {
            for (var e = [], f = 0; f < c.length; f++) {
                var g = c.charCodeAt(f);
                e.push(48 <= g && 57 >= g ? String.fromCharCode(d.qA + g - 48) : c.charAt(f))
            }
            c = e.join("")
        }
        return c
    }
      , s_vva = !1
      , s_ko = function(a) {
        if (!(a.getHours && a.getSeconds && a.getMinutes))
            throw Error("va");
    }
      , s_wva = function(a, b, c, d, e, f) {
        var g = b.length;
        switch (b.charAt(0)) {
        case "G":
            return c = 0 < d.getFullYear() ? 1 : 0,
            4 <= g ? a.$.kQ[c] : a.$.dG[c];
        case "y":
            return c = d.getFullYear(),
            0 > c && (c = -c),
            2 == g && (c %= 100),
            s_jo(a, s_bg(c, g));
        case "M":
            a: switch (c = d.getMonth(),
            g) {
            case 5:
                g = a.$.aR[c];
                break a;
            case 4:
                g = a.$.hA[c];
                break a;
            case 3:
                g = a.$.pG[c];
                break a;
            default:
                g = s_jo(a, s_bg(c + 1, g))
            }
            return g;
        case "k":
            return s_ko(e),
            c = s_io(e) || 24,
            s_jo(a, s_bg(c, g));
        case "S":
            return c = e.getTime() % 1E3 / 1E3,
            s_jo(a, c.toFixed(Math.min(3, g)).substr(2) + (3 < g ? s_bg(0, g - 3) : ""));
        case "E":
            return c = d.getDay(),
            4 <= g ? a.$.yG[c] : a.$.rG[c];
        case "a":
            return s_ko(e),
            g = s_io(e),
            a.$.XF[12 <= g && 24 > g ? 1 : 0];
        case "h":
            return s_ko(e),
            c = s_io(e) % 12 || 12,
            s_jo(a, s_bg(c, g));
        case "K":
            return s_ko(e),
            c = s_io(e) % 12,
            s_jo(a, s_bg(c, g));
        case "H":
            return s_ko(e),
            c = s_io(e),
            s_jo(a, s_bg(c, g));
        case "c":
            a: switch (c = d.getDay(),
            g) {
            case 5:
                g = a.$.kA[c];
                break a;
            case 4:
                g = a.$.rR[c];
                break a;
            case 3:
                g = a.$.tG[c];
                break a;
            default:
                g = s_jo(a, s_bg(c, 1))
            }
            return g;
        case "L":
            a: switch (c = d.getMonth(),
            g) {
            case 5:
                g = a.$.qR[c];
                break a;
            case 4:
                g = a.$.Ds[c];
                break a;
            case 3:
                g = a.$.sG[c];
                break a;
            default:
                g = s_jo(a, s_bg(c + 1, g))
            }
            return g;
        case "Q":
            return c = Math.floor(d.getMonth() / 3),
            4 > g ? a.$.qG[c] : a.$.oG[c];
        case "d":
            return s_jo(a, s_bg(d.getDate(), g));
        case "m":
            return s_ko(e),
            s_jo(a, s_bg(e.getMinutes(), g));
        case "s":
            return s_ko(e),
            s_jo(a, s_bg(e.getSeconds(), g));
        case "v":
            return g = f || s_fo(c.getTimezoneOffset()),
            g.qa;
        case "V":
            return a = f || s_fo(c.getTimezoneOffset()),
            2 >= g ? a.qa : 0 < s_go(a, c) ? s_a(a.$.RDa) ? a.$.RDa : a.$.DST_GENERIC_LOCATION : s_a(a.$.ala) ? a.$.ala : a.$.STD_GENERIC_LOCATION;
        case "w":
            return c = e.getFullYear(),
            b = e.getMonth(),
            d = e.getDate(),
            e = a.$.fA,
            c = new Date(c,b,d),
            e = s_a(e) ? e : 3,
            b = a.$.Kv || 0,
            d = ((c.getDay() + 6) % 7 - b + 7) % 7,
            c = c.valueOf() + 864E5 * ((e - b + 7) % 7 - d),
            e = (new Date((new Date(c)).getFullYear(),0,1)).valueOf(),
            s_jo(a, s_bg(Math.floor(Math.round((c - e) / 864E5) / 7) + 1, g));
        case "z":
            return a = f || s_fo(c.getTimezoneOffset()),
            4 > g ? a.Ea[0 < s_go(a, c) ? 2 : 0] : a.Ea[0 < s_go(a, c) ? 3 : 1];
        case "Z":
            return e = f || s_fo(c.getTimezoneOffset()),
            4 > g ? (g = -(e.ma - s_go(e, c)),
            a = [0 > g ? "-" : "+"],
            g = Math.abs(g),
            a.push(s_bg(Math.floor(g / 60) % 100, 2), s_bg(g % 60, 2)),
            g = a.join("")) : g = s_jo(a, s_rva(e.ma - s_go(e, c))),
            g;
        default:
            return ""
        }
    }
    ;
    s_C("sy154");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy155");
    var s_lo = {
        pA: "y",
        yR: "y G",
        DG: "MMM y",
        FG: "MMMM y",
        jG: "MMM d",
        WQ: "MMMM dd",
        YQ: "M/d",
        XQ: "MMMM d",
        kG: "MMM d, y",
        oA: "EEE, MMM d",
        vR: "EEE, MMM d, y",
        dQ: "d"
    }
      , s_lo = {
        pA: "y\u5e74",
        yR: "Gy\u5e74",
        DG: "y\u5e74M\u6708",
        FG: "y\u5e74M\u6708",
        jG: "M\u6708d\u65e5",
        WQ: "M\u6708dd\u65e5",
        YQ: "M/d",
        XQ: "M\u6708d\u65e5",
        kG: "y\u5e74M\u6708d\u65e5",
        oA: "M\u6708d\u65e5EEE",
        vR: "y\u5e74M\u6708d\u65e5EEE",
        dQ: "d\u65e5"
    };
    s_C("sy155");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy164");
    var s_ewa = {
        $P: {
            1E3: {
                other: "0K"
            },
            1E4: {
                other: "00K"
            },
            1E5: {
                other: "000K"
            },
            1E6: {
                other: "0M"
            },
            1E7: {
                other: "00M"
            },
            1E8: {
                other: "000M"
            },
            1E9: {
                other: "0B"
            },
            1E10: {
                other: "00B"
            },
            1E11: {
                other: "000B"
            },
            1E12: {
                other: "0T"
            },
            1E13: {
                other: "00T"
            },
            1E14: {
                other: "000T"
            }
        },
        ZP: {
            1E3: {
                other: "0 thousand"
            },
            1E4: {
                other: "00 thousand"
            },
            1E5: {
                other: "000 thousand"
            },
            1E6: {
                other: "0 million"
            },
            1E7: {
                other: "00 million"
            },
            1E8: {
                other: "000 million"
            },
            1E9: {
                other: "0 billion"
            },
            1E10: {
                other: "00 billion"
            },
            1E11: {
                other: "000 billion"
            },
            1E12: {
                other: "0 trillion"
            },
            1E13: {
                other: "00 trillion"
            },
            1E14: {
                other: "000 trillion"
            }
        }
    }
      , s_ewa = {
        $P: {
            1E3: {
                other: "0"
            },
            1E4: {
                other: "0\u4e07"
            },
            1E5: {
                other: "00\u4e07"
            },
            1E6: {
                other: "000\u4e07"
            },
            1E7: {
                other: "0000\u4e07"
            },
            1E8: {
                other: "0\u4ebf"
            },
            1E9: {
                other: "00\u4ebf"
            },
            1E10: {
                other: "000\u4ebf"
            },
            1E11: {
                other: "0000\u4ebf"
            },
            1E12: {
                other: "0\u5146"
            },
            1E13: {
                other: "00\u5146"
            },
            1E14: {
                other: "000\u5146"
            }
        },
        ZP: {
            1E3: {
                other: "0"
            },
            1E4: {
                other: "0\u4e07"
            },
            1E5: {
                other: "00\u4e07"
            },
            1E6: {
                other: "000\u4e07"
            },
            1E7: {
                other: "0000\u4e07"
            },
            1E8: {
                other: "0\u4ebf"
            },
            1E9: {
                other: "00\u4ebf"
            },
            1E10: {
                other: "000\u4ebf"
            },
            1E11: {
                other: "0000\u4ebf"
            },
            1E12: {
                other: "0\u5146"
            },
            1E13: {
                other: "00\u5146"
            },
            1E14: {
                other: "000\u5146"
            }
        }
    };
    var s_Mo = {
        AED: [2, "dh", "\u062f.\u0625.", "DH"],
        ALL: [0, "Lek", "Lek"],
        AUD: [2, "$", "AU$"],
        BDT: [2, "\u09f3", "Tk"],
        BGN: [2, "lev", "lev"],
        BRL: [2, "R$", "R$"],
        CAD: [2, "$", "C$"],
        CDF: [2, "FrCD", "CDF"],
        CHF: [2, "CHF", "CHF"],
        CLP: [0, "$", "CL$"],
        CNY: [2, "\u00a5", "RMB\u00a5"],
        COP: [32, "$", "COL$"],
        CRC: [0, "\u20a1", "CR\u20a1"],
        CZK: [50, "K\u010d", "K\u010d"],
        DKK: [50, "kr.", "kr."],
        DOP: [2, "RD$", "RD$"],
        EGP: [2, "\u00a3", "LE"],
        ETB: [2, "Birr", "Birr"],
        EUR: [2, "\u20ac", "\u20ac"],
        GBP: [2, "\u00a3", "GB\u00a3"],
        HKD: [2, "$", "HK$"],
        HRK: [2, "kn", "kn"],
        HUF: [34, "Ft", "Ft"],
        IDR: [0, "Rp", "Rp"],
        ILS: [34, "\u20aa", "IL\u20aa"],
        INR: [2, "\u20b9", "Rs"],
        IRR: [0, "Rial", "IRR"],
        ISK: [0, "kr", "kr"],
        JMD: [2, "$", "JA$"],
        JPY: [0, "\u00a5", "JP\u00a5"],
        KRW: [0, "\u20a9", "KR\u20a9"],
        LKR: [2, "Rs", "SLRs"],
        LTL: [2, "Lt", "Lt"],
        MNT: [0, "\u20ae", "MN\u20ae"],
        MVR: [2, "Rf", "MVR"],
        MXN: [2, "$", "Mex$"],
        MYR: [2, "RM", "RM"],
        NOK: [50, "kr", "NOkr"],
        PAB: [2, "B/.", "B/."],
        PEN: [2, "S/.", "S/."],
        PHP: [2, "\u20b1", "PHP"],
        PKR: [0, "Rs", "PKRs."],
        PLN: [50, "z\u0142", "z\u0142"],
        RON: [2, "RON", "RON"],
        RSD: [0, "din", "RSD"],
        RUB: [50, "\u20bd", "RUB"],
        SAR: [2, "Rial", "Rial"],
        SEK: [50, "kr", "kr"],
        SGD: [2, "$", "S$"],
        THB: [2, "\u0e3f", "THB"],
        TRY: [2, "TL", "YTL"],
        TWD: [2, "NT$", "NT$"],
        TZS: [0, "TSh", "TSh"],
        UAH: [2, "\u0433\u0440\u043d.", "UAH"],
        USD: [2, "$", "US$"],
        UYU: [2, "$", "$U"],
        VND: [48, "\u20ab", "VN\u20ab"],
        YER: [0, "Rial", "Rial"],
        ZAR: [2, "R", "ZAR"]
    };
    var s_No = {
        DECIMAL_SEP: ".",
        GROUP_SEP: ",",
        hR: "%",
        HG: "0",
        kR: "+",
        VQ: "-",
        mQ: "E",
        jR: "\u2030",
        LQ: "\u221e",
        $Q: "NaN",
        DECIMAL_PATTERN: "#,##0.###",
        mR: "#E0",
        iR: "#,##0%",
        aQ: "\u00a4#,##0.00",
        eQ: "USD"
    }
      , s_No = {
        DECIMAL_SEP: ".",
        GROUP_SEP: ",",
        hR: "%",
        HG: "0",
        kR: "+",
        VQ: "-",
        mQ: "E",
        jR: "\u2030",
        LQ: "\u221e",
        $Q: "NaN",
        DECIMAL_PATTERN: "#,##0.###",
        mR: "#E0",
        iR: "#,##0%",
        aQ: "\u00a4#,##0.00",
        eQ: "CNY"
    };
    var s_Po = function(a, b, c) {
        this.Ma = b || s_No.eQ;
        this.Lb = c || 0;
        this.Db = 40;
        this.ka = 1;
        this.Ga = 0;
        this.Wa = 3;
        this.rb = this.ma = 0;
        this.eF = this.nb = !1;
        this.Za = this.Da = "";
        this.qa = "-";
        this.Ia = "";
        this.$ = 1;
        this.Ca = !1;
        this.Ea = [];
        this.Xa = this.Ka = !1;
        this.Ja = 0;
        this.zq = null ;
        if ("number" == typeof a)
            switch (a) {
            case 1:
                s_Oo(this, s_No.DECIMAL_PATTERN);
                break;
            case 2:
                s_Oo(this, s_No.mR);
                break;
            case 3:
                s_Oo(this, s_No.iR);
                break;
            case 4:
                a = s_No.aQ;
                b = ["0"];
                c = s_Mo[this.Ma][0] & 7;
                if (0 < c) {
                    b.push(".");
                    for (var d = 0; d < c; d++)
                        b.push("0")
                }
                a = a.replace(/0.00/g, b.join(""));
                s_Oo(this, a);
                break;
            case 5:
                s_fwa(this, 1);
                break;
            case 6:
                s_fwa(this, 2);
                break;
            default:
                throw Error("ka");
            }
        else
            s_Oo(this, a)
    }
      , s_Qo = function(a, b) {
        if (0 < a.Ga && 0 < b)
            throw Error("ja");
        a.ma = b;
        return a
    }
      , s_Ro = function(a, b) {
        a.Wa = b;
        return a
    }
      , s_gwa = function(a, b) {
        if (0 < a.ma && 0 <= b)
            throw Error("ja");
        a.Ga = b
    }
      , s_Oo = function(a, b) {
        b.replace(/ /g, "\u00a0");
        var c = [0];
        a.Da = s_hwa(a, b, c);
        for (var d = c[0], e = -1, f = 0, g = 0, k = 0, l = -1, m = b.length, n = !0; c[0] < m && n; c[0]++)
            switch (b.charAt(c[0])) {
            case "#":
                0 < g ? k++ : f++;
                0 <= l && 0 > e && l++;
                break;
            case "0":
                if (0 < k)
                    throw Error("na`" + b);
                g++;
                0 <= l && 0 > e && l++;
                break;
            case ",":
                0 < l && a.Ea.push(l);
                l = 0;
                break;
            case ".":
                if (0 <= e)
                    throw Error("oa`" + b);
                e = f + g + k;
                break;
            case "E":
                if (a.Xa)
                    throw Error("pa`" + b);
                a.Xa = !0;
                a.rb = 0;
                c[0] + 1 < m && "+" == b.charAt(c[0] + 1) && (c[0]++,
                a.nb = !0);
                for (; c[0] + 1 < m && "0" == b.charAt(c[0] + 1); )
                    c[0]++,
                    a.rb++;
                if (1 > f + g || 1 > a.rb)
                    throw Error("qa`" + b);
                n = !1;
                break;
            default:
                c[0]--,
                n = !1
            }
        0 == g && 0 < f && 0 <= e && (g = e,
        0 == g && g++,
        k = f - g,
        f = g - 1,
        g = 1);
        if (0 > e && 0 < k || 0 <= e && (e < f || e > f + g) || 0 == l)
            throw Error("ra`" + b);
        k = f + g + k;
        a.Wa = 0 <= e ? k - e : 0;
        0 <= e && (a.ma = f + g - e,
        0 > a.ma && (a.ma = 0));
        a.ka = (0 <= e ? e : k) - f;
        a.Xa && (a.Db = f + a.ka,
        0 == a.Wa && 0 == a.ka && (a.ka = 1));
        a.Ea.push(Math.max(0, l));
        a.Ka = 0 == e || e == k;
        d = c[0] - d;
        a.Za = s_hwa(a, b, c);
        c[0] < b.length && ";" == b.charAt(c[0]) ? (c[0]++,
        1 != a.$ && (a.Ca = !0),
        a.qa = s_hwa(a, b, c),
        c[0] += d,
        a.Ia = s_hwa(a, b, c)) : (a.qa = a.Da + a.qa,
        a.Ia += a.Za)
    }
      , s_fwa = function(a, b) {
        a.Ja = b;
        s_Oo(a, s_No.DECIMAL_PATTERN);
        s_Qo(a, 0);
        s_Ro(a, 2);
        s_gwa(a, 2)
    }
    ;
    s_Po.prototype.format = function(a) {
        if (isNaN(a))
            return s_No.$Q;
        var b = [], c;
        c = null === this.zq ? a : this.zq;
        if (0 == this.Ja)
            c = s_So;
        else {
            c = Math.abs(c);
            var d = s_iwa(this, 1 >= c ? 0 : s_jwa(c)).pB;
            c = s_iwa(this, d + s_jwa(s_kwa(this, c / Math.pow(10, d)).hL))
        }
        a /= Math.pow(10, c.pB);
        b.push(c.prefix);
        d = 0 > a || 0 == a && 0 > 1 / a;
        b.push(d ? this.qa : this.Da);
        if (isFinite(a))
            if (a = a * (d ? -1 : 1) * this.$,
            this.Xa) {
                var e = a;
                if (0 == e)
                    s_lwa(this, e, this.ka, b),
                    s_mwa(this, 0, b);
                else {
                    a = Math.floor(Math.log(e) / Math.log(10) + 2E-15);
                    var f = Math.pow(10, a);
                    isFinite(f) && 0 !== f ? e /= f : (f = Math.pow(10, Math.floor(a / 2)),
                    e = e / f / f,
                    1 == a % 2 && (e = 0 < a ? e / 10 : 10 * e));
                    f = this.ka;
                    if (1 < this.Db && this.Db > this.ka) {
                        for (; 0 != a % this.Db; )
                            e *= 10,
                            a--;
                        f = 1
                    } else
                        1 > this.ka ? (a++,
                        e /= 10) : (a -= this.ka - 1,
                        e *= Math.pow(10, this.ka - 1));
                    s_lwa(this, e, f, b);
                    s_mwa(this, a, b)
                }
            } else
                s_lwa(this, a, this.ka, b);
        else
            b.push(s_No.LQ);
        b.push(d ? this.Ia : this.Za);
        b.push(c.suffix);
        return b.join("")
    }
    ;
    var s_kwa = function(a, b) {
        var c = Math.pow(10, a.Wa), d;
        if (0 >= a.Ga)
            d = Math.round(b * c);
        else {
            d = b * c;
            var e = a.Wa;
            if (d) {
                var f = a.Ga - s_jwa(d) - 1;
                f < -e ? (e = Math.pow(10, e),
                d = Math.round(d / e) * e) : (e = Math.pow(10, f),
                d = Math.round(d * e) / e)
            }
            d = Math.round(d)
        }
        e = d;
        isFinite(e) ? (d = Math.floor(e / c),
        c = Math.floor(e - d * c)) : (d = b,
        c = 0);
        return {
            hL: d,
            WU: c
        }
    }
      , s_lwa = function(a, b, c, d) {
        if (a.ma > a.Wa)
            throw Error("la");
        d || (d = []);
        b = s_kwa(a, b);
        var e = Math.pow(10, a.Wa)
          , f = b.hL
          , g = b.WU
          , k = 0 == f ? 0 : s_jwa(f) + 1
          , l = 0 < a.ma || 0 < g || a.eF && k < a.Ga;
        b = a.ma;
        l && (b = a.eF && 0 < a.Ga ? a.Ga - k : a.ma);
        for (var m = "", k = f; 1E20 < k; )
            m = "0" + m,
            k = Math.round(k / 10);
        var m = k + m
          , n = s_No.DECIMAL_SEP
          , k = s_No.HG.charCodeAt(0)
          , ba = m.length
          , t = 0;
        if (0 < f || 0 < c) {
            for (f = ba; f < c; f++)
                d.push(String.fromCharCode(k));
            if (2 <= a.Ea.length)
                for (c = 1; c < a.Ea.length; c++)
                    t += a.Ea[c];
            c = ba - t;
            if (0 < c)
                for (var f = a.Ea, t = ba = 0, w, B = s_No.GROUP_SEP, G = m.length, I = 0; I < G; I++) {
                    if (d.push(String.fromCharCode(k + 1 * Number(m.charAt(I)))),
                    1 < G - I)
                        if (w = f[t],
                        I < c) {
                            var N = c - I;
                            (1 === w || 0 < w && 1 === N % w) && d.push(B)
                        } else
                            t < f.length && (I === c ? t += 1 : w === I - c - ba + 1 && (d.push(B),
                            ba += w,
                            t += 1))
                }
            else {
                c = m;
                m = a.Ea;
                f = s_No.GROUP_SEP;
                w = c.length;
                B = [];
                for (ba = m.length - 1; 0 <= ba && 0 < w; ba--) {
                    t = m[ba];
                    for (G = 0; G < t && 0 <= w - G - 1; G++)
                        B.push(String.fromCharCode(k + 1 * Number(c.charAt(w - G - 1))));
                    w -= t;
                    0 < w && B.push(f)
                }
                d.push.apply(d, B.reverse())
            }
        } else
            l || d.push(String.fromCharCode(k));
        (a.Ka || l) && d.push(n);
        a = "" + (g + e);
        for (e = a.length; "0" == a.charAt(e - 1) && e > b + 1; )
            e--;
        for (f = 1; f < e; f++)
            d.push(String.fromCharCode(k + 1 * Number(a.charAt(f))))
    }
      , s_mwa = function(a, b, c) {
        c.push(s_No.mQ);
        0 > b ? (b = -b,
        c.push(s_No.VQ)) : a.nb && c.push(s_No.kR);
        b = "" + b;
        for (var d = s_No.HG, e = b.length; e < a.rb; e++)
            c.push(d);
        c.push(b)
    }
      , s_hwa = function(a, b, c) {
        for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
            var g = b.charAt(c[0]);
            if ("'" == g)
                c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++,
                d += "'") : e = !e;
            else if (e)
                d += g;
            else
                switch (g) {
                case "#":
                case "0":
                case ",":
                case ".":
                case ";":
                    return d;
                case "\u00a4":
                    if (c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1))
                        c[0]++,
                        d += a.Ma;
                    else
                        switch (a.Lb) {
                        case 0:
                            d += s_Mo[a.Ma][1];
                            break;
                        case 2:
                            var g = a.Ma
                              , k = s_Mo[g]
                              , d = d + (g == k[1] ? g : g + " " + k[1]);
                            break;
                        case 1:
                            d += s_Mo[a.Ma][2]
                        }
                    break;
                case "%":
                    if (!a.Ca && 1 != a.$)
                        throw Error("ma");
                    if (a.Ca && 100 != a.$)
                        throw Error("Ad");
                    a.$ = 100;
                    a.Ca = !1;
                    d += s_No.hR;
                    break;
                case "\u2030":
                    if (!a.Ca && 1 != a.$)
                        throw Error("ma");
                    if (a.Ca && 1E3 != a.$)
                        throw Error("Ad");
                    a.$ = 1E3;
                    a.Ca = !1;
                    d += s_No.jR;
                    break;
                default:
                    d += g
                }
        }
        return d
    }
      , s_So = {
        prefix: "",
        suffix: "",
        pB: 0
    }
      , s_iwa = function(a, b) {
        var c = 1 == a.Ja ? s_ewa.$P : s_ewa.ZP;
        null == c && (c = s_ewa.$P);
        if (3 > b)
            return s_So;
        b = Math.min(14, b);
        for (var d = c[Math.pow(10, b)], e = b - 1; !d && 3 <= e; )
            d = c[Math.pow(10, e)],
            e--;
        if (!d)
            return s_So;
        c = d.other;
        return c && "0" != c ? (c = /([^0]*)(0+)(.*)/.exec(c)) ? {
            prefix: c[1],
            suffix: c[3],
            pB: e + 1 - (c[2].length - 1)
        } : s_So : s_So
    }
      , s_jwa = function(a) {
        for (var b = 0; 1 <= (a /= 10); )
            b++;
        return b
    }
    ;
    s_C("sy164");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy181");
    var s_cDa = /#(.)(.)(.)/
      , s_eDa = function(a) {
        if (!s_dDa.test(a))
            throw Error("I`" + a);
        4 == a.length && (a = a.replace(s_cDa, "#$1$1$2$2$3$3"));
        return a.toLowerCase()
    }
      , s_3q = function(a) {
        a = s_eDa(a);
        return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
    }
      , s_gDa = function(a, b, c) {
        a = Number(a);
        b = Number(b);
        c = Number(c);
        if (a != (a & 255) || b != (b & 255) || c != (c & 255))
            throw Error("J`" + a + "`" + b + "`" + c);
        a = s_fDa(a.toString(16));
        b = s_fDa(b.toString(16));
        c = s_fDa(c.toString(16));
        return "#" + a + b + c
    }
      , s_4q = function(a) {
        return s_gDa(a[0], a[1], a[2])
    }
      , s_dDa = /^#(?:[0-9a-f]{3}){1,2}$/i
      , s_fDa = function(a) {
        return 1 == a.length ? "0" + a : a
    }
      , s_jDa = function(a, b) {
        for (var c = [], d = 0; d < b.length; d++)
            c.push({
                color: b[d],
                V4: Math.abs(s_hDa(b[d]) - s_hDa(a)) + s_iDa(b[d], a)
            });
        c.sort(function(a, b) {
            return b.V4 - a.V4
        });
        return c[0].color
    }
      , s_hDa = function(a) {
        return Math.round((299 * a[0] + 587 * a[1] + 114 * a[2]) / 1E3)
    }
      , s_iDa = function(a, b) {
        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2])
    }
    ;
    s_C("sy181");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Smb = function(a) {
        return s_sba.apply(null , arguments) / arguments.length
    }
      , s_Tmb = function(a) {
        var b = arguments.length;
        if (2 > b)
            return 0;
        var c = s_Smb.apply(null , arguments);
        return s_sba.apply(null , s_Na(arguments, function(a) {
            return Math.pow(a - c, 2)
        })) / (b - 1)
    }
      , s_Umb = function(a, b, c, d) {
        var e = function(b) {
            for (; b && b != a; )
                b = b.parentNode;
            return b == a
        }
        ;
        d.listen(a, "mouseover", function(a) {
            e(a.relatedTarget) || b(a)
        });
        d.listen(a, "mouseout", function(a) {
            e(a.relatedTarget) || c(a)
        })
    }
      , s_Vmb = function(a) {
        return Math.sqrt(s_Tmb.apply(null , arguments))
    }
    ;
    s_D("sy405");
    var s_Xmb = function(a) {
        this.$ = s_Wmb(a)
    }
    ;
    s_Xmb.prototype.getItem = function(a) {
        return {
            x: this.$[2 * a],
            y: this.$[2 * a + 1]
        }
    }
    ;
    var s_Wmb = function(a) {
        return a.getAttribute("d").match(/([+-]?\d+\.?\d*)/g).map(function(a) {
            return parseFloat(a)
        })
    }
    ;
    var s__mb = function(a) {
        this.ka = new s_Xmb(a[0]);
        this.$ = [];
        if (1 == a.length) {
            a = this.ka;
            if (s_IF()) {
                var b;
                b = a.$.length / 2;
                var c = Math.max(15, Math.round(a.$.length / 2 / 7))
                  , d = [];
                if (b <= 1.5 * c)
                    b = [0, b - 1];
                else {
                    for (var e = 0; e < b; e += c)
                        d.push(e);
                    d.push(b - 1);
                    b = d
                }
                c = b;
                if (2 == c.length)
                    c = [c[0], c[1]];
                else {
                    for (var d = c[1] - c[0], e = [0], f = Math.floor(d / 2), g = c[c.length - 1]; f < g; )
                        e.push(f),
                        f += d;
                    e.push(c[c.length - 1]);
                    c = e
                }
                b = s_Ymb(b, a);
                c = s_Ymb(c, a);
                d = [];
                for (e = 0; e < b.length; e++)
                    -1 < c.indexOf(b[e]) && d.push(b[e]);
                a = d.concat(s_Zmb(a))
            } else
                a = [];
            this.$ = a
        }
    }
      , s_Zmb = function(a) {
        for (var b = a.getItem(0).y, c = 0, d = a.getItem(0).y, e = 0, f = 0; f < a.$.length / 2; f++) {
            var g = a.getItem(f);
            b >= g.y ? (b = g.y,
            c = f) : d <= g.y && (d = g.y,
            e = f)
        }
        return [e, c]
    }
      , s_Ymb = function(a, b) {
        for (var c = [], d = 0; d < a.length - 1; d++) {
            var e, f = new s_Nl(a[d],a[d + 1]), g = b, k = [], l = 0;
            e = g.getItem(f.start).y;
            for (var m = f.start, n = g.getItem(f.start).y, ba = f.start, t = f.start; t <= f.end; t++) {
                var w = g.getItem(t).y;
                k.push(w);
                l += w;
                e >= w ? (e = w,
                m = t) : n <= w && (n = w,
                ba = t)
            }
            f = l / k.length;
            k = s_Vmb.apply(null , k);
            g = [];
            Math.abs(n - f) > 1.4 * k && g.push(ba);
            Math.abs(e - f) > 1.4 * k && g.push(m);
            e = g;
            for (m = 0; m < e.length; m++)
                c.push(e[m])
        }
        return c
    }
    ;
    var s_0mb = function(a, b) {
        for (var c = a[0]; c && "svg" != c.tagName; )
            c = c.parentNode;
        this.Yt = c;
        this.aE = a;
        this.nK = b;
        this.M7 = new s__mb(this.aE)
    }
      , s_OF = function(a, b, c) {
        var d = c || 0;
        c = new s_Xmb(a.aE[d]);
        a = a.nK.v[d];
        for (var d = -1, e = 0; e <= b; e++)
            null === a[e] || d++;
        b = d;
        -1 == b && (b = 0);
        b = c.getItem(b);
        return new s_$b(b.x,b.y)
    }
    ;
    var s_QF = function(a, b, c) {
        s_Zi.call(this);
        this.$ = a;
        this.Ma = b;
        this.Da = c;
        this.Ia = s_Qk;
        this.Ea = this.qa = this.ma = null ;
        this.wi = s_1mb(this);
        this.Ja = this.Ca = null ;
        s_Qk && (this.listen(this.$, "touchstart", s_c(this.iG, this)),
        this.listen(this.$, "touchmove", s_c(this.OW, this)),
        this.listen(this.$, "touchend", s_c(this.Db, this)));
        s_Umb(this.$, s_c(this.Za, this), s_c(function() {
            !this.Ia && null === this.Ca && s_PF(this, null )
        }, this), this);
        this.listen(this.$, "mousemove", s_c(this.Za, this));
        this.listen(this.$, "mousedown", s_c(this.rb, this))
    }
    ;
    s_f(s_QF, s_Zi);
    var s_1mb = function(a) {
        var b = s_NF(a.$);
        if (null !== b) {
            for (var c = [], d = 0; d < a.Ma.n.length; d++)
                c.push(s_l("line-z" + d, b));
            return new s_0mb(c,a.Ma)
        }
    }
    ;
    s_QF.prototype.iG = function(a) {
        if (a = a.$)
            1 == a.touches.length ? (this.Ea = null ,
            this.qa = a,
            this.Xa = {
                x: a.touches[0].clientX,
                y: a.touches[0].clientY
            }) : this.Ea || (s_2mb(this, a),
            this.qa = null )
    }
    ;
    s_QF.prototype.OW = function(a) {
        var b = a.$;
        if (b && !(this.Ja && 500 > b.timeStamp - this.Ja)) {
            if (null === this.Ea) {
                var c;
                c = this.Xa;
                if (1 == b.touches.length && null != c) {
                    var d = b.touches[0];
                    c = Math.abs(c.y - d.clientY) > Math.abs(c.x - d.clientX)
                } else
                    c = !1;
                this.Ea = c
            }
            this.Ea || (a.preventDefault(),
            s_2mb(this, b));
            this.qa = null
        }
    }
    ;
    s_QF.prototype.Db = function(a) {
        a && (a = a.$,
        1 == a.touches.length ? this.Ja = a.timeStamp : this.Ja = null );
        null != this.qa && (s_2mb(this, this.qa),
        this.qa = null )
    }
    ;
    var s_RF = function(a, b) {
        var c;
        if (null === b)
            c = null ;
        else {
            c = a.wi;
            var d, e = !1;
            0 > (/WebKit/.test(navigator.userAgent) ? -1 : 0) && (window.scrollX || window.scrollY) && (d = s_JF("svg"),
            d.style.position = "absolute",
            d.style.top = "0",
            d.style.left = "0",
            document.body.appendChild(d),
            e = d.getScreenCTM(),
            e = !(e.f || e.e),
            document.body.removeChild(d));
            e ? (void 0 == b.pageX ? (d = b.clientX + window.scrollX,
            e = b.clientY + window.scrollY) : (d = b.pageX,
            e = b.pageY),
            d = {
                clientX: d,
                clientY: e
            }) : d = b;
            e = c.Yt.createSVGPoint();
            e.x = d.clientX;
            e.y = d.clientY;
            var e = e.matrixTransform(c.Yt.getScreenCTM().inverse())
              , f = new s_Xmb(c.aE[0]);
            d = -1;
            for (var g = Infinity, k = 0; k < f.$.length / 2; ++k) {
                var l = f.getItem(k)
                  , m = Math.abs(e.x - l.x);
                if (m < g || m == g && e.x > l.x)
                    g = m,
                    d = k
            }
            f = c.M7;
            e = e.x;
            for (g = 0; g < f.$.length; g++)
                if (k = f.$[g],
                l = f.ka.getItem(k),
                7 > Math.abs(l.x - e)) {
                    d = k;
                    break
                }
            if (-1 == d)
                c = -1;
            else
                a: {
                    c = c.nK.v[0];
                    e = -1;
                    for (f = 0; f < c.length; f++)
                        if (null === c[f] || e++,
                        e == d) {
                            c = f;
                            break a
                        }
                    c = -1
                }
        }
        return c
    }
    ;
    s_QF.prototype.Za = function(a) {
        a.preventDefault();
        a = s_RF(this, a);
        this.Ia && null === a || (null === this.Ca ? s_PF(this, a) : s_3mb(this, this.Ca, a))
    }
    ;
    var s_2mb = function(a, b) {
        a.Ia && document.activeElement.blur();
        if (1 == b.touches.length) {
            var c = s_RF(a, b.touches[0]);
            a.Ia && null === c || s_PF(a, c)
        } else if (2 == b.touches.length) {
            var c = s_RF(a, b.touches[0])
              , d = s_RF(a, b.touches[1]);
            s_3mb(a, c, d)
        }
    }
    ;
    s_QF.prototype.rb = function(a) {
        this.Ca = s_RF(this, a);
        s_0i(this, document, "mouseup", s_c(function(a) {
            this.Ca = null ;
            s_4mb(this);
            this.Za(a)
        }, this))
    }
    ;
    var s_3mb = function(a, b, c) {
        var d = [Math.min(b, c), Math.max(b, c)]
          , e = a.ma;
        if (!s_ha(e) || 2 != e.length || e[0] != d[0] || e[1] != d[1]) {
            var f = null ;
            b == c ? f = b : null === b ? f = c : null === c && (f = b);
            null === f ? (a.ma = d,
            a.Da.dispatchEvent({
                type: "selectRange",
                b5: d
            }) && s_PF(a, c)) : (s_ha(e) && 2 == e.length && s_4mb(a),
            s_PF(a, f))
        }
    }
      , s_4mb = function(a) {
        s_ha(a.ma) && (a.Da.dispatchEvent("rangeSelectionEnded"),
        a.ma = null )
    }
      , s_PF = function(a, b) {
        b !== a.ma && (s_4mb(a),
        a.ma = b,
        null === b ? a.Da.dispatchEvent("deselect") : a.Da.dispatchEvent({
            type: "selectRow",
            rowIndex: b
        }))
    }
    ;
    var s_SF = function(a, b) {
        s_h.call(this);
        this.$ = new s_7c;
        this.ma = new s_Zi;
        this.Nb = a;
        this.Wa = b;
        this.Ea = a.offsetWidth;
        this.qa = a.offsetHeight;
        s_v(this.Nb, "tuf-hr") || this.ma.listen(window, "resize", s_c(this.Ca, this));
        this.ka(this.ma);
        this.ka(this.$)
    }
    ;
    s_f(s_SF, s_h);
    s_SF.prototype.draw = function(a, b) {
        this.Wa.apply(void 0, arguments);
        if (!s_v(this.Nb, "tuf-hr")) {
            var c = {
                type: "afterDraw"
            };
            a && (c.data = a);
            this.$.dispatchEvent(c)
        }
    }
    ;
    var s_5mb = function(a, b) {
        s_v(a.Nb, "tuf-hr") ? a.Nb.addEventListener("afterDraw", b) : a.ma.listen(a.$, "afterDraw", b)
    }
    ;
    s_SF.prototype.Ca = function() {
        var a = 0 == this.Nb.offsetHeight || 0 == this.Nb.offsetWidth;
        this.Nb.offsetWidth == this.Ea && this.Nb.offsetHeight == this.qa || a || (this.Ea = this.Nb.offsetWidth,
        this.qa = this.Nb.offsetHeight,
        this.draw())
    }
    ;
    var s_6mb = function(a) {
        var b = a.querySelectorAll("line.x-axis");
        0 < b.length ? a = b[0].getAttribute("y1") : (a = s_lc("line", "chartBorderBottom", a),
        a = 0 < a.length ? a[0].getAttribute("y1") : "100%");
        return a
    }
    ;
    s_C("sy405");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_7ob = function(a) {
        if (null === a)
            return "__";
        a = Math.round(a);
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.".charAt(a >> 6) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.".charAt(a % 64)
    }
      , s_8ob = function(a) {
        return null === a ? null : s_MF(a)
    }
      , s_9ob = function(a, b) {
        var c = document.createEvent("CustomEvent");
        c.initEvent("afterDraw", !1, !1);
        b && (c.data = b);
        a.dispatchEvent(c)
    }
      , s_$ob = function(a, b) {
        var c = s_Na(b, a);
        return s_Na(c, s_7ob).join("")
    }
      , s_BG = function(a, b, c, d, e) {
        var f = b - a
          , g = d - c;
        return e ? function(b) {
            return null === b ? null : g - (b - a) / f * g + c
        }
        : function(b) {
            return null === b ? null : (b - a) / f * g + c
        }
    }
      , s_apb = function(a, b) {
        var c = arguments
          , d = c.length;
        return function() {
            var a;
            d && (a = c[d - 1].apply(this, arguments));
            for (var b = d - 2; 0 <= b; b--)
                a = c[b].call(this, a);
            return a
        }
    }
      , s_CG = function(a, b, c, d) {
        b = s_JF("text", {
            x: b,
            y: c
        });
        b.textContent = a;
        s_a(d) && b.setAttribute("class", d);
        return b
    }
      , s_DG = function(a) {
        this.Nb = a;
        this.Ga = !s_IF();
        this.Ca = a.offsetWidth;
        this.Wa = a.offsetHeight;
        s_w(this.Nb, "tuf-hr");
        this.Ea = s_c(this.Da, this);
        window.addEventListener("resize", this.Ea)
    }
    ;
    s_DG.prototype.draw = function(a) {
        this.ka = a || this.ka;
        this.Nb.innerHTML = "";
        if (1 > this.Nb.offsetHeight || 1 > this.Nb.offsetWidth)
            throw a = Error("Hc"),
            google.ml(a, !0, {
                w: this.Nb.offsetWidth,
                h: this.Nb.offsetHeight,
                el: this.Nb,
                elP: this.Nb.parentNode
            }),
            a;
        this.Nb.onselectstart = function() {
            return !1
        }
        ;
        var b = new s_jd(0,0,this.Nb.offsetWidth,this.Nb.offsetHeight);
        if (this.Ga) {
            b.width = Math.min(1E3, b.width);
            b.height = Math.min(1E3, b.height);
            var c = document.createElement("img");
            c.setAttribute("width", b.width);
            c.setAttribute("height", b.height);
            c.setAttribute("border", "0");
            this.Nb.appendChild(c);
            this.ma(c, b, this.ka)
        } else
            c = s_Pmb({
                viewBox: [b.left, b.top, b.width, b.height].join(" ")
            }),
            c.setAttribute("style", "width: " + b.width + "px"),
            this.Nb.appendChild(c),
            this.qa(c, b, this.ka);
        s_9ob(this.Nb, a)
    }
    ;
    s_DG.prototype.Da = function() {
        for (var a = this.Nb; a.parentNode; )
            a = a.parentNode;
        a !== document && window.removeEventListener("resize", this.Ea);
        var a = 0 == this.Nb.offsetHeight || 0 == this.Nb.offsetWidth
          , b = !!this.ka;
        this.Nb.offsetWidth == this.Ca && this.Nb.offsetHeight == this.Wa || a || !b || (this.Ca = this.Nb.offsetWidth,
        this.Wa = this.Nb.offsetHeight,
        this.draw())
    }
    ;
    var s_bpb = function(a, b, c, d, e) {
        var f = s_Na(b, d.Ev);
        b = s_Na(c, function(a) {
            return s_Na(a, d.Gv)
        });
        s_La(b, function(b, c) {
            var d;
            d = !1;
            for (var g = [], k = 0; k < f.length; k++) {
                var ba = b[k];
                d || null === ba ? null === ba || g.push("L " + f[k] + " " + ba) : (d = !0,
                g.push("M " + f[k] + " " + ba))
            }
            d = 0 < g.length ? g.join(" ") : "M 0 0";
            d = s_JF("path", {
                d: d
            });
            d.setAttribute("class", "line line-z" + c + " line-c" + (e ? e[c] : c));
            a.appendChild(d)
        })
    }
      , s_cpb = function(a, b, c, d) {
        for (var e = function(a) {
            return s_Ma(a, function(a, b) {
                return 0 == b % 2
            })
        }
        ; 450 < c.length * d.length; )
            c = e(c),
            d = s_Na(d, e);
        var f = s_apb(s_BG(a.top, a.top + a.height, 0, 4095), b.Gv)
          , g = s_$ob(s_apb(s_BG(a.left, a.left + a.width, 0, 4095), b.Ev), c);
        return "e:" + s_Na(d, function(a) {
            return g + "," + s_$ob(f, a)
        }).reverse().join(",")
    }
      , s_dpb = function(a, b, c, d) {
        var e = s_JF("g", {
            "class": "xTick"
        })
          , f = c + 7;
        d = f + d;
        for (var g = 0; g < b.length; g++) {
            var k = Math.round(b[g].position) + .5
              , l = s_CG(b[g].label, k, d, "label");
            l.setAttribute("style", "text-anchor: middle;");
            k = s_JF("line", {
                x1: k,
                y1: c,
                x2: k,
                y2: f
            });
            e.appendChild(k);
            e.appendChild(l)
        }
        s_zc(a, e, 0)
    }
      , s_epb = function(a, b, c, d, e) {
        for (var f = 0, g = 0, k = 0; k < b.length; k++) {
            var l = b[k].label;
            null !== l && (l = s_CG(l, 0, 0, "label"),
            a.appendChild(l),
            f = Math.max(l.getBoundingClientRect().width, f),
            g = Math.max(l.getBoundingClientRect().height, g),
            a.removeChild(l))
        }
        g = f;
        0 < g && (g += 10);
        for (var m = s_JF("g", {
            "class": "yTick"
        }), k = 0; k < b.length; k++)
            if (l = b[k].label,
            null !== l) {
                var n = Math.round(b[k].position - .5) + .5
                  , l = s_JF("line", {
                    x1: 0,
                    y1: n,
                    x2: d,
                    y2: n
                });
                0 == k && s_LF(l, "x-axis");
                b[k].dD && s_LF(l, "zero-line");
                m.appendChild(l)
            }
        k = s_JF("rect", {
            "class": "bandaid",
            x: 0,
            y: 0,
            width: c + f,
            height: e
        });
        m.appendChild(k);
        for (k = b.length - 1; 0 <= k; k--)
            if (l = b[k].label)
                n = Math.round(b[k].position) + .5,
                l = s_CG(l, c + f, n, "label"),
                l.setAttribute("style", "text-anchor: end; dominant-baseline: central;"),
                d = l.cloneNode(!0),
                d.setAttribute("class", "outline"),
                d.setAttribute("aria-hidden", !0),
                m.appendChild(d),
                m.appendChild(l);
        a.appendChild(m);
        return g + 7
    }
      , s_fpb = function(a, b) {
        var c = s_MF(a.t[0])
          , d = s_8ob(s_da("m.include.t1", a));
        d && c > d && (c = d);
        var d = s_MF(a.t[a.t.length - 1])
          , e = s_8ob(s_da("m.include.t2", a));
        e && d < e && (d = e);
        for (var e = a.v, f = Infinity, g = -Infinity, k = 0; k < e.length; k++)
            for (var l = e[k], m = 0; m < l.length; m++) {
                var n = l[m];
                null !== n && (f = Math.min(n, f),
                g = Math.max(n, g))
            }
        e = new s_Nl(f,g);
        b && (0 < e.start ? e.start = 0 : 0 > e.end && (e.end = 0));
        return {
            Ar: c,
            yr: d,
            Oy: e.start,
            My: e.end
        }
    }
    ;
    s_D("sy415");
    var s_gpb = function(a) {
        var b = s_da("google.tick")
          , c = s_da("google.timers.load.t");
        if (b && c && !c[a] && (b("load", a, void 0),
        google.log && "lch_draw_fin" == a)) {
            var b = c.iml
              , d = c[a];
            google.log("late_tick", "&label=" + a + "&lateness=" + (b && d ? String(d - b) : "") + "&missed=" + !c.start)
        }
    }
    ;
    var s_hpb = function() {}
      , s_jpb = function(a, b, c, d) {
        c = 0 == b ? 0 : c + (1 > Math.abs(b) ? 0 : Math.floor(Math.log(Math.abs(b)) / Math.LN10 + 2E-15) + 1);
        s_Ro(a.ma, c);
        s_gwa(a.ma, c);
        var e;
        a.ka && 0 != b ? e = a.ma.format(b) : e = s_ipb(a, b);
        null !== d && (d.prefix && (e = d.prefix + e),
        d.suffix && (e += d.suffix));
        return e
    }
      , s_ipb = function(a, b) {
        var c = a.ma.zq;
        a.ma.zq = 1;
        var d = a.ma.format(b);
        a.ma.zq = c;
        return d
    }
      , s_lpb = function(a, b, c, d, e, f) {
        var g = new s_hpb;
        g.$ = b.clone();
        g.Ea = c;
        g.Wa = a;
        g.rk = f || null ;
        g.ma = f && f.p ? new s_Po(3) : new s_Po(5);
        a = g.$.start;
        b = g.$.end;
        if (a == b) {
            b = a;
            if (0 == b)
                return d = new s_Nl(0,1),
                e = s_BG(d.start, d.end, g.Wa.start, g.Wa.end, g.Ea),
                {
                    $m: e,
                    Mq: d,
                    Ul: [{
                        position: e(0),
                        label: s_jpb(g, 0, 0, g.rk),
                        dD: !1
                    }]
                };
            a = Math.min(.9 * b, 1.1 * b);
            b = Math.max(.9 * b, 1.1 * b);
            g.$ = new s_Nl(a,b)
        }
        g.Ca = d;
        g.qa = e;
        return s_kpb(g)
    }
      , s_kpb = function(a) {
        for (var b = [1, 2, 5], c = -40; 40 >= c; c++)
            for (var d = Math.pow(10, c), e = 0; e < b.length; e++) {
                var f = b[e] * d;
                if (!(Math.abs(a.Wa.end - a.Wa.start) / Math.floor((a.$.end - a.$.start) / f) * 5 < a.qa) && (f = s_mpb(a, f, -c),
                null !== f))
                    return f
            }
        return {
            Ul: [],
            Mq: a.$,
            $m: function(a) {
                return a
            }
        }
    }
      , s_mpb = function(a, b, c) {
        var d, e = a.$;
        d = b * Math.floor(e.start / b);
        var e = e.end
          , f = e / b;
        .9 >= Math.ceil(f) - f && (e = b * Math.ceil(f));
        d = new s_Nl(d,e);
        var e = b * Math.floor(d.start / b)
          , f = s_BG(d.start, d.end, a.Wa.start, a.Wa.end, a.Ea)
          , g = d.end - b;
        0 == g && (g = d.end);
        a.ma.zq = g;
        a.ma.eF = !0;
        var k = g
          , g = s_ipb(a, k).length
          , l = a.ka;
        a.ka = !0;
        k = s_jpb(a, k, c, null );
        a.ka = l;
        a.ka = 4 <= g - k.length;
        g = [];
        for (l = 0; ; ) {
            k = e + l * b;
            l++;
            if (k > d.end)
                break;
            if (!(k < d.start)) {
                var m = f(k), n;
                a: {
                    var ba = a;
                    n = m;
                    if (0 < g.length) {
                        var t = g[g.length - 1]
                          , ba = ba.Ca(t.label) + ba.qa;
                        if (Math.abs(t.position - n) < ba) {
                            n = !0;
                            break a
                        }
                    }
                    n = !1
                }
                if (n)
                    return null ;
                m = {
                    position: m,
                    label: s_jpb(a, k, c, a.rk),
                    dD: !1
                };
                0 == k && 0 > a.$.start && 0 < a.$.end && (m.dD = !0);
                g.push(m)
            }
        }
        return 0 == g.length ? null : {
            Ul: g,
            Mq: d,
            $m: f
        }
    }
    ;
    var s_npb = function(a, b) {
        var c = s_CG("", 0, -100, b);
        c.setAttribute("style", "alignment-baseline: auto; visibility: hidden");
        a.appendChild(c);
        return {
            Ab: function(a) {
                c.textContent = a;
                return c.getBoundingClientRect().width
            },
            ub: function(a) {
                c.textContent = a;
                return c.getBoundingClientRect().height
            },
            $U: function(a) {
                c.textContent = a;
                return -100 - c.getBBox().y
            },
            destroy: function() {
                a.removeChild(c)
            }
        }
    }
    ;
    var s_ppb = function(a, b, c) {
        var d;
        d = a.domain;
        d = d.end - d.start;
        var e = [];
        1728E5 >= d && (e = e.concat([{
            Xd: "H",
            yj: 1
        }, {
            Xd: "H",
            yj: 2
        }, {
            Xd: "H",
            yj: 3
        }, {
            Xd: "H",
            yj: 4
        }, {
            Xd: "H",
            yj: 6
        }, {
            Xd: "H",
            yj: 12
        }]));
        7776E6 >= d && (e = e.concat([{
            Xd: "D",
            yj: 1
        }, {
            Xd: "D",
            yj: 3
        }, {
            Xd: "D",
            yj: 7
        }, {
            Xd: "D",
            yj: 14
        }]));
        94608E6 >= d && (e = e.concat([{
            Xd: "M",
            yj: 1
        }, {
            Xd: "M",
            yj: 2
        }, {
            Xd: "M",
            yj: 3
        }, {
            Xd: "M",
            yj: 6
        }]));
        d = e = e.concat([{
            Xd: "Y",
            yj: 1
        }, {
            Xd: "Y",
            yj: 2
        }, {
            Xd: "Y",
            yj: 5
        }, {
            Xd: "Y",
            yj: 10
        }, {
            Xd: "Y",
            yj: 20
        }, {
            Xd: "Y",
            yj: 50
        }, {
            Xd: "Y",
            yj: 100
        }, {
            Xd: "Y",
            yj: 1E3
        }]);
        for (e = 0; e < d.length; e++) {
            var f = b(d[e])
              , g = f.Wa();
            if (g) {
                var k = a.tF(g.label), l;
                l = c;
                var m = a.Uu
                  , g = g.position
                  , n = s_BG(l.start, l.end, m.start, m.end - 12);
                n(g) + k / 2 >= m.end && (n = s_BG(l.start, g, m.start, m.end - k / 2));
                l = n;
                a: {
                    var m = a.tF
                      , g = l
                      , k = a.QL
                      , n = a.Uu.start - 14
                      , ba = a.O1
                      , t = s_opb(f.Wa(), g);
                    if (null === t)
                        m = [];
                    else
                        for (var w = [t], B, G, I = 0; ; ) {
                            B = m(t.label);
                            G = t.position;
                            t = s_opb(f.Da(), g);
                            if (null === t) {
                                w.reverse();
                                G - B / 2 < n && (w = w.slice(1));
                                m = w;
                                break a
                            }
                            var N = m(t.label);
                            if (G - B / 2 - (t.position + N / 2) < k) {
                                if (null == ba || I >= ba) {
                                    m = [];
                                    break a
                                }
                                I++;
                                t.label = ""
                            }
                            w.push(t)
                        }
                }
                if (0 < m.length)
                    return {
                        Ul: m,
                        Mq: c,
                        $m: l
                    }
            }
        }
        return {
            Ul: [],
            Mq: c,
            $m: s_BG(c.start, c.end, a.Uu.start, a.Uu.end)
        }
    }
      , s_qpb = function(a) {
        return s_ppb(a, function(b) {
            return new s_EG(b,a.domain)
        }, a.domain)
    }
      , s_spb = function(a, b, c) {
        return s_ppb(a, function(d) {
            return new s_rpb(d,a.domain,b,c)
        }, new s_Nl(0,b.length - c.length - 1))
    }
      , s_opb = function(a, b) {
        if (null === a)
            return null ;
        a.position = b(a.position);
        return a
    }
      , s_ypb = function(a) {
        switch (a) {
        case "Y":
            return function(a) {
                return s_tpb().format(a, s_upb)
            }
            ;
        case "M":
            return function(a) {
                return s_vpb().format(a, s_upb)
            }
            ;
        case "D":
            return function(a) {
                return s_wpb().format(a, s_upb)
            }
            ;
        case "H":
            return function(a) {
                return s_xpb().format(a, s_upb)
            }
            ;
        default:
            return function() {
                return ""
            }
        }
    }
      , s_upb = s_fo(0)
      , s_zpb = {}
      , s_tpb = s_c(s_fd(function() {
        return new s_ho(s_lo.pA)
    }), s_zpb)
      , s_vpb = s_c(s_fd(function() {
        return new s_ho(s_lo.DG)
    }), s_zpb)
      , s_wpb = s_c(s_fd(function() {
        return new s_ho(s_lo.jG)
    }), s_zpb)
      , s_xpb = s_c(s_fd(function() {
        return new s_ho(s_cg.vT[3])
    }), s_zpb)
      , s_Apb = function() {}
      , s_EG = function(a, b, c) {
        this.ma = null != c && 0 < c.length ? c : null ;
        this.Ia = s_ypb(a.Xd);
        this.$ = new Date(b.end);
        this.ka = null != this.ma ? this.ma.length - 1 : null ;
        this.$.setUTCMilliseconds(0);
        this.$.setUTCSeconds(0);
        this.$.setUTCMinutes(0);
        switch (a.Xd) {
        case "H":
            this.qa = function() {
                return this.$.getUTCHours()
            }
            ;
            this.Ea = function(a) {
                this.$.setUTCHours(a)
            }
            ;
            break;
        case "D":
            this.$.setUTCHours(0);
            this.qa = function() {
                return this.$.getUTCDate()
            }
            ;
            this.Ea = function(a) {
                this.$.setUTCDate(a)
            }
            ;
            break;
        case "M":
            this.$.setUTCHours(0);
            this.$.setUTCDate(1);
            this.qa = function() {
                return this.$.getUTCMonth()
            }
            ;
            this.Ea = function(a) {
                this.$.setUTCMonth(a)
            }
            ;
            break;
        case "Y":
            this.$.setUTCHours(0),
            this.$.setUTCDate(1),
            this.$.setUTCMonth(0),
            this.qa = function() {
                return this.$.getUTCFullYear()
            }
            ,
            this.Ea = function(a) {
                this.$.setUTCFullYear(a)
            }
        }
        "D" != a.Xd && this.Ea(this.qa() - this.qa() % a.yj);
        this.Ga = new Date(b.start);
        this.Ja = a.yj;
        this.Ca = new Date(this.$);
        null != this.ma && (s_Bpb(this, this.Ca),
        this.Ma = this.ka)
    }
    ;
    s_f(s_EG, s_Apb);
    var s_Bpb = function(a, b) {
        for (var c = a.ka; 0 <= a.ka; ) {
            if (a.ma[a.ka] < b) {
                a.ka = c;
                return
            }
            c = a.ka;
            a.ka--
        }
        a.ka = 0
    }
      , s_Cpb = function(a) {
        var b;
        b = null != a.ma ? a.ma[a.ka] : a.$;
        return {
            label: a.Ia(b),
            position: b.getTime()
        }
    }
    ;
    s_EG.prototype.Wa = function() {
        if (this.Ca < this.Ga)
            return null ;
        this.$.setTime(this.Ca.getTime());
        null != this.ma && (this.ka = this.Ma);
        return s_Cpb(this)
    }
    ;
    s_EG.prototype.Da = function() {
        this.Ea(this.qa() - this.Ja);
        if (this.$ < this.Ga)
            return null ;
        null != this.ma && s_Bpb(this, this.$);
        return s_Cpb(this)
    }
    ;
    var s_rpb = function(a, b, c, d) {
        this.qa = c;
        this.Ea = d;
        this.ma = new s_EG(a,b,c)
    }
    ;
    s_f(s_rpb, s_Apb);
    s_rpb.prototype.Wa = function() {
        this.$ = this.qa.length - 1;
        this.ka = this.Ea.length;
        return s_Dpb(this, this.ma.Wa())
    }
    ;
    s_rpb.prototype.Da = function() {
        var a = this.$ - this.ka, b;
        do
            b = s_Dpb(this, this.ma.Da());
        while (null !== b && b.position == a);return b
    }
    ;
    var s_Dpb = function(a, b) {
        if (null === b)
            return null ;
        for (; 0 <= a.$ && a.qa[a.$].getTime() >= b.position; )
            --a.$;
        for (a.$ += 1; 0 < a.ka && a.Ea[a.ka - 1] >= a.$; )
            --a.ka;
        b.position = a.$ - a.ka;
        return b
    }
    ;
    var s_FG = function(a, b) {
        s_DG.call(this, a);
        s_oa("google.tufte.mappers", {});
        this.$ = {
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            Xw: !0
        };
        b && s_pb(this.$, b)
    }
    ;
    s_f(s_FG, s_DG);
    s_FG.prototype.qa = function(a, b, c) {
        var d = s_npb(a, "yTick")
          , e = s_npb(a, "xTick")
          , f = d.ub("1234567890")
          , g = e.ub("1234567890")
          , k = e.$U("1234567890")
          , f = this.$.paddingTop + f / 2
          , g = b.height - (this.$.paddingBottom + (g + 1 + 7))
          , l = this.$.paddingLeft
          , m = b.width - this.$.paddingRight - 1
          , n = s_fpb(c, this.$.Xw)
          , f = s_lpb(new s_Nl(f,g), new s_Nl(n.Oy,n.My), !0, function(a) {
            return d.ub(a)
        }, Math.min(30, (g - f) / 10), c.m);
        b = s_epb(a, f.Ul, this.$.paddingLeft, b.width, b.height);
        l += b;
        b = s_Epb(c, n);
        l = {
            domain: new s_Nl(n.Ar.getTime(),n.yr.getTime()),
            Uu: new s_Nl(l,m),
            tF: e.Ab,
            QL: 30,
            O1: 1
        };
        l = s_Fpb(b.t, l, b.xoi);
        s_dpb(a, l.$v.Ul, g, k + 1);
        k = {
            Ev: l.$v.$m,
            Gv: f.$m
        };
        google.tufte.mappers = {
            x: k.Ev,
            y: k.Gv
        };
        c = s_da("m.ci", c);
        s_bpb(a, l.values, b.v, k, c);
        e.destroy();
        d.destroy()
    }
    ;
    var s_Epb = function(a, b) {
        var c = s_Na(a.t, s_MF)
          , d = {
            v: a.v,
            t: c,
            xoi: null != a.m && null != a.m.xoi ? a.m.xoi : null
        };
        if (null === d.xoi)
            return d;
        for (var e = c[1] - c[0], f = 1; f <= c.length - 2; f++) {
            var g = c[f + 1] - c[f];
            g < e && 0 < g && (e = g)
        }
        var f = c[c.length - 1]
          , k = Math.floor((c[0].getTime() - b.Ar.getTime()) / e)
          , f = Math.floor((b.yr.getTime() - f.getTime()) / e);
        k > c.length && (k = 0);
        f > c.length && (f = 0);
        if (0 == k && 0 == f)
            return d;
        g = s_Zea(b.Ar.getTime(), b.Ar.getTime() + e * k, e);
        e = s_Zea(b.yr.getTime() - e * (f - 1), b.yr.getTime() + e, e);
        d.t = s_Za(s_Na(g, function(a) {
            return new Date(a)
        }), c, s_Na(e, function(a) {
            return new Date(a)
        }));
        c = s_6a(null , k);
        e = s_6a(null , f);
        d.v = [];
        for (f = 0; f < a.v.length; f++)
            d.v[f] = s_Za(c, a.v[f], e);
        null != a.m && null != a.m.xoi && (d.xoi = s_Na(a.m.xoi, function(a) {
            return a + k
        }));
        return d
    }
    ;
    s_FG.prototype.ma = function(a, b, c) {
        var d = s_Na(c.t, s_MF)
          , e = s_fpb(c, this.$.Xw)
          , f = function(a) {
            var b = s_Na(a, function(a) {
                return a.label
            });
            a = s_Na(a, function(a) {
                return Math.round(a.position)
            });
            return {
                xH: "|" + b.join("|"),
                $A: "," + a.join(",")
            }
        }
          , g = {
            domain: new s_Nl(e.Ar.getTime(),e.yr.getTime()),
            Uu: new s_Nl(b.left,b.left + b.width),
            tF: function(a) {
                return 8 * a.length
            },
            QL: 30
        }
          , k = s_Fpb(d, g, s_da("m.xoi", c))
          , d = f(k.$v.Ul)
          , l = s_lpb(new s_Nl(b.top,b.top + b.height), new s_Nl(e.Oy,e.My), !1, function() {
            return 14
        }, Math.min(30, b.height / 10), c.m)
          , g = l.Ul
          , f = f(g)
          , g = Array(g.length + 1).join("|")
          , m = b.width
          , n = b.height;
        e.Oy = l.Mq.start;
        e.My = l.Mq.end;
        b = s_cpb(b, {
            Ev: k.$v.$m,
            Gv: l.$m
        }, k.values, c.v);
        for (var e = s_Na(c.v, function(a, b) {
            return 0 == b ? 3 : 1
        }), k = function(a) {
            a = s_3q("#" + a);
            for (var b = 0; 3 > b; b++)
                a[b] = Math.floor(.55 * a[b] + 255 * (1 - .55));
            return s_4q(a).substr(1)
        }
        , l = ["4285f4", "65b045", "f7981d"], ba = [], t = s_da("m.ci", c), w = 0; w < c.v.length; w++) {
            var B = l[t ? t[w] : w];
            0 < w && (B = k(B));
            ba.push(B)
        }
        c = ["https://chart.googleapis.com/chart", "?chs=" + m + "x" + n, "&cht=lxy", "&chco=" + ba.reverse().join(","), "&chls=" + e.reverse().join("|"), "&chxt=x,y,r", "&chxr=0,0," + m + "|1,0," + n + "|2,0," + n, "&chxl=0:" + d.xH + "|1:" + f.xH + "|2:" + g, "&chxp=0" + d.$A + "|1" + f.$A + "|2" + f.$A, "&chxtc=1,3|2,-" + m, "&chxs=0,777777|1,777777,11,1,t,ffffff|2,ffffff,0,-1,t,ebebeb", "&chd=" + b].join("");
        a.setAttribute("src", c)
    }
    ;
    var s_Fpb = function(a, b, c) {
        var d;
        null === c ? (d = s_Na(a, function(a) {
            return a.getTime()
        }),
        a = s_qpb(b)) : (d = s_Na(a, function(a, b) {
            var d = b;
            s_g(c, function(a) {
                a < b && --d
            });
            return d
        }),
        a = s_spb(b, a, c));
        return {
            values: d,
            $v: a
        }
    }
    ;
    s_fo(0);
    s_C("sy415");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_G4c = ["opacity", "strokeWidth"]
      , s_H4c = function(a) {
        var b = s_JF("line", {
            x1: "0",
            y1: "0",
            x2: "0",
            y2: s_6mb(a),
            "class": "highlight-line",
            visibility: "hidden"
        });
        a = s_k("line", a);
        a[0].parentNode.insertBefore(b, a[0]);
        return b
    }
      , s_I4c = function(a, b) {
        var c = {}
          , d = {}
          , e = {}
          , f = {}
          , g = window.getComputedStyle(b, null )
          , k = window.getComputedStyle(a, null );
        s_g(s_G4c, function(l) {
            e[l] = g[l];
            c[l] = k[l];
            f[l] = b.style[l];
            d[l] = a.style[l]
        });
        s_yc(a, b);
        s_g(s_G4c, function(d) {
            a.style[d] = e[d];
            b.style[d] = c[d]
        });
        return function() {
            s_yc(b, a);
            s_g(s_G4c, function(c) {
                b.style[c] = f[c];
                a.style[c] = d[c]
            })
        }
    }
      , s_J4c = function(a, b) {
        return new s_jd(a.left + b.left,a.top + b.top,a.width - (b.left + b.right),a.height - (b.top + b.bottom))
    }
      , s_K4c = function(a, b, c) {
        return {
            Ev: s_BG(a.Ar.getTime(), a.yr.getTime(), b.left, b.left + b.width),
            Gv: s_BG(a.Oy, a.My, b.top, b.top + b.height, c)
        }
    }
    ;
    s_D("skpc");
    var s_L4c = function(a) {
        s_K(this, a, 0, -1, null , null )
    }
    ;
    s_f(s_L4c, s_J);
    var s_M4c = function(a, b) {
        s_DG.call(this, a);
        b = b || 0;
        this.$ = new s_id(b,b,b,b)
    }
    ;
    s_f(s_M4c, s_DG);
    s_M4c.prototype.qa = function(a, b, c) {
        var d = s_Na(c.t, s_MF);
        b = s_J4c(b, this.$);
        var e = s_fpb(c, !1);
        b = s_K4c(e, b, !0);
        d = s_Na(d, function(a) {
            return a.getTime()
        });
        e = s_da("m.ci", c);
        s_bpb(a, d, c.v, b, e)
    }
    ;
    s_M4c.prototype.ma = function(a, b, c) {
        var d = s_Na(c.t, function(a) {
            return s_MF(a).getTime()
        }), e = s_fpb(c, !1), e = s_K4c(e, b), f;
        f = "https://chart.googleapis.com/chart" + ("?chs=" + b.width + "x" + b.height);
        f = f + "&cht=lxy:nda&chco=4285f4&chls=1" + ("&chd=" + s_cpb(b, e, d, c.v));
        a.setAttribute("src", f)
    }
    ;
    var s_U0 = function(a, b, c, d) {
        s_Zi.call(this);
        this.ma = a;
        this.Ia = d;
        this.$ = [];
        var e = s_NF(this.ma);
        null !== e && (this.qa = s_H4c(e),
        s_N4c(this, b, c),
        this.Ca = null ,
        this.Za = null !== s_da("m.fi", this.Ia),
        s_Qk || s_O4c(this),
        this.Ea = new s_7c,
        this.Ea.listen("deselect", s_c(this.Da, this)),
        this.Ea.listen("selectRow", s_c(function(a) {
            s_P4c(this, a.rowIndex)
        }, this)),
        this.Ma = new s_QF(a,d,this.Ea),
        this.Da(),
        s_g(b, function(a) {
            s_Q4c(a, 0)
        }))
    }
    ;
    s_f(s_U0, s_Zi);
    s_U0.prototype.Db = function() {
        s_N4c(this, null , null );
        var a = s_NF(this.ma);
        null !== a && (this.qa = s_H4c(a),
        s_R4c(this),
        a = this.Ma,
        a.wi = s_1mb(a))
    }
    ;
    var s_R4c = function(a) {
        null == a.Ca ? a.Da() : s_P4c(a, a.Ca)
    }
      , s_P4c = function(a, b) {
        a.Ca = b;
        for (var c = a.Ia.t[b], d = a.$.length - 1; 0 <= d; d--) {
            var e = a.$[d], f;
            f = c;
            var g = e.data
              , k = -1
              , l = f.substring(0, 4);
            4 == f.length ? f += "-12-31" : 7 == f.length && (f += "-31");
            for (var m = 0; m < g.t.length; m++) {
                var n = g.t[m];
                if (n <= f)
                    n.substring(0, 4) == l && (k = m);
                else
                    break
            }
            f = k;
            -1 != f && null != e.data.v[e.Dq][f] ? (g = e,
            l = f,
            m = g.data,
            k = m.fv[g.Dq][l],
            l = m.hasOwnProperty("ft") ? m.ft[l] : m.t[l],
            m = s_r(g.As).height,
            s_S4c(g.As, k, l),
            s_Q4c(g.As, m),
            null === g.ck || s_w(g.ck, "highlighted"),
            s_LF(g.path, "highlighted"),
            s_T4c(e, f)) : (s_U4c(e),
            f = e.As,
            (g = f.getAttribute("skp-na")) ? f.innerHTML = g : s_S4c(f, "-", "-"),
            s_V4c(e))
        }
        c = a.qa;
        d = s_OF(a.Ja, b, 0);
        c.setAttribute("x1", d.x);
        c.setAttribute("x2", d.x);
        c.removeAttribute("visibility")
    }
    ;
    s_U0.prototype.Da = function() {
        this.Ca = null ;
        for (var a = this.$.length - 1; 0 <= a; a--) {
            var b = this.$[a]
              , c = !b.bD && !b.kL
              , d = null ;
            this.Za && !c ? d = s_da("m.fi", b.data) : b.bD && (d = b.data.t.length - 1);
            c = null != d && null != b.data.v[b.Dq][d];
            s_U4c(b);
            b.As.innerHTML = b.defaultValue;
            c ? s_T4c(b, d) : s_V4c(b)
        }
        this.qa.setAttribute("visibility", "hidden")
    }
    ;
    s_U0.prototype.rb = function(a) {
        s_W4c(this, a);
        s_R4c(this)
    }
    ;
    var s_X4c = function(a, b, c, d) {
        for (var e = 0; e < b.length; e++) {
            var f = a;
            s_W4c(f, b[e], c[e], d[e]);
            s_R4c(f)
        }
    }
    ;
    s_U0.prototype.Ha = function() {
        this.Ma.dispose();
        this.Ea.dispose();
        for (var a = 0; a < this.$.length; a++) {
            var b = this.$[a].vg;
            null === b || b.parentNode.removeChild(b)
        }
        this.qa.parentNode.removeChild(this.qa);
        s_U0.Ba.Ha.call(this)
    }
    ;
    var s_N4c = function(a, b, c) {
        var d = s_NF(a.ma);
        if (null !== d) {
            for (var e = a.Ia, f = [], g = 0; g < e.v.length; g++)
                f.push(s_l("line-z" + g, d));
            a.Ja = new s_0mb(f,e);
            for (g = 0; g < f.length; g++) {
                var k = f[g]
                  , l = 0 == g;
                g >= a.$.length ? a.$.push({
                    wi: a.Ja,
                    data: e,
                    Dq: g,
                    vg: null ,
                    bD: l,
                    kL: !1,
                    hI: s_md(k, "stroke"),
                    iI: l ? 5 : 3,
                    As: b[g],
                    defaultValue: b[g].innerHTML,
                    ck: c[g],
                    path: k,
                    Wz: d,
                    LH: a.ma
                }) : (a.$[g].wi = a.Ja,
                a.$[g].vg = null ,
                a.$[g].path = k,
                a.$[g].Wz = d)
            }
        }
    }
      , s_W4c = function(a, b, c, d) {
        for (var e = s_NF(b), f = s_l("line-z0", e), g = 0; g < a.$.length; g++) {
            var k = a.$[g];
            if (k.LH == b) {
                s_pb(k, {
                    path: f,
                    wi: new s_0mb([f],k.data),
                    Wz: e,
                    vg: null
                });
                return
            }
        }
        a.$.push({
            data: d,
            Dq: 0,
            wi: new s_0mb([f],d),
            vg: null ,
            bD: !1,
            kL: !0,
            Wz: e,
            LH: b,
            As: c,
            defaultValue: c.innerHTML,
            hI: s_md(f, "stroke"),
            ck: null ,
            path: f,
            iI: 2
        })
    }
      , s_Y4c = function(a) {
        var b = a.Wz
          , c = a.hI
          , d = a.iI
          , e = new s_$b(0,0)
          , d = s_a(d) ? d : 4
          , f = s_JF("g", void 0);
        f.appendChild(s_JF("circle", {
            cx: e.x,
            cy: e.y,
            r: d,
            "class": "hover-dot",
            fill: c
        }));
        b.appendChild(f);
        a.vg = f;
        s_yc(a.vg, a.path);
        a.vg.setAttribute("class", "highlightDot highlightDot_" + a.Dq)
    }
      , s_T4c = function(a, b) {
        null != a.vg || s_Y4c(a);
        var c = s_OF(a.wi, b, a.Dq);
        a.vg.removeAttribute("visibility");
        a.vg.setAttribute("transform", "translate(" + c.x + "," + c.y + ")")
    }
      , s_V4c = function(a) {
        null != a.vg || s_Y4c(a);
        a.vg.setAttribute("visibility", "hidden")
    }
      , s_U4c = function(a) {
        null === a.ck || s_x(a.ck, "highlighted");
        s_Rmb(a.path, "highlighted")
    }
      , s_Q4c = function(a, b) {
        var c = s_r(a).height;
        c > b && s_q(a, "min-height", c + "px")
    }
      , s_S4c = function(a, b, c) {
        b = (a.getAttribute("skp-pat") || "$v ($d)").replace("$v", b).replace("$d", c);
        a.innerHTML = b
    }
      , s_O4c = function(a) {
        for (var b = 1; b < a.$.length; b++)
            s_Z4c(a, a.$[b], a.$[0])
    }
      , s_Z4c = function(a, b, c) {
        var d = b.ck;
        if (null !== d) {
            var e = b.path
              , f = c.path
              , g = null ;
            s_Umb(d, function() {
                g = s_I4c(e, f);
                null === b.ck || s_w(b.ck, "highlighted");
                null === c.vg || c.vg.setAttribute("visibility", "hidden")
            }, function() {
                null !== g && (g(),
                g = null );
                null === b.ck || s_x(b.ck, "highlighted");
                null === c.vg || c.vg.removeAttribute("visibility")
            }, a)
        }
    }
    ;
    var s__4c = function() {
        var a = s_l("kpd-ch"), b;
        if (google.hasOwnProperty("skp") && a)
            b = 0 == a.offsetWidth ? !1 : !0;
        else {
            b = s_k("kpd-sltd");
            for (var c = 0; c < b.length; c++)
                s_s(b[c], !1);
            b = !1
        }
        if (b && (b = s_da("google.skp.mc"),
        null !== b)) {
            var c = s_Md(a), d;
            a: {
                for (d = 0; d < b.n.length; d++)
                    for (var e = d + 1; e < b.n.length; e++) {
                        var f;
                        b: {
                            f = b.v[d];
                            for (var g = f.length, k = 0; k < g; k++) {
                                var l = f[k]
                                  , m = b.v[e][k];
                                if (null !== l && null !== m && .05 < Math.abs((l - m) / Math.max(l, m))) {
                                    f = !1;
                                    break b
                                }
                            }
                            f = !0
                        }
                        if (f) {
                            d = !1;
                            break a
                        }
                    }
                d = !0
            }
            (new s_FG(a,{
                paddingLeft: -c.left,
                paddingRight: -c.right,
                Xw: d
            })).draw(b);
            s_gpb("lch_draw_skp")
        }
    }
    ;
    var s_24c = function(a) {
        s_h.call(this);
        this.Ca = a;
        this.Ea = s_IF();
        this.Wa = !!s_M(this.Ca.$.$(s_L4c, "statskp"), 133847121);
        this.$ = this.qa = this.ma = null ;
        a = s_l("kpd-ch", void 0);
        if (google.hasOwnProperty("skp") && a)
            s_04c(this, a),
            s_14c(this, a);
        else {
            a = s_k("kpd-sltd");
            for (var b = 0; b < a.length; b++)
                s_s(a[b], !1)
        }
    }
    ;
    s_f(s_24c, s_h);
    var s_04c = function(a, b) {
        var c = google.skp.mc
          , d = google.skp.lo;
        a.Wa || s__4c();
        var e = s_da("google.skp.draw");
        if (e) {
            if (a.ma = new s_SF(b,e),
            a.Ea) {
                var f = function(a) {
                    if (!d)
                        return a;
                    for (var b = [], c = 0; c < d.length; c++)
                        b[d[c]] = a[c];
                    return b
                }
                  , e = f(s_k("kpd-le"))
                  , f = f(s_k("kpd-lv"));
                a.$ = new s_U0(b,f,e,c);
                null !== a.ma && (c = s_c(a.$.Db, a.$),
                s_5mb(a.ma, c))
            }
        } else
            s_de(Error("Rb"))
    }
      , s_14c = function(a, b) {
        var c = google.skp.sl || [];
        if (0 != c.length) {
            var d = s_k("kpd-slch");
            s_34c(d, c);
            a.qa = s_44c(b, d, c);
            a.Ea && a.$ && (s_X4c(a.$, d, s_k("kpd-sv"), c),
            s_g(d, function(a, b) {
                var c = this.qa[b]
                  , d = s_c(this.$.rb, this.$, a);
                s_5mb(c, d)
            }, a))
        }
    }
      , s_34c = function(a, b) {
        if (0 != b.length) {
            for (var c = b[0].t[0], d = b[0].t[b[0].t.length - 1], e = 1; e < b.length; e++) {
                b[e].t[0] < c && (c = b[e].t[0]);
                var f = b[e].t.length - 1;
                b[e].t[f] > d && (d = b[e].t[f])
            }
            c = s_MF(c).getTime();
            d = s_MF(d).getTime() - c;
            for (e = 0; e < a.length; e++) {
                var f = a[e]
                  , g = a[e].parentNode.querySelector(".kpd-slp")
                  , k = b[e]
                  , l = s_MF(k.t[0]).getTime()
                  , k = (s_MF(k.t[k.t.length - 1]).getTime() - l) / d
                  , l = (l - c) / d;
                f.style.width = 100 * k + "%";
                g.style.width = 100 * l + "%"
            }
        }
    }
      , s_44c = function(a, b, c) {
        if (0 == c.length)
            return null ;
        for (var d = s_k("kpd-sl"), e = [], f = 0; f < d.length; f++) {
            var g = d[f]
              , k = s_Gc(g);
            s_w(g, "kpd-ofsc");
            s_n(g);
            s_vc(a, g);
            var l = b[f]
              , m = new s_M4c(l,2);
            m.draw(c[f]);
            s_n(g);
            s_vc(k, g);
            s_x(g, "kpd-ofsc");
            s_v(l, "tuf-hr") && s_w(g, "tuf-hr");
            g = new s_SF(g,s_c(m.draw, m));
            e.push(g)
        }
        return e
    }
    ;
    s_24c.prototype.Ha = function() {
        this.ma && (this.ma.dispose(),
        this.ma = null );
        if (this.qa) {
            for (var a = 0; a < this.qa.length; a++)
                this.qa[a].dispose();
            this.qa = null
        }
        this.$ && (this.$.dispose(),
        this.$ = null )
    }
    ;
    var s_54c = function(a) {
        this.$ = a
    }
    ;
    s_T(function(a) {
        s_R(a, "t-vQ60ix2vGU4", s_24c, s_54c, null , function(a, c) {
            s_24c.call(a, c)
        })
    });
    s_C("skpc");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("skplc");
    var s_Ood = function() {
        this.$ = s_IF()
    }
    ;
    s_T(function(a) {
        s_R(a, "t-NIw47CnwF-8", s_Ood, null , null , function(a) {
            s_Ood.call(a)
        });
        s_S(a, "YjZNSkSDzHk", function(a, c) {
            var b = c.node();
            if (a.$) {
                var e;
                a: {
                    e = google.skp.mc.n;
                    for (var f = 0; f < e.length; f++)
                        if (e[f] == b.firstChild.innerHTML) {
                            e = f;
                            break a
                        }
                    e = -1
                }
                if (!(0 > e)) {
                    var f = s_l("kpd-ch")
                      , g = s_k("line-z" + e, f)[0];
                    s_k("line-z0", f);
                    s_Rmb(g, "line-z" + e);
                    s_LF(g, "line-z0")
                }
            }
            s_We(b.href)
        })
    });
    s_C("skplc");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy366");
    var s_RC = function() {
        this.ma = this.$ = "";
        this.Ea = !1;
        this.ka = "";
        this.qa = !1;
        s_ta(s_Ig("duf3")) || (this.qa = !0);
        s_zg("duf3", s_c(this.Wa, this))
    }
      , s_SC = function(a, b) {
        var c = s_RC.Sa();
        if (c.ma) {
            var d = document.querySelector("[data-dtype=" + c.ma + "]");
            d && s_Ef(s_d(s_0h, "duf3.rp", d));
            c.ma = ""
        } else
            a != c.$ && (c.$ = a,
            c = "",
            a.length && (d = a.split(","),
            2 < d.length && (c = d[2])),
            d = s_Ig("fpstate"),
            s_lf() || "" == c && ("" == d || !s_qa(d, "d3")) ? s_Eg("duf3", a, !!b) : (d = {},
            d.duf3 = a,
            d.fpstate = c,
            s_Dg(d, !!b)))
    }
    ;
    s_RC.prototype.Wa = function(a) {
        if (a != this.$) {
            var b = "" != this.$;
            this.$ = a;
            if ("" == a)
                s_0h("duf3.hide"),
                this.ka && (s_We(this.ka),
                this.ka = "");
            else {
                var c = a.split(",");
                if (2 > c.length)
                    s_SC("");
                else {
                    a = c[0];
                    var d = c[1]
                      , e = "";
                    2 < c.length && (e = c[2]);
                    (c = s_i(d)) ? b ? e ? (b = c.querySelector("[data-dtype=" + e + "]")) && s_0h("duf3.rp", b) : (s_0h("duf3.cd"),
                    this.Ea && (s_0h("duf3.ty"),
                    this.Ea = !1)) : (this.ma = e,
                    s_pk(c, {
                        entry_point: a
                    })) : s_SC("")
                }
            }
        }
    }
    ;
    s_ea(s_RC);
    s_C("sy366");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("d3l");
    var s_hgb = function() {
        s_RC.Sa()
    }
    ;
    s_T(function(a) {
        s_R(a, "t-aTz9-_sUcEc", s_hgb, null , null , function(a) {
            s_hgb.call(a)
        })
    });
    s_C("d3l");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("me");
    var s_B5 = function(a) {
        a = a.$.$(s_sAd, "ec");
        this.Ea = s_M(a, 1) || !1;
        var b = s_M(a, 2) || !1;
        this.ma = this.Ea && b;
        b = s_M(a, 4);
        a = s_M(a, 5);
        this.Ca = null != b ? b : 1068;
        this.Da = null != a ? a : 1156;
        s_c(this.qa, this);
        this.ma && (this.$ = s_5e(null , s_c(this.Wa, this), !0),
        s_p(window, "resize", this.$, !1, this),
        this.$())
    }
    ;
    s_f(s_B5, s_h);
    s_B5.prototype.Ha = function() {
        this.ma && s_2c(window, "resize", this.$, !1, this)
    }
    ;
    s_B5.prototype.Wa = function() {
        s_tAd(this, s_i("rhs_block"));
        s_tAd(this, s_i("nyc"));
        s_u(60)
    }
    ;
    s_B5.prototype.$ = null ;
    s_B5.prototype.qa = function() {
        if (!this.Ea)
            return 0;
        var a = document.body.offsetWidth
          , b = this.Ca;
        return a >= this.Da ? 5 : a >= b ? 4 : 3
    }
    ;
    var s_tAd = function(a, b) {
        if (b) {
            var c = a.qa();
            s_y(b, "rhstc3", 4 > c);
            s_y(b, "rhstc4", 4 == c);
            s_y(b, "rhstc5", 4 < c)
        }
    }
    ;
    var s_sAd = function(a) {
        s_K(this, a, 0, -1, null , null )
    }
    ;
    s_f(s_sAd, s_J);
    var s_uAd = function(a) {
        this.$ = a
    }
    ;
    s_T(function(a) {
        s_R(a, "t-5RRekjfu2Ys", s_B5, s_uAd, null , function(a, c) {
            s_B5.call(a, c)
        })
    });
    s_C("me");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy437");
    s_C("sy437");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy438");
    var s_pNb = function() {}
    ;
    var s_qNb, s_rNb, s_lO = function(a, b) {
        if (!s_rNb) {
            s_rNb = {};
            var c = document.getElementById("isr_param");
            if (c)
                for (var d = 0; d < c.attributes.length; ++d) {
                    var e = c.attributes[d];
                    0 == e.name.indexOf("data-") && (s_rNb[e.name] = e.value)
                }
        }
        return s_rNb.hasOwnProperty(a) ? parseFloat(s_rNb[a]) : b
    }
    , s_sNb = s_lO("data-ma", 12), s_tNb = s_lO("data-mrw", 80), s_mO = 1 + s_lO("data-isuf", 0), s_uNb = function(a, b) {
        if (void 0 === s_qNb) {
            var c = google.ua || window.navigator.userAgent;
            s_qNb = !(!c || -1 == c.indexOf("WebKit") || 0 == c.indexOf("Opera"))
        }
        if (s_qNb)
            for (var d in b)
                c = s_Fa(d),
                a.style[c] = b[d];
        else {
            c = [];
            for (d in b)
                c.push(d + ":" + b[d]);
            a.setAttribute("style", c.join(";"))
        }
    }
    , s_yNb = function(a, b, c) {
        var d = {
            kfa: 0,
            aX: 0,
            q7: 0,
            s7: 0,
            oga: 0,
            Jn: 0,
            Wn: 0,
            RL: 0,
            G_: 0,
            H_: 0,
            z7: 0,
            Y_: 0
        };
        d.kfa = b;
        d.aX = c;
        d.Y_ = c;
        d.Jn = a.width;
        d.Wn = a.height;
        if (a.width > b || a.height > c) {
            var e = b / c
              , f = Math.min(s_vNb(a), Math.max(e, s_wNb(a)));
            s_nO(a) > f ? (e = Math.min(a.height, b / f),
            d.Jn = e * s_nO(a),
            d.Wn = e) : (e = Math.min(a.width, f > e ? b : c * f),
            d.Jn = e,
            d.Wn = e / s_nO(a))
        }
        1 < s_mO && !a.Ea && ((f = Math.min(b / d.Jn, s_mO),
        e = Math.min(c / d.Wn, s_mO),
        1 < f) ? (e = Math.max(e, f),
        d.Jn *= e,
        d.Wn *= e) : 1 < e && (f = d.Jn * e,
        f > b || f * s_mO < b) && (d.Wn *= e,
        d.Jn = f));
        d.Jn = Math.round(d.Jn);
        d.Wn = Math.round(d.Wn);
        d.Jn > b ? (e = d.Jn - b,
        b = d.Jn - b,
        d.RL = -1 * (0 == a.ka && 0 == a.Ca ? Math.floor(b / 2) : Math.round(a.ka / (a.ka + a.Ca) * b)),
        d.G_ = -e - d.RL) : d.Jn < b && (d.q7 = (b - d.Jn) / 2);
        d.Wn > c ? (c = d.Wn - c,
        d.H_ = -1 * (0 == a.ma && 0 == a.Wa ? Math.floor(.5 * c) : Math.round(a.ma / (a.ma + a.Wa) * c))) : d.Wn < c && (d.Y_ = d.Wn,
        d.aX = d.Wn,
        c -= d.Wn,
        d.s7 = Math.floor(c / 2),
        d.oga = Math.ceil(c / 2));
        d.z7 = Math.min(d.Jn, d.kfa);
        s_xNb(a, d)
    }
    , s_xNb = function(a, b) {
        var c = a.element
          , d = c.getElementsByClassName("rg_bx")
          , c = 0 < d.length ? d[0] : c;
        s_uNb(c, {
            width: b.kfa + "px",
            height: b.aX + "px",
            "padding-top": b.s7 + "px",
            "padding-bottom": b.oga + "px"
        });
        d = c.getElementsByClassName("rg_ic");
        s_uNb(0 < d.length ? d[0] : c.getElementsByTagName("img")[0], {
            width: b.Jn + "px",
            height: b.Wn + "px",
            "margin-left": b.RL + "px",
            "margin-right": b.G_ + "px",
            "margin-top": b.H_ + "px"
        });
        var d = b.kfa
          , e = b.Jn
          , f = ""
          , g = ""
          , k = !1;
        if (e < d) {
            var l = c.getElementsByTagName("div");
            if (l && l.length)
                for (var m = 0, n; n = l[m]; ++m)
                    if ("rg_anbg" == n.className) {
                        e < s_tNb && (g = (d - s_tNb) / 2 + "px",
                        k = !0);
                        break
                    }
        }
        k || (f = b.q7 + "px");
        s_uNb(c.getElementsByTagName("a")[0], {
            width: b.z7 + "px",
            height: b.Y_ + "px",
            left: f,
            right: g
        })
    }
    , s_zNb = function(a, b) {
        this.element = a;
        this.Ea = "1" == b.bc;
        this.ma = parseInt(b.ct, 10) || 0;
        this.Wa = parseInt(b.cb, 10) || 0;
        this.ka = parseInt(b.cl, 10) || 0;
        this.Ca = parseInt(b.cr, 10) || 0;
        this.Ia = "1" == b.sc;
        this.width = b.tw;
        this.height = b.th;
        this.Da = b.ow;
        this.Ja = b.oh;
        this.Ma = 1 == b.ps
    }
    , s_ANb = s_lO("data-eca", .1), s_nO = function(a) {
        return a.width / a.height
    }
    , s_wNb = function(a) {
        if (a.Ea)
            return s_nO(a);
        var b = (a.ka + a.Ca) / 100;
        a.Ia || (b = Math.min(1, b + s_ANb));
        return (a.width - a.width * b) / a.height
    }
    , s_vNb = function(a) {
        if (a.Ea)
            return s_nO(a);
        var b = (a.ma + a.Wa) / 100;
        a.Ia || (b = Math.min(1, b + s_ANb));
        return a.width / (a.height - a.height * b)
    }
    ;
    s_C("sy438");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy466");
    var s_5P = function(a, b, c, d, e) {
        s_h.call(this);
        this.Mb = b;
        this.ma = a;
        if (a = this.ma.querySelector(".img-brk")) {
            this.$ = a;
            this.Rc = s_oTb(this.$, "h", this.$.clientHeight);
            this.Wa = s_oTb(this.$, "m", 2);
            this.rb = s_oTb(this.$, "nr", 1);
            if (this.$) {
                a = this.$.querySelectorAll(".bili");
                b = [];
                for (var f = 0, g; g = a[f]; f++) {
                    var k = g.querySelector(".rg_meta");
                    k && (k = s_qe(k.innerText || k.innerHTML),
                    g = new s_pTb(g,k),
                    b.push(g))
                }
                a = b
            } else
                a = [];
            this.Ga = a;
            this.Db = c ? c : "";
            this.Za = s_a(d) ? d : 100;
            this.Ma = {};
            this.Ka = !!e;
            this.Da = this.Ca = !1;
            this.qa = null
        }
    }
    ;
    s_f(s_5P, s_h);
    s_5P.prototype.start = function() {
        s_qTb(this);
        this.qa = s_c(this.Xa, this);
        this.Mb.qa(this.qa);
        s_Me(165, this.qa);
        s_oa("google.isr.frs", this.qa)
    }
    ;
    var s_oTb = function(a, b, c) {
        a = s_t(a, b);
        return null == a || (a = parseInt(a, 10),
        isNaN(a)) ? c : a
    }
    ;
    s_5P.prototype.Ea = function() {
        var a = this.Wa
          , a = s_Ld(this.ma).width + a;
        return new s_dc(a,this.Rc)
    }
    ;
    s_5P.prototype.Xa = function() {
        this.Ca = !0;
        s_qTb(this)
    }
    ;
    var s_qTb = function(a) {
        s_rTb(a, "iuml_rcs");
        if (!a.Da) {
            a.Da = !0;
            var b;
            for (b = a.ma; b && s_Ed(b); )
                b = b.parentElement;
            if (b = b || s_v(document.body, "qs-i") ? !1 : !a.Ia()) {
                for (var c = a.Mb.ka(a.Ga), d = !1, e = [], f = [], g, k = 0; g = a.Ga[k]; k++) {
                    var l = c[k]
                      , m = null != l;
                    s_Ed(g.$) != m && (s_Ge(g.$) ? e.push(g.$) : e.push(g.$.querySelector("a")),
                    f.push(m));
                    var m = a
                      , n = !1;
                    s_s(g.$, !!l);
                    l && (g.element.querySelector(".bia").style.margin = "0",
                    s_t(g.$, "ni") && (s_Fe(g.$, "ni"),
                    g.$.querySelector("img").src = g.Za),
                    m.Mb.ma(g, l.width, l.height),
                    g.$.style.width = g.element.style.width,
                    s_y(g.$, "bi-io", l.overlay),
                    l.width > g.width && (n = !0));
                    d = n || d
                }
                e.length && s_z(null , e, f);
                a.$.style.height && (a.$.style.height = "",
                a.$.style.height = a.$.offsetHeight + "px");
                d || !a.Ia() ? s_sTb(a, {
                    eg: d ? 1 : 0
                }) : a.Ca && a.Ka || s_sTb(a, {
                    lc: 1
                })
            }
            a.$ && (a.$.style.visibility = "inherit");
            b ? s_rTb(a, "iuml_re") : s_rTb(a, "iuml_nre");
            a.Da = !1
        }
    }
      , s_rTb = function(a, b) {
        !a.Ca && google.timers && google.timers.load && google.timers.load.t && google.tick("load", b)
    }
    ;
    s_5P.prototype.jl = function() {
        return this.Ga
    }
    ;
    var s_sTb = function(a, b) {
        if (!(0 >= a.Za) && 0 == Math.floor(Math.random() * a.Za)) {
            var c = s_nc()
              , d = c.width;
            if (!a.Ma[d]) {
                c = {
                    iw: d,
                    ih: c.height,
                    r: a.Ca ? 1 : 0,
                    sh: screen.height,
                    sw: screen.width,
                    tmw: a.ma.clientWidth
                };
                b && s_pb(c, b);
                a.Db && (c.c = a.Db);
                s_a(window.orientation) && (c.wo = window.orientation);
                a.$ && (c.bw = a.$.offsetWidth);
                var e = new s_Uo;
                s_3o(e, "emsg", s_tTb(c));
                s_3o(e, "expid", google.kEXPI);
                google.log("kptm:il", "&" + e.$.toString());
                a.Ma[d] = !0
            }
        }
    }
      , s_tTb = function(a) {
        var b = [];
        s_bb(a, function(a, d) {
            b.push(d + ":" + a)
        });
        return b.join(",")
    }
    ;
    s_5P.prototype.Ha = function() {
        null != this.qa && (this.Mb.Ea(this.qa),
        s_Ne(165, this.qa),
        s_oa("google.isr.frs", null ))
    }
    ;
    var s_pTb = function(a, b) {
        s_zNb.call(this, a.querySelector(".bicc") || a, b);
        this.$ = a;
        this.Za = b.tu;
        this.Ga = 6 == b.rt;
        this.qa = null ;
        if (b.ml) {
            var c = b.ml;
            this.qa = {};
            s_bb(c, function(a, b) {
                this.qa[b] = {
                    height: a.bh,
                    width: a.bw,
                    overlay: !!a.o
                }
            }, this)
        }
    }
    ;
    s_f(s_pTb, s_zNb);
    var s_uTb = function(a, b) {
        var c = null ;
        if (a.qa) {
            var d = b + 5
              , e = 0;
            s_bb(a.qa, function(a, b) {
                b = parseInt(b, 10);
                b <= d && b > e && (c = a,
                e = b)
            })
        }
        return c
    }
      , s_vTb = function(a) {
        this.$ = a
    }
    ;
    s_C("sy466");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_1i = function(a, b, c, d, e) {
        d = d || ("string" == typeof b ? "" : s_Ge(b));
        e = e || ("string" == typeof c ? "" : s_Ge(c));
        a.Ef.push({
            bq: d,
            targetElement: b,
            mW: e,
            pda: c,
            oC: 2
        })
    }
      , s_2i = function(a, b, c) {
        a = a.querySelectorAll('[jsaction^="' + b + ':"], [jsaction*=";' + b + ':"], [jsaction*=" ' + b + ':"]');
        for (var d = 0; d < a.length; ++d) {
            var e = a[d], f;
            a: {
                f = e;
                for (var g = a, k = 0; k < g.length; ++k) {
                    var l = g[k];
                    if (l != f && s_yfa(l, f)) {
                        f = !0;
                        break a
                    }
                }
                f = !1
            }
            f || s_Og(e, b, c)
        }
    }
      , s_gja = function(a, b, c) {
        c && (a = s_c(a, c));
        var d = null ;
        return function(c) {
            s_ca.clearTimeout(d);
            var e = arguments;
            d = s_ca.setTimeout(function() {
                a.apply(null , e)
            }, b)
        }
    }
      , s_hja = function(a) {
        if (!arguments.length)
            return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++)
            arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++)
                e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    }
    ;
    s_D("sy47");
    var s_3i = function(a) {
        a = a.XM;
        var b = a.rootElement;
        b || (b = a.rootElement = s_l(a.uN));
        return b
    }
      , s_ija = function(a) {
        for (; !a.VCa; )
            if (a = a.parentElement,
            !a)
                return null ;
        return a.VCa
    }
      , s_5i = function(a) {
        a = s_3i(a);
        s_4i(a)
    }
      , s_4i = function(a) {
        (a = s_ija(a)) && a.render()
    }
      , s_6i = function(a, b, c, d) {
        s_Og(s_3i(a), b, c, d)
    }
      , s_jja = function(a) {
        a = s_Oe(a);
        for (var b = 0, c = a.length; b < c; b++) {
            var d = a[b];
            if (s_qa(d, "r-"))
                return d.substring(2)
        }
        return null
    }
      , s_kja = function(a) {
        a = s_jja(a);
        s_Wga(a, !0)
    }
      , s_7i = function(a) {
        if (a) {
            var b = a.__ctx;
            return b ? b.bP() || null : (a = s_jja(a)) ? s_Wga(a) : null
        }
        return null
    }
      , s_8i = function(a) {
        var b = a.__ctx;
        if (b)
            return (a = b.bP()) ? s_B(a) : s_$e(null );
        (a = s_jja(a)) ? (a = s_Th.$[a] || null ) ? (a.controller || s_Vga(a),
        a.$ || (a.$ = s_bf(),
        s_Pga(a)),
        a = a.$.Mc) : a = s_$e(null ) : a = s_$e(null );
        return a
    }
    ;
    s_C("sy47");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy468");
    var s_yTb = null ;
    var s_7P = function(a) {
        this.$ = a
    }
    ;
    s_f(s_7P, s_vTb);
    s_7P.prototype.qa = function(a) {
        s_Me(60, a)
    }
    ;
    s_7P.prototype.Ea = function(a) {
        s_Ne(60, a)
    }
    ;
    s_7P.prototype.ka = function(a) {
        for (var b = this.$.ma.clientWidth, c = [], d, e = 0; d = a[e]; e++)
            d = s_uTb(d, b),
            c.push(d);
        return c
    }
    ;
    s_7P.prototype.ma = function(a, b, c) {
        s_yNb(a, b, c)
    }
    ;
    s_yTb = s_d(s_dd, s_7P);
    s_C("sy468");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("kptm");
    var s_$pd = function(a) {
        s_K(this, a, 0, -1, null , null )
    }
    ;
    s_f(s_$pd, s_J);
    new s_oe;
    var s_$3 = [{}, {}, {}];
    var s_a4 = function(a) {
        s_5P.call(this, a, s_yTb(this));
        a = s_c(this.Ja, this, !1);
        var b = s_c(this.Ja, this, !0);
        s_$3[0].kptm = a;
        s_$3[1].kptm = a;
        s_$3[2].kptm = b
    }
    ;
    s_f(s_a4, s_5P);
    s_a4.prototype.Ja = function(a) {
        for (var b = this.$, c = b.querySelectorAll(".krable"), d = 0, e; e = c[d]; d++)
            e.style.display = a ? "block" : "none";
        b.style.height && (b.style.height = "",
        b.style.height = b.offsetHeight + "px")
    }
    ;
    s_a4.prototype.Ia = function() {
        var a = this.jl();
        if (!this.$)
            return !0;
        var b = a[0];
        if (1 == a.length)
            var a = b.$
              , c = s_uTb(b, this.ma.clientWidth)
              , a = (c ? c.width : 0) == a.offsetWidth;
        else {
            for (var a = this.Wa, c = this.ma.clientWidth + a, b = b.$, d = 0, e = 0, f, g = 1; f = this.jl()[g]; g++)
                f = f.$,
                s_Ed(f) && (0 == d && (d += b.offsetWidth + a),
                d += f.offsetWidth + a,
                f = d - c,
                0 <= f && 1 >= f && (e++,
                d = 0));
            a = e == this.rb && 0 == d
        }
        return a
    }
    ;
    s_a4.prototype.Ha = function() {
        delete s_$3[0].kptm;
        delete s_$3[1].kptm;
        delete s_$3[2].kptm;
        s_a4.Ba.Ha.call(this)
    }
    ;
    var s_aqd = function(a) {
        var b = s_3i(this)
          , c = s_Oc(b, "kp-blk");
        c && c.querySelector(".kno-ibrg") && (b = s_Oc(b, "tb_c"),
        (this.$ = a.$.get("use_resizer") || !s_M(a.$.$(s_$pd, "splitkp"), 86365553) ? new s_a4(b ? b : c) : null ) && this.$.start())
    }
    ;
    s_f(s_aqd, s_h);
    s_aqd.prototype.Ha = function() {
        this.$ && this.$.dispose();
        this.$ = null
    }
    ;
    var s_bqd = function(a) {
        this.$ = a
    }
    ;
    s_T(function(a) {
        s_R(a, "t-5wh_xFBNHUk", s_aqd, s_bqd, null , function(a, c) {
            s_aqd.call(a, c)
        })
    });
    s_C("kptm");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("ilg");
    var s_pPb = function() {}
    ;
    s_T(function(a) {
        s_R(a, "t-Ozzws2JRG1Y", s_pPb, null , null , function() {});
        s_S(a, "dPT6rUBrsm0", function(a, c) {
            var b = c.event().target;
            b.href && s_We(b.href)
        })
    });
    s_C("ilg");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy96");
    s_C("sy96");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_lja = function(a, b, c) {
        this.$ = s_ega(a, b, c);
        this.ka = this.ma = -1;
        this.Ni = !1
    }
    ;
    s_ = s_lja.prototype;
    s_.getError = function() {
        return this.Ni || this.$.getError()
    }
    ;
    s_.reset = function() {
        this.$.reset();
        this.ka = this.ma = -1
    }
    ;
    s_.advance = function(a) {
        this.$.advance(a)
    }
    ;
    s_.aJa = function(a, b) {
        var c = this.$.ma
          , d = this.$.A0()
          , d = this.$.$ + d;
        this.$.setEnd(d);
        b(a, this);
        this.$.$ = d;
        this.$.setEnd(c)
    }
    ;
    s_.nB = function() {
        return this.$.gPa()
    }
    ;
    var s_mja = function(a, b) {
        var c = String(a).toLowerCase()
          , d = String(b).toLowerCase();
        return c < d ? -1 : c == d ? 0 : 1
    }
      , s_nja = function(a) {
        var b, c = arguments.length;
        if (!c)
            return null ;
        if (1 == c)
            return arguments[0];
        var d = []
          , e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g; )
                f.unshift(g),
                g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null ;
        for (b = 0; b < e; b++) {
            for (var g = d[0][b], k = 1; k < c; k++)
                if (g != d[k][b])
                    return f;
            f = g
        }
        return f
    }
      , s_9i = function(a) {
        return new s_9e(function(b) {
            var c = a.length
              , d = [];
            if (c)
                for (var e = function(a, e, f) {
                    c--;
                    d[a] = e ? {
                        $sa: !0,
                        value: f
                    } : {
                        $sa: !1,
                        reason: f
                    };
                    0 == c && b(d)
                }
                , f = 0, g; f < a.length; f++)
                    g = a[f],
                    s_Cda(g, s_d(e, f, !0), s_d(e, f, !1));
            else
                b(d)
        }
        )
    }
      , s_$i = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i
      , s_oja = function(a) {
        if (a.__ctx)
            return null ;
        a = (a = s_jja(a)) ? (a = s_Th.$[a] || null ) ? a.dom : null : null ;
        return a
    }
      , s_pja = function(a, b) {
        return a == b || !(!a || !b) && a instanceof b.constructor && s_kga(a.Oa(), b.Oa())
    }
      , s_aj = function(a) {
        return Array.prototype.join.call(arguments, "")
    }
    ;
    s_D("sy48");
    var s_U = function(a) {
        this.Ga = a;
        this.Ca = a.XM.Yo || ""
    }
    ;
    s_U.prototype.hb = function() {
        return s_3i(this.Ga)
    }
    ;
    var s_qja = function(a, b, c) {
        b = "." + a.Ca + "-" + b;
        c && (b += ",." + a.Ca + "-" + c);
        return b
    }
      , s_V = function(a, b, c) {
        return a.hb().querySelector(s_qja(a, b, c))
    }
      , s_bj = function(a, b, c) {
        return a.hb().querySelectorAll(s_qja(a, b, c))
    }
      , s_W = function(a, b) {
        var c = s_V(a, b, void 0);
        return c ? s_8i(c) : s_$e(null )
    }
    ;
    s_U.prototype.AY = function(a) {
        return (a = s_V(this, a, void 0)) && s_7i(a)
    }
    ;
    var s_cj = function(a, b) {
        var c = [];
        s_g(s_bj(a, b, void 0), function(a) {
            c.push(s_8i(a))
        }, a);
        return c
    }
    ;
    s_C("sy48");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Ll = function(a) {
        s_De(a, "logged", "1")
    }
    ;
    s_D("sy97");
    var s_Ml = function(a, b, c) {
        s_6i(a, "ct_ia", {
            TF: !!b,
            Jt: c
        })
    }
      , s_xpa = function(a, b, c) {
        s_6i(a, "ct_ia", {
            TF: !!b,
            Gy: 0 != c,
            uZa: void 0
        })
    }
    ;
    s_C("sy97");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("iuci");
    var s_bTb = function(a) {
        s_K(this, a, 0, -1, null , null )
    }
    ;
    s_f(s_bTb, s_J);
    var s_dTb = function(a, b) {
        this.$ = b.getItem();
        this.ka = a.$.get("visible");
        s_Ml(this);
        (this.ma = !s_M(a.$.$(s_bTb, "images_universal_ui"), 20718464)) && s_cTb(this)
    }
    ;
    s_dTb.prototype.Nl = function() {
        this.ma || s_cTb(this)
    }
    ;
    var s_cTb = function(a) {
        if (a = a.$.querySelector("g-img"))
            a = a.querySelector("IMG"),
            s_t(a, "src") && s_8i(a).then(function(a) {
                a.load()
            })
    }
    ;
    s_dTb.prototype.Ut = function() {
        this.ka || (s_z(null , [this.$]),
        this.ka = !0)
    }
    ;
    s_dTb.prototype.hidden = s_b;
    var s_eTb = function() {
        var a = s_3i(this).querySelectorAll("g-img");
        s_g(a, function(a) {
            a = a.querySelector("IMG");
            s_t(a, "src") && s_8i(a).then(function(a) {
                a.load()
            })
        })
    }
    ;
    var s_fTb = function(a) {
        this.$ = a
    }
      , s_gTb = function(a) {
        s_U.call(this, a)
    }
    ;
    s_f(s_gTb, s_U);
    s_gTb.prototype.getItem = function() {
        return this.hb()
    }
    ;
    s_T(function(a) {
        s_R(a, "t-nlhqGANbri4", s_eTb, null , null , function(a) {
            s_eTb.call(a)
        })
    });
    s_T(function(a) {
        s_R(a, "t-nY_sx4Ofin8", s_dTb, s_fTb, s_gTb, function(a, c, d) {
            s_dTb.call(a, c, d)
        })
    });
    s_C("iuci");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy60");
    var s_Cja = function(a) {
        return null == a ? void 0 : a
    }
      , s_Dja = function(a, b) {
        var c = a.replace(/\s*,\s*/g, ",").replace(/\s+/g, ",").split(",");
        b.push.apply(b, c)
    }
      , s_Eja = function(a, b, c) {
        for (var d = 0, e = 0; e < b.length; e++) {
            for (var f = c, g = a.querySelectorAll("." + b[e]), k = g.length, l = 0; l < k; l++)
                f.push(g[l]);
            d += k
        }
        return d
    }
      , s_sj = function(a) {
        this.qa = null ;
        this.ka = [];
        this.$ = [];
        this.ma = null ;
        a = a.split(";");
        for (var b = 0; b < a.length; b++) {
            var c = a[b].split(":");
            if (2 == c.length) {
                var d = c[0].trim()
                  , c = c[1].trim();
                "ct" == d ? this.qa = c : "d" == d ? this.ma = c : "s" == d ? s_Dja(c, this.ka) : "h" == d && s_Dja(c, this.$)
            }
        }
    }
    ;
    s_sj.prototype.toString = function() {
        var a = [];
        null === this.qa || a.push("ct:" + this.qa);
        0 < this.ka.length && a.push("s:" + this.ka.join(","));
        0 < this.$.length && a.push("h:" + this.$.join(","));
        null === this.ma || a.push("d:" + this.ma);
        return a.join(";")
    }
    ;
    s_sj.prototype.logVisibilityChange = function(a, b) {
        var c = []
          , d = []
          , e = s_Eja(b, this.ka, c)
          , f = s_Eja(b, this.$, c);
        s_0a(d, s_6a(!0, e));
        s_0a(d, s_6a(!1, f));
        0 == this.ka.length && 0 == this.$.length && (d = c = null );
        s_z(a, c, d, s_Cja(this.qa), s_Cja(this.ma + (google.j && google.j.pf ? "&sqi=2" : "")))
    }
    ;
    s_sj.prototype.Gy = function(a) {
        s_A(a, s_Cja(this.qa), s_Cja(this.ma + (google.j && google.j.pf ? "&sqi=2" : "")))
    }
    ;
    var s_tj = function() {}
      , s_uj = function(a, b) {
        var c = b.node();
        if (s_Ee(c, "t")) {
            for (var d = s_3i(a), e = s_t(c, "t").replace(/\s*[,;]\s*/g, ";").replace(/\s+/g, ";").split(";"), f = 0; f < e.length; f++)
                s_Se(d, e[f]);
            (e = s_Oc(d, "xpdbox")) && s_hj(e);
            s_Ee(c, "lvc") && (e = s_t(c, "lvc") || "",
            e = new s_sj(e),
            e.logVisibilityChange(c, d),
            d = e.ka,
            e.ka = e.$,
            e.$ = d,
            s_De(c, "lvc", e.toString()));
            s_Ee(c, "li") && (d = s_t(c, "li") || "",
            (new s_sj(d)).Gy(c))
        }
    }
    ;
    s_C("sy60");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("tcc");
    s_T(function(a) {
        s_R(a, "t-27gWe8jP1p0", s_tj, null , null , function() {});
        s_S(a, "Eddvt4h-GI8", function(a, c) {
            s_uj(a, c)
        })
    });
    s_T(function(a) {
        s_R(a, "t-T0VJ361LqbA", s_tj, null , null , function() {});
        s_S(a, "Eddvt4h-GI8", function(a, c) {
            s_uj(a, c)
        })
    });
    s_T(function(a) {
        s_R(a, "t-V8TcGe6wnmo", s_tj, null , null , function() {});
        s_S(a, "Eddvt4h-GI8", function(a, c) {
            s_uj(a, c)
        })
    });
    s_T(function(a) {
        s_R(a, "t-oF0h478wPRI", s_tj, null , null , function() {})
    });
    s_T(function(a) {
        s_R(a, "t-JgTEvN6zUII", s_tj, null , null , function() {});
        s_S(a, "Eddvt4h-GI8", function(a, c) {
            s_uj(a, c)
        })
    });
    s_T(function(a) {
        s_R(a, "t-CIdVBizxsq8", s_tj, null , null , function() {});
        s_S(a, "Eddvt4h-GI8", function(a, c) {
            s_uj(a, c)
        })
    });
    s_T(function(a) {
        s_R(a, "t-2Ko5CAD9HMI", s_tj, null , null , function() {});
        s_S(a, "Eddvt4h-GI8", function(a, c) {
            s_uj(a, c)
        })
    });
    s_T(function(a) {
        s_R(a, "t-c11rjXK6AtU", s_tj, null , null , function() {});
        s_S(a, "Eddvt4h-GI8", function(a, c) {
            s_uj(a, c)
        })
    });
    s_T(function(a) {
        s_R(a, "t-tdv9tYmF56g", s_tj, null , null , function() {});
        s_S(a, "Eddvt4h-GI8", function(a, c) {
            s_uj(a, c)
        });
        s_S(a, "Eddvt4h-GI8", function(a, c) {
            s_uj(a, c)
        })
    });
    s_T(function(a) {
        s_R(a, "t-1tqLF-xg8Vc", s_tj, null , null , function() {});
        s_S(a, "Eddvt4h-GI8", function(a, c) {
            s_uj(a, c)
        })
    });
    s_T(function(a) {
        s_R(a, "t-bOmW6NJdi3Q", s_tj, null , null , function() {});
        s_S(a, "Eddvt4h-GI8", function(a, c) {
            s_uj(a, c)
        })
    });
    s_C("tcc");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy107");
    s_C("sy107");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy108");
    var s_Xl = function() {
        var a = s_Ig("istate")
          , a = "" != a && "0" != a
          , b = s_Ig("imgrc")
          , b = "" != b && "_" != b
          , c = -1 != s_Ig("flt").indexOf(";e:1")
          , d = !!s_Ig("fpstate")
          , e = !!s_Ig("mie")
          , f = !!s_Ig("sie")
          , g = !!s_Ig("aie")
          , k = !!s_Ig("pie")
          , l = !!s_Ig("trex");
        return b || a || d || e || c || f || g || k || l
    }
    ;
    s_C("sy108");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("atn");
    var s_Yl = function(a, b) {
        s_h.call(this);
        this.ma = this.$ = null ;
        this.Ea = a;
        this.qa = b || "LH"
    }
    ;
    s_f(s_Yl, s_h);
    var s_7pa = function(a, b) {
        a.$ && a.$[b] && s_g(a.$[b], function(a) {
            var c = a.listener;
            a.ay && (c = s_c(c, a.ay));
            c(new s_Uc(b))
        })
    }
    ;
    s_Yl.prototype.Wa = function() {
        switch (s_hd(s_Nd())) {
        case "unloaded":
            this.Ea.unload && s_7pa(this, "attn-ivis");
            break;
        case "hidden":
            s_7pa(this, "attn-ivis");
            break;
        case "visible":
            s_7pa(this, "attn-vis")
        }
    }
    ;
    s_Yl.prototype.listen = function(a, b, c, d, e) {
        var f = new s_Uba(c,a,b,!!d,e);
        switch (b) {
        case "attn-ivis":
        case "attn-vis":
            a = s_Nd();
            a.$() && (this.$ || (this.$ = {},
            this.ma = s_p(a, "visibilitychange", this.Wa, !1, this)),
            this.$[b] = this.$[b] || [],
            this.$[b].push(f));
            break;
        default:
            s_p(a, b, c, d, e)
        }
        return f
    }
    ;
    s_Yl.prototype.unlisten = function(a, b, c, d, e) {
        switch (b) {
        case "attn-ivis":
        case "attn-vis":
            var f = null ;
            if (this.$ && (f = this.$[b]))
                for (b = 0; b < f.length; b++)
                    if (f[b].src === a && f[b].listener === c && f[b].Ns == !!d && f[b].ay === e) {
                        s_Xa(f, b);
                        break
                    }
            break;
        default:
            s_2c(a, b, c, d, e)
        }
    }
    ;
    var s_8pa = function(a, b) {
        return 0 == b ? (s_ca.setTimeout(a, 0),
        0) : s_ca.setTimeout(a, b)
    }
      , s_9pa = function(a) {
        a.$ && a.ma && (s_3c(a.ma),
        a.ma = null );
        a.$ = null
    }
    ;
    s_Yl.prototype.Ha = function() {
        s_9pa(this)
    }
    ;
    var s_Zl = function(a) {
        s_h.call(this);
        this.Ea = a;
        this.Ia = [];
        this.Db = [];
        this.Ja = [];
        this.Ca = {}
    }
    ;
    s_f(s_Zl, s_h);
    s_Zl.prototype.addListener = function(a, b, c, d, e) {
        a && this.Ea && this.Ja.push(this.Ea.listen(a, b, c, d, e))
    }
    ;
    var s__l = function(a, b, c) {
        a.Ea && a.Db.push(s_8pa(b, c))
    }
    ;
    s_Zl.prototype.Ha = function() {
        for (var a = (this.Ia || []).length - 1; 0 <= a; a--)
            s_ca.clearInterval(this.Ia[a]);
        this.Ia = [];
        for (a = (this.Db || []).length - 1; 0 <= a; a--) {
            var b = this.Db[a];
            b && s_ca.clearTimeout(b)
        }
        this.Db = [];
        for (a in this.Ca || {})
            (b = this.Ca[a]) && s_ca.clearTimeout(b);
        this.Ca = {};
        for (a = 0; a < (this.Ja || []).length; a++)
            this.Ja[a] && (b = this.Ja[a],
            this.Ea.unlisten(b.src, b.type, b.listener, b.Ns, b.ay));
        this.Ja = [];
        this.Ea = null ;
        s_Zl.Ba.Ha.call(this)
    }
    ;
    var s_$pa = function() {
        this.y = this.x = this.$ = 0
    }
      , s_0l = function() {
        this.eventType = "";
        this.ka = 0
    }
    ;
    s_0l.prototype.qa = function() {
        return null
    }
    ;
    s_0l.prototype.ma = function() {
        return !1
    }
    ;
    s_0l.prototype.$ = function() {
        return []
    }
    ;
    var s_aqa = function(a, b) {
        var c = a.ka - b.$;
        b.$ += c;
        return c + "," + a.$().join(",")
    }
    ;
    var s_bqa = function(a) {
        s_0l.call(this);
        a = new s_Xc(a);
        this.Ea = Math.round(a.clientX);
        this.Wa = Math.round(a.clientY)
    }
    ;
    s_f(s_bqa, s_0l);
    s_bqa.prototype.$ = function() {
        return ["c", this.Ea, this.Wa]
    }
    ;
    var s_1l = 1
      , s_2l = ""
      , s_cqa = ""
      , s_dqa = function() {
        this.ka = 3E4;
        this.Ea = !1;
        this.$ = 0;
        this.ma = "";
        this.qa = !1
    }
      , s_3l = new s_dqa;
    var s_4l = function(a, b) {
        s_0l.call(this);
        this.data = b;
        this.ka = a
    }
    ;
    s_f(s_4l, s_0l);
    s_4l.prototype.$ = function() {
        return [this.data]
    }
    ;
    var s_5l = function(a) {
        s_7c.call(this);
        this.Ca = a;
        this.Da = "" + Math.random();
        this.Ea = 1;
        this.$ = [];
        this.$.push(new s_4l(s_e(),"x"));
        this.Wa = 0 - this.$.length;
        this.qa = "";
        this.ma = null
    }
    ;
    s_f(s_5l, s_7c);
    s_5l.prototype.isEmpty = function() {
        return 0 == this.$.length + this.Wa
    }
    ;
    var s_fqa = function(a) {
        var b = "&me=" + a.Ea, c;
        c = "";
        s_2l && (c += "&ei=" + s_2l);
        1 == a.Ea && (a.qa && (c += "&m=" + a.qa),
        s_3l.ma && (c += "&t=" + s_3l.ma));
        c = c + "&s=" + s_1l;
        c = c + "&v=2&pv=" + a.Da;
        for (var d = b.length + c.length, e = new s_$pa, f = !1, g = 0; g < a.$.length; g++) {
            var k = ":" + s_aqa(a.$[g], e)
              , d = d + k.length;
            if (d > a.Ca && 0 < g) {
                f = !0;
                break
            }
            b += k
        }
        return new s_eqa(c + b,f,g,e)
    }
    ;
    s_5l.prototype.reset = function() {
        this.Da = "" + Math.random();
        this.Ea = 1;
        this.$ = [];
        this.$.push(new s_4l(s_e(),"x"));
        this.Wa = 0 - this.$.length
    }
    ;
    var s_eqa = function(a, b, c, d) {
        this.$ = a || "";
        this.ka = b;
        this.ma = c || 0;
        this.qa = d
    }
    ;
    var s_6l = function(a) {
        s_Zl.call(this, a)
    }
    ;
    s_f(s_6l, s_Zl);
    s_6l.prototype.log = function() {}
    ;
    var s_gqa = s_6l;
    var s_7l = function(a, b, c, d) {
        s_Zl.call(this, b);
        this.appName = a;
        this.sender = d || new s_gqa(b);
        this.qa = c;
        this.Lb = -1;
        this.Xa = 0
    }
    ;
    s_f(s_7l, s_Zl);
    s_7l.prototype.xc = function() {}
    ;
    s_7l.prototype.Ha = function() {
        this.sender && (this.sender.dispose(),
        this.sender = null );
        this.qa = null ;
        s_7l.Ba.Ha.call(this)
    }
    ;
    var s_hqa = s_7l;
    var s_iqa = function(a, b) {
        s_0l.call(this);
        this.jj = a.button;
        this.Ca = a.which;
        this.Ea = +b;
        var c;
        a: {
            for (c = a.target || a.srcElement; c; c = c.parentNode)
                if ("getAttribute"in c) {
                    var d = c.getAttribute("data-hveid");
                    if (d) {
                        c = d;
                        break a
                    }
                }
            c = ""
        }
        this.Wa = c
    }
    ;
    s_f(s_iqa, s_0l);
    s_iqa.prototype.$ = function() {
        return ["D", this.jj, this.Ca, this.Ea, this.Wa]
    }
    ;
    var s_9l = function(a, b, c, d) {
        s_Zl.call(this, c);
        this.Ga = b;
        this.$ = new s_5l(this.Ga);
        this.ma = new s_hqa(a,c,this.$,d);
        this.Wa = !0;
        this.Da = 0;
        s_8l(this, document, "mousedown", s_c(this.YEa, this));
        s_8l(this, document, "click", s_c(this.XEa, this));
        s_3l.ka && (a = s_c(this.qa, this, !1, !1),
        this.Ea && this.Ia.push(s_ca.setInterval(a, s_3l.ka)));
        s_3l.$ && s__l(this, s_c(this.qa, this, !1, !1), 1E3 * s_3l.$)
    }
    ;
    s_f(s_9l, s_Zl);
    s_9l.prototype.qa = function(a, b) {
        this.ma && (this.ma.xc(a, b),
        14 <= this.ma.Xa && s__l(this, s_c(this.dispose, this), 0))
    }
    ;
    s_9l.prototype.log = function(a, b, c) {
        if (this.Wa) {
            a = s_nb(a);
            a.ka || (a.ka = s_e());
            s_aqa(a, new s_$pa);
            var d = this.$
              , e = a.ma(d.$);
            if (!e) {
                for (e = d.$.length; 0 < e && !(a.ka >= d.$[e - 1].ka); e--)
                    d.$[e] = d.$[e - 1];
                d.$[e] = a;
                e = 0 == e || e < d.$.length - 1
            }
            (e = e || !d.ma || !d.ma.$) ? d.ma = s_fqa(d) : d.ma.ka || (e = d.ma.$,
            e = e + ":" + s_aqa(a, d.ma.qa),
            d.Ca && e.length > d.Ca && (d.ma.ka = !0),
            d.ma.ka && 0 != d.ma.$.length || (d.ma.$ = e,
            d.ma.ma = d.$.length));
            d.dispatchEvent("attn-bfr-e-add");
            d.ma.ka && !c && this.qa(!1, b)
        }
    }
    ;
    var s_8l = function(a, b, c, d) {
        b && a.addListener(b, c, d, void 0, void 0)
    }
      , s_jqa = function(a) {
        if (a) {
            a = a.target || a.srcElement;
            for (var b = 5; 0 < b-- && a && "A" != a.nodeName; )
                a = a.parentNode;
            return !!(0 <= b && a)
        }
        return !1
    }
    ;
    s_ = s_9l.prototype;
    s_.XEa = function(a) {
        s_jqa(a) && (this.log(new s_bqa(a), !1, !0),
        s__l(this, s_c(this.N3, this, "C"), 0))
    }
    ;
    s_.YEa = function(a) {
        s_kqa(0, a) || a && s_jqa(a) && this.log(new s_iqa(a,s_kqa(2, a)))
    }
    ;
    s_.N3 = function(a) {
        if (this.ma) {
            var b = s_e();
            this.Da && 300 > b - this.Da || (this.Da = b,
            a = new s_4l(b,"e," + a),
            (this.$ && !this.$.isEmpty() || 300 < s_e() - this.ma.Lb) && this.log(a, !0, !0),
            this.qa(!0, !0))
        }
    }
    ;
    s_.Ha = function() {
        this.ma && this.$ && this.Wa && this.N3("D");
        this.ma && (this.ma.dispose(),
        this.ma = null );
        this.$ && (this.$.dispose(),
        this.$ = null );
        this.Wa = !1;
        s_9l.Ba.Ha.call(this)
    }
    ;
    s_.reset = function() {
        this.Wa = !0;
        this.Da = 0;
        this.qa(!0, !0);
        this.$ ? this.$.reset() : this.$ = new s_5l(this.Ga)
    }
    ;
    var s_kqa = function(a, b) {
        return b ? s_Iba ? b.button == a : "click" == b.type ? 0 == a : !!(b.button & s_Qba[a]) : !1
    }
    ;
    var s_$l = null
      , s_am = null
      , s_bm = function(a, b) {
        if (s_am) {
            var c = s_am;
            b ? c.N3(a) : s__l(c, s_c(c.N3, c, a), 0)
        }
    }
      , s_lqa = function() {
        s_bm("Q");
        return !0
    }
      , s_mqa = function(a) {
        s_cqa = s_2l = a.ei || google.getEI(document.body);
        var b = new s_dqa;
        b.qa = !!a.du;
        b.Ea = !!a.oslg;
        var c = function(b, c) {
            var d = parseInt(a[b], 10);
            return -1 < d ? d : c
        }
        ;
        b.ka = c("fi", b.ka);
        b.$ = c("d", b.$);
        b.ma = a.t || b.ma;
        s_3l = b
    }
    ;
    var s_rqa = function() {
        var a = s_3i(this)
          , b = a && s_ih(a) || {};
        b.ei = google.getEI(a);
        a = b.ei || google.getEI(document.body);
        s_nqa++;
        s_oqa ? a != s_2l && (s_pqa(),
        s_qqa(b, a)) : b && (s_oqa = !0,
        s_qqa(b, a))
    }
    ;
    s_f(s_rqa, s_h);
    var s_nqa = 0
      , s_oqa = !1
      , s_sqa = {}
      , s_cm = {}
      , s_qqa = function(a, b) {
        s_cqa = s_2l = b;
        s_mqa(a);
        s_$l = new s_Yl({});
        var c = s_am = new s_9l("slh",1918,s_$l);
        s_8l(c, window, "attn-ivis", s_d(s_bm, "H", !0));
        s_8l(c, window, "pagehide", s_d(s_bm, "H", !0));
        s_8l(c, window, "blur", s_d(s_bm, "B", !0));
        s_3l.qa || s_8l(c, window, "beforeunload", s_d(s_bm, "U", !0));
        s_Me(15, s_lqa);
        for (var d in s_cm)
            a[d] && (s_cm[d].init(a),
            s_sqa[d] = s_cm[d])
    }
    ;
    s_rqa.prototype.Ha = function() {
        0 < --s_nqa || !s_oqa || (s_oqa = !1,
        s_pqa(),
        s_sqa = {})
    }
    ;
    var s_pqa = function() {
        for (var a in s_sqa)
            s_sqa[a].dispose();
        s_am && s_am.dispose();
        s_$l && s_9pa(s_$l);
        s_am = s_$l = null
    }
    ;
    s_T(function(a) {
        s_R(a, "t-xJZnhKySAM0", s_rqa, null , null , function(a) {
            s_rqa.call(a)
        })
    });
    var s_tqa = {
        click: "c",
        mouseout: "o",
        mouseover: "i",
        mousedown: "d",
        mouseup: "u"
    };
    var s_dm = function(a) {
        s_0l.call(this);
        this.Ea = a
    }
    ;
    s_f(s_dm, s_0l);
    s_dm.prototype.ma = function(a) {
        var b = s_tqa.mouseover
          , c = this.Ea;
        if (!c || this.eventType != b)
            return !1;
        for (var b = s_tqa.mouseout, d = a.length - 1; 0 <= d && !(2 < this.ka - a[d].ka); d--)
            if (a[d].eventType == b && a[d].qa() === c) {
                for (c = d; c < a.length - 1; c++)
                    a[c] = a[c + 1];
                a.pop();
                return !0
            }
        return !1
    }
    ;
    s_dm.prototype.qa = function() {
        return this.Ea
    }
    ;
    var s_uqa = function(a, b, c) {
        s_dm.call(this, c);
        this.Wa = a;
        this.eventType = b
    }
    ;
    s_f(s_uqa, s_dm);
    s_uqa.prototype.$ = function() {
        return ["H", this.Wa, this.eventType]
    }
    ;
    var s_vqa = function(a) {
        this.$ = a
    }
      , s_wqa = ["mouseover", "mouseout"];
    s_vqa.prototype.start = function(a) {
        if (a) {
            a = document.querySelectorAll("[data-hveid]");
            for (var b = 0; b < a.length; b++)
                for (var c = 0; c < s_wqa.length; c++) {
                    var d = s_wqa[c]
                      , e = new s_uqa(a[b].getAttribute("data-hveid"),s_tqa[d],a[b]);
                    s_8l(this.$, a[b], d, s_c(this.$.log, this.$, e, !1, !1))
                }
        }
    }
    ;
    s_vqa.prototype.stop = function() {}
    ;
    var s_em = {
        init: function() {
            var a = s_am;
            if (a) {
                var b = a.$;
                0 > b.qa.indexOf("H") && (b.qa += "H");
                s_em.cq = new s_vqa(a);
                s_em.cq.start(!0)
            }
        },
        dispose: function() {
            s_em.cq && (s_em.cq.stop(),
            s_em.cq = null )
        },
        cq: null
    };
    s_cm.lhe = s_em;
    var s_xqa = function(a, b) {
        a.Ea += b;
        0 < b && a.$.splice(0, b);
        a.Wa = 0;
        a.ma = null ;
        0 < a.$.length && (a.ma = s_fqa(a))
    }
      , s_gm = function(a, b, c, d) {
        s_7l.call(this, a, b, c, d);
        this.ma = s_2l ? "s-" + s_2l : "s-" + s_e() + "-" + Math.round(1E10 * Math.random());
        this.rb = (google.j ? google.j.u : null ) || "x";
        this.rk = null ;
        a = google.j && google.j.u ? "local" : "session";
        (c = s_Tf(a, b.qa)) || "local" != a || (c = s_Tf("session", b.qa));
        this.$ = c;
        this.Za = {};
        this.Ka = !1;
        this.Wa = [];
        this.Ga = {};
        this.Da = {};
        this.nb = 0;
        this.Ma = {};
        this.qa && this.$ && this.addListener(this.qa, "attn-bfr-e-add", this.Rb, !1, this);
        b = s_1l - 1;
        a = s_1l - 1;
        c = null ;
        this.$ && (c = s_yqa(this, this.ma, !0));
        c && (b = c.$,
        a = c.ka);
        s_1l = a + 1;
        this.rk = new s_zqa(this.ma,b,a,s_e(),this.rb);
        if (this.$) {
            b = this.rk;
            for (a = b.$ + 1; a <= b.ka; a++)
                c = "tab-" + this.ma + "-dt-" + a,
                (d = s_fm(this, c)) && (this.Ga[c] = new s_Aqa(c,this.ma,d,a));
            b = s_c(this.Kb, this);
            this.Ea && this.Ia.push(s_ca.setInterval(b, 500));
            s__l(this, s_c(this.Pb, this), 500)
        }
    }
    ;
    s_f(s_gm, s_7l);
    s_gm.prototype.Rb = function() {
        this.Ka = !0
    }
    ;
    s_gm.prototype.xc = function(a, b) {
        var c = !(s_3l.Ea && b) || "x" == this.rb;
        if (this.$) {
            var d = a || b || !1 || !c;
            if (this.Ka || d) {
                for (var e = this.rk, f = 10; 0 < f-- && this.qa && !this.qa.isEmpty(); ) {
                    var g = this.qa.ma;
                    if (!g || !g.$)
                        break;
                    var k = s_1l
                      , l = "tab-" + this.ma + "-dt-" + k;
                    this.Ga[l] = new s_Aqa(l,this.ma,g.$,k);
                    if (g.ka || d)
                        e.ka = k,
                        k = this.rk,
                        k.ma = s_e(),
                        s_hm(this, "tabs-md-" + this.ma, s_Bqa(k)),
                        k = s_fm(this, "tabs") || {},
                        k[this.ma] || (k[this.ma] = !0,
                        s_hm(this, "tabs", k)),
                        100 > e.ka - e.$ && s_1l++,
                        s_hm(this, l, g.$),
                        this.Xa++,
                        s_xqa(this.qa, g.ma);
                    else
                        break
                }
                this.Ka = !1
            }
            if (c && this.sender) {
                var c = [], m;
                for (m in this.Ga) {
                    if (6 <= c.length)
                        break;
                    d = this.Ga[m];
                    d.index >= s_1l || this.Za[m] || c.push(d)
                }
                for (m in this.Da) {
                    if (6 <= c.length)
                        break;
                    !this.Za[m] && this.Da[m] && c.push(this.Da[m])
                }
                if (0 < c.length)
                    for (m = !0,
                    d = s_e(),
                    this.Wa = this.Wa || [],
                    e = 0; e < c.length && 6 > e && (m || a || b); e++)
                        m = !1,
                        this.Lb = s_e(),
                        f = c[e],
                        this.sender.log(this.appName, f.message),
                        f.ka = d,
                        this.Wa.push(f),
                        this.Za[f.$] = !0
            }
        } else
            c && this.qa && !this.qa.isEmpty() && this.sender && (f = this.qa.ma) && f.$ && (s_1l++,
            s_xqa(this.qa, f.ma),
            this.Xa++,
            this.sender.log(this.appName, f.$))
    }
    ;
    s_gm.prototype.Pb = function() {
        s_Cqa(this);
        s__l(this, s_c(function() {
            s_Dqa(this);
            var a = !1;
            s_fm(this, "tabs");
            var b = {}, c;
            for (c in this.Ma) {
                a = !0;
                b[c] = !0;
                var d = this.Ma[c];
                if (d) {
                    for (var e = d.ka, d = d.$ + 1; d <= e; d++)
                        s_Eqa(this, "tab-" + c + "-dt-" + d);
                    s_Eqa(this, "tabs-md-" + c)
                }
            }
            if (a) {
                a = s_fm(this, "tabs") || {};
                for (c in b)
                    delete a[c];
                s_hm(this, "tabs", a)
            }
            this.Ma = {}
        }, this), 1)
    }
    ;
    s_gm.prototype.Ha = function() {
        this.$ && (this.$ = null );
        this.Wa = [];
        this.Ga = {};
        this.Da = {};
        this.Za = {};
        this.Ma = {};
        s_gm.Ba.Ha.call(this)
    }
    ;
    var s_Dqa = function(a) {
        if (!(2E-4 < Math.random()) && "x" != a.rb) {
            var b = s_Jea(a.Ea.qa);
            if (b) {
                var c = /^tabs-md-/, d = /^tab-(.*?)-dt-[0-9]+$/, e = /^tabs-ld-.*$/, f = [], g, k = {};
                s_he(b.ii(!0), function(a) {
                    c.test(a) ? f.push(a.replace(c, "")) : null != (g = d.exec(a)) ? k[a] = g[1] : e.test(a) ? k[a] = a : "tabs-ad" == a && (k[a] = a)
                });
                for (var b = s_fm(a, "tabs") || {}, l = 0; l < f.length; l++)
                    b[f[l]] = !0;
                s_hm(a, "tabs", b);
                for (var m in k)
                    k[m]in b || s_Eqa(a, m)
            }
        }
    }
      , s_Cqa = function(a) {
        var b = s_fm(a, "tabs") || {};
        var c = s_gb(b)
          , d = c.length
          , e = Math.floor(Math.random() * c.length);
        if (0 != e) {
            for (var f = {}, g = 0; g < d; g++,
            e++)
                e >= d && (e %= d),
                f[c[e]] = b[c[e]];
            b = f
        }
        var c = 15, k;
        for (k in b)
            if (k != a.ma) {
                if (0 >= c--)
                    break;
                s__l(a, s_c(a.Ub, a, k), 1)
            }
    }
    ;
    s_gm.prototype.Ub = function(a) {
        if (!(40 <= this.nb)) {
            var b = s_yqa(this, a), c;
            b ? b.tabId == this.ma ? c = !1 : (c = s_e() - 864E5,
            c = b.ma && b.ma > c && b.$ < b.ka ? !1 : !0) : c = !0;
            if (c)
                this.Ma[a] = b;
            else if (!b || b.userId == this.rb)
                for (c = b.$ + 1; c <= b.ka && !(40 <= this.nb); c++) {
                    var d = "tab-" + a + "-dt-" + c;
                    if (!s_a(this.Da[d])) {
                        this.Da[d] = null ;
                        var e = s_fm(this, d);
                        e && (this.Da[d] = new s_Aqa(d,a,e,c),
                        this.nb++)
                    }
                }
        }
    }
    ;
    var s_yqa = function(a, b, c) {
        return c || b != a.ma ? (a = s_fm(a, "tabs-md-" + b)) ? a.tabId ? new s_zqa(a.tabId,a.lastSent,a.savedIndex,a.lastTS,a.uid) : null : null : a.rk
    }
    ;
    s_gm.prototype.Kb = function() {
        if (this.Wa && 0 != this.Wa.length) {
            for (var a = {}, b = s_e() - 250; 0 < this.Wa.length && !(this.Wa[0].ka && this.Wa[0].ka > b); ) {
                var c = this.Wa.shift();
                a[c.tabId] = c.index;
                s_Eqa(this, c.$);
                delete this.Ga[c.$];
                delete this.Da[c.$];
                delete this.Za[c.$]
            }
            for (var d in a)
                if (b = s_yqa(this, d))
                    c = a[d],
                    c > b.$ && (b.$ = c,
                    s_hm(this, "tabs-md-" + d, s_Bqa(b)))
        }
    }
    ;
    var s_fm = function(a, b) {
        if (!a.$)
            return null ;
        try {
            return a.$.get(b)
        } catch (c) {
            a.$.remove(b)
        }
        return null
    }
      , s_hm = function(a, b, c) {
        if (a.$)
            try {
                a.$.set(b, c)
            } catch (d) {}
    }
      , s_Eqa = function(a, b) {
        if (a.$)
            try {
                a.$.remove(b)
            } catch (c) {}
    }
      , s_Aqa = function(a, b, c, d) {
        this.$ = a;
        this.tabId = b;
        this.message = c;
        this.index = d;
        this.ka = 0
    }
      , s_zqa = function(a, b, c, d, e) {
        this.tabId = a;
        this.$ = b || 0;
        this.ka = c || 0;
        this.ma = d || 0;
        this.userId = e
    }
      , s_Bqa = function(a) {
        var b = {};
        if (!a || !a.tabId)
            return null ;
        b.tabId = a.tabId;
        b.lastSent = a.$;
        b.savedIndex = a.ka;
        b.lastTS = a.ma;
        b.uid = a.userId;
        return b
    }
      , s_hqa = s_gm;
    var s_Gqa = function(a) {
        s_Zl.call(this, a);
        this.$ = null != window.navigator && null != navigator.sendBeacon
    }
    ;
    s_f(s_Gqa, s_6l);
    s_Gqa.prototype.log = function(a, b) {
        var c = google.logUrl(a, b);
        c && (this.$ && navigator.sendBeacon(c, "") || google.log(a, b))
    }
    ;
    s_gqa = s_Gqa;
    var s_Hqa = function(a, b) {
        if (null != a.Ca[b]) {
            var c = a.Ca[b];
            c && s_ca.clearTimeout(c);
            delete a.Ca[b]
        }
    }
      , s_Iqa = function(a, b, c, d, e) {
        if (a.Ca[d]) {
            if (!e)
                return;
            (e = a.Ca[d]) && s_ca.clearTimeout(e)
        }
        a.Ca[d] = s_8pa(b, c)
    }
      , s_Jqa = function(a) {
        s_0l.call(this);
        this.Ea = a
    }
    ;
    s_f(s_Jqa, s_0l);
    s_Jqa.prototype.$ = function() {
        return ["A", this.Ea ? 1 : 0]
    }
    ;
    var s_Kqa = function(a) {
        s_0l.call(this);
        this.Ea = a
    }
    ;
    s_f(s_Kqa, s_0l);
    s_Kqa.prototype.$ = function() {
        return ["I", this.Ea ? 1 : 0]
    }
    ;
    var s_Lqa = function(a, b) {
        s_0l.call(this);
        this.Ea = b;
        this.ka = a
    }
    ;
    s_f(s_Lqa, s_0l);
    s_Lqa.prototype.$ = function() {
        return ["U", this.Ea]
    }
    ;
    var s_Mqa = function(a, b, c) {
        s_0l.call(this);
        this.deltaX = b;
        this.deltaY = c;
        this.ka = a
    }
    ;
    s_f(s_Mqa, s_0l);
    s_Mqa.prototype.$ = function() {
        return 0 == this.deltaX ? ["S", this.deltaY] : ["S", this.deltaX, this.deltaY]
    }
    ;
    var s_jm = function(a, b, c, d) {
        this.ek = a;
        this.Af = b;
        this.Sc = c;
        this.Rc = d;
        this.$ = Math.round(c / 50);
        this.ka = Math.round(d / 50)
    }
    ;
    s_jm.prototype.clone = function() {
        return new s_jm(this.ek,this.Af,this.Sc,this.Rc)
    }
    ;
    var s_Nqa = function(a) {
        return a.ek + "," + a.Af + "," + a.Sc + "," + a.Rc
    }
      , s_Oqa = function(a, b) {
        return !!b && Math.abs(a.Sc - b.Sc) <= b.$ && Math.abs(a.Rc - b.Rc) <= b.ka
    }
      , s_Pqa = function(a, b) {
        return !!b && Math.abs(a.ek - b.ek) <= b.$ && Math.abs(a.Af - b.Af) <= b.ka && s_Oqa(a, b)
    }
      , s_Qqa = function(a, b) {
        var c = !!b && s_Oqa(a, b);
        c && (a.Sc = b.Sc,
        a.Rc = b.Rc,
        a.$ = b.$,
        a.ka = b.ka);
        return c
    }
      , s_Rqa = function(a, b) {
        var c = Math.max(a.ek, b.ek)
          , d = Math.min(a.ek + a.Sc, b.ek + b.Sc);
        return Math.max(a.Af, b.Af) < Math.min(a.Af + a.Rc, b.Af + b.Rc) && c < d
    }
    ;
    var s_km = function(a, b) {
        this.ka = s_e();
        this.$ = a ? new s_jm(Math.round(window.pageXOffset),Math.round(window.pageYOffset),Math.round(window.innerWidth),Math.round(window.innerHeight)) : b ? b : new s_jm(0,0,0,0)
    }
    ;
    var s_lm = function() {
        s_7c.call(this);
        this.Ea = !0;
        this.Ca = s_e();
        this.$ = null ;
        this.Da = this.qa = this.Wa = !1;
        this.Bt = null ;
        this.clientHeight = 0;
        this.ma = []
    }
    ;
    s_f(s_lm, s_7c);
    s_lm.prototype.Ha = function() {
        this.$ = null ;
        this.ma = [];
        s_lm.Ba.Ha.call(this)
    }
    ;
    s_lm.prototype.reset = function() {
        this.Ea = !0;
        this.Ca = s_e();
        this.$ = null ;
        this.qa = !1;
        this.ma = [];
        this.Bt = null
    }
    ;
    var s_Sqa = {
        nNa: "istate",
        kNa: "fpstate",
        mOa: "mie",
        nPa: "sie",
        LNa: "imgrc",
        iNa: "flt",
        bMa: "aie",
        XOa: "pie"
    };
    var s_mm = function(a, b, c) {
        s_Zl.call(this, a);
        this.ma = b;
        this.$ = c
    }
    ;
    s_f(s_mm, s_Zl);
    s_mm.prototype.Ha = function() {
        this.ma = this.$ = null ;
        s_mm.Ba.Ha.call(this)
    }
    ;
    s_mm.prototype.Wa = function() {
        var a = s_e();
        this.$.Ea || (this.ma.log(new s_Lqa(a,a - this.$.Ca)),
        this.$.Ea = !0,
        s_nm(this, new s_km(!0), !0),
        this.$.dispatchEvent("attn-vs-chg"));
        this.$.Ca = a
    }
    ;
    s_mm.prototype.Ma = function() {
        this.$.Ea && (this.$.Ca = s_e(),
        s_nm(this, new s_km, !0),
        this.$.dispatchEvent("attn-vs-chg"));
        this.$.Ea = !1
    }
    ;
    var s_nm = function(a, b, c) {
        if (a.$.Ea || a.$.Wa) {
            var d = a.$.$;
            if (!a.$.Wa && d && s_Qqa(b.$, d.$)) {
                var e = b.$.ek - d.$.ek
                  , d = b.$.Af - d.$.Af;
                0 == e && 0 == d || a.ma.log(new s_Mqa(b.ka,e,d))
            } else
                a.ma.log(new s_4l(b.ka,"V," + s_Nqa(b.$)));
            a.$.Wa = !1;
            a.$.$ = b;
            c || a.$.dispatchEvent("attn-vs-chg")
        }
    }
    ;
    var s_om = function(a, b, c) {
        s_mm.call(this, a, b, c);
        s_zg("lh-im", s_c(this.Ga, this));
        this.qa = s_c(this.Da, this, !0);
        s_Me(182, this.qa)
    }
    ;
    s_f(s_om, s_mm);
    s_om.prototype.Ga = function() {
        if (this.$) {
            var a = s_Xl()
              , b = s_qa(s_rg.ka, "/amp");
            if (a != this.$.qa || b != this.$.Da) {
                if (a != this.$.qa) {
                    this.$.qa = a;
                    if (this.$.qa) {
                        this.$.Bt = null ;
                        for (var c in s_Sqa) {
                            var d = s_Sqa[c];
                            if (s_Ig(d)) {
                                this.$.Bt = d;
                                break
                            }
                        }
                    } else
                        this.$.Bt = null ;
                    this.ma.log(new s_Kqa(a))
                }
                b != this.$.Da && (this.$.Da = b,
                this.ma.log(new s_Jqa(b)),
                this.$.Wa = !0);
                s_Iqa(this, s_c(this.Da, this, !1), 1E3, "dcst", !0)
            }
        }
    }
    ;
    s_om.prototype.Da = function(a) {
        if (this.$.$) {
            var b = s_e();
            this.$.$.ka = b;
            a && this.ma.log(new s_4l(s_e(),"T"));
            this.$.dispatchEvent("attn-dom-chg");
            s_Hqa(this, "dcst")
        }
    }
    ;
    s_om.prototype.Ha = function() {
        s_Ag("lh-im");
        s_Ne(182, this.qa);
        s_om.Ba.Ha.call(this)
    }
    ;
    var s_Tqa = function(a, b, c) {
        s_mm.call(this, a, b, c);
        this.addListener(window, "attn-ev-preload", s_c(this.qa, this));
        s_6c(window, "attn-ev-ready", null )
    }
    ;
    s_f(s_Tqa, s_mm);
    s_Tqa.prototype.qa = function(a) {
        if (a && a.length && 0 != a.length) {
            this.ma.log(new s_4l(a[0][0],"x"));
            for (var b = 0; b < a.length; b++)
                if ("v" == a[b][1]) {
                    var c = a[b]
                      , d = new s_km(!1,new s_jm(c[2][0],c[2][1],c[2][2],c[2][3]));
                    d.ka = c[0];
                    var e = this.$.$;
                    e && s_Qqa(d.$, e.$) ? (c = d.$.ek - e.$.ek,
                    e = d.$.Af - e.$.Af,
                    0 == c && 0 == e || this.ma.log(new s_Mqa(d.ka,c,e))) : this.ma.log(new s_4l(d.ka,"V," + s_Nqa(d.$)));
                    this.$.$ = d
                } else
                    "e" == a[b][1] && this.ma.log(new s_4l(a[b][0],"e,B"))
        }
    }
    ;
    var s_Uqa = function(a, b) {
        s_0l.call(this);
        this.Nca = b;
        this.ka = a
    }
    ;
    s_f(s_Uqa, s_0l);
    s_Uqa.prototype.$ = function() {
        return ["F", this.Nca]
    }
    ;
    var s_Vqa = function(a, b, c) {
        s_mm.call(this, a, b, c);
        this.qa = {};
        a = s_lc("g-scrolling-carousel");
        for (b = 0; b < a.length; b++)
            for (var d = c = a[b]; d != document.body; ) {
                if (d.getAttribute("data-hveid")) {
                    d = d.getAttribute("data-hveid");
                    this.addListener(c, "_custom", s_c(this.Da, this, d));
                    break
                }
                d = d.parentNode
            }
    }
    ;
    s_f(s_Vqa, s_mm);
    s_Vqa.prototype.Da = function(a, b) {
        if (b) {
            var c = s_e();
            if (!(this.qa[a] + 500 >= c)) {
                var d = b.ka && b.$ || b.event_;
                d && d.detail && "sc_se" == d.detail.type && (this.qa[a] = c,
                this.ma.log(new s_Uqa(s_e(),a)))
            }
        }
    }
    ;
    var s_Wqa = function(a) {
        s_0l.call(this);
        this.cGa = a
    }
    ;
    s_f(s_Wqa, s_0l);
    s_Wqa.prototype.$ = function() {
        return ["N", this.cGa]
    }
    ;
    var s_Xqa = function(a, b) {
        s_0l.call(this);
        var c = new s_Xc(b)
          , d = c.clientX || 0
          , c = c.clientY || 0
          , e = a.Aa.getBoundingClientRect();
        this.Wa = Math.round(d - e.left);
        this.Ca = Math.round(c - e.top);
        this.Ea = a.getId()
    }
    ;
    s_f(s_Xqa, s_0l);
    s_Xqa.prototype.$ = function() {
        return ["g", this.Ea, this.Wa, this.Ca]
    }
    ;
    var s_Yqa = function(a, b, c) {
        s_mm.call(this, a, b, c);
        this.qa = s_oc();
        this.ma.log(new s_4l(s_e(),"B," + this.qa));
        this.$.clientHeight = this.qa;
        this.addListener(this.$, "attn-g-clk", this.Ga, !1, this)
    }
    ;
    s_f(s_Yqa, s_mm);
    s_Yqa.prototype.Ga = function() {
        s_Iqa(this, s_c(this.Da, this), 1E3, "vchc")
    }
    ;
    s_Yqa.prototype.Da = function() {
        s_Hqa(this, "vchc");
        s_Hqa(this, "vchrc");
        if (!this.$.qa) {
            var a = s_oc();
            a != this.qa ? (this.qa = a,
            s_Iqa(this, s_c(this.Da, this), 100, "vchrc")) : this.$.clientHeight != this.qa && (this.$.clientHeight = this.qa,
            this.ma.log(new s_4l(s_e(),"B," + this.qa)),
            s_nm(this, new s_km(!0), !0),
            this.$.$ && (a = s_e(),
            this.$.$.ka = a,
            this.$.dispatchEvent("attn-vs-chg")))
        }
    }
    ;
    var s_pm = function(a, b, c) {
        s_mm.call(this, a, b, c);
        this.addListener(window, "resize", this.Da, !1, this);
        this.addListener(window, "scroll", this.Da, !1, this);
        this.Wa();
        this.qa()
    }
    ;
    s_f(s_pm, s_mm);
    s_pm.prototype.Da = function() {
        this.Wa();
        s_Iqa(this, s_c(this.qa, this), 500, "rptv")
    }
    ;
    s_pm.prototype.qa = function() {
        s_nm(this, new s_km(!0));
        s_Hqa(this, "rptv")
    }
    ;
    var s_qm = function(a, b, c) {
        s_mm.call(this, a, b, c);
        this.qa = [];
        this.Da();
        this.addListener(c, "attn-ve-chg", this.Da, !1, this)
    }
    ;
    s_f(s_qm, s_mm);
    s_qm.prototype.Da = function() {
        s_Zqa(this);
        for (var a = 0; a < this.$.ma.length; a++) {
            var b = this.$.ma[a];
            this.qa.push(this.Ea.listen(b.Aa, "click", s_c(this.Ga, this, b), !0))
        }
    }
    ;
    var s_Zqa = function(a) {
        for (var b = 0; b < a.qa.length; b++)
            if (a.qa[b]) {
                var c = a.qa[b];
                a.Ea.unlisten(c.src, c.type, c.listener, c.Ns, c.ay)
            }
        a.qa = []
    }
    ;
    s_qm.prototype.Ga = function(a, b) {
        a && a.Aa && (this.ma.log(new s_Xqa(a,b), !1, !0),
        this.$.dispatchEvent("attn-g-clk"))
    }
    ;
    s_qm.prototype.Ha = function() {
        s_Zqa(this);
        s_qm.Ba.Ha.call(this)
    }
    ;
    var s_0qa = function(a, b, c) {
        this.$ = this.ka = null ;
        this.Aa = a;
        this.jd = b;
        c && s__qa(this)
    }
    ;
    s_0qa.prototype.getId = function() {
        return this.jd
    }
    ;
    var s_1qa = function(a) {
        if (a.getBoundingClientRect && "visible" == (s_md(a, "visibility") || "visible"))
            try {
                var b = a.getBoundingClientRect();
                return new s_jm(Math.round(b.left + window.pageXOffset),Math.round(b.top + window.pageYOffset),Math.round(a.offsetWidth),Math.round(a.offsetHeight))
            } catch (c) {}
        return new s_jm(0,0,0,0)
    }
      , s__qa = function(a) {
        var b = s_1qa(a.Aa);
        a.$ && s_Pqa(b, a.$) || (a.$ = b)
    }
    ;
    var s_rm = function(a, b, c) {
        s_mm.call(this, a, b, c);
        this.qa = !1;
        this.Ga = null ;
        this.rb = this.Za = 0;
        this.Xa = this.$.clientHeight;
        this.Da = null ;
        this.addListener(c, "attn-vs-chg", this.Ka, !1, this);
        this.addListener(c, "attn-dom-chg", this.nb, !1, this);
        this.$.$ && (s_2qa(this, this.$.$),
        this.Da = this.$.$)
    }
    ;
    s_f(s_rm, s_mm);
    var s_3qa = function(a) {
        for (var b = s_e(), c = a.$.ma, d = 0; d < c.length; d++)
            s__qa(c[d]);
        c = s_e();
        a.rb = c;
        a.Za = c - b
    }
      , s_4qa = function(a) {
        switch (a.$.Bt) {
        case "istate":
        case "pie":
        case "sie":
        case "flt":
        case "fpstate":
            return document.querySelector("body>.qs-ic");
        case "imgrc":
            return document.getElementById("irc_bg");
        case "mie":
            return document.getElementById("oid-tlsv")
        }
        return null
    }
      , s_5qa = function(a, b) {
        for (var c = [], d = a.$.ma, e = 0; e < d.length; e++) {
            var f = d[e]
              , g = s_Rqa(f.$, b.$);
            if (g && (null == f.ka || f.ka && !s_Pqa(f.$, f.ka)) || !g && f.ka && s_Rqa(f.ka, b.$))
                c.push(f),
                f.ka = f.$.clone()
        }
        if (c.length)
            for (d = b.ka,
            e = 0; e < c.length; e++)
                f = c[e],
                a.ma.log(new s_4l(d,"E," + (f.jd + "," + s_Nqa(f.$))))
    }
    ;
    s_rm.prototype.nb = function() {
        if (this.$.$) {
            var a = null ;
            window.google && ("mie" == this.$.Bt && (a = document.querySelector("[eid][data-hveid]")),
            google.getEI && (a = google.getEI(a),
            a != s_cqa && (s_cqa = a,
            this.ma.log(new s_Wqa(a)))));
            this.$.ma = [];
            this.qa = !1;
            s_2qa(this, this.$.$)
        }
    }
    ;
    var s_2qa = function(a, b) {
        var c;
        if (a.qa) {
            c = a.Za;
            var d;
            a.Ga ? (d = a.Ga.$,
            d = !s_Pqa(s_1qa(a.Ga.Aa), d)) : d = !a.qa;
            var e = s_e() - a.rb;
            c = d ? 20 < c && 1E3 >= e : !(5 >= c && 50 < e)
        } else
            c = !1;
        if (!c)
            if (a.qa)
                s_3qa(a);
            else {
                if (!a.qa) {
                    d = document;
                    a.$.qa && (d = s_4qa(a));
                    c = [];
                    d = d && d.querySelectorAll && d.querySelectorAll("[data-hveid]") || [];
                    for (e = 0; e < d.length; e++) {
                        var f = d[e];
                        c.push(new s_0qa(f,f.getAttribute("data-hveid")))
                    }
                    a.$.ma = c;
                    s_3qa(a);
                    c = null ;
                    for (d = 0; d < a.$.ma.length; d++) {
                        e = a.$.ma[d];
                        if (!(f = !c))
                            var f = c.$
                              , g = e.$
                              , f = !!g && (f.Af < g.Af || f.Af == g.Af && f.ek < g.ek);
                        f && (c = e)
                    }
                    a.Ga = c;
                    a.qa = !0
                }
                a.$.dispatchEvent("attn-ve-chg")
            }
        s_5qa(a, b)
    }
    ;
    s_rm.prototype.Ha = function() {
        this.Da = null ;
        this.$.ma = [];
        s_rm.Ba.Ha.call(this)
    }
    ;
    s_rm.prototype.Ka = function() {
        this.$.$ && (this.Xa == this.$.clientHeight && this.Da && s_Qqa(this.Da.$, this.$.$.$) ? s_5qa(this, this.$.$) : s_2qa(this, this.$.$),
        this.Da = this.$.$,
        this.Xa = this.$.clientHeight)
    }
    ;
    var s_sm = function(a, b, c) {
        s_mm.call(this, a, b, c);
        this.qa = !1;
        this.addListener(window, "attn-ivis", this.Ma, !1, this);
        this.addListener(window, "pagehide", this.Ga, !1, this);
        this.addListener(window, "blur", this.Ma, !1, this);
        this.addListener(window, "attn-vis", this.Wa, !1, this);
        this.addListener(window, "focus", this.Wa, !1, this);
        this.addListener(window, "pageshow", this.Da, !1, this)
    }
    ;
    s_f(s_sm, s_mm);
    s_sm.prototype.Ga = function() {
        this.qa = !0;
        this.Ma()
    }
    ;
    s_sm.prototype.Da = function() {
        this.$ && this.ma && (this.qa ? (this.qa = !1,
        this.$.reset(),
        this.ma.reset(),
        this.Wa(),
        s_nm(this, new s_km(!0), !0),
        this.$.dispatchEvent("attn-dom-chg")) : this.Wa())
    }
    ;
    var s_6qa = function() {
        this.ka = new s_lm;
        this.$ = []
    }
    ;
    s_6qa.prototype.start = function(a, b) {
        this.$.push(new s_pm(a,b,this.ka));
        this.$.push(new s_sm(a,b,this.ka));
        this.$.push(new s_rm(a,b,this.ka));
        this.$.push(new s_qm(a,b,this.ka))
    }
    ;
    s_6qa.prototype.stop = function() {
        if (this.$)
            for (var a = 0; a < this.$.length; a++)
                this.$[a].dispose();
        this.$ = []
    }
    ;
    var s_tm = {
        init: function() {
            var a = s_$l
              , b = s_am;
            if ("getBoundingClientRect"in document.body && "pageXOffset"in window && "innerWidth"in window && a && b) {
                var c = b.$;
                0 > c.qa.indexOf("V") && (c.qa += "V");
                var c = s_tm.cq = new s_6qa, d;
                d = s_tm.cq.ka;
                var e = new s_Tqa(a,b,d);
                c.$.push(e);
                e = new s_pm(a,b,d);
                c.$.push(e);
                e = new s_sm(a,b,d);
                c.$.push(e);
                e = new s_om(a,b,d);
                c.$.push(e);
                e = new s_Yqa(a,b,d);
                c.$.push(e);
                e = new s_rm(a,b,d);
                c.$.push(e);
                e = new s_qm(a,b,d);
                c.$.push(e);
                a = new s_Vqa(a,b,d);
                c.$.push(a)
            }
        },
        dispose: function() {
            s_tm.cq && (s_tm.cq.stop(),
            s_tm.cq = null )
        },
        cq: null
    };
    s_cm.lve = s_tm;
    s_C("atn");
    s_E();
} catch (e) {
    _DumpException(e)
}
// Google Inc.
