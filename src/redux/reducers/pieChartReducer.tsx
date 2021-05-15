import { PieSvgProps } from "@nivo/pie";
import { getType } from "typesafe-actions";
import { defaultPieChartConfig } from "../../components/charts/pieChart/component";
import {
  handleBorderWidthChange,
  handleCornerRadiusChange,
  handleEnableRadialLabelsChange,
  handleEnableSlicesLabelsChange,
  handleInnerRadiusChange,
  handleMarginBottomChange,
  handleMarginLeftChange,
  handleMarginRightChange,
  handleMarginTopChange,
  handlePadAngleChange,
  handleRadialLabelSkipAngleChange,
  handleRadialLabelsLinkDiagonalLengthChange,
  handleRadialLabelsLinkHorizontalLengthChange,
  handleRadialLabelsLinkOffsetChange,
  handleRadialLabelsTextXOffsetChange,
  handleSlicesLabelsSkipAngleChange,
} from "../actions/pieChartActions";

const pieChartReducer = (
  state = defaultPieChartConfig as PieSvgProps,
  action: any
) => {
  switch (action.type) {
    case getType(handleInnerRadiusChange):
      return { ...state, innerRadius: action.payload };

    case getType(handlePadAngleChange):
      return { ...state, padAngle: action.payload };

    case getType(handleCornerRadiusChange):
      return { ...state, cornerRadius: action.payload };

    case getType(handleMarginTopChange):
      return { ...state, margin: { ...state.margin, top: action.payload } };

    case getType(handleMarginRightChange):
      return { ...state, margin: { ...state.margin, right: action.payload } };

    case getType(handleMarginBottomChange):
      return { ...state, margin: { ...state.margin, bottom: action.payload } };

    case getType(handleMarginLeftChange):
      return { ...state, margin: { ...state.margin, left: action.payload } };

    case getType(handleBorderWidthChange):
      return { ...state, borderWidth: action.payload };

    case getType(handleEnableRadialLabelsChange):
      return { ...state, enableRadialLabels: action.payload };

    case getType(handleRadialLabelSkipAngleChange):
      return { ...state, radialLabelsSkipAngle: action.payload };

    case getType(handleRadialLabelsTextXOffsetChange):
      return { ...state, padAngradialLabelsTextXOffsetle: action.payload };

    case getType(handleRadialLabelsLinkOffsetChange):
      return { ...state, radialLabelsLinkOffset: action.payload };

    case getType(handleRadialLabelsLinkDiagonalLengthChange):
      return { ...state, radialLabelsLinkDiagonalLength: action.payload };

    case getType(handleRadialLabelsLinkHorizontalLengthChange):
      return { ...state, radialLabelsLinkHorizontalLength: action.payload };

    case getType(handleEnableSlicesLabelsChange):
      return { ...state, enableSlicesLabels: action.payload };

    case getType(handleSlicesLabelsSkipAngleChange):
      return { ...state, slicesLabelsSkipAngle: action.payload };

    default:
      return state;
  }
};

export default pieChartReducer;
