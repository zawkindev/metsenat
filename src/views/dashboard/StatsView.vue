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
    </div>
    <div class="flex w-full h-[500px]">
      <Chart />
    </div>
  </div>
</template>

<script setup>
import MoneyCard from "@/components/common/MoneyCard.vue";
import Chart from "@/components/common/Chart.vue";
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
