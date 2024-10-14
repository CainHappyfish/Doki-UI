<script setup lang="ts">
import icon from "./public/separator.svg"

const data = [
  {
    label: "Poppin' Party",
    url: "https://mzh.moegirl.org.cn/Poppin%27Party"
  },
  {
    label: "户山香澄",
    url: "https://mzh.moegirl.org.cn/%E6%88%B7%E5%B1%B1%E9%A6%99%E6%BE%84"
  },
  {
    label: "简介",
  }
]
</script>

<template>
  <div class="breadcrumb-container">
    <h2 class="title-2">Breadcrumb</h2>
    <h3 class="title-3">Default Breadcrumb</h3>
    <doki-breadcrumb :items="data"/>
    <h3 class="title-3">Custom Separator Breadcrumb</h3>
    <doki-breadcrumb :items="data" :separator="icon"/>
  </div>
</template>

<style scoped>
.breadcrumb-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;
  gap: 10px;

  padding: 5px;
  box-sizing: border-box;

}
</style>