<template>
  <SimpleLoader v-if="isLoading" />

  <div v-else-if="hasData" class="data-container">
    <div class="data-view">
      <ChartView
        title="Line chart representation"
        yAxisTitle="Value (%)"
        xAxisType="datetime"
        :data="data"
      />
    </div>
    <div class="data-view">
      <TableView :data="data" />
    </div>
  </div>

  <div v-else>No data</div>
</template>

<script lang="ts" setup>
import ChartView from "@/components/chart/ChartView.vue";
import TableView from "@/components/table/TableView.vue";
import SimpleLoader from "@/components/ui/loader/SimpleLoader.vue";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useDataStore } from "@/stores/DataStore";

const dataStore = useDataStore();
const { data, hasData, isLoading } = storeToRefs(dataStore);

onMounted(() => {
  dataStore.fetchData();
});
</script>

<style scoped>
.data-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 10px;
}

.data-view {
  min-width: 300px;
  min-height: 400px;
  max-height: 500px;
  border-radius: 10px;
}
</style>
