<template>
  <div
    :class="{ 'image-bg': $route.name === 'Home' }"
    class="flex flex-col min-h-screen pb-32"
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
  background-size: 90%;
  background-position: bottom center;
  background-color: #f5f5f7;
}

 @media only screen and (min-width: 934px) {
   .image-bg{
     background-position: bottom right;
   }
 }

  @media only screen and (min-width: 640px) {
   .image-bg{
     background-size: 50%;
   }
 }
</style>
