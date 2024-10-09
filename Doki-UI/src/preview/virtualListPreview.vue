<script setup lang="ts">

import {ref} from "vue";

const listItems = ref(new Array(20).fill(0))
for (let i = 0; i < listItems.value.length; i++) {
  listItems.value[i] = i+1
}
</script>

<template>
  <div class="virtual-list-container">
    <h2 class="title-2">Infinite Loading</h2>
    <doki-virtual-list>
      <doki-virtual-list-item v-for="item in listItems">
        <div class="vl-preview">
          {{ item }}
        </div>
      </doki-virtual-list-item>
    </doki-virtual-list>


  </div>
</template>

<style scoped>
.virtual-list-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.vl-preview {
  height: 70px;
  background: #55DDEE;
  color: white;

  font-family: "Microsoft YaHei UI Light", sans-serif;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
}
</style>