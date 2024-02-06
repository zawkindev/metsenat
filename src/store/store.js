import { defineStore } from "pinia";
import { ref } from "vue";

export const useMetsenatStore = defineStore("metsenat", () => {
  const amount = ref();

  const selectedDropdownOption = ref();

  const instituteList = ref([]);
  const isSelectOpen = ref(false);

  return {
    amount,
    instituteList,
    isSelectOpen,
    selectedDropdownOption,
  };
});
