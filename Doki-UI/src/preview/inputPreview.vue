<script setup lang="ts">

const data = [
    "ksm",
    "ars",
    "otea",
    "saya",
    "rimi"
]
</script>

<template>
  <div class="input-container">
    <h2 class="title-2">Auto-complete Input</h2>
    <h3 class="title-3">All Tags</h3>
    <doki-auto-fill-input type="all" :autocomplete="data"/>
    <h3 class="title-3">Matched Tags</h3>
    <doki-auto-fill-input type="match" :autocomplete="data"/>

  </div>
</template>

<style scoped>
.input-container {

  margin: 5px 0;
  border: solid 1px cyan;
  border-radius: 5px;

  padding: 5px;
}
</style>