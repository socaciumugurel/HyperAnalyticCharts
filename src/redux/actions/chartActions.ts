import { createAction } from "typesafe-actions";

export const loadChartsSuccess = createAction("LOAD_CHARTS_SUCCESS")<any>();

export function loadCharts(url: string) {
  return function (dispatch: any) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(loadChartsSuccess(data)))
      .catch((error) => console.log(error));
  };
}
