import React from "react";
import { BarProps, BarSvgProps, BarDatum } from "@nivo/bar";
import { Slider, Row, Col, InputNumber, Divider, Switch } from "antd";
import { BarChart } from "./component";

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

export class BarChartConfigurator extends React.Component<any, BarProps> {
  constructor(props: any) {
    super(props);
    this.state = defaultBarChartConfig;
  }

  handleInnerPadding = (value: number | undefined) => {
    this.setState({ innerPadding: value as number });
  };

  render() {
    return (
      <div>
        <div
          className="panel"
          style={{ height: 500, width: "60%", padding: 0 }}
        >
          <BarChart {...this.state} data={this.props.series} />
        </div>
        <div className="config-panel">
          <h1>Configurations</h1>
          <Row>
            <h4>innerRadius</h4>
            <Col span={17}>
              <Slider
                onChange={this.handleInnerPadding}
                value={this.state.innerPadding}
                max={5}
                step={0.5}
              ></Slider>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
