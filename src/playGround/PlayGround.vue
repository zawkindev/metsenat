<template>
  <div class="gap-6 bg-gray-400 min-h-screen w-screen flex flex-col justify-center items-center">
    <div class="w-full flex flex-col rounded-md gap-5 justify-center items-center p-10">

      <Header />

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
      <Search />

      <CSelect :options="['sdasf','asfa']" />
      <div class="overflow-x-auto w-full">
        <div class="table w-full">
          <div class="table-row-group">
            <div class="table-row bg-gray-200 font-semibold">
              <div class="table-cell p-2">Heasdfjasdhfalkdsfader 1</div>
              <div class="table-cell p-2">eader 2</div>
              <div class="table-cell p-2">Header 3</div>
            </div>
            <div class="table-row bg-white hover:bg-gray-100">
              <div class="table-cell p-2">sdfasdfRow 1, Cell 1</div>
              <div class="table-cell p-2">Row 1, Cell dsfasdfasdfasdfadsf2</div>
              <div class="table-cell p-2">Row 1, Cell 3</div>
            </div>
            <div class="table-row bg-white hover:bg-gray-100">
              <div class="table-cell p-2">Row 2, Cell 1</div>
              <div class="table-cell p-2">Row 2, Cell 2</div>
              <div class="table-cell p-2">Row 2, Cell 3</div>
            </div>
          </div>
        </div>
      </div>


      <Tab :options="['salom', 'alvido', 'salom', 'alvido']" />

    </div>
  </div>
</template>

<script setup>
import CButton from "components/base/CButton.vue"
import Badge from "../components/common/Badge.vue";
import CInput from "../components/base/CInput.vue";
import Tab from "components/common/Tab.vue"
import Search from "components/common/Search.vue"
import Header from "../components/layout/Header.vue";
import CSelect from "~/home/zawkin/development/metsenat/src/components/base/CSelect.vue";
</script>
