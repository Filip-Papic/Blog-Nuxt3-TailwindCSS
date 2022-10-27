<template>
  <main class="mx-4 md:mx-48">
    <Header />
    <NuxtPage />
  </main>
</template>

<style>
html.dark {
  @apply text-goldenyellow bg-eerieblack transition-colors duration-500 ease-in-out;
}
html.light {
  @apply text-eerieblack bg-softliliac transition-colors duration-500 ease-in-out;
}
</style>
