<script setup lang="ts">
import {ref, useAttrs} from "vue";

defineProps<{
  prefixIcon?: string,
  suffixIcon?: string,
}>()

const type = ref(useAttrs().type ? useAttrs().type as string : "");
const placeholder = ref(useAttrs().placeholder ? useAttrs().placeholder as string : "Please enter");
const disabled = ref(useAttrs().disabled === "")
const isTextarea = ref(useAttrs().textarea === "")

const onVisible = (event: Event) => {
  const target = event.target as HTMLElement;
  const container = target.parentElement! as HTMLElement;
  target.classList.toggle("visible")
  if (container) {
    const type = container.querySelector("input")!.type
    if (type === "password") {
      container.querySelector("input")!.type = "text"
    } else {
      container.querySelector("input")!.type = "password";
    }

  }
}
</script>

<template>
  <div class="doki-textarea" v-if="isTextarea">
    <textarea :placeholder="placeholder" :class="disabled ? 'disabled' : ''" :disabled="disabled"></textarea>
  </div>

  <div class="doki-input" v-else>
    <img :src="prefixIcon" alt="prefix" v-if="prefixIcon">
    <input :type="type" :placeholder="placeholder" :class="disabled ? 'disabled' : ''" :disabled="disabled">
    <div class="visible-icon"
         v-if="type === 'password'"
         @click="onVisible"
    >
      <div class="inner" />
    </div>
  </div>
</template>

<style scoped>

</style>