import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export default function SwiperGalleryReact({ images }) {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const items = Array.isArray(images) ? images : [];
  const slideCount = items.length;
  const centeredSlides = slideCount > 1;
  const stretch = slideCount <= 4 ? 40 : 120;

  useEffect(() => {
    if (!swiperRef.current) return;

    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.destroy(true, true);
      swiperInstanceRef.current = undefined;
    }

    swiperInstanceRef.current = new Swiper(swiperRef.current, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides,
      loop: slideCount >= 3,
      speed: 600,
      slidesPerView: 1,
      slidesPerGroup: 1,
      loopedSlides: slideCount,
      spaceBetween: 20,
      roundLengths: true,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      coverflowEffect: {
        rotate: 10,
        stretch,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
    });

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
        swiperInstanceRef.current = undefined;
      }
    };
  }, [items, slideCount, centeredSlides, stretch]);

  return (
    <div ref={swiperRef} className="swiper bg-dark">
      <div className="swiper-wrapper">
        {items.map((item, index) => {
          const file = item?.directus_files_id ?? item;
          const src = `${import.meta.env.PUBLIC_ASSETS}/${file.id}`;
          return (
            <a
              key={file.id ?? index}
              href={src}
              data-pswp-width={file.width ?? undefined}
              data-pswp-height={file.height ?? undefined}
              className="swiper-slide relative w-full max-w-[450px] shrink-0 overflow-hidden transition-shadow bg-dark text-white p-6 neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer"
            >
              <img
                src={src}
                alt={file.description || file.title || 'Galería de imágenes'}
                className="h-[22rem] w-full object-cover"
              />
            </a>
          );
        })}
      </div>
      <div className="swiper-pagination mt-8"></div>
      <button className="swiper-button-next bg-neon-cyan text-dark p-4 border-4 border-neon-cyan neo-shadow-pink neo-hover-pink transition-neo cursor-pointer"></button>
      <button className="swiper-button-prev bg-neon-cyan text-dark p-4 border-4 border-neon-cyan neo-shadow-pink neo-hover-pink transition-neo cursor-pointer"></button>
    </div>
  );
}