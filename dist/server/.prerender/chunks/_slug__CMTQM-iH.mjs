import { c as createComponent, $ as $$CoreLayout } from './CoreLayout_a_vsr70c.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './prerender_Hd2AncPp.mjs';
import { d as DirectusCategoriesSlugSchema, e as DirectusCategorySchema, i as DirectusGalleriesCollectionResponseSchema } from './index_Bh7jurQE.mjs';
import { $ as $$GalleryTags } from './GalleryTags_Ufmcy7kn.mjs';
import { $ as $$PostCard } from './PostCard_CGpc3w6K.mjs';

async function getStaticPaths() {
  const res = await fetch(`${"https://core-cms.core-hub-plex.cloud/items"}/galleries_tags`);
  const json = await res.json();
  const tags = DirectusCategoriesSlugSchema.parse(json.data);
  return tags.map((tag) => ({
    params: { slug: tag.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const tagUrl = `${"https://core-cms.core-hub-plex.cloud/items"}/galleries_tags?filter[slug][_eq]=${slug}`;
  const tagRes = await fetch(tagUrl);
  const tagJson = await tagRes.json();
  const tag = DirectusCategorySchema.parse(tagJson.data[0]);
  const postsUrl = `${"https://core-cms.core-hub-plex.cloud/items"}/galleries?filter[gallery_tag][_eq]=${tag.id}&fields=*,gallery_category.*,gallery_tag.*,author.*,gallery.directus_files_id.id,gallery.directus_files_id.filename_disk,gallery.directus_files_id.filename_download,gallery.directus_files_id.title,gallery.directus_files_id.type,gallery.directus_files_id.width,gallery.directus_files_id.height,gallery.directus_files_id.filesize`;
  const postsRes = await fetch(postsUrl);
  const postsJson = await postsRes.json();
  const posts = DirectusGalleriesCollectionResponseSchema.parse(postsJson);
  const { data: postTag } = posts;
  return renderTemplate`${renderComponent($$result, "CoreLayout", $$CoreLayout, { "title": `Posts en la etiqueta: ${tag.name}`, "subtitle": `Posts en la etiqueta: ${tag.name}`, "bgImage": postTag[0]?.cover_image || "" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryTags", $$GalleryTags, {})} ${maybeRenderHead()}<div class="columns-1 md:columns-2 lg:columns-3 gap-5 my-8 space-y-5"> ${postTag.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`)} </div> ` })}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/galerias/etiqueta/[slug].astro", void 0);
const $$file = "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/galerias/etiqueta/[slug].astro";
const $$url = "/galerias/etiqueta/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
