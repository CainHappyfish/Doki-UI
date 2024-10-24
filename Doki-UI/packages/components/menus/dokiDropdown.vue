<script setup lang="ts">
import {ref} from "vue";

const menuActive = ref(false);

const onClick = (event: Event) => {
  const target = event.target as HTMLElement
  const container = target.parentElement?.parentElement as HTMLElement
  const menu = container.querySelector(".doki-dropdown__menu")

  // console.log(container, style)
  if (menu) {
    menu.classList.toggle("hide")
  }
  setTimeout(() => {
    menuActive.value = !menuActive.value
  }, 100)
}
</script>

<template>
  <div class="doki-dropdown">
    <div class="doki-dropdown__trigger" @click="onClick">
      <slot name="trigger"></slot>
    </div>

    <div class="doki-dropdown__menu" v-if="menuActive">
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "style/dropdown";
</style>