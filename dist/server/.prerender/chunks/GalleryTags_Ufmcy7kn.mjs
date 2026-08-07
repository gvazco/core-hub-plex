import { c as createComponent } from './CoreLayout_a_vsr70c.mjs';
import 'piccolore';
import { m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './prerender_Hd2AncPp.mjs';
import 'clsx';
import { g as DirectusArticlesCategoryResponseSchema } from './index_Bh7jurQE.mjs';

const $$GalleryTags = createComponent(async ($$result, $$props, $$slots) => {
  const catUrl = `${"https://core-cms.core-hub-plex.cloud/items"}/galleries_tags`;
  const catResponse = await fetch(catUrl);
  const catJson = await catResponse.json();
  const newCatData = DirectusArticlesCategoryResponseSchema.parse(catJson);
  const { data: catData } = newCatData;
  return renderTemplate`${maybeRenderHead()}<div class="mt-5 my-3 slider overflow-y-hidden" data-aos="zoom-in-up" data-aos-duration="2000"> <div class="list-tags"> ${catData.filter((cat) => cat.status === "published").map((cat) => renderTemplate`<div class="item"> <a${addAttribute(`/galerias/etiqueta/${cat.slug}`, "href")} class="inline-block py-1 px-5 text-sm text-white bg-dark neo-border-cyan p-5 neo-shadow-cyan neo-hover-cyan transition-neo"> ${cat.name} </a> </div>`)} ${catData.filter((cat) => cat.status === "published").map((cat) => renderTemplate`<div class="item"> <a${addAttribute(`/galerias/etiqueta/${cat.slug}`, "href")} class="inline-block py-1 px-5 text-sm text-white bg-dark neo-border-cyan p-5 neo-shadow-cyan neo-hover-cyan transition-neo"> ${cat.name} </a> </div>`)} </div> </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/Taxonomies/GalleryTags.astro", void 0);

export { $$GalleryTags as $ };
