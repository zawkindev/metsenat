<template>
  <div class="flex flex-col justify-start">
    <slot>
      <label :id="id">{{ label }}</label>
    </slot>
    <input
      :id="id"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      class="w-full rounded-md py-3 px-4 focus:outline-none bg-gray-50 border-2 border-[#E0E7FF]"
    />
  </div>
</template>

<script setup>
const props = defineProps(["id", "label", "type", "value", "placeholder"]);
</script>
