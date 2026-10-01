import { useHead } from "@unhead/vue";

const SITE_NAME = "cryptolearner.us";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://cryptolearner.us";

const DEFAULT_IMAGE = `${SITE_URL}/og-default.png`;

/**
 * Site-wide fallbacks (the values index.html used to hard-code), pushed once
 * in main-ssg.js. Any page that calls useSeoMeta overrides them — unhead
 * dedupes title, canonical and each meta name/property, so a page never
 * ends up with two descriptions.
 */
export function defaultHead() {
  return {
    title:
      "CryptoLearner.us | Learn Cryptocurrency, Blockchain, Bitcoin & Web3 for Beginners",
    meta: [
      {
        name: "description",
        content:
          "Learn Cryptocurrency, Bitcoin, Blockchain, Ethereum, Web3, NFTs and DeFi through beginner-friendly guides, tutorials and educational resources. CryptoLearner.us makes crypto learning simple for everyone.",
      },
      {
        name: "keywords",
        content:
          "Cryptocurrency, Bitcoin, Blockchain, Ethereum, Web3, Learn Crypto, Crypto Tutorials, Crypto Education, Bitcoin Guide, DeFi, NFTs, Crypto News, Blockchain Technology",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CryptoLearner.us" },
      { property: "og:url", content: "https://www.cryptolearner.us" },
      {
        property: "og:title",
        content:
          "CryptoLearner.us | Learn Cryptocurrency, Blockchain, Bitcoin & Web3",
      },
      {
        property: "og:description",
        content:
          "Master Cryptocurrency, Bitcoin, Blockchain and Web3 with beginner-friendly tutorials, guides and educational resources.",
      },
      { property: "og:image", content: "https://www.cryptolearner.us/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "CryptoLearner.us | Learn Cryptocurrency, Blockchain, Bitcoin & Web3",
      },
      {
        name: "twitter:description",
        content:
          "Beginner-friendly Cryptocurrency and Blockchain learning platform.",
      },
      { name: "twitter:image", content: "https://www.cryptolearner.us/og-image.jpg" },
    ],
    link: [{ rel: "canonical", href: "https://www.cryptolearner.us" }],
  };
}

/**
 * Page-level SEO via vite-ssg's head manager: written into each prerendered
 * HTML file at build time and kept in sync in the browser on navigation.
 * `getMeta` may be a plain object or a getter that returns null while data
 * is still loading (site defaults apply).
 */
export function useSeoMeta(getMeta) {
  useHead(() => {
    const meta = typeof getMeta === "function" ? getMeta() : getMeta;

    if (!meta) return {};

    const title = meta.title ? `${meta.title} — ${SITE_NAME}` : SITE_NAME;
    const description = meta.description || "";
    const image = meta.image || DEFAULT_IMAGE;
    const url = meta.path ? `${SITE_URL}${meta.path}` : SITE_URL;
    const canonical = meta.canonical || url;
    const type = meta.type || "website";

    const tags = [
      { name: "description", content: description },
      { name: "keywords", content: meta.keywords },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:site_name", content: SITE_NAME },
      { property: "article:published_time", content: meta.publishedTime },
      { property: "article:modified_time", content: meta.modifiedTime },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ];

    return {
      title,
      // An empty content="" is worse than no tag at all.
      meta: tags.filter((t) => t.content),
      link: [{ rel: "canonical", href: canonical }],
      script: meta.jsonLd
        ? [
            {
              key: "seo-jsonld",
              type: "application/ld+json",
              // Escaped so article text can never close the script tag.
              innerHTML: JSON.stringify(meta.jsonLd).replace(/</g, "\\u003c"),
            },
          ]
        : [],
    };
  });
}

export { SITE_NAME, SITE_URL };
