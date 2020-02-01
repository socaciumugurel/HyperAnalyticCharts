const INITIAL_STATE = [
  {
    id: "2",
    title: "Ttile2",
    chartType: "lineChart",
    dataApi: "http://getProjects",
    config: {}
  },
  {
    id: "3",
    title: "Ttile3",
    chartType: "pieChart",
    dataApi: "http://getProjects",
    config: {}
  },
  {
    id: "4",
    title: "Title4",
    chartType: "barChart",
    dataApi: "http://getProjects",
    config: {}
  }
];
const dashboardReducer = (state = INITIAL_STATE, _action: any) => {
  return state;
};

export default dashboardReducer;
