import { c as createComponent, $ as $$CoreLayout } from './CoreLayout_DUXMnClU.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './prerender_BgM_VHoD.mjs';
import { d as DirectusCategoriesSlugSchema, e as DirectusCategorySchema, c as DirectusArticlesCollectionResponseSchema } from './index_B7YBDCuB.mjs';
import { $ as $$PostCard } from './PostCard_C_Dxq04J.mjs';
import { $ as $$PostCategories } from './PostCategories_CMPrW3fv.mjs';

async function getStaticPaths() {
  const res = await fetch(`${undefined                         }/articles_categories`);
  const json = await res.json();
  const categories = DirectusCategoriesSlugSchema.parse(json.data);
  return categories.map((category) => ({
    params: { slug: category.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const catUrl = `${undefined                         }/articles_categories?filter[slug][_eq]=${slug}`;
  const catRes = await fetch(catUrl);
  const catJson = await catRes.json();
  const category = DirectusCategorySchema.parse(catJson.data[0]);
  const postsUrl = `${undefined                         }/articles?filter[article_category][_eq]=${category.id}&fields=*,article_category.*,article_tags.*,author.*`;
  const postsRes = await fetch(postsUrl);
  const postsJson = await postsRes.json();
  const posts = DirectusArticlesCollectionResponseSchema.parse(postsJson);
  const { data: postCategory } = posts;
  return renderTemplate`${renderComponent($$result, "CoreLayout", $$CoreLayout, { "title": `Posts en la categoría: ${category.name}`, "subtitle": `Posts en la categoría: ${category.name}`, "bgImage": postCategory[0]?.cover_image || void 0 }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostCategories", $$PostCategories, {})} ${maybeRenderHead()}<div class="columns-1 md:columns-2 lg:columns-3 gap-5 my-8 space-y-5"> ${postCategory.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`)} </div> ` })}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/blog/categoria/[slug].astro", void 0);
const $$file = "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/blog/categoria/[slug].astro";
const $$url = "/blog/categoria/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
