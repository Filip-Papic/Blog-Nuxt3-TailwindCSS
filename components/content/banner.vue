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
    <header>
      <div class="relative overflow-hidden h-[60vw] md:h-[20vw] rounded-lg shadow-xl block mb-10">
        <img
          :src="`/images/${image}`"
          alt="image"
          class="object-cover h-full w-full inline-block"
        />
      </div>
      <h1 class="text-uocgold dark:text-softliliac">{{ title }}</h1>
      <p class="text-center pt-6">{{ author }}</p>
      <p class="text-center text-sm pb-6 pt-0">{{ convertDate(date) }}</p>
    </header>
    <ContentSlot :use="$slots.default" />
  </div>
</template>
