import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const career = defineCollection({
    loader: file('src/data/career.yaml'),
    schema: z.object({
        id: z.string(),
        company: z.string(),
        role: z.string(),
        start: z.string(),
        end: z.string(),
        location: z.string(),
        description: z.string(),
    }),
});

const links = defineCollection({
    loader: file('src/data/links.yaml'),
    schema: z.object({
        id: z.string(),
        name: z.string(),
        url: z.string(),
        colour: z.string(),
    }),
});

export const collections = { career, links };
