import { Options } from "highcharts";

export const darkLineChart: Options = {
  chart: {
    type: "line",
    backgroundColor: "#252424",
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
