import React from "react";
import { Steps, Button, message, Layout, Divider } from "antd";
import "antd/dist/antd.css";
import DataConfiguratorContainer from "./dataConfigurator";
import ChartConfiguratorContainer from "./chartConfigurator";

const { Step } = Steps;
const steps = [
  {
    title: "Select data",
    content: <DataConfiguratorContainer />,
  },
  {
    title: "Select chart type: ",
    content: <ChartConfiguratorContainer />,
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

export class CreatePanelWizard extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      current: 0,
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
    const { Header, Content, Footer } = Layout;

    return (
      <Layout style={{ height: "100%" }}>
        <Steps current={current} style={{ padding: 50 }}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div style={{ margin: "auto" }}>
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
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
        </div>
        <Divider />
        <Content style={{ padding: 10 }}>{steps[current].content}</Content>
        <Divider />
        <Footer></Footer>
      </Layout>
    );
  }
}
