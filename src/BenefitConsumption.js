import React from 'react';
import Chart from './chart';
import './benefitConsumption.css';

const BenefitConsumption = () => {
    let pieChart = {
        chart: {
            renderTo: 'chart1',
            type: 'pie',
            height: 150,
            margin: [0, 0, 0, 0]
        },
        colors: ['#0079c8', '#dbf1fa'],
        title: {
            margin: 0,
            text: ''
        },
        credits: {
            enabled: false
          }
    ,
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                }
            }
        },

        series: [{
            name: 'Browsers',
            data: [["A", 6], ["B", 4]],
            size: '80%',
            innerSize: '80%',
            showInLegend: false,

        }]
    };
    return (
        <div id="chart1" className="benefit-consumption">
            <Chart options={pieChart} />
            {/* <div style={{ minHeight: '20px', position: 'absolute', top: '40%', left: '30%' }}>
                <p className="lbl"> Amount Consumed</p>
                <p className="txt"> SAR 120,000</p>
            </div> */}
        </div>
    );
}

export default BenefitConsumption;