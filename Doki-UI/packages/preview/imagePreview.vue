<script setup lang="ts">
import testImg1 from "./public/ars.jpg"
import testImg2 from "./public/cat.jpg"
</script>

<template>
  <div class="image-container">
    <h2 class="title-2">Image</h2>
    <h3 class="title-3">Normal Image</h3>
    <div class="image-wrapper">
      <doki-image size="small" :src="testImg1"/>
      <doki-image size="natural" :src="testImg1"/>
      <doki-image size="medium" :src="testImg1"/>
      <doki-image size="large" :src="testImg1"/>
    </div>

    <h3 class="title-3">Lazy Loading</h3>
    <div class="lazy-image-wrapper">
      <doki-image  :src="testImg2" width="600" height="332.5" lazy/>
      <doki-image  :src="testImg2" width="600" height="332.5" lazy/>
      <doki-image  :src="testImg2" width="600" height="332.5" lazy/>
      <doki-image  :src="testImg2" width="600" height="332.5" lazy/>
      <doki-image  :src="testImg2" width="600" height="332.5" lazy/>
      <doki-image  :src="testImg2" width="600" height="332.5" lazy/>
      <doki-image  :src="testImg2" width="600" height="332.5" lazy/>
      <doki-image  :src="testImg2" width="600" height="332.5" lazy/>

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

.lazy-image-wrapper {
  width: 620px;
  height: 400px;
  overflow: auto;
}
</style>