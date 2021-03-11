import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Button, Layout, Select } from "antd";
import {
  loadConnections,
  saveConnection,
  deleteConnection,
} from "../../redux/actions/dataConnectionActions";
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
  const newConnection: DataConnection = {
    id: "",
    description: "",
    name: "",
    url: "",
  };

  useEffect(() => {
    if (connections.length === 0) {
      props.loadConnections();
    }
  }, []);

  const handleChange = (connectionId: string) => {
    var connectionDetails = connections.find(
      (con: DataConnection) => con.id === connectionId
    );
    setConnectionDetails({ ...connectionDetails });
  };

  const handleLoadData = (url: string) => {
    props.loadData(url).then(() => setDisplayTable(true));
  };

  const handleFormSubmit = (fields: any) => {
    const connection = { ...connectionDetails, ...fields };
    props
      .saveConnection(connection)
      .then(() => setConnectionDetails(newConnection));
  };

  const handleCreate = () => {
    setConnectionDetails(newConnection);
  };

  const handleDelete = () => {
    if (!connectionDetails) {
      return;
    }
    props.deleteConnection(connectionDetails).then(() => {
      setConnectionDetails(undefined);
      setDisplayTable(false);
    });
  };

  return (
    <div style={{ paddingLeft: 30, paddingTop: 30 }}>
      <Select
        showSearch
        value={connectionDetails?.id}
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

      <Button type="primary" style={{ marginLeft: 10 }} onClick={handleCreate}>
        New Connection
      </Button>
      <Button
        danger
        type="primary"
        style={{ marginLeft: 10 }}
        onClick={handleDelete}
      >
        Delete Connection
      </Button>
      <br />
      <br />
      {connectionDetails ? (
        <DataConnectionForm
          dataConnection={connectionDetails}
          onSubmit={handleFormSubmit}
          onLoadData={handleLoadData}
        />
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
  saveConnection,
  deleteConnection,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataConnections);
