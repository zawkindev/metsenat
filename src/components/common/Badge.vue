<template>
  <div :class="getClasses()" class="font-normal w-fit">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps(["variant"]);

function getClasses() {
  switch (props.variant) {
    case "success":
      return "capitalize px-3 py-2 bg-opacity-40 text-green-500  bg-green-300 rounded-lg";
    case "danger":
      return "uppercase py-1 px-[10px] bg-danger-400 text-white rounded-xl";
  }
}
</script>
