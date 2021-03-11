import { createAction } from "typesafe-actions";
import { DataConnection } from "../../models/DataConnection";

const connectionsUrl = "http://localhost:3001/connections/";

export const loadConnectionsSuccess = createAction("LOAD_CONNECTIONS_SUCCESS")<
  DataConnection[]
>();
export const createConnectionSuccess = createAction(
  "CREATE_CONNECTION_SUCCESS"
)<DataConnection>();
export const updateConnectionSuccess = createAction(
  "UPDATE_CONNECTION_SUCCESS"
)<DataConnection>();
export const deleteConnectionSuccess = createAction(
  "DELETE_CONNECTION_SUCCESS"
)<string>();

export function loadConnections() {
  return function (dispatch: any) {
    return fetch(connectionsUrl)
      .then((response) => response.json())
      .then((connections) => dispatch(loadConnectionsSuccess(connections)))
      .catch((error) => console.log(error));
  };
}

export function saveConnection(connection: DataConnection) {
  return function (dispatch: any) {
    return fetch(connectionsUrl + connection.id || "", {
      method: connection.id ? "PUT" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(connection),
    })
      .then((response) => response.json())
      .then((savedConnection) =>
        dispatch(
          connection.id
            ? updateConnectionSuccess(savedConnection)
            : createConnectionSuccess(savedConnection)
        )
      )
      .catch((error) => console.log(error));
  };
}

export function deleteConnection(connection: DataConnection) {
  return function (dispatch: any) {
    return fetch(connectionsUrl + connection.id, {
      method: "DELETE",
    })
      .then(() => dispatch(deleteConnectionSuccess(connection.id)))
      .catch((error) => console.log(error));
  };
}
