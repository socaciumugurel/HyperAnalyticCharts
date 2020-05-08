import React from "react";
import Highcharts, { SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";

const dummyData = [
  {
    name: "First",
    y: 50.0,
    sliced: true,
    selected: true
  },
  {
    name: "Second",
    y: 50.0
  }
];

export class PieChart extends React.Component<any, any> {
  render() {
    const options: Highcharts.Options = {
      chart: {
        type: "pie"
      },
      title: {
        text: "Browser market shares in January, 2018"
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %"
          }
        }
      }
    };
    options.series = [
      {
        name: "Brands",
        colorByPoint: true,
        data: this.props.series ? this.props.series : dummyData
      }
    ] as SeriesOptionsType[];

    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}
