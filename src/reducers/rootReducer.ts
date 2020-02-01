import { combineReducers } from "redux";
import dashboardReducer from "../app/basics/dashboard/reducer";
import createPanelReducer from "../app/basics/createPanelWizard/reducer";

const rootReducer = combineReducers({
  dashboardReducer,
  createPanelReducer
});

export default rootReducer;
