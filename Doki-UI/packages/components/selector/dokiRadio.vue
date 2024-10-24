<script setup lang="ts">
import {computed, ref, useAttrs} from "vue";

const value =computed(() => useAttrs().value as string)
const label = computed(() =>useAttrs().label as string)
const name = computed(() =>useAttrs().name as string)
const isDisabled = ref((useAttrs().label as string).split(" ").includes("disabled"))
const disabled = computed(() => isDisabled.value ? "doki-radio-disabled" : "")


</script>

<template>
  <div class="doki-radio" :class="disabled">
    <input type="radio"
           :id="label"
           :name="name"
           :value="value"
           :disabled="isDisabled" >
    <label :for="label">{{ value }}</label>
  </div>
</template>

<style scoped lang="scss">
@use "style/radio";
</style>