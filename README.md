# portfolio

[![Deploy](https://github.com/bhumika-aga/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/bhumika-aga/Portfolio/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

Personal portfolio for Bhumika Agarwal, a backend software engineer (previously Software Engineer II at JPMorgan
Chase). Focuses on backend systems (Camunda 7 BPMN, Spring Boot, Kafka, microservices), BFSI platform modernization, and
cloud infrastructure (AWS, Terraform), plus React and TypeScript frontends. Built around a minimalist blue design system
with a dark/light theme and bento-grid project layouts. Content mirrors `public/Bhumika_Agarwal_Resume.pdf`.

**Live:** <https://bhumika-aga.github.io/Portfolio/>

---

## Stack

| Layer     | Choice                                                       | Why                                                                            |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Framework | React 19 + TypeScript (strict)                               | Component model + type safety without runtime overhead                         |
| Build     | Vite 8 (Rolldown)                                            | Native ESM dev server, sub-second production builds, explicit chunk splitting  |
| UI        | MUI 9 + Emotion                                              | Mature component primitives, theme system, `sx` prop avoids class-name leakage |
| Fonts     | Inter (body) · JetBrains Mono (code, labels) via @fontsource | Self-hosted — zero external font requests, no FOUT                             |
| Animation | CSS scroll reveal (`Reveal` + IntersectionObserver)          | No animation library; page switches are instant, so nothing flickers           |
| Routing   | React Router 7                                               | Client-side SPA routing; a static `index.html` per route serves deep links     |
| Deploy    | GitHub Pages via GitHub Actions                              | Free static hosting; built and deployed on every push to `main`                |

---

## Pages

| Route       | Content                                                                     |
| ----------- | --------------------------------------------------------------------------- |
| `/`         | Hero (status pill, headline, CTAs) · Featured Work bento · Core Stack list  |
| `/about`    | Bio · Philosophy cards · Experience · Technical arsenal table · Academics   |
| `/projects` | "Systems & Architecture" bento — 5 projects, lead card with terminal visual |
| `/notes`    | Engineering notes — cards linking to the GitHub Pages study sites           |
| `/contact`  | Email · LinkedIn · GitHub · Resume PDF                                      |

**Projects** (`src/data/projects.ts`): Regulatory Approval System · UrbanNexus (both `featured`: shown on Home and first
on `/projects`) · MediFlow · HealthSync · Exam Portal. Each maps to an icon via `src/components/projectIcons.tsx`. Home
cards link to `/projects#<id>`.

**Notes** (`src/data/notes.ts`): System Design: Backend · Java Lectures · System Design Notebook · DSA Mastery.

---

## Architecture

### 1. Build pipeline — Vite

Vite uses [native ES modules](https://vitejs.dev/guide/why.html) in development (no bundling, instant HMR) and Rolldown
for production. `vite.config.ts` defines `codeSplitting` groups so the browser can cache vendor code independently of
app code:

```txt
vendor  → react, react-dom, react-router        (~82 kB gzip)
mui     → @mui/material, @mui/icons-material,
          @emotion/react, @emotion/styled        (~59 kB gzip)
index   → application code                      (~12 kB gzip)
```

@emotion packages are co-located with `mui` because they are MUI's styling engine — putting them together ensures a
single cache invalidation when upgrading MUI.

### 2. Theme system — Material-UI

The theme lives in `src/theme/theme.ts` and is parameterised by `PaletteMode` (`"dark" | "light"`). A single call to
`createTheme` produces the full token tree for either mode.

**Token decisions:**

| Token         | Dark      | Light     | Rationale                                       |
| ------------- | --------- | --------- | ----------------------------------------------- |
| Background    | `#0A0A0A` | `#FBF9F8` | Near-black / warm near-white; avoids pure black |
| Paper (cards) | `#111111` | `#FFFFFF` | One step lighter than background for depth      |
| Text primary  | `#E8E8E8` | `#1B1C1C` | AA contrast on both backgrounds                 |
| Text dim      | `#8B8B8B` | `#414754` | Secondary content, labels                       |
| Divider       | `#232323` | `#E4E2E2` | Subtle, non-harsh separation                    |
| Accent        | `#0070F3` | same      | Vibrant blue — used for CTAs, highlights, hover |

The accent is exported from `theme.ts` as `ACCENT` alongside `ACCENT_RGB` and an `accentGlow(alpha)` helper, so every
blue tint (button shadows, hover backgrounds, card glows, the terminal card) derives from one source of truth.

The scroll reveal transition uses `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo), defined in the `MuiCssBaseline`
override next to the `[data-reveal]` styles.

**Component overrides** in the theme cover only components actually used in the app:

- `MuiCssBaseline` — reveal styles, hash-target scroll margin, focus rings, custom scrollbar
- `MuiAppBar` — backdrop-filter blur (20px, saturate 180%), semi-transparent background
- `MuiChip` — monospace font, accent-tinted fill (`accentGlow`), accent text, no border
- `MuiDivider` — border colour from palette

Unused MUI components (Card, Button, Link) have no overrides — there is nothing to override.

### 3. Theme persistence — Context + localStorage

`ThemeContext` (`src/theme/`) is a minimal React Context that holds `mode` and `toggleColorMode`. The provider
initialises from `localStorage`, falling back to `prefers-color-scheme`, and keeps following OS changes until the
visitor toggles. Only an explicit toggle is saved. Storage access is wrapped in `try/catch` (it can throw when blocked).
A small inline script in `index.html` sets `<html data-theme>` from the same key before the bundle loads, so the page
background is correct on first paint (no white flash for dark-mode visitors).

The context definition, provider, and hook are split into three files to keep each file responsible for a single concern
and to avoid circular imports.

### 4. Routing and page transitions

`BrowserRouter` wraps the whole app, with `basename` set to Vite's `BASE_URL` so it works under a Pages project path
(`/Portfolio/`). Routes are declared once in `src/routes.ts`.

GitHub Pages has no SPA rewrite rules, so the `static-hosting` plugin in `vite.config.ts` writes a copy of `index.html`
to `about/`, `projects/`, `notes/` and `contact/` after each build. Deep links therefore return a 200 with a route-specific
canonical URL. It also writes `404.html` (unknown paths render the in-app 404 page), `sitemap.xml` and `robots.txt`.

There are no route transitions: pages swap instantly. `ScrollToTop` (rendered before `<Routes>`) resets the scroll
position in a layout effect, or scrolls to the element named by the URL hash (e.g. `/projects#urbannexus`).

### 5. Animation strategy

All motion follows one rule: **entry only, and never for content already on screen**.

`src/components/Reveal.tsx` wraps sections and cards. Before first paint it checks whether the element is inside the
viewport. If it is, the element renders as is. If it is below the fold, it gets `data-reveal="pending"` (opacity 0,
`translateY(16px)`) and an IntersectionObserver flips it to `done` when it scrolls into view. Because `ScrollToTop`
runs first, switching pages never hides or fades visible content, which is what caused the old flicker. Visitors with
`prefers-reduced-motion` get no reveal at all.

### 6. Data layer

All content lives in typed objects under `src/data/`:

```txt
experience.ts   → Experience[]   (company, role, location, period, bullets, stack)
projects.ts     → Project[]      (title, tagline, highlights, tech, githubUrl, liveUrl?, featured?, icon, terminalLines?)
notes.ts        → NoteSet[]      (title, meta, description, topics, url, repoUrl)
site.ts         → SITE           (name, email, links, résumé file) + RESUME_URL
skills.ts       → SkillRow[]     (category, items)
education.ts    → Education[]    (institution, degree, location, period, coursework?)
```

Defining content in typed structures rather than JSX means:

- TypeScript validates shape at compile time
- Pages are free of long string literals
- Content updates don't require touching component logic

### 7. Typography scale

| Variant     | Size      | Weight | Tracking   | Use                         |
| ----------- | --------- | ------ | ---------- | --------------------------- |
| `h1`        | 4rem      | 600    | `−0.04em`  | Hero / page headlines       |
| `h2`        | 2.5rem    | 600    | `−0.03em`  | Section headings            |
| `h3`        | 1.5rem    | 600    | `−0.02em`  | Card titles                 |
| `h4`        | 1.125rem  | 600    | `−0.01em`  | Sub-card titles, stack rows |
| `body1`     | 1rem      | 400    | `−0.003em` | Main prose                  |
| `body2`     | 0.9375rem | 400    | `−0.003em` | List items, descriptions    |
| Mono labels | 0.6875rem | 500    | `+0.08em`  | Section tags, stack chips   |

Inter (400–600) is used for all prose; nothing is heavier than 600. JetBrains Mono is used for section labels, stack chips, dates, and contact rows —
mono type signals data/code rather than narrative.

### 8. Fonts — @fontsource

`@fontsource/inter` and `@fontsource/jetbrains-mono` are loaded via CSS imports in `main.tsx`. This is equivalent to a
self-hosted Google Fonts setup: the `.woff2` files are bundled into `dist/assets/` by Vite and served from the same
origin. No external DNS lookups, no FOUT, no privacy leak to a third-party CDN.

Only the weights actually used in the theme are imported:

```ts
// main.tsx
import "@fontsource/inter/400.css"; // body
import "@fontsource/inter/500.css"; // subtitle, medium headings
import "@fontsource/inter/600.css"; // all headings
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css"; // labels, chips, terminal card
```

### 9. Shared components

| Component        | File                                | Used by                      |
| ---------------- | ----------------------------------- | ---------------------------- |
| `Navbar`         | `src/components/Navbar.tsx`         | `App.tsx` (always visible)   |
| `Footer`         | `src/components/Footer.tsx`         | `App.tsx` (always visible)   |
| `Container`      | `src/components/Container.tsx`      | Every page, Navbar, Footer   |
| `Card`           | `src/components/Card.tsx`           | All card surfaces            |
| `Reveal`         | `src/components/Reveal.tsx`         | Home, About, Projects, Notes |
| `ScrollToTop`    | `src/components/ScrollToTop.tsx`    | `App.tsx`                    |
| `SectionHeading` | `src/components/SectionHeading.tsx` | About                        |
| `SectionLabel`   | `src/components/SectionLabel.tsx`   | About, Contact, NotFound     |
| `PROJECT_ICONS`  | `src/components/projectIcons.tsx`   | Home, Projects (bento cards) |

`Card` takes an `interactive` prop for the hover lift and glow; only cards that are or carry a link use it.

`SectionLabel` is a small presentational component — a monospace uppercase label in accent colour that precedes each
section heading (e.g. "About", "Get in touch"). `projectIcons.tsx` maps each project's `icon` key to an MUI icon so the
Home and Projects bento cards share one source of truth.

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
- Open Graph (`og:type`, `og:url`, `og:title`, `og:description`)
- Twitter card (`summary`)
- `<link rel="canonical">` — `%SITE_URL%` is replaced at build time with the Pages URL
- `<link rel="icon">` → `public/favicon.svg`, `<link rel="manifest">` → `public/manifest.json`
- `robots.txt` and `sitemap.xml` — generated at build time from `src/routes.ts`

There is no `og:image` yet — see TODOs below.

---

## Project structure

```txt
portfolio/
├── index.html                  # Vite entry point — all meta/OG tags, pre-paint theme script
├── vite.config.ts              # Build config, chunk splitting, static-hosting plugin
├── .github/workflows/deploy.yml # Build + deploy to GitHub Pages on push to main
├── tsconfig.json               # Strict TypeScript, ESNext/bundler
├── .prettierrc                 # Formatting config
├── eslint.config.js            # ESLint 10 flat config (TS + React hooks/compiler rules)
├── .nvmrc                      # Node 24
├── public/
│   ├── Bhumika_Agarwal_Resume.pdf
│   ├── favicon.svg
│   └── manifest.json
└── src/
    ├── main.tsx                # Entry — font imports, ReactDOM.createRoot
    ├── App.tsx                 # Router, ThemeProvider, routes
    ├── routes.ts               # Route paths (also read by vite.config.ts)
    ├── components/
    │   ├── Navbar.tsx          # Fixed top bar, backdrop blur, phone menu, CTA
    │   ├── Footer.tsx          # Wordmark + social links
    │   ├── Container.tsx       # Shared page-width wrapper
    │   ├── Card.tsx            # Shared card surface (optional hover)
    │   ├── Reveal.tsx          # Scroll reveal for below-the-fold content
    │   ├── ScrollToTop.tsx     # Scroll reset / hash scroll on navigation
    │   ├── SectionHeading.tsx  # Label + h2
    │   ├── SectionLabel.tsx    # Shared mono uppercase label
    │   └── projectIcons.tsx    # icon-key → MUI icon map for bento cards
    ├── data/
    │   ├── experience.ts       # Work history (typed)
    │   ├── projects.ts         # Featured projects (typed)
    │   ├── skills.ts           # Skill rows (typed)
    │   ├── education.ts        # Academics (typed)
    │   ├── notes.ts            # Study-note sites for /notes
    │   └── site.ts             # Name, email, social links, résumé URL
    ├── pages/
    │   ├── Home.tsx            # Hero · Featured Work bento · Core Stack
    │   ├── About.tsx           # Bio · Philosophy · Experience · Arsenal · Academics
    │   ├── Projects.tsx        # Bento grid, lead terminal card
    │   ├── Notes.tsx           # Engineering notes (links to GitHub Pages sites)
    │   ├── Contact.tsx         # Mailto + social + resume download
    │   └── NotFound.tsx        # Catch-all 404
    └── theme/
        ├── theme.ts            # createTheme, tokens, component overrides
        ├── ThemeContextDef.ts  # Context type + createContext
        ├── ThemeContext.tsx     # Provider — localStorage + prefers-color-scheme
        └── useThemeMode.ts     # Consumer hook
```

---

## Local development

```bash
# Requires Node 24 (see .nvmrc)
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

**GitHub Pages — via GitHub Actions** (`.github/workflows/deploy.yml`):

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions** (one-time).
2. Push to `main`. The workflow lints, builds, and deploys `dist/`.

`actions/configure-pages` supplies the base path, so the same workflow works for:

- this repo as a project site → `https://bhumika-aga.github.io/Portfolio/`
- a repo named `bhumika-aga.github.io` (or a custom domain) → served from the root

To replace the résumé, overwrite `public/Bhumika_Agarwal_Resume.pdf` (keep the filename) and push.

Local check of a subpath build:

```bash
SITE_URL=https://bhumika-aga.github.io/Portfolio npm run build -- --base=/Portfolio/
```

---

## Design notes

- Background: `#0A0A0A` dark / `#FBF9F8` light
- Text: `#E8E8E8` dark / `#1B1C1C` light · dim: `#8B8B8B` dark / `#414754` light
- Accent `#0070F3` (vibrant blue) — CTAs, highlighted headline word, chips, hover/focus, card glows
- Cards: 1px border, `border-radius: 16px`; linked cards get a hover lift (`translateY(-3px)`) with a soft accent glow
- Headings: weight 600 max
- Navbar: `backdrop-filter: blur(20px) saturate(180%)` — semi-transparent background, blue "Get in touch" CTA
- Container max-width: 1120px for content pages (Contact uses a narrower 720px column), centered
- All fonts self-hosted via @fontsource

---

## TODOs (manual, post-deploy)

| Item                                           | Why manual                                                                                                                                                                                                                                                               |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `public/og.png` (1200×630)                     | Requires a browser/canvas render or design tool — cannot be generated at build time without adding a build dependency (sharp, puppeteer). Create in Figma/Canva: `#0A0A0A` background, "Bhumika Agarwal" in JetBrains Mono Bold centered, title beneath, `#0070F3` rule. |
| `public/apple-touch-icon.png` (180×180)        | Binary asset — export from the same design. `favicon.svg` covers browsers.                                                                                                                                                                                               |
| `public/screenshots/home.png` + `projects.png` | Take after first deploy; update README image links.                                                                                                                                                                                                                      |
| GitHub repo rename (optional)                  | Renaming changes the Pages URL (it is case-sensitive). Renaming to `bhumika-aga.github.io` serves the site from the root. No code change needed — the workflow picks up the new base path.                                                                               |

---

## API / Postman

This is a fully static site — there are no server-side API endpoints, no backend, and no network requests made by the
application at runtime (all fonts and assets are bundled). Postman does not apply.

---

## License

MIT — see [LICENSE](./LICENSE).
