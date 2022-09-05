import { defineConfig } from 'astro/config'; // import lit from '@astrojs/lit';

import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: "https://astro-minimal-starter.netlify.app/",
  integrations: [sitemap()]
});