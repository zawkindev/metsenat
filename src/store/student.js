import { defineStore } from "pinia";
import { ref } from "vue";

export const useStudentStore = defineStore("metsenat", () => {
  const student = ref();
  const studentsList = ref([]);
  const studentsCurrentPage = ref(1);
  const pageSize = ref(10);

  return {
    student,
    studentsList,
    studentsCurrentPage,
    pageSize,
  };
});
