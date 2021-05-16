import React, { useState } from "react";
import { Select, Button } from "antd";
import { connect } from "react-redux";
import { processPieChartData } from "../charts/pieChart/dataProcessor";
import { ChartType } from "../charts/charts";
import { processBarChartData } from "../charts/barChart/dataProcessor";
import { processLineChartData } from "../charts/lineChart/dataProcessor";
import LineChartConfigurator from "../charts/lineChart/component";
import PieChartConfigurator from "../charts/pieChart/component";
import BarChartConfigurator from "../charts/barChart/component";

const ChartConfigurator = (props: any) => {
  const [selectedChartType, setSelectedChartType] = useState("");
  const [tableMetadata, setTableMetadata] = useState([
    { title: "a" },
    { title: "b" },
    { title: "c" },
  ]);
  const [chartMetadata, setChartMetadata] = useState({});
  const [processedData, setProcessedData] = useState([] as any);
  const { data } = props;

  const { Option } = Select;

  const getConfigurations = (chartType: string) => {
    switch (chartType) {
      case ChartType.LineChart:
        return (
          <div>
            {selectAxis("Select data for X", "xColumn")}
            {selectAxis("Select data for Y", "yColumn")}
            {selectAxis("Select grouping criteria", "groupCriteria")}
          </div>
        );
      case ChartType.PieChart:
        return (
          <div>
            {selectAxis("Select data for X", "xColumn")}
            {selectAxis("Select data for Y", "yColumn")}
          </div>
        );
      case ChartType.BarChart:
        return (
          <div>
            {selectAxis("Select data for X", "xColumn")}
            {selectAxis("Select data for Y", "yColumn")}
          </div>
        );
    }
  };

  const getConfigurator = (chartType: string, series: any) => {
    switch (chartType) {
      case ChartType.PieChart:
        return <PieChartConfigurator series={series} />;
      case ChartType.LineChart:
        return <LineChartConfigurator series={series} />;
      case ChartType.BarChart:
        return <BarChartConfigurator series={series} />;
    }
  };

  const selectAxis = (placeHolder: any, axis: string) => {
    return (
      <Select
        showSearch
        style={{ width: 300 }}
        placeholder={placeHolder}
        optionFilterProp="children"
        onChange={(value: string) => {
          var chartMetadataCopy: any = { ...chartMetadata };
          chartMetadataCopy[axis] = value;
          setChartMetadata(chartMetadataCopy);
        }}
        filterOption={(input, option: any) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {props.columns.map((column: any) => (
          <Option key={column.title} value={column.title}>
            {column.title}
          </Option>
        ))}
      </Select>
    );
  };

  return (
    <div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select chart type"
        optionFilterProp="children"
        onChange={(chartType: string) => {
          var series = processData(chartType, data, chartMetadata);
          setProcessedData(series);
          setSelectedChartType(chartType);
        }}
        // onFocus={onFocus}
        // onBlur={onBlur}
        // onSearch={onSearch}
        filterOption={(input, option: any) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option key={ChartType.BarChart} value={ChartType.BarChart}>
          Bar
        </Option>
        <Option key={ChartType.LineChart} value={ChartType.LineChart}>
          Line
        </Option>
        <Option key={ChartType.PieChart} value={ChartType.PieChart}>
          Pie
        </Option>
      </Select>
      <Button
        type="primary"
        size={"middle"}
        onClick={() => {
          {
            var series = processData(selectedChartType, data, chartMetadata);
            setProcessedData(series);
          }
        }}
      >
        Refresh Chart
      </Button>
      <div> {getConfigurations(selectedChartType)}</div>
      <div>{getConfigurator(selectedChartType, processedData)}</div>
    </div>
  );
};

const processData = function (
  chartType: string,
  data: any[],
  chartMetadata: any
) {
  switch (chartType) {
    case ChartType.PieChart:
      return processPieChartData(
        data,
        chartMetadata.xColumn,
        chartMetadata.yColumn
      );
    case ChartType.LineChart:
      return processLineChartData(data, chartMetadata);
    case ChartType.BarChart:
      return processBarChartData(data);
    default:
      break;
  }
};

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    data: state.dynamicTable.data,
    columns: state.dynamicTable.columns,
  };
};

export default connect(mapStateToProps)(ChartConfigurator);
