export function getColumns(data: any) {
  const uniqueKeys = Object.keys(
    data.reduce(function (acumulator: any, obj: any) {
      return Object.assign(acumulator, obj);
    }, {})
  );

  return uniqueKeys.map((key) => {
    return {
      title: key,
      width: 100,
      dataIndex: key,
      key: key,
    };
  });
}
