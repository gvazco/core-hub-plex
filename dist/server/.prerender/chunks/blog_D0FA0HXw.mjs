import { c as createComponent, $ as $$CoreLayout } from './CoreLayout_a_vsr70c.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './prerender_Hd2AncPp.mjs';
import { c as DirectusArticlesCollectionResponseSchema, f as DirectusBlogPageResponseSchema } from './index_Bh7jurQE.mjs';
import { $ as $$PostCard } from './PostCard_Cu16gFvF.mjs';
import { $ as $$PostCategories } from './PostCategories_CQ5rCjzq.mjs';
import { $ as $$PostTags } from './PostTags_1mp9XSG7.mjs';

const $$BlogPosts = createComponent(async ($$result, $$props, $$slots) => {
  const newUrl = `${"https://core-cms.core-hub-plex.cloud/items"}/articles?fields=*,article_category.*,article_tags.*,author.*`;
  const newRes = await fetch(newUrl);
  const newJson = await newRes.json();
  const newData = DirectusArticlesCollectionResponseSchema.parse(newJson);
  const { data: articles } = newData;
  return renderTemplate`${maybeRenderHead()}<div class="columns-1 md:columns-2 lg:columns-3 gap-5 my-5 space-y-5"> ${articles.map(
    (post) => post.status === "published" && renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": post })}`
  )} </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/blog/BlogPosts.astro", void 0);

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const newUrl = `${"https://core-cms.core-hub-plex.cloud/items"}/pages?filter[slug][_eq]=blog`;
  const response = await fetch(newUrl);
  const json = await response.json();
  const data = DirectusBlogPageResponseSchema.parse(json);
  const { data: blogPage } = data;
  const publicAssetsUrl = "https://core-cms.core-hub-plex.cloud/assets";
  return renderTemplate`${renderComponent($$result, "CoreLayout", $$CoreLayout, { "title": "Blog", "subtitle": blogPage[0]?.subtitle || "Nuestro blog", "bgImage": `${publicAssetsUrl}/${blogPage[0]?.cover_image}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostCategories", $$PostCategories, {})} ${renderComponent($$result2, "PostTags", $$PostTags, {})} ${renderComponent($$result2, "BlogPosts", $$BlogPosts, {})} ` })}`;
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
