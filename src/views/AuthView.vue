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
          <CInput
            id="login"
            v-model="login"
            placeholder="admin"
          />
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
import Badge from "components/common/Badge.vue";
import CInput from "components/base/CInput.vue";
import CButton from "components/base/CButton.vue";
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const login = ref("");
const parol = ref("");

function handleSubmit() {
  if (login.value === "admin" && parol.value === "admin") {
    console.log("SUCCCCCCCCEEEESSSSSSSSS");
    localStorage.setItem("access-token", "7803087efjdfa");
    router.push({ name: "Home" });
  } else {
    alert("login or password is incorrect!");
  }
}
</script>
