import AutoplaySlider from '@rcaferati/react-awesome-slider/autoplay';
import '@rcaferati/react-awesome-slider/styles.css';
import '@rcaferati/react-awesome-slider/custom-animations/open-animation.css';
import { useMemo } from 'react';

export default function AwesomeSliderGallery({ slides }) {
  const items = slides?.data ?? [];

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
              className="absolute inset-0 z-10 block text-white"
            >
              <span className="absolute inset-x-0 bottom-0 bg-black/80 p-6 text-center text-white backdrop-blur-sm">
                <h2 className="mb-4 text-3xl font-semibold">{slide?.title || slide.slug}</h2>
                <h3 className="mb-4 text-2xl font-semibold">{slide?.subtitle}</h3>
                {slide?.gallery_category?.name && (
                  <span className="max-w-xs inline-block py-1 px-3 text-md font-bold text-white mb-2 ml-2 mr-2 transition-neo">
                    #{slide.gallery_category.name}
                  </span>
                )}
                {slide?.gallery_tag?.name && (
                  <span className="max-w-xs inline-block py-1 px-3 text-md font-bold text-white mb-2 ml-2 mr-2 transition-neo">
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
      style={{ '--slider-height-percentage': '45%' }}
      media={media}    />
  );
}