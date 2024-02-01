<template>
  <TitleBar>
    <p class="text-xl font-bold">{{student?.full_name}}</p>
    <Badge variant="success" :with-bg="true"> tasdiqlangan</Badge>
  </TitleBar>
</template>

<script setup>
import TitleBar from "components/layout/TitleBar.vue";
import {useMetsenatStore} from "~/home/zawkin/development/metsenat/src/store/store.js";
import {ref} from "vue";
import {useRoute} from "vue-router";
import Badge from "~/home/zawkin/development/metsenat/src/components/common/Badge.vue";

const route = useRoute()

const store = useMetsenatStore()

const student = store.getStudent(route.params.id)
</script>
