<script setup lang="ts">

import DokiLink from "../components/links/doki-link.vue";
</script>

<template>
  <div class="links-container">
    <h2 class="title-2">Links</h2>
    <div class="links">
      <DokiLink>default</DokiLink>
      <DokiLink type="primary">primary</DokiLink>
      <DokiLink type="success">success</DokiLink>
      <DokiLink type="info">info</DokiLink>
      <DokiLink type="warning">warning</DokiLink>
      <DokiLink type="danger">danger</DokiLink>
    </div>
  </div>

  <div class="links-container">
    <h2 class="title-2">Disabled Links</h2>
    <div class="links">
      <DokiLink disabled>default</DokiLink>
      <DokiLink type="primary" disabled>primary</DokiLink>
      <DokiLink type="success" disabled>success</DokiLink>
      <DokiLink type="info" disabled>info</DokiLink>
      <DokiLink type="warning" disabled>warning</DokiLink>
      <DokiLink type="danger" disabled>danger</DokiLink>
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