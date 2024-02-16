<template>
  <CModal name="edit" @close="emit('close')" class="gap-10">
    <Chr />
    <form @submit.prevent>
      <div
        v-if="variant == 'sponsor'"
        class="flex flex-col gap-10 w-full py-10 overflow-visible"
      >
        <div class="flex flex-col gap-4 w-full">
          <Tab
            :options="tabValues"
            @activate="(index) => handleSelect(index)"
          />
          <FormGroup
            id="fullName"
            v-model="form.fullName"
            placeholder="Abdullayev Abdulla Abdulla o’g’li"
            :validation="v$?.fullName?.$error"
            errorMsg="F.I.SH majburiy"
            label="F.I.Sh. (Familiya Ism Sharifingiz)"
          />
          <FormGroup
            id="phone"
            v-model="form.phone"
            placeholder="998 90 909 99 99"
            :validation="v$?.phone?.$error"
            errorMsg="Telefon raqami majburiy"
            label="Telefon raqam"
            type="tel"
          />
          <div class="flex flex-col gap-2 w-full">
            <label class="uppercase font-semibold text-sm sm:text-md"
              >homiylik summasi</label
            >
            <CSelect
              :validation="v$?.sum?.$error"
              errorMsg="talabalik turi majburiy"
              :isOpen="cselectStore.sum"
              @click="cselectStore.sum = !cselectStore.sum"
            >
              <template #selectedOption>
                <p class="flex items-center capitalize">
                  {{ form.sum || "Barchasi" }}
                </p>
              </template>
              <template #options>
                <div
                  v-for="(option, index) in sumOptions"
                  :key="option.id"
                  @click="form.sum = option.summa"
                  :class="{
                    'border-t-2': index !== 0,
                    'rounded-t-xl': index === 0,
                    'rounded-b-xl': index === sumOptions.length - 1,
                  }"
                  class="px-3 py-3 cursor-pointer items-center flex text-lg hover:bg-gray-100"
                >
                  <span>{{ option.summa }}</span>
                </div>
              </template>
            </CSelect>
          </div>
        </div>
      </div>
      <!-- <div -->
      <!--   v-if="variant == 'student'" -->
      <!--   class="flex flex-col gap-10 w-full py-10 overflow-visible" -->
      <!-- > -->
      <!--   <div class="flex flex-col gap-2 w-full"> -->
      <!--     <label class="uppercase font-semibold text-sm sm:text-lg" -->
      <!--       >talabalik turi</label -->
      <!--     > -->
      <!---->
      <!--     <CSelect -->
      <!--       :validation="v$?.studentType?.$error" -->
      <!--       errorMsg="talabalik turi majburiy" -->
      <!--       :isOpen="cselectStore.studentType" -->
      <!--       @click="cselectStore.studentType = !cselectStore.studentType" -->
      <!--     > -->
      <!--       <template #selectedOption> -->
      <!--         <p class="flex items-center capitalize"> -->
      <!--           {{ form.studentType.value || "Barchasi" }} -->
      <!--         </p> -->
      <!--       </template> -->
      <!--       <template #options> -->
      <!--         <div -->
      <!--           v-for="(option, index) in studentStore.types" -->
      <!--           :key="option.id" -->
      <!--           @click="form.studentType = option" -->
      <!--           :class="{ -->
      <!--             'border-t-2': index !== 0, -->
      <!--             'rounded-t-xl': index === 0, -->
      <!--             'rounded-b-xl': index === studentStore.types.length - 1, -->
      <!--           }" -->
      <!--           class="px-3 py-3 cursor-pointer items-center flex text-lg hover:bg-gray-100" -->
      <!--         > -->
      <!--           <span>{{ option.value }}</span> -->
      <!--         </div> -->
      <!--       </template> -->
      <!--     </CSelect> -->
      <!--   </div> -->
      <!--   <div class="flex flex-col gap-2 w-full"> -->
      <!--     <label for="id" class="uppercase font-semibold text-sm sm:text-lg" -->
      <!--       >OTM</label -->
      <!--     > -->
      <!--     <CSelect -->
      <!--       :validation="v$?.institute?.$error" -->
      <!--       errorMsg="OTM nomi raqam majburiy" -->
      <!--       v-model="form.institute" -->
      <!--       :isOpen="cselectStore.institute" -->
      <!--       @click="cselectStore.institute = !cselectStore.institute" -->
      <!--     > -->
      <!--       <template #selectedOption> -->
      <!--         <p class="flex items-center"> -->
      <!--           {{ form.institute?.name || "OTMni tanlang" }} -->
      <!--         </p> -->
      <!--       </template> -->
      <!--       <template #options> -->
      <!--         <div -->
      <!--           v-for="(option, index) in otmList" -->
      <!--           :key="index" -->
      <!--           @click="form.institute = option" -->
      <!--           :class="{ -->
      <!--             'border-t-2': index !== 0, -->
      <!--             'rounded-t-xl': index === 0, -->
      <!--             'rounded-b-xl': index === otmList.length - 1, -->
      <!--           }" -->
      <!--           class="px-3 py-3 cursor-pointer items-center flex text-lg hover:bg-gray-100" -->
      <!--         > -->
      <!--           <span>{{ option.name }}</span> -->
      <!--         </div> -->
      <!--       </template> -->
      <!--     </CSelect> -->
      <!--   </div> -->
      <!-- </div> -->
    </form>
  </CModal>
</template>

<script setup>
import { computed, onBeforeMount, reactive, ref } from "vue";
import { useFetch } from "@/composables/useFetch.js";
import { useVuelidate } from "@vuelidate/core";
import { useCSelectStore } from "@/store/cselect.js";
import { useStudentStore } from "@/store/student.js";
import { required } from "@vuelidate/validators";
import CModal from "@/components/base/CModal.vue";
import CSelect from "@/components/base/CSelect.vue";
import CButton from "@/components/base/CButton.vue";
import Chr from "@/components/base/Chr.vue";
import RadioGroup from "@/components/common/RadioGroup.vue";
import FormGroup from "@/components/common/FormGroup.vue";

import Tab from "@/components/common/Tab.vue";

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
const sumOptions = computed(() =>
  Object.entries(tariffList.value).map(([_, value]) => value),
);

const { get } = useFetch();

const applicationTypes = [
  "Yangi",
  "Moderatsiyada",
  "Tasdiqlangan",
  "Bekor qilingan",
];

const tabValues = ["jismoniy shaxs", "yuridik shaxs"];
const selectedTab = ref(0);

function handleSelect(index) {
  selectedTab.value = index;
  console.log(index);
}

const tariffList = ref([]);
const otmList = ref([]);

const form = reactive({
  fullName: "",
  phone: "",
  sum: "",
  isLegal: "",
  firm: "",
  comment: "",
});

const rules = computed(() => {
  return {
    fullName: { required },
    phone: { required },
  };
});

const v$ = useVuelidate(rules, form);

async function handleSubmit() {
  const result = await v$.value.$validate();

  if (!result) {
    console.log("faail already: ", result);
    return;
  }
  console.log("Bu yerda post request bo'lishi mumkin edi");
}

const fetchData = async () => {
  try {
    otmList.value = await get(`institute-list`);
    tariffList.value = await get(`tariff-list`);
    console.log("tariffList: ", tariffList.value);
    console.log(sumOptions.value);
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  fetchData();
});
</script>
