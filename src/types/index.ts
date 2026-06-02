import { z } from "zod";

const imageSchema = z.object({
  url: z.string().nullable().optional(),
  width: z.number().nullable().optional(),
  height: z.number().nullable().optional(),
  caption: z.string().nullable().optional(),
});

// Accept a string URL, or `false`/undefined when image is not available yet
const maybeImageString = z.union([z.string(), z.literal(false)]).nullable().optional();

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

const gallerySchema = z.object({
  large: imageSchema,
  full: imageSchema,
  caption: z.string().optional(),
});

export const GalleryPageSchema = BaseWPSchema.extend({
  gallery: z.array(gallerySchema),
});

export const GallerySchema = BaseWPSchema.omit({
  content: true,
}).extend({
  date: z.string(),
  acf: z.object({
    historia: z.string().optional(),
  }),
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

export const AutorSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  acf: z.object({
    formacion: z.string(),
    biografia: z.string(),
    imagen: maybeImageString,
  }).optional(),
});

export const AutoresSlugSchema = z.array(
  AutorSchema.pick({
    slug: true,
  }),
);

export const AutoresSchema = z.array(AutorSchema);

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
  author_details: AutoresSchema.optional(),
});

export const PostsSchema = z.array(PostSchema);

export const GaleriaSchema = BaseWPSchema.extend({
  acf: z.object({
    historia: z.string().optional(),
  }),
  gallery: z.array(gallerySchema).optional(),
  date: z.string(),
  category_details: CategoriesSchema,
  tecnica_details: CategoriesSchema.optional(),
  author_details: AutoresSchema.optional(),
});

export const GaleriasSchema = z.array(GaleriaSchema);


/* -------------------------------------------------------------------------- */
/*                                DIRECTUS CMS                                */
/* -------------------------------------------------------------------------- */

/* ------------------------------- BASE_SCHEMA ------------------------------ */
export const DirectusBaseSchema = z.object({
  id: z.number(),
  title: z.string(), 
  subtitle: z.string().optional(),
  slug: z.string(),
  content: z.string().nullable().optional(),
  cover_image: z.string(),
  seo_title: z.string().optional(),
  seo_description: z.string().nullable().optional(),
  status: z.enum(["draft", "published", "archived"]).optional(),
});

export const DirectusGalleriesPageArraySchema = z.array(DirectusBaseSchema);

export const DirectusGalleriesPageResponseSchema = z.object({
  data: DirectusGalleriesPageArraySchema,
});

export const DirectusBlogPageArraySchema = z.array(DirectusBaseSchema);

export const DirectusBlogPageResponseSchema = z.object({
  data: DirectusBlogPageArraySchema,
});
/* -------------------------------------------------------------------------- */

/* ---------------------- GALLERY JUNCTION TABLE SCHEMA --------------------- */
const DirectusGalleryJunctionSchema = z.object({
  id: z.number(),
  galleries_id: z.number(),
  directus_files_id: z.string(),
});

export const DirectusGalleriesSchema = DirectusBaseSchema.extend({
  user_created: z.string(),
  date_created: z.string().datetime(),
  date_updated: z.string().datetime().nullable().optional(),
  user_updated: z.string().nullable().optional(),
  excerpt: z.string().optional(),
  author: z.number(),
  gallery_category: z.number(),
  gallery_tag: z.number(),
  gallery: z.array(DirectusGalleryJunctionSchema).optional(),
});

export const DirectusGalleriesArraySchema = z.array(DirectusGalleriesSchema);

export const DirectusGalleriesResponseSchema = z.object({
  data: DirectusGalleriesArraySchema,
});
/* -------------------------------------------------------------------------- */

/* ----------------------------- CATEGORY SCHEMA ---------------------------- */
export const DirectusCategorySchema = z.object({
  id: z.number(),
  status: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
});

export const DirectusCategoriesSlugSchema = z.array(
  DirectusCategorySchema.pick({
    slug: true,
  }),
);

export const DirectusCategoriesSchema = z.array(DirectusCategorySchema);
/* -------------------------------------------------------------------------- */

/* ----------------------------- DIRECTUS FILE SCHEMA --------------------------- */
const DirectusFileSchema = z.object({
  id: z.string(),
  storage: z.string(),
  filename_disk: z.string(),
  filename_download: z.string(),
  title: z.string().nullable().optional(),
  type: z.string(),
  created_on: z.string().datetime(),
  modified_on: z.string().datetime(),
  charset: z.string().nullable().optional(),
  filesize: z.string(),
  width: z.number().nullable().optional(),
  height: z.number().nullable().optional(),
  duration: z.number().nullable().optional(),
  embed: z.unknown().nullable().optional(),
  description: z.string().nullable().optional(),
  location: z.unknown().nullable().optional(),
  tags: z.unknown().nullable().optional(),
  metadata: z.record(z.unknown()).nullable().optional(),
  focal_point_x: z.number().nullable().optional(),
  focal_point_y: z.number().nullable().optional(),
  tus_id: z.unknown().nullable().optional(),
  tus_data: z.unknown().nullable().optional(),
  uploaded_on: z.string().datetime(),
});
/* -------------------------------------------------------------------------- */

/* ----------------------------- AUTHORS SCHEMA ----------------------------- */
export const DirectusAuthorSchema = z.object({
  id: z.number(),
  status: z.string(),
  name: z.string(),
  email: z.string(),
  bio: z.string(),
  avatar: z.union([z.string(), DirectusFileSchema]),
  social_links: z.object({
    facebook: z.string(),
    instagram: z.string(),
  }),
  slug: z.string(),
}); 

export const DirectusAuthorsSlugSchema = z.array(
  DirectusAuthorSchema.pick({
    slug: true,
  }),
);

export const DirectusAuthorsSchema = z.array(DirectusAuthorSchema);
/* -------------------------------------------------------------------------- */

/* -------------- GALLERIES COLLECTION SCHEMA (WITH RELATIONS) -------------- */
export const DirectusGalleriesCollectionSchema = DirectusBaseSchema.extend({
  user_created: z.string(),
  date_created: z.string().datetime(),
  date_updated: z.string().datetime().nullable().optional(),
  user_updated: z.string().nullable().optional(),
  excerpt: z.string().optional(),
  gallery: z.array(z.number()).optional(),
  gallery_category: DirectusCategorySchema,
  gallery_tag: DirectusCategorySchema,
  author: DirectusAuthorSchema,
});

export const DirectusGalleriesCollectionArraySchema = z.array(DirectusGalleriesCollectionSchema);

export const DirectusGalleriesCollectionResponseSchema = z.object({
  data: DirectusGalleriesCollectionArraySchema,
});

export const DirectusGalleriesCategoryArraySchema = z.array(DirectusCategorySchema);

export const DirectusGalleriesCategoryResponseSchema = z.object({
  data: DirectusGalleriesCategoryArraySchema,
});
/* -------------------------------------------------------------------------- */

/* --------------- ARTICLES COLLECTION SCHEMA (WITH RELATIONS) -------------- */
export const DirectusArticlesCollectionSchema = DirectusBaseSchema.extend({
  user_created: z.string(),
  date_created: z.string().datetime(),
  date_updated: z.string().datetime().nullable().optional(),
  user_updated: z.string().nullable().optional(),
  excerpt: z.string().optional(),
  markdown: z.boolean().optional(),
  markdown_disabled: z.string().nullable().optional(),
  markdown_enabled: z.string().nullable().optional(),
  video_cover: z.string().nullable().optional(),
  video_enabled: z.boolean().optional(),
  gallery_enabled: z.boolean().optional(),
  gallery_slug: z.string().nullable().optional(),
  banner_description: z.string().nullable().optional(),
  banner_image: z.string().nullable().optional(),
  article_category: DirectusCategorySchema,
  article_tags: DirectusCategorySchema,
  author: DirectusAuthorSchema,
});

export const DirectusArticlesCollectionArraySchema = z.array(DirectusArticlesCollectionSchema);

export const DirectusArticlesCollectionResponseSchema = z.object({
  data: DirectusArticlesCollectionArraySchema,
});

export const DirectusArticlesCategoryArraySchema = z.array(DirectusCategorySchema);

export const DirectusArticlesCategoryResponseSchema = z.object({
  data: DirectusArticlesCategoryArraySchema,
});
/* -------------------------------------------------------------------------- */

/* ------------------------ DIRECTUS PAGE INDEX SCHEMA --------------------- */
export const DirectusPageIndexSchema = z.object({
  id: z.number(),
  status: z.enum(["draft", "published", "archived"]).optional(),
  date_created: z.string().datetime(),
  date_updated: z.string().datetime().nullable().optional(),
  title: z.string(),
  epigraph: z.string().nullable().optional(),
  subtitle: z.string().nullable().optional(),
  excerpt: z.string().nullable().optional(),
  slug: z.string(),
  cover_image: DirectusFileSchema.nullable().optional(),
  impact_title: z.string().nullable().optional(),
  impact_excerpt: z.string().nullable().optional(),
  impact_slug: z.string().nullable().optional(),
  impact_category: DirectusCategorySchema.nullable().optional(),
  impact_tag: DirectusCategorySchema.nullable().optional(),
  background_title: z.string().nullable().optional(),
  background_slug: z.string().nullable().optional(),
  background_date: z.string(),
  background_category: DirectusCategorySchema.nullable().optional(),
  background_tag: DirectusCategorySchema.nullable().optional(),
  background_author: DirectusAuthorSchema.nullable().optional(),
  izq_title: z.string().nullable().optional(),
  izq_slug: z.string().nullable().optional(),
  izq_category: DirectusCategorySchema.nullable().optional(),
  izq_tag: DirectusCategorySchema.nullable().optional(),
  izq_image: DirectusFileSchema.nullable().optional(),
  cen_title: z.string().nullable().optional(),
  cen_slug: z.string().nullable().optional(),
  cen_category: DirectusCategorySchema.nullable().optional(),
  cen_tag: DirectusCategorySchema.nullable().optional(),
  cen_image: DirectusFileSchema.nullable().optional(),
  der_title: z.string().nullable().optional(),
  der_slug: z.string().nullable().optional(),
  der_category: DirectusCategorySchema.nullable().optional(),
  der_tag: DirectusCategorySchema.nullable().optional(),
  der_image: DirectusFileSchema.nullable().optional(),
  holder_category: DirectusCategorySchema.nullable().optional(),
  holder_tag: DirectusCategorySchema.nullable().optional(),
});

export const DirectusPageIndexResponseSchema = z.object({
  data: DirectusPageIndexSchema,
});

/* -------------------------------------------------------------------------- */

/* ------------------------ DIRECTUS CONTACT SCHEMA ------------------------ */
const DirectusMarkerSchema = z.object({
  label: z.string(),
  default_label: z.string(),
  lat: z.number(),
  lng: z.number(),
});

const DirectusLocationSchema = z.object({
  lat: z.number(),
  lng: z.number(),
  zoom: z.number(),
  markers: z.array(DirectusMarkerSchema),
});

export const DirectusContactPageSchema = DirectusBaseSchema.extend({
  location: z.object({
    location: DirectusLocationSchema,
  }).nullable().optional(),
});

export const DirectusContactPageArraySchema = z.array(DirectusContactPageSchema);

export const DirectusContactPageResponseSchema = z.object({
  data: DirectusContactPageArraySchema,
});
/* -------------------------------------------------------------------------- */

/* ------------------------ DIRECTUS HOT NEWS SCHEMA ------------------------ */
export const DirectusHotNewsSchema = z.object({
  id: z.number(),
  status: z.enum(["draft", "published", "archived"]).optional(),
  date_created: z.string().datetime().optional(),
  date_updated: z.string().datetime().nullable().optional(),
  title: z.string(), 
  subtitle: z.string().optional(),
  article_url: z.string().optional(),
  icon: z.string().optional(),
});

export const DirectusHotNewsArraySchema = z.array(DirectusHotNewsSchema);

export const DirectusHotNewsResponseSchema = z.object({
  data: DirectusHotNewsArraySchema,
});
/* -------------------------------------------------------------------------- */

export type Post = z.infer<typeof DirectusArticlesCollectionSchema>;
export type Galeria = z.infer<typeof GaleriaSchema>;
export type Gallery = z.infer<typeof gallerySchema>;
export type FeatureImages = z.infer<typeof featureImagesSchema>;
export type Location = z.infer<typeof DirectusLocationSchema>;
