<template>
  <div>
    <!-- Dynamic component rendering based on the currentLayout value -->
    <component :is="currentLayout" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";

const route = useRoute();
const currentLayout = computed(() =>
  route.meta.layout === "default" ? DefaultLayout : AuthLayout
);

console.log(currentLayout.value)
</script>
