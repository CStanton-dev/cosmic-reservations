export const Config = {
  // plugins: {
  //   legend: {
  //     display: true,
  //   },
  // },
  // lineHeightAnnotation: {
  //   always: true,
  //   lineWeight: 1.5,
  // },
  // animation: {
  //   duration: 1,
  // },
  // maintainAspectRatio: false,
  // responsive: true,
  // scales: {
  //   x: { display: true },
  //   y: { display: true },
  // },
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
