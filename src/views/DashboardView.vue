<template>
  <div class="flex flex-col w-full overflow-visible">
    <div class="hidden sm:flex">
      <Bar v-if="shouldRenderBar" />
    </div>
    <RouterView></RouterView>
  </div>
</template>
<script setup>
import { computed, onBeforeMount } from "vue";
import { RouterView, useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import Bar from "@/components/layout/Bar.vue";

const route = useRoute();

const toast = useToast();

const shouldRenderBar = computed(
  () =>
    !route.fullPath.includes("students/") &&
    !route.fullPath.includes("sponsors/"),
);

onBeforeMount(() => {
  if (!localStorage.getItem("toast-showed")) {
    toast.success("This is a success toast message");
    localStorage.setItem("toast-showed", "showed");
  }
});
</script>
