<script setup lang="ts">


</script>

<template>
  <div class="layout-container">
    <h2 class="title-2">Layout</h2>
    <h3 class="title-3">Normal Layout</h3>
    <div class="layout-preview">
      <doki-row>
        <doki-col>
          <div class="layout-item layout-1"/>
        </doki-col>

      </doki-row>

      <doki-row>
        <doki-col :width="12">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="12">
          <div class="layout-item layout-2"/>
        </doki-col>
      </doki-row>

      <doki-row>
        <doki-col :width="8">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="8">
          <div class="layout-item layout-2"/>
        </doki-col>
        <doki-col :width="8">
          <div class="layout-item layout-1"/>
        </doki-col>
      </doki-row>

      <doki-row>
        <doki-col :width="6">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="6">
          <div class="layout-item layout-2"/>
        </doki-col>
        <doki-col :width="6">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="6">
          <div class="layout-item layout-2"/>
        </doki-col>
      </doki-row>

      <doki-row>
        <doki-col :width="4">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="4">
          <div class="layout-item layout-2"/>
        </doki-col>
        <doki-col :width="4">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="4">
          <div class="layout-item layout-2"/>
        </doki-col>
        <doki-col :width="4">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="4">
          <div class="layout-item layout-2"/>
        </doki-col>
      </doki-row>

    </div>

    <h3 class="title-3">Gap Layout</h3>
    <div class="layout-preview">
      <doki-row :gap="10">
        <doki-col :width="12">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="12">
          <div class="layout-item layout-2"/>
        </doki-col>
      </doki-row>

      <doki-row :gap="10">
        <doki-col :width="8">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="8">
          <div class="layout-item layout-2"/>
        </doki-col>
        <doki-col :width="8">
          <div class="layout-item layout-1"/>
        </doki-col>
      </doki-row>

      <doki-row :gap="10">
        <doki-col :width="6">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="6">
          <div class="layout-item layout-2"/>
        </doki-col>
        <doki-col :width="6">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="6">
          <div class="layout-item layout-2"/>
        </doki-col>
      </doki-row>

    </div>

    <h3 class="title-3">Offset Col</h3>
    <div class="layout-preview">
      <doki-row :gap="10">
        <doki-col :width="8" >
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="8" :offset="8">
          <div class="layout-item layout-1"/>
        </doki-col>
      </doki-row>

      <doki-row :gap="10">
        <doki-col :width="6">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="6" :offset="6">
          <div class="layout-item layout-1"/>
        </doki-col>
      </doki-row>

      <doki-row :gap="10">
        <doki-col :width="6" :offset="6">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="6" :offset="12">
          <div class="layout-item layout-1"/>
        </doki-col>
      </doki-row>

    </div>

    <h3 class="title-3">Mix Layout</h3>
    <div class="layout-preview">
      <doki-row :gap="10">
        <doki-col :width="12">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="12">
          <div class="layout-item layout-2"/>
        </doki-col>
      </doki-row>

      <doki-row :gap="10">
        <doki-col :width="6">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="6">
          <div class="layout-item layout-2"/>
        </doki-col>
        <doki-col :width="3">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="3">
          <div class="layout-item layout-2"/>
        </doki-col>
        <doki-col :width="3">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="3">
          <div class="layout-item layout-2"/>
        </doki-col>
      </doki-row>

      <doki-row :gap="10">
        <doki-col :width="3">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="3">
          <div class="layout-item layout-2"/>
        </doki-col>
        <doki-col :width="2">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="4">
          <div class="layout-item layout-2"/>
        </doki-col>
        <doki-col :width="4">
          <div class="layout-item layout-1"/>
        </doki-col>
        <doki-col :width="8">
          <div class="layout-item layout-2"/>
        </doki-col>
      </doki-row>

    </div>
  </div>


</template>

<style scoped>
.layout-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.layout-preview {
  margin: 10px 0;
}

.layout-item {
  border-radius: 5px;
}

.layout-1 {
  background: rgba(85, 221, 238, 0.7);
  width: 100%;
  height: 100%;
}

.layout-2 {
  background: rgba(144, 238, 250, 0.7);
  width: 100%;
  height: 100%;
}

.doki-row {
  margin: 10px 0;
}
</style>