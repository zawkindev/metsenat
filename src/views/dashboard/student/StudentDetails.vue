<template>
  <div class="pb-96 background">
    <TitleBar>
      <div class="flex items-center w-full justify-between">
        <p @click="$router.go(-1)" class="text-xl font-bold">
          {{ student?.full_name }}
        </p>
      </div>
    </TitleBar>

    <div
      class="flex flex-col w-11/12 sm:w-9/12 md:w-7/12 mx-auto bg-white p-5 sm:p-10 mt-14 gap-4 sm:gap-8 rounded-lg"
    >
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-2xl sm:text-3xl">Talaba haqida</h3>
        <CButton @click="open(editModal)" variant="outline">
          <img src="@/assets/images/icons/edit.svg" alt="edit icon" />
          <p class="hidden sm:block text-xl">tahrirlash</p>
        </CButton>
      </div>
      <Chr> asosiy ma'lumotlar</Chr>
      <div class="flex items-center gap-4 sm:gap-6">
        <div class="h-auto w-14 sm:w-28 p-3 sm:p-6 rounded-xl bg-gray-200">
          <img
            class="w-full h-full"
            alt="profile icon"
            src="@/assets/images/icons/user2.svg"
          />
        </div>
        <p
          class="text-xl sm:text-2xl h-fit font-bold box-border max-w-72 break-words"
        >
          {{ student?.full_name }}
        </p>
      </div>
      <p class="text-gray-400 uppercase font-bold text-sm">telefon raqam</p>
      <p>{{ student?.phone }}</p>
      <Chr> o'qish joyi</Chr>
      <div class="flex flex-row flex-wrap justify-start gap-10 font-bold">
        <div class="flex flex-col gap-5">
          <div>
            <p class="text-gray-400 uppercase font-bold text-sm">otm</p>
            <p>{{ student?.institute.name }}</p>
          </div>
          <div>
            <p class="text-gray-400 uppercase font-bold text-sm">
              ajratilgan summa
            </p>
            <p>{{ formatMoney(student?.given) }} UZS</p>
          </div>
        </div>
        <div class="flex flex-col gap-5">
          <div>
            <p class="text-gray-400 uppercase font-bold text-sm">otm</p>
            <p>{{ defineStudentType(student?.type) }}</p>
          </div>
          <div>
            <p class="text-gray-400 uppercase font-bold text-sm">
              kontrakt miqdori
            </p>
            <p>{{ formatMoney(student?.contract) }} UZS</p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col w-11/12 sm:w-9/12 md:w-7/12 mx-auto bg-white p-5 sm:p-10 mt-14 gap-8 rounded-lg"
    >
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-lg sm:text-3xl">Talabaga homiylar</h3>
        <CButton variant="outline">
          <img src="@/assets/images/icons/plus.svg" alt="edit icon" />
          <p class="hidden sm:block text-xl">homiy qo'shish</p>
        </CButton>
      </div>
    </div>
  </div>
  <EditModal
    v-if="editModal.isOpen"
    @close="close(editModal)"
    variant="student"
  />
</template>

<script setup>
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useFetch } from "@/composables/useFetch.js";
import { useStudentStore } from "@/store/student.js";
import { useModalStore } from "@/store/modal";
import { defineStudentType } from "@/helpers/helpers.js";
import { formatMoney } from "@/utils/index.js";
import CButton from "@/components/base/CButton.vue";
import Chr from "@/components/base/Chr.vue";
import TitleBar from "@/components/layout/TitleBar.vue";
import EditModal from "@/modals/EditModal.vue";

const route = useRoute();

const store = useStudentStore();

const student = computed(() => store.student);

const { get } = useFetch();

const { editModal, close, open } = useModalStore();

const fetchData = async () => {
  try {
    const response = await get(`student-detail/${route.params.id}`);
    store.student = response;

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  fetchData();
});
</script>

<style>
.background {
  background-image: url("@/assets/images/background.svg");
  background-repeat: no-repeat;
  background-position: center bottom;
}
</style>
