const INITIAL_STATE = [
  {
    id: "1",
    title: "Ttile1",
    chartType: "treeMap",
    dataApi: "http://getProjects",
    config: {}
  },
  {
    id: "2",
    title: "Ttile2",
    chartType: "barChart",
    dataApi: "http://getProjects",
    config: {}
  },
  {
    id: "3",
    title: "Ttile3",
    chartType: "pieChart",
    dataApi: "http://getProjects",
    config: {}
  }
];
const dashboardReducer = (state = INITIAL_STATE, _action: any) => {
  return state;
};

export default dashboardReducer;
