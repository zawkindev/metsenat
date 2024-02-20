<template>
  <CModal
    :name="isEdit ? 'Homiylarni tahrirlash' : 'Homiy qo\'shish'"
    @close="emit('close')"
    class="gap-10"
  >
    <Chr />
    <form @submit.prevent="handleSubmit">
      <div
        v-if="variant == 'edit'"
        class="flex flex-col gap-8 w-full py-10 overflow-visible"
      ></div>
    </form>
  </CModal>
</template>

<script setup>
import CModal from "@/components/base/CModal.vue";

defineProps({
  isEdit: Boolean,
});
</script>
