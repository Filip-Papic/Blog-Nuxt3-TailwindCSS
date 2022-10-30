<template>
  <main class="mx-4 md:mx-48">
    <div class="mt-4 text-right">
      <NuxtLink to="/">
        <Icon name="material-symbols:arrow-back" class="w-8 h-8 mx-4" />
      </NuxtLink>
      <DarkToggle />
    </div>
    <slot />
  </main>
</template>
