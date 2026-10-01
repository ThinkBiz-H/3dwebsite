const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { ssrDir, siteUrl } = require("../config");
const contentService = require("./contentService");
const { installBrowserGlobals } = require("../utils/browserGlobals");
const { renderDocument, renderPreloadLinks } = require("../utils/htmlTemplate");

const ENTRY = path.join(ssrDir, "entry-server.mjs");

let bundlePromise = null;

/**
 * The Vue server bundle (backend/ssr/entry-server.mjs), loaded once. A new
 * `npm run build` needs an app restart to load the new bundle (in cPanel:
 * "Restart" on the Node.js app).
 */
function getBundle() {
  bundlePromise ??= (async () => {
    installBrowserGlobals(siteUrl);
    const bundle = await import(pathToFileURL(ENTRY).href);
    bundle.setServerDataSource(contentService);
    return bundle;
  })().catch((err) => {
    bundlePromise = null;
    throw err;
  });
  return bundlePromise;
}

/** Renders one URL from Firestore into a complete HTML document. */
async function renderUrl(url) {
  const { render } = await getBundle();
  const result = await render(url);

  if (result.redirect) return { redirect: result.redirect };

  return {
    statusCode: result.statusCode,
    html: renderDocument({
      head: result.head,
      preloadLinks: renderPreloadLinks(result.modules),
      appHtml: result.appHtml,
      state: result.state,
    }),
  };
}

module.exports = { renderUrl, getBundle, ENTRY };
