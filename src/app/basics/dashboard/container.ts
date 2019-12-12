import { connect } from "react-redux";
import { Dashboard } from "./component";

const mapStateToProps = (state: any) => {
  return {
    panels: state.dashboardReducer
  };
};

const DashboardContainer = connect(mapStateToProps)(Dashboard);

export default DashboardContainer;
