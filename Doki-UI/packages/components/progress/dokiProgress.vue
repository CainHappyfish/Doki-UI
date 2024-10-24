<script setup lang="ts">
import {computed, ref, useAttrs} from "vue";

import successIcon from "./public/success.svg"
import failIcon from "./public/fail.svg"
import warningIcon from "./public/warning.svg"

const props = defineProps<{
  percentage: number
  status?: string
}>()


const type = ref(useAttrs().type ? "doki-progress__" + useAttrs().type : "");
const innerText = ref(useAttrs().inner === "")
// const status = ref(useAttrs().status || "")
const statusStyle = ref("")
const statusIcon = computed(() => {
  if (props.status === "success") {
    statusStyle.value = "doki-progress__success"
    return successIcon
  }
  else if (props.status === "warning") {
    statusStyle.value = "doki-progress__warning"
    return warningIcon
  }
  else if (props.status === "fail") {
    statusStyle.value = "doki-progress__fail"
    return failIcon
  }
  else {
    return ""
  }
})

</script>

<template>
  <div class="doki-progress" :class="type">
    <div class="doki-progress__bar"
         :style="{height: innerText ? 30 +'px' : 10 + 'px'}"
    >
      <div class="inner"
           :class="statusStyle"
           :style="{width: percentage + '%'}">
        <div class="percentage" v-if="innerText">
          {{ percentage }}%
        </div>
      </div>
    </div>

    <div class="doki-progress__content">
      <div class="status" v-if="status">
        <img :src="statusIcon" alt="status">
      </div>
      <div class="percentage" v-if="(status === '' || status === undefined) && !innerText">
        {{ percentage }}%
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>