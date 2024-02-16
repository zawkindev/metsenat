<template>
  <div class="pb-96 background">
    <TitleBar>
      <p class="text-xl font-bold" @click="$router.go(-1)">
        {{ sponsor?.full_name }}
      </p>
    </TitleBar>

    <div
      class="relative flex flex-col w-11/12 sm:w-10/12 md:w-7/12 mx-auto bg-white p-6 sm:p-10 mt-14 gap-4 sm:gap-8 rounded-lg"
    >
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-2xl sm:text-3xl">Homiy haqida</h3>
        <Badge
          :variant="statusType[sponsor?.get_status_display]"
          :with-bg="true"
        >
          {{ sponsor?.get_status_display }}</Badge
        >
      </div>
      <div class="flex items-center gap-6">
        <div class="w-20 sm:w-28 h-auto p-3 sm:p-6 rounded-xl bg-gray-200">
          <img
            class="w-full h-full"
            alt="profile icon"
            src="@/assets/images/icons/user2.svg"
          />
        </div>
        <p
          class="text-lg sm:text-2xl h-fit font-bold box-border max-w-72 break-words"
        >
          {{ sponsor?.full_name }}
        </p>
      </div>

      <div class="flex flex-wrap justify-start font-bold">
        <div class="flex flex-col sm:flex-row justify-between gap-4 sm:gap-40">
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
      <CButton @click="open(editModal)" class="flex self-end" variant="outline">
        <img src="@/assets/images/icons/edit.svg" alt="edit icon" />
        <p class="text-md sm:text-xl">tahrirlash</p>
      </CButton>
    </div>
  </div>
  <EditModal
    v-if="editModal.isOpen"
    @close="close(editModal)"
    variant="sponsor"
  />
</template>

<script setup>
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useSponsorStore } from "@/store/sponsor";
import { useModalStore } from "@/store/modal";
import { formatMoney } from "@/utils/index";
import { useFetch } from "@/composables/useFetch";
import TitleBar from "@/components/layout/TitleBar.vue";
import Badge from "@/components/common/Badge.vue";
import CButton from "@/components/base/CButton.vue";
import EditModal from "@/modals/EditModal.vue";

const route = useRoute();

const store = useSponsorStore();

const { get } = useFetch();
const { editModal, close, open } = useModalStore();

const sponsor = computed(() => store.sponsor);

const statusType = {
  Yangi: "primary",
  Moderatsiyada: "warn",
  Tasdiqlangan: "success",
  "Bekor qilingan": "disabled",
};
const fetchData = async () => {
  try {
    const response = await get(`sponsor-detail/${route.params.id}`);
    store.sponsor = response;

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
