import { sanityIntegration } from '@sanity/astro';
import { defineConfig } from "astro/config";
import {loadEnv} from 'astro/env';
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
      token: process.env.SANITY_API_READ_TOKEN, 
      perspective: "previewDrafts",
    }),
  ],
});

