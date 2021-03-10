import React from "react";
import { Slider, Row, Col, InputNumber, Divider, Switch, Select } from "antd";
import LineChart from "./component";
import { LineSvgProps } from "@nivo/line";
import { useState } from "react";

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
  },
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

const { Option } = Select;

const LineChartConfigurator = (props: any) => {
  const [lineChartConfig, setLineChartConfig] = useState(
    defaultLineChartConfig
  );

  const handleLineWidth = (value: number) => {
    setLineChartConfig({ ...lineChartConfig, lineWidth: value });
  };

  const handleLineType = (
    value:
      | "basis"
      | "cardinal"
      | "catmullRom"
      | "linear"
      | "monotoneX"
      | "monotoneY"
      | "natural"
      | "step"
      | "stepAfter"
      | "stepBefore"
  ) => {
    setLineChartConfig({ ...lineChartConfig, curve: value });
  };

  return (
    <div>
      <div className="panel" style={{ height: 500, width: "60%", padding: 0 }}>
        <LineChart {...lineChartConfig} data={props.series} />
      </div>
      <div className="config-panel">
        <h1>Configurations</h1>

        <Row>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select line type"
            optionFilterProp="children"
            filterOption={(input: string, option: any) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onSelect={handleLineType}
          >
            <Option value="basis">Basis</Option>
            <Option value="cardinal">cardinal</Option>
            <Option value="catmullRom">catmullRom</Option>
            <Option value="linear">linear</Option>
            <Option value="monotoneX">monotoneX</Option>
            <Option value="monotoneY">monotoneY</Option>
            <Option value="natural">natural</Option>
            <Option value="step">step</Option>
            <Option value="stepAfter">stepAfter</Option>
            <Option value="stepBefore">stepBefore</Option>
          </Select>
        </Row>
        <Row>
          <h4>Line Width</h4>
          <Col span={17}>
            <Slider
              onChange={handleLineWidth}
              value={lineChartConfig.lineWidth}
              max={20}
              step={1}
              min={0}
              defaultValue={2}
            ></Slider>
          </Col>
          <Col span={7}>
            <InputNumber
              min={0}
              max={45}
              step={1}
              value={lineChartConfig.lineWidth}
              onChange={handleLineWidth}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LineChartConfigurator;
