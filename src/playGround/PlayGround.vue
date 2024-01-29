<template>
  <div class="h-screen w-fit flex flex-col justify-center items-center">
    <CButton>
      <template #icon-right>
        <img alt="" src="../assets/images/icons/trash.svg" />
      </template>
      Yuborish
    </CButton>

    <Badge variant="success">
      tasdiqlandi
    </Badge>
  </div>
</template>

<script setup>
import CButton from "components/base/CButton.vue"
import Badge from "../components/common/Badge.vue";
</script>
