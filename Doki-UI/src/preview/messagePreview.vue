<script setup lang="ts">
import dokiMessage from "../components/message/methods.ts"

const click = () => {
  dokiMessage({
    type: 'success',
    message: "This is doki message",
  })
}
</script>

<template>
  <div class="message-container">
    <h2 class="title-2">message</h2>
    <doki-button @click="click">message</doki-button>
  </div>
</template>

<style scoped>
.message-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}
</style>