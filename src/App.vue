<template>
  <div class="box">
    <map-view />
    <bag-status />
    <console-table />
    <button-area />
  </div>
</template>

<script>
import BagStatus from "./components/BagStatus.vue";
import ConsoleTable from "./components/ConsoleTable.vue";
import ButtonArea from "./components/ButtonArea.vue";
import MapView from "./components/MapView.vue";

export default {
  name: "App",
  components: {
    ConsoleTable,
    BagStatus,
    ButtonArea,
    MapView,
  },
};
</script>

<style>
.box {
  display: grid;
  grid-template-rows: 5fr 3fr;
  grid-template-columns: 2fr 1fr;
  width: 100vw;
  height: 100vh;
}

.tem {
  background-color: skyblue;
}
</style>