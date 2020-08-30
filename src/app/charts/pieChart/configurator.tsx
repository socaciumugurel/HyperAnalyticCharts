import React from "react";
import { CommonPieProps } from "@nivo/pie";
import { Slider, Row, Col, InputNumber, Divider, Switch } from "antd";
import { SliderValue } from "antd/lib/slider";
import { PieChart } from "./component";

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

export class PieChartConfigurator extends React.Component<any, CommonPieProps> {
  constructor(props: any) {
    super(props);
    this.state = defaultPieChartConfig;
  }

  handleInnerRadiusChange = (value: SliderValue | number | undefined) => {
    this.setState({ innerRadius: value as number });
  };

  handlePadAngleChange = (value: SliderValue | number | undefined) => {
    this.setState({ padAngle: value as number });
  };

  handleCornerRadiusChange = (value: SliderValue | number | undefined) => {
    this.setState({ cornerRadius: value as number });
  };

  handleMarginTopChange = (value: number | undefined) => {
    this.setState({ margin: { ...this.state.margin, top: value } });
  };

  handleMarginRightChange = (value: number | undefined) => {
    this.setState({ margin: { ...this.state.margin, right: value } });
  };

  handleMarginBottomChange = (value: number | undefined) => {
    this.setState({ margin: { ...this.state.margin, bottom: value } });
  };

  handleMarginLeftChange = (value: number | undefined) => {
    this.setState({ margin: { ...this.state.margin, left: value } });
  };

  handleBorderWidthChange = (value: SliderValue | number | undefined) => {
    this.setState({ borderWidth: value as number });
  };

  handleEnableRadialLabelsChange = (value: boolean | undefined) => {
    this.setState({ enableRadialLabels: value });
  };

  handleRadialLabelSkipAngleChange = (
    value: SliderValue | number | undefined
  ) => {
    this.setState({ radialLabelsSkipAngle: value as number });
  };

  handleRadialLabelsTextXOffsetChange = (
    value: SliderValue | number | undefined
  ) => {
    this.setState({ radialLabelsTextXOffset: value as number });
  };

  handleRadialLabelsLinkOffsetChange = (
    value: SliderValue | number | undefined
  ) => {
    this.setState({ radialLabelsLinkOffset: value as number });
  };

  handleRadialLabelsLinkDiagonalLengthChange = (
    value: SliderValue | number | undefined
  ) => {
    this.setState({ radialLabelsLinkDiagonalLength: value as number });
  };

  handleRadialLabelsLinkHorizontalLengthChange = (
    value: SliderValue | number | undefined
  ) => {
    this.setState({ radialLabelsLinkHorizontalLength: value as number });
  };

  handleEnableSlicesLabelsChange = (value: boolean | undefined) => {
    this.setState({ enableSlicesLabels: value });
  };

  handleSlicesLabelsSkipAngleChange = (
    value: SliderValue | number | undefined
  ) => {
    this.setState({ slicesLabelsSkipAngle: value as number });
  };

  render() {
    return (
      <div>
        <div
          className="panel"
          style={{ height: 500, width: "60%", padding: 0 }}
        >
          <PieChart {...this.state} data={this.props.series} />
        </div>
        <div className="config-panel">
          <h1>Configurations</h1>
          <Row>
            <h4>innerRadius</h4>
            <Col span={17}>
              <Slider
                onChange={this.handleInnerRadiusChange}
                value={this.state.innerRadius}
                max={0.95}
                step={0.05}
              ></Slider>
            </Col>
            <Col span={7}>
              <InputNumber
                min={0}
                max={0.95}
                value={this.state.innerRadius}
                onChange={this.handleInnerRadiusChange}
              />
            </Col>
          </Row>
          <Row>
            <h4>padAngle</h4>
            <Col span={17}>
              <Slider
                onChange={this.handlePadAngleChange}
                value={this.state.padAngle}
                max={45}
                step={1}
                defaultValue={0}
              ></Slider>
            </Col>
            <Col span={7}>
              <InputNumber
                min={0}
                max={45}
                step={1}
                value={this.state.padAngle}
                onChange={this.handlePadAngleChange}
              />
            </Col>
          </Row>
          <Row>
            <h4>cornerRadius</h4>
            <Col span={17}>
              <Slider
                onChange={this.handleCornerRadiusChange}
                value={this.state.cornerRadius}
                max={45}
                step={1}
                defaultValue={0}
              ></Slider>
            </Col>
            <Col span={7}>
              <InputNumber
                min={0}
                max={45}
                step={1}
                value={this.state.cornerRadius}
                onChange={this.handleCornerRadiusChange}
              />
            </Col>
          </Row>
          <Row>
            <h4>margin</h4>
            <Col span={5}> top</Col>
            <Col span={7}>
              <InputNumber
                min={0}
                step={1}
                value={this.state.margin?.top}
                onChange={this.handleMarginTopChange}
              />
            </Col>
            <Col span={5}> right</Col>
            <Col span={7}>
              <InputNumber
                min={0}
                step={1}
                value={this.state.margin?.right}
                onChange={this.handleMarginRightChange}
              />
            </Col>
          </Row>
          <Row>
            <Col span={5}> bottom</Col>
            <Col span={7}>
              <InputNumber
                min={0}
                step={1}
                value={this.state.margin?.bottom}
                onChange={this.handleMarginBottomChange}
              />
            </Col>
            <Col span={5}> left</Col>
            <Col span={7}>
              <InputNumber
                min={0}
                step={1}
                value={this.state.margin?.left}
                onChange={this.handleMarginLeftChange}
              />
            </Col>
          </Row>
          <Row>
            <h4>borderWidth</h4>
            <Col span={17}>
              <Slider
                onChange={this.handleBorderWidthChange}
                value={this.state.borderWidth}
                max={20}
                step={1}
                defaultValue={0}
              ></Slider>
            </Col>
            <Col span={7}>
              <InputNumber
                min={0}
                max={20}
                step={1}
                value={this.state.borderWidth}
                onChange={this.handleBorderWidthChange}
              />
            </Col>
          </Row>
          <Divider />
          <Row>
            <h4>enableRadialLabels</h4>
            <Col span={4}>
              <Switch
                onChange={this.handleEnableRadialLabelsChange}
                defaultChecked
              />
            </Col>
          </Row>
          <Row>
            <h4>radialLabelSkipAngle</h4>
            <Col span={17}>
              <Slider
                onChange={this.handleRadialLabelSkipAngleChange}
                value={this.state.radialLabelsSkipAngle}
                max={45}
                step={1}
                defaultValue={0}
              ></Slider>
            </Col>
            <Col span={7}>
              <InputNumber
                min={0}
                max={45}
                step={1}
                value={this.state.radialLabelsSkipAngle}
                onChange={this.handleRadialLabelSkipAngleChange}
              />
            </Col>
          </Row>
          <Row>
            <h4>radialLabelsTextXOffset</h4>
            <Col span={17}>
              <Slider
                onChange={this.handleRadialLabelsTextXOffsetChange}
                value={this.state.radialLabelsTextXOffset}
                max={45}
                step={1}
                defaultValue={0}
              ></Slider>
            </Col>
            <Col span={7}>
              <InputNumber
                min={0}
                max={45}
                step={1}
                value={this.state.radialLabelsTextXOffset}
                onChange={this.handleRadialLabelsTextXOffsetChange}
              />
            </Col>
          </Row>
          <Row>
            <h4>radialLabelsLinkOffset</h4>
            <Col span={17}>
              <Slider
                onChange={this.handleRadialLabelsLinkOffsetChange}
                value={this.state.radialLabelsLinkOffset}
                max={45}
                step={1}
                defaultValue={0}
              ></Slider>
            </Col>
            <Col span={7}>
              <InputNumber
                min={0}
                max={45}
                step={1}
                value={this.state.radialLabelsLinkOffset}
                onChange={this.handleRadialLabelsLinkOffsetChange}
              />
            </Col>
          </Row>
          <Row>
            <h4>radialLabelsLinkOffset</h4>
            <Col span={17}>
              <Slider
                onChange={this.handleRadialLabelsLinkDiagonalLengthChange}
                value={this.state.radialLabelsLinkDiagonalLength}
                max={45}
                step={1}
                defaultValue={0}
              ></Slider>
            </Col>
            <Col span={7}>
              <InputNumber
                min={0}
                max={45}
                step={1}
                value={this.state.radialLabelsLinkDiagonalLength}
                onChange={this.handleRadialLabelsLinkDiagonalLengthChange}
              />
            </Col>
          </Row>
          <Row>
            <h4>radialLabelsLinkHorizontalLength</h4>
            <Col span={17}>
              <Slider
                onChange={this.handleRadialLabelsLinkHorizontalLengthChange}
                value={this.state.radialLabelsLinkHorizontalLength}
                max={45}
                step={1}
                defaultValue={0}
              ></Slider>
            </Col>
            <Col span={7}>
              <InputNumber
                min={0}
                max={45}
                step={1}
                value={this.state.radialLabelsLinkHorizontalLength}
                onChange={this.handleRadialLabelsLinkHorizontalLengthChange}
              />
            </Col>
          </Row>
          <Divider />
          <Row>
            <h4>enableSlicesLabels</h4>
            <Col span={4}>
              <Switch
                onChange={this.handleEnableSlicesLabelsChange}
                defaultChecked
              />
            </Col>
          </Row>
          <Row>
            <h4>slicesLabelsSkipAngle</h4>
            <Col span={17}>
              <Slider
                onChange={this.handleSlicesLabelsSkipAngleChange}
                value={this.state.slicesLabelsSkipAngle}
                max={45}
                step={1}
                defaultValue={0}
              ></Slider>
            </Col>
            <Col span={7}>
              <InputNumber
                min={0}
                max={45}
                step={1}
                value={this.state.slicesLabelsSkipAngle}
                onChange={this.handleSlicesLabelsSkipAngleChange}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
