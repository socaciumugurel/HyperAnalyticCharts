const INITIAL_STATE = [
  // {
  //   id: "1",
  //   title: "Ttile1",
  //   chartType: "treeMap",
  //   dataApi: "",
  //   config: {}
  // },
  {
    id: "2",
    title: "Ttile2",
    chartType: "lineChart",
    dataApi:
      "http://my-json-server.typicode.com/socaciumugurel/mockData/lineChartSeries",
    config: {}
  },
  {
    id: "3",
    title: "Ttile3",
    chartType: "pieChart",
    dataApi:
      "http://my-json-server.typicode.com/socaciumugurel/mockData/pieChart",
    config: {}
  },
  {
    id: "4",
    title: "Title4",
    chartType: "barChart",
    dataApi:
      "http://my-json-server.typicode.com/socaciumugurel/mockData/barChartSeries",
    config: {}
  }
];
const dashboardReducer = (state = INITIAL_STATE, _action: any) => {
  return state;
};

export default dashboardReducer;
