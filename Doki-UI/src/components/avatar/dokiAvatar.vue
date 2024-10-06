<script setup lang="ts">
import {ref, useAttrs} from "vue";
import defaultAvatar from "./avatar.jpg"

const shape = ref<string>(useAttrs().shape ? useAttrs().shape + "-avatar": "")
const src = ref<string>(useAttrs().src as string || defaultAvatar)
const size = ref<number>(useAttrs().size as number ? useAttrs().size as number : 60)
const alt = ref<string>(useAttrs().alt as string ? useAttrs().alt as string: "avatar")

console.log(` height: ${size.value}px , width: ${size.value}px `)

</script>

<template>
  <div class="doki-avatar"
       :style="{ height: size + 'px' , width: size + 'px' }"
  >
    <img
        class="doki-avatar"
        :src="src"
        :alt="alt"
        :class="shape"
        :style="{ height: size + 'px' , width: size + 'px' }"/>
  </div>
</template>

<style scoped>

</style>