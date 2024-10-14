<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{
  autocomplete?: Array<string>,
}>()

const emits = defineEmits<{
  fill: [value: string]
}>()

const val = ref<string>()
const handleAutoFill = (event: MouseEvent, index: number) => {
  event.stopPropagation()
  // console.log("fill: ", props!.autocomplete![index])
  val.value = props!.autocomplete![index]
  emits("fill", val.value)
}



</script>

<template>
  <div class="auto-fill-container">
    <div class="auto-input-item" v-for="(item, index) in autocomplete" @click="(event) => handleAutoFill(event, index)">
      {{ item }}
    </div>
  </div>
</template>

<style scoped>
.auto-fill-container {
  min-width: 130px;
  max-height: 150px;
  background: white;

  border-radius: 5px;


  display: flex;
  flex-direction: column;
  justify-content: center;


  z-index: 3;

  position: absolute;
  top: 40px;

  padding: 10px;

  filter: drop-shadow(1px 0 2px rgba(0, 0, 0, 0.2));

  transition: all 0.3s ease-in-out;

  overflow: scroll;

  animation: linear 0.2s show;

}

.auto-input-item {
  margin: 0 10px;
  font-family: "Microsoft YaHei UI Light", sans-serif;

  border-radius: 5px;
  padding: 5px;
}

.auto-fill-container::-webkit-scrollbar {
  display: none;
}

.auto-input-item:hover {
  cursor: pointer;
  background: rgba(187, 187, 187, 0.2);
}





</style>