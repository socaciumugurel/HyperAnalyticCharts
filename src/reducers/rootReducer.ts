import { combineReducers } from "redux";
import dashboard from "../app/basics/dashboard/reducer";
import {
  createPanelReducer as createPanel,
  dynamicTable,
} from "../app/basics/createPanelWizard/reducer";
import connections from "../app/redux/reducers/dataConnectionReducer";

const rootReducer = combineReducers({
  dashboard,
  createPanel,
  dynamicTable,
  connections,
});

export default rootReducer;
