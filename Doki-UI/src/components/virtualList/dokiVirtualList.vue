<script setup lang="ts">
import {computed, nextTick, onBeforeUnmount, onMounted, ref, useAttrs, useSlots, watchEffect} from "vue";

const slots = useSlots()


const itemLength = ref(0)
const start = ref(0)
const visableItemLength = ref(8)
const visableItems = computed(() => (slots).slice(start.value, visableItemLength.value + 1))
watchEffect(() => {
  nextTick(() => {
    if (slots) {
      const slotsElements = slots.default ? slots.default() : []
      if (slotsElements[0].children) {
        itemLength.value = slotsElements[0].children.length as number;
        console.log(itemLength.value)
      }

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