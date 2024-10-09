<script setup lang="ts">
import {nextTick, ref, useAttrs, useSlots, watchEffect} from "vue";

const slots = useSlots()

const itemLength = ref(0)
const visableItem = ref(0)
watchEffect(() => {
  nextTick(() => {
    if (slots) {
      const slotsElements = slots.default ? slots.default() : []
      if (slotsElements[0].children) {
        itemLength.value = slotsElements[0].children.length as number;
      }
      slotsElements[0].children = slotsElements[0].children?.slice(0, 8)
    }
  })
})
</script>

<template>
  <div class="doki-virtual-list">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>