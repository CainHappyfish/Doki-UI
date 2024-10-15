<script setup lang="ts">
import {computed, onMounted, ref, useAttrs} from "vue";
import { useResizeObserver, useTimeoutFn } from '@vueuse/core'

import defaultIcon from "./public/star-fill.svg"
import infoIcon from "./public/info.svg"
import successIcon from "./public/success.svg"
import warningIcon from "./public/warning.svg"
import dangerIcon from "./public/danger.svg"
import {messageProps} from "./types.ts";
import {getLastOffset, getOffsetOrSpace} from "./instance.ts";

const messageContainer = ref<HTMLDivElement | null>();
const duration = ref<number>(useAttrs().duration ? useAttrs().duration as number: 3000)

const props = defineProps(messageProps)

defineEmits<{
  (e: 'destroy'): boolean;
}>();

const visible = ref(true)


// console.log(props.type)
const icon = computed(() => {
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

console.log(props, offset.value);


useResizeObserver(messageContainer, () => {
  height.value = messageContainer.value!.getBoundingClientRect().height;
});


onMounted(() => {
  timer()
})

function timer() {
  if (duration.value > 0) {
    setTimeout(() => {
      visible.value = false
    }, duration.value)
  }
}

function destroy() {
  props.onDestroy()
}

function close() {
  visible.value = false
  props.onClose()
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
        :class="['doki-message', type ? 'doki-message__' + type : '']"
        :style="{ top: offset + 'px', zIndex: 99 }"
        v-show="visible"
        ref="messageContainer"
    >
      <div class="doki-message__icon">
        <img :src="icon" alt="icon" />
      </div>
      <div class="doki-message__content">{{ message }}</div>

    </div>

  </transition>
</template>

<style scoped>

</style>