import { c as createComponent, $ as $$Picture } from './_astro_assets_DDVmWlVS.mjs';
import 'piccolore';
import { m as maybeRenderHead, f as addAttribute, h as renderTemplate, j as renderComponent } from './server_BlFu8yvy.mjs';
import { r as renderScript, a as DirectusGalleriesCollectionSchema, $ as $$CoreLayout } from './index_vRVi5Jx6.mjs';
import 'clsx';
import { f as formatDate } from './index_DBtM_ae6.mjs';

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

const $$PostTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostTags;
  const { name, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/galerias/etiqueta/${slug}`, "href")} class="max-w-xs inline-block py-1 px-5 text-sm text-white ml-2 mr-2 bg-dark neo-border-cyan neo-shadow-cyan neo-hover-cyan transition-neo"> ${name} </a>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/galleries/PostTags.astro", void 0);

const $$GalleryGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GalleryGrid;
  const publicAssetsUrl = "https://core-cms.core-hub-plex.cloud/assets";
  const { gallery, excerpt, date, title, gallery_category, gallery_tag, author } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="space-y-5 max-w-7xl mx-auto"> <h1 class="text-xl md:text-3xl lg:text-4xl font-black text-black dark:text-white uppercase tracking-tight"> ${title} </h1> ${renderComponent($$result, "PostMeta", $$PostMeta, { "date": date, "author": author ? author[0]?.name : "", "slug": author ? author[0]?.slug : "" })} ${renderComponent($$result, "PostCategories", $$PostCategories, { "name": gallery_category[0]?.name, "slug": gallery_category[0]?.slug })} ${renderComponent($$result, "PostTags", $$PostTags, { "name": gallery_tag[0]?.name, "slug": gallery_tag[0]?.slug })} <p class="text-lg text-gray-100 mt-2">${excerpt}</p> <p class="text-md text-gray-400">
*Por favor, haz click en las imágenes para verlas a tamaño completo...
</p> <div id="gallery" class="columns-1 sm:columns-2 lg:columns-3 gap-5 mt-5"> ${gallery.map(
    (image) => image?.directus_files_id?.id && renderTemplate`<a class="inline-block w-full mb-3 break-inside-avoid bg-dark text-white p-6 neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer"${addAttribute(`${publicAssetsUrl}/${image.directus_files_id.id}`, "href")}${addAttribute(image.directus_files_id.width, "data-pswp-width")}${addAttribute(image.directus_files_id.height, "data-pswp-height")}> ${renderComponent($$result, "Picture", $$Picture, { "src": `${publicAssetsUrl}/${image.directus_files_id.id}`, "alt": image.directus_files_id.description || "Galería de imágenes", "width": image.directus_files_id.width || 600, "height": image.directus_files_id.height || 400, "formats": ["avif", "webp"] })} </a>`
  )} </div> </article> ${renderScript($$result, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/gallery/GalleryGrid.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/gallery/GalleryGrid.astro", void 0);

const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const newRes = await fetch(
    `${"https://core-cms.core-hub-plex.cloud/items"}/galleries?filter[slug][_eq]=${slug}&fields=*,gallery_category.*,gallery_tag.*,author.*,gallery.directus_files_id.id,gallery.directus_files_id.filename_disk,gallery.directus_files_id.filename_download,gallery.directus_files_id.title,gallery.directus_files_id.type,gallery.directus_files_id.filesize,gallery.directus_files_id.width,gallery.directus_files_id.height,gallery.directus_files_id.description`
  );
  const newJson = await newRes.json();
  const postNew = DirectusGalleriesCollectionSchema.safeParse(newJson.data[0]);
  const publicAssetsUrl = "https://core-cms.core-hub-plex.cloud/assets";
  if (!postNew.success) return Astro2.redirect("/404");
  const {
    title,
    cover_image,
    gallery,
    gallery_category,
    gallery_tag,
    excerpt,
    date_created,
    author
  } = postNew.data;
  return renderTemplate`${renderComponent($$result, "CoreLayout", $$CoreLayout, { "title": title, "bgImage": cover_image }, { "default": async ($$result2) => renderTemplate`${cover_image && renderTemplate`${renderComponent($$result2, "Picture", $$Picture, { "src": `${publicAssetsUrl}/${cover_image}`, "alt": title, "width": 800, "height": 400, "formats": ["avif", "webp"], "class": "w-full" })}`}${maybeRenderHead()}<article class="relative top-[-60px] md:top-[-100px] lg:top-[-130px] bg-dark-transparent space-y-5 p-5 max-w-5xl mx-auto"> ${renderComponent($$result2, "GalleryGrid", $$GalleryGrid, { "gallery": gallery || [], "title": title, "date": date_created, "excerpt": excerpt ?? "", "gallery_category": [
    { name: gallery_category.name, slug: gallery_category.slug }
  ], "gallery_tag": gallery_tag ? [{ name: gallery_tag.name, slug: gallery_tag.slug }] : [], "author": [{ name: author.name, slug: author.slug }] })} </article> ` })}`;
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
