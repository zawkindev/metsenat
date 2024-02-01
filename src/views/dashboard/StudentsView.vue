<template>
  <div class="flex flex-col px-32">
    <CTable>
      <template #header>
        <li
          v-for="(column, index) in columns"
          :key="index"
          :class="`w-[${column.width}] ${index === 1 ? 'text-left' : 'text-center'} uppercase text-sm font-bold`"
        >
          {{ column.label }}
        </li>
      </template>

      <template #body>
        <li
          v-for="(item, index) in store.studentsList?.results"
          :key="index"
          class="bg-white py-[22px] px-[14px] rounded-lg my-5 border-[#B2B7C1]"
        >
          <ul class="flex items-center justify-between">
            <li class="w-[2%] text-center">{{ index + 1 }}</li>
            <li class="w-[20%] text-left">{{ item.full_name }}</li>
            <li class="w-[10%] text-center">
              {{ item.type === 1 ? "Bakalavr" : "Magistr" }}
            </li>
            <li class="w-[30%] text-center">
              {{ item.institute?.name }}
            </li>
            <li class="w-[15%] text-center">{{ formatMoney(item.given) }}</li>
            <li class="w-[15%] text-center">
              {{ formatMoney(item.contract) }}
            </li>
            <li class="w-[8%] text-center flex items-center justify-center">
              <RouterLink
                :to="{ name: 'StudentDetails', params: { id: item.id } }"
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
        {{ store.studentsList?.count }} tadan
        {{ (store.studentsCurrentPage - 1) * 10 }}-{{
          store.studentsCurrentPage * 10
        }}
        ko'rsatilmoqda
      </div>
      <div class="flex items-center gap-4">
        <button
          class="p-2 rounded-md border-2 duration-200"
          :class="{
            'border-[#E0E7FF]': store.studentsCurrentPage === 1,
            'border-blue-300 hover:bg-blue-100 bg-blue-50 hover:border-blue-300':
              store.studentsCurrentPage !== 1,
          }"
          @click="prevPage"
          :disabled="store.studentsCurrentPage === 1"
        >
          <img class="rotate-180" src="icons/arrow.svg" alt="arrow icon" />
        </button>
        <span>{{ store.studentsCurrentPage }}</span>
        <button
          :class="{
            'border-blue-300 hover:bg-blue-100 bg-blue-50 hover:border-blue-300':
              store.studentsCurrentPage !==
              Math.ceil(store.studentsList?.count / 10),
          }"
          class="p-2 rounded-md border-2 duration-200"
          @click="nextPage"
          :disabled="
            store.studentsCurrentPage ===
            Math.ceil(store.studentsList?.count / 10)
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

console.log(store.studentsList);

const nextPage = () => {
  fetchData(store.sponsorsCurrentPage + 1);
};

const prevPage = () => {
  fetchData(store.sponsorsCurrentPage - 1);
};

const fetchData = async (page) => {
  if (store.studentsList.length === 0 || store.sponsorsCurrentPage !== page) {
    try {
      store.sponsorsCurrentPage = page;
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

const statusType = {
  Yangi: "primary",
  Moderatsiyada: "warn",
  Tasdiqlangan: "success",
  "Bekor qilingan": "disabled",
};
const columns = [
  { label: "#", width: "2%" },
  { label: "f.i.sh.", width: "20%" },
  { label: "Talabalik turi", width: "10%" },
  { label: "OTM", width: "30%" },
  { label: "Ajratilingan summa", width: "15%" },
  { label: "Kontrakt miqdori", width: "15%" },
  { label: "Amallar", width: "8%" },
];

const dataKeys = ref([
  { label: "full_name", width: "34%" },
  { label: "type", width: "16%" },
  { label: "institute", width: "10%" },
  { label: "given", width: "15%" },
  { label: "contract", width: "15%" },
  { label: "action", width: "8%" },
]);

onBeforeMount(() => {
  fetchData(store.sponsorsCurrentPage);
});
</script>
