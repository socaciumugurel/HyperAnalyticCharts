import { createAction } from "typesafe-actions";

export const toggleCreatePanelWizard = createAction(
  "TOGGLE_CREATE_PANEL_WIZARD"
)<boolean>();
