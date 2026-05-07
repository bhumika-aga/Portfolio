# portfolio

[![Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?logo=render)](https://render.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

Personal portfolio for Bhumika Agarwal — Software Engineer II at JPMorgan Chase. Focuses on backend systems (Camunda 7
BPMN, Apache Kafka, Spring Boot), BFSI platform modernization (credit card disputes, bonds trading), and event-driven
microservice architecture.

---

## Stack

| Layer     | Choice                                                       |
|-----------|--------------------------------------------------------------|
| Framework | React 19 + TypeScript (strict)                               |
| Build     | Vite 5                                                       |
| UI        | Material-UI 7 + Emotion                                      |
| Fonts     | Inter (body) · JetBrains Mono (code, labels) via @fontsource |
| Animation | Framer Motion (entry fades only)                             |
| Routing   | React Router v6                                              |
| Deploy    | Render (static site, free tier)                              |

## Pages

| Route       | Content                                  |
|-------------|------------------------------------------|
| `/`         | Name, role, positioning, links           |
| `/about`    | Bio · Experience timeline · Skills table |
| `/projects` | Regulatory Approval System · UrbanNexus  |
| `/contact`  | Email · LinkedIn · GitHub · Resume       |

## Project structure

```
portfolio/
├── index.html              # Vite entry point (meta, OG tags)
├── vite.config.ts
├── tsconfig.json
├── public/
│   ├── _redirects          # Render SPA routing rule
│   ├── Bhumika_Agarwal_Resume.pdf
│   ├── manifest.json
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── og.png              # 1200×630 OG image (see TODOs)
│   ├── favicon.ico         # see TODOs
│   ├── apple-touch-icon.png
│   └── screenshots/        # home.png + projects.png added post-deploy
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── components/
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    ├── data/
    │   ├── experience.ts
    │   ├── projects.ts
    │   └── skills.ts
    ├── pages/
    │   ├── Home.tsx
    │   ├── About.tsx
    │   ├── Projects.tsx
    │   └── Contact.tsx
    └── theme/
        ├── theme.ts        # tokens, component overrides
        └── ThemeContext.tsx
```

## Local development

```bash
# requires Node 20 (see .nvmrc)
nvm use
npm install
npm run dev       # http://localhost:5173
npm run build     # output → dist/
npm run preview   # serve dist/ locally
npm run type-check
npm run lint
```

## Deployment

**Render (static site):**

1. Connect the GitHub repo at [render.com/new](https://render.com/new).
2. Choose **Static Site**.
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`
5. No environment variables required.

Client-side routing is handled by `public/_redirects` — Render rewrites all paths to `/index.html`.

Note: Render free tier static sites have no cold-start delay (unlike free web services). First-load performance is fast.

## Design notes

- Background: `#0A0A0A` dark / `#FAFAFA` light
- Text: `#E5E5E5` dark / `#171717` light · dim: `#737373`
- Accent `#34D399` used only on hover/focus/active states
- Cards: 1px border, no shadow, no backdrop-filter
- Container max-width: 720px
- Fonts loaded via @fontsource — no external network requests

## Screenshots

`public/screenshots/home.png` and `public/screenshots/projects.png` will be
added after the first production deploy.

## License

MIT — see [LICENSE](./LICENSE).
