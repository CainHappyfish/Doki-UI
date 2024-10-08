<script setup lang="ts">
import {ref, useAttrs, useSlots, nextTick, watchEffect} from "vue";

import leftIcon from "./public/left.svg";
import rightIcon from "./public/right.svg";

const type = ref<string>(useAttrs().type === "vertical" ? "doki-carousel__vertical" : "doki-carousel__horizontal");
const hide = ref<boolean>(useAttrs().hide === "")
const indicatorType = ref<string>(useAttrs().type === "vertical" ? "indicator-item__vertical" : "indicator-item__horizontal");
const itemLength = ref(0);

const slots = useSlots();
watchEffect(() => {
  nextTick(() => {
    // console.log("slots: ", slots)
    if (slots && slots.default) {
      const slotsElements = slots.default ? slots.default() : [];
      if (slotsElements[0].children) {
        itemLength.value = slotsElements[0].children.length as number - 1;
      }
    }
  });
});

let curIndex = ref(0)
const onIndicatorClick = (event: Event) => {
  const target = event.target as HTMLElement
  const container = target.parentElement!
  const innerContent = container.parentElement!.querySelector(".doki-carousel-inner") as HTMLElement
  // console.log(container, container.parentElement!)
  const indicators = container.querySelectorAll(".indicator-item")
  curIndex.value = [...indicators.values()].indexOf(target)
  const transVal = 800 * curIndex.value
  innerContent.style.transform = `translate(-${transVal}px)`
  indicators.forEach((indicator) => {
    indicator.classList.remove("indicator-item__active")
    if (target && innerContent) {
      target.classList.add("indicator-item__active")
    }

  })
}

const onLeftSwitchButtonClick = (event: Event) => {
  const target = event.target as HTMLElement
  const container = target.parentElement!
  const innerContent = container.parentElement!.querySelector(".doki-carousel-inner") as HTMLElement
  const indicators = container.parentElement!.querySelectorAll(".indicator-item")
  curIndex.value = curIndex.value - 1 >= 0 ? --curIndex.value : 5
  const transVal = 800 * curIndex.value
  innerContent.style.transform = `translate(-${transVal}px)`
  // console.log(indicators)
  indicators.forEach((indicator, index) => {
    if (index === curIndex.value) {
      indicator.classList.add("indicator-item__active")
    } else {
      indicator.classList.remove("indicator-item__active")
    }

  })
}

const onRightSwitchButtonClick = (event: Event) => {
  const target = event.target as HTMLElement
  const container = target.parentElement!
  const innerContent = container.parentElement!.querySelector(".doki-carousel-inner") as HTMLElement
  const indicators = container.parentElement!.querySelectorAll(".indicator-item")

  curIndex.value = curIndex.value + 1 <= 5 ? ++curIndex.value : 0
  // console.log(curIndex.value)
  const transVal = 800 * curIndex.value
  innerContent.style.transform = `translate(-${transVal}px)`
  indicators.forEach((indicator, index) => {
    if (index === curIndex.value) {
      indicator.classList.add("indicator-item__active")
    } else {
      indicator.classList.remove("indicator-item__active")
    }

  })
}

</script>

<template>
  <div class="doki-carousel" >
    <div class="doki-carousel-inner" :class="type" :style="{width: (itemLength + 1) * 800 + 'px'}">
      <slot></slot>
    </div>

    <div class="doki-carousel-button doki-carousel-button__left" @click="onLeftSwitchButtonClick" v-if="hide">
      <img :src="leftIcon" alt="left">
    </div>
    <div class="doki-carousel-button doki-carousel-button__right" @click="onRightSwitchButtonClick" v-if="hide">
      <img :src="rightIcon" alt="right">
    </div>

    <div class="doki-carousel-indicator">
      <div class="indicator-item indicator-item__active" :class="indicatorType"  @click="onIndicatorClick"></div>
      <div class="indicator-item" :class="indicatorType" v-for="index in itemLength" :key="index" @click="onIndicatorClick"></div>
    </div>
  </div>
</template>

<style scoped>
</style>