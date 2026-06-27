import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file, glob } from 'astro/loaders';

const career = defineCollection({
    loader: glob({ base: 'src/data/career', pattern: '**/*.md' }),
    schema: z.object({
        position: z.number(),
        company: z.string(),
        role: z.string(),
        start: z.string(),
        end: z.string(),
        location: z.string(),
    }),
});

const links = defineCollection({
    loader: file('src/data/links.yaml'),
    schema: z.object({
        id: z.string(),
        name: z.string(),
        url: z.string(),
        colour: z.enum(['foreground', 'accent']),
    }),
});

export const collections = { career, links };
