<template>
  <div class="flex items-center gap-4">
    <button
      v-for="item in options"
      :key="item"
      class="p-2 rounded-md border-2 duration-200"
      @click="emit('selectPage', item)"
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
});

const emit = defineEmits(["selectPage"]);

console.log("options: ", props.options);
</script>
