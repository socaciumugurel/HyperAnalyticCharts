import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const dummyData = [
  {
    name: "First",
    data: [1, 2, 3]
  },
  {
    name: "Second",
    data: [1, 2, 3]
  }
];

export class BarChart extends React.Component<any, any> {
  render() {
    const options: Highcharts.Options = {
      chart: {
        type: "column"
      },
      title: {
        text: "Monthly Average Rainfall"
      },
      subtitle: {
        text: "Source: WorldClimate.com"
      },
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: "Rainfall (mm)"
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      }
    };
    options.series = this.props.series == null ? dummyData : this.props.series;

    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}
