<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(true); // 是否显示内容

</script>

<template>
  <div class="doki-virtual-list-item" v-if="isVisible">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
