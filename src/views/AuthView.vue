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
        <FormGroup
          id="login"
          v-model="form.name"
          placeholder="Login"
          :validation="v$?.name?.$error"
          errorMsg="Login majburiy"
          label="login"
        />

        <FormGroup
          id="password"
          v-model="form.password"
          placeholder="Password"
          type="password"
          :validation="v$?.password?.$error"
          errorMsg="Parol majburiy"
          label="parol"
        />
        <p v-show="data?.detail" class="text-red-600">Akkount topilmadi</p>
        <div class="flex">

        <ReCaptcha />
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
import { ref } from "vue";
import Badge from "@/components/common/Badge.vue";
import CButton from "@/components/base/CButton.vue";
import FormGroup from "@/components/common/FormGroup.vue";
import ReCaptcha from "@/components/common/ReCaptcha.vue";

const { post } = useFetch();

const router = useRouter();

const { form, validateSubmit, v$ } = useFormValidation();

const data = ref();

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
    data.value = await post("auth/login/", {
      username: form.name,
      password: form.password,
    });

    console.log("data: ", data.value);
    console.log("login: ", form.name, "password: ", form.password);

    if (data.value.access) {
      localStorage.setItem("access_token", data.value.access);
      localStorage.setItem("refresh_token", data.value.refresh);
      router.push({ name: "Stats" });
    }
  } catch (error) {
    console.error("Login error", error.message);
  }
};
</script>
