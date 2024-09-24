<script setup lang="ts">

import search from "../assets/search.svg";
import primary from "../assets/primary.svg";
import success from "../assets/success.svg";
import info from "../assets/info.svg";
import warning from "../assets/warning.svg";
import danger from "../assets/danger.svg";

import DokiButton from "../components/buttons/doki-button.vue";
</script>

<template>
  <div class="buttons-container">
    <h2 class="title-2">Buttons</h2>
    <div class="buttons default-buttons">
      <DokiButton>default</DokiButton>
      <DokiButton type="primary">primary</DokiButton>
      <DokiButton type="success">success</DokiButton>
      <DokiButton type="info">info</DokiButton>
      <DokiButton type="warning">warning</DokiButton>
      <DokiButton type="danger">danger</DokiButton>
    </div>


    <div class="buttons plain-buttons">
      <DokiButton shape="plain">default</DokiButton>
      <DokiButton type="primary" shape="plain">primary</DokiButton>
      <DokiButton type="success" shape="plain">success</DokiButton>
      <DokiButton type="info" shape="plain">info</DokiButton>
      <DokiButton type="warning" shape="plain">warning</DokiButton>
      <DokiButton type="danger" shape="plain">danger</DokiButton>
    </div>

    <div class="buttons round-buttons">
      <DokiButton shape="round">default</DokiButton>
      <DokiButton type="primary" shape="round">primary</DokiButton>
      <DokiButton type="success" shape="round">success</DokiButton>
      <DokiButton type="info" shape="round">info</DokiButton>
      <DokiButton type="warning" shape="round">warning</DokiButton>
      <DokiButton type="danger" shape="round">danger</DokiButton>
    </div>

    <div class="buttons circle-buttons">
      <DokiButton shape="circle"><img :src="search" class="logo" alt="search"></DokiButton>
      <DokiButton type="primary" shape="circle"><img :src="primary" class="logo" alt="primary"></DokiButton>
      <DokiButton type="success" shape="circle"><img :src="success" class="logo" alt="success"></DokiButton>
      <DokiButton type="info" shape="circle"><img :src="info" class="logo" alt="info"></DokiButton>
      <DokiButton type="warning" shape="circle"><img :src="warning" class="logo" alt="warning"></DokiButton>
      <DokiButton type="danger" shape="circle"><img :src="danger" class="logo" alt="danger"></DokiButton>
    </div>

  </div>

  <div class="buttons-container">
    <h2 class="title-2">Disabled Buttons</h2>
    <div class="disabled-buttons">
      <DokiButton disabled>default</DokiButton>
      <DokiButton type="primary" disabled>primary</DokiButton>
      <DokiButton type="success" disabled>success</DokiButton>
      <DokiButton type="info" disabled>info</DokiButton>
      <DokiButton type="warning" disabled>warning</DokiButton>
      <DokiButton type="danger" disabled>danger</DokiButton>
    </div>
  </div>
</template>

<style scoped>
button {
  margin: 5px
}

.buttons-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

}

.disabled-buttons {
  margin: 5px;
  border: solid 1px cyan;
  border-radius: 5px;

}

.buttons {
  display: flex;

}

.logo {
  width: 20px;
  height: 20px;
}

.title-2 {
  margin: 5px;
  font-family: 'Microsoft YaHei UI Light', sans-serif
}
</style>