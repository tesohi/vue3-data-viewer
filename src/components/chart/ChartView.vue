<template>
  <div class="chart">
    <highcharts :options="computedOptions"></highcharts>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
import { DataSet } from "@/stores/DataStore";
import { darkLineChart } from "./chartConfigurations";
import merge from "lodash-es/merge";

const props = defineProps<{
  data: DataSet[] | [];
  title?: string;
  xAxisTitle?: string;
  xAxisType?: string;
  yAxisTitle?: string;
  yAxisType?: string;
}>();

const baseOptions = {
  chart: {
    type: "line",
    borderRadius: 10,
  },

  title: {
    text: props.title || "Title",
  },

  xAxis: {
    title: { text: props.xAxisTitle },
    type: props.xAxisType,
  },

  yAxis: {
    title: { text: props.yAxisTitle },
    type: props.yAxisType,
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  series: props.data,
};

const computedOptions = computed(() => merge({}, baseOptions, darkLineChart));
</script>

<style scoped>
.chart {
  max-height: 100%;
}
</style>
