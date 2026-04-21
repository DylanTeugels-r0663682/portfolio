# Portfolio

Personal portfolio for Dylan Teugels — Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4, Zod-validated content.

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

## Verify

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
npm run format:check
```

## Deploy (Vercel)

Push to GitHub, import the repo in Vercel. Framework auto-detected; no env vars needed.

## Content

All content lives in [`src/lib/content/data.json`](src/lib/content/data.json) and is validated at load time by the Zod schema in [`src/lib/content/schema.ts`](src/lib/content/schema.ts). Edit the JSON, commit, deploy.

Invalid data fails the build with a Zod error pointing at the offending field — no silent drift between data shape and UI expectations.

### Authoring guide

- `headline.leadLines`: 1-2 short phrases rendered above the rotating accent word.
- `headline.rotatingWords`: words that crossfade in the hero (3s cadence, disabled under `prefers-reduced-motion`).
- `headline.tail` (optional): suffix appended after the rotating word on the same line.
- `capabilities[].role`: primary role badge shown at the right of the collapsed accordion row.
- `capabilities[].otherRoles`: shown as `· +N` after the primary role.
- `capabilities[].teaser`: one-line scent shown under the title when the row is collapsed.

### Future admin panel

Content is read through `getPortfolio()` in [`src/lib/content/provider.ts`](src/lib/content/provider.ts), wrapped in `unstable_cache` with tag `"portfolio"`. To back it with a DB or CMS:

1. Replace the `PortfolioSchema.parse(raw)` call with a fetch (Supabase, Prisma, etc).
2. On write, call `revalidateTag("portfolio")` — the homepage re-renders without touching any component.

The Zod schema is reusable for write-side validation.

## Structure

- `src/app/` — layout (metadata, JSON-LD, fonts), root page, icon + apple-icon + opengraph-image (Next ImageResponse), not-found, error boundary, manifest, sitemap, robots.
- `src/components/ui/` — primitives: `Section`, `Container`, `Reveal`, `Typewriter`, `Chip`.
- `src/components/layout/` — `TopNav` (scroll-spy via IntersectionObserver).
- `src/components/` — one file per homepage section (`hero`, `section-*`).
- `src/lib/content/` — Zod schema, JSON data, cached provider.
- `src/lib/site.ts` — canonical site URL.
- `src/proxy.ts` — Next 16 proxy (renamed from `middleware.ts`) emitting a per-request CSP nonce.

## CSP

The proxy in `src/proxy.ts` emits `Content-Security-Policy` with a per-request nonce. The nonce is propagated through request headers via `x-nonce` and consumed in `layout.tsx` via `headers()`, applied to the JSON-LD script tag and (via Next internals) to every first-party script. Production uses `'strict-dynamic'`; development uses `'unsafe-eval'` (Next dev requires it).

## Accessibility

- Skip link jumps past the nav to `#main`.
- `<main id="main">` landmark wraps page content.
- Every section has `aria-labelledby` pointing at its heading.
- Scroll-spy sets `aria-current="location"` on the active nav link.
- `prefers-reduced-motion` disables reveal transitions and the word rotator crossfade.
- Keyboard-navigable `<details>` accordion for Capabilities.
