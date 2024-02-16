import { defineStore } from "pinia";
import { ref } from "vue";

export const useCSelectStore = defineStore("cselect", () => {
  const institute = ref(false);
  const studentType = ref(false);
  const pageSize = ref(false);
  const application = ref(false)
  const sum = ref(false)

  return {
    institute,
    studentType,
    pageSize,
    application,
    sum
  };
});
