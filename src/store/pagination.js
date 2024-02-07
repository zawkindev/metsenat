import { defineStore } from "pinia";
import { ref } from "vue";

export const usePaginationStore = defineStore("pagination", () => {
  const currentPage = ref(1);
  const totalCards  = ref(null);
  const cardsPerPage = ref(10)

  return {
    currentPage,
    totalCards,
    cardsPerPage
  };
});
