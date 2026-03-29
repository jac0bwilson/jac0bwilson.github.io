// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://jacobw.uk',
    image: {
        domains: ['res.cloudinary.com'],
    },

    vite: {
        plugins: [tailwindcss()],
    },
});
