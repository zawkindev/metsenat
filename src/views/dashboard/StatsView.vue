<template>
  <div class="flex mt-14 flex-col w-full px-32 pb-32 gap-10">
    <div class="flex justify-between gap-10 flex-wrap">
      <MoneyCard
        img="icons/money-blue.svg"
        :amount="response.total_need"
        title="Jami to'langan summa"
        currency="UZS"
      >
      </MoneyCard>
      <MoneyCard
        img="icons/money-yellow.svg"
        :amount="response.total_paid"
        title="Jami to'langan summa"
        currency="UZS"
      >
      </MoneyCard>
      <MoneyCard
        img="icons/money-orange.svg"
        :amount="response.total_must_pay"
        title="Jami to'langan summa"
        currency="UZS"
      >
      </MoneyCard>

      <!-- <MoneyCard> -->
      <!--   <img src="@/assets/images/icons/money-yellow.svg" /> -->
      <!--   <div class="flex flex-col"> -->
      <!--     <p class="text-sm text-gray-400">Jami so'ralgan summa</p> -->
      <!--     <p class="text-2xl"> -->
      <!--       {{ formatMoney(response?.total_need) }} -->
      <!--       <span class="text-xl text-gray-500">UZS</span> -->
      <!--     </p> -->
      <!--   </div> -->
      <!-- </MoneyCard> -->
      <!---->
      <!-- <MoneyCard> -->
      <!--   <img src="@/assets/images/icons/money-orange.svg" /> -->
      <!--   <div class="flex flex-col"> -->
      <!--     <p class="text-sm text-gray-400">To‘lanishi kerak summa</p> -->
      <!--     <p class="text-2xl"> -->
      <!--       {{ formatMoney(response?.total_must_pay) }} -->
      <!--       <span class="text-xl text-gray-500">UZS</span> -->
      <!--     </p> -->
      <!--   </div> -->
      <!-- </MoneyCard> -->
    </div>
    <img class="w-full" alt="graph" src="@/assets/images/graph.svg" />
  </div>
</template>

<script setup>
import MoneyCard from "@/components/common/MoneyCard.vue";
import { formatMoney } from "@/utils/index";
import { useFetch } from "@/composables/useFetch";
import { onBeforeMount, ref } from "vue";

const { get } = useFetch();

const response = ref("");

const fetchData = async () => {
  try {
    response.value = await get("dashboard");
    console.log(response.value);
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  fetchData();
});
</script>
