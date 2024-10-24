<script setup lang="ts">
import {useAttrs} from "vue";

const isDisabled = useAttrs().disabled !== undefined ? "doki-disabled-link" : ""
const linksStyle = (useAttrs().type ? "doki-" + useAttrs().type + "-link" : "") + " " + isDisabled
const iconStyle = useAttrs().type ? "doki-" + useAttrs().type + "-link-icon" : ""
</script>

<template>
  <div class="doki-link" :class="linksStyle">
    <svg t="1727173062437" class="link-icon" :class="iconStyle" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8846" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15"><path d="M254.470317 1023.995364a252.393224 252.393224 0 0 1-179.250698-430.098656L151.452675 515.088211a51.508821 51.508821 0 0 1 73.142526 72.627438l-76.233056 78.808497A149.375581 149.375581 0 1 0 362.638841 875.649959l293.600281-296.175721a51.508821 51.508821 0 0 1 73.142526 72.627438l-293.600281 296.175721a251.363047 251.363047 0 0 1-181.31105 75.717967z m618.105853-515.088211l76.233056-76.748144a252.393224 252.393224 0 0 0-360.561748-355.410866L296.70755 370.863512a51.508821 51.508821 0 1 0 73.142526 72.627438l293.600281-296.175722A149.375581 149.375581 0 0 1 877.727053 357.471219l-78.293409 76.748143a51.508821 51.508821 0 1 0 73.142526 72.627438z m-501.695917 225.608636l360.561748-365.71263a51.508821 51.508821 0 1 0-73.142526-72.627437l-360.561748 365.71263a51.508821 51.508821 0 1 0 73.142526 72.627437z"  p-id="8847"></path></svg>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use "style/links";

.link-icon {
  margin: 5px 0;

}




</style>