import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Select, Button } from "antd";
import { loadConnections } from "../../redux/actions/dataConnectionActions";
import { loadData } from "../createPanelWizard/actions";
import { connect } from "react-redux";
import { DataConnection } from "./DataConnection";
import Table, { ColumnProps } from "antd/lib/table";

const DataConnections = (props: any) => {
  const { Option } = Select;
  const { connections } = props;
  const [selectedConnectionId, setSelectedConnectionId] = useState<string>();
  const [displayTable, setDisplayTable] = useState(false);

  useEffect(() => {
    if (connections.length === 0) {
      props.loadConnections("http://localhost:3001/connections");
    }
  });
  const handleChange = (connectionUrl: string) => {
    setSelectedConnectionId(connectionUrl);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    const connectionUrl = connections.find((con: DataConnection) => {
      return con.id === selectedConnectionId;
    }).url;
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
        size={"default"}
        style={{ marginLeft: 10 }}
        onClick={handleClick}
      >
        Load Data
      </Button>
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
