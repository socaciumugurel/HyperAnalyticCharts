import React from "react";
import { Icon } from "antd";

export class AddNew extends React.Component<any> {
  render() {
    return (
      <div
        className="add-new-icon"
        onClick={this.props.toggleCreatePanelWizard(true)}
      >
        <Icon
          type="plus-circle"
          style={{
            fontSize: "100px",
            color: "#bbbbbb"
          }}
        ></Icon>
      </div>
    );
  }
}
