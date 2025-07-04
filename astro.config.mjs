// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://julianzanetti.com',
  integrations: [
    preact({
      exclude: ['**/SocialIcons.jsx'], // ⚠️ no usar React acá
    }),
    tailwind(),
    react({
      include: ['**/SocialIcons.jsx'], // ✅ solo usar React ahí
    }),
  ],

  vite: {},
});