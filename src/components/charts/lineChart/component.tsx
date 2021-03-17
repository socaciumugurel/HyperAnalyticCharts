import React from "react";
import { LineSvgProps, ResponsiveLine } from "@nivo/line";
import { LinearScale } from "@nivo/scales";
import Configurator from "./configurator";
import {
  setStackedMode,
  setLineWidth,
  setYScaleValue,
  setLineType,
  setYScaleAuto,
} from "../../../redux/actions/lineChartActions";
import { connect } from "react-redux";

export const defaultLineChartConfig: LineSvgProps = {
  data: [],
  margin: { top: 50, right: 110, bottom: 50, left: 60 },
  xScale: { type: "point" },
  yScale: {
    type: "linear",
    min: "auto",
    max: "auto",
    stacked: true,
    reverse: false,
  } as LinearScale,
  yFormat: " >-.2f",
  axisTop: null,
  axisRight: null,
  axisBottom: {
    orient: "bottom",
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "transportation",
    legendOffset: 36,
    legendPosition: "middle",
  },
  axisLeft: {
    orient: "left",
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "count",
    legendOffset: -40,
    legendPosition: "middle",
  },
  lineWidth: 2,
  pointSize: 8,
  pointColor: { theme: "background" },
  pointBorderWidth: 3,
  pointBorderColor: { from: "serieColor" },
  pointLabelYOffset: -12,
  areaBaselineValue: 30,
  areaOpacity: 0.3,
  useMesh: true,
  legends: [
    {
      anchor: "right",
      direction: "column",
      justify: false,
      translateX: 94,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: "left-to-right",
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: "circle",
      symbolBorderColor: "rgba(0, 0, 0, .5)",
      effects: [
        {
          on: "hover",
          style: {
            itemBackground: "rgba(0, 0, 0, .03)",
            itemOpacity: 1,
          },
        },
      ],
    },
  ],
};

const LineChartConfigurator = (props: any) => {
  return (
    <div>
      <div className="panel" style={{ height: 500, width: "60%", padding: 0 }}>
        <ResponsiveLine {...props} data={props.series} />
      </div>
      <div className="config-panel">
        <h1>Configurations</h1>
        <div>
          <Configurator {...props} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { ...state.lineChartReducer } as LineSvgProps;
};

const mapDispatchToProps = {
  setStackedMode,
  setLineWidth,
  setYScaleValue,
  setLineType,
  setYScaleAuto,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LineChartConfigurator);
