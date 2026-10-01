import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Where the backend finds the untouched client index.html (see
// onBeforePageRender below). Inside dist/.vite, which is never served.
const TEMPLATE_FILE = fileURLToPath(
  new URL("./dist/.vite/index.template.html", import.meta.url),
);

let templateWritten = false;

// `npm run build` runs two builds from this config:
//   vite-ssg build                          → dist/ (client + static pages)
//   vite build --ssr ... --mode backend     → backend/ssr (server bundle that
//                                              renders articles from Firestore)
export default defineConfig(({ mode }) => {
  const backend = mode === "backend";

  return {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // Not in Vue's HTML tag list, so it would otherwise compile as an
            // unresolved component and be missing from server-rendered HTML.
            isCustomElement: (tag) => tag === "marquee",
          },
        },
      }),
    ],

    build: backend
      ? {
          outDir: "backend/ssr",
          emptyOutDir: true,
          copyPublicDir: false,
          target: "node18",
          rollupOptions: {
            // .mjs so the CommonJS backend can import() the ESM bundle.
            output: {
              entryFileNames: "[name].mjs",
              chunkFileNames: "chunks/[name]-[hash].mjs",
            },
          },
        }
      : {
          target: "esnext",
          cssCodeSplit: true,

          rollupOptions: {
            output: {
              manualChunks(id) {
                if (id.includes("node_modules")) {
                  if (id.includes("three")) return "three";
                  if (id.includes("firebase")) return "firebase";
                  if (id.includes("gsap")) return "gsap";
                  if (id.includes("@tiptap")) return "tiptap";
                }
              },
            },
          },
        },

    ssr: backend
      ? {
          // Self-contained bundle: backend/ needs no frontend dependencies.
          noExternal: true,
        }
      : {
          noExternal: [
            "three",
            "gsap",
            "firebase",
            "@tiptap/vue-3",
            "@tiptap/starter-kit",
            "@tiptap/extension-link",
            "@tiptap/extension-image",
            "@tiptap/extension-underline",
            "@tiptap/extension-youtube",
            "@tiptap/extension-table",
            "@tiptap/extension-table-row",
            "@tiptap/extension-table-cell",
            "@tiptap/extension-table-header",
            "@tiptap/extension-placeholder",
          ],
        },

    ssgOptions: {
      // dist/about/index.html instead of dist/about.html
      dirStyle: "nested",
      // Browser globals (window/document) while prerendering.
      mock: true,
      // Static pages only. Articles, blog posts, pages, categories and tags
      // are rendered per request by the Express backend from Firestore.
      includedRoutes: (paths) =>
        paths.filter((p) => !p.includes(":") && !p.startsWith("/admin")),
      onBeforePageRender(route, indexHTML) {
        if (!templateWritten) {
          templateWritten = true;
          mkdirSync(fileURLToPath(new URL("./dist/.vite", import.meta.url)), {
            recursive: true,
          });
          writeFileSync(TEMPLATE_FILE, indexHTML);
        }
        return indexHTML;
      },
    },
  };
});
