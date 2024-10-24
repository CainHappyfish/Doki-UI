<script setup lang="ts">
import downIcon from "./public/down.svg"


</script>

<template>
  <div class="menu-container">
    <h2 class="title-2">menu</h2>
    <div class="menu">
      <h3 class="title-3">Dropdown</h3>
      <doki-dropdown>
        <template #trigger>
          <div class="dropdown-trigger">
            Dropdown List
            <img :src="downIcon" alt="dropdown">
          </div>

        </template>

        <template #menu>
          <doki-dropdown-item> item 1</doki-dropdown-item>
          <doki-dropdown-item> item 2</doki-dropdown-item>
          <doki-dropdown-item> item 3</doki-dropdown-item>
          <doki-dropdown-item> item 4</doki-dropdown-item>
          <doki-dropdown-item disabled> item 5</doki-dropdown-item>
        </template>

      </doki-dropdown>

    </div>
  </div>
</template>

<style scoped>
.menu-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.menu {
  margin: 10px 0;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;

    margin: 10px 0;
  }
}

.doki-dropdown {
  margin: 10px 0;
}
</style>