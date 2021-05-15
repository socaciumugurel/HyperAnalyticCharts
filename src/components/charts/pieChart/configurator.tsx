import { IPieChartActions } from "./models";
import React from "react";
import { Col, Divider, InputNumber, Row, Slider, Switch } from "antd";
import { CommonPieProps } from "@nivo/pie";

const Configurator = (props: CommonPieProps & IPieChartActions) => {
  return (
    <div className="config-panel">
      <h1>Configurations</h1>
      <Row>
        <h4>innerRadius</h4>
        <Col span={17}>
          <Slider
            onChange={props.handleInnerRadiusChange}
            value={props.innerRadius}
            max={0.95}
            min={0}
            step={0.05}
          ></Slider>
        </Col>
        <Col span={7}>
          <InputNumber
            min={0}
            max={0.95}
            step={0.05}
            value={props.innerRadius}
            onChange={props.handleInnerRadiusChange}
          />
        </Col>
      </Row>
      <Row>
        <h4>padAngle</h4>
        <Col span={17}>
          <Slider
            onChange={props.handlePadAngleChange}
            value={props.padAngle}
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
            value={props.padAngle}
            onChange={props.handlePadAngleChange}
          />
        </Col>
      </Row>
      <Row>
        <h4>cornerRadius</h4>
        <Col span={17}>
          <Slider
            onChange={props.handleCornerRadiusChange}
            value={props.cornerRadius}
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
            value={props.cornerRadius}
            onChange={props.handleCornerRadiusChange}
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
            value={props.margin?.top}
            onChange={props.handleMarginTopChange}
          />
        </Col>
        <Col span={5}> right</Col>
        <Col span={7}>
          <InputNumber
            min={0}
            step={1}
            value={props.margin?.right}
            onChange={props.handleMarginRightChange}
          />
        </Col>
      </Row>
      <Row>
        <Col span={5}> bottom</Col>
        <Col span={7}>
          <InputNumber
            min={0}
            step={1}
            value={props.margin?.bottom}
            onChange={props.handleMarginBottomChange}
          />
        </Col>
        <Col span={5}> left</Col>
        <Col span={7}>
          <InputNumber
            min={0}
            step={1}
            value={props.margin?.left}
            onChange={props.handleMarginLeftChange}
          />
        </Col>
      </Row>
      <Row>
        <h4>borderWidth</h4>
        <Col span={17}>
          <Slider
            onChange={props.handleBorderWidthChange}
            value={props.borderWidth}
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
            value={props.borderWidth}
            onChange={props.handleBorderWidthChange}
          />
        </Col>
      </Row>
      <Divider />
      <Row>
        <h4>enableRadialLabels</h4>
        <Col span={4}>
          <Switch
            onChange={props.handleEnableRadialLabelsChange}
            defaultChecked
          />
        </Col>
      </Row>
      <Row>
        <h4>radialLabelSkipAngle</h4>
        <Col span={17}>
          <Slider
            onChange={props.handleRadialLabelSkipAngleChange}
            value={props.radialLabelsSkipAngle}
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
            value={props.radialLabelsSkipAngle}
            onChange={props.handleRadialLabelSkipAngleChange}
          />
        </Col>
      </Row>
      <Row>
        <h4>radialLabelsTextXOffset</h4>
        <Col span={17}>
          <Slider
            onChange={props.handleRadialLabelsTextXOffsetChange}
            value={props.radialLabelsTextXOffset}
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
            value={props.radialLabelsTextXOffset}
            onChange={props.handleRadialLabelsTextXOffsetChange}
          />
        </Col>
      </Row>
      <Row>
        <h4>radialLabelsLinkOffset</h4>
        <Col span={17}>
          <Slider
            onChange={props.handleRadialLabelsLinkOffsetChange}
            value={props.radialLabelsLinkOffset}
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
            value={props.radialLabelsLinkOffset}
            onChange={props.handleRadialLabelsLinkOffsetChange}
          />
        </Col>
      </Row>
      <Row>
        <h4>radialLabelsLinkOffset</h4>
        <Col span={17}>
          <Slider
            onChange={props.handleRadialLabelsLinkDiagonalLengthChange}
            value={props.radialLabelsLinkDiagonalLength}
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
            value={props.radialLabelsLinkDiagonalLength}
            onChange={props.handleRadialLabelsLinkDiagonalLengthChange}
          />
        </Col>
      </Row>
      <Row>
        <h4>radialLabelsLinkHorizontalLength</h4>
        <Col span={17}>
          <Slider
            onChange={props.handleRadialLabelsLinkHorizontalLengthChange}
            value={props.radialLabelsLinkHorizontalLength}
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
            value={props.radialLabelsLinkHorizontalLength}
            onChange={props.handleRadialLabelsLinkHorizontalLengthChange}
          />
        </Col>
      </Row>
      <Divider />
      <Row>
        <h4>enableSlicesLabels</h4>
        <Col span={4}>
          <Switch
            onChange={props.handleEnableSlicesLabelsChange}
            defaultChecked
          />
        </Col>
      </Row>
      <Row>
        <h4>slicesLabelsSkipAngle</h4>
        <Col span={17}>
          <Slider
            onChange={props.handleSlicesLabelsSkipAngleChange}
            value={props.slicesLabelsSkipAngle}
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
            value={props.slicesLabelsSkipAngle}
            onChange={props.handleSlicesLabelsSkipAngleChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Configurator;
