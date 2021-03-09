import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Tabs, Button } from "antd";
import { loadDashboards } from "../../redux/actions/dashboardActions";
import { loadCharts } from "../../redux/actions/chartActions";
import Dashboard from "./component";

const { TabPane } = Tabs;

const newDashboardBtn = <Button type="primary">New Dashboard</Button>;

const DashboardsPage = (props: any) => {
  const { dashboards, charts } = props;

  useEffect(() => {
    if (charts.length === 0) {
      props.loadCharts("http://localhost:3001/charts");
    }
    if (dashboards.length === 0)
      props.loadDashboards("http://localhost:3001/dashboards");
  }, []);

  return (
    <>
      <Tabs tabBarExtraContent={newDashboardBtn}>
        {dashboards.map((dashboard: any) => (
          <TabPane tab={dashboard.name} key={dashboard.id}>
            <Dashboard layout={dashboard.layout} />
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    dashboards: state.dashboards,
    charts: state.charts,
  };
};

const mapDispatchToProps = {
  loadDashboards,
  loadCharts,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardsPage);
