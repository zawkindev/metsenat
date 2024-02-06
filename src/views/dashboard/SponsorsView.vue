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
                <img src="@/assets/images/icons/eye.svg" alt="eye icon" />
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
          store.sponsorsCurrentPage * 10 < store.sponsorsList?.count
        }}
        ko'rsatilmoqda
      </div>
      <div class="flex items-center gap-4">
        <Pagination
          :options="paginationData"
          @select-page="(page) => selectPage(page)"
          :activePage="store?.sponsorsCurrentPage"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref, computed } from "vue";
import { useSponsorStore } from "@/store/sponsor";
import { useFetch } from "@/composables/useFetch";
import { formatDate, formatMoney, generatePaginationData } from "@/utils/index";
import CTable from "@/components/base/CTable.vue";
import Badge from "@/components/common/Badge.vue";
import Pagination from "@/components/common/Pagination.vue";

const { get } = useFetch();
const store = useSponsorStore();

const pageSize = ref(10);

const paginationData = computed(() =>
  generatePaginationData(
    store.sponsorsCurrentPage,
    store.sponsorsList.count,
    pageSize.value,
  ),
);

const fetchData = async (page) => {
  try {
    store.sponsorsCurrentPage = page;
    store.sponsorsList = [];
    const response = await get("sponsor-list", {
      page: page,
      pageSize: pageSize.value,
    });
    store.sponsorsList = response;

    console.log(response);
  } catch (error) {
    console.log(error);
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

function selectPage(page) {
  fetchData(page);
  console.log("page: ", page);
}

onBeforeMount(() => {
  fetchData(store.sponsorsCurrentPage);
});
</script>
