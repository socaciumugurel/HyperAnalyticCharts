import { combineReducers } from "redux";
import dashboards from "./dashboardReducer";
import {
  createPanelReducer as createPanel,
  dynamicTable,
} from "./createPanelReducer";
import connections from "./dataConnectionReducer";
import charts from "./chartReducer";
import lineChartReducer from "./lineChartReducer";
import pieChartReducer from "./pieChartReducer";

const rootReducer = combineReducers({
  dashboards,
  createPanel,
  dynamicTable,
  connections,
  charts,
  lineChartReducer,
  pieChartReducer,
});

export default rootReducer;
