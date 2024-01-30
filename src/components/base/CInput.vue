<template>
  <div class="w-full flex flex-col justify-start">
    <slot :id="id">
      <label>{{ label }}</label>
    </slot>
    <input
      :id="id"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      class="rounded-md py-3 px-4 focus:outline-none bg-gray-50 border-2 border-[#E0E7FF] focus:border-primary-200"
    />
  </div>
</template>

<script setup>
const props = defineProps(["id", "label", "type", "value", "placeholder"]);
</script>
