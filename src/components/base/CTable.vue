<template>
  <div class="w-full">
    <div class="container mx-auto overflow-hidden overflow-x-auto">
      <ul
        class="w-full whitespace-nowrap flex gap-4 my-12 flex-col list-none p-0"
      >
        <!-- sponsors list row head cells -->
        <li>
          <ul class="text-[#B1B1B8] text-left flex gap-6 px-[14px]">
            <slot name="header">
              <li class="w-[2%] text-center">#</li>
              <li
                v-for="(column, index) in columns"
                :key="index"
                :class="`w-[${column.width}] ${index === 0 ? 'text-left' : 'text-center'}`"
              >
                {{ column.label }}
              </li>
            </slot>
          </ul>
        </li>

        <div>
          <li
            v-for="(item, index) in data?.results"
            :key="index"
            class="bg-white py-[22px] px-[14px] rounded-lg my-5 border-[#B2B7C1]"
          >
            <ul class="flex items-center justify-between">
              <slot name="body">
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
                  <img src="icons/eye.svg" alt="eye icon" />
                </li>
              </slot>
            </ul>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { formatDate, formatMoney } from "@/utils/utils";
import Badge from "~/home/zawkin/development/metsenat/src/components/common/Badge.vue";

const props = defineProps(["data", "columns", "dataKeys"]);

const statusType = {
  Yangi: "primary",
  Moderatsiyada: "warn",
  Tasdiqlangan: "success",
  "Bekor qilingan": "disabled",
};
</script>

<style>
.flex-table {
  display: grid;
  grid-template-columns: repeat(auto-fill, 25%);
}
</style>
