<template>
  <div class="outer">
    <table>
      <thead ref="tableHeader">
        <tr>
          <th></th>
          <th v-for="header in props.columnHeaders" :key="header">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody ref="tableBody">
        <tr v-for="(row, index) in props.data" :key="props.rowHeaders[index]">
          <td>{{ props.rowHeaders[index] }}</td>
          <td v-for="(cell, idx) in row" :key="idx">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, onUnmounted, ref, watchEffect } from "vue";
import { ColumnHeaders, DataMatrix, RowHeaders } from "./types";
import debounce from "lodash-es/debounce";

const props = defineProps<{
  columnHeaders: ColumnHeaders;
  rowHeaders: RowHeaders;
  data: DataMatrix;
}>();

const tableHeader = ref<HTMLElement | null>(null);
const tableBody = ref<HTMLElement | null>(null);

const debouncedAdjustBodyHeight = debounce(() => {
  if (tableHeader.value && tableBody.value && tableBody.value.parentElement) {
    const headerHeight = tableHeader.value.offsetHeight;
    const parentHeight = tableBody.value.parentElement.offsetHeight;
    tableBody.value.style.maxHeight = `${parentHeight - headerHeight}px`;
  }
}, 150);

onMounted(() => {
  debouncedAdjustBodyHeight();
  window.addEventListener("resize", debouncedAdjustBodyHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", debouncedAdjustBodyHeight);
});

watchEffect(() => {
  debouncedAdjustBodyHeight();
});
</script>

<style scoped>
.outer {
  background-color: #252424;
  border-radius: 10px;
  height: 100%;
  overflow: hidden;
}

table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}

thead,
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

tbody {
  display: block;
  overflow-y: auto;
  height: 100%;
}

th,
td {
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  word-wrap: break-word;
  font-size: 12px;
  padding: 3px;
}

td:first-child {
  font-weight: 600;
}

th:last-child,
td:last-child {
  border-right: none;
}

tr:last-child td {
  border-bottom: none;
}
</style>
