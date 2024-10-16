<script setup lang="ts">

import DokiInput from "../components/input/dokiInput.vue";
</script>

<template>
  <div class="form-input-container">
    <h2 class="title-2">Form input</h2>
    <h3 class="title-3">Basic Input</h3>
    <div class="input">
      <doki-input placeholder="" :input-id="1"/>
    </div>

    <h3 class="title-3">Disabled</h3>
    <div class="input">
      <doki-input placeholder="disabled" disabled :input-id="1"/>
    </div>

    <h3 class="title-3">Password Input</h3>
    <div class="input">
      <doki-input type="password" placeholder="Please enter your password":input-id="1" />
    </div>

    <h3 class="title-3">Textarea</h3>
    <div class="input">
      <doki-input textarea :input-id="1" />
    </div>
  </div>
</template>

<style scoped>
.form-input-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.input {
  margin: 10px;
}
</style>