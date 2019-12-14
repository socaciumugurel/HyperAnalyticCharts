import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
 
const options: Highcharts.Options = {
  title: {
      text: 'My chart'
  },
  series: [{
      type: 'line',
      data: [1, 2, 3,6,2,8,3,6,4,3,2,0]
  }]
}

export class BarChart extends React.Component<any, any> {
  render() {
    return <HighchartsReact 
    highcharts={Highcharts}
    options={options}
  />}
  }
