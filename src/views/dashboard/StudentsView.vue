<template>
  <div class="flex flex-col px-32 pb-32">
    <div class="flex w-full justify-end pt-10">
      <RouterLink :to="{ name: 'AddStudent' }">
        <CButton class="primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.9999 11.9999H4.00007"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 4V19.9999"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          Talaba qo'shish
        </CButton>
      </RouterLink>
    </div>
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
                <img src="@/assets/images/icons/eye.svg" alt="eye icon" />
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
        <Pagination :options="paginationData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from "vue";
import { useMetsenatStore } from "@/store/store";
import { useFetch } from "@/composables/useFetch";
import { formatMoney, generatePaginationData } from "@/utils/index";
import CTable from "@/components/base/CTable.vue";
import CButton from "@/components/base/CButton.vue";
import Pagination from "@/components/common/Pagination.vue";

const { get } = useFetch();
const store = useMetsenatStore();

const pageSize = ref(10);

const paginationData = computed(() =>
  generatePaginationData(
    store.studentsCurrentPage,
    store.studentsList.count,
    store.studentsList?.results?.length,
  ),
);

const fetchData = async (page) => {
  if (store.studentsList.length === 0 || store.sponsorsCurrentPage !== page) {
    try {
      store.studentsCurrentPage = page;
      store.studentsList = [];
      const response = await get("student-list", {
        page: page,
        pageSize: pageSize.value,
      });
      store.studentsList = response;

      console.log("response: ", response);
    } catch (error) {
      console.log(error);
    }
  }
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

onBeforeMount(() => {
  fetchData(store.sponsorsCurrentPage);
});
</script>
<style>
path {
  stroke: white;
}
</style>
