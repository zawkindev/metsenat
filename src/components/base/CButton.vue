<template>
  <button
    :class="getClasses()"
    :type="type"
    :disabled="disabled"
    class="flex justify-center gap-2 p-3 md:py-3 md:px-6 font-bold capitalize rounded-md border-2 disabled:grayscale"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "default",
    validator(value) {
      return ["default", "secondary", "danger", "outline"].includes(value);
    },
  },
  type: String,
  disabled: Boolean,
});

function getClasses() {
  switch (props.variant) {
    case "default":
      return "text-white border-primary-300 bg-primary-300 hover:bg-blue-500 hover:border-blue-500 active:bg-blue-400 active:border-blue-400";

    case "secondary":
      return "border-secondary-200 bg-secondary-200 text-primary-300 hover:bg-gray-200 active:bg-gray-300";

    case "danger":
      return "border-danger-200 bg-danger-200 text-danger-300 hover:bg-red-200 active:bg-red-300";

    case "outline":
      return "text-primary-300 bg-blue-100 border-transparent hover:bg-blue-200 active:bg-blue-300 w-fit";
  }
}
</script>
