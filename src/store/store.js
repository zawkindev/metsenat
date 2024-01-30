import {defineStore} from "pinia";
import { ref } from "vue";

export const useMetsenatStore = defineStore("metsenat", () => {
  const amount = ref();
  const userAuthorized = ref(false)

  return { amount, userAuthorized };
});
