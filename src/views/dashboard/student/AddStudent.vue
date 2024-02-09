<template>
  <TitleBar>
    <p class="text-xl font-bold" @click="$router.go(-1)">Talaba qo'shish</p>
  </TitleBar>

  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col w-7/12 mx-auto bg-white p-10 mt-14 gap-8 rounded-lg"
  >
    <div class="flex justify-between items-center gap-10">
      <FormGroup
        :validation="v$?.name?.$error"
        errorMsg="F.I.SH majburiy"
        id="full_name"
        v-model="form.name"
        placeholder="Abdullayev Abdulla Abdulla o'g'li"
        label="f.i.sh.(familiya ism$ sharif)"
      />
      <FormGroup
        :validation="v$?.phone?.$error"
        errorMsg="Telefon raqam majburiy"
        id="phone"
        v-model="form.phone"
        placeholder="998 "
        label="telefon raqam"
      />
    </div>
    <CSelect
      :validation="v$?.institute?.$error"
      errorMsg="OTM nomi raqam majburiy"
      v-model="form.institute"
      :isOpen="cselectStore.institute"
      @click="cselectStore.institute = !cselectStore.institute"
    >
      <template #selectedOption>
        <p class="flex items-center">
          {{ form.institute?.name || "OTMni tanlang" }}
        </p>
      </template>
      <template #options>
        <div
          v-for="(option, index) in response"
          :key="index"
          @click="form.institute = option"
          :class="{
            'border-t-2': index !== 0,
            'rounded-t-xl': index === 0,
            'rounded-b-xl': index === response.length - 1,
          }"
          class="px-3 py-3 cursor-pointer items-center flex text-lg hover:bg-gray-100"
        >
          <span>{{ option.name }}</span>
        </div>
      </template>
    </CSelect>
    <div class="flex justify-between w-full gap-10">
      <div class="flex flex-col gap-2 w-full">
        <label :for="type" class="uppercase font-semibold"
          >talabalik turi</label
        >
        <CSelect
          :validation="v$?.studentType?.$error"
          errorMsg="talabalik turi majburiy"
          :isOpen="cselectStore.studentType"
          @click="cselectStore.studentType = !cselectStore.studentType"
        >
          <template #selectedOption>
            <p class="flex items-center capitalize">
              {{ form.studentType.value || "Barchasi" }}
            </p>
          </template>
          <template #options>
            <div
              v-for="option in studentStore.types"
              :key="option.id"
              @click="form.studentType = option"
              :class="{
                'border-t-2': index !== 0,
                'rounded-t-xl': index === 0,
                'rounded-b-xl': index === studentStore.types.length - 1,
              }"
              class="px-3 py-3 cursor-pointer items-center flex text-lg hover:bg-gray-100"
            >
              <span>{{ option.value }}</span>
            </div>
          </template>
        </CSelect>
      </div>
      <FormGroup
        :validation="v$?.contract?.$error"
        errorMsg="Kontrakt summa majburiy"
        id="phone"
        v-model="form.contract"
        placeholder="summani kiriting"
        label="Kontrakt summa"
      />
      <pre>
      {{ form.contract }}
      </pre>
    </div>
    <div class="flex justify-end">
      <CButton class="primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.9999 11.9999H4.00007"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 4V19.9999"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="font-bold text-xl"> qo'shish </span>
      </CButton>
    </div>
  </form>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useStudentStore } from "@/store/student.js";
import { useCSelectStore } from "@/store/cselect.js";
import { useFetch } from "@/composables/useFetch";
import { useFormValidation } from "@/composables/useValidate";
import TitleBar from "@/components/layout/TitleBar.vue";
import CSelect from "@/components/base/CSelect.vue";
import CButton from "@/components/base/CButton.vue";
import FormGroup from "@/components/common/FormGroup.vue";

const { get, post } = useFetch();
const { form, validateSubmit, v$ } = useFormValidation();

const router = useRouter();

const studentStore = useStudentStore();
const cselectStore = useCSelectStore();

const response = ref();

async function handleSubmit() {
  const isFormCorrect = await v$.value.$touch();
  if (!isFormCorrect) {
    return;
  }
  await addStudent();
}

const addStudent = async () => {
  try {
    const response = await post(`student-create/`, {
      full_name: form.name,
      type: form.studentType.id,
      phone: String(form.phone),
      institute: form.institute.name,
      contract: form.contract,
    });

    console.log("add studeeeent: ", response);

    router.push({ name: "StudentsList" });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const fetchData = async () => {
  try {
    response.value = await get(`institute-list`);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  fetchData();
});
</script>
