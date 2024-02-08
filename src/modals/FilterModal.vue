<template>
  <CModal @close="emit('close')" class="gap-10">
    <h3 class="text-3xl font-bold mb-5">Filter</h3>
    <Chr />
    <form @submit.prevent>
      <div
        v-if="variant == 'sponsor'"
        class="flex flex-col gap-10 w-full py-10 overflow-visible"
      >
        <div class="flex flex-col gap-2 w-full">
          <label :for="type" class="uppercase font-semibold"
            >talabalik turi</label
          >
          <CSelect
            :validation="v$?.application?.$error"
            errorMsg="ariza holati majburiy"
            :isOpen="cselectStore.application"
            @click="cselectStore.application = !cselectStore.application"
          >
            <template #selectedOption>
              <p class="flex items-center capitalize">
                {{ form.application || "Barchasi" }}
              </p>
            </template>
            <template #options>
              <div
                v-for="option in applicationTypes"
                :key="option"
                @click="form.application = option"
                :class="{
                  'border-t-2': index !== 0,
                  'rounded-t-xl': index === 0,
                  'rounded-b-xl': index === applicationTypes.length - 1,
                }"
                class="px-3 py-3 cursor-pointer items-center flex text-lg hover:bg-gray-100"
              >
                <span>{{ option }}</span>
              </div>
            </template>
          </CSelect>
        </div>
        <RadioGroup
          :options="Object.entries(checkBoxValues).map(([_, value]) => value)"
          :validation="v$?.amount?.$error"
          errorMsg="summa majburiy"
          @select="(item) => (form.amount = item)"
          :activeOption="form.amount"
        >
          To‘lov summasi
        </RadioGroup>
        <FormGroup
          id="sana"
          label="sana"
          placeholder="kk.oo.yyyy - kk.oo.yyyy"
          type="date"
          v-model="form.date"
          :validation="v$?.date?.$error"
          errorMsg="sana majburiy"
        />
        <div class="flex w-full justify-end gap-6">
          <CButton class="bg-white border-blue-400 border-2 group">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icons8-broom 2">
                <g id="Group 20062">
                  <path
                    id="Vector"
                    d="M19.6449 10.0046C19.387 9.88988 16.972 8.81484 16.7132 8.7001C15.4988 8.1595 14.0765 8.70626 13.5366 9.91991L20.8647 13.1812C21.4053 11.9668 20.8586 10.5445 19.6449 10.0046ZM21.4161 2.07737C21.0111 1.89717 20.5806 1.94337 20.4489 2.19057L16.9403 8.80104L19.3076 9.85375L21.9798 2.87132C22.0753 2.60795 21.8212 2.25757 21.4161 2.07737Z"
                    class="group-hover:stroke-white stroke-blue-600"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M19.6772 14.2177C18.1732 18.7966 16.2264 21.167 16.2264 21.167C16.2264 21.167 9.52132 20.9236 5.17188 15.5546C6.06979 15.6185 11.6675 15.1372 13.5958 11.4185"
                    class="group-hover:stroke-white stroke-blue-600"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M7.77051 18.0255C7.77051 18.0255 9.89439 17.7455 11.0341 16.5549C10.1223 18.2268 9.03653 18.861 9.03653 18.861L7.77051 18.0255ZM10.7646 19.6996C10.7646 19.6996 12.4349 19.7184 15.2765 17.1009C14.2546 19.4312 12.922 20.5622 12.922 20.5622L10.7646 19.6996Z"
                    class="group-hover:stroke-white stroke-blue-600"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g id="Vector_4">
                    <path
                      d="M3.20337 9.04424C3.27136 9.01608 3.34423 9.00159 3.41782 9.00159C3.49142 9.00159 3.56429 9.01608 3.63228 9.04424C3.70027 9.07241 3.76205 9.11369 3.81409 9.16572C3.86612 9.21776 3.9074 9.27954 3.93557 9.34753C3.96373 9.41552 3.97822 9.4884 3.97822 9.56199C3.97822 9.63558 3.96373 9.70845 3.93557 9.77644C3.9074 9.84444 3.86612 9.90621 3.81409 9.95825C3.76205 10.0103 3.70027 10.0516 3.63228 10.0797C3.56429 10.1079 3.49142 10.1224 3.41782 10.1224C3.34423 10.1224 3.27136 10.1079 3.20337 10.0797C3.13538 10.0516 3.0736 10.0103 3.02156 9.95825C2.96952 9.90621 2.92824 9.84444 2.90008 9.77644C2.87192 9.70845 2.85742 9.63558 2.85742 9.56199C2.85742 9.4884 2.87192 9.41552 2.90008 9.34753C2.92824 9.27954 2.96952 9.21776 3.02156 9.16572C3.0736 9.11369 3.13538 9.07241 3.20337 9.04424Z"
                      class="group-hover:fill-white fill-blue-600"
                    />
                    <path
                      d="M4.83485 9.48461C4.90491 9.41455 4.99994 9.37519 5.09903 9.37519C5.19811 9.37519 5.29314 9.41455 5.3632 9.48461C5.43327 9.55468 5.47263 9.6497 5.47263 9.74879C5.47263 9.84787 5.43327 9.9429 5.3632 10.013C5.29314 10.083 5.19811 10.1224 5.09903 10.1224C4.99994 10.1224 4.90491 10.083 4.83485 10.013C4.76479 9.9429 4.72543 9.84787 4.72543 9.74879C4.72543 9.6497 4.76479 9.55468 4.83485 9.48461Z"
                      class="group-hover:fill-white fill-blue-600"
                    />
                    <path
                      d="M4.25179 11.1432C4.42695 10.968 4.66451 10.8696 4.91223 10.8696C5.15994 10.8696 5.39751 10.968 5.57266 11.1432C5.74782 11.3183 5.84623 11.5559 5.84623 11.8036C5.84623 12.0513 5.74782 12.2889 5.57266 12.464C5.39751 12.6392 5.15994 12.7376 4.91223 12.7376C4.66451 12.7376 4.42695 12.6392 4.25179 12.464C4.07663 12.2889 3.97822 12.0513 3.97822 11.8036C3.97822 11.5559 4.07663 11.3183 4.25179 11.1432Z"
                      class="group-hover:fill-white fill-blue-600"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <p class="text-xl text-blue-600 group-hover:text-white">tozalash</p>
          </CButton>
          <CButton type="submit" @click.prevent="handleSubmit()">
            <img alt="eye icon" src="@/assets/images/icons/eye1.svg" />
            <p class="text-xl whitespace-nowrap">natijani ko'rish</p>
          </CButton>
        </div>
      </div>
      <div
        v-if="variant == 'student'"
        class="flex flex-col gap-10 w-full py-10 overflow-visible"
      >
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
        <div class="flex flex-col gap-2 w-full">
          <label :for="type" class="uppercase font-semibold">OTM</label>
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
                v-for="(option, index) in otmList"
                :key="index"
                @click="form.institute = option"
                :class="{
                  'border-t-2': index !== 0,
                  'rounded-t-xl': index === 0,
                  'rounded-b-xl': index === otmList.length - 1,
                }"
                class="px-3 py-3 cursor-pointer items-center flex text-lg hover:bg-gray-100"
              >
                <span>{{ option.name }}</span>
              </div>
            </template>
          </CSelect>
        </div>
      </div>
    </form>
  </CModal>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useFormValidation } from "@/composables/useValidate";
import { useFetch } from "@/composables/useFetch.js";
import { useCSelectStore } from "@/store/cselect.js";
import { useStudentStore } from "@/store/student.js";
import CModal from "@/components/base/CModal.vue";
import CSelect from "@/components/base/CSelect.vue";
import CButton from "@/components/base/CButton.vue";
import Chr from "@/components/base/Chr.vue";
import RadioGroup from "@/components/common/RadioGroup.vue";
import FormGroup from "@/components/common/FormGroup.vue";

defineProps({
  variant: {
    type: String,
    validator(value) {
      return ["student", "sponsor"].includes(value);
    },
  },
});

const emit = defineEmits(["close"]);

const cselectStore = useCSelectStore();
const studentStore = useStudentStore();

const { get } = useFetch();

const { form, validateSubmit, v$ } = useFormValidation();

const applicationTypes = [
  "Yangi",
  "Moderatsiyada",
  "Tasdiqlangan",
  "Bekor qilingan",
];

const checkBoxValues = ref([]);
const otmList = ref([]);

async function handleSubmit() {
  const result = validateSubmit();
  if (!result) {
    alert("The form has errors");
    return;
  }
}

const fetchData = async () => {
  try {
    otmList.value = await get(`institute-list`);
    checkBoxValues.value = await get(`tariff-list`);
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  fetchData();
});
</script>
