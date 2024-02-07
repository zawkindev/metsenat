<template>
  <TitleBar>
    <p class="text-xl font-bold" @click="$router.go(-1)">Talaba qo'shish</p>
  </TitleBar>

  <form
    class="flex flex-col w-7/12 mx-auto bg-white p-10 mt-14 gap-8 rounded-lg"
  >
    <div class="flex justify-between items-center gap-10">
      <FormGroup
        :validation="v$?.name?.$error"
        errorMsg="F.I.SH majburiy"
        id="full_name"
        v-model="student.full_name"
        placeholder="Abdullayev Abdulla Abdulla o'g'li"
        label="f.i.sh.(familiya ism sharif)"
      />
      <FormGroup
        :validation="v$?.phone?.$error"
        errorMsg="Telefon raqam majburiy"
        id="phone"
        v-model="student.phone"
        placeholder="+998 "
        label="telefon raqam"
      />
    </div>
    <CSelect
      :validation="v$?.name?.$error"
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
    <div class="flex justify-between w-full">
      <div class="flex flex-col gap-2 w-full">
        <label :for="type" class="uppercase font-semibold"
          >talabalik turi</label
        >
        <CSelect
          :validation="v$?.name?.$error"
          errorMsg="OTM nomi raqam majburiy"
          v-model="form.studentType"
          :isOpen="cselectStore.studentType"
          @click="cselectStore.studentType = !cselectStore.studentType"
        >
          <template #selectedOption>
            <p class="flex items-center capitalize">
              {{ student.type || "Barchasi" }}
            </p>
          </template>
          <template #options>
            <div
              v-for="(option, index) in studentTypes"
              :key="index"
              @click="student.type = option"
              :class="{
                'border-t-2': index !== 0,
                'rounded-t-xl': index === 0,
                'rounded-b-xl': index === studentTypes.length - 1,
              }"
              class="px-3 py-3 cursor-pointer items-center flex text-lg hover:bg-gray-100"
            >
              <span>{{ option }}</span>
            </div>
          </template>
        </CSelect>
      </div>
    </div>
  </form>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useMetsenatStore } from "@/store/store.js";
import { useCSelectStore } from "@/store/cselect.js";
import { useFetch } from "@/composables/useFetch";
import { useFormValidation } from "@/composables/useValidate";
import TitleBar from "@/components/layout/TitleBar.vue";
import CSelect from "@/components/base/CSelect.vue";
import FormGroup from "@/components/common/FormGroup.vue";

const { get } = useFetch();
const { form, validateSubmit, v$ } = useFormValidation();

const store = useMetsenatStore();
const cselectStore = useCSelectStore();

const generataId = () => {
  return Math.random().toString(36)[(0, 9)];
};

const response = ref();

const student = ref({
  id: generataId(),
  full_name: "",
  phone: "",
  institute: "",
  type: "",
  contract: "",
});

const studentTypes = ["Bakalavr", "Magistr"];

// const addStudent = async () => {
//   try {
//     console.log(selectedInstitute.value);
//     const response = await post(`student-create/`, {
//       id: user.value.id,
//       institute: selectedInstitute.value.id,
//       full_name: user.value.full_name,
//       phone: user.value.phone,
//       type: user.value.type?.name === "Bakalavr" ? 1 : 2,
//       contract: user.value.contract,
//     });
//
//     user.value = {
//       id: generataId(),
//       full_name: "",
//       phone: "",
//       institute: "",
//       type: "",
//       contract: "",
//     };
//     router.push({ name: "Student", params: { id: response.id } });
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

const fetchData = async () => {
  try {
    response.value = await get(`institute-list`);
    store.instituteList = response.value;

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  fetchData();
});
</script>
