import React from "react";
import { getComponent } from "../../utils";
import { Select, Button } from "antd";
import { connect } from "react-redux";
import { ResponsivePie } from "@nivo/pie";

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
      case "lineChart":
        return (
          <div>
            {this.selectAxis("Select data for X", "xColumn")}
            {this.selectAxis("Select data for Y", "yColumn")}
          </div>
        );
      case "pieChart":
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
            debugger;
            console.log(value);
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
          <Option key="1" value="barChart">
            Bar
          </Option>
          <Option key="2" value="lineChart">
            Line
          </Option>
          <Option key="3" value="pieChart">
            Pie
          </Option>
        </Select>
        <Button
          type="primary"
          size={"default"}
          onClick={() => {
            {
              var series = processData(
                this.props.data,
                this.state.chartMetadata.xColumn,
                this.state.chartMetadata.yColumn
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

const processData = function (data: any[], xColumn: string, yColumn: string) {
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
  debugger;
  return result;
};

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    data: state.dynamicTable.data,
    columns: state.dynamicTable.columns,
  };
};

const ChartConfiguratorContainer = connect(mapStateToProps)(ChartConfigurator);

export default ChartConfiguratorContainer;
