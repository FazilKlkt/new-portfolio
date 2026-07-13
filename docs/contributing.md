# 🤝 Contributing Guide

This project welcomes contributions — bug fixes, UI improvements, new features, or content updates. Follow this guide to get set up and make changes correctly.

---

## Prerequisites

| Tool | Required Version | Check command |
|------|-----------------|---------------|
| Node.js | `>= 20.x` | `node --version` |
| npm | bundled with Node | `npm --version` |
| Git | any recent | `git --version` |

---

## 1. Local Setup

```bash
# Clone the repository
git clone https://github.com/FazilKlkt/new-portfolio.git
cd new-portfolio

# Install all dependencies
npm install

# Start the development server
npm run dev
```

The dev server starts at `http://localhost:5173` (Vite will pick the next available port if 5173 is busy). The `--host` flag is set in `package.json`, so the site is also accessible from your local network.

---

## 2. Available Scripts

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check with `tsc` and produce a production build in `dist/` |
| `npm run preview` | Locally preview the production build from `dist/` |
| `npm run lint` | Run ESLint on all `.ts` and `.tsx` files; zero warnings allowed |

> **Always run `npm run lint` and `npm run build` before opening a PR.** The build will catch TypeScript errors; lint will catch code quality issues.

---

## 3. Types of Contributions

### A. Content-only change (no code)

To update profile details, experience, projects, skills, or education — **edit only `public/portfolio.json`**.

```
public/portfolio.json  ← the only file you need to touch
```

See [`portfolio-json-schema.md`](./portfolio-json-schema.md) for the full field reference.

After saving, the dev server will hot-reload and reflect changes instantly.

---

### B. UI / Component change

The page is composed of independent section components. Each one:
- Lives in `src/components/`
- Receives typed props defined in `src/hooks/usePortfolio.ts`
- Uses **Tailwind CSS utility classes** for styling (DaisyUI is also available)
- Uses **Lucide React** for icons (`lucide-react` package)

**File map for UI work:**

| What you want to change | File to edit |
|------------------------|-------------|
| Navigation bar | `src/components/Header.tsx` |
| Hero / profile card | `src/components/ProfileSection.tsx` |
| Work experience cards | `src/components/ExperienceSection.tsx` |
| Project cards | `src/components/ProjectsSection.tsx` |
| Skills tags | `src/components/SkillsSection.tsx` |
| Education cards | `src/components/EducationSection.tsx` |
| Footer | `src/components/Footer.tsx` |
| Scroll-to-top button | `src/components/ScrollToTop.tsx` |
| Page layout / load/error states | `src/App.tsx` |
| Global CSS | `src/index.css`, `src/App.css` |
| Page HTML shell (meta tags, JSON-LD) | `index.html` |

---

### C. Adding a new section

1. Create `src/components/YourNewSection.tsx`.
2. Define prop types in `src/hooks/usePortfolio.ts` (add a new field to `PortfolioData`).
3. Add the data to `public/portfolio.json`.
4. Import and render `<YourNewSection>` in `src/App.tsx`.
5. If the section needs a nav link, add an entry to the `header.navItems` array in `portfolio.json`, and make sure the section element has the matching `id`.

---

### D. Adding a new icon to the footer

The footer's `SocialLink` component uses an `iconMap` in `src/components/Footer.tsx`:

```ts
const iconMap: Record<SocialLinkData["icon"], React.ReactNode> = {
  github: <Github />,
  linkedin: <Linkedin />,
  mail: <Mail />,
};
```

To add a new icon:
1. Import the icon from `lucide-react` in `Footer.tsx`.
2. Add a new key-value pair to `iconMap`.
3. Add `"icon"` as a new literal to the `SocialLinkData["icon"]` union type in `usePortfolio.ts`.
4. Add the link entry to `footer.socialLinks` in `portfolio.json`.

---

## 4. Code Style

- **TypeScript strict mode** is enabled (`tsconfig.app.json`).
- **ESLint** is configured in `.eslintrc.cjs` with `@typescript-eslint`, `react-hooks`, and `react-refresh` plugins.
- **No inline styles** — use Tailwind utility classes.
- **No global state** — all data flows from `usePortfolio()` → `<App>` → components as props.
- **No new dependencies** without discussion — the project intentionally keeps its dependency tree small.
- Keep component files focused: one default export per file, presentational-only (no data fetching inside components).

---

## 5. Project Structure (Quick Reference)

```
src/
├── main.tsx              # Entry — mounts React app + Vercel Analytics
├── App.tsx               # Root — fetches data, renders layout
├── hooks/
│   └── usePortfolio.ts   # Fetch hook + all TypeScript types
└── components/           # One file per section component
public/
└── portfolio.json        # All portfolio content (edit this for content changes)
index.html                # HTML shell — meta tags, JSON-LD, <div id="root">
```

---

## 6. Branching Convention

```bash
# For a bug fix
git checkout -b fix/scroll-button-visibility

# For a new feature
git checkout -b feat/add-certifications-section

# For a content update
git checkout -b content/update-experience-tcs
```

---

## 7. Before Opening a Pull Request

- [ ] `npm run lint` passes with zero warnings
- [ ] `npm run build` completes without TypeScript errors
- [ ] Tested in Chrome/Firefox at both desktop and mobile widths
- [ ] `public/portfolio.json` is valid JSON (paste into [jsonlint.com](https://jsonlint.com) if unsure)
- [ ] No `console.log` or commented-out code left behind
