import { Button, Form, Input, Select } from "antd";
import { url } from "inspector";
import React, { useState } from "react";
import { DataConnection } from "./DataConnection";

const DataConnectionForm = (props: { dataConnection: DataConnection }) => {
  const { dataConnection } = props;
  const { Option } = Select;
  const { TextArea } = Input;
  const defaultHttpSchema = "http://";

  const [httpSchema, setHttpSchema] = useState(defaultHttpSchema);

  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 },
  };

  const handleHttpSchemaCange = (newSchema: string) => {
    setHttpSchema(newSchema);
  };

  const selectBefore = (
    <Select
      defaultValue={defaultHttpSchema}
      className="select-before"
      onChange={handleHttpSchemaCange}
    >
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  return (
    <Form
      {...layout}
      name="connectionForm"
      initialValues={dataConnection}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Connection name is required!",
          },
        ]}
      >
        <Input placeholder="Add a name for your connection" />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <TextArea
          placeholder="Add a name for your connection. Optional"
          autoSize
        />
      </Form.Item>

      <Form.Item
        {...layout}
        label="URL"
        name="url"
        initialValue={(value: string) => value.slice(4)}
        rules={[{ required: true, message: "Please provide a valid URL!" }]}
      >
        <Input placeholder="Add a valid URL" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 2, span: 12 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DataConnectionForm;
