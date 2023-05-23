// imports
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://arnavk-09.github.io",
  integrations: [tailwind(), sitemap(), alpinejs()],
});
