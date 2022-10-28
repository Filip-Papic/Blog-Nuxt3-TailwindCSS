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
</script>

<template>
  <main>
    <ContentDoc
      class=""
      :path="
        $route.params.slug ? `/blog/${$route.params.slug[0]}` : '/' //'/blog/404'
      "
    >
      <template #not-found>
        <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
      </template>
    </ContentDoc>
  </main>
</template>

<style scoped></style>
