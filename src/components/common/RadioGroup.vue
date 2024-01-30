<template>
  <div class="flex flex-col w-full gap-2">
    <label class="uppercase font-semibold">
      <slot> {{ label }} </slot>
    </label>
    <div class="flex flex-wrap gap-4">
      <CRadio
        v-for="(item, index) in options"
        :isActive="activeOption === index"
        :value="item"
      />
    </div>
  </div>
</template>

<script setup>
import CRadio from "components/base/CRadio.vue";
import { ref } from "vue";
const props = defineProps(["options"]);

const activeOption = ref(0);
</script>
