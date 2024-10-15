<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false)

const click = () => {
  visible.value = true
}

</script>

<template>
  <div class="dialog-container">
    <h2 class="title-2">dialog</h2>
    <doki-button @click="click">show dialog</doki-button>
    <doki-dialog v-model="visible">
      <template #header>info</template>
      <template #content>This is a message.</template>
    </doki-dialog>
  </div>
</template>

<style scoped>
.dialog-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}
</style>