<template>
  <div class="flex flex-col h-screen bg-secondary-100">

    <Header :variant="headerVariant" />
    <RouterView> </RouterView>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Header from '../components/layout/Header.vue';
import { RouterView } from 'vue-router';

const headerVariant = computed(() => localStorage.getItem("access-token") ? "withoutMenu" : "default")
</script>
