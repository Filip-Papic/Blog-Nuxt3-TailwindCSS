<script lang="ts" setup>
import { convertDate } from "~/utils";
defineProps<{
  title: string;
  author: string;
  date: string;
  image: string;
}>();
</script>

<template>
  <div>
    <main class="flex justify-start w-full px-4 md:px-52">
      <div class="flex flex-col justify-center md:mx-10 my-4 min-w-fit">
        <header>
          <img :src="image" alt="image" class="w-full h-96 object-cover" />
          <h1 class="text-uocgold dark:text-uclagold">{{ title }}</h1>
          <p class="text-center pt-6">{{ author }}</p>
          <p class="text-center text-sm pb-6 pt-0">{{ convertDate(date) }}</p>
        </header>
        <ContentSlot :use="$slots.default" />
      </div>
    </main>
  </div>
</template>
