import React from "react";
import { getComponent } from "../../utils";
import { Select, Button } from "antd";
import { connect } from "react-redux";
import { processPieChartData } from "../../charts/pieChart/dataProcessor";
import { ChartType } from "../../charts/charts";
import { processLineChartData } from "../../charts/lineChart/dataProcessor";
import { processBarChartData } from "../../charts/barChart/dataProcessor";

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

  render() {
    const { Option } = Select;

    return (
      <div>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select chart type"
          optionFilterProp="children"
          onChange={(value: string) => {
            var series = processData(
              value,
              this.props.data,
              this.state.chartMetadata
            );
            this.setState({ processedData: series });
            this.setState({ selectedType: value });
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
        <div className="panel">
          {getComponent(
            this.state.selectedType,
            this.state.processedData,
            null
          )}
        </div>
        <div className="panel">---configurator---</div>
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
