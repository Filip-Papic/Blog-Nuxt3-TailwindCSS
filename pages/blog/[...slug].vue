<script lang="ts" setup>
/* const route = useRoute();
const title = route.params.slug;
useHead({
  title: title.toString(),
  meta: [
    { name: "description", content: "article.description" },
    { property: "og:description", content: "article.description" },
    { property: "og:title", content: title.toString() },
    { property: "og:type", content: "article" },
    { property: "og:url", content: "article.url" },
    { property: "og:image", content: "article.image" },
    { property: "og:site_name", content: "Blog" },
    { property: "og:locale", content: "en_US" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:site", content: "@blog" },
    { property: "twitter:creator", content: "@blog" },
    { property: "twitter:title", content: title.toString() },
    { property: "twitter:description", content: "article.description" },
    { property: "twitter:image", content: "article.image" },
  ],
}); */
import { convertDate } from "~/utils";

const route = useRoute();
const article = await useAsyncData("blog", () =>
  queryContent("/blog").where({ _path: route.params.slug }).findOne()
);
</script>

<template>
  <div>
    <main class="flex justify-start w-full px-4 md:px-52">
      <div class="flex flex-col justify-center md:mx-10 my-4 min-w-fit">
        <ContentDoc
          :path="
            $route.params.slug ? `/blog/${$route.params.slug[0]}` : '/' //'/blog/404'
          "
        >
          <template v-slot="{ doc }">
            <!-- <header v-if="doc">
              <h1 class="text-uocgold dark:text-uclagold"
              >{{ doc.title }}</h1>
              <p class="text-center pt-6"
              >{{ doc.author }}</p>
              <p class="text-center text-sm pb-6 pt-0"
              >{{ convertDate(doc.date) }}</p>
            </header> -->
            <main>
              <ContentRenderer :value="doc" />
            </main>
          </template>
          <template #not-found>
            <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
          </template>
          <template #empty>
            <h2>Blog slug ({{ $route.params.slug }}) is empty</h2>
          </template>
        </ContentDoc>
      </div>
    </main>
  </div>
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
  @apply bg-gray-100 dark:bg-gray-800 p-4 rounded-md;
}
</style>
