import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Geist', 'sans-serif'],
                mono: ['Geist Mono', 'monospace'],
            },
        },
    },
    darkMode: 'class',
    plugins: [heroui()],
};
