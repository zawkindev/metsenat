import { defineStore } from "pinia";
import { ref } from "vue";

export const useStudentStore = defineStore("metsenat", () => {
  const student = ref();
  const studentsList = ref([]);
  const studentsCurrentPage = ref(1);
  const pageSize = ref(10);
  const types = [
    { id: 1, value: "Bakalavr" },
    { id: 2, value: "Magistr" },
    { id: 3, value: "Doktorantura" },
  ];

  return {
    student,
    studentsList,
    studentsCurrentPage,
    pageSize,
    types,
  };
});
