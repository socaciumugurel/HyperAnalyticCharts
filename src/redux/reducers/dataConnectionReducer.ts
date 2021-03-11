import { getType } from "typesafe-actions";
import { DataConnection } from "../../models/DataConnection";
import {
  loadConnectionsSuccess,
  createConnectionSuccess,
  updateConnectionSuccess,
  deleteConnectionSuccess,
} from "../actions/dataConnectionActions";

const connectionReducer = (state: DataConnection[] = [], action: any) => {
  switch (action.type) {
    case getType(loadConnectionsSuccess):
      return action.payload;
    case getType(createConnectionSuccess):
      return [...state, { ...action.payload }];
    case getType(updateConnectionSuccess):
      return state.map((connection) =>
        connection.id === action.payload.id ? action.payload : connection
      );
    case getType(deleteConnectionSuccess):
      return state.filter((connection) => connection.id !== action.payload);
    default:
      return state;
  }
};

export default connectionReducer;
