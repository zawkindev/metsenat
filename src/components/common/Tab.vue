<template>
  <div class="flex flex-row w-full bg-white rounded-md border overflow-hidden">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="cursor-pointer w-full flex justify-center items-center text-blue-400"
      :class="getTabClass(index)"
      @click="handleClick(index)"
    >
      <span
        class="p-2 py-4 text-sm uppercase font-semibold"
        :class="{ 'text-white': index === activeTab }"
        >{{ option }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  defaultTab: Number,
});
const emit = defineEmits(["activate"]);

const activeTab = ref(props.defaultTab ?? 0);

watch(activeTab.value, (newValue) => {
  console.log("tab: ", newValue);
});

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
