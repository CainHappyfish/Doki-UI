<script setup lang="ts">

import search from "../assets/search.svg";
import primary from "../assets/primary.svg";
import success from "../assets/success.svg";
import info from "../assets/info.svg";
import warning from "../assets/warning.svg";
import danger from "../assets/danger.svg";

</script>

<template>
  <div class="buttons-container">
    <h2 class="title-2">Buttons</h2>
    <div class="buttons default-buttons">
      <doki-button>default</doki-button>
      <doki-button type="primary">primary</doki-button>
      <doki-button type="success">success</doki-button>
      <doki-button type="info">info</doki-button>
      <doki-button type="warning">warning</doki-button>
      <doki-button type="danger">danger</doki-button>
    </div>


    <div class="buttons plain-buttons">
      <doki-button shape="plain">default</doki-button>
      <doki-button type="primary" shape="plain">primary</doki-button>
      <doki-button type="success" shape="plain">success</doki-button>
      <doki-button type="info" shape="plain">info</doki-button>
      <doki-button type="warning" shape="plain">warning</doki-button>
      <doki-button type="danger" shape="plain">danger</doki-button>
    </div>

    <div class="buttons round-buttons">
      <doki-button shape="round">default</doki-button>
      <doki-button type="primary" shape="round">primary</doki-button>
      <doki-button type="success" shape="round">success</doki-button>
      <doki-button type="info" shape="round">info</doki-button>
      <doki-button type="warning" shape="round">warning</doki-button>
      <doki-button type="danger" shape="round">danger</doki-button>
    </div>

    <div class="buttons circle-buttons">
      <doki-button shape="circle"><img :src="search" class="logo" alt="search"></doki-button>
      <doki-button type="primary" shape="circle"><img :src="primary" class="logo" alt="primary"></doki-button>
      <doki-button type="success" shape="circle"><img :src="success" class="logo" alt="success"></doki-button>
      <doki-button type="info" shape="circle"><img :src="info" class="logo" alt="info"></doki-button>
      <doki-button type="warning" shape="circle"><img :src="warning" class="logo" alt="warning"></doki-button>
      <doki-button type="danger" shape="circle"><img :src="danger" class="logo" alt="danger"></doki-button>
    </div>

  </div>

  <div class="buttons-container">
    <h2 class="title-2">Disabled Buttons</h2>
    <div class="disabled-buttons">
      <doki-button disabled>default</doki-button>
      <doki-button type="primary" disabled>primary</doki-button>
      <doki-button type="success" disabled>success</doki-button>
      <doki-button type="info" disabled>info</doki-button>
      <doki-button type="warning" disabled>warning</doki-button>
      <doki-button type="danger" disabled>danger</doki-button>
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
  margin: 5px

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