import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
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

  getData(connectionSettings: ConnectionSettings) {
    let data: any[] = [];

    fetch(connectionSettings.url, {})
      .then(res => res.json())
      .then(
        result => {
          data = result;
          const uniqueKeys = Object.keys(
            data.reduce(function(result, obj) {
              return Object.assign(result, obj);
            }, {})
          );

          const columns = uniqueKeys.map(key => {
            return {
              title: key,
              width: 100,
              dataIndex: key,
              key: key
            };
          });

          this.props.saveData({ columns, data });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {}
      );

    return data;
  }

  renderTable(data: any) {
    this.setState({
      data: data,
      columns: this.props.columns,
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
            this.getData({
              url:
                "http://my-json-server.typicode.com/socaciumugurel/mockData/people"
            });
            this.renderTable(this.props.data);
          }}
        />
        <br />
        <br />
        {this.state.displayTable ? (
          <Table
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
    columns: state.dynamicTable.columns
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    saveData: (value: DynamicTableData) => dispatch(saveData(value))
  };
};

const DataConfiguratorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataConfigurator);

export default DataConfiguratorContainer;
