<script lang="ts" setup>
const title = "Title of the first article";
const id = 1;
</script>

<template>
  <section class="flex flex-col items-center justify-center mx-4 md:mx-72">
    <NuxtLink :to="`/article/${title}`">
      <div>
        <small>27/10/2022</small>
        <h1 class="text-2xl font-bold pt-1 pb-4">
          {{ title }}
        </h1>
        <p class="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga placeat
          sint repellat ipsum ullam aperiam illo. Alias, quia commodi. Aperiam
          voluptatibus inventore ab id esse quam minima autem asperiores
          repellat!
        </p>
      </div>
    </NuxtLink>
  </section>
</template>

<style scoped></style>
