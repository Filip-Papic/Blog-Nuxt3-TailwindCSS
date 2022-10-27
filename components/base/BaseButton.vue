<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
  icon: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
  },
  size: {
    type: String as PropType<"sm" | "md" | "lg">,
    default: "md",
  },
  theme: {
    type: String as PropType<"bg-current" | "bg-blue" | "bg-red">,
    default: "primary",
  },
  disabled: {
    type: Boolean,
  },
});

const emit = defineEmits(["click"]);
const hasText = computed(() => typeof useSlots().default === "function");
</script>

<template>
  <button
    class="bg-uclagold text-eerieblack hover:bg-uocgold-700 text-white font-bold py-3 px-4 rounded border border-uocgold shadow-lg hover:bg-uocgold"
    @click="loading ? null : emit('click', $event)"
    :disabled="disabled"
  >
    <Icon
      v-if="icon || loading"
      class="text-eerieblack inline-flex justify-center items-center w-5 h-5 mr-2"
      :name="loading ? 'loading' : icon"
      :class="{
        'animate-spin': loading,
      }"
    />
    <span><slot /></span>
  </button>
</template>

<style scoped></style>
