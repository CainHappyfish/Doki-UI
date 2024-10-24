<script setup lang="ts">
import {computed, ref, useAttrs} from "vue";
import DokiAutoComplete from "./global/dokiAutoComplete.vue";
import clean from "../../assets/clean.svg"

const props = defineProps<{
  autocomplete?: Array<string>
}>()

const type = useAttrs().type as string
const isAutoComplete = type && props.autocomplete && props.autocomplete.length > 0

const isShowed = ref(false)

const isMatchMode = type.toLowerCase() === "match"

// 当前输入
const val = ref<string>("")
const getMatchedData = () => {
  let result: Array<string> = []
  for (const item of props.autocomplete!) {
    if(item.startsWith(val.value)) result.push(item)
  }

  if (result.length === 0) return ["No match"]

  return result
}
const fillData = computed(() => {
  return isMatchMode && isAutoComplete ? getMatchedData() : props.autocomplete
})

// console.log(fillData.value)


// 点击输入框弹出自动填充
const handleAutoComplete = (): void => {
  isShowed.value = !isShowed.value
}

const handleBlur = () => {
  setTimeout(() => {
    document.querySelector(".auto-fill-container")!.classList.toggle("hide")
    setTimeout(() => {
      isShowed.value = false;
    }, 100)
  },100)
}

function handleValueChange(value: string): void {
  val.value = value
}

const handleClean = () => {
  val.value = ''
}
</script>

<template>
  <div class="auto-input-container" v-bind="$attrs">
    <doki-auto-complete :autocomplete="fillData" v-if="isAutoComplete && isShowed" @fill="handleValueChange"/>
    <input class="doki-auto-input" @focus="handleAutoComplete" @blur="handleBlur" v-model="val">
    <img class="clean-icon" :src="clean" alt="Clean icon" @click="handleClean"/>
  </div>
</template>

<style scoped lang="scss">
@use "style/autoInput";

.auto-input-container {
  position: relative;
}



.clean-icon {
  width: 30px;

  position: absolute;

  /*left: 125px;*/
  /*top: 6px;*/

  z-index: 2;

  cursor: pointer;
}
</style>