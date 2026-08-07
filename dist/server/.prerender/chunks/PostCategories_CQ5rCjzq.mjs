import { c as createComponent } from './CoreLayout_a_vsr70c.mjs';
import 'piccolore';
import { m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './prerender_Hd2AncPp.mjs';
import 'clsx';
import { g as DirectusArticlesCategoryResponseSchema } from './index_Bh7jurQE.mjs';

const $$PostCategories = createComponent(async ($$result, $$props, $$slots) => {
  const newCatUrl = `${"https://core-cms.core-hub-plex.cloud/items"}/articles_categories`;
  const newCatResponse = await fetch(newCatUrl);
  const newCatJson = await newCatResponse.json();
  const newCatData = DirectusArticlesCategoryResponseSchema.parse(newCatJson);
  const { data: catData } = newCatData;
  return renderTemplate`${maybeRenderHead()}<div class="mt-5 my-3 slider overflow-y-hidden" data-aos="zoom-in-up" data-aos-duration="2000 "> <div class="list"> ${catData.filter((cat) => cat.status === "published").map((cat) => renderTemplate`<div class="item"> <a${addAttribute(`/blog/categoria/${cat.slug}`, "href")} class="inline-block py-1 px-5 text-sm text-white bg-dark neo-border-pink p-5 neo-shadow-pink neo-hover-pink transition-neo"> ${cat.name} </a> </div>`)} ${catData.filter((cat) => cat.status === "published").map((cat) => renderTemplate`<div class="item"> <a${addAttribute(`/blog/categoria/${cat.slug}`, "href")} class="inline-block py-1 px-5 text-sm text-white bg-dark neo-border-pink p-5 neo-shadow-pink neo-hover-pink transition-neo"> ${cat.name} </a> </div>`)} </div> </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/Taxonomies/PostCategories.astro", void 0);

export { $$PostCategories as $ };
