<template>
  <div class="flex flex-col pt-5 sm:pt-16  gap-5 sm:gap-10 px-4 lg:px-32 pb-8 sm:pb-32 overflow-hidden">
    <div class="flex sm:hidden w-full justify-end">
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
            <ul class="flex items-center justify-between px-5">
              <li class="w-[2%] text-left">{{ index + 1 }}</li>
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
              <li class="w-[8%] text-left flex items-center justify-end">
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
    </div>

    <Pagination
      @select-page="(page) => selectPage(page)"
      @select-page-size="(item) => selectPageSize(item)"
      :current-page="store?.sponsorsCurrentPage"
      :total-cards="store?.sponsorsList?.count"
      :cards-per-page="store?.pageSize"
    />
    <FilterModal
      v-if="filterModal.isOpen"
      @close="close(filterModal)"
      variant="sponsor"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useSponsorStore } from "@/store/sponsor";
import { useModalStore } from "@/store/modal";
import { useFetch } from "@/composables/useFetch";
import { formatDate, formatMoney } from "@/utils/index";
import CTable from "@/components/base/CTable.vue";
import CButton from "@/components/base/CButton.vue";
import Badge from "@/components/common/Badge.vue";
import Pagination from "@/components/common/Pagination.vue";
import FilterModal from "@/modals/FilterModal.vue";

const { get } = useFetch();
const { filterModal, close, open } = useModalStore();

const store = useSponsorStore();

const fetchData = async (page) => {
  try {
    store.sponsorsCurrentPage = page;
    store.sponsorsList = [];
    const response = await get("sponsor-list", {
      page: page,
      page_size: store.pageSize,
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

function selectPageSize(size) {
  store.pageSize = size;
  fetchData(store.sponsorsCurrentPage);
}

onMounted(() => {
  fetchData(store.sponsorsCurrentPage || 1);
});
</script>
