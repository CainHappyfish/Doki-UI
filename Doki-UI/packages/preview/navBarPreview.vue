<script setup lang="ts">
const data = [
  {
    label: "Poppin' Party",
    url: "https://mzh.moegirl.org.cn/Poppin%27Party"
  },
  {
    label: "Roselia",
    url: "https://mzh.moegirl.org.cn/Roselia"
  },
  {
    label: "Mygo!!!!!",
    url: "https://mzh.moegirl.org.cn/MyGO!!!!!"
  },

]
</script>

<template>
  <div class="navbar-container">
    <h2 class="title-2">navbar</h2>
    <div class="navbar">
      <h3 class="title-3">Horizontal</h3>
      <doki-navbar :navs="data"/>

    </div>

    <div class="navbar">
      <h3 class="title-3">Vertical</h3>
      <doki-navbar :navs="data" type="vertical"/>
    </div>
  </div>
</template>

<style scoped>
.navbar-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

  position: relative;

}

.navbar {
  margin:  10px 0;
}

.doki-navbar {
  position: relative;
}
</style>