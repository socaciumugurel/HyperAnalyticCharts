import React from "react";
import { BarChart } from "../charts/barChart";
import { PieChart } from "../charts/pieChart";
import { TreeMap } from "../charts/treemap";

export class Panel extends React.Component<any> {
  render() {
    let component = {};
    switch (this.props.chartType) {
      case "barChart":
        component = <BarChart />;
        break;
      case "pieChart":
        component = <PieChart />;
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
