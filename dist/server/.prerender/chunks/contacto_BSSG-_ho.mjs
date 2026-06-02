import { c as createComponent, r as renderScript, $ as $$CoreLayout } from './CoreLayout_DUXMnClU.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, b as renderTemplate, u as unescapeHTML } from './prerender_BgM_VHoD.mjs';
import { h as DirectusContactPageResponseSchema } from './index_B7YBDCuB.mjs';
import 'clsx';

const $$LocationMap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LocationMap;
  const { location } = Astro2.props;
  console.log("LOCATION", location);
  return renderTemplate`${maybeRenderHead()}<div> <h3 class="text-neon-cyan font-black text-center text-2xl uppercase mb-5">
Ubicación
</h3> <div id="map" class="h-[300px] md:h-[500px] lg:h-[700px]"></div> ${renderComponent($$result, "location-data", "location-data", { "data-lat": location.lat, "data-lng": location.lng, "data-zoom": location.zoom, "data-label": location.markers[0].label, "data-markerlat": location.markers[0].lat, "data-markerlng": location.markers[0].lng })} </div> ${renderScript($$result, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/contact/LocationMap.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/contact/LocationMap.astro", void 0);

const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <h3 class="text-neon-cyan font-black text-center text-2xl uppercase mb-5">
Contacto
</h3> <form method="post" class="space-y-3" novalidate> <legend class="text-xl text-gray-300">Llena todos los campos para enviar un mensaje.</legend> <div class="flex flex-col space-y-3"> <label for="name" class="font-bold uppercase text-neon-pink text-lg">Nombre:</label> <input id="name" type="text" name="name" placeholder="Tu Nombre" class="border-neon-cyan border-2 p-2 bg-dark text-white placeholder-gray-500"> </div> <div class="flex flex-col space-y-3"> <label for="email" class="font-bold uppercase text-neon-pink text-lg">Email:</label> <input id="email" type="email" name="email" placeholder="Tu Email" class="border-neon-cyan border-2 p-2 bg-dark text-white placeholder-gray-500"> </div> <div class="flex flex-col space-y-3"> <label for="subject" class="font-bold uppercase text-neon-pink text-lg">Asunto:</label> <input id="subject" type="text" name="subject" placeholder="Asunto de Mensaje" class="border-neon-cyan border-2 p-2 bg-dark text-white placeholder-gray-500"> </div> <div class="flex flex-col space-y-3"> <label for="message" class="font-bold uppercase text-neon-pink text-lg">Contenido:</label> <textarea id="message" name="message" placeholder="Tu Mensaje" class="border-neon-cyan border-2 p-2 bg-dark text-white placeholder-gray-500 h-32"></textarea> </div> <input type="submit" value="Enviar" class="bg-neon-cyan text-dark w-full p-3 uppercase font-bold cursor-pointer hover:bg-neon-green text-2xl neo-border-pink neo-shadow-pink"> </form> </div> ${renderScript($$result, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/contact/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/contact/ContactForm.astro", void 0);

const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const url = `${undefined                         }/pages?filter[slug][_eq]=contacto`;
  const response = await fetch(url);
  const json = await response.json();
  const pageData = DirectusContactPageResponseSchema.parse(json);
  const { data } = pageData;
  console.log(data[0]);
  return renderTemplate`${renderComponent($$result, "CoreLayout", $$CoreLayout, { "title": "Contacto", "subtitle": data[0]?.subtitle || "", "bgImage": data[0]?.cover_image || "" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-xl space-y-3 mt-10 lg:mt-0">${unescapeHTML(data[0]?.content)}</div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} ${renderComponent($$result2, "LocationMap", $$LocationMap, { "location": data[0]?.location?.location })} </div> ` })}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/contacto.astro", void 0);
const $$file = "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
