import { defineStore } from "pinia";
import { ref } from "vue";

export const useMetsenatStore = defineStore("metsenat", () => {
  const amount = ref();
  const userAuthorized = ref(false);
  const sponsor = ref();
  const sponsorsList = ref([]);
  const sponsorsCurrentPage = ref(1);
  const student = ref();
  const studentsList = ref([]);
  const studentsCurrentPage = ref(1);

  function getStudent(studentId) {
    return studentsList.value.results.find(
      (el) => el.id.toString() === studentId.toString(),
    );
  }

  return {
    amount,
    userAuthorized,
    sponsorsList,
    sponsorsCurrentPage,
    studentsList,
    studentsCurrentPage,
    getStudent,
  };
});
