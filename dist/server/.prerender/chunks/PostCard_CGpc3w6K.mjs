import { c as createComponent } from './CoreLayout_a_vsr70c.mjs';
import 'piccolore';
import { m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent } from './prerender_Hd2AncPp.mjs';
import { $ as $$Picture } from './_astro_assets_CkMmM9jS.mjs';
import 'clsx';

const $$PostCategories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostCategories;
  const { name, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/galerias/categoria/${slug}`, "href")} class="max-w-xs inline-block py-1 px-5 text-sm text-white bg-dark neo-border-pink p-5"> ${name} </a>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/galleries/PostCategories.astro", void 0);

const $$PostTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostTags;
  const { name, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/galerias/etiqueta/${slug}`, "href")} class="max-w-xs inline-block py-1 px-5 mx-3 text-sm text-white bg-dark neo-border-cyan p-5"> ${name} </a>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/galleries/PostTags.astro", void 0);

const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  const publicAssetsUrl = "https://core-cms.core-hub-plex.cloud/assets";
  return renderTemplate`${maybeRenderHead()}<article data-aos="zoom-in-up" data-aos-duration="2000" class="break-inside-avoid-column align-middle text-center overflow-hidden transition-shadow bg-dark text-white p-6 neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer"> <a${addAttribute(`/galerias/${post.slug}`, "href")}> ${post?.cover_image && renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "src": `${publicAssetsUrl}/${post?.cover_image}`, "alt": post?.title, "width": 800, "height": 600, "formats": ["avif", "webp"], "class": "w-full h-48 object-cover" })}`} <div class="py-5 space-y-3"> <h1 class="text-xl font-extrabold text-center uppercase leading-none flex-grow group-hover:text-neon-cyan transition-colors"> ${post.title} </h1> </div> ${post?.gallery_category && renderTemplate`${renderComponent($$result, "PostCategories", $$PostCategories, { "name": post.gallery_category.name, "slug": post.gallery_category.slug })}`} ${post?.gallery_tag && renderTemplate`${renderComponent($$result, "PostTags", $$PostTags, { "name": post.gallery_tag.name, "slug": post.gallery_tag.slug })}`} </a> </article>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/galleries/PostCard.astro", void 0);

export { $$PostCard as $ };
