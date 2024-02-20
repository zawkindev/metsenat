<template>
  <CModal name="edit" @close="emit('close')" class="gap-10">
    <Chr />
    <form @submit.prevent="handleSubmit">
      <div
        v-if="variant == 'sponsor'"
        class="flex flex-col gap-8 w-full py-10 overflow-visible"
      >
        <div class="flex flex-col gap-8 w-full">
          <Tab
            :options="tabValues"
            :default-tab="Number(form.isLegal)"
            @activate="(index) => handleSelect(index)"
          />
          <FormGroup
            id="fullName"
            v-model="form.fullName"
            :value="form.fullName"
            placeholder="Abdullayev Abdulla Abdulla o’g’li"
            :validation="v$?.fullName?.$error"
            errorMsg="F.I.SH majburiy"
            label="F.I.Sh. (Familiya Ism Sharifingiz)"
          />
          <FormGroup
            id="phone"
            v-model="form.phone"
            :value="form.phone"
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
          <FormGroup
            v-if="form.isLegal"
            id="firm"
            v-model="form.firm"
            :value="form.firm"
            placeholder="Commeta"
            :validation="v$?.firm?.$error"
            errorMsg="Tashkilot nomi majburiy"
            label="Tashkilot nomi"
          />
        </div>
      </div>
      <div
        v-if="variant == 'student'"
        class="flex flex-col gap-8 w-full py-10 overflow-visible"
      >
        <FormGroup
          id="fullName"
          v-model="form.fullName"
          :value="form.fullName"
          placeholder="Abdullayev Abdulla Abdulla o’g’li"
          :validation="v$?.fullName?.$error"
          errorMsg="F.I.SH majburiy"
          label="F.I.Sh. (Familiya Ism Sharifingiz)"
        />
        <FormGroup
          id="phone"
          v-model="form.phone"
          :value="form.phone"
          placeholder="998 90 909 99 99"
          :validation="v$?.phone?.$error"
          errorMsg="Telefon raqami majburiy"
          label="Telefon raqam"
          type="tel"
        />
        <div class="flex flex-col gap-2 w-full">
          <label for="id" class="uppercase font-semibold text-sm sm:text-md"
            >OTM</label
          >
          <CSelect
            :validation="v$?.institute?.$error"
            errorMsg="OTM nomi majburiy"
            v-model="form.institute"
            :value="form.institute"
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
        <FormGroup
          id="contract"
          v-model="form.contract"
          :value="form.contract"
          placeholder="0"
          :validation="v$?.contract?.$error"
          errorMsg="Kontrakt miqdori majburiy"
          label="Kontrakt miqdori"
          type="tel"
        />
        <div class="flex flex-col gap-2 w-full">
          <label class="uppercase font-semibold text-sm sm:text-lg"
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
                {{ form.studentType?.value || "Barchasi" }}
              </p>
            </template>
            <template #options>
              <div
                v-for="(option, index) in studentTypes"
                :key="option.id"
                @click="form.studentType = option"
                :class="{
                  'border-t-2': index !== 0,
                  'rounded-t-xl': index === 0,
                  'rounded-b-xl': index === studentTypes.length - 1,
                }"
                class="px-3 py-3 cursor-pointer items-center flex text-lg hover:bg-gray-100"
              >
                <span>{{ option.value }}</span>
              </div>
            </template>
          </CSelect>
        </div>
      </div>
      <div class="flex w-full justify-end gap-4 sm:gap-6">
        <CButton type="submit" @click.prevent="handleSubmit()">
          <img
            class="h-auto w-6 sm:w-8"
            alt="eye icon"
            src="@/assets/images/icons/save.svg"
          />
          <p class="text-md sm:text-xl whitespace-nowrap">saqlash</p>
        </CButton>
      </div>
    </form>
  </CModal>
</template>

<script setup>
import { computed, onBeforeMount, reactive, ref } from "vue";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useCSelectStore } from "@/store/cselect.js";
import { useStudentStore } from "@/store/student.js";
import { useSponsorStore } from "@/store/sponsor.js";
import { useModalStore } from "@/store/modal.js";
import { useFetch } from "@/composables/useFetch.js";
import CModal from "@/components/base/CModal.vue";
import CSelect from "@/components/base/CSelect.vue";
import CButton from "@/components/base/CButton.vue";
import Chr from "@/components/base/Chr.vue";
import FormGroup from "@/components/common/FormGroup.vue";

import Tab from "@/components/common/Tab.vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  variant: {
    type: String,
    validator(value) {
      return ["student", "sponsor"].includes(value);
    },
  },
});

const emit = defineEmits(["close"]);

const route = useRoute();
const router = useRouter();

const { put } = useFetch();
const { editModal, close } = useModalStore();
const { student } = useStudentStore();
const { sponsor } = useSponsorStore();

const cselectStore = useCSelectStore();

const sumOptions = computed(() =>
  Object.entries(tariffList.value).map(([_, value]) => value),
);

const { get } = useFetch();

const tabValues = ["jismoniy shaxs", "yuridik shaxs"];
function handleSelect(index) {
  form.isLegal = Boolean(Number(index));
  console.log(typeof index);
}

const tariffList = ref([]);
const otmList = ref([]);
const data = ref();

const studentTypes = [
  { id: 1, value: "Bakalavr" },
  { id: 2, value: "Magistr" },
  { id: 3, value: "Doktorantura" },
];

const form = reactive(
  props.variant == "sponsor"
    ? {
        fullName: sponsor.full_name,
        phone: sponsor.phone,
        sum: sponsor.sum,
        isLegal: sponsor.is_legal,
        firm: sponsor.firm,
        comment: sponsor.comment,
      }
    : {
        fullName: student.full_name,
        phone: student.phone,
        contract: student.contract,
        institute: student.institute.name,
        studentType: student.type,
      },
);

const rules = computed(() => {
  return {
    fullName: { required },
    phone: { required },
    institute: { required },
  };
});

const v$ = useVuelidate(rules, form);

async function handleSubmit() {
  const result = await v$.value.$validate();

  if (!result) {
    console.log("fail already: ", result);
    return;
  }
  close(editModal);
  putData();
}

const putData = async () => {
  try {
    if (props.variant == "sponsor") {
      data.value = await put(`sponsor-update/${route.params.id}/`, {
        full_name: form.fullName,
        phone: form.phone,
        sum: form.sum,
        is_legal: form.isLegal,
        firm: form.firm,
      });
    } else if (props.variant == "student") {
      data.value = await put(`student-update/${route.params.id}/`, {
        full_name: form.fullName,
        phone: form.phone,
        institute: form.institute.name,
      });
    }

    router.go(-1);
    console.log("params ID: ", route.params.id);
  } catch (error) {
    console.error("Post error", error.message);
  }
};

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
  console.log("studetchaa: ", form.fullName);
});
</script>
