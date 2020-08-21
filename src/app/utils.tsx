import { LineChart } from "./charts/lineChart/component";

import { PieChart } from "./charts/pieChart/component";

import { BarChart } from "./charts/barChart/component";

import { TreeMap } from "./charts/treeMap/component";

import { AddNew } from "./basics/addNew/component";

import React from "react";
import { ChartType } from "./charts/charts";

export const getComponent = (
  chartType: string,
  series: any,
  toggleCreatePanelWizard: any
) => {
  let component = {};
  switch (chartType) {
    case ChartType.LineChart:
      component = <LineChart series={series} />;
      break;
    case ChartType.PieChart:
      component = <PieChart series={series} />;
      break;
    case ChartType.BarChart:
      component = <BarChart series={series} />;
      break;
    case ChartType.TreeMap:
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
