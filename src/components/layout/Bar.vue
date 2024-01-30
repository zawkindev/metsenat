<template>
  <div class="flex w-full justify-between py-6">
    <Tab
      @activate="(index) => handleActivate(index)"
      :options="['dashboard', 'homiylar', 'talabalar']"
    />
    <div class="flex w-fit items-center gap-5">
      <Search class="min-w-72 h-full" />
      <CButton variant="outline">
        <img src="icons/filter.svg" alt="filter icon" />
        Filter
      </CButton>
    </div>
  </div>
</template>

<script setup>
import Tab from "components/common/Tab.vue";
import Search from "components/common/Search.vue";
import CButton from "components/base/CButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const tabs = ["dashboard", "homiylar", "talabalar"];

function handleActivate(index) {
  let routeName;

  switch (tabs[index]) {
    case "dashboard":
      routeName = "Stats";
      break;
    case "homiylar":
      routeName = "SponsorsList";
      break;
    case "talabalar":
      routeName = "StudentsList";
      break;
  }
  router.push({ name: routeName });
}
</script>
