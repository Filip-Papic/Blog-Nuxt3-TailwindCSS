<script setup>
import { convertDate } from "~/utils";
const props = defineProps({ article: Object });
const date = convertDate(props.article.date);
</script>

<template>
  <section class="mb-12">
    <div class="flex flex-col justify-center">
      <div class="flex-inline">
        <small>{{ date }}</small>
        <span class="ml-2">
          <NuxtLink
            v-for="tag in props.article.tags"
            :key="tag"
            :to="`/tag/${tag}`"
            class="font-bold text-blue-500"
          >
            #{{ tag }}
          </NuxtLink>
          <a :to="props.article.source" class="font-bold italic">
            -{{ props.article.source }}
          </a>
        </span>
      </div>
      <NuxtLink :to="props.article._path">
        <h1 class="text-2xl font-bold pt-1 pb-4">
          {{ props.article.title.split(" ").slice(0, 50).join(" ") }}
        </h1>
        <p class="text-lg">{{ props.article.description.slice(0, 200) }}...</p>
      </NuxtLink>
      <a
        :href="article.url"
        target="_blank"
        class="text-blue-500 font-bold mt-1"
        >Read more</a
      >
    </div>
  </section>
</template>

<style scoped></style>
