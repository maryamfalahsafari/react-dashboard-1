import React from 'react';
import ProgressChart from './ProgressChart';
import './medicalConstByProvider.css';

const MedicalConstByProvider = () => {
    return (<div className="container-fluid">
        
        <div className="row gridRow" style={{marginBottom:'10px'}}>
            <div className="col-md-2 col-sm-2 col-xs-12">Provider ID</div>
            <div className="col-md-2 col-sm-2 col-xs-12">Provider Name</div>
            <div className="col-md-2 col-sm-2 col-xs-12">SAR 0.00</div>
            <div className="col-md-1 col-sm-1 col-xs-12">0</div>
            <div className="col-md-1 col-sm-1 col-xs-12" style={{textAlign:"right",color:'#0079c8'}}>9</div>
            <div className="col-md-4 col-sm-4 col-xs-12">
                <ProgressChart value="30"></ProgressChart>
            </div>
        </div>
       
    </div>);
}

export default MedicalConstByProvider;