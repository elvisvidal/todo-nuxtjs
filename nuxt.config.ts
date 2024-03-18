// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

const defaultTitle = "Todo App";
const defaultDescription = "Simple Todo App";
const sw = process.env.SW === "true";

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
        {
          hid: "theme-color",
          name: "theme-color",
          content: "#000000",
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: [
    "~/assets/css/tailwind.css", // Ensuring Tailwind CSS is loaded
    "~/assets/css/main.css",
  ],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/test-utils/module", "@vite-pwa/nuxt"],
  tailwindcss: {
    configPath: "tailwind.config.js",
    exposeConfig: { alias: "#tailwind-config", level: 2 },
    config: {},
    viewer: true,
  },
  pwa: {
    strategies: sw ? "injectManifest" : "generateSW",
    srcDir: sw ? "service-worker" : undefined,
    filename: sw ? "sw.ts" : undefined,
    registerType: "autoUpdate",
    manifest: {
      name: "Todo App",
      short_name: "Todo",
      description: "Simple Todo App",
      theme_color: "#000000",
      icons: [
        {
          src: "icons/icon-1024.png",
          sizes: "1024x1024",
          type: "image/png",
        },
        {
          src: "icons/icon-512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "icons/icon-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
      screenshots: [
        {
          src: "icons/screenshot.png",
          sizes: "744x1332",
          type: "image/png",
        },
        {
          src: "icons/screenshot-wide.png",
          sizes: "3570x1854",
          type: "image/png",
          platform: "wide",
          form_factor: "wide",
        },
      ],
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    injectManifest: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: "/",
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
  },
});
