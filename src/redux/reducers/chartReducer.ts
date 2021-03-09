import { chart } from "highcharts";
import { getType } from "typesafe-actions";
import { loadChartsSuccess } from "../actions/chartActions";

const chartReducer = (state = [], action: any) => {
  switch (action.type) {
    case getType(loadChartsSuccess):
      return action.payload;
    default:
      return state;
  }
};

export default chartReducer;
