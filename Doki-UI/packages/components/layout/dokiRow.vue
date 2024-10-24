<script setup lang="ts">
defineProps<{
  gap?: number
}>()
</script>

<template>
  <div class="doki-row" :style="{gap: gap + 'px'}">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use "style/row";
</style>