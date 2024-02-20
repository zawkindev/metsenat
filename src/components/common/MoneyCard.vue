<template>
  <div
    class="flex p-3 sm:p-6 gap-3 whitespace-nowrap bg-white rounded-lg w-full sm:w-fit"
  >
    <img class="" :src="getImgUrl(img)" />
    <div class="flex flex-col">
      <p class="text-sm text-gray-400">{{ title }}</p>
      <p class="text-2xl">
        {{ formatMoney(amount) }}
        <span class="text-xl text-gray-500">{{ currency }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { formatMoney, getImgUrl } from "@/utils/index";

defineProps({
  title: {
    type: String,
    required: true,
    default: "title",
  },
  img: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
    default: "UZS",
  },
  amount: {
    type: [String, Number],
    default: 0,
  },
});
</script>
