<script setup lang="ts">
import {useAttrs} from "vue";

</script>

<template>
  <form div="doki-form">
    <div class="doki-form__header">
      <slot name="header"></slot>
    </div>

    <div class="doki-form__content">
      <slot name="content"></slot>
    </div>

    <div class="doki-form__footer">
      <slot name="footer"></slot>
    </div>
  </form>
</template>

<style scoped>

</style>