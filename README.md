# Portfolio

Personal portfolio for Dylan Teugels — Next.js 16 App Router, TypeScript, vanilla CSS.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy (Vercel)

Push to GitHub, import the repo in Vercel. Framework auto-detected; no env vars needed.

## Content

All content lives in [`src/lib/portfolio-data.ts`](src/lib/portfolio-data.ts). Edit the typed module, commit, deploy.

## Layout

- `src/app/` — layout (metadata, JSON-LD, fonts) + root page composing sections
- `src/components/` — one file per section, plus `reveal`, `typewriter`, `top-nav`, `site-footer`
- `src/app/globals.css` — vanilla CSS, OKLCH palette, CSS custom properties
- `public/` — `dylan.webp`, `llms.txt`
- `portfolio-v3/` — original Claude Design source, kept as design reference

## Phase 2

Planned admin dashboard (Supabase + `/admin` route) will replace the static TS module with a fetched JSONB row. Not yet implemented.
