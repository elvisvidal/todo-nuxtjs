// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

const defaultTitle = "Todo App";
const defaultDescription = "Simple Todo App";

export default defineNuxtConfig({
  app: {
    head: {
      title: defaultTitle,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: defaultDescription,
        },
      ],
    },
  },
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
