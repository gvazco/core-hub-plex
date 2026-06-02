import { c as createComponent, $ as $$CoreLayout } from './CoreLayout_DUXMnClU.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './prerender_BgM_VHoD.mjs';
import { d as DirectusCategoriesSlugSchema, e as DirectusCategorySchema, c as DirectusArticlesCollectionResponseSchema } from './index_B7YBDCuB.mjs';
import { $ as $$PostTags } from './PostTags_B5qu94ll.mjs';
import { $ as $$PostCard } from './PostCard_C_Dxq04J.mjs';

async function getStaticPaths() {
  const res = await fetch(`${undefined                         }/articles_tags`);
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
  const tagUrl = `${undefined                         }/articles_tags?filter[slug][_eq]=${slug}`;
  const tagRes = await fetch(tagUrl);
  const tagJson = await tagRes.json();
  const tag = DirectusCategorySchema.parse(tagJson.data[0]);
  const postsUrl = `${undefined                         }/articles?filter[article_tags][_eq]=${tag.id}&fields=*,article_category.*,article_tags.*,author.*`;
  const postsRes = await fetch(postsUrl);
  const postsJson = await postsRes.json();
  const posts = DirectusArticlesCollectionResponseSchema.parse(postsJson);
  const { data: postTag } = posts;
  return renderTemplate`${renderComponent($$result, "CoreLayout", $$CoreLayout, { "title": `Posts en la etiqueta: ${tag.name}`, "subtitle": `Posts en la etiqueta: ${tag.name}`, "bgImage": postTag[0]?.cover_image || "" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostTags", $$PostTags, {})} ${maybeRenderHead()}<div class="columns-1 md:columns-2 lg:columns-3 gap-5 my-8 space-y-5"> ${postTag.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`)} </div> ` })}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/blog/etiqueta/[slug].astro", void 0);
const $$file = "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/blog/etiqueta/[slug].astro";
const $$url = "/blog/etiqueta/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
