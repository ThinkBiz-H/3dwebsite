import {
  x as s,
  y as a,
  u,
  F as f,
  A as b,
  z as e,
  C as p,
  D as g,
  H as y,
  L as k,
  q as w,
  J as _,
  R as C,
  E as v,
  G,
  T,
  r as x,
} from "./tiptap-B0PErQl-.js";
import { a as E } from "./index-D0rl9vmW.js";
import { u as S } from "./useGuideCards-DDAD0la4.js";
import "./gsap-CsIHAh4p.js";
import "./guideCards-D5SZWSiG.js";
import "./config-CwUMGsKi.js";
import "./firebase-CYV2rnSx.js";
import "./articles-DyBiAF-H.js";
import "./posts-CUkwZQsp.js";
const R = { key: 0, class: "grid md:grid-cols-2 gap-4" },
  L = {
    key: 1,
    class:
      "rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800",
  },
  N = {
    key: 2,
    class:
      "rounded-2xl border border-sky-100 bg-white px-6 py-10 text-center text-sm text-slate-500",
  },
  $ = { key: 3, class: "grid md:grid-cols-2 gap-4" },
  j = ["onClick"],
  V = { class: "text-slate-600 leading-7" },
  z = {
    key: 0,
    class:
      "mt-3 inline-flex items-center gap-1 text-sm font-medium text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity",
  },
  F = {
    __name: "GlossaryCardGrid",
    props: { category: { type: String, required: !0 } },
    setup(h) {
      const l = h,
        i = E(),
        { cards: o, loading: m, error: d } = S(l.category);
      function c(t) {
        t.article && i.push(`/articles/${t.article.slug}`);
      }
      return (t, n) => (
        s(),
        a("div", null, [
          u(m)
            ? (s(),
              a("div", R, [
                (s(),
                a(
                  f,
                  null,
                  b(6, (r) =>
                    e(
                      "div",
                      {
                        key: r,
                        class:
                          "rounded-2xl border border-sky-100 bg-white p-6 shadow-sm",
                        role: "presentation",
                        "aria-hidden": "true",
                      },
                      [
                        ...(n[0] ||
                          (n[0] = [
                            e(
                              "div",
                              {
                                class:
                                  "skeleton-shimmer h-5 w-1/2 rounded-full",
                              },
                              null,
                              -1,
                            ),
                            e(
                              "div",
                              {
                                class:
                                  "skeleton-shimmer mt-3 h-3.5 w-full rounded-full",
                              },
                              null,
                              -1,
                            ),
                            e(
                              "div",
                              {
                                class:
                                  "skeleton-shimmer mt-2 h-3.5 w-3/4 rounded-full",
                              },
                              null,
                              -1,
                            ),
                          ])),
                      ],
                    ),
                  ),
                  64,
                )),
              ]))
            : u(d)
              ? (s(), a("p", L, p(u(d)), 1))
              : u(o).length
                ? (s(),
                  a("div", $, [
                    (s(!0),
                    a(
                      f,
                      null,
                      b(
                        u(o),
                        (r) => (
                          s(),
                          a(
                            "article",
                            {
                              key: r.id,
                              class: g([
                                "group bg-white border border-sky-100 rounded-2xl p-6 shadow-sm transition-all duration-200",
                                r.article
                                  ? "cursor-pointer hover:shadow-md hover:border-sky-300 hover:-translate-y-0.5"
                                  : "",
                              ]),
                              onClick: (A) => c(r),
                            },
                            [
                              e(
                                "h3",
                                {
                                  class: g([
                                    "text-xl font-semibold text-slate-900 font-['Space_Grotesk'] mb-2 transition-colors",
                                    r.article && "group-hover:text-sky-700",
                                  ]),
                                },
                                p(r.title),
                                3,
                              ),
                              e("p", V, p(r.description), 1),
                              r.article
                                ? (s(),
                                  a("div", z, [
                                    ...(n[1] ||
                                      (n[1] = [
                                        y(" Read more ", -1),
                                        e(
                                          "span",
                                          { "aria-hidden": "true" },
                                          "→",
                                          -1,
                                        ),
                                      ])),
                                  ]))
                                : k("", !0),
                            ],
                            10,
                            j,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]))
                : (s(), a("p", N, " New terms are added regularly. ")),
        ])
      );
    },
  },
  q = {
    class:
      "min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-white text-slate-800",
  },
  B = { class: "px-6 py-16 border-t border-sky-100" },
  W = { class: "max-w-5xl mx-auto" },
  K = {
    __name: "Glossary",
    setup(h) {
      const l = x(!1),
        i = x(null),
        o = x(null),
        m = () => {
          l.value = !l.value;
        },
        d = (c) => {
          if (!l.value) return;
          const t = o.value && o.value.contains(c.target),
            n = i.value && i.value.contains(c.target);
          !t && !n && (l.value = !1);
        };
      return (
        w(() => document.addEventListener("click", d)),
        _(() => document.removeEventListener("click", d)),
        (c, t) => (
          s(),
          a("main", q, [
            t[4] ||
              (t[4] = C(
                '<section class="relative overflow-hidden px-6 pt-20 pb-16"><div class="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl"></div><div class="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"></div><div class="relative max-w-5xl mx-auto"><span class="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-sky-700 bg-sky-100 border border-sky-200 px-3 py-1 rounded-full"> Glossary </span><h1 class="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-[&#39;Space_Grotesk&#39;]"> Crypto has its own language. <span class="text-sky-600">Here&#39;s the dictionary.</span></h1><p class="mt-6 text-lg text-slate-600 leading-8 max-w-3xl"> Every industry develops its own shorthand, and crypto has more of it than most. This section is a running list of terms you&#39;ll run into everywhere else on this site (and across the internet), each explained in one or two plain sentences. </p><div class="mt-8 inline-flex items-start gap-3 bg-white/70 backdrop-blur border border-sky-200 rounded-xl px-5 py-4 shadow-sm"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white text-xs font-bold"> i </span><p class="text-sm text-slate-600 leading-6"><strong class="text-slate-800">Who this is for:</strong> anyone who hits an unfamiliar word mid-article and wants a fast, clear answer — no searching required. </p></div></div></section>',
                1,
              )),
            e("section", B, [
              e("div", W, [
                t[0] ||
                  (t[0] = e(
                    "div",
                    { class: "flex items-end justify-between mb-10" },
                    [
                      e(
                        "h2",
                        {
                          class:
                            "text-3xl font-bold text-slate-900 font-['Space_Grotesk']",
                        },
                        " Sample Entries ",
                      ),
                    ],
                    -1,
                  )),
                v(F, { category: "glossary" }),
                t[1] ||
                  (t[1] = e(
                    "div",
                    {
                      class:
                        "mt-10 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 text-amber-900 leading-7",
                    },
                    [
                      e("strong", { class: "text-amber-800" }, "Living page:"),
                      y(
                        " This glossary is a living page — new terms are added as they come up across our guides. If you searched for a term and didn't find it here, use the “Talk to us” button and we'll add it. ",
                      ),
                      e("b", null, "Talk to us"),
                      y(" button. "),
                    ],
                    -1,
                  )),
              ]),
            ]),
            v(
              T,
              {
                "enter-active-class": "transition duration-300 ease-out",
                "enter-from-class": "translate-y-4 opacity-0",
                "enter-to-class": "translate-y-0 opacity-100",
                "leave-active-class": "transition duration-200 ease-in",
                "leave-from-class": "translate-y-0 opacity-100",
                "leave-to-class": "translate-y-4 opacity-0",
              },
              {
                default: G(() => [
                  l.value
                    ? (s(),
                      a(
                        "div",
                        {
                          key: 0,
                          ref_key: "panelRef",
                          ref: o,
                          class:
                            "fixed bottom-24 right-6 z-50 w-[22rem] max-w-[calc(100vw-3rem)] rounded-2xl bg-white border border-sky-200 shadow-2xl shadow-sky-200/50 overflow-hidden",
                        },
                        [
                          ...(t[2] ||
                            (t[2] = [
                              e(
                                "div",
                                {
                                  class:
                                    "bg-gradient-to-br from-sky-500 to-blue-600 px-6 py-5 text-white",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      class:
                                        "text-xs uppercase tracking-widest text-sky-100 font-semibold",
                                    },
                                    " Get in touch ",
                                  ),
                                  e(
                                    "h4",
                                    {
                                      class:
                                        "mt-1 text-lg font-semibold font-['Space_Grotesk']",
                                    },
                                    " Talk to CryptoLearner ",
                                  ),
                                  e(
                                    "p",
                                    {
                                      class:
                                        "mt-1 text-sm text-sky-50/90 leading-6",
                                    },
                                    " Questions, corrections, or feedback on a guide — we read every message ourselves. ",
                                  ),
                                ],
                                -1,
                              ),
                              e(
                                "div",
                                { class: "p-4 space-y-2" },
                                [
                                  e(
                                    "a",
                                    {
                                      class:
                                        "flex items-center gap-3 rounded-xl p-3 hover:bg-sky-50 transition-colors",
                                      href: "tel:+18005551234",
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          class:
                                            "flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 text-lg",
                                        },
                                        " ☎ ",
                                      ),
                                      e("div", { class: "text-sm" }, [
                                        e(
                                          "b",
                                          { class: "block text-slate-800" },
                                          "Call us",
                                        ),
                                        e(
                                          "span",
                                          { class: "text-slate-500" },
                                          " +1 (800) 555-1234 · Mon–Fri, 9am–6pm ET ",
                                        ),
                                      ]),
                                    ],
                                  ),
                                  e(
                                    "a",
                                    {
                                      class:
                                        "flex items-center gap-3 rounded-xl p-3 hover:bg-sky-50 transition-colors",
                                      href: "https://wa.me/18005551234",
                                      target: "_blank",
                                      rel: "noopener",
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          class:
                                            "flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 text-lg",
                                        },
                                        " 💬 ",
                                      ),
                                      e("div", { class: "text-sm" }, [
                                        e(
                                          "b",
                                          { class: "block text-slate-800" },
                                          "Chat on WhatsApp",
                                        ),
                                        e(
                                          "span",
                                          { class: "text-slate-500" },
                                          "Usually replies within an hour",
                                        ),
                                      ]),
                                    ],
                                  ),
                                  e(
                                    "a",
                                    {
                                      class:
                                        "flex items-center gap-3 rounded-xl p-3 hover:bg-sky-50 transition-colors",
                                      href: "mailto:support@cryptolearner.us",
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          class:
                                            "flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 text-lg",
                                        },
                                        " ✉ ",
                                      ),
                                      e("div", { class: "text-sm" }, [
                                        e(
                                          "b",
                                          { class: "block text-slate-800" },
                                          "Email us",
                                        ),
                                        e(
                                          "span",
                                          { class: "text-slate-500" },
                                          "support@cryptolearner.us",
                                        ),
                                      ]),
                                    ],
                                  ),
                                ],
                                -1,
                              ),
                              e(
                                "div",
                                {
                                  class:
                                    "border-t border-sky-100 bg-sky-50/60 px-5 py-3",
                                },
                                [
                                  e(
                                    "p",
                                    {
                                      class: "text-xs text-slate-500 leading-5",
                                    },
                                    " We never ask for wallet keys, passwords, or payment over chat. ",
                                  ),
                                ],
                                -1,
                              ),
                            ])),
                        ],
                        512,
                      ))
                    : k("", !0),
                ]),
                _: 1,
              },
            ),
            e(
              "button",
              {
                ref_key: "fabRef",
                ref: i,
                class:
                  "fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 px-5 py-3 text-white font-medium shadow-lg shadow-sky-300/50 hover:shadow-xl hover:shadow-sky-400/50 hover:-translate-y-0.5 transition-all",
                onClick: m,
              },
              [
                t[3] ||
                  (t[3] = e(
                    "span",
                    { class: "relative flex h-2 w-2" },
                    [
                      e("span", {
                        class:
                          "absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75",
                      }),
                      e("span", {
                        class:
                          "relative inline-flex h-2 w-2 rounded-full bg-white",
                      }),
                    ],
                    -1,
                  )),
                e("span", null, p(l.value ? "Close" : "Talk to us"), 1),
              ],
              512,
            ),
          ])
        )
      );
    },
  };
export { K as default };
