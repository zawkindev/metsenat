<template>
  <div class="flex flex-col gap-2 w-full relative">
    <label :for="id" class="uppercase font-semibold text-sm sm:text-md">{{
      label
    }}</label>
    <CInput
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :class="{ 'border-red-400': v$?.password?.$error }"
      @update:modelValue="(value) => emit('update:modelValue', value)"
    />
    <span v-if="validation" class="text-red-600 absolute bottom-[-23px]">{{
      errorMsg
    }}</span>
  </div>
</template>

<script setup>
import CInput from "@/components/base/CInput.vue";

const emit = defineEmits(["update:modelValue"]);

defineProps({
  id: {
    type: String,
    required: true,
  },
  label: String,
  type: {
    default: "text",
    type: String,
  },
  validation: {
    type: Boolean,
    required: true,
  },
  errorMsg: {
    type: String,
    required: true,
  },
  placeholder: String,
});
</script>
