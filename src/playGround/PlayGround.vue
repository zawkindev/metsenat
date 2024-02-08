<template>
  <div class="gap-6 bg-gray-400 min-h-screen w-screen flex flex-col justify-center items-center">
    <div class="w-full flex flex-col rounded-md gap-5 justify-center items-center p-10">

      <FilterModal v-if="isOpen" @close="ccloseModal" />


    </div>
  </div>
</template>

<script setup>
import FilterModal from "@/modals/FilterModal.vue";
import { useModal } from "@/composables/useModal"; // Adjust the path accordingly

const {isOpen, openModal, closeModal} = useModal()
</script>
