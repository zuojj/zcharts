/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-10-18 23:26:59
 * @version $Id$
 */

try {
    var s_zia, s_ii, s_Aia, s_ji;
    s_D("sy39");
    var s_ki = s_b,
        s_li = s_8c(0),
        s_mi = s_8c(0),
        s_ni = s_8c(0),
        s_Bia = function(a, b) {
            window.scrollBy(a, b)
        },
        s_oi = function(a, b) {
            window.scrollTo(a, b)
        },
        s_pi = s_9c,
        s_qi = s_9c,
        s_Cia = s_$a.match(/ GSA\/([.\d]+)/),
        s_ri = s_Cia ? s_Cia[1] : "";
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
        },
        s_Dia = s_b,
        s_Eia = s_b;
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
    var s_rja = {},
        s_sja = function(a, b) {
            if (!s_da("velour.loadJsInterface")) return s_$e("No Velour.");
            a in s_rja || (s_rja[a] = {});
            var c = s_rja[a];
            if (c[b]) return c[b];
            var d = s_bf(),
                e = window.velour.loadJsInterface(a, b),
                f = "google.velourCb." + a + "." + b;
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
        },
        s_tja = function(a, b, c, d) {
            for (var e = s_sja(a, b), f = [], g = 3; g < arguments.length; g++) f.push(arguments[g]);
            return e.then(function(a) {
                return a[c] ? a[c].apply(a, f) : s_$e(c + " not found")
            })
        };

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
    var s_N0a = !1,
        s_O0a = null,
        s_Q0a = function() {
            var a = s_P0a;
            s_1c(window, "beforeunload", function() {
                s_N0a || s_O0a.set("isn", a)
            })
        };
    if (s_ji) {
        var s_O0a = s_Tf("session", "isn"),
            s_P0a, s_R0a, s_S0a, s_T0a = s_Ig("isn").split(":");
        s_S0a = s_T0a[0];
        s_R0a = s_T0a[1];
        (s_P0a = s_S0a ? s_qb(s_R0a, s_S0a) : null) && s_Q0a()
    };

    s_C("sy306");
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
            for (var b = "", c = 21, d = 0; d < a.length; d++) 3 != d % 4 && (b += String.fromCharCode(a[d] ^ c), c++);
            return b
        },
        s_eTa = s_zv([97, 119, 115, 111, 107]),
        s_fTa = s_zv([120, 116, 82, 108, 118, 125]),
        s_gTa = s_zv([97, 119, 115, 111, 107, 123]),
        s_hTa = s_zv([118, 115, 121, 107, 108, 124, 104, 119, 68, 127, 114, 105, 114]),
        s_iTa = s_zv([101, 126, 118, 102, 118, 125, 118, 109, 126]),
        s_jTa = s_zv([116, 116, 115, 108]),
        s_kTa = s_zv([102, 115, 116, 107]),
        s_lTa = s_zv([113, 119, 118, 111]),
        s_mTa = s_zv([113, 115, 99, 107]),
        s_nTa = s_zv([113, 115, 101, 107]),
        s_oTa = s_zv([113, 115,
            117, 107
        ]),
        s_pTa = s_zv([122, 100, 103, 124, 112, 120, 116, 107, 104]),
        s_qTa = s_zv([58, 127, 122, 103, 121, 126, 127, 98, 104, 51, 109, 124, 118, 123, 15, 76, 70, 68, 79, 95, 10, 66, 79, 97, 65]),
        s_rTa = s_zv([58, 127, 122, 103, 121, 126, 127, 98, 104, 51, 109, 124, 118, 123, 15, 76, 81, 90, 13, 95, 67, 76, 64, 118]),
        s_sTa = function() {
            var a = s_i(s_eTa),
                b = s_i(s_fTa),
                c = s_i(s_gTa);
            return a || b || c ? s_zb() && (a && 4E3 < s_gf(a, s_pTa, !1) || b && 4E3 < s_gf(b, s_pTa, !1) || c && 4E3 < s_gf(c, s_pTa, !1)) ? 1 : 0 : 0
        },
        s_tTa = function(a) {
            var b = 0,
                c;
            for (c in a)
                if (a[c].e)
                    if (a[c].b) b++;
                    else return !1;
            return 0 < b
        },
        s_uTa = function(a) {
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
        },
        s_vTa = function(a) {
            var b = [],
                c;
            for (c in a) a[c].e && b.push(c + ":" + (a[c].b ? "1" : "0"));
            return b.join(",")
        },
        s_wTa = function(a, b) {
            var c = String(a);
            b && (c += "," + b);
            google.log(s_iTa, c)
        },
        s_xTa = function(a, b, c) {
            c = null != c ? c : 2;
            if (1 > c) s_wTa(7, b);
            else {
                var d = new Image;
                d.onerror = s_d(s_xTa, a, b, c - 1);
                d.src = a
            }
        };
    s_we("abd", {
        init: function(a) {
            a = a || {};
            if (a[s_jTa] && s_vj(s_hTa)) {
                var b = s_uTa(a),
                    c = s_vTa(b);
                s_tTa(b) ? (b = a[s_kTa] ? 0 : s_sTa(), s_wTa(1, String(b) + "," + c)) : s_wTa(0, c);
                a[s_lTa] && s_Ef(function() {
                    s_xTa(s_rTa, "aa")
                });
                a[s_kTa] || (s_xTa(s_qTa, "gfl"), a[s_lTa] || s_xTa(s_rTa, "aa"))
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
        },
        s_Bma = function(a) {
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
        };
    s_D("sy73");
    var s_bk = function(a) {
        s_7c.call(this);
        this.headers = new s_je;
        this.rb = a || null;
        this.ma = !1;
        this.Db = this.$ = null;
        this.Ia = "";
        this.qa = 0;
        this.Ga = "";
        this.Da = this.nb = this.Za = this.Ka = !1;
        this.Wa = 0;
        this.Ja = null;
        this.Ea = "";
        this.xc = this.Ca = !1
    };
    s_f(s_bk, s_7c);
    var s_Cma = /^https?$/i,
        s_Dma = ["POST", "PUT"],
        s_Ema = [],
        s_ck = function(a, b, c, d, e, f, g) {
            var k = new s_bk;
            s_Ema.push(k);
            b && k.listen("complete", b);
            k.Ma.add("ready", k.Pb, !0, void 0, void 0);
            f && (k.Wa = Math.max(0, f));
            g && (k.Ca = g);
            k.send(a, c, d, e);
            return k
        };
    s_bk.prototype.Pb = function() {
        this.dispose();
        s_Ya(s_Ema, this)
    };
    s_bk.prototype.send = function(a, b, c, d) {
        if (this.$) throw Error("p`" + this.Ia + "`" + a);
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
            this.nb = !0, this.$.open(b, String(a), !0), this.nb = !1
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
        !s_Ta(s_Dma, b) ||
            d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(a, b) {
            this.$.setRequestHeader(b, a)
        }, this);
        this.Ea && (this.$.responseType = this.Ea);
        "withCredentials" in this.$ && this.$.withCredentials !== this.Ca && (this.$.withCredentials = this.Ca);
        try {
            s_Gma(this), 0 < this.Wa && ((this.xc = s_Hma(this.$)) ? (this.$.timeout = this.Wa, this.$.ontimeout = s_c(this.Ij, this)) : this.Ja = s_Xf(this.Ij, this.Wa, this)), this.Za = !0, this.$.send(a), this.Za = !1
        } catch (f) {
            this.Ni(5, f)
        }
    };
    var s_Hma = function(a) {
            return s_Jb && s_Tb(9) && s_ka(a.timeout) && s_a(a.ontimeout)
        },
        s_Fma = function(a) {
            return s_Kea("Content-Type", a)
        };
    s_bk.prototype.Xa = function() {
        return this.rb ? this.rb.$() : s_4h()
    };
    s_bk.prototype.Ij = function() {
        "undefined" != typeof s_kaa && this.$ && (this.Ga = "Timed out after " + this.Wa + "ms, aborting", this.qa = 8, this.dispatchEvent("timeout"), this.abort(8))
    };
    s_bk.prototype.Ni = function(a, b) {
        this.ma = !1;
        this.$ && (this.Da = !0, this.$.abort(), this.Da = !1);
        this.Ga = b;
        this.qa = a;
        s_Ima(this);
        s_Jma(this)
    };
    var s_Ima = function(a) {
        a.Ka || (a.Ka = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
    s_bk.prototype.abort = function(a) {
        this.$ && this.ma && (this.ma = !1, this.Da = !0, this.$.abort(), this.Da = !1, this.qa = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), s_Jma(this))
    };
    s_bk.prototype.Ha = function() {
        this.$ && (this.ma && (this.ma = !1, this.Da = !0, this.$.abort(), this.Da = !1), s_Jma(this, !0));
        s_bk.Ba.Ha.call(this)
    };
    s_bk.prototype.Kb = function() {
        this.isDisposed() || (this.nb || this.Za || this.Da ? s_Kma(this) : this.Ub())
    };
    s_bk.prototype.Ub = function() {
        s_Kma(this)
    };
    var s_Kma = function(a) {
            if (a.ma && "undefined" != typeof s_kaa && (!a.Db[1] || 4 != s_dk(a) || 2 != a.getStatus()))
                if (a.Za && 4 == s_dk(a)) s_Xf(a.Kb, 0, a);
                else if (a.dispatchEvent("readystatechange"), 4 == s_dk(a)) {
                a.ma = !1;
                try {
                    a.isSuccess() ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.qa = 6, a.Ga = s_Lma(a) + " [" + a.getStatus() + "]", s_Ima(a))
                } finally {
                    s_Jma(a)
                }
            }
        },
        s_Jma = function(a, b) {
            if (a.$) {
                s_Gma(a);
                var c = a.$,
                    d = a.Db[0] ? s_b : null;
                a.$ = null;
                a.Db = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        },
        s_Gma = function(a) {
            a.$ && a.xc && (a.$.ontimeout = null);
            s_ka(a.Ja) && (s_Yf(a.Ja), a.Ja = null)
        };
    s_bk.prototype.dd = function() {
        return !!this.$
    };
    s_bk.prototype.isSuccess = function() {
        var a = this.getStatus(),
            b;
        if (!(b = s_Bma(a))) {
            if (a = 0 === a) a = s_2d(String(this.Ia))[1] || null, !a && s_ca.self && s_ca.self.location && (a = s_ca.self.location.protocol, a = a.substr(0, a.length - 1)), a = !s_Cma.test(a ? a.toLowerCase() : "");
            b = a
        }
        return b
    };
    var s_dk = function(a) {
        return a.$ ? a.$.readyState : 0
    };
    s_bk.prototype.getStatus = function() {
        try {
            return 2 < s_dk(this) ? this.$.status : -1
        } catch (a) {
            return -1
        }
    };
    var s_Lma = function(a) {
        try {
            return 2 < s_dk(a) ? a.$.statusText : ""
        } catch (b) {
            return ""
        }
    };
    s_bk.prototype.Hm = function() {
        try {
            return this.$ ? this.$.responseText : ""
        } catch (a) {
            return ""
        }
    };
    var s_ek = function(a, b) {
            if (a.$) {
                var c = a.$.responseText;
                b && 0 == c.indexOf(b) && (c = c.substring(b.length));
                return s_pe(c)
            }
        },
        s_fk = function(a) {
            try {
                if (!a.$) return null;
                if ("response" in a.$) return a.$.response;
                switch (a.Ea) {
                    case "":
                    case "text":
                        return a.$.responseText;
                    case "arraybuffer":
                        if ("mozResponseArrayBuffer" in a.$) return a.$.mozResponseArrayBuffer
                }
                return null
            } catch (b) {
                return null
            }
        };
    s_bk.prototype.getResponseHeader = function(a) {
        return this.$ && 4 == s_dk(this) ? this.$.getResponseHeader(a) : void 0
    };
    s_bk.prototype.getAllResponseHeaders = function() {
        return this.$ && 4 == s_dk(this) ? this.$.getAllResponseHeaders() : ""
    };
    var s_gk = function(a) {
        return s_ja(a.Ga) ? a.Ga : String(a.Ga)
    };

    s_C("sy73");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Mma = function(a) {
        for (var b in a) return a[b]
    };
    s_D("sy72");
    var s_Nma = function(a) {
        var b = [];
        s_bb(a, function(a, d) {
            b.push(encodeURIComponent(d) + ":" + encodeURIComponent(a))
        });
        return b.join(",")
    };
    var s_Oma = "authuser deb e esrch expflags expid fesp gl hl host hotel_dates hotel_ds noj ogdeb opti opts optq optt mergelabel mlp plugin rlst skew_host source_ip ssl_dbg st tbcp tbs useragent uuld uule v".split(" "),
        s_Pma = function() {
            return ""
        },
        s_Sma = function(a, b, c, d, e, f, g, k) {
            b = s_Qma(b, d, e, g, f);
            k && (b.q = encodeURIComponent(k));
            s_pb(b, c);
            return s_Pma(b) + "/async/" + a + s_Rma(b)
        },
        s_Tma = function(a, b, c, d, e, f, g) {
            var k = "/search",
                l = b.q,
                m = b.start;
            delete b.q;
            delete b.start;
            b = s_Qma(b, d, e, !1, f);
            void 0 != l && (b.q = encodeURIComponent(l));
            void 0 != m && (b.start = m);
            g && (b.sns = "1", k = "/s");
            b.asearch = a;
            s_pb(b, c);
            return k + s_Rma(b)
        },
        s_Qma = function(a, b, c, d, e) {
            var f = {};
            d && (f.dfsl = 1);
            (a = s_Nma(a)) && (f.async = a);
            b && (a = new s_He, s_mg(a, b), (b = s_Ke(a)) && (f.vet = s_9d(b, "vet")));
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
        },
        s_Rma = function(a) {
            if (s_jb(a)) return "";
            var b = [];
            s_bb(a, function(a, d) {
                b.push(d + "=" + a)
            });
            return "?" + b.join("&")
        };
    var s_hk = function(a, b, c, d, e, f, g, k, l) {
            b._fmt = c;
            a = s_Sma(a, b, l || {}, d, e, k, g, f);
            return s_Uma(a, c)
        },
        s_Vma = function(a, b, c, d, e, f, g, k) {
            b._fmt = "jspb";
            b.q = c;
            a = s_Tma(a, b, d || {}, e, f, g, k);
            return s_Uma(a, "jspb")
        },
        s_Uma = function(a, b) {
            var c = s_bf();
            s_ck(a, function(a) {
                var d = a.target,
                    f = d.Hm();
                if ("complete" == a.type && d.isSuccess())
                    if (s_qa(f, ")]}'\n") && (f = f.substr(5)), "json" == b) {
                        var g;
                        try {
                            JSON ? g = JSON.parse(f) : g = s_qe(f)
                        } catch (k) {
                            c.reject(k)
                        }
                        s_ma(g) && (g = s_Mma(g), a = g.__err__, s_a(a) && c.reject(a));
                        c.resolve(g)
                    } else c.resolve(f);
                else c.reject(void 0)
            }, void 0, void 0, void 0, void 0, !1);
            return c.Mc
        };

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
        },
        s_Xma = function(a) {
            var b, c = a.parentNode;
            if (c && 11 != c.nodeType)
                if (a.removeNode) a.removeNode(!1);
                else {
                    for (; b = a.firstChild;) c.insertBefore(b, a);
                    s_n(a)
                }
        },
        s_Yma = function(a, b) {
            for (var c = b; c = c.previousSibling;)
                if (c == a) return -1;
            return 1
        },
        s_Zma = function(a, b) {
            var c = a.parentNode;
            if (c == b) return -1;
            for (var d = b; d.parentNode != c;) d = d.parentNode;
            return s_Yma(d, a)
        },
        s__ma = function(a) {
            if (!a) return {};
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
        },
        s_0ma = function() {
            var a = s_ng(),
                a = s_Qj(a);
            if (!a.q) {
                var b = s_Qj(s_Ze());
                b.q && (a.q = b.q, s_$d().hash = s_Rj(a))
            }
        },
        s_ik = function(a) {
            null != a && s_Ed(a) && s_Mb && (a.style.display = "none", s_Gb(a.offsetHeight), a.style.display = "")
        },
        s_1ma = function(a) {
            a > s__e ? s_0e = 1 : a < s__e && (s_0e = 2)
        },
        s_2ma = function(a, b) {
            for (var c = a.search(s_8d), d = 0, e, f = []; 0 <= (e = s_7d(a, d, b, c));) {
                d = a.indexOf("&", e);
                if (0 > d || d > c) d =
                    c;
                e += b.length + 1;
                f.push(s_wa(a.substr(e, d - e)))
            }
            return f
        },
        s_3ma = function(a, b) {
            if (a == b) return 0;
            if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
            if (s_Jb && !s_Ub(9)) {
                if (9 == a.nodeType) return -1;
                if (9 == b.nodeType) return 1
            }
            if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
                var c = 1 == a.nodeType,
                    d = 1 == b.nodeType;
                if (c && d) return a.sourceIndex - b.sourceIndex;
                var e = a.parentNode,
                    f = b.parentNode;
                return e == f ? s_Yma(a, b) : !c && s_Hc(e, b) ? -1 * s_Zma(a, b) : !d && s_Hc(f, a) ? s_Zma(b, a) : (c ? a.sourceIndex :
                    e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
            }
            d = s_gc(a);
            c = d.createRange();
            c.selectNode(a);
            c.collapse(!0);
            d = d.createRange();
            d.selectNode(b);
            d.collapse(!0);
            return c.compareBoundaryPoints(s_ca.Range.START_TO_END, d)
        },
        s_4ma = function(a, b) {
            var c = {};
            s_g(a, function(d, e) {
                c[b.call(void 0, d, e, a)] = d
            });
            return c
        };
    s_D("sy75");
    var s_5ma = !1,
        s_jk = {
            preload: "yp",
            filled: "yf",
            inlined: "yi"
        },
        s_6ma = s_ob(s_jk),
        s_7ma = {
            loading: "yl",
            error: "ye"
        },
        s_8ma = s_ob(s_7ma),
        s_9ma = {
            preload: "asyncReset",
            filled: "asyncFilled",
            loading: "asyncLoading",
            error: "asyncError"
        },
        s_$ma = function() {};
    s_f(s_$ma, Error);
    var s_kk = function(a) {
            this.element = a;
            this.type = s_t(a, "asyncType") || "";
            if (!this.type) throw a = new s_$ma, s_de(a), a;
        },
        s_lk = function(a) {
            var b = s_t(a, "asyncTrigger");
            if (b) {
                if (a = s_i(b)) return new s_kk(a);
                a = new s_$ma;
                s_de(a);
                throw a;
            }
            return new s_kk(a)
        };
    s_kk.prototype.getState = function() {
        var a = s_Oe(this.element);
        return s_Sa(s_Na(a, function(a) {
            return s_6ma[a]
        }), s_bd)
    };
    var s_ana = function(a) {
        a = s_Oe(a.element);
        return s_Sa(s_Na(a, function(a) {
            return s_8ma[a]
        }), s_bd) || ""
    };
    s_kk.prototype.setState = function(a) {
        s_bna(this, a);
        "filled" == a && s_g(this.element.querySelectorAll("." + s_jk.inlined), function(a) {
            s_bna(new s_kk(a), "filled")
        })
    };
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
        },
        s_bna = function(a, b) {
            s_Qe(a.element, s_fb(s_jk));
            s_w(a.element, s_jk[b]);
            s_mk(a, "");
            s_Og(a.element, s_9ma[b], {
                state: b,
                Z7: ""
            })
        },
        s_cna = function(a) {
            return (a = s_t(a.element, "asyncContextRequired")) ? a.split(",") : []
        },
        s_nk = function(a, b, c, d) {
            this.target = a;
            this.trigger = c;
            c = b = s_nb(b);
            var e;
            var f = this.trigger || this.target.element;
            e = s_cna(this.target);
            var g = b;
            if (e.length) {
                e =
                    new s_oe(e);
                for (var g = new s_oe(s_gb(g)), k = {}; f && null != f.parentNode && !s_Uca(e, g);) {
                    var l = s_t(f, "asyncContext");
                    if (l)
                        for (var l = l.split(";"), m = 0; m < l.length; ++m) {
                            var n = l[m].split(":");
                            2 == n.length ? (n[0] = s_wa(n[0]), n[1] = s_wa(n[1]), e.contains(n[0]) && !g.contains(n[0]) && (k[n[0]] = n[1], g.add(n[0]))) : s_de(Error("W"), {
                                cxt: l[m]
                            })
                        }
                    f = f.parentNode
                }
                e = k
            } else e = {};
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
        },
        s_ok = function(a, b, c, d) {
            if (s_Fc(a)) e = s_lk(a), a = s_t(a, "asyncTrigger") ? a : void 0;
            else {
                var e = a;
                a = c
            }
            return new s_nk(e, b || {}, a, d)
        },
        s_dna = function(a, b, c) {
            var d;
            d = b.getStatus() ? Error("vd") : Error("wd");
            d.details = {
                s: b.getStatus()
            };
            c && (d.details.e = c);
            0 == b.getStatus() && s_de(d, d.details);
            a.reject(d)
        },
        s_ena = function(a) {
            if ("POST" == a.Mr) var b = {},
                c = {};
            else b =
                a.context, c = a.$;
            var d = s_Ge(a.target.element),
                e = a.trigger ? s_Ge(a.trigger) : void 0,
                f = a.trigger ? google.getLEI(a.trigger) : void 0;
            return ("search" == a.ka ? s_Tma : s_Sma)(a.target.type, b, c, d, e, f)
        },
        s_fna = function(a) {
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
        };
    s_nk.prototype.fetch = function() {
        var a;
        a = new s_oe(s_cna(this.target));
        var b = {};
        s_pb(b, this.context);
        s_pb(b, this.$);
        b = new s_oe(s_gb(b));
        s_Uca(a, b) ? a = !0 : (a = s_$ea(a, b).Xc().join(","), s_de(Error("U"), {
            type: this.target.type,
            cxt: a
        }), a = !1);
        return a ? s_gna(this) : s_$e(void 0)
    };
    var s_gna = function(a) {
            var b = s_bf(),
                c = s_ena(a),
                c = c + (s_hda && s_1e ? s_2e() : ""),
                d = a.target.type;
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
                                var d = JSON.parse(a),
                                    e = d.__err__;
                                if (s_a(e)) s_dna(b, c, e);
                                else return s_9ja(d)
                            } catch (ba) {
                                s_Ig("deb") ? k.push(ba) : (s_dna(b, c), s_de(ba, {
                                    a: "1"
                                }))
                            }
                        }), s_bd);
                        (e = c.getResponseHeader("Version")) && s_1ma(parseInt(e, 10));
                        b.resolve(a)
                    } else s_dna(b,
                        c);
                else s_dna(b, c), s_de(Error("V"), {
                    type: d
                })
            }, a.Mr, s_fna(a), void 0, void 0, s_5ma);
            return b.Mc
        },
        s_hna = function() {
            s_g(document.querySelectorAll("." + s_jk.inlined), function(a) {
                s_bna(new s_kk(a), "filled")
            })
        },
        s_qk = function(a) {
            var b = s_lk(a);
            return "preload" != b.getState() || "loading" == s_ana(b) ? s_B(void 0) : s_pk(a, void 0, void 0, void 0)
        },
        s_pk = function(a, b, c, d, e) {
            if (b instanceof s_je) {
                var f = b;
                b = {};
                f.forEach(function(a, c) {
                    b[c] = a
                })
            }
            var g = e ? s_ok(s_lk(a), b, e) : s_ok(a, b);
            a = c || 1;
            1 != a && (d = d ? d(g.context) : g.context, s_ina(g.target.element.id,
                g.target.type, d, a));
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
        },
        s_rk = function(a, b) {
            var c = s_ok(a, b);
            s_mk(c.target, "loading");
            return s_df(c.fetch().then(function(a) {
                s_g(a, function(a) {
                    (new s_Dj(a.Pl, s_Gj.Et())).append(a)
                });
                c.target.setState("filled")
            }), function(a) {
                s_mk(c.target, "error");
                throw a;
            })
        },
        s_sk = function(a, b, c) {
            return s_ok(a, b, c, void 0).fetch()
        },
        s_uk = function(a) {
            a = s_ok(a);
            delete s_tk[a.target.element.id];
            s_Cg("async", s_jna(), !1);
            s_wc(a.target.element);
            s_Xga(a.target.element.id);
            a.target.setState("preload")
        },
        s_kna = function(a, b, c) {
            this.id = a;
            this.type = b;
            this.context = c
        },
        s_lna = function(a) {
            if (!a) return null;
            var b = s_Bh(a, ",", 1);
            a = b[0];
            var b = s__ma(b[1]),
                c = b._id || a;
            s_kb(b, "_id");
            return new s_kna(c, a, b)
        };
    s_kna.prototype.yb = function() {
        var a = s_nb(this.context);
        this.id != this.type && (a._id = this.id);
        return s_jb(a) ? this.type : this.type + "," + s_Nma(a)
    };
    s_kna.prototype.apply = function() {
        var a = document.getElementById(this.id);
        if (!a) return !1;
        if (s_t(a, "asyncDisableReplay")) return !0;
        s_pk(a, this.context);
        return !0
    };
    var s_mna = function(a) {
            a = s_Na(a.split(";"), s_lna);
            a = s_Ma(a, function(a) {
                return null != a
            });
            return s_4ma(a, function(a) {
                return a.id
            })
        },
        s_jna = function() {
            var a = s_Na(s_fb(s_tk), function(a) {
                return a.yb()
            });
            return s_Ma(a, function(a) {
                return null != a
            }).join(";")
        },
        s_tk = {},
        s_nna = "",
        s_ina = function(a, b, c, d) {
            1 != d && (c = s_cb(c, function(a, b) {
                return "_id" != b
            }), s_tk[a] = new s_kna(a, b, c), a = s_jna(), a != s_nna && (s_Cg("async", a, 3 == d), s_Nj && s_0ma()))
        },
        s_ona = function(a, b) {
            s_nna = a;
            if (b) s_tk = s_mna(a), s_Ma(s_fb(s_tk), function(a) {
                return !a.apply()
            });
            else {
                var c = s_mna(a),
                    d;
                for (d in s_tk)
                    if (!(d in c)) {
                        var e = document.getElementById(d);
                        e && s_uk(e)
                    }
                for (d in c) {
                    var f = c[d],
                        e = s_tk[d];
                    e && s_1f(e.context, f.context) || (e = document.getElementById(d)) && s_pk(e, f.context)
                }
            }
        };
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
    };
    s_f(s__f, s_h);
    s__f.prototype.start = function() {
        this.$.start();
        this.ma.start(this.$);
        this.Mb.start(this.Ca)
    };
    s__f.prototype.Wa = function() {
        var a = this.ma,
            b = this.$;
        a.$ = s_e();
        a.ma = a.$ - a.qa - b.$;
        a.qa = a.$;
        a = this.ma;
        1E3 < a.$ - a.Ea && 66.4 > a.ma ? (this.$.stop(), this.qa.call(), s_8a(this)) : 66.4 <= this.ma.ma && (this.$.stop(), this.Ea.call(), s_8a(this))
    };
    var s_0f = function(a) {
        this.O_ = a
    };
    s_Vd(s_0f, s__f);
    s_0f.prototype.start = function(a) {
        s_Ve(a, !0)
    };
    s_Xd(s_0f.prototype.start);
    var s_Lea = function() {
        this.Ea = this.ma = this.qa = this.$ = 0
    };
    s_f(s_Lea, s_h);
    s_Lea.prototype.start = function() {
        this.Ea = this.qa = this.$ = s_e()
    };
    var s_Mea = function(a, b, c) {
        (new s__f(new s_Lea, a, b, c)).start()
    };

    s_C("sy9");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy284");
    var s_gXa = function(a, b, c) {
        this.ka = a;
        this.Nh = b.name || null;
        this.$ = {};
        for (a = 0; a < c.length; a++) b = c[a], this.$[b.$] = b
    };
    s_gXa.prototype.getName = function() {
        return this.Nh
    };
    var s_hXa = function(a) {
        a = s_fb(a.$);
        s_5a(a, function(a, c) {
            return a.$ - c.$
        });
        return a
    };
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
    };
    s_hx.prototype.getName = function() {
        return this.Nh
    };
    var s_iXa = function(a) {
        return 11 == a.ka || 10 == a.ka
    };
    s_hx.prototype.Zj = function() {
        return this.Wa
    };
    s_hx.prototype.aAa = function() {
        return this.Ca
    };
    s_hx.prototype.ccb = function() {
        return !this.Wa && !this.Ca
    };
    var s_ix = function() {
        this.Vi = {};
        this.ka = this.getDescriptor().$;
        this.$ = this.ma = null
    };
    s_ = s_ix.prototype;
    s_.has = function(a) {
        return null != this.Vi[a.$]
    };
    s_.get = function(a, b) {
        return s_jx(this, a.$, b)
    };
    s_.set = function(a, b) {
        s_kx(this, a.$, b)
    };
    s_.add = function(a, b) {
        s_jXa(this, a.$, b)
    };
    s_.clear = function(a) {
        a = a.$;
        delete this.Vi[a];
        this.$ && delete this.$[a]
    };
    s_.equals = function(a) {
        if (!a || this.constructor != a.constructor) return !1;
        for (var b = s_hXa(this.getDescriptor()), c = 0; c < b.length; c++) {
            var d = b[c],
                e = d.$;
            if (null != this.Vi[e] != (null != a.Vi[e])) return !1;
            if (null != this.Vi[e]) {
                var f = s_iXa(d),
                    g = s_lx(this, e),
                    e = s_lx(a, e);
                if (d.Zj()) {
                    if (g.length != e.length) return !1;
                    for (d = 0; d < g.length; d++) {
                        var k = g[d],
                            l = e[d];
                        if (f ? !k.equals(l) : k != l) return !1
                    }
                } else if (f ? !g.equals(e) : g != e) return !1
            }
        }
        return !0
    };
    var s_kXa = function(a, b) {
        for (var c = s_hXa(a.getDescriptor()), d = 0; d < c.length; d++) {
            var e = c[d],
                f = e.$;
            if (null != b.Vi[f]) {
                a.$ && delete a.$[e.$];
                var g = s_iXa(e);
                if (e.Zj())
                    for (var e = s_lx(b, f) || [], k = 0; k < e.length; k++) s_jXa(a, f, g ? e[k].clone() : e[k]);
                else e = s_lx(b, f), g ? (g = s_lx(a, f)) ? s_kXa(g, e) : s_kx(a, f, e.clone()) : s_kx(a, f, e)
            }
        }
    };
    s_ix.prototype.clone = function() {
        var a = new this.constructor;
        a != this && (a.Vi = {}, a.$ && (a.$ = {}), s_kXa(a, this));
        return a
    };
    var s_lx = function(a, b) {
            var c = a.Vi[b];
            return null == c ? null : a.ma ? b in a.$ ? a.$[b] : (c = a.ma.ma(a.ka[b], c), a.$[b] = c) : c
        },
        s_jx = function(a, b, c) {
            var d = s_lx(a, b);
            return a.ka[b].Zj() ? d[c || 0] : d
        },
        s_kx = function(a, b, c) {
            a.Vi[b] = c;
            a.$ && (a.$[b] = c)
        },
        s_jXa = function(a, b, c) {
            a.Vi[b] || (a.Vi[b] = []);
            a.Vi[b].push(c);
            a.$ && delete a.$[b]
        },
        s_mx = function(a, b) {
            var c = [],
                d = b[0],
                e;
            for (e in b) 0 != e && c.push(new s_hx(0, e, b[e]));
            return new s_gXa(a, d, c)
        };

    s_C("sy284");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy320");
    var s_rz, s_C2a = 0,
        s_sz = function(a, b, c) {
            this.ma = a;
            this.Qc = b;
            this.qa = c
        };
    s_sz.prototype.$ = !1;
    s_sz.prototype.ka = 0;
    s_sz.prototype.get = function() {
        if ((!this.$ || this.ka < s_C2a) && s_rz && this.ma + "-config" in s_rz) {
            var a = s_rz[this.ma + "-config"][this.Qc],
                b = s_C2a;
            this.Jc = void 0 !== a ? a : this.qa;
            this.$ = !0;
            this.ka = b
        }
        if (!this.$) throw Error("Qb");
        return this.Jc
    };

    s_C("sy320");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy5");
    var s_yea = function() {
            s_xea(this)
        },
        s_zea = null,
        s_xea = function(a) {
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
                } else c(5)
            }, a))
        },
        s_Aea = function() {
            new s_yea;
            return new s_9e(function(a, b) {
                var c =
                    window.agsa_ext;
                s_a(c) ? s_a(c.getNetworkConnectionType) ? (c = c.getNetworkConnectionType(), "WIFI" != c && "ETHERNET" != c && "CELL_4G" != c ? b(4) : s_zea.then(a, b)) : b(3) : b(1)
            })
        };
    s_yea.prototype.ka = function(a, b) {
        b.launch(a)
    };
    s_yea.prototype.$ = function(a) {
        try {
            s_de(Error("gd`" + a))
        } catch (b) {}
    };
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
        if (!b || !c && !a) return 4;
        var d = window.agsa_ext;
        if (!s_a(d)) return 1;
        if (c) {
            if (!s_a(d.canLaunchApp)) return 2;
            if (!d.canLaunchApp(b)) return 3
        } else {
            if (!s_a(d.canUriBeHandledByPackage)) return 2;
            if (!d.canUriBeHandledByPackage(a || "", b)) return 3
        }
        return 0
    };

    s_C("sy11");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Lia = function(a) {
            return s_sc().matchMedia("(min-resolution: " + a + "dppx),(min--moz-device-pixel-ratio: " + a + "),(min-resolution: " + 96 * a + "dpi)").matches ? a : 0
        },
        s_Mia = function() {
            var a = s_sc();
            return s_a(a.devicePixelRatio) ? a.devicePixelRatio : a.matchMedia ? s_Lia(3) || s_Lia(2) || s_Lia(1.5) || s_Lia(1) || .75 : 1
        };
    s_D("sy55");
    var s_Nia, s_Oia, s_wi = function() {
            var a = s_8h(0, !0),
                b = s_8h(1, !0);
            return a < b
        },
        s_Pia = function() {
            this.$ = !!(window.orientation % 180)
        },
        s_Qia = function() {
            var a = s_Ig("client"),
                b = s_Ig("source");
            return !(!/^mobilesearchapp/.test(a) && !/^mobilesearchapp/.test(b))
        },
        s_xi = [],
        s_Ria = !1,
        s_yi = function(a) {
            if (window.addEventListener) {
                for (var b = 0; b < s_xi.length; b++)
                    if (s_xi[b] == a) return;
                s_xi.push(a);
                s_Ria || (s_Nia = window.orientation, s_Oia = window.innerWidth, "orientation" in window && !s_Qia() && window.addEventListener("orientationchange",
                    s_Sia, !1), window.addEventListener("resize", s_Qia() ? s_Tia : s_Sia, !1), s_Ria = !0)
            }
        },
        s_zi = function(a) {
            for (var b = 0; b < s_xi.length; b++)
                if (s_xi[b] == a) {
                    s_xi.splice(b, 1);
                    break
                }
        },
        s_Sia = function() {
            if (!("orientation" in window && !s_Qia() && window.orientation == s_Nia || window.innerWidth == s_Oia)) {
                var a = new s_Pia;
                s_Nia = window.orientation;
                s_Oia = window.innerWidth;
                for (var b = 0; b < s_xi.length; b++) s_7e(s_d(s_xi[b], a))
            }
        },
        s_Tia = function() {
            window.setTimeout(s_Sia, 10)
        };

    s_C("sy55");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy321");
    var s_D2a = new s_sz("devloc", "geo_gcpf", !1),
        s_E2a = new s_sz("devloc", "geo_eha", !1);
    var s_tz = !1,
        s_F2a = !1,
        s_G2a = new s_sz("devloc", "cont_cache", !0),
        s_H2a = new s_sz("devloc", "cont_no_clear_watch", !1),
        s_I2a = new s_sz("devloc", "cont_api_tracker", !1);
    s_C("sy321");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_uz = function(a, b, c, d, e, f) {
        this.lat = a || null;
        this.Rg = b || null;
        this.Wi = c || null;
        this.ma = !!d;
        this.ka = e || null;
        this.$ = f || null
    };
    s_uz.prototype.toString = function() {
        return "{lat:" + this.lat + ", lon:" + this.Rg + ", acc:" + this.Wi + ", isCached:" + this.ma + ", ts:" + this.ka + ", addr:" + this.$ + "}"
    };
    s_D("sy322");
    var s_vz = function() {
        s_ix.call(this)
    };
    s_f(s_vz, s_ix);
    var s_J2a = null;
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
    };
    s_vz.getDescriptor = s_vz.prototype.getDescriptor;
    var s_K2a = new s_sz("devloc", "cookie_secure", !0),
        s_L2a = new s_sz("devloc", "cookie_timeout", 86400),
        s_M2a = new s_sz("devloc", "cookie_domain", ""),
        s_N2a = function(a) {
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
        };

    s_C("sy322");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy28");
    var s_pha = function(a, b) {
            var c = s_4h();
            if (s_oha(b)) c.open("GET", a, !1), c.send(), s_We(b);
            else {
                var d = s_F(function() {
                    c && c.abort();
                    s_We(b)
                }, 2E3);
                c.onreadystatechange = function() {
                    4 == c.readyState && (s_Gf(d), s_We(b))
                };
                c.open("GET", a, !0);
                c.send(null)
            }
        },
        s_5h = function(a, b, c, d, e, f, g) {
            a = "/gen_204?sa=X&ei=" + google.getEI(a) + "&ved=" + encodeURIComponent(b) + (e ? "&lei=" + encodeURIComponent(e) : "") + (d ? "&url=" + encodeURIComponent(d) : "") + (f ? "&title=" + encodeURIComponent(f) : "");
            void 0 != g && (a = a + "&ct=clpit&cad=" + encodeURIComponent(f + ":" + (g ? "1" : "0")));
            s_pha(a, c)
        },
        s_oha = function(a) {
            return s_Bb() && s_kf() && !s_Fb("2.4") && 0 != a.indexOf("tel:")
        };
    s_oa("google.bct", s_pha);
    s_oa("google.vbct", s_5h);

    s_C("sy28");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_O2a = null,
        s_P2a = function(a) {
            this.ma = a || navigator.geolocation;
            this.$ = this.Ea = this.Wa = this.ka = null;
            this.qa = 0
        },
        s_S2a = function() {
            var a = s_O2a,
                b = s_Q2a,
                c = s_R2a;
            null == a.ka && (a.$ = null, a.Wa = b, a.Ea = c, b = s_c(a.Ca, a), c = {
                enableHighAccuracy: s_E2a.get(),
                timeout: 3E4,
                maximumAge: 15E3
            }, s_D2a.get() ? a.ma.getCurrentPosition(b, b, c) : a.ka = a.ma.watchPosition(b, b, c))
        },
        s_T2a = function(a) {
            s_D2a.get() || null == a.ka || (a.ma.clearWatch(a.ka), a.ka = null)
        };
    s_P2a.prototype.Ca = function(a) {
        if (!a || "code" in a) this.$ || this.Ea(a);
        else {
            var b;
            !this.$ || this.$.coords.accuracy > a.coords.accuracy ? (this.$ = a, this.qa = 0, b = !1) : (this.qa++, 10 <= this.qa && s_T2a(this), b = !0);
            b || (b = a.coords, this.Wa(new s_uz(b.latitude, b.longitude, a.coords.accuracy, !1, +a.timestamp)))
        }
    };
    var s_wz = function() {
            return s_Tf("local", "devloc")
        },
        s_U2a = function() {
            if (!s_O2a) {
                var a;
                "geolocation" in navigator && (a = navigator.geolocation);
                s_O2a = new s_P2a(a)
            }
        },
        s_xz = null,
        s_yz = null,
        s_zz = function(a, b, c) {
            b = "udla=3&e=" + b;
            c && (b += "&d=" + c);
            a(b)
        },
        s_V2a = function() {
            var a = s_wz();
            if (!s_G2a.get() || !a) return null;
            try {
                var b = Number(a.get("web.gws.devloc.lat")),
                    c = Number(a.get("web.gws.devloc.lon")),
                    d = Number(a.get("web.gws.devloc.acc")),
                    e = Number(a.get("web.gws.devloc.ts"));
                if (b && c && d && e && 3E5 >= s_e() - e) return new s_uz(b,
                    c, d, !0, e)
            } catch (f) {}
            return null
        },
        s_R2a = function(a) {
            s_F2a = !0;
            s_xz && s_xz.T0(a);
            s_yz.error.call(s_yz, a)
        },
        s_Q2a = function(a) {
            var b = s_wz();
            if (!a.ma && s_G2a.get() && b && a.lat && a.Rg && a.Wi) try {
                b.set("web.gws.devloc.lat", a.lat), b.set("web.gws.devloc.lon", a.Rg), b.set("web.gws.devloc.acc", a.Wi), b.set("web.gws.devloc.ts", a.ka || s_e())
            } catch (c) {}
            s_F2a = !0;
            s_xz && s_xz.V0();
            s_yz.success.call(s_yz, a)
        },
        s_W2a = function() {
            !s_H2a.get() && s_tz && (s_U2a(), s_T2a(s_O2a), s_tz = !1)
        },
        s_Y2a = function(a) {
            this.ma = a;
            this.qa = 0;
            this.ka = !1;
            this.Ca =
                this.$ = 0;
            this.Ea = !1;
            this.Wa = s_X2a(this.hRa.bind(this))
        },
        s_Z2a = function(a) {
            return a.Wa.then(a.ZUa.bind(a))
        };
    s_ = s_Y2a.prototype;
    s_.V0 = function(a) {
        0 != this.$ && this.ka && (a = a || s_e() - this.qa, s_zz(this.ma, 2 == this.$ ? 8 : 6, a), this.$ = 2, this.ka = !1)
    };
    s_.T0 = function(a, b) {
        if (0 != this.$ && this.ka) {
            this.ka = !1;
            var c = b || s_e() - this.qa;
            this.Wa = s_X2a(this.W6a.bind(this, a, c))
        }
    };
    s_.q9 = function() {
        return 1 == this.Ca && !this.ka
    };
    s_.W6a = function(a, b, c) {
        c = c.state || c.status;
        "prompt" == c ? 200 > b ? (this.Ca = 3, a = 10) : a = 5 : a = "granted" == c ? this.Ea && 1 == a.code ? 5 : 1 == a.code ? 11 : 1 == this.$ ? 6 : 8 : 3 == this.$ ? 9 : 7;
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
    };
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
                this.$ = 1, s_zz(this.ma, 1, void 0)
        }
        a.addEventListener("change", s__2a(this))
    };
    s_.ZUa = function() {
        this.Ca = this.$;
        this.ka = !0;
        this.qa = s_e();
        s_zz(this.ma, 4, void 0)
    };
    var s__2a = function(a) {
            return function() {
                var b = this.state || this.status;
                "granted" == b && a.ka && (a.Ea = !0);
                if (!a.ka) switch (b) {
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
        },
        s_X2a = function(a) {
            return navigator.permissions ? navigator.permissions.query({
                name: "geolocation"
            }).then(a) : Promise.resolve(0)
        },
        s_02a = function(a) {
            a = "&ei=" + a;
            return function(b) {
                b += a;
                navigator.sendBeacon && navigator.sendBeacon(google.logUrl("", b), "") || google.log("", b)
            }
        },
        s_12a = function() {
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
                };
                s_I2a.get() ? (s_xz = new s_Y2a(s_02a(google.kEI)), s_Z2a(s_xz).then(a)) : a()
            }
        };
    s_D("sy323");
    var s_22a = function() {};
    s_22a.prototype.success = function() {};
    s_22a.prototype.error = function() {};
    var s_32a = new s_sz("devloc", "msg_err", "Location unavailable"),
        s_42a = new s_sz("devloc", "uul_text", ""),
        s_52a = new s_sz("devloc", "msg_gps", "Using GPS"),
        s_62a = new s_sz("devloc", "msg_dsc", ""),
        s_72a = new s_sz("devloc", "msg_dvl", ""),
        s_82a = new s_sz("devloc", "msg_upd", "update"),
        s_92a = new s_sz("devloc", "msg_use", "update"),
        s_$2a = new s_sz("devloc", "msg_unk", "Unknown"),
        s_a3a = new s_sz("devloc", "mnr_crd", "0"),
        s_b3a = new s_sz("devloc", "dl_tld_mismatch", !1);
    var s_c3a = new s_sz("devloc", "rgc_md", 2E3),
        s_d3a = new s_sz("devloc", "rgc_me", 10),
        s_e3a = new s_sz("devloc", "rgc_to", 12096E5),
        s_f3a = new s_sz("devloc", "rgc_url", "/uul?uulo=4");
    var s_g3a = function(a, b) {
        this.ka = a;
        this.$ = b || null
    };
    s_f(s_g3a, s_22a);
    s_g3a.prototype.success = function(a) {
        s_N2a(a);
        this.ka(a)
    };
    s_g3a.prototype.error = function(a) {
        this.$ && this.$(a)
    };
    var s_h3a = new s_sz("devloc", "driver_ui_type", 0),
        s_Az = function(a, b) {
            s_W2a();
            s_yz = new s_g3a(a, b);
            s_12a()
        };
    s_C("sy323");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_bOc = !1,
        s_cOc = {},
        s_0Y = [],
        s_dOc = function() {
            var a = s_wz();
            if (a) {
                var b = s_0Y.length;
                a.set("web.rgc." + google.kHL + ".count", b);
                var c, d;
                try {
                    for (var e = 0; e < b; e++) d = "web.rgc." + google.kHL + "." + e + ".", c = s_0Y[e], a.set(d + "lat", c.lat), a.set(d + "lon", c.Rg), a.set(d + "acc", c.Wi), a.set(d + "rgc", c.Yu), a.set(d + "last", c.Cy)
                } catch (f) {}
            }
        },
        s_eOc = function() {
            if (!s_bOc) {
                var a = s_wz();
                if (a) {
                    var b = Number(a.get("web.rgc." + google.kHL + ".count")) || 0,
                        c, d;
                    try {
                        for (var e = 0; e < b; e++) d = "web.rgc." + google.kHL + "." + e + ".", c = {}, c.lat = a.get(d + "lat"),
                            c.Rg = a.get(d + "lon"), c.Wi = a.get(d + "acc"), c.Yu = a.get(d + "rgc"), c.Cy = a.get(d + "last"), s_0Y.push(c), s_cOc[c.Yu] = 1
                    } catch (f) {}
                    s_bOc = !0
                }
            }
        },
        s_fOc = function(a, b, c) {
            this.address = a;
            this.$ = b;
            this.timestamp = s_a(c) ? c : s_e()
        },
        s_gOc = function(a, b) {
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
                            if (f = s_0Y[g], f.Cy < c) d = g, e++;
                            else {
                                0 == e && (d = g, e++);
                                break
                            }
                        if (c = s_wz()) try {
                            for (g = d; g < d + e; g++) delete s_cOc[s_0Y[g].Yu],
                                f = "rgc:" + g + ":", c.remove(f + "lat"), c.remove(f + "lon"), c.remove(f + "acc"), c.remove(f + "rgc"), c.remove(f + "last");
                            s_0Y.splice(d, e)
                        } catch (k) {}
                    }
                    s_dOc()
                }
            })
        },
        s_hOc = function() {
            var a = s_wz();
            if (!a) return null;
            var b = a.get("swml.location"),
                c = a.get("swml.location.isdev"),
                a = a.get("swml.location.ts");
            return null == b || null == c || null == a ? null : new s_fOc(String(b), !!Number(c), Number(a))
        },
        s_iOc = function(a) {
            var b = s_tc("span");
            s_y(b, "known_loc", a);
            s_y(b, "unknown_loc", !a);
            return b
        },
        s_jOc = function(a) {
            this.$ = a || s_4h()
        };
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
                s_ta(s_Ca(c)) || (s_gOc(a, c), b(c))
            }
        };
        this.$.send("")
    };
    var s_kOc = function(a) {
            if (!a || !a.lat || !a.Rg) return null;
            s_eOc();
            for (var b = s_c3a.get(), c = null, d, e, f, g = 0; g < s_0Y.length; g++) {
                f = s_0Y[g];
                var k, l, m;
                s_ma(a) && s_ma(f) ? (k = a.lat, e = a.Rg, l = f.lat, m = f.Rg) : (k = a, e = f, m = l = void 0);
                k = k * Math.PI / 180;
                l = l * Math.PI / 180;
                e = 12734E3 * Math.asin(Math.min(1, Math.sqrt(Math.pow(Math.sin((l - k) / 2), 2) + Math.cos(k) * Math.cos(l) * Math.pow(Math.sin((m * Math.PI / 180 - e * Math.PI / 180) / 2), 2))));
                e < b && (b = e, c = f, d = g)
            }
            c && (c.Cy = s_e(), s_0Y.splice(d, 1), s_0Y.unshift(c), s_F(s_dOc, 100));
            return c && c.Yu || null
        },
        s_lOc =
        function(a) {
            a = new s_fOc(a || "", !0);
            var b = s_wz();
            if (b && a) try {
                b.set("swml.location", a.address), b.set("swml.location.isdev", a.$ ? "1" : "0"), b.set("swml.location.ts", String(a.timestamp))
            } catch (c) {}
        },
        s_1Y = function() {
            this.$ = ""
        };
    s_f(s_1Y, s_22a);
    s_1Y.prototype.error = function(a) {
        s_1Y.Ba.error.call(this, a);
        this.$ = ""
    };
    s_1Y.prototype.success = function(a) {
        s_1Y.Ba.success.call(this, a);
        a && a.lat && a.Rg && (this.$ = null != s_72a ? s_72a.get() : "")
    };
    s_1Y.prototype.RY = function() {
        s_yz = this;
        s_12a()
    };
    s_1Y.prototype.rP = function() {
        this.RY()
    };
    var s_mOc = function(a, b, c, d) {
            d = d || s_iOc(!0);
            c = c || s_tc("span");
            s_wc(c);
            var e = b ? b.$ || s_52a.get() : s_$2a.get(),
                f = s_m("SPAN", {
                    id: "swml_addr"
                });
            f.appendChild(s_Ah(e));
            s_vc(c, d, f);
            b && a.$ && (b = s_tc("span"), b.appendChild(s_Ah(a.$)), s_vc(c, s_Ah(" - "), b))
        },
        s_nOc = function() {
            var a = s_hOc();
            return a && a.$ ? s_e() - a.timestamp <= Number(3E5) : !1
        },
        s_oOc = function(a, b) {
            var c = null,
                d = s_42a.get();
            if (d) c = s_62a;
            else {
                var e = s_hOc();
                e && (d = e.address, c = s_72a)
            }
            a.$ = null != c ? c.get() : "";
            c = s_iOc(s_nOc());
            s_mOc(a, d ? new s_uz(null, null, null,
                null, null, d) : null, b, c)
        },
        s_pOc = function(a) {
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
        };
    s_1Y.prototype.pv = function(a, b) {
        s_b3a.get() || (a.appendChild(s_Ah(" - ")), a.appendChild(b))
    };
    var s_2Y = function(a) {
        this.$ = "";
        this.Wa = a || new s_jOc;
        this.qa = this.ma = !0;
        this.ka = null
    };
    s_f(s_2Y, s_1Y);
    var s_qOc = function() {
        var a = s_i("swml");
        if (a && "1" === s_a3a.get()) {
            var b = a.getElementsByTagName("DIV");
            if (b && b[0]) return b[0]
        }
        return a
    };
    s_2Y.prototype.start = function() {
        s_42a.get() && (this.qa = !1);
        var a = s_qOc();
        a && (s_oOc(this, a), this.RY());
        s_rOc(this)
    };
    var s_rOc = function(a) {
        "1" === s_a3a.get() && s_yi(s_c(a.Ea, a))
    };
    s_ = s_2Y.prototype;
    s_.RY = function() {
        s_tz && this.ka ? this.Wa.get(this.ka, s_c(this.cFa, this, this.ka), !0) : (this.ma = !0, s_2Y.Ba.RY.call(this))
    };
    s_.rP = function() {
        this.qa = !0;
        this.RY()
    };
    s_.success = function(a) {
        s_2Y.Ba.success.call(this, a);
        s_N2a(a);
        this.ma && (s_lOc(null), this.Wa.get(a, s_c(this.cFa, this, a)), this.ka = a, this.ma = !1)
    };
    s_.error = function(a) {
        if (this.ma) {
            var b = s_qOc();
            b && (this.qa && (s_wc(b), b.appendChild(s_iOc(!1)), b.appendChild(s_Ah(s_32a.get()))), a.code != a.PERMISSION_DENIED ? this.pv(b, s_pOc(this)) : (s_sOc(), this.Ea()))
        }
    };
    s_.cFa = function(a, b) {
        a.$ = b;
        var c = s_qOc();
        c && (s_mOc(this, a, c), this.pv(c, s_pOc(this)));
        s_lOc(b)
    };
    s_.pv = function(a, b) {
        s_sOc();
        s_2Y.Ba.pv.call(this, a, b);
        this.Ea()
    };
    var s_sOc = function() {
        var a = s_i("swml");
        a && (s_q(a, "visibility", "visible"), s_q(a, "display", ""))
    };
    s_2Y.prototype.Ea = function() {
        if ("1" === s_a3a.get()) {
            var a = s_i("swml_lmsep");
            if (a) {
                var b = s_i("swml").offsetHeight - s_Kd(s_i("swml")).top - s_Kd(s_i("swml")).bottom,
                    c = s_qOc().offsetHeight;
                a.textContent = b > c ? "\u00a0\u00a0\u00a0" : "\u00a0-\u00a0"
            }
        }
    };
    var s_tOc = function(a) {
        s_2Y.call(this, a)
    };
    s_f(s_tOc, s_2Y);
    s_tOc.prototype.start = function() {
        var a = s_qOc();
        a && (s_oOc(this, a), this.pv(a, s_pOc(this)));
        s_rOc(this)
    };
    s_D("dvl");
    s_oa("google.devloc.boc", function(a, b, c, d, e) {
        var f = a.getAttribute(b),
            g = a.onclick;
        a.onclick = null;
        a.style.opacity = .5;
        f && (s_j(c).style.display = "none", s_j(d).style.display = "inline-block", s_j(e).style.display = "none", s_Az(function() {
            s_5h(a, a.getAttribute("data-ved"), f)
        }, function(b) {
            b.code == b.PERMISSION_DENIED ? (s_j(c).style.display = "none", s_j(d).style.display = "none", s_j(e).style.display = "inline-block") : (s_j(c).style.display = "inline-block", s_j(d).style.display = "none", s_j(e).style.display = "none", a.onclick = g, a.style.opacity = 1)
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
    var s_vk = null,
        s_qna = !0,
        s_wk = s_b;
    s_C("sy77");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_rna = function() {
            var a = s_i("fbar"),
                b = s_i("fuser") || s_i("fsr"),
                c = s_i("fsl");
            a && b && c && (a = s_l("fbar", a), s_x(a, "fmulti"), 32 > a.clientWidth - c.offsetWidth - b.offsetWidth - 30 - 34 && s_w(a, "fmulti"))
        },
        s_sna = !1,
        s_tna = !1,
        s_una = 0,
        s_vna = function() {
            var a = s_vk = s_vk || s_i("fbarcnt"),
                b = s_i("fbar");
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
                if (s_i("dbg_")) s_q(b, {
                    position: "static"
                });
                else {
                    var c = window.innerHeight || Math.max(document.documentElement.clientHeight, document.body.scrollHeight),
                        d = s_td(a).y,
                        c = c - d;
                    c > b.offsetHeight && (s_q(a, {
                        height: c + "px"
                    }), s_q(b, {
                        bottom: "0",
                        position: "absolute"
                    }))
                }
                s_q(a, {
                    visibility: "visible"
                })
            }
        };
    s_D("foot");
    var s_wna = null,
        s_xk = null,
        s_yk = null,
        s_yna = function() {
            if (s_Ed(s_xk)) s_yk.setAttribute("aria-expanded", "false"), s_xna();
            else {
                s_yk.setAttribute("aria-expanded", "true");
                var a = s_r(s_xk),
                    b = -20;
                if (s_ff()) c = s_r(s_yk), 0 > s_td(s_yk).x + c.width - a.width - b && (b = s_Md(s_yk), b = c.width - a.width + b.left + b.right), s_xk.style.right = b + "px";
                else {
                    if (s_td(s_yk).x + a.width + b > s_nc().width) var c = s_r(s_yk),
                        b = s_Md(s_yk),
                        b = c.width - a.width + b.left + b.right;
                    s_xk.style.left = b + "px"
                }
                s_s(s_xk, !0);
                s_ye(document.body, "click", s_xna)
            }
        },
        s_xna = function(a) {
            a &&
                a.target == s_yk || s_s(s_xk, !1);
            s_ze(document.body, "click", s_xna)
        },
        s_zna = function(a) {
            s_wna && s_s(s_wna, !a)
        };
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
            var b = a.po,
                c = a.qe,
                d = a.pf;
            s_vk = s_i("fbarcnt");
            s_sna = !!c;
            s_qna = null != s_vk && (void 0 === d || d);
            s_tna = !!b;
            s_wk = s_qna ? s_5e(null, s_vna, !1) : s_rna;
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
    var s_pAd, s_qAd = !1,
        s_A5 = function(a) {
            s_h.call(this);
            var b = a || !1;
            a = !!(s_Lj() && window.gbar && gbar.elc && gbar.elr);
            this.Ea = b && !a;
            this.qa = [];
            s_qAd || (a && gbar.elc(s_c(function() {
                b && s_rAd(gbar.elr().mo);
                s_u(71)
            }, this)), s_qAd = !0);
            this.Ea && (this.$ = s_5e(null, s_c(this.Wa, this), !0), s_p(window, "resize", this.$, !1, this), this.$());
            (a = s_i("tbbcc")) && this.qa.push(a);
            this.ma();
            s_p(window, "scroll", this.ma, !1, this)
        };
    s_f(s_A5, s_h);
    s_A5.prototype.Ha = function() {
        this.qa = [];
        this.Ea && s_2c(window, "resize", this.$, !1, this);
        s_2c(window, "scroll", this.ma, !1, this)
    };
    var s_rAd = function(a) {
        var b = s_i("cnt"),
            c = s_i("searchform");
        b && (s_y(b, "big", "lg" == a), s_y(b, "mdm", "md" == a));
        c && (s_y(c, "big", "lg" == a), s_y(c, "mdm", "md" == a))
    };
    s_A5.prototype.Wa = function() {
        s_rAd(1250 <= document.body.offsetWidth ? "lg" : "sm")
    };
    s_A5.prototype.$ = null;
    s_A5.prototype.ma = function() {
        var a = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft,
            b = s_ff(),
            c = b ? "marginRight" : "marginLeft",
            d = b ? "right" : "left";
        b && (a = Math.abs(a));
        for (var b = 0, e; e = this.qa[b]; b++) "fixed" == s_pd(e) && ("tbbcc" == e.id ? e.style[c] = -a + "px" : e.style[d] = -a + "px")
    };
    s_we("fpe", {
        init: function(a) {
            s_pAd = new s_A5(a.js)
        },
        dispose: function() {
            s_pAd && (s_pAd.dispose(), s_pAd = null)
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
        },
        s_bzd = "";
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
                                for (var m = 1; m < l.length; ++m) g.push(l[m])
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
    var s_zk = null,
        s_Ana = function(a) {
            s_oa("google.v6t", s_e());
            s_oa("google.v6s", 0);
            s_zk = new Image;
            s_oa("google.v6", s_zk);
            s_zk.onload = s_zk.onerror = function() {
                s_oa("google.v6s", 1)
            };
            s_zk.src = a + "&rndm=" + Math.random()
        };
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
    s_D("sy86");
    var s_Ina = function(a) {
            this.Aa = a;
            this.Aa._wect = this;
            this.ka = {};
            this.$ = {};
            this.ma = {}
        },
        s_Jna = function(a) {
            a._wect || new s_Ina(a);
            return a._wect
        };
    s_Ina.prototype.qa = function(a, b) {
        void 0 == this.ka[a] && (this.ka[a] = 0);
        this.ka[a]++;
        for (var c = this.$[a], d = c.length, e, f = 0; f < d; f++) try {
            c[f](b)
        } catch (g) {
            e = e || g
        }
        this.ka[a]--;
        if (e) throw e;
    };
    var s_Kna = function(a, b) {
            a.ma[b] || (a.ma[b] = s_c(a.qa, a, b));
            return a.ma[b]
        },
        s_Lna = function(a, b) {
            return a + ":" + (b ? "capture" : "bubble")
        },
        s_Mna = function(a, b, c, d) {
            d = !!d;
            var e = s_Lna(b, d);
            a.$[e] || (a.$[e] = [], a.Aa.addEventListener(b, s_Kna(a, e), d));
            a.$[e].push(c)
        },
        s_Nna = function(a, b, c, d) {
            d = !!d;
            var e = s_Lna(b, d);
            a.$[e] && (a.ka[e] && (a.$[e] = a.$[e].slice(0)), c = a.$[e].indexOf(c), -1 != c && a.$[e].splice(c, 1), 0 == a.$[e].length && (a.$[e] = void 0, a.Aa.removeEventListener(b, s_Kna(a, e), d)))
        };
    var s_Nk = function(a, b, c, d) {
            s_Nna(s_Jna(a), b, c, d)
        },
        s_Ok = function(a, b, c, d, e) {
            var f = s_Jna(a);
            s_Mna(f, b, c, d);
            e && s_Ona(a, function() {
                s_Mna(f, b, c, d)
            }, function() {
                s_Nna(f, b, c, d)
            })
        },
        s_Ona = function(a, b, c) {
            a.addEventListener("DOMFocusIn", function(a) {
                a.target && "TEXTAREA" == a.target.tagName && b()
            }, !1);
            a.addEventListener("DOMFocusOut", function(a) {
                a.target && "TEXTAREA" == a.target.tagName && c()
            }, !1)
        };
    var s_Pna = /iPhone|iPod|iPad/,
        s_Pk = function() {
            return s_ya(navigator.userAgent, "Android")
        },
        s_Qna = /Mac OS X.+Silk\//;
    var s_Qk = s_Pna.test(navigator.userAgent) || s_Pk() || s_Qna.test(navigator.userAgent),
        s_Rk = window.navigator.msPointerEnabled,
        s_Sk = s_Qk ? "touchstart" : s_Rk ? "MSPointerDown" : "mousedown",
        s_Tk = s_Qk ? "touchmove" : s_Rk ? "MSPointerMove" : "mousemove",
        s_Uk = s_Qk ? "touchend" : s_Rk ? "MSPointerUp" : "mouseup",
        s_Rna = s_Rk ? "MSPointerCancel" : "touchcancel",
        s_Sna = function(a, b, c, d, e, f, g) {
            s_Qk || s_Rk || (b = s_Vk(b), c = s_Vk(c), d = s_Vk(d));
            f = !!f;
            s_Ok(a, s_Sk, b, f, g);
            s_Ok(a, s_Tk, c, f, g);
            s_Ok(a, s_Uk, d, f, g);
            s_Ok(a, s_Rna, e, f, g)
        },
        s_Vk = function(a) {
            return function(b) {
                b.touches = [];
                b.targetTouches = [];
                b.changedTouches = [];
                b.type != s_Uk && (b.touches[0] = b, b.targetTouches[0] = b);
                b.changedTouches[0] = b;
                a(b)
            }
        },
        s_Wk = function(a) {
            return a.touches || [a]
        },
        s_Xk = function(a) {
            return (s_Rk ? [a] : a.changedTouches) || []
        };

    s_C("sy86");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s__na = /Chrome\/([0-9.]+)/,
        s_0na = function() {
            return s_ya(navigator.userAgent, "Chrome/")
        },
        s_1na = /OS (\d+)_(\d+)(?:_(\d+))?/,
        s_2na = function(a, b, c, d) {
            return a << 21 | b << 14 | c << 7 | d
        },
        s_3na = function() {
            var a = s_1na.exec(navigator.userAgent) || [];
            a.shift();
            return s_2na.apply(null, a)
        },
        s_4na = function(a) {
            var b;
            if (b = s_Pk() && s_0na()) b = s__na.exec(navigator.userAgent), b = 18 == +(b ? b[1] : "").split(".")[0];
            return b ? new s_$b(a.clientX, a.pageY - window.scrollY) : new s_$b(a.clientX, a.clientY)
        };
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
        },
        s_9na = function(a) {
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
        },
        s_$na = function() {
            s_a(s_7na) ||
                (s_7na = s_3na() >= s_2na(6) || !0);
            return s_7na
        },
        s_0k = function(a, b, c) {
            s_6na = c;
            s__k || (document.addEventListener("click", s_8na, !0), c = s_9na, s_Qk || s_Rk || (c = s_Vk(c)), s_Ok(document, s_Sk, c, !0, !0), s__k = []);
            s_5na = s_e();
            for (c = 0; c < s__k.length; c += 2)
                if (25 > Math.abs(a - s__k[c]) && 25 > Math.abs(b - s__k[c + 1])) {
                    s__k.splice(c, c + 2);
                    break
                }
        };

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
        },
        s_boa = function(a, b, c, d) {
            a.ka.length = a.$.length = 0;
            a.ka.push(b, d);
            a.$.push(c, d)
        },
        s_eoa = function(a, b, c, d) {
            var e = a.ka[a.ka.length - 2] - b,
                f = a.$[a.$.length - 2] - c,
                g = a.ka,
                k = a.ma;
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
        },
        s_coa = function(a, b) {
            for (; a.length && 250 < b - a[1] || 10 < a.length;) a.splice(0, 2)
        },
        s_foa = function(a,
            b, c, d) {
            if (s_a(b) && s_a(c) && d) return s_coa(a.ka, d), s_coa(a.$, d), s_doa(a, b, c, d)
        },
        s_doa = function(a, b, c, d) {
            b = a.ka.length ? (b - a.ka[0]) / (d - a.ka[1]) : 0;
            c = a.$.length ? (c - a.$[0]) / (d - a.$[1]) : 0;
            b = s_goa(a, b);
            c = s_goa(a, c);
            return new s_$b(b, c)
        },
        s_goa = function(a, b) {
            var c = Math.abs(b);
            5 < c && (c = 6 > a.$.length ? 1 : 5);
            return c * (0 > b ? -1 : 1)
        };

    s_C("sy89");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy91");
    var s_Moa = s_Jb ? "-ms-" : s_Lb ? "-moz-" : s_Ib ? 0 > s_Da(s_Sb, "15.0") ? "-o-" : "-webkit-" : "-webkit-",
        s_Noa = s_Jb ? "ms" : s_Lb ? "Moz" : s_Ib ? 0 > s_Da(s_Sb, "15.0") ? "O" : "webkit" : "webkit",
        s_wl = s_Moa + "transform",
        s_xl = s_Noa + "Transform",
        s_Ooa = s_Noa + "Transition",
        s_yl = function(a) {
            a = document.defaultView.getComputedStyle(a, null)[s_xl];
            return "undefined" != typeof WebKitCSSMatrix ? new WebKitCSSMatrix(a) : "undefined" != typeof MSCSSMatrix ? new MSCSSMatrix(a) : "undefined" != typeof CSSMatrix ? new CSSMatrix(a) : {}
        };

    s_C("sy91");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Doa = 0,
        s_pl = function(a) {
            return s_Rk ? a.pointerId : a.identifier
        },
        s_ql = function(a, b, c, d) {
            var e = document.createEvent("HTMLEvents");
            e.initEvent(b, !0, !0);
            e.sender = c;
            e.Ig = d;
            a.dispatchEvent(e)
        },
        s_rl = function(a) {
            return a + "_" + s_Doa++
        };
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
    };
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
    };
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
                for (d = 0; d < this.ma; d++) this.Ga[d] = this.Ia[d] = 0;
            this.Yb(a)
        }
    };
    s_sl.prototype.OW = function(a) {
        if (!this.Da && this.$ == this.ma && s_Eoa(this, a))
            if (this.qa) this.Za(a);
            else {
                for (var b, c = 0; c < this.ma; c++) {
                    var d = this.Wa[c];
                    if (d) {
                        var e = this.ka[c],
                            f = this.Ka[e] - d.clientY;
                        this.Ga[c] += Math.abs(this.Xa[e] - d.clientX);
                        this.Ia[c] += Math.abs(f);
                        b = b || 2 < this.Ga[c] || 2 < this.Ia[c]
                    }
                }
                if (b) {
                    for (c = 0; c < this.ma; c++) this.Ea[c] = s_Foa(this, c), this.Ca[c] = s_Goa(this, c);
                    (this.qa = this.Lb(a)) ? this.Za(a): this.reset()
                }
            }
    };
    s_sl.prototype.reset = function() {
        this.$ = 0;
        this.Da = this.qa = !1
    };
    s_sl.prototype.suspend = function() {
        this.Da = !0
    };
    var s_Foa = function(a, b) {
            var c = b || 0,
                d = a.Wa[c];
            return d ? d.clientX : a.Xa[a.ka[c || 0]]
        },
        s_Goa = function(a, b) {
            var c = b || 0,
                d = a.Wa[c];
            return d ? d.clientY : a.Ka[a.ka[c || 0]]
        };
    var s_tl = function(a, b, c) {
        s_sl.call(this, b, c, 1);
        this.Db = a;
        this.Ja = new s_aoa
    };
    s_f(s_tl, s_sl);
    s_tl.prototype.Yb = function(a) {
        s_boa(this.Ja, this.Ea[0], this.Ca[0], a.timeStamp);
        this.Cd = this.Ea[0];
        this.rb = this.Ca[0]
    };
    s_tl.prototype.Lb = function(a) {
        return this.Db.rb(a)
    };
    s_tl.prototype.Za = function(a) {
        this.Cd = this.Ea[0];
        this.rb = this.Ca[0];
        s_eoa(this.Ja, s_Foa(this), s_Goa(this), a.timeStamp);
        this.Db.Ub(a);
        a.preventDefault()
    };
    s_tl.prototype.Ma = function(a) {
        a && (this.nb = s_foa(this.Ja, this.Xa[this.ka[0]], this.Ka[this.ka[0]], a.timeStamp) || void 0, a.preventDefault());
        this.Db.Rb(a);
        var b = this.Ea[0],
            c = this.Ca[0];
        a && s_$na() ? a.preventDefault() : s_0k(b, c, void 0)
    };
    var s_Hoa = function(a) {
            return s_Foa(a) - a.Cd
        },
        s_Ioa = function(a) {
            return Math.abs(s_Goa(a) - a.rb) > Math.abs(s_Hoa(a))
        };
    var s_ul = function(a, b, c) {
        s_sl.call(this, b, c, 2);
        this.Ja = a
    };
    s_f(s_ul, s_sl);
    s_ul.prototype.Yb = s_b;
    s_ul.prototype.Lb = function(a) {
        return this.Ja.ma(a)
    };
    s_ul.prototype.Za = function(a) {
        this.Ja.ka(a);
        a.preventDefault()
    };
    s_ul.prototype.Ma = function(a) {
        this.Ja.$(a);
        a && a.preventDefault()
    };
    var s_vl = function(a) {
            this.qa = a;
            this.Aa = this.qa.va();
            this.ka = {};
            this.ma = {};
            this.$ = []
        },
        s_Joa = [s_tl, s_ul],
        s_Koa = function(a, b) {
            var c = a.$[0];
            if (c) return c;
            c = new s_Joa[0](b, a.ka, a.ma);
            return a.$[0] = c
        };
    s_vl.prototype.Ca = function(a) {
        var b = s_Wk(a),
            c = b.length,
            d;
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
        for (e = 0; e < c; e++) d = s_pl(b[e]), s_a(this.ka[d]) && s_Loa(this, +d);
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
                var f = c[b],
                    g = s_pl(f);
                this.ka[g] = f.clientX;
                this.ma[g] = f.clientY
            }
            for (b = 0; b < e; b++)(d = this.$[b]) && d.iG(a)
        }
    };
    s_vl.prototype.Ea = function(a) {
        for (var b = !0, c = this.$.length, d = 0; d < c; d++) {
            var e = this.$[d];
            if (e && 0 < e.$) {
                b = !1;
                break
            }
        }
        if (!b) {
            for (d = 0; d < c; d++)(e = this.$[d]) && e.OW(a);
            a = s_Xk(a);
            b = a.length;
            for (d = 0; d < b; d++) c = a[d], e = s_pl(c), s_a(this.ka[e]) && (this.ka[e] = c.clientX, this.ma[e] = c.clientY)
        }
    };
    s_vl.prototype.Wa = function(a) {
        for (var b = s_Xk(a), c = b.length, d, e = 0; e < c; e++) {
            var f = b[e],
                f = s_pl(f);
            s_a(this.ka[f]) && (this.qa.nb(a), d = !0)
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
            for (e = 0; e < c; e++) f = b[e], f = s_pl(f), s_a(this.ka[f]) && (delete this.ka[f], delete this.ma[f])
        }
    };
    var s_Loa = function(a, b) {
        a.qa.nb(null);
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
                    s_a(e) && (f.qa && f.Ma(null), f.ka.splice(e, 1), f.$--, f.qa = !1)
                }
            }
        }
        delete a.ka[b];
        delete a.ma[b]
    };
    s_vl.prototype.enable = function(a, b) {
        var c = s_c(this.Wa, this);
        s_Sna(this.Aa, s_c(this.Ca, this), s_c(this.Ea, this), c, c, a, b)
    };
    s_vl.prototype.reset = function() {
        for (var a in this.ka) delete this.ka[Number(a)], delete this.ma[Number(a)];
        for (a = 0; a < this.$.length; a++) {
            var b = this.$[a];
            b && b.reset()
        }
    };

    s_C("sy88");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy92");
    var s_Poa = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix(""),
        s_Qoa = s_Mb ? "webkitTransitionEnd" : "transitionend",
        s_Roa = function(a, b, c, d) {
            a.style[s_Ooa] = (c || s_wl) + " " + b + "ms " + (d || "ease-in-out")
        },
        s_zl = function(a, b, c) {
            a.style[s_xl] = s_Soa(b, c)
        },
        s_Soa = function(a, b) {
            var c = s_ka(a) ? a + "px" : a || "0",
                d = s_ka(b) ? b + "px" : b || "0";
            return s_Poa ? "translate3d(" + c + "," + d + ",0)" : "translate(" + c + "," + d + ")"
        };

    s_C("sy92");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_toa = function(a) {
            return new s_dc(a.width, a.height)
        },
        s_uoa = function(a) {
            if (a instanceof s_3b) return a;
            a = s_6b(a);
            var b;
            b = s_4b(a).replace(/(\r\n|\r|\n)/g, "<br>");
            return s_5b(b, a.Vq())
        };
    s_D("sy83");
    var s_il = function(a) {
            var b = s_Gd(a);
            return b && s_Lb ? -a.scrollLeft : !b || s_Paa && s_Tb("8") || "visible" == s_od(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft
        },
        s_jl = function(a) {
            var b = a.offsetLeft,
                c = a.offsetParent;
            c || "fixed" != s_pd(a) || (c = s_gc(a).documentElement);
            if (!c) return b;
            if (s_Lb) var d = s_ud(c),
                b = b + d.left;
            else s_Ub(8) && !s_Ub(9) && (d = s_ud(c), b -= d.left);
            return s_Gd(c) ? c.clientWidth - (b + a.offsetWidth) : b
        },
        s_kl = function(a, b) {
            b = Math.max(b, 0);
            s_Gd(a) ? s_Lb ? a.scrollLeft = -b : s_Paa && s_Tb("8") ? a.scrollLeft = b : a.scrollLeft = a.scrollWidth - b - a.clientWidth : a.scrollLeft = b
        };

    s_C("sy83");
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
    };
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
    };
    s_ej.prototype.Pv = function(a) {
        var b = this.$[a];
        if (b) {
            var c = this.ma[b];
            0 != this.Ea ? (this.qa.push(a), this.$[a + 1] = s_b) : (c && s_Ya(c, a), delete this.$[a], delete this.$[a + 1], delete this.$[a + 2])
        }
        return !!b
    };
    s_ej.prototype.publish = function(a, b) {
        var c = this.ma[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.Wa)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    s_Aja(this.$[g + 1], this.$[g + 2], d)
                } else {
                    this.Ea++;
                    try {
                        for (e = 0, f = c.length; e < f; e++) g = c[e], this.$[g + 1].apply(this.$[g + 2], d)
                    } finally {
                        if (this.Ea--, 0 < this.qa.length && 0 == this.Ea)
                            for (; c = this.qa.pop();) this.Pv(c)
                    }
                }
            return 0 != e
        }
        return !1
    };
    var s_Aja = function(a, b, c) {
        s_7e(function() {
            a.apply(b, c)
        })
    };
    s_ej.prototype.clear = function(a) {
        if (a) {
            var b = this.ma[a];
            b && (s_g(b, this.Pv, this), delete this.ma[a])
        } else this.$.length = 0, this.ma = {}
    };
    s_ej.prototype.ze = function(a) {
        if (a) {
            var b = this.ma[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.ma) a += this.ze(b);
        return a
    };
    s_ej.prototype.Ha = function() {
        s_ej.Ba.Ha.call(this);
        this.clear();
        this.qa.length = 0
    };

    s_C("sy58");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy94");
    var s_Tna = function(a) {
            return new RegExp("(?:^| +)" + a + "(?:$| +)")
        },
        s_Yk = function(a, b, c, d) {
            var e = s_Tna(c),
                f = d || "",
                g = s_Tna(f);
            if (b != e.test(a.className) || d && b == g.test(a.className)) d = a.className.replace(e, " ").replace(g, " "), a.className = d + " " + (b ? c : f)
        };
    s_C("sy94");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Toa = function(a, b, c) {
            a.style.left = b + "px";
            a.style.top = c + "px"
        },
        s_Uoa = function(a, b, c, d, e, f, g, k) {
            b = "translate3d(" + b + "px," + c + "px," + (d || 0) + "px)";
            e && (b += " rotate(" + e + "deg)");
            s_a(f) && (b += " scale3d(" + f + "," + f + ",1)");
            a.style[s_xl] = b;
            g && (a.style[s_xl + "OriginX"] = g + "px");
            k && (a.style[s_xl + "OriginY"] = k + "px")
        };
    s_D("sy90");
    var s_Voa = 1 / 3,
        s_Woa = 2 / 3,
        s_Xoa = [s_Voa, s_Woa, s_Woa, 1],
        s_Yoa = function(a, b, c, d) {
            if (1E-6 >= Math.abs(b - 0)) return s_Xoa;
            1E-6 >= Math.abs(a - b) ? a = [0, 0] : (b = (d - c * b) / (a - b), a = [b, b * a]);
            a = [a[0] / c, a[1] / d];
            c = a[0] * s_Woa;
            d = a[1] * s_Woa;
            return [c, d, c + s_Voa, d + s_Voa]
        };
    var s_Zoa = function() {
            this.Ma = s_c(this.rb, this);
            this.Wa = this.Ca = 0
        },
        s__oa = 7 / 60,
        s_0oa = 7 / 60,
        s_1oa = 1E3 / 60,
        s_2oa = .25 * s_1oa,
        s_Al = .01 * s_1oa;
    s_ = s_Zoa.prototype;
    s_.WB = function() {
        return 0
    };
    s_.start = function(a, b, c, d) {
        this.Ga = b;
        this.Da = c;
        this.$ = d.clone();
        this.qa = d.clone();
        b = s_3oa(a.x, this.$.x, this.Ga.x, this.Da.x);
        if (0 > b * a.x || !a.x && b) this.Wa = 2;
        c = s_3oa(a.y, this.$.y, this.Ga.y, this.Da.y);
        if (0 > c * a.y || !a.y && c) this.Ca = 2;
        this.ka = new s_$b(b, c);
        if (Math.abs(this.ka.y) >= s_2oa || Math.abs(this.ka.x) >= s_2oa || this.Wa || this.Ca) {
            a = [];
            for (b = s_e();;) {
                do this.$.y += this.ka.y, this.$.x += this.ka.x, this.Ja = Math.round(this.$.y), this.Ia = Math.round(this.$.x), s_4oa(this, this.$.x, this.Ga.x, this.Da.x, this.ka.x, this.Wa, !1), s_4oa(this, this.$.y, this.Ga.y, this.Da.y, this.ka.y, this.Ca, !0), b += s_1oa; while (this.Ja == this.qa.y && this.Ia == this.qa.x && (Math.abs(this.ka.y) >= s_Al || Math.abs(this.ka.x) >= s_Al));
                if (0 == this.Wa && 0 == this.Ca && this.Ja == this.qa.y && this.Ia == this.qa.x) break;
                a.push(b, this.Ia, this.Ja);
                this.qa.y = this.Ja;
                this.qa.x = this.Ia
            }
            this.ma = a;
            if (this.ma.length) return this.Za = window.setTimeout(this.Ma, this.ma[0] - s_e()), this.Db = !0
        }
    };
    s_.CP = s_b;
    s_.stop = function() {
        this.Db = !1;
        this.ma = [];
        window.clearTimeout(this.Za);
        s_5oa(this.Mb)
    };
    s_.dA = function() {
        return this.Db
    };
    s_.pO = function(a) {
        this.Mb = a
    };
    var s_3oa = function(a, b, c, d) {
            a = a * s_1oa * 1.25;
            Math.abs(a) < s_2oa && (b < c ? (a = (c - b) * s_0oa, a = Math.max(a, s_Al)) : b > d && (a = (b - d) * s_0oa, a = -Math.max(a, s_Al)));
            return a
        },
        s_4oa = function(a, b, c, d, e, f, g) {
            if (e) {
                e *= .97;
                if (b < c) var k = c - b;
                else b > d && (k = d - b);
                k ? 0 > k * e ? (f = 2 == f ? 0 : 1, e += k * s__oa) : (f = 2, e = 0 < k ? Math.max(k * s_0oa, s_Al) : Math.min(k * s_0oa, -s_Al)) : f = 0;
                g ? (a.ka.y = e, a.Ca = f) : (a.ka.x = e, a.Wa = f)
            }
        };
    s_Zoa.prototype.rb = function() {
        if (this.ma.length) {
            var a = this.ma.splice(0, 3);
            this.Mb.Pb(a[1], a[2]);
            this.ma.length ? (a = this.ma[0] - s_e(), this.Za = window.setTimeout(this.Ma, a)) : this.stop()
        }
    };
    var s_Bl = function() {
        this.$ = []
    };
    s_Bl.prototype.Ea = -5E-4;
    s_Bl.prototype.WB = function() {
        return 1
    };
    s_Bl.prototype.start = function(a, b, c, d) {
        var e = Math.abs(a.y) >= Math.abs(a.x),
            f = e ? a.y : a.x;
        a = e ? b.y : b.x;
        var g = e ? c.y : c.x,
            k = e ? d.y : d.x;
        b = s_8b(e ? d.x : d.y, e ? b.x : b.y, e ? c.x : c.y);
        if (k < a || k > g) a = k < a ? a : g, this.$.push(e ? b : a, e ? a : b, 500, "ease-out");
        else if (.25 <= Math.abs(f)) {
            d = (c = 0 > f) ? -this.Ea : this.Ea;
            var l = c ? a - k : g - k,
                m = f;
            if (l) {
                var m = f * f,
                    n = 2 * d,
                    ba = -m / n;
                Math.abs(ba) < Math.abs(l) ? (l = ba, m = 0) : (m = Math.sqrt(m + n * l), m *= 0 > f ? -1 : 1);
                this.Wa = m;
                this.ka = (m - f) / d;
                this.qa = l;
                f = "cubic-bezier(" + s_Yoa(f, this.Wa, this.ka, this.qa).join(",") + ")";
                k +=
                    this.qa;
                this.$.push(e ? b : k, e ? k : b, this.ka, f);
                m = this.Wa
            }
            0 != m && (a = c ? a : g, k = 50 * m, g = a + k, this.ka = 2 * k / (m + 0), f = "cubic-bezier(" + s_Yoa(m, 0, this.ka, k).join(",") + ")", this.$.push(e ? b : g, e ? g : b, this.ka, f), this.$.push(e ? b : a, e ? a : b, 500, "ease-out"))
        }
        if (this.$.length) return this.ma = !0, s_6oa(this), !0
    };
    var s_6oa = function(a) {
        var b = a.$,
            c = b.shift(),
            d = b.shift(),
            e = b.shift(),
            b = b.shift();
        a.Mb.Pb(c, d, e, b)
    };
    s_Bl.prototype.CP = function() {
        this.ma && (this.$.length ? s_6oa(this) : (this.ma = !1, s_5oa(this.Mb)))
    };
    s_Bl.prototype.stop = function() {
        this.ma = !1;
        this.$ = [];
        s_5oa(this.Mb)
    };
    s_Bl.prototype.dA = function() {
        return this.ma
    };
    s_Bl.prototype.pO = function(a) {
        this.Mb = a
    };
    var s_7oa = function() {},
        s_8oa = new s_7oa;
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
            this.Wa = null;
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
            this.$.y =
                a;
            this.Ga = g = this.Ga;
            this.Xa = 1 == g ? s_Uoa : s_Toa;
            1 != g && (this.Aa.style[s_Ooa] = "", this.Aa.style[s_xl] = "");
            2 != g && s_Toa(this.Aa, 0, 0);
            this.Xa(this.Aa, this.$.x, this.$.y);
            this.Kb = []
        },
        s_9oa = s_rl("scroller:scroll_start"),
        s_El = s_rl("scroller:scroll_end"),
        s_$oa = s_rl("scroller:drag_end"),
        s_apa = s_rl("scroller:content_moved"),
        s_bpa = s_rl("scroller:decel_start"),
        s_Cl = new s_$b(0, 0);
    s_Dl.prototype.Ma = !0;
    s_Dl.prototype.reset = function() {
        this.stop();
        this.Ca.reset();
        s_Fl(this, this.Aa, 0);
        this.Da();
        s_Gl(this, s_Gd(document.body) ? this.qa.x : this.ka.x, this.ka.y)
    };
    s_Dl.prototype.Da = function() {
        this.Ea = new s_dc(this.Lb.offsetWidth, this.Lb.offsetHeight);
        this.Yb = new s_dc(this.Be || this.Aa.scrollWidth, this.fD || this.Aa.scrollHeight);
        var a = new s_dc(Math.max(this.Ea.width, this.Yb.width), Math.max(this.Ea.height, this.Yb.height)),
            b = s_Gd(document.body),
            c;
        b ? (c = a.width - this.Ea.width, c = this.Ia.x ? Math.min(c, this.Ia.x) : c) : c = s_Cl.x - this.Ia.x;
        this.ka = new s_$b(c, s_Cl.y - this.Ia.y);
        this.qa = new s_$b(b ? this.Db.x : Math.min(this.Ea.width - a.width + this.Db.x, this.ka.x), Math.min(this.Ea.height -
            a.height + this.Db.y, this.ka.y));
        s_cpa(this)
    };
    var s_cpa = function(a) {
            var b = s_8b(a.$.x, a.qa.x, a.ka.x),
                c = s_8b(a.$.y, a.qa.y, a.ka.y);
            a.$.x == b && a.$.y == c || s_Gl(a, b, c)
        },
        s_Gl = function(a, b, c) {
            a.$.x = b;
            a.$.y = c;
            a.Xa(a.Aa, b, c);
            s_ql(a.Aa, s_apa, a)
        };
    s_Dl.prototype.mi = function(a, b, c, d) {
        s_a(c) && 1 == this.Ga && s_Fl(this, this.Aa, c, s_wl, d);
        s_Gl(this, a, b)
    };
    s_Dl.prototype.Vc = function(a) {
        a.target == this.Aa && (this.Ja = !1, this.ma.CP())
    };
    s_Dl.prototype.stop = function() {
        if (this.ma.dA())
            if (2 == this.Ga) this.ma.stop();
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
                        var d = c.m41 + 2 * (c.m41 - a.m41),
                            c = c.m42 + 2 * (c.m42 - a.m42),
                            d = s_8b(d, b.qa.x, b.ka.x),
                            c = s_8b(c, b.qa.y, b.ka.y);
                        s_dpa(b, d, c)
                    }, 0)
                } else s_dpa(this, a.m41, a.m42)
            }
    };
    var s_dpa = function(a, b, c) {
        a.ma.stop();
        s_Gl(a, b, c)
    };
    s_Dl.prototype.iG = function(a) {
        if (this.Ca.qa) return !0;
        this.Da();
        this.ma.dA() ? (a.preventDefault(), this.xc || a.stopPropagation(), this.stop()) : s_Fl(this, this.Aa, 0);
        this.Cc = this.$.clone();
        s_cpa(this);
        return !0
    };
    s_Dl.prototype.nb = function() {};
    s_Dl.prototype.rb = function(a) {
        var b = s_Ioa(this.Ca);
        if (this.Ed && !b || !this.Ka && (!s_epa(this) || b)) return !1;
        for (var b = 0, c; c = this.Kb[b]; ++b)
            if (!c.ka(this, a)) return !1;
        for (b = 0; c = this.Kb[b]; ++b) c.$(this, a);
        return !0
    };
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
            this.Cd || (this.Cd = !0, s_ql(this.Aa, s_9oa, this));
            s_Gl(this, a, b)
        }
    };
    var s_epa = function(a) {
            return a.Yd && a.Ea.width < a.Yb.width
        },
        s_fpa = function(a, b, c) {
            a < b ? a -= (a - b) / 2 : a > c && (a -= (a - c) / 2);
            return a
        };
    s_Dl.prototype.Rb = function() {
        var a = this.Ca.nb;
        s_ql(this.Aa, s_$oa, this);
        if (a && this.De && !this.Ja) {
            var b;
            s_epa(this) || (a.x = 0);
            this.Ka || (a.y = 0);
            b = this.ma.start(a, this.qa, this.ka, this.$)
        }
        b ? s_ql(this.Aa, s_bpa, this) : (s_cpa(this), s_ql(this.Aa, s_El, this), this.Cd = !1)
    };
    var s_Fl = function(a, b, c, d, e) {
        a.Ja = 0 < c;
        s_Roa(b, c, d, e)
    };
    s_Dl.prototype.va = function() {
        return this.Aa
    };
    s_Dl.prototype.getFrame = function() {
        return this.Lb
    };
    s_Dl.prototype.Pb = s_Dl.prototype.mi;
    var s_5oa = function(a) {
        s_Fl(a, a.Aa, 0);
        s_ql(a.Aa, s_El, a);
        a.Cd = !1
    };

    s_C("sy90");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy103");
    var s_Bpa = function(a, b, c, d, e) {
        this.Nb = a;
        this.Da = b;
        this.Ga = c;
        this.Ia = d;
        this.Ca = [];
        this.qa = this.$ = this.Wa = null;
        this.ka = !1;
        this.Ea = e || null;
        this.ma = [];
        s_zpa(this, this.Da, "dragstart", function(a) {
            a.preventDefault();
            return !1
        });
        s_zpa(this, this.Da, "mousedown", s_c(function(a) {
            s_Rba(a) && !this.ka && (this.$ = s_Gd(this.Nb) ? -a.screenX : a.screenX, this.qa = a.screenY, this.Ea && s_w(this.Da, this.Ea), this.Wa = s_p(document, "mousemove", this.Ja, !1, this))
        }, this));
        s_zpa(this, document, "mouseup", s_c(function() {
            if (this.ka) {
                var a = s_e();
                s_1c(document, "click", function(b) {
                    100 > s_e() - a && (b.preventDefault(), b.stopPropagation())
                }, !0)
            }
            s_Apa(this)
        }, this));
        s_zpa(this, document, "mouseout", s_c(function(a) {
            a.relatedTarget && "HTML" != a.relatedTarget.nodeName || s_Apa(this)
        }, this))
    };
    s_Bpa.prototype.Ja = function(a) {
        var b = s_Gd(this.Nb) ? -a.screenX : a.screenX,
            c = a.screenY;
        if (this.ka) {
            if (this.Ga) {
                var d = b - this.$;
                this.$ = b;
                s_kl(this.Nb, s_il(this.Nb) - d)
            }
            this.Ia && (d = c - this.qa, this.$ = c, this.Nb.scrollTop -= d)
        } else {
            if (this.Ga) {
                var e = b - this.$,
                    d = Math.abs(e) - 4;
                0 < d && (this.ka = !0, this.$ = b, 0 > e && (d *= -1), b = s_il(this.Nb), s_kl(this.Nb, b - d))
            }
            this.Ia && (b = c - this.qa, d = Math.abs(b) - 4, 0 < d && (this.ka = !0, this.qa = c, 0 > b && (d *= -1), this.Nb.scrollTop -= d))
        }
        a.preventDefault()
    };
    var s_Apa = function(a) {
            null != a.Wa && s_3c(a.Wa);
            a.Wa = null;
            a.$ = null;
            a.qa = null;
            a.ka = !1;
            a.Ea && s_x(a.Da, a.Ea);
            for (var b = 0; b < a.ma.length; b++) a.ma[b]()
        },
        s_zpa = function(a, b, c, d) {
            s_p(b, c, d);
            a.Ca.push(function() {
                s_2c(b, c, d)
            })
        };
    s_Bpa.prototype.dispose = function() {
        for (var a = 0; a < this.Ca.length; a++) this.Ca[a]();
        this.Ca = []
    };

    s_C("sy103");
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
        },
        s_2i = function(a, b, c) {
            a = a.querySelectorAll('[jsaction^="' + b + ':"], [jsaction*=";' + b + ':"], [jsaction*=" ' + b + ':"]');
            for (var d = 0; d < a.length; ++d) {
                var e = a[d],
                    f;
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
        },
        s_gja = function(a, b, c) {
            c && (a = s_c(a, c));
            var d = null;
            return function(c) {
                s_ca.clearTimeout(d);
                var e = arguments;
                d = s_ca.setTimeout(function() {
                    a.apply(null, e)
                }, b)
            }
        },
        s_hja = function(a) {
            if (!arguments.length) return [];
            for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) arguments[d].length < c && (c = arguments[d].length);
            for (d = 0; d < c; d++) {
                for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d]);
                b.push(e)
            }
            return b
        };
    s_D("sy47");
    var s_3i = function(a) {
            a = a.XM;
            var b = a.rootElement;
            b || (b = a.rootElement = s_l(a.uN));
            return b
        },
        s_ija = function(a) {
            for (; !a.VCa;)
                if (a = a.parentElement, !a) return null;
            return a.VCa
        },
        s_5i = function(a) {
            a = s_3i(a);
            s_4i(a)
        },
        s_4i = function(a) {
            (a = s_ija(a)) && a.render()
        },
        s_6i = function(a, b, c, d) {
            s_Og(s_3i(a), b, c, d)
        },
        s_jja = function(a) {
            a = s_Oe(a);
            for (var b = 0, c = a.length; b < c; b++) {
                var d = a[b];
                if (s_qa(d, "r-")) return d.substring(2)
            }
            return null
        },
        s_kja = function(a) {
            a = s_jja(a);
            s_Wga(a, !0)
        },
        s_7i = function(a) {
            if (a) {
                var b = a.__ctx;
                return b ?
                    b.bP() || null : (a = s_jja(a)) ? s_Wga(a) : null
            }
            return null
        },
        s_8i = function(a) {
            var b = a.__ctx;
            if (b) return (a = b.bP()) ? s_B(a) : s_$e(null);
            (a = s_jja(a)) ? (a = s_Th.$[a] || null) ? (a.controller || s_Vga(a), a.$ || (a.$ = s_bf(), s_Pga(a)), a = a.$.Mc) : a = s_$e(null): a = s_$e(null);
            return a
        };

    s_C("sy47");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy59");
    var s_gj = new s_ej,
        s_hj = function(a) {
            s_gj.publish("r", a)
        },
        s_ij = function() {
            s_gj.publish("ra")
        },
        s_jj = function(a, b, c) {
            var d;
            null === c ? d = b : d = function(a) {
                a && a == s_Oc(c, "xpdbox") && b(a)
            };
            return s_fj(s_gj, a, d)
        },
        s_kj = function(a, b) {
            return s_jj("es", a, b || null)
        },
        s_lj = function(a, b) {
            return s_jj("ef", a, b || null)
        },
        s_mj = function(a, b) {
            return s_jj("cs", a, b || null)
        },
        s_Bja = function(a, b) {
            return s_jj("cf", a, b || null)
        },
        s_nj = function(a) {
            return s_gj.Pv(a)
        },
        s_oj = function(a) {
            s_gj.publish("es", a)
        },
        s_pj = function(a) {
            s_gj.publish("ef", a)
        },
        s_qj = function(a) {
            s_gj.publish("cs", a)
        },
        s_rj = function(a) {
            s_gj.publish("cf", a)
        };

    s_C("sy59");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy95");
    var s_Zk = function(a, b, c, d) {
            this.Da = !!c;
            this.Ja = !!d;
            this.Da && (this.qD = Math.max(800, this.qD));
            this.element = a;
            this.onclick = b;
            s_Qk ? a.ontouchstart = s_c(this.x9, this) : a.onmousedown = s_c(this.N2, this);
            s_Rk && (a.style.msTouchAction = "none");
            a.onclick = s_c(this.EP, this)
        },
        s_Una = [],
        s_Vna = function(a) {
            s_Una.push(a);
            window.setTimeout(function() {
                var b = s_Una.indexOf(a); - 1 != b && s_Una.splice(b, 1)
            }, 2500)
        };
    s_ = s_Zk.prototype;
    s_.oy = 100;
    s_.qD = 500;
    s_.dispose = function() {
        s_Qk ? this.element.ontouchstart = null : this.element.onmousedown = null;
        this.element.onclick = null
    };
    s_.x9 = function(a) {
        this.ka && !this.ka(a) || 1 < s_Wk(a).length || (this.Ja || a.stopPropagation(), this.Wa = !0, this.Da || (this.element.ontouchend = s_c(this.EP, this), document.body.addEventListener("touchend", s_Wna(this), !1)), document.body.addEventListener("touchmove", s_Xna(this), !1), document.body.addEventListener("touchcancel", s_Wna(this), !1), s_Yna(this), a = a.touches[0], this.$ = new s_$b(a.clientX, a.clientY), this.oy ? this.Ma = window.setTimeout(s_c(this.qa, this, !0), this.oy) : this.qa(!0), this.Da || s_Vna(this.$))
    };
    s_.N2 = function(a) {
        if (!this.ka || this.ka(a)) this.Ja || a.stopPropagation(), this.Wa = !0, s_Yna(this), this.qa(!0)
    };
    s_.EP = function(a) {
        if (this.ka && !this.ka(a)) return this.Ea(), !0;
        if (a) {
            if ("touchend" == a.type && !this.Wa) return !1;
            a.stopPropagation()
        }
        this.qa(!0);
        window.setTimeout(s_c(function() {
            this.Ea();
            if (s_Zna(this)) this.onclick(a)
        }, this), 0);
        return !1
    };
    s_.L2 = function(a) {
        1 < s_Wk(a).length ? this.Ea() : (a = s_Wk(a)[0], a = new s_$b(a.clientX, a.clientY), this.$ && 12 < s_bc(this.$, a) && this.Ea())
    };
    var s_Xna = function(a) {
        a.Ga || (a.Ga = s_c(a.L2, a));
        return a.Ga
    };
    s_Zk.prototype.Ea = function() {
        window.clearTimeout(this.Ma);
        window.clearTimeout(this.Ca);
        this.qa(!1);
        this.Wa = !1;
        document.body.removeEventListener && (document.body.removeEventListener("touchmove", s_Xna(this), !1), document.body.removeEventListener("touchend", s_Wna(this), !1), document.body.removeEventListener("touchcancel", s_Wna(this), !1))
    };
    var s_Wna = function(a) {
        a.Ia || (a.Ia = s_c(a.Ea, a));
        return a.Ia
    };
    s_Zk.prototype.qa = function(a) {
        this.ma && (a && !s_Zna(this) || s_Yk(this.element, a, this.ma))
    };
    var s_Zna = function(a) {
            if (!document.elementFromPoint || !a.$ || !s_a(a.$.x)) return !0;
            for (var b = document.elementFromPoint(a.$.x, a.$.y); b;) {
                if (b == a.element) return !0;
                b = b.parentNode
            }
            return !1
        },
        s_Yna = function(a) {
            a.Za && (a.Ca = window.setTimeout(s_c(function() {
                this.Wa = !1;
                this.Za()
            }, a), a.qD))
        };

    s_C("sy95");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy104");
    var s_Pl = function(a, b, c) {
        this.Nb = a;
        this.Ga = b;
        this.$ = null;
        this.Ca = s_Gd(a) ? -1 : 1;
        this.Ea = [];
        this.qa = [];
        this.Da = this.Ia = this.Ma = null;
        this.Wa = !1;
        this.ma = null;
        this.Ja = !1;
        if (s_a(c) ? c : s_Cpa(this)) s_q(a, {
            "overflow-x": "auto",
            "overflow-scrolling": "touch"
        }), s_Dpa(this, a), s_lf() && (this.ma = new s_Bpa(a, b, !0, !1), this.Ea.push(s_c(this.ma.dispose, this.ma)));
        else {
            c = s_il(a);
            var d = s_md(a, "overflow-x");
            "scroll" != d && "auto" != d || s_q(a, {
                "overflow-x": "inherit"
            });
            this.$ = new s_Dl(b, !1, !0, !0, 1, !1, -c * this.Ca);
            this.$.ma.Ea = -.0055;
            s_Ol(this, window, "resize", s_c(this.$.Da, this.$))
        }
    };
    s_f(s_Pl, s_h);
    var s_Epa = function(a, b) {
            a.$ ? (s_Ol(a, a.Ga, s_El, b), a.qa.push(b), a.ma && a.ma.ma.push(b)) : s_Ol(a, a.Nb, "scroll", b)
        },
        s_Fpa = function(a) {
            return Math.max(a.Ga.scrollWidth - a.Nb.offsetWidth, 0)
        };
    s_Pl.prototype.In = function() {
        return this.$ ? -this.$.$.x * this.Ca : s_il(this.Nb)
    };
    s_Pl.prototype.Sy = function(a) {
        if (this.$) {
            a = Math.max(0, Math.min(s_Fpa(this), a));
            var b = this.$;
            s_Gl(b, -a * this.Ca, b.$.y);
            for (b = 0; b < this.qa.length; b++) this.qa[b]()
        } else s_kl(this.Nb, a);
        s_Gpa(this, a)
    };
    var s_Hpa = function(a, b) {
        if (!a.$) {
            var c = a.Nb.scrollHeight;
            if (a.Ja) c -= 16;
            else {
                var d = 16 + parseInt(s_md(a.Nb, "padding-bottom"), 10);
                s_q(a.Nb, {
                    "padding-bottom": d + "px"
                });
                a.Ja = !0
            }
            s_q(b, {
                height: c + "px",
                "overflow-y": "hidden"
            })
        }
    };
    s_Pl.prototype.mi = function(a, b, c) {
        s_Gpa(this, a);
        this.Wa = !0;
        if (this.$) {
            this.$.mi(-a * this.Ca, 0, b);
            var d = this.qa;
            0 < d.length && window.setTimeout(function() {
                for (var a = 0; a < d.length; a++) d[a]()
            }, b)
        } else var e = this.Nb,
            f = s_il(e),
            g = s_e(),
            k = g + b,
            l = c || function(a) {
                return -Math.cos(a * Math.PI) / 2 + .5
            },
            m = window.setInterval(s_c(function() {
                var c = s_e(),
                    d = l(c > k ? 1 : (c - g) / b);
                s_kl(e, f + (a - f) * d);
                c > k && (window.clearInterval(m), this.Wa = !1)
            }, this), 15)
    };
    var s_Cpa = function(a) {
            if (s_tb() && !s_yb("9.0")) return !0;
            var b = /(^|\d)(mobile|tablet)(\d|$)/,
                c = window.google && window.google.kDEB;
            if (c && b.test(c)) return !1;
            if (s_lf()) return !0;
            if (s_Gd(a.Nb)) return !1;
            a = s_Eb() && s_Fb("5");
            b = s_Bb() && s_vb() && s_yb("28");
            return a || b
        },
        s_Dpa = function(a, b) {
            !s_Cb() && !s_ab("iPod") || s_Fb("8") || s_Ol(a, window, "scroll", function() {
                if (b.scrollHeight) {
                    var a = s_Cd(b),
                        d = s_pc().y;
                    s_q(b, "overflow-scrolling", d < a.top + a.height && d > a.top - s_nc().height ? "touch" : "auto")
                }
            })
        },
        s_Ipa = function(a, b, c, d) {
            a.Ma =
                b;
            a.Ia = c;
            a.Da = d;
            b = s_c(function() {
                s_Gpa(this, this.In())
            }, a);
            s_Ol(a, a.Nb, "scroll", b);
            s_Ol(a, window, "resize", b)
        },
        s_Gpa = function(a, b) {
            a.Da && !a.Wa && (s_y(a.Ma, a.Da, 0 >= b), s_y(a.Ia, a.Da, b >= s_Fpa(a)))
        },
        s_Ol = function(a, b, c, d) {
            s_p(b, c, d);
            a.Ea.push(function() {
                s_2c(b, c, d)
            })
        };
    s_Pl.prototype.Ha = function() {
        for (var a = 0, b; b = this.Ea[a++];) b();
        this.Ea = []
    };

    s_C("sy104");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Npa = /^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/,
        s_Opa = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        s_Ppa = /^[a-zA-Z0-9-]+$/,
        s_Qpa = {
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
        },
        s_Rpa = {
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
        },
        s_Ul = function(a) {
            s_Spa(a, "")
        },
        s_Vl = s_ed(function() {
            if (s_Jb) return s_Tb("10.0");
            var a = s_tc("DIV"),
                b = s_Tc(),
                c = {
                    transition: "opacity 1s linear"
                };
            b && (c[b + "-transition"] = "opacity 1s linear");
            b = {
                style: c
            };
            if (!s_Ppa.test("div")) throw Error("da`div");
            if ("DIV" in s_Rpa) throw Error("ea`div");
            var c = null,
                d, e = "";
            if (b)
                for (d in b) {
                    if (!s_Ppa.test(d)) throw Error("fa`" +
                        d);
                    var f = b[d];
                    if (null != f) {
                        var g;
                        g = d;
                        if (f instanceof s_Vb) f = s_Wb(f);
                        else if ("style" == g.toLowerCase()) {
                            if (!s_ma(f)) throw Error("ia`" + typeof f + "`" + f);
                            if (!(f instanceof s_Yb)) {
                                var k = "",
                                    l = void 0;
                                for (l in f) {
                                    if (!/^[-_a-zA-Z0-9]+$/.test(l)) throw Error("$`" + l);
                                    var m = f[l];
                                    if (null != m) {
                                        if (m instanceof s_Vb) m = s_Wb(m);
                                        else if (s_Npa.test(m)) {
                                            for (var n = !0, ba = !0, t = 0; t < m.length; t++) {
                                                var w = m.charAt(t);
                                                "'" == w && ba ? n = !n : '"' == w && n && (ba = !ba)
                                            }
                                            n && ba || (m = "zClosurez")
                                        } else m = "zClosurez";
                                        k += l + ":" + m + ";"
                                    }
                                }
                                f = k ? s_8aa(k) : s_9aa
                            }
                            f instanceof
                            s_Yb && f.constructor === s_Yb && f.ka === s_7aa ? f = f.$ : (s_fa(f), f = "type_error:SafeStyle")
                        } else {
                            if (/^on/i.test(g)) throw Error("ga`" + g + "`" + f);
                            if (g.toLowerCase() in s_Opa)
                                if (f instanceof s_2b) f = s_kba(f);
                                else if (f instanceof s__b) f = s_0b(f);
                            else if (s_ja(f)) f = s_1b(f).yo();
                            else throw Error("cd`" + g + "`div`" + f);
                        }
                        f.qu && (f = f.yo());
                        g = g + '="' + s_xa(String(f)) + '"';
                        e += " " + g
                    }
                }
            d = "<div" + e;
            e = void 0;
            null != e ? s_ha(e) || (e = [e]) : e = [];
            !0 === s_Qpa.div ? d += ">" : (c = s_nba(e), d += ">" + s_4b(c) + "</div>", c = c.Vq());
            (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
            b = s_5b(d, c);
            s_7b(a, b);
            return "" != s_ld(a.firstChild, "transition")
        }),
        s_Spa = function(a, b) {
            s_q(a, "transition", b)
        };

    s_C("sy102");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy190");
    var s_8Da = function() {
        var a = s_kf() || s_jf(),
            b = s_xb(),
            c = s_vb() && s_yb("32");
        return a && !b && !c
    };
    s_C("sy190");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy192");
    var s_tr = function(a, b, c) {
        this.Bc = a;
        this.zl = b;
        this.Md = c;
        this.Lb = a;
        this.Ja = s_Gd(this.Bc) ? -1 : 1;
        this.$ = 0;
        this.Da = !0
    };
    s_tr.prototype.ka = 500;
    s_tr.prototype.Xa = .5;
    var s_ur = s_rl("baseslider:start_slide"),
        s_vr = s_rl("baseslider:slide_move"),
        s_wr = s_rl("baseslider:card_changed"),
        s_xr = s_rl("baseslider:momentum_finished");
    s_tr.prototype.initialize = function() {
        this.Da && (this.Za = new s_vl(this), this.Za.enable(!1), this.Ma = s_Koa(this.Za, this))
    };
    s_tr.prototype.va = function() {
        return this.Lb
    };
    s_tr.prototype.iG = function() {
        return !0
    };
    s_tr.prototype.nb = s_b;
    var s_sEa = function(a, b, c, d, e, f) {
            a.$++;
            b = {
                Dr: b,
                Uf: c,
                lE: d,
                animate: !!e,
                yF: f || 0
            };
            s_ql(a.Bc, s_wr, a, b);
            a.$--;
            return b
        },
        s_tEa = function(a, b, c) {
            a.Ca = b;
            window.setTimeout(s_c(b, a, !0), c)
        };
    s_tr.prototype.reset = function() {
        this.Za && this.Za.reset();
        this.Ea = null
    };
    s_tr.prototype.Wa = function() {
        var a = s_Hoa(this.Ma);
        if (!s_a(a)) return 0;
        s_uEa(this, a * this.Ja) && (a *= this.Xa);
        return a
    };
    var s_uEa = function(a, b) {
        return 0 >= a.Md && 0 < b || a.Md >= a.zl.length - 1 && 0 > b
    };
    var s_yr = function(a, b, c) {
        s_tr.call(this, a, b, c);
        this.Ia = {
            left: 1,
            right: 1
        };
        this.Ga = .3;
        this.Db = 0;
        s_vEa(this);
        this.Ka = !1
    };
    s_f(s_yr, s_tr);
    s_yr.prototype.rb = function(a) {
        if (this.$ || s_Ioa(this.Ma)) return !1;
        if (this.Ka) {
            var b = 0 == this.Md,
                c = this.Md == this.zl.length - 1,
                d = 0 < this.Wa() == s_Gd(this.Bc);
            if (c && d || b && !d) return !1
        }
        this.$++;
        s_zr(this);
        this.Ea = a.target;
        this.Ca && this.Ca(!1);
        this.$++;
        s_ql(this.Bc, s_ur, this);
        this.$--;
        a = this.Wa();
        s_zl(this.Bc, a);
        this.$--;
        return !!this.Ea
    };
    s_yr.prototype.Ub = function() {
        this.$++;
        var a = this.Wa();
        s_zl(this.Bc, a);
        s_wEa(this);
        this.$--
    };
    s_yr.prototype.Rb = function() {
        this.$++;
        s_wEa(this);
        var a = this.Wa();
        s_zl(this.Bc, a);
        var a = a * this.Ja,
            b = s_zr(this),
            c = -1 * a / b,
            b = this.Md;
        c > this.Ga ? b += Math.ceil(c - this.Ga) : c < -this.Ga && (b += Math.floor(c + this.Ga));
        c = (c = this.Ma.nb) ? c.x * this.Ja : 0;
        if (.5 < Math.abs(c)) {
            var d = 0 > c;
            0 != a && d != 0 > a ? b = this.Md : b == this.Md && (b += d ? 1 : -1)
        }
        b = Math.max(0, Math.min(b, this.zl.length - 1));
        a = Math.abs((b - this.Md) * s_zr(this) + a);
        s_Ar(this, b, !0, !0, c ? a ? s_uEa(this, c) ? this.ka : Math.max(0, Math.min(this.ka, a / (.6259995851410399 * Math.abs(c)))) : 0 : this.ka);
        this.Ea = null;
        this.$--
    };
    var s_wEa = function(a) {
            a.$++;
            var b = a.Wa();
            s_ql(a.Bc, s_vr, a, {
                deltaX: b,
                lfa: 0,
                Pca: b
            });
            a.$--
        },
        s_Ar = function(a, b, c, d, e) {
            a.ma && (b = Math.min(b, s_xEa(a)));
            a.Ca && a.Ca(!1);
            var f = d ? s_a(e) ? e : a.ka : void 0;
            d = a.Md;
            var g = b - d;
            g || a.$ || (f = 0);
            if (f) {
                e = b - a.qa;
                if (a.ma && 0 != g) {
                    var g = s_yEa(a),
                        g = g - Math.floor(g),
                        k = s_xEa(a);
                    d < k && b >= k ? e = k - d - g : b >= k ? e = 0 : b < k && d >= k && (e = -(k - b - g))
                }
                s_zEa(a, e, f)
            }
            a.Md = b;
            var l = s_sEa(a, d, b, !!c, !!f, f),
                m = function(a) {
                    this.Ca == m && (this.Ca = void 0, !a && c && f && !this.Ea || s_vEa(this), this.$++, s_ql(this.Bc, s_xr, this, {
                        jw: l,
                        mda: a
                    }), this.$--)
                };
            s_tEa(a, m, f || 0)
        },
        s_zEa = function(a, b, c) {
            var d = -b * s_zr(a) * a.Ja;
            if (c) {
                var e = b < -a.Ia.left,
                    f = b;
                a.ma && (f += Math.max(1, Math.ceil(s_yEa(a)) - 1));
                f = f > a.Ia.right;
                if (e || f) b = a.qa + Math.ceil(b), e = b + (e ? -1 : 1), s_a(b) && 0 <= b && b < a.zl.length && s_AEa(a, b), s_a(e) && 0 <= e && e < a.zl.length && s_AEa(a, e);
                (e = s_Pk() && !(s_Pk() && s_0na())) || (e = navigator.userAgent, e = s_Pna.test(navigator.userAgent) ? !(s_ya(e, "Safari") && s_ya(e, "Version")) && s_3na() >= s_2na(4) : !1);
                e ? s_BEa(a, d, c) : (s_Roa(a.Bc, c, s_wl, "ease-out"), s_zl(a.Bc, d))
            } else a.Bc.style[s_Ooa] =
                "", s_zl(a.Bc, d), s_vEa(a)
        },
        s_BEa = function(a, b, c) {
            var d = s_yl(a.Bc).m41 || 0,
                e = s_e(),
                f = e + c,
                g = null;
            a = s_c(function() {
                if (this.Ca) {
                    var a = s_e(),
                        l = a > f ? 1 : (a - e) / c;
                    s_zl(this.Bc, Math.round(d + (b - d) * l * (2 - l)));
                    a > f && window.clearInterval(g)
                } else window.clearInterval(g)
            }, a);
            g = window.setInterval(a, 15);
            window.setTimeout(a, 0)
        },
        s_vEa = function(a) {
            if (a.zl.length) {
                var b = a.Md;
                a.qa = a.Md;
                a.Bc.style[s_Ooa] = "";
                s_AEa(a, a.qa);
                b != a.qa && s_CEa(a, b);
                a.Bc.style[s_xl] = "";
                if (a.ma)
                    if (b = s_Gd(a.Bc) ? "marginRight" : "marginLeft", a.qa >= s_xEa(a) &&
                        a.ma.offsetWidth < a.zl.length * s_zr(a)) {
                        var c = (a.zl.length - a.qa) * s_zr(a);
                        a.Bc.style[b] = a.ma.offsetWidth - c + "px"
                    } else a.Bc.style[b] = "0px";
                for (b = 0; b < a.zl.length; b++) b != a.qa && s_CEa(a, b)
            }
        },
        s_CEa = function(a, b) {
            var c = b - a.qa;
            c >= -a.Ia.left && c <= a.Ia.right ? s_AEa(a, b) : (c = a.zl[b], c.style.position = "absolute", c.style.display = "none", c.setAttribute("aria-hidden", "true"))
        },
        s_AEa = function(a, b) {
            var c = a.zl[b];
            b == a.qa ? (c.style.position = "static", c.style.display = "block", c.setAttribute("aria-hidden", "false")) : (c.style.position =
                "absolute", c.style.display = "block", c.setAttribute("aria-hidden", "true"));
            var d = b - a.qa,
                e = c.style[s_xl],
                e = s_ja(e) && e.match(/translate(3d)?\(-?[0-9]*(%|px)?, ?(-?[0-9][0-9]*(%|px)?)/);
            s_zl(c, 100 * d * a.Ja + "%", e ? e[3] : "0px")
        },
        s_Br = function(a, b, c) {
            a.Ia = {
                left: b,
                right: c
            };
            s_vEa(a)
        },
        s_DEa = function(a, b) {
            a.ma = b;
            var c = Math.max(1, Math.ceil(s_yEa(a)));
            s_Br(a, c, c)
        },
        s_zr = function(a) {
            0 != a.Db && a.Ea || (a.Db = a.Bc.offsetWidth);
            return a.Db
        },
        s_yEa = function(a) {
            return a.ma ? a.ma.offsetWidth / s_zr(a) : 1
        },
        s_xEa = function(a) {
            return a.ma ? Math.max(0, a.zl.length - Math.floor(s_yEa(a))) : a.zl.length
        };
    s_yr.prototype.reset = function() {
        s_Ar(this, this.Md, !0, !1);
        s_yr.Ba.reset.call(this)
    };

    s_C("sy192");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_EEa = function(a, b) {
        s_bha({
            event: a,
            targetElement: b
        })
    };
    s_D("sy191");
    var s_Cr = function(a) {
        this.$ = a
    };
    s_Cr.prototype.toString = function() {
        return this.$
    };
    var s_Dr = function(a) {
        s_h.call(this);
        this.$ = new s_ej(a);
        this.ka(this.$)
    };
    s_f(s_Dr, s_h);
    var s_Er = function(a, b, c, d) {
        return s_fj(a.$, b.toString(), c, d)
    };
    s_Dr.prototype.Pv = function(a) {
        return this.$.Pv(a)
    };
    s_Dr.prototype.publish = function(a, b) {
        return this.$.publish(a.toString(), b)
    };
    s_Dr.prototype.clear = function(a) {
        this.$.clear(s_a(a) ? a.toString() : void 0)
    };
    s_Dr.prototype.ze = function(a) {
        return this.$.ze(s_a(a) ? a.toString() : void 0)
    };
    var s_FEa = !s_Cb(),
        s_Fr = new s_Dr,
        s_GEa = new s_Cr("l"),
        s_HEa = new s_Cr("t"),
        s_IEa = new s_Cr("v"),
        s_JEa = new s_Cr("w");
    s_C("sy191");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy498");
    var s_Jdc = function(a, b, c) {
        for (var d = a; null !== d && !s_v(d, "obcontainer");) {
            if (d == document.body) return;
            d = d.parentNode
        }
        d = d ? d.querySelectorAll("div.obselector") : [];
        google.log("prose_onebox_dropdown", "&id=" + b);
        for (b = 0; b < d.length; ++b) d[b].style.display = "none";
        "undefined" == typeof c ? d[a.selectedIndex].style.display = "inline" : d[c].style.display = "inline"
    };

    s_C("sy498");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy189");
    s_C("sy189");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy497");
    var s_Cdc = new s_ej,
        s_NT = new s_je;
    var s_Ddc = 0,
        s_Edc = 0,
        s_Fdc = 0,
        s_Gdc = 0,
        s_Hdc = function(a) {
            a = a.querySelectorAll("img[data-src]");
            for (var b = 0, c; c = a[b++];) c.src = s_t(c, "src"), s_Fe(c, "src")
        },
        s_Idc = function(a) {
            s_Hdc(a.vB)
        };
    s_we("lrli", {
        init: function() {
            s_Edc = s_lj(s_Hdc);
            s_Ddc = s_jj("hc", s_Hdc, null);
            s_Fdc = s_Er(s_Fr, s_GEa, s_Idc);
            s_Gdc = s_fj(s_Cdc, "a", s_Hdc)
        },
        dispose: function() {
            s_Edc && (s_nj(s_Edc), s_Edc = 0);
            s_Ddc && (s_nj(s_Ddc), s_Ddc = 0);
            s_Fdc && (s_Fr.Pv(s_Fdc), s_Fdc = 0);
            s_Gdc && (s_Cdc.Pv(s_Gdc), s_Gdc = 0)
        }
    });

    s_C("sy497");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy499");
    s_C("sy499");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Kdc = function(a) {
            google.log && google.log("lr-to", "eid=" + a.id);
            s_w(a, "lr-cato")
        },
        s_Ldc = function(a) {
            s_x(a, "lr-cato");
            if (s_me(s_NT, a.id)) {
                var b = s_NT.get(a.id);
                s_Gf(b);
                s_NT.remove(a.id);
                return !0
            }
            return !1
        },
        s_Mdc = function() {
            s_he(document.querySelectorAll(".lr-uoa"), function(a) {
                s_qk(a)
            })
        },
        s_Ndc = function(a) {
            s_Ldc(a)
        },
        s_Odc = function(a) {
            var b = s_Ldc(a);
            a.querySelector(".lr-caso") && (s_w(a, "lr-caso"), google.log && google.log("lr-se", "eid=" + a.id));
            if (b)
                for (s_gj.publish("rnc", a), s_Cdc.publish("a", a), a = a.querySelectorAll(".tb_xpnd"),
                    b = 0; b < a.length; ++b) s_Re(a[b], "tb_xpnd", "xpdxpnd")
        },
        s_Pdc = function(a) {
            s_Ldc(a);
            var b = s_d(s_Kdc, a),
                c;
            c = s_Ee(a, "lrAsyncTimeout") ? s_Ia(s_t(a, "lrAsyncTimeout")) : 1E4;
            b = s_F(b, c);
            s_NT.set(a.id, b)
        },
        s_Qdc = function() {
            s_1h("kax", {
                tc: s_c(this.$, this)
            })
        },
        s_Rdc = function(a, b, c, d) {
            b = s_k("kno-axpnd", b);
            var e = s_c(function(a) {
                0 == parseInt(a.style.maxHeight, 10) && s_w(a, "kno-ahide")
            }, a);
            for (a = 0; a < b.length; ++a) {
                var f = s_Cc(b[a]);
                f && (c ? (s_x(b[a], "kno-ahide"), b[a].style.maxHeight = f.clientHeight + "px") : (b[a].style.maxHeight = "0",
                    f = s_md(b[a], "transitionDuration"), "" != f && "none" != f ? s_1c(b[a], s_Wc, function(a) {
                        e(a.currentTarget)
                    }, !1) : e(b[a])), d && google.log("accordion_container_legacy", (c ? "expand" : "collapse") + "__" + d))
            }
        };
    s_Qdc.prototype.$ = function(a, b, c) {
        c = c ? c.srcElement || c.target : null;
        if (!c || "A" != c.nodeName) {
            c = "1" == b.knoAco;
            var d = b.knoAtc,
                e = s_Oc(a, "kno-ac");
            if (d && (a = s_l(d, e), !a)) return;
            b = b.knoAlogId;
            (e = s_l("kno-aoc", e)) && (e == a || c) && (s_x(e, "kno-aoc"), s_Rdc(this, e, !1, e == a ? b : null));
            e != a && (s_w(a, "kno-aoc"), s_Rdc(this, a, !0, b))
        }
    };
    var s_Sdc = function() {
        s_NT && (s_he(s_NT.ii(!1), function(a) {
            s_Gf(a)
        }), s_NT.clear())
    };
    s_D("lr");
    var s_Tdc = function(a, b, c) {
            a.appendChild(s_m("INPUT", {
                type: "hidden",
                name: b,
                value: c
            }))
        },
        s_Udc = function(a, b) {
            var c = a.form;
            if (!c) return !1;
            var d = s_l("lr_lt", c),
                e = s_l("lr_fh", c);
            if (!d || !e) return !1;
            d.value = s_ua(d.value);
            if ("" === d.value) return !1;
            c.action = "/search";
            e.innerHTML = b.requeryHiddenInputs;
            d.name = "near";
            var d = s_Ge(a),
                f = google.getEI(a);
            d && s_Tdc(e, "ved", d);
            f && s_Tdc(e, "ei", f);
            c.submit();
            return !0
        };
    var s_Vdc = function(a) {
        s_ye(a, "scroll", function() {
            if (null == a.getAttribute("data-lrscrll-logged")) {
                var b = a.getAttribute("data-lrscrll-msg");
                null != b && google.log(b, "scroll");
                a.setAttribute("data-lrscrll-logged", "logged")
            }
        })
    };
    var s_Wdc = function(a) {
            return s_Oc(a, "lrsl_u") || a
        },
        s_Xdc = function() {
            for (var a = document.querySelectorAll(".lrsl_c"), b = 0, c = a[0]; c; c = a[++b]) {
                var d = c.querySelector(".lrsl"),
                    e = c.querySelector(".lrsl_t");
                if ((c = c.querySelector(".lrsl_s")) && d && e) {
                    var f = s_Wdc(d),
                        g = s_wd(d);
                    s_ye(c, "scroll", function() {
                        var a = f,
                            b = g,
                            c = s_wd(e);
                        c <= b ? a.style.display = "none" : c >= b && (a.style.display = "")
                    })
                }
            }
        };
    s_we("lr", {
        init: function() {
            s_1h("lr", {
                af: s_Odc,
                al: s_Pdc,
                ae: s_Ndc
            });
            s_Mdc();
            new s_Qdc;
            for (var a = document.querySelectorAll(".lrscrll"), b = 0, c = a[0]; c; c = a[++b]) s_Vdc(c);
            s_Xdc();
            s_1h("lr", {
                sf: s_Udc
            })
        },
        dispose: function() {
            s_Sdc()
        }
    });
    s_C("lr");
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
                    var e = c[d].indexOf("="),
                        f, g = null;
                    0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
                    b(f, g ? s_wa(g) : "")
                }
        },
        s_pwa = function() {
            return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ s_e()).toString(36)
        };
    s_D("sy166");
    var s_Uo = function(a, b) {
        this.ka = this.Da = this.qa = "";
        this.Wa = null;
        this.Ea = this.ma = "";
        this.Ca = !1;
        var c;
        a instanceof s_Uo ? (this.Ca = s_a(b) ? b : a.Ca, s_Vo(this, a.qa), this.Da = a.Da, s_Wo(this, a.ka), s_Xo(this, a.Wa), s_Yo(this, a.ma), s_Zo(this, a.$.clone()), s__o(this, a.Ea)) : a && (c = s_2d(String(a))) ? (this.Ca = !!b, s_Vo(this, c[1] || "", !0), this.Da = s_0o(c[2] || ""), s_Wo(this, c[3] || "", !0), s_Xo(this, c[4]), s_Yo(this, c[5] || "", !0), s_Zo(this, c[6] || "", !0), s__o(this, c[7] || "", !0)) : (this.Ca = !!b, this.$ = new s_1o(null, 0, this.Ca))
    };
    s_Uo.prototype.toString = function() {
        var a = [],
            b = this.qa;
        b && a.push(s_2o(b, s_qwa, !0), ":");
        var c = this.ka;
        if (c || "file" == b) a.push("//"), (b = this.Da) && a.push(s_2o(b, s_qwa, !0), "@"), a.push(s_va(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.Wa, null != c && a.push(":", String(c));
        if (c = this.ma) this.ka && "/" != c.charAt(0) && a.push("/"), a.push(s_2o(c, "/" == c.charAt(0) ? s_rwa : s_swa, !0));
        (c = this.$.toString()) && a.push("?", c);
        (c = this.Ea) && a.push("#", s_2o(c, s_twa));
        return a.join("")
    };
    s_Uo.prototype.resolve = function(a) {
        var b = this.clone(),
            c = !!a.qa;
        c ? s_Vo(b, a.qa) : c = !!a.Da;
        c ? b.Da = a.Da : c = !!a.ka;
        c ? s_Wo(b, a.ka) : c = null != a.Wa;
        var d = a.ma;
        if (c) s_Xo(b, a.Wa);
        else if (c = !!a.ma) {
            if ("/" != d.charAt(0))
                if (this.ka && !this.ma) d = "/" + d;
                else {
                    var e = b.ma.lastIndexOf("/"); - 1 != e && (d = b.ma.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (s_ya(e, "./") || s_ya(e, "/.")) {
                for (var d = s_qa(e, "/"), e = e.split("/"), f = [], g = 0; g < e.length;) {
                    var k = e[g++];
                    "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length &&
                        "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? s_Yo(b, d) : c = "" !== a.$.toString();
        c ? s_Zo(b, s_0o(a.$.toString())) : c = !!a.Ea;
        c && s__o(b, a.Ea);
        return b
    };
    s_Uo.prototype.clone = function() {
        return new s_Uo(this)
    };
    var s_Vo = function(a, b, c) {
            a.qa = c ? s_0o(b, !0) : b;
            a.qa && (a.qa = a.qa.replace(/:$/, ""))
        },
        s_Wo = function(a, b, c) {
            a.ka = c ? s_0o(b, !0) : b
        },
        s_Xo = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("sa`" + b);
                a.Wa = b
            } else a.Wa = null
        },
        s_Yo = function(a, b, c) {
            a.ma = c ? s_0o(b, !0) : b;
            return a
        },
        s_Zo = function(a, b, c) {
            b instanceof s_1o ? (a.$ = b, s_uwa(a.$, a.Ca)) : (c || (b = s_2o(b, s_vwa)), a.$ = new s_1o(b, 0, a.Ca));
            return a
        };
    s_Uo.prototype.getQuery = function() {
        return this.$.toString()
    };
    var s_3o = function(a, b, c) {
            a.$.set(b, c);
            return a
        },
        s_4o = function(a, b, c) {
            s_ha(c) || (c = [String(c)]);
            s_wwa(a.$, b, c)
        },
        s_5o = function(a, b) {
            return a.$.get(b)
        },
        s__o = function(a, b, c) {
            a.Ea = c ? s_0o(b) : b;
            return a
        },
        s_6o = function(a, b) {
            return a instanceof s_Uo ? a.clone() : new s_Uo(a, b)
        },
        s_xwa = function(a, b, c, d, e, f) {
            var g = new s_Uo(null, void 0);
            a && s_Vo(g, a);
            b && s_Wo(g, b);
            c && s_Xo(g, c);
            d && s_Yo(g, d);
            e && s_Zo(g, e);
            f && s__o(g, f);
            return g
        },
        s_0o = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        s_2o = function(a, b, c) {
            return s_ja(a) ? (a = encodeURI(a).replace(b, s_ywa), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        s_ywa = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        s_qwa = /[#\/\?@]/g,
        s_swa = /[\#\?:]/g,
        s_rwa = /[\#\?]/g,
        s_vwa = /[\#\?@]/g,
        s_twa = /#/g,
        s_1o = function(a, b, c) {
            this.ka = this.$ = null;
            this.ma = a || null;
            this.qa = !!c
        },
        s_7o = function(a) {
            a.$ || (a.$ = new s_je, a.ka = 0, a.ma && s_owa(a.ma, function(b, c) {
                a.add(s_wa(b), c)
            }))
        },
        s_zwa = function(a) {
            var b = s_Qca(a);
            if ("undefined" ==
                typeof b) throw Error("Bd");
            var c = new s_1o(null, 0, void 0);
            a = s_ne(a);
            for (var d = 0; d < b.length; d++) {
                var e = b[d],
                    f = a[d];
                s_ha(f) ? s_wwa(c, e, f) : c.add(e, f)
            }
            return c
        };
    s_ = s_1o.prototype;
    s_.ze = function() {
        s_7o(this);
        return this.ka
    };
    s_.add = function(a, b) {
        s_7o(this);
        this.ma = null;
        a = s_8o(this, a);
        var c = this.$.get(a);
        c || this.$.set(a, c = []);
        c.push(b);
        this.ka += 1;
        return this
    };
    s_.remove = function(a) {
        s_7o(this);
        a = s_8o(this, a);
        return s_me(this.$, a) ? (this.ma = null, this.ka -= this.$.get(a).length, this.$.remove(a)) : !1
    };
    s_.clear = function() {
        this.$ = this.ma = null;
        this.ka = 0
    };
    s_.isEmpty = function() {
        s_7o(this);
        return 0 == this.ka
    };
    var s_Awa = function(a, b) {
        s_7o(a);
        b = s_8o(a, b);
        return s_me(a.$, b)
    };
    s_ = s_1o.prototype;
    s_.Us = function(a) {
        var b = this.Xc();
        return s_Ta(b, a)
    };
    s_.Pf = function() {
        s_7o(this);
        for (var a = this.$.Xc(), b = this.$.Pf(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    s_.Xc = function(a) {
        s_7o(this);
        var b = [];
        if (s_ja(a)) s_Awa(this, a) && (b = s_Za(b, this.$.get(s_8o(this, a))));
        else {
            a = this.$.Xc();
            for (var c = 0; c < a.length; c++) b = s_Za(b, a[c])
        }
        return b
    };
    s_.set = function(a, b) {
        s_7o(this);
        this.ma = null;
        a = s_8o(this, a);
        s_Awa(this, a) && (this.ka -= this.$.get(a).length);
        this.$.set(a, [b]);
        this.ka += 1;
        return this
    };
    s_.get = function(a, b) {
        var c = a ? this.Xc(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    var s_wwa = function(a, b, c) {
        a.remove(b);
        0 < c.length && (a.ma = null, a.$.set(s_8o(a, b), s__a(c)), a.ka += c.length)
    };
    s_1o.prototype.toString = function() {
        if (this.ma) return this.ma;
        if (!this.$) return "";
        for (var a = [], b = this.$.Pf(), c = 0; c < b.length; c++)
            for (var d = b[c], e = s_va(d), d = this.Xc(d), f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + s_va(d[f]));
                a.push(g)
            }
        return this.ma = a.join("&")
    };
    s_1o.prototype.clone = function() {
        var a = new s_1o;
        a.ma = this.ma;
        this.$ && (a.$ = this.$.clone(), a.ka = this.ka);
        return a
    };
    var s_8o = function(a, b) {
            var c = String(b);
            a.qa && (c = c.toLowerCase());
            return c
        },
        s_uwa = function(a, b) {
            b && !a.qa && (s_7o(a), a.ma = null, a.$.forEach(function(a, b) {
                var c = b.toLowerCase();
                b != c && (this.remove(b), s_wwa(this, c, a))
            }, a));
            a.qa = b
        };
    s_1o.prototype.extend = function(a) {
        for (var b = 0; b < arguments.length; b++) s_Rca(arguments[b], function(a, b) {
            this.add(b, a)
        }, this)
    };

    s_C("sy166");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("lu");
    var s_dWc = ["luibli", "luibbri"],
        s_eWc = {},
        s_UZ = -1,
        s_fWc = null,
        s_gWc = function(a, b, c) {
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
            };
            f.style.display = "none";
            c = f.src.split("&")[0] + "&w=" + e;
            void 0 !== d && (c += "&h=" + d);
            f.src = c;
            null != f.parentNode && (f.parentNode.style.width =
                e + "px", void 0 !== d && (f.parentNode.style.height = d + "px"));
            b.appendChild(a)
        },
        s_hWc = function(a) {
            if (!a) return null;
            var b, c = 0,
                d;
            for (d in a)
                if (d = Number(d), 0 < a[d].offsetHeight) {
                    b = a[d];
                    c = d;
                    break
                }
            if (!b) return null;
            if (!b.firstChild) {
                var e;
                for (d in a)
                    if (d = Number(d), a[d].firstChild) {
                        e = a[d];
                        break
                    }
                s_gWc(e.firstChild, b, c)
            }
            return {
                element: b,
                wFa: c
            }
        },
        s_kWc = function() {
            for (var a = s_iWc(), b = !1, c = 0; c < s_dWc.length; c++)
                for (var d = s_k(s_dWc[c]), e = 0; e < d.length; e++) s_jWc(d[e]) && (b = !0);
            return a || b
        },
        s_iWc = function() {
            var a = s_i("rhs_block");
            if (!a || 0 == a.offsetHeight) return !1;
            a: {
                for (var b = {}, c = 3; 5 >= c; c++)
                    if (b[c] = a.querySelector(".rhsmap" + c + "col"), b[c]) b[c].column_count = c;
                    else {
                        a = null;
                        break a
                    }
                a = b
            }
            b = s_hWc(a);
            if (!b) return !1;
            a = b.wFa;
            if (s_UZ == a && s_eWc[s_UZ]) return !0;
            b = b.element.getElementsByTagName("IMG")[0];
            b.id || (s_i("lu_map").id = "", b.id = "lu_map");
            s_eWc[a] || (s_eWc[a] = !0);
            s_UZ = a;
            return !0
        },
        s_jWc = function(a) {
            for (var b = [], c, d = 3; 5 >= d; d++) {
                var e = a.querySelector(".luib-" + d);
                if (!e) return !1;
                e = e.querySelector(".thumb");
                if (!e) return !1;
                b.push(e);
                0 < e.offsetHeight &&
                    (c = e)
            }
            if (!c) return !1;
            var e = parseInt(c.style.width, 10),
                f = parseInt(c.style.height, 10);
            if ((d = c.querySelector("img")) && d.src) return !0;
            for (var g, k, d = 0; d < b.length; d++) {
                var l = b[d].querySelector("img");
                if (l && l.src) {
                    g = s_m("DIV");
                    g.innerHTML = b[d].innerHTML;
                    k = l;
                    break
                }
            }
            if (!k) return !1;
            b = g.querySelector("img");
            d = "1" == a.getAttribute("data-crop");
            d || (b.width = e, b.height = f, k = s_6o(k.src), s_3o(k, "w", parseInt(e, 10)), s_3o(k, "h", parseInt(f, 10)), b.src = k.toString());
            c.innerHTML = g.innerHTML;
            d && (b = c.querySelector("img"), s_Gd(a) ?
                b.style.right = (e - b.width) / 2 + "px" : b.style.left = (e - b.width) / 2 + "px", b.style.top = (f - b.height) / 2 + "px");
            return !0
        };
    s_we("lu", {
        init: function() {
            "webhp" != google.sn && s_i("lu_map") && (s_kWc() ? (s_fWc = s_5e(null, s_kWc, !0), s_Me(60, s_fWc)) : (s_UZ = 3, s_eWc[s_UZ] = !0))
        },
        dispose: function() {
            s_fWc && (s_Ne(60, s_fWc), s_fWc = null);
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
    var s_D5 = null;
    var s_xAd, s_yAd, s_zAd, s_AAd, s_BAd, s_E5, s_CAd = {},
        s_F5 = null,
        s_G5 = null,
        s_H5 = [],
        s_EAd = function() {
            s_D5.ab.on && (s_Me(41, s_DAd), s_Me(37, function(a) {
                a && (a = s_i("appbar")) && (a.style.visibility = "hidden")
            }), s_i("pocs"))
        },
        s_FAd = function() {
            return s_i("sftab") || s_i("lst-ib")
        },
        s_GAd = function() {
            var a = s_FAd();
            a && s_w(a, "lst-d-f")
        },
        s_HAd = function() {
            var a = s_FAd();
            a && s_x(a, "lst-d-f")
        },
        s_IAd = function(a) {
            this.element = a;
            this.$ = [];
            this.ka = null;
            "ab_opt" == this.element.id && 0 == this.element.childNodes.length && gbar.aomc(this.element);
            a = s_k("ab_dropdownitem", this.element);
            for (var b = 0, c; c = a[b]; b++) s_v(c, "disabled") || this.$.push(c)
        },
        s_KAd = function(a) {
            var b = s_F5;
            s_JAd(b, null == b.ka ? a ? 0 : b.$.length - 1 : (b.ka + (a ? 1 : b.$.length - 1)) % b.$.length)
        },
        s_JAd = function(a, b) {
            var c = a.$[b];
            c && (s_LAd(a), s_w(c, "selected"), c.setAttribute("aria-selected", "true"), c = c.querySelector("a, .action-menu-button") || c, c.setAttribute("tabindex", "0"), c.focus(), a.ka = b)
        },
        s_LAd = function(a) {
            var b = a.$[a.ka];
            b && (s_x(b, "selected"), b.setAttribute("aria-selected", "false"), (b.querySelector("a, .action-menu-button") ||
                b).setAttribute("tabindex", "-1"), a.element.focus(), a.ka = null)
        };
    s_IAd.prototype.kd = function(a) {
        for (var b = 0, c; c = this.$[b]; b++)
            if (a == c) {
                b != this.ka && s_JAd(this, b);
                break
            }
    };
    var s_NAd = function(a) {
            var b = (a = s_Oc(a, "ab_button")) && s_G5 != a;
            s_F5 && s_I5();
            a && b && s_MAd(a)
        },
        s_OAd = function(a) {
            google.ac && google.ac.cc && google.ac.cc();
            s_We(a.href);
            return !0
        },
        s_PAd = function(a, b, c) {
            32 == c.keyCode && s_We(a.href)
        },
        s_QAd = function(a) {
            s_s(s_i("ufp"), "block");
            s_NAd(a)
        },
        s_MAd = function(a, b) {
            var c;
            c = s_na(a);
            if (void 0 == s_CAd[c]) {
                var d;
                d = s_Oc(a, "ab_ctl");
                var e = null;
                d && (d = s_l("ab_dropdown", d)) && (e = new s_IAd(d));
                s_CAd[c] = e
            }
            if (c = s_CAd[c]) s_w(a, "selected"), a.setAttribute("aria-expanded", "true"), s_G5 = a,
                c.element.style.visibility = "inherit", s_F5 = c, c = a.id.indexOf("am-b"), a.id && -1 != c && (c = s_Gc(a)) && s_v(c, "action-menu") && (c = s_l("action-menu-panel", c)) && s_z(a, [c], [], "", "&id=" + a.id), s_ye(document.body, "click", s_I5), s_ye(document.body, "keydown", s_RAd), b && s_KAd(!0)
        },
        s_I5 = function(a) {
            s_F5 && ((a = a || window.event) && "click" == a.type && s_Oc(s_3e(a), "ab_button") && (s_4e(a), a.preventDefault ? a.preventDefault() : a.returnValue = !1), s_ze(document.body, "click", s_I5), s_ze(document.body, "keydown", s_RAd), s_LAd(s_F5), s_F5.element.style.visibility =
                "hidden", s_F5 = null);
            s_G5 && (s_x(s_G5, "selected"), s_G5.setAttribute("aria-expanded", "false"), s_G5 = null)
        },
        s_RAd = function(a) {
            27 == a.keyCode && s_I5()
        },
        s_SAd = function(a, b, c) {
            if (9 == c.keyCode) s_I5();
            else if (27 == c.keyCode) {
                if (s_F5) return s_I5(), s_J5(c)
            } else {
                if (38 == c.keyCode || 40 == c.keyCode) return s_F5 ? s_KAd(40 == c.keyCode) : s_MAd(a, !0), s_J5(c);
                if (37 == c.keyCode || 39 == c.keyCode) return s_J5(c)
            }
            return !0
        },
        s_TAd = function(a, b, c) {
            s_F5 && ((a = s_Oc(s_3e(c), "ab_dropdownitem")) ? s_F5.kd(a) : s_LAd(s_F5))
        },
        s_UAd = function() {
            s_F5 &&
                s_LAd(s_F5)
        },
        s_VAd = function(a, b, c) {
            if (s_F5)
                if (9 == c.keyCode) s_I5();
                else {
                    if (27 == c.keyCode) return a = s_G5, s_I5(), a.focus(), s_J5(c);
                    if (38 == c.keyCode) return s_KAd(!1), s_J5(c);
                    if (40 == c.keyCode) return s_KAd(!0), s_J5(c);
                    if (32 == c.keyCode || 37 == c.keyCode || 39 == c.keyCode) return s_J5(c)
                }
            return !0
        },
        s_J5 = function(a) {
            s_4e(a);
            a.preventDefault && a.preventDefault();
            return a.returnValue = !1
        },
        s_WAd = function(a) {
            return s_ub() ? (37 != a.keyCode && 38 != a.keyCode && 39 != a.keyCode && 40 != a.keyCode || s_J5(a), !1) : !0
        },
        s_DAd = function(a) {
            var b =
                s_i("rcnt"),
                c = s_Mj();
            if (c && b) {
                var d = parseInt(s_md(c, "top"), 10),
                    e = s_FAd(),
                    e = e ? e.offsetHeight : c.offsetHeight,
                    b = s_wd(b);
                if (a != s_xAd || d != s_yAd || e != s_zAd || b != s_AAd) s_xAd = a, s_yAd = d, s_zAd = e, s_AAd = b, d = 0, a && !s_WZa.isch && (c = s_wd(c) + e, d = Math.max(0, a + 7 - b + c)), s_BAd = d;
                (a = s_i("center_col")) && a.style.paddingTop != s_BAd + "px" && (a.style.paddingTop = s_BAd + "px")
            }
            return !1
        },
        s_XAd = function() {
            var a = s_i("bbar");
            a && s_s(a, !1)
        },
        s_YAd = function(a) {
            s_E5 && s_E5.remove("bbh");
            s_We(a.href)
        };
    var s_ZAd = !1;
    s_we("m", {
        init: function(a) {
            s_D5 = a;
            s_ZAd || s_EAd();
            s_ZAd = !0;
            s_FAd() && (a = s_i("lst-ib"), s_ye(a, "focus", s_GAd), s_ye(a, "blur", s_HAd), a == s_Vf(document) && s_GAd());
            s_E5 = s_Tf("local", "abar");
            s_H5 = [];
            (a = s_i("abar_ps_on")) && s_H5.push(new s_C5(a, s_v(a, "disabled") ? s_D5.msgs.sPersD : s_D5.msgs.sPers));
            (a = s_i("abar_ps_off")) && s_H5.push(new s_C5(a, s_v(a, "disabled") ? s_D5.msgs.hPersD : s_D5.msgs.hPers));
            a = s_E5 ? s_E5.get("bbh") : "";
            var b = document.getElementById("safesearch");
            "1" == a || b && !b.getAttribute("data-safesearch-on") || !(a =
                document.getElementById("bbar")) || (s_q(a, "visibility", "hidden"), s_s(a, !0), b = s_r(a), s_q(a, "margin-left", -Math.floor(b.width / 2) + "px"), s_q(a, "visibility", "visible"), s_E5 && s_E5.set("bbh", 1));
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
            for (a = 0; a < s_H5.length; a++) s_H5[a].destroy();
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
    s_D("sy45");
    var s_Vi = function(a) {
        s_7c.call(this);
        this.ma = a || window;
        this.qa = s_p(this.ma, "resize", this.Ea, !1, this);
        this.$ = s_nc(this.ma)
    };
    s_f(s_Vi, s_7c);
    var s_Wi = function() {
            var a = window,
                b = s_na(a);
            return s_9ia[b] = s_9ia[b] || new s_Vi(a)
        },
        s_9ia = {},
        s_$ia = function(a) {
            return a.$ ? a.$.clone() : null
        };
    s_Vi.prototype.Ha = function() {
        s_Vi.Ba.Ha.call(this);
        this.qa && (s_3c(this.qa), this.qa = null);
        this.$ = this.ma = null
    };
    s_Vi.prototype.Ea = function() {
        var a = s_nc(this.ma);
        s_ec(a, this.$) || (this.$ = a, this.dispatchEvent("resize"))
    };

    s_C("sy45");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy347");
    var s_KB = function(a, b) {
        s_7c.call(this);
        this.Aa = a;
        var c = s_Fc(this.Aa) ? this.Aa : this.Aa ? this.Aa.body : null;
        this.Ea = !!c && s_Gd(c);
        this.$ = s_p(this.Aa, s_Lb ? "DOMMouseScroll" : "mousewheel", this, b)
    };
    s_f(s_KB, s_7c);
    s_KB.prototype.handleEvent = function(a) {
        var b = 0,
            c = 0,
            d = a.$;
        "mousewheel" == d.type ? (a = s_Gab(-d.wheelDelta), s_a(d.wheelDeltaX) ? (b = s_Gab(-d.wheelDeltaX), c = s_Gab(-d.wheelDeltaY)) : c = a) : (a = d.detail, 100 < a ? a = 3 : -100 > a && (a = -3), s_a(d.axis) && d.axis === d.HORIZONTAL_AXIS ? b = a : c = a);
        s_ka(this.ma) && (b = s_8b(b, -this.ma, this.ma));
        s_ka(this.qa) && (c = s_8b(c, -this.qa, this.qa));
        this.Ea && (b = -b);
        b = new s_Hab(a, d, b, c);
        this.dispatchEvent(b)
    };
    var s_Gab = function(a) {
        return s_Mb && (s_Ob || s_Raa) && 0 != a % 40 ? a : a / 40
    };
    s_KB.prototype.Ha = function() {
        s_KB.Ba.Ha.call(this);
        s_3c(this.$);
        this.$ = null
    };
    var s_Hab = function(a, b, c, d) {
        s_Xc.call(this, b);
        this.type = "mousewheel";
        this.detail = a;
        this.deltaX = c;
        this.deltaY = d
    };
    s_f(s_Hab, s_Xc);

    s_C("sy347");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sc");
    var s_QEc = -1 != s_$a.indexOf("Android"),
        s_qX = function() {
            return s_Be || s_QEc || s_Ae ? s_$ca && navigator.userAgent.match(/Android (\d)/) && 3 > navigator.userAgent.match(/Android (\d)/)[1] ? 3 : 2 : 1
        };
    var s_TEc = function(a, b) {
            s_REc++;
            this.$ = s_REc;
            s_SEc(this, a || NaN, b || NaN)
        },
        s_SEc = function(a, b, c) {
            1 == a.$ && (s_rX = function() {
                return b
            }, s_sX = function() {
                return c
            })
        },
        s_REc = 0,
        s_rX = function() {
            return NaN
        },
        s_sX = function() {
            return NaN
        };
    var s_UEc = Math.pow(10, 100),
        s_VEc = function() {
            var a = s_rX();
            return 1 == s_qX() ? 3 * a : 2 == s_qX() ? a : 0
        },
        s_WEc = [1, 2, 3],
        s_XEc = function(a, b) {
            var c = a.width,
                d = a.height,
                e = s_Kd(b),
                c = c - (e ? e.left + e.right : 0),
                e = s_td(b).x,
                f = s_Gd(b) ? c - e - s_r(b).width : 0,
                g = Math.round(Math.min(500, .8 * c)),
                k = Math.round(250 * g / 500),
                d = .5 * d;
            k < d && (g = Math.round(Math.min(c - 2 * e, c - 2 * f, g * d / k, 500)), k = Math.round(250 * g / 500));
            k = Math.max(200, k);
            return new s_dc(g, k)
        },
        s_YEc = "#006ae0 #ff0000 #ff8f00 #009a0a #990099 #4942CC".split(" "),
        s_ZEc = "#3366cc #dc3912 #ff9900 #109618 #990099 #0099c6 #dd4477 #66aa00 #b82e2e #316395 #994499 #22aa99 #aaaa11 #6633cc #e67300 #8b0707".split(" "),
        s__Ec = function(a, b) {
            var c = s_ZEc.length,
                d = s_YEc.length;
            return a > d ? s_ZEc[b % c] : s_YEc[b % d]
        },
        s_tX = {};
    var s_0Ec = function(a, b) {
        this.$ = a;
        this.Jc = b;
        this.ka = 0
    };
    s_0Ec.prototype.getValue = function() {
        return this.Jc
    };
    var s_2Ec = function(a, b, c) {
            this.Tk = a;
            this.ka = b;
            this.xD = c;
            this.Xh = this.Pi = 0;
            this.Dn = [];
            this.Cr = s_1Ec[0];
            this.RC = !1;
            this.DL = 20;
            this.ma = NaN;
            this.Wa = this.Ea = this.$ = this.qa = 0
        },
        s_1Ec = [
            [1, 2, 1],
            [2, 2.5, 2],
            [5, 2, 0]
        ];
    s_2Ec.prototype.getTick = function(a) {
        return this.Dn[a]
    };
    var s_3Ec = function(a, b, c, d, e) {
            this.ma = a;
            this.ka = b;
            this.$ = new s_2Ec(c || 1, d ? d : "", e ? e : this.ma ? Math.ceil(s_sX() / 16) : Math.ceil(s_rX() / 16))
        },
        s_4Ec = function(a) {
            return a.ma ? a.ka.ma(0) : a.ka.ka(0)
        },
        s_uX = function(a, b) {
            var c = a.ma ? a.ka.ka : a.ka.ma;
            return s_Na(s_5Ec(a, b), s_c(c, a.ka))
        },
        s_5Ec = function(a, b) {
            for (var c = [], d = b ? a.$.ma : a.$.Pi, e = b ? a.$.Wa : 1, f = b ? a.$.qa - a.$.$ * d : a.$.getTick(0).getValue() - a.$.Xh * d, g = b ? a.$.Ea - a.$.$ * e : a.$.getTick(0).$ - a.$.Xh, k = b ? a.$.$ : a.$.Xh, l = 0; l < 3 * k; ++l)
                0 == g + l * e ? c.push(0) : c.push(f + l * d);
            return c
        },
        s_6Ec = function(a, b) {
            var c = a.$,
                d = a.ma ? a.ka.$.top : a.ka.$.left;
            var e = a.ma ? a.ka.$.top + a.ka.ub() : a.ka.$.left + a.ka.Ab(),
                f = (e - d) / c.xD;
            if (d + f == d || e - f == e || d - (e - d) <= -s_UEc || e + (e - d) >= s_UEc) c = !1;
            else {
                c.Dn = [];
                c.RC = !1;
                c.Cr = s_1Ec[0];
                f = Math.abs(e - d);
                for (c.Pi = Math.pow(10, Math.floor(Math.log(f) * Math.LOG10E) - 1 - Math.floor(Math.log(c.Tk) * Math.LOG10E) - Math.floor(Math.log(c.xD) * Math.LOG10E)) * c.Tk; f / c.Pi / c.Cr[1] >= c.xD - 1;) c.Pi *= c.Cr[1], c.Cr = s_1Ec[c.Cr[2]];
                f = d - d % c.Pi;
                0 < d && (f += c.Pi);
                c.Xh = Math.floor((e - f) / c.Pi) + 1;
                for (d = 0; d <
                    c.Xh; ++d) {
                    var e = Math.round(f / c.Pi),
                        g = new s_0Ec(e, f);
                    0 == e && (c.RC = !0);
                    c.Dn.push(g);
                    f += c.Pi
                }
                c = !0
            }
            if (!c) return !1;
            c = a.$;
            for (f = 0; f < c.Dn.length; ++f) {
                d = 1;
                e = Math.abs(c.Dn[f].$ * c.Cr[0]);
                if (Infinity == e) d = 0;
                else {
                    for (; 1 <= e;)
                        if (g = e % 10, 0 == g) d *= 10, e /= 10;
                        else {
                            5 == g && (d *= 2);
                            break
                        }
                    e = c.Xh;
                    d *= (1 + (1 - Math.abs(f - (e - 1) / 2) / ((e - 1) / 2))) / 2
                }
                c.Dn[f].ka = d
            }
            c = a.$;
            a.ma ? f = Math.ceil(s_sX() / 30) : (g = a.$, f = g.ka, d = g.Dn[0].getValue() / g.Tk, e = g.Dn[g.Xh - 1].getValue() / g.Tk, g = (0 > d ? -1 : 1) * g.Pi / g.Tk, f = Math.max(b(d, f), b(e, f), b(g, f)), f = Math.floor(s_rX() /
                (f + 10)) - 1);
            c.DL = f;
            for (var c = a.$, e = null, d = f = 0, g = Math.ceil(c.Xh / c.DL), k = 0; k < c.Xh; ++k) c.getTick(k);
            for (; g < c.Xh / 2; ++g)
                for (k = 0; k <= g; ++k) {
                    for (var l = 0, m = !1, n = k; n < c.Xh;) l += c.getTick(n).ka, 0 == c.getTick(n).$ && (m = !0), n += g;
                    if (!c.RC || m)
                        if (l *= 1, null == e || l > e) f = k, d = g, e = l
                }
            c.$ = Math.floor((c.Xh - f) / d) + 1;
            for (e = f; e < c.Xh; e += d) c.getTick(e);
            c.qa = c.getTick(f).getValue();
            c.Ea = c.getTick(f).$;
            c.Wa = d;
            c.ma = c.Pi * d;
            return !0
        },
        s_7Ec = function(a) {
            if (a.ma) return a = a.ka.ma(0), a < s_rX() / 5;
            a = a.ka.ka(0);
            return a > s_sX() - s_sX() / 5
        };
    var s_vX = function(a, b, c, d, e) {
            var f = document.createElementNS("http://www.w3.org/2000/svg", "text"),
                g = document.createTextNode("");
            f.appendChild(g);
            a.appendChild(f);
            g.data = s_8Ec(function(a) {
                g.data = a;
                f.style.display = "none";
                f.style.display = "";
                a = f.getBoundingClientRect();
                return a.right - a.left
            }, b, c, d, e);
            a.removeChild(f);
            return f
        },
        s_9Ec = function(a, b, c, d, e) {
            return s_8Ec(function(b) {
                return a.measureText(b).width
            }, b, c, d, e)
        },
        s_8Ec = function(a, b, c, d, e) {
            d = d || "";
            e = e || "";
            if (null == b) return d;
            if (0 == b) return d + "0";
            if (isNaN(b)) return d +
                s_tX.undefined;
            var f = Math.abs(b);
            b = 0 > b;
            if (Infinity == f) return [d, b ? "-" : "", "\u221e"].join("");
            var g, k;
            if (k = .001 <= f && 1E5 >= f) {
                a: if (g = s_$Ec(f.toPrecision(9)), "1" == g && e) g = [b ? "-" : "", d, e].join("");
                    else {
                        k = g.length;
                        var l = [d, b ? "-" : "", g, e].join(""),
                            m = g.lastIndexOf(".");
                        if (-1 == m) g = a(l) <= c ? l : null;
                        else {
                            for (; k >= m; k--) {
                                if (a(l) <= c) {
                                    k == m && (l = [d, b ? "-" : "", g.substring(0, m), e].join(""));
                                    g = l;
                                    break a
                                }
                                l = [d, b ? "-" : "", g.substring(0, k), e].join("")
                            }
                            g = null
                        }
                    }k = g
            }
            if (!k)
                if (l = Math.floor(Math.log(f) * Math.LOG10E), f *= Math.pow(10, -l), Infinity ==
                    f || isNaN(f)) g = d + "0";
                else {
                    for (; 10 <= f;) f /= 10, l++;
                    f = s_$Ec(f.toPrecision(9));
                    g = f.length;
                    if (k = !s_QEc) {
                        var m = 0 > l ? "\u207b" : "",
                            n = "",
                            l = Math.abs(l);
                        if (Infinity == l) l = "\u2071\u207f";
                        else {
                            for (; 1 <= l;) n = s_aFc[Math.floor(l % 10)] + n, l /= 10;
                            l = m + n
                        }
                        e = ["\u00d710", l, e].join("")
                    } else e = ["e", 0 > l ? "-" : "+", Math.abs(l), e].join("");
                    k = "1" == f ? k ? [d, b ? "-" : "", e.substr(1)].join("") : [d, b ? "-" : "", "1", e].join("") : [d, b ? "-" : "", f, e].join("");
                    for (l = f.lastIndexOf("."); a(k) > c && 1 < g || g == l + 1;) g--, k = [d, b ? "-" : "", f.substring(0, g), e].join("");
                    g = k
                }
            return g
        },
        s_$Ec = function(a) {
            a = -1 == a.indexOf(".") ? a : a.replace(/0+$/, "");
            return -1 == a.indexOf(".") ? a : a.replace(/\.$/, "")
        },
        s_aFc = "\u2070\u00b9\u00b2\u00b3\u2074\u2075\u2076\u2077\u2078\u2079".split("");

// ======================================================================
    var s_xX = function(a, b, c) {
            this.getColor = s_d(s__Ec, c.length);
            this.nb = s_i(a);
            a = s_m("DIV");
            a.setAttribute("aria-labelledby", "graph_heading");
            a.setAttribute("tabindex", "0");
            this.nb.appendChild(a);
            this.nb = a;
            this.Ea = s_m("DIV");
            this.Ea.style.backgroundColor = "#d2d2d2";
            this.Ea.setAttribute("aria-hidden", "true");
            this.Rv = b;
            this.Cd = c;
            this.Db = s_bFc(1);
            this.$ = this.Db.getContext("2d");
            this.Wa = s_bFc(-1);
            this.Ia = this.Wa.getContext("2d");
            this.Ca = s_cFc(this);
            this.Ga = s_cFc(this);
            this.Xa = s_bFc(3);
            this.qa = this.Xa.getContext("2d");
            this.Ka = s_m("DIV", {
                style: "-moz-box-shadow:inset 0px 0px 5px #999;-webkit-box-shadow:inset 0px 0px 5px #999;box-shadow:inset 0px 0px 5px #999;"
            });
            s_q(this.Ka, {
                position: "absolute",
                left: "0px",
                top: "0px",
                width: s_rX() + "px",
                height: s_sX() + "px",
                "z-index": 4
            });
            b = s_m("DIV");
            s_q(b, {
                position: "absolute",
                bottom: "0px",
                right: "0px",
                "z-index": 5,
                padding: "3px",
                "border-width": "1px",
                "border-color": "#999",
                "border-style": "solid",
                "background-color": "#f5f5f5",
                display: "none",
                "font-size": "11px",
                color: "#666",
                "max-width": s_rX() -
                    8 + "px",
                "max-height": s_sX() / 4 + "px",
                overflow: "hidden"
            });
            this.Ja = b;
            this.rb = 0;
            this.Ub = this.Pb = null;
            this.Yb = [];
            this.Ma = [];
            this.Da = 0;
            this.Lb = -1;
            this.xc = 0;
            this.Za = s_wX(0, 0, 1, 1);
            this.ka = s_wX(0, 0, 1, 1);
            this.ma = s_wX(0, 0, 1, 1);
            s_dFc(this, null)
        },
        s_wX = function(a, b, c, d) {
            return {
                Rh: a,
                Bh: b,
                Pg: c,
                yg: d
            }
        },
        s_eFc = function(a, b) {
            a.ma = s_wX(a.Za.Rh * a.ka.Pg + a.ka.Rh, a.Za.Bh * a.ka.yg + a.ka.Bh, a.Za.Pg * a.ka.Pg, a.Za.yg * a.ka.yg);
            b || (a.Za = s_wX(a.ma.Rh, a.ma.Bh, a.ma.Pg, a.ma.yg), a.ka = s_wX(0, 0, 1, 1))
        },
        s_bFc = function(a) {
            var b = document.createElement("canvas");
            b.setAttribute("width", s_rX());
            b.setAttribute("height", s_sX());
            s_q(b, {
                position: "absolute",
                left: "0px",
                top: "0px",
                "z-index": a
            });
            return b
        },
        s_cFc = function(a) {
            var b = new Image;
            b.setAttribute("width", a.Wa.width);
            b.setAttribute("height", a.Wa.height);
            s_q(b, {
                position: "absolute",
                left: "0px",
                top: "0px",
                "z-index": 2
            });
            b.onload = s_c(a.Kb, a);
            return b
        };
    s_xX.prototype.LP = function() {
        s_q(this.Ea, {
            position: "relative",
            left: "0px",
            top: "0px",
            overflow: "hidden"
        });
        s_Bd(this.Ea, s_rX(), s_sX());
        this.Ea.appendChild(this.Db);
        this.Ea.appendChild(this.Ca);
        this.Ea.appendChild(this.Xa);
        this.Ea.appendChild(this.Ka);
        this.Ea.appendChild(this.Ja);
        this.nb.appendChild(this.Ea)
    };
    var s_gFc = function(a) {
        s_fFc(a.Db);
        a.$.fillStyle = "#ffffff";
        a.$.fillRect(a.ma.Rh, a.ma.Bh, s_rX() * a.ma.Pg, s_sX() * a.ma.yg)
    };
    s_xX.prototype.Rb = function(a) {
        this.Lb < this.Da ? this.Ma.push(s_c(this.Rb, this, a)) : s_a(a) && a ? (this.Ja.innerHTML = a, s_s(this.Ja, !0)) : s_s(this.Ja, !1)
    };
    var s_dFc = function(a, b, c) {
        s_fFc(a.Xa);
        if (b && c)
            for (var d = 0; d < c.length; ++d) a.qa.beginPath(), a.qa.fillStyle = a.getColor(d), a.qa.arc(b, c[d], 3.5, 0, 2 * Math.PI, !1), a.qa.fill()
    };
    s_xX.prototype.Kb = function() {
        if (this.xc == this.Da) {
            this.Za = s_wX(0, 0, 1, 1);
            this.ma = s_wX(this.ka.Rh, this.ka.Bh, this.ka.Pg, this.ka.yg);
            if (this.Lb < this.Da) s_qd(this.Ga, this.ma.Rh, this.ma.Bh), s_Bd(this.Ga, s_rX() * this.ma.Pg, s_sX() * this.ma.yg);
            else {
                var a = s_rd(this.Ca),
                    b = s_r(this.Ca);
                s_qd(this.Ga, a.x, a.y);
                s_Bd(this.Ga, b.width, b.height)
            }
            this.Ea.replaceChild(this.Ga, this.Ca);
            a = this.Ga;
            this.Ga = this.Ca;
            this.Ca = a;
            this.Lb = this.Da;
            for (a = 0; a < this.Ma.length; ++a) this.Ma[a]();
            this.Ma = []
        }
    };
    s_xX.prototype.HQ = function(a, b) {
        function c(b, ba, t) {
            if (t == this.Da) {
                0 == ba && (e = a[b].$, this.Ia.strokeStyle = this.getColor(b), f = NaN, d = !1);
                this.Ia.beginPath();
                for (this.Ia.moveTo(k, l); ba < e.length && (e[ba] ? (k = Math.min(s_rX(), Math.max(0, s_yX(e[ba], !0))), l = Math.min(s_sX(), Math.max(0, s_zX(e[ba], !0))), m = (0 == l || l == s_sX()) && l == f, f = l, !d || m ? this.Ia.moveTo(k, l) : this.Ia.lineTo(k, l), d = !0) : d = !1, 0 != (ba + 1) % 100); ++ba);
                this.Ia.stroke();
                ba < e.length ? s_Ef(s_c(c, this, b, ba + 1, t)) : (g++, g == a.length ? (this.xc = this.Da, b = this.Wa.toDataURL("image/png"),
                    b == this.Ga.src ? this.Kb() : this.Ga.src = b) : s_Ef(s_c(c, this, b - 1, 0, t)))
            }
        }
        s_fFc(this.Wa);
        if (null != a) this.Yb = a;
        else if (null != this.Yb) a = this.Yb;
        else return;
        this.Ma.push(b);
        var d = !1,
            e = [],
            f, g = 0,
            k, l, m;
        this.Ia.lineWidth = 1.5;
        c.call(this, a.length - 1, 0, this.Da)
    };
    s_xX.prototype.Ed = function(a, b) {
        this.Lb < this.Da ? this.Ma.push(s_c(this.Ed, this, a, b)) : (s_gFc(this), s_hFc(this, a), s_iFc(this, b))
    };
    var s_hFc = function(a, b) {
            null == b ? b = a.Pb : a.Pb = b;
            a.$.font = "11px arial,sans";
            a.$.fillStyle = "#333";
            a.$.textBaseline = "middle";
            a.$.textAlign = "center";
            var c = s_4Ec(b) * a.ka.yg + a.ka.Bh,
                c = Math.max(Math.min(s_sX(), c), 0) | 0,
                d;
            a.$.lineWidth = .5;
            a.$.strokeStyle = "#666";
            a.$.beginPath();
            a.$.moveTo(0, c + .5);
            a.$.lineTo(s_rX(), c + .5);
            a.$.stroke();
            a.$.beginPath();
            a.$.lineWidth = 1;
            a.$.strokeStyle = "#d2d2d2";
            var e = s_uX(b, !1),
                f = (c - 2.5 | 0) + .5,
                g = (c + 2.5 | 0) + .5;
            for (d = 0; d < e.length; ++d) {
                var k = e[d] * a.ka.Pg + a.ka.Rh | 0;
                a.$.moveTo(k, f);
                a.$.lineTo(k,
                    g)
            }
            a.$.stroke();
            a.$.beginPath();
            a.$.lineWidth = 1;
            a.$.strokeStyle = "#666";
            e = s_uX(b, !0);
            for (d = 0; d < e.length; ++d) k = e[d] * a.ka.Pg + a.ka.Rh | 0, a.$.moveTo(k, f), a.$.lineTo(k, g);
            a.$.stroke();
            a.rb = -1;
            var f = s_rX() / b.$.$,
                g = s_5Ec(b, !0),
                l = b.$.Tk,
                m = b.$.ka,
                n = Math.floor(e.length * a.ka.Pg),
                ba = 0;
            for (d = 0; d < e.length; ++d)
                if (!(d / (e.length - 1) * n < ba) && (ba++, 0 != g[d])) {
                    var k = e[d] / l * a.ka.Pg + a.ka.Rh | 0,
                        t = s_9Ec(a.$, g[d] / l, f, "", m); - 1 == a.rb && (a.rb = c + 16 * (s_7Ec(b) ? -1 : 1));
                    a.$.fillText(t, k, a.rb)
                }
        },
        s_iFc = function(a, b) {
            null == b ? b = a.Ub : a.Ub = b;
            a.$.font = "11px arial,sans";
            a.$.fillStyle = "#333";
            a.$.textBaseline = "middle";
            var c = s_4Ec(b) * a.ka.Pg + a.ka.Rh,
                d = Math.max(Math.min(s_rX(), c), 0) | 0;
            a.$.beginPath();
            a.$.lineWidth = .5;
            a.$.strokeStyle = "#666";
            a.$.moveTo(d + .5, 0);
            a.$.lineTo(d + .5, s_sX());
            a.$.stroke();
            a.$.beginPath();
            a.$.lineWidth = 1;
            a.$.strokeStyle = "#d2d2d2";
            for (var e = s_uX(b, !1), f = (d - 2.5 | 0) + .5, g = (d + 2.5 | 0) + .5, c = 0; c < e.length; ++c) {
                var k = e[c] * a.ka.yg + a.ka.Bh | 0;
                a.$.moveTo(f, k);
                a.$.lineTo(g, k)
            }
            a.$.stroke();
            a.$.beginPath();
            a.$.lineWidth = 1;
            a.$.strokeStyle =
                "#666";
            e = s_uX(b, !0);
            for (c = 0; c < e.length; ++c) k = e[c] * a.ka.yg + a.ka.Bh | 0, a.$.moveTo(f, k), a.$.lineTo(g, k);
            a.$.stroke();
            c = s_7Ec(b);
            a.$.textAlign = c ? "left" : "right";
            for (var d = d + 5 * (c ? 1 : -1), f = s_5Ec(b, !0), g = b.$.Tk, l = b.$.ka, m = Math.floor(e.length * a.ka.yg), n = 0, c = 0; c < e.length; ++c)
                if (!(c / (e.length - 1) * m < n || (n++, 22 > Math.abs(e[c] * a.ka.yg + a.ka.Bh - a.rb) || 0 == f[c]))) {
                    var k = e[c] / g * a.ka.yg + a.ka.Bh | 0,
                        ba = s_9Ec(a.$, f[c] / g, 80, "", l);
                    a.$.fillText(ba, d, k)
                }
        };
    s_xX.prototype.Jv = function(a, b) {
        var c = this.$;
        return c.measureText(s_9Ec(c, a, 80, "", b)).width
    };
    var s_fFc = function(a) {
        a.width = a.width;
        a = a.getContext("2d");
        a.setTransform(1, 0, 0, 1, 0, 0);
        a.clearRect(0, 0, s_rX(), s_sX())
    };
    s_xX.prototype.kq = function() {
        s_wc(this.nb)
    };
    var s_jFc = function(a, b, c, d, e, f) {
            this.nb = f;
            this.Sb = a;
            this.Ka = b;
            this.Ud = c;
            this.Ca = d;
            this.Ga = this.Da = this.qa = this.$ = 0;
            this.Ja = !1;
            this.ma = this.ka = 1;
            this.Ia = this.Wa = this.Ea = NaN;
            this.rb = e;
            this.Ma = NaN;
            this.Xa = new s_Vi;
            this.Za = NaN
        },
        s_AX = function(a, b) {
            return s_c(function(a) {
                var c = [];
                if (a && a.touches)
                    for (var e = 0; e < a.touches.length; ++e) {
                        var f = a.touches[e],
                            g = s_td(this.Sb.Ea),
                            k = f.pageX - g.x,
                            f = f.pageY - g.y;
                        0 < k && k < s_rX() && 0 < f && f < s_sX() && c.push(a.touches[e])
                    }
                0 < c.length && s_Vc(a);
                return this.Ud(s_c(b, this, c))()
            }, a)
        };
    s_jFc.prototype.$G = function() {
        var a = this.Sb.Ka;
        a.addEventListener("touchstart", s_AX(this, this.wL), !1);
        a.addEventListener("touchmove", s_AX(this, this.Y9), !1);
        a.addEventListener("touchend", s_AX(this, this.oF), !1);
        if (s_QEc || s_Nb) this.Za = s_p(this.Xa, "resize", this.QS, !0, this)
    };
    var s_kFc = function(a, b) {
        for (var c = s_td(a.Sb.Ea), d = new s_$b(0, 0), e = 0, f = 0; f < b.length; ++f)
            if (b[f].identifier == a.Ea || b[f].identifier == a.Wa) d.x += b[f].pageX, d.y += b[f].pageY, e++;
        d.x /= e;
        d.y /= e;
        d.x += -c.x;
        d.y += -c.y;
        return d
    };
    s_ = s_jFc.prototype;
    s_.wL = function(a) {
        if (0 == a.length) return !1;
        if (1 == a.length) this.Ea = a[0].identifier, this.Wa = NaN;
        else {
            for (var b = null, c = null, d = [], e = 0; e < a.length; ++e) a[e].identifier == this.Ea ? b = a[e] : a[e].identifier == this.Wa ? c = a[e] : d.push(a[e]);
            b && c || (b ? c = d.pop() : c ? b = d.pop() : (b = d.pop(), c = d.pop()), this.Ea = b.identifier, this.Wa = c.identifier, d = b.pageX - c.pageX, b = b.pageY - c.pageY, this.Ia = Math.sqrt(d * d + b * b))
        }
        a = s_kFc(this, a);
        this.Da += (a.x - this.$) / this.ka;
        this.Ga += (a.y - this.qa) / this.ma;
        this.$ = a.x;
        this.qa = a.y;
        s_dFc(this.Sb, null);
        this.Ma =
            NaN;
        this.Ja = !0;
        s_s(this.Sb.Ja, !1);
        return !1
    };
    s_.Y9 = function(a) {
        for (var b = !1, c = !1, d = 0; d < a.length; ++d) a[d].identifier == this.Ea ? b = !0 : a[d].identifier == this.Wa && (c = !0);
        if (!isNaN(this.Ea) && !b || !isNaN(this.Wa) && !c) return this.oF.call(this, a);
        b = (isNaN(this.Ea) ? 0 : 1) + (isNaN(this.Wa) ? 0 : 1);
        if (!this.Ja || 1 == b && 2 <= a.length || 0 == b && 1 <= a.length) return this.wL.call(this, a);
        if (!(1 >= a.length)) {
            for (var b = new s_$b, c = new s_$b, e = d = !1, f = 0; f < a.length; ++f) a[f].identifier == this.Ea ? (b.x = a[f].pageX, b.y = a[f].pageY, d = !0) : a[f].identifier == this.Wa && (c.x = a[f].pageX, c.y = a[f].pageY,
                e = !0);
            d && e && (d = Math.abs(b.x - c.x), c = Math.abs(b.y - c.y), b = Math.sqrt(d * d + c * c) / this.Ia, this.Ia = Math.sqrt(d * d + c * c), c /= d + c, d = 1 - c, this.ka *= c + d * b, this.ma *= d + c * b)
        }
        a = s_kFc(this, a);
        this.$ = a.x;
        this.qa = a.y;
        a = this.Sb;
        b = this.$ - this.Da * this.ka;
        c = this.ka;
        d = this.ma;
        a.ka = s_wX(b, this.qa - this.Ga * this.ma, c, d);
        s_eFc(a, !0);
        if (0 != b || 0 != b || 1 != c || 1 != d) s_qd(a.Ca, a.ma.Rh, a.ma.Bh), s_Bd(a.Ca, s_rX() * a.ma.Pg, s_sX() * a.ma.yg), s_gFc(a), s_hFc(a, null), s_iFc(a, null);
        return !1
    };
    s_.oF = function(a, b) {
        if (!this.Ja && !b) return !1;
        if (0 == a.length) {
            this.Ja = !1;
            s_eFc(this.Sb);
            if (this.$ != this.Da || this.qa != this.Ga || 1 != this.ka || 1 != this.ma || b) 0 == [this.$, this.qa, this.Da, this.Ga, this.ka, this.ma].filter(isNaN).length && (s_lFc(this.Ca, s_BX(this.Ca, 0), this.ka, s_mFc(this.Ca, 0), this.ma), s_nFc(this.Ca, -((this.$ - this.Da * this.ka) / s_rX() * this.Ca.Ab()), (this.qa - this.Ga * this.ma) / s_sX() * this.Ca.ub())), this.Ka(2, this.$), this.ka = this.ma = 1;
            else {
                for (var c = s_BX(this.Ca, this.$), d = [], e = [], f = 0; f < this.rb.length; ++f) d.push(this.rb[f].$(c)),
                    e.push(this.Ca.ka(d[f]));
                s_dFc(this.Sb, this.$, e);
                f = this.Sb;
                if (null != c && d) {
                    var g = this.$ < s_rX() - 4.5 - 90 ? s_rX() - 90 - 4.5 : 4.5;
                    f.qa.beginPath();
                    f.qa.strokeStyle = "#dddddd";
                    f.qa.lineWidth = .5;
                    f.qa.fillStyle = "#ffffff";
                    for (e = 0; e <= d.length; ++e) f.qa.rect(g, 4.5 + 24 * e, 90, 24);
                    f.qa.fill();
                    f.qa.stroke();
                    f.qa.font = "11px arial,sans";
                    f.qa.textAlign = "left";
                    f.qa.textBaseline = "middle";
                    f.qa.fillStyle = "#666";
                    g += 5;
                    e = s_9Ec(f.qa, c, 80, f.Rv + ": ");
                    f.qa.fillText(e, g, 16.5);
                    for (var k, e = 0; e < d.length; ++e) f.qa.fillStyle = f.getColor(e), k =
                        s_9Ec(f.qa, d[e], 80, (f.Cd[e] ? f.Cd[e] : "y") + ": "), f.qa.fillText(k, g, 4.5 + 24 * (e + 1.5))
                }
                this.Ma = c
            }
            this.$ = this.qa = this.Da = this.Ga = 0
        } else {
            d = c = !1;
            for (f = 0; f < a.length; ++f) a[f].identifier == this.Ea ? c = !0 : a[f].identifier == this.Wa && (d = !0);
            c || (this.Ea = NaN);
            d || (this.Wa = NaN);
            c && d || (this.Ia = NaN);
            if (!c && !d) return this.Ia = NaN, !1;
            c = s_kFc(this, a);
            this.Da += (c.x - this.$) / this.ka;
            this.Ga += (c.y - this.qa) / this.ma;
            this.$ = c.x;
            this.qa = c.y
        }
        return !1
    };
    s_.gI = function() {
        var a = this.Sb.Ea;
        a.removeEventListener("touchstart", s_AX(this, this.wL), !1);
        a.removeEventListener("touchmove", s_AX(this, this.Y9), !1);
        a.removeEventListener("touchend", s_AX(this, this.oF), !1);
        this.Za && s_3c(this.Za)
    };
    s_.QS = function() {
        var a = s_rX(),
            b = s_XEc(s_$ia(this.Xa), this.Sb.Ea);
        if (!(500 <= b.width && 500 == a || a == b.width)) {
            s_SEc(this.nb, b.width, b.height);
            var a = this.Sb,
                c = b.width,
                b = b.height;
            s_s(a.Ja, !1);
            var d = c / a.Wa.width,
                e = b / a.Wa.height;
            s_qd(a.Ca, a.ka.Rh * d, a.ka.Bh * e);
            s_Bd(a.Ca, a.ka.Pg * d * a.Wa.width, a.ka.yg * e * a.Wa.height);
            a.ma = s_wX(a.ma.Rh * d, a.ma.Bh * e, a.ma.Pg, a.ma.yg);
            a.Wa.width = c;
            a.Wa.height = b;
            a.Db.width = c;
            a.Db.height = b;
            a.Xa.width = c;
            a.Xa.height = b;
            s_Bd(a.Ka, c, b);
            s_Bd(a.Ea, c, b);
            s_q(a.Ja, {
                "max-width": s_rX() - 8 + "px",
                "max-height": s_sX() / 4 + "px"
            });
            s_gFc(a);
            s_hFc(a, null);
            s_iFc(a, null);
            this.oF([], !0);
            isNaN(this.Ma) || (a = {
                identifier: "1",
                pageX: this.Ca.ma(this.Ma) + s_td(this.Sb.Ea).x,
                pageY: 0
            }, this.wL([a]), this.oF([], !1))
        }
    };
    var s_CX = function(a, b) {
            var c = document.createElementNS("http://www.w3.org/2000/svg", a),
                d;
            for (d in b) "xlink:href" == d ? c.setAttributeNS("http://www.w3.org/1999/xlink", d, b[d]) : c.setAttribute(d, b[d]);
            return c
        },
        s_oFc = function(a) {
            var b = s_CX("g", {
                "font-size": 11
            });
            a.appendChild(b);
            return b
        },
        s_pFc = function(a) {
            var b = s_CX("rect", {
                stroke: "#666",
                "stroke-width": .5
            });
            a.appendChild(b);
            return b
        },
        s_qFc = function(a) {
            var b = s_CX("path", {
                stroke: "#666",
                "stroke-width": 1
            });
            a.appendChild(b);
            return b
        },
        // 画坐标path
        s_rFc = function(a) {
            var b =
                s_CX("path", {
                    stroke: "#d2d2d2",
                    "stroke-width": 1
                });
            a.appendChild(b);
            return b
        },
        s_sFc = function(a) {
            var b = s_CX("g", {
                "text-anchor": "middle",
                fill: "#333"
            });
            a.appendChild(b);
            return b
        },
        s_tFc = function(a, b, c, d) {
            b = [b, c, d];
            c = [];
            for (d = 0; 3 > d; ++d) {
                var e = s_CX("image", {
                    width: 18,
                    height: 18,
                    x: 10,
                    y: 24,
                    "xlink:href": b[d]
                });
                a.appendChild(e);
                c.push(e)
            }
        },
        s_uFc = function(a, b) {
            var c = s_CX("g"),
                d = s_CX("rect", {
                    width: 24,
                    height: 24,
                    x: s_rX() - 24,
                    y: 0,
                    stroke: "#dddddd",
                    fill: "#f2f2f2",
                    "stroke-width": .5
                }),
                e = s_CX("circle", {
                    r: 3.5,
                    fill: b,
                    cx: s_rX() -
                        12,
                    cy: 12
                }),
                f = s_CX("image", {
                    preserveAspectRatio: "none",
                    x: s_rX() - 3,
                    y: 0,
                    width: 3,
                    height: 24
                });
            f.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "//ssl.gstatic.com/onebox/calculator/1/rightshadow.png");
            c.appendChild(d);
            c.appendChild(e);
            c.appendChild(f);
            a.appendChild(c);
            return c
        };
    var s_DX = function(a, b, c) {
            this.Ja = c.length;
            this.getColor = s_d(s__Ec, this.Ja);
            this.Ia = 1 < this.Ja;
            this.Kb = s_i(a);
            a = s_m("DIV");
            a.setAttribute("aria-labelledby", "graph_heading");
            a.setAttribute("tabindex", "0");
            this.Kb.appendChild(a);
            this.Kb = a;
            this.Ca = s_m("DIV", {
                style: "-moz-box-shadow:inset 0px 0px 5px #999;-webkit-box-shadow:inset 0px 0px 5px #999;box-shadow:inset 0px 0px 5px #999;"
            });
            this.Ca.setAttribute("aria-hidden", "true");
            s_q(this.Ca, {
                position: "relative"
            });
            s_Bd(this.Ca, s_rX(), s_sX());
            this.CQ = b;
            this.Rv =
                c;
            b = s_CX("svg", {
                width: s_rX() + "px",
                height: s_sX() + "px",
                overflow: "hidden",
                direction: "ltr"
            });
            s_Hd(b, !0);
            b = this.Ea = b;
            var d = this.Ia;
            c = s_CX("clipPath", {
                id: "scClipPath"
            });
            a = s_CX("path");
            d = s_rX() - 180 - (d ? 24 : 0);
            d = ["M 0 0 L ", d, " 0 L ", d, " 24 L ", s_rX(), " 24 L ", s_rX(), " ", s_sX(), " L 0 ", s_sX(), " L 0 0"].join("");
            a.setAttribute("d", d);
            c.appendChild(a);
            b.appendChild(c);
            b = this.Ea;
            c = s_CX("g", {
                "clip-path": "url(#scClipPath)"
            });
            b.appendChild(c);
            this.Kl = c;
            this.Ma = s_oFc(this.Kl);
            this.RQ = s_rFc(this.Ma);
            this.PQ = s_qFc(this.Ma);
            this.Cc = s_pFc(this.Ma);
            this.Za = s_sFc(this.Ma);
            this.Db = s_oFc(this.Kl);
            this.TQ = s_rFc(this.Db);
            this.SQ = s_qFc(this.Db);
            this.Yd = s_pFc(this.Db);
            this.rb = s_sFc(this.Db);
            b = this.Kl;
            c = s_CX("g");
            b.appendChild(c);
            this.Ub = c;
            this.Cd = [];

            // 画曲线
            for (b = 0; b < this.Ja; ++b) {
                c = this.Cd;
                a = b;
                var d = this.Ub,
                    e = this.getColor(b),
                    e = s_CX("path", {
                        stroke: e,
                        "stroke-width": 1.5,
                        fill: "none"
                    });
                d.hasChildNodes() ? d.insertBefore(e, d.childNodes[0]) : d.appendChild(e);
                c[a] = e
            }

            this.Wa = 0;
            b = this.Ub;
            c = this.getColor(0);
            // 画圆点
            c = s_CX("circle", {
                r: 3.5,
                fill: c
            });
            b.appendChild(c);
            this.Pb = c;
            b = this.Ea;
            c = s_CX("g", {
                "font-size": 11,
                fill: "#15c"
            });
            b.appendChild(c);
            b = this.qa = c;

            // 画x/y 提示
            c = s_CX("rect", {
                width: 90,
                height: 24,
                stroke: "#dddddd",
                "stroke-width": .5,
                x: s_rX() - 180 - (this.Ia ? 24 : 0),
                y: "0",
                fill: "none"
            });
            b.appendChild(c);
            b = this.qa;
            c = s_CX("rect", {
                width: 90,
                height: 24,
                stroke: "#dddddd",
                "stroke-width": .5,
                x: s_rX() - 90 - (this.Ia ? 24 : 0),
                y: "0",
                fill: "none"
            });
            b.appendChild(c);
            b = this.qa;
            c = this.Ia;
            // 画text文本
            a = s_vX(b, null, 80, this.CQ + ": ", void 0);
            a.setAttribute("x", s_rX() - 180 + 5 - (c ? 24 : 0));
            a.setAttribute("y", 16);
            b.appendChild(a);
            this.De = a;
            b = this.qa;
            c = this.Ia;
            a = s_vX(b, null, 80, (this.Rv[this.Wa] ? this.Rv[this.Wa] : "y") + ": ", void 0);
            a.setAttribute("x", s_rX() - 90 + 5 - (c ? 24 : 0));
            a.setAttribute("y", 16);
            b.appendChild(a);
            this.Vc = a;
            this.xc = 0;
            b = this.Ea;

            // 画矩形区域
            c = s_CX("rect", {
                width: s_rX(),
                height: s_sX(),
                x: 0,
                y: 0,
                "fill-opacity": 0
            });
            b.appendChild(c);
            this.JQ = c;
            this.Xa = s_CX("g");
            this.Ea.appendChild(this.Xa);
            b = this.Xa;

            // 左上角图片
            c = s_CX("image", {
                width: 22,
                height: 55,
                x: 8,
                y: 8,
                "xlink:href": "//ssl.gstatic.com/onebox/calculator/1/shadow.png"
            });
            b.appendChild(c);
            b = this.Xa;
            c =
                s_CX("image", {
                    width: 18,
                    height: 17,
                    x: 10,
                    y: 8,
                    "xlink:href": "//ssl.gstatic.com/onebox/calculator/1/plus.png"
                });
            b.appendChild(c);
            this.ZQ = c;
            b = this.Xa;
            c = s_CX("image", {
                width: 18,
                height: 20,
                x: 10,
                y: 40,
                "xlink:href": "//ssl.gstatic.com/onebox/calculator/1/minus.png"
            });
            b.appendChild(c);
            this.JZ = c;
            this.Be = s_CX("g");
            this.Lb = s_CX("g");
            this.nb = s_CX("g");
            this.Yb = s_CX("g");
            b = this.Xa;
            c = s_CX("image", {
                width: 12,
                height: 18,
                x: 27,
                y: 24
            });
            c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "//ssl.gstatic.com/onebox/calculator/1/tag_right.png");
            b.appendChild(c);
            this.ai = c;
            s_tFc(this.Lb, "//ssl.gstatic.com/onebox/calculator/1/xy_default.png", "//ssl.gstatic.com/onebox/calculator/1/xy_hover.png", "//ssl.gstatic.com/onebox/calculator/1/xy_selected.png");
            s_tFc(this.nb, "//ssl.gstatic.com/onebox/calculator/1/x_default.png", "//ssl.gstatic.com/onebox/calculator/1/x_hover.png", "//ssl.gstatic.com/onebox/calculator/1/x_selected.png");
            s_tFc(this.Yb, "//ssl.gstatic.com/onebox/calculator/1/y_default.png", "//ssl.gstatic.com/onebox/calculator/1/y_hover.png",
                "//ssl.gstatic.com/onebox/calculator/1/y_selected.png");
            this.Be.appendChild(this.Lb);
            this.Be.appendChild(this.nb);
            this.Be.appendChild(this.Yb);
            this.Xa.appendChild(this.Be);
            this.$ = [];
            this.$.push(this.Lb);
            this.$.push(this.nb);
            this.$.push(this.Yb);
            this.Ka = s_m("DIV");
            s_q(this.Ka, {
                position: "absolute",
                left: "10px",
                top: "63px",
                padding: "3px",
                "border-width": "1px",
                "border-color": "#999",
                "border-style": "solid",
                "background-color": "#f5f5f5",
                display: "none",
                "font-size": "11px",
                color: "#666"
            });
            this.Ka.appendChild(document.createTextNode(""));
            s_vFc(this, this.Lb);
            s_wFc(this, this.Lb);
            s_xFc(this, null);
            this.kP = s_CX("g");
            this.Iv = s_CX("g");
            b = this.kP;
            c = s_CX("g");
            a = s_CX("rect", {
                width: 24,
                height: 12,
                x: s_rX() - 24,
                y: 24,
                stroke: "#dddddd",
                fill: "#f2f2f2",
                "stroke-width": .5
            });
            d = s_rX() - 12;
            d = s_CX("path", {
                d: ["M ", d - 3, " 28 L ", d + 3, " 28 L ", d, " 32"].join(""),
                fill: "#999"
            });
            e = s_CX("image", {
                preserveAspectRatio: "none",
                x: s_rX() - 3,
                y: 24,
                width: 3,
                height: 12
            });
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "//ssl.gstatic.com/onebox/calculator/1/rightshadow.png");
            c.appendChild(a);
            c.appendChild(d);
            c.appendChild(e);
            b.appendChild(c);
            this.qh = c;
            this.kP.appendChild(this.Iv);
            this.ka = [];
            for (b = 0; b < this.Ja; ++b) this.ka.push(s_uFc(this.Iv, this.getColor(b)));
            this.Ia && (this.Ea.appendChild(this.kP), b = s_CX("image", {
                preserveAspectRatio: "none",
                x: s_rX() - 24,
                y: 0,
                height: 3,
                width: 24
            }), b.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "//ssl.gstatic.com/onebox/calculator/1/topshadow.png"), this.Ea.appendChild(b), s_yFc(this, this.ka[0]));
            this.ma = s_m("DIV");
            s_q(this.ma, {
                position: "absolute",
                bottom: "0px",
                right: "0px",
                padding: "3px",
                "border-width": "1px",
                "border-color": "#999",
                "border-style": "solid",
                "background-color": "#f5f5f5",
                display: "none",
                "font-size": "11px",
                color: "#666",
                "max-width": s_rX() - 8 + "px",
                "max-height": s_sX() / 4 + "px",
                overflow: "hidden"
            });
            this.YC = !1;
            this.Ca.appendChild(this.Ea);
            this.Ca.appendChild(this.ma);
            this.Ca.appendChild(this.Ka);
            s_zFc(this, !1);
            s_AFc(this, null, null)
        },
        s_wFc = function(a, b) {
            a.fD = b;
            for (var c = 0; c < a.$.length; ++c) s_s(a.$[c].childNodes[2], !1);
            s_s(a.fD.childNodes[2], !0);
            s_EX(a.fD)
        },
        s_yFc = function(a, b) {
            for (var c = 0; c < a.Ja; ++c) a.ka[c].childNodes[0].setAttribute("fill", "#f2f2f2");
            b.childNodes[0].setAttribute("fill", "#e2e2e2");
            s_EX(b)
        },
        s_vFc = function(a, b) {
            for (var c = 0; c < a.$.length; ++c) s_s(a.$[c].childNodes[1], !1);
            if (b) {
                s_s(b.childNodes[1], !0);
                s_EX(b);
                c = null;
                switch (b) {
                    case a.Lb:
                        c = s_tX.bothZoomMode;
                        break;
                    case a.nb:
                        c = s_tX.horizontalZoomMode;
                        break;
                    case a.Yb:
                        c = s_tX.verticalZoomMode
                }
                s_xFc(a, c)
            }
        };
    s_DX.prototype.LP = function() {
        this.Kb.appendChild(this.Ca)
    };
    var s_xFc = function(a, b) {
        null == b ? s_s(a.Ka, !1) : (s_s(a.Ka, !0), a.Ka.childNodes[0].data = b)
    };
    s_DX.prototype.Rb = function(a) {
        a ? (this.ma.innerHTML = a, s_s(this.ma, !0)) : s_s(this.ma, !1)
    };
    var s_zFc = function(a, b, c, d) {
        !b || !c || !d || 0 > d || d > s_sX() ? s_s(a.Pb, !1) : (a.Pb.setAttribute("cx", c), a.Pb.setAttribute("cy", d), s_s(a.Pb, !0), a.Pb.setAttribute("fill", a.getColor(a.Wa)))
    };
    s_DX.prototype.HQ = function(a, b) {
        for (var c = 0; c < this.Ja; ++c) {
            for (var d = [], e = a[c].$, f = "M", g = 0; g < e.length; ++g) e[g] ? (d.push([f, Math.min(2 * s_rX(), Math.max(-s_rX(), s_yX(e[g], !0))), Math.min(2 * s_sX(), Math.max(-s_sX(), s_zX(e[g], !0)))].join(" ")), f = "L") : f = "M";
            2 < e.length ? (s_s(this.Cd[c], !0), this.Cd[c].setAttribute("d", d.join(" "))) : s_s(this.Cd[c], !1)
        }
        s_Ef(b)
    };
    var s_AFc = function(a, b, c) {
        b = s_vX(a.qa, b, 80, a.CQ + ": ", void 0);
        b.setAttribute("x", a.De.getAttribute("x"));
        b.setAttribute("y", a.De.getAttribute("y"));
        c = s_vX(a.qa, c, 80, (a.Rv[a.Wa] ? a.Rv[a.Wa] : "y") + ": ", void 0);
        c.setAttribute("x", a.Vc.getAttribute("x"));
        c.setAttribute("y", a.Vc.getAttribute("y"));
        a.qa.setAttribute("fill", a.getColor(a.Wa));
        a.qa.replaceChild(b, a.De);
        a.qa.replaceChild(c, a.Vc);
        a.De = b;
        a.Vc = c
    };
    s_DX.prototype.Ed = function(a, b) {
        this.Ub.setAttribute("transform", "translate(0,0)");
        this.Ma.setAttribute("transform", "translate(0,0)");
        this.Db.setAttribute("transform", "translate(0,0)");
        var c = s_4Ec(a),
            c = Math.max(Math.min(s_sX(), c), 0),
            d;

        // s_rX() == 500
        this.Cc.setAttribute("x", -s_rX());
        this.Cc.setAttribute("y", c);
        this.Cc.setAttribute("width", 3 * s_rX());
        this.Cc.setAttribute("height", .5);
        var e = s_uX(a, !1),
            f = [];

        // path 坐标 重点==============================
        for (d = 0; d < e.length; ++d) f.push(["M", e[d], c - 2.5, " L ", e[d], c + 2.5].join(" "));
        this.RQ.setAttribute("d", f.join(" "));
        e = s_uX(a, !0);
        f = [];
        for (d = 0; d < e.length; ++d) f.push(["M", e[d], c - 2.5, " L ", e[d], c + 2.5].join(" "));
        this.PQ.setAttribute("d", f.join(" "));
        for (this.xc = -1; this.Za.hasChildNodes();) this.Za.removeChild(this.Za.firstChild);
        var f = s_rX() / a.$.$,
            g = s_5Ec(a, !0),
            k = a.$.Tk,
            l = a.$.ka,
            m;
        for (d = 0; d < e.length; ++d)
            if (0 != g[d]) {
                var n = s_vX(this.Za, g[d] / k, f, "", l);
                this.Za.appendChild(n);
                n.setAttribute("x", e[d]); - 1 == this.xc && (m = n.getBoundingClientRect(), m = m.bottom - m.top, this.xc = c + (s_7Ec(a) ? -5 : 5 + 3 * m / 4));
                n.setAttribute("y", this.xc)
            }
        c =
            s_4Ec(b);
        e = Math.max(Math.min(s_rX(), c), 0);
        this.Yd.setAttribute("x", e);
        this.Yd.setAttribute("y", -s_sX());
        this.Yd.setAttribute("width", .5);
        this.Yd.setAttribute("height", 3 * s_sX());
        d = s_uX(b, !1);
        f = [];
        for (c = 0; c < d.length; ++c) f.push(["M", e - 2.5, d[c], "L", e + 2.5, d[c]].join(" "));
        this.TQ.setAttribute("d", f.join(" "));
        d = s_uX(b, !0);
        f = [];
        for (c = 0; c < d.length; ++c) f.push(["M", e - 2.5, d[c], "L", e + 2.5, d[c]].join(" "));
        this.SQ.setAttribute("d", f.join(" "));
        e += 5 * (s_7Ec(b) ? 1 : -1);
        for (this.rb.setAttribute("text-anchor", s_7Ec(b) ?
                "start" : "end"); this.rb.hasChildNodes();) this.rb.removeChild(this.rb.firstChild);
        f = s_5Ec(b, !0);
        g = b.$.Tk;
        k = b.$.ka;
        for (c = 0; c < d.length; ++c) 22 > Math.abs(d[c] - this.xc) || 0 == f[c] || (l = s_vX(this.rb, f[c] / g, 80, "", k), this.rb.appendChild(l), l.setAttribute("x", e), l.setAttribute("y", d[c]), n = l.getBoundingClientRect(), l.setAttribute("dy", (n.bottom - n.top) / 4))
    };
    s_DX.prototype.kq = function() {
        s_wc(this.Kb);
        delete this.Ea;
        this.Kb.removeAttribute("style")
    };
    s_DX.prototype.Ga = function(a, b) {
        function c() {
            for (var g = 0, k = s_e() - f, l = 0; l < a.length; ++l) {
                var t = Math.min(1, k / a[l].duration);
                1 == t && g++;
                a[l].element.setAttribute("transform", ["translate(", d[l].x + t * e[l].x, ",", d[l].y + t * e[l].y, ")"].join(""))
            }
            g == a.length ? (s_a(b) && b(), this.YC = !1) : s_F(s_c(c, this), 1E3 / 60)
        }
        this.YC = !0;
        for (var d = [], e = [], f = s_e(), g = 0; g < a.length; ++g) {
            var k, l = a[g].element;
            s_a(l.getCTM) ? k = l.getCTM() : k = {
                e: 0,
                f: 0
            };
            d.push({
                x: k.e,
                y: k.f
            });
            e.push({
                x: (a[g].Jq || 0) - d[g].x,
                y: (a[g].Ew || 0) - d[g].y
            })
        }
        s_Ef(s_c(c, this))
    };
    var s_BFc = function(a, b) {
            var c = [];
            c.push({
                element: a.qh,
                Ew: -12,
                duration: 200
            });
            for (var d = 0; d < a.ka.length; ++d) c.push({
                element: a.ka[d],
                Ew: 24 * d,
                duration: 200
            });
            a.Ga(c, b)
        },
        s_CFc = function(a, b) {
            var c = [];
            c.push({
                element: a.ai,
                Jq: -12,
                duration: 200
            });
            c.push({
                element: a.nb,
                Jq: 17,
                duration: 200
            });
            c.push({
                element: a.Yb,
                Jq: 34,
                duration: 200
            });
            a.Ga(c, b)
        },
        s_EX = function(a) {
            a.parentNode.appendChild(a)
        };
    s_DX.prototype.Jv = function(a, b) {
        var c = this.Za,
            d = s_vX(c, a, 80, "", b || "");
        c.appendChild(d);
        var e = d.getBoundingClientRect(),
            e = e.right - e.left;
        c.removeChild(d);
        return e
    };
    var s_DFc = function(a, b, c, d, e) {
            this.Sb = a;
            this.Db = null;
            this.Xa = s_a(e) ? e : function() {
                return null
            };
            this.Wa = b;
            this.Ud = c;
            this.ka = d;
            this.Ma = 0;
            this.ma = NaN;
            this.rb = this.Za = this.Ja = this.Ia = this.qa = 0;
            this.Ea = !1;
            this.Ca = null;
            this.$ = [];
            this.Ga = this.Da = !1
        },
        s_EFc = function(a, b) {
            return s_c(function(a) {
                return this.Sb.YC ? !1 : b.call(this, a)
            }, a)
        },
        s_FX = function(a, b) {
            return s_c(function(a) {
                a = new s_Xc(a);
                return b.call(this, a)
            }, a)
        },
        s_GX = function(a) {
            return function(b) {
                s_la(b.preventDefault) && b.preventDefault();
                return a(b)
            }
        };
    s_ = s_DFc.prototype;
    s_.$G = function() {
        var a = this.Sb.JQ,
            b = this.Sb.ZQ,
            c = this.Sb.JZ;
        this.$.push(s_p(a, "mousemove", s_GX(this.Ud(s_c(s_FX(this, this.Cu), this))), !0, this));
        this.$.push(s_p(a, "mousedown", s_GX(this.Ud(s_c(s_FX(this, this.cY), this))), !0, this));
        this.$.push(s_p(a, "mouseup", s_GX(this.Ud(s_c(s_FX(this, this.sF), this))), !0, this));
        this.$.push(s_p(a, "dblclick", s_GX(this.Ud(s_c(s_FX(this, this.S2), this))), !0, this));
        this.$.push(s_p(a, "mouseout", s_GX(this.Ud(s_c(s_FX(this, this.i3), this))), !0, this));
        this.$.push(s_p(a, "dragstart",
            s_GX(this.Ud(s_c(s_FX(this, this.h3), this))), !0, this));
        this.Ca = new s_KB(a);
        this.$.push(s_p(this.Ca, "mousewheel", s_GX(this.Ud(s_c(this.dY, this))), !0, this));
        this.$.push(s_p(b, "click", s_GX(this.Ud(s_c(s_FX(this, this.x3), this))), !0, this));
        this.$.push(s_p(b, ["dblclick", "mousedown"], s_GX(function() {
            return !1
        }), !0, this));
        this.$.push(s_p(b, "mousemove", s_GX(this.Ud(s_c(s_FX(this, this.Cu), this))), !0, this));
        this.$.push(s_p(b, "mouseup", s_GX(this.Ud(s_c(s_FX(this, this.sF), this))), !0, this));
        this.$.push(s_p(c, "click",
            s_GX(this.Ud(s_c(s_FX(this, this.A3), this))), !0, this));
        this.$.push(s_p(c, ["dblclick", "mousedown"], s_GX(function() {
            return !1
        }), !0, this));
        this.$.push(s_p(c, "mousemove", s_GX(this.Ud(s_c(s_FX(this, this.Cu), this))), !0, this));
        this.$.push(s_p(c, "mouseup", s_GX(this.Ud(s_c(s_FX(this, this.sF), this))), !0, this));
        this.$.push(s_p(this.Sb.qh, "mouseover", s_GX(this.Ud(s_c(s_FX(this, this.sU), this))), !0, this));
        a = this.Sb.ka;
        for (b = 0; b < a.length; ++b) this.$.push(s_p(a[b], "mousemove", s_GX(this.Ud(s_EFc(this, s_c(s_FX(this, this.d3),
            this)))), !0, this)), this.$.push(s_p(a[b], "mouseout", s_GX(this.Ud(s_EFc(this, s_c(s_FX(this, this.e3), this)))), !0, this)), this.$.push(s_p(a[b], "mousedown", s_GX(this.Ud(s_EFc(this, s_c(this.c3, this)))), !0, this)), this.$.push(s_p(a[b], ["dblclick", "click", "mouseup"], s_GX(s_FX(this, function() {
            return !1
        })), !0, this));
        this.$.push(s_p(this.Sb.ai, "mouseover", s_GX(this.Ud(s_c(s_FX(this, this.tU), this))), !0, this));
        a = this.Sb.$;
        for (b = 0; b < a.length; ++b) this.$.push(s_p(a[b], "mousemove", s_GX(this.Ud(s_EFc(this, s_c(s_FX(this,
            this.z3), this)))), !0, this)), this.$.push(s_p(a[b], "mousedown", s_GX(this.Ud(s_EFc(this, s_c(s_FX(this, this.y3), this)))), !0, this)), this.$.push(s_p(a[b], ["dblclick", "mouseup", "click"], s_GX(s_FX(this, function() {
            return !1
        })), !0, this))
    };
    s_.gI = function() {
        for (var a = 0; a < this.$.length; ++a) s_3c(this.$[a]);
        this.Ca.dispose();
        this.Ca = null
    };
    s_.cY = function(a) {
        s_s(this.Sb.ma, !1);
        if (!s_Rba(a)) return !1;
        this.Cu(a);
        this.Ja = this.qa;
        this.Ia = this.ma;
        this.Za = this.ka.ka(0);
        this.rb = this.ka.ma(0);
        this.Ea = !0;
        return !1
    };
    s_.sF = function(a) {
        this.Cu(a);
        if (!this.Ea) return !1;
        this.Ea = !1;
        if (this.ma == this.Ia && this.qa == this.Ja) return !1;
        s_nFc(this.ka, (this.Ia - this.ma) * this.ka.Ab() / s_rX(), (this.qa - this.Ja) * this.ka.ub() / s_sX());
        this.Wa(1);
        return !1
    };
    s_.i3 = function(a) {
        this.Cu(a);
        this.Ea && (0 > this.ma || this.ma >= s_rX() || 0 > this.qa || this.qa >= s_sX()) && this.sF(a);
        return !1
    };
    s_.h3 = function(a) {
        return this.sF(a)
    };
    s_.Cu = function(a) {
        if (this.Da) {
            this.Da = !1;
            var b = this.Sb;
            s_vFc(b, null);
            s_EX(b.ka[b.Wa]);
            for (var c = [], d = 0; d < b.ka.length; ++d) c.push({
                element: b.ka[d],
                Ew: 0,
                duration: 200
            });
            b.Ga(c, s_c(b.Ga, b, [{
                element: b.qh,
                Ew: 0,
                duration: 200
            }]))
        }
        if (this.Ga) {
            this.Ga = !1;
            b = this.Sb;
            c = [];
            c.push({
                element: b.nb,
                Jq: 0,
                duration: 200
            });
            c.push({
                element: b.Yb,
                Jq: 0,
                duration: 200
            });
            for (d = 0; d < b.$.length; ++d) s_s(b.$[d].childNodes[2], !1);
            s_s(b.fD.childNodes[2], !0);
            s_EX(b.fD);
            b.Ga(c, s_c(b.Ga, b, [{
                element: b.ai,
                Jq: 0,
                duration: 200
            }]));
            s_xFc(b, null)
        }
        b =
            s_td(this.Sb.Ca);
        c = s_pc();
        this.ma = a.clientX - b.x + c.x;
        this.qa = a.clientY - b.y + c.y;
        if (this.Ea) return a = this.ma - this.Ia, b = this.qa - this.Ja, c = this.Za, d = s_sX(), this.Sb.Ma.setAttribute("transform", ["translate(", a, ",", Math.max(0, Math.min(d, c + b)) - Math.max(0, Math.min(d, c)), ")"].join("")), c = this.rb, d = s_rX(), this.Sb.Db.setAttribute("transform", ["translate(", Math.max(0, Math.min(d, c + a)) - Math.max(0, Math.min(d, c)), ",", b, ")"].join("")), this.Sb.Ub.setAttribute("transform", ["translate(", a, ",", b, ")"].join("")), !1;
        this.$z();
        return !1
    };
    s_.$z = function() {
        if (isNaN(this.ma)) s_zFc(this.Sb, !1), s_AFc(this.Sb, null, null);
        else {
            var a = s_BX(this.ka, this.ma),
                b = this.Db.$(a);
            s_zFc(this.Sb, !0, this.ma, this.ka.ka(b));
            s_AFc(this.Sb, a, b)
        }
    };
    var s_FFc = function(a, b, c, d, e) {
        var f = e;
        1 == a.Ma ? e = 1 : 2 == a.Ma && (f = 1);
        b ? s_lFc(a.ka, c, 1 / f, d, 1 / e) : s_lFc(a.ka, c, f, d, e)
    };
    s_ = s_DFc.prototype;
    s_.dY = function(a) {
        if (this.Ea) return !1;
        s_s(this.Sb.ma, !1);
        this.Cu(a);
        var b = s_BX(this.ka, this.ma),
            c = s_mFc(this.ka, this.qa);
        if (s_ka(a.deltaY)) {
            if (0 == a.deltaY) return !1;
            s_FFc(this, 0 < a.deltaY, b, c, 1.2);
            this.Wa(2)
        }
        return !1
    };
    s_.S2 = function(a) {
        this.Cu(a);
        a = s_BX(this.ka, this.ma);
        var b = s_mFc(this.ka, this.qa);
        s_FFc(this, !1, a, b, 2);
        this.Wa(2);
        return !1
    };
    s_.x3 = function() {
        s_s(this.Sb.ma, !1);
        var a = s_BX(this.ka, s_rX() / 2),
            b = s_mFc(this.ka, s_sX() / 2);
        s_FFc(this, !1, a, b, 2);
        this.Wa(2);
        return !1
    };
    s_.A3 = function() {
        s_s(this.Sb.ma, !1);
        var a = s_BX(this.ka, s_rX() / 2),
            b = s_mFc(this.ka, s_sX() / 2);
        s_FFc(this, !0, a, b, 2);
        this.Wa(2);
        return !1
    };
    s_.sU = function() {
        s_BFc(this.Sb, s_c(function() {
            this.Da = !0
        }, this));
        return !1
    };
    s_.tU = function() {
        s_CFc(this.Sb, s_c(function() {
            this.Ga = !0
        }, this));
        return !1
    };
    s_.d3 = function(a) {
        this.Da = !0;
        a.target.parentNode.childNodes[0].setAttribute("stroke", "#999");
        s_EX(a.target.parentNode);
        return !1
    };
    s_.e3 = function(a) {
        a.target.parentNode.childNodes[0].setAttribute("stroke", "#dddddd");
        return !1
    };
    s_.c3 = function(a) {
        s_yFc(this.Sb, a.target.parentNode);
        this.Xa(this.Sb.ka.indexOf(a.target.parentNode));
        this.$z();
        return !1
    };
    s_.z3 = function(a) {
        this.Ga = !0;
        s_vFc(this.Sb, a.target.parentNode);
        return !1
    };
    s_.y3 = function(a) {
        s_wFc(this.Sb, a.target.parentNode);
        this.Ma = this.Sb.$.indexOf(a.target.parentNode);
        return !1
    };
    var s_HX = function(a, b) {
            this.$ = a;
            this.ka = b
        },
        s_yX = function(a, b) {
            return b ? Math.round(10 * a.$) / 10 : a.$
        },
        s_zX = function(a, b) {
            return b ? Math.round(10 * a.ka) / 10 : a.ka
        };
    var s_GFc = function() {
            this.$ = 1;
            this.ka = Math.pow(2, 32) - 1
        },
        s_HFc = function(a) {
            a.$ = (22695477 * a.$ + 1) % a.ka;
            return a.$ / a.ka
        };
    var s_IFc = function(a, b, c, d) {
            this.qa = a;
            this.ka = b;
            this.ma = d || null;
            this.Ma = c;
            this.Ia = this.Ca = this.Da = this.Ga = 0;
            this.$ = [];
            this.Ea = !1;
            this.Ja = new s_GFc;
            this.Wa = 0
        },
        s_JFc = function(a, b) {
            a.Ea ? a.Ma(!1, !1, b) : a.Ma(!0, 50 >= a.Ca && 200 >= a.Da && 100 >= a.Ia && 0 >= a.Ga, b)
        },
        s_KFc = function(a) {
            a.Ca = 0;
            a.Da = 0;
            a.Ia = 0;
            a.Ga = 0;
            a.Ea = !1;
            a.$ = [];
            a.$.push(null);
            a.Ja.$ = 1
        },
        s_NFc = function(a, b, c) {
            function d(a, b) {
                if (b == this.Wa) {
                    var c = 0;
                    if (Infinity == k || 0 == f) this.Ea = !0, s_JFc(this, b);
                    for (; a <= k && !(0 <= a && a <= s_rX() - 1 ? (this.$ = this.$.concat(s_LFc(this,
                            a, f, l)), a += f) : (this.$ = this.$.concat(s_MFc(this, a, l)), a += g), c++, c > e););
                    a < k ? s_Ef(s_c(d, this, a, b)) : s_JFc(this, b)
                }
            }
            b = b || 1;
            var e = c || s_VEc();
            s_KFc(a);
            c = 1 == s_qX() && s_rX() ? -s_rX() : 0;
            var f = s_rX() / s_VEc() / b,
                g = s_rX() / (1 == s_qX() ? s_rX() : 0) / b,
                k = (1 == s_qX() && s_rX() ? 2 : 1) * s_rX() - 1,
                l = new s_HX(NaN, NaN);
            c + f == c || k + f == k ? a.Ea = !0 : s_Ef(s_c(d, a, c, a.Wa))
        },
        s_MFc = function(a, b, c) {
            var d = [];
            a = s_IX(a.ka, b);
            isNaN(a) ? isNaN(s_zX(c)) || d.push(null) : d.push(new s_HX(b, a));
            c.$ = b;
            c.ka = a;
            return d
        },
        s_OFc = function(a, b, c) {
            var d = [];
            if (null == b.Ne) return isNaN(s_zX(c)) ||
                d.push(null), d;
            !a.ma || -Infinity != s_zX(b.Ne) && Infinity != s_zX(b.Ag) || (a.ma.$ = !0);
            c = Infinity == s_zX(b.Ag) || -Infinity == s_zX(b.Ne) ? Infinity : s_zX(b.Ag) - s_zX(b.Ne);
            var e;
            if ((e = 0 == b.qz && (1 == b.Ft || 1 == b.aC) && 0 == b.YL && c <= b.dw && (Infinity == c ? Infinity == s_zX(b.Ag) && -Infinity == s_zX(b.Ne) : 1)) && !(e = 1E3 < b.dw / s_sX() * a.qa.ub() / (b.Rz / s_rX() * a.qa.Ab()))) {
                e = b.sL - 2 * b.Rz;
                var f = 0,
                    g = 0,
                    k = 0,
                    l = 0,
                    m = 0,
                    n, ba, t, w, B, G = 2 * b.Rz / 15;
                t = w = ba = s_IX(a.ka, e);
                for (var I = 0; 15 > I; ++I) n = e + (I + s_HFc(a.Ja)) * G, n = s_IX(a.ka, n), n < ba ? g++ : n > ba ? f++ : isNaN(n) ? l++ :
                    k++, n > w ? w = n : n < t && (t = n), (B = Math.abs(ba - n)) > m && (m = B), ba = n;
                e = 0 == k && (1 == f || 1 == g) && 0 == l && w - t == m && (Infinity == m ? Infinity == w && -Infinity == t : !0) && 1E3 < m / s_sX() * a.qa.ub() / (G / s_rX() * a.qa.Ab())
            }
            if (e) return d.push(new s_HX(s_yX(b.Ne), 1 == b.Ft ? -Infinity : Infinity)), d.push(null), d.push(new s_HX(s_yX(b.Ne), 1 == b.Ft ? Infinity : -Infinity)), a.Da++, isNaN(b.Bu) && d.push(null), d;
            if (.3 > c) return d.push(new s_HX((s_yX(b.Ne) + s_yX(b.Ag)) / 2, (s_zX(b.Ne) + s_zX(b.Ag)) / 2)), isNaN(b.Bu) && d.push(null), d;
            if (10 == b.Ft + b.qz) return d.push(b.Ag),
                d;
            if (10 == b.aC + b.qz) return d.push(b.Ne), d;
            s_yX(b.Ne) < s_yX(b.Ag) ? (d.push(b.Ne), d.push(b.Ag)) : (d.push(b.Ag), d.push(b.Ne));
            isNaN(b.Bu) && d.push(null);
            return d
        },
        s_LFc = function(a, b, c, d) {
            c = {
                Ft: 0,
                aC: 0,
                YL: 0,
                dJ: 0,
                qz: 0,
                uH: 0,
                qL: 0,
                dw: 0,
                sL: 0,
                Ne: null,
                Ag: null,
                HB: !1,
                Bu: 0,
                Rz: c / 10
            };
            var e = NaN,
                f = NaN,
                g = s_yX(d),
                k = s_zX(d);
            a.ma && (a.ma.$ = !1);
            for (var l = 0; 10 > l; ++l) {
                e = b + (l + s_HFc(a.Ja)) * c.Rz;
                f = s_IX(a.ka, e);
                isNaN(f) || (null == c.Ne ? (c.Ne = new s_HX(e, f), c.Ag = new s_HX(e, f)) : s_zX(c.Ne) > f ? (c.Ne.ka = f, c.Ne.$ = e) : s_zX(c.Ag) < f && (c.Ag.ka = f, c.Ag.$ =
                    e));
                if (isNaN(k) != isNaN(f)) {
                    if (null == c.Ne) {
                        var m = isNaN(k);
                        c.Ne = new s_HX(m ? e : g, m ? f : k);
                        c.Ag = new s_HX(m ? e : g, m ? f : k)
                    }
                    if (!c.HB) {
                        var m = a,
                            n = g,
                            ba = e,
                            g = c.Ne,
                            t = c.Ag,
                            w, B;
                        isNaN(s_IX(m.ka, n)) ? (w = n, n = ba) : w = ba;
                        for (var G = 0; 15 > G; ++G) ba = (w + n) / 2, B = s_IX(m.ka, ba), isNaN(B) ? w = ba : (n = ba, B < s_zX(g) && (g.ka = B, g.$ = ba), B > s_zX(t) && (t.ka = B, t.$ = ba));
                        c.HB = !0
                    }
                }
                isNaN(f) ? (c.YL++, c.Bu = k = NaN) : (isNaN(k) ? c.dJ++ : (m = Math.abs(k - f), m > c.dw && (c.dw = m, c.sL = e), f < k ? c.aC++ : f > k ? c.Ft++ : Infinity == Math.abs(f) ? c.dJ++ : c.qz++, 0 > (f - k) * c.qL && c.uH++, c.qL = f - k), k = f);
                g = e
            }
            c.Bu = k;
            d.$ = e;
            d.ka = f;
            2 < c.uH && a.Ca++;
            c.HB && a.Ia++;
            a.ma && a.ma.$ && a.Ga++;
            return s_OFc(a, c, d)
        };
    var s_PFc = function(a, b, c, d) {
        this.$ = new s_jd(a, b, c, d)
    };
    s_ = s_PFc.prototype;
    s_.getFrame = function() {
        return this.$.clone()
    };
    s_.Ab = function() {
        return this.$.width
    };
    s_.ub = function() {
        return this.$.height
    };
    s_.Ad = function(a) {
        this.$.width = a
    };
    s_.$f = function(a) {
        this.$.height = a
    };
    var s_nFc = function(a, b, c) {
            a.$.left += b;
            a.Ad(a.Ab());
            a.$.top += c;
            a.$f(a.ub())
        },
        s_lFc = function(a, b, c, d, e) {
            a.$.left = b - (b - a.$.left) / c;
            a.Ad(a.Ab() / c);
            a.$.top = d - (d - a.$.top) / e;
            a.$f(a.ub() / e)
        };
    s_PFc.prototype.ma = function(a) {
        return (a - this.$.left) * s_rX() / this.Ab()
    };
    var s_BX = function(a, b) {
        return a.$.left + b * a.Ab() / s_rX()
    };
    s_PFc.prototype.ka = function(a) {
        return s_sX() - (a - this.$.top) * s_sX() / this.ub()
    };
    var s_mFc = function(a, b) {
        return a.$.top - (b - s_sX()) * a.ub() / s_sX()
    };
    var s_RFc = function(a, b, c) {
        this.ka = b;
        c && (a = s_QFc(c, a));
        if (s_a(document.$$supercalc$$)) var d = document.$$supercalc$$;
        a = ["document['$$supercalc$$'] = function(x) {return ", a, "}"].join("");
        eval(a);
        this.$ = document.$$supercalc$$;
        delete document.$$supercalc$$;
        s_a(d) && (document.$$supercalc$$ = d)
    };
    s_RFc.prototype.$ = function() {
        return 0
    };
    var s_IX = function(a, b) {
        return a.ka.ka(a.$(s_BX(a.ka, b)))
    };
    var s_SFc = function() {
            this.ka = [{
                wp: "Math.sin",
                On: this.J7,
                Xl: "supercalc.Math.sin"
            }, {
                wp: "Math.cos",
                On: this.FT,
                Xl: "supercalc.Math.cos"
            }, {
                wp: "Math.tan",
                On: this.x8,
                Xl: "supercalc.Math.tan"
            }, {
                wp: "Math.sqrt",
                On: this.Q7,
                Xl: "supercalc.Math.sqrt"
            }, {
                wp: "Math.exp",
                On: this.rU,
                Xl: "supercalc.Math.exp"
            }, {
                wp: "Math.log",
                On: this.K1,
                Xl: "supercalc.Math.log"
            }, {
                wp: "Math.pow",
                On: this.V3,
                Xl: "supercalc.Math.pow"
            }];
            for (var a = 0; a < this.ka.length; ++a) s_oa(this.ka[a].Xl, s_c(this.ka[a].On, this));
            this.$ = !1
        },
        s_QFc = function(a, b) {
            for (var c =
                    b, d = 0; d < a.ka.length; ++d) c = c.replace(new RegExp(a.ka[d].wp, "g"), a.ka[d].Xl);
            return c
        };
    s_ = s_SFc.prototype;
    s_.J7 = function(a) {
        if (Infinity == a || -Infinity == a) this.$ = !0;
        return Math.sin(a)
    };
    s_.FT = function(a) {
        if (Infinity == a || -Infinity == a) this.$ = !0;
        return Math.cos(a)
    };
    s_.x8 = function(a) {
        if (Infinity == a || -Infinity == a) this.$ = !0;
        return Math.tan(a)
    };
    s_.Q7 = function(a) {
        Infinity == a && (this.$ = !0);
        return Math.sqrt(a)
    };
    s_.rU = function(a) {
        var b = Math.exp(a);
        if (Infinity == a || Infinity == b) this.$ = !0;
        return b
    };
    s_.K1 = function(a) {
        Infinity == a && (this.$ = !0);
        return Math.log(a)
    };
    s_.V3 = function(a, b) {
        var c = Math.pow(a, b);
        if (Infinity == c || -Infinity == c || Infinity == a || -Infinity == a || Infinity == b && 1 < a || -Infinity == b && 1 > a) this.$ = !0;
        return c
    };
    var s_TFc = function(a) {
            this.ma = 2;
            this.Za = null;
            this.Ja = s_i(a.domParent);
            if (s_QEc || s_Nb) {
                var b = s_XEc(s_nc(), this.Ja);
                this.Za = new s_TEc(b.width, b.height)
            } else this.Za = new s_TEc(500, 250);
            null != a.messages ? s_tX = a.messages : s_q(this.Ja, {
                direction: "ltr"
            });
            for (var b = [], c = 0; c < a.functions.length; ++c) b.push(a.functions[c].verticalVariableString);
            this.qa = a.functions.length;
            c = s_m("DIV");
            c.innerHTML = s_tX.graphHeading;
            s_q(c, {
                "padding-bottom": "10px",
                display: "inline-block",
                "font-size": "16px"
            });
            c.id = "graph_heading";
            c.setAttribute("role",
                "heading");
            c.setAttribute("aria-level", "3");
            c.className = "vk_h";
            var d = Math.min(c.childElementCount, this.qa),
                e = s_lc("span", "scobfn", c);
            e.length != this.qa && s_JX("wfn");
            for (var f = 0; f < d; ++f) {
                var g = a.functions[f].readable;
                if (g && 0 != g.length) {
                    var k = e[f];
                    k.innerHTML = g;
                    s_q(k, {
                        color: s__Ec(d, f),
                        direction: "ltr"
                    });
                    k.setAttribute("dir", "ltr")
                }
            }
            d = s_i(a.domParent);
            d.hasChildNodes() ? d.insertBefore(c, d.childNodes[0]) : d.appendChild(c);
            a: {
                c = this.Ja;d = a.horizontalVariableString || "x";
                switch (s_qX()) {
                    case 1:
                        b = new s_DX(c, d,
                            b);
                        break a;
                    case 2:
                        b = new s_xX(c, d, b);
                        break a
                }
                b = null
            }
            this.Sb = b;
            b = null != a.minXValue ? a.minXValue : -10;
            c = null != a.minYValue ? a.minYValue : -5;
            this.Ea = new s_PFc(b, c, (null != a.maxXValue ? a.maxXValue : 10) - b, (null != a.maxYValue ? a.maxYValue : 5) - c);
            this.Db = new s_3Ec(!1, this.Ea, a.xAxisBase, a.xAxisBaseString, a.xAxisMinNumOfTicks);
            this.rb = new s_3Ec(!0, this.Ea, a.yAxisBase, a.yAxisBaseString, a.yAxisMinNumOfTicks);
            this.xc = new s_SFc;
            this.Ga = [];
            for (b = 0; b < this.qa; ++b) this.Ga[b] = new s_RFc(a.functions[b].javascript || "Math.sin(x)",
                this.Ea, this.xc);
            this.Cd = 0;
            this.Ca = [];
            for (b = 0; b < this.qa; ++b) this.Ca[b] = new s_IFc(this.Ea, this.Ga[b], s_c(this.Yb, this, b), this.xc);
            this.S4 = 1 == s_qX() ? this.R4 : this.Q4;
            a: {
                a = this.Sb;b = s_c(this.Ma, this);c = s_c(this.Ud, this);d = this.Ea;e = this.Za;f = s_c(this.iK, this);g = this.Ga;
                switch (s_qX()) {
                    case 1:
                        a = new s_DFc(a, b, c, d, f);
                        break a;
                    case 2:
                        a = new s_jFc(a, b, c, d, g, e);
                        break a
                }
                a = null
            }
            this.Da = a;
            this.Da.$G();
            this.Kb = 3;
            this.Wa = [];
            this.Ia = 0;
            this.nb = this.Ka = !1;
            this.Lb = s_WEc[Math.min(s_WEc.length - 1, this.qa - 1)];
            a = [s_VEc() / 1.5,
                s_VEc() / 15
            ];
            this.Pb = a[Math.min(a.length - 1, this.qa)];
            this.$ = this.ka = 0;
            this.Xa = null;
            this.ma = 4;
            this.iK(0)
        },
        s_JX = function(a) {
            google.log && google.log("sc2d", a)
        },
        s_UFc = null,
        s_VFc = function() {
            var a = s_UFc;
            a && (a.Da.gI(), a.Sb.kq(), s_UFc = null)
        },
        s_WFc = function() {
            switch (s_qX()) {
                case 1:
                    return !(!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
                case 2:
                    return !!document.createElement("canvas").getContext;
                case 3:
                    s_JX("ivv")
            }
            return !1
        };
    s_ = s_TFc.prototype;
    s_.iK = function(a) {
        this.Cd = a;
        if (1 == s_qX()) {
            this.Da.Db = this.Ga[this.Cd];
            var b = this.Sb;
            b.Wa = a;
            s_EX(b.Cd[a])
        }
    };
    s_.getState = function() {
        return this.ma
    };
    s_.R4 = function() {
        return 0 < this.ka || 3 == this.ma
    };
    s_.Q4 = function() {
        return (1 < this.$ || 0 < this.ka) && 4 != this.getState()
    };
    s_.Ud = function(a) {
        return s_c(function() {
            return this.S4() ? a.apply(this, arguments) : !1
        }, this)
    };
    var s_XFc = function(a) {
        return s_6Ec(a.Db, s_c(a.Sb.Jv, a.Sb)) && s_6Ec(a.rb, function() {
            return 0
        })
    };
    s_TFc.prototype.Yb = function(a, b, c, d) {
        d == this.$ && (++this.Ia, b ? c || (this.Ka = !0) : (this.nb = !0, this.Sb.Rb(1 == this.Kb ? s_tX.panWarning : s_tX.zoomWarning), this.ma = 1), this.Ia != this.qa || this.nb || (this.Sb.Rb(this.Ka ? s_tX.incorrectPlotWarning : null), this.ma = 7, s_YFc(this)))
    };
    s_TFc.prototype.Ma = function(a, b, c) {
        this.Ia = 0;
        this.$++;
        for (b = 0; b < this.Ca.length; ++b) this.Ca[b].Wa = this.$;
        2 == s_qX() && (this.Sb.Da = this.$);
        this.ka = 0;
        this.nb = this.Ka = !1;
        a && (this.Kb = a);
        this.ma = 4;
        s_a(c) && this.Wa.push(c);
        s_YFc(this)
    };
    s_TFc.prototype.Rb = function(a) {
        if (a == this.$)
            if (this.Xa = this.Ea.getFrame(), 1 == s_qX() && s_la(this.Da.$z) && this.Da.$z(), this.ka++, this.ka > this.Lb) {
                this.ma = 3;
                if (this.Wa) {
                    for (a = 0; a < this.Wa.length; ++a) this.Wa[a]();
                    this.Wa = []
                }
                0 == this.$ % 10 && s_JX("fpc," + this.$)
            } else this.ma = 5, s_YFc(this)
    };
    var s_YFc = function(a) {
        switch (a.getState()) {
            case 2:
                s_JX("int");
                break;
            case 3:
                s_JX("idl");
                break;
            case 4:
                if (0 == a.ka && !s_XFc(a)) {
                    a.Yb(0, !1, !1, a.$);
                    a.ma = 1;
                    s_YFc(a);
                    break
                }
                a.ma = 5;
                s_YFc(a);
                break;
            case 5:
                a.ma = 6;
                for (var b = a.Ia = 0; b < a.qa; ++b) s_NFc(a.Ca[b], Math.pow(2, a.ka - a.Lb), a.Pb);
                break;
            case 6:
                s_JX("cvl");
                break;
            case 7:
                0 == a.ka && a.Sb.Ed(a.Db, a.rb);
                a.Sb.HQ(a.Ca, s_c(a.Rb, a, a.$));
                break;
            case 1:
                s_JX("err"), 2 == s_qX() ? (s_JX("cvs"), a.Ea.$ = a.Xa.clone(), a.Ma(3, 0, s_c(a.Sb.Rb, a.Sb, s_tX.zoomWarning))) : 1 == s_qX() && (s_JX("svg"), 0 == a.ka && (a.Ea.$ = a.Xa.clone(), s_XFc(a), a.Sb.Ed(a.Db, a.rb)), a.ma = 3)
        }
    };
    s_we("sc", {
        dispose: s_VFc,
        init: function(a) {
            null != a && null != a.domParent && null != a.functions && s_WFc() && (s_UFc && s_VFc(), a = new s_TFc(a), a.Sb.LP(), a.Ma(), s_UFc = a)
        }
    });

    s_C("sc");
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
    var s_Xi = function(a, b, c) {
            return s_l(b, c || a.$)
        },
        s_Yi = function(a, b, c) {
            return s_k(b, c || a.$)
        },
        s_aja = function(a, b) {
            return b.y < a.top ? b.y - a.top : b.y > a.bottom ? b.y - a.bottom : 0
        },
        s_bja = function(a, b) {
            return b.x < a.left ? b.x - a.left : b.x > a.right ? b.x - a.right : 0
        },
        s_cja = function(a) {
            return a.contentDocument || a.contentWindow.document
        },
        s_dja = function(a, b) {
            var c = s_bja(a, b),
                d = s_aja(a, b);
            return Math.sqrt(c * c + d * d)
        };
    s_D("sy46");
    var s_Zi = function(a) {
        s_h.call(this);
        this.Ga = a;
        this.Wa = {}
    };
    s_f(s_Zi, s_h);
    var s_eja = [];
    s_Zi.prototype.listen = function(a, b, c, d) {
        return s__i(this, a, b, c, d)
    };
    var s__i = function(a, b, c, d, e, f) {
            s_ha(c) || (c && (s_eja[0] = c.toString()), c = s_eja);
            for (var g = 0; g < c.length; g++) {
                var k = s_p(b, c[g], d || a.handleEvent, e || !1, f || a.Ga || a);
                if (!k) break;
                a.Wa[k.key] = k
            }
            return a
        },
        s_0i = function(a, b, c, d) {
            s_fja(a, b, c, d, void 0)
        },
        s_fja = function(a, b, c, d, e, f) {
            if (s_ha(c))
                for (var g = 0; g < c.length; g++) s_fja(a, b, c[g], d, e, f);
            else(b = s_1c(b, c, d || a.handleEvent, e, f || a.Ga || a)) && (a.Wa[b.key] = b)
        };
    s_Zi.prototype.unlisten = function(a, b, c, d, e) {
        if (s_ha(b))
            for (var f = 0; f < b.length; f++) this.unlisten(a, b[f], c, d, e);
        else c = c || this.handleEvent, e = e || this.Ga || this, c = s__c(c), d = !!d, b = s_Yc(a) ? s_Yba(a.Ma, String(b), c, d, e) : a ? (a = s_0c(a)) ? s_Yba(a, b, c, d, e) : null : null, b && (s_3c(b), delete this.Wa[b.key]);
        return this
    };
    s_Zi.prototype.removeAll = function() {
        s_bb(this.Wa, function(a, b) {
            this.Wa.hasOwnProperty(b) && s_3c(a)
        }, this);
        this.Wa = {}
    };
    s_Zi.prototype.Ha = function() {
        s_Zi.Ba.Ha.call(this);
        this.removeAll()
    };
    s_Zi.prototype.handleEvent = function() {
        throw Error("l");
    };

    s_C("sy46");
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
    };
    s_f(s_9q, s_7c);
    var s_$q = function(a) {
        return 1 == a.ma
    };
    s_ = s_9q.prototype;
    s_.ue = function() {
        this.Oj("begin")
    };
    s_.xe = function() {
        this.Oj("end")
    };
    s_.Hu = function() {
        this.Oj("finish")
    };
    s_.Ju = function() {
        this.Oj("play")
    };
    s_.onStop = function() {
        this.Oj("stop")
    };
    s_.Oj = function(a) {
        this.dispatchEvent(a)
    };

    s_C("sy184");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy160");
    var s_to = function() {};
    s_ea(s_to);
    s_to.prototype.$ = 0;
    var s_uo = function(a) {
        return ":" + (a.$++).toString(36)
    };
    s_C("sy160");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy244");
    var s_Du = function(a, b) {
        null != a && this.append.apply(this, arguments)
    };
    s_ = s_Du.prototype;
    s_.Pk = "";
    s_.set = function(a) {
        this.Pk = "" + a
    };
    s_.append = function(a, b, c) {
        this.Pk += String(a);
        if (null != b)
            for (var d = 1; d < arguments.length; d++) this.Pk += arguments[d];
        return this
    };
    s_.clear = function() {
        this.Pk = ""
    };
    s_.toString = function() {
        return this.Pk
    };

    s_C("sy244");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_8La = function(a) {
            if (s_Jb && !s_Ub(8)) return a.offsetParent;
            var b = s_gc(a),
                c = s_od(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host), c = s_od(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
        },
        s_kt = function(a) {
            for (var b = new s_id(0, Infinity, Infinity, 0), c = s_hc(a), d = c.$.body, e = c.$.documentElement,
                    f = s_qc(c.$); a = s_8La(a);)
                if (!(s_Jb && 0 == a.clientWidth || s_Mb && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != s_od(a, "overflow")) {
                    var g = s_td(a),
                        k = new s_$b(a.clientLeft, a.clientTop);
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
        };
    s_D("sy205");
    var s_mt = function(a, b, c, d, e, f, g, k, l) {
            var m = s_9La(c),
                n = s_Cd(a),
                ba = s_kt(a);
            if (ba) {
                var t = new s_jd(ba.left, ba.top, ba.right - ba.left, ba.bottom - ba.top),
                    ba = Math.max(n.left, t.left),
                    w = Math.min(n.left + n.width, t.left + t.width);
                if (ba <= w) {
                    var B = Math.max(n.top, t.top),
                        t = Math.min(n.top + n.height, t.top + t.height);
                    B <= t && (n.left = ba, n.top = B, n.width = w - ba, n.height = t - B)
                }
            }
            ba = s_hc(a);
            w = s_hc(c);
            if (ba.$ != w.$) {
                ba = ba.$.body;
                w = s_Qc(w);
                B = new s_$b(0, 0);
                t = s_sc(s_gc(ba));
                if (s_Oaa(t, "parent")) {
                    var G = ba;
                    do {
                        var I = t == w ? s_td(G) : s_ica(G);
                        B.x +=
                            I.x;
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
            n = new s_$b(b, n.top + (a & 1 ? n.height : 0));
            n = s_cc(n, m);
            e && (n.x += (a & 4 ? -1 : 1) * e.x, n.y += (a & 1 ? -1 : 1) * e.y);
            var N;
            if (g)
                if (l) N = l;
                else if (N = s_kt(c)) N.top -= m.y, N.right -= m.x, N.bottom -= m.y, N.left -= m.x;
            return s_lt(n, c, d, f, N, g, k)
        },
        s_9La = function(a) {
            var b;
            if (a = a.offsetParent) {
                var c = "HTML" == a.tagName || "BODY" == a.tagName;
                c && "static" == s_pd(a) || (b = s_td(a),
                    c || (b = s_cc(b, new s_$b(s_il(a), a.scrollTop))))
            }
            return b || new s_$b
        },
        s_lt = function(a, b, c, d, e, f, g) {
            a = a.clone();
            var k = s_$La(b, c);
            c = s_r(b);
            g = g ? g.clone() : c.clone();
            a = a.clone();
            g = g.clone();
            var l = 0;
            if (d || 0 != k) k & 4 ? a.x -= g.width + (d ? d.right : 0) : k & 2 ? a.x -= g.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
            if (f) {
                if (e) {
                    d = a;
                    k = g;
                    l = 0;
                    65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                    132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                    d.x < e.left && f & 1 && (d.x = e.left, l |= 1);
                    if (f & 16) {
                        var m = d.x;
                        d.x < e.left &&
                            (d.x = e.left, l |= 4);
                        d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, m + k.width - e.left), k.width = Math.max(k.width, 0), l |= 4)
                    }
                    d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
                    f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                    d.y < e.top && f & 4 && (d.y = e.top, l |= 2);
                    f & 32 && (m = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
                    d.y + k.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
                    f & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
                    e = l
                } else e = 256;
                l = e
            }
            f = new s_jd(0, 0, 0, 0);
            f.left = a.x;
            f.top = a.y;
            f.width = g.width;
            f.height = g.height;
            e = l;
            if (e & 496) return e;
            s_qd(b, new s_$b(f.left, f.top));
            g = s_toa(f);
            s_ec(c, g) || (c = g, a = s_Gba(s_hc(s_gc(b))), !s_Jb || s_Tb("10") || a && s_Tb("8") ? (b = b.style, s_Lb ? b.MozBoxSizing = "border-box" : s_Mb ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px") : (g = b.style, a ? (a = s_Kd(b), b = s_ud(b), g.pixelWidth = c.width - b.left - a.left - a.right - b.right, g.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (g.pixelWidth = c.width, g.pixelHeight = c.height)));
            return e
        },
        s_$La = function(a, b) {
            return (b & 8 && s_Gd(a) ? b ^ 4 : b) & -9
        };

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
    var s_jt = function() {};
    s_jt.prototype.$ = function() {};
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
    };
    s_f(s_Yv, s_9q);
    s_ = s_Yv.prototype;
    s_.play = function() {
        if (s_$q(this)) return !1;
        this.ue();
        this.Ju();
        this.startTime = s_e();
        this.ma = 1;
        if (s_Vl()) return s_q(this.Aa, this.Ea), this.qa = s_Xf(this.cW, void 0, this), !0;
        this.dC(!1);
        return !1
    };
    s_.cW = function() {
        s_r(this.Aa);
        s_Tl(this.Aa, this.Wa);
        s_q(this.Aa, this.$);
        this.qa = s_Xf(s_c(this.dC, this, !1), 1E3 * this.Lw)
    };
    s_.stop = function() {
        s_$q(this) && this.dC(!0)
    };
    s_.dC = function(a) {
        s_Ul(this.Aa);
        s_Yf(this.qa);
        s_q(this.Aa, this.$);
        this.endTime = s_e();
        this.ma = 0;
        if (a) this.onStop();
        else this.Hu();
        this.xe()
    };
    s_.Ha = function() {
        this.stop();
        s_Yv.Ba.Ha.call(this)
    };
    s_.pause = function() {};

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
        },
        s_Li = function(a) {
            return a.getAttribute("role") || null
        },
        s_Mi = function(a, b, c) {
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
                }), c = s_7ia, b in c ? a.setAttribute(d, c[b]) :
                a.removeAttribute(d)) : a.setAttribute(d, c)
        },
        s_Ni = function(a, b) {
            a.removeAttribute("aria-" + b)
        },
        s_Oi = function(a, b) {
            var c = a.getAttribute("aria-" + b);
            return null == c || void 0 == c ? "" : String(c)
        },
        s_8ia = function(a, b) {
            var c = "";
            b && (c = b.id);
            s_Mi(a, "activedescendant", c)
        };

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
        this.jd = null;
        this.Hb = !1;
        this.Aa = null;
        this.rb = void 0;
        this.Ja = this.Wa = this.Ca = this.Ka = null;
        this.JQ = !1
    };
    s_f(s_vo, s_7c);
    s_vo.prototype.WZ = s_to.Sa();
    var s_Lva = null;
    s_vo.prototype.getId = function() {
        return this.jd || (this.jd = s_uo(this.WZ))
    };
    s_vo.prototype.Qd = function(a) {
        this.Ca && this.Ca.Ja && (s_kb(this.Ca.Ja, this.jd), s_lb(this.Ca.Ja, a, this));
        this.jd = a
    };
    s_vo.prototype.va = function() {
        return this.Aa
    };
    var s_wo = function(a, b) {
            return a.Aa ? s_Xi(a.Fa, b, a.Aa) : null
        },
        s_xo = function(a) {
            a.rb || (a.rb = new s_Zi(a));
            return a.rb
        },
        s_zo = function(a, b) {
            if (a == b) throw Error("xa");
            if (b && a.Ca && a.jd && s_yo(a.Ca, a.jd) && a.Ca != b) throw Error("xa");
            a.Ca = b;
            s_vo.Ba.Vb.call(a, b)
        };
    s_vo.prototype.getParent = function() {
        return this.Ca
    };
    s_vo.prototype.Vb = function(a) {
        if (this.Ca && this.Ca != a) throw Error("ya");
        s_vo.Ba.Vb.call(this, a)
    };
    s_vo.prototype.Ob = function() {
        this.Aa = this.Fa.createElement("DIV")
    };
    s_vo.prototype.render = function(a) {
        s_Mva(this, a)
    };
    var s_Mva = function(a, b, c) {
        if (a.Hb) throw Error("za");
        a.Aa || a.Ob();
        b ? b.insertBefore(a.Aa, c || null) : a.Fa.$.body.appendChild(a.Aa);
        a.Ca && !a.Ca.Hb || a.Eb()
    };
    s_ = s_vo.prototype;
    s_.Gc = function(a) {
        if (this.Hb) throw Error("za");
        if (a && this.Lt(a)) {
            this.JQ = !0;
            var b = s_gc(a);
            this.Fa && this.Fa.$ == b || (this.Fa = s_hc(a));
            this.Oc(a);
            this.Eb()
        } else throw Error("Aa");
    };
    s_.Lt = function() {
        return !0
    };
    s_.Oc = function(a) {
        this.Aa = a
    };
    s_.Eb = function() {
        this.Hb = !0;
        s_Ao(this, function(a) {
            !a.Hb && a.va() && a.Eb()
        })
    };
    s_.$b = function() {
        s_Ao(this, function(a) {
            a.Hb && a.$b()
        });
        this.rb && this.rb.removeAll();
        this.Hb = !1
    };
    s_.Ha = function() {
        this.Hb && this.$b();
        this.rb && (this.rb.dispose(), delete this.rb);
        s_Ao(this, function(a) {
            a.dispose()
        });
        !this.JQ && this.Aa && s_n(this.Aa);
        this.Ca = this.Ka = this.Aa = this.Ja = this.Wa = null;
        s_vo.Ba.Ha.call(this)
    };
    s_.Ta = function() {
        return this.Ka
    };
    s_.wb = function(a, b) {
        this.Tv(a, s_Bo(this), b)
    };
    s_.Tv = function(a, b, c) {
        if (a.Hb && (c || !this.Hb)) throw Error("za");
        if (0 > b || b > s_Bo(this)) throw Error("Ba");
        this.Ja && this.Wa || (this.Ja = {}, this.Wa = []);
        if (a.getParent() == this) {
            var d = a.getId();
            this.Ja[d] = a;
            s_Ya(this.Wa, a)
        } else s_lb(this.Ja, a.getId(), a);
        s_zo(a, this);
        s_2a(this.Wa, b, 0, a);
        a.Hb && this.Hb && a.getParent() == this ? (c = this.Hc(), b = c.childNodes[b] || null, b != a.va() && c.insertBefore(a.va(), b)) : c ? (this.Aa || this.Ob(), b = s_Co(this, b + 1), s_Mva(a, this.Hc(), b ? b.Aa : null)) : this.Hb && !a.Hb && a.Aa && a.Aa.parentNode && 1 == a.Aa.parentNode.nodeType &&
            a.Eb()
    };
    s_.Hc = function() {
        return this.Aa
    };
    var s_Do = function(a) {
            null == a.Vc && (a.Vc = s_Gd(a.Hb ? a.Aa : a.Fa.$.body));
            return a.Vc
        },
        s_Bo = function(a) {
            return a.Wa ? a.Wa.length : 0
        },
        s_yo = function(a, b) {
            return a.Ja && b ? s_mb(a.Ja, b) || null : null
        },
        s_Co = function(a, b) {
            return a.Wa ? a.Wa[b] || null : null
        },
        s_Ao = function(a, b, c) {
            a.Wa && s_g(a.Wa, b, c)
        };
    s_vo.prototype.removeChild = function(a, b) {
        if (a) {
            var c = s_ja(a) ? a : a.getId();
            a = s_yo(this, c);
            c && a && (s_kb(this.Ja, c), s_Ya(this.Wa, a), b && (a.$b(), a.Aa && s_n(a.Aa)), s_zo(a, null))
        }
        if (!a) throw Error("Ca");
        return a
    };
    var s_Nva = function(a) {
        for (var b = []; a.Wa && 0 != a.Wa.length;) b.push(a.removeChild(s_Co(a, 0), !0))
    };

    s_C("sy161");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy243");
    s_Jb && s_Tb(8);
    var s_Eu = {},
        s_2Pa = {},
        s_3Pa = {},
        s_Fu = function() {
            throw Error("Ha");
        };
    s_Fu.prototype.Vs = null;
    s_Fu.prototype.getContent = function() {
        return this.content
    };
    s_Fu.prototype.toString = function() {
        return this.content
    };
    var s_4Pa = function() {
        s_Fu.call(this)
    };
    s_f(s_4Pa, s_Fu);
    var s_7Pa = function(a, b, c, d) {
            a = a(b || s_5Pa, void 0, c);
            d = (d || s_hc()).createElement("DIV");
            a = s_6Pa(a);
            d.innerHTML = a;
            1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType && (d = a));
            return d
        },
        s_6Pa = function(a) {
            if (!s_ma(a)) return String(a);
            if (a instanceof s_Fu) {
                if (a.Nj === s_Eu) return a.getContent();
                if (a.Nj === s_3Pa) return s_xa(a.getContent())
            }
            return "zSoyz"
        },
        s_5Pa = {};
    var s_8Pa = function(a) {
            if (null != a) switch (a.Vs) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0
            }
            return null
        },
        s_Gu = function() {
            s_Fu.call(this)
        };
    s_f(s_Gu, s_Fu);
    s_Gu.prototype.Nj = s_Eu;
    var s_Iu = function(a) {
            return null != a && a.Nj === s_Eu ? a : a instanceof s_3b ? s_Hu(s_4b(a), a.Vq()) : s_Hu(s_xa(String(String(a))), s_8Pa(a))
        },
        s_9Pa = function(a, b) {
            this.content = String(a);
            this.Vs = null != b ? b : null
        };
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
            if (!c) return "";
            c = new b(c);
            void 0 !== d && (c.Vs = d);
            return c
        }
    })(s_Gu);
    var s_Ju = function(a) {
            return null != a && a.Nj === s_Eu ? String(String(a.getContent()).replace(s_$Pa, "").replace(s_aQa, "&lt;")).replace(s_bQa, s_cQa) : s_xa(String(a))
        },
        s_eQa = function(a) {
            null != a && a.Nj === s_2Pa ? a = a.getContent().replace(/([^"'\s])$/, "$1 ") : (a = String(a), a = s_dQa.test(a) ? a : "zSoyz");
            return a
        },
        s_fQa = {
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
        },
        s_cQa = function(a) {
            return s_fQa[a]
        },
        s_bQa = /[\x00\x22\x27\x3c\x3e]/g,
        s_dQa = /^(?!on|src|(?:style|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
        s_$Pa = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        s_aQa = /</g;

    s_C("sy243");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Mv = function(a, b) {
        s_7c.call(this);
        this.$ = new s_Zi(this);
        this.zm(a || null);
        b && (this.Pa = b)
    };
    s_f(s_Mv, s_7c);
    s_ = s_Mv.prototype;
    s_.Aa = null;
    s_.hH = !0;
    s_.Js = null;
    s_.kC = null;
    s_.Do = !1;
    s_.mD = -1;
    s_.jD = -1;
    s_.ly = !1;
    s_.Pa = "toggle_display";
    s_.getType = function() {
        return this.Pa
    };
    s_.va = function() {
        return this.Aa
    };
    s_.zm = function(a) {
        s_8Ta(this);
        this.Aa = a
    };
    var s_Nv = function(a, b) {
            s_8Ta(a);
            a.hH = b
        },
        s_8Ta = function(a) {
            if (a.Do) throw Error("Xa");
        };
    s_Mv.prototype.Ua = function() {
        return this.Do
    };
    var s_9Ta = function(a) {
        return a.Do || 150 > s_e() - a.jD
    };
    s_Mv.prototype.setVisible = function(a) {
        this.Ka && this.Ka.stop();
        this.Db && this.Db.stop();
        if (a) {
            if (!this.Do && this.ND()) {
                if (!this.Aa) throw Error("Ya");
                this.Ia();
                a = s_gc(this.Aa);
                this.ly && this.$.listen(a, "keydown", this.V2, !0);
                if (this.hH)
                    if (this.$.listen(a, "mousedown", this.jM, !0), s_Jb) {
                        var b;
                        try {
                            b = a.activeElement
                        } catch (d) {}
                        for (; b && "IFRAME" == b.nodeName;) {
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
                    } else this.$.listen(a,
                        "blur", this.iM);
                    "toggle_display" == this.Pa ? (this.Aa.style.visibility = "visible", s_s(this.Aa, !0)) : "move_offscreen" == this.Pa && this.Ia();
                this.Do = !0;
                this.mD = s_e();
                this.jD = -1;
                this.Ka ? (s_1c(this.Ka, "end", this.Gt, !1, this), this.Ka.play()) : this.Gt()
            }
        } else s_$Ta(this)
    };
    s_Mv.prototype.Ia = s_b;
    var s_$Ta = function(a, b) {
        if (!a.Do || !a.dispatchEvent({
                type: "beforehide",
                target: b
            })) return !1;
        a.$ && a.$.removeAll();
        a.Do = !1;
        a.jD = s_e();
        a.Db ? (s_1c(a.Db, "end", s_d(a.QH, b), !1, a), a.Db.play()) : a.QH(b);
        return !0
    };
    s_ = s_Mv.prototype;
    s_.QH = function(a) {
        "toggle_display" == this.Pa ? this.J0() : "move_offscreen" == this.Pa && (this.Aa.style.top = "-10000px");
        this.Sn(a)
    };
    s_.J0 = function() {
        this.Aa.style.visibility = "hidden";
        s_s(this.Aa, !1)
    };
    s_.ND = function() {
        return this.dispatchEvent("beforeshow")
    };
    s_.Gt = function() {
        this.dispatchEvent("show")
    };
    s_.Sn = function(a) {
        this.dispatchEvent({
            type: "hide",
            target: a
        })
    };
    s_.jM = function(a) {
        a = a.target;
        s_Hc(this.Aa, a) || s_aUa(this, a) || this.kC && !s_Hc(this.kC, a) || 150 > s_e() - this.mD || s_$Ta(this, a)
    };
    s_.V2 = function(a) {
        27 == a.keyCode && s_$Ta(this, a.target) && (a.preventDefault(), a.stopPropagation())
    };
    s_.iM = function(a) {
        var b = s_gc(this.Aa);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement, !a || s_Hc(this.Aa, a) || "BODY" == a.tagName) return
        } else if (a.target != b) return;
        150 > s_e() - this.mD || s_$Ta(this)
    };
    var s_aUa = function(a, b) {
        return s_Pa(a.Js || [], function(a) {
            return b === a || s_Hc(a, b)
        })
    };
    s_Mv.prototype.Ha = function() {
        s_Mv.Ba.Ha.call(this);
        this.$.dispose();
        s_8a(this.Ka);
        s_8a(this.Db);
        delete this.Aa;
        delete this.$;
        delete this.Js
    };
    s_D("sy260");
    var s_Ov = function(a, b) {
        this.LP = 8;
        this.Gq = b || void 0;
        s_Mv.call(this, a)
    };
    s_f(s_Ov, s_Mv);
    s_Ov.prototype.getPosition = function() {
        return this.Gq || null
    };
    var s_Pv = function(a, b) {
        a.Gq = b || void 0;
        a.Ua() && a.Ia()
    };
    s_Ov.prototype.Ia = function() {
        if (this.Gq) {
            var a = !this.Ua() && "move_offscreen" != this.getType(),
                b = this.va();
            a && (b.style.visibility = "hidden", s_s(b, !0));
            this.Gq.$(b, this.LP, this.zg);
            a && s_s(b, !1)
        }
    };

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
    };
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
    };
    var s_Wv = function(a, b, c, d, e) {
        null != b && (a.KA = b);
        null != c && (a.EA = c);
        s_ka(d) && (a.ZG = Math.max(d, 15));
        s_ka(e) && (a.LD = e)
    };
    s_Vv.prototype.$ = function(a, b, c) {
        a = this.EA;
        2 == a && (a = 0);
        s_kUa(this, this.KA, a, 2 == this.EA ? s_Xv(this.KA) ? this.ka.offsetHeight / 2 : this.ka.offsetWidth / 2 : this.ZG, 0, c)
    };
    var s_kUa = function(a, b, c, d, e, f) {
            if (a.ma) {
                var g = s_lUa(b, c),
                    k;
                k = a.ma;
                var l = s_r(k);
                var l = (s_Xv(b) ? l.height / 2 : l.width / 2) - d,
                    m = s_$La(k, g),
                    n;
                if (n = s_kt(k)) k = s_kd(s_Cd(k)), s_Xv(b) ? k.top < n.top && !(m & 1) ? l -= n.top - k.top : k.bottom > n.bottom && m & 1 && (l -= k.bottom - n.bottom) : k.left < n.left && !(m & 4) ? l -= n.left - k.left : k.right > n.right && m & 4 && (l -= k.right - n.right);
                k = l;
                k = s_Xv(b) ? new s_$b(a.LD, k) : new s_$b(k, a.LD);
                l = s_Xv(b) ? 6 : 9;
                a.Jfa && 2 == e && (l = s_Xv(b) ? 4 : 1);
                m = b ^ 3;
                s_Xv(b) && "rtl" == a.ma.dir && (m = b);
                g = s_mt(a.ma, s_lUa(m, c), a.ka, g, k, f, a.Sh ?
                    l : 0, void 0, null);
                if (2 != e && g & 496) {
                    s_kUa(a, b ^ 3, c, d, a.Jfa && 0 == e ? 1 : 2, f);
                    return
                }!a.Ca || g & 496 || (e = parseFloat(a.ka.style.left), f = parseFloat(a.ka.style.top), isFinite(e) && 0 == e % 1 && isFinite(f) && 0 == f % 1 || s_qd(a.ka, Math.round(e), Math.round(f)))
            }
            s_mUa(a, b, c, d)
        },
        s_mUa = function(a, b, c, d) {
            var e = a.Wa;
            s_bb(a.Ea, function(a) {
                s_y(e, a, !1)
            }, a);
            s_w(e, a.Ea[b]);
            e.style.top = e.style.left = e.style.right = e.style.bottom = "";
            a.ma ? (c = s_yd(a.ma, a.ka), d = s_nUa(a.ma, b), s_Xv(b) ? e.style.top = s_oUa(c.y + d.y, a.ka.offsetHeight - 15) + "px" : e.style.left =
                s_oUa(c.x + d.x, a.ka.offsetWidth - 15) + "px") : e.style[0 == c ? s_Xv(b) ? "top" : "left" : s_Xv(b) ? "bottom" : "right"] = d + "px"
        },
        s_oUa = function(a, b) {
            return 15 > b ? 15 : s_8b(a, 15, b)
        },
        s_lUa = function(a, b) {
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
        },
        s_nUa = function(a, b) {
            var c = 0,
                d = 0,
                e = s_r(a);
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
                    c = e.width, d = e.height / 2
            }
            return new s_$b(c, d)
        },
        s_Xv = function(a) {
            return 0 == a || 3 == a
        };

    s_C("sy263");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy257");
    var s_Zv = function(a, b, c, d, e) {
            return new s_Yv(a, b, {
                opacity: d
            }, {
                opacity: e
            }, {
                Gf: "opacity",
                duration: b,
                timing: c,
                Tc: 0
            })
        },
        s_pUa = function(a, b) {
            return s_Zv(a, b, "ease-out", 0, 1)
        },
        s_qUa = function(a, b) {
            return s_Zv(a, b, "ease-in", 1, 0)
        };
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
    };
    s_D("sy254");
    var s_sUa = function() {},
        s_tUa = new s_sUa,
        s_uUa = ["click", s_Lb ? "keypress" : "keydown", "keyup"];
    s_sUa.prototype.listen = function(a, b, c, d, e) {
        var f = function(a) {
            var c = s__c(b),
                e = s_Fc(a.target) ? s_Li(a.target) : null;
            "click" == a.type && a.Ii() ? c.call(d, a) : 13 != a.keyCode && 3 != a.keyCode || "keyup" == a.type ? 32 != a.keyCode || "keyup" != a.type || "button" != e && "tab" != e || (c.call(d, a), a.preventDefault()) : (a.type = "keypress", c.call(d, a))
        };
        f.ma = b;
        f.qa = d;
        e ? e.listen(a, s_uUa, f, c) : s_p(a, s_uUa, f, c)
    };
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
    };
    var s_vUa = function(a) {
        var b = '<div class="jfk-bubble" role="alertdialog"' + (a.uid ? ' aria-describedby="' + s_Ju(a.uid) + '"' : "") + '><div class="jfk-bubble-content-id"' + (a.uid ? ' id="' + s_Ju(a.uid) + '"' : "") + "></div>";
        a.r7 && (a = b, b = "\u5173\u95ed".replace(s_bQa, s_cQa), b = a + ('<div class="jfk-bubble-closebtn-id jfk-bubble-closebtn" aria-label="' + b + '" role="button" tabindex=0></div>'));
        return s_Hu(b + '<div class="jfk-bubble-arrow-id jfk-bubble-arrow"><div class="jfk-bubble-arrowimplbefore"></div><div class="jfk-bubble-arrowimplafter"></div></div></div>')
    };
    var s__v = function(a) {
        s_vo.call(this, a);
        this.$ = new s_Vv("jfk-bubble", !0);
        this.ma = new s_Ov;
        this.Da = []
    };
    s_f(s__v, s_vo);
    s__v.prototype.qa = !0;
    s__v.prototype.Ea = !1;
    s__v.prototype.Wd = function(a) {
        this.$.Wd(a);
        this.Zk()
    };
    s__v.prototype.Wb = function(a) {
        this.Da.push(a)
    };
    var s_0v = function(a, b) {
            a.Ga = b;
            s_wUa(a, b)
        },
        s_wUa = function(a, b) {
            var c = a.Hc();
            if (b && c)
                if (s_ja(b)) s_o(c, b);
                else if (b instanceof s_Gu) {
                var d;
                if (b.Nj === s_3Pa) d = s_6b(b.toString());
                else {
                    if (b.Nj !== s_Eu) throw Error("Ia");
                    s_Xb("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
                    d = s_5b(b.toString(), b.Vs || null)
                }
                s_7b(c, d)
            } else b instanceof s_3b ? s_7b(c, b) : (s_7b(c, s_oba), c.appendChild(b))
        };
    s_ = s__v.prototype;
    s_.Hc = function() {
        return s_wo(this, "jfk-bubble-content-id")
    };
    s_.Ob = function() {
        this.Aa = s_7Pa(s_vUa, {
            r7: this.qa,
            uid: "bubble-" + s_na(this)
        }, void 0, this.Fa);
        s_wUa(this, this.Ga);
        s_s(this.va(), !1);
        this.ma.zm(this.va());
        if (!s_Nb) {
            var a = this.ma,
                b = s_pUa(this.va(), .218),
                c = s_qUa(this.va(), .218);
            a.Ka = b;
            a.Db = c
        }
        s_Pe(this.va(), this.Da)
    };
    s_.Eb = function() {
        s__v.Ba.Eb.call(this);
        s_xo(this).listen(this.ma, ["beforeshow", "show", "beforehide", "hide"], this.x_);
        if (this.qa) {
            var a = s_xo(this),
                b = s_wo(this, "jfk-bubble-closebtn-id"),
                c = s_d(this.setVisible, !1);
            s_tUa.listen(b, c, void 0, a.Ga || a, a)
        }
        a = this.va();
        b = s_wo(this, "jfk-bubble-arrow-id");
        c = this.$;
        c.ka = a;
        c.Wa = b;
        s_Pv(this.ma, this.$)
    };
    s_.setVisible = function(a) {
        this.ma.setVisible(a)
    };
    s_.Ua = function() {
        return this.ma.Ua()
    };
    s_.Zk = function() {
        this.Ua() && this.ma.Ia()
    };
    s_.Ha = function() {
        this.ma.dispose();
        delete this.ma;
        s__v.Ba.Ha.call(this)
    };
    s_.lL = function() {
        s_xd(this.va());
        return !1
    };
    s_.x_ = function(a) {
        if ("show" == a.type || "hide" == a.type) {
            var b = s_xo(this),
                c = this.Fa,
                c = s_Jb ? s_Qc(c) : c.$;
            "show" == a.type ? b.listen(c, "scroll", this.lL) : b.unlisten(c, "scroll", this.lL)
        }
        b = this.dispatchEvent(a.type);
        this.Ea && "hide" == a.type && this.dispose();
        return b
    };

    s_C("sy254");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("spch");
    var s_V6 = function() {
        s_Zi.call(this);
        this.ma = null;
        this.Ea = s_i("fkbx-spch");
        this.qa = s_i("fkbx-hspch");
        this.Ma = this.Ja = this.$ = this.Da = null;
        this.rb = s_i("fkbx-hht");
        this.Za = s_i("gsri_ok0");
        this.Ca = s_i("chw-o");
        if (this.Za) s_LGd(this);
        else {
            var a;
            if (a = this.Ea && this.qa)(a = s_i("fkbx-tchm")) ? (this.$ = new s__v, this.$.Wb("fkbx-chm"), this.$.qa = !1, this.$.Wd(this.Ea), s_Nv(this.$.ma, !1), this.$.$.Sh = !0, s_Wv(this.$.$, 1, 2, void 0, -3), s_0v(this.$, a), this.$.render(), s_q(a, "display", "block"), this.Ja = s_i("fkbx-chme"), (a = s_i("fkbx-chmer")) &&
                this.listen(a, ["click", "keydown"], s_c(this.Ia, this, "hcr")), (a = s_i("fkbx-chmed")) && this.listen(a, ["click", "keydown"], s_c(this.Ia, this, "hcd")), this.Ma = s_i("fkbx-chmt"), (a = s_i("fkbx-chmtr")) && this.listen(a, ["click", "keydown"], s_c(this.Ia, this, "hcc")), a = !0) : a = !1;
            a && (this.listen(this.qa, ["mousedown", "click", "keydown"], this.nb, !0), s_LGd(this))
        }
    };
    s_f(s_V6, s_Zi);
    s_ea(s_V6);
    var s_NGd = function(a) {
        var b = s_MGd;
        s_Uf("local") && b.ma && b.Ca ? !0 === s_Tf("local").get("chwos") ? a() : window.chrome && window.chrome.runtime && window.chrome.runtime.sendMessage ? window.chrome.runtime.sendMessage("nbpagnldghgfoolbancepceaanlmhfmd", {
            type: "wu"
        }, s_c(b.Ka, b, a)) : a() : a()
    };
    s_V6.prototype.Ka = function(a, b) {
        var c = this.Za || this.Ea;
        !c || window.chrome.runtime.lastError || b.doNotShowOptinMessage ? a() : (this.ma.setVisible(!0), s_z(c, [this.Ca], [!0], "chw"))
    };
    var s_PGd = function() {
        var a = s_MGd;
        window.chrome && window.chrome.runtime && window.chrome.runtime.sendMessage && chrome.runtime.sendMessage("bepbmhgboaologfdajaanbcjmnhjmhfn", {
            type: "wuh"
        }, s_c(function() {
            window.chrome.runtime.lastError || s_OGd("wu", "dnhpdliibojhegemfjheidglijccjfmc")
        }, a))
    };
    s_V6.prototype.hide = function() {
        this.$ && this.$.setVisible(!1);
        s_QGd(this)
    };
    s_V6.prototype.Ha = function() {
        s_QGd(this);
        this.Da && (this.Da.destroy(), this.Da = null);
        this.$ && s_8a(this.$);
        s_V6.Ba.Ha.call(this)
    };
    var s_LGd = function(a) {
            a.listen(window, "message", s_c(a.Xa, a));
            s_1h("chw", {
                optInEnableButtonClicked: s_c(a.Db, a, "hco"),
                optInNoThanksButtonClicked: s_c(a.Db, a, "hcno")
            });
            s_Fd('.goog-inline-block{position:relative;display:-moz-inline-box;display:inline-block}* html .goog-inline-block{display:inline}*:first-child+html .goog-inline-block{display:inline}.jfk-bubble{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.2);-moz-box-shadow:0 1px 3px rgba(0,0,0,.2);box-shadow:0 1px 3px rgba(0,0,0,.2);background-color:#fff;border:1px solid;border-color:#bbb #bbb #a8a8a8;padding:16px;position:absolute;z-index:1201!important}.jfk-bubble-closebtn{background:url("//ssl.gstatic.com/ui/v1/icons/common/x_8px.png") no-repeat;border:1px solid transparent;height:21px;opacity:.4;outline:0;position:absolute;right:2px;top:2px;width:21px}.jfk-bubble-closebtn:focus{border:1px solid #4d90fe;opacity:.8}.jfk-bubble-arrow{position:absolute}.jfk-bubble-arrow .jfk-bubble-arrowimplbefore,.jfk-bubble-arrow .jfk-bubble-arrowimplafter{display:block;height:0;position:absolute;width:0}.jfk-bubble-arrow .jfk-bubble-arrowimplbefore{border:9px solid}.jfk-bubble-arrow .jfk-bubble-arrowimplafter{border:8px solid}.jfk-bubble-arrowdown{bottom:0}.jfk-bubble-arrowup{top:-9px}.jfk-bubble-arrowleft{left:-9px}.jfk-bubble-arrowright{right:0}.jfk-bubble-arrowdown .jfk-bubble-arrowimplbefore,.jfk-bubble-arrowup .jfk-bubble-arrowimplbefore{border-color:#bbb transparent;left:-9px}.jfk-bubble-arrowdown .jfk-bubble-arrowimplbefore{border-color:#a8a8a8 transparent}.jfk-bubble-arrowdown .jfk-bubble-arrowimplafter,.jfk-bubble-arrowup .jfk-bubble-arrowimplafter{border-color:#fff transparent;left:-8px}.jfk-bubble-arrowdown .jfk-bubble-arrowimplbefore{border-bottom-width:0}.jfk-bubble-arrowdown .jfk-bubble-arrowimplafter{border-bottom-width:0}.jfk-bubble-arrowup .jfk-bubble-arrowimplbefore{border-top-width:0}.jfk-bubble-arrowup .jfk-bubble-arrowimplafter{border-top-width:0;top:1px}.jfk-bubble-arrowleft .jfk-bubble-arrowimplbefore,.jfk-bubble-arrowright .jfk-bubble-arrowimplbefore{border-color:transparent #bbb;top:-9px}.jfk-bubble-arrowleft .jfk-bubble-arrowimplafter,.jfk-bubble-arrowright .jfk-bubble-arrowimplafter{border-color:transparent #fff;top:-8px}.jfk-bubble-arrowleft .jfk-bubble-arrowimplbefore{border-left-width:0}.jfk-bubble-arrowleft .jfk-bubble-arrowimplafter{border-left-width:0;left:1px}.jfk-bubble-arrowright .jfk-bubble-arrowimplbefore{border-right-width:0}.jfk-bubble-arrowright .jfk-bubble-arrowimplafter{border-right-width:0}');
            if (a.Ca) {
                var b = a.Za || a.Ea;
                b && (a.ma = new s__v, s_0v(a.ma, a.Ca), a.ma.Wb("chw-oc"), a.ma.qa = !1, a.ma.Wd(b), a.ma.$.Sh = !0, s_Wv(a.ma.$, 2, 2, void 0, -8), a.ma.render(), s_q(a.Ca, "display", "block"), a.ma.setVisible(!1))
            }
            a.listen(window, "resize", s_c(a.Lb, a))
        },
        s_OGd = function(a, b) {
            window.chrome && window.chrome.runtime && window.chrome.runtime.sendMessage ? window.chrome.runtime.sendMessage(b, {
                type: a
            }) : s_RGd(a)
        };
    s_V6.prototype.Xa = function(a) {
        a = a.$;
        if (a.source == window && a.data && a.data.type) {
            a = a.data.type;
            switch (a) {
                case "vt":
                    s_u(144)
            }
            if (this.$) switch (a) {
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
                    s_q(this.Ma, "display", "none"), s_q(this.Ja,
                        "display", "block"), s_SGd(this), s_RGd("sem")
            }
        }
    };
    var s_RGd = function(a) {
        window.postMessage({
            type: a
        }, "*")
    };
    s_V6.prototype.nb = function(a) {
        a.$.stopImmediatePropagation();
        if ("click" == a.type || "keydown" == a.type && 13 == a.keyCode) this.hide(), s_u(128)
    };
    s_V6.prototype.Ia = function(a) {
        s_RGd(a)
    };
    s_V6.prototype.Db = function(a, b) {
        s_OGd(a, "nbpagnldghgfoolbancepceaanlmhfmd");
        this.ma && this.ma.Ua() && (this.ma.setVisible(!1), s_z(b, [this.Ca], [!1], "chw"));
        if (s_Uf("local")) {
            var c = s_Tf("local");
            c.get("chwos") || c.set("chwos", !0)
        }
    };
    var s_SGd = function(a) {
        s_QGd(a);
        a.$ && (a.$.setVisible(!0), a.$.Zk())
    };
    s_V6.prototype.Lb = function() {
        this.$ && this.$.Ua() && this.$.Zk();
        this.ma && this.ma.Ua() && this.ma.Zk()
    };
    var s_QGd = function(a) {
        var b = s_i("fkbx_ph");
        b && s_Dd(b, 1);
        a.$ && (s_q(a.Ea, "display", "block"), s_q(a.qa, "display", "none"), s_x(a.rb, "fkbx-hht-s"))
    };
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
    var s_VGd, s_26, s_WGd = !1,
        s_XGd = function() {
            if (s_WGd) {
                var a = .5 + .55 * Math.random(),
                    b = Math.round(170 + 10 * Math.random());
                s_26.style.setProperty("-webkit-transition", "-webkit-transform " + b / 1E3 + "s ease-in-out");
                s_26.style.setProperty("-webkit-transform", "scale(" + a + ")");
                window.setTimeout(s_XGd, b)
            } else s_26.style.removeProperty("opacity"), s_26.style.removeProperty("-webkit-transition"), s_26.style.removeProperty("-webkit-transform")
        };
    var s_YGd = {
        webhp: 1,
        imghp: 1,
        mobilewebhp: 1,
        newtab: 1
    };
    var s_36, s_46, s_56, s_ZGd, s__Gd, s_66 = function(a, b, c) {
            window.clearTimeout(s_ZGd);
            window.clearTimeout(s__Gd);
            c ? (s_46.innerHTML = a, s_36.innerHTML = b, a = s_46.firstElementChild, a.id = "spchta", a.className = "spchta") : (s_46.innerText = a, s_36.innerText = b);
            a = s_46;
            b = s_36;
            0 == s_56 && (s_56 = google.sn in s_YGd ? 32 : 27);
            c = 1.2 * s_56 + 1;
            var d = 2.4 * s_56 + 1,
                e = 1.2 * s_56 * 3 + 1,
                f = s_46.scrollHeight,
                g = "spcht";
            f > 4.8 * s_56 + 1 ? g += " spch-5l" : f > e ? g += " spch-4l" : f > d ? g += " spch-3l" : f > c && (g += " spch-2l");
            a.className = b.className = g
        },
        s_0Gd = function() {
            s_46.innerText =
                "";
            s_36.innerText = "";
            s_ZGd = window.setTimeout(function() {
                "" == s_46.innerText && s_66(s_16.waiting, "")
            }, 300)
        },
        s_1Gd = function() {
            window.clearTimeout(s__Gd);
            window.clearTimeout(s_ZGd);
            s_56 = 0;
            s_46.className = "spcht";
            s_36.className = "spcht"
        },
        s_2Gd = function() {
            var a = 0,
                b = "",
                c = function() {
                    var d = s_16.uL,
                        e = 0 < a && s_46.innerText != d.substring(0, a),
                        f = 0 == a && s_46.innerText != s_16.ready;
                    a == d.length || e || f || (b += d.substring(a, a + 1), s_66(b, ""), ++a, s__Gd = window.setTimeout(c, 30))
                };
            s__Gd = window.setTimeout(c, 2E3)
        };
    var s_76, s_86, s_3Gd, s_4Gd = !1,
        s_96 = !1,
        s_5Gd = function(a) {
            var b = s_W6;
            s_96 && (s_86.className = "spchc s2ra", s_66(a, b))
        },
        s_6Gd = function(a) {
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
        },
        s_7Gd = function(a) {
            if (s_96) {
                a = a.target.id;
                var b = "4",
                    c = "";
                "spchx" == a ? b = "0" : "spch" == a ? b = "2" : "spchb" == a ? b = "1" : "spchta" == a ? b = "5" : c = a;
                s_3Gd(b, c, "1" == b && !s_4Gd, ("1" == b || "5" == b) && s_4Gd)
            }
        };
    var s_$6 = -1,
        s_a7 = 0,
        s_dHd = function() {
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
        },
        s_iHd = function() {
            if (2 == s_$6) {
                s_eHd("ss");
                s_96 || (s_0Gd(), s_96 || (s_s(s_76, !0), google.sn in s_YGd ? (s_76.className = "spch s2fp-h", s_76.className = "spch s2fp") : (s_76.className = "spch s2tb-h", s_76.className = "spch s2tb"), s_96 = !0), window.addEventListener("mouseup",
                    s_7Gd, !1));
                s_b7(8E3);
                window.clearTimeout(s_Z6);
                s_Z6 = window.setTimeout(s_fHd, 1500);
                s_u(120);
                document.addEventListener("webkitvisibilitychange", s_gHd, !1);
                s__6 && s__6.onerror && s__6.onnomatch && s__6.onend && s__6.onresult && s__6.onaudiostart && s__6.onspeechstart || s_dHd();
                try {
                    s__6.start(), s_$6 = 3
                } catch (a) {
                    s_$6 = 2;
                    s_dHd();
                    try {
                        s__6.start(), s_$6 = 3
                    } catch (b) {
                        s_$6 = 10, s_c7(0, "1"), s_hHd()
                    }
                }
            }
        },
        s_hHd = function() {
            7 != s_$6 && s_u(126);
            10 == s_$6 && (s_$6 = 11, s__6.abort());
            window.removeEventListener("mouseup", s_7Gd, !1);
            s_WGd = !1;
            s_76.className =
                google.sn in s_YGd ? "spch s2fp-h" : "spch s2tb-h";
            s_86.className = "spchc";
            s_76.removeAttribute("style");
            s_s(s_76, !1);
            s_4Gd = s_96 = !1;
            s_1Gd();
            s_jHd()
        },
        s_d7 = function(a, b, c) {
            s_c7(a, b, c);
            s_$6 = 10;
            s_hHd()
        },
        s_jHd = function() {
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
        },
        s_bHd = function() {
            s_b7(8E3);
            window.clearTimeout(s_Z6);
            s_$6 = 4;
            s_96 && (s_86.className =
                "spchc s2ml", window.clearTimeout(s_ZGd), s_66(s_16.ready, ""), s_2Gd())
        },
        s_cHd = function() {
            s_b7(8E3);
            s_$6 = 5;
            s_96 && (s_86.className = "spchc s2ra", google.sn in s_YGd || (s_76.style.backgroundColor = "rgba(255, 255, 255, 0.9)"), s_WGd || (s_WGd = !0, s_XGd()), window.clearTimeout(s__Gd));
            s_Me(106, s_kHd, 50)
        },
        s_aHd = function(a) {
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
            var b = a.results,
                c = b.length;
            if (0 != c) {
                s_$6 = 6;
                s_W6 = s_Y6 = "";
                var d = a.resultIndex;
                if (a = b[d].isFinal) s_W6 =
                    b[d][0].transcript, s_5Gd(s_W6);
                else {
                    for (d = 0; d < c; d++) {
                        var e = b[d][0].transcript;
                        s_Y6 += e;
                        .5 < b[d][0].confidence && (s_W6 += e)
                    }
                    s_5Gd(s_Y6)
                }
                6 == s_$6 && (a || 120 < s_Y6.length ? (s_06 = s_W6, s_lHd(18)) : (s_06 = s_Y6, s_u(136, [s_06])))
            }
        },
        s_8Gd = function(a) {
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
        },
        s_9Gd = function() {
            s_c7(4);
            s_$6 = 8;
            s_6Gd("8");
            s_eHd("se");
            window.clearTimeout(s_X6);
            s_nHd(8E3)
        },
        s_$Gd = function() {
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
                    s_6Gd(a), s_eHd("se"), s_nHd(8E3), s_c7(3, a);
                case 8:
                    s_$6 = 11;
                    break;
                default:
                    s_$6 = 11, s_hHd()
            }
        },
        s_oHd = function(a) {
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
            b ? (a.stopPropagation(), 27 == a.keyCode ? s_d7(0, "0") : 13 == a.keyCode && s_06 && s_lHd(3)) : (b = a.ctrlKey ||
                s_Ob && a.metaKey, 0 == s_$6 && 190 == a.keyCode && a.shiftKey && b && s_e7())
        },
        s_eHd = function(a) {
            window.postMessage({
                type: a
            }, "*")
        },
        s_kHd = function() {
            return 7 == s_$6
        },
        s_pHd = function() {
            if ("" != s_W6) s_06 = s_W6, s_lHd(19);
            else switch (s_$6) {
                case 3:
                case 4:
                case 5:
                case 6:
                case 8:
                    s_d7(0, "3")
            }
        },
        s_fHd = function() {
            s_b7(15E3);
            s_c7(0, "6");
            s_96 && (s_86.className = "spchc s2wfp")
        },
        s_gHd = function() {
            s_qHd() || document.webkitHidden && s_d7(0, "4")
        },
        s_rHd = function() {
            s_qHd() || s_d7(0, "7")
        },
        s_lHd = function(a) {
            s_$6 = 7;
            window.clearTimeout(s_X6);
            s_u(121, [s_06, a]);
            s_hHd()
        },
        s_mHd = function(a) {
            switch (a) {
                case "no-speech":
                    return s_a7 = 8E3, "0";
                case "aborted":
                    return s_a7 = 3E3, "1";
                case "audio-capture":
                    return s_a7 = 8E3, "2";
                case "network":
                    return s_a7 = 3E3, "3";
                case "not-allowed":
                    return s_a7 = 8E3, "4";
                case "service-not-allowed":
                    return s_a7 = 8E3, "5";
                case "bad-grammar":
                    return s_a7 = 3E3, "6";
                case "language-not-supported":
                    return s_a7 = 3E3, "7";
                default:
                    return s_a7 = 3E3, "9"
            }
        },
        s_c7 = function(a, b, c) {
            var d = "";
            b && (d += "&reason=" + b);
            c && (d += "&data=" + c);
            google.log("spch-recog", a + d)
        },
        s_b7 =
        function(a) {
            window.clearTimeout(s_X6);
            s_X6 = window.setTimeout(s_pHd, a)
        },
        s_nHd = function(a) {
            window.clearTimeout(s_TGd);
            s_TGd = window.setTimeout(s_hHd, a)
        },
        s_qHd = function() {
            switch (s_$6) {
                case 0:
                case -1:
                case 1:
                    return !0
            }
            return !1
        },
        s_sHd = function() {
            0 != s_$6 && s_d7(7, "5");
            s_$6 = 2;
            s_iHd()
        },
        s_e7 = function() {
            -1 == s_$6 ? s_c7(5) : 0 != s_$6 ? s_d7(0, "5") : s_MGd ? s_NGd(function() {
                s_$6 = 2;
                s_iHd()
            }) : (s_$6 = 2, s_iHd())
        },
        s_tHd = function(a, b, c, d) {
            s_06 && c ? s_lHd(17) : 11 == s_$6 && d ? (s_c7(6, a, b), s_jHd(), s_e7()) : s_d7(1, a, b)
        };
    s_we("spch", {
        init: function(a) {
            s_UGd = a.hl;
            var b;
            if (b = "webkitSpeechRecognition" in self && !!webkitSpeechRecognition) {
                s_76 = s_i("spch");
                s_86 = s_i("spchc");
                s_3Gd = s_tHd;
                if (b = !!s_76 && !!s_86) s_36 = s_i("spchf"), s_46 = s_i("spchi"), s_1Gd(), b = !(!s_36 || !s_46);
                b && (s_VGd = s_i("spchb"), s_26 = s_i("spchl"), b = !(!s_VGd || !s_26))
            }
            if (b) {
                -1 == s_$6 && (s_ye(window, "keydown", s_oHd), s_Me(140, s_e7), s_Me(128, s_e7), s_Me(141, s_rHd), s_Me(144, s_sHd));
                if (a.hen) {
                    s_MGd = s_V6.Sa();
                    b = a.htt;
                    var c = s_MGd;
                    c.qa && !c.Da && b && (c.Da = new s_C5(c.qa, b));
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
            } else s_$6 = -1, s_u(138), s_ze(window, "keydown", s_oHd), s_Ne(140, s_e7), s_Ne(128, s_e7), s_Ne(141, s_rHd), s_Ne(144, s_sHd)
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
    s_D("sy118");
    var s_Esa = function(a, b) {
        for (var c = new RegExp("(?:^|\\s)" + b + "(?:$|\\s)"); a;) {
            if (c.test(a.className)) return a;
            a = a.parentElement
        }
        return null
    };
    var s_Fsa = function(a) {
            return a ? 4 <= a ? 4 : 3 <= a ? 3 : 2 <= a ? 2 : 1 : 1
        },
        s_Gsa = function(a, b, c, d) {
            a = a.split("?")[0];
            d = s_Fsa(d);
            b = b ? b : 0;
            c = c ? c : 0;
            var e = b * d,
                f = c * d,
                e = Math.min(1, 2048 / (e ? e : 1), 2048 / (f ? f : 1));
            b = Math.floor(b * e);
            c = Math.floor(c * e);
            return a + "?scale=" + d + (c ? "&h=" + c : "") + (b ? "&w=" + b : "")
        };
    var s_Hsa = function(a, b, c) {
            var d = s_Fsa(s_ca.devicePixelRatio),
                e = s_Gsa(a.getAttribute("data-bsrc"), b, c, d);
            a.setAttribute("data-bsrc", e);
            var f = function() {
                a.removeEventListener("load", f, !1);
                a.style.display = "inline";
                a.removeAttribute("height");
                a.removeAttribute("width");
                var e = 0 != s_ca.SCALE_MAP;
                1 != d && e && (c || (c = a.height / d), b || (b = a.width / d));
                c && a.setAttribute("height", c);
                b && a.setAttribute("width", b);
                (e = s_Dc(a)) && s_s(e, !0)
            };
            a.addEventListener("load", f, !1)
        },
        s_Isa = function(a) {
            var b = {};
            if (!a.hasAttribute("data-vs")) return null;
            a.getAttribute("data-vs").split(",").forEach(function(a) {
                a = a.split(":");
                b[a[0]] = a[1]
            });
            return b
        };
    var s_Jsa = [],
        s_Ksa = [],
        s_Lsa = [],
        s_Msa = s_b,
        s_Nsa = function() {
            var a = s_k("lu_vs");
            a.length && s_en(a)
        },
        s_en = function(a) {
            a ? (s_yi(s_Osa), s_g(a, s_Psa)) : s_Nsa()
        },
        s_Qsa = function(a) {
            var b = s_Isa(a);
            if (!b) return null;
            var c = s_Oc(a, b.r);
            if (!c) return null;
            if (0 == c.offsetWidth && 0 == c.offsetHeight) return -1 == s_Ksa.indexOf(a) && (s_Ksa.push(a), s_Lsa.push(s_lj(s_c(s_Psa, null, a))), s_Lsa.push(s_Bja(s_c(s_Psa, null, a)))), null;
            if (s_a(b.lukp) && b.lukp) {
                a = s_Esa(c, "kno-mrg");
                var d = s_Esa(c, "kno-mrg-m");
                d && (d.style.width = "auto", d.style.height =
                    "auto");
                if (a) {
                    var d = a.getElementsByClassName("img-kc-m")[0],
                        e = a.getElementsByClassName("bi-io")[0],
                        f = d && !e && s_yfa(a, d) && 0 < d.offsetHeight && 0 < d.offsetWidth,
                        e = 0;
                    f && (e = d.offsetHeight);
                    a = a.offsetWidth - (f ? d.offsetWidth : 0);
                    0 < a && 0 < e ? (c.style.width = a + "px", c.style.height = e + "px") : 0 < a && (c.style.width = a + "px")
                }
            }
            a = 0;
            s_a(b.w) && (a = Math.floor(c.offsetWidth * parseFloat(b.w)));
            d = 0;
            s_a(b.h) && (d = Math.floor(c.offsetHeight * parseFloat(b.h)));
            a && d && s_a(b.mhwr) && (d = Math.max(d, a * parseFloat(b.mhwr)));
            return new s_dc(a, d)
        },
        s_Psa =
        function(a) {
            a.setAttribute("data-bsrc", a.getAttribute("data-bsrc").split("&")[0]);
            var b = s_Qsa(a);
            if (b) {
                var c = s_Isa(a);
                c && "1" == c.o && -1 == s_Jsa.indexOf(a) && s_Jsa.push(a);
                s_Hsa(a, b.width, b.height);
                a.getAttribute("data-bsrc") != a.getAttribute("src") && (s_Msa(a), a.setAttribute("src", a.getAttribute("data-bsrc")))
            }
        },
        s_Osa = function() {
            s_g(s_Jsa, s_Psa)
        };
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
    s_D("sy82");
    var s_ll = function(a, b, c) {
        this.x = s_a(a) ? a : 0;
        this.y = s_a(b) ? b : 0;
        this.z = s_a(c) ? c : 0
    };
    s_ll.prototype.clone = function() {
        return new s_ll(this.x, this.y, this.z)
    };
    s_ll.prototype.Oa = function() {
        return [this.x, this.y, this.z]
    };
    s_C("sy82");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy84");
    var s_ml = function(a) {
            return (a = a.exec(s_$a)) ? a[1] : ""
        },
        s_voa = function() {
            if (s_9ca) return s_ml(/Firefox\/([0-9.]+)/);
            if (s_Jb || s_Kb || s_Ib) return s_Sb;
            if (s_ada) return s_ml(/Chrome\/([0-9.]+)/);
            if (s_bda && !s_Eb()) return s_ml(/Version\/([0-9.]+)/);
            if (s_Ae || s_Be) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(s_$a);
                if (a) return a[1] + "." + a[2]
            } else if (s_$ca) return (a = s_ml(/Android\s+([0-9.]+)/)) ? a : s_ml(/Version\/([0-9.]+)/);
            return ""
        }();

    s_C("sy84");
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
        },
        s_hoa = function(a, b, c, d) {
            s_1k.call(this, 1, a, b);
            this.x = c;
            this.y = d
        };
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
    };
    s_f(s_2k, s_1k);
    var s_3k = function(a, b, c, d, e, f, g) {
        s_1k.call(this, 4, a, b);
        this.scale = c;
        this.rotation = d;
        this.x = f;
        this.y = g
    };
    s_f(s_3k, s_1k);
    var s_4k = function(a, b, c, d, e, f) {
        s_1k.call(this, a, b, c);
        this.touches = d;
        this.x = e;
        this.y = f
    };
    s_f(s_4k, s_1k);
    var s_ioa = function(a, b, c) {
            this.target = a;
            this.type = b;
            this.Kk = c
        },
        s_joa = new s_je,
        s_koa = 0,
        s_5k = function(a, b, c) {
            s_ye(a, b, c);
            return new s_ioa(a, b, c)
        },
        s_6k = function(a, b) {
            var c = "gt" + s_koa++;
            s_joa.set(c, b);
            "_GTL_" in a || (a._GTL_ = []);
            a._GTL_.push(c);
            return c
        },
        s_7k = function(a) {
            var b = s_joa.get(a);
            if (b && b.length) {
                for (var c, d = null, e = 0; e < b.length; e++) c = b[e], c instanceof s_ioa ? (s_ze(c.target, c.type, c.Kk), d = c.target) : c();
                s_joa.remove(a);
                d && "_GTL_" in d && s_Ya(d._GTL_, a)
            }
        };
    var s_8k = function(a, b, c, d) {
        this.$ = a;
        this.ka = b;
        this.x1 = c;
        this.y1 = d
    };
    s_8k.prototype.clone = function() {
        return new s_8k(this.$, this.ka, this.x1, this.y1)
    };
    s_8k.prototype.equals = function(a) {
        return this.$ == a.$ && this.ka == a.ka && this.x1 == a.x1 && this.y1 == a.y1
    };
    var s_loa = function(a) {
            var b = a.x1 - a.$;
            a = a.y1 - a.ka;
            return b * b + a * a
        },
        s_9k = function(a) {
            return new s_$b(s_9b(a.$, a.x1, .5), s_9b(a.ka, a.y1, .5))
        };
    var s_$k = function() {};
    s_f(s_$k, s_Ud);
    var s_moa = function() {
        return "DEFAULT_ID"
    };
    s_$k.prototype.qa = s_Xd(s_moa);
    s_$k.prototype.ma = s_Xd(s_moa);
    s_$k.prototype.$ = s_Xd(s_moa);
    s_$k.prototype.Ea = s_Xd(s_moa);
    var s_noa = function(a) {
            return !a || 0 == a.x && 0 == a.y ? 0 : Math.abs(a.x) > Math.abs(a.y) ? 0 < a.x ? 6 : 4 : 0 < a.y ? 5 : 3
        },
        s_al = function(a, b) {
            return 0 == b || 2 >= b && a % 2 == b % 2 ? !0 : a == b
        },
        s_bl = function(a, b, c, d) {
            a = 180 * Math.atan2(d - b, c - a) / Math.PI;
            0 > a && (a = 360 + a);
            return a
        },
        s_ooa = function(a, b, c, d, e, f, g, k) {
            a = Math.sqrt(s_loa(new s_8k(e, f, g, k))) / Math.sqrt(s_loa(new s_8k(a, b, c, d)));
            return isNaN(a) ? 1 : isFinite(a) ? a : 10
        };
    var s_cl = function() {
        s_Zd(this)
    };
    s_Vd(s_$k, s_cl);
    s_ea(s_cl);
    var s_poa = function(a, b) {
            return s_cl.Sa().Mb.qa(a, b, void 0, void 0)
        },
        s_dl = function(a, b, c, d, e, f, g) {
            return s_cl.Sa().Mb.ma(a, b, c, d, e, f, g)
        },
        s_qoa = function(a, b, c, d) {
            return s_cl.Sa().Mb.Ea(a, b, c, d, 1, !0)
        };

    var s_gl = function() {};
    s_f(s_gl, s_$k);
    s_Wd(s_gl, s_$k);
    s_gl.prototype.qa = function(a, b, c, d) {
        c = [s_5k(a, "click", function(c) {
            d && c.stopPropagation();
            b(new s_hoa(c, a, c.screenX, c.screenY))
        }), s_5k(a, "keydown", function(c) {
            var d = c.which || c.keyCode || c.key,
                e = a.tagName.toUpperCase();
            "TEXTAREA" == e || "BUTTON" == e || "INPUT" == e || a.isContentEditable || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey || 13 != d && 32 != d && 3 != d || (32 == d && c.preventDefault(), b(c))
        })];
        return s_6k(a, c)
    };
    s_gl.prototype.ma = function(a, b, c, d, e, f, g) {
        var k = e || 0,
            l, m, n, ba, t, w = new s_aoa,
            B, G = !1;
        e = function(a) {
            G = a
        };
        var I = function(c) {
            if (G) {
                n = c.screenX;
                ba = c.screenY;
                var d = s_eoa(w, n, ba, c.timeStamp);
                t = s_noa(d);
                s_al(t, k) && b(new s_2k(c, a, t, 1, l, m, n, ba, d.x, d.y))
            }
        };
        B = function(b) {
            if (s_al(t, k)) {
                s_ze(a, "mousemove", I);
                s_ze(a, "mouseup", B);
                s_ze(a, "mouseout", B);
                var c = s_foa(w, n, ba, b.timeStamp);
                d && d(new s_2k(b, a, t, 1, l, m, b.screenX, b.screenY, c.x, c.y));
                g || s_0k(l, m)
            }
        };
        e = [s_5k(a, "mousedown", function(b) {
            l = n = b.screenX;
            m = ba = b.screenY;
            s_boa(w, l, m, b.timeStamp);
            c && c(new s_2k(b, a, 0, 1, l, m, n, ba, 0, 0));
            s_ye(a, "mousemove", I);
            s_ye(a, "mouseup", B);
            s_ye(a, "mouseout", B)
        }), s_5k(document.body, "mousedown", s_d(e, !0)), s_5k(document.body, "mouseup", s_d(e, !1))];
        return s_6k(a, e)
    };
    s_gl.prototype.$ = function(a, b, c, d, e) {
        var f = !1,
            g = function(a) {
                f = a
            },
            k, l = !1,
            m, n, ba, t, w, B = function(b) {
                ba = b.screenX;
                t = b.screenY;
                w = s_bl(m, n, ba, t);
                var d = s_9k(new s_8k(m, n, ba, t));
                c && c(new s_3k(b, a, 1, 0, 0, d.x, d.y))
            },
            G = function(c) {
                if (f) {
                    var d = c.screenX,
                        e = c.screenY,
                        g = s_9k(new s_8k(m, n, d, e));
                    b(new s_3k(c, a, s_ooa(m, n, ba, t, m, n, d, e), s_bl(m, n, d, e) - w, 0, g.x, g.y))
                }
            };
        k = function(b) {
            l = !1;
            s_ze(a, "mousedown", B);
            s_ze(a, "mousemove", G);
            s_ze(a, "mouseup", k);
            s_ze(a, "mouseout", k);
            if (d) {
                var c = b.screenX,
                    f = b.screenY,
                    g = s_9k(new s_8k(m,
                        n, c, f));
                d(new s_3k(b, a, s_ooa(m, n, ba, t, m, n, c, f), s_bl(m, n, c, f) - w, 0, g.x, g.y))
            }
            e || s_0k(m, n)
        };
        g = [s_5k(a, "click", function(b) {
            m = b.screenX;
            n = b.screenY;
            l || (s_ye(a, "mousedown", B), s_ye(a, "mousemove", G), s_ye(a, "mouseup", k), s_ye(a, "mouseout", k), l = !0)
        }), s_5k(document.body, "mousedown", s_d(g, !0)), s_5k(document.body, "mouseup", s_d(g, !1))];
        return s_6k(a, g)
    };
    s_gl.prototype.Ea = function(a, b, c, d, e, f) {
        var g, k, l, m = !1;
        e = function(a) {
            m = a
        };
        var n = function(c) {
            m && b && b(new s_4k(6, c, a, 1, c.screenX, c.screenY))
        };
        l = function(b) {
            s_ze(a, "mousemove", n);
            s_ze(a, "mouseup", l);
            s_ze(a, "mouseout", l);
            d && d(new s_4k(7, b, a, 1, b.screenX, b.screenY));
            f || s_0k(g, k)
        };
        e = [s_5k(a, "mousedown", function(b) {
            g = b.screenX;
            k = b.screenY;
            c && c(new s_4k(5, b, a, 1, g, k));
            s_ye(a, "mousemove", n);
            s_ye(a, "mouseup", l);
            s_ye(a, "mouseout", l)
        }), s_5k(document.body, "mousedown", s_d(e, !0)), s_5k(document.body, "mouseup", s_d(e, !1))];
        return s_6k(a, e)
    };

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
            if (void 0 === a.style[b] && (b = s_Sc() + s_Ha(b), void 0 !== a.style[b])) {
                b = s_Tc() + "-transform";
                break a
            }
            b = "transform"
        }
        return s_od(a, b) || s_od(a, "transform")
    };
    s_D("sy85");
    var s_xoa = s_ed(function() {
            return !s_Jb || 0 <= s_Da(s_voa, 9)
        }),
        s_yoa = s_ed(function() {
            return s_Mb || s_Kb || s_Lb && 0 <= s_Da(s_voa, 10) || s_Jb && 0 <= s_Da(s_voa, 10)
        }),
        s_nl = function(a) {
            a = s_woa(a);
            var b = s_zoa();
            return a && b ? (a = new b(a), new s_$b(a.m41, a.m42)) : new s_$b(0, 0)
        },
        s_ol = function(a, b, c) {
            s_xoa() && (b = s_yoa() ? "translate3d(" + b + "px," + c + "px,0px)" : "translate(" + b + "px," + c + "px)", s_q(a, s_Aoa(), b))
        },
        s_Boa = function(a) {
            a = s_woa(a);
            var b = s_zoa();
            return a && b ? (a = new b(a), new s_ll(a.m11, a.m22, a.m33)) : new s_ll(0, 0, 0)
        },
        s_Aoa = s_ed(function() {
            return s_Jb && 9 == s_Zaa ? "-ms-transform" : "transform"
        }),
        s_zoa = s_ed(function() {
            return s_a(s_ca.WebKitCSSMatrix) ? s_ca.WebKitCSSMatrix : s_a(s_ca.MSCSSMatrix) ? s_ca.MSCSSMatrix : s_a(s_ca.CSSMatrix) ? s_ca.CSSMatrix : null
        });

    s_C("sy85");
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
            b ? (s_w(a, "checked"), a.setAttribute("aria-checked", "true")) : (s_x(a, "checked"), a.setAttribute("aria-checked", "false"))
        },
        s_hpa = function(a) {
            var b;
            s_t(a, "s") && (b = a.previousSibling);
            var c = null !== a && s_v(a, "checked");
            s_gpa(a, !c);
            b && !c && s_gpa(b, !1);
            a.hasAttribute("url") && (b = a.getAttribute("url") + "&ei=" + google.getEI(a), (a = s_t(a, "ved")) && (b += "&ved=" + a), s_We(b))
        },
        s_ipa = function() {
            var a = {
                    cdr_min: "cd_min",
                    cdr_max: "cd_max"
                },
                b = s_i("ctbs");
            if (b)
                for (var c in a) {
                    var d = s_Coa(s_i(c).value),
                        d = d.replace(/^\s+|\s+$/g, "");
                    b.value = b.value.replace(new RegExp("(" + a[c] + ":)([^,]*)"), "$1" + d)
                }
            return !0
        };
    s_D("sy80");
    var s_Il = function(a, b, c, d) {
            this.jj = a;
            this.$ = b;
            this.qa = !!c;
            this.Zd = d ? d : null;
            this.ka = null;
            this.ma = s_poa(this.jj, s_c(this.Wa, this));
            s_Me(93, s_c(this.hide, this));
            s_Hl.push(this);
            a = this.jj.querySelectorAll(".mn-hd-txt");
            0 < a.length && this.jj.setAttribute("aria-label", a[0].innerHTML)
        },
        s_Hl = [];
    s_Il.prototype.hide = function() {
        this.$.setAttribute("aria-expanded", "false");
        s_x(this.$, "hdtb-mn-o");
        s_w(this.$, "hdtb-mn-c");
        this.ka && s_ze(document.body, "click", this.ka)
    };
    s_Il.prototype.Wa = function(a) {
        var b = s_v(this.$, "hdtb-mn-c");
        this.qa && s_z(this.$, [this.$], [b]);
        b ? (s_u(93), this.$.setAttribute("aria-expanded", "true"), s_4e(a.$ || a), this.Zd && this.Zd(this.jj, this.$), s_x(this.$, "hdtb-mn-c"), s_w(this.$, "hdtb-mn-o"), this.ka = s_c(this.Ea, this), s_ye(document.body, "click", this.ka), b = this.$.querySelectorAll(".hdtb-mitem .qs"), 0 < b.length && ("keydown" == a.type && a.preventDefault(), b[0].focus()), b = this.$.querySelectorAll(".hdtbSel"), 0 < b.length && ("keydown" == a.type && a.preventDefault(), b[0].focus())) : this.hide()
    };
    s_Il.prototype.Ea = function(a) {
        s_Hc(this.$, s_3e(a.$ || a)) || this.hide()
    };
    s_Il.prototype.dispose = function() {
        s_7k(this.ma);
        this.ma = "";
        this.ka && (s_ze(document.body, "click", this.ka), this.ka = null)
    };
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
                var e = a[d],
                    f = b[d];
                e && f && this.qa.push(new s_Il(e, f, !1, s_jpa))
            }
            s_poa(this.jj, s_c(this.Wa, this));
            this.ma && s_poa(this.ma, s_c(this.Ea, this));
            s_kpa(this);
            s_lpa(this);
            s_mpa(this, s_Jl(this))
        },
        s_jpa = function(a, b) {
            var c = document.body || document.documentElement,
                d = s_Gd(c),
                e = d ? "right" : "left",
                f = s_vd(a),
                g = s_rd(a).y,
                k = s_vd(s_l("hdtb-mn-cont")) - s_vd(s_i("hdtbMenus")),
                l = f - 15 - k;
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
        },
        s_opa = function(a) {
            for (var b = a.qa.length, c = 0; c < b; ++c) a.qa[c].hide()
        },
        s_ppa = function(a) {
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
        },
        s_qpa = function(a) {
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
        };
    s_npa.prototype.Wa = function() {
        var a = !s_Jl(this);
        s_z(this.jj, [this.$], [a]);
        var b = s_i("tndd");
        b && (b.style.webkitTransform = "translate3d(0,-" + s_t(b, "height") + "px,0)");
        var b = s_i("htnmenu"),
            c = s_i("htnoverlay");
        b && c && (b.style.webkitTransform = "translate3d(0,0,0)", c.style.opacity = 0, s_x(document.body, "fxd"));
        a ? s_ppa(this) : s_qpa(this);
        for (a = 0; a < s_Hl.length; a++) s_Hl[a].hide()
    };
    s_npa.prototype.Ea = function() {
        s_We(this.ma.getAttribute("data-url"))
    };
    var s_Jl = function(a) {
            return "hdtb-td-o" == a.$.className
        },
        s_kpa = function(a) {
            var b = s_i("botabar");
            b && s_Ed(b) && (s_r(b), b.style.marginTop = s_Jl(a) ? a.$.offsetHeight + "px" : 0);
            a.ka && s_y(a.ka, "hdtb-ab-o", s_Jl(a))
        },
        s_lpa = function(a) {
            var b = s_i("epbar"),
                c = s_i("slim_appbar");
            c && !s_Ed(c) && b && (b.style.marginTop = s_Jl(a) ? 10 + a.$.offsetHeight + "px" : "10px")
        },
        s_mpa = function(a, b) {
            s_y(a.jj, "hdtb-tl-sel", b)
        };
    var s_Kl = function(a) {
        this.Ja = this.Ia = null;
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
        this.qa && this.Ea && new s_Il(this.qa, this.Ea, !0, s_c(this.Za, this));
        this.Ga && !this.$ && this.Ma && (this.Ia = s_rpa(this.Ma));
        this.qa && this.Ea && this.$ && this.ma && s_ye(window, "resize", s_c(this.Za, this, this.qa, this.Ea));
        this.Xa &&
            this.Wa && new s_npa(this.Xa, this.Wa, s_c(this.nb, this));
        this.Ca && null !== this.Wa && s_v(this.Wa, "hdtb-td-o") && s_spa(this);
        if (!this.Ga) {
            var b = s_i("hdtb-s");
            if (b) {
                a = 4;
                for (var b = b.childNodes, c = 0; c < b.length; ++c) a += b[c].clientWidth;
                b = s_i("top_nav");
                null !== b && (c = s_Ia(s_md(b, "minWidth") || s_nd(b, "minWidth")), !c || a > c) && (b.style.minWidth = a + "px")
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
    };
    s_f(s_Kl, s_h);
    s_Kl.prototype.Ha = function() {
        for (var a = 0; a < s_Hl.length; a++) s_Hl[a].dispose();
        s_Hl = [];
        this.Ja = this.Ia = null;
        this.ma = this.Ca = !1;
        a = s_i("hdtb");
        null === a || s_ze(a, "keydown", this.Db)
    };
    s_Kl.prototype.Db = function(a) {
        this.rb || 9 != a.keyCode || (s_x(s_i("hdtb"), "notl"), this.rb = !0)
    };
    s_Kl.prototype.Za = function(a, b) {
        var c = s_ff(),
            d = this.ma != c,
            c = d ? "right" : "left",
            e = Math.max(0, s_vd(a));
        this.ma && !this.$ ? e = 0 : d && (d = s_r(document.body || document.documentElement).width, e = Math.max(0, d - e - s_r(a).width));
        b.style[c] = e + "px"
    };
    s_Kl.prototype.nb = function() {
        !this.Ja && this.Ca && s_spa(this)
    };
    var s_rpa = function(a) {
            var b = s_ld(a, "transform") ? s_nl(a).x : null,
                c = new s_Dl(a, !1, !0, !0, 1, !0);
            c.Ma = !0;
            c.xc = !0;
            c.Da();
            a = s_l("hdtb-msel", a) || s_l("hdtb-tsel", a);
            var d = 0;
            null != b ? d = b : a && (b = document.body || document.documentElement, d = s_Gd(b) ? Math.min(s_vd(a) - s_vd(b), c.ka.x) : Math.max(Math.min(c.ka.x, -s_vd(a) + 15), c.qa.x));
            c.mi(d, 0);
            s_ye(document, "orientationChange", c.Da);
            return c
        },
        s_spa = function(a) {
            var b = s_k("hdtb-mn-cont")[0];
            b && (a.Ja = s_rpa(b))
        };
    s_Kl.prototype.Ka = function(a, b, c) {
        s_Eb() && !s_wb() && c.target && "A" == c.target.nodeName && s_q(this.Da, "overflow-scrolling", "auto");
        a = this.$ ? s_il(this.Da) : Math.abs(this.Ia.$.x);
        (b = s_Tf("session", "tnv")) && b.set("hdtb-pos", a)
    };
    var s_tpa = function(a) {
        s_K(this, a, 0, 10, null, null)
    };
    s_f(s_tpa, s_J);
    s_C("sy80");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_upa = function(a) {
        s_Kl.call(this, a.$.$(s_tpa, "top_nav"))
    };
    s_f(s_upa, s_Kl);
    s_D("tnv");
    var s_vpa = function(a) {
        this.$ = a
    };
    s_T(function(a) {
        s_R(a, "t-js5htJpaNsk", s_upa, s_vpa, null, function(a, c) {
            s_upa.call(a, c)
        })
    });

    s_C("tnv");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_z9 = function() {
            s_1h("lrle", {
                ddu: function(a, b) {
                    s_Jdc(a, b.tag, s_Ea(b.idx))
                },
                smt: s_c(function(a) {
                    a = new s_Tg("flow", a);
                    s_AUd(a)
                }, this)
            })
        },
        s_AUd = function(a) {
            var b = a.node(),
                c = s_Oc(b, "obcontainer");
            if (c) {
                (a = s_v(c, "obsmo")) ? s_x(c, "obsmo"): s_w(c, "obsmo");
                if (s_v(b, "vk_arc")) {
                    var d = b.querySelector("a.vk_arr");
                    d && (s_Re(d, "vk_aru", "vk_ard") || s_Re(d, "vk_ard", "vk_aru"));
                    !a && s_Ee(b, "h") && s_s(b, !1)
                }
                for (var c = c ? c.querySelectorAll("div.obsmw") : [], d = 0, e; e = c[d++];) a ? (e.style.marginTop = "-9999px", e.parentNode.style.opacity = "0") : (e.style.marginTop = "0", e.parentNode.style.opacity = "");
                b = b.getAttribute("data-log-id") || "";
                google.log("prose_onebox_show_more", (a ? "close" : "open") + "&id=" + b)
            }
        };
    s_D("lrle");
    s_T(function(a) {
        s_R(a, "t-E6Fnlo6lC9A", s_z9, null, null, function(a) {
            s_z9.call(a)
        })
    });
    s_T(function(a) {
        s_R(a, "t-suvZD6D-af4", s_z9, null, null, function(a) {
            s_z9.call(a)
        });
        s_S(a, "PirrCbsyVtc", function(a, c) {
            s_AUd(c)
        })
    });
    s_T(function(a) {
        s_R(a, "t-gNATiyEBnd4", s_z9, null, null, function(a) {
            s_z9.call(a)
        })
    });
    s_T(function(a) {
        s_R(a, "t-C1QWsTZjink", s_z9, null, null, function(a) {
            s_z9.call(a)
        });
        s_S(a, "PirrCbsyVtc", function(a, c) {
            s_AUd(c)
        })
    });
    s_T(function(a) {
        s_R(a, "t-wdlpe0pY0rc", s_z9, null, null, function(a) {
            s_z9.call(a)
        });
        s_S(a, "03c2nQl4aKo", function(a, c) {
            var b = c.node();
            s_Oc(b, "obcontainer").querySelector(".actual_onebox").style.display = "block";
            b.parentNode.style.display = "none";
            b = String(s_t(b, "tag"));
            google.log("onebox_unclicks_plusbox_expand", b)
        })
    });

    s_C("lrle");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("riu");
    var s_bQ = function(a) {
        s_h.call(this);
        a = a.getData();
        this.rb = s_M(a, 1) || "";
        this.Ma = s_M(a, 2) || "";
        this.Ca = s_j("irl_r");
        this.Wa = s_j("irl_p");
        this.Ea = s_j("irl_c");
        this.Za = s_j("irl_d");
        this.Ia = s_j("irl_t");
        this.Ga = s_j("irl_m");
        this.$ = s_i("iur");
        this.Ja = [];
        this.Da = this.qa = 0;
        this.ma = {}
    };
    s_f(s_bQ, s_h);
    var s_PTb = {
        S9: ".birrg",
        HSa: ".img-brk"
    };
    s_bQ.prototype.render = function() {
        s_s(this.Ca, !1);
        s_s(this.Wa, !0);
        s_s(this.Ea, !0);
        s_s(this.Ia, !1);
        s_s(this.Ga, !1);
        s_w(this.$, "ri_iur");
        var a = this.$.querySelectorAll(".bili");
        this.qa = a.length;
        for (var b = 0; b < this.qa; b++) {
            var c = a[b];
            if ("sc" != s_t(c, "type")) {
                var d = c.querySelector(".iri");
                if (d) s_s(d, !0);
                else {
                    var d = c,
                        e = b,
                        f = c.querySelector(".bia").id,
                        c = s_tc("input");
                    c.type = "button";
                    c.id = "irl_bt_" + e;
                    c.className = "iri";
                    c.value = this.rb;
                    d.appendChild(c);
                    d = s_c(this.Db, this, d, f, e);
                    d = s_p(c, "click", d);
                    this.ma[c.id] =
                        d
                }
            }
        }
        for (var g in s_PTb)
            for (a = this.$.querySelectorAll(s_PTb[g]), b = 0; b < a.length; b++) c = a[b], c.style.height && (s_De(c, "height", String(c.style.height)), c.style.height = "", c.style.height = c.clientHeight + "px")
    };
    s_bQ.prototype.Db = function(a, b, c, d) {
        var e = s_tc("span");
        e.className = "iri";
        e.appendChild(s_Ah(this.Ma));
        var f = a.querySelector(".iri");
        if (f) {
            var g = this.ma[f.id];
            g && (s_3c(g), delete this.ma[f.id]);
            s_Ac(e, f)
        } else a.appendChild(e);
        a.getElementsByTagName("img")[0].className = "ri_of";
        this.Ja[c] = !0;
        this.Da++;
        this.done();
        google.log("rep", b + "&ei=" + google.kEI);
        d.stopPropagation()
    };
    var s_QTb = function(a) {
        s_x(a.$, "ri_iur");
        for (var b = a.$.querySelectorAll(".iri"), c = 0; c < b.length; c++) s_s(b[c], !1);
        for (var d in s_PTb)
            for (b = a.$.querySelectorAll(s_PTb[d]), c = 0; c < b.length; c++) {
                var e = b[c],
                    f = s_t(e, "height");
                f && (e.style.height = f, s_Fe(e, "height"))
            }
    };
    s_bQ.prototype.done = function() {
        s_QTb(this);
        this.Ca.style.display = "none";
        this.Wa.style.display = "none";
        this.Ea.style.display = "none";
        this.Za.style.display = "none";
        this.Ia.style.display = "";
        this.qa != this.Da && (this.Ga.style.display = "")
    };
    s_bQ.prototype.cancel = function() {
        s_QTb(this);
        this.Wa.style.display = "none";
        this.Ea.style.display = "none";
        this.Ca.style.display = ""
    };
    s_bQ.prototype.Ha = function() {
        for (var a in this.ma) s_3c(this.ma[a]);
        this.ma = {};
        this.$ = null;
        this.Ja = [];
        this.Da = this.qa = 0
    };
    var s_RTb = function(a) {
        s_K(this, a, 0, -1, null, null)
    };
    s_f(s_RTb, s_J);
    var s_STb = function(a) {
        this.$ = a
    };
    s_STb.prototype.getData = function() {
        return this.$.$(s_RTb, "data")
    };
    s_T(function(a) {
        s_R(a, "t-skSLSxrlDCw", s_bQ, s_STb, null, function(a, c) {
            s_bQ.call(a, c)
        });
        s_S(a, "elolvv_-nJU", function(a, c) {
            a.render(c)
        });
        s_S(a, "elolvv_-nJU", function(a, c) {
            a.render(c)
        });
        s_S(a, "RCUiHHQ60BA", function(a, c) {
            a.cancel(c)
        });
        s_S(a, "VITBQSF6E0I", function(a, c) {
            a.done(c)
        })
    });

    s_C("riu");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy436");
    s_C("sy436");
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
    s_D("sy469");
    var s_cQ = function() {
        s_h.call(this)
    };
    s_f(s_cQ, s_h);
    var s_UTb = function(a) {
            var b = a.event();
            if (!b || !b.target) return null;
            a = s_TTb(a);
            return s_Oc(a, "rg_el")
        },
        s_TTb = function(a) {
            a = a.event();
            return a ? (a = a.target) ? s_Nc(a, "A") : null : null
        };
    s_C("sy469");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("sy474");
    s_C("sy474");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("ilrp");
    var s_czd = function() {
        s_h.call(this)
    };
    s_f(s_czd, s_cQ);
    s_czd.prototype.ee = function(a) {
        var b = s_UTb(a),
            c = !1;
        if (null !== b) {
            var d = s_l("rg_meta", b);
            if (d) {
                if (d = s_Lc(d)) {
                    var d = s_qe(d),
                        e = {};
                    e.tbnid = d.id;
                    e.refUrl = d.ru;
                    e.thumbnailUrl = d.tu;
                    e.fullSizeUrl = d.ou;
                    e.pageTitle = d.pt;
                    e.width = +d.ow;
                    e.height = +d.oh;
                    d = e
                } else d = null;
                d && (e = s_Tf("session", "images-ilrp")) && e.set("meta", d)
            }
            if (b = s_l("irc_ilrp_rve", b))(b = (c = s_Ge(b)) || "") && (d = s_Tf("session", "images-ilrp")) && d.set("ved", b), c = !!c
        }(a = s_TTb(a)) && a.href && s_v(a, "bia") && (s_Qha(a), b = a.getAttribute("href", 2), d = s_i("irc_ilrp_pve"), c && d && (c = s_Ge(d)) && (b = s_Eh("ved", b, c, !0)), c = s_Eh("ei", b, google.kEI, !0), a.href = c, s_We(a.href))
    };
    s_T(function(a) {
        s_R(a, "t-bgv2_kKhb5U", s_czd, null, null, function(a) {
            s_czd.call(a)
        });
        s_S(a, "vN7_abZGX9U", function(a, c) {
            a.ee(c)
        })
    });
    s_C("ilrp");
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
    };
    s_ = s_lja.prototype;
    s_.getError = function() {
        return this.Ni || this.$.getError()
    };
    s_.reset = function() {
        this.$.reset();
        this.ka = this.ma = -1
    };
    s_.advance = function(a) {
        this.$.advance(a)
    };
    s_.aJa = function(a, b) {
        var c = this.$.ma,
            d = this.$.A0(),
            d = this.$.$ + d;
        this.$.setEnd(d);
        b(a, this);
        this.$.$ = d;
        this.$.setEnd(c)
    };
    s_.nB = function() {
        return this.$.gPa()
    };
    var s_mja = function(a, b) {
            var c = String(a).toLowerCase(),
                d = String(b).toLowerCase();
            return c < d ? -1 : c == d ? 0 : 1
        },
        s_nja = function(a) {
            var b, c = arguments.length;
            if (!c) return null;
            if (1 == c) return arguments[0];
            var d = [],
                e = Infinity;
            for (b = 0; b < c; b++) {
                for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
                d.push(f);
                e = Math.min(e, f.length)
            }
            f = null;
            for (b = 0; b < e; b++) {
                for (var g = d[0][b], k = 1; k < c; k++)
                    if (g != d[k][b]) return f;
                f = g
            }
            return f
        },
        s_9i = function(a) {
            return new s_9e(function(b) {
                var c = a.length,
                    d = [];
                if (c)
                    for (var e = function(a,
                            e, f) {
                            c--;
                            d[a] = e ? {
                                $sa: !0,
                                value: f
                            } : {
                                $sa: !1,
                                reason: f
                            };
                            0 == c && b(d)
                        }, f = 0, g; f < a.length; f++) g = a[f], s_Cda(g, s_d(e, f, !0), s_d(e, f, !1));
                else b(d)
            })
        },
        s_$i = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,
        s_oja = function(a) {
            if (a.__ctx) return null;
            a = (a = s_jja(a)) ? (a = s_Th.$[a] || null) ? a.dom : null : null;
            return a
        },
        s_pja = function(a, b) {
            return a == b || !(!a || !b) && a instanceof b.constructor && s_kga(a.Oa(), b.Oa())
        },
        s_aj = function(a) {
            return Array.prototype.join.call(arguments, "")
        };
    s_D("sy48");
    var s_U = function(a) {
        this.Ga = a;
        this.Ca = a.XM.Yo || ""
    };
    s_U.prototype.hb = function() {
        return s_3i(this.Ga)
    };
    var s_qja = function(a, b, c) {
            b = "." + a.Ca + "-" + b;
            c && (b += ",." + a.Ca + "-" + c);
            return b
        },
        s_V = function(a, b, c) {
            return a.hb().querySelector(s_qja(a, b, c))
        },
        s_bj = function(a, b, c) {
            return a.hb().querySelectorAll(s_qja(a, b, c))
        },
        s_W = function(a, b) {
            var c = s_V(a, b, void 0);
            return c ? s_8i(c) : s_$e(null)
        };
    s_U.prototype.AY = function(a) {
        return (a = s_V(this, a, void 0)) && s_7i(a)
    };
    var s_cj = function(a, b) {
        var c = [];
        s_g(s_bj(a, b, void 0), function(a) {
            c.push(s_8i(a))
        }, a);
        return c
    };

    s_C("sy48");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    var s_Ll = function(a) {
        s_De(a, "logged", "1")
    };
    s_D("sy97");
    var s_Ml = function(a, b, c) {
            s_6i(a, "ct_ia", {
                TF: !!b,
                Jt: c
            })
        },
        s_xpa = function(a, b, c) {
            s_6i(a, "ct_ia", {
                TF: !!b,
                Gy: 0 != c,
                uZa: void 0
            })
        };
    s_C("sy97");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("iuci");
    var s_bTb = function(a) {
        s_K(this, a, 0, -1, null, null)
    };
    s_f(s_bTb, s_J);
    var s_dTb = function(a, b) {
        this.$ = b.getItem();
        this.ka = a.$.get("visible");
        s_Ml(this);
        (this.ma = !s_M(a.$.$(s_bTb, "images_universal_ui"), 20718464)) && s_cTb(this)
    };
    s_dTb.prototype.Nl = function() {
        this.ma || s_cTb(this)
    };
    var s_cTb = function(a) {
        if (a = a.$.querySelector("g-img")) a = a.querySelector("IMG"), s_t(a, "src") && s_8i(a).then(function(a) {
            a.load()
        })
    };
    s_dTb.prototype.Ut = function() {
        this.ka || (s_z(null, [this.$]), this.ka = !0)
    };
    s_dTb.prototype.hidden = s_b;
    var s_eTb = function() {
        var a = s_3i(this).querySelectorAll("g-img");
        s_g(a, function(a) {
            a = a.querySelector("IMG");
            s_t(a, "src") && s_8i(a).then(function(a) {
                a.load()
            })
        })
    };
    var s_fTb = function(a) {
            this.$ = a
        },
        s_gTb = function(a) {
            s_U.call(this, a)
        };
    s_f(s_gTb, s_U);
    s_gTb.prototype.getItem = function() {
        return this.hb()
    };
    s_T(function(a) {
        s_R(a, "t-nlhqGANbri4", s_eTb, null, null, function(a) {
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
        this.ma && (this.$ = s_5e(null, s_c(this.Wa, this), !0), s_p(window, "resize", this.$, !1, this), this.$())
    };
    s_f(s_B5, s_h);
    s_B5.prototype.Ha = function() {
        this.ma && s_2c(window, "resize", this.$, !1, this)
    };
    s_B5.prototype.Wa = function() {
        s_tAd(this, s_i("rhs_block"));
        s_tAd(this, s_i("nyc"));
        s_u(60)
    };
    s_B5.prototype.$ = null;
    s_B5.prototype.qa = function() {
        if (!this.Ea) return 0;
        var a = document.body.offsetWidth,
            b = this.Ca;
        return a >= this.Da ? 5 : a >= b ? 4 : 3
    };
    var s_tAd = function(a, b) {
        if (b) {
            var c = a.qa();
            s_y(b, "rhstc3", 4 > c);
            s_y(b, "rhstc4", 4 == c);
            s_y(b, "rhstc5", 4 < c)
        }
    };
    var s_sAd = function(a) {
        s_K(this, a, 0, -1, null, null)
    };
    s_f(s_sAd, s_J);
    var s_uAd = function(a) {
        this.$ = a
    };
    s_T(function(a) {
        s_R(a, "t-5RRekjfu2Ys", s_B5, s_uAd, null, function(a, c) {
            s_B5.call(a, c)
        })
    });
    s_C("me");
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
        var a = s_Ig("istate"),
            a = "" != a && "0" != a,
            b = s_Ig("imgrc"),
            b = "" != b && "_" != b,
            c = -1 != s_Ig("flt").indexOf(";e:1"),
            d = !!s_Ig("fpstate"),
            e = !!s_Ig("mie"),
            f = !!s_Ig("sie"),
            g = !!s_Ig("aie"),
            k = !!s_Ig("pie"),
            l = !!s_Ig("trex");
        return b || a || d || e || c || f || g || k || l
    };

    s_C("sy108");
    s_E();
} catch (e) {
    _DumpException(e)
}
try {
    s_D("atn");
    var s_Yl = function(a, b) {
        s_h.call(this);
        this.ma = this.$ = null;
        this.Ea = a;
        this.qa = b || "LH"
    };
    s_f(s_Yl, s_h);
    var s_7pa = function(a, b) {
        a.$ && a.$[b] && s_g(a.$[b], function(a) {
            var c = a.listener;
            a.ay && (c = s_c(c, a.ay));
            c(new s_Uc(b))
        })
    };
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
    };
    s_Yl.prototype.listen = function(a, b, c, d, e) {
        var f = new s_Uba(c, a, b, !!d, e);
        switch (b) {
            case "attn-ivis":
            case "attn-vis":
                a = s_Nd();
                a.$() && (this.$ || (this.$ = {}, this.ma = s_p(a, "visibilitychange", this.Wa, !1, this)), this.$[b] = this.$[b] || [], this.$[b].push(f));
                break;
            default:
                s_p(a, b, c, d, e)
        }
        return f
    };
    s_Yl.prototype.unlisten = function(a, b, c, d, e) {
        switch (b) {
            case "attn-ivis":
            case "attn-vis":
                var f = null;
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
    };
    var s_8pa = function(a, b) {
            return 0 == b ? (s_ca.setTimeout(a, 0), 0) : s_ca.setTimeout(a, b)
        },
        s_9pa = function(a) {
            a.$ && a.ma && (s_3c(a.ma), a.ma = null);
            a.$ = null
        };
    s_Yl.prototype.Ha = function() {
        s_9pa(this)
    };
    var s_Zl = function(a) {
        s_h.call(this);
        this.Ea = a;
        this.Ia = [];
        this.Db = [];
        this.Ja = [];
        this.Ca = {}
    };
    s_f(s_Zl, s_h);
    s_Zl.prototype.addListener = function(a, b, c, d, e) {
        a && this.Ea && this.Ja.push(this.Ea.listen(a, b, c, d, e))
    };
    var s__l = function(a, b, c) {
        a.Ea && a.Db.push(s_8pa(b, c))
    };
    s_Zl.prototype.Ha = function() {
        for (var a = (this.Ia || []).length - 1; 0 <= a; a--) s_ca.clearInterval(this.Ia[a]);
        this.Ia = [];
        for (a = (this.Db || []).length - 1; 0 <= a; a--) {
            var b = this.Db[a];
            b && s_ca.clearTimeout(b)
        }
        this.Db = [];
        for (a in this.Ca || {})(b = this.Ca[a]) && s_ca.clearTimeout(b);
        this.Ca = {};
        for (a = 0; a < (this.Ja || []).length; a++) this.Ja[a] && (b = this.Ja[a], this.Ea.unlisten(b.src, b.type, b.listener, b.Ns, b.ay));
        this.Ja = [];
        this.Ea = null;
        s_Zl.Ba.Ha.call(this)
    };
    var s_$pa = function() {
            this.y = this.x = this.$ = 0
        },
        s_0l = function() {
            this.eventType = "";
            this.ka = 0
        };
    s_0l.prototype.qa = function() {
        return null
    };
    s_0l.prototype.ma = function() {
        return !1
    };
    s_0l.prototype.$ = function() {
        return []
    };
    var s_aqa = function(a, b) {
        var c = a.ka - b.$;
        b.$ += c;
        return c + "," + a.$().join(",")
    };
    var s_bqa = function(a) {
        s_0l.call(this);
        a = new s_Xc(a);
        this.Ea = Math.round(a.clientX);
        this.Wa = Math.round(a.clientY)
    };
    s_f(s_bqa, s_0l);
    s_bqa.prototype.$ = function() {
        return ["c", this.Ea, this.Wa]
    };
    var s_1l = 1,
        s_2l = "",
        s_cqa = "",
        s_dqa = function() {
            this.ka = 3E4;
            this.Ea = !1;
            this.$ = 0;
            this.ma = "";
            this.qa = !1
        },
        s_3l = new s_dqa;
    var s_4l = function(a, b) {
        s_0l.call(this);
        this.data = b;
        this.ka = a
    };
    s_f(s_4l, s_0l);
    s_4l.prototype.$ = function() {
        return [this.data]
    };
    var s_5l = function(a) {
        s_7c.call(this);
        this.Ca = a;
        this.Da = "" + Math.random();
        this.Ea = 1;
        this.$ = [];
        this.$.push(new s_4l(s_e(), "x"));
        this.Wa = 0 - this.$.length;
        this.qa = "";
        this.ma = null
    };
    s_f(s_5l, s_7c);
    s_5l.prototype.isEmpty = function() {
        return 0 == this.$.length + this.Wa
    };
    var s_fqa = function(a) {
        var b = "&me=" + a.Ea,
            c;
        c = "";
        s_2l && (c += "&ei=" + s_2l);
        1 == a.Ea && (a.qa && (c += "&m=" + a.qa), s_3l.ma && (c += "&t=" + s_3l.ma));
        c = c + "&s=" + s_1l;
        c = c + "&v=2&pv=" + a.Da;
        for (var d = b.length + c.length, e = new s_$pa, f = !1, g = 0; g < a.$.length; g++) {
            var k = ":" + s_aqa(a.$[g], e),
                d = d + k.length;
            if (d > a.Ca && 0 < g) {
                f = !0;
                break
            }
            b += k
        }
        return new s_eqa(c + b, f, g, e)
    };
    s_5l.prototype.reset = function() {
        this.Da = "" + Math.random();
        this.Ea = 1;
        this.$ = [];
        this.$.push(new s_4l(s_e(), "x"));
        this.Wa = 0 - this.$.length
    };
    var s_eqa = function(a, b, c, d) {
        this.$ = a || "";
        this.ka = b;
        this.ma = c || 0;
        this.qa = d
    };
    var s_6l = function(a) {
        s_Zl.call(this, a)
    };
    s_f(s_6l, s_Zl);
    s_6l.prototype.log = function() {};
    var s_gqa = s_6l;
    var s_7l = function(a, b, c, d) {
        s_Zl.call(this, b);
        this.appName = a;
        this.sender = d || new s_gqa(b);
        this.qa = c;
        this.Lb = -1;
        this.Xa = 0
    };
    s_f(s_7l, s_Zl);
    s_7l.prototype.xc = function() {};
    s_7l.prototype.Ha = function() {
        this.sender && (this.sender.dispose(), this.sender = null);
        this.qa = null;
        s_7l.Ba.Ha.call(this)
    };
    var s_hqa = s_7l;
    var s_iqa = function(a, b) {
        s_0l.call(this);
        this.jj = a.button;
        this.Ca = a.which;
        this.Ea = +b;
        var c;
        a: {
            for (c = a.target || a.srcElement; c; c = c.parentNode)
                if ("getAttribute" in c) {
                    var d = c.getAttribute("data-hveid");
                    if (d) {
                        c = d;
                        break a
                    }
                }
            c = ""
        }
        this.Wa = c
    };
    s_f(s_iqa, s_0l);
    s_iqa.prototype.$ = function() {
        return ["D", this.jj, this.Ca, this.Ea, this.Wa]
    };
    var s_9l = function(a, b, c, d) {
        s_Zl.call(this, c);
        this.Ga = b;
        this.$ = new s_5l(this.Ga);
        this.ma = new s_hqa(a, c, this.$, d);
        this.Wa = !0;
        this.Da = 0;
        s_8l(this, document, "mousedown", s_c(this.YEa, this));
        s_8l(this, document, "click", s_c(this.XEa, this));
        s_3l.ka && (a = s_c(this.qa, this, !1, !1), this.Ea && this.Ia.push(s_ca.setInterval(a, s_3l.ka)));
        s_3l.$ && s__l(this, s_c(this.qa, this, !1, !1), 1E3 * s_3l.$)
    };
    s_f(s_9l, s_Zl);
    s_9l.prototype.qa = function(a, b) {
        this.ma && (this.ma.xc(a, b), 14 <= this.ma.Xa && s__l(this, s_c(this.dispose, this), 0))
    };
    s_9l.prototype.log = function(a, b, c) {
        if (this.Wa) {
            a = s_nb(a);
            a.ka || (a.ka = s_e());
            s_aqa(a, new s_$pa);
            var d = this.$,
                e = a.ma(d.$);
            if (!e) {
                for (e = d.$.length; 0 < e && !(a.ka >= d.$[e - 1].ka); e--) d.$[e] = d.$[e - 1];
                d.$[e] = a;
                e = 0 == e || e < d.$.length - 1
            }(e = e || !d.ma || !d.ma.$) ? d.ma = s_fqa(d): d.ma.ka || (e = d.ma.$, e = e + ":" + s_aqa(a, d.ma.qa), d.Ca && e.length > d.Ca && (d.ma.ka = !0), d.ma.ka && 0 != d.ma.$.length || (d.ma.$ = e, d.ma.ma = d.$.length));
            d.dispatchEvent("attn-bfr-e-add");
            d.ma.ka && !c && this.qa(!1, b)
        }
    };
    var s_8l = function(a, b, c, d) {
            b && a.addListener(b, c, d, void 0, void 0)
        },
        s_jqa = function(a) {
            if (a) {
                a = a.target || a.srcElement;
                for (var b = 5; 0 < b-- && a && "A" != a.nodeName;) a = a.parentNode;
                return !!(0 <= b && a)
            }
            return !1
        };
    s_ = s_9l.prototype;
    s_.XEa = function(a) {
        s_jqa(a) && (this.log(new s_bqa(a), !1, !0), s__l(this, s_c(this.N3, this, "C"), 0))
    };
    s_.YEa = function(a) {
        s_kqa(0, a) || a && s_jqa(a) && this.log(new s_iqa(a, s_kqa(2, a)))
    };
    s_.N3 = function(a) {
        if (this.ma) {
            var b = s_e();
            this.Da && 300 > b - this.Da || (this.Da = b, a = new s_4l(b, "e," + a), (this.$ && !this.$.isEmpty() || 300 < s_e() - this.ma.Lb) && this.log(a, !0, !0), this.qa(!0, !0))
        }
    };
    s_.Ha = function() {
        this.ma && this.$ && this.Wa && this.N3("D");
        this.ma && (this.ma.dispose(), this.ma = null);
        this.$ && (this.$.dispose(), this.$ = null);
        this.Wa = !1;
        s_9l.Ba.Ha.call(this)
    };
    s_.reset = function() {
        this.Wa = !0;
        this.Da = 0;
        this.qa(!0, !0);
        this.$ ? this.$.reset() : this.$ = new s_5l(this.Ga)
    };
    var s_kqa = function(a, b) {
        return b ? s_Iba ? b.button == a : "click" == b.type ? 0 == a : !!(b.button & s_Qba[a]) : !1
    };
    var s_$l = null,
        s_am = null,
        s_bm = function(a, b) {
            if (s_am) {
                var c = s_am;
                b ? c.N3(a) : s__l(c, s_c(c.N3, c, a), 0)
            }
        },
        s_lqa = function() {
            s_bm("Q");
            return !0
        },
        s_mqa = function(a) {
            s_cqa = s_2l = a.ei || google.getEI(document.body);
            var b = new s_dqa;
            b.qa = !!a.du;
            b.Ea = !!a.oslg;
            var c = function(b, c) {
                var d = parseInt(a[b], 10);
                return -1 < d ? d : c
            };
            b.ka = c("fi", b.ka);
            b.$ = c("d", b.$);
            b.ma = a.t || b.ma;
            s_3l = b
        };
    var s_rqa = function() {
        var a = s_3i(this),
            b = a && s_ih(a) || {};
        b.ei = google.getEI(a);
        a = b.ei || google.getEI(document.body);
        s_nqa++;
        s_oqa ? a != s_2l && (s_pqa(), s_qqa(b, a)) : b && (s_oqa = !0, s_qqa(b, a))
    };
    s_f(s_rqa, s_h);
    var s_nqa = 0,
        s_oqa = !1,
        s_sqa = {},
        s_cm = {},
        s_qqa = function(a, b) {
            s_cqa = s_2l = b;
            s_mqa(a);
            s_$l = new s_Yl({});
            var c = s_am = new s_9l("slh", 1918, s_$l);
            s_8l(c, window, "attn-ivis", s_d(s_bm, "H", !0));
            s_8l(c, window, "pagehide", s_d(s_bm, "H", !0));
            s_8l(c, window, "blur", s_d(s_bm, "B", !0));
            s_3l.qa || s_8l(c, window, "beforeunload", s_d(s_bm, "U", !0));
            s_Me(15, s_lqa);
            for (var d in s_cm) a[d] && (s_cm[d].init(a), s_sqa[d] = s_cm[d])
        };
    s_rqa.prototype.Ha = function() {
        0 < --s_nqa || !s_oqa || (s_oqa = !1, s_pqa(), s_sqa = {})
    };
    var s_pqa = function() {
        for (var a in s_sqa) s_sqa[a].dispose();
        s_am && s_am.dispose();
        s_$l && s_9pa(s_$l);
        s_am = s_$l = null
    };
    s_T(function(a) {
        s_R(a, "t-xJZnhKySAM0", s_rqa, null, null, function(a) {
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
    };
    s_f(s_dm, s_0l);
    s_dm.prototype.ma = function(a) {
        var b = s_tqa.mouseover,
            c = this.Ea;
        if (!c || this.eventType != b) return !1;
        for (var b = s_tqa.mouseout, d = a.length - 1; 0 <= d && !(2 < this.ka - a[d].ka); d--)
            if (a[d].eventType == b && a[d].qa() === c) {
                for (c = d; c < a.length - 1; c++) a[c] = a[c + 1];
                a.pop();
                return !0
            }
        return !1
    };
    s_dm.prototype.qa = function() {
        return this.Ea
    };
    var s_uqa = function(a, b, c) {
        s_dm.call(this, c);
        this.Wa = a;
        this.eventType = b
    };
    s_f(s_uqa, s_dm);
    s_uqa.prototype.$ = function() {
        return ["H", this.Wa, this.eventType]
    };
    var s_vqa = function(a) {
            this.$ = a
        },
        s_wqa = ["mouseover", "mouseout"];
    s_vqa.prototype.start = function(a) {
        if (a) {
            a = document.querySelectorAll("[data-hveid]");
            for (var b = 0; b < a.length; b++)
                for (var c = 0; c < s_wqa.length; c++) {
                    var d = s_wqa[c],
                        e = new s_uqa(a[b].getAttribute("data-hveid"), s_tqa[d], a[b]);
                    s_8l(this.$, a[b], d, s_c(this.$.log, this.$, e, !1, !1))
                }
        }
    };
    s_vqa.prototype.stop = function() {};
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
            s_em.cq && (s_em.cq.stop(), s_em.cq = null)
        },
        cq: null
    };
    s_cm.lhe = s_em;
    var s_xqa = function(a, b) {
            a.Ea += b;
            0 < b && a.$.splice(0, b);
            a.Wa = 0;
            a.ma = null;
            0 < a.$.length && (a.ma = s_fqa(a))
        },
        s_gm = function(a, b, c, d) {
            s_7l.call(this, a, b, c, d);
            this.ma = s_2l ? "s-" + s_2l : "s-" + s_e() + "-" + Math.round(1E10 * Math.random());
            this.rb = (google.j ? google.j.u : null) || "x";
            this.rk = null;
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
            this.qa && this.$ && this.addListener(this.qa, "attn-bfr-e-add",
                this.Rb, !1, this);
            b = s_1l - 1;
            a = s_1l - 1;
            c = null;
            this.$ && (c = s_yqa(this, this.ma, !0));
            c && (b = c.$, a = c.ka);
            s_1l = a + 1;
            this.rk = new s_zqa(this.ma, b, a, s_e(), this.rb);
            if (this.$) {
                b = this.rk;
                for (a = b.$ + 1; a <= b.ka; a++) c = "tab-" + this.ma + "-dt-" + a, (d = s_fm(this, c)) && (this.Ga[c] = new s_Aqa(c, this.ma, d, a));
                b = s_c(this.Kb, this);
                this.Ea && this.Ia.push(s_ca.setInterval(b, 500));
                s__l(this, s_c(this.Pb, this), 500)
            }
        };
    s_f(s_gm, s_7l);
    s_gm.prototype.Rb = function() {
        this.Ka = !0
    };
    s_gm.prototype.xc = function(a, b) {
        var c = !(s_3l.Ea && b) || "x" == this.rb;
        if (this.$) {
            var d = a || b || !1 || !c;
            if (this.Ka || d) {
                for (var e = this.rk, f = 10; 0 < f-- && this.qa && !this.qa.isEmpty();) {
                    var g = this.qa.ma;
                    if (!g || !g.$) break;
                    var k = s_1l,
                        l = "tab-" + this.ma + "-dt-" + k;
                    this.Ga[l] = new s_Aqa(l, this.ma, g.$, k);
                    if (g.ka || d) e.ka = k, k = this.rk, k.ma = s_e(), s_hm(this, "tabs-md-" + this.ma, s_Bqa(k)), k = s_fm(this, "tabs") || {}, k[this.ma] || (k[this.ma] = !0, s_hm(this, "tabs", k)), 100 > e.ka - e.$ && s_1l++, s_hm(this, l, g.$), this.Xa++, s_xqa(this.qa, g.ma);
                    else break
                }
                this.Ka = !1
            }
            if (c && this.sender) {
                var c = [],
                    m;
                for (m in this.Ga) {
                    if (6 <= c.length) break;
                    d = this.Ga[m];
                    d.index >= s_1l || this.Za[m] || c.push(d)
                }
                for (m in this.Da) {
                    if (6 <= c.length) break;
                    !this.Za[m] && this.Da[m] && c.push(this.Da[m])
                }
                if (0 < c.length)
                    for (m = !0, d = s_e(), this.Wa = this.Wa || [], e = 0; e < c.length && 6 > e && (m || a || b); e++) m = !1, this.Lb = s_e(), f = c[e], this.sender.log(this.appName, f.message), f.ka = d, this.Wa.push(f), this.Za[f.$] = !0
            }
        } else c && this.qa && !this.qa.isEmpty() && this.sender && (f = this.qa.ma) && f.$ && (s_1l++, s_xqa(this.qa, f.ma), this.Xa++,
            this.sender.log(this.appName, f.$))
    };
    s_gm.prototype.Pb = function() {
        s_Cqa(this);
        s__l(this, s_c(function() {
            s_Dqa(this);
            var a = !1;
            s_fm(this, "tabs");
            var b = {},
                c;
            for (c in this.Ma) {
                a = !0;
                b[c] = !0;
                var d = this.Ma[c];
                if (d) {
                    for (var e = d.ka, d = d.$ + 1; d <= e; d++) s_Eqa(this, "tab-" + c + "-dt-" + d);
                    s_Eqa(this, "tabs-md-" + c)
                }
            }
            if (a) {
                a = s_fm(this, "tabs") || {};
                for (c in b) delete a[c];
                s_hm(this, "tabs", a)
            }
            this.Ma = {}
        }, this), 1)
    };
    s_gm.prototype.Ha = function() {
        this.$ && (this.$ = null);
        this.Wa = [];
        this.Ga = {};
        this.Da = {};
        this.Za = {};
        this.Ma = {};
        s_gm.Ba.Ha.call(this)
    };
    var s_Dqa = function(a) {
            if (!(2E-4 < Math.random()) && "x" != a.rb) {
                var b = s_Jea(a.Ea.qa);
                if (b) {
                    var c = /^tabs-md-/,
                        d = /^tab-(.*?)-dt-[0-9]+$/,
                        e = /^tabs-ld-.*$/,
                        f = [],
                        g, k = {};
                    s_he(b.ii(!0), function(a) {
                        c.test(a) ? f.push(a.replace(c, "")) : null != (g = d.exec(a)) ? k[a] = g[1] : e.test(a) ? k[a] = a : "tabs-ad" == a && (k[a] = a)
                    });
                    for (var b = s_fm(a, "tabs") || {}, l = 0; l < f.length; l++) b[f[l]] = !0;
                    s_hm(a, "tabs", b);
                    for (var m in k) k[m] in b || s_Eqa(a, m)
                }
            }
        },
        s_Cqa = function(a) {
            var b = s_fm(a, "tabs") || {};
            var c = s_gb(b),
                d = c.length,
                e = Math.floor(Math.random() *
                    c.length);
            if (0 != e) {
                for (var f = {}, g = 0; g < d; g++, e++) e >= d && (e %= d), f[c[e]] = b[c[e]];
                b = f
            }
            var c = 15,
                k;
            for (k in b)
                if (k != a.ma) {
                    if (0 >= c--) break;
                    s__l(a, s_c(a.Ub, a, k), 1)
                }
        };
    s_gm.prototype.Ub = function(a) {
        if (!(40 <= this.nb)) {
            var b = s_yqa(this, a),
                c;
            b ? b.tabId == this.ma ? c = !1 : (c = s_e() - 864E5, c = b.ma && b.ma > c && b.$ < b.ka ? !1 : !0) : c = !0;
            if (c) this.Ma[a] = b;
            else if (!b || b.userId == this.rb)
                for (c = b.$ + 1; c <= b.ka && !(40 <= this.nb); c++) {
                    var d = "tab-" + a + "-dt-" + c;
                    if (!s_a(this.Da[d])) {
                        this.Da[d] = null;
                        var e = s_fm(this, d);
                        e && (this.Da[d] = new s_Aqa(d, a, e, c), this.nb++)
                    }
                }
        }
    };
    var s_yqa = function(a, b, c) {
        return c || b != a.ma ? (a = s_fm(a, "tabs-md-" + b)) ? a.tabId ? new s_zqa(a.tabId, a.lastSent, a.savedIndex, a.lastTS, a.uid) : null : null : a.rk
    };
    s_gm.prototype.Kb = function() {
        if (this.Wa && 0 != this.Wa.length) {
            for (var a = {}, b = s_e() - 250; 0 < this.Wa.length && !(this.Wa[0].ka && this.Wa[0].ka > b);) {
                var c = this.Wa.shift();
                a[c.tabId] = c.index;
                s_Eqa(this, c.$);
                delete this.Ga[c.$];
                delete this.Da[c.$];
                delete this.Za[c.$]
            }
            for (var d in a)
                if (b = s_yqa(this, d)) c = a[d], c > b.$ && (b.$ = c, s_hm(this, "tabs-md-" + d, s_Bqa(b)))
        }
    };
    var s_fm = function(a, b) {
            if (!a.$) return null;
            try {
                return a.$.get(b)
            } catch (c) {
                a.$.remove(b)
            }
            return null
        },
        s_hm = function(a, b, c) {
            if (a.$) try {
                a.$.set(b, c)
            } catch (d) {}
        },
        s_Eqa = function(a, b) {
            if (a.$) try {
                a.$.remove(b)
            } catch (c) {}
        },
        s_Aqa = function(a, b, c, d) {
            this.$ = a;
            this.tabId = b;
            this.message = c;
            this.index = d;
            this.ka = 0
        },
        s_zqa = function(a, b, c, d, e) {
            this.tabId = a;
            this.$ = b || 0;
            this.ka = c || 0;
            this.ma = d || 0;
            this.userId = e
        },
        s_Bqa = function(a) {
            var b = {};
            if (!a || !a.tabId) return null;
            b.tabId = a.tabId;
            b.lastSent = a.$;
            b.savedIndex = a.ka;
            b.lastTS = a.ma;
            b.uid = a.userId;
            return b
        },
        s_hqa = s_gm;

    var s_Gqa = function(a) {
        s_Zl.call(this, a);
        this.$ = null != window.navigator && null != navigator.sendBeacon
    };
    s_f(s_Gqa, s_6l);
    s_Gqa.prototype.log = function(a, b) {
        var c = google.logUrl(a, b);
        c && (this.$ && navigator.sendBeacon(c, "") || google.log(a, b))
    };
    s_gqa = s_Gqa;
    var s_Hqa = function(a, b) {
            if (null != a.Ca[b]) {
                var c = a.Ca[b];
                c && s_ca.clearTimeout(c);
                delete a.Ca[b]
            }
        },
        s_Iqa = function(a, b, c, d, e) {
            if (a.Ca[d]) {
                if (!e) return;
                (e = a.Ca[d]) && s_ca.clearTimeout(e)
            }
            a.Ca[d] = s_8pa(b, c)
        },
        s_Jqa = function(a) {
            s_0l.call(this);
            this.Ea = a
        };
    s_f(s_Jqa, s_0l);
    s_Jqa.prototype.$ = function() {
        return ["A", this.Ea ? 1 : 0]
    };
    var s_Kqa = function(a) {
        s_0l.call(this);
        this.Ea = a
    };
    s_f(s_Kqa, s_0l);
    s_Kqa.prototype.$ = function() {
        return ["I", this.Ea ? 1 : 0]
    };
    var s_Lqa = function(a, b) {
        s_0l.call(this);
        this.Ea = b;
        this.ka = a
    };
    s_f(s_Lqa, s_0l);
    s_Lqa.prototype.$ = function() {
        return ["U", this.Ea]
    };
    var s_Mqa = function(a, b, c) {
        s_0l.call(this);
        this.deltaX = b;
        this.deltaY = c;
        this.ka = a
    };
    s_f(s_Mqa, s_0l);
    s_Mqa.prototype.$ = function() {
        return 0 == this.deltaX ? ["S", this.deltaY] : ["S", this.deltaX, this.deltaY]
    };
    var s_jm = function(a, b, c, d) {
        this.ek = a;
        this.Af = b;
        this.Sc = c;
        this.Rc = d;
        this.$ = Math.round(c / 50);
        this.ka = Math.round(d / 50)
    };
    s_jm.prototype.clone = function() {
        return new s_jm(this.ek, this.Af, this.Sc, this.Rc)
    };
    var s_Nqa = function(a) {
            return a.ek + "," + a.Af + "," + a.Sc + "," + a.Rc
        },
        s_Oqa = function(a, b) {
            return !!b && Math.abs(a.Sc - b.Sc) <= b.$ && Math.abs(a.Rc - b.Rc) <= b.ka
        },
        s_Pqa = function(a, b) {
            return !!b && Math.abs(a.ek - b.ek) <= b.$ && Math.abs(a.Af - b.Af) <= b.ka && s_Oqa(a, b)
        },
        s_Qqa = function(a, b) {
            var c = !!b && s_Oqa(a, b);
            c && (a.Sc = b.Sc, a.Rc = b.Rc, a.$ = b.$, a.ka = b.ka);
            return c
        },
        s_Rqa = function(a, b) {
            var c = Math.max(a.ek, b.ek),
                d = Math.min(a.ek + a.Sc, b.ek + b.Sc);
            return Math.max(a.Af, b.Af) < Math.min(a.Af + a.Rc, b.Af + b.Rc) && c < d
        };
    var s_km = function(a, b) {
        this.ka = s_e();
        this.$ = a ? new s_jm(Math.round(window.pageXOffset), Math.round(window.pageYOffset), Math.round(window.innerWidth), Math.round(window.innerHeight)) : b ? b : new s_jm(0, 0, 0, 0)
    };
    var s_lm = function() {
        s_7c.call(this);
        this.Ea = !0;
        this.Ca = s_e();
        this.$ = null;
        this.Da = this.qa = this.Wa = !1;
        this.Bt = null;
        this.clientHeight = 0;
        this.ma = []
    };
    s_f(s_lm, s_7c);
    s_lm.prototype.Ha = function() {
        this.$ = null;
        this.ma = [];
        s_lm.Ba.Ha.call(this)
    };
    s_lm.prototype.reset = function() {
        this.Ea = !0;
        this.Ca = s_e();
        this.$ = null;
        this.qa = !1;
        this.ma = [];
        this.Bt = null
    };
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
    };
    s_f(s_mm, s_Zl);
    s_mm.prototype.Ha = function() {
        this.ma = this.$ = null;
        s_mm.Ba.Ha.call(this)
    };
    s_mm.prototype.Wa = function() {
        var a = s_e();
        this.$.Ea || (this.ma.log(new s_Lqa(a, a - this.$.Ca)), this.$.Ea = !0, s_nm(this, new s_km(!0), !0), this.$.dispatchEvent("attn-vs-chg"));
        this.$.Ca = a
    };
    s_mm.prototype.Ma = function() {
        this.$.Ea && (this.$.Ca = s_e(), s_nm(this, new s_km, !0), this.$.dispatchEvent("attn-vs-chg"));
        this.$.Ea = !1
    };
    var s_nm = function(a, b, c) {
        if (a.$.Ea || a.$.Wa) {
            var d = a.$.$;
            if (!a.$.Wa && d && s_Qqa(b.$, d.$)) {
                var e = b.$.ek - d.$.ek,
                    d = b.$.Af - d.$.Af;
                0 == e && 0 == d || a.ma.log(new s_Mqa(b.ka, e, d))
            } else a.ma.log(new s_4l(b.ka, "V," + s_Nqa(b.$)));
            a.$.Wa = !1;
            a.$.$ = b;
            c || a.$.dispatchEvent("attn-vs-chg")
        }
    };
    var s_om = function(a, b, c) {
        s_mm.call(this, a, b, c);
        s_zg("lh-im", s_c(this.Ga, this));
        this.qa = s_c(this.Da, this, !0);
        s_Me(182, this.qa)
    };
    s_f(s_om, s_mm);
    s_om.prototype.Ga = function() {
        if (this.$) {
            var a = s_Xl(),
                b = s_qa(s_rg.ka, "/amp");
            if (a != this.$.qa || b != this.$.Da) {
                if (a != this.$.qa) {
                    this.$.qa = a;
                    if (this.$.qa) {
                        this.$.Bt = null;
                        for (var c in s_Sqa) {
                            var d = s_Sqa[c];
                            if (s_Ig(d)) {
                                this.$.Bt = d;
                                break
                            }
                        }
                    } else this.$.Bt = null;
                    this.ma.log(new s_Kqa(a))
                }
                b != this.$.Da && (this.$.Da = b, this.ma.log(new s_Jqa(b)), this.$.Wa = !0);
                s_Iqa(this, s_c(this.Da, this, !1), 1E3, "dcst", !0)
            }
        }
    };
    s_om.prototype.Da = function(a) {
        if (this.$.$) {
            var b = s_e();
            this.$.$.ka = b;
            a && this.ma.log(new s_4l(s_e(), "T"));
            this.$.dispatchEvent("attn-dom-chg");
            s_Hqa(this, "dcst")
        }
    };
    s_om.prototype.Ha = function() {
        s_Ag("lh-im");
        s_Ne(182, this.qa);
        s_om.Ba.Ha.call(this)
    };
    var s_Tqa = function(a, b, c) {
        s_mm.call(this, a, b, c);
        this.addListener(window, "attn-ev-preload", s_c(this.qa, this));
        s_6c(window, "attn-ev-ready", null)
    };
    s_f(s_Tqa, s_mm);
    s_Tqa.prototype.qa = function(a) {
        if (a && a.length && 0 != a.length) {
            this.ma.log(new s_4l(a[0][0], "x"));
            for (var b = 0; b < a.length; b++)
                if ("v" == a[b][1]) {
                    var c = a[b],
                        d = new s_km(!1, new s_jm(c[2][0], c[2][1], c[2][2], c[2][3]));
                    d.ka = c[0];
                    var e = this.$.$;
                    e && s_Qqa(d.$, e.$) ? (c = d.$.ek - e.$.ek, e = d.$.Af - e.$.Af, 0 == c && 0 == e || this.ma.log(new s_Mqa(d.ka, c, e))) : this.ma.log(new s_4l(d.ka, "V," + s_Nqa(d.$)));
                    this.$.$ = d
                } else "e" == a[b][1] && this.ma.log(new s_4l(a[b][0], "e,B"))
        }
    };
    var s_Uqa = function(a, b) {
        s_0l.call(this);
        this.Nca = b;
        this.ka = a
    };
    s_f(s_Uqa, s_0l);
    s_Uqa.prototype.$ = function() {
        return ["F", this.Nca]
    };
    var s_Vqa = function(a, b, c) {
        s_mm.call(this, a, b, c);
        this.qa = {};
        a = s_lc("g-scrolling-carousel");
        for (b = 0; b < a.length; b++)
            for (var d = c = a[b]; d != document.body;) {
                if (d.getAttribute("data-hveid")) {
                    d = d.getAttribute("data-hveid");
                    this.addListener(c, "_custom", s_c(this.Da, this, d));
                    break
                }
                d = d.parentNode
            }
    };
    s_f(s_Vqa, s_mm);
    s_Vqa.prototype.Da = function(a, b) {
        if (b) {
            var c = s_e();
            if (!(this.qa[a] + 500 >= c)) {
                var d = b.ka && b.$ || b.event_;
                d && d.detail && "sc_se" == d.detail.type && (this.qa[a] = c, this.ma.log(new s_Uqa(s_e(), a)))
            }
        }
    };
    var s_Wqa = function(a) {
        s_0l.call(this);
        this.cGa = a
    };
    s_f(s_Wqa, s_0l);
    s_Wqa.prototype.$ = function() {
        return ["N", this.cGa]
    };
    var s_Xqa = function(a, b) {
        s_0l.call(this);
        var c = new s_Xc(b),
            d = c.clientX || 0,
            c = c.clientY || 0,
            e = a.Aa.getBoundingClientRect();
        this.Wa = Math.round(d - e.left);
        this.Ca = Math.round(c - e.top);
        this.Ea = a.getId()
    };
    s_f(s_Xqa, s_0l);
    s_Xqa.prototype.$ = function() {
        return ["g", this.Ea, this.Wa, this.Ca]
    };
    var s_Yqa = function(a, b, c) {
        s_mm.call(this, a, b, c);
        this.qa = s_oc();
        this.ma.log(new s_4l(s_e(), "B," + this.qa));
        this.$.clientHeight = this.qa;
        this.addListener(this.$, "attn-g-clk", this.Ga, !1, this)
    };
    s_f(s_Yqa, s_mm);
    s_Yqa.prototype.Ga = function() {
        s_Iqa(this, s_c(this.Da, this), 1E3, "vchc")
    };
    s_Yqa.prototype.Da = function() {
        s_Hqa(this, "vchc");
        s_Hqa(this, "vchrc");
        if (!this.$.qa) {
            var a = s_oc();
            a != this.qa ? (this.qa = a, s_Iqa(this, s_c(this.Da, this), 100, "vchrc")) : this.$.clientHeight != this.qa && (this.$.clientHeight = this.qa, this.ma.log(new s_4l(s_e(), "B," + this.qa)), s_nm(this, new s_km(!0), !0), this.$.$ && (a = s_e(), this.$.$.ka = a, this.$.dispatchEvent("attn-vs-chg")))
        }
    };
    var s_pm = function(a, b, c) {
        s_mm.call(this, a, b, c);
        this.addListener(window, "resize", this.Da, !1, this);
        this.addListener(window, "scroll", this.Da, !1, this);
        this.Wa();
        this.qa()
    };
    s_f(s_pm, s_mm);
    s_pm.prototype.Da = function() {
        this.Wa();
        s_Iqa(this, s_c(this.qa, this), 500, "rptv")
    };
    s_pm.prototype.qa = function() {
        s_nm(this, new s_km(!0));
        s_Hqa(this, "rptv")
    };
    var s_qm = function(a, b, c) {
        s_mm.call(this, a, b, c);
        this.qa = [];
        this.Da();
        this.addListener(c, "attn-ve-chg", this.Da, !1, this)
    };
    s_f(s_qm, s_mm);
    s_qm.prototype.Da = function() {
        s_Zqa(this);
        for (var a = 0; a < this.$.ma.length; a++) {
            var b = this.$.ma[a];
            this.qa.push(this.Ea.listen(b.Aa, "click", s_c(this.Ga, this, b), !0))
        }
    };
    var s_Zqa = function(a) {
        for (var b = 0; b < a.qa.length; b++)
            if (a.qa[b]) {
                var c = a.qa[b];
                a.Ea.unlisten(c.src, c.type, c.listener, c.Ns, c.ay)
            }
        a.qa = []
    };
    s_qm.prototype.Ga = function(a, b) {
        a && a.Aa && (this.ma.log(new s_Xqa(a, b), !1, !0), this.$.dispatchEvent("attn-g-clk"))
    };
    s_qm.prototype.Ha = function() {
        s_Zqa(this);
        s_qm.Ba.Ha.call(this)
    };
    var s_0qa = function(a, b, c) {
        this.$ = this.ka = null;
        this.Aa = a;
        this.jd = b;
        c && s__qa(this)
    };
    s_0qa.prototype.getId = function() {
        return this.jd
    };
    var s_1qa = function(a) {
            if (a.getBoundingClientRect && "visible" == (s_md(a, "visibility") || "visible")) try {
                var b = a.getBoundingClientRect();
                return new s_jm(Math.round(b.left + window.pageXOffset), Math.round(b.top + window.pageYOffset), Math.round(a.offsetWidth), Math.round(a.offsetHeight))
            } catch (c) {}
            return new s_jm(0, 0, 0, 0)
        },
        s__qa = function(a) {
            var b = s_1qa(a.Aa);
            a.$ && s_Pqa(b, a.$) || (a.$ = b)
        };
    var s_rm = function(a, b, c) {
        s_mm.call(this, a, b, c);
        this.qa = !1;
        this.Ga = null;
        this.rb = this.Za = 0;
        this.Xa = this.$.clientHeight;
        this.Da = null;
        this.addListener(c, "attn-vs-chg", this.Ka, !1, this);
        this.addListener(c, "attn-dom-chg", this.nb, !1, this);
        this.$.$ && (s_2qa(this, this.$.$), this.Da = this.$.$)
    };
    s_f(s_rm, s_mm);
    var s_3qa = function(a) {
            for (var b = s_e(), c = a.$.ma, d = 0; d < c.length; d++) s__qa(c[d]);
            c = s_e();
            a.rb = c;
            a.Za = c - b
        },
        s_4qa = function(a) {
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
        },
        s_5qa = function(a, b) {
            for (var c = [], d = a.$.ma, e = 0; e < d.length; e++) {
                var f = d[e],
                    g = s_Rqa(f.$, b.$);
                if (g && (null == f.ka || f.ka && !s_Pqa(f.$, f.ka)) || !g &&
                    f.ka && s_Rqa(f.ka, b.$)) c.push(f), f.ka = f.$.clone()
            }
            if (c.length)
                for (d = b.ka, e = 0; e < c.length; e++) f = c[e], a.ma.log(new s_4l(d, "E," + (f.jd + "," + s_Nqa(f.$))))
        };
    s_rm.prototype.nb = function() {
        if (this.$.$) {
            var a = null;
            window.google && ("mie" == this.$.Bt && (a = document.querySelector("[eid][data-hveid]")), google.getEI && (a = google.getEI(a), a != s_cqa && (s_cqa = a, this.ma.log(new s_Wqa(a)))));
            this.$.ma = [];
            this.qa = !1;
            s_2qa(this, this.$.$)
        }
    };
    var s_2qa = function(a, b) {
        var c;
        if (a.qa) {
            c = a.Za;
            var d;
            a.Ga ? (d = a.Ga.$, d = !s_Pqa(s_1qa(a.Ga.Aa), d)) : d = !a.qa;
            var e = s_e() - a.rb;
            c = d ? 20 < c && 1E3 >= e : !(5 >= c && 50 < e)
        } else c = !1;
        if (!c)
            if (a.qa) s_3qa(a);
            else {
                if (!a.qa) {
                    d = document;
                    a.$.qa && (d = s_4qa(a));
                    c = [];
                    d = d && d.querySelectorAll && d.querySelectorAll("[data-hveid]") || [];
                    for (e = 0; e < d.length; e++) {
                        var f = d[e];
                        c.push(new s_0qa(f, f.getAttribute("data-hveid")))
                    }
                    a.$.ma = c;
                    s_3qa(a);
                    c = null;
                    for (d = 0; d < a.$.ma.length; d++) {
                        e = a.$.ma[d];
                        if (!(f = !c)) var f = c.$,
                            g = e.$,
                            f = !!g && (f.Af < g.Af || f.Af ==
                                g.Af && f.ek < g.ek);
                        f && (c = e)
                    }
                    a.Ga = c;
                    a.qa = !0
                }
                a.$.dispatchEvent("attn-ve-chg")
            }
        s_5qa(a, b)
    };
    s_rm.prototype.Ha = function() {
        this.Da = null;
        this.$.ma = [];
        s_rm.Ba.Ha.call(this)
    };
    s_rm.prototype.Ka = function() {
        this.$.$ && (this.Xa == this.$.clientHeight && this.Da && s_Qqa(this.Da.$, this.$.$.$) ? s_5qa(this, this.$.$) : s_2qa(this, this.$.$), this.Da = this.$.$, this.Xa = this.$.clientHeight)
    };
    var s_sm = function(a, b, c) {
        s_mm.call(this, a, b, c);
        this.qa = !1;
        this.addListener(window, "attn-ivis", this.Ma, !1, this);
        this.addListener(window, "pagehide", this.Ga, !1, this);
        this.addListener(window, "blur", this.Ma, !1, this);
        this.addListener(window, "attn-vis", this.Wa, !1, this);
        this.addListener(window, "focus", this.Wa, !1, this);
        this.addListener(window, "pageshow", this.Da, !1, this)
    };
    s_f(s_sm, s_mm);
    s_sm.prototype.Ga = function() {
        this.qa = !0;
        this.Ma()
    };
    s_sm.prototype.Da = function() {
        this.$ && this.ma && (this.qa ? (this.qa = !1, this.$.reset(), this.ma.reset(), this.Wa(), s_nm(this, new s_km(!0), !0), this.$.dispatchEvent("attn-dom-chg")) : this.Wa())
    };
    var s_6qa = function() {
        this.ka = new s_lm;
        this.$ = []
    };
    s_6qa.prototype.start = function(a, b) {
        this.$.push(new s_pm(a, b, this.ka));
        this.$.push(new s_sm(a, b, this.ka));
        this.$.push(new s_rm(a, b, this.ka));
        this.$.push(new s_qm(a, b, this.ka))
    };
    s_6qa.prototype.stop = function() {
        if (this.$)
            for (var a = 0; a < this.$.length; a++) this.$[a].dispose();
        this.$ = []
    };
    var s_tm = {
        init: function() {
            var a = s_$l,
                b = s_am;
            if ("getBoundingClientRect" in document.body && "pageXOffset" in window && "innerWidth" in window && a && b) {
                var c = b.$;
                0 > c.qa.indexOf("V") && (c.qa += "V");
                var c = s_tm.cq = new s_6qa,
                    d;
                d = s_tm.cq.ka;
                var e = new s_Tqa(a, b, d);
                c.$.push(e);
                e = new s_pm(a, b, d);
                c.$.push(e);
                e = new s_sm(a, b, d);
                c.$.push(e);
                e = new s_om(a, b, d);
                c.$.push(e);
                e = new s_Yqa(a, b, d);
                c.$.push(e);
                e = new s_rm(a, b, d);
                c.$.push(e);
                e = new s_qm(a, b, d);
                c.$.push(e);
                a = new s_Vqa(a, b, d);
                c.$.push(a)
            }
        },
        dispose: function() {
            s_tm.cq && (s_tm.cq.stop(), s_tm.cq = null)
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