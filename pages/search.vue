<script setup>
const { result, search } = useAlgoliaSearch('blog')
const hits = ref([]);

const fetchSearchResults = async (e) => {
  if (e.target.value.length > 1) {
    await search({
      query: e.target.value,
    })
    hits.value = result.value.hits
  } else {
    hits.value = []
  }
};
</script>

<template>
  <div>
    <h1
      class="flex flex-col items-center justify-center md:mx-64 my-14 text-5xl"
    >
      Search
    </h1>
    <div class="flex justify-center mx-4">
      <BaseInput placeholder="Type your query..." type="search" @input="fetchSearchResults" />
    </div>
    <div v-if="hits.length" class="mt-8">
      <ArticleCard v-for="article in hits" :key="article.objectID" :article="article" @click="hits = []" />
    </div>
    <div v-else>
      <p class="text-center">No results found</p>
    </div>
  </div>
</template>

<style scoped></style>
