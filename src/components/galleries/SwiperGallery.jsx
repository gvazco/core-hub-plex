import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export default function SwiperGalleryReact({ slides }) {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const slideCount = slides?.length ?? 0;
  const shouldLoop = slideCount >= 3;
  const slidesPerView = slideCount >= 3 ? 'auto' : 1;
  const centeredSlides = slideCount > 1;
  const stretch = slideCount <= 4 ? 40 : 120;

  useEffect(() => {
    if (!swiperRef.current) return;

    // Destroy existing instance
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.destroy(true, true);
      swiperInstanceRef.current = undefined;
    }

    // Create new instance
    swiperInstanceRef.current = new Swiper(swiperRef.current, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides,
      loop: true,
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
      }
    };
  }, [slides]);

  return (
    <div ref={swiperRef} className="swiper bg-dark">
      <div className="swiper-wrapper">
        {slides.data?.map((slide) => (
          <a
            key={slide.slug}
            href={`/galerias/${slide.slug}`}
            className="swiper-slide relative w-full max-w-[450px] shrink-0 overflow-hidden transition-shadow bg-dark text-white p-6 neo-border-pink neo-shadow-cyan neo-hover-cyan transition-neo cursor-pointer"
          >
            {slide.cover_image && (
              <img
                src={`${import.meta.env.PUBLIC_ASSETS}/${slide.cover_image}`}
                alt={slide.title || slide.slug}
                className="h-[22rem] sm:h-[24rem] lg:h-[30rem] w-full object-cover"
              />
            )}
            <div className="absolute align-center text-center inset-x-0 bottom-0 bg-black/60 p-6 text-white backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-semibold">
                {slide?.title || slide.slug}
              </h2>

              <h3 className="mb-4 text-2xl font-semibold">
                {slide?.subtitle}
              </h3>
              
                <h3 key={slide.gallery_category?.id} className="max-w-xs inline-block py-1 px-3 text-md font-bold text-white mb-2 ml-2 mr-2 transition-neo">
                  #{slide.gallery_category?.name}
                </h3>
                <h3 key={slide.gallery_tag?.id} className="max-w-xs inline-block py-1 px-3 text-md font-bold text-white mb-2 ml-2 mr-2 transition-neo">
                  #{slide.gallery_tag?.name}
                </h3>
              
            </div>
          </a>
        ))}
      </div>
      <div className="swiper-pagination mt-8"></div>
      <button className="swiper-button-next bg-neon-cyan text-dark p-4 border-4 border-neon-cyan neo-shadow-pink neo-hover-pink transition-neo cursor-pointer"></button>
      <button className="swiper-button-prev bg-neon-cyan text-dark p-4 border-4 border-neon-cyan neo-shadow-pink neo-hover-pink transition-neo cursor-pointer"></button>
    </div>
  );
}
