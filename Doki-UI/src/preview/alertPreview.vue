<script setup lang="ts">

</script>

<template>
  <div class="alert-container">
    <h2 class="title-2">Alerts</h2>
    <div class="alerts">
      <h3 class="title-3">Default Alerts</h3>
      <doki-alert>default</doki-alert>
      <doki-alert type="info">info</doki-alert>
      <doki-alert type="success">success</doki-alert>
      <doki-alert type="warning">warning</doki-alert>
      <doki-alert type="danger">danger</doki-alert>
    </div>

    <div class="alerts">
      <h3 class="title-3">Icon</h3>
      <doki-alert icon>default</doki-alert>
      <doki-alert type="info" icon>info</doki-alert>
      <doki-alert type="success" icon>success</doki-alert>
      <doki-alert type="warning" icon>warning</doki-alert>
      <doki-alert type="danger" icon>danger</doki-alert>
    </div>

    <div class="alerts">
      <h3 class="title-3">Description</h3>
      <doki-alert icon>
          default
          <template #description>description</template>
      </doki-alert>
      <doki-alert type="info" icon>
        info
        <template #description>description</template>
      </doki-alert>
      <doki-alert type="success" icon>
        success
        <template #description>description</template>
      </doki-alert>
      <doki-alert type="warning" icon>
        warning
        <template #description>description</template>
      </doki-alert>
      <doki-alert type="danger" icon>
        danger
        <template #description>description</template>
      </doki-alert>
    </div>
  </div>
</template>

<style scoped>
.alert-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.alerts {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

</style>