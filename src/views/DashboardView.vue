<template>
  <div class="flex flex-col w-full">
    <div class="px-32 bg-white">
      <Bar />
    </div>

    <RouterView>

    </RouterView>
  </div>
</template>
<script setup>
import Bar from "components/layout/Bar.vue";
import { RouterView } from "vue-router";
</script>
