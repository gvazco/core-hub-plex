import { z } from "zod";
import { sl } from "zod/v4/locales";

const imageSchema = z.object({
  url: z.string().nullable().optional(),
  width: z.number().nullable().optional(),
  height: z.number().nullable().optional(),
});

const featureImagesSchema = z.object({
  medium: imageSchema,
  medium_large: imageSchema,
  large: imageSchema,
  full: imageSchema,
});

export const BaseWPSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  featured_images: featureImagesSchema.optional(),
  acf: z.object({
    subtitle: z.string().optional(),
  }),
});

export const NewsInformeSchema = z.object({
  title: z.object({
    rendered: z.string(),
  }),
  acf: z.object({
    informe: z.string(),
    url: z.string(),
  }),
});

export const NewsInformeArraySchema = z.array(NewsInformeSchema);

const gallerySchema = z.object({
  large: imageSchema,
  full: imageSchema,
});

export const GalleryPageSchema = BaseWPSchema.extend({
  gallery: z.array(gallerySchema),
});

export const GallerySchema = BaseWPSchema.omit({
  content: true,
}).extend({
  date: z.string(),
  gallery: z.array(gallerySchema).optional(),
});

export const GalleriesSchema = z.array(GallerySchema);

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
});

export const CategoriesSlugSchema = z.array(
  CategorySchema.pick({
    slug: true,
  }),
);

export const CategoriesSchema = z.array(CategorySchema);

export const PostSchema = BaseWPSchema.extend({
  acf: z.object({
    subtitle: z.string().optional(),
    video_url: z.string().nullable().optional(),
    gallery_banner: z.object({
      gallery_url: z.string().nullable().optional(),
      banner_description: z.string().nullable().optional(),
      gallery_cover: z.union([z.string(), z.boolean()]).optional(),
    }).nullable().optional(),
    
    options: z.object({
      video_enabled: z.boolean(),
      gallery_enabled: z.boolean(),
    }).optional(),
  }),
  date: z.string(),
  category_details: CategoriesSchema,
  tag_details: CategoriesSchema.optional(),
});

export const PostsSchema = z.array(PostSchema);

export const GaleriaSchema = BaseWPSchema.extend({
  acf: z.object({
    historia: z.string().optional(),
  }),
  gallery: z.array(gallerySchema).optional(),
  date: z.string(),
  category_details: CategoriesSchema,
});

export const GaleriasSchema = z.array(GaleriaSchema);

export const InicioSchema = BaseWPSchema.omit({
  content: true,
}).extend({
  acf: z.object({
    subtitle: z.string().optional(),
    titular: z.object({
      epigrafe: z.string(),
      titulo: z.string(),
      subtitulo: z.string().optional(),
      resumen: z.string().optional(),
      categoria: z.string(),
      etiqueta: z.string(),
      slug: z.string(),
    }),
    columna: z.object({
      impacto: z.object({
        titulo: z.string(),
        resumen: z.string().optional(),
        categoria: z.string(),
        etiqueta: z.string(),
        slug: z.string(),
      }),
      fondo: z.object({
        titulo: z.string(),
        categoria: z.string(),
        etiqueta: z.string(),
        autor: z.string(),
        fecha: z.string(),
        slug: z.string(),
      }),
    }),
  }),
  date: z.string(),
});

export const IniciosSchema = z.array(InicioSchema);

const MenuItemSchema = BaseWPSchema.pick({
  title: true,
  slug: true,
  featured_images: true,
}).extend({
  link: z.string(),
  acf: z.object({
    description: z.string(),
    price: z.coerce.number(),
  }),
});

export const MenuItemsSchema = z.array(MenuItemSchema);

const MarkerSchema = z.object({
  label: z.string(),
  lat: z.number(),
  lng: z.number(),
});

const LocationSchema = z.object({
  lat: z.number(),
  lng: z.number(),
  zoom: z.number(),
  markers: z.array(MarkerSchema),
});

export const ContactPageSchema = BaseWPSchema.extend({
  acf: z
    .object({
      subtitle: z.string(),
    })
    .catchall(LocationSchema),
});


export type Post = z.infer<typeof PostSchema>;
export type Galeria = z.infer<typeof GaleriaSchema>;
export type MenuItem = z.infer<typeof MenuItemSchema>;
export type Gallery = z.infer<typeof gallerySchema>;
export type FeatureImages = z.infer<typeof featureImagesSchema>;
export type Location = z.infer<typeof LocationSchema>;
