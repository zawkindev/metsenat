<template>
  <button
    :class="getClasses()"
    class="flex justify-center gap-2 w-full py-[14px] px-6 font-bold capitalize rounded-md"
  >
    <slot name="icon"> </slot>
    <slot name="default"> </slot>
  </button>
</template>

<script setup>
const props = defineProps(["variant"]);

function getClasses() {
  switch (props.variant) {
    case undefined:
      return "text-white bg-primary-300 hover:bg-primary-200 active:bg-blue-500";
    case "secondary":
      return "bg-secondary-200 text-primary-300 hover:bg-gray-200 active:bg-gray-300";
    case "danger":
      return "bg-danger-200 text-danger-300 hover:bg-red-200 active:bg-red-300";
  }
}
</script>
