# AGENTS.md

Astro 6 SSR site (Spanish, Core Hub Plex). Node 22+ required — ignore stale `.nvmrc` (18.20.8); `engines` and the Dockerfile both use Node 22.

## Commands

- `npm run dev` — dev server (default :4321)
- `npm run build` — production build → `dist/` (SSR standalone output in `dist/server/entry.mjs`)
- `npm start` — serve the built SSR bundle (`node ./dist/server/entry.mjs`, `PORT` env override)
- `npm run preview` — preview the build
- No tests, no ESLint, no Prettier binary installed. `astro check` won't run (no `@astrojs/check`). Verification = `npm run build`.

## Env vars (required, gitignored)

`.env.development` / `.env.production` are local-only; a fresh clone has none, and `npm run build` fails without them. Define all of:

- `API_ITEMS` — Directus `/items` base URL (e.g. `https://core-cms.core-hub-plex.cloud/items`). Server-side only, no `PUBLIC_` prefix needed.
- `PUBLIC_ASSETS` — Directus `/assets` base URL. **Must** be `PUBLIC_`-prefixed because it's inlined in client-side JSX (`SwiperGallery.jsx`, `AwesomeSliderGallery.jsx`) and bundled at build time.
- `HOME_URL` — still used only by the contact action (WordPress CF7 endpoint).
- `FRONT_URL` — referenced in meta/OG URLs.

## Data source: Directus REST (not WordPress)

Despite `.github/copilot-instructions.md` (stale, describes a WordPress backend), all content comes from Directus:

- Pages fetch `${API_ITEMS}/<collection>` and validate with Zod schemas from `src/types/index.ts`.
- Directus filter/field syntax used everywhere: `filter[slug][_eq]=<x>`, `fields=*,<relation>.*` for nested objects, `sort=-id`, `limit=n`.
- Asset URLs are built as `${PUBLIC_ASSETS}/${fileId}` (or filename).
- Only `src/actions/contact.ts` still touches WordPress (`${HOME_URL}/wp-json/contact-form-7/v1/...`).

## Rendering modes

- `export const prerender = false` in `blog/[slug].astro` and `galerias/[slug].astro` → SSR, fetch per request.
- `getStaticPaths()` for `blog/categoria|etiqueta|autor/[slug]` and `galerias/categoria|etiqueta/[slug]` → fetched at build time.
- Homepage/listing/contact pages are static by default — their fetches also run at build time, so builds require a reachable CMS and valid env.

## Conventions

- Data flow: fetch → Zod `.safeParse()` → `Astro.redirect('/404')` on failure; destructure `data` for arrays wrapped in `{ data: [...] }`.
- `@/*` alias → `src/*` (e.g. `import PostCard from '@/components/blog/PostCard.astro'`).
- Site is Spanish: `<html lang="es">`, `es-ES` dates, `es-MX` currency.
- Zod schemas: PascalCase + `Schema` suffix; inferred types match schema name.
- React only for gallery carousels (`src/components/gallery/SwiperGallery.jsx`, `src/components/galleries/AwesomeSliderGallery.jsx`); everything else is `.astro`.
- Remote images must be served from domains listed in `astro.config.mjs` → `image.domains`.

## Gotchas

- `scripts/convert-images-to-base64.js` regenerates `src/assets/frames/images.js` from `.webp` files in `src/assets/frames/`, but that directory doesn't exist right now — don't run it unless you recreate it.
- `functions.php` at repo root is a legacy WordPress theme file, not part of the build — ignore it.
- No auth; fully public site; single locale (no i18n framework).
