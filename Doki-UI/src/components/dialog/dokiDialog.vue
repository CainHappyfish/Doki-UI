<script setup lang="ts">

import {ref, useAttrs} from "vue";

const isCenter = ref(useAttrs().center === "" ? "center" : "")

const model = defineModel<boolean>()

// const closed = ref(false)
const handleClick = () =>  {
  model.value = false
  // closed.value = true
  // console.log(props.visible, closed.value, props.visible && !closed.value)
}
</script>

<template>
 <div class="doki-dialog__container" v-if="model" :class="isCenter">
   <div class=doki-dialog>
     <div class="doki-dialog__header">
       <slot name="header"></slot>
     </div>

     <div class="doki-dialog__content">
       <slot name="content"></slot>
     </div>
     <svg @click="handleClick" t="1728033233491"
         viewBox="0 0 1024 1024" version="1.1"
         mlns="http://www.w3.org/2000/svg" p-id="4257" xmlns:xlink="http://www.w3.org/1999/xlink"
         width="50" height="50">
      <path d="M557.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312L512 557.248l-265.344 265.408a32 32 0 0 1-45.312-45.312L466.752 512 201.344 246.656a32 32 0 1 1 45.312-45.312L512 466.752l265.344-265.408a32 32 0 0 1 45.312 45.312L557.248 512z" fill="#ffffff" p-id="4258"></path>
    </svg>
   </div>
 </div>
</template>

<style scoped>

</style>