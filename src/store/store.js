import {defineStore} from "pinia";
import { ref } from "vue";

export const useMetsenatStore = defineStore("metsenat", () => {
  const count = ref(0);
  const amount = ref();

  return { count, amount };
});
