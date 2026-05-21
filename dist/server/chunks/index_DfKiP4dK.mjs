import { c as createComponent } from './_astro_assets_BI2qFaLy.mjs';
import 'piccolore';
import { k as createRenderInstruction, h as addAttribute, f as renderTemplate, m as maybeRenderHead, j as renderComponent, l as renderHead, n as renderSlot, o as renderTransition, q as fade, s as slide } from './server_DkRgwtnl.mjs';
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
  return renderTemplate`${maybeRenderHead()}<div id="mobile-menu" class="hidden md:hidden top-25 left-0 px-4 absolute w-full h-full bg-dark border-b-4 border-black dark:border-primary"> <div class="py-4 pt-4 px-4 space-y-4 flex flex-col bg-dark"> <a href="#about" class="block px-2 py-4 text-lg font-bold bg-dark text-white p-6 neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer text-center uppercase">Acerca de</a> <a href="/blog" class="block px-2 py-4 text-lg font-bold bg-dark text-white p-6 neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer text-center uppercase">Blog</a> <a href="/galerias" class="block px-2 py-4 text-lg font-bold bg-dark text-white p-6 neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer text-center uppercase">Galerías</a> <a href="/colaboradores" class="block px-2 py-4 text-lg font-bold bg-dark text-white p-6 neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer text-center uppercase">Colaboradores</a> </div> </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/CoreMobileMenu.astro", void 0);

const $$CoreHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CoreHeader;
  return renderTemplate`${maybeRenderHead()}<header class="border-b-4 border-neon-cyan p-6 bg-dark sticky top-0 z-50"> <nav class="max-w-7xl mt-5 md:mt-0 mx-auto flex justify-between items-center gap-2"> <a href="/" class="text-xl lg:text-4xl font-extrabold tracking-tighter text-neon-cyan uppercase flex items-center gap-2"> <span class="bg-neon-cyan text-dark px-2 py-1 relative"> <span class="absolute inset-0 neo-border-cyan mt-1 ml-1 mix-blend-screen opacity-50"></span>
COREHUB
</span>
PLEX
</a> ${renderComponent($$result, "CoreMainNav", $$CoreMainNav, {})} <button class="hidden lg:block bg-neon-pink text-white px-6 py-3 font-bold font-mono text-xl neo-border-pink neo-shadow-yellow neo-hover-yellow transition-neo">
SUSCRIBIRSE
</button> <div class="md:hidden bg-neon-pink text-dark font-bold font-mono text-xl neo-border-pink neo-shadow-yellow-btn neo-hover-yellow transition-neo"> <button id="mobile-menu-btn" type="button" class="p-4 border-4 border-black dark:border-white bg-primary text-black menu-icon" aria-label="Abrir menú"></button> </div> <!-- Mobile Menu Overlay --> ${renderComponent($$result, "CoreMobileMenu", $$CoreMobileMenu, {})} </nav> </header>`;
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
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Core Hub Plex</title><meta property="og:image" content="/fijacion.webp"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="antialiased selection:bg-neon-pink selection:text-white"> ${renderComponent($$result, "CoreHeader", $$CoreHeader, { "data-astro-transition-scope": renderTransition($$result, "zszuddae", fade({ duration: ".5s" })) })} <main class="bg-dark max-w-7xl mx-auto lg:-mt-20 px-3 md:px-0 relative"> <div${addAttribute(renderTransition($$result, "hibkxd4m", slide({ duration: "1s" })), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </div> </main> ${renderSlot($$result, $$slots["after-main-content"])} ${renderComponent($$result, "CoreFooter", $$CoreFooter, { "data-astro-transition-scope": renderTransition($$result, "6hfyrt5x", fade({ duration: ".5s" })) })} ${renderScript($$result, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/layouts/CoreLayout.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/layouts/CoreLayout.astro?astro&type=script&index=1&lang.ts")} </body> </html>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/layouts/CoreLayout.astro", "self");

const imageSchema = z.object({
  url: z.string().nullable().optional(),
  width: z.number().nullable().optional(),
  height: z.number().nullable().optional(),
  caption: z.string().nullable().optional()
});
const maybeImageString = z.union([z.string(), z.literal(false)]).nullable().optional();
const featureImagesSchema = z.object({
  medium: imageSchema,
  medium_large: imageSchema,
  large: imageSchema,
  full: imageSchema
});
const BaseWPSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.object({
    rendered: z.string()
  }),
  content: z.object({
    rendered: z.string()
  }),
  featured_images: featureImagesSchema.optional(),
  acf: z.object({
    subtitle: z.string().optional()
  })
});
const NewsInformeSchema = z.object({
  title: z.object({
    rendered: z.string()
  }),
  acf: z.object({
    informe: z.string(),
    url: z.string()
  })
});
z.array(NewsInformeSchema);
const gallerySchema = z.object({
  large: imageSchema,
  full: imageSchema,
  caption: z.string().optional()
});
BaseWPSchema.extend({
  gallery: z.array(gallerySchema)
});
const GallerySchema = BaseWPSchema.omit({
  content: true
}).extend({
  date: z.string(),
  acf: z.object({
    historia: z.string().optional()
  }),
  gallery: z.array(gallerySchema).optional()
});
z.array(GallerySchema);
const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string()
});
z.array(
  CategorySchema.pick({
    slug: true
  })
);
const CategoriesSchema = z.array(CategorySchema);
const AutorSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  acf: z.object({
    formacion: z.string(),
    biografia: z.string(),
    imagen: maybeImageString
  }).optional()
});
z.array(
  AutorSchema.pick({
    slug: true
  })
);
const AutoresSchema = z.array(AutorSchema);
const PostSchema = BaseWPSchema.extend({
  acf: z.object({
    subtitle: z.string().optional(),
    video_url: z.string().nullable().optional(),
    gallery_banner: z.object({
      gallery_url: z.string().nullable().optional(),
      banner_description: z.string().nullable().optional(),
      gallery_cover: z.union([z.string(), z.boolean()]).optional()
    }).nullable().optional(),
    options: z.object({
      video_enabled: z.boolean(),
      gallery_enabled: z.boolean()
    }).optional()
  }),
  date: z.string(),
  category_details: CategoriesSchema,
  tag_details: CategoriesSchema.optional(),
  author_details: AutoresSchema.optional()
});
z.array(PostSchema);
const GaleriaSchema = BaseWPSchema.extend({
  acf: z.object({
    historia: z.string().optional()
  }),
  gallery: z.array(gallerySchema).optional(),
  date: z.string(),
  category_details: CategoriesSchema,
  tecnica_details: CategoriesSchema.optional(),
  author_details: AutoresSchema.optional()
});
z.array(GaleriaSchema);
const InicioSchema = BaseWPSchema.omit({
  content: true
}).extend({
  acf: z.object({
    subtitle: z.string().optional(),
    titular: z.object({
      epigrafe: z.string(),
      titulo: z.string(),
      subtitulo: z.string().optional(),
      resumen: z.string().optional(),
      categoria: z.string(),
      etiqueta: z.string(),
      slug: z.string()
    }),
    columna: z.object({
      impacto: z.object({
        titulo: z.string(),
        resumen: z.string().optional(),
        categoria: z.string(),
        etiqueta: z.string(),
        slug: z.string()
      }),
      fondo: z.object({
        titulo: z.string(),
        categoria: z.string(),
        etiqueta: z.string(),
        autor: z.string(),
        fecha: z.string(),
        slug: z.string()
      })
    }),
    secundarias: z.object({
      izquierda: z.object({
        titulo: z.string(),
        categoria: z.string(),
        etiqueta: z.string(),
        imagen: maybeImageString,
        slug: z.string()
      }),
      centro: z.object({
        titulo: z.string(),
        categoria: z.string(),
        etiqueta: z.string(),
        imagen: maybeImageString,
        slug: z.string()
      }),
      derecha: z.object({
        titulo: z.string(),
        categoria: z.string(),
        etiqueta: z.string(),
        imagen: maybeImageString,
        slug: z.string()
      })
    })
  }),
  date: z.string()
});
z.array(InicioSchema);
const MenuItemSchema = BaseWPSchema.pick({
  title: true,
  slug: true,
  featured_images: true
}).extend({
  link: z.string(),
  acf: z.object({
    description: z.string(),
    price: z.coerce.number()
  })
});
z.array(MenuItemSchema);
const MarkerSchema = z.object({
  label: z.string(),
  lat: z.number(),
  lng: z.number()
});
const LocationSchema = z.object({
  lat: z.number(),
  lng: z.number(),
  zoom: z.number(),
  markers: z.array(MarkerSchema)
});
BaseWPSchema.extend({
  acf: z.object({
    subtitle: z.string()
  }).catchall(LocationSchema)
});

export { $$CoreLayout as $, GaleriaSchema as G, PostSchema as P, renderScript as r };
