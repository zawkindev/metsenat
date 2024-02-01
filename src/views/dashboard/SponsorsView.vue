<template>
  <CTable :data="store.sponsorsList" :columns="columns"  />
</template>

<script setup>
import { useFetch } from "@/composables/useFetch";
import { onBeforeMount, ref } from "vue";
import { useMetsenatStore } from "@/store/store";
import CTable from "../../components/base/CTable.vue";

const { get } = useFetch();
const store = useMetsenatStore();

const pageSize = ref(10);

console.log(store.sponsorsList);

const fetchData = async (page) => {
  if (store.sponsorsList.length === 0 || store.sponsorsCurrentPage !== page) {
    try {
      store.sponsorsCurrentPage = page;
      const response = await get("sponsor-list", {
        page: page,
        pageSize: pageSize.value,
      });
      store.sponsorsList = response;

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
};

const columns = ref([
  { label: "f.i.sh.", width: "34%" },
  { label: "Tel.Raqami", width: "16%" },
  { label: "Homiylik summasi", width: "10%" },
  { label: "Sarflangan summa", width: "15%" },
  { label: "Sana", width: "8%" },
  { label: "Holati", width: "15%" },
  { label: "Amallar", width: "8%" },
]);

const dataKeys = ref([
  { label: "full_name", width: "34%" },
  { label: "phone", width: "16%" },
  { label: "sum", width: "10%" },
  { label: "spent", width: "15%" },
  { label: "created_at", width: "15%" },
  { label: "get_status_display", width: "8%" },
  { label: "action", width: "8%" },
]);

onBeforeMount(() => {
  fetchData(store.sponsorsCurrentPage);
});
</script>
