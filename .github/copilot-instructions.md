# Core Hub Plex - Copilot Instructions

## Tech Stack

- **Framework:** Astro v6 (SSR via `@astrojs/node`, mode: "standalone")
- **UI Library:** React (via `@astrojs/react`) — only for Swiper gallery carousel
- **CSS:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Language:** TypeScript (strict mode via `astro/tsconfigs/strict`)
- **Backend:** WordPress headless CMS via REST API (`{API_URL}/wp/v2/`)
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

- **Astro components:** PascalCase (`CoreHeader.astro`, `GalleryGrid.astro`)
- **React/JSX components:** PascalCase (`SwiperGallery.jsx`)
- **Plain JS/TS files:** camelCase (`formatDate`, `nullToEmptyString`)
- **Zod schemas:** PascalCase with "Schema" suffix (`PostSchema`, `GallerySchema`)
- **Inferred types:** PascalCase matching schema name (`Post`, `Galeria`, `MenuItem`)
- **Props interface:** `interface Props { ... }` in component frontmatter
- **Folders:** camelCase (`blog/`, `galleries/`, `ui/FrontPage/`)
- **Environment variables:** UPPER_SNAKE_CASE (`API_URL`, `HOME_URL`)
- **Routes/slugs:** kebab-case (`/blog/categoria/tecnologia`)

## Imports

- Use `@/` alias for `src/`:
  ```astro
  import CoreLayout from '@/layouts/CoreLayout.astro'
  import { PostSchema } from '@/types'
  import { formatDate } from '@/helpers'
  ```
- Relative imports for same-directory siblings:
  ```astro
  import PostMeta from './PostMeta.astro'
  ```
- Type-only imports:
  ```ts
  import type { Post } from '@/types'
  ```

## Data Flow

1. Fetch from WordPress REST API (`{API_URL}/wp/v2/{endpoint}`)
2. Validate response with Zod `.safeParse()`
3. Redirect to `/404` if parsing fails:
   ```astro
   const post = PostSchema.safeParse(json[0]);
   if (!post.success) return Astro.redirect('/404');
   ```
4. Pass validated data to child components via `Astro.props`

## Rendering Modes

- **SSR (dynamic):** `export const prerender = false` for `blog/[slug]` and `galerias/[slug]`
- **SSG (static):** `getStaticPaths()` for category/tag/author listing pages
- **Default (static):** homepage, blog listing, gallery listing, contact, 404

## Component Patterns

- Astro component with frontmatter:
  ```astro
  ---
  interface Props { post: Post; }
  const { post } = Astro.props;
  ---
  ```
- Safe access with optional chaining:
  ```astro
  {post?.featured_images?.medium_large?.url && (
    <Picture src={...} />
  )}
  ```

## CSS Conventions

- Tailwind CSS v4 with `@import "tailwindcss"` and `@utility` directives
- Custom neobrutalist utilities: `.neo-border-*`, `.neo-shadow-*`, `.neo-hover-*`
- Neon color palette: pink, cyan, green, yellow, orange, purple, blue, red
- Dark theme background: `#0a0a0a`
- Fonts: Syne (headings), JetBrains Mono (secondary), Rubik (body)
- Uppercase-heavy styling for headers and navigation
- Custom CSS section comments: `/* Ticker / Marquee animation */`

## Error Handling

- Zod `.safeParse()` with redirect on failure
- Optional chaining for missing data
- Zod + Notyf for form validation feedback
- No try/catch around fetch calls (assume API availability)
- Custom 404 page at `src/pages/404.astro`

## Forms

- Contact form uses Astro Actions (`src/actions/contact.ts`)
- Validation via Zod schema with `z.preprocess(nullToEmptyString, ...)`
- Errors caught with `isInputError(error)` → Notyf toast
- Submission to WordPress Contact Form 7 REST API

## Image Handling

- Astro `<Picture>` component for responsive images (AVIF/WebP)
- Remote images allowed from defined domains in config
- WordPress featured images with size variants (medium, medium_large, large, full)
- PhotoSwipe for gallery lightbox

## Additional Conventions

- Entire site in **Spanish** (`<html lang="es">`, `es-ES` locale for dates)
- No testing framework configured
- Prettier config: `semi: true`, `singleQuote: true`, `tabWidth: 2`, `trailingComma: "es5"`
- No ESLint configured
- No authentication — fully public site
- No i18n framework — single locale
