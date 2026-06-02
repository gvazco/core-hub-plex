import { c as createComponent, $ as $$CoreLayout } from './CoreLayout_DUXMnClU.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './prerender_BgM_VHoD.mjs';
import { $ as $$GalleryCategories } from './GalleryCategories_CbxxpCCP.mjs';
import { i as DirectusGalleriesCollectionResponseSchema, j as DirectusGalleriesPageResponseSchema } from './index_B7YBDCuB.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import Swiper from 'swiper/bundle';

function SwiperGalleryReact({ slides }) {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const slideCount = slides?.length ?? 0;
  const shouldLoop = slideCount >= 3;
  const slidesPerView = slideCount >= 3 ? "auto" : 1;
  const centeredSlides = slideCount > 1;
  useEffect(() => {
    if (!swiperRef.current) return;
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.destroy(true, true);
      swiperInstanceRef.current = void 0;
    }
    swiperInstanceRef.current = new Swiper(swiperRef.current, {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides,
      centeredSlidesBounds: true,
      loop: shouldLoop,
      speed: 600,
      slidesPerView,
      spaceBetween: 24,
      watchOverflow: true,
      roundLengths: true,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 3e3,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      coverflowEffect: {
        rotate: 10,
        stretch: 120,
        depth: 200,
        modifier: 1,
        slideShadows: false
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 12,
          centeredSlides: true,
          coverflowEffect: {
            stretch: 0,
            rotate: 5,
            depth: 100
          }
        },
        640: {
          slidesPerView: slideCount >= 3 ? 1.5 : 1,
          spaceBetween: 16,
          coverflowEffect: {
            stretch: 40,
            rotate: 10,
            depth: 150
          }
        },
        768: {
          slidesPerView: slideCount >= 3 ? "auto" : 1,
          spaceBetween: 24,
          coverflowEffect: {
            stretch: 80,
            rotate: 10,
            depth: 200
          }
        },
        1024: {
          slidesPerView: slideCount >= 3 ? "auto" : 1,
          spaceBetween: 24,
          coverflowEffect: {
            stretch: 120,
            rotate: 10,
            depth: 200
          }
        }
      }
    });
    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
      }
    };
  }, [slides]);
  return /* @__PURE__ */ jsxs("div", { ref: swiperRef, className: "swiper", children: [
    /* @__PURE__ */ jsx("div", { className: "swiper-wrapper", children: slides.data?.map((slide) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: `/galerias/${slide.slug}`,
        className: "swiper-slide relative w-full max-w-[420px] shrink-0 overflow-hidden transition-shadow bg-dark text-white p-6 neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer",
        children: [
          slide.cover_image && /* @__PURE__ */ jsx(
            "img",
            {
              src: `${undefined                             }${slide.cover_image}`,
              alt: slide.title || slide.slug,
              className: "h-[18rem] sm:h-[22rem] lg:h-[28rem] w-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute align-center text-center inset-x-0 bottom-0 bg-black/60 p-6 text-white backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-semibold", children: slide.title || slide.slug }),
            /* @__PURE__ */ jsxs("h3", { className: "max-w-xs inline-block py-1 px-3 text-md font-bold text-white mb-2 ml-2 mr-2 transition-neo", children: [
              "#",
              slide.gallery_category?.name
            ] }, slide.gallery_category?.id)
          ] })
        ]
      },
      slide.slug
    )) }),
    /* @__PURE__ */ jsx("div", { className: "swiper-pagination mt-8" }),
    /* @__PURE__ */ jsx("button", { className: "swiper-button-next bg-neon-cyan text-dark p-5 border-4 border-neon-cyan neo-shadow-pink neo-hover-pink transition-neo cursor-pointer" }),
    /* @__PURE__ */ jsx("button", { className: "swiper-button-prev bg-neon-cyan text-dark p-5 border-4 border-neon-cyan neo-shadow-pink neo-hover-pink transition-neo cursor-pointer" })
  ] });
}

const $$SwiperGalleryWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const url = `${undefined                         }/galleries?fields=*,gallery_category.*,gallery_tag.*,author.*,gallery.directus_files_id.*`;
  const res = await fetch(url);
  const json = await res.json();
  const data = DirectusGalleriesCollectionResponseSchema.parse(json);
  return renderTemplate`${maybeRenderHead()}<section class="swiper-gallery pb-15"> <div data-aos="zoom-out-down" class="mx-auto max-w-7xl"> ${renderComponent($$result, "SwiperGalleryReact", SwiperGalleryReact, { "client:load": true, "slides": data, "client:component-hydration": "load", "client:component-path": "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/galleries/SwiperGallery", "client:component-export": "default" })} </div> </section>`;
}, "/home/gustavovazco/Documentos/DEV/Core-Hub-Plex/core-hub-plex/src/components/galleries/SwiperGalleryWrapper.astro", void 0);

const $$Galerias = createComponent(async ($$result, $$props, $$slots) => {
  const newUrl = `${undefined                         }/pages?filter[slug][_eq]=galerias`;
  const newResponse = await fetch(newUrl);
  const newJson = await newResponse.json();
  const newData = DirectusGalleriesPageResponseSchema.parse(newJson);
  const { data: galleriesPage } = newData;
  return renderTemplate`${renderComponent($$result, "CoreLayout", $$CoreLayout, { "title": galleriesPage[0]?.title || "Galerías", "subtitle": galleriesPage[0]?.subtitle, "bgImage": `${undefined                             }/${galleriesPage[0]?.cover_image}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryCategories", $$GalleryCategories, {})} ${renderComponent($$result2, "SwiperGalleryWrapper", $$SwiperGalleryWrapper, {})} ` })}`;
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
