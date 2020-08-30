import React from "react";
import PanelContainer from "../panel/container";
import { CreatePanelWizard } from "../createPanelWizard/component";
import GridLayout from "react-grid-layout";

export class Dashboard extends React.Component<any> {
  render() {
    var chartComponents = this.props.panels.map(function (panel: any) {
      return (
        <div key={panel.id}>
          <PanelContainer id={panel.id} />
        </div>
      );
    });

    if (this.props.isWizardVisible) {
      return <CreatePanelWizard />;
    } else
      return (
        <GridLayout
          className="layout"
          layout={this.props.layout}
          cols={12}
          rowHeight={200}
          width={2000}
          onLayoutChange={(layout) => {
            console.log(layout);
          }}
        >
          {chartComponents}
          {/* <div key="a">a</div>
          <div key="b">b</div>
          <div key="c">c</div>} */}
        </GridLayout>
      );
  }
}
