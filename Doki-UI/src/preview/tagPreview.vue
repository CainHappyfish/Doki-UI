<script setup lang="ts">

</script>

<template>
  <div class="tags-container">
    <h2 class="title-2">Tags</h2>
    <div class="tags">
      <doki-tag>default</doki-tag>
      <doki-tag type="primary">primary</doki-tag>
      <doki-tag type="success">success</doki-tag>
      <doki-tag type="warning">warning</doki-tag>
      <doki-tag type="danger">danger</doki-tag>
    </div>
    
    <div class="tags">
      <doki-tag closable>default</doki-tag>
      <doki-tag type="primary" closable>primary</doki-tag>
      <doki-tag type="success" closable>success</doki-tag>
      <doki-tag type="warning" closable>warning</doki-tag>
      <doki-tag type="danger"closable>danger</doki-tag>
    </div>


  </div>
</template>

<style scoped>
.tags-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.tags {
  margin: 10px 0;
  display: flex;
  gap: 10px;
}
</style>