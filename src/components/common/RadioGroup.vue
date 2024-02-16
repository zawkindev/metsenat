<template>
  <div class="flex flex-col w-full gap-2">
    <label class="uppercase font-semibold">
      <slot />
    </label>
    <div class="flex flex-wrap gap-4">
      <CRadio
        v-for="item in options"
        :isActive="item.id === activeId"
        :value="item.summa"
        :key="item.id"
        @click="emit('select', item)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import CRadio from "@/components/base/CRadio.vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },

  activeOption: Number,
});

const activeId = computed(() => props?.activeOption?.id);

const emit = defineEmits(["select"]);
</script>
