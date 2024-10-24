<script setup lang="ts">
import topIcon from "./public/backtop.svg"
import {onMounted, onUnmounted, ref} from "vue";

const showBackToTop = ref(false);

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const handleScroll = () => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  showBackToTop.value = scrollPosition > 100; // 滚动超过100px时显示按钮
};

onMounted(() => {
  document.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="doki-backtop" @click="backToTop" v-if="showBackToTop">
    <img :src="topIcon" alt="top"/>
  </div>
</template>

<style scoped>

</style>