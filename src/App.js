import React, { useEffect } from "react";
import "./App.less";
import "./styling/dashboard.css";
import "./styling/createPanelWizard.css";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import { Route } from "react-router-dom";
import Header from "./app/basics/common/Header";

import DashboardsPage from "./app/basics/dashboard/DashboardsPage";
import { CreatePanelWizard } from "./app/basics/createPanelWizard/component";
import DataConnections from "./app/basics/dataConnection/DataConnections";

const App = () => (
  <>
    <Header />
    <Route path="/dashboard" component={DashboardsPage} />
    <Route path="/create-panel/" component={CreatePanelWizard} />
    <Route path="/connections/" component={DataConnections} />
  </>
);

export default App;
