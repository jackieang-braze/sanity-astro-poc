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
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),
  ],
});

