<template>
  <div class="gap-6 bg-gray-400 h-screen w-screen flex flex-col justify-center items-center">
    <div class="flex flex-col bg-white rounded-md gap-5 justify-center items-center p-10">

      <CButton>
        Yuborish
      </CButton>

      <CButton variant="secondary">
        <template #icon>
          <img alt="" src="icons/filter.svg" />
        </template>
        Filter
      </CButton>

      <CButton variant="danger">
        <template #icon>
          <img src="icons/trash.svg" />
        </template>
        Filter
      </CButton>

      <Badge variant="success">
        delete
      </Badge>

    </div>
  </div>
</template>

<script setup>
import CButton from "components/base/CButton.vue"
import Badge from "../components/common/Badge.vue";
</script>
