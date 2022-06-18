<template>
  <div class="container">
    <h2>Map</h2>
    <div class="pic"></div>
    <div class="player"></div>
  </div>
</template>

<script>
import { defineComponent, watch } from "@vue/runtime-core";

export default defineComponent({
  props: ["currentRoom"],
  setup(props) {
    // left top
    const location = {
      ground: [36, 29],
      teachingBuilding: [36, 12],
      library: [36, 46],
      teleport: [46, 29],
      canteen: [18, 39],
      stadium: [17, 27],
      dormitory: [9, 28],
    };
    watch(props, () => {
      // 房间发生变化时，移动人物
      var player = document.querySelector(".player");
      player.style.left = location[props.currentRoom][0] + "vw";
      player.style.top = location[props.currentRoom][1] + "vh";
    });
  },
});
</script>


<style scoped>
.container {
  position: relative;
}

.pic {
  background-image: url("@/assets/map.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 60vw;
  height: 57vh;
  margin: auto;
}

.player {
  position: absolute;
  z-index: 1;
  background-image: url("@/assets/Diana.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 5vw;
  height: 5vw;
  left: 36vw;
  top: 29vh;
  transition: left 1.5s ease-out, top 1.5s ease-out;
}

h2 {
  position: absolute;
  margin: 10px 20px;
  z-index: 2;
}
</style>