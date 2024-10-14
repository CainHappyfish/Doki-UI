<script setup lang="ts">
import {ref, useAttrs} from "vue";

interface navItem {
  label: string
  url: string
  icon?: string
}

const props = defineProps<{
  navs: navItem[],
}>()

const type = ref(useAttrs().type ? "doki-navbar__" + useAttrs().type : "doki-navbar__horizontal")
</script>

<template>
  <div class="doki-navbar" :class="type">
    <div class="doki-navbar-item" v-for="item in navs">
      <a :href="item.url" target="_blank">
        {{ item.label }}
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>