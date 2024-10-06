<script setup lang="ts">

import DokiAvatar from "../components/avatar/dokiAvatar.vue";

</script>

<template>
  <div class="avatar-container">
    <h2 class="title-2">Avatar</h2>
    <div class="avatars-container">
      <div class="circle-avatars">
        <doki-avatar />
        <doki-avatar size="80"/>
        <doki-avatar size="120"/>
      </div>
      <div class="square-avatars">
        <doki-avatar shape="square"/>
        <doki-avatar size="80" shape="square"/>
        <doki-avatar size="120" shape="square"/>
      </div>

    </div>
  </div>
</template>

<style scoped>
.avatar-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.avatars-container {
  display: flex;
  flex-direction: row;

}

.circle-avatars {
  height: 140px;
  display: flex;
  flex-direction: row;
  position: relative;

  margin: 10px 20px;

  gap: 20px
}

.square-avatars {
  height: 140px;

  display: flex;
  flex-direction: row;
  position: relative;

  border-left: solid 1px rgba(0, 255, 255, 0.5);

  padding: 20px;

  gap: 20px
}

</style>