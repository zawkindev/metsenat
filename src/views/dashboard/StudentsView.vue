<template>
  <h1>Students</h1>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useFetch } from "@/composables/useFetch";
import { useMetsenatStore } from "@/store/store";

const { get } = useFetch();
const store = useMetsenatStore();

const pageSize = ref(10);

const fetchData = async (page) => {
  if (store.studentsList.length === 0 || store.studentsCurrentPage !== page) {
    try {
      store.studentsCurrentPage = page;
      const response = await get("student-list", {
        page: page,
        pageSize: pageSize.value,
      });
      store.studentsList = response;

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
};

onBeforeMount(() => {
  fetchData(store.studentsCurrentPage);
});
</script>
