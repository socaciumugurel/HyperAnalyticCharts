import { Serie } from "@nivo/line";

export const processLineChartData = function (data: any[], chartMetadata: any) {
  const xColumn = chartMetadata.xColumn ? chartMetadata.xColumn : "eyeColor";
  const yColumn = chartMetadata.yColumn ? chartMetadata.yColumn : "balance";
  const groupCriteia = chartMetadata.groupCriteria
    ? chartMetadata.groupCriteria
    : "gender";

  var myModel = {} as any;
  data.forEach((entity: any) => {
    if (!myModel[entity[groupCriteia]]) {
      myModel[entity[groupCriteia]] = {};
    }

    if (!myModel[entity[groupCriteia]][entity[xColumn]]) {
      myModel[entity[groupCriteia]][entity[xColumn]] = 0;
    }
    myModel[entity[groupCriteia]][entity[xColumn]] += entity[yColumn];
  });
  var result: Serie[] = [];
  for (const group in myModel) {
    var data = [];
    for (const property in myModel[group]) {
      data.push({ x: property, y: myModel[group][property] });
    }
    result.push({ id: group, data: data });
  }

  return result;
};
