# 🏗️ Architecture

## 1-Line Summary

A single-page React + TypeScript portfolio site that fetches all content from a static JSON file and renders it through a set of isolated, data-driven section components.

---

## 5-Minute Explanation

| Aspect | Detail |
|--------|--------|
| **What the code does** | Fetches `public/portfolio.json` on load, passes the parsed data to section components, and renders the portfolio as a single scrollable page |
| **Primary input** | `public/portfolio.json` — a static JSON file served by Vite's dev server and by the CDN in production |
| **Primary output** | A rendered browser UI with Profile, Experience, Projects, Skills, and Education sections |
| **Key files** | `src/main.tsx`, `src/App.tsx`, `src/hooks/usePortfolio.ts`, `public/portfolio.json` |
| **Main code path** | `index.html` → `src/main.tsx` → `<App>` → `usePortfolio()` fetches JSON → section components render data |

---

## Deep Dive

### Type

**Browser-side SPA** — No server, no backend, no database. All content is static.

### Primary Runtime

Node.js (build tool / dev server only) + Browser (runtime).

### Framework Boot Sequence

1. Vite serves `index.html` as the HTML shell.
2. `index.html` loads `/src/main.tsx` as a JS module.
3. `main.tsx` calls `ReactDOM.createRoot(document.getElementById('root'))` and renders `<App />` + `<Analytics />` inside `React.StrictMode`.
4. `<App>` calls the `usePortfolio()` hook, which issues a `fetch('/portfolio.json')` request.
5. While fetching, `<App>` renders a loading spinner. On error, it renders an error message.
6. Once data resolves, `<App>` renders the full layout: `<Header>`, sections, `<Footer>`, and `<ScrollToTop>`.

---

## Top-Level Structure

```
new-portfolio/
├── index.html              # HTML shell — SEO meta tags, JSON-LD, <div id="root">
├── vite.config.ts          # Vite build config — React plugin, hashed output filenames
├── tailwind.config.js      # Tailwind CSS config — DaisyUI plugin enabled
├── tsconfig.json           # Root TypeScript project references
├── tsconfig.app.json       # TS config for src/ (strict mode, bundler resolution)
├── tsconfig.node.json      # TS config for vite.config.ts
├── vercel.json             # Vercel redirect rules (fazil6.vercel.app → fazilhusen.com)
├── wrangler.json           # Cloudflare Pages project config
├── postcss.config.js       # PostCSS config (Tailwind + Autoprefixer)
├── .eslintrc.cjs           # ESLint rules (TS + React Hooks + React Refresh)
├── public/
│   ├── portfolio.json      # ★ THE ONLY DATA SOURCE — all portfolio content lives here
│   ├── robots.txt          # SEO: crawler directives
│   ├── sitemap.xml         # SEO: URL index for search engines
│   └── icon.svg            # Favicon
└── src/
    ├── main.tsx            # React entry point — mounts <App> and <Analytics>
    ├── App.tsx             # Root component — orchestrates data fetching and layout
    ├── index.css           # Global CSS reset/base styles
    ├── App.css             # App-level CSS overrides
    ├── vite-env.d.ts       # Vite type declarations (import.meta.env, etc.)
    ├── hooks/
    │   └── usePortfolio.ts # Data hook — fetches & types portfolio.json
    └── components/
        ├── Header.tsx          # Top nav bar — brand name + desktop/mobile nav links
        ├── ProfileSection.tsx  # Hero section — name, title, contact info, CV link
        ├── ExperienceSection.tsx # Work history cards — full-time & internship entries
        ├── ProjectsSection.tsx   # Project cards — name, description, tech tags, links
        ├── SkillsSection.tsx     # Skill tags — programming languages & technologies
        ├── EducationSection.tsx  # Education cards — school, degree, duration
        ├── Footer.tsx            # Footer — copyright + social icon links
        └── ScrollToTop.tsx       # Floating button — appears after scrolling 300px
```

---

## Key Boundaries

### Data Layer — `src/hooks/usePortfolio.ts`

This is the **only** place the app talks to the outside world. It:
- Issues `fetch('/portfolio.json')` with an `AbortController` for cleanup.
- Defines and exports all TypeScript types: `PortfolioData`, `ExperienceData`, `ProjectData`, `EducationData`, `SocialLinkData`, `NavItemData`.
- Returns `{ data, loading, error }` to `<App>`.

All components import their prop types from this file (e.g., `import type { ExperienceData } from "../hooks/usePortfolio"`).

### Presentation Layer — `src/components/`

Every component is a **pure, data-driven presentational component**. They receive typed props and render HTML — no component fetches data or manages global state.

| Component | Section `id` | Props received |
|-----------|-------------|----------------|
| `Header.tsx` | *(sticky top)* | `brandName`, `navItems` |
| `ProfileSection.tsx` | *(no id)* | `profile` |
| `ExperienceSection.tsx` | `#experience` | `experiences` |
| `ProjectsSection.tsx` | `#projects` | `projects` |
| `SkillsSection.tsx` | `#skills` | `skills` |
| `EducationSection.tsx` | `#education` | `educations` |
| `Footer.tsx` | `#contact` | `footer` |
| `ScrollToTop.tsx` | *(fixed overlay)* | *(none — self-contained)* |

The nav items in `portfolio.json` use `href` values (`#projects`, `#experience`, etc.) that match the `id` attributes on section elements — this is how in-page navigation works.

### Orchestration — `src/App.tsx`

`App` is the **only stateful component**. It:
1. Calls `usePortfolio()`.
2. Renders a full-page loading state or error state if the fetch hasn't resolved.
3. Passes data down to each section component as props.

### Analytics — `src/main.tsx`

`<Analytics />` from `@vercel/analytics/react` is mounted alongside `<App>` in `main.tsx`. It is a fire-and-forget component — no props, no effect on rendering.

---

## Detailed Code Flow

```
Browser requests page
        │
        ▼
index.html          ← HTML shell, SEO meta tags, JSON-LD, <div id="root">
        │
        ▼
src/main.tsx        ← ReactDOM.createRoot().render(<App /> + <Analytics />)
        │
        ▼
src/App.tsx         ← calls usePortfolio() → renders loading/error/content
        │
        ▼
src/hooks/
  usePortfolio.ts   ← fetch('/portfolio.json') → typed PortfolioData
        │
        ▼
public/
  portfolio.json    ← static JSON — the only source of content
        │
        ▼ (data flows back up as props)
src/components/
  Header.tsx
  ProfileSection.tsx
  ExperienceSection.tsx
  ProjectsSection.tsx
  SkillsSection.tsx
  EducationSection.tsx
  Footer.tsx
  ScrollToTop.tsx   ← self-contained, listens to window scroll
```

---

## Files Inspected

All files in the repository were read during this analysis:

- `index.html`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `.eslintrc.cjs`
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- `vercel.json`, `wrangler.json`
- `package.json`
- `public/portfolio.json`, `public/robots.txt`, `public/sitemap.xml`
- `src/main.tsx`, `src/App.tsx`, `src/index.css`, `src/App.css`
- `src/hooks/usePortfolio.ts`
- `src/components/Header.tsx`, `ProfileSection.tsx`, `ExperienceSection.tsx`, `ProjectsSection.tsx`, `SkillsSection.tsx`, `EducationSection.tsx`, `Footer.tsx`, `ScrollToTop.tsx`
