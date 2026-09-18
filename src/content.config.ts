import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/index.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			category: z.enum(['dane', 'geek', 'ai']),
			date: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.string()).default([]),
			cover: image().optional(),
			draft: z.boolean().default(false),
			featured: z.boolean().default(false),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			tags: z.array(z.string()).default([]),
			technologies: z.array(z.string()).default([]),
			featured: z.boolean().default(false),
			featuredOrder: z.number().int().positive().default(100),
			cover: image().optional(),
			githubUrl: z.string().url().optional().or(z.literal('')),
			demoUrl: z.string().url().optional().or(z.literal('')),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog, projects };
