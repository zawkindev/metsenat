<template>
  <div
    :class="getClasses()"
    class="w-fit text-sm sm:text-base font-normal whitespace-nowrap"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    required: true,
  },
  withBg: Boolean,
});

function getClasses() {
  switch (props.variant) {
    case "primary":
      return `capitalize px-3 text-primary-300  ${props.withBg ? "bg-blue-300 bg-opacity-40" : ""}`;
    case "success":
      return `capitalize px-3 py-1  text-green-500  ${props.withBg ? "bg-green-300 rounded-lg bg-opacity-40" : ""} `;
    case "warn":
      return `capitalize px-3 py-1 text-yellow-400  ${props.withBg ? "bg-yellow-200 text-yellow-500 rounded-lg bg-opacity-40" : ""} `;
    case "danger":
      return `uppercase py-1 px-2 sm:px-[10px] ${props.withBg ? "bg-danger-400 bg-opacity-40 rounded-xl" : ""} text-white `;
    case "disabled":
      return `capitalize px-3 py-1 text-gray-400`;
  }
}
</script>
