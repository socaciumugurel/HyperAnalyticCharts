import React from "react";
import { ResponsivePie, PieSvgProps } from "@nivo/pie";

export class PieChart extends React.Component<PieSvgProps, any> {
  render() {
    return <ResponsivePie {...this.props} />;
  }
}
