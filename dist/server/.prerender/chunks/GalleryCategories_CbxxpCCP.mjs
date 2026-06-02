import { c as createComponent } from './CoreLayout_DUXMnClU.mjs';
import 'piccolore';
import { m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './prerender_BgM_VHoD.mjs';
import 'clsx';
import { k as DirectusGalleriesCategoryResponseSchema } from './index_B7YBDCuB.mjs';

const $$GalleryCategories = createComponent(async ($$result, $$props, $$slots) => {
  const newCatUrl = `${undefined                         }/galleries_categories`;
  const newCatResponse = await fetch(newCatUrl);
  const newCatJson = await newCatResponse.json();
  const newCatData = DirectusGalleriesCategoryResponseSchema.parse(newCatJson);
  const { data: category } = newCatData;
  return renderTemplate`${maybeRenderHead()}<div class="mt-5 md:mt-30 flex flex-wrap gap-2 justify-center"> ${category.map((cat) => renderTemplate`<a${addAttribute(`/galerias/categoria/${cat.slug}`, "href")} class="inline-block py-1 px-5 text-sm text-gray-50 m-1 bg-dark neo-border-cyan neo-shadow-cyan neo-hover-cyan transition-neo"> ${cat.name} </a>`)} </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/Taxonomies/GalleryCategories.astro", void 0);

export { $$GalleryCategories as $ };
