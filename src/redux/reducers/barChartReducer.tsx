import { BarProps } from "@nivo/bar";
import { getType } from "typesafe-actions";
import { defaultBarChartConfig } from "../../components/charts/barChart/component";
import { handleInnerPadding } from "../actions/barChartActions";

const barChartReducer = (
  state = defaultBarChartConfig as BarProps,
  action: any
) => {
  switch (action.type) {
    case getType(handleInnerPadding):
      return { ...state, innerPadding: action.payload };

    default:
      return state;
  }
};

export default barChartReducer;
