<template>
  <div class="wrapper">
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
          <a-statistic title="Items Weight(g)" :value="strength" />
        </a-col>
      </a-row>
    </div>
    <div class="container">
      <a-table :columns="columns" :data-source="data" :pagination="false">
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
              <a>Take</a>
              <a-divider type="vertical" />
              <a>Drop</a>
              <a-divider type="vertical" />
              <a>Eat</a>
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
<script>
import { defineComponent, ref } from "vue";
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
const data = [
  { key: "1", name: "basketball", weight: 32, location: ["ROOM"] },
  { key: "2", name: "computer-network", weight: 42, location: ["BAG"] },
  { key: "3", name: "badminton", weight: 1200, location: ["BAG"] },
  { key: "3", name: "chopsticks", weight: 32, location: ["BAG"] },
];
const strength = ref(1200);
const weight = ref(1000);
const current = ref(2);
const totalItem = ref(12);
// 页面改变事件的回调
const onPageChange = (current) => {
  console.log(current);
};

export default defineComponent({
  setup() {
    return {
      data,
      columns,
      strength,
      weight,
      current,
      totalItem,
      onPageChange,
    };
  },
});
</script>

<style scoped>
.container {
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
