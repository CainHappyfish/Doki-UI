<script setup lang="ts">
import {cascaderOption, menuOption} from "../types";

const previewData: menuOption = {
  options: [{
    label: "Poppin' Party",
    value: "Poppin' Party",
    hasChildren: true,
    children: [
      {
        label: "ksm",
        value: "ksm"
      },
      {
        label: 'ars',
        value: 'ars'
      },
      {
        label: 'otae',
        value: 'otae'
      },
      {
        label: 'rimi',
        value: 'rimi'
      },
      {
        label: 'saya',
        value: 'saya'
      }
    ]
  },
  {
    label: 'Roselia',
    value: 'Roselia',
    hasChildren: true,
    children: [
      {
        label: "ykn",
        value: "ykn"
      },
      {
        label: "lisa",
        value: "lisa"
      },
      {
        label: "ako",
        value: "ako"
      },
      {
        label: "sayo",
        value: "sayo"
      },
      {
        label: "rinrin",
        value: "rinrin"
      }
    ]
  }],
  hasChildren: true,
}



</script>

<template>
  <div class="cascader-container">
    <h2 class="title-2">Cascader</h2>
    <doki-cascader :options="previewData"></doki-cascader>
  </div>
</template>

<style scoped>
.cascader-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;
  padding: 5px;
}
</style>