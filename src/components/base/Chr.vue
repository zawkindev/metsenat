<script setup>
import Badge from "~/home/zawkin/development/metsenat/src/components/common/Badge.vue";
</script>

<template>

  <div class="flex w-full items-center">
    <Badge variant="primary" :with-bg="true">
      <span class="font-bold uppercase text-sm">
     <slot />
      </span>
    </Badge>
    <div class="w-full h-[1px] bg-gray-200" />
  </div>
</template>
