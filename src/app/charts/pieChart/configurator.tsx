import React from "react";
import { PieSvgProps } from "@nivo/pie";
import { Slider } from "antd";
import { SliderValue } from "antd/lib/slider";
import { PieChart } from "./component";

export const defaultPieChartConfig: PieSvgProps = {
  data: [],
  margin: { top: 40, right: 80, bottom: 100, left: 80 },
  innerRadius: 0.5,
  padAngle: 0.7,
  cornerRadius: 3,
  colors: { scheme: "nivo" },
  borderWidth: 1,
  borderColor: { from: "color", modifiers: [["darker", 0.2]] },
  radialLabelsSkipAngle: 10,
  radialLabelsTextXOffset: 6,
  radialLabelsTextColor: "#333333",
  radialLabelsLinkOffset: 0,
  radialLabelsLinkDiagonalLength: 16,
  radialLabelsLinkHorizontalLength: 24,
  radialLabelsLinkStrokeWidth: 1,
  radialLabelsLinkColor: { from: "color" },
  slicesLabelsSkipAngle: 10,
  slicesLabelsTextColor: "#333333",
  animate: true,
  motionStiffness: 90,
  motionDamping: 15,
  defs: [
    {
      id: "dots",
      type: "patternDots",
      background: "inherit",
      color: "rgba(255, 255, 255, 0.3)",
      size: 4,
      padding: 1,
      stagger: true,
    },
    {
      id: "lines",
      type: "patternLines",
      background: "inherit",
      color: "rgba(255, 255, 255, 0.3)",
      rotation: -45,
      lineWidth: 6,
      spacing: 10,
    },
  ],
  fill: [
    {
      match: {
        id: "ruby",
      },
      id: "dots",
    },
    {
      match: {
        id: "c",
      },
      id: "dots",
    },
    {
      match: {
        id: "go",
      },
      id: "dots",
    },
    {
      match: {
        id: "python",
      },
      id: "dots",
    },
    {
      match: {
        id: "scala",
      },
      id: "lines",
    },
    {
      match: {
        id: "lisp",
      },
      id: "lines",
    },
    {
      match: {
        id: "elixir",
      },
      id: "lines",
    },
    {
      match: {
        id: "javascript",
      },
      id: "lines",
    },
  ],
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

export class PieChartConfigurator extends React.Component<any, PieSvgProps> {
  constructor(props: any) {
    super(props);
    this.state = defaultPieChartConfig;
  }

  handleInnerRadiusChange = (value: SliderValue) => {
    this.setState({ innerRadius: (value as number) / 100 });
  };

  render() {
    return (
      <div>
        <div className="panel">
          <PieChart {...this.state} />
        </div>
        <div className="panel">
          <h4>innerRadius</h4>
          <Slider
            onChange={this.handleInnerRadiusChange}
            max={95}
            defaultValue={45}
          ></Slider>
        </div>
      </div>
    );
  }
}
