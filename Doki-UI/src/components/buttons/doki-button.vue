<script setup lang="ts">
import {defineComponent, useAttrs} from 'vue'

defineComponent({
  name: 'doki-button'
})

const shape = useAttrs().shape ? useAttrs().shape + "-" : ""
const type = useAttrs().type ? useAttrs().type + "-" : ""

const buttonStyle = "doki-" + shape + type + "button"

</script>

<template>
  <button class="doki-button" :class="buttonStyle">
    <slot></slot>
  </button>
</template>

<style scoped>

</style>