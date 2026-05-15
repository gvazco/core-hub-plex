import { c as createComponent, $ as $$Picture } from './_astro_assets_B3_jlX6-.mjs';
import 'piccolore';
import { m as maybeRenderHead, f as renderTemplate, h as addAttribute, j as renderComponent } from './server_DqJmoyYZ.mjs';
import { r as renderScript, G as GaleriaSchema, $ as $$CoreLayout } from './index_CG7Uj91m.mjs';
import 'clsx';
import { f as formatDate } from './index_By2z1dI5.mjs';

const $$PostMeta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostMeta;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="text-sm">
Escrito el: <span class="text-coffee-600">${formatDate(date)}</span> </p>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/galleries/PostMeta.astro", void 0);

const $$PostCategories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostCategories;
  const { name, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/galerias/categoria/${slug}`, "href")} class="inline-block py-1 px-5 bg-coffee-600 hover:bg-coffee-500 text-sm text-white mr-2 rounded"> ${name} </a>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/galleries/PostCategories.astro", void 0);

const $$GalleryGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GalleryGrid;
  const { gallery } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="gallery" class="grid grid-cols-3 gap-3 mt-5"> ${gallery.map(
    (image) => image?.large?.url && renderTemplate`<a${addAttribute(image.full.url, "href")}${addAttribute(image.full.width, "data-pswp-width")}${addAttribute(image.full.height, "data-pswp-height")}> ${renderComponent($$result, "Picture", $$Picture, { "src": image.large.url, "alt": "Galería de imágenes", "width": image?.large?.width || 600, "height": image?.large?.height || 400, "formats": ["avif", "webp"] })} </a>`
  )} </div> ${renderScript($$result, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/gallery/GalleryGrid.astro?astro&type=script&index=0&lang.ts")}`;
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
  const { title, featured_images, date, category_details, acf, gallery } = post.data;
  return renderTemplate`${renderComponent($$result, "PostLayout", $$CoreLayout, { "title": title.rendered, "bgImage": featured_images?.full?.url || "" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="space-y-5 max-w-4xl mx-auto"> ${renderComponent($$result2, "PostMeta", $$PostMeta, { "date": date })} ${category_details.map((cat) => renderTemplate`${renderComponent($$result2, "PostCategories", $$PostCategories, { "name": cat.name, "slug": cat.slug })}`)} ${renderComponent($$result2, "Picture", $$Picture, { "src": featured_images?.full?.url || "", "alt": title.rendered, "width": featured_images?.full?.width || 600, "height": featured_images?.full?.height || 600, "formats": ["avif", "webp"], "class": "w-full" })} ${renderComponent($$result2, "GalleryGrid", $$GalleryGrid, { "gallery": gallery || [] })} </article> ` })}`;
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
