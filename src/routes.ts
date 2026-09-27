// Client-side routes. vite.config.ts reads this too, to emit a static
// index.html per route so GitHub Pages serves deep links with a 200.
export const ROUTES = {
  home: "/",
  about: "/about",
  projects: "/projects",
  notes: "/notes",
  contact: "/contact",
} as const;
