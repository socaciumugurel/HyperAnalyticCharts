import React from "react";
import { Steps, Button, message } from "antd";
import "antd/dist/antd.css";
import DataConfiguratorContainer from "./dataConfigurator";
import ChartConfiguratorContainer from "./chartConfigurator";

const { Step } = Steps;
const steps = [
  {
    title: "Select data",
    content: <DataConfiguratorContainer />
  },
  {
    title: "Select chart type: ",
    content: <ChartConfiguratorContainer />
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
