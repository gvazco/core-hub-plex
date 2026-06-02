import { c as createComponent, r as renderScript, $ as $$CoreLayout } from './CoreLayout_DUXMnClU.mjs';
import 'piccolore';
import { m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent } from './prerender_BgM_VHoD.mjs';
import 'clsx';
import { l as DirectusHotNewsResponseSchema, m as DirectusPageIndexResponseSchema } from './index_B7YBDCuB.mjs';
import { $ as $$Picture } from './_astro_assets_B6mxCtqr.mjs';
import { f as formatDate } from './index_DBtM_ae6.mjs';

const $$TickerHotNews = createComponent(async ($$result, $$props, $$slots) => {
  const newURL = `${undefined                         }/hot_news`;
  const newResponse = await fetch(newURL);
  const newJson = await newResponse.json();
  const newData = DirectusHotNewsResponseSchema.parse(newJson);
  const { data: dataItems } = newData;
  return renderTemplate`<!-- Ticker de Noticias Rápidas -->${maybeRenderHead()}<div class="mt-0 md:mt-20 bg-neon-yellow text-dark py-2 border-b-4 border-neon-yellow overflow-hidden font-mono font-bold text-lg flex items-center"> <div class="animate-scroll"> ${dataItems.map(
    (item) => item.status === "published" && renderTemplate`<a${addAttribute(item.article_url, "href")} target="_blank" class="inline-flex items-center mx-2"> <p class="mx-4 flex items-center space-x-2"> <span class="material-symbols-outlined">${item.icon}</span> ${item.title} <span>${item.subtitle}</span> </p> </a>`
  )} </div> </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/FrontPage/TickerHotNews.astro", void 0);

const $$AdvertisingSpace = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div data-aos="zoom-out-down" id="carousel" class="carousel-container"> <div class="carousel-slides"> <div class="carousel-slide active"> <div class="p-8 border-4 border-neon-yellow border-dashed flex flex-col items-center justify-center text-center flex-grow"> <h3 class="text-2xl font-bold text-neon-yellow uppercase mb-2">
ANÚNCIATE AQUÍ
</h3> <p class="font-mono text-gray-500 text-sm">
Llega a millones de navegantes cibernéticos diariamente.
</p> </div> </div> <div class="carousel-slide"> <div class="p-8 border-4 border-neon-yellow border-dashed flex flex-col items-center justify-center text-center flex-grow"> <h3 class="text-2xl font-bold text-neon-yellow uppercase mb-2">
ANÚNCIATE AQUÍ
</h3> <p class="font-mono text-gray-500 text-sm">
Conecta con tu audiencia objetivo de forma efectiva.
</p> </div> </div> <div class="carousel-slide"> <div class="p-8 border-4 border-neon-yellow border-dashed flex flex-col items-center justify-center text-center flex-grow"> <h3 class="text-2xl font-bold text-neon-yellow uppercase mb-2">
ANÚNCIATE AQUÍ
</h3> <p class="font-mono text-gray-500 text-sm">
Maximiza tu presencia digital con nuestras plataformas.
</p> </div> </div> </div> </div> ${renderScript($$result, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/FrontPage/AdvertisingSpace.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/FrontPage/AdvertisingSpace.astro", void 0);

const $$CoreFeaturedContent = createComponent(async ($$result, $$props, $$slots) => {
  const newUrl = `${undefined                         }/page_index?fields=*.*.*`;
  const newResponse = await fetch(newUrl);
  const newJson = await newResponse.json();
  const newData = DirectusPageIndexResponseSchema.parse(newJson);
  const { data: pageIndex } = newData;
  const publicAssetsUrl = undefined                             ;
  return renderTemplate`<!-- Contenido Principal -->${maybeRenderHead()}<section class="max-w-7xl px-2 md:px-0 mx-auto mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12"> <!-- Artículo Principal (Hero) --> <article data-aos="zoom-out-down" class="lg:col-span-8 bg-dark p-6 neo-border-green neo-shadow-green neo-hover-green transition-neo relative group cursor-pointer flex flex-col justify-between"> <a${addAttribute(pageIndex.slug, "href")} target="_blank"> <div class="uppercase absolute top-0 right-0 bg-neon-green text-dark font-mono font-bold px-4 py-2 text-xl transform translate-x-4 -translate-y-4 neo-border-green shadow-lg z-10"> ${pageIndex.epigraph} </div> ${pageIndex.cover_image && renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "src": `${publicAssetsUrl}/${pageIndex?.cover_image?.id}`, "alt": pageIndex?.cover_image?.title || "Imagen Destacada", "width": pageIndex?.cover_image?.width || 800, "height": pageIndex?.cover_image?.height || 600, "formats": ["avif", "webp"], "class": "w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover border-4 border-neon-green mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" })}`} <h1 class="text-2xl md:text-6xl font-extrabold uppercase leading-none mb-6 text-white group-hover:text-neon-green transition-colors"> ${pageIndex.title} </h1> <h3 class="text-2xl font-bold text-neon-yellow uppercase leading-tight mb-4"> ${pageIndex.subtitle} </h3> <p class="text-xl text-gray-400 font-mono mb-8 line-clamp-3"> ${pageIndex.excerpt} </p> <div class="flex flex-col md:flex-row md:justify-between items-center font-mono mt-auto border-t-4 border-neon-green pt-4"> <div class="mb-3 md:mb-0"> <span class="bg-dark border-2 text-neon-green border-neon-green px-4 py-1 font-bold">${pageIndex.holder_category?.name}</span> <span class="bg-dark border-2 text-neon-green border-neon-green px-4 py-1 font-bold">${pageIndex.holder_tag?.name}</span> </div> <span class="text-center">${formatDate(pageIndex.date_created)}</span> </div> </a> </article> <!-- Barra Lateral de Noticias --> <aside class="lg:col-span-4 flex flex-col gap-8"> <article data-aos="zoom-out-down" class="bg-neon-cyan text-dark p-6 border-4 border-neon-cyan neo-shadow-pink neo-hover-pink transition-neo cursor-pointer"> <a${addAttribute(pageIndex.impact_slug, "href")} target="_blank"> <span class="bg-dark text-neon-cyan font-mono px-3 py-1 text-sm font-bold border-2 border-dark mb-4 inline-block">${pageIndex.impact_category?.name}</span> <h2 class="text-3xl text-neon-green font-bold uppercase leading-tight mb-4 text-dark mix-blend-exclusion"> ${pageIndex.impact_title} </h2> <p class="font-mono text-dark opacity-90 font-bold mb-4 line-clamp-3"> ${pageIndex.impact_excerpt} </p> </a> </article> <article data-aos="zoom-out-down" class="bg-dark text-white p-6 neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer"> <a${addAttribute(pageIndex.background_slug, "href")} target="_blank"> <span class="bg-neon-pink text-dark font-mono px-3 py-1 text-sm font-bold mb-4 inline-block">${pageIndex.background_category?.name}</span> <h2 class="text-3xl font-bold uppercase leading-tight mb-4 group-hover:text-neon-pink transition-colors"> ${pageIndex.background_title} </h2> <div class="uppercase font-mono text-gray-400 text-sm font-bold">
POR: ${pageIndex.background_author?.name} /// ${formatDate(pageIndex.background_date)} </div> </a> </article> ${renderComponent($$result, "AdvertisingSpace", $$AdvertisingSpace, {})} </aside> </section>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/FrontPage/CoreFeaturedContent.astro", void 0);

const $$CoreSecondaryNews = createComponent(async ($$result, $$props, $$slots) => {
  const newUrl = `${undefined                         }/page_index?fields=*.*.*`;
  const newResponse = await fetch(newUrl);
  const newJson = await newResponse.json();
  const newData = DirectusPageIndexResponseSchema.parse(newJson);
  const { data: pageIndex } = newData;
  const publicAssetsUrl = undefined                             ;
  return renderTemplate`<!-- Grid de Noticias Secundarias -->${maybeRenderHead()}<section class="max-w-7xl px-2 mx-auto mt-10 mb-20"> <h2 class="text-3xl md:text-5xl font-black uppercase text-white mb-12 flex items-center gap-4"> <span class="w-8 h-8 bg-neon-pink inline-block neo-shadow-cyan"></span>
MÁS NOTICIAS
<span class="flex-grow h-2 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-green"></span> </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> <!-- Card 1 --> <article data-aos="zoom-out-down" class="bg-dark neo-border-yellow p-5 neo-shadow-yellow neo-hover-yellow transition-neo flex flex-col group"> <a${addAttribute(pageIndex.izq_slug, "href")}> ${pageIndex.izq_image && renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "src": `${publicAssetsUrl}/${pageIndex?.izq_image?.id}`, "alt": pageIndex.izq_title || "Imagen Destacada", "width": 800, "height": 600, "formats": ["avif", "webp"], "class": "h-48 w-full object-cover border-b-4 border-neon-yellow mb-4 grayscale group-hover:grayscale-0 transition-all" })}`} <span class="text-neon-yellow font-mono text-sm mb-2 font-bold">${pageIndex.izq_category?.name}</span> <h3 class="text-2xl font-bold uppercase mb-4 flex-grow group-hover:text-neon-yellow transition-colors"> ${pageIndex.izq_title} </h3> <a${addAttribute(pageIndex.izq_slug, "href")} class="text-white hover:text-neon-yellow font-mono font-bold flex justify-between items-center mt-auto border-t-2 border-gray-800 pt-4"> <span>LEER MÁS</span> <span class="text-xl">→</span> </a> </a> </article> <!-- Card 2 --> <article data-aos="zoom-out-down" class="bg-dark neo-border-cyan p-5 neo-shadow-cyan neo-hover-cyan transition-neo flex flex-col group"> <a${addAttribute(pageIndex.cen_slug, "href")}> ${pageIndex.cen_image && renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "src": `${publicAssetsUrl}/${pageIndex?.cen_image?.id}`, "alt": pageIndex.cen_title || "Imagen Destacada", "width": 800, "height": 600, "formats": ["avif", "webp"], "class": "h-48 w-full object-cover border-b-4 border-neon-cyan mb-4 grayscale group-hover:grayscale-0 transition-all" })}`} <span class="text-neon-cyan font-mono text-sm mb-2 font-bold">${pageIndex.cen_category?.name}</span> <h3 class="text-2xl font-bold uppercase mb-4 flex-grow group-hover:text-neon-cyan transition-colors"> ${pageIndex.cen_title} </h3> <a${addAttribute(pageIndex.cen_slug, "href")} class="text-white hover:text-neon-cyan font-mono font-bold flex justify-between items-center mt-auto border-t-2 border-gray-800 pt-4"> <span>LEER MÁS</span> <span class="text-xl">→</span> </a> </a> </article> <!-- Card 3 --> <article data-aos="zoom-out-down" class="bg-dark neo-border-pink p-5 neo-shadow-pink neo-hover-pink transition-neo flex flex-col group"> <a${addAttribute(pageIndex.der_slug, "href")}> ${pageIndex.der_image && renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "src": `${publicAssetsUrl}/${pageIndex?.der_image?.id}`, "alt": pageIndex.der_title || "Imagen Destacada", "width": 800, "height": 600, "formats": ["avif", "webp"], "class": "h-48 w-full object-cover border-b-4 border-neon-cyan mb-4 grayscale group-hover:grayscale-0 transition-all" })}`} <span class="text-neon-pink font-mono text-sm mb-2 font-bold">${pageIndex.der_category?.name}</span> <h3 class="text-2xl font-bold uppercase mb-4 flex-grow group-hover:text-neon-pink transition-colors"> ${pageIndex.der_title} </h3> <a${addAttribute(pageIndex.der_slug, "href")} class="text-white hover:text-neon-pink font-mono font-bold flex justify-between items-center mt-auto border-t-2 border-gray-800 pt-4"> <span>ESCUCHAR AHORA</span> <span class="text-xl">▶</span> </a> </a> </article> </div> </section>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/ui/FrontPage/CoreSecondaryNews.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CoreLayout", $$CoreLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TickerHotNews", $$TickerHotNews, {})} ${renderComponent($$result2, "CoreFeaturedContent", $$CoreFeaturedContent, {})} ${renderComponent($$result2, "CoreSecondaryNews", $$CoreSecondaryNews, {})} ` })}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/index.astro", void 0);

const $$file = "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
