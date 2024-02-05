<template>
  <div class="flex flex-col gap-12">
    <div class="flex w-full justify-center items-center">
      <RouterLink class="flex gap-2" :to="{ name: 'Home' }">
        <img src="@/assets/images/logo.svg" />
        <Badge variant="danger" :withBg="true"> club </Badge>
      </RouterLink>
    </div>

    <form class="p-8 bg-white rounded-xl w-fit">
      <h3 class="text-3xl">Kirish</h3>
      <div class="flex flex-col gap-6 mt-11">
        <div class="flex flex-col gap-2">
          <label for="login" class="uppercase font-semibold">login</label>
          <CInput id="login" v-model="form.name" placeholder="Login" />
          <span v-if="v$?.name?.$error" class="text-red-600"
            >Login is required.</span
          >
        </div>

        <div class="flex flex-col gap-2">
          <label for="login" class="uppercase font-semibold">parol</label>
          <CInput
            id="parol"
            v-model="form.password"
            placeholder="Password"
            type="password"
          />
          <span v-if="v$?.password?.$error" class="text-red-600"
            >Password is required.</span
          >
        </div>
        <CButton @click.prevent="handleSubmit">Kirish</CButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { useFetch } from "@/composables/useFetch";
import { useFormValidation } from "@/composables/useValidate";
import Badge from "@/components/common/Badge.vue";
import CInput from "@/components/base/CInput.vue";
import CButton from "@/components/base/CButton.vue";

const { post } = useFetch();

const router = useRouter();

const { form, validateSubmit, v$ } = useFormValidation();

async function handleSubmit() {
  const result = validateSubmit();
  if (!result) {
    alert("The form has errors");

    return;
  }
  postData();
}
const postData = async () => {
  try {
    const data = await post("auth/login/", {
      username: form.name,
      password: form.password,
    });

    console.log("data: ", data);
    console.log("login: ", form.name, "password: ", form.password);


    if (data.access) {
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      router.push({ name: "Stats" });
    }
  } catch (error) {
    console.error("Login error", error.message);
  }
};
</script>
