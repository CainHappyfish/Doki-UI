<script setup lang="ts">
import { useAttrs } from "vue";

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
.doki-switch {

  width: 42px;
  height: 20px;
  background: white;

  border: 1px solid rgb(0, 170, 187);

  border-radius: 30px;

  display: flex;
  align-items: center;

  transition: all 0.3s linear;
  position: relative;
}

.switch-icon {
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 50%;

  cursor: pointer;
  /*border: 1px solid rgb(0, 170, 187);*/
  filter: drop-shadow(0 0 1px rgb(0, 170, 187));

  position: absolute;
  left: 4px;


   transition: all 0.3s linear;

  z-index: 2;
}

.switched-bg {
  background: rgb(0, 170, 187);
}

.switched-icon {
  transform: translateX(20px);
}
</style>