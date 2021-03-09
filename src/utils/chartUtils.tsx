import { LineChart } from "../components/charts/lineChart/component";

import { PieChart } from "../components/charts/pieChart/component";

import { BarChart } from "../components/charts/barChart/component";

import { TreeMap } from "../components/charts/treeMap/component";

import { AddNew } from "../components/addNew/component";

import React from "react";
import { ChartType } from "../components/charts/charts";
import { defaultPieChartConfig } from "../components/charts/pieChart/configurator";
import { defaultBarChartConfig } from "../components/charts/barChart/configurator";

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
      const config = defaultPieChartConfig;
      component = <PieChart {...config} data={series} />;
      break;
    case ChartType.BarChart:
      component = <BarChart {...defaultBarChartConfig} data={series} />;
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
