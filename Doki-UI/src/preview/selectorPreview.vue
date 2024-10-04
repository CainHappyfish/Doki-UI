<script setup lang="ts">


import DokiRadio from "../components/selector/dokiRadio.vue";
</script>

<template>
<div class="selector-container">
    <h2 class="title-2">Checkbox</h2>
    <div class="selector">
      <doki-checkbox value="ksm" label="ksm"></doki-checkbox>
      <doki-checkbox value="ykn" label="ykn"></doki-checkbox>
    </div>
    <div class="selector">
      <doki-checkbox value="enabled" label="enabled"></doki-checkbox>
      <doki-checkbox value="disabled" label="checkbox disabled"></doki-checkbox>
    </div>
  </div>

  <div class="selector-container">
    <h2 class="title-2">Radio</h2>
    <div class="selector">
      <doki-radio value="taki" label="taki" name="mygo"/>
      <doki-radio value="anon" label="anon" name="mygo"/>
    </div>
    <div class="selector">
      <doki-radio value="enabled1" label="enabled1" name="able"/>
      <doki-radio value="enabled2" label="enabled2" name="able"/>
      <doki-radio value="disabled" label="disabled" name="able" disabled=""/>

    </div>
  </div>
</template>


<style scoped>
.selector-container {
  margin: 5px 0;
  border: solid 1px cyan;
  border-radius: 5px;

}

.selector {
  margin: 5px;
  display: flex;
  gap: 10px;
}
</style>