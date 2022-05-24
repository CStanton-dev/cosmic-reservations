export const Config = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      borderColor: "rgba(47,97,68,1)",
      fill: "start",
      backgroundColor: "rgba(47,97,68,0.3)"
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
};
