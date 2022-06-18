<template>
  <div class="box">
    <map-view :currentRoom="currentRoom" />
    <bag-status :currentStatus="currentStatus" @command="setCommand($event)" />
    <div class="container">
      <h2>Console</h2>
      <div class="wrapper">
        <a-timeline class="console" :pending="false">
          <!-- <a-timeline-item>1</a-timeline-item>
          <a-timeline-item>2</a-timeline-item>
          <a-timeline-item>3</a-timeline-item>
          <a-timeline-item>4</a-timeline-item>
          <a-timeline-item>5</a-timeline-item> -->
        </a-timeline>
        <div class="command">
          <a-input
            class="input"
            v-model:value="value"
            placeholder="> Input your command"
          />
          <a-button type="primary" class="send" @click="sendInfo"
            >Send</a-button
          >
        </div>
      </div>
    </div>
    <button-area @command="setCommand($event)" />
  </div>
</template>

<script>
import BagStatus from "./components/BagStatus.vue";
import ButtonArea from "./components/ButtonArea.vue";
import MapView from "./components/MapView.vue";
import { ref } from "vue";
import { get } from "./utils/request.js";

export default {
  name: "App",
  components: {
    BagStatus,
    ButtonArea,
    MapView,
  },
  setup() {
    const value = ref("");
    const reply = ref("");
    const flag = ref(false); // 玩家名是否输入
    const status = ref();
    const currentRoom = ref("");
    const currentStatus = ref();

    const setCommand = (command) => {
      value.value = command;
      sendInfo();
    };

    // 向后端发送指令
    const sendInfo = async () => {
      // 从控制台输入
      addTimelineItem(false, value.value);
      if (!flag.value) {
        reply.value = await get("/cmd", { name: value.value });
        value.value = "";
        flag.value = true;
        addTimelineItem(true, reply.value);
      } else {
        reply.value = await get("/cmd", { command: value.value });
        value.value = "";
        addTimelineItem(true, reply.value);
      }
    };

    // 开始游戏
    const startGame = async () => {
      reply.value = await get("/cmd", { start: "true" });
      addTimelineItem(true, reply.value);
    };

    // 更新控制台，flag为true表示游戏输出，false表示用户输入
    const addTimelineItem = async (flag, content) => {
      var timeline = document.querySelector(".console");
      if (flag == false) {
        timeline.innerText += "\n> " + content + "\n";
      } else {
        timeline.innerText += content + "\n";
        // 若是游戏输出，则再向后端请求玩家状态
        status.value = await get("/status");
        // 向地图组件传递当前房间名称
        currentRoom.value = status.value.currentRoom;
        // 向状态组件传递全部信息
        currentStatus.value = status.value;
      }
      timeline.scrollTop = timeline.scrollHeight;
    };

    startGame();
    return {
      value,
      setCommand,
      sendInfo,
      currentRoom,
      currentStatus,
    };
  },
};
</script>

<style scoped>
.box {
  display: grid;
  grid-template-rows: 5fr 3fr;
  grid-template-columns: 2fr 1fr;
  width: 100vw;
  height: 100vh;
}

.wrapper {
  padding: 4vh 6vw;
}

.console {
  width: 54.5vw;
  height: 24vh;
  overflow: auto;
  background-color: rgb(218, 218, 218);
  padding: 10px;
  scroll-top: scroll-height;
}

h2 {
  margin: 10px 20px;
}

.command {
  display: flex;
}

.send {
  width: 10vw;
}
</style>