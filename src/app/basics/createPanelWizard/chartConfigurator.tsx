import React from "react";
import { getComponent } from "../../utils";
import { Select } from "antd";
export class ChartConfigurator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedType: "",
      tableMetadata: [{ title: "a" }, { title: "b" }, { title: "c" }],
      chartMetadata: {}
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
          onChange={(value: string) => this.setState({ selectedType: value })}
          // onFocus={onFocus}
          // onBlur={onBlur}
          // onSearch={onSearch}
          filterOption={(input, option: any) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          <Option value="barChart">Bar</Option>
          <Option value="lineChart">Line</Option>
          <Option value="pieChart">Pie</Option>
        </Select>
        {this.getConfigurations(this.state.selectedType)}
        {getComponent(this.state.selectedType, null, null)}
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
        {this.state.tableMetadata.map((column: any) => (
          <Option value={column.title}>{column.title}</Option>
        ))}
      </Select>
    );
  }
}
