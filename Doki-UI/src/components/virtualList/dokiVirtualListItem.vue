<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const isVisible = ref(true); // 是否显示内容

// 创建 IntersectionObserver，监视元素进入视窗
let observer: IntersectionObserver;

onMounted(() => {
  // 确保 .doki-virtual-list 存在
  const rootElement = document.querySelector('.doki-virtual-list');
  if (!rootElement) {
    console.error('Root element not found');
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry && entry.isIntersecting) {
          console.log('Element is intersecting');
          isVisible.value = true; // 当进入视窗时，显示内容
        }
      });
    },
    {
      root: rootElement, // 设置观察的根元素为容器
      rootMargin: '0px', // 设置根元素的可视区域边界
      threshold: 0.1 // 当元素的 10% 可见时触发
    }
  );

  // 选择需要观察的元素
  const items = document.querySelectorAll('.doki-virtual-list-item');
  items.forEach((item) => {
    observer.observe(item); // 观察每个列表项
  });
});

onBeforeUnmount(() => {
  // 组件卸载时，断开观察
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div class="doki-virtual-list-item" v-if="isVisible">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
