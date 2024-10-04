<script setup lang="ts">
import {computed, ref, useAttrs} from "vue";

const value =computed(() => useAttrs().value as string)
const label = computed(() =>useAttrs().label as string)
const isDisabled = ref((useAttrs().label as string).split(" ").includes("disabled"))
const disabled = computed(() => isDisabled.value ? "doki-checkbox-disabled" : "")


</script>

<template>
  <div class="doki-checkbox" :class="disabled">
    <input type="checkbox"
           :id="label"
           :name="label"
           :value="value"

           :disabled="isDisabled" >
    <label :for="label">{{ value }}</label>
  </div>
</template>

<style scoped>

</style>