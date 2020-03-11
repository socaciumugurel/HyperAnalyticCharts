import { toggleCreatePanelWizard, saveData } from "./actions";
import { getType } from "typesafe-actions";

const INITIAL_STATE = {
  isVisible: false,
  columns: "",
  data: ""
};

const createPanelReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case getType(toggleCreatePanelWizard):
      return {
        state,
        isVisible: action.payload,
        columns: "",
        data: ""
      };
    case getType(saveData):
      return {
        ...state,
        columns: action.payload.columns,
        data: action.payload.data
      };
    default:
      return state;
  }
};

export default createPanelReducer;
