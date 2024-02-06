<template>
  <div class="flex items-center justify-between">
    <div>
      {{ totalCards }} tadan
      {{ (currentPage-1) * 10 }}-{{
        currentPage * 10 < totalCards 
          ? currentPage * 10
          : totalCards
      }}
      ko'rsatilmoqda
    </div>
    <div class="flex items-center gap-4">
      <button
        v-for="item in generatePaginationData(
          currentPage,
          totalCards,
          cardsPerPage,
        )"
        :key="item"
        class="py-1 px-3 rounded-md border-2 duration-200"
        :class="{
          'bg-blue-500 border-blue-500 text-white': item === currentPage,
          'hover:border-blue-400': item !== '...',
        }"
        @click="emit('selectPage', item)"
        :disabled="item === '...'"
      >
        <span>{{ item }}</span>
      </button>
    </div>
  </div>
</template>
<script setup>
import { generatePaginationData } from "@/utils/index";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalCards: {
    type: Number,
    required: true,
  },
  cardsPerPage: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["selectPage"]);

console.log("options: ", props.options);
</script>
