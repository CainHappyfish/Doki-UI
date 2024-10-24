<script setup lang="ts">
import {ref, useAttrs} from "vue";

const isDisabled = ref(useAttrs().disabled === "" ? "disabled-item" : "");

</script>

<template>
  <div class="doki-dropdown-item" :class="isDisabled">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>