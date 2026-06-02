import { c as createComponent, $ as $$Picture } from './_astro_assets_URt4Q7UX.mjs';
import 'piccolore';
import { j as renderComponent, h as renderTemplate, m as maybeRenderHead } from './server_BIsboIgl.mjs';
import { a as DirectusGalleriesCollectionSchema, $ as $$CoreLayout } from './index_mUWhIiON.mjs';

const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const newRes = await fetch(
    `${undefined                         }/galleries?filter[slug][_eq]=${slug}&fields=*,gallery_category.*,gallery_tag.*,author.*,gallery.directus_files_id.*`
  );
  const newJson = await newRes.json();
  const postNew = DirectusGalleriesCollectionSchema.safeParse(newJson.data[0]);
  console.log("POSTNEW", postNew);
  const publicAssetsUrl = undefined                             ;
  if (!postNew.success) return Astro2.redirect("/404");
  const { title, cover_image } = postNew.data;
  return renderTemplate`${renderComponent($$result, "CoreLayout", $$CoreLayout, { "title": title, "bgImage": cover_image }, { "default": async ($$result2) => renderTemplate`${cover_image && renderTemplate`${renderComponent($$result2, "Picture", $$Picture, { "src": `${publicAssetsUrl}/${cover_image}`, "alt": title, "width": 800, "height": 400, "formats": ["avif", "webp"], "class": "w-full" })}`}${maybeRenderHead()}<article class="relative top-[-60px] md:top-[-100px] lg:top-[-130px] bg-dark-transparent space-y-5 p-5 max-w-5xl mx-auto"> <!-- <GalleryGrid
      gallery={gallery || []}
      historia={historia}
      category_details={category_details}
      author_details={author_details}
      title={title}
      date={date}
    /> --> <h1>Hola mundo</h1> </article> ` })}`;
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
