<template>
  <button :class="getClasses()" class="flex gap-2 w-full py-[14px] px-6 font-bold capitalize rounded-md ">
    <slot name="icon-left"> </slot>
    <slot name="default"> </slot>
    <slot name="icon-right"> </slot>
  </button>
</template>

<script setup>

const props = defineProps(["variant"])

function getClasses() {
  switch (props.variant) {
    case undefined:
      return "text-white bg-primary-300";
    case "secondary":
      return "uppercase py-1 px-[10px] bg-danger-400 text-white rounded-xl";
  }
}
</script>
