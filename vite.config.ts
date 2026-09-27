import react from "@vitejs/plugin-react";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import { ROUTES } from "./src/routes.ts";

// Public URL of the deployed site, without a trailing slash. The Pages
// workflow sets it from actions/configure-pages; the fallback is for local builds.
const SITE_URL = (
  process.env.SITE_URL ?? "https://bhumika-aga.github.io/Portfolio"
).replace(/\/$/, "");

// GitHub Pages has no SPA rewrites. Emit a copy of index.html for every route
// (so deep links return 200 with a route-specific canonical URL), a 404.html
// fallback for unknown paths, and a sitemap/robots built from the same routes.
const staticHosting = (): Plugin => {
  let outDir = "dist";
  return {
    name: "static-hosting",
    apply: "build",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    // "pre" so the placeholder is gone before Vite parses href attributes.
    transformIndexHtml: {
      order: "pre",
      handler: (html) => html.replaceAll("%SITE_URL%", SITE_URL),
    },
    writeBundle() {
      const index = readFileSync(join(outDir, "index.html"), "utf8");
      const paths = Object.values(ROUTES).filter((p) => p !== "/");

      for (const path of paths) {
        mkdirSync(join(outDir, path), { recursive: true });
        writeFileSync(
          join(outDir, path, "index.html"),
          index.replaceAll(`"${SITE_URL}/"`, `"${SITE_URL}${path}/"`)
        );
      }
      writeFileSync(join(outDir, "404.html"), index);

      const urls = ["/", ...paths.map((p) => `${p}/`)]
        .map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`)
        .join("\n");
      writeFileSync(
        join(outDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
      );
      writeFileSync(
        join(outDir, "robots.txt"),
        `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
      );
    },
  };
};

export default defineConfig({
  plugins: [react(), staticHosting()],
  build: {
    outDir: "dist",
    sourcemap: false,
    rolldownOptions: {
      output: {
        // Long-lived vendor chunks, so content edits don't bust their cache.
        codeSplitting: {
          groups: [
            {
              name: "vendor",
              test: /node_modules[\\/](react|react-dom|react-router|scheduler|cookie)[\\/]/,
            },
            { name: "mui", test: /node_modules[\\/](@mui|@emotion)[\\/]/ },
          ],
        },
      },
    },
  },
});
