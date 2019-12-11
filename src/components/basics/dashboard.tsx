import React from "react";
import { Panel } from "./panel";

export class Dashboard extends React.Component {
  render() {
    const dasboard = {
      panels: [
        {
          id: "1",
          title: "Ttile1",
          chartType: "treeMap",
          dataApi: "http://getProjects"
        },
        {
          id: "2",
          title: "Ttile2",
          chartType: "barChart",
          dataApi: "http://getProjects"
        },
        {
          id: "3",
          title: "Ttile3",
          chartType: "pieChart",
          dataApi: "http://getProjects"
        }
      ]
    };

    var chartComponents = dasboard.panels.map(function(panel) {
      return (
        <Panel key={panel.id} title={panel.title} chartType={panel.chartType} />
      );
    });

    return <div>{chartComponents}</div>;
  }
}
