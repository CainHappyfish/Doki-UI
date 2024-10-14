<script setup lang="ts">

import DokiCard from "../../components/card/dokiCard.vue";

import aimi from "../public/658BAB2BE9BDB31F274E68DDC880D4DB.jpg"
</script>

<template>
  <div class="card-container">
    <h2 class="title-2">Card</h2>
    <h3 class="title-3">Normal Card</h3>
    <doki-card>
      <template #header>
        Card Header
      </template>
      <template #body>
        <p v-for="num in 5"> Card Item {{ num }}</p>
      </template>
      <template #footer>
        <p>Card Footer</p>
      </template>
    </doki-card>

    <h3 class="title-3">Simple Card</h3>
    <doki-card>
      <template #body>
        <p v-for="num in 5"> Card Item {{ num }}</p>
      </template>
    </doki-card>

    <h3 class="title-3">Img Card</h3>
    <doki-card>
      <template #header>
        AIMI
      </template>

      <template #body>
        <img :src="aimi" alt="aimi" style="width: 100%">
      </template>
    </doki-card>

    <h3 class="title-3">Card Shadow</h3>
    <div class="card-shadow">
      <doki-card shadow="always">
        <template #header>
          always
        </template>
      </doki-card>
    </div>

    <div class="card-shadow">
      <doki-card shadow="hover">
        <template #header>
          hover
        </template>
      </doki-card>
    </div>

    <div class="card-shadow">
      <doki-card shadow="never">
        <template #header>
          never
        </template>
      </doki-card>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.card-shadow {
  margin: 10px 0;
}
</style>
