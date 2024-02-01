<template>
  <div class="w-full">
    <div class="container mx-auto overflow-hidden overflow-x-auto">
      <ul class="w-full whitespace-nowrap flex my-12 flex-col list-none p-0">
        <li>
          <ul class="text-[#B1B1B8] text-left flex gap-6 w-full">
            <slot name="header"> </slot>
          </ul>
        </li>

        <div class="w-full">
          <slot name="body"> </slot>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup></script>
