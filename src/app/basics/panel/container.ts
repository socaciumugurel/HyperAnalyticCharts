import { connect } from "react-redux";
import { Panel } from "./component";
import { toggleCreatePanelWizard } from "../createPanelWizard/actions";

const mapStateToProps = (state: any, ownProps: any) => {
  const panel = state.dashboardReducer.panels.find(
    (panel: any) => panel.id === ownProps.id
  );
  const { title, chartType, dataApi, config } = panel;
  return {
    title,
    chartType,
    dataApi,
    config,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleCreatePanelWizard: (value: boolean) =>
      dispatch(toggleCreatePanelWizard(value)),
  };
};

const PanelContainer = connect(mapStateToProps, mapDispatchToProps)(Panel);

export default PanelContainer;
