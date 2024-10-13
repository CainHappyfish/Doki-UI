<script setup lang="ts">
import {ref, useAttrs} from "vue";

import deleteIcon from "./public/delete.svg"

const fileInput = ref<HTMLInputElement | null>(null);
const fileList = ref<File[]>([]);

const multiple = ref(useAttrs().multiple === "");
const action = ref(useAttrs().action ? useAttrs().action : "")
// console.log(multiple.value)


const updateFileList = () => {
  if (fileInput.value && fileInput.value.files) {
    // Convert FileList to an array for easier manipulation
    fileList.value = Array.from(fileInput.value.files);
  }
};


const click = () => {
  fileInput.value?.click()
}

const onDelete = (event: Event) => {
  const target = event.target as HTMLElement;
  const file = target.parentElement as HTMLElement;

  if (file.textContent) {
    for  (let i = 0; i < fileList.value.length; i++) {
      // console.log(file.textContent);
      // console.log(fileList.value[i].name);

      if (fileList.value[i].name == file.textContent.trim()) {
        fileList.value.splice(i, 1)
        break
      }
    }


  }

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
      <img :src="deleteIcon" alt="delete" class="delete-icon" @click="onDelete">
    </div>

    <input ref="fileInput" type="file" @change="updateFileList" :multiple="multiple"/>
  </div>
</template>

<style scoped>

</style>