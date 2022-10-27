<script setup>
const props = defineProps({ article: Object });
const date = new Date(props.article.published_at).toLocaleString();
</script>

<template>
  <section>
    <div
      class="flex flex-col justify-center md:mx-64 my-14 min-w-fit"
    >
      <div>
        <div class="flex-inline">
          <small>{{ date }}</small>
          <span class="ml-2">
            <NuxtLink
              :to="`/tag/${props.article.category}`"
              class="font-bold text-blue-500"
            >
              #{{ props.article.category }}
            </NuxtLink>
            <NuxtLink to="" class="font-bold text-blue-500">
              #{{ props.article.source }}
            </NuxtLink>
          </span>
        </div>
        <NuxtLink :to="`/article/${props.article.title}`">
          <h1 class="text-2xl font-bold pt-1 pb-4">
            {{ props.article.title.split(" ").slice(0, 50).join(" ") }}
          </h1>
          <p class="text-lg">
            {{ props.article.description.slice(0, 200) }}...
          </p>
        </NuxtLink>
        <a :href="article.url" target="_blank" class="text-blue-500 font-bold pt-2"
          >Read more</a
        >
      </div>
    </div>
  </section>
</template>

<style scoped></style>
