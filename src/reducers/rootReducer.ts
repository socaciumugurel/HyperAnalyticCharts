import { combineReducers } from "redux";
import dashboardReducer from "../app/basics/dashboard/reducer";
import {
  createPanelReducer,
  dynamicTable
} from "../app/basics/createPanelWizard/reducer";

const rootReducer = combineReducers({
  dashboardReducer,
  createPanelReducer,
  dynamicTable
});

export default rootReducer;
