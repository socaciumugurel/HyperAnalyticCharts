import React from "react";
import { ResponsiveBar, BarProps } from "@nivo/bar";
import Configurator from "./configurator";
import { handleInnerPadding } from "../../../redux/actions/barChartActions";
import { connect } from "react-redux";

export const defaultBarChartConfig: BarProps = {
  keys: ["hot dog", "burger", "sandwich", "kebab", "fries", "donut"],
  indexBy: "country",
  margin: { top: 50, right: 80, bottom: 100, left: 80 },
  padding: 0.3,
  colors: { scheme: "nivo" },
  borderColor: { from: "color", modifiers: [["darker", 1.6]] },
  axisTop: null,
  axisRight: null,
  axisBottom: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "country",
    legendPosition: "middle",
    legendOffset: 32,
  },
  axisLeft: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "food",
    legendPosition: "middle",
    legendOffset: -40,
  },
  labelSkipWidth: 12,
  labelSkipHeight: 12,
  labelTextColor: { from: "color", modifiers: [["darker", 1.6]] },
  legends: [
    {
      dataFrom: "keys",
      anchor: "bottom-right",
      direction: "column",
      justify: false,
      translateX: 120,
      translateY: 0,
      itemsSpacing: 2,
      itemWidth: 100,
      itemHeight: 20,
      itemDirection: "left-to-right",
      itemOpacity: 0.85,
      symbolSize: 20,
      effects: [
        {
          on: "hover",
          style: {
            itemOpacity: 1,
          },
        },
      ],
    },
  ],
};

const BarChartConfigurator = (props: any) => {
  return (
    <div>
      <div className="panel" style={{ height: 500, width: "60%", padding: 0 }}>
        <ResponsiveBar {...props} data={props.series} />
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
  return { ...state.barChartReducer } as BarProps;
};

const mapDispatchToProps = {
  handleInnerPadding,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarChartConfigurator);
