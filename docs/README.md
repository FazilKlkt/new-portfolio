# 📚 Documentation

Welcome to the `docs/` folder for **Fazil Husen's Portfolio** — a static personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

This folder contains everything a new contributor needs to understand, run, and extend this project.

---

## 📑 Table of Contents

| File | Description |
|------|-------------|
| [architecture.md](./architecture.md) | How the codebase is structured — entry points, data flow, component map |
| [portfolio-json-schema.md](./portfolio-json-schema.md) | Full reference for `public/portfolio.json` — the single data source that drives the entire site |
| [contributing.md](./contributing.md) | Step-by-step guide to setting up the project, making changes, and submitting contributions |
| [deployment.md](./deployment.md) | How the site is deployed to Vercel and Cloudflare Pages |

---

## 🚀 Quick Start (TL;DR)

```bash
# 1. Clone the repo
git clone https://github.com/FazilKlkt/new-portfolio.git
cd new-portfolio

# 2. Install dependencies (Node >= 20 required)
npm install

# 3. Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173` (or the next available port).

> **To update portfolio content** (name, experience, projects, skills, etc.), edit [`public/portfolio.json`](../public/portfolio.json) — no code changes needed.
