<script setup lang="ts">
const color = useColorMode();
function toggleDark() {
  color.preference = color.value === "dark" ? "light" : "dark";
}
</script>

<template>
  <button
    class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
    @click="toggleDark()"
  >
    <Icon
      v-if="color.value === 'light'"
      name="heroicons-outline:moon"
      class="w-8 h-8"
    />
    <Icon v-else name="heroicons-outline:sun" class="w-8 h-8" />
  </button>
</template>
