<template>
  <div class="table">
    <CrossTable
      :column-headers="adaptedData.columnHeaders"
      :row-headers="adaptedData.rowHeaders"
      :data="adaptedData.data"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
import CrossTable from "@/components/ui/cross-table/CrossTable.vue";
import { adaptDataForCrossTable } from "./utils";
import { DataSet } from "@/stores/DataStore";

const props = defineProps<{
  data: DataSet[] | [];
}>();

const adaptedData = computed(() => adaptDataForCrossTable(props.data));
</script>

<style scoped>
.table {
  height: 100%;
}
</style>
