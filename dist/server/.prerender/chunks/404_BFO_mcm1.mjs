import { c as createComponent, $ as $$CoreLayout } from './CoreLayout_DUXMnClU.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './prerender_BgM_VHoD.mjs';

const bg = new Proxy({"src":"/_astro/bg_404.CD52rWbJ.jpg","width":1200,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/assets/bg_404.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/assets/bg_404.jpg");
							return target[name];
						}
					});

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CoreLayout", $$CoreLayout, { "title": "404 - Página no encontrada", "subtitle": "¡Ups!", "bgImage": bg.src }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="md:mt-15 p-20"> <h1 class="text-white text-center text-2xl md:text-3xl font-bold">
¡Ups! No existe contenido
</h1> <p class="text-center text-lg md:text-xl mt-5 text-gray-300">
Tal vez quieras volver al ${""} <a href="/" class="text-neon-yellow font-bold">Inicio</a> </p> </div> ` })}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/404.astro", void 0);

const $$file = "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
