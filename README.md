# portfolio

[![Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?logo=render)](https://render.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

Personal portfolio for Bhumika Agarwal — Software Engineer II at JPMorgan Chase. Focuses on backend systems (Camunda 7
BPMN, Apache Kafka, Spring Boot), BFSI platform modernization (credit card disputes, bonds trading), and event-driven
microservice architecture.

**Live:** https://bhumika-portfolio-zkq0.onrender.com/

---

## Stack

| Layer     | Choice                                                       | Why                                                                            |
|-----------|--------------------------------------------------------------|--------------------------------------------------------------------------------|
| Framework | React 19 + TypeScript (strict)                               | Component model + type safety without runtime overhead                         |
| Build     | Vite 5                                                       | Native ESM dev server, <3s cold build, tree-shaking, explicit chunk splitting  |
| UI        | Material-UI 7 + Emotion                                      | Mature component primitives, theme system, `sx` prop avoids class-name leakage |
| Fonts     | Inter (body) · JetBrains Mono (code, labels) via @fontsource | Self-hosted — zero external font requests, no FOUT                             |
| Animation | Framer Motion (entry fades + page transitions only)          | Declarative `variants`, `AnimatePresence` for route transitions                |
| Routing   | React Router v6                                              | Client-side SPA routing; `_redirects` handles deep-links on Render             |
| Deploy    | Render (static site)                                         | Free tier static sites have no cold-start delay; `dist/` output                |

---

## Pages

| Route       | Content                                  |
|-------------|------------------------------------------|
| `/`         | Name, role, positioning, inline links    |
| `/about`    | Bio · Experience timeline · Skills table |
| `/projects` | Regulatory Approval System · UrbanNexus  |
| `/contact`  | Email · LinkedIn · GitHub · Resume PDF   |

---

## Architecture

### 1. Build pipeline — Vite

Vite uses [native ES modules](https://vitejs.dev/guide/why.html) in development (no bundling, instant HMR) and Rollup
for production. `vite.config.ts` defines explicit `manualChunks` so the browser can cache vendor code independently of
app code:

```
vendor  → react, react-dom, react-router-dom   (~7.7 kB gzip)
mui     → @mui/material, @mui/icons-material,
          @emotion/react, @emotion/styled        (~49.7 kB gzip)
motion  → framer-motion                         (~37.8 kB gzip)
index   → application code                      (~63.5 kB gzip)
```

@emotion packages are co-located with `mui` because they are MUI's styling engine — putting them together ensures a
single cache invalidation when upgrading MUI.

### 2. Theme system — Material-UI

The theme lives in `src/theme/theme.ts` and is parameterised by `PaletteMode` (`"dark" | "light"`). A single call to
`createTheme` produces the full token tree for either mode.

**Token decisions:**

| Token         | Dark      | Light     | Rationale                                          |
|---------------|-----------|-----------|----------------------------------------------------|
| Background    | `#0A0A0A` | `#FAFAFA` | Near-black / near-white; avoids pure `#000`/`#fff` |
| Paper (cards) | `#111111` | `#FFFFFF` | One step lighter than background for depth         |
| Text primary  | `#E5E5E5` | `#171717` | AA contrast on both backgrounds                    |
| Text dim      | `#737373` | same      | Secondary content, labels                          |
| Border        | `#1E1E1E` | `#E8E8E8` | Subtle, non-harsh separation                       |
| Accent        | `#34D399` | same      | Used **only** on hover/focus/active — never static |

`EASE_OUT_EXPO = [0.16, 1, 0.3, 1]` is exported alongside theme tokens so every Framer Motion transition uses the same
cubic-bezier — fast deceleration, feels intentional.

**Component overrides** in the theme cover only components actually used in the app:

- `MuiCssBaseline` — smooth scroll, focus rings, custom scrollbar
- `MuiAppBar` — backdrop-filter blur (20px, saturate 180%), semi-transparent background
- `MuiChip` — monospace font, muted border, no fill
- `MuiDivider` — border colour from palette

Unused MUI components (Card, Button, Link) have no overrides — there is nothing to override.

### 3. Theme persistence — Context + localStorage

`ThemeContext` (`src/theme/`) is a minimal React Context that holds `mode` and `toggleColorMode`. The provider
initialises from `localStorage` on mount, falling back to `prefers-color-scheme`. Subsequent changes are persisted to
`localStorage` via `useEffect`. This avoids flash-of-wrong-theme on reload without requiring SSR.

The context definition, provider, and hook are split into three files to keep each file responsible for a single concern
and to avoid circular imports.

### 4. Routing and page transitions

`BrowserRouter` wraps the whole app. Client-side navigation is handled by React Router v6 `<Routes>`. Deep-link support
on Render is handled by `public/_redirects`:

```
/* /index.html 200
```

This rule tells Render's CDN to serve `index.html` for any path, letting React Router resolve it on the client.

Page transitions use Framer Motion's `AnimatePresence`:

```tsx
<AnimatePresence mode="wait">
    <motion.div key={location.pathname} variants={pageVariants}>
        <Routes location={location}>...</Routes>
    </motion.div>
</AnimatePresence>
```

`mode="wait"` ensures the exit animation completes before the entering page renders. Passing `location` explicitly to
`<Routes>` (instead of letting it read from context) keeps the exiting page visible during its fade-out.

### 5. Animation strategy

All motion follows one rule: **entry only, no continuous animation**.

- **Hero** (`/`): Staggered `containerVariants` with `staggerChildren: 0.1` — three children (label, name, body, links)
  each animate `{ opacity: 0, y: 24 } → { opacity: 1, y: 0 }` with `EASE_OUT_EXPO`.
- **Scroll sections** (`/about`, `/projects`): `whileInView` + `viewport: { once: true }` so each card/section fades in
  once when it enters the viewport, never re-triggers.
- **Page transitions**: Opacity fade, 250ms in / 150ms out.

No transforms beyond `y` translation (no scale, no rotate). No continuous loops. No autoplay.

### 6. Data layer

All content lives in typed objects under `src/data/`:

```
experience.ts   → Experience[]   (company, role, location, period, bullets, stack)
projects.ts     → Project[]      (title, description, tech, githubUrl, liveUrl?)
skills.ts       → SkillRow[]     (category, items)
```

Defining content in typed structures rather than JSX means:

- TypeScript validates shape at compile time
- Pages are free of long string literals
- Content updates don't require touching component logic

### 7. Typography scale

| Variant     | Size      | Weight | Tracking   | Use                       |
|-------------|-----------|--------|------------|---------------------------|
| `h1`        | 3.25rem   | 700    | `−0.04em`  | Hero name                 |
| `h2`        | 1.5rem    | 600    | `−0.02em`  | Section headings          |
| `h3`        | 1.0625rem | 600    | `−0.01em`  | Card titles               |
| `body1`     | 0.9375rem | 400    | `−0.003em` | Main prose                |
| `body2`     | 0.875rem  | 400    | `−0.003em` | List items, descriptions  |
| Mono labels | 0.6875rem | 400    | `+0.08em`  | Section tags, stack chips |

Inter (400–700) is used for all prose. JetBrains Mono is used for section labels, stack chips, dates, and contact rows —
mono type signals data/code rather than narrative.

### 8. Fonts — @fontsource

`@fontsource/inter` and `@fontsource/jetbrains-mono` are loaded via CSS imports in `main.tsx`. This is equivalent to a
self-hosted Google Fonts setup: the `.woff2` files are bundled into `dist/assets/` by Vite and served from the same
origin. No external DNS lookups, no FOUT, no privacy leak to a third-party CDN.

Only the weights actually used in the theme are imported:

```ts
// main.tsx
import "@fontsource/inter/400.css";   // body
import "@fontsource/inter/500.css";   // subtitle
import "@fontsource/inter/600.css";   // headings h2–h4
import "@fontsource/inter/700.css";   // h1
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/700.css";
```

### 9. Shared components

| Component      | File                              | Used by                    |
|----------------|-----------------------------------|----------------------------|
| `Navbar`       | `src/components/Navbar.tsx`       | `App.tsx` (always visible) |
| `Footer`       | `src/components/Footer.tsx`       | `App.tsx` (always visible) |
| `SectionLabel` | `src/components/SectionLabel.tsx` | About, Projects, Contact   |

`SectionLabel` is a small presentational component — a monospace uppercase label in accent colour that precedes each
section heading (e.g. "About", "Work", "Get in touch"). Extracting it prevents duplicating the same `sx` props across
three pages.

### 10. Contact — no third-party services

The Contact page uses only native browser mechanisms:

- `mailto:bhumika.aga@gmail.com` → opens default mail client
- `https://linkedin.com/in/bhumika-aga` → external link
- `https://github.com/bhumika-aga` → external link
- `/Bhumika_Agarwal_Resume.pdf` → `download` attribute, served from `public/`

No EmailJS, no Formspree, no backend. No environment variables required.

### 11. SEO and meta

`index.html` includes:

- `<title>`, `<meta name="description">`, `<meta name="keywords">`
- Open Graph (`og:type`, `og:url`, `og:title`, `og:description`, `og:image`)
- Twitter card (`summary_large_image`)
- `<link rel="canonical">`
- `<link rel="manifest">` → `public/manifest.json` (PWA manifest)
- `public/robots.txt` — allows all crawlers
- `public/sitemap.xml` — four URLs with priority/frequency hints

The `og:image` references `/og.png` — see TODOs below.

---

## Project structure

```
portfolio/
├── index.html                  # Vite entry point — all meta/OG tags
├── vite.config.ts              # Build config, manual chunk splitting
├── tsconfig.json               # Strict TypeScript, ESNext/bundler
├── .prettierrc                 # Formatting config
├── eslint.config.js            # ESLint 9 flat config (TS + React rules)
├── .nvmrc                      # Node 20
├── public/
│   ├── _redirects              # Render SPA routing rule
│   ├── Bhumika_Agarwal_Resume.pdf
│   ├── manifest.json
│   ├── robots.txt
│   ├── sitemap.xml
│   └── og.png                  # TODO: see below
└── src/
    ├── main.tsx                # Entry — font imports, ReactDOM.createRoot
    ├── App.tsx                 # Router, ThemeProvider, AnimatePresence
    ├── components/
    │   ├── Navbar.tsx          # Fixed top bar, backdrop blur, active dot
    │   ├── Footer.tsx          # Copyright + social links
    │   └── SectionLabel.tsx    # Shared mono uppercase label
    ├── data/
    │   ├── experience.ts       # Work history (typed)
    │   ├── projects.ts         # Side projects (typed)
    │   └── skills.ts           # Skill rows (typed)
    ├── pages/
    │   ├── Home.tsx            # Hero — staggered spring entrance
    │   ├── About.tsx           # Bio, experience timeline, skills table
    │   ├── Projects.tsx        # Project cards with links
    │   └── Contact.tsx         # Mailto + social + resume download
    └── theme/
        ├── theme.ts            # createTheme, tokens, component overrides
        ├── ThemeContextDef.ts  # Context type + createContext
        ├── ThemeContext.tsx     # Provider — localStorage + prefers-color-scheme
        └── useThemeMode.ts     # Consumer hook
```

---

## Local development

```bash
# Requires Node 20 (see .nvmrc)
nvm use
npm install
npm run dev          # Dev server → http://localhost:5173
npm run build        # Production build → dist/
npm run preview      # Serve dist/ locally on :4173
npm run type-check   # tsc --noEmit
npm run lint         # ESLint — zero warnings allowed
npm run format       # Prettier write
npm run format:check # Prettier check (CI)
```

---

## Deployment

**Render — static site:**

1. Connect the GitHub repo at [render.com/new](https://render.com/new).
2. Choose **Static Site**.
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`
5. No environment variables required.

`public/_redirects` rewrites all paths to `/index.html`, enabling client-side routing from direct URLs (e.g. navigating
to `/about` directly returns a 200 with the SPA shell).

---

## Design notes

- Background: `#0A0A0A` dark / `#FAFAFA` light
- Text: `#E5E5E5` dark / `#171717` light · dim: `#737373`
- Accent `#34D399` used only on hover/focus/active — no static decorative use
- Cards: 1px border, `border-radius: 10px`, no shadow, no blur
- Navbar: `backdrop-filter: blur(20px) saturate(180%)` — semi-transparent background
- Container max-width: 720px, centered
- All fonts self-hosted via @fontsource

---

## TODOs (manual, post-deploy)

| Item                                           | Why manual                                                                                                                                                                                                                                                               |
|------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `public/og.png` (1200×630)                     | Requires a browser/canvas render or design tool — cannot be generated at build time without adding a build dependency (sharp, puppeteer). Create in Figma/Canva: `#0A0A0A` background, "Bhumika Agarwal" in JetBrains Mono Bold centered, title beneath, `#34D399` rule. |
| `public/favicon.ico` + `apple-touch-icon.png`  | Binary assets — export from the same design.                                                                                                                                                                                                                             |
| `public/screenshots/home.png` + `projects.png` | Take after first deploy; update README image links.                                                                                                                                                                                                                      |
| GitHub repo rename                             | Rename from `Portfolio` → `portfolio` (lowercase) in GitHub Settings → Repository name. This has no code impact.                                                                                                                                                         |

---

## API / Postman

This is a fully static site — there are no server-side API endpoints, no backend, and no network requests made by the
application at runtime (all fonts and assets are bundled). Postman does not apply.

---

## License

MIT — see [LICENSE](./LICENSE).
