<template>
  <div class="flex p-6 pr-32 gap-3 whitespace-nowrap bg-white rounded-lg w-fit">
      <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps(["imgSrc"]);
</script>
