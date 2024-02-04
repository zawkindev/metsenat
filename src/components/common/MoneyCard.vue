<template>
  <div class="flex p-6 pr-32 gap-3 whitespace-nowrap bg-white rounded-lg w-fit">
    <img :src="imgSrc" />
    <div class="flex flex-col">
      <p class="text-sm text-gray-400">{{ title }}</p>
      <p class="text-2xl">
        {{ formatMoney(response.total_paid) }}
        <span class="text-xl text-gray-500">{{currency}}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: "title",
  },
  imgSrc: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true,
    default: "UZS"
  }
});
</script>
