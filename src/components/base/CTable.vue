<template>
  <div class="w-full tabble min-w-[1440px]">
    <ul
      class="overflow-auto w-full whitespace-nowrap flex flex-col list-none"
    >
      <li>
        <ul class="text-[#B1B1B8] text-left flex gap-6 w-full">
          <slot name="header"> </slot>
        </ul>
      </li>

      <li class="w-full overflow-visible">
        <slot name="body"> </slot>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style>
.tabble{
  max-width: calc(100vw - 100px);
}
</style>
