<template>
  <div class="flex flex-col w-full overflow-visible">
    <Bar v-if="shouldRenderBar" />
    <RouterView></RouterView>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { RouterView, useRoute } from "vue-router";
// import { useToast } from "vue-toastification";
import Bar from "@/components/layout/Bar.vue";

const route = useRoute();

// const toast = useToast();

const shouldRenderBar = computed(
  () =>
    !route.fullPath.includes("students/") &&
    !route.fullPath.includes("sponsors/"),
);

onMounted(() => {
  if (!localStorage.getItem("toast-showed")) {
    // toast.success("This is a success toast message");
    localStorage.setItem("toast-showed", "");
  }
});
</script>
