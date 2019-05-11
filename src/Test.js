import React, { Component } from 'react';
import StockChart from './StockChart';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

class Test extends Component {

    constructor() {
        super();
        this.state = { data1: null, data2: null };
    }

    componentDidMount() {
        axios.get('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', {
            adapter: jsonpAdapter,

            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            responseType: 'json',
        }).then(data => {
            console.log('+++++++++++++++', data);
            let data1 = [];
            let data2 = [];
            for (var i = 0; i < data.data.length; ++i) {
                if (i % 2 == 0) {
                    data1.push(data.data[i]);
                } else {
                    data2.push(data.data[i]);
                }
            }
            this.setState({
                data1: data1,
                data2: data2
            });


        });

    }
    render() {
        let options = {

            chart: {
                renderTo: 'container',
                type: 'scatter',
                height: '500',
                width: '800'

            },
            xAxis: {
                // min: Date.UTC(2000, 9, 27),
                // max: Date.UTC(2020, 9, 27)
            },
            scrollbar: {
                enabled: true
            },
            navigator: {
                enabled: true
            },
            rangeSelector: {
                enabled: true
            },

            series: [{
                name: 'USD to EUR',
                marker: {
                    symbol: 'circle'
                },
                data: this.state.data1
            }, {
                name: 'USD to EUR',
                color: '#dddddd',
                marker: {
                    symbol: 'circle'
                },
                data: this.state.data2
            }]
        };

        return (
            <div id="chart1" className="benefit-consumption" >
                <StockChart options={options} />

            </div>
        );
    }
}

export default Test;