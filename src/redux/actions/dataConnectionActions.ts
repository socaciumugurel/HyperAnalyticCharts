import { createAction } from "typesafe-actions";
import { DataConnection } from "../../models/DataConnection";

export const loadConnectionsSuccess = createAction("LOAD_CONNECTIONS_SUCCESS")<
  DataConnection[]
>();

export function loadConnections(url: string) {
  return function (dispatch: any) {
    console.log(url);
    return fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(loadConnectionsSuccess(data)))
      .catch((error) => console.log(error));
  };
}
