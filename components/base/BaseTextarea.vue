<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  error: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <label class="relative">
      <textarea
        class="bg-softliliac text-eerieblack font-bold py-3 px-4 rounded border border-uocgold shadow-lg placeholder:text-gray-600 hover:bg-uocgold hover:placeholder:text-eerieblack hover:disabled:bg-gray-500 hover:disabled:placeholder:text-softliliac resize-none h-full w-full"
        :placeholder="placeholder"
        :class="{
          'border-red border-1 outline-none text-red': error,
          'border-blackolive': disabled,
        }"
        :disabled="disabled"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
      <span
        v-if="error"
        class="absolute pointer-events-none text-red text-3xl right-2"
      >
        <Icon name="material-symbols:error-outline" />
      </span>
    </label>
    <span class="text-red text-sm block ml-4" :class="{ invisible: !error }">
      <slot name="error" />
    </span>
  </div>
</template>

<style scoped></style>
