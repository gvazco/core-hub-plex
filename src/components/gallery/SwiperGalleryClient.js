import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

let swiperInstance;

const initSwiper = () => {
  const swiperContainer = document.querySelector('.swiper');
  if (!swiperContainer) return;

  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = undefined;
  }

  const slidesCount = swiperContainer.querySelectorAll('.swiper-slide').length;

  swiperInstance = new Swiper(swiperContainer, {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    speed: 600,
    slidesPerView: 'auto',
    spaceBetween: 24,
    watchOverflow: true,
    roundLengths: true,
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 3000,
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
      stretch: 120,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
  });
};

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initSwiper);
} else {
  initSwiper();
}

window.addEventListener('pageshow', (event) => {
  if (event.persisted || document.readyState === 'complete') {
    initSwiper();
  }
});
