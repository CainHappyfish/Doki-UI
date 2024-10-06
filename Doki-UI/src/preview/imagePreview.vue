<script setup lang="ts">
import testImg from "../assets/ars.jpg"
</script>

<template>
  <div class="image-container">
    <h2 class="title-2">Image</h2>
    <h3 class="title-3">Normal Image</h3>
    <div class="image-wrapper">
      <doki-image size="small" :src="testImg"/>
      <doki-image size="natural" :src="testImg"/>
      <doki-image size="medium" :src="testImg"/>
      <doki-image size="large" :src="testImg"/>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.image-wrapper {
  display: flex;
  flex-direction: row;

  gap: 20px;
}
</style>