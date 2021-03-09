import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Select, Button } from "antd";
import { loadConnections } from "../../redux/actions/dataConnectionActions";
import { loadData } from "../../redux/actions/createPanelActions";
import { connect } from "react-redux";
import { DataConnection } from "../../models/DataConnection";
import Table, { ColumnProps } from "antd/lib/table";
import DataConnectionForm from "./DataConnectionForm";

const DataConnections = (props: any) => {
  const { Option } = Select;
  const { connections } = props;
  const [connectionDetails, setConnectionDetails] = useState<DataConnection>();
  const [displayTable, setDisplayTable] = useState(false);

  useEffect(() => {
    if (connections.length === 0) {
      props.loadConnections("http://localhost:3001/connections");
    }
  }, []);
  const handleChange = (connectionId: string) => {
    var connectionDetails = connections.find(
      (con: DataConnection) => con.id === connectionId
    );
    setConnectionDetails(connectionDetails);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    if (!connectionDetails) {
      return;
    }
    const connectionUrl = connectionDetails.url;
    props.loadData(connectionUrl).then(() => setDisplayTable(true));
  };

  return (
    <div style={{ paddingLeft: 30, paddingTop: 30 }}>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select data connection"
        optionFilterProp="children"
        onChange={handleChange}
        filterOption={(input, option: any) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {connections.map((con: DataConnection) => (
          <Option key={con.id} value={con.id}>
            {con.name}
          </Option>
        ))}
      </Select>
      <Button
        type="primary"
        size="middle"
        style={{ marginLeft: 10 }}
        onClick={handleClick}
      >
        Load Data
      </Button>
      <br />
      <br />
      {connectionDetails ? (
        <DataConnectionForm dataConnection={{ ...connectionDetails }} />
      ) : null}
      <br />
      <br />
      {displayTable ? (
        <Table
          style={{ paddingTop: 50 }}
          columns={props.columns as ColumnProps<any>[]}
          dataSource={props.data}
          scroll={{ x: 1500, y: 600 }}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    columns: state.dynamicTable.columns,
    connections: state.connections,
    data: state.dynamicTable.data,
  };
};

const mapDispatchToProps = {
  loadConnections,
  loadData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataConnections);
