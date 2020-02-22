import { LineChart } from "./charts/lineChart/component";

import { PieChart } from "./charts/pieChart/component";

import { BarChart } from "./charts/barChart/component";

import { TreeMap } from "./charts/treeMap/component";

import { AddNew } from "./basics/addNew/component";

import React from "react";

export const getComponent = (
  chartType: string,
  series: any,
  toggleCreatePanelWizard: any
) => {
  let component = {};
  switch (chartType) {
    case "lineChart":
      component = <LineChart series={series} />;
      break;
    case "pieChart":
      component = <PieChart series={series} />;
      break;
    case "barChart":
      component = <BarChart series={series} />;
      break;
    case "treeMap":
      component = <TreeMap />;
      break;
    case "AddNew":
      component = (
        <AddNew toggleCreatePanelWizard={() => toggleCreatePanelWizard} />
      );
      break;
    default:
      component = <div>"Nada"</div>;
  }
  return component;
};
