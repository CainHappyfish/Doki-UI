<script setup lang="ts">
import dokiMessage from "../components/message/methods.ts"
import { h } from 'vue'
const clickDefault = () => {
  dokiMessage({
    message: "This is doki style",
  })
}

const clickClosable = () => {
  dokiMessage({
    message: "This is doki style",
    showClose: true,
    duration: 100000,
  })
}

const clickVNode = () => {
  dokiMessage({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

const clickHTML = () => {
  dokiMessage({
    dangerouslyUseHTMLString: false,
    message: '<strong>This is safe <i>HTML</i> string</strong>',
  })
}

const clickDangerHTML = () => {
  dokiMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is dangerous <i>HTML</i> string</strong>',
    type: "danger",
  })
}

const clickCenter = () => {
  dokiMessage({
    message: "This is doki style",
    center: true,
  })
}

const clickInfo = () => {
  dokiMessage({
    message: "This is info style",
    type: "info",
  })
}

const clickSuccess = () => {
  dokiMessage({
    message: "This is success style",
    type: "success",
  })
}

const clickWarning = () => {
  dokiMessage({
    message: "This is warning style",
    type: "warning",
  })
}

const clickDanger = () => {
  dokiMessage({
    message: "This is danger style",
    type: "danger",
  })
}
</script>

<template>
  <div class="message-container">
    <h2 class="title-2">message</h2>
    <div class="message">
      <h3 class="title-3">Default Message</h3>
      <doki-button @click="clickDefault">message</doki-button>
    </div>

    <div class="message">
      <h3 class="title-3">Types</h3>
      <doki-button @click="clickDefault">default</doki-button>
      <doki-button @click="clickInfo" type="info">info</doki-button>
      <doki-button @click="clickSuccess" type="success">success</doki-button>
      <doki-button @click="clickWarning" type="warning">warning</doki-button>
      <doki-button @click="clickDanger" type="danger">danger</doki-button>
    </div>

    <div class="message">
      <h3 class="title-3">Closable</h3>
      <doki-button @click="clickClosable">Closable</doki-button>
    </div>

    <div class="message">
      <h3 class="title-3">VNode</h3>
      <doki-button @click="clickVNode">Vnode</doki-button>
    </div>

    <div class="message">
      <h3 class="title-3">HTML</h3>
      <doki-button @click="clickHTML">safe</doki-button>
      <doki-button @click="clickDangerHTML">dangerous</doki-button>
    </div>

    <div class="message">
      <h3 class="title-3">Center</h3>
      <doki-button @click="clickCenter">center</doki-button>
    </div>
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

  gap: 10px;

}

.doki-button {
  margin: 0 10px;
}
</style>