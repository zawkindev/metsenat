<template>
  <div class="flex items-center gap-4">
    <button
      v-for="item in options"
      :key="item"
      class="py-1 px-3 rounded-md border-2 duration-200"
      :class="{
        'bg-blue-500 border-blue-500 text-white': item === activePage,
        'hover:border-blue-400': item !== '...',
      }"
      @click="emit('selectPage', item)"
      :disabled="item === '...'"
    >
      <span>{{ item }}</span>
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  activePage: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["selectPage"]);

console.log("options: ", props.options);
</script>
