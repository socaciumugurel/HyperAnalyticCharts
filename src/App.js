import React from "react";
import "./App.less";
import "./styling/dashboard.css";
import "./styling/createPanelWizard.css";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

import DashboardContainer from "./app/basics/dashboard/container";

function App() {
  return <DashboardContainer />;
}

export default App;
