import { c as createComponent, $ as $$Picture } from './_astro_assets_BI2qFaLy.mjs';
import 'piccolore';
import { m as maybeRenderHead, f as renderTemplate, h as addAttribute, j as renderComponent, u as unescapeHTML } from './server_DkRgwtnl.mjs';
import { P as PostSchema, $ as $$CoreLayout } from './index_DfKiP4dK.mjs';
import 'clsx';
import { f as formatDate } from './index_By2z1dI5.mjs';

const $$PostMeta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostMeta;
  const { date, author } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-sm"> <p>Publicado el: <span class="text-neon-cyan">${formatDate(date)}</span></p> ${author && renderTemplate`<p>
Autor:${" "} <span class="text-neon-cyan"> <a href="/blog/autor/">${author}</a> </span> </p>`} </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/blog/PostMeta.astro", void 0);

const $$PostCategories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostCategories;
  const { name, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/blog/categoria/${slug}`, "href")} class="max-w-xs inline-block py-1 px-5 text-sm text-white ml-2 mr-2 bg-dark neo-border-pink p-5 neo-shadow-pink neo-hover-pink transition-neo"> ${name} </a>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/blog/PostCategories.astro", void 0);

const $$GalleryBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GalleryBanner;
  const { acf } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-gallery-banner class="fixed bottom-[3%] w-[98%] md:w-full max-w-[888px] left-1/2 -translate-x-1/2 bg-[#ffde59] dark:bg-black border-4 border-black dark:border-white neo-shadow-yellow-btn p-3 neo-border-pink neo-shadow-yellow-btn neo-hover-yellow transition-neo"> <div data-gallery-close role="button" tabindex="0" aria-label="Cerrar banner" class="close-icon absolute -top-3 -right-1 w-8 h-8 bg-neon-pink dark:bg-violet border-2 border-black dark:border-white cursor-pointer"></div> <div class="flex items-center justify-between"> <div class="flex items-center"> <div> <h3 class="text-lg md:text-xl lg:text-2xl font-black text-black dark:text-white uppercase tracking-tight">
Galería Fotográfica
</h3> <p class="text-black dark:text-gray-300 font-bold text-xs md:text-md lg:text-lg">
Tenemos muchas fotos para mostrar, haz click en el botón para verlas.
</p> </div> </div> <a${addAttribute(acf?.gallery_banner?.gallery_url, "href")} target="_blank" class="bg-black ml-3 dark:bg-white text-sm md:text-lg text-[#ffde59] dark:text-black font-black px-2 py-2 md:px-6 md:py-3 border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] transition-all uppercase tracking-wide inline-block"> <div class="camera-icon"></div> </a> </div> </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/blog/GalleryBanner.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const res = await fetch(`${"http://api-core-hub-plex.local/wp-json/wp/v2"}/posts?slug=${slug}`);
  const json = await res.json();
  const post = PostSchema.safeParse(json[0]);
  if (!post.success) return Astro2.redirect("/404");
  const {
    title,
    featured_images,
    date,
    content,
    category_details,
    author_details,
    acf
  } = post.data;
  return renderTemplate`${renderComponent($$result, "CoreLayout", $$CoreLayout, { "title": title.rendered, "bgImage": featured_images?.full?.url || "" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["", '<article class="relative top-[-130px] bg-dark-transparent space-y-5 p-5 max-w-5xl mx-auto"> <h1 class="text-xl md:text-3xl lg:text-4xl font-black text-black dark:text-white uppercase tracking-tight"> ', " </h1> ", " ", ' <div class="text-lg space-y-3 mt-5">', "</div> ", " ", " </article> <script>\n    document.addEventListener('DOMContentLoaded', () => {\n      const banner = document.querySelector('[data-gallery-banner]');\n      const closeButton = document.querySelector('[data-gallery-close]');\n      if (!banner || !closeButton) return;\n\n      const hideBanner = () => {\n        banner.classList.add('opacity-0', 'pointer-events-none');\n        setTimeout(() => banner.remove(), 200);\n      };\n\n      closeButton.addEventListener('click', hideBanner);\n      closeButton.addEventListener('keydown', (event) => {\n        if (event.key === 'Enter' || event.key === ' ') {\n          event.preventDefault();\n          hideBanner();\n        }\n      });\n    });\n  </script> "])), acf.video_url && acf?.options?.video_enabled ? renderTemplate`${maybeRenderHead()}<div class="aspect-video"> <iframe${addAttribute(acf?.video_url, "src")}${addAttribute(title.rendered, "title")} allowfullscreen class="w-full h-full"></iframe> </div>` : featured_images?.full?.url && renderTemplate`${renderComponent($$result2, "Picture", $$Picture, { "src": featured_images.full.url, "alt": title.rendered, "width": featured_images?.full?.width || 600, "height": 400, "formats": ["avif", "webp"], "class": "w-full" })}`, title.rendered, renderComponent($$result2, "PostMeta", $$PostMeta, { "date": date, "author": author_details ? author_details[0]?.name : "" }), category_details.map((cat) => renderTemplate`${renderComponent($$result2, "PostCategories", $$PostCategories, { "name": cat.name, "slug": cat.slug })}`), unescapeHTML(content.rendered), acf.gallery_banner && acf?.options?.gallery_enabled ? renderTemplate`<div class="aspect-gallery-banner"> <div class="mx-auto max-w-7x"> <div class="relative isolate overflow-clip bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"> <div aria-hidden="true" class="absolute right-0 top-0 -z-10 aspect-square w-full max-w-3xl translate-x-3/4 rounded-full bg-pink-500/60 blur-[10rem] lg:-top-[40rem] lg:left-1/2 lg:-translate-x-1/2"></div> <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-start"> <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
Want to partner with design experts in SaaS?
</h2> <p class="mt-6 text-base text-gray-300">
We're excited to talk to you about your project requirements
                  and business goals.
</p> <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"> <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
Schedule a call
</a> <a href="#" class="text-sm font-semibold leading-6 text-white">
Send an email
</a> </div> </div> <div class="relative mt-16 h-80 lg:mt-8 lg:h-auto"> <img width="1920" height="1139" class="absolute left-0 top-0 w-[58rem] max-w-none rounded-2xl bg-white/5 ring-1 ring-white/10 lg:top-14" src="https://htmlwind.com/assets/images/dark-dashboard-screenshot.webp" alt="dashboard screenshot"> </div> </div> </div> </div>` : "", acf.gallery_banner && acf?.options?.gallery_enabled ? renderTemplate`${renderComponent($$result2, "GalleryBanner", $$GalleryBanner, { "acf": acf })}` : "") })}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/blog/[slug].astro", void 0);
const $$file = "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
