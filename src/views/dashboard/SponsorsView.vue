<template>
  <div class="flex flex-col px-32 pb-32">
    <CTable>
      <template #header>
        <li class="w-[2%] text-center">#</li>
        <li
          v-for="(column, index) in columns"
          :key="index"
          :class="`w-[${column.width}] ${index === 0 ? 'text-left' : 'text-center'}`"
          class="text-sm font-bold uppercase"
        >
          {{ column.label }}
        </li>
      </template>

      <template #body>
        <li
          v-for="(item, index) in store.sponsorsList?.results"
          :key="index"
          class="bg-white py-[22px] px-[14px] rounded-lg my-5 border-[#B2B7C1]"
        >
          <ul class="flex items-center justify-between">
            <li class="w-[2%] text-center">{{ index + 1 }}</li>
            <li class="w-[34%] text-left">{{ item?.full_name }}</li>
            <li class="w-[10%] text-center">{{ item?.phone }}</li>
            <li class="w-[16%] text-center">
              {{ formatMoney(item?.spent)
              }}<span class="ml-2 text-gray-400">UZS</span>
            </li>
            <li class="w-[15%] text-center">
              {{ formatMoney(item?.sum) }}
              <span class="ml-2 text-gray-400">UZS</span>
            </li>
            <li class="w-[15%] text-center">
              {{ formatDate(item?.created_at) }}
            </li>
            <li class="w-[8%] text-center">
              <!-- <CBadge :status="item?.get_status_display"></CBadge> -->
              <Badge :variant="statusType[item?.get_status_display]">
                {{ item?.get_status_display }}
              </Badge>
            </li>
            <li class="w-[8%] text-center flex items-center justify-center">
              <RouterLink
                  :to="{ name: 'SponsorDetails', params: { id: item.id } }"
              >
              <img src="icons/eye.svg" alt="eye icon" />
              </RouterLink>
            </li>
          </ul>
        </li>
      </template>
    </CTable>

    <div class="flex items-center justify-between">
      <div>
        {{ store.sponsorsList?.count }} tadan
        {{ (store.sponsorsCurrentPage - 1) * 10 }}-{{
          store.sponsorsCurrentPage * 10
        }}
        ko'rsatilmoqda
      </div>
      <div class="flex items-center gap-4">
        <button
          class="p-2 rounded-md border-2 duration-200"
          :class="{
            'border-[#E0E7FF]': store.sponsorsCurrentPage === 1,
            'border-blue-300 hover:bg-blue-100 bg-blue-50 hover:border-blue-300':
              store.sponsorsCurrentPage !== 1,
          }"
          @click="prevPage"
          :disabled="store.sponsorsCurrentPage === 1"
        >
          <img class="rotate-180" src="icons/arrow.svg" alt="arrow icon" />
        </button>
        <span>{{ store.sponsorsCurrentPage }}</span>
        <button
          :class="{
            'border-blue-300 hover:bg-blue-100 bg-blue-50 hover:border-blue-300':
              store.sponsorsCurrentPage !==
              Math.ceil(store.sponsorsList?.count / 10),
          }"
          class="p-2 rounded-md border-2 duration-200"
          @click="nextPage"
          :disabled="
            store.sponsorsCurrentPage ===
            Math.ceil(store.sponsorsList?.count / 10)
          "
        >
          <img src="/arrow.svg" alt="arrow icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useMetsenatStore } from "@/store/store";
import { useFetch } from "@/composables/useFetch";
import { formatDate, formatMoney } from "@/utils/utils.js";
import CTable from "components/base/CTable.vue";
import Badge from "components/common/Badge.vue";

const { get } = useFetch();
const store = useMetsenatStore();

const pageSize = ref(10);

console.log(store.sponsorsList);

const nextPage = () => {
  fetchData(store.sponsorsCurrentPage + 1);
};

const prevPage = () => {
  fetchData(store.sponsorsCurrentPage - 1);
};

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

const statusType = {
  Yangi: "primary",
  Moderatsiyada: "warn",
  Tasdiqlangan: "success",
  "Bekor qilingan": "disabled",
};
const columns = ref([
  { label: "f.i.sh.", width: "34%" },
  { label: "Tel.Raqami", width: "16%" },
  { label: "Homiylik summasi", width: "10%" },
  { label: "Sarflangan summa", width: "15%" },
  { label: "Sana", width: "15%" },
  { label: "Holati", width: "15%" },
  { label: "Amallar", width: "8%" },
]);

const dataKeys = ref([
  { label: "full_name", width: "34%" },
  { label: "phone", width: "16%" },
  { label: "sum", width: "10%" },
  { label: "spent", width: "15%" },
  { label: "created_at", width: "15%" },
  { label: "get_status_display", width: "15%" },
  { label: "action", width: "8%" },
]);

onBeforeMount(() => {
  fetchData(store.sponsorsCurrentPage);
});
</script>
