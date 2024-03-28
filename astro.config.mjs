import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.millaskytrading.com',
  base: "/",
  integrations: [tailwind(), react(), sitemap()],
  output: 'server',
  adapter: vercel()
});