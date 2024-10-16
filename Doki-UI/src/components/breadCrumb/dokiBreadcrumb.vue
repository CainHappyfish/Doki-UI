<script setup lang="ts">
import {nextTick, ref} from "vue";

import separatorIcon from "./public/separator.svg"

interface breadCrumbItem {
  label: string
  url?: string
}

const props = defineProps<{
  items: breadCrumbItem[]
  separator?: string
}>()

const separator = ref(props.separator ? props.separator : separatorIcon)

// const container = ref<HTMLElement | null>()
nextTick(() => {

})
</script>

<template>
  <div class="doki-breadcrumb" >
    <div class="breadcrumb-item" v-for="(item, index) in items" :class="item.url ? '': 'muted'">
      <a class="breadcrumb-item__anchor" :href="item.url">
        {{ item.label  }}
      </a>
      <div class="breadcrumb-separator" v-if="index !== items.length - 1">
        <img :src="separator" alt="separator">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>