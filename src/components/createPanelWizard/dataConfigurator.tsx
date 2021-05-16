import React from "react";
import { Table } from "antd";
import Search from "antd/lib/input/Search";
import { ColumnProps } from "antd/lib/table";
import { connect } from "react-redux";
import { loadData } from "../../redux/actions/createPanelActions";

interface ConnectionSettings {
  url: string;
}

export class DataConfigurator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { displayTable: false };
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
            this.props
              .loadData("/mockData/people.json")
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
            scroll={{ x: 1500, y: 600 }}
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

const mapDispatchToProps = {
  loadData,
};

const DataConfiguratorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataConfigurator);

export default DataConfiguratorContainer;
