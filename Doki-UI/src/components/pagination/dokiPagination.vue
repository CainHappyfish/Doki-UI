<script setup lang="ts">
import {computed, ref, useAttrs} from "vue";

import prevIcon from "./public/left.svg"
import nextIcon from "./public/right.svg"

const paginationExisted = ref(true)
if (!useAttrs().total && !useAttrs().perPage) {
  paginationExisted.value = false
  console.error("Pagination undefined.")
}
const total = ref(useAttrs().total as number)
const perPage = ref(useAttrs().perPage as number)
const totalPage = computed(() => Math.ceil(total.value / perPage.value))
const visiblePageLength = ref<number>(useAttrs().visible as number ? useAttrs().visible as number : 6)
const fastIndex = ref(useAttrs().fast === "")
const jumpIndex = ref(useAttrs().jump === "")
const short = ref(useAttrs().short === "" ? "short-pagination" : "")
const startPageIndex = ref(1)

const pages = computed(() => {
  let pages: number[] = [];
  for (let i = 0; i < visiblePageLength.value; i++) {
    if (i > totalPage.value) break
    pages.push(startPageIndex.value + i + 1)
  }

  return pages
})



const onPrev = () => {
  if (startPageIndex.value === 1) { return }
  else {
    startPageIndex.value--
  }
}

const onNext = () => {
  if (startPageIndex.value === totalPage.value - visiblePageLength.value) { return }
  else {
    startPageIndex.value++
  }
}
</script>

<template>
  <div class="doki-pagination" :class="short" v-if="paginationExisted">
    <div class="pagination-prev" @click="onPrev">
      <img :src="prevIcon" alt="prev" style="width: 40px; height: 40px">
    </div>
    <div class="pagination-item page-start"> 1 </div>

    <div class="pagination-item" v-for="index in pages" :key="index"> {{ index }}</div>
    <div class="pagination-item"> {{ totalPage }} </div>

    <div class="pagination-next page-end" @click="onNext">
      <img :src="nextIcon" alt="next" style="width: 40px; height: 40px">
    </div>
  </div>
</template>

<style scoped>

</style>