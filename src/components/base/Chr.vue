<template>
  <div class="flex w-full items-center">
    <Badge v-if="$slots.default" variant="primary" :with-bg="true">
      <span class="font-bold uppercase text-sm">
        <slot />
      </span>
    </Badge>
    <div class="w-full h-[1px] bg-gray-200"></div>
  </div>
</template>
<script setup>
import Badge from "@/components/common/Badge.vue";
</script>
