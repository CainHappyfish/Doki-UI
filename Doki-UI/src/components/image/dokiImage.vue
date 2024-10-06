<script setup lang="ts">
import {onMounted, ref, useAttrs} from "vue";
import defaultImage from "./defaultImage.jpg";

const initialSize = ref<number[]>();
const isLazy = ref<boolean>(useAttrs().lazy);
const src = ref<string>(useAttrs().src as string || defaultImage);
const alt = ref<string>(useAttrs().alt as string ? useAttrs().alt as string : "image");
const size = ref<string>(useAttrs().size as string || "natural");
// const height = ref<number>(useAttrs().height as number ? useAttrs().height as number: 60);
// const width = ref<number>(useAttrs().height as number ? useAttrs().height as number: 60);
// const measure =
const errorImg = ref<string>(useAttrs().error as string || defaultImage);
const imgID = ref<string>("dokiImg" + generateRandomNumber(1,114514));

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getImageSize = (image: HTMLImageElement) => {
  return [image.naturalHeight, image.naturalWidth];
};

const handleError = (event: Event) => {
  const error = event.target as HTMLImageElement;
  if (error) {
    error.src = errorImg.value;
  }
}

onMounted(() => {
  const target = document.querySelector("#"+imgID.value);
  const img = target!.querySelector("img");
  console.log(img)
  if (img instanceof HTMLImageElement) {
    img.onload = () => {
      initialSize.value = getImageSize(img)
      console.log("onMounted", initialSize.value)
      adjustImgSize(img, initialSize.value)
    };
  }
});

const adjustImgSize = (target: HTMLImageElement, measure: number[]) => {
  if (size.value === "small") {
    target.style.height = measure[0] * 0.8 + "px"
    target.style.width = measure[1] * 0.8 + "px"
    // console.log("Small onMounted", target.style.height, target.style.width)
  } else if (size.value === "medium") {
    target.style.height = measure[0] * 1.2 + "px"
    target.style.width = measure[1] * 1.2 + "px"
    // console.log("Medium onMounted", target.style.height, target.style.width)
  } else if (size.value === "large") {
    target.style.height = measure[0] * 1.4 + "px"
    target.style.width = measure[1] * 1.4 + "px"
    // console.log("large onMounted", target.style.height, target.style.width)
  } else {
    target.style.height = measure[0] + "px"
    target.style.width = measure[1] + "px"
    // console.log("Natural onMounted", target.style.height, target.style.width)
  }
};
</script>

<template>
<div class="doki-image" :id="imgID">
    <img
        class="image"
        :src="src"
        :alt="alt"
        @error="handleError"
    />
</div>
</template>

<style scoped>

</style>