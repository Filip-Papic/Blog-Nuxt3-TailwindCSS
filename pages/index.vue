<script setup>
const staticArticles = [
  {
    id: 1,
    title: "first-article",
    published_at: "2021-07-01T00:00:00.000Z",
    category: "cat1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga placeat sint repellat ipsum ullam aperiam illo. Alias, quia commodi. Aperiam voluptatibus inventore ab id esse quam minima autem asperiores repellat!",
    url: "https://google.com",
    source: "source1",
  },
  {
    id: 2,
    title: "Title of the second article",
    published_at: "2021-07-02T00:00:00.000Z",
    category: "cat2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga placeat sint repellat ipsum ullam aperiam illo. Alias, quia commodi. Aperiam voluptatibus inventore ab id esse quam minima autem asperiores repellat!",
    url: "https://google.com",
    source: "source1",
  },
  {
    id: 3,
    title: "Title of the third article",
    published_at: "2021-07-03T00:00:00.000Z",
    category: "cat3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga placeat sint repellat ipsum ullam aperiam illo. Alias, quia commodi. Aperiam voluptatibus inventore ab id esse quam minima autem asperiores repellat!",
    url: "https://google.com",
    source: "source1",
  },
];

/* const config = useRuntimeConfig();
const params = {
  access_key: config.API_KEY,
  keywords: "technology",
  categories: "business",
  languages: "en",
  sort: "popularity",
  limit: 1,
};
const { data } = await useFetch(
  "http://api.mediastack.com/v1/news?" +
    "access_key=" +
    params.access_key +
    "&" +
    "keywords=" +
    params.keywords +
    "&" +
    "categories=" +
    params.categories +
    "&" +
    "languages=" +
    params.languages +
    "&" +
    "sort=" +
    params.sort +
    "&" +
    "limit=" +
    params.limit
); */

const blogPosts = await queryContent('/blog')
  .sort({ date: -1 }) // show latest articles first
  .where({ _partial: false }) // exclude the Partial files
  .find();
</script>

<template>
  <div>
    <ul>
    <li v-for="{ _path: slug, title } in blogPosts" :key="slug">
      <NuxtLink :to="slug">{{ title }}</NuxtLink>
    </li>
  </ul>
    <!-- <div v-if="staticArticles !== null">
      <ArticleCard
        v-for="article in staticArticles"
        :key="article.id"
        :article="article"
      />
    </div>
    <div
      v-else
    >
      <h1 
      class="flex flex-col items-center justify-center md:mx-64 my-14 text-5xl">RIP API</h1>
      <ArticleCard
        v-for="article in staticArticles"
        :key="article.id"
        :article="article"
      />
    </div> -->
  </div>
</template>
