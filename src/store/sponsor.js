import { defineStore } from "pinia";
import { ref } from "vue";

export const useSponsorStore = defineStore("metsenat", () => {
  const sponsor = ref();
  const sponsorsList = ref([]);
  const sponsorsCurrentPage = ref(1);
  const pageSize = ref(10);
  const amount = ref(null);

  return {
    sponsor,
    sponsorsList,
    sponsorsCurrentPage,
    pageSize,
    amount,
  };
});
