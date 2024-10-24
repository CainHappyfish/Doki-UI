<script setup lang="ts">

import {onMounted} from "vue";

const onAccordionClick = (event: Event) => {
  let target = event.target as HTMLElement;
  const container = target.parentElement as HTMLElement;
  let items = container.querySelectorAll(".doki-accordion-item")
  if (container.parentElement && container.querySelectorAll(".doki-accordion-item").length === 0) {
    items = container.parentElement.querySelectorAll(".doki-accordion-item")
    target = container
  }
  // console.log("click", target, container, items);
  items.forEach(item => {
    item.classList.remove("doki-accordion-item__active")
    if (target) {
      target.classList.add("doki-accordion-item__active")
    }
  })
}

onMounted(() => {
  document.querySelectorAll(".doki-accordion-inner").forEach((item) => {
    if (item) {
      item.querySelector(".doki-accordion-item")?.classList.add("doki-accordion-item__active")
    }
  })
})
</script>

<template>
  <div class="doki-accordion-item" @click="onAccordionClick">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use "style/carouselIndex";
</style>