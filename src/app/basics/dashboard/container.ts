import { connect } from "react-redux";
import { Dashboard } from "./component";

const mapStateToProps = (state: any) => {
  return {
    panels: state.dashboard.panels,
    layout: state.dashboard.layout,
    isWizardVisible: state.createPanel.isVisible,
  };
};

const DashboardContainer = connect(mapStateToProps)(Dashboard);

export default DashboardContainer;
