<template>
  <div class="container">
    <h2>Actions</h2>
    <div class="wrapper">
      <div class="direction">
        <a-button class="north">north</a-button>
        <a-button class="south">south</a-button>
        <a-button class="east">east</a-button>
        <a-button class="west">west</a-button>
      </div>
      <div class="opreation">
        <a-button class="op">look</a-button>
        <a-button class="op">item</a-button>
        <a-button class="op">back</a-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 30vw;
  margin: 0 auto;
}
.direction {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 50px;
  height: 20vh;
  margin: 4vh 5vw 1vh 5vw;
  grid-column-gap: 10px;
}

.north {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.south {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
}

.east {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

.west {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}

.opreation {
  display: flex;
  justify-content: center;
}

.op {
  margin: 0 10px;
  flex-basis: 5vw;
}

h2 {
  margin: 10px 20px;
}
</style>