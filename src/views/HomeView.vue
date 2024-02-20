<template>
  <div class="flex flex-col md:flex-row pb-64">
    <div class="flex w-full md:w-7/12 h-full justify-center mt-20">
      <form
        @submit.prevent="handleSubmit"
        class="flex w-full md:w-4/5 px-8 flex-col gap-7"
      >
        <h2 class="text-2xl sm:text-4xl font-sans w-4/5 font-bold">
          Homiy sifatida ariza topshirish
        </h2>
        <Tab :options="tabValues" @activate="(index) => handleSelect(index)" />

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
          placeholder="+998"
          :validation="v$?.phone?.$error"
          errorMsg="Telefon raqami majburiy"
          label="Telefon raqam"
          type="tel"
        />
        <div>
          <RadioGroup
            :options="Object.entries(checkBoxValues).map(([_, value]) => value)"
            @select="(item) => (form.sum = item)"
            :activeOption="form.sum"
          >
            <p class="uppercase font-semibold text-sm sm:text-lg">
              To‘lov summasi
            </p>
          </RadioGroup>
          <span v-if="v$?.sum?.$error" class="text-red-600"
            >To'lov summasi majburiy</span
          >
        </div>

        <FormGroup
          v-if="selectedTab === 1"
          id="firm"
          v-model="form.firm"
          placeholder="Commeta"
          :validation="v$?.firm?.$error"
          errorMsg="Tashkilot nomi majburiy"
          label="Tashkilot nomi"
        />

        <CButton> Yuborish </CButton>
      </form>
    </div>
    <div class="flex flex-col gap-4 w-full md:w-5/12 p-6 sm:p-16">
      <p class="quote flex mt-12 sm:mt-0 sm:w-10/12 text-xl pl-6 pt-6">
        Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi. Ayni
        oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib qoʻymaslik kerak.
      </p>
      <div class="flex pl-6 gap-4 w-fit h-fit">
        <img
          class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover rounded-xl sm:rounded-2xl"
          src="@/assets/images/prezident.png"
        />
        <div class="flex flex-col">
          <p class="text-base sm:text-lg font-semibold">Shavkat Mirziyoyev</p>
          <p class="text-gray-500">O‘zbekiston Respublikasi Prezidenti</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount, computed } from "vue";
import { useFetch } from "@/composables/useFetch.js";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Tab from "@/components/common/Tab.vue";
import CButton from "@/components/base/CButton.vue";
import RadioGroup from "@/components/common/RadioGroup.vue";
import FormGroup from "@/components/common/FormGroup.vue";

defineEmits(["activate"]);

const { get, post } = useFetch();

const tabValues = ["jismoniy shaxs", "yuridik shaxs"];

const selectedTab = ref(0);

const checkBoxValues = ref([]);

function handleSelect(index) {
  selectedTab.value = index;
  console.log(index);
}

const form = reactive({
  fullName: "",
  phone: "",
  sum: "",
  paymentType: ["kontrakt"],
  firm: "",
  spent: "",
  comment: "",
});

const rules = computed(() => {
  return {
    fullName: { required },
    phone: { required },
    paymentType: { required },
  };
});

const v$ = useVuelidate(rules, form);

async function handleSubmit() {
  const result = await v$.value.$validate();

  if (!result) {
    console.log("0129: ", result);
    return;
  }
  await addSponsor();
}

const addSponsor = async () => {
  try {
    const response = await post(`sponsor-create/`, {
      full_name: form.fullName,
      phone: String(form.phone),
      sum: Number(form.sum.summa),
      payment_type: form.paymentType,
      firm: form.firm,
    });

    console.log("add SPONSOR: ", response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const fetchData = async () => {
  try {
    const response = await get(`tariff-list`);
    checkBoxValues.value = response;
    checkBoxValues.value.push({ id: 908, summa: "BOSHQA" });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  fetchData();
});
</script>

<style>
.quote {
  background-image: url("@/assets/images/icons/quote-left.svg"),
    url("@/assets/images/icons/quote-right.svg");
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top,
    right bottom;
  background-size: auto, auto;
}
</style>
