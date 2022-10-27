<script lang="ts" setup>
import { TransitionRoot, Switch } from "@headlessui/vue";
const showMenu = ref<boolean>(false);
</script>

<template>
  <div class="relative">
    <nav class="my-6 flex justify-between">
      <ul class="hidden md:flex justify-center items-center">
        <li
          class="p-2 md:block cursor-pointer relative after:content-[''] after:absolute after:top-11 after:left-0 after:w-full after:h-1 after:opacity-0 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-center after:bg-current hover:after:opacity-100 hover:after:scale-x-100 font-bold"
        >
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li
          class="p-2 md:block cursor-pointer relative after:content-[''] after:absolute after:top-11 after:left-0 after:w-full after:h-1 after:opacity-0 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-center after:bg-current hover:after:opacity-100 hover:after:scale-x-100 font-bold"
        >
          <NuxtLink to="/">About</NuxtLink>
        </li>
        <li
          class="p-2 md:block cursor-pointer relative after:content-[''] after:absolute after:top-11 after:left-0 after:w-full after:h-1 after:opacity-0 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-center after:bg-current hover:after:opacity-100 hover:after:scale-x-100 font-bold"
        >
          <NuxtLink to="/">Contact</NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/" class="inline-flex items-center">
        <Icon
          name="tabler:brand-blogger"
          class="w-16 h-12 hover:text-uocgold cursor-pointer"
        />
      </NuxtLink>
      <ul class="flex justify-center items-center">
        <li class="p-2 md:block md:pr-6">
          <DarkToggle class="hover:animate-spin" />
        </li>
        <li
          class="hidden p-2 md:block cursor-pointer relative after:content-[''] after:absolute after:top-11 after:left-0 after:w-full after:h-1 after:opacity-0 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-center after:bg-current hover:after:opacity-100 hover:after:scale-x-100 font-bold"
        >
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
        <li
          class="hidden p-2 md:block cursor-pointer relative after:content-[''] after:absolute after:top-11 after:left-0 after:w-full after:h-1 after:opacity-0 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-center after:bg-current hover:after:opacity-100 hover:after:scale-x-100 font-bold"
        >
          <NuxtLink to="/">Register</NuxtLink>
        </li>
      </ul>
      <div class="md:hidden" @click="showMenu = !showMenu">
        <button
          type="button"
          class="inline-flex items-center p-2 text-sm rounded-lg hover:text-uocgold focus:outline-none focus:ring-2 focus:ring-current"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            :class="{ hidden: showMenu, block: !showMenu }"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            class="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            :class="{ hidden: !showMenu, block: showMenu }"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>
    <hr class="mb-10 md:mx-0 border-current" />
    <!-- mobile menu -->
    <TransitionRoot
      as="div"
      enter="transition ease duration-500 transform"
      enterFrom="opacity-0 -translate-y-12"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease duration-300 transform"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-12"
      :show="showMenu"
    >
      <div
        class="absolute border-x-4 border-b-4 w-full bg-blackolive text-softliliac border-blackolive p-4"
        id="mobile-menu"
      >
        <ul class="md:hidden justify-center items-center mb-10">
          <li
            class="p-4 text-lg focus:hover:active:bg-uocgold focus:hover:active:text-eerieblack focus:hover:active:font-bold cursor-pointer"
          >
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li
            class="p-4 text-lg focus:hover:active:bg-uocgold focus:hover:active:text-eerieblack focus:hover:active:font-bold cursor-pointer"
          >
            <NuxtLink to="/">About</NuxtLink>
          </li>
          <li
            class="p-4 text-lg focus:hover:active:bg-uocgold focus:hover:active:text-eerieblack focus:hover:active:font-bold cursor-pointer"
          >
            <NuxtLink to="/">Contact</NuxtLink>
          </li>
          <hr class="my-10" />
          <li
            class="p-4 text-lg focus:hover:active:bg-uocgold focus:hover:active:text-eerieblack focus:hover:active:font-bold cursor-pointer"
          >
            <NuxtLink to="/login">Login</NuxtLink>
          </li>
          <li
            class="p-4 text-lg focus:hover:active:bg-uocgold focus:hover:active:text-eerieblack focus:hover:active:font-bold cursor-pointer"
          >
            <NuxtLink to="/">Register</NuxtLink>
          </li>
        </ul>
      </div>
    </TransitionRoot>
  </div>
</template>
