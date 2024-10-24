<script setup lang="ts">
import {nextTick, onMounted, ref, useAttrs, useSlots} from "vue";

const shadowType = ref(useAttrs().shadow as string === "hover" ||
useAttrs().shadow as string === "always" ||
useAttrs().shadow as string === "never"
    ? "doki-card__" + useAttrs().shadow as string
    : "doki-card__always")

const headerExisted = ref(false)
const footerExisted = ref(false)
const bodyExisted = ref(false)

const bodyContainer = ref<HTMLElement | null>(null);

const test = "1px solid rgba(0, 255, 255, 0.6)"

onMounted(() => {
  const headerSlots = useSlots().header
  const bodySlots = useSlots().body
  const footerSlots = useSlots().footer

  headerExisted.value = headerSlots !== undefined
  bodyExisted.value = bodySlots !== undefined
  footerExisted.value = footerSlots !== undefined

  nextTick(() => {
    if (bodyContainer.value && headerExisted.value) {
      bodyContainer.value.style.borderTop = test
    }
    if (bodyContainer.value && footerExisted.value) {
      bodyContainer.value.style.borderBottom = test
    }
  });
});
</script>

<template>
  <div class="doki-card" :class="shadowType">
    <div class="doki-card__header" v-if="headerExisted">
      <slot name="header"></slot>
    </div>
    <div class="doki-card__body" ref="bodyContainer" v-if="bodyExisted">
      <slot name="body"></slot>
    </div>
    <div class="doki-card__footer" v-if="footerExisted">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
</style>