import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production SEO target. Preview deployments on *.workers.dev remain functional
// but canonical/sitemap/OG identity always points here.
export default defineConfig({
  site: 'https://gerbangciptasarana.co.id',
  integrations: [
    sitemap({
      // Exclude internal development routes from the public sitemap.
      filter: (page) => !page.includes('/design-system'),
    }),
  ],
});