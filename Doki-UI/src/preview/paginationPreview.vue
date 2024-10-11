<script setup lang="ts">

</script>

<template>
  <div class="pagination-container">
    <h2 class="title-2">Pagination</h2>

    <doki-pagination visible="3" total="50" perPage="6"/>
  </div>
</template>

<style scoped>
.pagination-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}
</style>