export const processPieChartData = function (
  data: any[],
  xColumn: string,
  yColumn: string
) {
  var groupBy = function (data: any, key: string, key2: string) {
    return data.reduce(function (accumulator: any, item: any) {
      (accumulator[item[key]] = accumulator[item[key]] || {
        id: item[key],
        label: item[key],
        value: 0,
      }).value += item[key2];
      return accumulator;
    }, {});
  };
  const groupedData = groupBy(
    data,
    xColumn ? xColumn : "eyeColor",
    yColumn ? yColumn : "balance"
  );
  var result = Object.keys(groupedData).map(function (key) {
    return groupedData[key];
  });
  return result;
};
