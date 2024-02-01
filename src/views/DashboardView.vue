<template>
  <div class="flex flex-col w-full">
    <Bar v-if="!$route.fullPath.includes('students/')" />
    <RouterView></RouterView>
  </div>
</template>
<script setup>
import Bar from "components/layout/Bar.vue";
import { RouterView } from "vue-router";
</script>
