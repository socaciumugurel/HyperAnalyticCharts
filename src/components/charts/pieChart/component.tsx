import React from "react";
import { CommonPieProps, ResponsivePie } from "@nivo/pie";
import Configurator from "./configurator";
import { connect } from "react-redux";
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
} from "../../../redux/actions/pieChartActions";

export const defaultPieChartConfig: CommonPieProps = {
  margin: { top: 40, right: 80, bottom: 100, left: 80 },
  innerRadius: 0,
  padAngle: 0.7,
  cornerRadius: 0,
  colors: { scheme: "nivo" },
  borderWidth: 1,
  borderColor: { from: "color", modifiers: [["darker", 0.2]] },
  enableRadialLabels: true,
  radialLabelsSkipAngle: 10,
  radialLabelsTextXOffset: 6,
  radialLabelsTextColor: "#333333",
  radialLabelsLinkOffset: 0,
  radialLabelsLinkDiagonalLength: 16,
  radialLabelsLinkHorizontalLength: 24,
  radialLabelsLinkStrokeWidth: 1,
  radialLabelsLinkColor: { from: "color" },
  enableSlicesLabels: true,
  slicesLabelsSkipAngle: 10,
  slicesLabelsTextColor: "#333333",
  animate: true,
  motionStiffness: 90,
  motionDamping: 15,
  legends: [
    {
      anchor: "bottom",
      direction: "row",
      translateY: 56,
      itemWidth: 100,
      itemHeight: 18,
      itemTextColor: "#999",
      symbolSize: 18,
      symbolShape: "circle",
      effects: [
        {
          on: "hover",
          style: {
            itemTextColor: "#000",
          },
        },
      ],
    },
  ],
};

const PieChartConfigurator = (props: any) => {
  return (
    <div>
      <div className="panel" style={{ height: 500, width: "60%", padding: 0 }}>
        <ResponsivePie {...props} data={props.series} />
      </div>
      <Configurator {...props} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { ...state.pieChartReducer } as CommonPieProps;
};

const mapDispatchToProps = {
  handleInnerRadiusChange,
  handleBorderWidthChange,
  handleCornerRadiusChange,
  handleEnableRadialLabelsChange,
  handleEnableSlicesLabelsChange,
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PieChartConfigurator);
