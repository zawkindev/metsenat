<template>
  <div
    class="flex flex-col-reverse sm:flex-row  gap-5 items-center justify-between"
  >
    <div>
      {{ totalCards }} tadan {{ (currentPage - 1) * cardsPerPage }}-{{
        currentPage * cardsPerPage < totalCards
          ? currentPage * cardsPerPage
          : totalCards
      }}
      ko'rsatilmoqda
    </div>
    <div class="flex justify-between items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-fit">
      <div class="flex justify-start items-start">
        <CSelect
          :isOpen="cselectStore.pageSize"
          @click="cselectStore.pageSize = !cselectStore.pageSize"
        >
          <template #selectedOption>
            <p class="flex items-center capitalize">
              {{ cardsPerPage }}
            </p>
          </template>
          <template #options>
            <div
              v-for="(item, index) in options"
              :key="item"
              @click="emit('selectPageSize', item)"
              :class="{
                'border-t-2': index !== 0,
                'rounded-t-xl': index === 0,
                'rounded-b-xl': index === options.length - 1,
              }"
              class="py-2 cursor-pointer items-center justify-center flex text-lg hover:bg-gray-100"
            >
              <span>{{ item }}</span>
            </div>
          </template>
        </CSelect>
      </div>
      <div class="flex flex-wrap gap-2 justify-center items-center">
        <button
          v-for="item in paginationData"
          :key="item"
          class="py-1 px-3 rounded-md border-2 duration-200"
          :class="{
            'bg-blue-500 border-blue-500 text-white': item === currentPage,
            'bg-white': item !== currentPage,
            'hover:border-blue-400': item !== '...',
          }"
          @click="emit('selectPage', item)"
          :disabled="item === '...'"
        >
          <span>{{ item }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { generatePaginationData } from "@/utils/index";
import { useCSelectStore } from "@/store/cselect.js";
import CSelect from "@/components/base/CSelect.vue";

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

const emit = defineEmits(["selectPage", "selectPageSize"]);

const cselectStore = useCSelectStore();

const options = [10, 20, 30, 40, 50];

const paginationData = computed(() =>
  generatePaginationData(
    props.currentPage,
    props.totalCards,
    props.cardsPerPage,
  ),
);

console.log("options: ", props.options);
</script>
