// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@nuxtjs/algolia",
    "nuxt-icon",
    "@nuxtjs/color-mode",
  ],
  algolia: {
    apiKey: process.env.ALGOLIA_API_KEY,
    applicationId: process.env.ALGOLIA_APP_ID,
  },
  imports: {
    dirs: ["stores"],
  },
  build: {
    transpile: ["@headlessui/vue"],
  },
  colorMode: {
    classSuffix: "",
  },
  publicRuntimeConfig: {
    API_KEY: "",
  },
});
