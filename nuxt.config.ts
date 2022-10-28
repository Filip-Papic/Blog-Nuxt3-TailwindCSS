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
    "nuxt-icon",
    "@nuxtjs/color-mode",
  ],
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
    API_KEY: ''
  }
});
