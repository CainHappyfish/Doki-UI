<script setup lang="ts">

</script>

<template>
  <div class="form-container">
    <h2 class="title-2">Form</h2>
    <div class="form">
      <doki-form>
        <template #header>
          <div class="preview-header">
            Form Header
          </div>
        </template>

        <template #content>
          <doki-form-item label="First Name">

          </doki-form-item>
        </template>


      </doki-form>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

  padding: 5px;
  box-sizing: border-box;

}

.form {
  margin: 10px;
}

.preview-header {
  font-family: "Microsoft YaHei UI Light", sans-serif;
  font-size: 20px;
  font-weight: bold;
}


</style>