<template>
  <div class="flex flex-col gap-16">
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
        <div class="flex relative">
          <ReCaptcha @verify="(response) => (form.recaptcha = response)" />
          <span
            v-if="v$?.recaptcha?.$error"
            class="text-red-600 absolute bottom-[-22px]"
            >ReCaptcha majburiy</span
          >
        </div>
        <CButton @click.prevent="handleSubmit">Kirish</CButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useFetch } from "@/composables/useFetch";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Badge from "@/components/common/Badge.vue";
import CButton from "@/components/base/CButton.vue";
import FormGroup from "@/components/common/FormGroup.vue";
import ReCaptcha from "@/components/common/ReCaptcha.vue";

const { post } = useFetch();

const router = useRouter();

const data = ref();

const form = reactive({
  name: "",
  password: "",
  recaptcha: "",
});

const rules = computed(() => {
  return {
    name: { required },
    password: { required },
    recaptcha: { required },
  };
});

const v$ = useVuelidate(rules, form);

async function handleSubmit() {
  const result = await v$.value.$validate();

  if (!result) {
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
