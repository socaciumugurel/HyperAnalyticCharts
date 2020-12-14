const INITIAL_STATE = {
  panels: [
    {
      id: "2",
      title: "Ttile2",
      chartType: "lineChart",
      dataApi:
        "http://my-json-server.typicode.com/socaciumugurel/mockData/lineChartSeries",
      config: {},
    },
    {
      id: "3",
      title: "Ttile3",
      chartType: "pieChart",
      dataApi:
        "http://my-json-server.typicode.com/socaciumugurel/mockData/pieChart",
      config: {},
    },
    {
      id: "4",
      title: "Title4",
      chartType: "barChart",
      dataApi:
        "http://my-json-server.typicode.com/socaciumugurel/mockData/barChartSeries",
      config: {},
    },
    {
      id: "1",
      title: "Ttile1",
      chartType: "AddNew",
      dataApi: "",
      config: {},
    },
  ],
  layout: [
    { w: 3, h: 2, x: 0, y: 0, i: "2" },
    { w: 3, h: 2, x: 3, y: 0, i: "3" },
    { w: 3, h: 2, x: 0, y: 2, i: "4" },
    { w: 4, h: 2, x: 3, y: 2, i: "1" },
  ],
};
const dashboardReducer = (state = INITIAL_STATE, _action: any) => {
  // return [
  //   ...state,
  //   {
  //     id: "1",
  //     title: "Ttile1",
  //     chartType: "AddNew",
  //     dataApi: "",
  //     config: {}
  //   }
  // ];
  return state;
};

export default dashboardReducer;
