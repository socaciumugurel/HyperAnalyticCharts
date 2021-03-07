import { combineReducers } from "redux";
import dashboards from "../app/basics/dashboard/reducer";
import {
  createPanelReducer as createPanel,
  dynamicTable,
} from "../app/basics/createPanelWizard/reducer";
import connections from "../app/redux/reducers/dataConnectionReducer";
import charts from "../app/redux/reducers/chartReducer";

const rootReducer = combineReducers({
  dashboards,
  createPanel,
  dynamicTable,
  connections,
  charts,
});

export default rootReducer;
