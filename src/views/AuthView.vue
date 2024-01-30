<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center gap-10 bg-secondary-100"
  >
    <div class="flex items-center gap-2">
      <img src="images/logo.svg" />
      <Badge variant="danger"> club </Badge>
    </div>

    <form @submit="handleSubmit" class="p-8 bg-white rounded-xl">
      <h3 class="text-3xl">Kirish</h3>
      <div class="flex flex-col gap-6 mt-11">
        <CInput v-model="login" label="login" placeholder="admin" />
        <CInput
          v-model="parol"
          label="parol"
          placeholder="admin"
          type="password"
        />
        <CButton>Kirish</CButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import Badge from "components/common/Badge.vue";
import CInput from "components/base/CInput.vue";
import CButton from "components/base/CButton.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const login = ref("");
const parol = ref("");

function handleSubmit() {
  if (login.value === "admin" && parol.value === "admin") {
    localStorage.setItem("access-token", "7803087efjdfa");
    router.push("/");
  }
}
</script>
