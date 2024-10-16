<script setup lang="ts">
import {computed, ref, useAttrs} from "vue";

const props = defineProps<{
  tableItems: Record<string, string | number>[]
}>()

const tableHeadItems = ref<string[]>([...Object.keys(props.tableItems[0])])
const tableBodyItems = ref<any[]>([])

for (let i = 0; i < props.tableItems.length; i++) {
  const row = [...Object.values(props.tableItems[i])]
  tableBodyItems.value.push(row)
}

const border = ref(useAttrs().border === "")
const height = ref(useAttrs().height ? useAttrs().height as number : "")
const position = computed(() => {
  if (useAttrs().position === "left") {
    return "left"
  } else if (useAttrs().position === "right") {
    return "right"
  } else {
    return "center"
  }
})
const stripe = ref(useAttrs().stripe === "" ? "stripe" : "")


</script>

<template>
  <div class="doki-table-container">
    <!-- 表头部分 -->
    <table class="doki-table">
      <thead>
        <tr>
          <th v-for="item in tableHeadItems" :key="item">
            <div class="cell">{{ item }}</div>
          </th>
        </tr>
      </thead>
    </table>

    <!-- 表体部分（带滚动条） -->
    <div class="table-body-wrapper">
      <table
          class="doki-table"
         :style="{textAlign: position, height: height + 'px'}">
        <tbody :class="stripe">
          <tr v-for="(items, index) in tableBodyItems" :key="index">
            <td v-for="(item, idx) in items" :key="idx">
              <div class="cell">{{ item }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<style scoped>

</style>