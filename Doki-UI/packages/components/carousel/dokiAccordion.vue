<script setup lang="ts">
import {computed, nextTick, ref, useAttrs, useSlots, watchEffect} from "vue";

const type = ref<string>(useAttrs().type === "vertical" ? "doki-accordion__vertical" : "doki-accordion__horizontal");
const itemLength = ref(0)
const slots = useSlots()
const innerWidth = computed(() => (itemLength.value - 1) * 120 + 600)

watchEffect(() => {
  nextTick(() => {
    // console.log("slots: ", slots)
    if (slots && slots.default) {
      const slotsElements = slots.default ? slots.default() : [];
      if (slotsElements[0].children) {
        itemLength.value = slotsElements[0].children.length as number;
        // console.log(innerWidth.value);
      }
    }
  });
});


</script>

<template>
  <div class="doki-accordion">
    <div class="doki-accordion-inner" :class="type" :style="{ width: innerWidth + 'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "style/carouselIndex";
</style>