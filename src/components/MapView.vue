<template>
  <div class="container">
    <h2>Map</h2>
    <div class="pic"></div>
    <div class="player"></div>
  </div>
</template>

<script>
// left top
const location = {
  ground: [36, 29],
  teachingBuilding: [36, 12],
  library: [36, 46],
  teleport: [46, 29],
  canteen: [18, 42],
  stadium: [18, 27],
  dormitory: [8, 27],
};

console.log(location);

export default {};
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
}

h2 {
  position: absolute;
  margin: 10px 20px;
  z-index: 2;
}
</style>