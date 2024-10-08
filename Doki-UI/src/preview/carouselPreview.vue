<script setup lang="ts">


</script>

<template>
  <div class="carousel-container">
    <h2 class="title-2">Carousel</h2>
    <h3 class="title-3">Horizontal</h3>
    <doki-carousel>
      <doki-carousel-item v-for="item in 6" :key="item">
        <h2 class="carousel-preview">{{ item }}</h2>
      </doki-carousel-item>
    </doki-carousel>
  </div>

  <div class="carousel-container">
    <h2 class="title-2">Accordion</h2>
    <h3 class="title-3">Horizontal</h3>
    <doki-accordion>

    </doki-accordion>
  </div>
</template>

<style scoped>
.carousel-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.carousel-preview {
  background: rgba(0, 255, 255, 0.6);
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Calibri, sans-serif;

}
</style>