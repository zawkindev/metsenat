<template>
  <div
    :class="{ 'image-bg': $route.name === 'Home' }"
    class="flex flex-col min-h-screen bg-secondary-100"
  >
    <Header :variant="headerVariant" />
    <RouterView />
  </div>
</template>

<script setup>
import { computed } from "vue";
import Header from "../components/layout/Header.vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute();

const headerVariant = computed(() =>
  route.name === "Home" ? "default" : "withoutMenu",
);
</script>

<style>
.image-bg {
  background-image: url("@/assets/images/background.svg");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: bottom right;
  background-color: #f5f5f7;
}
</style>
