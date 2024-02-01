<template>
  <button
    :class="getClasses()"
    :type="type"
    class="flex justify-center gap-2 py-4 px-10 font-bold capitalize rounded-md border-2"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps(["variant", "type"]);

function getClasses() {
  switch (props.variant) {
    case undefined:
      return "text-white border-primary-300 bg-primary-300 hover:bg-primary-200 active:bg-blue-500";

    case "secondary":
      return "border-secondaery-200 bg-secondary-200 text-primary-300 hover:bg-gray-200 active:bg-gray-300";

    case "danger":
      return "border-danger-200 bg-danger-200 text-danger-300 hover:bg-red-200 active:bg-red-300";

    case "outline":
      return "text-primary-300 bg-blue-100 border-transparent hover:bg-blue-200 active:bg-blue-300 w-fit";
  }
}
</script>
