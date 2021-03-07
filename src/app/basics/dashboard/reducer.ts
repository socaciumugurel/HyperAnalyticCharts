import { loadDashboardsSuccess } from "../../redux/actions/dashboardActions";
import { getType } from "typesafe-actions";

const dashboardReducer = (state = [] as any[], action: any) => {
  switch (action.type) {
    case getType(loadDashboardsSuccess):
      return action.payload;
    default:
      return state;
  }
};

export default dashboardReducer;
