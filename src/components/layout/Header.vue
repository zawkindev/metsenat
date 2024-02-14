<template>
  <div
    class="header w-full z-10 bg-white py-2 px-6 sm:py-3 sm:px-8 md:px-16 lg:px-32 custom-shadow text-base select-none"
  >
    <div v-if="variant == 'default'" class="flex justify-between select-none">
      <div class="flex items-center gap-2">
        <RouterLink class="flex flex-shrink-0 gap-2" :to="{ name: 'Home' }">
          <img
            alt="logo"
            class="cursor-pointer w-32 sm:w-44"
            src="@/assets/images/logo.svg"
          />
          <Badge variant="danger" with-bg> <p class="text-sm">club</p> </Badge>
        </RouterLink>
      </div>

      <div class="md:hidden rounded-lg relative">
        <img
          @click="menuOpen = !menuOpen"
          class="w-12 h-auto"
          alt="menu icon"
          src="@/assets/images/icons/menu.svg"
        />
        <div
          v-show="menuOpen"
          class="absolute bg-white h-64 p-4 justify-between right-0 rounded-lg shadow-lg whitespace-nowrap flex flex-col gap-3"
        >
          <div>
            <p class="text-lg cursor-pointer active:text-blue-500">Asosiy</p>
            <p class="text-lg cursor-pointer active:text-blue-500">Grantlar</p>
            <p class="text-lg cursor-pointer active:text-blue-500">
              Soliq imtiyozlari
            </p>
          </div>
          <div class="flex flex-col items-center justify-center gap-4">
            <RouterLink
              :to="{ name: 'Auth' }"
              class="flex items-center gap-2 cursor-pointer ml-[-10p]"
            >
              <img alt="log in icon" src="@/assets/images/icons/log-in.svg" />
              <p>Kirish</p>
            </RouterLink>

            <CButton @click="$router.push({ name: 'Auth' })" variant="outline">
              Ro'yhatdan o'tish
            </CButton>
          </div>
        </div>
      </div>
      <div
        class="hidden md:flex items-center text-base whitespace-nowrap gap-5 lg:gap-10"
      >
        <p>Asosiy</p>
        <p>Grantlar</p>
        <p>Soliq imtiyozlari</p>

        <RouterLink :to="{ name: 'Auth' }">
          <div class="flex items-center gap-2 cursor-pointer">
            <img alt="log in icon" src="@/assets/images/icons/log-in.svg" />
            <p>Kirish</p>
          </div>
        </RouterLink>

        <RouterLink :to="{ name: 'Auth' }">
          <CButton variant="outline"> Ro'yhatdan o'tish </CButton>
        </RouterLink>
      </div>
    </div>

    <div
      v-if="variant == 'withoutMenu'"
      class="flex justify-between items-center"
    >
      <RouterLink :to="{ name: 'Stats' }">
        <img class="sm:hidden w-14 h-auto" alt="logo" src="/logo.svg" />
        <img
          class="hidden sm:block w-44 h-auto"
          alt="logo"
          src="@/assets/images/logo2.svg"
        />
      </RouterLink>
      <div class="header flex gap-5">
        <div class="sm:hidden flex gap-5 relative">
          <Search />
          <img
            @click="menuOpen = !menuOpen"
            class="w-12 h-auto"
            alt="menu icon"
            src="@/assets/images/icons/menu.svg"
          />

          <div
            v-show="menuOpen"
            class="absolute flex flex-col bg-white pr-8 pl-4 p-2 right-0 top-14 rounded-lg shadow-lg whitespace-nowrap"
          >
            <RouterLink
              :to="{ name: 'Stats' }"
              class="text-lg cursor-pointer active:text-blue-500"
            >
              Dashboard
            </RouterLink>

            <RouterLink
              :to="{ name: 'SponsorsList' }"
              class="text-lg cursor-pointer active:text-blue-500"
            >
              Homiylar
            </RouterLink>

            <RouterLink
              :to="{ name: 'StudentsList' }"
              class="text-lg cursor-pointer active:text-blue-500"
            >
              Talabalar
            </RouterLink>
            <p class="text-lg cursor-pointer active:text-blue-500">Profile</p>
            <p class="text-lg cursor-pointer active:text-blue-500">Log out</p>
          </div>
        </div>

        <div class="hidden sm:flex gap-5">
          <div
            class="flex bg-gray-200 p-1 items-center rounded-md cursor-pointer"
          >
            <span class="px-2 sm:px-5 font-bold">Shohruz</span>
            <div
              class="px-1 pt-2 pb-0 flex items-end bg-success-200 rounded h-fit"
            >
              <img src="@/assets/images/icons/user1.svg" />
            </div>
          </div>
          <button @click="logOut">
            <img alt="log out icon" src="@/assets/images/icons/log-out.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Badge from "@/components/common/Badge.vue";
import CButton from "@/components/base/CButton.vue";
import Search from "@/components/common/Search.vue";
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";

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

const menuOpen = ref(false);

window.addEventListener("click", (e) => {
  if (!e.target.closest(".header")) {
    menuOpen.value = false;
  }
});

function logOut() {
  localStorage.removeItem("access-token");
  localStorage.removeItem("toast-showed");
  router.push({ name: "Auth" });
}
</script>
