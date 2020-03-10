import React from "react";
import { getComponent } from "../../utils";
import { Select } from "antd";

export class ChartConfigurator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedType: ""
    };
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
        {getComponent(this.state.selectedType, null, null)}
      </div>
    );
  }
}
