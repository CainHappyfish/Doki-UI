<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import { useResizeObserver } from '@vueuse/core'

import defaultIcon from "../public/star-fill.svg"
import infoIcon from "../public/info.svg"
import successIcon from "../public/success.svg"
import warningIcon from "../public/warning.svg"
import dangerIcon from "../public/danger.svg"
import {messageProps} from "./types.ts";
import {getLastOffset, getOffsetOrSpace} from "./instance.ts";

const messageContainer = ref<HTMLDivElement | null>();

const props = defineProps(messageProps)

defineEmits<{
  (e: 'destroy'): boolean;
}>();

const visible = ref(true)


// console.log(props.type)
const icon = computed(() => {
  if (props.icon) return props.icon

  if (props.type === "info") {
    return infoIcon
  } else if (props.type === "success") {
    return successIcon
  } else if (props.type === "warning") {
    return warningIcon
  } else if (props.type === "danger") {
    return dangerIcon
  } else {
    return defaultIcon
  }
})

const height = ref(0)
const lastOffset = computed(() => getLastOffset(props.id));
const bottom = computed((): number => height.value + offset.value);
const offset = computed(() => {
  return getOffsetOrSpace(props.id, props.offset) + lastOffset.value;
});

const centerStyle = computed(() => {
  return props.center ? "center" : ""
})
// console.log(props, offset.value);


useResizeObserver(messageContainer, () => {
  height.value = messageContainer.value!.getBoundingClientRect().height;
});



onMounted(() => {
  timer()
})

function timer() {
  if (props.duration > 0) {
    setTimeout(() => {
      visible.value = false
    }, props.duration)
  }
}

function destroy() {
  if (props.onDestroy) {
    props.onDestroy()
  }
}

function close() {
  visible.value = false
  if (props.onClose) {
    props.onClose()
  }
}

const onCloseClick = () => {
  close()
  setTimeout(() => {
    destroy()
  },1000)
}

defineExpose({
  close,
  visible,
  bottom
})
</script>

<template>
  <transition
      name="doki-message__hide"
      @after-leave="$emit('destroy')"

  >
    <div
        :class="['doki-message', type ? 'doki-message__' + type : '', centerStyle]"
        :style="{ top: offset + 'px', zIndex: 99 }"
        v-show="visible"
        ref="messageContainer"

    >
      <div class="doki-message__icon">
        <img :src="icon as string" alt="icon" />
      </div>
      <div class="doki-message__content">
        <slot>
          <div v-if="props.dangerouslyUseHTMLString">
            {{ message }}
          </div>
          <div v-else v-html="message"></div>
        </slot>
      </div>
      <svg v-if="props.showClose" @click="onCloseClick" x="1728033233491"
           viewBox="0 0 1024 1024" version="1.1"
           xmlns="http://www.w3.org/2000/svg" p-id="4257" xmlns:xlink="http://www.w3.org/1999/xlink"
           width="50" height="50">
        <path d="M557.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312L512 557.248l-265.344 265.408a32 32 0 0 1-45.312-45.312L466.752 512 201.344 246.656a32 32 0 1 1 45.312-45.312L512 466.752l265.344-265.408a32 32 0 0 1 45.312 45.312L557.248 512z" fill="#ffffff" p-id="4258"></path>
      </svg>
    </div>

  </transition>
</template>

<style scoped lang="scss">
@use "style/message";
</style>