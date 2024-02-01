<template>
  <TitleBar>
    <p class="text-xl font-bold">Talaba qo'shish</p>
  </TitleBar>

  <div
      class="flex flex-col w-7/12 mx-auto bg-white p-10 mt-14 gap-8 rounded-lg"
  >
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-2">
        <label for="fullName" class="uppercase font-semibold">f.i.sh.(familiya ism sharif)</label>
        <CInput id="fullName" v-model="student.full_name" placeholder="Abdullayev Abdulla Abdulla o'g'li"/>
      </div>
      <div class="flex flex-col gap-2">
        <label for="phone" class="uppercase font-semibold">telefon raqam</label>
        <CInput id="phone" v-model="student.phone"/>
      </div>

    </div>
    <CSelect>
    <template #selectedOption>

    </template>
      <template #options>
        <div v-for="(option, index) in options" :key="index" @click="selectOption(option)"
             :class="{'border-t-2':index!==0,'rounded-t-xl':index===0,'rounded-b-xl':index===options.length-1}"
             class="px-3 py-3 cursor-pointer text-lg hover:bg-gray-100">
          {{ option.name }}
        </div>
      </template>
    </CSelect>
  </div>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";
import {useMetsenatStore} from "@/store/store.js";

const store = useMetsenatStore()

const options = store.instituteList

const generataId = () => {
  return Math.random().toString(36).substr(2, 9)
}

const student = ref({
  id: generataId(),
  full_name: '',
  phone: '',
  institute: '',
  type: '',
  contract: ''
})
const addStudent = async () => {
  try {
    console.log(selectedInstitute.value)
    const response = await post(`student-create/`, {
      id: user.value.id,
      institute: selectedInstitute.value.id,
      full_name: user.value.full_name,
      phone: user.value.phone,
      type: user.value.type?.name === 'Bakalavr' ? 1 : 2,
      contract: user.value.contract
    })

    user.value = {
      id: generataId(),
      full_name: '',
      phone: '',
      institute: '',
      type: '',
      contract: ''
    }
    router.push({name: 'Student', params: {id: response.id}})
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}


const fetchData = async (page) => {
  try {
    const response = await get(`institute-list`);
    store.instituteList = response;

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  fetchData();
});


import TitleBar from "components/layout/TitleBar.vue";
import CSelect from "~/home/zawkin/development/metsenat/src/components/base/CSelect.vue";
import CInput from "~/home/zawkin/development/metsenat/src/components/base/CInput.vue";
</script>