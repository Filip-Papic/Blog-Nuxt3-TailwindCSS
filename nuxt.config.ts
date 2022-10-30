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
    apiKey: "d0fcad8e1aa3e8d65163a66930a1ba34",
    applicationId: "AX2EKZ0EB2",
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
