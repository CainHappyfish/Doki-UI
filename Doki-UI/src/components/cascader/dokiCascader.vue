<script setup lang="ts">
import DokiCascaderSelection from "./global/dokiCascaderSelection.vue";

const handleMenu = (event: Event) => {
  const target = event.currentTarget as HTMLElement
  const menuIcon = target.querySelector('.menu-icon');
  menuIcon?.classList.toggle('menu-icon-inactive')
  menuIcon?.classList.toggle('menu-icon-active')
}
</script>

<template>
  <div class="doki-cascader" @click="handleMenu">
    <doki-cascader-selection />
    <input class="cascader-input" type="text" placeholder="select" readonly>
    <svg class="menu-icon menu-icon-inactive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="rgba(187, 187, 187, 0.7)" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg>
  </div>
</template>

<style scoped>
.menu-icon {
  width: 20px;
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