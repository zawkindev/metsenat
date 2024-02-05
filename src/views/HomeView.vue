<template>
  <div class="flex h-full">
    <div class="flex w-7/12 h-full justify-center mt-20">
      <div class="flex w-3/5 flex-col gap-7">
        <h2 class="text-4xl font-sans w-4/5 font-bold">
          Homiy sifatida ariza topshirish
        </h2>
        <Tab
          :options="tabValues"
          @activate="(index) => handleEmit(index)"
        />

        <div class="flex flex-col gap-2">
          <label for="fullName" class="uppercase font-semibold"
            >F.I.Sh. (Familiya Ism Sharifingiz)</label
          >
          <CInput
            id="fullName"
            v-model="inputValues.fullName"
            placeholder="Abdullayev Abdulla Abdulla o’g’li"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="phoneNumber" class="uppercase font-semibold"
            >Telefon raqamingiz</label
          >
          <CInput
            id="phoneNumber"
            v-model="inputValues.phoneNumber"
            type="tel"
          />
        </div>
        <RadioGroup :options="['100', '200', '300', 'Boshqasi']">
          To‘lov summasi
        </RadioGroup>

        <div v-if="selectedTab === 1" class="flex flex-col gap-2">
          <label for="company" class="uppercase font-semibold"
            >Tashkilot nomi</label
          >
          <CInput
            id="company"
            v-model="inputValues.company"
            placeholder="Commeta"
          />
        </div>

        <CButton> Yuborish </CButton>
      </div>
    </div>
    <div class="right-side flex flex-col gap-4 w-5/12 p-16">
      <p class="quote flex w-10/12 text-xl pl-6 pt-6">
        Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi. Ayni
        oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib qoʻymaslik kerak.
      </p>
      <div class="flex pl-6 gap-4 w-fit h-fit">
        <img
          class="w-16 h-16 object-cover rounded-2xl"
          src="@/assets/images/prezident.png"
        />
        <div class="flex flex-col">
          <p class="text-lg font-semibold">Shavkat Mirziyoyev</p>
          <p class="text-gray-500">O‘zbekiston Respublikasi Prezidenti</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tab from "@/components/common/Tab.vue";
import CInput from "@/components/base/CInput.vue";
import CButton from "@/components/base/CButton.vue";
import RadioGroup from "@/components/common/RadioGroup.vue";
import { ref, reactive } from "vue";

defineEmits(["activate"]);

const tabValues =  ['jismoniy shaxs', 'yuridik shaxs']

const selectedTab = ref(0);



const inputValues = reactive({
  fullName: "",
  company: "",
  phoneNumber: "",
});

function handleEmit(index) {
  selectedTab.value = index;
  console.log(index);
}
</script>

<style>
.right-side {
  background-image: url("images/background.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  background-color: #f5f5f7;
}

.quote {
  background-image: url("icons/quote-left.svg"), url("icons/quote-right.svg");
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top,
    right bottom;
  background-size: auto, auto;
}
</style>
