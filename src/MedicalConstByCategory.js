import React from 'react';
import ProgressChart from './ProgressChart';
import './medicalConstByCategory.css'

const MedicalConstByCategory = () => {
    return (<div className="container-fluid">

        <div className="row gridRow" style={{ marginBottom: '10px' }}>
            <div className="col-md-2 col-sm-2 col-xs-12">Category</div>
            <div className="col-md-3 col-sm-3 col-xs-12" style={{ textAlign: "right", color: '#0079c8' }}>SAR 0.00</div>
            <div className="col-md-7 col-sm-7 col-xs-12">
                <ProgressChart value="30"></ProgressChart>
            </div>
        </div>

    </div>);
}

export default MedicalConstByCategory;