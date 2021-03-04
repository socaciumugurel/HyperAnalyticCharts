import { getType } from "typesafe-actions";
import { loadConnectionsSuccess } from "../actions/dataConnectionActions";
import { DataConnection } from "../../basics/dataConnection/DataConnection";

const connectionReducer = (state = [] as DataConnection[], action: any) => {
  switch (action.type) {
    case getType(loadConnectionsSuccess):
      return action.payload;
    default:
      return state;
  }
};

export default connectionReducer;
