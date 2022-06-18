<template>
  <div class="container">
    <h2>Actions</h2>
    <div class="wrapper">
      <div class="direction">
        <a-button class="north" @click="onButtonClick('go north')"
          >north</a-button
        >
        <a-button class="south" @click="onButtonClick('go south')"
          >south</a-button
        >
        <a-button class="east" @click="onButtonClick('go east')">east</a-button>
        <a-button class="west" @click="onButtonClick('go west')">west</a-button>
      </div>
      <div class="opreation">
        <a-button class="op" @click="onButtonClick('look')">look</a-button>
        <a-button class="op" @click="onButtonClick('item')">item</a-button>
        <a-button class="op" @click="onButtonClick('back')">back</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  emits: ["command"],
  setup(props, context) {
    const onButtonClick = (command) => {
      context.emit("command", command);
    };
    return {
      onButtonClick,
    };
  },
});
</script>

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
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}

.west {
  grid-column-start: 1;
  grid-column-end: 2;
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