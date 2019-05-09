import React from 'react';
import Chart from './chart';
import './medicalConst.css';

const MedicalConst = () => {
    let pieChart = {
        chart: {
            renderTo: 'pieChart',
            type: 'pie',
            height: 250,
            margin: [0, 0, 0, 0]
        },
        colors: ['#A4219B', '#008385', '#e60e68', '#ed7102', '#333333'],
        title: {
            margin: 0,
            text: ''
        },
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
            data: [["A", 6], ["B", 4], ["C", 7], ["D", 10], ["E", 11]],
            size: '90%',
            innerSize: '70%',
            showInLegend: false,

        }]
    };
    return (<div className="container-fluid medical-const" style={{ paddingTop: '10px' }}>
        <div className="row">
            <div className="col-md-12">Medical Cost</div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <p className="lbl" style={{ marginTop: '10px', marginBottom: '2px' }}>Member No</p>
                <select style={{ width: '90%' }}></select>
            </div>
        </div>
        <div className="row">
            <div id="pieChart" className="col-md-12" style={{ position: 'relative' }}>
                <Chart options={pieChart} />
                <div style={{ minHeight: '20px', position: 'absolute', top: '40%', left: '30%' }}>
                    <p className="lbl"> Amount Consumed</p>
                    <p className="txt"> SAR 120,000</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12" >
                <p className="lbl" style={{ textAlign: 'center' }}>Overall Limit</p>
                <p className="txt" style={{ textAlign: 'center' }}>SAR 500,000</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <p className="lbl" style={{ textAlign: 'center' }}>Remaining Limit</p>
                <p className="txt" style={{ textAlign: 'center' }}>SAR 380,000</p>
            </div>
        </div>
    </div>);
}

export default MedicalConst;