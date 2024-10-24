<script setup lang="ts">
import {computed, ref, useAttrs, useSlots} from "vue";

const type = ref(useAttrs().type ? "doki-divider__" + useAttrs().type as string : "doki-divider__horizontal")
const dividerStyle = ref(useAttrs().dividerStyle ? useAttrs().dividerStyle as string: "solid")
const contentPosition = computed(() => {
  if (useAttrs().contentPosition === "left") {
    return "content__left"
  } else if (useAttrs().contentPosition === "right") {
    return "content__right"
  } else {
    return ""
  }
})

const slots = useSlots().default

</script>

<template>
  <div class="doki-divider" :class="type">
    <div class="doki-divider__left" :style="{borderStyle: dividerStyle}" :class="contentPosition"></div>
    <div class="doki-divider__content" v-if="slots">
      <slot></slot>
    </div>
    <div class="doki-divider__right" :style="{borderStyle: dividerStyle}"></div>
  </div>
</template>

<style scoped lang="scss">
@use "style/dividerIndex";
</style>