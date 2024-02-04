<template>
  <div class="relative w-full group">
    <CInput
      type="text"
      placeholder="Izlash"
      class="w-full h-full rounded-md pr-4 pl-10 bg-[#e8e8e8] border-2 border-transparent focus:border-primary-300 focus:outline-none"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <div
      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="text-[#000]"
      >
        <g id="search 1" clip-path="url(#clip0_120_1388)">
          <path
            id="Vector"
            :class="getStrokeColor()"
            d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            :class="getStrokeColor()"
            id="Vector_2"
            d="M17.5 17.5L12.5 12.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_120_1388">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CInput from "@/components/base/CInput.vue";

const isFocused = ref(false);

function getStrokeColor() {
  if (isFocused.value === true) {
    return "stroke-primary-300";
  }
  return "stroke-gray-400";
}
</script>

