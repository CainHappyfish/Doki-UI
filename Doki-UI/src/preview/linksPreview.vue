<script setup lang="ts">

</script>

<template>
  <div class="links-container">
    <h2 class="title-2">Links</h2>
    <div class="links">
      <doki-link>default</doki-link>
      <doki-link type="primary">primary</doki-link>
      <doki-link type="success">success</doki-link>
      <doki-link type="info">info</doki-link>
      <doki-link type="warning">warning</doki-link>
      <doki-link type="danger">danger</doki-link>
    </div>
  </div>

  <div class="links-container">
    <h2 class="title-2">Disabled Links</h2>
    <div class="links">
      <doki-link disabled>default</doki-link>
      <doki-link type="primary" disabled>primary</doki-link>
      <doki-link type="success" disabled>success</doki-link>
      <doki-link type="info" disabled>info</doki-link>
      <doki-link type="warning" disabled>warning</doki-link>
      <doki-link type="danger" disabled>danger</doki-link>
    </div>
  </div>
</template>

<style scoped>
.links-container {

  margin: 5px 0;
  border: solid 1px cyan;
  border-radius: 5px;

}

.links {
  margin: 5px;
  display: flex;
  gap: 10px;
}

.title-2 {
  margin: 5px;
  font-family: 'Microsoft YaHei UI Light', sans-serif
}
</style>