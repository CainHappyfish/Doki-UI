<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false)
const centerVisible = ref(false)

const click = () => {
  visible.value = true
}

const centerClick = () => {
  centerVisible.value = true
}
</script>

<template>
  <div class="dialog-container">
    <h2 class="title-2">dialog</h2>
    <div class="dialog">
      <h3 class="title-3">Default Dialog</h3>
      <doki-button @click="click">dialog</doki-button>
      <doki-dialog v-model="visible">
        <template #header>info</template>
        <template #content>This is a message.</template>
      </doki-dialog>
    </div>

    <div class="dialog">
      <h3 class="title-3">Center Dialog</h3>
      <doki-button @click="centerClick">center</doki-button>
      <doki-dialog v-model="centerVisible" center>
        <template #header>info</template>
        <template #content>This is a message.</template>
      </doki-dialog>
    </div>

  </div>
</template>

<style scoped>
.dialog-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}
</style>