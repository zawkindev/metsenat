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

            </slot>
          </ul>
        </li>

        <div>
          <slot name="body">

          </slot>
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
