# 🚀 Deployment

This portfolio is deployed to two platforms. The primary production URL is **`fazilhusen.com`**.

---

## Production Environments

| Platform | URL | Status |
|----------|-----|--------|
| Vercel | `fazil6.vercel.app` → redirects to `fazilhusen.com` | Primary host |
| Cloudflare Pages | configured via `wrangler.json` | Alternative / backup |

---

## How Builds Work

The project is a **static SPA** — `npm run build` produces a `dist/` folder containing:
- `index.html` (the HTML shell)
- Hashed JS and CSS bundles (e.g., `main.abc123.js`)
- All files from `public/` copied as-is (including `portfolio.json`, `robots.txt`, `sitemap.xml`, `icon.svg`)

Vite's output filename pattern is configured in `vite.config.ts`:
```ts
output: {
  entryFileNames: "[name].[hash].js",
  chunkFileNames: "[name].[hash].js",
  assetFileNames: "[name].[hash].[ext]",
}
```

---

## Vercel

### Automatic deploys

Vercel is connected to the GitHub repository. Every push to the default branch triggers a new production deployment automatically.

### Redirect rules

`vercel.json` defines a 301 redirect that forwards all traffic from the old Vercel subdomain to the custom domain:

```json
{
  "redirects": [
    {
      "source": "/(.*)",
      "has": [{ "type": "host", "value": "fazil6.vercel.app" }],
      "destination": "https://fazilhusen.com/$1",
      "statusCode": 301
    }
  ]
}
```

### Manual deploy (CLI)

```bash
# Install the Vercel CLI if you don't have it
npm i -g vercel

# Deploy to production
vercel --prod
```

---

## Cloudflare Pages

The Cloudflare Pages project is configured in `wrangler.json`. To deploy manually:

```bash
# Install Wrangler CLI if you don't have it
npm i -g wrangler

# Authenticate
wrangler login

# Build first
npm run build

# Deploy
wrangler pages deploy dist/
```

---

## SPA Routing

This site is a **single-page application with no client-side routing** — there is only one route (`/`). In-page navigation uses anchor links (`#experience`, `#projects`, etc.) that scroll to section elements by `id`.

Both Vercel and Cloudflare Pages serve `index.html` for all requests by default, which is the correct behavior for this app.

---

## SEO Assets

These files are in `public/` and are deployed unchanged:

| File | Purpose |
|------|---------|
| `robots.txt` | Instructs search engine crawlers |
| `sitemap.xml` | Lists the canonical URL for indexing |
| `icon.svg` | Favicon + Open Graph image |

The `index.html` file contains:
- Full `<meta>` tags (title, description, keywords, author)
- Open Graph tags (for social sharing previews)
- Twitter Card tags
- JSON-LD structured data (`schema.org/Person`)
- A `<link rel="canonical">` tag pointing to `https://fazilhusen.com/`

If the domain ever changes, update the canonical URL and all absolute URLs in `index.html`.
