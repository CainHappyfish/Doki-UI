<script setup lang="ts">
import {ref, useAttrs} from "vue";
import defaultAvatar from "./avatar.jpg"

const shape = ref<string>(useAttrs().shape ? useAttrs().shape + "-style": "")
const src = ref<string>(useAttrs().src as string || defaultAvatar)
const size = ref<number>(useAttrs().size as number ? useAttrs().size as number : 60)
const alt = ref<string>(useAttrs().alt as string ? useAttrs().alt as string: "style")

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

<style scoped lang="scss">
@use "style/avatarIndex";
</style>