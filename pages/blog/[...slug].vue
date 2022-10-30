<script lang="ts" setup>
import { convertDate } from "~/utils";

const route = useRoute();
const article = await useAsyncData("blog", () =>
  queryContent("/blog")
    .where({
      _path: route.params.slug ? route.params.slug : "/", // "/blog/404"
    })
    .findOne()
);
</script>

<template>
  <main class="flex justify-center px-4 -mx-4 md:-mx-20">
    <div class="flex flex-col justify-center">
      <ContentDoc>
        <template v-slot="{ doc }">
          <main>
            <ContentRenderer :value="doc" />
          </main>
        </template>
        <template #not-found>
          <h2>Blog post ({{ $route.params.slug }}) not found</h2>
        </template>
        <template #empty>
          <h2>Blog post ({{ $route.params.slug }}) is empty</h2>
        </template>
      </ContentDoc>
    </div>
  </main>
</template>

<style scoped>
main :deep(h1) {
  @apply text-4xl font-bold text-uocgold dark:text-uclagold text-center;
}
main :deep(h2) {
  @apply text-2xl font-bold pointer-events-none py-4 text-uocgold dark:text-uclagold;
}
main :deep(p) {
  @apply text-xl pt-2;
}
main :deep(a) {
  @apply text-uocgold dark:text-softliliac;
}
main :deep(ul) {
  @apply list-disc list-inside p-10;
}
main :deep(ol) {
  @apply list-decimal list-inside px-10 py-5;
}
main :deep(li) {
  @apply text-xl;
}
main :deep(blockquote) {
  @apply border-l-4 border-uocgold dark:border-softliliac pl-4 my-10 mx-5;
}
main :deep(pre) {
  @apply bg-gray-100 dark:bg-blackolive p-6 md:pl-20 rounded-md my-4 whitespace-pre-wrap break-all text-justify text-eerieblack dark:text-goldenyellow;
}
</style>
