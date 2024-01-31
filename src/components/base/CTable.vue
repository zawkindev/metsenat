<template>
  <div class="flex flex-col gap-5">
    <!-- HEADER -->
    <div class="row flex w-full px-4">
      <slot name="header">
        <!-- First Column -->
        <div class="flex w-1/4 font-bold text-secondary-300 uppercase">
          <p class="mr-8 w-[2%]">#</p>
          <p>f.i.sh</p>
        </div>
        <div class="flex w-3/4">
          <template v-for="item in headerNames">
            <div
              :class="`w-[${item.width}]`"
              class="text-center whitespace-nowrap"
            >
              <span>{{ item.label }}</span>
            </div>
          </template>
        </div>
      </slot>
    </div>

    <!-- ROW -->
    <div
      v-for="(obj, index) in data.results"
      class="bg-white flex w-full px-4 py-6 rounded-lg"
    >
      <!-- First Column -->
      <div class="flex w-1/4 font-bold">
        <p class="w-[2%] text-sm">{{ index + 1 }}</p>

        <p>{{ obj.full_name }}</p>
      </div>

      <!-- Remaining Columns -->
      <div class="flex w-3/4">
        <template v-for="item in rowValues" :key="item.label">
          <div
            :class="`w-[${item.width}]`"
            class="text-center whitespace-nowrap"
          >
            <span v-if="item.label === 'created_at'">
              {{ formatDate(obj[item]) }}
            </span>
            <img v-else-if="item === 'action'" src="icons/eye.svg" />
            <span v-else>{{ obj[item.label] }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { formatDate } from "@/utils/utils";
const props = defineProps(["data"]);

const headerNames = ref([
  { label: "f.i.sh.", width: "34%" },
  { label: "Tel.Raqami", width: "16%" },
  { label: "Homiylik summasi", width: "10%" },
  { label: "Sarflangan summa", width: "15%" },
  { label: "Holati", width: "15%" },
  { label: "Sana", width: "8%" },
  { label: "Amallar", width: "8%" },
]);

const rowValues = ref([
  { label: "full_name", width: "34%" },
  { label: "phone", width: "16%" },
  { label: "sum", width: "10%" },
  { label: "spent", width: "15%" },
  { label: "created_at", width: "15%" },
  { label: "get_status_display", width: "8%" },
  { label: "action", width: "8%" },
]);
</script>

<style>
.flex-table {
  display: grid;
  grid-template-columns: repeat(auto-fill, 25%);
}
</style>
