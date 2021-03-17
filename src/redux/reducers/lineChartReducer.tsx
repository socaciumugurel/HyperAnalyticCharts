import { LineSvgProps } from "@nivo/line";
import { getType } from "typesafe-actions";
import { defaultLineChartConfig } from "../../components/charts/lineChart/component";
import {
  setLineType,
  setLineWidth,
  setStackedMode,
  setYScaleAuto,
  setYScaleValue,
} from "../actions/lineChartActions";
import { LinearScale } from "@nivo/scales";

const lineChartReducer = (
  state = defaultLineChartConfig as LineSvgProps,
  action: any
) => {
  switch (action.type) {
    case getType(setLineWidth):
      return { ...state, lineWidth: action.payload };
    case getType(setYScaleAuto):
      return {
        ...state,
        yScale: {
          ...state.yScale,
          max: "auto",
          min: "auto",
        } as LinearScale,
      };
    case getType(setYScaleValue):
      return {
        ...state,
        yScale: {
          ...state.yScale,
          max: action.payload[1],
          min: action.payload[0],
        } as LinearScale,
      };
    case getType(setStackedMode):
      return {
        ...state,
        yScale: { ...state.yScale, stacked: action.payload },
      };

    case getType(setLineType):
      return {
        ...state,
        curve: action.payload,
      };
    default:
      return state;
  }
};

export default lineChartReducer;
