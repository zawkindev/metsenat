<template>
  <div>
    <component :is="currentLayout" />
    <!--<PlayGround />-->
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "layouts/DefaultLayout.vue";
import AuthLayout from "layouts/AuthLayout.vue";
import PlayGround from "~/home/zawkin/development/metsenat/src/playGround/PlayGround.vue";

const route = useRoute();
const currentLayout = computed(() =>
  route.meta.layout === "default" ? DefaultLayout : AuthLayout,
);
</script>
