<template>
  <div
    class="absolute left-0 top-0 z-10 w-screen min-h-screen flex items-center justify-center bg-black bg-opacity-50 overflow-scroll"
  >
    <div class="w-[640px] p-10 bg-white rounded-lg">
      <div class="flex justify-between items-center">
        <p class="text-xl font-bold capitalize">{{ name }}</p>
        <img class="cursor-pointer h-7 w-7" @click="emit('close')" src="@/assets/images/icons/close.svg" />
      </div>
      <slot> </slot>
    </div>
  </div>
</template>

<script setup>
defineProps(["name"]);
const emit = defineEmits(["close"]);
</script>
