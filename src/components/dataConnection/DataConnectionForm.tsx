import { Button, Form, Input, Select } from "antd";
import { useForm } from "antd/lib/form/Form";

import React, { useEffect, useState } from "react";
import { DataConnection } from "../../models/DataConnection";

const DataConnectionForm = (props: {
  dataConnection: DataConnection;
  onSubmit: any;
  onLoadData: any;
}) => {
  const { TextArea } = Input;

  const [form] = useForm();
  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 },
  };

  useEffect(() => {
    form.setFieldsValue({ ...props.dataConnection });
  }, [props.dataConnection]);

  const handleOnFinish = () => {
    props.onSubmit(form.getFieldsValue());
  };

  const handleLoadData = () => {
    const url = form.getFieldValue("url");
    props.onLoadData(url);
  };

  return (
    <Form
      form={form}
      {...layout}
      name="connectionForm"
      onFinish={handleOnFinish}
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
          placeholder="Add a description for your connection. Optional"
          autoSize
        />
      </Form.Item>

      <Form.Item
        label="URL"
        name="url"
        rules={[{ required: true, message: "Please provide a valid URL!" }]}
      >
        <Input placeholder="Add a valid URL" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 2, span: 12 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
        <Button style={{ marginLeft: 10 }} onClick={handleLoadData}>
          Load Data
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DataConnectionForm;
