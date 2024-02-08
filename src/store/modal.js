import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const filterModal = ref({
    isOpen: false,
  });

  function open(modal) {
    modal.isOpen = true;
    document.body.style.overflow = "hidden";
  }

  function close(modal) {
    modal.isOpen = false;
    document.body.style.overflow = "auto";
  }

  return {
    filterModal,
    open,
    close,
  };
});
