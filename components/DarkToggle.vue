<script setup lang="ts">
const color = useColorMode();
function toggleDark() {
  color.preference = color.value === "dark" ? "light" : "dark";
}
</script>

<template>
  <button
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
