import { c as createComponent } from './CoreLayout_DUXMnClU.mjs';
import 'piccolore';
import { m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './prerender_BgM_VHoD.mjs';
import 'clsx';
import { g as DirectusArticlesCategoryResponseSchema } from './index_B7YBDCuB.mjs';

const $$PostCategories = createComponent(async ($$result, $$props, $$slots) => {
  const newCatUrl = `${undefined                         }/articles_categories`;
  const newCatResponse = await fetch(newCatUrl);
  const newCatJson = await newCatResponse.json();
  const newCatData = DirectusArticlesCategoryResponseSchema.parse(newCatJson);
  const { data: catData } = newCatData;
  return renderTemplate`${maybeRenderHead()}<div class="mt-5 md:mt-30 my-3 flex flex-wrap gap-2 justify-center"> ${catData.map(
    (cat) => cat.status === "published" && renderTemplate`<a${addAttribute(`/blog/categoria/${cat.slug}`, "href")} class="inline-block py-1 px-5 text-sm text-white m-1 bg-dark neo-border-pink p-5 neo-shadow-pink neo-hover-pink transition-neo"> ${cat.name} </a>`
  )} </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/Taxonomies/PostCategories.astro", void 0);

export { $$PostCategories as $ };
