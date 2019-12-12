import React from "react";
import PanelContainer from "../panel/container";

export class Dashboard extends React.Component<any> {
  render() {
    var chartComponents = this.props.panels.map(function(panel: any) {
      return <PanelContainer id={panel.id} key={panel.id} />;
    });

    return <div>{chartComponents}</div>;
  }
}
