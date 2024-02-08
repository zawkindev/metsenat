<template>
  <div class="flex w-full justify-between py-6 px-32 bg-white">
    <slot>
      <Tab
        @activate="(index) => handleActivate(index)"
        :default-tab="activeTab"
        :options="tabs"
      />
      <div class="flex w-fit items-center gap-5">
        <Search class="min-w-72 h-full" />
        <CButton
          v-if="$route.name !== 'Stats'"
          @click="open(filterModal)"
          variant="outline"
          :withBg="true"
        >
          <img src="@/assets/images/icons/filter.svg" alt="filter icon" />
          Filter
        </CButton>
      </div>
    </slot>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { useModalStore } from "@/store/modal";
import Tab from "@/components/common/Tab.vue";
import Search from "@/components/common/Search.vue";
import CButton from "@/components/base/CButton.vue";

const { filterModal, open } = useModalStore();

const route = useRoute();
const router = useRouter();

const tabs = ["dashboard", "homiylar", "talabalar"];
const routeNames = ["Stats", "SponsorsList", "StudentsList"];

const activeTab = computed(() =>
  routeNames.findIndex((el) => el === route.name),
);

function handleActivate(index) {
  router.push({ name: routeNames[index] });
}


</script>
