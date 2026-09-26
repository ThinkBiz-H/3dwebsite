import { watchEffect } from "vue";

const SITE_NAME = "cryptolearner.us";
const SITE_URL = import.meta.env.VITE_SITE_URL || "https://lumenledger.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-default.png`;

function setTag(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith("link") ? "link" : "meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
}

function setMeta(name, content, { property = false } = {}) {
  const attr = property ? "property" : "name";
  const selector = `meta[${attr}="${name}"]`;
  if (!content) {
    document.head.querySelector(selector)?.remove();
    return;
  }
  setTag(selector, { [attr]: name, content });
}

function setJsonLd(data) {
  let el = document.head.querySelector("script#seo-jsonld");
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.id = "seo-jsonld";
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Hand-rolled head management (no vue-meta/unhead dependency): this is a
 * client-rendered SPA, so these tags exist for browser tabs, share-card
 * scrapers that execute JS, and to keep canonical/OG data correct as
 * routes change — not as a substitute for SSR meta rendering.
 *
 * `meta` can be a reactive object/ref/getter; the effect re-applies tags
 * whenever it changes (e.g. once a blog post finishes loading).
 */
export function useSeoMeta(getMeta) {
  watchEffect(() => {
    const meta = typeof getMeta === "function" ? getMeta() : getMeta;
    if (!meta) return;

    const title = meta.title ? `${meta.title} — ${SITE_NAME}` : SITE_NAME;
    const description = meta.description || "";
    const image = meta.image || DEFAULT_IMAGE;
    const url = meta.path ? `${SITE_URL}${meta.path}` : SITE_URL;
    const canonical = meta.canonical || url;
    const type = meta.type || "website";

    document.title = title;

    setMeta("description", description);
    setMeta("keywords", meta.keywords || "");
    setTag('link[rel="canonical"]', { rel: "canonical", href: canonical });

    setMeta("og:title", title, { property: true });
    setMeta("og:description", description, { property: true });
    setMeta("og:type", type, { property: true });
    setMeta("og:url", url, { property: true });
    setMeta("og:image", image, { property: true });
    setMeta("og:site_name", SITE_NAME, { property: true });

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    setJsonLd(meta.jsonLd || null);
  });
}

export { SITE_NAME, SITE_URL };
