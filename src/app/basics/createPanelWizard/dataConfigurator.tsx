import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import Search from "antd/lib/input/Search";
import { ColumnProps } from "antd/lib/table";

interface ConnectionSettings {
  url: string;
}

export class DataConfigurator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { displayTable: false };
  }

  getData(_connectionSettings: ConnectionSettings) {
    //make api call
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`
      });
    }
    return data;
  }

  renderTable(data: any) {
    this.setState({
      data: data,
      columns: [
        {
          title: "Full Name",
          width: 100,
          dataIndex: "name",
          key: "name",
          fixed: "left",
          filters: [
            {
              text: "Edrward 4",
              value: "Edrward 4"
            },
            {
              text: "Edrward 5",
              value: "Edrward 5"
            }
          ],
          onFilter: (value: any, record: any) =>
            record.name.indexOf(value) === 0
        },
        {
          title: "Age",
          width: 100,
          dataIndex: "age",
          key: "age",
          fixed: "left",
          sorter: (a: any, b: any) => a.age - b.age
        },
        {
          title: "Column 1",
          dataIndex: "address",
          key: "1",
          width: 150
        },
        {
          title: "Column 2",
          dataIndex: "address",
          key: "2",
          width: 150
        },
        {
          title: "Column 3",
          dataIndex: "address",
          key: "3",
          width: 150
        },
        {
          title: "Column 4",
          dataIndex: "address",
          key: "4",
          width: 150
        },
        {
          title: "Column 5",
          dataIndex: "address",
          key: "5",
          width: 150
        },
        {
          title: "Column 6",
          dataIndex: "address",
          key: "6",
          width: 150
        },
        {
          title: "Column 7",
          dataIndex: "address",
          key: "7",
          width: 150
        },
        { title: "Column 8", dataIndex: "address", key: "8" },
        {
          title: "Action",
          key: "operation",
          fixed: "right",
          width: 100,
          render: () => <a>action</a>
        }
      ]
    });
    this.setState({
      displayTable: true
    });
  }

  render() {
    return (
      <div className="dataSourcePanel">
        <Search
          placeholder="API Connection URL"
          enterButton="Get data"
          size="large"
          onSearch={(value: any) => {
            var data = this.getData(value);
            this.renderTable(data);
          }}
        />
        <br />
        <br />
        {this.state.displayTable ? (
          <Table
            columns={this.state.columns as ColumnProps<any>[]}
            dataSource={this.state.data}
            scroll={{ x: 1500, y: 300 }}
          />
        ) : null}
      </div>
    );
  }
}
