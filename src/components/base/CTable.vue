<template>
  <div class="flex flex-col gap-5">
    <!--  HEADER  -->

    <div class="row flex flex-between w-full px-4">
      <slot name="header">
        <div class="flex w-4/12 font-bold">
          <p class="uppercase text-secondary-300 text-sm">
            <span class="mr-2">#</span> f.i.sh
          </p>
        </div>

        <div class="flex justify-between w-full gap-10">
          <div
            v-for="item in headerNames"
            class="flex text-center justify-end whitespace-nowrap font-bold"
          >
            <span class="uppercase text-secondary-300 text-sm">
              {{ item }}
            </span>
          </div>
        </div>
      </slot>
    </div>

    <!--  ROW  -->

    <div v-for="(item, index) in data.results" class="bg-white flex flex-between w-full px-4 py-6 rounded-lg">

      <slot name="header">
        <div class="flex w-4/12 font-bold">
          <p class="uppercase text-sm">
          <span class="mr-2">{{index+1}}</span>{{item.full_name}} 
         
          </p>
        </div>

        <div class="flex justify-between w-full gap-10">
          <div
            v-for="item in headerNames"
            class="flex text-center justify-end whitespace-nowrap font-bold"
          >
            <span class="uppercase text-sm">
              {{ item }}
            </span>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref} from "vue";
const props = defineProps(["data"])

const headerNames = ref([
  "tel.raqami",
  "homiylik summasi",
  "sarflangan summa",
  "sana",
  "holati",
  "amallar",
]);

const rowValues = ref([
"full_name", "phone", "sum", "spent"
])

</script>

<style>
.flex-table {
  display: grid;
  grid-template-columns: repeat(auto-fill, 25%);
}
</style>
