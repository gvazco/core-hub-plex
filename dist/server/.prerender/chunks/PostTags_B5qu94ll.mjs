import { c as createComponent } from './CoreLayout_DUXMnClU.mjs';
import 'piccolore';
import { m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './prerender_BgM_VHoD.mjs';
import 'clsx';
import { C as CategoriesSchema } from './index_B7YBDCuB.mjs';

const $$PostTags = createComponent(async ($$result, $$props, $$slots) => {
  const catUrl = `${"http://api-core-hub-plex.local/wp-json/wp/v2"}/tags?per_page=20`;
  const catResponse = await fetch(catUrl);
  const catJson = await catResponse.json();
  const catData = CategoriesSchema.parse(catJson);
  return renderTemplate`${maybeRenderHead()}<div class="mt-5 md:mt-30 my-3 flex flex-wrap gap-2 justify-center"> ${catData.map((cat) => renderTemplate`<a${addAttribute(`/blog/etiqueta/${cat.slug}`, "href")} class="inline-block py-1 px-5 text-sm text-white m-1 bg-dark neo-border-cyan neo-shadow-cyan neo-hover-cyan transition-neo"> ${cat.name} </a>`)} </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/Taxonomies/PostTags.astro", void 0);

export { $$PostTags as $ };
