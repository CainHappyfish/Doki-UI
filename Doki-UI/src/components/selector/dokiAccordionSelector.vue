<script setup lang="ts">
import {ref} from "vue";

import closeIcon from "../../assets/Close.svg"

interface Data {
  value: string
  label: string
  content: string
}


const props = withDefaults(defineProps<{
  data: Data[]
}>(), {
  data: () => [{
    value: "",
    label: "",
    content: "",
  }],
})

const closeID = ref(props.data[0] + "-close-id")
const clearAllCheckboxes = () => {
  props.data.forEach(item => {
    const checkbox = document.querySelector(`input#${item.label}`) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  });
}
</script>

<template>
  <div class="doki-accordion-selector">
    <div class="accordion-item" v-for="item in data">
      <input type="checkbox" :value="item.value" :name="item.label" :id="item.label"/>
      <label class="accordion-label" :for="item.label">
        {{ item.value }}
      </label>
      <div class="accordion-content">
        <p>{{ item.content }}</p>
      </div>
    </div>
    <div class="accordion-item ">
      <input type="checkbox" :id="closeID"/>
      <label class="accordion-label close-accordion" :for="closeID" @click="clearAllCheckboxes">
        <img :src="closeIcon" alt="close icon">
      </label>

    </div>

  </div>



</template>

<style scoped>

</style>