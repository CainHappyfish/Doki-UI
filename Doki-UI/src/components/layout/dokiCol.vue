<script setup lang="ts">
import {nextTick, onMounted, ref, watch} from "vue";

const props = withDefaults(defineProps<{
  width?: string | number,
  offset?: string | number,
}>(), {
  width: () => 24
})

const colElement = ref<HTMLDivElement | null>()
const colWidth = ref(0)

nextTick(() => {
  const parentRow = colElement.value.parentElement! as HTMLElement
  const containerWidth = parentRow.getBoundingClientRect().width
  const gap = parseInt(parentRow.style.gap || 0)
  // 去除gap后可用总宽度
  const totalWidth = containerWidth - gap * (24 / props.width - 1)
  colWidth.value = totalWidth / (24 / props.width)
  // console.log(colWidth.value)
  // console.log(containerWidth, colWidth.value, gap * (24 / props.width - 1))
  if (props.offset) {
    const offsetWidth = Math.floor(containerWidth * (props.offset / 24))
    // console.log(offsetWidth)
    colElement.value.style.transform = `translateX(${offsetWidth}px)`
  }
})
</script>

<template>
  <div class="doki-col"
       ref="colElement"
       :style="{width: colWidth + 'px'}">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>