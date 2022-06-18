<template>
  <div class="container">
    <h2>Console</h2>
    <div class="wrapper">
      <a-timeline class="console" :pending="true">
        <a-timeline-item>1</a-timeline-item>
        <a-timeline-item>2</a-timeline-item>
        <a-timeline-item>3</a-timeline-item>
        <a-timeline-item>4</a-timeline-item>
        <a-timeline-item>5</a-timeline-item>
      </a-timeline>
      <a-input class="input" v-model:value="value" placeholder="Basic usage" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const value = ref("");
    return {
      value,
    };
  },
});
</script>

<style scoped>
.wrapper {
  padding: 4vh 6vw;
}

.console {
  width: 54.5vw;
  height: 24vh;
  overflow: auto;
  background-color: rgb(218, 218, 218);
  padding: 10px;
}

h2 {
  margin: 10px 20px;
}
</style>
