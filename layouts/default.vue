<template>
  <div class="flex flex-col w-[90vw] md:w-[76vw] mx-4 md:mx-[12vw] justify-between h-screen">
    <Header class="" />
    <main class="mx-4 md:mx-[15vw] mb-auto">
      <slot></slot>
    </main>
    <Footer class=""/>
  </div>
</template>
