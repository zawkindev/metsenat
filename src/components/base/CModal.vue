<template>
  <div
    class="absolute left-0 top-0 z-10 w-screen min-h-screen flex items-center justify-center bg-black bg-opacity-40 overflow-scroll"
  >
    <div class="w-11/12 sm:w-[640px] p-4 sm:p-10 bg-white rounded-lg">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl sm:text-3xl font-bold capitalize">{{ name }}</h3>
        <img
          class="cursor-pointer h-auto w-5 sm:w-6"
          @click="emit('close')"
          src="@/assets/images/icons/close.svg"
        />
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps(["name"]);
const emit = defineEmits(["close"]);
</script>
