import React from "react";
import { getComponent } from "../../utils/chartUtils";

export class Panel extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      series: [],
    };
  }

  componentDidMount() {
    if (this.props.dataApi) {
      fetch(this.props.dataApi, {})
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({ series: result });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.error(error);
          }
        );
    }
  }

  render() {
    const component = getComponent(
      this.props.chartType,
      this.state.series,
      this.props.toggleCreatePanelWizard
    );

    return (
      <div className="panel">
        <h3>{this.props.title}</h3>
        {component}
      </div>
    );
  }
}
