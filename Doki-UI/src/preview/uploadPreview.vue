<script setup lang="ts">

import DokiUpload from "../components/upload/dokiUpload.vue";
</script>

<template>
  <div class="upload-container">
    <h2 class="title-2">Upload</h2>
    <div class="upload">
      <doki-upload multiple>
        <template #trigger>
          <doki-button type="primary"><span>Upload</span></doki-button>
        </template>
        <template #description>
          File Upload
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
</style>