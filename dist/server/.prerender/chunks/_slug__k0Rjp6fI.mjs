import { c as createComponent, $ as $$CoreLayout } from './CoreLayout_DUXMnClU.mjs';
import 'piccolore';
import { m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent } from './prerender_BgM_VHoD.mjs';
import { D as DirectusAuthorsSchema, a as DirectusAuthorsSlugSchema, b as DirectusAuthorSchema, c as DirectusArticlesCollectionResponseSchema } from './index_B7YBDCuB.mjs';
import { $ as $$PostCard } from './PostCard_C_Dxq04J.mjs';
import 'clsx';

const $$PostAuthors = createComponent(async ($$result, $$props, $$slots) => {
  const catUrl = `${undefined                         }/authors`;
  const catResponse = await fetch(catUrl);
  const catJson = await catResponse.json();
  const catData = DirectusAuthorsSchema.parse(catJson.data);
  return renderTemplate`${maybeRenderHead()}<div> <h2 class="mx-10 md:mx-auto my-10 text-3xl md:text-5xl font-black uppercase text-white flex items-center gap-4"> <span class="w-8 h-8 bg-neon-pink inline-block neo-shadow-cyan"></span>
Otros autores
<span class="flex-grow h-2 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-green"></span> </h2> <div class="mt-5 my-10 flex flex-wrap gap-2 justify-center"> ${catData.map((cat) => renderTemplate`<a${addAttribute(`/blog/autor/${cat.slug}`, "href")} class="inline-block py-1 px-5 text-sm text-white m-1 bg-dark neo-border-cyan neo-shadow-cyan neo-hover-cyan transition-neo"> ${cat.name} </a>`)} </div> </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/Taxonomies/PostAuthors.astro", void 0);

const $$AuthorSummary = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AuthorSummary;
  const { autor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-dark pt-1 pb-10 md:pt-16"> <div class="mx-auto max-w-7xl"> <!-- Header --> <div class="mt-10 mb-10 text-center"> <h2 class="text-xl md:text-3xl lg:text-4xl font-black text-black dark:text-white uppercase tracking-tight"> ${autor.name} </h2> <p class="text-lg text-gray-100 mt-2"> ${autor.bio} </p> </div> <!-- Content --> <div class="flex flex-col items-stretch gap-8 lg:flex-row"> <!-- Image --> <div class="flex w-full lg:w-1/4"> <img class="w-full p-8 border-4 border-neon-yellow border-dashed flex flex-col items-center justify-center text-center flex-grow object-cover"${addAttribute(`${undefined                             }/${autor.avatar || "https://placehold.co/600x700/e5e7eb/000000"}`, "src")} alt="Modern Platform Interface"> </div> <!-- Features Grid --> <div class="w-full lg:w-3/4"> <div class="grid h-full grid-cols-1 gap-6 md:grid-cols-2"> <!-- Feature 1 --> <div class="group bmb-6 neo-border-green border-4 border-dark bg-gray-100 px-4 py-2 neo-shadow-pink hover:-translate-y-2 transition-transform p-6 transition-all duration-300 hover:border-black"> <div class="mb-4 flex items-center"> <div class="mr-4 flex flex-shrink-0 items-center justify-center bg-black p-3"> <svg class="h-6 w-6 text-gray-100" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path> <circle cx="12" cy="7" r="4"></circle> </svg> </div> <h3 class="text-lg font-black uppercase mb-4 border-b-4 border-dark bg-dark text-gray-100 px-2 inline-block self-start">
Personalization
</h3> </div> <p class="text-gray-900"> ${autor.bio} </p> </div> <!-- Feature 2 --> <div class="group bmb-6 neo-border-green border-4 border-dark bg-gray-100 px-4 py-2 neo-shadow-pink hover:-translate-y-2 transition-transform p-6 transition-all duration-300 hover:border-black"> <div class="mb-4 flex items-center"> <div class="mr-4 flex flex-shrink-0 items-center justify-center bg-black p-3"> <svg class="h-6 w-6 text-gray-100" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect> <path d="M12 18h.01"></path> </svg> </div> <h3 class="text-lg font-black uppercase mb-4 border-b-4 border-dark bg-dark text-gray-100 px-2 inline-block self-start">
Mobile
</h3> </div> <p class="text-gray-900">
Our mobile-first design offers a seamless browsing experience
              across all devices, including smartphones and tablets.
</p> </div> <!-- Feature 3 --> <div class="group bmb-6 neo-border-green border-4 border-dark bg-gray-100 px-4 py-2 neo-shadow-pink hover:-translate-y-2 transition-transform p-6 transition-all duration-300 hover:border-black"> <div class="mb-4 flex items-center"> <div class="mr-4 flex flex-shrink-0 items-center justify-center bg-black p-3"> <svg class="h-6 w-6 text-gray-100" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path> </svg> </div> <h3 class="text-lg font-black uppercase mb-4 border-b-4 border-dark bg-dark text-gray-100 px-2 inline-block self-start">
Support
</h3> </div> <p class="text-gray-900">
Our support team is available around the clock to answer questions
              and resolve issues through email, phone, or live chat.
</p> </div> <!-- Feature 4 --> <div class="group bmb-6 neo-border-green border-4 border-dark bg-gray-100 px-4 py-2 neo-shadow-pink hover:-translate-y-2 transition-transform p-6 transition-all duration-300 hover:border-black"> <div class="mb-4 flex items-center"> <div class="mr-4 flex flex-shrink-0 items-center justify-center bg-black p-3"> <svg class="h-6 w-6 text-gray-100" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect> <path d="M7 11V7a5 5 0 0 1 10 0v4"></path> </svg> </div> <h3 class="text-lg font-black uppercase mb-4 border-b-4 border-dark bg-dark text-gray-100 px-2 inline-block self-start">
Security
</h3> </div> <p class="text-gray-900">
We use cutting-edge security measures to protect customer
              information and ensure the safety of all transactions.
</p> </div> </div> </div> </div> </div> </section>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/Taxonomies/AuthorSummary.astro", void 0);

async function getStaticPaths() {
  const newRes = await fetch(`${undefined                         }/authors`);
  const newJson = await newRes.json();
  const newAutores = DirectusAuthorsSlugSchema.parse(newJson.data);
  return newAutores.map((autor) => ({
    params: { slug: autor.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const autorUrl = `${undefined                         }/authors?filter[slug][_eq]=${slug}`;
  const autorRes = await fetch(autorUrl);
  const autorJson = await autorRes.json();
  const autor = DirectusAuthorSchema.parse(autorJson.data[0]);
  console.log("Autor:", autor);
  const postsUrl = `${undefined                         }/articles?filter[author][_eq]=${autor.id}&fields=*,article_category.*,article_tags.*,author.*`;
  const postsRes = await fetch(postsUrl);
  const postsJson = await postsRes.json();
  const posts = DirectusArticlesCollectionResponseSchema.parse(postsJson);
  const { data: postsAuthor } = posts;
  return renderTemplate`${renderComponent($$result, "Layout", $$CoreLayout, { "title": `Posts por el autor: ${autor.name}`, "subtitle": `Posts por el autor: ${autor.name}`, "bgImage": `${undefined                             }/${postsAuthor[0]?.cover_image || "default-bg.jpg"}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthorSummary", $$AuthorSummary, { "autor": autor })} ${maybeRenderHead()}<h2 class="mx-10 md:mx-auto my-10 text-3xl md:text-5xl font-black uppercase text-white flex items-center gap-4"> <span class="w-8 h-8 bg-neon-pink inline-block neo-shadow-cyan"></span>
Posts del autor:
<span class="flex-grow h-2 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-green"></span> </h2> <div class="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5"> ${postsAuthor.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`)} </div> ${renderComponent($$result2, "PostAuthors", $$PostAuthors, {})} ` })}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/blog/autor/[slug].astro", void 0);
const $$file = "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/blog/autor/[slug].astro";
const $$url = "/blog/autor/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
