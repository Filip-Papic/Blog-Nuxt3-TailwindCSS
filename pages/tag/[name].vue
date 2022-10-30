<script setup>
const route = useRoute();

const { result, search } = useAlgoliaSearch("blog");
const facetHits = ref([]);

onMounted(async () => {
  await search({
    requestOptions: { filters: `tags:${route.params.name}` },
  });
  facetHits.value = result.value.hits;
});
</script>

<template>
  <div>
    <ArticleCard
      v-for="article in facetHits"
      :key="article.objectID"
      :article="article"
    />
  </div>
</template>
