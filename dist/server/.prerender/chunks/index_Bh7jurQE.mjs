import { z } from 'zod';

const DirectusBaseSchema = z.object({
  id: z.number(),
  title: z.string(),
  subtitle: z.string().optional(),
  slug: z.string(),
  content: z.string().nullable().optional(),
  cover_image: z.string(),
  seo_title: z.string().optional(),
  seo_description: z.string().nullable().optional(),
  status: z.enum(["draft", "published", "archived"]).optional()
});
const DirectusGalleriesPageArraySchema = z.array(DirectusBaseSchema);
const DirectusGalleriesPageResponseSchema = z.object({
  data: DirectusGalleriesPageArraySchema
});
const DirectusBlogPageArraySchema = z.array(DirectusBaseSchema);
const DirectusBlogPageResponseSchema = z.object({
  data: DirectusBlogPageArraySchema
});
const DirectusGalleryJunctionSchema = z.object({
  id: z.number(),
  galleries_id: z.number(),
  directus_files_id: z.string()
});
const DirectusGalleriesSchema = DirectusBaseSchema.extend({
  user_created: z.string(),
  date_created: z.string().datetime(),
  date_updated: z.string().datetime().nullable().optional(),
  user_updated: z.string().nullable().optional(),
  excerpt: z.string().optional(),
  author: z.number(),
  gallery_category: z.number(),
  gallery_tag: z.number(),
  gallery: z.array(DirectusGalleryJunctionSchema).optional()
});
z.object({
  directus_files_id: z.object({
    id: z.string(),
    filename_disk: z.string(),
    filename_download: z.string(),
    title: z.string(),
    width: z.number().nullable(),
    height: z.number().nullable(),
    description: z.string().nullable()
  })
});
const DirectusGalleriesArraySchema = z.array(DirectusGalleriesSchema);
z.object({
  data: DirectusGalleriesArraySchema
});
const DirectusCategorySchema = z.object({
  id: z.number(),
  status: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable()
});
const DirectusCategoriesSlugSchema = z.array(
  DirectusCategorySchema.pick({
    slug: true
  })
);
z.array(DirectusCategorySchema);
const DirectusFileSchema = z.object({
  id: z.string(),
  storage: z.string(),
  filename_disk: z.string(),
  filename_download: z.string(),
  title: z.string().nullable().optional(),
  type: z.string(),
  created_on: z.string(),
  modified_on: z.string(),
  charset: z.string().nullable().optional(),
  filesize: z.union([z.string(), z.number()]),
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
  uploaded_on: z.string()
});
const DirectusGalleryJunctionWithFileSchema = z.object({
  directus_files_id: z.object({
    id: z.string(),
    filename_disk: z.string(),
    filename_download: z.string(),
    title: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    type: z.string(),
    filesize: z.number(),
    width: z.number().nullable().optional(),
    height: z.number().nullable().optional()
  }).passthrough()
});
const DirectusAuthorSchema = z.object({
  id: z.number(),
  status: z.string(),
  name: z.string(),
  email: z.string(),
  bio: z.string(),
  avatar: z.union([z.string(), DirectusFileSchema]),
  social_links: z.object({
    facebook: z.string(),
    instagram: z.string()
  }),
  slug: z.string()
});
const DirectusAuthorsSlugSchema = z.array(
  DirectusAuthorSchema.pick({
    slug: true
  })
);
const DirectusAuthorsSchema = z.array(DirectusAuthorSchema);
const DirectusGalleriesCollectionSchema = DirectusBaseSchema.extend({
  user_created: z.string(),
  date_created: z.string().datetime(),
  date_updated: z.string().datetime().nullable().optional(),
  user_updated: z.string().nullable().optional(),
  excerpt: z.string().optional(),
  gallery: z.array(DirectusGalleryJunctionWithFileSchema).optional(),
  gallery_category: DirectusCategorySchema,
  gallery_tag: DirectusCategorySchema,
  author: DirectusAuthorSchema
});
const DirectusGalleriesCollectionArraySchema = z.array(DirectusGalleriesCollectionSchema);
const DirectusGalleriesCollectionResponseSchema = z.object({
  data: DirectusGalleriesCollectionArraySchema
});
const DirectusGalleriesCategoryArraySchema = z.array(DirectusCategorySchema);
const DirectusGalleriesCategoryResponseSchema = z.object({
  data: DirectusGalleriesCategoryArraySchema
});
const DirectusArticlesCollectionSchema = DirectusBaseSchema.extend({
  user_created: z.string(),
  date_created: z.string().datetime(),
  date_updated: z.string().datetime().nullable().optional(),
  user_updated: z.string().nullable().optional(),
  excerpt: z.string().optional(),
  cover_audio: z.string().nullable().optional(),
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
  author: DirectusAuthorSchema
});
const DirectusArticlesCollectionArraySchema = z.array(DirectusArticlesCollectionSchema);
const DirectusArticlesCollectionResponseSchema = z.object({
  data: DirectusArticlesCollectionArraySchema
});
const DirectusArticlesCategoryArraySchema = z.array(DirectusCategorySchema);
const DirectusArticlesCategoryResponseSchema = z.object({
  data: DirectusArticlesCategoryArraySchema
});
const DirectusPageIndexSchema = z.object({
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
  holder_tag: DirectusCategorySchema.nullable().optional()
});
const DirectusPageIndexResponseSchema = z.object({
  data: DirectusPageIndexSchema
});
const DirectusMarkerSchema = z.object({
  label: z.string(),
  default_label: z.string(),
  lat: z.number(),
  lng: z.number()
});
const DirectusLocationSchema = z.object({
  lat: z.number(),
  lng: z.number(),
  zoom: z.number(),
  markers: z.array(DirectusMarkerSchema)
});
const DirectusContactPageSchema = DirectusBaseSchema.extend({
  location: z.object({
    location: DirectusLocationSchema
  }).nullable().optional()
});
const DirectusContactPageArraySchema = z.array(DirectusContactPageSchema);
const DirectusContactPageResponseSchema = z.object({
  data: DirectusContactPageArraySchema
});
const DirectusHotNewsSchema = z.object({
  id: z.number(),
  status: z.enum(["draft", "published", "archived"]).optional(),
  date_created: z.string().datetime().optional(),
  date_updated: z.string().datetime().nullable().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  article_url: z.string().optional(),
  icon: z.string().optional()
});
const DirectusHotNewsArraySchema = z.array(DirectusHotNewsSchema);
const DirectusHotNewsResponseSchema = z.object({
  data: DirectusHotNewsArraySchema
});

export { DirectusAuthorsSchema as D, DirectusAuthorsSlugSchema as a, DirectusAuthorSchema as b, DirectusArticlesCollectionResponseSchema as c, DirectusCategoriesSlugSchema as d, DirectusCategorySchema as e, DirectusBlogPageResponseSchema as f, DirectusArticlesCategoryResponseSchema as g, DirectusContactPageResponseSchema as h, DirectusGalleriesCollectionResponseSchema as i, DirectusGalleriesPageResponseSchema as j, DirectusGalleriesCategoryResponseSchema as k, DirectusHotNewsResponseSchema as l, DirectusPageIndexResponseSchema as m };
