import { c as createComponent, $ as $$CoreLayout } from './CoreLayout_a_vsr70c.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './prerender_Hd2AncPp.mjs';
import { $ as $$GalleryCategories } from './GalleryCategories_C3GavQ58.mjs';
import { $ as $$GalleryTags } from './GalleryTags_Ufmcy7kn.mjs';
import { i as DirectusGalleriesCollectionResponseSchema, j as DirectusGalleriesPageResponseSchema } from './index_Bh7jurQE.mjs';
import { $ as $$PostCard } from './PostCard_CGpc3w6K.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import AutoplaySlider from '@rcaferati/react-awesome-slider/autoplay';
import { useState, useEffect, useMemo } from 'react';

const $$GalleryPosts = createComponent(async ($$result, $$props, $$slots) => {
  const url = `${"https://core-cms.core-hub-plex.cloud/items"}/galleries?fields=*,gallery_category.*,gallery_tag.*,author.*,gallery.directus_files_id.id,gallery.directus_files_id.filename_disk,gallery.directus_files_id.filename_download,gallery.directus_files_id.title,gallery.directus_files_id.type,gallery.directus_files_id.width,gallery.directus_files_id.height,gallery.directus_files_id.filesize`;
  const res = await fetch(url);
  const json = await res.json();
  const newData = DirectusGalleriesCollectionResponseSchema.parse(json);
  const { data: articles } = newData;
  return renderTemplate`${maybeRenderHead()}<div class="columns-1 md:columns-2 lg:columns-3 gap-5 my-5 space-y-5"> ${articles.map(
    (post) => post.status === "published" && renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": post })}`
  )} </div>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/galleries/GalleryPosts.astro", void 0);

function AwesomeSliderGallery({ slides }) {
  const items = slides?.data ?? [];
  const [sliderHeight, setSliderHeight] = useState("60%");
  useEffect(() => {
    const updateHeight = () => {
      setSliderHeight(window.innerWidth > 768 ? "60%" : "125%");
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  const media = useMemo(
    () => items.map((slide) => {
      const source = slide.cover_image ? `${"https://core-cms.core-hub-plex.cloud/assets"}/${slide.cover_image}` : void 0;
      return {
        source,
        slug: slide.slug,
        children: /* @__PURE__ */ jsx(
          "a",
          {
            href: `/galerias/${slide.slug}`,
            className: "absolute inset-0 z-10 flex items-end md:items-center justify-center text-white",
            children: /* @__PURE__ */ jsxs("span", { className: "max-w-xl bg-black/70 p-6 md:p-12 text-center text-white backdrop-blur-sm", children: [
              /* @__PURE__ */ jsx("h1", { className: " mb-4 text-2xl md:text-5xl font-extrabold uppercase leading-none", children: slide?.title || slide.slug }),
              /* @__PURE__ */ jsx("h3", { className: "mb-4 text-2xl font-bold text-neon-yellow uppercase leading-tight mb-4", children: slide?.subtitle }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  class: "flex flex-col md:flex-row justify-center items-center font-mono mt-auto border-t-4 border-neon-green pt-4",
                  children: /* @__PURE__ */ jsxs("div", { class: "mb-3 md:mb-0", children: [
                    slide?.gallery_category?.name && /* @__PURE__ */ jsx("span", { class: "bg-dark border-2 text-neon-green border-neon-green px-4 py-1 mx-2 font-bold", children: slide.gallery_category.name }),
                    slide?.gallery_tag?.name && /* @__PURE__ */ jsx("span", { class: "bg-dark border-2 text-neon-green border-neon-green px-4 py-1 mx-2 font-bold", children: slide.gallery_tag.name })
                  ] })
                }
              )
            ] })
          }
        )
      };
    }),
    [items]
  );
  return /* @__PURE__ */ jsx(
    AutoplaySlider,
    {
      animation: "scaleOutAnimation",
      organicArrows: true,
      bullets: false,
      infinite: true,
      name: "gallery",
      play: true,
      cancelOnInteraction: false,
      interval: 3e3,
      className: "bg-dark",
      style: { "--slider-height-percentage": `${sliderHeight}` },
      media
    }
  );
}

const $$AwesomeSliderGalleryWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const url = `${"https://core-cms.core-hub-plex.cloud/items"}/galleries?fields=*,gallery_category.*,gallery_tag.*,author.*,gallery.directus_files_id.id,gallery.directus_files_id.filename_disk,gallery.directus_files_id.filename_download,gallery.directus_files_id.title,gallery.directus_files_id.type,gallery.directus_files_id.width,gallery.directus_files_id.height,gallery.directus_files_id.filesize&limit=5&sort=-id`;
  const res = await fetch(url);
  const json = await res.json();
  const data = DirectusGalleriesCollectionResponseSchema.parse(json);
  return renderTemplate`${maybeRenderHead()}<section class="awesome-slider-gallery" data-aos="zoom-in-up" data-aos-duration="2000"> <div class="mx-auto max-w-7xl asw"> ${renderComponent($$result, "AwesomeSliderGallery", AwesomeSliderGallery, { "client:load": true, "slides": data, "client:component-hydration": "load", "client:component-path": "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/galleries/AwesomeSliderGallery", "client:component-export": "default" })} </div> </section>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/galleries/AwesomeSliderGalleryWrapper.astro", void 0);

const $$Galerias = createComponent(async ($$result, $$props, $$slots) => {
  const newUrl = `${"https://core-cms.core-hub-plex.cloud/items"}/pages?filter[slug][_eq]=galerias`;
  const newResponse = await fetch(newUrl);
  const newJson = await newResponse.json();
  const newData = DirectusGalleriesPageResponseSchema.parse(newJson);
  const { data: galleriesPage } = newData;
  return renderTemplate`${renderComponent($$result, "CoreLayout", $$CoreLayout, { "title": galleriesPage[0]?.title || "Galerías", "subtitle": galleriesPage[0]?.subtitle, "bgImage": `${"https://core-cms.core-hub-plex.cloud/assets"}/${galleriesPage[0]?.cover_image}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "AwesomeSliderGalleryWrapper", $$AwesomeSliderGalleryWrapper, {})} ${renderComponent($$result2, "GalleryCategories", $$GalleryCategories, {})} ${renderComponent($$result2, "GalleryTags", $$GalleryTags, {})} ${renderComponent($$result2, "GalleryPosts", $$GalleryPosts, {})} ` })}`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/galerias.astro", void 0);
const $$file = "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/pages/galerias.astro";
const $$url = "/galerias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Galerias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
