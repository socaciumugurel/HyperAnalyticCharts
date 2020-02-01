import React from "react";
import Highcharts, { SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";

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
        data: this.props.series
      }
    ] as SeriesOptionsType[];
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}
