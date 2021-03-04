import React from "react";
import "./App.less";
import "./styling/dashboard.css";
import "./styling/createPanelWizard.css";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import { Route } from "react-router-dom";
import Header from "./app/basics/common/Header";

import DashboardContainer from "./app/basics/dashboard/container";
import { CreatePanelWizard } from "./app/basics/createPanelWizard/component";
import DataConnections from "./app/basics/dataConnection/DataConnections";

function App() {
  return (
    <>
      <Header />
      <Route path="/dashboard" component={DashboardContainer} />
      <Route path="/create-panel/" component={CreatePanelWizard} />
      <Route path="/connections/" component={DataConnections} />
    </>
  );
}

export default App;
