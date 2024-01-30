<template>
  <button
    :class="{ 'border-primary-300': isActive }"
    class="relative flex px-9 py-5 gap-1 rounded-md border-2"
  >
    <p class="font-bold text-xl">
      {{ value }}
    </p>
    <span
      v-if="String(value).includes('0') === true"
      class="flex items-end text-sm text-primary-200"
      >UZS</span
    >
    <img
      v-if="isActive === true"
      class="absolute right-[-10px] top-[-10px]"
      src="icons/check.svg"
    />
  </button>
</template>

<script setup>
const props = defineProps(["value", "isActive"]);
</script>
