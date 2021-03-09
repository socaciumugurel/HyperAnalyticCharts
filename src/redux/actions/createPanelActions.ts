import { createAction } from "typesafe-actions";
import { DynamicTableData } from "../../models/DynamicTableData";
import { getColumns } from "../../utils/dataUtils";

export const toggleCreatePanelWizard = createAction(
  "TOGGLE_CREATE_PANEL_WIZARD"
)<boolean>();

export const saveData = createAction("SAVE_DATA")<DynamicTableData>();

export function loadData(url: string) {
  return function (dispatch: any) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const columns = getColumns(data);
        dispatch(saveData({ columns, data }));
      })
      .catch((error) => console.log(error));
  };
}
