<template>
  <input
    :id="id"
    :type="type"
    v-model="inputValue"
    :placeholder="placeholder"
    @input="emit('update:modelValue', $event.target.value)"
    class="rounded-md w-full py-2 px-4 focus:outline-none bg-gray-50 border-2 border-slate-200 sm:border-[#E0E7FF] focus:border-primary-200"
  />
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  type: String,
  value: String,
  placeholder: String,
});
const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(props.value);
</script>
