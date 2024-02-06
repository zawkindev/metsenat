import { defineStore } from "pinia";
import { ref } from "vue";

export const useSponsorStore = defineStore("metsenat", () => {
  const sponsor = ref();
  const sponsorsList = ref([]);
  const sponsorsCurrentPage = ref(1);

  return {
    sponsor,
    sponsorsList,
    sponsorsCurrentPage,
  };
});
