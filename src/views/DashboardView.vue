<template>
  <div class="flex flex-col w-full gap-10">
    <div class="px-32 bg-white">
      <Bar />
    </div>

    <div class="px-32">
      <RouterView> </RouterView>
    </div>
  </div>
</template>
<script setup>
import Bar from "components/layout/Bar.vue";
import { RouterView } from "vue-router";
</script>
