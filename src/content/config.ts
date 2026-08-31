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
    images: z.array(z.string()).optional(),
    video: z.string().url().optional(),
  }),
});

const topics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/topics' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    keywords: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { products, topics };
