<template>
  <div class="container">
    <h2 class="title">Player Status</h2>
    <div class="status">
      <a-row>
        <a-col :span="9">
          <a-statistic
            title="Player Strength(g)"
            :value="strength"
            style="margin-right: 50px"
          />
        </a-col>
        <a-col :span="8">
          <a-statistic title="Items Weight(g)" :value="weight" />
        </a-col>
      </a-row>
    </div>
    <div class="wrapper">
      <a-table
        :columns="columns"
        :data-source="currentPageData"
        :pagination="false"
      >
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Item </span>
          </template>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a> {{ record.name }} </a>
          </template>
          <template v-else-if="column.key === 'location'">
            <span>
              <a-tag
                v-for="location in record.location"
                :key="location"
                :color="location === 'ROOM' ? 'green' : 'orange'"
              >
                {{ location.toUpperCase() }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <span>
              <a
                v-if="record.location != 'ROOM'"
                :style="{ cursor: 'not-allowed', color: '#afafaf' }"
                >Take</a
              >
              <a v-else @click="onItemOpreate(record.name, 'take')">Take</a>
              <a-divider type="vertical" />
              <a
                v-if="record.location != 'BAG'"
                :style="{ cursor: 'not-allowed', color: '#afafaf' }"
                >Drop</a
              >
              <a v-else @click="onItemOpreate(record.name, 'drop')">Drop</a>
              <a-divider type="vertical" />
              <a
                v-if="record.name != 'magic-cookie'"
                :style="{ cursor: 'not-allowed', color: '#afafaf' }"
                >Eat</a
              >
              <a v-else @click="onItemOpreate(record.name, 'eat')">Eat</a>
            </span>
          </template>
        </template>
      </a-table>
      <div class="page">
        <a-pagination
          v-model:current="current"
          :total="totalItem"
          :pageSize="4"
          show-less-items
          @change="onPageChange(current)"
        />
      </div>
    </div>
  </div>
</template>
<script >
import { defineComponent, ref, watch } from "vue";
const columns = [
  {
    name: "Item",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Weight",
    dataIndex: "weight",
    key: "weight",
  },
  {
    title: "Location",
    key: "location",
    dataIndex: "location",
  },
  {
    title: "Action",
    key: "action",
  },
];

export default defineComponent({
  props: ["currentStatus"],
  emits: ["command"],
  setup(props, context) {
    const strength = ref();
    const weight = ref();
    const data = ref([]); // 所有数据
    const currentPageData = ref([]); // 当前页面数据
    const current = ref(1);
    const totalItem = ref(0);
    // 页面改变事件的回调
    const onPageChange = (currentPage) => {
      current.value = currentPage;
      currentPageData.value = data.value.slice(
        currentPage * 4 - 4,
        currentPage * 4
      );
    };
    const onItemOpreate = (item, op) => {
      context.emit("command", op + " " + item);
    };
    const allData = ref([]);
    watch(props, () => {
      strength.value = props.currentStatus.strength;
      weight.value = props.currentStatus.weight;
      var vaildData = [];
      const items = props.currentStatus.items;
      // 在房间内的物品
      for (var key in items) {
        if (
          items[key].room.name === props.currentStatus.currentRoom &&
          items[key].taken === false &&
          items[key].eaten === false
        ) {
          const vaildItem = {
            name: items[key].name,
            weight: items[key].weight,
            location: ["ROOM"],
          };
          vaildData.push(vaildItem);
        }
      }
      // 在背包内的物品
      for (var key2 in items) {
        if (items[key2].taken === true && items[key2].eaten === false) {
          const vaildItem = {
            name: items[key2].name,
            weight: items[key2].weight,
            location: ["BAG"],
          };
          vaildData.push(vaildItem);
        }
      }
      data.value = vaildData;
      totalItem.value = data.value.length;
      onPageChange(1);
    });
    return {
      currentPageData,
      columns,
      strength,
      weight,
      current,
      totalItem,
      onPageChange,
      allData,
      onItemOpreate,
    };
  },
});
</script>

<style scoped>
.wrapper {
  padding: 20px 10px;
}

.title {
  margin: 10px 20px;
}

.status {
  padding: 0 20px;
}

.page {
  position: absolute;
  right: 0;
  margin: 10px 10px 0 0;
}
</style>
