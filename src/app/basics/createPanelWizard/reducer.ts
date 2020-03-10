import { toggleCreatePanelWizard } from "./actions";
import { getType } from "typesafe-actions";

const INITIAL_STATE = {
  isVisible: false
};
const createPanelReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case getType(toggleCreatePanelWizard):
      return {
        state,
        isVisible: action.payload
      };
    default:
      return state;
  }
};

export default createPanelReducer;