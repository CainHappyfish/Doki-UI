<script setup lang="ts">
import {cascaderOption} from "../../../types";
import {computed, ref} from "vue";
const props = withDefaults(defineProps<{
  options: cascaderOption[]
  level?: number
  selected: string[]
}>(), {
  level: 0
})

const emits = defineEmits<{
  change: [value: string, label: string, level: number, selected: string[]]
}>()

let firstMenu: string[] = []
// let secondMenu: string[] = []
for (const option of props.options) {
  firstMenu.push(option.value)
}

const curChildIndex = ref(-1)

const secMenuOpen = ref(false)

const getSecMenu = (event: Event) => {
  event.stopPropagation()
  const index: number = parseInt((event.target as HTMLElement).dataset.index!)
  curChildIndex.value = index
  const items = props.options[index].children
  if (items && items.length > 0) {
    secMenuOpen.value = true
  }
  props.selected.push(props.options[index].value)
  emits("change", props.options[index].value, props.options[index].label, props.level, props.selected)
}

const childMenu = computed(() => {
  return curChildIndex.value >= 0 ? props.options[curChildIndex.value].children! : []
})



const closeSecMenu = () => {
  secMenuOpen.value = false
}

const handleChange = (value: string, label: string, level: number, selected: string[]) => {
  emits("change", value, label, level, selected)
}
</script>

<template>
  <div class="cascader-menu" >
    <div class="cascader-menu-item"
     v-for="(item, index) in firstMenu"
     :data-index="index"
     @click="getSecMenu"
    >
      {{ item }}
    </div>


  </div>

  <div class="child-menu"  v-if="secMenuOpen">
    <doki-cascader-selection :options="childMenu" :level="level + 1" :key="curChildIndex" :selected="selected" @change="handleChange"/>

  </div>
</template>

<style scoped>
.cascader-menu {
  min-width: 130px;
  max-height: 150px;
  background: white;

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;


  z-index: 3;

  position: absolute;
  top: 35px;
  left: 0;

  padding: 10px;

  filter: drop-shadow(1px 0 2px rgba(0, 0, 0, 0.2));

  transition: all 0.3s ease-in-out;

  overflow: scroll;

  animation: linear 0.1s show;


}

.cascader-menu-item {
  margin: 0 10px;
  font-family: "Microsoft YaHei UI Light", sans-serif;

  border-radius: 5px;
  padding: 5px;
}

.cascader-menu::-webkit-scrollbar {
  display: none;
}

.cascader-menu-item:hover {
  cursor: pointer;
  background: rgba(187, 187, 187, 0.2);
}

@keyframes show {
  0% {
    opacity: 0;
  }
  33% {
    opacity: 33%;
  }
  66% {
    opacity: 66%;
  }
  100% {
    opacity: 1;
  }
}

.child-menu {
  position: absolute;
  left: 160px;

}

</style>