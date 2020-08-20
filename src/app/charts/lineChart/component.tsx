import React from "react";
import Highcharts, { SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";

const dummyData = [
  {
    name: "First",
    data: [1, 2, 3],
  },
  {
    name: "Second",
    data: [1, 2, 3],
  },
];

export class LineChart extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      series: [],
    };
  }

  render() {
    const options: Highcharts.Options = {
      title: {
        text: "My chart",
      },
      subtitle: {
        text: "My chart subtitle",
      },
      yAxis: {
        title: {
          text: "Number of Employees",
        },
      },
      xAxis: {},
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
      },
      series: this.props.series as SeriesOptionsType[],
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
        },
      },

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
    };

    options.series = this.props.series == null ? dummyData : this.props.series;

    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}
