<template>
  <Bar>
    <div class="flex w-full items-center gap-5">
      <img
        @click="$router.go(-1)"
        alt="back icon"
        src="@/assets/images/icons/back.svg"
      />
      <slot> </slot>
    </div>
  </Bar>
</template>
<script setup>
import Bar from "@/components/layout/Bar.vue";
</script>
