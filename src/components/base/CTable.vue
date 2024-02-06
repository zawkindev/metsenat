<template>
  <div class="w-full">
    <ul
      class="overflow-hidden w-full whitespace-nowrap flex my-12 flex-col list-none p-0"
    >
      <li>
        <ul class="text-[#B1B1B8] text-left flex gap-6 w-full">
          <slot name="header"> </slot>
        </ul>
      </li>

      <li class="w-full">
        <slot name="body"> </slot>
      </li>
    </ul>
  </div>
</template>

<script setup></script>
