<script setup lang="ts">
import dokiMessagebox from "../components/messageBox/methods.ts"
import dokiMessage from "../components/message/methods.ts"

const clickAlert = () => {
  dokiMessagebox.alert("Info", "This is a info", {
    confirmButtonText: "OK",
  })
      .then(() => {
        dokiMessage({
          type: "success",
          message: "confirm"
        })
      })

}

const clickConfirm = () => {
  dokiMessagebox.confirm("confirm", "你确定要继续吗？")
      .then(() => {
        dokiMessage({
          type: "success",
          message: "confirm"
        })
      })
      .catch(() => {
        dokiMessage({
          type: "info",
          message: "cancel"
        })
      });
}

const clickPrompt = () => {
  dokiMessagebox.prompt("Input", "Input a number:")
      .then(() => {
        dokiMessage({
          type: "success",
          message: "confirm"
        })
      })
      .catch(() => {
        dokiMessage({
          type: "info",
          message: "cancel"
        })
      });
}
</script>

<template>
  <div class="messagebox-container">
    <h2 class="title-2">messagebox</h2>

    <div class="message">
      <h3 class="title-3">Alert Messagebox</h3>
      <doki-button @click="clickAlert">alert</doki-button>
    </div>

    <div class="message">
      <h3 class="title-3">Confirm Messagebox</h3>
      <doki-button @click="clickConfirm">confirm</doki-button>
    </div>

    <div class="message">
      <h3 class="title-3">Prompt Messagebox</h3>
      <doki-button @click="clickPrompt">prompt</doki-button>
    </div>
  </div>
</template>

<style scoped>
.messagebox-container {
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