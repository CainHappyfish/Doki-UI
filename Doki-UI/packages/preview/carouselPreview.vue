<script setup lang="ts">
import pic1 from "./public/34A5D8D332EA1C97045E7638B4BBBE00.jpg"
import pic2 from "./public/A1046094F615DE97984A317ABC3D2051.jpg"
import pic3 from "./public/B47CB45D9CDA5428D61A7A4E9C155EBD.jpg"
import pic4 from "./public/C7189228C0D4110789789FDB052E0047.jpg"
import pic5 from "./public/F90DBAEF8600280309DE09E9F21274A8.jpg"
import pic6 from "./public/B49BBE3D3B050DC43A1B10A87C54ED20.jpg"

const pics = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6
]
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
    <doki-accordion>
      <doki-accordion-item v-for="pic in pics" :key="pic">
        <img :src="pic" alt="pic" class="accordion-preview" />
      </doki-accordion-item>
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

.accordion-preview {
  width: 600px;
  height: 400px;

  object-fit: cover;
  z-index: -2;
}
</style>