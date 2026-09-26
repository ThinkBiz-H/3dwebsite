const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/AdminLayout-CVi-HCUf.js",
      "assets/auth-DHkUmAG_.js",
      "assets/firebase-CYV2rnSx.js",
      "assets/config-CwUMGsKi.js",
      "assets/tiptap-B0PErQl-.js",
      "assets/gsap-CsIHAh4p.js",
      "assets/AuthLayout-Cfgo1xZV.js",
      "assets/_plugin-vue_export-helper-DlAUqK2U.js",
      "assets/Home-C7BCRS6H.js",
      "assets/useSeoMeta-BzKlmvfc.js",
      "assets/three-CJlSw9Se.js",
      "assets/MagneticButton-DuABxGch.js",
      "assets/useReveal-D-sVBBf1.js",
      "assets/FeatureIcon-BE4R1_IJ.js",
      "assets/FeatureIcon-RgOCpLUz.css",
      "assets/FaqSection-ZUSC9LKj.js",
      "assets/Home-oS5KSi-B.css",
      "assets/About-DMgcblQN.js",
      "assets/PageHero-DWFK_BTa.js",
      "assets/About-nBwse7su.css",
      "assets/Contact-CtDFjntg.js",
      "assets/Blog-BboC2VET.js",
      "assets/blogs-ChkqengX.js",
      "assets/posts-CUkwZQsp.js",
      "assets/LoadMore-ygPhAw_Z.js",
      "assets/cloudinary-C_l184sh.js",
      "assets/AuthorAvatar-CQb6nrU5.js",
      "assets/BlogDetails-D8DJuINQ.js",
      "assets/ArticlePage-_ckMFMA8.js",
      "assets/text-CsDOoIPY.js",
      "assets/sanitizeArticleHtml-8ogIFJ5u.js",
      "assets/useBookmarks-CKAyWfQF.js",
      "assets/_commonjsHelpers-BosuxZz1.js",
      "assets/ArticlePage-ZgkIHsf0.css",
      "assets/Articles-CjjzE2hJ.js",
      "assets/articles-DyBiAF-H.js",
      "assets/ArticleDetails-CEZtTjIZ.js",
      "assets/Login-lvy3JKww.js",
      "assets/Dashboard-31KfQAV-.js",
      "assets/BlogList-DyT_SE6s.js",
      "assets/PostManagerTable-Derb940E.js",
      "assets/ConfirmModal-B_tF_qnW.js",
      "assets/PostEditor-1NNdfsUh.js",
      "assets/guideCategories-Bu4T2Ceg.js",
      "assets/guideCards-D5SZWSiG.js",
      "assets/PostEditor-Cm3xV0Xu.css",
      "assets/ArticleList-CnszwBK0.js",
      "assets/GuideCardList-C7hGKaGA.js",
      "assets/GuideCardEditor-DUdiL73C.js",
      "assets/NotFound-BaiexJ35.js",
      "assets/Learn-CVKoM3N9.js",
      "assets/GuideCardGrid-Bj7hiZgY.js",
      "assets/useGuideCards-DDAD0la4.js",
      "assets/Safety-B0Eq-9wZ.js",
      "assets/coin-Djgh7cPO.js",
      "assets/Exchanges-CAVdellY.js",
      "assets/Taxes-BA-61xMO.js",
      "assets/Glossary-BlJviL21.js",
      "assets/Privacy-_n2TGdNR.js",
      "assets/Terms-B-3zeaOX.js",
      "assets/Disclosures-Dq8gRuaz.js",
    ]),
) => i.map((i) => d[i]);
import {
  r as te,
  m as Ct,
  e as Tt,
  i as he,
  h as rn,
  a as Te,
  b as Ot,
  t as an,
  g as ln,
  o as cn,
  c as It,
  n as Pt,
  d as un,
  f as X,
  w as Lt,
  u as H,
  s as hn,
  j as dn,
  k as Nt,
  l as Dt,
  p as Me,
  q as Oe,
  v as Wt,
  x as z,
  y as U,
  z as y,
  F as fe,
  A as Ue,
  B as $e,
  C as we,
  D as pn,
  E as Q,
  G as se,
  H as ge,
  I as fn,
  J as mn,
  K as je,
  L as Fe,
  T as gn,
  M as yn,
  N as vn,
  O as wn,
  P as rt,
  Q as _n,
} from "./tiptap-B0PErQl-.js";
import { g as ee, S as et, a as bn, F as En } from "./gsap-CsIHAh4p.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === "childList")
        for (const l of r.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && o(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const r = {};
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
      r
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const r = n(s);
    fetch(s.href, r);
  }
})();
/*!
 * pinia v4.0.3
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */ let Mt;
const Ie = (e) => (Mt = e),
  Vt = Symbol();
function it(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
function xn() {
  const e = Tt(!0),
    t = e.run(() => te({}));
  let n = [],
    o = [];
  const s = Ct({
    install(r) {
      (Ie(s),
        (s._a = r),
        r.provide(Vt, s),
        (r.config.globalProperties.$pinia = s),
        o.forEach((l) => n.push(l)),
        (o = []));
    },
    use(r) {
      return (this._a ? n.push(r) : o.push(r), this);
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return s;
}
const Ye = () => {};
function at(e, t, n, o = Ye) {
  e.add(t);
  const s = () => {
    e.delete(t) && o();
  };
  return (!n && ln() && cn(s), s);
}
function ye(e, ...t) {
  e.forEach((n) => {
    n(...t);
  });
}
const Rn = (e) => e(),
  lt = Symbol(),
  Ve = Symbol();
function Ke(e, t) {
  e instanceof Map && t instanceof Map
    ? t.forEach((n, o) => e.set(o, n))
    : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!Object.hasOwn(t, n)) continue;
    const o = t[n],
      s = e[n];
    it(s) && it(o) && Object.hasOwn(e, n) && !Te(o) && !Ot(o)
      ? (e[n] = Ke(s, o))
      : (e[n] = o);
  }
  return e;
}
const Sn = Symbol();
function kn(e) {
  return !e || typeof e != "object" || !Object.hasOwn(e, Sn);
}
const { assign: le } = Object;
function An(e) {
  return !!(Te(e) && e.effect);
}
function Cn(e, t, n, o) {
  const { state: s, actions: r, getters: l } = t,
    u = n.state.value[e];
  let i;
  function h() {
    u || (n.state.value[e] = s ? s() : {});
    const f = un(n.state.value[e]);
    return le(
      f,
      r,
      Object.keys(l || {}).reduce(
        (a, d) => (
          (a[d] = Ct(
            X(() => {
              Ie(n);
              const p = n._s.get(e);
              return l[d].call(p, p);
            }),
          )),
          a
        ),
        {},
      ),
    );
  }
  return ((i = Bt(e, h, t, n, o, !0)), i);
}
function Bt(e, t, n = {}, o, s, r) {
  let l;
  const u = le({ actions: {} }, n),
    i = { deep: !0 };
  let h,
    f,
    a = new Set(),
    d = new Set(),
    p;
  const b = o.state.value[e];
  !r && !b && (o.state.value[e] = {});
  let S;
  function O(w) {
    let R;
    ((h = f = !1),
      typeof w == "function"
        ? (w(o.state.value[e]),
          (R = { type: "patch function", storeId: e, events: p }))
        : (Ke(o.state.value[e], w),
          (R = { type: "patch object", payload: w, storeId: e, events: p })));
    const q = (S = Symbol());
    (Pt().then(() => {
      S === q && (h = !0);
    }),
      (f = !0),
      ye(a, R, o.state.value[e]));
  }
  const I = r
    ? function () {
        const { state: R } = n,
          q = R ? R() : {};
        this.$patch((j) => {
          le(j, q);
        });
      }
    : Ye;
  function x() {
    (l.stop(), a.clear(), d.clear(), o._s.delete(e));
  }
  const _ = (w, R = "") => {
      if (lt in w) return ((w[Ve] = R), w);
      const q = function () {
        Ie(o);
        const j = Array.from(arguments),
          F = new Set(),
          re = new Set();
        function $(M) {
          F.add(M);
        }
        function J(M) {
          re.add(M);
        }
        ye(d, { args: j, name: q[Ve], store: P, after: $, onError: J });
        let K;
        try {
          K = w.apply(this && this.$id === e ? this : P, j);
        } catch (M) {
          throw (ye(re, M), M);
        }
        return K instanceof Promise
          ? K.then((M) => (ye(F, M), M)).catch(
              (M) => (ye(re, M), Promise.reject(M)),
            )
          : (ye(F, K), K);
      };
      return ((q[lt] = !0), (q[Ve] = R), q);
    },
    W = {
      _p: o,
      $id: e,
      $onAction: at.bind(null, d),
      $patch: O,
      $reset: I,
      $subscribe(w, R = {}) {
        if (a.has(w)) return Ye;
        const q = at(a, w, R.detached, () => j()),
          j = l.run(() =>
            Lt(
              () => o.state.value[e],
              (F) => {
                (R.flush === "sync" ? f : h) &&
                  w({ storeId: e, type: "direct", events: p }, F);
              },
              le({}, i, R),
            ),
          );
        return q;
      },
      $dispose: x,
    },
    P = It(W);
  o._s.set(e, P);
  const N = ((o._a && o._a.runWithContext) || Rn)(() =>
    o._e.run(() => (l = Tt()).run(() => t({ action: _ }))),
  );
  for (const w in N) {
    const R = N[w];
    (Te(R) && !An(R)) || Ot(R)
      ? r ||
        (b &&
          kn(R) &&
          (Te(R)
            ? (R.value = b[w])
            : ((R instanceof Set || R instanceof Map) && R.clear(),
              Ke(R, b[w]))),
        (o.state.value[e][w] = R))
      : typeof R == "function" && ((N[w] = _(R, w)), (u.actions[w] = R));
  }
  return (
    le(P, N),
    le(an(P), N),
    Object.defineProperty(P, "$state", {
      get: () => o.state.value[e],
      set: (w) => {
        O((R) => {
          le(R, w);
        });
      },
    }),
    o._p.forEach((w) => {
      const R = l.run(() => w({ store: P, app: o._a, pinia: o, options: u }));
      le(P, R);
    }),
    b && r && n.hydrate && n.hydrate(P.$state, b),
    (h = !0),
    (f = !0),
    P
  );
}
/*! #__NO_SIDE_EFFECTS__ */ function ws(e, t, n) {
  let o;
  const s = typeof t == "function";
  o = s ? n : t;
  function r(l, u) {
    const i = rn();
    return (
      (l = l || (i ? he(Vt, null) : null)),
      l && Ie(l),
      (l = Mt),
      l._s.has(e) || (s ? Bt(e, t, o, l) : Cn(e, o, l)),
      l._s.get(e)
    );
  }
  return ((r.$id = e), r);
}
const Tn = "modulepreload",
  On = function (e) {
    return "/" + e;
  },
  ct = {},
  A = function (t, n, o) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const l = document.querySelector("meta[property=csp-nonce]"),
        u = l?.nonce || l?.getAttribute("nonce");
      s = Promise.allSettled(
        n.map((i) => {
          if (((i = On(i)), i in ct)) return;
          ct[i] = !0;
          const h = i.endsWith(".css"),
            f = h ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${i}"]${f}`)) return;
          const a = document.createElement("link");
          if (
            ((a.rel = h ? "stylesheet" : Tn),
            h || (a.as = "script"),
            (a.crossOrigin = ""),
            (a.href = i),
            u && a.setAttribute("nonce", u),
            document.head.appendChild(a),
            h)
          )
            return new Promise((d, p) => {
              (a.addEventListener("load", d),
                a.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${i}`)),
                ));
            });
        }),
      );
    }
    function r(l) {
      const u = new Event("vite:preloadError", { cancelable: !0 });
      if (((u.payload = l), window.dispatchEvent(u), !u.defaultPrevented))
        throw l;
    }
    return s.then((l) => {
      for (const u of l || []) u.status === "rejected" && r(u.reason);
      return t().catch(r);
    });
  };
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const ve = typeof document < "u";
function Ht(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function In(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && Ht(e.default))
  );
}
const T = Object.assign;
function Be(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Z(s) ? s.map(e) : e(s);
  }
  return n;
}
const ke = () => {},
  Z = Array.isArray;
function ut(e, t) {
  const n = {};
  for (const o in e) n[o] = o in t ? t[o] : e[o];
  return n;
}
const zt = /#/g,
  Pn = /&/g,
  Ln = /\//g,
  Nn = /=/g,
  Dn = /\?/g,
  qt = /\+/g,
  Wn = /%5B/g,
  Mn = /%5D/g,
  Gt = /%5E/g,
  Vn = /%60/g,
  Ut = /%7B/g,
  Bn = /%7C/g,
  jt = /%7D/g,
  Hn = /%20/g;
function tt(e) {
  return e == null
    ? ""
    : encodeURI("" + e)
        .replace(Bn, "|")
        .replace(Wn, "[")
        .replace(Mn, "]");
}
function zn(e) {
  return tt(e).replace(Ut, "{").replace(jt, "}").replace(Gt, "^");
}
function Qe(e) {
  return tt(e)
    .replace(qt, "%2B")
    .replace(Hn, "+")
    .replace(zt, "%23")
    .replace(Pn, "%26")
    .replace(Vn, "`")
    .replace(Ut, "{")
    .replace(jt, "}")
    .replace(Gt, "^");
}
function qn(e) {
  return Qe(e).replace(Nn, "%3D");
}
function Gn(e) {
  return tt(e).replace(zt, "%23").replace(Dn, "%3F");
}
function Un(e) {
  return Gn(e).replace(Ln, "%2F");
}
function Ae(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const jn = /\/$/,
  Fn = (e) => e.replace(jn, "");
function He(e, t, n = "/") {
  let o,
    s = {},
    r = "",
    l = "";
  const u = t.indexOf("#");
  let i = t.indexOf("?");
  return (
    (i = u >= 0 && i > u ? -1 : i),
    i >= 0 &&
      ((o = t.slice(0, i)),
      (r = t.slice(i, u > 0 ? u : t.length)),
      (s = e(r.slice(1)))),
    u >= 0 && ((o = o || t.slice(0, u)), (l = t.slice(u, t.length))),
    (o = Xn(o ?? t, n)),
    { fullPath: o + r + l, path: o, query: s, hash: Ae(l) }
  );
}
function Yn(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function ht(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Kn(e, t, n) {
  const o = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    o > -1 &&
    o === s &&
    _e(t.matched[o], n.matched[s]) &&
    Ft(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function _e(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ft(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) if (!Qn(e[n], t[n])) return !1;
  return !0;
}
function Qn(e, t) {
  return Z(e) ? dt(e, t) : Z(t) ? dt(t, e) : e?.valueOf() === t?.valueOf();
}
function dt(e, t) {
  return Z(t)
    ? e.length === t.length && e.every((n, o) => n === t[o])
    : e.length === 1 && e[0] === t;
}
function Xn(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    o = e.split("/"),
    s = o[o.length - 1];
  (s === ".." || s === ".") && o.push("");
  let r = n.length - 1,
    l,
    u;
  for (l = 0; l < o.length; l++)
    if (((u = o[l]), u !== "."))
      if (u === "..") r > 1 && r--;
      else break;
  return n.slice(0, r).join("/") + "/" + o.slice(l).join("/");
}
const ae = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
let Xe = (function (e) {
    return ((e.pop = "pop"), (e.push = "push"), e);
  })({}),
  ze = (function (e) {
    return ((e.back = "back"), (e.forward = "forward"), (e.unknown = ""), e);
  })({});
function Jn(e) {
  if (!e)
    if (ve) {
      const t = document.querySelector("base");
      ((e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, "")));
    } else e = "/";
  return (e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Fn(e));
}
const Zn = /^[^#]+#/;
function $n(e, t) {
  return e.replace(Zn, "#") + t;
}
function eo(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0),
  };
}
const Pe = () => ({ left: window.scrollX, top: window.scrollY });
function to(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      o = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? o
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = eo(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      );
}
function pt(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Je = new Map();
function no(e, t) {
  Je.set(e, t);
}
function oo(e) {
  const t = Je.get(e);
  return (Je.delete(e), t);
}
function so(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Yt(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let L = (function (e) {
  return (
    (e[(e.MATCHER_NOT_FOUND = 1)] = "MATCHER_NOT_FOUND"),
    (e[(e.NAVIGATION_GUARD_REDIRECT = 2)] = "NAVIGATION_GUARD_REDIRECT"),
    (e[(e.NAVIGATION_ABORTED = 4)] = "NAVIGATION_ABORTED"),
    (e[(e.NAVIGATION_CANCELLED = 8)] = "NAVIGATION_CANCELLED"),
    (e[(e.NAVIGATION_DUPLICATED = 16)] = "NAVIGATION_DUPLICATED"),
    e
  );
})({});
const Kt = Symbol("");
(L.MATCHER_NOT_FOUND + "",
  L.NAVIGATION_GUARD_REDIRECT + "",
  L.NAVIGATION_ABORTED + "",
  L.NAVIGATION_CANCELLED + "",
  L.NAVIGATION_DUPLICATED + "");
function be(e, t) {
  return T(new Error(), { type: e, [Kt]: !0 }, t);
}
function ne(e, t) {
  return e instanceof Error && Kt in e && (t == null || !!(e.type & t));
}
const ro = ["params", "query", "hash"];
function io(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of ro) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function ao(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < n.length; ++o) {
    const s = n[o].replace(qt, " "),
      r = s.indexOf("="),
      l = Ae(r < 0 ? s : s.slice(0, r)),
      u = r < 0 ? null : Ae(s.slice(r + 1));
    if (l in t) {
      let i = t[l];
      (Z(i) || (i = t[l] = [i]), i.push(u));
    } else t[l] = u;
  }
  return t;
}
function ft(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (((n = qn(n)), o == null)) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Z(o) ? o.map((s) => s && Qe(s)) : [o && Qe(o)]).forEach((s) => {
      s !== void 0 &&
        ((t += (t.length ? "&" : "") + n), s != null && (t += "=" + s));
    });
  }
  return t;
}
function lo(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 &&
      (t[n] = Z(o)
        ? o.map((s) => (s == null ? null : "" + s))
        : o == null
          ? o
          : "" + o);
  }
  return t;
}
const co = Symbol(""),
  mt = Symbol(""),
  Le = Symbol(""),
  nt = Symbol(""),
  Ze = Symbol("");
function Se() {
  let e = [];
  function t(o) {
    return (
      e.push(o),
      () => {
        const s = e.indexOf(o);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function ue(e, t, n, o, s, r = (l) => l()) {
  const l = o && (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () =>
    new Promise((u, i) => {
      const h = (d) => {
          d === !1
            ? i(be(L.NAVIGATION_ABORTED, { from: n, to: t }))
            : d instanceof Error
              ? i(d)
              : so(d)
                ? i(be(L.NAVIGATION_GUARD_REDIRECT, { from: t, to: d }))
                : (l &&
                    o.enterCallbacks[s] === l &&
                    typeof d == "function" &&
                    l.push(d),
                  u());
        },
        f = r(() => e.call(o && o.instances[s], t, n, h));
      let a = Promise.resolve(f);
      (e.length < 3 && (a = a.then(h)), a.catch((d) => i(d)));
    });
}
function qe(e, t, n, o, s = (r) => r()) {
  const r = [];
  for (const l of e)
    for (const u in l.components) {
      let i = l.components[u];
      if (!(t !== "beforeRouteEnter" && !l.instances[u]))
        if (Ht(i)) {
          const h = (i.__vccOpts || i)[t];
          h && r.push(ue(h, n, o, l, u, s));
        } else {
          let h = i();
          r.push(() =>
            h.then((f) => {
              if (!f)
                throw new Error(
                  `Couldn't resolve component "${u}" at "${l.path}"`,
                );
              const a = In(f) ? f.default : f;
              ((l.mods[u] = f), (l.components[u] = a));
              const d = (a.__vccOpts || a)[t];
              return d && ue(d, n, o, l, u, s)();
            }),
          );
        }
    }
  return r;
}
function uo(e, t) {
  const n = [],
    o = [],
    s = [],
    r = Math.max(t.matched.length, e.matched.length);
  for (let l = 0; l < r; l++) {
    const u = t.matched[l];
    u && (e.matched.find((h) => _e(h, u)) ? o.push(u) : n.push(u));
    const i = e.matched[l];
    i && (t.matched.find((h) => _e(h, i)) || s.push(i));
  }
  return [n, o, s];
}
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ let ho = () => location.protocol + "//" + location.host;
function Qt(e, t) {
  const { pathname: n, search: o, hash: s } = t,
    r = e.indexOf("#");
  if (r > -1) {
    let l = s.includes(e.slice(r)) ? e.slice(r).length : 1,
      u = s.slice(l);
    return (u[0] !== "/" && (u = "/" + u), ht(u, ""));
  }
  return ht(n, e) + o + s;
}
function po(e, t, n, o) {
  let s = [],
    r = [],
    l = null;
  const u = ({ state: d }) => {
    const p = Qt(e, location),
      b = n.value,
      S = t.value;
    let O = 0;
    if (d) {
      if (((n.value = p), (t.value = d), l && l === b)) {
        l = null;
        return;
      }
      O = S ? d.position - S.position : 0;
    } else o(p);
    s.forEach((I) => {
      I(n.value, b, {
        delta: O,
        type: Xe.pop,
        direction: O ? (O > 0 ? ze.forward : ze.back) : ze.unknown,
      });
    });
  };
  function i() {
    l = n.value;
  }
  function h(d) {
    s.push(d);
    const p = () => {
      const b = s.indexOf(d);
      b > -1 && s.splice(b, 1);
    };
    return (r.push(p), p);
  }
  function f() {
    if (document.visibilityState === "hidden") {
      const { history: d } = window;
      if (!d.state) return;
      d.replaceState(T({}, d.state, { scroll: Pe() }), "");
    }
  }
  function a() {
    for (const d of r) d();
    ((r = []),
      window.removeEventListener("popstate", u),
      window.removeEventListener("pagehide", f),
      document.removeEventListener("visibilitychange", f));
  }
  return (
    window.addEventListener("popstate", u),
    window.addEventListener("pagehide", f),
    document.addEventListener("visibilitychange", f),
    { pauseListeners: i, listen: h, destroy: a }
  );
}
function gt(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Pe() : null,
  };
}
function fo(e) {
  const { history: t, location: n } = window,
    o = { value: Qt(e, n) },
    s = { value: t.state };
  s.value ||
    r(
      o.value,
      {
        back: null,
        current: o.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function r(i, h, f) {
    const a = e.indexOf("#"),
      d =
        a > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(a)) + i
          : ho() + e + i;
    try {
      (t[f ? "replaceState" : "pushState"](h, "", d), (s.value = h));
    } catch (p) {
      (console.error(p), n[f ? "replace" : "assign"](d));
    }
  }
  function l(i, h) {
    (r(
      i,
      T({}, t.state, gt(s.value.back, i, s.value.forward, !0), h, {
        position: s.value.position,
      }),
      !0,
    ),
      (o.value = i));
  }
  function u(i, h) {
    const f = T({}, s.value, t.state, { forward: i, scroll: Pe() });
    (r(f.current, f, !0),
      r(i, T({}, gt(o.value, i, null), { position: f.position + 1 }, h), !1),
      (o.value = i));
  }
  return { location: o, state: s, push: u, replace: l };
}
function mo(e) {
  e = Jn(e);
  const t = fo(e),
    n = po(e, t.state, t.location, t.replace);
  function o(r, l = !0) {
    (l || n.pauseListeners(), history.go(r));
  }
  const s = T(
    { location: "", base: e, go: o, createHref: $n.bind(null, e) },
    t,
    n,
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
let pe = (function (e) {
  return (
    (e[(e.Static = 0)] = "Static"),
    (e[(e.Param = 1)] = "Param"),
    (e[(e.Group = 2)] = "Group"),
    e
  );
})({});
var B = (function (e) {
  return (
    (e[(e.Static = 0)] = "Static"),
    (e[(e.Param = 1)] = "Param"),
    (e[(e.ParamRegExp = 2)] = "ParamRegExp"),
    (e[(e.ParamRegExpEnd = 3)] = "ParamRegExpEnd"),
    (e[(e.EscapeNext = 4)] = "EscapeNext"),
    e
  );
})(B || {});
const go = { type: pe.Static, value: "" },
  yo = /[a-zA-Z0-9_]/;
function vo(e) {
  if (!e) return [[]];
  if (e === "/") return [[go]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${h}": ${p}`);
  }
  let n = B.Static,
    o = n;
  const s = [];
  let r;
  function l() {
    (r && s.push(r), (r = []));
  }
  let u = 0,
    i,
    h = "",
    f = "";
  function a() {
    h &&
      (n === B.Static
        ? r.push({ type: pe.Static, value: h })
        : n === B.Param || n === B.ParamRegExp || n === B.ParamRegExpEnd
          ? (r.length > 1 &&
              (i === "*" || i === "+") &&
              t(
                `A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`,
              ),
            r.push({
              type: pe.Param,
              value: h,
              regexp: f,
              repeatable: i === "*" || i === "+",
              optional: i === "*" || i === "?",
            }))
          : t("Invalid state to consume buffer"),
      (h = ""));
  }
  function d() {
    h += i;
  }
  for (; u < e.length; ) {
    if (((i = e[u++]), i === "\\" && n !== B.ParamRegExp)) {
      ((o = n), (n = B.EscapeNext));
      continue;
    }
    switch (n) {
      case B.Static:
        i === "/" ? (h && a(), l()) : i === ":" ? (a(), (n = B.Param)) : d();
        break;
      case B.EscapeNext:
        (d(), (n = o));
        break;
      case B.Param:
        i === "("
          ? (n = B.ParamRegExp)
          : yo.test(i)
            ? d()
            : (a(), (n = B.Static), i !== "*" && i !== "?" && i !== "+" && u--);
        break;
      case B.ParamRegExp:
        i === ")"
          ? f[f.length - 1] == "\\"
            ? (f = f.slice(0, -1) + i)
            : (n = B.ParamRegExpEnd)
          : (f += i);
        break;
      case B.ParamRegExpEnd:
        (a(),
          (n = B.Static),
          i !== "*" && i !== "?" && i !== "+" && u--,
          (f = ""));
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return (
    n === B.ParamRegExp && t(`Unfinished custom RegExp for param "${h}"`),
    a(),
    l(),
    s
  );
}
const yt = "[^/]+?",
  wo = { sensitive: !1, strict: !1, start: !0, end: !0 };
var G = (function (e) {
  return (
    (e[(e._multiplier = 10)] = "_multiplier"),
    (e[(e.Root = 90)] = "Root"),
    (e[(e.Segment = 40)] = "Segment"),
    (e[(e.SubSegment = 30)] = "SubSegment"),
    (e[(e.Static = 40)] = "Static"),
    (e[(e.Dynamic = 20)] = "Dynamic"),
    (e[(e.BonusCustomRegExp = 10)] = "BonusCustomRegExp"),
    (e[(e.BonusWildcard = -50)] = "BonusWildcard"),
    (e[(e.BonusRepeatable = -20)] = "BonusRepeatable"),
    (e[(e.BonusOptional = -8)] = "BonusOptional"),
    (e[(e.BonusStrict = 0.7000000000000001)] = "BonusStrict"),
    (e[(e.BonusCaseSensitive = 0.25)] = "BonusCaseSensitive"),
    e
  );
})(G || {});
const _o = /[.+*?^${}()[\]/\\]/g;
function bo(e, t) {
  const n = T({}, wo, t),
    o = [];
  let s = n.start ? "^" : "";
  const r = [];
  for (const h of e) {
    const f = h.length ? [] : [G.Root];
    n.strict && !h.length && (s += "/");
    for (let a = 0; a < h.length; a++) {
      const d = h[a];
      let p = G.Segment + (n.sensitive ? G.BonusCaseSensitive : 0);
      if (d.type === pe.Static)
        (a || (s += "/"), (s += d.value.replace(_o, "\\$&")), (p += G.Static));
      else if (d.type === pe.Param) {
        const { value: b, repeatable: S, optional: O, regexp: I } = d;
        r.push({ name: b, repeatable: S, optional: O });
        const x = I || yt;
        if (x !== yt) {
          p += G.BonusCustomRegExp;
          try {
            `${x}`;
          } catch (W) {
            throw new Error(
              `Invalid custom RegExp for param "${b}" (${x}): ` + W.message,
            );
          }
        }
        let _ = S ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        (a || (_ = O && h.length < 2 ? `(?:/${_})` : "/" + _),
          O && (_ += "?"),
          (s += _),
          (p += G.Dynamic),
          O && (p += G.BonusOptional),
          S && (p += G.BonusRepeatable),
          x === ".*" && (p += G.BonusWildcard));
      }
      f.push(p);
    }
    o.push(f);
  }
  if (n.strict && n.end) {
    const h = o.length - 1;
    o[h][o[h].length - 1] += G.BonusStrict;
  }
  (n.strict || (s += "/?"),
    n.end ? (s += "$") : n.strict && !s.endsWith("/") && (s += "(?:/|$)"));
  const l = new RegExp(s, n.sensitive ? "" : "i");
  function u(h) {
    const f = h.match(l),
      a = {};
    if (!f) return null;
    for (let d = 1; d < f.length; d++) {
      const p = f[d] || "",
        b = r[d - 1];
      a[b.name] = p && b.repeatable ? p.split("/") : p;
    }
    return a;
  }
  function i(h) {
    let f = "",
      a = !1;
    for (const d of e) {
      ((!a || !f.endsWith("/")) && (f += "/"), (a = !1));
      for (const p of d)
        if (p.type === pe.Static) f += p.value;
        else if (p.type === pe.Param) {
          const { value: b, repeatable: S, optional: O } = p,
            I = b in h ? h[b] : "";
          if (Z(I) && !S)
            throw new Error(
              `Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const x = Z(I) ? I.join("/") : I;
          if (!x)
            if (O)
              d.length < 2 &&
                (f.endsWith("/") ? (f = f.slice(0, -1)) : (a = !0));
            else throw new Error(`Missing required param "${b}"`);
          f += x;
        }
    }
    return f || "/";
  }
  return { re: l, score: o, keys: r, parse: u, stringify: i };
}
function Eo(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o) return o;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === G.Static + G.Segment
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === G.Static + G.Segment
        ? 1
        : -1
      : 0;
}
function Xt(e, t) {
  let n = 0;
  const o = e.score,
    s = t.score;
  for (; n < o.length && n < s.length; ) {
    const r = Eo(o[n], s[n]);
    if (r) return r;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (vt(o)) return 1;
    if (vt(s)) return -1;
  }
  return s.length - o.length;
}
function vt(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const xo = { strict: !1, end: !0, sensitive: !1 };
function Ro(e, t, n) {
  const o = bo(vo(e.path), n),
    s = T(o, { record: e, parent: t, children: [], alias: [] });
  return (t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s);
}
function So(e, t) {
  const n = [],
    o = new Map();
  t = ut(xo, t);
  function s(a) {
    return o.get(a);
  }
  function r(a, d, p) {
    const b = !p,
      S = _t(a);
    S.aliasOf = p && p.record;
    const O = ut(t, a),
      I = [S];
    if ("alias" in a) {
      const W = typeof a.alias == "string" ? [a.alias] : a.alias;
      for (const P of W)
        I.push(
          _t(
            T({}, S, {
              components: p ? p.record.components : S.components,
              path: P,
              aliasOf: p ? p.record : S,
            }),
          ),
        );
    }
    let x, _;
    for (const W of I) {
      const { path: P } = W;
      if (d && P[0] !== "/") {
        const N = d.record.path,
          w = N[N.length - 1] === "/" ? "" : "/";
        W.path = d.record.path + (P && w + P);
      }
      if (
        ((x = Ro(W, d, O)),
        p
          ? p.alias.push(x)
          : ((_ = _ || x),
            _ !== x && _.alias.push(x),
            b && a.name && !bt(x) && l(a.name)),
        Jt(x) && i(x),
        S.children)
      ) {
        const N = S.children;
        for (let w = 0; w < N.length; w++) r(N[w], x, p && p.children[w]);
      }
      p = p || x;
    }
    return _
      ? () => {
          l(_);
        }
      : ke;
  }
  function l(a) {
    if (Yt(a)) {
      const d = o.get(a);
      d &&
        (o.delete(a),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(l),
        d.alias.forEach(l));
    } else {
      const d = n.indexOf(a);
      d > -1 &&
        (n.splice(d, 1),
        a.record.name && o.delete(a.record.name),
        a.children.forEach(l),
        a.alias.forEach(l));
    }
  }
  function u() {
    return n;
  }
  function i(a) {
    const d = Co(a, n);
    (n.splice(d, 0, a), a.record.name && !bt(a) && o.set(a.record.name, a));
  }
  function h(a, d) {
    let p,
      b = {},
      S,
      O;
    if ("name" in a && a.name) {
      if (((p = o.get(a.name)), !p))
        throw be(L.MATCHER_NOT_FOUND, { location: a });
      ((O = p.record.name),
        (b = T(
          wt(
            d.params,
            p.keys
              .filter((_) => !_.optional)
              .concat(p.parent ? p.parent.keys.filter((_) => _.optional) : [])
              .map((_) => _.name),
          ),
          a.params &&
            wt(
              a.params,
              p.keys.map((_) => _.name),
            ),
        )),
        (S = p.stringify(b)));
    } else if (a.path != null)
      ((S = a.path),
        (p = n.find((_) => _.re.test(S))),
        p && ((b = p.parse(S)), (O = p.record.name)));
    else {
      if (((p = d.name ? o.get(d.name) : n.find((_) => _.re.test(d.path))), !p))
        throw be(L.MATCHER_NOT_FOUND, { location: a, currentLocation: d });
      ((O = p.record.name),
        (b = T({}, d.params, a.params)),
        (S = p.stringify(b)));
    }
    const I = [];
    let x = p;
    for (; x; ) (I.unshift(x.record), (x = x.parent));
    return { name: O, path: S, params: b, matched: I, meta: Ao(I) };
  }
  e.forEach((a) => r(a));
  function f() {
    ((n.length = 0), o.clear());
  }
  return {
    addRoute: r,
    resolve: h,
    removeRoute: l,
    clearRoutes: f,
    getRoutes: u,
    getRecordMatcher: s,
  };
}
function wt(e, t) {
  const n = {};
  for (const o of t) o in e && (n[o] = e[o]);
  return n;
}
function _t(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: ko(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return (Object.defineProperty(t, "mods", { value: {} }), t);
}
function ko(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const o in e.components) t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function bt(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Ao(e) {
  return e.reduce((t, n) => T(t, n.meta), {});
}
function Co(e, t) {
  let n = 0,
    o = t.length;
  for (; n !== o; ) {
    const r = (n + o) >> 1;
    Xt(e, t[r]) < 0 ? (o = r) : (n = r + 1);
  }
  const s = To(e);
  return (s && (o = t.lastIndexOf(s, o - 1)), o);
}
function To(e) {
  let t = e;
  for (; (t = t.parent); ) if (Jt(t) && Xt(e, t) === 0) return t;
}
function Jt({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function Et(e) {
  const t = he(Le),
    n = he(nt),
    o = X(() => {
      const i = H(e.to);
      return t.resolve(i);
    }),
    s = X(() => {
      const { matched: i } = o.value,
        { length: h } = i,
        f = i[h - 1],
        a = n.matched;
      if (!f || !a.length) return -1;
      const d = a.findIndex(_e.bind(null, f));
      if (d > -1) return d;
      const p = xt(i[h - 2]);
      return h > 1 && xt(f) === p && a[a.length - 1].path !== p
        ? a.findIndex(_e.bind(null, i[h - 2]))
        : d;
    }),
    r = X(() => s.value > -1 && Lo(n.params, o.value.params)),
    l = X(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Ft(n.params, o.value.params),
    );
  function u(i = {}) {
    if (Po(i)) {
      const h = t[H(e.replace) ? "replace" : "push"](H(e.to)).catch(ke);
      return (
        e.viewTransition &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => h),
        h
      );
    }
    return Promise.resolve();
  }
  return {
    route: o,
    href: X(() => o.value.href),
    isActive: r,
    isExactActive: l,
    navigate: u,
  };
}
function Oo(e) {
  return e.length === 1 ? e[0] : e;
}
const Io = Nt({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
      viewTransition: Boolean,
    },
    useLink: Et,
    setup(e, { slots: t }) {
      const n = It(Et(e)),
        { options: o } = he(Le),
        s = X(() => ({
          [Rt(e.activeClass, o.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Rt(
            e.exactActiveClass,
            o.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }));
      return () => {
        const r = t.default && Oo(t.default(n));
        return e.custom
          ? r
          : Dt(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              r,
            );
      };
    },
  }),
  ce = Io;
function Po(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return (e.preventDefault && e.preventDefault(), !0);
  }
}
function Lo(e, t) {
  for (const n in t) {
    const o = t[n],
      s = e[n];
    if (typeof o == "string") {
      if (o !== s) return !1;
    } else if (
      !Z(s) ||
      s.length !== o.length ||
      o.some((r, l) => r.valueOf() !== s[l].valueOf())
    )
      return !1;
  }
  return !0;
}
function xt(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Rt = (e, t, n) => e ?? t ?? n,
  No = Nt({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const o = he(Ze),
        s = X(() => e.route || o.value),
        r = he(mt, 0),
        l = X(() => {
          let h = H(r);
          const { matched: f } = s.value;
          let a;
          for (; (a = f[h]) && !a.components; ) h++;
          return h;
        }),
        u = X(() => s.value.matched[l.value]);
      (Me(
        mt,
        X(() => l.value + 1),
      ),
        Me(co, u),
        Me(Ze, s));
      const i = te();
      return (
        Lt(
          () => [i.value, u.value, e.name],
          ([h, f, a], [d, p, b]) => {
            (f &&
              ((f.instances[a] = h),
              p &&
                p !== f &&
                h &&
                h === d &&
                (f.leaveGuards.size || (f.leaveGuards = p.leaveGuards),
                f.updateGuards.size || (f.updateGuards = p.updateGuards))),
              h &&
                f &&
                (!p || !_e(f, p) || !d) &&
                (f.enterCallbacks[a] || []).forEach((S) => S(h)));
          },
          { flush: "post" },
        ),
        () => {
          const h = s.value,
            f = e.name,
            a = u.value,
            d = a && a.components[f];
          if (!d) return St(n.default, { Component: d, route: h });
          const p = a.props[f],
            b = p
              ? p === !0
                ? h.params
                : typeof p == "function"
                  ? p(h)
                  : p
              : null,
            O = Dt(
              d,
              T({}, b, t, {
                onVnodeUnmounted: (I) => {
                  I.component.isUnmounted && (a.instances[f] = null);
                },
                ref: i,
              }),
            );
          return St(n.default, { Component: O, route: h }) || O;
        }
      );
    },
  });
function St(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Do = No;
function Wo(e) {
  const t = So(e.routes, e),
    n = e.parseQuery || ao,
    o = e.stringifyQuery || ft,
    s = e.history,
    r = Se(),
    l = Se(),
    u = Se(),
    i = dn(ae);
  let h = ae;
  ve &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const f = Be.bind(null, (c) => "" + c),
    a = Be.bind(null, Un),
    d = Be.bind(null, Ae);
  function p(c, g) {
    let m, v;
    return (
      Yt(c) ? ((m = t.getRecordMatcher(c)), (v = g)) : (v = c),
      t.addRoute(v, m)
    );
  }
  function b(c) {
    const g = t.getRecordMatcher(c);
    g && t.removeRoute(g);
  }
  function S() {
    return t.getRoutes().map((c) => c.record);
  }
  function O(c) {
    return !!t.getRecordMatcher(c);
  }
  function I(c, g) {
    if (((g = T({}, g || i.value)), typeof c == "string")) {
      const E = He(n, c, g.path),
        V = t.resolve({ path: E.path }, g),
        Re = s.createHref(E.fullPath);
      return T(E, V, {
        params: d(V.params),
        hash: Ae(E.hash),
        redirectedFrom: void 0,
        href: Re,
      });
    }
    let m;
    if (c.path != null) m = T({}, c, { path: He(n, c.path, g.path).path });
    else {
      const E = T({}, c.params);
      for (const V in E) E[V] == null && delete E[V];
      ((m = T({}, c, { params: a(E) })), (g.params = a(g.params)));
    }
    const v = t.resolve(m, g),
      C = c.hash || "";
    v.params = f(d(v.params));
    const D = Yn(o, T({}, c, { hash: zn(C), path: v.path })),
      k = s.createHref(D);
    return T(
      { fullPath: D, hash: C, query: o === ft ? lo(c.query) : c.query || {} },
      v,
      { redirectedFrom: void 0, href: k },
    );
  }
  function x(c) {
    return typeof c == "string" ? He(n, c, i.value.path) : T({}, c);
  }
  function _(c, g) {
    if (h !== c) return be(L.NAVIGATION_CANCELLED, { from: g, to: c });
  }
  function W(c) {
    return w(c);
  }
  function P(c) {
    return W(T(x(c), { replace: !0 }));
  }
  function N(c, g) {
    const m = c.matched[c.matched.length - 1];
    if (m && m.redirect) {
      const { redirect: v } = m;
      let C = typeof v == "function" ? v(c, g) : v;
      return (
        typeof C == "string" &&
          ((C = C.includes("?") || C.includes("#") ? (C = x(C)) : { path: C }),
          (C.params = {})),
        T(
          {
            query: c.query,
            hash: c.hash,
            params: C.path != null ? {} : c.params,
          },
          C,
        )
      );
    }
  }
  function w(c, g) {
    const m = (h = I(c)),
      v = i.value,
      C = c.state,
      D = c.force,
      k = c.replace === !0,
      E = N(m, v);
    if (E)
      return w(
        T(x(E), {
          state: typeof E == "object" ? T({}, C, E.state) : C,
          force: D,
          replace: k,
        }),
        g || m,
      );
    const V = m;
    V.redirectedFrom = g;
    let Re;
    return (
      !D &&
        Kn(o, v, m) &&
        ((Re = be(L.NAVIGATION_DUPLICATED, { to: V, from: v })),
        st(v, v, !0, !1)),
      (Re ? Promise.resolve(Re) : j(V, v))
        .catch((Y) =>
          ne(Y)
            ? ne(Y, L.NAVIGATION_GUARD_REDIRECT)
              ? Y
              : Ne(Y)
            : de(Y, V, v),
        )
        .then((Y) => {
          if (Y) {
            if (ne(Y, L.NAVIGATION_GUARD_REDIRECT))
              return w(
                T({ replace: k }, x(Y.to), {
                  state: typeof Y.to == "object" ? T({}, C, Y.to.state) : C,
                  force: D,
                }),
                g || V,
              );
          } else Y = re(V, v, !0, k, C);
          return (F(V, v, Y), Y);
        })
    );
  }
  function R(c, g) {
    const m = _(c, g);
    return m ? Promise.reject(m) : Promise.resolve();
  }
  function q(c) {
    const g = Ce.values().next().value;
    return g && typeof g.runWithContext == "function"
      ? g.runWithContext(c)
      : c();
  }
  function j(c, g) {
    let m;
    const [v, C, D] = uo(c, g);
    m = qe(v.reverse(), "beforeRouteLeave", c, g);
    for (const E of v)
      E.leaveGuards.forEach((V) => {
        m.push(ue(V, c, g));
      });
    const k = R.bind(null, c, g);
    return (
      m.push(k),
      me(m)
        .then(() => {
          m = [];
          for (const E of r.list()) m.push(ue(E, c, g));
          return (m.push(k), me(m));
        })
        .then(() => {
          m = qe(C, "beforeRouteUpdate", c, g);
          for (const E of C)
            E.updateGuards.forEach((V) => {
              m.push(ue(V, c, g));
            });
          return (m.push(k), me(m));
        })
        .then(() => {
          m = [];
          for (const E of D)
            if (E.beforeEnter)
              if (Z(E.beforeEnter))
                for (const V of E.beforeEnter) m.push(ue(V, c, g));
              else m.push(ue(E.beforeEnter, c, g));
          return (m.push(k), me(m));
        })
        .then(
          () => (
            c.matched.forEach((E) => (E.enterCallbacks = {})),
            (m = qe(D, "beforeRouteEnter", c, g, q)),
            m.push(k),
            me(m)
          ),
        )
        .then(() => {
          m = [];
          for (const E of l.list()) m.push(ue(E, c, g));
          return (m.push(k), me(m));
        })
        .catch((E) => (ne(E, L.NAVIGATION_CANCELLED) ? E : Promise.reject(E)))
    );
  }
  function F(c, g, m) {
    u.list().forEach((v) => q(() => v(c, g, m)));
  }
  function re(c, g, m, v, C) {
    const D = _(c, g);
    if (D) return D;
    const k = g === ae,
      E = ve ? history.state : {};
    (m &&
      (v || k
        ? s.replace(c.fullPath, T({ scroll: k && E && E.scroll }, C))
        : s.push(c.fullPath, C)),
      (i.value = c),
      st(c, g, m, k),
      Ne());
  }
  let $;
  function J() {
    $ ||
      ($ = s.listen((c, g, m) => {
        if (!xe.listening) return;
        const v = I(c),
          C = N(v, xe.currentRoute.value);
        if (C) {
          w(T(C, { replace: !0, force: !0 }), v).catch(ke);
          return;
        }
        h = v;
        const D = i.value;
        (ve && no(pt(D.fullPath, m.delta), Pe()),
          j(v, D)
            .catch((k) =>
              ne(k, L.NAVIGATION_ABORTED | L.NAVIGATION_CANCELLED)
                ? k
                : ne(k, L.NAVIGATION_GUARD_REDIRECT)
                  ? (w(T(x(k.to), { force: !0 }), v)
                      .then((E) => {
                        ne(E, L.NAVIGATION_ABORTED | L.NAVIGATION_DUPLICATED) &&
                          !m.delta &&
                          m.type === Xe.pop &&
                          s.go(-1, !1);
                      })
                      .catch(ke),
                    Promise.reject())
                  : (m.delta && s.go(-m.delta, !1), de(k, v, D)),
            )
            .then((k) => {
              ((k = k || re(v, D, !1)),
                k &&
                  (m.delta && !ne(k, L.NAVIGATION_CANCELLED)
                    ? s.go(-m.delta, !1)
                    : m.type === Xe.pop &&
                      ne(k, L.NAVIGATION_ABORTED | L.NAVIGATION_DUPLICATED) &&
                      s.go(-1, !1)),
                F(v, D, k));
            })
            .catch(ke));
      }));
  }
  let K = Se(),
    M = Se(),
    ie;
  function de(c, g, m) {
    Ne(c);
    const v = M.list();
    return (
      v.length ? v.forEach((C) => C(c, g, m)) : console.error(c),
      Promise.reject(c)
    );
  }
  function Ee() {
    return ie && i.value !== ae
      ? Promise.resolve()
      : new Promise((c, g) => {
          K.add([c, g]);
        });
  }
  function Ne(c) {
    return (
      ie ||
        ((ie = !c),
        J(),
        K.list().forEach(([g, m]) => (c ? m(c) : g())),
        K.reset()),
      c
    );
  }
  function st(c, g, m, v) {
    const { scrollBehavior: C } = e;
    if (!ve || !C) return Promise.resolve();
    const D =
      (!m && oo(pt(c.fullPath, 0))) ||
      ((v || !m) && history.state && history.state.scroll) ||
      null;
    return Pt()
      .then(() => C(c, g, D))
      .then((k) => k && to(k))
      .catch((k) => de(k, c, g));
  }
  const De = (c) => s.go(c);
  let We;
  const Ce = new Set(),
    xe = {
      currentRoute: i,
      listening: !0,
      addRoute: p,
      removeRoute: b,
      clearRoutes: t.clearRoutes,
      hasRoute: O,
      getRoutes: S,
      resolve: I,
      options: e,
      push: W,
      replace: P,
      go: De,
      back: () => De(-1),
      forward: () => De(1),
      beforeEach: r.add,
      beforeResolve: l.add,
      afterEach: u.add,
      onError: M.add,
      isReady: Ee,
      install(c) {
        (c.component("RouterLink", ce),
          c.component("RouterView", Do),
          (c.config.globalProperties.$router = xe),
          Object.defineProperty(c.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => H(i),
          }),
          ve &&
            !We &&
            i.value === ae &&
            ((We = !0), W(s.location).catch((v) => {})));
        const g = {};
        for (const v in ae)
          Object.defineProperty(g, v, {
            get: () => i.value[v],
            enumerable: !0,
          });
        (c.provide(Le, xe), c.provide(nt, hn(g)), c.provide(Ze, i));
        const m = c.unmount;
        (Ce.add(c),
          (c.unmount = function () {
            (Ce.delete(c),
              Ce.size < 1 &&
                ((h = ae),
                $ && $(),
                ($ = null),
                (i.value = ae),
                (We = !1),
                (ie = !1)),
              m());
          }));
      },
    };
  function me(c) {
    return c.reduce((g, m) => g.then(() => q(m)), Promise.resolve());
  }
  return xe;
}
function Zt() {
  return he(Le);
}
function ot(e) {
  return he(nt);
}
function $t(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
class Mo {
  advance(t) {
    if (!this.isRunning) return;
    let n = !1;
    if (this.lerp)
      ((this.value =
        ((o = this.value),
        (s = this.to),
        (r = 60 * this.lerp),
        (l = t),
        (function (u, i, h) {
          return (1 - h) * u + h * i;
        })(o, s, 1 - Math.exp(-r * l)))),
        Math.round(this.value) === this.to &&
          ((this.value = this.to), (n = !0)));
    else {
      this.currentTime += t;
      const u = $t(0, this.currentTime / this.duration, 1);
      n = u >= 1;
      const i = n ? 1 : this.easing(u);
      this.value = this.from + (this.to - this.from) * i;
    }
    var o, s, r, l;
    (this.onUpdate?.(this.value, n), n && this.stop());
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(
    t,
    n,
    {
      lerp: o = 0.1,
      duration: s = 1,
      easing: r = (i) => i,
      onStart: l,
      onUpdate: u,
    },
  ) {
    ((this.from = this.value = t),
      (this.to = n),
      (this.lerp = o),
      (this.duration = s),
      (this.easing = r),
      (this.currentTime = 0),
      (this.isRunning = !0),
      l?.(),
      (this.onUpdate = u));
  }
}
class Vo {
  constructor({
    wrapper: t,
    content: n,
    autoResize: o = !0,
    debounce: s = 250,
  } = {}) {
    ((this.wrapper = t),
      (this.content = n),
      o &&
        ((this.debouncedResize = (function (r, l) {
          let u;
          return function () {
            let i = arguments,
              h = this;
            (clearTimeout(u),
              (u = setTimeout(function () {
                r.apply(h, i);
              }, l)));
          };
        })(this.resize, s)),
        this.wrapper === window
          ? window.addEventListener("resize", this.debouncedResize, !1)
          : ((this.wrapperResizeObserver = new ResizeObserver(
              this.debouncedResize,
            )),
            this.wrapperResizeObserver.observe(this.wrapper)),
        (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
        this.contentResizeObserver.observe(this.content)),
      this.resize());
  }
  destroy() {
    (this.wrapperResizeObserver?.disconnect(),
      this.contentResizeObserver?.disconnect(),
      window.removeEventListener("resize", this.debouncedResize, !1));
  }
  resize = () => {
    (this.onWrapperResize(), this.onContentResize());
  };
  onWrapperResize = () => {
    this.wrapper === window
      ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
      : ((this.width = this.wrapper.clientWidth),
        (this.height = this.wrapper.clientHeight));
  };
  onContentResize = () => {
    this.wrapper === window
      ? ((this.scrollHeight = this.content.scrollHeight),
        (this.scrollWidth = this.content.scrollWidth))
      : ((this.scrollHeight = this.wrapper.scrollHeight),
        (this.scrollWidth = this.wrapper.scrollWidth));
  };
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height,
    };
  }
}
class en {
  constructor() {
    this.events = {};
  }
  emit(t, ...n) {
    let o = this.events[t] || [];
    for (let s = 0, r = o.length; s < r; s++) o[s](...n);
  }
  on(t, n) {
    return (
      this.events[t]?.push(n) || (this.events[t] = [n]),
      () => {
        this.events[t] = this.events[t]?.filter((o) => n !== o);
      }
    );
  }
  off(t, n) {
    this.events[t] = this.events[t]?.filter((o) => n !== o);
  }
  destroy() {
    this.events = {};
  }
}
const kt = 100 / 6;
class Bo {
  constructor(t, { wheelMultiplier: n = 1, touchMultiplier: o = 1 }) {
    ((this.element = t),
      (this.wheelMultiplier = n),
      (this.touchMultiplier = o),
      (this.touchStart = { x: null, y: null }),
      (this.emitter = new en()),
      window.addEventListener("resize", this.onWindowResize, !1),
      this.onWindowResize(),
      this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.addEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.addEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.addEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      }));
  }
  on(t, n) {
    return this.emitter.on(t, n);
  }
  destroy() {
    (this.emitter.destroy(),
      window.removeEventListener("resize", this.onWindowResize, !1),
      this.element.removeEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.removeEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.removeEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.removeEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      }));
  }
  onTouchStart = (t) => {
    const { clientX: n, clientY: o } = t.targetTouches ? t.targetTouches[0] : t;
    ((this.touchStart.x = n),
      (this.touchStart.y = o),
      (this.lastDelta = { x: 0, y: 0 }),
      this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t }));
  };
  onTouchMove = (t) => {
    const { clientX: n, clientY: o } = t.targetTouches ? t.targetTouches[0] : t,
      s = -(n - this.touchStart.x) * this.touchMultiplier,
      r = -(o - this.touchStart.y) * this.touchMultiplier;
    ((this.touchStart.x = n),
      (this.touchStart.y = o),
      (this.lastDelta = { x: s, y: r }),
      this.emitter.emit("scroll", { deltaX: s, deltaY: r, event: t }));
  };
  onTouchEnd = (t) => {
    this.emitter.emit("scroll", {
      deltaX: this.lastDelta.x,
      deltaY: this.lastDelta.y,
      event: t,
    });
  };
  onWheel = (t) => {
    let { deltaX: n, deltaY: o, deltaMode: s } = t;
    ((n *= s === 1 ? kt : s === 2 ? this.windowWidth : 1),
      (o *= s === 1 ? kt : s === 2 ? this.windowHeight : 1),
      (n *= this.wheelMultiplier),
      (o *= this.wheelMultiplier),
      this.emitter.emit("scroll", { deltaX: n, deltaY: o, event: t }));
  };
  onWindowResize = () => {
    ((this.windowWidth = window.innerWidth),
      (this.windowHeight = window.innerHeight));
  };
}
class Ho {
  constructor({
    wrapper: t = window,
    content: n = document.documentElement,
    wheelEventsTarget: o = t,
    eventsTarget: s = o,
    smoothWheel: r = !0,
    syncTouch: l = !1,
    syncTouchLerp: u = 0.075,
    touchInertiaMultiplier: i = 35,
    duration: h,
    easing: f = (_) => Math.min(1, 1.001 - Math.pow(2, -10 * _)),
    lerp: a = !h && 0.1,
    infinite: d = !1,
    orientation: p = "vertical",
    gestureOrientation: b = "vertical",
    touchMultiplier: S = 1,
    wheelMultiplier: O = 1,
    autoResize: I = !0,
    __experimental__naiveDimensions: x = !1,
  } = {}) {
    ((this.__isSmooth = !1),
      (this.__isScrolling = !1),
      (this.__isStopped = !1),
      (this.__isLocked = !1),
      (this.onVirtualScroll = ({ deltaX: _, deltaY: W, event: P }) => {
        if (P.ctrlKey) return;
        const N = P.type.includes("touch"),
          w = P.type.includes("wheel");
        if (
          this.options.syncTouch &&
          N &&
          P.type === "touchstart" &&
          !this.isStopped &&
          !this.isLocked
        )
          return void this.reset();
        const R = _ === 0 && W === 0,
          q =
            (this.options.gestureOrientation === "vertical" && W === 0) ||
            (this.options.gestureOrientation === "horizontal" && _ === 0);
        if (R || q) return;
        let j = P.composedPath();
        if (
          ((j = j.slice(0, j.indexOf(this.rootElement))),
          j.find((J) => {
            var K, M, ie, de, Ee;
            return (
              ((K = J.hasAttribute) === null || K === void 0
                ? void 0
                : K.call(J, "data-lenis-prevent")) ||
              (N &&
                ((M = J.hasAttribute) === null || M === void 0
                  ? void 0
                  : M.call(J, "data-lenis-prevent-touch"))) ||
              (w &&
                ((ie = J.hasAttribute) === null || ie === void 0
                  ? void 0
                  : ie.call(J, "data-lenis-prevent-wheel"))) ||
              (((de = J.classList) === null || de === void 0
                ? void 0
                : de.contains("lenis")) &&
                !(
                  !((Ee = J.classList) === null || Ee === void 0) &&
                  Ee.contains("lenis-stopped")
                ))
            );
          }))
        )
          return;
        if (this.isStopped || this.isLocked) return void P.preventDefault();
        if (
          ((this.isSmooth =
            (this.options.syncTouch && N) || (this.options.smoothWheel && w)),
          !this.isSmooth)
        )
          return ((this.isScrolling = !1), void this.animate.stop());
        P.preventDefault();
        let F = W;
        this.options.gestureOrientation === "both"
          ? (F = Math.abs(W) > Math.abs(_) ? W : _)
          : this.options.gestureOrientation === "horizontal" && (F = _);
        const re = N && this.options.syncTouch,
          $ = N && P.type === "touchend" && Math.abs(F) > 5;
        ($ && (F = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(
            this.targetScroll + F,
            Object.assign(
              { programmatic: !1 },
              re
                ? { lerp: $ ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  },
            ),
          ));
      }),
      (this.onNativeScroll = () => {
        if (!this.__preventNextScrollEvent && !this.isScrolling) {
          const _ = this.animatedScroll;
          ((this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            (this.direction = Math.sign(this.animatedScroll - _)),
            this.emit());
        }
      }),
      (window.lenisVersion = "1.0.42"),
      (t !== document.documentElement && t !== document.body) || (t = window),
      (this.options = {
        wrapper: t,
        content: n,
        wheelEventsTarget: o,
        eventsTarget: s,
        smoothWheel: r,
        syncTouch: l,
        syncTouchLerp: u,
        touchInertiaMultiplier: i,
        duration: h,
        easing: f,
        lerp: a,
        infinite: d,
        gestureOrientation: b,
        orientation: p,
        touchMultiplier: S,
        wheelMultiplier: O,
        autoResize: I,
        __experimental__naiveDimensions: x,
      }),
      (this.animate = new Mo()),
      (this.emitter = new en()),
      (this.dimensions = new Vo({ wrapper: t, content: n, autoResize: I })),
      this.toggleClassName("lenis", !0),
      (this.velocity = 0),
      (this.isLocked = !1),
      (this.isStopped = !1),
      (this.isSmooth = l || r),
      (this.isScrolling = !1),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
      (this.virtualScroll = new Bo(s, {
        touchMultiplier: S,
        wheelMultiplier: O,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll));
  }
  destroy() {
    (this.emitter.destroy(),
      this.options.wrapper.removeEventListener(
        "scroll",
        this.onNativeScroll,
        !1,
      ),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.toggleClassName("lenis", !1),
      this.toggleClassName("lenis-smooth", !1),
      this.toggleClassName("lenis-scrolling", !1),
      this.toggleClassName("lenis-stopped", !1),
      this.toggleClassName("lenis-locked", !1));
  }
  on(t, n) {
    return this.emitter.on(t, n);
  }
  off(t, n) {
    return this.emitter.off(t, n);
  }
  setScroll(t) {
    this.isHorizontal
      ? (this.rootElement.scrollLeft = t)
      : (this.rootElement.scrollTop = t);
  }
  resize() {
    this.dimensions.resize();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    ((this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.velocity = 0),
      this.animate.stop());
  }
  start() {
    this.isStopped && ((this.isStopped = !1), this.reset());
  }
  stop() {
    this.isStopped ||
      ((this.isStopped = !0), this.animate.stop(), this.reset());
  }
  raf(t) {
    const n = t - (this.time || t);
    ((this.time = t), this.animate.advance(0.001 * n));
  }
  scrollTo(
    t,
    {
      offset: n = 0,
      immediate: o = !1,
      lock: s = !1,
      duration: r = this.options.duration,
      easing: l = this.options.easing,
      lerp: u = !r && this.options.lerp,
      onComplete: i,
      force: h = !1,
      programmatic: f = !0,
    } = {},
  ) {
    if ((!this.isStopped && !this.isLocked) || h) {
      if (["top", "left", "start"].includes(t)) t = 0;
      else if (["bottom", "right", "end"].includes(t)) t = this.limit;
      else {
        let a;
        if (
          (typeof t == "string"
            ? (a = document.querySelector(t))
            : t?.nodeType && (a = t),
          a)
        ) {
          if (this.options.wrapper !== window) {
            const p = this.options.wrapper.getBoundingClientRect();
            n -= this.isHorizontal ? p.left : p.top;
          }
          const d = a.getBoundingClientRect();
          t = (this.isHorizontal ? d.left : d.top) + this.animatedScroll;
        }
      }
      if (typeof t == "number") {
        if (
          ((t += n),
          (t = Math.round(t)),
          this.options.infinite
            ? f && (this.targetScroll = this.animatedScroll = this.scroll)
            : (t = $t(0, t, this.limit)),
          o)
        )
          return (
            (this.animatedScroll = this.targetScroll = t),
            this.setScroll(this.scroll),
            this.reset(),
            void (i == null || i(this))
          );
        if (!f) {
          if (t === this.targetScroll) return;
          this.targetScroll = t;
        }
        this.animate.fromTo(this.animatedScroll, t, {
          duration: r,
          easing: l,
          lerp: u,
          onStart: () => {
            (s && (this.isLocked = !0), (this.isScrolling = !0));
          },
          onUpdate: (a, d) => {
            ((this.isScrolling = !0),
              (this.velocity = a - this.animatedScroll),
              (this.direction = Math.sign(this.velocity)),
              (this.animatedScroll = a),
              this.setScroll(this.scroll),
              f && (this.targetScroll = a),
              d || this.emit(),
              d &&
                (this.reset(),
                this.emit(),
                i?.(this),
                (this.__preventNextScrollEvent = !0),
                requestAnimationFrame(() => {
                  delete this.__preventNextScrollEvent;
                })));
          },
        });
      }
    }
  }
  get rootElement() {
    return this.options.wrapper === window
      ? document.documentElement
      : this.options.wrapper;
  }
  get limit() {
    return this.options.__experimental__naiveDimensions
      ? this.isHorizontal
        ? this.rootElement.scrollWidth - this.rootElement.clientWidth
        : this.rootElement.scrollHeight - this.rootElement.clientHeight
      : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    return this.isHorizontal
      ? this.rootElement.scrollLeft
      : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? ((t = this.animatedScroll), (n = this.limit), ((t % n) + n) % n)
      : this.animatedScroll;
    var t, n;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isSmooth() {
    return this.__isSmooth;
  }
  set isSmooth(t) {
    this.__isSmooth !== t &&
      ((this.__isSmooth = t), this.toggleClassName("lenis-smooth", t));
  }
  get isScrolling() {
    return this.__isScrolling;
  }
  set isScrolling(t) {
    this.__isScrolling !== t &&
      ((this.__isScrolling = t), this.toggleClassName("lenis-scrolling", t));
  }
  get isStopped() {
    return this.__isStopped;
  }
  set isStopped(t) {
    this.__isStopped !== t &&
      ((this.__isStopped = t), this.toggleClassName("lenis-stopped", t));
  }
  get isLocked() {
    return this.__isLocked;
  }
  set isLocked(t) {
    this.__isLocked !== t &&
      ((this.__isLocked = t), this.toggleClassName("lenis-locked", t));
  }
  get className() {
    let t = "lenis";
    return (
      this.isStopped && (t += " lenis-stopped"),
      this.isLocked && (t += " lenis-locked"),
      this.isScrolling && (t += " lenis-scrolling"),
      this.isSmooth && (t += " lenis-smooth"),
      t
    );
  }
  toggleClassName(t, n) {
    (this.rootElement.classList.toggle(t, n),
      this.emitter.emit("className change", this));
  }
}
ee.registerPlugin(et, bn, En);
ee.defaults({ ease: "power3.out", duration: 0.9 });
let oe = null,
  At = !1;
function tn() {
  function e() {
    return (
      At ||
        ((At = !0),
        (oe = new Ho({
          duration: 1.15,
          easing: (s) => Math.min(1, 1.001 - Math.pow(2, -10 * s)),
          smoothWheel: !0,
          wheelMultiplier: 1,
          touchMultiplier: 1.2,
        })),
        oe.on("scroll", et.update),
        ee.ticker.add((s) => {
          oe.raf(s * 1e3);
        }),
        ee.ticker.lagSmoothing(0)),
      oe
    );
  }
  function t(s, r = {}) {
    oe?.scrollTo(s, { offset: -80, duration: 1.4, ...r });
  }
  function n() {
    oe?.stop();
  }
  function o() {
    oe?.start();
  }
  return { start: e, scrollTo: t, stop: n, resume: o, instance: () => oe };
}
const zo = {
    class: "pointer-events-none fixed inset-0 z-[90] hidden md:block",
  },
  qo = {
    __name: "CustomCursor",
    setup(e) {
      const t = te(null),
        n = te(null);
      let o, s, r, l;
      function u(a) {
        (o(a.clientX), s(a.clientY), r(a.clientX), l(a.clientY));
      }
      function i() {
        ee.to(n.value, {
          scale: 2.2,
          opacity: 0.6,
          duration: 0.35,
          ease: "power3.out",
        });
      }
      function h() {
        ee.to(n.value, {
          scale: 1,
          opacity: 1,
          duration: 0.35,
          ease: "power3.out",
        });
      }
      let f;
      return (
        Oe(() => {
          ((o = ee.quickTo(t.value, "x", {
            duration: 0.12,
            ease: "power3.out",
          })),
            (s = ee.quickTo(t.value, "y", {
              duration: 0.12,
              ease: "power3.out",
            })),
            (r = ee.quickTo(n.value, "x", {
              duration: 0.45,
              ease: "power3.out",
            })),
            (l = ee.quickTo(n.value, "y", {
              duration: 0.45,
              ease: "power3.out",
            })),
            window.addEventListener("pointermove", u));
          const a = () => {
            document.querySelectorAll("[data-cursor-hover]").forEach((d) => {
              (d.addEventListener("mouseenter", i),
                d.addEventListener("mouseleave", h));
            });
          };
          (a(),
            (f = new MutationObserver(a)),
            f.observe(document.body, { childList: !0, subtree: !0 }));
        }),
        Wt(() => {
          (window.removeEventListener("pointermove", u), f?.disconnect());
        }),
        (a, d) => (
          z(),
          U("div", zo, [
            y(
              "div",
              {
                ref_key: "dotEl",
                ref: t,
                class:
                  "cursor-dot fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600",
              },
              null,
              512,
            ),
            y(
              "div",
              {
                ref_key: "ringEl",
                ref: n,
                class:
                  "cursor-ring fixed left-0 top-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-600/40",
              },
              null,
              512,
            ),
          ])
        )
      );
    },
  };
function nn() {
  const e = ot(),
    t = Zt(),
    { scrollTo: n } = tn();
  function o(s) {
    if (!(!s || s === "#")) {
      if (s.startsWith("#")) {
        e.path !== "/" ? t.push({ path: "/", hash: s }) : n(s);
        return;
      }
      t.push(s);
    }
  }
  return { goTo: o };
}
const Go = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  _s = {
    eyebrow: "A calmer way into crypto",
    heading: ["Understand crypto before you put a single dollar into it."],
    subtitle:
      "We explain how crypto trading actually works — the good parts and the bad parts — in plain English. No hype. No price predictions. No pressure to buy anything.",
    primaryCta: "Start learning free",
    secondaryCta: "See the Risks first",
    scrollHint: "Scroll to explore",
  },
  bs = [
    {
      title: "You control your own money",
      description:
        "With self custody, nobody can freeze your account or block a transaction.",
      icon: "wallet",
    },
    {
      title: "Works across borders",
      description:
        "International transfers can often be completed faster and at lower cost.",
      icon: "globe",
    },
    {
      title: "Open to anyone",
      description:
        "Anyone with internet access can participate without opening a bank account.",
      icon: "users",
    },
    {
      title: "Growing technology",
      description:
        "Blockchain is being used in payments, identity, gaming, logistics and many other industries.",
      icon: "cpu",
    },
    {
      title: "Transparency",
      description:
        "Transactions are recorded publicly on the blockchain for anyone to verify.",
      icon: "eye",
    },
    {
      title: "Peer-to-peer",
      description:
        "Money can move directly between people without relying on traditional intermediaries.",
      icon: "link",
    },
  ],
  Es = [
    {
      title: "Foundations",
      tag: "Beginner",
      description:
        "Money, ledgers, and the problem blockchain solves — no prior knowledge assumed.",
    },
    {
      title: "Wallets & Custody",
      tag: "Beginner",
      description:
        "Set up a practice wallet and understand the difference between custodial and self-custody.",
    },
    {
      title: "Reading On-Chain Data",
      tag: "Intermediate",
      description:
        "Follow real transactions and learn to navigate a block explorer with confidence.",
    },
    {
      title: "Tokens & Contracts",
      tag: "Intermediate",
      description:
        "Understand what a smart contract automates and where tokens create genuine utility.",
    },
    {
      title: "Risk & Position Sizing",
      tag: "Advanced",
      description:
        "Build a personal framework for how much exposure makes sense for your situation.",
    },
  ],
  xs = [
    {
      question: "Do I need any technical background to start?",
      answer:
        "No. The Foundations module assumes no prior knowledge of finance or programming — every term is defined the first time it appears.",
    },
    {
      question: "Will this teach me how to trade?",
      answer:
        "Not directly. cryptolearner.us focuses on understanding how the technology and markets work. Several learners go on to trade afterward, but the course itself is deliberately not a trading strategy.",
    },
    {
      question: "What is the practice wallet, exactly?",
      answer:
        "It is a sandboxed wallet connected to a test network, so you can send transactions, pay simulated gas fees, and make mistakes without any real funds at risk.",
    },
    {
      question: "How long does the full curriculum take?",
      answer:
        "Most learners finish the five-week core curriculum in six to eight weeks at roughly 45 minutes a week, though the path adjusts to your pace.",
    },
    {
      question: "Can I cancel a paid plan at any time?",
      answer:
        "Yes. Guided and Cohort plans are billed monthly with no long-term contract, and you keep access until the end of the billing period.",
    },
  ],
  Rs = {
    eyebrow: "ABOUT CRYPTOLEARNER",
    heading: "We explain crypto. We don't sell it..",
    subtitle:
      "CryptoLearner exists to help people understand cryptocurrency clearly enough to make their own decisions — safely, skeptically, and without pressure. We don't recommend coins. We don't predict prices. We don't accept payment to favor any exchange or token. If a page ever reads like a sales pitch, tell us — that's not what we're here to do.",
  },
  Ss = {
    eyebrow: "Why we started this",
    heading: "Because most crypto content picks a side we didn't want to pick",
    paragraphs: [
      "Most crypto content online falls into one of two camps: it's trying to sell you something, or it's trying to scare you. Neither one actually helps a beginner.",
      "We started CryptoLearner because we kept seeing the same thing happen — smart, careful people making decisions about crypto based on hype, fear, or a confusing YouTube video, simply because no one had explained it to them plainly.",
      "So we built the site we wished existed: plain language, real risks stated clearly, and no agenda beyond helping you understand what you're actually looking at.",
    ],
  },
  ks = {
    eyebrow: "How we write and review",
    heading: "The same process, every single guide",
    steps: [
      {
        title: "Research from primary sources",
        description:
          "We start with regulators, whitepapers, and academic material — not other blogs or forums.",
      },
      {
        title: "A second reviewer checks it",
        description:
          "Before anything is published, someone with a relevant financial credential reviews it for accuracy and clarity.",
      },
      {
        title: "We date everything",
        description:
          "Every guide shows when it was written and when it was last checked.",
      },
      {
        title: "We recheck it regularly",
        description:
          "Crypto information can go stale within weeks. We re-review every guide at least every six months, sooner if the industry changes.",
      },
    ],
    note: "If we get something wrong, we fix it and say so — see our correction policy below.",
  },
  As = {
    eyebrow: "Who writes for CryptoLearner",
    heading: "Real people, real credentials",
    people: [
      {
        name: "Maria Ortiz",
        credential: "CFA · 9 yrs financial writing",
        bio: "Former equity research associate. Covers fundamentals, market structure, and how to evaluate an asset before buying it.",
      },
      {
        name: "David Chen",
        credential: "CFP · Fraud & security specialist",
        bio: "Advises everyday consumers on financial fraud prevention. Leads our Safety & Scams coverage.",
      },
    ],
    note: "Placeholder names shown for structure only. Replace with real author photos, names, and credentials before launch.",
  },
  Cs = {
    eyebrow: "What we will never do",
    heading: "A short list, but we mean every line",
    items: [
      'We will never tell you a coin is "guaranteed" to go up.',
      "We will never publish a price prediction.",
      "We will never accept payment to favor one exchange, wallet, or token over another.",
      "We will never bury a risk to make a guide sound more exciting.",
      "We will never ask you for your seed phrase, password, or wallet keys — not in a comment, not in a chat, not ever.",
    ],
  },
  Ts = {
    eyebrow: "Corrections policy",
    heading: "We'd rather admit a mistake than protect our ego",
    intro:
      "If you spot something inaccurate or outdated, tell us. We log every correction publicly with the date and a short note on what changed. You can see our correction history",
    linkLabel: "here",
    linkHref: "#",
    closing:
      "That's the whole point of this site — learning together, in the open.",
  },
  Os = {
    eyebrow: "Get in touch",
    heading: "Questions, corrections, or just want to say hello?",
    subtitle: "We read every message ourselves.",
    options: [
      {
        label: "Call",
        title: "+1 (800) 555-1234",
        detail: "Mon–Fri, 9am–6pm ET",
        icon: "pulse",
      },
      {
        label: "Chat",
        title: "WhatsApp",
        detail: "Usually a reply within an hour",
        icon: "chat",
      },
      {
        label: "Email",
        title: "support@cryptolearner.us",
        detail: "We reply personally",
        icon: "mail",
      },
    ],
    safetyNote:
      "We will never ask for your wallet keys, passwords, or payment over chat.",
  },
  Is = {
    text: "Thanks for taking the time to understand this world a little more carefully. That instinct — to learn before you leap — is exactly what will keep you safe here and everywhere else in crypto.",
  },
  Ps = {
    eyebrow: "ABOUT CRYPTOLEARNER",
    heading: "We explain crypto. We don't sell it.",
    subtitle:
      "CryptoLearner exists to help people understand cryptocurrency clearly enough to make their own decisions — safely, skeptically, and without pressure. We don't recommend coins. We don't predict prices. We don't accept payment to favor any exchange or token. If a page ever reads like a sales pitch, tell us — that's not what we're here to do.",
  },
  Ls = [
    {
      title: "Call",
      detail: "+1 (800) 555-1234",
      description: "Mon–Fri, 9am–6pm ET.",
      icon: "pulse",
    },
    {
      title: "Chat",
      detail: "WhatsApp",
      description: "Usually a reply within an hour.",
      icon: "chat",
    },
    {
      title: "Email",
      detail: "support@cryptolearner.us",
      description: "",
      icon: "mail",
    },
  ],
  Ns = {
    heading: "Why We Started This",
    paragraphs: [
      "Most crypto content online falls into one of two camps: it's trying to sell you something, or it's trying to scare you. Neither one actually helps a beginner.",
      "We started CryptoLearner because we kept seeing the same thing happen — smart, careful people making decisions about crypto based on hype, fear, or a confusing YouTube video, simply because no one had explained it to them plainly.",
      "So we built the site we wished existed: plain language, real risks stated clearly, and no agenda beyond helping you understand what you're actually looking at.",
    ],
  },
  Ds = {
    heading: "How We Write and Review",
    intro: "Every guide follows the same process, every time:",
    steps: [
      {
        title: "Research from primary sources.",
        description:
          "We start with regulators, whitepapers, and academic material — not other blogs or forums.",
      },
      {
        title: "A second reviewer checks it.",
        description:
          "Before anything is published, someone with a relevant financial credential reviews it for accuracy and clarity.",
      },
      {
        title: "We date everything.",
        description:
          "Every guide shows when it was written and when it was last checked.",
      },
      {
        title: "We recheck it regularly.",
        description:
          "Crypto information can go stale within weeks. We re-review every guide at least every six months, and sooner if something in the industry changes.",
      },
    ],
    note: "If we get something wrong, we fix it and say so — see our correction policy below.",
  },
  Ws = {
    heading: "Who Writes for CryptoLearner",
    people: [
      {
        name: "Maria Ortiz",
        credential: "CFA, 9 years in financial writing",
        bio: "Former equity research associate. Covers fundamentals, market structure, and how to evaluate an asset before buying it.",
      },
      {
        name: "David Chen",
        credential: "CFP, fraud & security specialist",
        bio: "Advises everyday consumers on financial fraud prevention. Leads our Safety & Scams coverage.",
      },
    ],
    note: "Add real author bios and photos here before publishing — placeholder names shown for structure only.",
  },
  Ms = {
    heading: "What We Will Never Do",
    items: [
      'We will never tell you a coin is "guaranteed" to go up.',
      "We will never publish a price prediction.",
      "We will never accept payment to favor one exchange, wallet, or token over another.",
      "We will never bury a risk to make a guide sound more exciting.",
      "We will never ask you for your seed phrase, password, or wallet keys — not in a comment, not in a chat, not ever.",
    ],
  },
  Vs = {
    heading: "Corrections Policy",
    intro:
      "If you spot something inaccurate or outdated, tell us. We log every correction publicly with the date and a short note on what changed. You can see our correction history",
    linkLabel: "here",
    linkHref: "#",
    closing:
      "We'd rather admit a mistake quickly than protect our ego. That's the whole point of this site.",
  },
  Bs = {
    heading: "Get in Touch",
    intro:
      "Questions, corrections, or just want to say hello? We read every message ourselves.",
    safetyNote:
      "We will never ask for your wallet keys, passwords, or payment over chat.",
  },
  Hs = {
    text: "Thanks for taking the time to understand this world a little more carefully. That instinct — to learn before you leap — is exactly what will keep you safe here and everywhere else in crypto.",
  },
  zs = [
    { day: "Monday – Friday", hours: "9:00am – 6:00pm ET" },
    { day: "Saturday", hours: "10:00am – 2:00pm ET" },
    { day: "Sunday", hours: "Closed" },
  ],
  qs = [
    {
      question: "How quickly will I hear back?",
      answer:
        "Most messages get a reply within one business day. Mentor-specific questions may take a little longer during peak enrollment weeks.",
    },
    {
      question: "Do you offer support for teams or cohorts?",
      answer:
        "Yes — the Cohort plan includes a dedicated onboarding call. Mention your team size in the message and we will follow up with scheduling options.",
    },
    {
      question: "Can I request a feature or lesson topic?",
      answer:
        "Always. A meaningful share of our curriculum roadmap comes directly from learner requests.",
    },
  ],
  Gs = {
    eyebrow: "Before you begin",
    heading: "What is cryptocurrency? (In plain words)",
    subtitle:
      "Cryptocurrency is digital money. You can't hold it in your hand like a coin or a note — it only exists as numbers on a computer network.Regular money — dollars, euros, rupees — is controlled by a government and its central bank. The bank keeps track of who has how much. Cryptocurrency is controlled by no one. Instead, thousands of computers around the world work together to keep track of who owns what. This shared record is called a blockchain. Bitcoin was the first cryptocurrency, created in 2009. Since then, thousands of others have been created — Ethereum, and many more. Why this matters to you: crypto doesn't work like the money you're used to. There's no bank to call if something goes wrong, no government insurance if you lose money, and no way to reverse a mistaken payment. That isn't necessarily bad — but it's different, and you need to understand the difference before you use it.",
    compare: {
      regular: {
        title: "Regular money",
        points: [
          "Controlled by a government and central bank",
          "Bank insures deposits up to a limit",
          "Mistaken payments can often be reversed",
          "Bank can freeze or assist with your account",
        ],
      },
      crypto: {
        title: "Cryptocurrency",
        points: [
          "Controlled by a global network of computers",
          "No government insurance on holdings",
          "Transactions are generally permanent",
          "No central authority to call for help",
        ],
      },
    },
    howItWorks: {
      heading: "How does crypto trading actually work?",
      steps: [
        {
          title: "Create an account on an exchange",
          description:
            "A digital marketplace where people buy and sell crypto, similar in idea to a stock market.",
        },
        {
          title: "Verify your identity",
          description:
            "Required by law on legitimate exchanges. If a platform skips this, treat it as a warning sign.",
        },
        {
          title: "Deposit money",
          description:
            "Transfer regular currency, like US dollars, into your exchange account.",
        },
        {
          title: "Place an order",
          description:
            "Choose which cryptocurrency to buy and how much. The exchange matches you with a seller.",
        },
        {
          title: "Store it",
          description:
            "It sits in the exchange's storage, or you move it to your own personal wallet.",
        },
        {
          title: "Buy, hold, or sell",
          description:
            "Based on your own research — never on pressure or promises of guaranteed profit.",
        },
      ],
    },
    investingVsTrading: {
      heading: "What is crypto trading?.",
      cards: [
        {
          label: "01 — Investing",
          title: "Buy and hold",
          description:
            "Buying a cryptocurrency and holding onto it for months or years, hoping it becomes more valuable over time — closer to how people invest in stocks.",
        },
        {
          label: "02 — Trading",
          title: "Buy and sell frequently",
          description:
            "Buying and selling more often — sometimes within days, hours, or minutes — trying to profit from short-term price changes. Most beginners who try this lose money.",
        },
      ],
    },
    terms: {
      heading: "Two words you'll hear constantly",
      items: [
        {
          word: "Wallet",
          description:
            "Your personal storage for crypto. An exchange wallet means the platform holds it for you; a self-custody wallet means you hold the keys — more control, but 100% your responsibility.",
        },
        {
          word: "Seed phrase",
          description:
            "A list of 12–24 random words that acts like a master password to your wallet. Lose it and no one — not even the wallet company — can get your funds back.",
        },
      ],
    },
    guidesCta: {
      label: "Want to go deeper? Explore our guides on the blog",
      href: "/blog",
    },
  },
  Us = {
    risks: [
      {
        title: "Price volatility",
        description:
          "Crypto prices can rise or fall dramatically within hours.",
      },
      {
        title: "Scams & fraud",
        description: "Fake investment schemes and phishing attacks are common.",
      },
      {
        title: "No guaranteed protection",
        description:
          "Unlike bank deposits, crypto usually has no government insurance.",
      },
      {
        title: "Irreversible transactions",
        description:
          "Sending funds to the wrong address usually cannot be reversed.",
      },
      {
        title: "Regulatory uncertainty",
        description:
          "Rules and taxation vary by country and can change over time.",
      },
      {
        title: "Private key loss",
        description:
          "If you lose your recovery phrase, you may permanently lose access to your crypto.",
      },
    ],
  },
  js = {
    label: "Our promise to you",
    promises: [
      'We will never tell you a coin is "guaranteed" to go up.',
      "We will never accept payment to favor one exchange or coin.",
      "We will always show risks alongside benefits, every time.",
      "We will keep content dated and reviewed by credentialed people.",
    ],
    disclaimer:
      "This website provides general educational information about cryptocurrency and is not financial, investment, tax, or legal advice. Cryptocurrency investments are highly volatile and carry a real risk of partial or total loss. Always do your own research and consult a licensed financial advisor before making any investment decision.",
  },
  Ge = {
    brand: "CryptoLearn",
    tagline: "Making Crypto Easy to Understand.",
    columns: [
      {
        title: "Company",
        links: [
          { label: "Home", href: "/" },
          { label: "Articles", href: "/articles" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Getting Started", href: "/getting-started" },
          { label: "Safety", href: "/safety" },
          { label: "Coins", href: "/coins" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Taxes", href: "/taxes" },
          { label: "Glossary", href: "/glossary" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: "Disclosures", href: "/disclosures" },
        ],
      },
    ],
    legal:
      "© " +
      new Date().getFullYear() +
      " CryptoLearn . Educational content only — not financial advice.",
  },
  on = "/assets/logo2-B9LWAEQa.png",
  Uo = { class: "w-full px-3 sm:px-5 lg:px-8 xl:px-10 py-3" },
  jo = {
    class:
      "flex flex-wrap items-center justify-start gap-x-3 gap-y-2 sm:gap-x-5 lg:gap-x-8",
  },
  Fo = ["href", "onClick"],
  Yo = {
    __name: "SiteHeader",
    setup(e) {
      const t = te(null),
        n = te(!1),
        o = te(!1);
      (ot(), Zt());
      const { goTo: s } = nn();
      let r;
      (Oe(() => {
        r = et.create({
          start: 40,
          onUpdate: (u) => {
            o.value = u.scroll() > 40;
          },
        });
      }),
        Wt(() => r?.kill()));
      function l(u) {
        ((n.value = !1), s(u));
      }
      return (u, i) => (
        z(),
        U(
          "header",
          {
            ref_key: "headerEl",
            ref: t,
            class: pn([
              "fixed inset-x-0 top-0 z-50 transition-all duration-500",
              o.value ? "bg-[#c4f6f8] border-b border-black " : "bg-[#a4fcff]",
            ]),
          },
          [
            y("div", Uo, [
              y("nav", jo, [
                (z(!0),
                U(
                  fe,
                  null,
                  Ue(
                    H(Go),
                    (h) => (
                      z(),
                      U(
                        "a",
                        {
                          key: h.href,
                          href: h.href,
                          "data-cursor-hover": "",
                          class:
                            "text-xs sm:text-sm lg:text-base font-medium text-black transition hover:text-gray-900 whitespace-nowrap",
                          onClick: $e((f) => l(h.href), ["prevent"]),
                        },
                        we(h.label),
                        9,
                        Fo,
                      )
                    ),
                  ),
                  128,
                )),
              ]),
            ]),
          ],
          2,
        )
      );
    },
  },
  Ko = {
    class: "w-full border-b border-white/40 bg-white/80 backdrop-blur-xl",
  },
  Qo = { class: "mx-auto max-w-7xl px-4 sm:px-6 py-2" },
  Xo = { class: "grid grid-cols-[auto_1fr_auto] items-center" },
  Jo = ["src"],
  Zo = { class: "flex flex-wrap justify-center gap-x-5 gap-y-2 px-4" },
  $o = {
    __name: "HomeHeader",
    setup(e) {
      return (t, n) => (
        z(),
        U("header", Ko, [
          y("div", Qo, [
            y("div", Xo, [
              Q(
                H(ce),
                { to: "/", class: "justify-self-start" },
                {
                  default: se(() => [
                    y(
                      "img",
                      {
                        src: H(on),
                        alt: "cryptolearner.us",
                        class: "h-8 sm:h-9 w-auto",
                      },
                      null,
                      8,
                      Jo,
                    ),
                  ]),
                  _: 1,
                },
              ),
              y("nav", Zo, [
                Q(
                  H(ce),
                  {
                    to: "/getting-started",
                    class:
                      "text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition",
                  },
                  {
                    default: se(() => [
                      ...(n[0] || (n[0] = [ge(" Getting Started ", -1)])),
                    ]),
                    _: 1,
                  },
                ),
                Q(
                  H(ce),
                  {
                    to: "/safety",
                    class:
                      "text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition",
                  },
                  {
                    default: se(() => [
                      ...(n[1] || (n[1] = [ge(" Safety ", -1)])),
                    ]),
                    _: 1,
                  },
                ),
                Q(
                  H(ce),
                  {
                    to: "/coins",
                    class:
                      "text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition",
                  },
                  {
                    default: se(() => [
                      ...(n[2] || (n[2] = [ge(" Coins ", -1)])),
                    ]),
                    _: 1,
                  },
                ),
                Q(
                  H(ce),
                  {
                    to: "/exchanges",
                    class:
                      "text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition",
                  },
                  {
                    default: se(() => [
                      ...(n[3] || (n[3] = [ge(" Exchanges ", -1)])),
                    ]),
                    _: 1,
                  },
                ),
                Q(
                  H(ce),
                  {
                    to: "/taxes",
                    class:
                      "text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition",
                  },
                  {
                    default: se(() => [
                      ...(n[4] || (n[4] = [ge(" Taxes ", -1)])),
                    ]),
                    _: 1,
                  },
                ),
                Q(
                  H(ce),
                  {
                    to: "/glossary",
                    class:
                      "text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition",
                  },
                  {
                    default: se(() => [
                      ...(n[5] || (n[5] = [ge(" Glossary ", -1)])),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              n[6] || (n[6] = y("div", { class: "w-8" }, null, -1)),
            ]),
          ]),
        ])
      );
    },
  },
  es = {
    class:
      "relative border-t border-slate-200 bg-slate-50 px-6 pb-10 pt-20 lg:px-10",
  },
  ts = { class: "mx-auto max-w-7xl" },
  ns = { class: "grid grid-cols-2 gap-10 pb-16 md:grid-cols-6" },
  os = { class: "col-span-2" },
  ss = ["src"],
  rs = { class: "mt-3 max-w-xs text-sm leading-relaxed text-gray-500" },
  is = { class: "text-sm font-semibold text-gray-900" },
  as = { class: "mt-4 space-y-3" },
  ls = ["onClick"],
  cs = {
    class:
      "flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-gray-400 md:flex-row md:items-center",
  },
  us = {
    __name: "SiteFooter",
    setup(e) {
      const { goTo: t } = nn();
      return (n, o) => (
        z(),
        U("footer", es, [
          y("div", ts, [
            y("div", ns, [
              y("div", os, [
                y(
                  "img",
                  {
                    src: H(on),
                    alt: "Logo",
                    class: "h-14 w-auto object-contain",
                  },
                  null,
                  8,
                  ss,
                ),
                y("p", rs, we(H(Ge).tagline), 1),
              ]),
              (z(!0),
              U(
                fe,
                null,
                Ue(
                  H(Ge).columns,
                  (s) => (
                    z(),
                    U("div", { key: s.title }, [
                      y("h4", is, we(s.title), 1),
                      y("ul", as, [
                        (z(!0),
                        U(
                          fe,
                          null,
                          Ue(
                            s.links,
                            (r) => (
                              z(),
                              U("li", { key: r.label }, [
                                y(
                                  "a",
                                  {
                                    href: "#",
                                    "data-cursor-hover": "",
                                    class:
                                      "text-sm text-gray-500 transition-colors hover:text-blue-600",
                                    onClick: $e(
                                      (l) => H(t)(r.href),
                                      ["prevent"],
                                    ),
                                  },
                                  we(r.label),
                                  9,
                                  ls,
                                ),
                              ])
                            ),
                          ),
                          128,
                        )),
                      ]),
                    ])
                  ),
                ),
                128,
              )),
            ]),
            y("div", cs, [
              y("p", null, we(H(Ge).legal), 1),
              o[0] ||
                (o[0] = y(
                  "div",
                  { class: "flex gap-6" },
                  [
                    y(
                      "a",
                      {
                        href: "#",
                        "data-cursor-hover": "",
                        class: "hover:text-gray-700",
                      },
                      "Twitter",
                    ),
                    y(
                      "a",
                      {
                        href: "#",
                        "data-cursor-hover": "",
                        class: "hover:text-gray-700",
                      },
                      "LinkedIn",
                    ),
                    y(
                      "a",
                      {
                        href: "#",
                        "data-cursor-hover": "",
                        class: "hover:text-gray-700",
                      },
                      "Discord",
                    ),
                  ],
                  -1,
                )),
            ]),
          ]),
        ])
      );
    },
  },
  hs = { class: "relative pt-12" },
  ds = {
    __name: "DefaultLayout",
    setup(e) {
      return (t, n) => (
        z(),
        U(
          fe,
          null,
          [Q(Yo), y("main", hs, [Q($o), fn(t.$slots, "default")]), Q(us)],
          64,
        )
      );
    },
  },
  ps = { class: "font-semibold" },
  fs = {
    __name: "ContactWidget",
    setup(e) {
      const t = te(!1),
        n = te(null),
        o = te(null),
        s = () => {
          t.value = !t.value;
        },
        r = (u) => {
          n.value?.contains(u.target) ||
            o.value?.contains(u.target) ||
            (t.value = !1);
        },
        l = (u) => {
          u.key === "Escape" && (t.value = !1);
        };
      return (
        Oe(() => {
          (window.addEventListener("click", r),
            window.addEventListener("keydown", l));
        }),
        mn(() => {
          (window.removeEventListener("click", r),
            window.removeEventListener("keydown", l));
        }),
        (u, i) => (
          z(),
          U(
            fe,
            null,
            [
              y(
                "div",
                {
                  ref_key: "widget",
                  ref: n,
                  class: "fixed bottom-6 right-6 z-[999999]",
                },
                [
                  y(
                    "button",
                    {
                      type: "button",
                      onClick: $e(s, ["stop"]),
                      class:
                        "group flex items-center gap-3 rounded-full bg-[#0f2d2d] px-6 py-4 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105",
                    },
                    [
                      i[0] ||
                        (i[0] = y(
                          "span",
                          {
                            class:
                              "h-3 w-3 rounded-full bg-green-400 animate-pulse",
                          },
                          null,
                          -1,
                        )),
                      y("span", ps, we(t.value ? "Close" : "Talk to us"), 1),
                    ],
                  ),
                ],
                512,
              ),
              (z(),
              je(yn, { to: "body" }, [
                Q(
                  gn,
                  {
                    "enter-active-class":
                      "transition-all duration-300 ease-out",
                    "enter-from-class": "opacity-0 translate-y-6 scale-95",
                    "enter-to-class": "opacity-100 translate-y-0 scale-100",
                    "leave-active-class": "transition-all duration-200 ease-in",
                    "leave-from-class": "opacity-100 translate-y-0 scale-100",
                    "leave-to-class": "opacity-0 translate-y-6 scale-95",
                  },
                  {
                    default: se(() => [
                      t.value
                        ? (z(),
                          U(
                            "div",
                            {
                              key: 0,
                              ref_key: "panel",
                              ref: o,
                              class:
                                "fixed bottom-24 right-6 z-[999999] w-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,.22)]",
                            },
                            [
                              ...(i[1] ||
                                (i[1] = [
                                  y(
                                    "div",
                                    { class: "p-6" },
                                    [
                                      y(
                                        "p",
                                        {
                                          class:
                                            "text-xs font-semibold uppercase tracking-[0.18em] text-amber-600",
                                        },
                                        " GET IN TOUCH ",
                                      ),
                                      y(
                                        "h3",
                                        {
                                          class:
                                            "mt-2 text-2xl font-bold text-slate-900",
                                        },
                                        " Talk to CryptoLearner ",
                                      ),
                                      y(
                                        "p",
                                        {
                                          class:
                                            "mt-3 text-sm leading-6 text-slate-500",
                                        },
                                        " Questions, corrections or feedback? We usually reply within one business day. ",
                                      ),
                                    ],
                                    -1,
                                  ),
                                  y(
                                    "a",
                                    {
                                      href: "tel:+18005551234",
                                      class:
                                        "flex items-center gap-4 border-t p-5 transition hover:bg-slate-50",
                                    },
                                    [
                                      y(
                                        "div",
                                        {
                                          class:
                                            "flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl",
                                        },
                                        " 📞 ",
                                      ),
                                      y("div", null, [
                                        y(
                                          "h4",
                                          { class: "font-semibold" },
                                          "Call Us",
                                        ),
                                        y(
                                          "p",
                                          { class: "text-sm text-slate-500" },
                                          "+1 (800) 555-1234",
                                        ),
                                      ]),
                                    ],
                                    -1,
                                  ),
                                  y(
                                    "a",
                                    {
                                      href: "https://wa.me/919999999999",
                                      target: "_blank",
                                      class:
                                        "flex items-center gap-4 border-t p-5 transition hover:bg-slate-50",
                                    },
                                    [
                                      y(
                                        "div",
                                        {
                                          class:
                                            "flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-xl",
                                        },
                                        " 💬 ",
                                      ),
                                      y("div", null, [
                                        y(
                                          "h4",
                                          { class: "font-semibold" },
                                          "WhatsApp",
                                        ),
                                        y(
                                          "p",
                                          { class: "text-sm text-slate-500" },
                                          "Usually replies within an hour",
                                        ),
                                      ]),
                                    ],
                                    -1,
                                  ),
                                  y(
                                    "a",
                                    {
                                      href: "mailto:support@cryptolearner.us",
                                      class:
                                        "flex items-center gap-4 border-t p-5 transition hover:bg-slate-50",
                                    },
                                    [
                                      y(
                                        "div",
                                        {
                                          class:
                                            "flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-xl",
                                        },
                                        " ✉️ ",
                                      ),
                                      y("div", null, [
                                        y(
                                          "h4",
                                          { class: "font-semibold" },
                                          "Email Us",
                                        ),
                                        y(
                                          "p",
                                          { class: "text-sm text-slate-500" },
                                          "support@cryptolearner.us",
                                        ),
                                      ]),
                                    ],
                                    -1,
                                  ),
                                  y(
                                    "div",
                                    {
                                      class:
                                        "border-t bg-slate-50 p-4 text-xs leading-5 text-slate-500",
                                    },
                                    " We never ask for wallet keys, passwords or payments over chat. ",
                                    -1,
                                  ),
                                ])),
                            ],
                            512,
                          ))
                        : Fe("", !0),
                    ]),
                    _: 1,
                  },
                ),
              ])),
            ],
            64,
          )
        )
      );
    },
  },
  ms = {
    __name: "App",
    setup(e) {
      const t = {
          default: ds,
          admin: rt(() =>
            A(
              () => import("./AdminLayout-CVi-HCUf.js"),
              __vite__mapDeps([0, 1, 2, 3, 4, 5]),
            ),
          ),
          auth: rt(() =>
            A(
              () => import("./AuthLayout-Cfgo1xZV.js"),
              __vite__mapDeps([6, 7, 4]),
            ),
          ),
        },
        n = ot(),
        o = X(() => t[n.meta.layout || "default"]),
        s = X(() => (n.meta.layout || "default") === "default"),
        { start: r } = tn();
      return (
        Oe(() => {
          r();
        }),
        (l, u) => {
          const i = vn("RouterView");
          return (
            z(),
            U(
              fe,
              null,
              [
                s.value
                  ? (z(),
                    U(
                      fe,
                      { key: 0 },
                      [
                        Q(qo),
                        u[0] || (u[0] = y("div", { class: "grain" }, null, -1)),
                      ],
                      64,
                    ))
                  : Fe("", !0),
                (z(),
                je(wn(o.value), null, { default: se(() => [Q(i)]), _: 1 })),
                s.value ? (z(), je(fs, { key: 1 })) : Fe("", !0),
              ],
              64,
            )
          );
        }
      );
    },
  },
  gs = [
    {
      path: "/",
      name: "home",
      component: () =>
        A(
          () => import("./Home-C7BCRS6H.js"),
          __vite__mapDeps([8, 9, 4, 10, 11, 5, 12, 13, 7, 14, 15, 16]),
        ),
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        A(
          () => import("./About-DMgcblQN.js"),
          __vite__mapDeps([17, 9, 4, 18, 5, 12, 13, 7, 14, 19]),
        ),
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        A(
          () => import("./Contact-CtDFjntg.js"),
          __vite__mapDeps([20, 9, 4, 12, 5, 18, 13, 7, 14, 2, 3, 11, 15]),
        ),
    },
    {
      path: "/blog",
      name: "blog",
      component: () =>
        A(
          () => import("./Blog-BboC2VET.js"),
          __vite__mapDeps([21, 4, 22, 23, 3, 2, 24, 9, 5, 7, 25, 26]),
        ),
    },
    {
      path: "/blog/:slug",
      name: "blog-details",
      component: () =>
        A(
          () => import("./BlogDetails-D8DJuINQ.js"),
          __vite__mapDeps([
            27, 22, 23, 3, 2, 28, 29, 30, 4, 9, 5, 12, 25, 31, 26, 32, 11, 33,
          ]),
        ),
    },
    {
      path: "/articles",
      name: "articles",
      component: () =>
        A(
          () => import("./Articles-CjjzE2hJ.js"),
          __vite__mapDeps([34, 35, 23, 3, 2, 24, 4, 9, 5, 29, 25, 26, 31, 7]),
        ),
    },
    {
      path: "/articles/:slug",
      name: "article-details",
      component: () =>
        A(
          () => import("./ArticleDetails-CEZtTjIZ.js"),
          __vite__mapDeps([
            36, 35, 23, 3, 2, 28, 29, 30, 4, 9, 5, 12, 25, 31, 26, 32, 11, 33,
          ]),
        ),
    },
    {
      path: "/admin/login",
      name: "admin-login",
      component: () =>
        A(
          () => import("./Login-lvy3JKww.js"),
          __vite__mapDeps([37, 4, 1, 2, 3, 5, 11]),
        ),
      meta: { layout: "auth" },
    },
    { path: "/admin", redirect: { name: "admin-dashboard" } },
    {
      path: "/admin/dashboard",
      name: "admin-dashboard",
      component: () =>
        A(
          () => import("./Dashboard-31KfQAV-.js"),
          __vite__mapDeps([38, 22, 23, 3, 2, 35, 29, 4]),
        ),
      meta: { layout: "admin", requiresAuth: !0 },
    },
    {
      path: "/admin/blogs",
      name: "admin-blogs",
      component: () =>
        A(
          () => import("./BlogList-DyT_SE6s.js"),
          __vite__mapDeps([39, 22, 23, 3, 2, 40, 4, 29, 41]),
        ),
      meta: { layout: "admin", requiresAuth: !0 },
    },
    {
      path: "/admin/blogs/new",
      name: "admin-blog-new",
      component: () =>
        A(
          () => import("./PostEditor-1NNdfsUh.js"),
          __vite__mapDeps([
            42, 4, 29, 30, 22, 23, 3, 2, 35, 43, 44, 25, 7, 5, 45,
          ]),
        ),
      props: { postType: "blog" },
      meta: { layout: "admin", requiresAuth: !0 },
    },
    {
      path: "/admin/blogs/:id/edit",
      name: "admin-blog-edit",
      component: () =>
        A(
          () => import("./PostEditor-1NNdfsUh.js"),
          __vite__mapDeps([
            42, 4, 29, 30, 22, 23, 3, 2, 35, 43, 44, 25, 7, 5, 45,
          ]),
        ),
      props: (e) => ({ postType: "blog", id: e.params.id }),
      meta: { layout: "admin", requiresAuth: !0 },
    },
    {
      path: "/admin/articles",
      name: "admin-articles",
      component: () =>
        A(
          () => import("./ArticleList-CnszwBK0.js"),
          __vite__mapDeps([46, 35, 23, 3, 2, 40, 4, 29, 41]),
        ),
      meta: { layout: "admin", requiresAuth: !0 },
    },
    {
      path: "/admin/articles/new",
      name: "admin-article-new",
      component: () =>
        A(
          () => import("./PostEditor-1NNdfsUh.js"),
          __vite__mapDeps([
            42, 4, 29, 30, 22, 23, 3, 2, 35, 43, 44, 25, 7, 5, 45,
          ]),
        ),
      props: { postType: "article" },
      meta: { layout: "admin", requiresAuth: !0 },
    },
    {
      path: "/admin/articles/:id/edit",
      name: "admin-article-edit",
      component: () =>
        A(
          () => import("./PostEditor-1NNdfsUh.js"),
          __vite__mapDeps([
            42, 4, 29, 30, 22, 23, 3, 2, 35, 43, 44, 25, 7, 5, 45,
          ]),
        ),
      props: (e) => ({ postType: "article", id: e.params.id }),
      meta: { layout: "admin", requiresAuth: !0 },
    },
    {
      path: "/admin/guides",
      name: "admin-guides",
      component: () =>
        A(
          () => import("./GuideCardList-C7hGKaGA.js"),
          __vite__mapDeps([47, 32, 4, 43, 44, 3, 2, 41]),
        ),
      meta: { layout: "admin", requiresAuth: !0 },
    },
    {
      path: "/admin/guides/new",
      name: "admin-guide-new",
      component: () =>
        A(
          () => import("./GuideCardEditor-DUdiL73C.js"),
          __vite__mapDeps([48, 4, 29, 43, 44, 3, 2, 5]),
        ),
      meta: { layout: "admin", requiresAuth: !0 },
    },
    {
      path: "/admin/guides/:id/edit",
      name: "admin-guide-edit",
      component: () =>
        A(
          () => import("./GuideCardEditor-DUdiL73C.js"),
          __vite__mapDeps([48, 4, 29, 43, 44, 3, 2, 5]),
        ),
      props: (e) => ({ id: e.params.id }),
      meta: { layout: "admin", requiresAuth: !0 },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () =>
        A(
          () => import("./NotFound-BaiexJ35.js"),
          __vite__mapDeps([49, 9, 4, 11, 5]),
        ),
    },
    {
      path: "/getting-started",
      name: "getting-started",
      component: () =>
        A(
          () => import("./Learn-CVKoM3N9.js"),
          __vite__mapDeps([50, 51, 52, 44, 3, 2, 35, 23, 4, 7, 5]),
        ),
    },
    {
      path: "/safety",
      name: "safety",
      component: () =>
        A(
          () => import("./Safety-B0Eq-9wZ.js"),
          __vite__mapDeps([53, 51, 52, 44, 3, 2, 35, 23, 4, 7, 5]),
        ),
    },
    {
      path: "/coins",
      name: "coins",
      component: () =>
        A(
          () => import("./coin-Djgh7cPO.js"),
          __vite__mapDeps([54, 51, 52, 44, 3, 2, 35, 23, 4, 7, 5]),
        ),
    },
    {
      path: "/exchanges",
      name: "exchanges",
      component: () =>
        A(
          () => import("./Exchanges-CAVdellY.js"),
          __vite__mapDeps([55, 51, 52, 44, 3, 2, 35, 23, 4, 7, 5]),
        ),
    },
    {
      path: "/taxes",
      name: "taxes",
      component: () =>
        A(
          () => import("./Taxes-BA-61xMO.js"),
          __vite__mapDeps([56, 51, 52, 44, 3, 2, 35, 23, 4, 7, 5]),
        ),
    },
    {
      path: "/glossary",
      name: "glossary",
      component: () =>
        A(
          () => import("./Glossary-BlJviL21.js"),
          __vite__mapDeps([57, 4, 52, 44, 3, 2, 35, 23, 5]),
        ),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () =>
        A(() => import("./Privacy-_n2TGdNR.js"), __vite__mapDeps([58, 4])),
    },
    {
      path: "/terms",
      name: "terms",
      component: () =>
        A(() => import("./Terms-B-3zeaOX.js"), __vite__mapDeps([59, 4])),
    },
    {
      path: "/disclosures",
      name: "disclosures",
      component: () =>
        A(() => import("./Disclosures-Dq8gRuaz.js"), __vite__mapDeps([60, 4])),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () =>
        A(() => import("./Privacy-_n2TGdNR.js"), __vite__mapDeps([58, 4])),
    },
    {
      path: "/terms",
      name: "terms",
      component: () =>
        A(() => import("./Terms-B-3zeaOX.js"), __vite__mapDeps([59, 4])),
    },
    {
      path: "/disclosures",
      name: "disclosures",
      component: () =>
        A(() => import("./Disclosures-Dq8gRuaz.js"), __vite__mapDeps([60, 4])),
    },
  ],
  sn = Wo({
    history: mo(),
    routes: gs,
    scrollBehavior(e, t, n) {
      return n || (e.hash ? { el: e.hash, behavior: "smooth" } : { top: 0 });
    },
  });
sn.beforeEach(async (e) => {
  if (!e.meta.requiresAuth) return !0;
  try {
    const { useAuthStore: t } = await A(
        async () => {
          const { useAuthStore: o } = await import("./auth-DHkUmAG_.js");
          return { useAuthStore: o };
        },
        __vite__mapDeps([1, 2, 3, 4, 5]),
      ),
      n = t();
    return (
      await n.ensureLoaded(),
      n.isAuthenticated
        ? !0
        : { name: "admin-login", query: { redirect: e.fullPath } }
    );
  } catch {
    return { name: "admin-login", query: { redirect: e.fullPath } };
  }
});
_n(ms).use(xn()).use(sn).mount("#app");
export {
  Bs as A,
  qs as B,
  Hs as C,
  xs as D,
  ws as E,
  A as _,
  Zt as a,
  nn as b,
  Gs as c,
  Us as d,
  tn as e,
  bs as f,
  Ss as g,
  _s as h,
  ks as i,
  As as j,
  Ts as k,
  Es as l,
  Os as m,
  Cs as n,
  Is as o,
  Rs as p,
  Ns as q,
  Ds as r,
  Ws as s,
  js as t,
  ot as u,
  Ms as v,
  Vs as w,
  Ls as x,
  zs as y,
  Ps as z,
};
