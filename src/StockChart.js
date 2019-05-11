import React, { Component } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';
import HC_More from 'highcharts/highcharts-more';
if (typeof Highcharts === 'object') {
    HC_More(Highcharts)
}


class StockChart extends Component {
    render() {

        return (<HighchartsReact
            highcharts={Highcharts}
            constructorType={'stockChart'}
            options={this.props.options}
        />);
    }
}

export default StockChart;