import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    order: z.number(),
    image: z.string().optional(),
  }),
});

export const collections = { products };
