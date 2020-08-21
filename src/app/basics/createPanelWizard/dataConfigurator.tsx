import React from "react";
import { Table } from "antd";
import Search from "antd/lib/input/Search";
import { ColumnProps } from "antd/lib/table";
import { connect } from "react-redux";
import { saveData } from "../createPanelWizard/actions";
import { DynamicTableData } from "./models";

interface ConnectionSettings {
  url: string;
}

export class DataConfigurator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { displayTable: false };
  }

  getColumns(data: any) {
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
  getDataPromise(connectionSettings: ConnectionSettings) {
    return fetch(connectionSettings.url, {});
  }

  render() {
    return (
      <div>
        <Search
          defaultValue="http://my-json-server.typicode.com/socaciumugurel/mockData/people"
          placeholder="API Connection URL"
          enterButton="Get data"
          size="large"
          style={{ width: "50%", float: "right" }}
          onSearch={(value: any) => {
            this.getDataPromise({ url: "/mockData/people.json" })
              .then((res) => res.json())
              .then(
                (data) => {
                  const columns = this.getColumns(data);
                  this.props.saveData({ columns, data });
                },
                (error) => {}
              )
              .then(() => this.setState({ displayTable: true }));
          }}
        />
        <br />
        <br />
        {this.state.displayTable ? (
          <Table
            style={{ paddingTop: 50 }}
            columns={this.props.columns as ColumnProps<any>[]}
            dataSource={this.props.data}
            scroll={{ x: 1500, y: 300 }}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    data: state.dynamicTable.data,
    columns: state.dynamicTable.columns,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    saveData: (value: DynamicTableData) => dispatch(saveData(value)),
  };
};

const DataConfiguratorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataConfigurator);

export default DataConfiguratorContainer;
