<template>
  <div class="flex flex-row bg-white rounded-md border overflow-hidden">
    <div
      v-for="(option, index) in options"
      class="cursor-pointer w-full flex justify-center items-center text-blue-400"
      :class="getTabClass(index)"
      @click="handleClick(index)"
    >
      <span
        class="p-4 uppercase font-semibold"
        :class="{ 'text-white': index === activeTab }"
        >{{ option }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["options"]);
const emit = defineEmits(["activate"]);

const activeTab = ref(0);

function handleClick(index) {
  activeTab.value = index;
  emit("activate", index);
}

function getTabClass(index) {
  return {
    "border-r border-[#E0E7FF]": index + 1 !== props.options.length,
    "bg-primary-300 border-primary-300 text-white": index === activeTab.value,
    "border-primary-300": index === activeTab.value - 1,
  };
}
</script>
