<script setup>
const blogPosts = await useAsyncData("blog", () =>
  queryContent("/blog").sort({ date: -1 }).where({ _partial: false }).find()
);
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <ArticleCard :article="article" />
      </div>
    </ContentList>
  </div>
</template>
