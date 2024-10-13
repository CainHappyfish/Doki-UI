<script setup lang="ts">

import DokiUpload from "../components/upload/dokiUpload.vue";
import {ref} from "vue";

import addIcon from "./public/add.svg"

// const imgUrl = ref()
</script>

<template>
  <div class="upload-container">
    <h2 class="title-2">Upload</h2>
    <h3 class="title-3">Normal Upload</h3>
    <div class="upload">
      <doki-upload multiple>
        <template #trigger>
          <doki-button type="primary"><span>Upload</span></doki-button>
        </template>

      </doki-upload>
      
    </div>
    <h3 class="title-3">Avatar Upload</h3>
    <div class="upload">
      <doki-upload>
        <template #trigger>
          <div class="avatar-container">
            <img :src="addIcon" alt="add">
          </div>
        </template>

      </doki-upload>
      
    </div>
  </div>
</template>

<style scoped>
.upload-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.upload {
  margin: 10px 0;
}

.avatar-container {
  width: 150px;
  height: 150px;

  border: 2px dashed #BBBBBB;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s linear;

  img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    border: 2px dashed #44DDFF;
  }
}

</style>