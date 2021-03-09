import { createAction } from "typesafe-actions";

export const loadDashboardsSuccess = createAction(
  "LOAD_DASHBOARDS_SUCCESS"
)<any>();

export function loadDashboards(url: string) {
  return function (dispatch: any) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(loadDashboardsSuccess(data)))
      .catch((error) => console.log(error));
  };
}
