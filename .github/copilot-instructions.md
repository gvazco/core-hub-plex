# Core Hub Plex - Copilot Instructions

## Summary
This file documents current conventions for the Core Hub Plex Astro site. It replaces the older WordPress-centered guidance: the project now consumes Directus REST endpoints and uses environment variables and asset handling aligned to Directus. Keep this file in sync with AGENTS.md and the repo README.

## Tech Stack

- **Framework:** Astro v6 (SSR via `@astrojs/node`, mode: "standalone")
- **UI Library:** React (via `@astrojs/react`) — used only for gallery carousels
- **CSS:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Language:** TypeScript (strict mode via `astro/tsconfigs/strict`)
- **Backend / CMS:** Directus headless CMS (Directus REST endpoints under `API_ITEMS`)
- **Package Manager:** npm
- **Module System:** ESM (`"type": "module"`)
- **Runtime:** Node.js >=22.12.0

## Key Dependencies

- `zod` — schema validation for API responses and forms
- `swiper` + `photoswipe` — gallery carousel and lightbox
- `leaflet` — contact page map
- `notyf` — toast notifications
- `aos` + `gsap` — scroll animations
- `sharp` — image optimization (build-time)

## Project Structure

```
src/
├── actions/          # Astro server actions (contact form)
├── assets/           # Images, SVGs, icons
├── components/
│   ├── blog/         # Blog post components
│   ├── contact/      # Contact form & map
│   ├── gallery/      # Gallery detail (Swiper, PhotoSwipe)
│   ├── galleries/    # Gallery listing
│   └── ui/           # Shared: header, footer, nav, FrontPage, Taxonomies
├── helpers/          # Utility functions (formatDate, formatAmount, etc.)
├── layouts/          # CoreLayout.astro
├── pages/            # File-based routing
├── styles/           # global.css (Tailwind v4 + custom CSS)
└── types/            # index.ts — all Zod schemas + inferred types
```

## Naming Conventions

- Astro components and React components: PascalCase (`CoreHeader.astro`, `SwiperGallery.jsx`)
- Plain JS/TS files and folders: camelCase (`formatDate`, `blog/`)
- Zod schemas: PascalCase with `Schema` suffix (`PostSchema`)
- Inferred types: PascalCase matching schema name (`Post`, `Galeria`)
- Props interface: `interface Props { ... }` in frontmatter
- Environment variables: UPPER_SNAKE_CASE (`API_ITEMS`, `PUBLIC_ASSETS`, `HOME_URL`)
- Routes/slugs: kebab-case (`/blog/categoria/tecnologia`)

## Imports

- Use `@/` alias for `src/`:
  ```astro
  import CoreLayout from '@/layouts/CoreLayout.astro'
  import { PostSchema } from '@/types'
  import { formatDate } from '@/helpers'
  ```
- Prefer type-only imports for types:
  ```ts
  import type { Post } from '@/types'
  ```

## Data Flow (Directus)

1. Fetch from Directus items endpoint: `${API_ITEMS}/<collection>?filter[slug][_eq]=<slug>&fields=*`.
2. Validate responses with Zod `.safeParse()` using schemas in `src/types/index.ts`.
3. If parsing fails, redirect to `/404`:
   ```astro
   const result = PostSchema.safeParse(json?.data?.[0]);
   if (!result.success) return Astro.redirect('/404');
   ```
4. Build asset URLs using `PUBLIC_ASSETS` (e.g., `${PUBLIC_ASSETS}/${fileId}`) for client-side components.
5. Pass validated data to child components via `Astro.props`.

Notes:
- Use Directus filter and fields syntax when querying (e.g., `filter[slug][_eq]`, `fields=*,gallery.*`).
- Prefer server-side validation and safe defaults; optional chaining in templates for missing fields.

## Environment variables (required)

- `API_ITEMS` — Directus `/items` base URL (server-side only)
- `PUBLIC_ASSETS` — Directus `/assets` base URL (must be `PUBLIC_`-prefixed for client usage)
- `HOME_URL` — used by contact action (legacy WordPress CF7 endpoint)
- `FRONT_URL` — used for meta/OG canonical URLs

## Rendering Modes

- SSR for per-slug pages: `export const prerender = false` (e.g., `blog/[slug]`, `galerias/[slug]`).
- `getStaticPaths()` for category/tag listing pages at build time.
- Default static builds for homepage, listings and contact (build requires reachable CMS and env vars).

## Component Patterns

- Astro components with frontmatter and typed Props:
  ```astro
  ---
  interface Props { post: Post }
  const { post } = Astro.props
  ---
  ```
- Use optional chaining when reading nested Directus relations.

## CSS Conventions

- Tailwind v4 utilities and project-specific utility classes (`.neo-border-*`, `.neo-shadow-*`).
- Neon palette; dark theme base `#0a0a0a`.

## Error Handling

- Validate remote data with Zod and redirect on failure.
- Use Notyf for user-facing form validation feedback.
- Avoid swallowing fetch errors silently; prefer visible failure modes during build.

## Forms

- Contact form remains implemented as an Astro Action (`src/actions/contact.ts`).
- Server-side Zod validation via `z.preprocess(nullToEmptyString, ...)`.
- Errors are surfaced via Notyf in the client.
- NOTE: Contact submission still posts to a WordPress Contact Form 7 endpoint (`HOME_URL`) — keep the env var set until the endpoint is migrated.

## Image & Asset Handling

- Use Astro `<Picture>` for responsive images; prefer AVIF/WebP variants when available.
- Build-time processing uses `sharp` for optimizations where configured.
- Client-side asset URLs must use `PUBLIC_ASSETS`.

## Additional Conventions

- Site language: Spanish — `<html lang="es">`, `es-ES` locale for dates and currency.
- No test framework configured; verification = `npm run build`.
- Prettier preferences: semi: true, singleQuote: true, tabWidth: 2.
- No ESLint configured.

## Notes for Copilot / Contributors

- Prefer `search_code_subagent` for broad code discovery; use `glob`/`grep`/`view` for narrow searches.
- When changing API usage, update `src/types/index.ts` Zod schemas and adjust fetch calls accordingly.
- Keep AGENTS.md and this file aligned — AGENTS.md contains runtime notes and gotchas.

---
Updated to reflect Directus backend and project conventions. Keep this file current when data sources, env vars, or rendering modes change.
