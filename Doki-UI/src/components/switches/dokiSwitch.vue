<script setup lang="ts">
const onClick = (event: Event) => {
  const target = event.target as HTMLElement
  target!.classList.toggle("switched-icon")
  target.parentElement!.classList.toggle("switched-bg")
  // target.classList.toggle("switched-bg")
  // const icon = target.querySelector("switch-icon")
}
</script>

<template>
  <div class="doki-switch" >
    <div class="switch-icon" @click="onClick">

    </div>
  </div>
</template>

<style scoped lang="scss">

</style>