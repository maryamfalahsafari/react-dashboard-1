import React from 'react';
import ProgressChart from './ProgressChart';
import './claimServiceTypeConsumption.css';

const ClaimServiceTypeConsumption = () => {
    return (<div className="container-fluid">

        <div className="row gridRow" style={{ marginBottom: '10px' }}>
            <div className="col-md-3 col-sm-3 col-xs-12">Service Type</div>
            <div className="col-md-3 col-sm-3 col-xs-12" style={{ textAlign: "right", color: '#0079c8' }}>9</div>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <ProgressChart value="30"></ProgressChart>
            </div>
        </div>

    </div>);
}

export default ClaimServiceTypeConsumption;