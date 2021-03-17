import { Col, Collapse, InputNumber, Row, Select, Slider, Switch } from "antd";
import React, { useState } from "react";
import { LinearScale } from "@nivo/scales";
import { LineSvgProps } from "@nivo/line";
import { ILineActions } from "./models";

const Configurator = (props: LineSvgProps & ILineActions) => {
  const { Option } = Select;
  const { Panel } = Collapse;
  const [minyScale, setMinyScale] = useState(0);
  const [maxyScale, setMaxYScale] = useState(0);
  const [disabled, setDisabled] = useState(true);
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="Configure Y Scale" key="1">
        <Row>
          <h4>Stacked</h4>
          <Col span={4}>
            <Switch onChange={props.setStackedMode} defaultChecked />
          </Col>
        </Row>

        <Row>
          <h4>Auto Axis</h4>
          <Col span={4}>
            <Switch
              onChange={(value: boolean) => {
                setDisabled(value);
                if (value) props.setYScaleAuto();
              }}
              defaultChecked={(props.yScale as LinearScale).stacked}
            />
          </Col>
        </Row>
        <Row>
          <Col span={17}>
            <Slider
              range
              disabled={disabled}
              onChange={(value: [number, number]) => {
                setMaxYScale(value[1]);
                setMinyScale(value[0]);
                props.setYScaleValue(value);
              }}
              value={[minyScale, maxyScale]}
              max={200000}
              step={5000}
              min={5000}
              defaultValue={[9000, 135000]}
            ></Slider>
          </Col>
        </Row>
      </Panel>
      <Panel header="Style" key="2">
        <h4>Line Type</h4>
        <Row>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select line type"
            optionFilterProp="children"
            filterOption={(input: string, option: any) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onSelect={props.setLineType}
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

        <h4>Line Width</h4>
        <Col span={17}>
          <Slider
            onChange={props.setLineWidth}
            value={props.lineWidth}
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
            value={props.lineWidth}
            onChange={props.setLineWidth}
          />
        </Col>
      </Panel>
    </Collapse>
  );
};

export default Configurator;
