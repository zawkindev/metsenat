<template>
  <div class="flex flex-col min-h-screen bg-secondary-100 overflow-x-auto">
    <Header :variant="headerVariant" />
    <RouterView/>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Header from "../components/layout/Header.vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute()

const headerVariant = computed(() =>
  route.name==="Home" ? "default" : "withoutMenu",
);
</script>

<style></style>
