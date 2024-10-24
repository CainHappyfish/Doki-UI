<script setup lang="ts">
import {onMounted, ref, useSlots} from "vue";

import backIcon from "./public/back.svg"

const breadcrumbExisted = ref(false)
const titleExisted = ref(false)
const contentExisted = ref(false)


onMounted(() => {
  const breadcrumb = useSlots().breadcrumb
  const title = useSlots().title
  const content = useSlots().content

  breadcrumbExisted.value = breadcrumb !== undefined
  titleExisted.value = title !== undefined
  contentExisted.value = content !== undefined


})
</script>

<template>
  <div class="doki-page-header">
    <div class="doki-page-header__breadcrumb" v-if="breadcrumbExisted">
      <slot name="breadcrumb"></slot>
    </div>

    <div class="doki-page-header__header" >
      <div class="doki-page-header__back">
        <img :src="backIcon" alt="back"/>
        <div>BACK</div>
        <div class="back-divider">
          <span></span>
        </div>
      </div>
      <div class="doki-page-header__title" v-if="titleExisted">
        <slot name="title"></slot>
      </div>
    </div>

    <div class="doki-page-header__divider"></div>

    <div class="doki-page-header__content" v-if="titleExisted">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>