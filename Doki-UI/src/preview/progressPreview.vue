<script setup lang="ts">

</script>

<template>
  <div class="progress-container">
    <h2 class="title-2">Progress</h2>
    <div class="progress">
      <h3 class="title-3">Basic Progress</h3>
      <doki-progress :percentage="50"/>
      <doki-progress :percentage="100"/>
      <doki-progress :percentage="100" status="success"/>
      <doki-progress :percentage="80" status="warning"/>
      <doki-progress :percentage="20" status="fail"/>

    </div>

    <div class="progress">
      <h3 class="title-3">Text Inner</h3>
      <doki-progress :percentage="50" inner/>
      <doki-progress :percentage="100" inner/>
      <doki-progress :percentage="100" status="success" inner/>
      <doki-progress :percentage="80" status="warning" inner/>
      <doki-progress :percentage="20" status="fail" inner/>

    </div>
  </div>
</template>

<style scoped>
.progress-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}
</style>