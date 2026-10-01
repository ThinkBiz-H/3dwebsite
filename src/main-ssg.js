import { ViteSSG } from "vite-ssg";
import { createPinia } from "pinia";
import App from "./App.vue";
import { routerOptions, installGuards } from "./router";
import { defaultHead } from "./composables/useSeoMeta";
import { PRERENDER_STATE } from "./composables/serverData";

import "./style.css";
import "./assets/article-content.css";

// Single entry for both `vite` (dev) and `vite-ssg build` (production).
// ViteSSG creates the router from routerOptions, so scrollBehavior and the
// auth guard are identical in dev, prerender and the hydrated client.
export const createApp = ViteSSG(
  App,
  routerOptions,
  ({ app, router, head, initialState, isClient }) => {
    app.use(createPinia());

    // Site-wide <head> fallbacks; pages override them via useSeoMeta.
    head.push(defaultHead());

    // initialState is serialised into each server-rendered page and handed
    // back on hydration — article pages use it so the browser starts from
    // the exact data the HTML was rendered from, without reading Firestore.
    app.provide(PRERENDER_STATE, initialState);

    // The auth check needs the Firebase client session, which doesn't exist
    // while prerendering.
    if (isClient) installGuards(router);
  },
);
