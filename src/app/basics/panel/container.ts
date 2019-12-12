import { connect } from "react-redux";
import { Panel } from "./component";

const mapStateToProps = (state: any, ownProps: any) => {
  const panel = state.dashboardReducer.find(
    (panel: any) => panel.id === ownProps.id
  );
  const { title, chartType, dataApi, config } = panel;
  return {
    title,
    chartType,
    dataApi,
    config
  };
};

const PanelContainer = connect(mapStateToProps)(Panel);

export default PanelContainer;
