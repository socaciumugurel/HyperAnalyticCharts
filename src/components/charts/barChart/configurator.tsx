import React from "react";
import { BarProps } from "@nivo/bar";
import { Slider, Row, Col } from "antd";
import { IBarActions } from "./models";

const Configurator = (props: BarProps & IBarActions) => {
  return (
    <Row>
      <h4>innerRadius</h4>
      <Col span={17}>
        <Slider
          onChange={props.handleInnerPadding}
          value={props.innerPadding}
          max={5}
          step={0.5}
        ></Slider>
      </Col>
    </Row>
  );
};

export default Configurator;
