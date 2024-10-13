<script setup lang="ts">
import {computed, ref, useAttrs, useSlots} from "vue";
const fileInput = ref<HTMLInputElement | null>(null);
const fileList = ref<File[]>([]);

const multiple = ref(useAttrs().multiple === "");
console.log(multiple.value)


const updateFileList = () => {
  if (fileInput.value && fileInput.value.files) {
    // Convert FileList to an array for easier manipulation
    fileList.value = Array.from(fileInput.value.files);
  }
};


const click = () => {
  fileInput.value.click()
}
</script>

<template>
  <div class="doki-upload">
<!--    文件选择框-->
    <div class="trigger" @click="click">
      <slot name="trigger"></slot>
    </div>
<!--    描述-->
    <div class="description">
      <slot name="description"></slot>
    </div>

    <div class="file-list" v-for="file in fileList">
      {{ file.name }}
    </div>

    <input ref="fileInput" type="file" @change="updateFileList" :multiple="multiple"/>
  </div>
</template>

<style scoped>

</style>