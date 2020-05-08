import { toggleCreatePanelWizard, saveData } from "./actions";
import { getType } from "typesafe-actions";

const INITIAL_STATE = {
  isVisible: false,
  columns: "",
  data: ""
};
export const createPanelReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case getType(toggleCreatePanelWizard):
      return {
        state,
        isVisible: action.payload,
        columns: "",
        data: ""
      };
    default:
      return state;
  }
};

export const dynamicTable = (
  state = { data: [], columns: [] },
  action: any
) => {
  switch (action.type) {
    case getType(saveData):
      return {
        ...state,
        data: action.payload.data,
        columns: action.payload.columns
      };
    default:
      return state;
  }
};
