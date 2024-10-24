<script setup lang="ts">
const test = [
  {
    value: "凑友希那",
    label: "yukina",
    content: "目指すのは頂点、ただひとつよ。",
  },
  {
    value: "冰川纱夜",
    label: "sayo",
    content: "像正式演出那样练习，像练习那样正式演出。",
  },
  {
    value: "今井莉莎",
    label: "lisa",
    content: "陽だまりロードナイト",
  },
  {
    value: "宇田川亚子",
    label: "ako",
    content: "引起黑暗波动略黑的堕天使!",
  },
  {
    value: "白金燐子",
    label: "rinko",
    content: "我……真的可以吗？",
  },
]
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

  <div class="selector-container">
    <h2 class="title-2">Accordion</h2>
    <div class="selector">
      <doki-accordion-selector :data="test">hello </doki-accordion-selector>

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