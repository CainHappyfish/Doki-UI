<script setup lang="ts">
import {messageBoxProps} from "./types.ts";
import {computed, ref} from "vue";

import defaultIcon from "../public/star-fill.svg"
import infoIcon from "../public/info.svg"
import warningIcon from "../public/warning.svg"
import DokiButton from "../buttons/dokiButton.vue";

const props = defineProps(messageBoxProps)

const visible = ref(true)

const icon = computed(() => {
  if (props.icon) return props.icon

  if (props.type === "alert") {
    return infoIcon
  } else if (props.type === "confirm") {
    return warningIcon
  } else {
    return defaultIcon
  }
})


const onCloseClick = () => {
  if (props.rejectCallback) props.rejectCallback()
  visible.value = false
}

const onConfirm = () => {
  if (props.resolveCallback) {
    props.resolveCallback()
  }
  visible.value = false
}

const onCancel = () => {
  if (props.rejectCallback) {
    props.rejectCallback()
  }
  visible.value = false
}

// console.log(onCancel, onConfirm, props.resolveCallback)
console.log(props.type)

defineExpose({
  visible,
  onConfirm,
  onCancel
})
</script>

<template>
  <transition name="doki-message__hide">
    <div class="doki-messagebox__container" v-show="visible">
      <div class="doki-messagebox">
        <div class="doki-messagebox__title">
          <img :src="icon as string" alt="icon">
          <div class="title">{{ title }}</div>
          <svg  @click="onCloseClick" x="1728033233491"
               viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="4257" xmlns:xlink="http://www.w3.org/1999/xlink"
               width="50" height="50">
            <path d="M557.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312L512 557.248l-265.344 265.408a32 32 0 0 1-45.312-45.312L466.752 512 201.344 246.656a32 32 0 1 1 45.312-45.312L512 466.752l265.344-265.408a32 32 0 0 1 45.312 45.312L557.248 512z" fill="#ffffff" p-id="4258"></path>
          </svg>
        </div>
        <div class="doki-messagebox__content" :class="props.type">
          <slot>
            <div v-if="props.dangerouslyUseHTMLString">
              {{ message }}
            </div>
            <div v-else v-html="message"></div>
          </slot>
          <div class="doki-messagebox__input" v-if="props.type === 'prompt'">
            <input>
          </div>
        </div>
        <div class="doki-messagebox__footer">
          <doki-button type="primary" @click="onConfirm"> {{ props.confirmButtonText }}</doki-button>
          <doki-button @click="onCancel" v-if="props.type !== 'alert'"> {{ props.cancelButtonText }}</doki-button>
        </div>

      </div>
    </div>
  </transition>
</template>

<style scoped>

</style>