import React from 'react';
import ProgressChart from './ProgressChart';

const MedicalConstByProvider = () => {
    return (<div className="container-fluid">
        
        <div className="row gridRow" style={{marginBottom:'10px'}}>
            <div className="col-md-2 col-sm-4 col-xs-4">Provider ID</div>
            <div className="col-md-2 col-sm-2 col-xs-2">Provider Name</div>
            <div className="col-md-2 col-sm-1 col-xs-1">SAR 0.00</div>
            <div className="col-md-1 col-sm-1 col-xs-1">0</div>
            <div className="col-md-1 col-sm-1 col-xs-1" style={{textAlign:"right",color:'#0079c8'}}>9</div>
            <div className="col-md-4 col-sm-4 col-xs-4">
                <ProgressChart value="30"></ProgressChart>
            </div>
        </div>
       
    </div>);
}

export default MedicalConstByProvider;