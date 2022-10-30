<script setup>
useHead({
  link: [
    {
      rel: "icon",
      href: "/favicon.ico",
    }
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Blog` : "Blog";
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html.dark {
  @apply text-goldenyellow bg-eerieblack transition-colors duration-500 ease-in-out;
}
html.light {
  @apply text-eerieblack bg-softliliac transition-colors duration-500 ease-in-out;
}
</style>
