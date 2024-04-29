<template>
  <h1>Data viewer</h1>

  <TableView />
  <ChartView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChartView from "./components/ChartView.vue";
import TableView from "./components/TableView.vue";

export default defineComponent({
  name: "App",
  components: {
    TableView,
    ChartView,
  },
});
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
