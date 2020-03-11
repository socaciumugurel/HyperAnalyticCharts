import { createAction } from "typesafe-actions";

export const toggleCreatePanelWizard = createAction(
  "TOGGLE_CREATE_PANEL_WIZARD"
)<boolean>();

export const saveData = createAction("SAVE_DATA")<{
  columns: Array<any>;
  data: Array<any>;
}>();
