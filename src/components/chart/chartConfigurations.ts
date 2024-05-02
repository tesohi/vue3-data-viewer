import { Options } from "highcharts";

export const darkLineChart: Options = {
  chart: {
    type: "line",
    backgroundColor: "#2b2b2b",
  },
  title: {
    style: {
      color: "#E0E0E3",
    },
  },

  xAxis: {
    title: {
      style: {
        color: "#A0A0A3",
      },
    },
    labels: {
      style: {
        color: "#E0E0E3",
      },
    },
  },

  yAxis: {
    title: {
      style: {
        color: "#A0A0A3",
      },
    },
    labels: {
      style: {
        color: "#E0E0E3",
      },
    },
  },

  legend: {
    itemStyle: {
      color: "#E0E0E3",
    },
    itemHoverStyle: {
      color: "#FFF",
    },
  },
};
