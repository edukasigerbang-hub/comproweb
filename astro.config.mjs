import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production SEO target. Preview deployments on *.workers.dev remain functional
// but canonical/sitemap/OG identity always points here.
export default defineConfig({
  site: 'https://gerbangciptasarana.co.id',
  redirects: {
    // /experience removed from public site per client request (Phase 7.1).
    '/experience': '/about',
  },
  integrations: [
    sitemap({
      // Exclude internal development routes and error pages from the public sitemap.
      filter: (page) => !page.includes('/design-system') && !page.includes('/500') && !page.includes('/404'),
    }),
  ],
});