<template>
  <div class="relative">
    <!-- Visible selected option -->
    <div
      class="flex justify-between bg-white rounded-lg p-3 pr-1 py-2 cursor-pointer border-2 border-gray-200 focus:border-blue-300"
    >
      <slot name="selectedOption"> </slot>

      <svg
        :class="{ 'rotate-[270deg] fill-blue-400': isOpen }"
        class="rotate-90 w-6 h-6 fill-gray-500 transition"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9.12238 7.12747C8.96629 7.28355 8.96615 7.53658 9.12207 7.69284L13.1379 11.7175C13.2937 11.8736 13.2937 12.1264 13.1379 12.2825L9.12207 16.3072C8.96615 16.4634 8.96629 16.7164 9.12238 16.8725L9.967 17.7172C10.1232 17.8734 10.3765 17.8734 10.5327 17.7172L15.967 12.2828C16.1232 12.1266 16.1232 11.8734 15.967 11.7172L10.5327 6.28284C10.3765 6.12663 10.1232 6.12663 9.967 6.28284L9.12238 7.12747Z"
          fill=""
        />
      </svg>
    </div>
    <span v-if="validation" class="text-red-600">{{ errorMsg }}</span>

    <!-- Dropdown options -->
    <div
      v-show="isOpen"
      class="absolute w-full mt-1 bg-white border border-gray-300 rounded-xl z-10"
    >
      <slot name="options"> </slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  validation: {
    type: Boolean,
  },
  errorMsg: {
    type: String,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
});
</script>
