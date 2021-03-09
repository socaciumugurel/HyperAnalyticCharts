import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";

export class AddNew extends React.Component<any> {
  render() {
    return (
      <div
        className="add-new-icon"
        onClick={this.props.toggleCreatePanelWizard(true)}
      >
        <PlusCircleOutlined
          style={{
            fontSize: "100px",
            color: "#bbbbbb",
          }}
        />
      </div>
    );
  }
}
