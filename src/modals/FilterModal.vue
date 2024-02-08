<template>
  <CModal @close="emit('close')">
    <h1>asdjflakjsdhflkajhsdlkfjh</h1>
    <Chr />
    <form v-if="variant == 'sponsor'" @submit.prevent="handleSubmit()">
      <div class="flex flex-col gap-2 w-full">
        <label :for="type" class="uppercase font-semibold">talabalik turi</label>
        <CSelect :validation="v$?.application?.$error" errorMsg="ariza holati majburiy" :isOpen="cselectStore.application"
          @click="cselectStore.application = !cselectStore.application">
          <template #selectedOption>
            <p class="flex items-center capitalize">
              {{ form.application || "Barchasi" }}
            </p>
          </template>
          <template #options>
            <div v-for="option in applicationTypes" :key="option" @click="form.application = option" :class="{
              'border-t-2': index !== 0,
              'rounded-t-xl': index === 0,
              'rounded-b-xl': index === applicationTypes.length - 1,
            }" class="px-3 py-3 cursor-pointer items-center flex text-lg hover:bg-gray-100">
              <span>{{ option }}</span>
            </div>
          </template>
        </CSelect>
        <RadioGroup :options="checkBoxValues">
          To‘lov summasi
        </RadioGroup>
        <CInput id="sana" label="sana" placeholder="kk.oo.yyyy - kk.oo.yyyy" type="date" />
        <div class="flex gap-6">
          <CButton variant="outline">
            <img src="@/assets/images/icons/edit.svg" alt="edit icon" />
            <p class="text-xl">tozalash</p>
          </CButton>

        </div>
      </div>
    </form>
  </CModal>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useFormValidation } from "@/composables/useValidate";
import { useFetch } from "@/composables/useFetch.js";
import CModal from "@/components/base/CModal.vue";
import CInput from "@/components/base/CInput.vue";
import Chr from "@/components/base/Chr.vue";
import RadioGroup from "@/components/common/RadioGroup.vue";


defineProps({
  variant: {
    type: String,
    validator(value) {
      return ["student", "sponsor"].includes(value);
    },
  },
});

const emit = defineEmits(["close"]);

const { get } = useFetch()

const { form, validateSubmit, v$ } = useFormValidation();

const applicationTypes = ["Yangi", "Moderatsiyada", "Tasdiqlangan", "Bekor qilingan"]

const checkBoxValues = ref([])

async function handleSubmit() {
  const result = validateSubmit();
  if (!result) {
    alert("The form has errors");
    return;
  }
}

const fetchData = async () => {
  try {
    const response = await get(`tariff-list`);
    checkBoxValues.value = response

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  fetchData();
});


</script>
