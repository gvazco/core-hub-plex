import { c as createComponent } from './CoreLayout_DUXMnClU.mjs';
import 'piccolore';
import { m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent } from './prerender_BgM_VHoD.mjs';
import { $ as $$Picture } from './_astro_assets_B6mxCtqr.mjs';
import 'clsx';
import { f as formatDate } from './index_DBtM_ae6.mjs';

const $$PostMeta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostMeta;
  const { date, author, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-sm"> <p>Publicado el: <span class="text-neon-cyan">${formatDate(date)}</span></p> ${author && renderTemplate`<p>
Autor:${" "} <span class="text-neon-cyan"> <a${addAttribute(`/blog/autor/${slug}`, "href")}>${author}</a> </span> </p>`} </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/blog/PostMeta.astro", void 0);

const $$PostCategories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostCategories;
  const { name, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/blog/categoria/${slug}`, "href")} class="max-w-xs inline-block py-1 px-5 text-sm text-white ml-2 mr-2 bg-dark neo-border-pink p-5 neo-shadow-pink neo-hover-pink transition-neo"> ${name} </a>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/blog/PostCategories.astro", void 0);

const $$PostTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostTags;
  const { name, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/blog/etiqueta/${slug}`, "href")} class="max-w-xs inline-block py-1 px-5 text-sm text-white ml-2 mr-2 bg-dark neo-border-cyan neo-shadow-cyan neo-hover-cyan transition-neo"> ${name} </a>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/blog/PostTags.astro", void 0);

const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  const publicAssetsUrl = undefined                             ;
  return renderTemplate`${maybeRenderHead()}<article class="break-inside-avoid-column overflow-hidden transition-shadow bg-dark text-white p-6 neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer"> <a${addAttribute(`/blog/${post.slug}`, "href")}> ${post?.cover_image && renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "src": `${publicAssetsUrl}/${post.cover_image}`, "alt": post?.title, "width": 800, "height": 600, "formats": ["avif", "webp"], "class": "w-full h-48 object-cover" })}`} <div class="p-5 space-y-3"> <h3 class="text-2xl font-bold uppercase mb-4 flex-grow group-hover:text-neon-cyan transition-colors"> ${post.title} </h3> </div> ${renderComponent($$result, "PostMeta", $$PostMeta, { "date": post.date_created, "author": post.author ? post.author?.name : "", "slug": post.author?.slug !== null ? post.author?.slug : "" })} ${post.article_category?.name && renderTemplate`${renderComponent($$result, "PostCategories", $$PostCategories, { "name": post.article_category.name, "slug": post.article_category.slug })}`} ${post?.article_tags && renderTemplate`${renderComponent($$result, "PostTags", $$PostTags, { "name": post.article_tags?.name, "slug": post.article_tags?.slug })}`} </a> </article>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/blog/PostCard.astro", void 0);

export { $$PostCard as $ };
