<template>
  <div class="w-full bg-white py-5 px-32 shadow-lg">
    <!--  IF  -->

    <div v-if="userAuthorized" class="flex justify-between">
      <img src="images/logo2.svg" />
      <div class="flex gap-10">
        <div class="flex bg-gray-200 p-1 items-center rounded-md">
          <span class="px-5 font-bold">Shohruz</span>
          <div
            class="px-1 pt-2 pb-0 flex items-end bg-success-200 rounded h-fit"
          >
            <img src="icons/user1.svg" />
          </div>
        </div>
        <img class="cursor-pointer" src="icons/log-out.svg" />
      </div>
    </div>

    <!--  ELSE  -->

    <div v-else class="flex justify-between select-none">
      <div class="flex items-center gap-2">
        <img src="images/logo.svg" />
        <Badge variant="danger"> club </Badge>
      </div>

      <div class="flex items-center gap-10">
        <p>Asosiy</p>
        <p>Grantlar</p>
        <p>Soliq imtiyozlari</p>
        <div class="flex items-center gap-2 cursor-pointer">
          <img src="icons/log-in.svg" />
          <p>Kirish</p>
        </div>
        <div>
          <CButton variant="outline"> Ro'yhatdan o'tish </CButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Badge from "components/common/Badge.vue";
import CButton from "components/base/CButton.vue";

const props = ["userAuthorized"];
</script>

<style>
p {
  cursor: pointer;
}
</style>
