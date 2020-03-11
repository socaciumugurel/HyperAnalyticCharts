import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import Search from "antd/lib/input/Search";
import { ColumnProps } from "antd/lib/table";
import { connect } from "react-redux";
import { saveData } from "./actions";

interface ConnectionSettings {
  url: string;
}

export class DataConfigurator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { displayTable: false, columns: [] };
  }

  getColumns(data: any) {
    const uniqueKeys = Object.keys(
      data.reduce(function(acumulator: any, obj: any) {
        return Object.assign(acumulator, obj);
      }, {})
    );

    return uniqueKeys.map(key => {
      return {
        title: key,
        width: 100,
        dataIndex: key,
        key: key
      };
    });
  }
  getDataPromise(connectionSettings: ConnectionSettings) {
    return fetch(connectionSettings.url, {});
  }

  render() {
    return (
      <div className="dataSourcePanel">
        <Search
          defaultValue="http://my-json-server.typicode.com/socaciumugurel/mockData/people"
          placeholder="API Connection URL"
          enterButton="Get data"
          size="large"
          onSearch={(value: any) => {
            this.getDataPromise({ url: value })
              .then(res => res.json())
              .then(
                data => {
                  const columns = this.getColumns(data);
                  this.props.saveData(columns, data);
                  this.setState({ columns, data });
                },
                error => {}
              )
              .then(() => this.setState({ displayTable: true }));
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

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    saveData
  };
};

const DataConfiguratorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataConfigurator);

export default DataConfiguratorContainer;
