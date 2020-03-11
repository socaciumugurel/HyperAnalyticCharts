import { createAction } from "typesafe-actions";
import { DynamicTableData } from "./models";

export const toggleCreatePanelWizard = createAction(
  "TOGGLE_CREATE_PANEL_WIZARD"
)<boolean>();

export const saveData = createAction("SAVE_DATA")<DynamicTableData>();
