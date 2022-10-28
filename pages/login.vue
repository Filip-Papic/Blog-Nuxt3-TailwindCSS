<script lang="ts" setup>
definePageMeta({
  layout: "plain",
});
</script>

<template>
  <div class="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h1
      class="flex flex-col items-center justify-center md:mx-64 my-14 text-5xl"
    >
      Login
    </h1>
    <div class="flex flex-col items-center justify-center md:mx-64">
      <BaseInput placeholder="Email" />
      <BaseInput placeholder="Password" />
      <BaseButton> Login </BaseButton>
    </div>
  </div>
</template>

<style scoped></style>
