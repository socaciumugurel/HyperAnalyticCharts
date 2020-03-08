import React from "react";
import { Steps, Button, message, Select } from "antd";
import "antd/dist/antd.css";
import { getComponent } from "../../utils";
import { SelectDataSourceContent } from "./step2/component";

const { Step } = Steps;

class SelectChartContent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedType: ""
    };
  }

  render() {
    const { Option } = Select;

    return (
      <div>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select chart type"
          optionFilterProp="children"
          onChange={(value: string) => this.setState({ selectedType: value })}
          // onFocus={onFocus}
          // onBlur={onBlur}
          // onSearch={onSearch}
          filterOption={(input, option: any) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          <Option value="barChart">Bar</Option>
          <Option value="lineChart">Line</Option>
          <Option value="pieChart">Pie</Option>
        </Select>
        {getComponent(this.state.selectedType, null, null)}
      </div>
    );
  }
}

const steps = [
  {
    title: "Select chart type: ",
    content: <SelectChartContent></SelectChartContent>
  },
  {
    title: "Select data",
    content: <SelectDataSourceContent />
  },
  {
    title: "Last",
    content: "Last-content"
  }
];

export class CreatePanelWizard extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      current: 0
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}
