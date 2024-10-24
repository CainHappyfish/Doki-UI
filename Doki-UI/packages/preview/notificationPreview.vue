<script setup lang="ts">
import dokiNotification from "../components/notification/methods.ts"

const clickDefault = () => {
  dokiNotification({
    message: "This is a doki notification",
  })
}

const clickInfo = () => {
  dokiNotification({
    type: "info",
    title: "Info",
    message: "This is a info notification",
  })
}

const clickSuccess = () => {
  dokiNotification({
    type: "success",
    title: "Success",
    message: "This is a success notification",
  })
}

const clickWarning = () => {
  dokiNotification({
    type: "warning",
    title: "Warning",
    message: "This is a warning notification",
  })
}

const clickDanger = () => {
  dokiNotification({
    type: "danger",
    title: "Danger",
    message: "This is a danger notification",
  })
}

</script>

<template>
  <div class="notification-container">
    <h2 class="title-2">notification</h2>
    <div class="notification">
      <h3 class="title-3">Default notification</h3>
      <doki-button @click="clickDefault">notification</doki-button>
    </div>

    <div class="notification">
      <h3 class="title-3">Types</h3>
      <doki-button @click="clickDefault">default</doki-button>
      <doki-button @click="clickInfo" type="info">info</doki-button>
      <doki-button @click="clickSuccess" type="success">success</doki-button>
      <doki-button @click="clickWarning" type="warning">warning</doki-button>
      <doki-button @click="clickDanger" type="danger">danger</doki-button>
    </div>

  </div>
</template>

<style scoped>
.notification-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

  gap: 10px;

}

.doki-button {
  margin: 0 10px;
}
</style>