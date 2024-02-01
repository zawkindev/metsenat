<template>
  <div class="flex flex-col w-full overflow-visible">
    <Bar
      v-if="
        !$route.fullPath.includes('students/') &&
        !$route.fullPath.includes('sponsors/')
      "
    />
    <RouterView></RouterView>
  </div>
</template>
<script setup>
import Bar from "components/layout/Bar.vue";
import { RouterView } from "vue-router";
</script>
