<script setup lang="ts">
import {computed, nextTick, onMounted, ref, render, useAttrs, useSlots, watch, watchEffect} from "vue";

const slots = useSlots()
const itemLength = ref(0)
const start = ref(0)

const visibleHeight = ref(useAttrs().height ? Number(useAttrs().height) : 600)
const visibleWidth = ref(useAttrs().width ? Number(useAttrs().width) : 1000)
const itemHeight = ref(0)
// const visibleItemLength = ref(8)
const visibleItemLength = computed(() => {
  return itemHeight.value === 0 ? 8 : Math.floor(visibleHeight.value / itemHeight.value)
})
const slotContent = slots.default ? slots.default() : []
const slotVNodes = slotContent[0].children

// 计算可见的 slot 元素
const visibleItems = computed(() => {
  // const temp = slotContent[0].children[0]
  // 多渲染一个作为缓冲
  return slotContent[0].children.slice(start.value, start.value + visibleItemLength.value + 1);
});

// 缓存
interface cacheData {
  index: number
  top: number
  bottom: number
}
const cache: cacheData[] = []

// 容器总高度
const totalHeight = ref(0)

// 当前offset
const startOffset = ref(0)

// console.log(visibleItems.value)
// 监控插槽内容并设置元素总数
watchEffect(() => {
  nextTick(() => {
    if (slots) {
      if (slotContent[0]?.children) {
        itemLength.value = slotContent[0].children.length as number;
        // console.log(itemLength.value);
      }
    }
  });
});

const generateRandomString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

const random = ref("vl-"+generateRandomString(6))

onMounted(() => {
  // console.log("#" + random.value)
  const container = document.querySelector("#"+random.value);
  const inner = container?.querySelector(".doki-virtual-list-inner")


  // 对每个 vnode 创建一个单独的 div 容器来渲染

  for (let i = 0; i < visibleItemLength.value; i++) {
    const vnode = visibleItems.value[i]
    const wrapper = document.createElement('div'); // 创建一个新的容器
    wrapper.classList.add("doki-virtual-list-item")
    inner?.appendChild(wrapper); // 将容器添加到父容器中
    render(vnode, wrapper); // 渲染 vnode 到这个容器中
    const style = getStylesByClassName(vnode.props.class)
    // 计算 item 高度
    const height = parseInt(style?.height + style?.marginTop + style?.marginBottom)
    if (itemHeight.value === 0) itemHeight.value = height
    itemHeight.value = Math.min(itemHeight.value, height)
    // console.log(itemHeight.value, visibleItemLength.value, visibleItems.value.length)
    // 计算top值
    const startOffset = cache[i-1] ? cache[i-1].bottom : 0
    // 缓存已渲染的元素与锚点元素的位置信息
    setCache(i, startOffset, height)
  }


  // 获取容器总高度
  if (totalHeight.value === 0) {
    // console.log("total: ", totalHeight.value)
    slotVNodes.forEach(vnode => {
      const className = vnode.props.class
      // console.log(className, getStylesByClassName(className)?.height)
      totalHeight.value = totalHeight.value + parseInt(getStylesByClassName(className)?.height)
    })
    // 还需要加上最后一项长度
    const last = slotVNodes[slotVNodes.length-1].props.class
    totalHeight.value = totalHeight.value + parseInt(getStylesByClassName(last)?.height)

  }
  // console.log(cache)


});

// 滚动处理
const handleScroll = (event: Event) => {
  // console.log(cache)
  const target = event.target as HTMLElement
  const scrollTop = target.scrollTop
  const container = target.querySelector(".doki-virtual-list-container") as HTMLElement
  const inner = container.querySelector(".doki-virtual-list-inner")
  // console.log(target.scrollTop)

  // 向下滑动时，缓存新的数据
  // 限制滚动位移，确保不超出总内容高度
  const maxScrollTop = totalHeight.value - visibleHeight.value;
  const translateY = Math.min(scrollTop, maxScrollTop);

  inner.style.transform = `translateY(${translateY}px)`; // 更新滚动位置

  // container.style.top = scrollTop + 'px'
  start.value = Math.floor(scrollTop / itemHeight.value)
  // console.log(start.value, visibleItems.value)

}

const renderVisibleItems = () => {
  const container = document.querySelector("#" + random.value);
  const inner = container?.querySelector(".doki-virtual-list-inner")
  if (inner) {
    inner.innerHTML = ''; // 清空容器

    visibleItems.value.forEach((vnode, index) => {
      const wrapper = document.createElement('div'); // 创建一个新的 div 容器
      wrapper.classList.add("doki-virtual-list-item");
      inner.appendChild(wrapper); // 将容器添加到父容器中
      render(vnode, wrapper); // 渲染 vnode 到这个容器中
    });
  }
};

watch(visibleItems, () => {
  renderVisibleItems()
})


function getStylesByClassName(className: string): CSSStyleDeclaration | null {
  const element = document.querySelector(`.${className}`)
  if (element) {
    return getComputedStyle(element)
  }
  return null
}

function setCache(i: number, topVal: number, height: number) {
  // 缓存已渲染的元素与锚点元素的位置信息
  const node: cacheData = {
    index: i,
    top: topVal,
    bottom: topVal + height
  }

  cache.push(node)
}
</script>

<template>
  <div class="doki-virtual-list" @scroll="handleScroll" :style="{height: visibleHeight +'px', width: visibleWidth + 'px'}">
    <slot v-if="false" ></slot>
    <div class="doki-virtual-list-container"
         :id="random"
         :style="{minHeight: totalHeight + 'px', maxHeight: totalHeight + 'px'}"
    >
      <div class="doki-virtual-list-inner"/>
    </div>
  </div>
</template>
