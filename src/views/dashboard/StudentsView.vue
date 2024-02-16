<template>
  <div
    class="flex flex-col pt-5 sm:pt-16 gap-5 sm:gap-10 px-4 lg:px-32 pb-8 sm:pb-32 overflow-hidden"
  >
    <div class="flex sm:hidden w-full justify-end gap-4">
      <RouterLink :to="{ name: 'AddStudent' }">
        <CButton class="primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            class="h-auto w-6"
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
          <span class="hidden sm:block"> Talaba qo'shish </span>
        </CButton>
      </RouterLink>
      <CButton @click="open(filterModal)" variant="outline" :withBg="true">
        <img
          class="w-6 h-auto"
          src="@/assets/images/icons/filter.svg"
          alt="filter icon"
        />
        <p class="hidden md:flex">Filter</p>
      </CButton>
    </div>
    <div class="overflow-auto">
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
              <li class="w-[2%] text-center truncate">{{ index + 1 }}</li>
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
    </div>

    <Pagination
      @select-page="(page) => selectPage(page)"
      @select-page-size="(item) => selectPageSize(item)"
      :current-page="store?.studentsCurrentPage"
      :total-cards="store?.studentsList?.count"
      :cards-per-page="store?.pageSize"
    />
    <FilterModal
      v-if="filterModal.isOpen"
      @close="close(filterModal)"
      variant="student"
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStudentStore } from "@/store/student";
import { useModalStore } from "@/store/modal";
import { useFetch } from "@/composables/useFetch";
import { formatMoney } from "@/utils/index";
import CTable from "@/components/base/CTable.vue";
import CButton from "@/components/base/CButton.vue";
import Pagination from "@/components/common/Pagination.vue";
import FilterModal from "@/modals/FilterModal.vue";

const { get } = useFetch();
const { filterModal, close, open } = useModalStore();

const store = useStudentStore();

const fetchData = async (page) => {
  try {
    store.studentsCurrentPage = page;
    store.studentsList = [];
    const response = await get("student-list", {
      page: page,
      page_size: store.pageSize,
    });
    store.studentsList = response;

    console.log("response: ", response);
  } catch (error) {
    console.error(error);
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

function selectPage(page) {
  fetchData(page);
}

function selectPageSize(size) {
  store.pageSize = size;
  fetchData(store.studentsCurrentPage);
}

onMounted(() => {
  fetchData(store.studentsCurrentPage || 1);
});
</script>
<style>
path {
  stroke: white;
}
li {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
