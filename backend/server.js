const fs = require("node:fs");
const express = require("express");
const compression = require("compression");

const { port, distDir } = require("./config");
const { TEMPLATE_FILE, MANIFEST_FILE } = require("./utils/htmlTemplate");
const { ENTRY, getBundle } = require("./services/renderService");
const securityHeaders = require("./middlewares/securityHeaders");
const trailingSlash = require("./middlewares/trailingSlash");
const staticFiles = require("./middlewares/staticFiles");
const errorHandler = require("./middlewares/errorHandler");
const routes = require("./routes");

const missing = [TEMPLATE_FILE, MANIFEST_FILE, ENTRY].filter((f) => !fs.existsSync(f));
if (missing.length) {
  console.error(
    `[backend] missing build output:\n  ${missing.join("\n  ")}\nRun "npm run build" in the project root first.`,
  );
  process.exit(1);
}

const app = express();

// cPanel/Passenger sits in front as a reverse proxy.
app.set("trust proxy", true);
app.disable("x-powered-by");

app.use(compression());
app.use(securityHeaders);
app.use(trailingSlash);
app.use(staticFiles);
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`[backend] serving ${distDir} on port ${port}`);
  // Load the Vue server bundle now rather than on the first visitor's request.
  getBundle().catch((err) => console.error("[backend] failed to load server bundle:", err));
});
