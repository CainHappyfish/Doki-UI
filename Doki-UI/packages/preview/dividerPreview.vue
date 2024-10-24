<script setup lang="ts">

import DokiDivider from "../components/divider/dokiDivider.vue";
</script>

<template>
  <div class="divider-container">
    <h2 class="title-2">divider</h2>
    <div class="divider">
      <h3 class="title-3">Default Divider</h3>
      <span>“我很不习惯别人向我表达好感。我只想专注于音乐。”</span>
      <doki-divider />
      <span>Roselia乐队的主唱兼领队，同时也是乐队的作词作曲人。作曲卡壳的解决方法是在周围撒一圈小零食然后平躺下来祈祷。</span>

    </div>

    <div class="divider">
      <h3 class="title-3">Vertical Divider</h3>
      <div class="vertical">
        <span>“我很不习惯别人向我表达好感。我只想专注于音乐。”</span>
        <doki-divider type="vertical" />
        <span>Roselia乐队的主唱兼领队，同时也是乐队的作词作曲人。作曲卡壳的解决方法是在周围撒一圈小零食然后平躺下来祈祷。</span>

      </div>

    </div>

    <div class="divider">
      <h3 class="title-3">Content Position</h3>
      <doki-divider>center</doki-divider>
      <doki-divider contentPosition="left">left</doki-divider>
      <doki-divider contentPosition="right">right</doki-divider>

    </div>


    <div class="divider">
      <h3 class="title-3">Different Divider</h3>
      <doki-divider />
      <doki-divider dividerStyle="dashed"/>
      <doki-divider dividerStyle="dotted"/>
    </div>
  </div>
</template>

<style scoped>
.divider-container {
  border: solid 1px cyan;
  border-radius: 5px;


  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.vertical {
  display: flex;
  align-items: center;
  width: 400px;
  height: 200px;
  span {
    width: 40%;
  };

}

.divider {
  margin: 10px;

  font-family: "Microsoft YaHei UI Light", sans-serif;
}
</style>