// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/tailwind.css", // Ensuring Tailwind CSS is loaded
    "~/assets/css/main.css",
  ],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/test-utils/module"],
  tailwindcss: {
    configPath: "tailwind.config.js",
    exposeConfig: { alias: "#tailwind-config", level: 2 },
    config: {},
    viewer: true,
  },
});
