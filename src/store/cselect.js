import { defineStore } from "pinia";
import { ref } from "vue";

export const useCSelectStore = defineStore("cselect", () => {
  const institute = ref(false);
  const studentType = ref(false);
  const pageSize = ref(false);

  return {
    institute,
    studentType,
    pageSize,
  };
});
