<template>
  <div class="pb-96 background">
    <TitleBar>
      <p class="text-xl font-bold">{{ sponsor?.full_name }}</p>
      <Badge :variant="statusType[sponsor?.get_status_display]" :with-bg="true">
        {{ sponsor?.get_status_display }}</Badge
      >
    </TitleBar>

    <div
      class="flex flex-col w-7/12 mx-auto bg-white p-10 mt-14 gap-8 rounded-lg"
    >
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-3xl">Homiy haqida</h3>
        <CButton variant="outline">
          <img src="icons/edit.svg" alt="edit icon" />
          <p class="text-xl">tahrirlash</p>
        </CButton>
      </div>
      <div class="flex items-center gap-6">
        <div class="w-28 h-28 p-6 rounded-xl bg-gray-200">
          <img class="w-full h-full" alt="profile icon" src="icons/user2.svg" />
        </div>
        <p class="text-2xl h-fit font-bold box-border max-w-72 break-words">
          {{ sponsor?.full_name }}
        </p>
      </div>

      <div class="flex flex-row flex-wrap justify-start font-bold">
        <div class="flex flex-row gap-40">
          <div>
            <p class="text-gray-400 uppercase font-bold text-sm">
              telefon raqam
            </p>
            <p>{{ sponsor?.phone }}</p>
          </div>
          <div>
            <p class="text-gray-400 uppercase font-bold text-sm">
              homiylik summasi
            </p>
            <p>{{ formatMoney(sponsor?.sum) }} UZS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TitleBar from "@/components/layout/TitleBar.vue";
import { useMetsenatStore } from "@/store/store";
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import Badge from "@/components/common/Badge.vue";
import CButton from "@/components/base/CButton.vue";
import { formatMoney } from "@/utils/index";
import { useFetch } from "@/composables/useFetch";

const route = useRoute();

const store = useMetsenatStore();

const { get } = useFetch();

const sponsor = computed(() => store.sponsor);

const statusType = {
  Yangi: "primary",
  Moderatsiyada: "warn",
  Tasdiqlangan: "success",
  "Bekor qilingan": "disabled",
};
const fetchData = async (page) => {
  if (store.studentsList.length === 0 || store.sponsorsCurrentPage !== page) {
    try {
      store.sponsorsCurrentPage = page;
      const response = await get(`sponsor-detail/${route.params.id}`);
      store.sponsor = response;

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
  background-image: url("@/assets/images/background.svg");
  background-repeat: no-repeat;
  background-position: center bottom;
}
</style>
