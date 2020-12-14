import React from "react";
import { Select, Button, Slider } from "antd";
import { connect } from "react-redux";
import { processPieChartData } from "../../charts/pieChart/dataProcessor";
import { ChartType } from "../../charts/charts";
import { processLineChartData } from "../../charts/lineChart/dataProcessor";
import { processBarChartData } from "../../charts/barChart/dataProcessor";
import { PieChartConfigurator } from "../../charts/pieChart/configurator";
import { LineCanvas } from "@nivo/line";
import { LineChart } from "../../charts/lineChart/component";
import { BarChart } from "../../charts/barChart/component";

export class ChartConfigurator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedType: "",
      tableMetadata: [{ title: "a" }, { title: "b" }, { title: "c" }],
      chartMetadata: {},
      processedData: [],
    };
  }

  getConfigurations(chartType: string) {
    switch (chartType) {
      case ChartType.LineChart:
        return (
          <div>
            {this.selectAxis("Select data for X", "xColumn")}
            {this.selectAxis("Select data for Y", "yColumn")}
            {this.selectAxis("Select grouping criteria", "groupCriteria")}
          </div>
        );
      case ChartType.PieChart:
        return (
          <div>
            {this.selectAxis("Select data for X", "xColumn")}
            {this.selectAxis("Select data for Y", "yColumn")}
          </div>
        );
      case ChartType.BarChart:
        return (
          <div>
            {this.selectAxis("Select data for X", "xColumn")}
            {this.selectAxis("Select data for Y", "yColumn")}
          </div>
        );
    }
  }

  getConfigurator(chartType: string, series: any) {
    switch (chartType) {
      case ChartType.PieChart:
        return <PieChartConfigurator series={series} />;
      case ChartType.LineChart:
        return <LineChart series={series} />;
      case ChartType.BarChart:
        return <BarChart series={series} />;
    }
  }

  render() {
    const { Option } = Select;

    return (
      <div>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select chart type"
          optionFilterProp="children"
          onChange={(chartType: string) => {
            var series = processData(
              chartType,
              this.props.data,
              this.state.chartMetadata
            );
            this.setState({ processedData: series });
            this.setState({ selectedType: chartType });
          }}
          // onFocus={onFocus}
          // onBlur={onBlur}
          // onSearch={onSearch}
          filterOption={(input, option: any) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          <Option key="1" value={ChartType.BarChart}>
            Bar
          </Option>
          <Option key="2" value={ChartType.LineChart}>
            Line
          </Option>
          <Option key="3" value={ChartType.PieChart}>
            Pie
          </Option>
        </Select>
        <Button
          type="primary"
          size={"default"}
          onClick={() => {
            {
              var series = processData(
                this.state.selectedType,
                this.props.data,
                this.state.chartMetadata
              );
              this.setState({ processedData: series });
            }
          }}
        >
          Refresh Chart
        </Button>
        <div> {this.getConfigurations(this.state.selectedType)}</div>
        <div>
          {this.getConfigurator(
            this.state.selectedType,
            this.state.processedData
          )}
        </div>
      </div>
    );
  }
  selectAxis(placeHolder: any, axis: any) {
    const { Option } = Select;
    return (
      <Select
        showSearch
        style={{ width: 300 }}
        placeholder={placeHolder}
        optionFilterProp="children"
        onChange={(value: string) => {
          this.setState((prevState: any) => {
            let chartMetadata = Object.assign({}, prevState.chartMetadata);
            chartMetadata[axis] = value;
            return { chartMetadata };
          });
        }}
        filterOption={(input, option: any) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {this.props.columns.map((column: any) => (
          <Option key={column.title} value={column.title}>
            {column.title}
          </Option>
        ))}
      </Select>
    );
  }
}

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

const ChartConfiguratorContainer = connect(mapStateToProps)(ChartConfigurator);

export default ChartConfiguratorContainer;
