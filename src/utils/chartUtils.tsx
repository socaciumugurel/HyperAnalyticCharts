import { BarChart } from "../components/charts/barChart/component";
import { TreeMap } from "../components/charts/treeMap/component";
import { ResponsiveLine } from "@nivo/line";
import { defaultPieChartConfig } from "../components/charts/pieChart/component";
import { defaultBarChartConfig } from "../components/charts/barChart/configurator";
import { defaultLineChartConfig } from "../components/charts/lineChart/component";
import { AddNew } from "../components/addNew/component";
import React from "react";
import { ChartType } from "../components/charts/charts";
import { ResponsivePie } from "@nivo/pie";

export const getComponent = (
  chartType: string,
  series: any,
  toggleCreatePanelWizard: any
) => {
  let component = {};
  switch (chartType) {
    case ChartType.LineChart:
      component = <ResponsiveLine {...defaultLineChartConfig} data={series} />;
      break;
    case ChartType.PieChart:
      component = <ResponsivePie {...defaultPieChartConfig} data={series} />;
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
