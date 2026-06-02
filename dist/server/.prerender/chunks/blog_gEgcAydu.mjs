import { c as createComponent, $ as $$CoreLayout } from './CoreLayout_DUXMnClU.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './prerender_BgM_VHoD.mjs';
import { c as DirectusArticlesCollectionResponseSchema, f as DirectusBlogPageResponseSchema } from './index_B7YBDCuB.mjs';
import { $ as $$PostCard } from './PostCard_C_Dxq04J.mjs';
import { $ as $$PostCategories } from './PostCategories_CMPrW3fv.mjs';

const $$BlogPosts = createComponent(async ($$result, $$props, $$slots) => {
  const newUrl = `${undefined                         }/articles?fields=*,article_category.*,article_tags.*,author.*`;
  const newRes = await fetch(newUrl);
  const newJson = await newRes.json();
  const newData = DirectusArticlesCollectionResponseSchema.parse(newJson);
  const { data: articles } = newData;
  return renderTemplate`${maybeRenderHead()}<div class="columns-1 md:columns-2 lg:columns-3 gap-5 my-8 space-y-5"> ${articles.map(
    (post) => post.status === "published" && renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": post })}`
  )} </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/blog/BlogPosts.astro", void 0);

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const newUrl = `${undefined                         }/pages?filter[slug][_eq]=blog`;
  const response = await fetch(newUrl);
  const json = await response.json();
  const data = DirectusBlogPageResponseSchema.parse(json);
  const { data: blogPage } = data;
  const publicAssetsUrl = undefined                             ;
  return renderTemplate`${renderComponent($$result, "CoreLayout", $$CoreLayout, { "title": "Blog", "subtitle": blogPage[0]?.subtitle || "Nuestro blog", "bgImage": `${publicAssetsUrl}/${blogPage[0]?.cover_image}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostCategories", $$PostCategories, {})} ${renderComponent($$result2, "BlogPosts", $$BlogPosts, {})} ` })}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/blog.astro", void 0);
const $$file = "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
