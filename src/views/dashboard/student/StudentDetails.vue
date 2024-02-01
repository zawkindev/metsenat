<template>
  <TitleBar>
    <p class="text-xl font-bold">{{ student?.full_name }}</p>
    <Badge variant="success" :with-bg="true"> tasdiqlangan</Badge>
  </TitleBar>

  <div
    class="flex flex-col w-7/12 mx-auto bg-white p-10 mt-14 gap-8 rounded-lg"
  >
    <div class="flex items-center justify-between">
      <h3 class="font-bold text-3xl">Talaba haqida</h3>
      <CButton variant="outline">
        <img src="icons/edit.svg" alt="edit icon" />
        Tahrirlash
      </CButton>
    </div>
    <div class="flex w-full items-center">
      <Badge variant="primary" :with-bg="true">
        <span class="font-bold uppercase text-sm"> Asosiy ma'lumotlar </span>
      </Badge>
      <Chr />
    </div>
  </div>
</template>

<script setup>
import TitleBar from "components/layout/TitleBar.vue";
import { useMetsenatStore } from "~/home/zawkin/development/metsenat/src/store/store.js";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Badge from "~/home/zawkin/development/metsenat/src/components/common/Badge.vue";
import CButton from "~/home/zawkin/development/metsenat/src/components/base/CButton.vue";
import Chr from "~/home/zawkin/development/metsenat/src/components/base/Chr.vue";

const route = useRoute();

const store = useMetsenatStore();

const student = store.getStudent(route.params.id);
</script>
