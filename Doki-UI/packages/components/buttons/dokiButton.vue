<script setup lang="ts">
import {useAttrs} from 'vue'

const shape = useAttrs().shape ? useAttrs().shape + "-" : ""
const type = useAttrs().type ? useAttrs().type + "-" : ""
const isDisabled = useAttrs().disabled !== undefined ? "doki-disabled-button" : ""
const disabled = useAttrs().disabled !== undefined

const buttonStyle = "doki-" + shape + type + "button" + " " + isDisabled


</script>

<template>
  <button class="doki-button" :class="buttonStyle" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@use "style/buttonsIndex";
</style>