<script setup lang="ts">
import {onMounted, ref, useAttrs} from "vue";
import defaultImage from "./defaultImage.jpg";

const initialSize = ref<number[]>();
const isLazy = ref<string>(useAttrs().lazy === "" ? "lazy" : "eager");
const src = ref<string>(useAttrs().src as string || defaultImage);
const alt = ref<string>(useAttrs().alt as string ? useAttrs().alt as string : "image");
const size = ref<string>(useAttrs().size as string || "natural");
const height = ref<string>(useAttrs().height as string ? useAttrs().height as string: "");
const width = ref<string>(useAttrs().width as string ? useAttrs().width as string: "");

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
  // if (isLazy.value && img) {
  //   lazyLoading([img])
  // }
  // console.log(img)
  if (img instanceof HTMLImageElement) {
    img.onload = () => {
      initialSize.value = getImageSize(img)
      // console.log("onMounted", initialSize.value)
      adjustImgSize(img, initialSize.value)
    };
  }
});

const adjustImgSize = (target: HTMLImageElement, measure: number[]) => {

  const currentHeight = (height.value || measure[0]) as number
  const currentWidth = (width.value || measure[1]) as number
  if (size.value === "small") {
    target.style.height = currentHeight * 0.8 + "px"
    target.style.width = currentWidth * 0.8 + "px"
    // console.log("Small onMounted", target.style.height, target.style.width)
  } else if (size.value === "medium") {
    target.style.height = currentHeight * 1.2 + "px"
    target.style.width = currentWidth * 1.2 + "px"
    // console.log("Medium onMounted", target.style.height, target.style.width)
  } else if (size.value === "large") {
    target.style.height = currentHeight * 1.4 + "px"
    target.style.width = currentWidth * 1.4 + "px"
    // console.log("large onMounted", target.style.height, target.style.width)
  } else {
    target.style.height = currentHeight + "px"
    target.style.width = currentWidth + "px"
    // console.log("Natural onMounted", target.style.height, target.style.width)
  }
}

const lazyLoading = (imgs: HTMLImageElement[]) => {
  const observer = new IntersectionObserver(callback)
  imgs.forEach((img: HTMLImageElement) => {
    observer.observe(img);
  })
  function callback(entries: any) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement
        image.setAttribute('src', image.getAttribute('lazy_src') as string)
        observer.unobserve(image)
        console.log("load")
      }
    })
  }
}
</script>

<template>
<div class="doki-image" :id="imgID">
    <img
        class="image"
        :src="src"
        :alt="alt"
        :loading="isLazy"
        @error="handleError"
    />
</div>
</template>

<style scoped>

</style>