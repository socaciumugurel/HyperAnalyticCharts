import { connect } from "react-redux";
import { Dashboard } from "./component";

const mapStateToProps = (state: any) => {
  return {
    panels: state.dashboardReducer.panels,
    layout: state.dashboardReducer.layout,
    isWizardVisible: state.createPanelReducer.isVisible,
  };
};

const DashboardContainer = connect(mapStateToProps)(Dashboard);

export default DashboardContainer;
