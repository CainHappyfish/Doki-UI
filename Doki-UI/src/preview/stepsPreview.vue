<script setup lang="ts">
import {ref} from "vue";
import DokiSteps from "../components/steps/dokiSteps.vue";

const active = ref(0)

const onClick = () => {
  active.value = active.value + 1
}
</script>

<template>
  <div class="steps-container">
    <h2 class="title-2">steps</h2>
    <doki-steps :active="active">
      <doki-step title="Step 1" />
      <doki-step title="Step 2" />
      <doki-step title="Step 3" />
    </doki-steps>

    <doki-button type="primary" @click="onClick"> next </doki-button>
  </div>
</template>

<style scoped>
.steps-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.doki-button {
  margin:  10px 0;
}
</style>