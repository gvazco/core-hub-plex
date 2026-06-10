import { c as createComponent } from './_astro_assets_Bq7iKUa6.mjs';
import 'piccolore';
import { k as createRenderInstruction, f as addAttribute, h as renderTemplate, m as maybeRenderHead, j as renderComponent, l as renderHead, n as renderSlot, o as renderTransition, q as fade, s as slide } from './server_BVqo3V-3.mjs';
import 'clsx';
import { z } from 'zod';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/node_modules/astro/components/ClientRouter.astro", void 0);

const $$CoreMainNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CoreMainNav;
  const navigation = [
    { name: "Tecnología", href: "/blog/categoria/tecnologia" },
    { name: "Cultura", href: "/blog/categoria/cultura" },
    { name: "Galerías", href: "/galerias" },
    { name: "Más", href: "/blog" }
  ];
  const currentPath = Astro2.url.pathname;
  const isActive = (href) => {
    if (href === "/") return currentPath === "/";
    if (href === "/blog") return currentPath === "/blog";
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };
  return renderTemplate`${maybeRenderHead()}<nav class="hidden md:flex gap-8 font-mono font-bold text-lg"> ${navigation.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`${isActive(item.href) ? "text-neon-yellow" : "text-white hover:text-neon-yellow"} uppercase text-lg font-bold`, "class")}> ${item.name} </a>`)} </nav>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/CoreMainNav.astro", void 0);

const $$CoreMobileMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="mobile-menu" class="hidden md:hidden fixed inset-x-0 top-0 h-dvh z-40 bg-dark overflow-y-auto"> <div class="pt-28 px-6 pb-8 space-y-4 flex flex-col"> <a href="#about" class="block px-2 py-4 text-lg font-bold bg-dark text-white neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer text-center uppercase">Acerca de</a> <a href="/blog" class="block px-2 py-4 text-lg font-bold bg-dark text-white neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer text-center uppercase">Blog</a> <a href="/galerias" class="block px-2 py-4 text-lg font-bold bg-dark text-white neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer text-center uppercase">Galerías</a> <a href="/colaboradores" class="block px-2 py-4 text-lg font-bold bg-dark text-white neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer text-center uppercase">Colaboradores</a> </div> </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/CoreMobileMenu.astro", void 0);

const $$CoreHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CoreHeader;
  return renderTemplate`${maybeRenderHead()}<header class="border-b-4 border-neon-cyan p-6 bg-dark sticky top-0 z-50"> <nav class="max-w-7xl mt-5 md:mt-0 mx-auto flex justify-between items-center gap-2"> <a href="/" class="text-xl lg:text-4xl font-extrabold tracking-tighter text-neon-cyan uppercase flex items-center gap-2"> <span class="bg-neon-cyan text-dark px-2 py-1 relative"> <span class="absolute inset-0 neo-border-cyan mt-1 ml-1 mix-blend-screen opacity-50"></span>
COREHUB
</span>
PLEX
</a> ${renderComponent($$result, "CoreMainNav", $$CoreMainNav, {})} <!-- <button
      class="hidden lg:block bg-neon-pink text-white px-6 py-3 font-bold font-mono text-xl neo-border-pink neo-shadow-yellow neo-hover-yellow transition-neo"
    >
      SUSCRIBIRSE
    </button> --> <!-- Hamburger Button --> <div class="md:hidden"> <button id="menu-toggler" type="button" class="menu-toggler flex flex-col gap-1.5 p-2 cursor-pointer" aria-label="Abrir menú"> <span class="bar block w-8 h-1 bg-dark transition-all duration-300 origin-center"></span> <span class="bar block w-8 h-1 bg-dark transition-all duration-300"></span> <span class="bar block w-8 h-1 bg-dark transition-all duration-300 origin-center"></span> </button> </div> <!-- Mobile Menu Overlay --> ${renderComponent($$result, "CoreMobileMenu", $$CoreMobileMenu, {})} </nav> </header>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/CoreHeader.astro", void 0);

const $$CoreFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-neon-green p-8 border-t-8 border-white text-dark relative overflow-hidden"> <!-- Textura de fondo exagerada --> <div class="absolute -right-20 -bottom-20 text-[25vw] font-black opacity-10 leading-none select-none pointer-events-none text-dark">
NEWS
</div> <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 border-4 border-dark p-8 bg-neon-green neo-shadow-pink"> <div class="col-span-1 md:col-span-2"> <a href="#" class="text-2xl md:text-4xl text-center font-extrabold tracking-tighter uppercase inline-block mb-6 neo-border-green border-4 border-dark bg-white px-4 py-2 neo-shadow-pink hover:-translate-y-2 transition-transform">
CORE HUB PLEX
</a> <p class="font-mono text-xl font-bold max-w-sm mb-8 bg-dark text-neon-green p-4 border-2 border-dark">
La verdad, renderizada y sin filtros. Directamente a tu córtex.
</p> <div class="flex gap-4"> <a href="#" class="w-14 h-14 bg-dark border-2 border-dark flex items-center justify-center text-white text-2xl neo-hover-pink neo-shadow-pink transition-all font-mono font-bold">𝕏</a> <a href="#" class="w-14 h-14 bg-dark border-2 border-dark flex items-center justify-center text-white text-2xl neo-hover-cyan neo-shadow-cyan transition-all font-mono font-bold">IG</a> <a href="#" class="w-14 h-14 bg-dark border-2 border-dark flex items-center justify-center text-white text-2xl neo-hover-yellow neo-shadow-yellow transition-all font-mono font-bold">YT</a> </div> </div> <div class="flex flex-col gap-4 font-mono font-bold text-lg"> <h4 class="text-2xl font-black uppercase mb-4 border-b-4 border-dark pb-2 bg-dark text-neon-green px-2 inline-block self-start">
Secciones
</h4> <a href="#" class="hover:text-white hover:pl-2 hover:line-through transition-all">
TECNOLOGÍA</a> <a href="#" class="hover:text-white hover:pl-2 hover:line-through transition-all">
CIENCIA</a> <a href="#" class="hover:text-white hover:pl-2 hover:line-through transition-all">
FOTOGRAFÍA</a> <a href="#" class="hover:text-white hover:pl-2 hover:line-through transition-all">
CULTURA</a> </div> <div class="flex flex-col gap-4 font-mono font-bold text-lg"> <h4 class="text-2xl font-black uppercase mb-4 border-b-4 border-dark pb-2 bg-dark text-neon-green px-2 inline-block self-start">
Legal
</h4> <a href="#" class="hover:text-white hover:pl-2 transition-all">Privacidad y Cookies</a> <a href="#" class="hover:text-white hover:pl-2 transition-all">Términos de Uso</a> <a href="#" class="hover:text-white hover:pl-2 transition-all">Contacto Seguro</a> <a href="#" class="hover:text-white hover:pl-2 transition-all">Colaboradores</a> </div> </div> <div class="max-w-7xl mx-auto mt-12 pt-8 flex flex-col md:flex-row justify-between items-center font-mono font-black text-xl bg-dark text-white p-4"> <p>© 2026 CYBER NOTICIAS. ///</p> <p class="mt-4 md:mt-0 text-neon-pink">TRANSMITIENDO DESDE LA RED GLOBAL</p> </div> </footer>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/CoreFooter.astro", void 0);

const $$CoreLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CoreLayout;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Core Hub Plex</title><meta property="og:image" content="/fijacion.webp"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="antialiased selection:bg-neon-pink selection:text-white"> ${renderComponent($$result, "CoreHeader", $$CoreHeader, { "data-astro-transition-scope": renderTransition($$result, "xgoelquk", fade({ duration: ".5s" })) })} <main class="bg-dark max-w-7xl mx-auto lg:-mt-20 px-5 md:px-0 relative"> <div${addAttribute(renderTransition($$result, "c2pe53g5", slide({ duration: "1s" })), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </div> </main> ${renderSlot($$result, $$slots["after-main-content"])} ${renderComponent($$result, "CoreFooter", $$CoreFooter, { "data-astro-transition-scope": renderTransition($$result, "oz7nvk5t", fade({ duration: ".5s" })) })} ${renderScript($$result, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/layouts/CoreLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/layouts/CoreLayout.astro", "self");

const DirectusBaseSchema = z.object({
  id: z.number(),
  title: z.string(),
  subtitle: z.string().optional(),
  slug: z.string(),
  content: z.string().nullable().optional(),
  cover_image: z.string(),
  seo_title: z.string().optional(),
  seo_description: z.string().nullable().optional(),
  status: z.enum(["draft", "published", "archived"]).optional()
});
const DirectusGalleriesPageArraySchema = z.array(DirectusBaseSchema);
z.object({
  data: DirectusGalleriesPageArraySchema
});
const DirectusBlogPageArraySchema = z.array(DirectusBaseSchema);
z.object({
  data: DirectusBlogPageArraySchema
});
const DirectusGalleryJunctionSchema = z.object({
  id: z.number(),
  galleries_id: z.number(),
  directus_files_id: z.string()
});
const DirectusGalleriesSchema = DirectusBaseSchema.extend({
  user_created: z.string(),
  date_created: z.string().datetime(),
  date_updated: z.string().datetime().nullable().optional(),
  user_updated: z.string().nullable().optional(),
  excerpt: z.string().optional(),
  author: z.number(),
  gallery_category: z.number(),
  gallery_tag: z.number(),
  gallery: z.array(DirectusGalleryJunctionSchema).optional()
});
z.object({
  directus_files_id: z.object({
    id: z.string(),
    filename_disk: z.string(),
    filename_download: z.string(),
    title: z.string(),
    width: z.number().nullable(),
    height: z.number().nullable(),
    description: z.string().nullable()
  })
});
const DirectusGalleriesArraySchema = z.array(DirectusGalleriesSchema);
z.object({
  data: DirectusGalleriesArraySchema
});
const DirectusCategorySchema = z.object({
  id: z.number(),
  status: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable()
});
z.array(
  DirectusCategorySchema.pick({
    slug: true
  })
);
z.array(DirectusCategorySchema);
const DirectusFileSchema = z.object({
  id: z.string(),
  storage: z.string(),
  filename_disk: z.string(),
  filename_download: z.string(),
  title: z.string().nullable().optional(),
  type: z.string(),
  created_on: z.string(),
  modified_on: z.string(),
  charset: z.string().nullable().optional(),
  filesize: z.union([z.string(), z.number()]),
  width: z.number().nullable().optional(),
  height: z.number().nullable().optional(),
  duration: z.number().nullable().optional(),
  embed: z.unknown().nullable().optional(),
  description: z.string().nullable().optional(),
  location: z.unknown().nullable().optional(),
  tags: z.unknown().nullable().optional(),
  metadata: z.record(z.unknown()).nullable().optional(),
  focal_point_x: z.number().nullable().optional(),
  focal_point_y: z.number().nullable().optional(),
  tus_id: z.unknown().nullable().optional(),
  tus_data: z.unknown().nullable().optional(),
  uploaded_on: z.string()
});
const DirectusGalleryJunctionWithFileSchema = z.object({
  directus_files_id: z.object({
    id: z.string(),
    filename_disk: z.string(),
    filename_download: z.string(),
    title: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    type: z.string(),
    filesize: z.number(),
    width: z.number().nullable().optional(),
    height: z.number().nullable().optional()
  }).passthrough()
});
const DirectusAuthorSchema = z.object({
  id: z.number(),
  status: z.string(),
  name: z.string(),
  email: z.string(),
  bio: z.string(),
  avatar: z.union([z.string(), DirectusFileSchema]),
  social_links: z.object({
    facebook: z.string(),
    instagram: z.string()
  }),
  slug: z.string()
});
z.array(
  DirectusAuthorSchema.pick({
    slug: true
  })
);
z.array(DirectusAuthorSchema);
const DirectusGalleriesCollectionSchema = DirectusBaseSchema.extend({
  user_created: z.string(),
  date_created: z.string().datetime(),
  date_updated: z.string().datetime().nullable().optional(),
  user_updated: z.string().nullable().optional(),
  excerpt: z.string().optional(),
  gallery: z.array(DirectusGalleryJunctionWithFileSchema).optional(),
  gallery_category: DirectusCategorySchema,
  gallery_tag: DirectusCategorySchema,
  author: DirectusAuthorSchema
});
const DirectusGalleriesCollectionArraySchema = z.array(DirectusGalleriesCollectionSchema);
z.object({
  data: DirectusGalleriesCollectionArraySchema
});
const DirectusGalleriesCategoryArraySchema = z.array(DirectusCategorySchema);
z.object({
  data: DirectusGalleriesCategoryArraySchema
});
const DirectusArticlesCollectionSchema = DirectusBaseSchema.extend({
  user_created: z.string(),
  date_created: z.string().datetime(),
  date_updated: z.string().datetime().nullable().optional(),
  user_updated: z.string().nullable().optional(),
  excerpt: z.string().optional(),
  cover_audio: z.string().nullable().optional(),
  markdown: z.boolean().optional(),
  markdown_disabled: z.string().nullable().optional(),
  markdown_enabled: z.string().nullable().optional(),
  video_cover: z.string().nullable().optional(),
  video_enabled: z.boolean().optional(),
  gallery_enabled: z.boolean().optional(),
  gallery_slug: z.string().nullable().optional(),
  banner_description: z.string().nullable().optional(),
  banner_image: z.string().nullable().optional(),
  article_category: DirectusCategorySchema,
  article_tags: DirectusCategorySchema,
  author: DirectusAuthorSchema
});
const DirectusArticlesCollectionArraySchema = z.array(DirectusArticlesCollectionSchema);
z.object({
  data: DirectusArticlesCollectionArraySchema
});
const DirectusArticlesCategoryArraySchema = z.array(DirectusCategorySchema);
z.object({
  data: DirectusArticlesCategoryArraySchema
});
const DirectusPageIndexSchema = z.object({
  id: z.number(),
  status: z.enum(["draft", "published", "archived"]).optional(),
  date_created: z.string().datetime(),
  date_updated: z.string().datetime().nullable().optional(),
  title: z.string(),
  epigraph: z.string().nullable().optional(),
  subtitle: z.string().nullable().optional(),
  excerpt: z.string().nullable().optional(),
  slug: z.string(),
  cover_image: DirectusFileSchema.nullable().optional(),
  impact_title: z.string().nullable().optional(),
  impact_excerpt: z.string().nullable().optional(),
  impact_slug: z.string().nullable().optional(),
  impact_category: DirectusCategorySchema.nullable().optional(),
  impact_tag: DirectusCategorySchema.nullable().optional(),
  background_title: z.string().nullable().optional(),
  background_slug: z.string().nullable().optional(),
  background_date: z.string(),
  background_category: DirectusCategorySchema.nullable().optional(),
  background_tag: DirectusCategorySchema.nullable().optional(),
  background_author: DirectusAuthorSchema.nullable().optional(),
  izq_title: z.string().nullable().optional(),
  izq_slug: z.string().nullable().optional(),
  izq_category: DirectusCategorySchema.nullable().optional(),
  izq_tag: DirectusCategorySchema.nullable().optional(),
  izq_image: DirectusFileSchema.nullable().optional(),
  cen_title: z.string().nullable().optional(),
  cen_slug: z.string().nullable().optional(),
  cen_category: DirectusCategorySchema.nullable().optional(),
  cen_tag: DirectusCategorySchema.nullable().optional(),
  cen_image: DirectusFileSchema.nullable().optional(),
  der_title: z.string().nullable().optional(),
  der_slug: z.string().nullable().optional(),
  der_category: DirectusCategorySchema.nullable().optional(),
  der_tag: DirectusCategorySchema.nullable().optional(),
  der_image: DirectusFileSchema.nullable().optional(),
  holder_category: DirectusCategorySchema.nullable().optional(),
  holder_tag: DirectusCategorySchema.nullable().optional()
});
z.object({
  data: DirectusPageIndexSchema
});
const DirectusMarkerSchema = z.object({
  label: z.string(),
  default_label: z.string(),
  lat: z.number(),
  lng: z.number()
});
const DirectusLocationSchema = z.object({
  lat: z.number(),
  lng: z.number(),
  zoom: z.number(),
  markers: z.array(DirectusMarkerSchema)
});
const DirectusContactPageSchema = DirectusBaseSchema.extend({
  location: z.object({
    location: DirectusLocationSchema
  }).nullable().optional()
});
const DirectusContactPageArraySchema = z.array(DirectusContactPageSchema);
z.object({
  data: DirectusContactPageArraySchema
});
const DirectusHotNewsSchema = z.object({
  id: z.number(),
  status: z.enum(["draft", "published", "archived"]).optional(),
  date_created: z.string().datetime().optional(),
  date_updated: z.string().datetime().nullable().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  article_url: z.string().optional(),
  icon: z.string().optional()
});
const DirectusHotNewsArraySchema = z.array(DirectusHotNewsSchema);
z.object({
  data: DirectusHotNewsArraySchema
});

export { $$CoreLayout as $, DirectusArticlesCollectionSchema as D, DirectusGalleriesCollectionSchema as a, renderScript as r };
