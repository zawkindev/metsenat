<template>
  <div class="flex flex-col gap-12">
    <div class="flex w-full justify-center items-center">
      <RouterLink class="flex gap-2" :to="{ name: 'Home' }">
        <img src="images/logo.svg" />
        <Badge variant="danger"> club </Badge>
      </RouterLink>
    </div>

    <form class="p-8 bg-white rounded-xl w-fit">
      <h3 class="text-3xl">Kirish</h3>
      <div class="flex flex-col gap-6 mt-11">
        <div class="flex flex-col gap-2">
          <label for="login" class="uppercase font-semibold">login</label>
          <CInput id="login" v-model="login" placeholder="admin" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="login" class="uppercase font-semibold">parol</label>
          <CInput
            id="parol"
            v-model="parol"
            placeholder="admin"
            type="password"
          />
        </div>
        <CButton @click.prevent="handleSubmit">Kirish</CButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth";
import { useFetch } from "@/composables/useFetch";
import Badge from "components/common/Badge.vue";
import CInput from "components/base/CInput.vue";
import CButton from "components/base/CButton.vue";

const { post } = useFetch();

const router = useRouter();

const authStore = useAuthStore();

const login = ref("");
const parol = ref("");

const handleSubmit = async () => {
  try {
    const data = await post("auth/login/", {
      username: username.value,
      password: password.value,
    });

    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);

    authStore.setToken(data);

    router.push({ name: "Dashboard" });
  } catch (error) {
    console.error("Login error", error.message);
  }
};
</script>
