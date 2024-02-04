<template>
  <div class="w-full z-10 bg-white py-5 px-32 custom-shadow select-none">
    <div v-if="variant == 'default'" class="flex justify-between select-none">
      <div class="flex items-center gap-2">
        <RouterLink class="flex gap-2" :to="{ name: 'Home' }">
          <img src="images/logo.svg" />
          <Badge variant="danger"> club </Badge>
        </RouterLink>
      </div>

      <div class="flex items-center gap-10">
        <p>Asosiy</p>
        <p>Grantlar</p>
        <p>Soliq imtiyozlari</p>

        <RouterLink :to="{ name: 'Auth' }">
          <div class="flex items-center gap-2 cursor-pointer">
            <img src="icons/log-in.svg" />
            <p>Kirish</p>
          </div>
        </RouterLink>

        <RouterLink :to="{ name: 'Auth' }">
          <CButton variant="outline"> Ro'yhatdan o'tish </CButton>
        </RouterLink>
      </div>
    </div>

    <div v-if="variant == 'withoutMenu'" class="flex justify-between">
      <RouterLink :to="{ name: 'Stats' }">
        <img src="images/logo2.svg" />
      </RouterLink>
      <div class="flex gap-10">
        <div
          class="flex bg-gray-200 p-1 items-center rounded-md cursor-pointer"
        >
          <span class="px-5 font-bold">Shohruz</span>
          <div
            class="px-1 pt-2 pb-0 flex items-end bg-success-200 rounded h-fit"
          >
            <img src="icons/user1.svg" />
          </div>
        </div>
        <button @click="logOut">
          <img class="cursor-pointer" src="icons/log-out.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Badge from "components/common/Badge.vue";
import CButton from "components/base/CButton.vue";
import { RouterLink, useRouter } from "vue-router";

defineProps({
  variant: {
    type: String,
    required: true,
    validator(value) {
      return ["default", "withoutMenu"].includes(value);
    },
  },
});

const router = useRouter();

function logOut() {
  localStorage.removeItem("access-token");
  router.push({ name: "Auth" });
}
</script>

<style>
p {
  cursor: pointer;
}
</style>
