<script setup lang="ts">
import {cascaderOption, menuOption} from "../../../types";
const props = defineProps<{
  options: cascaderOption[]
}>()




</script>

<template>
  <div class="cascader-selection">
    <div class="cascader-selection-item" >
    </div>
  </div>
</template>

<style scoped>
.cascader-selection {
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

  animation: linear 0.2s show;

}

.cascader-selection-item {
  margin: 0 10px;
  font-family: "Microsoft YaHei UI Light", sans-serif;

  border-radius: 5px;
  padding: 5px;
}

.cascader-selection::-webkit-scrollbar {
  display: none;
}

.cascader-selection-item:hover {
  cursor: pointer;
  background: rgba(187, 187, 187, 0.2);
}

@keyframes show {
  0% {
    height: 0;
  }
  33% {
    height: 50px;
  }
  66% {
    height: 100px;
  }
  100% {
    height: 150px;
  }
}



</style>