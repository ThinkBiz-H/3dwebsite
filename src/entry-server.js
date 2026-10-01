import { renderToString } from "vue/server-renderer";
import { renderSSRHead } from "@unhead/vue/server";
import { createApp } from "./main-ssg";

export { setServerDataSource } from "./composables/serverData";

/**
 * Server bundle for the Express backend (built by `npm run build` into
 * backend/ssr). Renders the same app vite-ssg prerenders — same router,
 * head defaults and initialState — so a page rendered here hydrates in the
 * browser exactly like a prerendered one.
 */
export async function render(url) {
  const { app, router, head, initialState } = await createApp(url);

  const route = router.currentRoute.value;
  if (route.redirectedFrom) {
    return { redirect: route.fullPath };
  }

  const ctx = {};
  const appHtml = await renderToString(app, ctx);
  const headPayload = await renderSSRHead(head);

  return {
    statusCode: ctx.statusCode || (route.name === "not-found" ? 404 : 200),
    appHtml,
    head: headPayload,
    modules: [...(ctx.modules || [])],
    state: serializeState(initialState),
  };
}

// vite-ssg's own format (window.__INITIAL_STATE__ holds a JSON string),
// which the browser side of vite-ssg already knows how to read.
// Built from a string: as a regex literal, the bundler emits the two line
// separators as raw characters, which then can't be parsed.
const UNSAFE_CHARS = new RegExp("[<>/\\u2028\\u2029]", "g");
const ESCAPED = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  " ": "\\u2028",
  " ": "\\u2029",
};

function serializeState(state) {
  if (!state || Object.keys(state).length === 0) return null;
  return JSON.stringify(JSON.stringify(state)).replace(UNSAFE_CHARS, (c) => ESCAPED[c]);
}
