<template>
  <div class="gap-6 bg-gray-400 h-screen w-screen flex flex-col justify-center items-center">
    <div class="flex flex-col bg-white rounded-md gap-5 justify-center items-center p-10">

      <CButton>
        Yuborish
      </CButton>

      <CButton>
        <img src="icons/save.svg" />
        Yuborish
      </CButton>

      <CButton variant="secondary">
        <img alt="" src="icons/filter.svg" />
        Filter
      </CButton>

      <CButton variant="danger">
        <img src="icons/trash.svg" />
        Filter
      </CButton>

      <Badge variant="success">
        delete
      </Badge>

      <CInput id="fafa" label="F.I.SH." />
      <CInput id="adsfadsf">
        <p class="font-bold">
          LOGIN
        </p>
      </CInput>

    </div>
  </div>
</template>

<script setup>
import CButton from "components/base/CButton.vue"
import Badge from "../components/common/Badge.vue";
import CInput from "../components/base/CInput.vue";
</script>
