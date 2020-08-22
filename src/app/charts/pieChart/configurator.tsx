import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Slider } from "antd";
import { SliderValue } from "antd/lib/slider";
import { PieChart } from "./component";

export class PieChartConfigurator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      innerRadius: 0.5,
    };
  }

  handleInnerRadiusChange = (value: SliderValue) => {
    this.setState({ innerRadius: (value as number) / 1000 });
  };

  render() {
    return (
      <div>
        <div className="panel">
          <PieChart series={this.props.series} configurations={this.state} />
        </div>
        <div className="panel">
          <h4>innerRadius</h4>
          <Slider
            onChange={this.handleInnerRadiusChange}
            max={950}
            defaultValue={450}
          ></Slider>
        </div>
      </div>
    );
  }
}
