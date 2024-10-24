<script setup lang="ts">
import {ref, useAttrs} from "vue";

import doneIcon from "./public/correct.svg"

const title = ref(useAttrs().title ? useAttrs().title : "");
const icon = ref(useAttrs().icon);
const description = ref(useAttrs().description ? useAttrs().description : "");



</script>

<template>
  <div class="doki-step">
    <div class="doki-step__header" v-if="icon === undefined">
      <img :src="icon" alt="icon" v-if="icon"/>
      <div class="icon" v-else>
        <img :src="doneIcon" alt="done">
      </div>

      <div class="progress" />
    </div>

    <div class="doki-step__info">
      <div class="doki-step__title">
        {{ title }}
      </div>

      <div class="doki-step__description" v-if="description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "style/steps";
</style>