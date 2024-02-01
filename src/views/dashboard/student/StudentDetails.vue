<template>
  <div class="pb-96 background">
    <TitleBar>
      <div class="flex items-center w-full justify-between">
        <p class="text-xl font-bold">{{ student?.full_name }}</p>
        <CButton variant="outline">
          <img src="icons/plus.svg" alt="edit icon" />
          <p class="text-xl">homiy qo'shish</p>
        </CButton>
      </div>
    </TitleBar>

    <div
      class="flex flex-col w-7/12 mx-auto bg-white p-10 mt-14 gap-8 rounded-lg"
    >
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-3xl">Talaba haqida</h3>
        <CButton variant="outline">
          <img src="icons/edit.svg" alt="edit icon" />
          <p class="text-xl">tahrirlash</p>
        </CButton>
      </div>
      <Chr> asosiy ma'lumotlar</Chr>
      <div class="flex items-center gap-6">
        <div class="w-28 h-28 p-6 rounded-xl bg-gray-200">
          <img class="w-full h-full" alt="profile icon" src="icons/user2.svg" />
        </div>
        <p class="text-2xl h-fit font-bold box-border max-w-72 break-words">
          {{ student?.full_name }}
        </p>
      </div>
      <p class="text-gray-400 uppercase font-bold text-sm">telefon raqam</p>
      <p>{{ student?.phone }}</p>
      <Chr> o'qish joyi</Chr>
      <div class="flex flex-row flex-wrap justify-start gap-40 font-bold">
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
      class="flex flex-col w-7/12 mx-auto bg-white p-10 mt-14 gap-8 rounded-lg"
    >
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-3xl">Talabaga homiylar</h3>
        <CButton variant="outline">
          <img src="icons/plus.svg" alt="edit icon" />
          <p class="text-xl">homiy qo'shish</p>
        </CButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import TitleBar from "components/layout/TitleBar.vue";
import { useMetsenatStore } from "@/store/store.js";
import { computed, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import Badge from "~/home/zawkin/development/metsenat/src/components/common/Badge.vue";
import CButton from "components/base/CButton.vue";
import Chr from "components/base/Chr.vue";
import { formatMoney } from "../../../utils/utils.js";
import { defineStudentType } from "../../../helpers/helpers.js";
import { useFetch } from "@/composables/useFetch.js";

const route = useRoute();

const store = useMetsenatStore();

const student = computed(() => store.student);

const { get } = useFetch();

const fetchData = async (page) => {
  if (store.studentsList.length === 0 || store.sponsorsCurrentPage !== page) {
    try {
      store.sponsorsCurrentPage = page;
      const response = await get(`student-detail/${route.params.id}`);
      store.student = response;

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
};

onBeforeMount(() => {
  fetchData();
});
</script>

<style>
.background {
  background-image: url("../../../assets/images/background.svg");
  background-repeat: no-repeat;
  background-position: center bottom;
}
</style>
