<template>
  <div class="flex h-full">
    <div class="flex w-7/12 h-full items-center justify-center">
      <div class="flex"></div>
      <h2>Homiy sifatida ariza topshirish</h2>
    </div>
    <div class="right-side flex flex-col gap-4 w-5/12 p-16">
      <p class="quote flex w-10/12 text-xl pl-6 pt-6">
        Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi. Ayni
        oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib qoʻymaslik kerak.
      </p>
      <div class="flex pl-6 gap-4 w-fit h-fit">
        <img
          class="w-16 h-16 object-cover rounded-2xl"
          src="images/prezident.png"
        />
        <div class="flex flex-col">
          <p class=" text-lg font-semibold">Shavkat Mirziyoyev</p>
          <p class="text-gray-500">O‘zbekiston Respublikasi Prezidenti</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.right-side {
  background-image: url("images/background.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  background-color: #f5f5f7;
}

.quote {
  background-image: url("icons/quote-left.svg"),
    url("icons/quote-right.svg");
  background-repeat: no-repeat, no-repeat;
  background-position:
    left top,
    right bottom;
  background-size: auto, auto;
}
</style>
