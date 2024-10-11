<script setup lang="ts">
import {computed, ref, useAttrs, watch} from "vue";

import prevIcon from "./public/left.svg"
import nextIcon from "./public/right.svg"

const paginationExisted = ref(true)
if (!useAttrs().total && !useAttrs().perPage) {
  paginationExisted.value = false
  console.error("Pagination undefined.")
}
const total = ref(useAttrs().total as number)
const perPage = ref(useAttrs().perPage as number || 6)
const totalPage = computed(() => Math.ceil(total.value / perPage.value))
const visiblePageLength = ref<number>(+useAttrs().visible ? +useAttrs().visible : 6)
// const fastIndex = ref(useAttrs().fast === "")
const jumpable = ref(useAttrs().jumpable === "")
const short = ref(useAttrs().short === "" ? "short-pagination" : "")
const startPageIndex = ref<number>(1)
const curIndex = ref(1)

const leftFold = ref(false)
const rightFold = ref(totalPage.value - visiblePageLength.value > 0)

const pages = computed(() => {
  let pages: number[] = [];
  for (let i = 0; i < visiblePageLength.value && i < totalPage.value - 2 ; i++) {
    if (i > totalPage.value) break
    pages.push(startPageIndex.value + i + 1)
  }

  return pages
})



const onPrev = () => {
  console.log(startPageIndex.value)
  const target = event.target as HTMLElement
  const container = target.parentElement?.parentElement as HTMLElement
  const curPages = [...container.querySelectorAll(".pagination-item").values()]
  const start = container.querySelector(".page-start") as HTMLElement
  const end = container.querySelector(".page-end") as HTMLElement
  end.classList.remove("chosen")
  curPages.forEach((page) => {
    page.classList.remove("chosen")
  })
  // console.log(curPages || [])
  if (curIndex.value === 1) return
  curIndex.value--

  if (curIndex.value > 1 + Math.ceil(+visiblePageLength.value / 2)) {
    // 最右侧
    if (curIndex.value > totalPage.value - visiblePageLength.value) {
      curPages[curIndex.value % (totalPage.value - visiblePageLength.value)].classList.add("chosen")

    } else {
      rightFold.value = true
      if (curIndex.value === totalPage.value - visiblePageLength.value) {
        startPageIndex.value = curIndex.value - Math.ceil(visiblePageLength.value / 2)
      } else {
        startPageIndex.value--
      }
      curPages[Math.floor(+visiblePageLength.value / 2)].classList.add("chosen")
    }


  } else {
    // 最左侧
    if (curIndex.value === 1 + Math.ceil(+visiblePageLength.value / 2)) {
      startPageIndex.value--
    }
    leftFold.value = false
    if (curIndex.value === 1) {
      start.classList.add("chosen")
    } else {
      if (curIndex.value < visiblePageLength.value && curIndex.value > 1) {
        curPages[curIndex.value - Math.floor(+visiblePageLength.value / 2)].classList.add("chosen")
      }
    }
  }

}

const onNext = (event: Event) => {
  const target = event.target as HTMLElement
  const container = target.parentElement?.parentElement as HTMLElement
  const curPages = [...container.querySelectorAll(".pagination-item").values()]
  const start = container.querySelector(".page-start") as HTMLElement
  const end = container.querySelector(".page-end") as HTMLElement
  start.classList.remove("chosen")
  // console.log(totalPage.value - Math.ceil(+visiblePageLength.value / 2), totalPage.value - visiblePageLength.value)
  curPages.forEach((page) => {
    page.classList.remove("chosen")
  })
  if (curIndex.value === totalPage.value) {
    end.classList.add("chosen")
    return
  }
  curIndex.value++
  // if (startPageIndex.value === totalPage.value - visiblePageLength.value ) return
  if (curIndex.value >= +visiblePageLength.value) {
    leftFold.value = true
    if (curIndex.value > totalPage.value - visiblePageLength.value) {
      // 最右侧
      rightFold.value = false
      startPageIndex.value = totalPage.value - visiblePageLength.value - 1
      if (curIndex.value === totalPage.value) {
        end.classList.add("chosen")
      } else {
        curPages[curIndex.value % (totalPage.value - visiblePageLength.value)].classList.add("chosen")
      }
    } else {
      startPageIndex.value++
      curPages[Math.floor(+visiblePageLength.value / 2)].classList.add("chosen")
    }
  } else {
    // 最左侧
    curPages[curIndex.value % visiblePageLength.value - Math.floor(+visiblePageLength.value / 2)].classList.add("chosen")
  }

}

const onPrevPages = () => {
  if (startPageIndex.value - visiblePageLength.value <= +visiblePageLength.value) {
    // 最左侧页面组
    startPageIndex.value = 1
    leftFold.value = false
  }
  else {
    startPageIndex.value = startPageIndex.value - (+visiblePageLength.value)
    rightFold.value = true

  }
}

const onNextPages = () => {
  console.log(startPageIndex.value)
  if (startPageIndex.value + visiblePageLength.value >= totalPage.value - visiblePageLength.value - 1) {
    startPageIndex.value = totalPage.value - visiblePageLength.value - 1
    rightFold.value = false
  } else {
    startPageIndex.value = startPageIndex.value + (+visiblePageLength.value)
    leftFold.value = true
    rightFold.value = true
  }
}

const onClick = (event: Event) => {
  const target = event.target as HTMLElement
  // console.log(target.textContent)
  const container = target.parentElement as HTMLElement
  const curPages = [...container.querySelectorAll(".pagination-item").values()]
  const start = container.querySelector(".page-start") as HTMLElement
  const end = container.querySelector(".page-end") as HTMLElement
  // console.log(curPages)
  // console.log(totalPage.value, startPageIndex.value, visiblePageLength.value)
  curIndex.value = +target.textContent
  if (totalPage.value - visiblePageLength.value <= 0) {
    start.classList.remove("chosen")
    end.classList.remove("chosen")
    curPages.forEach(page => {
      // console.log(page.textContent, curIndex.value)
      page.classList.remove("chosen")
      if (+page.textContent === curIndex.value) {
        page.classList.add("chosen")
      }
    })
  } else if (+target.textContent > totalPage.value - visiblePageLength.value) {
    // 最右侧
    // console.log(target.textContent)

    leftFold.value = totalPage.value - visiblePageLength.value > 0 && true
    rightFold.value = false
    startPageIndex.value = totalPage.value - visiblePageLength.value - 1
    start.classList.remove("chosen")
    end.classList.remove("chosen")
    curPages.forEach(page => {
      page.classList.remove("chosen")
    })
    if (curIndex.value === totalPage.value) {
      end.classList.add("chosen")
    } else {
      curPages[curIndex.value % (totalPage.value - visiblePageLength.value)].classList.add("chosen")
    }
    // console.log("---------------------------")
  } else if (+target.textContent <= visiblePageLength.value - 1) {
    // 最左侧
    rightFold.value = true
    startPageIndex.value = 1
    leftFold.value = false
    start.classList.remove("chosen")
    end.classList.remove("chosen")
    curPages.forEach(page => {
      page.classList.remove("chosen")
    })

    if (curIndex.value === 1) {
      start.classList.add("chosen")
    } else {
      curPages[curIndex.value - Math.floor(+visiblePageLength.value / 2)].classList.add("chosen")
    }
  } else {
    // 中间部分
    startPageIndex.value = Number(target.textContent) - Math.ceil(+visiblePageLength.value / 2)
    leftFold.value = totalPage.value - visiblePageLength.value > 0 && true
    rightFold.value = totalPage.value - visiblePageLength.value > 0 && true
    start.classList.remove("chosen")
    end.classList.remove("chosen")
    curPages.forEach(page => {
      page.classList.remove("chosen")
    })

    curPages[Math.floor(+visiblePageLength.value / 2)].classList.add("chosen")

  }


}

const onJump = (e: Event) => {
  const target = e.target as HTMLInputElement
  const container = target.parentElement.parentElement as HTMLElement
  const curPages = container.querySelectorAll(".pagination-item")
  const start = container.querySelector(".page-start") as HTMLElement
  const end = container.querySelector(".page-end") as HTMLElement
  const inputVal = +target.value;

  // console.log(inputVal)
  if (inputVal >= 1 && inputVal <= totalPage.value) {
    curIndex.value = inputVal;  // 更新当前页索引
  } else if (inputVal < 1) {
    curIndex.value = 1;  // 输入值小于 1 时跳转到第一页
  } else if (inputVal > totalPage.value) {
    curIndex.value = totalPage.value;  // 输入值超过总页数时跳转到最后一页
  } else {
    curIndex.value = curIndex.value;
  }

  target.blur()

  start.classList.remove("chosen")
  end.classList.remove("chosen")
  curPages.forEach(page => {
    page.classList.remove("chosen")
  })
  if (curIndex.value < visiblePageLength.value) {
    // 在最左侧
    startPageIndex.value = 1
    leftFold.value = false
    if (totalPage.value > visiblePageLength.value) {
      rightFold.value = true
    }

    if (curIndex.value === 1) {
      start.classList.add("chosen")
    } else {
      curPages[curIndex.value - Math.floor(+visiblePageLength.value / 2)].classList.add("chosen")
    }

  } else if (curIndex.value <= totalPage.value - visiblePageLength.value) {
    // 中间
    if (totalPage.value > visiblePageLength.value) {
      leftFold.value = true
      rightFold.value = true
    }
    startPageIndex.value = curIndex.value - Math.ceil(+visiblePageLength.value / 2)
    curPages[Math.floor(+visiblePageLength.value / 2)].classList.add("chosen")
  } else {
    // 最右侧
    rightFold.value = false
    if (totalPage.value > visiblePageLength.value) {
      leftFold.value = true
      startPageIndex.value = totalPage.value - visiblePageLength.value - 1
    }
    if (curIndex.value === totalPage.value) {
      end.classList.add("chosen")
    } else {
      curPages[curIndex.value % (totalPage.value - visiblePageLength.value)].classList.add("chosen")
    }

  }

};


</script>

<template>
  <div class="doki-pagination" :class="short" v-if="paginationExisted">
    <div class="total-count">
      Total {{ total }}
    </div>
    <div class="pagination">
      <div class="pagination-prev" @click="onPrev">
        <img :src="prevIcon" alt="prev" style="width: 40px; height: 40px">
      </div>
      <div class="page-start chosen" @click="onClick">1</div>
      <div class="page-fold" v-if="leftFold" @click="onPrevPages">...</div>

      <div class="pagination-item" v-for="index in pages" @click="onClick"> {{ index }}</div>

      <div class="page-fold" v-if="rightFold" @click="onNextPages">...</div>
      <div class="page-end" @click="onClick"> {{ totalPage }} </div>


      <div class="pagination-next" @click="onNext">
        <img :src="nextIcon" alt="next" style="width: 40px; height: 40px">
      </div>

    </div>

    <div class="pagination-jump" v-if="jumpable">
      <p>Go to </p>
      <input type="number" v-model="curIndex" @keydown.enter="onJump">
    </div>

  </div>
</template>

<style scoped>

</style>