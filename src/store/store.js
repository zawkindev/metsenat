import {defineStore} from "pinia";
import { ref } from "vue";

export const useMetsenatStore = defineStore("metsenat", () => {
  const amount = ref();
  const userAuthorized = ref(false)
  const sponsorsList = ref([])
  const sponsorsCurrentPage = ref(1)

  return { amount, userAuthorized, sponsorsList, sponsorsCurrentPage };
});
