import React from "react";
import PanelContainer from "../panel/container";
import { CreatePanelWizard } from "../createPanelWizard/component";
import GridLayout from "react-grid-layout";
import { connect } from "react-redux";

const Dashboard = (props: any) => {
  const { layout, charts } = props;

  var chartComponents = charts.map(function (chart: any) {
    return (
      <div key={chart.id}>
        <PanelContainer id={chart.id} />
      </div>
    );
  });

  if (props.isWizardVisible) {
    return <CreatePanelWizard />;
  } else
    return (
      <GridLayout
        className="layout"
        layout={layout}
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
};

const mapStateToProps = (state: any) => {
  return {
    charts: state.charts,
    dashboards: state.dashboards,
    isWizardVisible: state.createPanel.isVisible,
  };
};

export default connect(mapStateToProps)(Dashboard);
