import React from 'react';
import ProgressChart from './ProgressChart';

const ClaimServiceTypeConsumption = () => {
    return (<div className="container-fluid">

        <div className="row gridRow" style={{ marginBottom: '10px' }}>
            <div className="col-md-3 col-sm-3 col-xs-3">Service Type</div>
            <div className="col-md-3 col-sm-3 col-xs-3" style={{ textAlign: "right", color: '#0079c8' }}>9</div>
            <div className="col-md-6 col-sm-6 col-xs-6">
                <ProgressChart value="30"></ProgressChart>
            </div>
        </div>

    </div>);
}

export default ClaimServiceTypeConsumption;