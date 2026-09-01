import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // This site is served from the root of its custom domain. Keeping this as the
  // default prevents asset and page URLs from accidentally being built with the
  // old GitHub repository subpath.
  site: process.env.SITE_URL || 'https://www.pluzytoy.com',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  integrations: [tailwind(), sitemap()],
});
