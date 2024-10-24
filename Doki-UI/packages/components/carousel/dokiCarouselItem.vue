<script setup lang="ts">
import {ref, useAttrs} from "vue";

const height = ref(useAttrs().height as number|| "")
</script>

<template>
  <div class="doki-carousel-item" :style="{height: height + 'px'}">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use "style/carouselIndex";
</style>