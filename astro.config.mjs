// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "cz"],
    defaultLocale: "en",
  },
site: 'https://damiska.xyz'
});
