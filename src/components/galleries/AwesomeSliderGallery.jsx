import AutoplaySlider from '@rcaferati/react-awesome-slider/autoplay';
import '@rcaferati/react-awesome-slider/styles.css';
import '@rcaferati/react-awesome-slider/custom-animations/open-animation.css';
import { useEffect, useMemo, useState } from 'react';

export default function AwesomeSliderGallery({ slides }) {
  const items = slides?.data ?? [];
  const [sliderHeight, setSliderHeight] = useState('60%');

  useEffect(() => {
    const updateHeight = () => {
      setSliderHeight(window.innerWidth > 768 ? '45%' : '100%');
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const media = useMemo(
    () =>
      items.map((slide) => {
        const source = slide.cover_image
          ? `${import.meta.env.PUBLIC_ASSETS}/${slide.cover_image}`
          : undefined;
        return {
          source,
          slug: slide.slug,
          children: (
            <a
              href={`/galerias/${slide.slug}`}
              className="absolute inset-0 z-10 flex items-end md:items-center justify-center text-white"
            >
              <span className="max-w-xl bg-black/70 p-6 md:p-12 text-center text-white backdrop-blur-sm">
                <h2 className=" font-heading mb-4 text-4xl md:text-5xl font-semibold">{slide?.title || slide.slug}</h2>
                <h3 className="mb-4 text-xl md:text-2xl font-semibold">{slide?.subtitle}</h3>
                {slide?.gallery_category?.name && (
                  <span className="max-w-xs inline-block py-1 px-5 mx-3 text-sm text-white bg-dark neo-border-pink p-5">
                    #{slide.gallery_category.name}
                  </span>
                )}
                {slide?.gallery_tag?.name && (
                  <span className="max-w-xs inline-block py-1 px-5 text-sm text-white m-1 bg-dark neo-border-cyan p-5">
                    #{slide.gallery_tag.name}
                  </span>
                )}
              </span>
            </a>
          ),
        };
      }),
    [items]
  );

  return (
    <AutoplaySlider
      animation="openAnimation"
      organicArrows
      bullets={false}
      infinite
      name="gallery"
      play={true}
      cancelOnInteraction={false}
      interval={2000}
      className="bg-dark"
      style={{ '--slider-height-percentage': `${sliderHeight}` }}
      media={media}    />
  );
}