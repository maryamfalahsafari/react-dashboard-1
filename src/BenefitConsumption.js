import React from 'react';
import Chart from './chart';
import './benefitConsumption.css';

const BenefitConsumption = () => {
    let pieChart = {
        chart: {
            renderTo: 'chart1',
            type: 'pie',
            height: 170,
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
            size: '90%',
            innerSize: '80%',
            showInLegend: false,

        }]
    };
    return (
        <div className="benefit-consumption">
            <Chart options={pieChart} />
            <div className="content">
                <p className="lbl"> Amount Consumed</p>
                <p className="txt"> SAR 120,000</p>
            </div>
        </div>
    );
}

export default BenefitConsumption;