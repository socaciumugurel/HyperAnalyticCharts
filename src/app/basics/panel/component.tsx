import React from "react";
import { LineChart } from "../../charts/lineChart/component";
import { PieChart } from "../../charts/pieChart/component";
import { TreeMap } from "../../charts/treeMap/component";
import { BarChart } from "../../charts/barChart/component";

export class Panel extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      series: []
    };
  }

  componentDidMount() {
    fetch(this.props.dataApi, {})
      .then(res => res.json())
      .then(
        result => {
          this.setState({ series: result });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.error("error: ");
          console.error(error);
        }
      );
  }

  render() {
    let component = {};
    switch (this.props.chartType) {
      case "lineChart":
        component = <LineChart series={this.state.series} />;
        break;
      case "pieChart":
        component = <PieChart series={this.state.series} />;
        break;
      case "barChart":
        component = <BarChart series={this.state.series} />;
        break;
      case "treeMap":
        component = <TreeMap />;
        break;
      default:
        component = <div>"Nada"</div>;
    }

    return (
      <div>
        <h3>{this.props.title}</h3>
        {component}
      </div>
    );
  }
}
