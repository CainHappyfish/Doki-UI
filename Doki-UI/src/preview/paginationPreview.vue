<script setup lang="ts">

</script>

<template>
  <div class="pagination-container">
    <h2 class="title-2">Pagination</h2>
    <h3 class="title-3">Normal Pagination</h3>
    <doki-pagination visible="5" total="600" perPage="6"/>
    <doki-pagination visible="5" total="30" perPage="6"/>

    <h3 class="title-3">Jumpable Pagination</h3>
    <doki-pagination visible="5" total="1000" perPage="6" jumpable/>
    <doki-pagination visible="5" total="30" perPage="6" jumpable/>


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