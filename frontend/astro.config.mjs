import { sanityIntegration } from '@sanity/astro';
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
   build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    sanityIntegration({
      projectId: "n4p67ir2",
      dataset: "production",
      useCdn: false,
      token: import.meta.env.VITE_SANITY_API_READ_TOKEN,
      perspective: "raw",
    }),
  ],
});

