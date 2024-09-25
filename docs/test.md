<script setup lang="ts">
    import {dokiButton} from "../Doki-UI/dist/doki-ui";
</script>



<h2 class="title-2">Buttons</h2>
<div class="buttons default-buttons">
  <doki-button>default</doki-button>
  <doki-button type="primary">primary</doki-button>
  <doki-button type="success">success</doki-button>
  <doki-button type="info">info</doki-button>
  <doki-button type="warning">warning</doki-button>
  <doki-button type="danger">danger</doki-button>
</div>


<style scoped>
button {
  margin: 5px
}

.buttons-container {
  border: solid 1px cyan;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  margin: 5px 0;

}

.disabled-buttons {
  margin: 5px;
  border: solid 1px cyan;
  border-radius: 5px;

}

.buttons {
  display: flex;

}

.logo {
  width: 20px;
  height: 20px;
}

.title-2 {
  margin: 5px;
  font-family: 'Microsoft YaHei UI Light', sans-serif
}
</style>