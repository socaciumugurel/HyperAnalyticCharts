import { combineReducers } from "redux";
import dashboards from "./dashboardReducer";
import {
  createPanelReducer as createPanel,
  dynamicTable,
} from "./createPanelReducer";
import connections from "./dataConnectionReducer";
import charts from "./chartReducer";

const rootReducer = combineReducers({
  dashboards,
  createPanel,
  dynamicTable,
  connections,
  charts,
});

export default rootReducer;
