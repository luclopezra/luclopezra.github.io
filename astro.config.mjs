// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    // UPDATE THIS FOR PRODUCTION – This will also be used in the sitemap
    site: "http://localhost:4321",
    integrations: [mdx(), sitemap({
        customPages: [
            "http://localhost:4321", // home page - priority 1.0
            "http://localhost:4321/sl/", // Slovenian home - priority 1.0
        ],
        changefreq: "monthly",
        priority: 0.7,
        lastmod: new Date(),
    }), svelte()],

    vite: {
        plugins: [tailwindcss()],
    },
});