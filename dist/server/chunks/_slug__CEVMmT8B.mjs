import { c as createComponent, $ as $$Picture } from './_astro_assets_BI2qFaLy.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, f as renderTemplate, j as renderComponent } from './server_DkRgwtnl.mjs';
import { r as renderScript, G as GaleriaSchema, $ as $$CoreLayout } from './index_DfKiP4dK.mjs';
import 'clsx';
import { f as formatDate } from './index_By2z1dI5.mjs';

const $$PostMeta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostMeta;
  const { date, author, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-sm"> <p>Publicado el: <span class="text-neon-cyan">${formatDate(date)}</span></p> ${author && renderTemplate`<p>
Autor:${" "} <span class="text-neon-cyan"> <a${addAttribute(`/blog/autor/${slug}`, "href")}>${author}</a> </span> </p>`} </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/galleries/PostMeta.astro", void 0);

const $$PostCategories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostCategories;
  const { name, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/galerias/categoria/${slug}`, "href")} class="max-w-xs inline-block py-1 px-5 text-sm text-white ml-2 mr-2 bg-dark neo-border-cyan neo-shadow-cyan neo-hover-cyan transition-neo"> ${name} </a>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/galleries/PostCategories.astro", void 0);

const $$GalleryGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GalleryGrid;
  const { gallery, historia, date, title, category_details, author_details } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="space-y-5 max-w-7xl mx-auto"> <h1 class="text-xl md:text-3xl lg:text-4xl font-black text-black dark:text-white uppercase tracking-tight"> ${title.rendered} </h1> ${renderComponent($$result, "PostMeta", $$PostMeta, { "date": date, "author": author_details ? author_details[0]?.name : "", "slug": author_details ? author_details[0]?.slug : "" })} ${category_details.map((cat) => renderTemplate`${renderComponent($$result, "PostCategories", $$PostCategories, { "name": cat.name, "slug": cat.slug })}`)} <p class="text-lg text-gray-100 mt-2">${historia}</p> <p class="text-md text-gray-400">
*Por favor, haz click en las imágenes para verlas a tamaño completo...
</p> <div id="gallery" class="columns-1 sm:columns-2 lg:columns-3 gap-5 mt-5"> ${gallery.map(
    (image) => image?.large?.url && renderTemplate`<a class="inline-block w-full mb-3 break-inside-avoid bg-dark text-white p-6 neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer"${addAttribute(image.full.url, "href")}${addAttribute(image.full.width, "data-pswp-width")}${addAttribute(image.full.height, "data-pswp-height")}> ${renderComponent($$result, "Picture", $$Picture, { "src": image.large.url, "alt": image?.caption || "Galería de imágenes", "width": image?.large?.width || 600, "height": image?.large?.height || 400, "formats": ["avif", "webp"] })} </a>`
  )} </div> </article> ${renderScript($$result, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/gallery/GalleryGrid.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/gallery/GalleryGrid.astro", void 0);

const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const res = await fetch(`${"http://api-core-hub-plex.local/wp-json/wp/v2"}/gallery?slug=${slug}`);
  const json = await res.json();
  const post = GaleriaSchema.safeParse(json[0]);
  if (!post.success) return Astro2.redirect("/404");
  const {
    title,
    featured_images,
    date,
    category_details,
    author_details,
    acf,
    gallery
  } = post.data;
  const historia = acf?.historia || "";
  return renderTemplate`${renderComponent($$result, "CoreLayout", $$CoreLayout, { "title": title.rendered, "bgImage": featured_images?.full?.url || "" }, { "default": async ($$result2) => renderTemplate`${featured_images?.full?.url && renderTemplate`${renderComponent($$result2, "Picture", $$Picture, { "src": featured_images.full.url, "alt": title.rendered, "width": featured_images?.full?.width || 600, "height": 400, "formats": ["avif", "webp"], "class": "w-full" })}`}${maybeRenderHead()}<article class="relative top-[-130px] bg-dark-transparent space-y-5 p-5 max-w-5xl mx-auto"> ${renderComponent($$result2, "GalleryGrid", $$GalleryGrid, { "gallery": gallery || [], "historia": historia, "category_details": category_details, "author_details": author_details, "title": title, "date": date })} </article> ` })}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/galerias/[slug].astro", void 0);
const $$file = "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/galerias/[slug].astro";
const $$url = "/galerias/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
