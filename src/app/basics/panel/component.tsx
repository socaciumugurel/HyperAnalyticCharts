import React from "react";
import { LineChart } from "../../charts/lineChart/component";
import { PieChart } from "../../charts/pieChart/component";
import { TreeMap } from "../../charts/treeMap/component";
import { BarChart } from "../../charts/barChart/component";

export class Panel extends React.Component<any> {
  render() {
    let component = {};
    switch (this.props.chartType) {
      case "lineChart":
        component = <LineChart />;
        break;
      case "pieChart":
        component = <PieChart />;
        break;
      case "barChart":
        component = <BarChart />;
        break;
      case "treeMap":
        component = <TreeMap />;
        break;
      default:
        component = <div>"Nada"</div>;
    }

    return (
      <div className="panel">
        <h3>{this.props.title}</h3>
        {component}
      </div>
    );
  }
}
