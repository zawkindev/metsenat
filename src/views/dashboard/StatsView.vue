<template>
  <div class="flex flex-col w-full px-32 gap-10">
    <div class="flex justify-between">
      <MoneyCard>
        <img src="icons/money-blue.svg" />
        <div class="flex flex-col">
          <p class="text-sm text-gray-400">Jami to'langan summa</p>
          <p class="text-2xl">
          {{formatMoney(12343424)}} <span class="text-xl text-gray-500">UZS</span>
          </p>
        </div>
      </MoneyCard>

      <MoneyCard>
        <img src="icons/money-yellow.svg" />
        <div class="flex flex-col">
          <p class="text-sm text-gray-400">Jami so'ralgan summa</p>
          <p class="text-2xl">
            40909000 <span class="text-xl text-gray-500">UZS</span>
          </p>
        </div>
      </MoneyCard>

      <MoneyCard>
        <img src="icons/money-orange.svg" />
        <div class="flex flex-col">
          <p class="text-sm text-gray-400">To‘lanishi kerak summa</p>
          <p class="text-2xl">
            800023 <span class="text-xl text-gray-500">UZS</span>
          </p>
        </div>
      </MoneyCard>
    </div>
    <img class="w-full" alt="graph" src="images/graph.svg" />
  </div>
</template>

<script setup>
import MoneyCard from "components/common/MoneyCard.vue";
import {formatMoney} from "@/utils/utils"
</script>
