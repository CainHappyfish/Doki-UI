<script setup lang="ts">
import {computed, ref, useAttrs} from "vue";

import defaultIcon from "./public/star-fill.svg"
import infoIcon from "./public/info.svg"
import successIcon from "./public/success.svg"
import warningIcon from "./public/warning.svg"
import dangerIcon from "./public/danger.svg"


const type = ref(useAttrs().type ? "doki-alert__" + useAttrs().type : "")
const iconShow = ref(useAttrs().icon === "")
const icon = computed(() => {
  if (useAttrs().type === "info") {
    return infoIcon
  } else if (useAttrs().type === "success") {
    return successIcon
  } else if (useAttrs().type === "warning") {
    return warningIcon
  } else if (useAttrs().type === "danger") {
    return dangerIcon
  } else {
    return defaultIcon
  }
})
const closed = ref(true)
const handleClick = () => {
  closed.value = false
}
</script>

<template>
  <div class="doki-alert" :class="type" v-if="closed">
    <div class="doki-alert__icon" v-if="iconShow">
      <img :src="icon" alt="icon">
    </div>
    <div class="doki-alert__content">
      <slot></slot>
      <div class="description">
        <slot name="description"></slot>
      </div>
    </div>
    <svg @click="handleClick" x="1728033233491"
         viewBox="0 0 1024 1024" version="1.1"
         xmlns="http://www.w3.org/2000/svg" p-id="4257" xmlns:xlink="http://www.w3.org/1999/xlink"
         width="50" height="50">
      <path d="M557.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312L512 557.248l-265.344 265.408a32 32 0 0 1-45.312-45.312L466.752 512 201.344 246.656a32 32 0 1 1 45.312-45.312L512 466.752l265.344-265.408a32 32 0 0 1 45.312 45.312L557.248 512z" fill="#ffffff" p-id="4258"></path>
    </svg>
  </div>
</template>

<style scoped>

</style>