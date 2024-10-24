<script setup lang="ts">
import {computed, ref} from "vue";

const page = ref(1)
const handlePageChange = (pageIndex: number) => {
  page.value = pageIndex
  // console.log(pageIndex)
}

const data = ref(Array(600))
for (let i = 0; i < 600; i++) {
  data.value[i] = i + 1
}

const preview = computed(() => data.value.slice((page.value - 1) * 6 , (page.value - 1) * 6 + 6))
</script>

<template>
  <div class="pagination-container">
    <h2 class="title-2">Pagination</h2>
    <h3 class="title-3">Normal Pagination</h3>
    <div class="preview-data-container">
      <div class="preview-data" v-for="item in preview">{{ item }}</div>
    </div>
    <doki-pagination visible="5" total="600" perPage="6" @currentPage="handlePageChange"/>
    <doki-pagination visible="5" total="30" perPage="6"/>

    <h3 class="title-3">Jumpable Pagination</h3>
    <doki-pagination visible="5" total="600" perPage="6" @currentPage="handlePageChange" jumpable/>
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

.preview-data-container {
  width: 600px;
  height: 600px;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.preview-data {
  width: 280px;
  height: 190px;

  border-radius: 10px;
  background: #44DDFF;

  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Calibri, sans-serif;
  font-size: 48px;
}
</style>