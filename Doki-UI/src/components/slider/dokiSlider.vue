<script setup lang="ts">

import {ref} from "vue";

const percent = ref(0)
const slideDistance = ref(0)
const curSlider = ref<HTMLElement | null>()
const curSliderButton = ref<HTMLElement | null>()

const handleSlideDown = (event: MouseEvent): void => {
  const target = event.target as HTMLElement | undefined
  // console.log('slideDown', target.parentElement)
  if (target) {
    curSlider.value = target.parentElement
    curSliderButton.value = target
  }
  // slideDistance.value = event.clientX - curSlider.value.getBoundingClientRect().left
  // console.log(slideDistance.value)
  curSliderButton.value!.style.left = `${slideDistance.value}px`
  document.addEventListener("mousemove", handleSlideMove)
  document.addEventListener("mouseup", handleSlideUp)
}

const handleSlideMove = (event: MouseEvent): void => {
  event.preventDefault()
  const sliderMin = 0
  const sliderMax = curSlider.value!.getBoundingClientRect().right - curSlider.value!.getBoundingClientRect().left - 15
  slideDistance.value = event.clientX - curSlider.value!.getBoundingClientRect().left
  if (slideDistance.value <= sliderMin) {
    slideDistance.value = sliderMin
  }
  if (slideDistance.value >= sliderMax) {
    slideDistance.value = sliderMax
  }
  percent.value = Math.floor((slideDistance.value / sliderMax) * 100)
  // console.log('slideMove', percent.value, slideDistance.value / sliderMax)
  curSliderButton.value!.style.left = `${slideDistance.value}px`

}

const handleSlideUp = (): void => {
  // console.log('slideUp', event)
  document.removeEventListener("mousemove", handleSlideMove)
  document.removeEventListener('mouseup', handleSlideUp)
}
</script>

<template>
  <div class="doki-slider">
    <div class="doki-slider__slider"></div>
    <div class="doki-slider__button"
         @mousedown="handleSlideDown"

    >


    </div>
    <div class="doki-slider__percent">
      {{percent}}
    </div>
  </div>
</template>

<style scoped>

</style>