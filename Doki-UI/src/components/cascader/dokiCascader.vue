<script setup lang="ts">
import DokiCascaderSelection from "./global/dokiCascaderSelection.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {cascaderOption} from "../../types";

const props = defineProps<{
  options: cascaderOption[]
}>()


const isShow = ref(false)
const handleMenu = (event: Event) => {
  const target = event.currentTarget as HTMLElement
  const menuIcon = target.querySelector('.menu-icon')
  const menuSelection = target.querySelector('.cascader-menu')

  isShow.value = !isShow.value

  menuSelection?.classList.toggle('hide')


  target.classList.toggle('doki-cascader-focus')
  menuIcon?.classList.toggle('menu-icon-inactive')
  menuIcon?.classList.toggle('menu-icon-active')

}

const handleCascaderBlur = (event: Event) => {
  const target = event.target as HTMLElement
  // console.log("global click", target.classList.contains('doki-cascader') || target.classList.contains('cascader-input') || target.classList.contains('cascader-menu'))
  if (target && !(target.classList.contains('doki-cascader') ||
      target.classList.contains('cascader-input') ||
      target.classList.contains('cascader-menu')
  )) {
    const menuIcon = document.querySelector('.menu-icon')
    menuIcon!.classList.remove("menu-icon-active")
    menuIcon!.classList.add('menu-icon-inactive')
    // console.log(menuIcon!.classList)
    isShow.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleCascaderBlur)
})

onUnmounted(() => {
  document.removeEventListener('click',handleCascaderBlur)
})
</script>

<template>
  <div class="doki-cascader" @click="handleMenu">
    <doki-cascader-selection :options="options" v-if="isShow" />
    <input class="cascader-input" type="text" placeholder="select"  readonly>
    <svg class="menu-icon menu-icon-inactive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="rgba(187, 187, 187, 0.7)" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg>
  </div>
</template>

<style scoped>
.menu-icon {
  width: 20px;
  z-index: -1;

  cursor: pointer;
}

.doki-cascader {
  display: flex;
  align-items: center;

  position: relative;


}

.menu-icon {
  cursor: pointer;
}

.menu-icon-inactive {
  animation: linear infinite 1s bounce;
  cursor: pointer;
}

.menu-icon:hover {
  animation: none;
}

.menu-icon-active {
  transform: rotate(-180deg);
}

.hide {
  animation: linear 0.1s hide;
}

@keyframes hide {
  0% {
    opacity: 100%;
  }
  33% {
    opacity: 66%;
  }
  66% {
    opacity: 33%;
  }
  100% {
    opacity: 0;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  33% {
    transform: translateY(-1px);
  }
  66% {
    transform: translateY(1px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>