import React from "react";
import { ResponsiveBar, BarSvgProps } from "@nivo/bar";

export class BarChart extends React.Component<BarSvgProps, any> {
  render() {
    return <ResponsiveBar {...this.props} />;
  }
}
