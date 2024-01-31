<template>
  <h1>Sponsors</h1>
</template>

<script setup>
import { useFetch } from "@/composables/useFetch";
import { onBeforeMount, ref } from "vue";
import { useMetsenatStore } from "@/store/store"

const { get } = useFetch()
const store = useMetsenatStore()

const pageSize = ref(10)

console.log(store.sponsorsList)

const fetchData = async (page) => {
  if (store.sponsorsList.length === 0 || store.sponsorsCurrentPage !== page) {
    try {
      store.sponsorsCurrentPage = page
      const response = await get('sponsor-list/', { page: page, pageSize: pageSize.value })
      store.sponsorsList = response

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}

onBeforeMount(() => {
  fetchData(store.sponsorsCurrentPage)
})


</script>
