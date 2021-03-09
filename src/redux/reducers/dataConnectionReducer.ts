import { getType } from "typesafe-actions";
import { DataConnection } from "../../models/DataConnection";
import { loadConnectionsSuccess } from "../actions/dataConnectionActions";

const connectionReducer = (state: DataConnection[] = [], action: any) => {
  switch (action.type) {
    case getType(loadConnectionsSuccess):
      return action.payload;
    default:
      return state;
  }
};

export default connectionReducer;
