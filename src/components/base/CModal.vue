<template>
  <div class="absolute z-10 w-screen h-screen flex items-center justify-center">
    <div class="w-[640px] p-10">
      <div class="flex justify-between items-center">
        <p class="text-xl font-bold capitalize">{{ name }}</p>
        <img @click="emit('close')" src="icon/close.svg" />
      </div>
      <slot> </slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["name"]);
const emit = defineEmits(["close"]);
</script>
