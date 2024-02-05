<template>
  <div class="flex flex-col w-full overflow-visible">
    <Bar v-if="shouldRenderBar" />
    <RouterView></RouterView>
  </div>
</template>
<script setup>
import Bar from "@/components/layout/Bar.vue";
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute();

const shouldRenderBar = computed(
  () =>
    !route.fullPath.includes("students/") &&
    !route.fullPath.includes("sponsors/"),
);
</script>
