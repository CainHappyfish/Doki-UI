<script setup lang="ts">
const props = defineProps<{
  gap?: number
}>()
</script>

<template>
  <div class="doki-row" :style="{gap: gap + 'px'}">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>